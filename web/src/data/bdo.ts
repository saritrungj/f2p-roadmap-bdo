// Black Desert data used by the calculators.
// Sources: BDFoundry enchanting guide (3 Jul 2026), AP/DP brackets (13 Aug 2026),
// Family Fame guide (11 Sep 2026), NA/EU official wiki (2025-2026).
// See BDO-F2P-Roadmap-200THB.md section 4.5 for the full list.

export type GearKind = "armor" | "weapon" | "accessory";

export interface EnhanceStep {
  level: string;
  base: number; // % per attempt at 0 failstack
  perFs: number; // % gained per failstack
  softcap?: number; // accessories only
  afterCap?: number; // % per failstack after softcap
}

export const ENHANCE: Record<GearKind, EnhanceStep[]> = {
  armor: [
    { level: "+8", base: 17.24, perFs: 1.72 },
    { level: "+9", base: 11.76, perFs: 1.18 },
    { level: "+10", base: 7.69, perFs: 0.77 },
    { level: "+11", base: 6.25, perFs: 0.63 },
    { level: "+12", base: 5.0, perFs: 0.5 },
    { level: "+13", base: 4.0, perFs: 0.4 },
    { level: "+14", base: 2.86, perFs: 0.29 },
    { level: "+15", base: 2.0, perFs: 0.2 },
    { level: "PRI (I)", base: 11.76, perFs: 1.18 },
    { level: "DUO (II)", base: 7.69, perFs: 0.77 },
    { level: "TRI (III)", base: 6.25, perFs: 0.63 },
    { level: "TET (IV)", base: 2.0, perFs: 0.2 },
    { level: "PEN (V)", base: 0.3, perFs: 0.03 },
  ],
  weapon: [
    { level: "+8", base: 70, perFs: 1.4 },
    { level: "+9", base: 20.41, perFs: 2.04 },
    { level: "+10", base: 14.29, perFs: 1.43 },
    { level: "+11", base: 10, perFs: 1.0 },
    { level: "+12", base: 6.67, perFs: 0.67 },
    { level: "+13", base: 4, perFs: 0.4 },
    { level: "+14", base: 2.5, perFs: 0.25 },
    { level: "+15", base: 2, perFs: 0.2 },
    { level: "PRI (I)", base: 11.76, perFs: 1.18 },
    { level: "DUO (II)", base: 7.69, perFs: 0.77 },
    { level: "TRI (III)", base: 6.25, perFs: 0.63 },
    { level: "TET (IV)", base: 2.0, perFs: 0.2 },
    { level: "PEN (V)", base: 0.3, perFs: 0.03 },
  ],
  accessory: [
    { level: "PRI (I)", base: 25, perFs: 2.5, softcap: 18, afterCap: 0.5 },
    { level: "DUO (II)", base: 10, perFs: 1, softcap: 40, afterCap: 0.2 },
    { level: "TRI (III)", base: 7.5, perFs: 0.75, softcap: 44, afterCap: 0.15 },
    { level: "TET (IV)", base: 2.5, perFs: 0.25, softcap: 110, afterCap: 0.05 },
    { level: "PEN (V)", base: 0.5, perFs: 0.05 },
  ],
};

export const ENHANCE_CAP = 90;
export const CRON_NPC_PRICE = 3_000_000;

// [min sheet AP, bonus AP]
export const AP_BRACKETS: [number, number][] = [
  [100, 5], [140, 10], [170, 15], [184, 20], [209, 30], [235, 40], [245, 48],
  [249, 57], [253, 69], [257, 83], [261, 101], [265, 122], [269, 137], [273, 142],
  [277, 148], [281, 154], [285, 160], [289, 167], [293, 174], [297, 181], [301, 188],
  [305, 196], [309, 200], [316, 203], [321, 205], [328, 208], [332, 211], [337, 214],
  [342, 217], [347, 220], [352, 223], [358, 225], [364, 227], [369, 230], [375, 233],
  [381, 236], [386, 239], [392, 242], [397, 245], [399, 247], [401, 249], [403, 251],
  [405, 253], [407, 255], [409, 257], [411, 259], [413, 261], [415, 263], [417, 265],
  [419, 267], [421, 269], [423, 271], [425, 273], [427, 275], [429, 277], [431, 279],
  [433, 281], [435, 283], [437, 285], [439, 287], [441, 289], [443, 291], [445, 293],
  [447, 295], [449, 297],
];

// [min sheet DP, bonus damage reduction %]
export const DP_BRACKETS: [number, number][] = [
  [203, 1], [211, 2], [218, 3], [226, 4], [233, 5], [241, 6], [248, 7], [256, 8],
  [263, 9], [271, 10], [278, 11], [286, 12], [293, 13], [301, 14], [308, 15],
  [315, 16], [322, 17], [329, 18], [335, 19], [341, 20], [347, 21], [353, 22],
  [359, 23], [365, 24], [371, 25], [377, 26], [383, 27], [389, 28], [395, 29], [401, 30],
];

export const FAME_TIERS = [
  { label: "ต่ำกว่า 1,000", bonus: 0 },
  { label: "1,000 ขึ้นไป (+0.5%)", bonus: 0.005 },
  { label: "4,000 ขึ้นไป (+1.0%)", bonus: 0.01 },
  { label: "7,000 ขึ้นไป (+1.5%)", bonus: 0.015 },
];

export const MARKET_BASE = 0.65;
export const VALUE_PACK_BONUS = 0.3;
export const MERCHANT_RING_BONUS = 0.05;

export const ENERGY_MIN_PER_POINT_ONLINE = 3;
export const ENERGY_MIN_PER_POINT_OFFLINE = 60;

export const BLACKSTONE_TO_FS: [number, number][] = [
  [5, 5], [12, 10], [21, 15], [33, 20], [53, 25], [84, 30],
];
