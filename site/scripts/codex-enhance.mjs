// Collects current enhancement tables (base chance, material, Cron cost, durability loss)
// for the gear lines a new player meets, from BDOCodex item pages (enchantment_array).
// Usage (from site/): node scripts/codex-enhance.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const site = path.resolve(here, "..");
const BASE = "https://bdocodex.com";
const UA = { headers: { "user-agent": "Mozilla/5.0 (Northern-east heroic fan-site data refresh)" } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// slot: weapon | armor | accessory ; stage: order a new player meets them
const GEAR = [
  { id: 695116, slot: "weapon", line: "tuvala" },
  { id: 10010, slot: "weapon", line: "boss" },
  { id: 715001, slot: "weapon", line: "blackstar" },
  { id: 747206, slot: "weapon", line: "sovereign" },
  { id: 695105, slot: "armor", line: "tuvala" },
  { id: 11013, slot: "armor", line: "boss" },
  { id: 719901, slot: "armor", line: "blackstar" },
  { id: 719897, slot: "armor", line: "origin" },
  { id: 719898, slot: "armor", line: "origin" },
  { id: 12053, slot: "accessory", line: "capotia" },
  { id: 11653, slot: "accessory", line: "deboreka" },
  { id: 12140, slot: "accessory", line: "kharazad" },
  { id: 12142, slot: "accessory", line: "ekleta" },
];

const title = (h) => (h.match(/<title>([^<]*)<\/title>/) || [, ""])[1].replace(/ - BDO Codex$/, "").replace(/&#39;/g, "'").replace(/&amp;/g, "&");

async function page(lang, id) {
  const r = await fetch(`${BASE}/${lang}/item/${id}/`, UA);
  if (!r.ok) throw new Error(`${r.status} ${lang} ${id}`);
  return r.text();
}

function enchantArray(html) {
  const m = html.match(/enchantment_array = (\{.*?\});\s*\n/s) || html.match(/enchantment_array = (\{.*\});/);
  if (!m) return null;
  return JSON.parse(m[1]);
}

const out = { generatedAt: new Date().toISOString(), source: BASE, gear: [], materials: {} };
const icons = new Set();
const matIds = new Set();

for (const g of GEAR) {
  const en = await page("seaen", g.id);
  await sleep(350);
  const th = await page("th", g.id);
  await sleep(350);
  const arr = enchantArray(en);
  const icon = (en.match(/\/items\/new_icon\/[^"']+?\.webp/) || [null])[0];
  if (icon) icons.add(icon);
  const levels = [];
  if (arr) {
    for (const [k, v] of Object.entries(arr)) {
      if (!/^\d+$/.test(k) || !v || typeof v !== "object") continue;
      if (v.need_enchant_item_id) matIds.add(v.need_enchant_item_id);
      levels.push({
        from: Number(k),
        chance: Number(v.enchant_chance),
        material: v.need_enchant_item_id || null,
        count: v.enchant_item_counter ?? null,
        cron: v.cron_value ?? 0,
        failDura: v.fail_dura_dec ?? 0,
        ap: v.damage && v.damage !== "0~0" ? v.damage : null,
        dp: v.defense || null,
      });
    }
  }
  levels.sort((a, b) => a.from - b.from);
  out.gear.push({
    ...g,
    name: { en: title(en), th: title(th) },
    icon,
    url: { en: `${BASE}/seaen/item/${g.id}/`, th: `${BASE}/th/item/${g.id}/` },
    maxLevel: arr?.max_enchant ?? levels.length,
    levels,
  });
  console.log(g.id, title(en), "|", title(th), "levels", levels.length);
}

for (const id of matIds) {
  const en = await page("seaen", id);
  await sleep(350);
  const th = await page("th", id);
  await sleep(350);
  const icon = (en.match(/\/items\/new_icon\/[^"']+?\.webp/) || [null])[0];
  if (icon) icons.add(icon);
  out.materials[id] = {
    name: { en: title(en), th: title(th) },
    icon,
    url: { en: `${BASE}/seaen/item/${id}/`, th: `${BASE}/th/item/${id}/` },
  };
  console.log("material", id, title(en), "|", title(th));
}

for (const p of icons) {
  const dest = path.join(site, "public", "codex", p.replace(/^\/items\//, ""));
  try {
    await fs.access(dest);
    continue;
  } catch {}
  const r = await fetch(BASE + p, UA);
  if (!r.ok) continue;
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, Buffer.from(await r.arrayBuffer()));
  await sleep(200);
}

await fs.writeFile(path.join(site, "app", "data", "enhance.json"), JSON.stringify(out, null, 2) + "\n");
console.log("wrote app/data/enhance.json");
