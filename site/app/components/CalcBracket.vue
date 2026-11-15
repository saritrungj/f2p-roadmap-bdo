<script setup lang="ts">
const { t } = useI18n();
const ap = ref("261");
const dp = ref("300");
const r = computed(() => ({
  a: apBracket(num(ap.value)),
  d: dpBracket(num(dp.value)),
  apv: num(ap.value),
  dpv: num(dp.value),
}));
</script>

<template>
  <div>
    <CalcHeader :title="t('bracket.title')" :desc="t('bracket.desc')" :icon="{ item: 747206 }" />
    <div class="calc-grid">
      <div class="fields">
        <NumberField v-model="ap" :label="t('bracket.ap')" :max="1000" />
        <NumberField v-model="dp" :label="t('bracket.dp')" :max="1000" />
        <CalcNote>{{ t("bracket.split") }}</CalcNote>
      </div>
      <ResultBox
        :label="t('bracket.bonus')"
        :value="`+${fmt(r.a.bonus)}`"
        unit="AP"
        :rows="[
          [t('bracket.nextAp'), r.a.nextAt ? t('bracket.nextApV', { n: fmt(r.a.nextAt - r.apv), b: r.a.nextBonus }) : t('bracket.top')],
          [t('bracket.dr'), `${fmt(r.d.bonus)}%`],
          [t('bracket.nextDp'), r.d.nextAt ? t('bracket.nextDpV', { n: fmt(r.d.nextAt - r.dpv), b: r.d.nextBonus }) : t('bracket.top')],
        ]"
      >
        <CalcNote>{{ t("bracket.note") }}</CalcNote>
      </ResultBox>
    </div>
  </div>
</template>
