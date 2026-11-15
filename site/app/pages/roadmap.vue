<script setup lang="ts">
import { PhArrowRight, PhArrowCounterClockwise } from "@phosphor-icons/vue";
import { ROADMAP } from "~/data/content";

const { t } = useI18n();
const { t: L } = useCodex();
useHead({ title: () => `${t("rm.title")} | Northern-east heroic` });

// Every step and detail is a task. Progress lives in this browser only (localStorage).
const KEY = "neh-roadmap-v1";
const LEGACY_KEY = "esan-roadmap-v1";
const tasks = ROADMAP.map((p, pi) => ({
  phase: pi,
  items: [
    ...p.steps.map((s, si) => ({ id: `${pi}-s${si}`, text: s, main: true })),
    ...p.details.map((s, di) => ({ id: `${pi}-d${di}`, text: s, main: false })),
  ],
}));
const allIds = tasks.flatMap((x) => x.items.map((i) => i.id));
const done = ref<Set<string>>(new Set());

onMounted(() => {
  try {
    const raw = localStorage.getItem(KEY) ?? localStorage.getItem(LEGACY_KEY);
    if (raw) done.value = new Set((JSON.parse(raw) as string[]).filter((id) => allIds.includes(id)));
  } catch {
    /* storage unavailable: checklist still works for this visit */
  }
});
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify([...done.value]));
  } catch {
    /* ignore */
  }
}
function toggle(id: string) {
  const next = new Set(done.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  done.value = next;
  save();
}
function reset() {
  done.value = new Set();
  save();
}

const phaseDone = (pi: number) => tasks[pi]!.items.filter((i) => done.value.has(i.id)).length;
const phaseTotal = (pi: number) => tasks[pi]!.items.length;
const total = computed(() => done.value.size);
const current = computed(() => {
  const i = tasks.findIndex((p) => p.items.filter((x) => x.main).some((x) => !done.value.has(x.id)));
  return i === -1 ? tasks.length - 1 : i;
});
const nextTask = computed(() => tasks[current.value]!.items.find((x) => x.main && !done.value.has(x.id)) ?? null);

// "Where am I?" quick placement
const level = ref("1-30");
const season = ref("no");
const placement = computed(() => {
  if (season.value === "graduated") return level.value === "70-75" ? 6 : 4;
  if (level.value === "1-30") return 1;
  if (level.value === "31-55") return 2;
  return 3;
});
const open = ref<number | null>(null);
onMounted(() => {
  open.value = current.value;
});
</script>

<template>
  <div class="page">
    <header class="page-head container">
      <h1>{{ t("rm.title") }}</h1>
      <p>{{ t("rm.sub") }}</p>
      <AsOfBadge />
    </header>

    <section class="container rm-top">
      <div class="rm-now" aria-live="polite">
        <span class="rm-count num">{{ total }}<small>/{{ allIds.length }}</small></span>
        <div>
          <p class="rm-label">{{ t("rm.next") }}</p>
          <p v-if="nextTask" class="rm-next">{{ L(nextTask.text) }}</p>
          <p v-else class="rm-next">{{ t("rm.allDone") }}</p>
          <p class="rm-phase">{{ t("rm.phase", { n: current + 1, name: L(ROADMAP[current]!.title) }) }}</p>
        </div>
      </div>

      <form class="rm-where" @submit.prevent="open = placement">
        <h2>{{ t("rm.whereTitle") }}</h2>
        <div class="row-2">
          <div class="field">
            <label for="rm-level">{{ t("rm.level") }}</label>
            <select id="rm-level" v-model="level" class="select">
              <option value="1-30">Lv 1-30</option>
              <option value="31-55">Lv 31-55</option>
              <option value="56-69">Lv 56-69</option>
              <option value="70-75">Lv 70-75</option>
            </select>
          </div>
          <div class="field">
            <label for="rm-season">{{ t("rm.season") }}</label>
            <select id="rm-season" v-model="season" class="select">
              <option value="no">{{ t("rm.seasonNo") }}</option>
              <option value="playing">{{ t("rm.seasonPlaying") }}</option>
              <option value="graduated">{{ t("rm.seasonDone") }}</option>
            </select>
          </div>
        </div>
        <p class="rm-suggest">
          {{ t("rm.suggest", { n: placement + 1, name: L(ROADMAP[placement]!.title) }) }}
        </p>
        <button type="submit" class="btn btn-ghost">
          {{ t("rm.jump") }} <PhArrowRight :size="16" weight="bold" aria-hidden="true" />
        </button>
      </form>
    </section>

    <section class="container rm-list" aria-label="Roadmap checklist">
      <details
        v-for="(p, pi) in ROADMAP"
        :key="pi"
        class="rm-phase-box"
        :open="open === pi"
        :data-done="phaseDone(pi) === phaseTotal(pi)"
        @toggle="(e) => { if ((e.target as HTMLDetailsElement).open) open = pi; }"
      >
        <summary>
          <CodexIcon :r="p.icon" :size="40" />
          <span class="rm-phase-title">
            <strong>{{ pi + 1 }}. {{ L(p.title) }}</strong>
            <small>{{ L(p.when) }} · {{ L(p.goal) }}</small>
          </span>
          <span class="rm-phase-count num">{{ phaseDone(pi) }}/{{ phaseTotal(pi) }}</span>
        </summary>
        <ul class="rm-tasks">
          <li v-for="it in tasks[pi]!.items" :key="it.id" :class="{ minor: !it.main }">
            <label>
              <input type="checkbox" :checked="done.has(it.id)" @change="toggle(it.id)" />
              <span>{{ L(it.text) }}</span>
            </label>
          </li>
        </ul>
        <div class="chip-row">
          <CodexChip v-for="(r, j) in p.refs" :key="j" :r="r" />
        </div>
      </details>
      <button type="button" class="btn btn-ghost rm-reset" @click="reset">
        <PhArrowCounterClockwise :size="16" weight="bold" aria-hidden="true" /> {{ t("rm.reset") }}
      </button>
      <p class="note-line">{{ t("rm.storage") }}</p>
    </section>
  </div>
</template>
