// Patch watcher: finds new official notices (Asia / Korea / Global Lab), summarizes them
// with Claude into Thai + English, and writes UNREVIEWED drafts. Nothing reaches the site
// until a person approves it (see approve.ts).
//
// Usage (from site/):
//   node scripts/patch-watch/watch.ts --init [--keep 2]  mark history as seen (keep newest N for the first run)
//   node scripts/patch-watch/watch.ts --dry-run       fetch + extract only, no Claude call
//   node scripts/patch-watch/watch.ts [--limit 3] [--region kr]
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { SOURCES, type Region } from "./sources.ts";
import { listNotices, politeDelay, readNotice } from "./fetch.ts";
import { summarize } from "./summarize.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, "../..");
const STATE = path.join(siteRoot, "patch-watch", "state.json");
const DRAFTS = path.join(siteRoot, "patch-watch", "drafts");

const args = process.argv.slice(2);
const flag = (n: string) => args.includes(n);
const opt = (n: string) => {
  const i = args.indexOf(n);
  return i >= 0 ? args[i + 1] : undefined;
};
const dryRun = flag("--dry-run");
const init = flag("--init");
const limit = Number(opt("--limit") ?? 3);
const onlyRegion = opt("--region") as Region | undefined;

type State = Record<Region, string[]>;

async function loadState(): Promise<State> {
  try {
    return JSON.parse(await fs.readFile(STATE, "utf8"));
  } catch {
    return { asia: [], kr: [], gl: [] };
  }
}

async function main() {
  const state = await loadState();
  await fs.mkdir(DRAFTS, { recursive: true });
  const client = dryRun || init ? null : new Anthropic();
  let created = 0;
  const failures: string[] = [];

  for (const src of SOURCES) {
    if (onlyRegion && src.region !== onlyRegion) continue;
    let list;
    try {
      list = await listNotices(src);
    } catch (e) {
      failures.push(`${src.region}: list failed (${(e as Error).message})`);
      continue;
    }
    const seen = new Set(state[src.region]);
    const fresh = list.filter((n) => !seen.has(n.id));
    console.log(`[${src.region}] ${list.length} patch notices listed, ${fresh.length} new`);

    if (init) {
      // Mark history as seen, but leave the newest `--keep N` notices for the first real run.
      const keep = Number(opt("--keep") ?? 0);
      state[src.region] = [...new Set([...state[src.region], ...list.slice(keep).map((n) => n.id)])];
      continue;
    }

    // Oldest first, so drafts are produced in release order.
    for (const item of fresh.slice(0, limit).reverse()) {
      await politeDelay();
      try {
        const notice = await readNotice(item);
        const base = { region: src.region, source: src.label, id: item.id, url: item.url, title: notice.title, published: notice.published };
        if (dryRun) {
          console.log(`  - ${item.id} ${notice.title} (${notice.text.length} chars)`);
          await fs.writeFile(path.join(DRAFTS, `${src.region}-${item.id}.extract.txt`), notice.text);
          continue;
        }
        const { summary, model, usage } = await summarize(client!, notice);
        const draft = {
          ...base,
          spoiler: src.region !== "asia",
          reviewed: false,
          generatedAt: new Date().toISOString(),
          model,
          usage,
          ...summary,
        };
        await fs.writeFile(path.join(DRAFTS, `${src.region}-${item.id}.json`), JSON.stringify(draft, null, 2) + "\n");
        state[src.region].push(item.id);
        created++;
        console.log(`  + draft ${src.region}-${item.id}: ${summary.headline.en}`);
      } catch (e) {
        failures.push(`${src.region}-${item.id}: ${(e as Error).message}`);
      }
    }
  }

  if (init || !dryRun) {
    await fs.mkdir(path.dirname(STATE), { recursive: true });
    await fs.writeFile(STATE, JSON.stringify(state, null, 2) + "\n");
  }
  console.log(`done: ${created} new draft(s)${failures.length ? `, ${failures.length} failure(s)` : ""}`);
  for (const f of failures) console.error("  ! " + f);
  if (failures.length && !created) process.exitCode = 1;
}

await main();
