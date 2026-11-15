<script setup lang="ts">
import type { L } from "~/data/content";

interface FeedItem {
  region: "asia" | "kr" | "gl";
  id: string;
  url: string;
  title: string;
  published: string | null;
  spoiler: boolean;
  reviewed: boolean;
  reviewedAt?: string;
  kind: string;
  headline: L;
  summary: L;
  highlights: { tag: string; text: L }[];
  f2p_impact: L;
  calculator_impacts: { calculator: string; note: L }[];
  dates: { date: string; text: L }[];
  confidence: "high" | "medium" | "low";
}

// Only files that passed `npm run patch:approve` live in this folder.
const modules = import.meta.glob<FeedItem>("../data/patch-feed/*.json", { eager: true, import: "default" });
const items = Object.values(modules)
  .filter((x) => x.reviewed)
  .sort((a, b) => Number(b.id) - Number(a.id));

const { t } = useI18n();
const { t: L } = useCodex();
const regions = ["asia", "kr", "gl"] as const;
const active = ref<(typeof regions)[number]>("asia");
const shown = computed(() => items.filter((x) => x.region === active.value).slice(0, 6));
const count = (r: string) => items.filter((x) => x.region === r).length;
</script>

<template>
  <div class="feed reveal">
    <div class="feed-head">
      <h3>{{ t("feed.title") }}</h3>
      <p>{{ t("feed.sub") }}</p>
    </div>
    <div class="feed-tabs" role="tablist" :aria-label="t('feed.title')">
      <button
        v-for="r in regions"
        :id="`feed-tab-${r}`"
        :key="r"
        type="button"
        role="tab"
        :aria-selected="r === active"
        aria-controls="feed-panel"
        @click="active = r"
      >
        {{ t(`feed.region.${r}`) }}
        <span class="feed-count">{{ count(r) }}</span>
      </button>
    </div>
    <div id="feed-panel" role="tabpanel" :aria-labelledby="`feed-tab-${active}`">
      <p v-if="active !== 'asia'" class="feed-spoiler">{{ t("feed.spoilerNote") }}</p>
      <p v-if="shown.length === 0" class="feed-empty">{{ t("feed.empty") }}</p>
      <article v-for="x in shown" :key="x.region + x.id" class="feed-item">
        <div class="feed-meta">
          <span class="feed-badge">{{ t(`feed.kind.${x.kind}`) }}</span>
          <span v-if="x.spoiler" class="feed-badge feed-badge-spoiler">{{ t("feed.spoiler") }}</span>
          <span v-if="x.confidence !== 'high'" class="feed-badge">{{ t(`feed.conf.${x.confidence}`) }}</span>
          <time v-if="x.published">{{ x.published }}</time>
        </div>
        <h4>{{ L(x.headline) }}</h4>
        <p>{{ L(x.summary) }}</p>
        <ul v-if="x.highlights.length">
          <li v-for="(h, i) in x.highlights" :key="i">{{ L(h.text) }}</li>
        </ul>
        <p class="feed-f2p"><strong>{{ t("feed.f2p") }}</strong> {{ L(x.f2p_impact) }}</p>
        <ul v-if="x.calculator_impacts.length" class="feed-calc">
          <li v-for="(c, i) in x.calculator_impacts" :key="i">
            <strong>{{ t(`bench.tabs.${c.calculator}`) }}:</strong> {{ L(c.note) }}
          </li>
        </ul>
        <a :href="x.url" target="_blank" rel="noopener noreferrer">{{ t("feed.source") }}</a>
      </article>
    </div>
    <p class="feed-foot">{{ t("feed.howMade") }}</p>
  </div>
</template>
