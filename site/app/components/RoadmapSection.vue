<script setup lang="ts">
import { ROADMAPS, type RoadmapTrack } from "~/data/content";

const { t } = useI18n();
const { t: L } = useCodex();
const localePath = useLocalePath();

const currentTrack = ref<RoadmapTrack>("f2p");
const track = computed(() => ROADMAPS[currentTrack.value]);

const trackOptions = computed(() => [
  { value: "f2p" as const, label: t("roadmap.f2pTab") },
  { value: "spender_essential" as const, label: t("roadmap.spenderEssentialTab") },
  { value: "spender_whale" as const, label: t("roadmap.spenderWhaleTab") },
]);
</script>

<template>
  <section id="roadmap" class="section" style="background: var(--surface)">
    <div class="container roadmap">
      <div class="roadmap-intro">
        <h2 style="font-size: clamp(1.8rem, 3.6vw, 2.75rem)">{{ t("roadmap.title") }}</h2>
        <p style="margin-top: 14px; color: var(--ink-2); max-width: 44ch">{{ t("roadmap.sub") }}</p>

        <div style="margin-top: 20px">
          <label style="display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 8px; color: var(--ink-2)">
            {{ t("roadmap.chooseTrack") }}
          </label>
          <div class="seg" style="display: flex; flex-wrap: wrap; gap: 6px">
            <button
              v-for="opt in trackOptions"
              :key="opt.value"
              type="button"
              class="btn btn-ghost"
              :style="currentTrack === opt.value ? 'background: var(--accent); color: var(--on-accent); font-weight: 600' : ''"
              :aria-pressed="currentTrack === opt.value"
              @click="currentTrack = opt.value"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <div class="budget">
          <span style="display: inline-block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.9; margin-bottom: 4px">
            {{ L(track.badge) }}
          </span>
          <strong class="num">{{ L(track.budget) }}</strong>
          <p>{{ L(track.budgetSub) }}</p>
        </div>

        <div v-if="track.highlights && track.highlights.length" style="margin-top: 18px; padding: 14px 16px; border-radius: var(--radius); background: var(--bg); border: 1px solid var(--line)">
          <strong style="font-size: 0.88rem; color: var(--ink); display: block; margin-bottom: 8px">
            {{ t("roadmap.highlights") }}
          </strong>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.86rem; color: var(--ink-2); display: grid; gap: 4px">
            <li v-for="(h, hi) in track.highlights" :key="hi">{{ L(h) }}</li>
          </ul>
        </div>

        <NuxtLink :to="localePath({ path: '/roadmap', query: { track: currentTrack } })" class="btn btn-ghost" style="margin-top: 18px">
          {{ t("rm.cta") }}
        </NuxtLink>
      </div>

      <ol class="phases">
        <li v-for="(p, i) in track.phases" :key="`${currentTrack}-${i}`" class="phase reveal">
          <span class="phase-num" aria-hidden="true">
            <CodexIcon :r="p.icon" :size="40" />
            <i>{{ i + 1 }}</i>
          </span>
          <div>
            <h3>{{ L(p.title) }}</h3>
            <span class="when">{{ L(p.when) }} · {{ L(p.goal) }}</span>
            <ul>
              <li v-for="(s, j) in p.steps" :key="j">{{ L(s) }}</li>
            </ul>
            <div class="chip-row">
              <CodexChip v-for="(r, j) in p.refs" :key="j" :r="r" />
            </div>
            <details>
              <summary>{{ t("roadmap.more") }}</summary>
              <ul>
                <li v-for="(d, j) in p.details" :key="j">{{ L(d) }}</li>
              </ul>
            </details>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

