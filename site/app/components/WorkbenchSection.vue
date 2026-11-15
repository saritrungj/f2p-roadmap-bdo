<script setup lang="ts">
import { motion } from "motion-v";
import type { Ref } from "~/data/content";
import CalcBracket from "./CalcBracket.vue";
import CalcEnergy from "./CalcEnergy.vue";
import CalcEnhance from "./CalcEnhance.vue";
import CalcGrind from "./CalcGrind.vue";
import CalcMarket from "./CalcMarket.vue";
import CalcSpots from "./CalcSpots.vue";

const { t } = useI18n();
const tabs: { id: string; icon: Ref; el: Component }[] = [
  { id: "market", icon: { item: 47031 }, el: CalcMarket },
  { id: "enhance", icon: { item: 16001 }, el: CalcEnhance },
  { id: "bracket", icon: { item: 747206 }, el: CalcBracket },
  { id: "spots", icon: { item: 44322 }, el: CalcSpots },
  { id: "grind", icon: { item: 4 }, el: CalcGrind },
  { id: "energy", icon: { item: 17501 }, el: CalcEnergy },
];
const active = ref("market");
const current = computed(() => tabs.find((x) => x.id === active.value)!.el);
</script>

<template>
  <section id="tools" class="section">
    <div class="container">
      <div class="section-head reveal">
        <h2>{{ t("bench.title") }}</h2>
        <p>{{ t("bench.sub") }}</p>
      </div>
      <div class="bench">
        <div class="bench-tabs" role="tablist" :aria-label="t('bench.choose')">
          <button
            v-for="x in tabs"
            :id="`tab-${x.id}`"
            :key="x.id"
            type="button"
            role="tab"
            class="bench-tab"
            :aria-selected="x.id === active"
            aria-controls="bench-panel"
            @click="active = x.id"
          >
            <CodexIcon :r="x.icon" :size="26" />
            <span>{{ t(`bench.tabs.${x.id}`) }}</span>
          </button>
        </div>
        <div id="bench-panel" class="bench-panel" role="tabpanel" :aria-labelledby="`tab-${active}`">
          <!-- Enter-only motion: the new panel mounts at once and never waits on an exit animation. -->
          <motion.div
            :key="active"
            :initial="{ opacity: 0.4, y: 8 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }"
          >
            <component :is="current" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>
