<script setup lang="ts">
import { PhArrowLeft, PhArrowRight } from "@phosphor-icons/vue";
import { TOPICS } from "~/data/topics";
import type { Cell } from "~/data/topics-types";

const route = useRoute();
const { t } = useI18n();
const { t: L, lang } = useCodex();
const localePath = useLocalePath();

const topic = computed(() => TOPICS.find((x) => x.slug === route.params.slug));
if (!topic.value) {
  throw createError({ statusCode: 404, statusMessage: "Not found" });
}
useHead({ title: () => `${topic.value ? L(topic.value.title) : ""} | Northern-east heroic` });

const cell = (c: Cell) => (typeof c === "string" ? c : L(c));
const idx = computed(() => TOPICS.findIndex((x) => x.slug === route.params.slug));
const prev = computed(() => TOPICS[idx.value - 1]);
const next = computed(() => TOPICS[idx.value + 1]);
const codexUrl = computed(() => `https://bdocodex.com/${lang.value === "en" ? "seaen" : "th"}/${topic.value!.codexPath}`);
</script>

<template>
  <div v-if="topic" class="page topic">
    <header class="page-head container topic-head">
      <NuxtLink :to="localePath('/data')" class="back">
        <PhArrowLeft :size="16" weight="bold" aria-hidden="true" /> {{ t("data.all") }}
      </NuxtLink>
      <div class="topic-title">
        <CodexIcon :r="topic.icon" :size="56" />
        <h1>{{ L(topic.title) }}</h1>
      </div>
      <p>{{ L(topic.lead) }}</p>
      <div v-if="topic.refs?.length" class="chip-row">
        <CodexChip v-for="(r, i) in topic.refs" :key="i" :r="r" />
      </div>
      <AsOfBadge />
      <NuxtLink v-if="topic.cta" :to="localePath(topic.cta.to)" class="btn btn-primary topic-cta">
        {{ t(topic.cta.label) }} <PhArrowRight :size="18" weight="bold" aria-hidden="true" />
      </NuxtLink>
    </header>

    <div class="container topic-body">
      <section v-for="(s, i) in topic.sections" :key="i" class="topic-sec">
        <h2>{{ L(s.title) }}</h2>
        <ul v-if="s.kind === 'list'" class="topic-list">
          <li v-for="(it, j) in s.items" :key="j">{{ L(it) }}</li>
        </ul>
        <ol v-else-if="s.kind === 'steps'" class="topic-steps">
          <li v-for="(it, j) in s.items" :key="j">{{ L(it) }}</li>
        </ol>
        <p v-else-if="s.kind === 'callout'" class="topic-callout">{{ L(s.body) }}</p>
        <template v-else-if="s.kind === 'table'">
          <div class="plan-table-wrap">
            <table class="plan-table topic-table">
              <thead>
                <tr>
                  <th v-for="(h, j) in s.head" :key="j" scope="col">{{ cell(h) }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, j) in s.rows" :key="j">
                  <component :is="k === 0 ? 'th' : 'td'" v-for="(c, k) in row" :key="k" :scope="k === 0 ? 'row' : undefined">
                    {{ cell(c) }}
                  </component>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-if="s.note" class="note-line">{{ L(s.note) }}</p>
        </template>
      </section>

      <aside class="topic-sources">
        <h2>{{ t("data.sources") }}</h2>
        <ul>
          <li v-for="src in topic.sources" :key="src.url">
            <a :href="src.url" target="_blank" rel="noopener noreferrer">{{ src.label }}</a>
            <span v-if="src.date"> · {{ src.date }}</span>
          </li>
          <li>
            <a :href="codexUrl" target="_blank" rel="noopener noreferrer">BDOCodex</a>
            <span> · {{ t("data.codexMore") }}</span>
          </li>
        </ul>
      </aside>

      <nav class="topic-nav" :aria-label="t('data.more')">
        <NuxtLink v-if="prev" :to="localePath(`/data/${prev.slug}`)">← {{ L(prev.title) }}</NuxtLink>
        <span v-else />
        <NuxtLink v-if="next" :to="localePath(`/data/${next.slug}`)">{{ L(next.title) }} →</NuxtLink>
      </nav>
    </div>
  </div>
</template>
