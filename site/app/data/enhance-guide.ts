// Enhancement page content. Numbers (chance, material, Cron, durability) come from
// app/data/enhance.json, collected from BDOCodex item enchant tables (SEA, Nov 2026).
import type { L } from "./content";

export const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
export const ROMAN_NAME = ["PRI", "DUO", "TRI", "TET", "PEN", "HEX", "SEP", "OCT", "NOV", "DEC"];

/** Label of the level reached after a successful attempt from `from`. */
export function targetLabel(totalLevels: number, from: number): string {
  // 26-step lines (Tuvala) and 21-step lines (boss / Blackstar) have +1..+15 before PRI.
  const plusSteps = totalLevels >= 21 ? 15 : 0;
  const to = from + 1;
  if (to <= plusSteps) return `+${to}`;
  const r = to - plusSteps - 1;
  return `${ROMAN_NAME[r] ?? "?"} (${ROMAN[r] ?? "?"})`;
}

export function currentLabel(totalLevels: number, level: number): string {
  if (level === 0) return "+0";
  return targetLabel(totalLevels, level - 1);
}

export const LINE_LABEL: Record<string, L> = {
  tuvala: { th: "Tuvala (Season)", en: "Tuvala (Season)" },
  boss: { th: "เกียร์บอส", en: "Boss gear" },
  blackstar: { th: "Blackstar", en: "Blackstar" },
  sovereign: { th: "Sovereign (HYPERBOOST)", en: "Sovereign (HYPERBOOST)" },
  origin: { th: "Slumbering Origin (HYPERBOOST)", en: "Slumbering Origin (HYPERBOOST)" },
  capotia: { th: "Capotia", en: "Capotia" },
  deboreka: { th: "Deboreka", en: "Deboreka" },
  kharazad: { th: "Kharazad (HYPERBOOST)", en: "Kharazad (HYPERBOOST)" },
  ekleta: { th: "Ekleta", en: "Ekleta" },
};

export interface StartStep {
  title: L;
  body: L;
  gear: number[]; // enhance.json gear ids to show
  tip?: L;
}

/** "What to enhance first" for a new player, in order. */
export const START_PATH: StartStep[] = [
  {
    title: { th: "อาวุธ Tuvala ก่อน แล้วค่อยเกราะ", en: "Tuvala weapon first, then armor" },
    body: {
      th: "บน Season Server ตีอาวุธก่อนเพราะ AP ช่วยฟาร์มเร็วขึ้น +1 ถึง +7 สำเร็จ 100% ใช้หินดำ ช่วง +15 ถึง TRI (III) ของ Tuvala ก็สำเร็จ 100% ใช้หินดำเวทมนตร์ควบแน่น",
      en: "On the Season server, enhance the weapon first because AP speeds up grinding. +1 to +7 always succeed with Black Stones, and Tuvala's +15 to TRI (III) also always succeed with Concentrated Magical Black Stones.",
    },
    gear: [695116, 695105],
    tip: { th: "TET (IV) 7% และ PEN (V) 5% ค่อยตีตอนมี Failstack สูง", en: "TET (IV) at 7% and PEN (V) at 5%: wait until you have a high failstack." },
  },
  {
    title: { th: "ใช้ Ancient Black Stone จาก Emma Bartali's Journal", en: "Use Ancient Black Stones from Emma Bartali's Journal" },
    body: {
      th: "ทำ Journal ให้จบเพื่อได้ Ancient Black Stone และ Ancient Hammer ที่ตีสำเร็จแน่นอนในขั้น PEN ขึ้นไป อย่าเอาไปขายหรือเผาทิ้ง",
      en: "Finish the Journal for Ancient Black Stones and Ancient Hammers that guarantee success from PEN upward. Do not sell or heat them.",
    },
    gear: [747206],
  },
  {
    title: { th: "เกียร์ HYPERBOOST: อาวุธ Sovereign ก่อน", en: "HYPERBOOST gear: Sovereign weapon first" },
    body: {
      th: "Sovereign ใช้หินดำแรกกำเนิด ขั้น I มีโอกาส 8.55% ส่วนเกราะ Slumbering Origin ใช้หินดำแห่งความสับสนไร้ที่ติ ขั้น I แค่ 2% อาวุธจึงคุ้มกว่าที่จะตีก่อน",
      en: "Sovereign uses Primordial Black Stones with an 8.55% chance at I, while Slumbering Origin armor uses Flawless Chaotic Black Stones at only 2% for I, so the weapon is the better first target.",
    },
    gear: [747206, 719898],
  },
  {
    title: { th: "เครื่องประดับ: เก็บ Kharazad ไว้ ใช้น้ำบริสุทธิ์แห่งรุ่งสาง", en: "Accessories: keep Kharazad, feed Essence of Dawn" },
    body: {
      th: "Kharazad ตีด้วยน้ำบริสุทธิ์แห่งรุ่งสาง จำนวนที่ใช้เพิ่มขึ้นตามขั้น (1 ถึง 15 ชิ้น) ไม่ต้องใช้แหวนชิ้นที่สอง ต่างจาก Capotia / Deboreka ที่ต้องใช้เครื่องประดับชิ้นเดียวกันเป็นวัตถุดิบ",
      en: "Kharazad uses Essence of Dawn (1 to 15 per attempt as the level rises) instead of a second copy, unlike Capotia and Deboreka which consume a duplicate accessory.",
    },
    gear: [12140, 12053],
  },
  {
    title: { th: "ขั้นสูงใช้ Cron กันขั้นตก + Ancient Anvil", en: "High levels: Cron Stones + the Ancient Anvil" },
    body: {
      th: "ตารางด้านล่างบอกจำนวน Cron ต่อครั้งของแต่ละขั้นจาก BDOCodex ตีพลาดทุกครั้งยังได้ Agris Essence สะสมใน Ancient Anvil ครบเพดานแล้วครั้งถัดไปสำเร็จ 100%",
      en: "The table below lists Cron Stones per attempt for each level from BDOCodex. Every failure also stores Agris Essence in the Ancient Anvil; at the cap, the next attempt succeeds.",
    },
    gear: [747206, 12140],
  },
];
