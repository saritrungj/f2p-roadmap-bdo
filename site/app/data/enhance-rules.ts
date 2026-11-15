// Failstack rules used by the enhancing planner. Base chances per level come from
// the item data (enhance.json); these rules turn a base chance + failstacks into a chance.
// Sources (checked 14 Nov 2026):
// - BlackDesertFoundry Enhancing Guide, updated 3 Jul 2026: +10% of base per FS, 90% hard cap,
//   accessory soft caps PRI 18 / DUO 40 / TRI 44 / TET 110 FS, after which each FS adds 2% of base.
// - GrumpyGreen failstack chart (Sep 2024): armor and weapons soft-cap at 70%.
// - GrumpyGreen Tuvala gear, updated 12 Sep 2026: Tuvala TET/PEN base 7% / 5%, pity after failures.

export const HARD_CAP = 90;
export const SOFT_CAP_GEAR = 70;
/** Accessory soft cap in failstacks, by tier index (PRI, DUO, TRI, TET). */
export const ACC_SOFTCAP_FS = [18, 40, 44, 110];

export type Slot = "weapon" | "armor" | "accessory";

/**
 * Chance (%) for one attempt.
 * @param tier accessory tier index (0 = PRI) when the item is a standard 5-level accessory
 */
export function chanceAt(base: number, fs: number, slot: Slot, tier?: number): number {
  if (base >= 100) return 100;
  const f = Math.max(0, fs);
  const per = base * 0.1;
  if (slot === "accessory") {
    const cap = tier !== undefined ? ACC_SOFTCAP_FS[tier] : undefined;
    if (cap === undefined) return Math.min(HARD_CAP, base + f * per);
    const pct = base + Math.min(f, cap) * per + Math.max(f - cap, 0) * base * 0.02;
    return Math.min(HARD_CAP, pct);
  }
  // Armor and weapons: full gain up to 70%, then one fifth of the normal gain.
  const raw = base + f * per;
  if (raw <= SOFT_CAP_GEAR) return raw;
  const fsToCap = (SOFT_CAP_GEAR - base) / per;
  return Math.min(HARD_CAP, SOFT_CAP_GEAR + (f - fsToCap) * per * 0.2);
}

export const ENH_SOURCES = [
  { label: "BlackDesertFoundry: Enhancing Guide", url: "https://www.blackdesertfoundry.com/enchanting-and-sockets-guide/", date: "2026-07-03" },
  { label: "GrumpyGreen: Tuvala Gear", url: "https://grumpygreen.cricket/tuvala-gear/", date: "2026-09-12" },
  { label: "GrumpyGreen: Failstack Chart", url: "https://grumpygreen.cricket/bdo-failstack-chart/", date: "2024-09-15" },
  { label: "Garmoth Enhancing Simulator", url: "https://garmoth.com/enhancing-simulator" },
];
