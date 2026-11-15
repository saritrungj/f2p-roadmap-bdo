<script setup lang="ts">
import { ENHANCE } from "~/data/bdo";

const { t } = useI18n();
const fs = ref(20);
const step = ENHANCE.accessory[0]!;
const chance = computed(() => enhanceChance(step, fs.value));
</script>

<template>
  <div class="quick">
    <div class="quick-head">
      <CodexIcon :r="{ item: 12140 }" :size="36" />
      <span>{{ t("quick.title") }}</span>
    </div>
    <label class="quick-label" for="quick-fs">
      Failstack <strong class="num">{{ fs }}</strong>
    </label>
    <input id="quick-fs" v-model.number="fs" class="quick-range" type="range" min="0" max="60" />
    <div class="quick-out">
      <span>{{ t("quick.chance") }}</span>
      <strong class="num">{{ fmt2(chance) }}%</strong>
    </div>
    <dl class="result-list">
      <div>
        <dt>{{ t("quick.avg") }}</dt>
        <dd>{{ t("quick.times", { n: fmt2(100 / chance) }) }}</dd>
      </div>
      <div>
        <dt>{{ t("quick.within2") }}</dt>
        <dd>{{ fmt2(successWithin(chance, 2) * 100) }}%</dd>
      </div>
      <div>
        <dt>{{ t("quick.after18") }}</dt>
        <dd>{{ t("quick.after18v") }}</dd>
      </div>
    </dl>
  </div>
</template>
