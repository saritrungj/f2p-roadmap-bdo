<script setup lang="ts">
import data from "~/data/enhance.json";
import { LINE_LABEL, START_PATH, currentLabel, targetLabel } from "~/data/enhance-guide";
import { chanceAt, ENH_SOURCES } from "~/data/enhance-rules";

const { t } = useI18n();
const { lang, t: L } = useCodex();
useHead({ title: () => `${t("enh.title")} | Northern-east heroic` });

type Gear = (typeof data.gear)[number];
const gear = data.gear as Gear[];
const mats = data.materials as Record<string, { name: { en: string; th: string }; icon: string | null; url: { en: string; th: string } }>;
const local = (p: string | null | undefined) => (p ? p.replace(/^\/items\//, "/codex/") : "");
const gName = (g: Gear) => g.name[lang.value];
const byId = (id: number) => gear.find((g) => g.id === id)!;

const slots = ["weapon", "armor", "accessory"] as const;
const slot = ref<(typeof slots)[number]>("weapon");
const selectedId = ref(747206);
const selected = computed(() => byId(selectedId.value));
watch(slot, (s) => {
  if (selected.value.slot !== s) selectedId.value = gear.find((g) => g.slot === s)!.id;
});

const total = computed(() => selected.value.levels.length);
const from = ref(0);
const to = ref(Math.min(5, selected.value.levels.length - 1));
const fs = ref("0");
const useCron = ref(true);
watch(selectedId, () => {
  from.value = 0;
  to.value = Math.min(5, total.value - 1);
});
watch(from, (v) => {
  if (to.value <= v) to.value = v + 1;
});

const levelOptions = computed(() =>
  Array.from({ length: total.value }, (_, i) => ({ value: i, label: currentLabel(total.value, i) })),
);

// Standard 5-level accessories (PRI..PEN) get the official soft caps; see enhance-rules.ts.
const accTier = (l: { from: number }) => (selected.value.slot === "accessory" && total.value === 5 ? l.from : undefined);
const isTuvala = computed(() => selected.value.line === "tuvala");

const rows = computed(() => {
  const f = num(fs.value);
  return selected.value.levels
    .filter((l) => l.from >= from.value && l.from < to.value && l.material)
    .map((l) => {
      const p = chanceAt(l.chance, f, selected.value.slot as "weapon" | "armor" | "accessory", accTier(l));
      return { ...l, label: targetLabel(total.value, l.from), p, tries: 100 / p, mat: mats[String(l.material)] };
    });
});

const totals = computed(() => {
  const materials = new Map<string, number>();
  let cron = 0;
  let tries = 0;
  for (const r of rows.value) {
    tries += r.tries;
    materials.set(String(r.material), (materials.get(String(r.material)) ?? 0) + r.tries * (r.count ?? 1));
    if (useCron.value) cron += r.tries * r.cron;
  }
  return { tries, cron, materials: [...materials.entries()].map(([id, n]) => ({ mat: mats[id], n })) };
});
</script>

<template>
  <div class="page">
    <header class="page-head container">
      <h1>{{ t("enh.title") }}</h1>
      <p>{{ t("enh.sub") }}</p>
      <AsOfBadge />
    </header>

    <section class="container start" aria-labelledby="start-h">
      <h2 id="start-h">{{ t("enh.startTitle") }}</h2>
      <ol class="start-list">
        <li v-for="(s, i) in START_PATH" :key="i" class="start-step">
          <span class="start-n" aria-hidden="true">{{ i + 1 }}</span>
          <div>
            <h3>{{ L(s.title) }}</h3>
            <p>{{ L(s.body) }}</p>
            <p v-if="s.tip" class="start-tip">{{ L(s.tip) }}</p>
            <div class="chip-row">
              <a
                v-for="id in s.gear"
                :key="id"
                class="chip codex-chip"
                :href="byId(id).url[lang]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img :src="local(byId(id).icon)" alt="" width="28" height="28" loading="lazy" />
                <span>{{ gName(byId(id)) }}</span>
              </a>
            </div>
          </div>
        </li>
      </ol>
    </section>

    <section class="container planner" aria-labelledby="plan-h">
      <h2 id="plan-h">{{ t("enh.planTitle") }}</h2>
      <p class="planner-sub">{{ t("enh.planSub") }}</p>

      <div class="planner-grid">
        <div class="planner-controls">
          <div class="field" role="group" :aria-label="t('enh.slot')">
            <span class="label">{{ t("enh.slot") }}</span>
            <div class="seg">
              <button v-for="s in slots" :key="s" type="button" :aria-pressed="slot === s" @click="slot = s">
                {{ t(`enh.slots.${s}`) }}
              </button>
            </div>
          </div>

          <div class="gear-pick" role="radiogroup" :aria-label="t('enh.gear')">
            <button
              v-for="g in gear.filter((x) => x.slot === slot)"
              :key="g.id"
              type="button"
              role="radio"
              :aria-checked="g.id === selectedId"
              class="gear-opt"
              @click="selectedId = g.id"
            >
              <img :src="local(g.icon)" alt="" width="40" height="40" loading="lazy" />
              <span>
                <strong>{{ gName(g) }}</strong>
                <small>{{ L(LINE_LABEL[g.line]!) }}</small>
              </span>
            </button>
          </div>

          <div class="row-2">
            <div class="field">
              <label for="enh-from">{{ t("enh.from") }}</label>
              <select id="enh-from" v-model.number="from" class="select">
                <option v-for="o in levelOptions.slice(0, -1)" :key="o.value" :value="o.value">{{ o.label }}</option>
              </select>
            </div>
            <div class="field">
              <label for="enh-to">{{ t("enh.to") }}</label>
              <select id="enh-to" v-model.number="to" class="select">
                <option v-for="o in levelOptions.filter((x) => x.value > from)" :key="o.value" :value="o.value">{{ o.label }}</option>
              </select>
            </div>
          </div>
          <NumberField v-model="fs" :label="t('enh.fs')" :help="t('enh.fsHelp')" :max="400" />
          <ToggleField v-model="useCron" :label="t('enh.cron')" :hint="t('enh.cronHint')" />
        </div>

        <div class="planner-out" aria-live="polite">
          <div class="plan-total">
            <div>
              <span>{{ t("enh.avgTries") }}</span>
              <strong class="num">{{ fmt2(totals.tries) }}</strong>
            </div>
            <div v-if="useCron">
              <span>{{ t("enh.cronTotal") }}</span>
              <strong class="num">{{ fmt(totals.cron) }}</strong>
            </div>
          </div>
          <ul class="plan-mats">
            <li v-for="m in totals.materials" :key="m.mat?.name.en">
              <img :src="local(m.mat?.icon)" alt="" width="32" height="32" loading="lazy" />
              <span>{{ m.mat?.name[lang] }}</span>
              <b class="num">{{ fmt(m.n) }}</b>
            </li>
          </ul>

          <div class="plan-table-wrap">
            <table class="plan-table">
              <caption class="sr-only">{{ t("enh.tableCaption") }}</caption>
              <thead>
                <tr>
                  <th scope="col">{{ t("enh.col.level") }}</th>
                  <th scope="col">{{ t("enh.col.base") }}</th>
                  <th scope="col">{{ t("enh.col.withFs") }}</th>
                  <th scope="col">{{ t("enh.col.material") }}</th>
                  <th scope="col">Cron</th>
                  <th scope="col">{{ t("enh.col.dura") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in rows" :key="r.from" :class="{ safe: r.chance >= 100 }">
                  <th scope="row">{{ r.label }}</th>
                  <td class="num">{{ r.chance >= 100 ? t("enh.safe") : `${fmt2(r.chance)}%` }}</td>
                  <td class="num">{{ r.chance >= 100 ? "100%" : `${fmt2(r.p)}%` }}</td>
                  <td>
                    <span class="mat">
                      <img :src="local(r.mat?.icon)" alt="" width="24" height="24" loading="lazy" />
                      {{ r.mat?.name[lang] }} <span v-if="(r.count ?? 1) > 1">x{{ r.count }}</span>
                    </span>
                  </td>
                  <td class="num">{{ r.cron ? fmt(r.cron) : "-" }}</td>
                  <td class="num">{{ r.failDura ? `-${r.failDura}` : "-" }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="note-line">{{ t("enh.note") }}</p>
          <p v-if="isTuvala" class="topic-callout enh-tuvala">{{ t("enh.tuvala") }}</p>
          <aside class="enh-sources">
            <h3>{{ t("enh.rulesTitle") }}</h3>
            <ul class="enh-rules">
              <li>{{ t("enh.rule1") }}</li>
              <li>{{ t("enh.rule2") }}</li>
              <li>{{ t("enh.rule3") }}</li>
              <li>{{ t("enh.rule4") }}</li>
              <li>{{ t("enh.rule5") }}</li>
            </ul>
            <p class="note-line">
              {{ t("enh.source") }}
              <a :href="selected.url[lang]" target="_blank" rel="noopener noreferrer" class="ulink">BDOCodex: {{ gName(selected) }}</a>
              <template v-for="s in ENH_SOURCES" :key="s.url">
                ·
                <a :href="s.url" target="_blank" rel="noopener noreferrer" class="ulink">{{ s.label }}</a><template v-if="s.date"> ({{ s.date }})</template>
              </template>
            </p>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>
