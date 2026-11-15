import codex from "~/data/codex.json";
import type { L, Ref } from "~/data/content";

type Lang = "th" | "en";
interface Entry {
  name: string;
  icon: string | null;
  url: string;
  sell?: number | null;
}

const local = (p: string | null | undefined) => (p ? p.replace(/^\/items\//, "/codex/") : null);

/** Bilingual BDOCodex lookups. EN = bdocodex.com/seaen (Asia server), TH = bdocodex.com/th. */
export function useCodex() {
  const { locale } = useI18n();
  const lang = computed<Lang>(() => (locale.value === "en" ? "en" : "th"));
  const key = (l: Lang) => (l === "en" ? "seaen" : "th");

  const t = (v: L) => v[lang.value];

  function item(id: number): Entry {
    const r = (codex.items as Record<string, any>)[id];
    if (!r) return { name: `#${id}`, icon: null, url: "#" };
    return { name: r[key(lang.value)].name, icon: local(r.icon), url: r.url[lang.value], sell: r.sell };
  }

  function npc(id: number): Entry {
    const r = (codex.npcs as Record<string, any>)[id];
    if (!r) return { name: `#${id}`, icon: null, url: "#" };
    return { name: r[key(lang.value)].name, icon: local(r.art), url: r.url[lang.value] };
  }

  function quest(id: string): Entry {
    const r = (codex.quests as Record<string, any>)[id];
    if (!r) return { name: id, icon: null, url: "#" };
    return { name: r[key(lang.value)].name, icon: local(r.icon), url: r.url[lang.value] };
  }

  function ref(r: Ref): Entry & { kind: "item" | "quest" | "npc" } {
    if ("item" in r) return { ...item(r.item), kind: "item" };
    if ("quest" in r) return { ...quest(r.quest), kind: "quest" };
    return { ...npc(r.npc), kind: "npc" };
  }

  return { lang, t, item, npc, quest, ref };
}
