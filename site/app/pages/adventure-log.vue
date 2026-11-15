<script setup lang="ts">
import {
  PhArrowDown,
  PhArrowCounterClockwise,
  PhBookOpenText,
  PhCaretDown,
  PhCheck,
  PhCheckCircle,
  PhMapPin,
  PhLockKey,
  PhArrowSquareOut,
  PhUser,
  PhPlayCircle,
  PhImages,
} from "@phosphor-icons/vue";
import { LOGS } from "~/data/adventure-logs";
import { STEPS as STEPS_A, MEDIA as MEDIA_A, ytThumb, ytUrl } from "~/data/adventure-log-places";
import { STEPS_MORE, MEDIA_MORE } from "~/data/adventure-log-places-more";

const STEPS = { ...STEPS_A, ...STEPS_MORE };
// Per-log media merges: a log-level entry from either file wins field by field.
const MEDIA: typeof MEDIA_A = { ...MEDIA_A };
for (const [k, v] of Object.entries(MEDIA_MORE)) MEDIA[k] = { ...MEDIA[k], ...v };

const { t } = useI18n();
const { t: L } = useCodex();
useHead({ title: () => `${t("al.title")} | Northern-east heroic` });

const ordered = [...LOGS].sort((a, b) => a.order - b.order);
const KEY = "neh-alog-v1";
const allIds = LOGS.flatMap((l) => l.volumes.map((v) => `${l.id}:${v.id}`));
const done = ref<Set<string>>(new Set());
const filter = ref<"all" | "todo">("all");
const open = ref<Set<string>>(new Set([ordered[0]!.id]));

onMounted(() => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) done.value = new Set((JSON.parse(raw) as string[]).filter((id) => allIds.includes(id)));
  } catch {
    /* storage unavailable: the checklist still works for this visit */
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
function setLog(logId: string, on: boolean) {
  const log = LOGS.find((l) => l.id === logId)!;
  const next = new Set(done.value);
  for (const v of log.volumes) {
    const id = `${logId}:${v.id}`;
    if (on) next.add(id);
    else next.delete(id);
  }
  done.value = next;
  save();
}
function reset() {
  if (!confirm(t("al.resetConfirm"))) return;
  done.value = new Set();
  save();
}
function toggleOpen(id: string) {
  const next = new Set(open.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  open.value = next;
}

const count = (logId: string) => LOGS.find((l) => l.id === logId)!.volumes.filter((v) => done.value.has(`${logId}:${v.id}`)).length;
const total = computed(() => allIds.length);
const finished = computed(() => allIds.filter((id) => done.value.has(id)).length);
const pct = computed(() => (total.value ? finished.value / total.value : 0));

// First unfinished volume in the recommended order.
const next = computed(() => {
  for (const l of ordered) {
    const v = l.volumes.find((x) => !done.value.has(`${l.id}:${x.id}`));
    if (v) return { log: l, vol: v };
  }
  return null;
});
function goNext() {
  if (!next.value) return;
  const n = next.value;
  const s = new Set(open.value);
  s.add(n.log.id);
  open.value = s;
  nextTick(() => document.getElementById(`vol-${n.log.id}-${n.vol.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
}
function jump(id: string) {
  const s = new Set(open.value);
  s.add(id);
  open.value = s;
  nextTick(() => document.getElementById(`log-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
}
const visible = (logId: string, volId: string) => filter.value === "all" || !done.value.has(`${logId}:${volId}`);
</script>

<template>
  <div class="page al-page">
    <header class="page-head container">
      <h1>{{ t("al.title") }}</h1>
      <p>{{ t("al.lead") }}</p>
      <AsOfBadge />
    </header>

    <div class="container al-top">
      <section class="al-progress spot-card" :aria-label="t('al.progress')">
        <div class="al-progress-num">
          <strong>{{ finished }}</strong>
          <span>/ {{ total }} {{ t("al.volumes") }}</span>
        </div>
        <div class="meter" role="progressbar" :aria-valuenow="finished" :aria-valuemin="0" :aria-valuemax="total">
          <span :style="{ transform: `scaleX(${pct})` }" />
        </div>
        <div v-if="next" class="al-next">
          <span>{{ t("al.next") }}</span>
          <strong>{{ L(next.log.name) }}: {{ L(next.vol.title) }}</strong>
          <button type="button" class="btn btn-primary" @click="goNext">
            {{ t("al.go") }}
            <PhArrowDown :size="18" weight="bold" aria-hidden="true" />
          </button>
        </div>
        <p v-else class="al-next">
          <PhCheckCircle :size="20" weight="fill" aria-hidden="true" /> {{ t("al.allDone") }}
        </p>
      </section>

      <nav class="al-rail" :aria-label="t('al.order')">
        <h2>{{ t("al.order") }}</h2>
        <ol class="stagger">
          <li v-for="l in ordered" :key="l.id">
            <button type="button" @click="jump(l.id)">
              <span class="al-rail-n">{{ l.order }}</span>
              <span class="al-rail-name">{{ L(l.name) }}</span>
              <span class="al-rail-count">{{ count(l.id) }}/{{ l.volumes.length }}</span>
            </button>
          </li>
        </ol>
      </nav>
    </div>

    <div class="container al-tools">
      <div class="seg" role="group" :aria-label="t('al.filter')">
        <button type="button" :aria-pressed="filter === 'all'" @click="filter = 'all'">{{ t("al.showAll") }}</button>
        <button type="button" :aria-pressed="filter === 'todo'" @click="filter = 'todo'">{{ t("al.showTodo") }}</button>
      </div>
      <button type="button" class="btn btn-ghost al-reset" @click="reset">
        <PhArrowCounterClockwise :size="16" weight="bold" aria-hidden="true" /> {{ t("al.reset") }}
      </button>
    </div>

    <div class="container al-list">
      <article v-for="l in ordered" :id="`log-${l.id}`" :key="l.id" class="al-log spot-card" :data-done="count(l.id) === l.volumes.length">
        <button
          type="button"
          class="al-log-head"
          :aria-expanded="open.has(l.id)"
          :aria-controls="`log-body-${l.id}`"
          @click="toggleOpen(l.id)"
        >
          <span class="al-log-icon" aria-hidden="true">
            <CodexIcon v-if="l.icon" :r="l.icon" :size="44" />
            <PhBookOpenText v-else :size="28" weight="duotone" />
          </span>
          <span class="al-log-title">
            <strong>{{ L(l.name) }}</strong>
            <small>{{ L(l.why) }}</small>
          </span>
          <span class="al-log-meta">
            <span class="al-effort" :data-e="l.effort">{{ t(`al.effort${l.effort}`) }}</span>
            <span class="al-log-count">{{ count(l.id) }}/{{ l.volumes.length }}</span>
            <PhCaretDown class="al-caret" :size="18" weight="bold" aria-hidden="true" />
          </span>
        </button>

        <div v-show="open.has(l.id)" :id="`log-body-${l.id}`" class="al-log-body">
          <dl class="al-facts">
            <div>
              <dt><PhLockKey :size="16" weight="bold" aria-hidden="true" /> {{ t("al.unlock") }}</dt>
              <dd>{{ L(l.unlock) }}</dd>
            </div>
            <div>
              <dt><PhMapPin :size="16" weight="bold" aria-hidden="true" /> {{ t("al.start") }}</dt>
              <dd>{{ L(l.start) }}</dd>
            </div>
            <div class="al-facts-wide">
              <dt>{{ t("al.total") }}</dt>
              <dd class="al-total">{{ L(l.total) }}</dd>
            </div>
          </dl>
          <p v-if="l.note" class="topic-callout al-note">{{ L(l.note) }}</p>

          <div class="al-log-actions">
            <button type="button" class="link-btn" @click="setLog(l.id, true)">{{ t("al.markAll") }}</button>
            <button type="button" class="link-btn" @click="setLog(l.id, false)">{{ t("al.clearAll") }}</button>
          </div>

          <ol class="al-vols">
            <template v-for="v in l.volumes" :key="v.id">
              <li v-if="visible(l.id, v.id)" :id="`vol-${l.id}-${v.id}`" class="al-vol" :data-on="done.has(`${l.id}:${v.id}`)">
                <button
                  type="button"
                  class="tick"
                  role="checkbox"
                  :aria-checked="done.has(`${l.id}:${v.id}`)"
                  :data-on="done.has(`${l.id}:${v.id}`)"
                  :aria-label="`${L(l.name)}: ${L(v.title)}`"
                  @click="toggle(`${l.id}:${v.id}`)"
                >
                  <PhCheck v-if="done.has(`${l.id}:${v.id}`)" :size="16" weight="bold" aria-hidden="true" />
                </button>
                <details class="al-vol-body">
                  <summary>
                    <span class="al-vol-title">{{ L(v.title) }}</span>
                    <span class="al-reward" :class="{ 'al-reward-stat': v.stat }">{{ L(v.reward) }}</span>
                  </summary>
                  <ol v-if="STEPS[`${l.id}:${v.id}`]" class="al-steps">
                    <li v-for="(st, j) in STEPS[`${l.id}:${v.id}`]" :key="j">
                      <span class="al-step-do">{{ L(st.do) }}</span>
                      <span v-if="st.at" class="al-step-at">
                        <PhMapPin :size="14" weight="fill" aria-hidden="true" /><span class="sr-only">{{ t("al.where") }}:</span>
                        {{ L(st.at) }}
                      </span>
                      <span v-if="st.npc" class="al-step-npc">
                        <PhUser :size="14" weight="fill" aria-hidden="true" /><span class="sr-only">{{ t("al.npc") }}:</span>
                        {{ st.npc }}
                      </span>
                    </li>
                  </ol>
                  <ul v-else class="al-how">
                    <li v-for="(h, j) in v.how" :key="j">{{ L(h) }}</li>
                  </ul>
                  <div v-if="MEDIA[`${l.id}:${v.id}`]?.videos" class="al-videos al-videos-sm">
                    <a
                      v-for="vd in MEDIA[`${l.id}:${v.id}`]!.videos"
                      :key="vd.id"
                      :href="ytUrl(vd)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="al-video"
                    >
                      <span class="al-thumb">
                        <img :src="ytThumb(vd.id)" :alt="''" loading="lazy" width="160" height="90" />
                        <PhPlayCircle :size="34" weight="fill" class="al-play" aria-hidden="true" />
                      </span>
                      <span class="al-video-title">{{ vd.title }}</span>
                    </a>
                  </div>
                </details>
              </li>
            </template>
          </ol>

          <section v-if="MEDIA[l.id]" class="al-media" :aria-label="t('al.media')">
            <h3>{{ t("al.media") }}</h3>
            <div v-if="MEDIA[l.id]!.videos" class="al-videos">
              <a v-for="vd in MEDIA[l.id]!.videos" :key="vd.id" :href="ytUrl(vd)" target="_blank" rel="noopener noreferrer" class="al-video">
                <span class="al-thumb">
                  <img :src="ytThumb(vd.id)" :alt="''" loading="lazy" width="320" height="180" />
                  <PhPlayCircle :size="44" weight="fill" class="al-play" aria-hidden="true" />
                </span>
                <span class="al-video-title">{{ vd.title }}</span>
              </a>
            </div>
            <a v-if="MEDIA[l.id]!.photos" :href="MEDIA[l.id]!.photos!.url" target="_blank" rel="noopener noreferrer" class="al-photos">
              <PhImages :size="20" weight="duotone" aria-hidden="true" />
              <span>
                <strong>{{ t("al.photos") }}</strong>
                <small>{{ MEDIA[l.id]!.photos!.label }}</small>
              </span>
              <PhArrowSquareOut :size="14" weight="bold" aria-hidden="true" />
            </a>
            <p class="note-line">{{ t("al.videoNote") }}</p>
          </section>

          <footer class="al-src">
            <span>{{ t("data.sources") }}:</span>
            <a v-for="s in l.sources" :key="s.url" :href="s.url" target="_blank" rel="noopener noreferrer" class="ulink">
              {{ s.label }}<template v-if="s.date"> ({{ s.date }})</template><template v-if="s.community"> · {{ t("al.community") }}</template>
              <PhArrowSquareOut :size="13" weight="bold" aria-hidden="true" />
            </a>
          </footer>
        </div>
      </article>
    </div>
  </div>
</template>
