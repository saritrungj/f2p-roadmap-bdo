// Grind spots. Recommended AP/DP, trash item ID, monster ID and node from the
// Garmoth Grind Tracker spot data (checked 13 Nov 2026); silver/hr = Garmoth Average Tier,
// NA/EU market, 13 Nov 2025 - 12 Nov 2026. Names (EN = bdocodex.com/seaen, TH = bdocodex.com/th),
// images and NPC sell prices come from BDOCodex via app/data/codex.json.
import type { L } from "./content";

export interface Spot {
  garmoth: number;
  name: L; // BDOCodex node name where one exists
  region: L;
  ap: number;
  dp: number;
  trash: number; // BDOCodex item id
  monster?: number; // BDOCodex npc id (artwork)
  trashHr: number;
  silverHr: number;
  node?: number;
}

const R = {
  kama: { th: "คามาซิลเวีย", en: "Kamasylvia" },
  bale: { th: "บาเลนอส", en: "Balenos" },
  drie: { th: "ดริกัน", en: "Drieghan" },
  sere: { th: "เซเรนเดีย", en: "Serendia" },
  loml: { th: "ดินแดนแห่งอรุณรุ่ง", en: "Land of the Morning Light" },
  snow: { th: "ภูเขาฤดูหนาวนิรันดร์", en: "Mountain of Eternal Winter" },
  calp: { th: "คาลเพออน", en: "Calpheon" },
  uluk: { th: "อูลูคิต้า", en: "Ulukita" },
  odyl: { th: "โอดิลลิตา", en: "O'dyllita" },
  vale: { th: "วาเลนเซีย", en: "Valencia" },
  edan: { th: "อินเนอร์เอดาเนีย", en: "Inner Edania" },
} satisfies Record<string, L>;

export const SPOTS: Spot[] = [
  { garmoth: 29, name: { th: "ป่าโพลี่", en: "Polly's Forest" }, region: R.kama, ap: 140, dp: 250, trash: 44322, monster: 21601, trashHr: 16925, silverHr: 241_751_949, node: 1624 },
  { garmoth: 37, name: { th: "ถ้ำพรอตี้ (เกาะไวต้า)", en: "Protty Cave (Weita Island)" }, region: R.bale, ap: 170, dp: 200, trash: 44378, monster: 21465, trashHr: 15082, silverHr: 256_668_961, node: 1010 },
  { garmoth: 23, name: { th: "หลุมศพของเซเรคาน (กลางวัน)", en: "Sherekhan Necropolis (Day)" }, region: R.drie, ap: 190, dp: 230, trash: 44440, monster: 21711, trashHr: 13924, silverHr: 330_008_282, node: 1655 },
  { garmoth: 14, name: { th: "หนองน้ำทางตอนใต้ (ฟอร์กัน)", en: "Southern Swamp (Fogan)" }, region: R.sere, ap: 240, dp: 330, trash: 44485, monster: 24422, trashHr: 13640, silverHr: 532_690_899, node: 344 },
  { garmoth: 17, name: { th: "ค่ายออร์ค", en: "Orc Camp" }, region: R.sere, ap: 260, dp: 340, trash: 44482, monster: 24405, trashHr: 16981, silverHr: 541_572_997, node: 374 },
  { garmoth: 165, name: { th: "ฐานฮงลิม", en: "Honglim Base" }, region: R.loml, ap: 270, dp: 360, trash: 56328, monster: 25541, trashHr: 22138, silverHr: 668_105_045, node: 1793 },
  { garmoth: 110, name: { th: "ป่าแสงดาวสีเพลิงมรกต", en: "Jade Starlight Forest" }, region: R.snow, ap: 270, dp: 350, trash: 44490, monster: 23403, trashHr: 19214, silverHr: 737_809_848, node: 1755 },
  { garmoth: 97, name: { th: "วิหารไกฟินราห์เซีย (ใต้ดิน)", en: "Gyfin Rhasia Temple (Underground)" }, region: R.kama, ap: 290, dp: 380, trash: 44516, monster: 20848, trashHr: 19959, silverHr: 731_723_329, node: 1626 },
  { garmoth: 124, name: { th: "เขตศักดิ์สิทธิ์เฮ็กซ์", en: "Hexe Sanctuary" }, region: R.calp, ap: 300, dp: 390, trash: 59800, monster: 24930, trashHr: 22674, silverHr: 1_297_267_015, node: 724 },
  { garmoth: 157, name: { th: "ที่ราบสูงอิสราฮิด", en: "Yzrahid Highlands" }, region: R.uluk, ap: 310, dp: 420, trash: 59880, monster: 21792, trashHr: 30124, silverHr: 1_248_170_534, node: 1845 },
  { garmoth: 148, name: { th: "ซากปรักหักพังทุนกราท", en: "Tungrad Ruins" }, region: R.uluk, ap: 330, dp: 410, trash: 65328, monster: 21012, trashHr: 28700, silverHr: 1_528_338_774, node: 1838 },
  { garmoth: 166, name: { th: "ป่าโดเกบี", en: "Dokkebi Forest" }, region: R.loml, ap: 335, dp: 420, trash: 56327, monster: 25547, trashHr: 16732, silverHr: 1_158_625_809, node: 1788 },
  { garmoth: 153, name: { th: "แหล่งกบดานผู้ติดตามความมืดมิด", en: "Darkseekers' Retreat" }, region: R.uluk, ap: 340, dp: 430, trash: 65330, monster: 21025, trashHr: 19420, silverHr: 1_492_662_649, node: 1846 },
  { garmoth: 169, name: { th: "[Elvia] Orzekea", en: "[Elvia] Orzekea" }, region: R.odyl, ap: 350, dp: 440, trash: 56334, monster: 24701, trashHr: 13688, silverHr: 1_849_215_152 },
  { garmoth: 200, name: { th: "Star's End", en: "Star's End" }, region: R.calp, ap: 395, dp: 460, trash: 56339, monster: 21921, trashHr: 10917, silverHr: 2_148_430_334 },
  { garmoth: 212, name: { th: "Gavinya Coastal Cliff", en: "Gavinya Coastal Cliff" }, region: R.vale, ap: 400, dp: 470, trash: 767350, trashHr: 12568, silverHr: 2_856_240_818 },
  { garmoth: 218, name: { th: "ขอบเขตของปัญหา (Event Horizon)", en: "Event Horizon" }, region: R.edan, ap: 420, dp: 505, trash: 980132, trashHr: 12941, silverHr: 3_991_116_476, node: 2112 },
];

export const spotUrl = (id: number) => `https://garmoth.com/grind-tracker/best-grind-spots/${id}`;
export const nodeUrl = (id: number, lang: "th" | "en") =>
  `https://bdocodex.com/${lang === "th" ? "th" : "seaen"}/node/${id}/`;
