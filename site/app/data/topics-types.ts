import type { L, Ref } from "./content";

export type Cell = string | L;

export type Section =
  | { kind: "list"; title: L; items: L[] }
  | { kind: "steps"; title: L; items: L[] }
  | { kind: "table"; title: L; head: Cell[]; rows: Cell[][]; note?: L }
  | { kind: "callout"; title: L; body: L };

export interface Topic {
  slug: string;
  icon: Ref;
  title: L;
  lead: L;
  sections: Section[];
  refs?: Ref[]; // BDOCodex items/quests shown as image chips
  sources: { label: string; url: string; date?: string }[];
  codexPath: string;
  /** Optional in-site tool that goes deeper on this topic. */
  cta?: { to: string; label: string }; // BDOCodex section for further reading (after /th/ or /seaen/)
}
