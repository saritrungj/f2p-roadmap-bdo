// Review step: nothing the AI writes reaches the site until a person approves it.
//
// Usage (from site/):
//   node scripts/patch-watch/approve.ts                 list pending drafts
//   node scripts/patch-watch/approve.ts asia-20041      approve one draft (after reading/editing it)
//   node scripts/patch-watch/approve.ts --reject kr-16442   discard a draft
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PatchSummary } from "./summarize.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, "../..");
const DRAFTS = path.join(siteRoot, "patch-watch", "drafts");
const FEED = path.join(siteRoot, "app", "data", "patch-feed");

const args = process.argv.slice(2);
const reject = args.includes("--reject");
const id = args.find((a) => !a.startsWith("--"));

async function list() {
  const files = (await fs.readdir(DRAFTS).catch(() => [])).filter((f) => f.endsWith(".json"));
  if (!files.length) return console.log("No pending drafts.");
  for (const f of files.sort()) {
    const d = JSON.parse(await fs.readFile(path.join(DRAFTS, f), "utf8"));
    console.log(`${f.replace(/\.json$/, "").padEnd(14)} [${d.confidence}] ${d.headline?.en ?? d.title}`);
  }
  console.log("\nRead each file in patch-watch/drafts/, fix anything wrong, then approve or reject it.");
}

if (!id) {
  await list();
} else {
  const draftPath = path.join(DRAFTS, `${id}.json`);
  if (reject) {
    await fs.rm(draftPath);
    console.log(`Rejected ${id}`);
  } else {
    const draft = JSON.parse(await fs.readFile(draftPath, "utf8"));
    // Re-validate after manual edits so a broken file never reaches the site.
    PatchSummary.parse(draft);
    const approved = { ...draft, reviewed: true, reviewedAt: new Date().toISOString() };
    delete approved.usage;
    await fs.mkdir(FEED, { recursive: true });
    await fs.writeFile(path.join(FEED, `${id}.json`), JSON.stringify(approved, null, 2) + "\n");
    await fs.rm(draftPath);
    await fs.rm(path.join(DRAFTS, `${id}.extract.txt`), { force: true });
    console.log(`Approved ${id} -> app/data/patch-feed/${id}.json`);
  }
}
