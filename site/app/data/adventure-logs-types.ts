import type { L, Ref } from "./content";

export type LogGroup = "core" | "black-spirit" | "story" | "other";

export interface LogVolume {
  /** Stable id used for saved progress. Never renumber after release. */
  id: string;
  title: L;
  /** What to do, step by step. */
  how: L[];
  reward: L;
  /** Reward is a family-wide stat (AP/DP/HP...) - highlighted in the UI. */
  stat?: boolean;
}

export interface AdventureLog {
  id: string;
  group: LogGroup;
  name: L;
  /** Short reason to care. */
  why: L;
  unlock: L;
  start: L;
  total: L;
  /** 1 easy, 2 medium, 3 long. */
  effort: 1 | 2 | 3;
  /** Recommended order for a new account (1 = first). */
  order: number;
  icon?: Ref;
  note?: L;
  volumes: LogVolume[];
  sources: { label: string; url: string; date?: string; community?: boolean }[];
}
