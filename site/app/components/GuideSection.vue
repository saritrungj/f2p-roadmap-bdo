<script setup lang="ts">
import { motion } from "motion-v";
import { GUIDE } from "~/data/content";
import { TOPICS } from "~/data/topics";

const { t } = useI18n();
const { t: L } = useCodex();
const localePath = useLocalePath();
const active = ref(GUIDE[0]!.id);
const tab = computed(() => GUIDE.find((g) => g.id === active.value)!);
const tabIcon = { basics: { item: 40653 }, life: { item: 16113 }, craft: { item: 4918 }, sail: { item: 49021 } } as const;
</script>

<template>
  <section id="guide" class="section">
    <div class="container guide">
      <div class="section-head reveal">
        <h2>{{ t("guide.title") }}</h2>
        <p>{{ t("guide.sub") }}</p>
      </div>
      <div class="guide-tabs" role="tablist" :aria-label="t('guide.tabs')">
        <button
          v-for="g in GUIDE"
          :id="`guide-tab-${g.id}`"
          :key="g.id"
          type="button"
          role="tab"
          :aria-selected="g.id === active"
          aria-controls="guide-panel"
          @click="active = g.id"
        >
          <CodexIcon :r="tabIcon[g.id]" :size="24" />
          {{ L(g.label) }}
        </button>
      </div>
      <div id="guide-panel" role="tabpanel" :aria-labelledby="`guide-tab-${active}`">
        <motion.div
          :key="active"
          class="guide-body"
          :initial="{ opacity: 0.4, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }"
        >
          <article
            v-for="(c, i) in tab.cards"
            :key="i"
            class="guide-card spot-card"
            :class="{ 'guide-card-wide': c.wide }"
          >
            <div class="guide-card-head">
              <CodexIcon :r="c.icon" :size="44" />
              <h3>{{ L(c.title) }}</h3>
            </div>
            <ul>
              <li v-for="(it, j) in c.items" :key="j">{{ L(it) }}</li>
            </ul>
            <div v-if="c.refs?.length" class="chip-row">
              <CodexChip v-for="(r, j) in c.refs" :key="j" :r="r" />
            </div>
          </article>
        </motion.div>
      </div>
      <div class="codex-links reveal">
        <h3>{{ t("data.title") }}</h3>
        <p>{{ t("data.sub") }}</p>
        <ul>
          <li v-for="x in TOPICS" :key="x.slug">
            <NuxtLink :to="localePath(`/data/${x.slug}`)">
              <CodexIcon :r="x.icon" :size="32" />
              <span>
                <strong>{{ L(x.title) }}</strong>
                <small>{{ L(x.lead) }}</small>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
