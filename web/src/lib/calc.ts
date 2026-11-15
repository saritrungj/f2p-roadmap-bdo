import {
  AP_BRACKETS,
  DP_BRACKETS,
  ENHANCE_CAP,
  MARKET_BASE,
  MERCHANT_RING_BONUS,
  VALUE_PACK_BONUS,
  type EnhanceStep,
} from "../data/bdo";

export interface MarketOptions {
  valuePack: boolean;
  fame: number;
  ring: boolean;
}

/** Community formula: price x 0.65 x (1 + VP 0.30 + fame + ring 0.05). */
export function marketRetainRate(o: MarketOptions): number {
  const bonus =
    (o.valuePack ? VALUE_PACK_BONUS : 0) + o.fame + (o.ring ? MERCHANT_RING_BONUS : 0);
  return MARKET_BASE * (1 + bonus);
}

export function enhanceChance(step: EnhanceStep, fs: number): number {
  const f = Math.max(0, fs);
  let pct: number;
  if (step.softcap !== undefined && step.afterCap !== undefined) {
    pct =
      step.base +
      Math.min(f, step.softcap) * step.perFs +
      Math.max(f - step.softcap, 0) * step.afterCap;
  } else {
    pct = step.base + f * step.perFs;
  }
  return Math.min(pct, ENHANCE_CAP);
}

/** Probability (0-1) of at least one success in n tries at chance pct. */
export function successWithin(pct: number, n: number): number {
  const p = pct / 100;
  if (n <= 0) return 0;
  return 1 - Math.pow(1 - p, n);
}

/** Tries needed to reach the target probability (0-1). */
export function triesFor(pct: number, target: number): number {
  const p = pct / 100;
  if (p >= 1) return 1;
  if (p <= 0) return Infinity;
  return Math.ceil(Math.log(1 - target) / Math.log(1 - p));
}

export interface BracketResult {
  bonus: number;
  nextAt: number | null;
  nextBonus: number | null;
}

export function bracketLookup(table: [number, number][], value: number): BracketResult {
  let bonus = 0;
  let idx = -1;
  for (let i = 0; i < table.length; i++) {
    if (value >= table[i][0]) {
      bonus = table[i][1];
      idx = i;
    } else break;
  }
  const next = table[idx + 1];
  return { bonus, nextAt: next ? next[0] : null, nextBonus: next ? next[1] : null };
}

export const apBracket = (ap: number) => bracketLookup(AP_BRACKETS, ap);
export const dpBracket = (dp: number) => bracketLookup(DP_BRACKETS, dp);

const nf = new Intl.NumberFormat("th-TH", { maximumFractionDigits: 0 });
const nf2 = new Intl.NumberFormat("th-TH", { maximumFractionDigits: 2 });

export const fmt = (n: number) => (Number.isFinite(n) ? nf.format(Math.round(n)) : "-");
export const fmt2 = (n: number) => (Number.isFinite(n) ? nf2.format(n) : "-");

/** Short silver format: 1.25M, 3.4B. */
export function silver(n: number): string {
  if (!Number.isFinite(n)) return "-";
  const a = Math.abs(n);
  if (a >= 1e9) return `${nf2.format(n / 1e9)}B`;
  if (a >= 1e6) return `${nf2.format(n / 1e6)}M`;
  if (a >= 1e3) return `${nf2.format(n / 1e3)}K`;
  return nf.format(n);
}

export function duration(minutes: number): string {
  if (minutes <= 0) return "เต็มแล้ว";
  const d = Math.floor(minutes / 1440);
  const h = Math.floor((minutes % 1440) / 60);
  const m = Math.round(minutes % 60);
  const parts: string[] = [];
  if (d) parts.push(`${d} วัน`);
  if (h) parts.push(`${h} ชม.`);
  if (m || parts.length === 0) parts.push(`${m} นาที`);
  return parts.join(" ");
}
