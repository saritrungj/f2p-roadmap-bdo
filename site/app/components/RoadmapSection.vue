<script setup lang="ts">
import { ROADMAP } from "~/data/content";

const { t } = useI18n();
const { t: L } = useCodex();
const localePath = useLocalePath();
</script>

<template>
  <section id="roadmap" class="section" style="background: var(--surface)">
    <div class="container roadmap">
      <div class="roadmap-intro">
        <h2 style="font-size: clamp(1.8rem, 3.6vw, 2.75rem)">{{ t("roadmap.title") }}</h2>
        <p style="margin-top: 14px; color: var(--ink-2); max-width: 44ch">{{ t("roadmap.sub") }}</p>
        <div class="budget">
          <strong class="num">{{ t("roadmap.budget") }}</strong>
          <p>{{ t("roadmap.budgetSub") }}</p>
        </div>
        <NuxtLink :to="localePath('/roadmap')" class="btn btn-ghost" style="margin-top: 18px">{{ t("rm.cta") }}</NuxtLink>
      </div>
      <ol class="phases">
        <li v-for="(p, i) in ROADMAP" :key="i" class="phase reveal">
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
