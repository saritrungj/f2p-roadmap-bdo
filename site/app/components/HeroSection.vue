<script setup lang="ts">
import { motion } from "motion-v";
import { PhArrowRight, PhMapTrifold } from "@phosphor-icons/vue";

const { t } = useI18n();
const ease = [0.16, 1, 0.3, 1] as const;
// Transform-only entrance: SSR HTML stays fully visible even if the animation never runs.
const enter = (i: number) => ({
  initial: { y: 18 },
  animate: { y: 0 },
  transition: { duration: 0.7, delay: 0.08 * i, ease },
});
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-grid">
      <div>
        <motion.p class="hero-eyebrow" v-bind="enter(0)">
          <PhMapTrifold :size="18" weight="bold" aria-hidden="true" />
          {{ t("hero.eyebrow") }}
        </motion.p>
        <motion.h1 v-bind="enter(1)">
          <span class="line">{{ t("hero.line1") }}</span>
          <em class="line">{{ t("hero.line2") }}</em>
        </motion.h1>
        <motion.p class="hero-sub" v-bind="enter(2)">{{ t("hero.sub") }}</motion.p>
        <motion.div class="hero-ctas" v-bind="enter(3)">
          <a href="#tools" class="btn btn-primary">
            {{ t("nav.cta") }} <PhArrowRight :size="18" weight="bold" aria-hidden="true" />
          </a>
          <a href="#roadmap" class="btn btn-ghost">{{ t("hero.ctaRoadmap") }}</a>
        </motion.div>
      </div>
      <motion.div :initial="{ y: 24 }" :animate="{ y: 0 }" :transition="{ duration: 0.9, delay: 0.15, ease }">
        <QuickCheck />
      </motion.div>
    </div>
  </section>
</template>
