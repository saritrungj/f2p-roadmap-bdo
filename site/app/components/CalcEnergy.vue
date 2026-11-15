<script setup lang="ts">
import { ENERGY_MIN_PER_POINT_OFFLINE, ENERGY_MIN_PER_POINT_ONLINE } from "~/data/bdo";

const { t } = useI18n();
const cur = ref("20");
const max = ref("300");
const need = computed(() => Math.max(0, num(max.value) - num(cur.value)));
const labels = computed(() => ({
  full: t("dur.full"),
  d: (n: number) => t("dur.d", { n }),
  h: (n: number) => t("dur.h", { n }),
  m: (n: number) => t("dur.m", { n }),
}));
</script>

<template>
  <div>
    <CalcHeader :title="t('energy.title')" :desc="t('energy.desc')" :icon="{ item: 17501 }" />
    <div class="calc-grid">
      <div class="fields">
        <div class="row-2">
          <NumberField v-model="cur" :label="t('energy.cur')" />
          <NumberField v-model="max" :label="t('energy.max')" />
        </div>
        <CalcNote>{{ t("energy.knowledge") }}</CalcNote>
      </div>
      <ResultBox
        :label="t('energy.online')"
        :value="duration(need * ENERGY_MIN_PER_POINT_ONLINE, labels)"
        :rows="[
          [t('energy.need'), t('energy.points', { n: fmt(need) })],
          [t('energy.offline'), duration(need * ENERGY_MIN_PER_POINT_OFFLINE, labels)],
          [t('energy.rateOn'), t('energy.rateOnV')],
          [t('energy.rateOff'), t('energy.rateOffV')],
        ]"
      >
        <CalcNote>{{ t("energy.note") }}</CalcNote>
      </ResultBox>
    </div>
  </div>
</template>
