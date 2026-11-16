<script setup lang="ts">
import { PhArrowRight, PhArrowCounterClockwise } from "@phosphor-icons/vue";
import { ROADMAPS, type RoadmapTrack } from "~/data/content";

const { t } = useI18n();
const { t: L } = useCodex();
const route = useRoute();
const router = useRouter();

useHead({ title: () => `${t("rm.title")} | Northern-east heroic` });

// Track selection (f2p | spender_essential | spender_whale)
const validTracks: RoadmapTrack[] = ["f2p", "spender_essential", "spender_whale"];
const initialTrack = (typeof route.query.track === "string" && validTracks.includes(route.query.track as RoadmapTrack))
  ? (route.query.track as RoadmapTrack)
  : "f2p";

const currentTrack = ref<RoadmapTrack>(initialTrack);
const trackMeta = computed(() => ROADMAPS[currentTrack.value]);

const trackOptions = computed(() => [
  { value: "f2p" as const, label: t("rm.f2p") },
  { value: "spender_essential" as const, label: t("rm.spenderEssential") },
  { value: "spender_whale" as const, label: t("rm.spenderWhale") },
]);

function getStorageKey(trackId: RoadmapTrack) {
  return `neh-roadmap-v2-${trackId}`;
}

const tasks = computed(() =>
  trackMeta.value.phases.map((p, pi) => ({
    phase: pi,
    items: [
      ...p.steps.map((s, si) => ({ id: `${currentTrack.value}-${pi}-s${si}`, text: s, main: true })),
      ...p.details.map((s, di) => ({ id: `${currentTrack.value}-${pi}-d${di}`, text: s, main: false })),
    ],
  }))
);

const allIds = computed(() => tasks.value.flatMap((x) => x.items.map((i) => i.id)));
const done = ref<Set<string>>(new Set());

function loadDone(trackId: RoadmapTrack) {
  try {
    const key = getStorageKey(trackId);
    let raw = localStorage.getItem(key);
    // Backward compatibility for F2P legacy keys
    if (!raw && trackId === "f2p") {
      raw = localStorage.getItem("neh-roadmap-v1") ?? localStorage.getItem("esan-roadmap-v1");
      if (raw) {
        // Map old IDs `${pi}-s${si}` to new format `f2p-${pi}-s${si}`
        const oldIds = JSON.parse(raw) as string[];
        const migrated = oldIds.map((id) => (id.startsWith("f2p-") ? id : `f2p-${id}`));
        done.value = new Set(migrated);
        return;
      }
    }
    if (raw) {
      done.value = new Set((JSON.parse(raw) as string[]).filter((id) => allIds.value.includes(id)));
    } else {
      done.value = new Set();
    }
  } catch {
    done.value = new Set();
  }
}

function save() {
  try {
    localStorage.setItem(getStorageKey(currentTrack.value), JSON.stringify([...done.value]));
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

function switchTrack(trackId: RoadmapTrack) {
  currentTrack.value = trackId;
  router.replace({ query: { ...route.query, track: trackId } });
  loadDone(trackId);
  open.value = current.value;
}

onMounted(() => {
  loadDone(currentTrack.value);
  open.value = current.value;
});

watch(
  () => route.query.track,
  (newTrack) => {
    if (typeof newTrack === "string" && validTracks.includes(newTrack as RoadmapTrack) && newTrack !== currentTrack.value) {
      currentTrack.value = newTrack as RoadmapTrack;
      loadDone(newTrack as RoadmapTrack);
      open.value = current.value;
    }
  }
);

const phaseDone = (pi: number) => tasks.value[pi]?.items.filter((i) => done.value.has(i.id)).length ?? 0;
const phaseTotal = (pi: number) => tasks.value[pi]?.items.length ?? 0;
const total = computed(() => done.value.size);
const current = computed(() => {
  const i = tasks.value.findIndex((p) => p.items.filter((x) => x.main).some((x) => !done.value.has(x.id)));
  return i === -1 ? tasks.value.length - 1 : i;
});
const nextTask = computed(() => tasks.value[current.value]?.items.find((x) => x.main && !done.value.has(x.id)) ?? null);

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
</script>

<template>
  <div class="page">
    <header class="page-head container">
      <h1>{{ t("rm.title") }}</h1>
      <p>{{ t("rm.sub") }}</p>
      <AsOfBadge />
    </header>

    <!-- Track Selector Banner -->
    <section class="container" style="margin-bottom: 24px">
      <div style="padding: 22px 24px; border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line)">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px">
          <div>
            <span style="display: block; font-size: 0.82rem; font-weight: 600; color: var(--ink-2); text-transform: uppercase; letter-spacing: 0.05em">
              {{ t("rm.track") }}
            </span>
            <strong style="font-size: 1.3rem; font-family: var(--font-display); color: var(--ink)">
              {{ L(trackMeta.title) }}
            </strong>
          </div>
          <div class="seg" style="display: flex; flex-wrap: wrap; gap: 6px">
            <button
              v-for="opt in trackOptions"
              :key="opt.value"
              type="button"
              class="btn btn-ghost"
              :style="currentTrack === opt.value ? 'background: var(--accent); color: var(--on-accent); font-weight: 600' : ''"
              :aria-pressed="currentTrack === opt.value"
              @click="switchTrack(opt.value)"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>
        <p style="margin-top: 10px; color: var(--ink-2); font-size: 0.94rem; max-width: 76ch">
          {{ L(trackMeta.desc) }}
        </p>
        <div style="margin-top: 16px; display: flex; flex-wrap: wrap; gap: 14px; align-items: center; font-size: 0.9rem">
          <span style="padding: 4px 10px; border-radius: 999px; background: var(--surface-2); border: 1px solid var(--line); font-weight: 600">
            {{ L(trackMeta.badge) }}
          </span>
          <span style="color: var(--ink-2)">
            {{ t("rm.budget") }} <strong style="color: var(--accent-text); font-size: 1.05rem">{{ L(trackMeta.budget) }}</strong> ({{ L(trackMeta.budgetSub) }})
          </span>
        </div>
      </div>
    </section>

    <section class="container rm-top">
      <div class="rm-now" aria-live="polite">
        <span class="rm-count num">{{ total }}<small>/{{ allIds.length }}</small></span>
        <div>
          <p class="rm-label">{{ t("rm.next") }}</p>
          <p v-if="nextTask" class="rm-next">{{ L(nextTask.text) }}</p>
          <p v-else class="rm-next">{{ t("rm.allDone") }}</p>
          <p class="rm-phase">
            {{ t("rm.phase", { n: current + 1, name: L(trackMeta.phases[current] ? trackMeta.phases[current]!.title : { th: '', en: '' }) }) }}
          </p>
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
          {{ t("rm.suggest", { n: placement + 1, name: L(trackMeta.phases[placement] ? trackMeta.phases[placement]!.title : { th: '', en: '' }) }) }}
        </p>
        <button type="submit" class="btn btn-ghost">
          {{ t("rm.jump") }} <PhArrowRight :size="16" weight="bold" aria-hidden="true" />
        </button>
      </form>
    </section>

    <section class="container rm-list" aria-label="Roadmap checklist">
      <details
        v-for="(p, pi) in trackMeta.phases"
        :key="`${currentTrack}-${pi}`"
        class="rm-phase-box"
        :open="open === pi"
        :data-done="phaseDone(pi) === phaseTotal(pi) && phaseTotal(pi) > 0"
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
          <li v-for="it in (tasks[pi]?.items ?? [])" :key="it.id" :class="{ minor: !it.main }">
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

