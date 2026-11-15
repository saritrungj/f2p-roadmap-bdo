// Collects bilingual (SEA English + Thai) data and icons from BDOCodex.
// Usage: node collect.mjs <manifest.json> <out.json> <publicDir>
import fs from "node:fs/promises";
import path from "node:path";

const [, , manifestPath, outPath, publicDir] = process.argv;
const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
const BASE = "https://bdocodex.com";
const UA = "Mozilla/5.0 (Northern-east heroic fan-site data refresh)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url) {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(url, { headers: { "user-agent": UA } });
    if (r.ok) return r.text();
    await sleep(1000 * (i + 1));
  }
  throw new Error("fetch failed " + url);
}

const decode = (s) =>
  s
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
const stripTags = (s) => decode(s.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
const title = (html) => decode((html.match(/<title>([^<]*)<\/title>/) || [, ""])[1].replace(/ - BDO Codex$/, ""));

function descOf(html, lang) {
  const text = stripTags(html);
  const key = lang === "th" ? "คำอธิบาย" : "Description";
  const i = text.indexOf(key);
  if (i < 0) return "";
  let s = text.slice(i + key.length).replace(/^\s*:\s*/, "");
  const stops = ["Show/hide", "แสดง / ซ่อน", "Buy price", "ราคาซื้อ", "Knowledge:", "ความรู้:", "Production Method", "In-game market", "Item Exchange", "- Description", "Quest complete"];
  let end = s.length;
  for (const st of stops) {
    const j = s.indexOf(st);
    if (j > 0 && j < end) end = j;
  }
  return s.slice(0, Math.min(end, 280)).trim();
}

const icons = new Set();
const out = { generatedAt: new Date().toISOString(), source: BASE, items: {}, npcs: {}, quests: {} };

for (const id of manifest.items) {
  const rec = {};
  for (const lang of ["seaen", "th"]) {
    const html = await get(`${BASE}/${lang}/item/${id}/`);
    rec[lang] = { name: title(html), desc: descOf(html, lang === "th" ? "th" : "en") };
    if (lang === "seaen") {
      const icon = (html.match(/\/items\/new_icon\/[^"']+?\.webp/) || [null])[0];
      rec.icon = icon;
      if (icon) icons.add(icon);
      const sell = (html.match(/Sell price:\s*([\d,]+)/) || [, null])[1];
      const buy = (html.match(/Buy price:\s*([\d,]+)/) || [, null])[1];
      rec.sell = sell ? Number(sell.replace(/,/g, "")) : null;
      rec.buy = buy ? Number(buy.replace(/,/g, "")) : null;
    }
    await sleep(350);
  }
  rec.url = { en: `${BASE}/seaen/item/${id}/`, th: `${BASE}/th/item/${id}/` };
  out.items[id] = rec;
  console.log("item", id, rec.seaen.name, "|", rec.th.name);
}

for (const id of manifest.npcs) {
  const rec = {};
  for (const lang of ["seaen", "th"]) {
    const html = await get(`${BASE}/${lang}/npc/${id}/`);
    rec[lang] = { name: title(html) };
    if (lang === "seaen") {
      const art = (html.match(/\/items\/ui_artwork\/ic_[^"']+?\.webp/) || [null])[0];
      rec.art = art;
      if (art) icons.add(art);
      const lvl = (html.match(/Level:\s*(\d+)/) || [, null])[1];
      rec.level = lvl ? Number(lvl) : null;
    }
    await sleep(350);
  }
  rec.url = { en: `${BASE}/seaen/npc/${id}/`, th: `${BASE}/th/npc/${id}/` };
  out.npcs[id] = rec;
  console.log("npc", id, rec.seaen.name, "|", rec.th.name);
}

for (const qid of manifest.quests) {
  const rec = {};
  for (const lang of ["seaen", "th"]) {
    const html = await get(`${BASE}/${lang}/quest/${qid}/`);
    const text = stripTags(html);
    rec[lang] = { name: title(html), desc: descOf(html, lang === "th" ? "th" : "en") };
    if (lang === "seaen") {
      rec.level = Number((text.match(/Level:\s*(\d+)/) || [, 0])[1]);
      rec.region = (text.match(/Region:\s*(.+?)\s*Category:/) || [, ""])[1];
      rec.type = (text.match(/Type:\s*(.+?)\s*Level:/) || [, ""])[1];
      const icon = (html.match(/\/items\/(?:new_icon|quest)\/[^"']+?\.webp/) || [null])[0];
      rec.icon = icon;
      if (icon) icons.add(icon);
    }
    await sleep(350);
  }
  rec.url = { en: `${BASE}/seaen/quest/${qid}/`, th: `${BASE}/th/quest/${qid}/` };
  out.quests[qid] = rec;
  console.log("quest", qid, rec.seaen.name, "|", rec.th.name, "| Lv", rec.level);
}

// Download images into <publicDir>/codex/... preserving the codex path.
let n = 0;
for (const p of icons) {
  const dest = path.join(publicDir, "codex", p.replace(/^\/items\//, ""));
  try {
    await fs.access(dest);
    continue;
  } catch {}
  const r = await fetch(BASE + p, { headers: { "user-agent": UA } });
  if (!r.ok) {
    console.warn("icon failed", p, r.status);
    continue;
  }
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, Buffer.from(await r.arrayBuffer()));
  n++;
  await sleep(200);
}
console.log("downloaded icons:", n);
await fs.writeFile(outPath, JSON.stringify(out, null, 2));
