import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import type { Notice } from "./fetch.ts";

const Bi = z.object({ th: z.string(), en: z.string() });

export const PatchSummary = z.object({
  kind: z.enum(["major", "hotfix", "maintenance", "event", "other"]),
  headline: Bi.describe("Short title, max ~70 characters each"),
  summary: Bi.describe("2-4 sentences: what changed and why it matters"),
  highlights: z
    .array(
      z.object({
        tag: z.enum([
          "new_content",
          "class",
          "progression",
          "life_skill",
          "crafting",
          "sailing",
          "economy",
          "event",
          "qol",
          "removal",
          "bugfix",
          "other",
        ]),
        text: Bi,
      }),
    )
    .describe("Up to 8 most important changes, most important first"),
  f2p_impact: Bi.describe("What a free-to-play / new player on a 200 THB budget should do or know"),
  calculator_impacts: z
    .array(
      z.object({
        calculator: z.enum(["market", "enhance", "bracket", "spots", "grind", "energy"]),
        note: Bi,
      }),
    )
    .describe("Only changes that alter numbers used by these calculators; empty if none"),
  dates: z
    .array(z.object({ date: z.string().describe("YYYY-MM-DD"), text: Bi }))
    .describe("Event end dates, resets, conversions explicitly stated in the notice"),
  confidence: z.enum(["high", "medium", "low"]),
});
export type PatchSummary = z.infer<typeof PatchSummary>;

const REGION_NOTE: Record<Notice["region"], string> = {
  asia: "This is the official ASIA (TH/SEA) server notice. It applies to Thai players now.",
  kr: "This is the KOREA server notice, written in Korean. Korea usually receives patches before Asia. Treat it as a preview for Thai players, not as live on Asia.",
  gl: "This is the GLOBAL LAB (public test server) notice, often in Korean. Content here is experimental and may change or never ship. Treat it as an unconfirmed spoiler.",
};

// Frozen system prompt: kept byte-identical across runs so it can be cached.
const SYSTEM = `You summarize official Black Desert (PC) patch notes for Northern-east heroic, a Thai fan site for free-to-play and new players on the Asia server.

Rules:
- Use only facts stated in the notice. Never invent numbers, dates, item names or release dates. If the Asia arrival date of a Korea or Global Lab change is not stated, do not guess it.
- Write every bilingual field in natural Thai ("th") and plain English ("en"). Keep official in-game names in English inside the Thai text when no Thai name is given in the notice.
- Prioritise what matters to free-to-play and new players: free gear, progression paths, life skills, crafting, sailing, economy, events with rewards, removed quests, and anything that changes market tax, enhancement chances, AP/DP brackets, grind spots, silver per hour or energy.
- Skip cosmetic bug fixes and class balance details unless they are large; mention class changes in one highlight at most.
- calculator_impacts must be empty unless the notice changes a number those calculators use.
- Set confidence to "low" when the notice is truncated, ambiguous, or mostly about another topic.
- Do not use em dashes.`;

export async function summarize(client: Anthropic, notice: Notice): Promise<{ summary: PatchSummary; model: string; usage: unknown }> {
  const response = await client.beta.messages.parse({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "medium", format: betaZodOutputFormat(PatchSummary) },
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    messages: [
      {
        role: "user",
        content: `${REGION_NOTE[notice.region]}\n\nTitle: ${notice.title}\nPublished: ${notice.published ?? "unknown"}\nURL: ${notice.url}\n\n<notice>\n${notice.text}\n</notice>`,
      },
    ],
  });

  if (response.stop_reason === "refusal") {
    throw new Error(`refused (${response.stop_details?.category ?? "unknown"})`);
  }
  if (response.stop_reason === "max_tokens") {
    throw new Error("summary hit max_tokens");
  }
  if (!response.parsed_output) {
    throw new Error("structured output could not be parsed");
  }
  return { summary: response.parsed_output, model: response.model, usage: response.usage };
}
