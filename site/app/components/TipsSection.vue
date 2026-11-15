<script setup lang="ts">
import { PhPlus } from "@phosphor-icons/vue";
import { TIPS } from "~/data/content";

const { t } = useI18n();
const { t: L } = useCodex();
</script>

<template>
  <section id="tips" class="section">
    <div class="container">
      <div class="section-head reveal">
        <h2>{{ t("tips.title") }}</h2>
        <p>{{ t("tips.sub") }}</p>
      </div>
      <div class="tips">
        <details v-for="(x, i) in TIPS" :key="i" class="tip" :open="i === 1">
          <summary>
            <span class="tip-q">
              <CodexIcon :r="x.icon" :size="34" />
              {{ L(x.q) }}
            </span>
            <PhPlus :size="22" weight="bold" aria-hidden="true" />
          </summary>
          <p class="tip-body">{{ L(x.a) }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
