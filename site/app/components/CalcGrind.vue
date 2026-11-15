<script setup lang="ts">
const { t } = useI18n();
const trash = ref("12000");
const trashPrice = ref("1000");
const market = ref("40000000");
const cost = ref("3000000");
const hours = ref("2");
const vp = ref(false);

const r = computed(() => {
  const rate = marketRetainRate({ valuePack: vp.value, fame: 0, ring: false });
  const tr = num(trash.value) * num(trashPrice.value);
  const m = num(market.value) * rate;
  const perHour = tr + m - num(cost.value);
  return { tr, m, perHour, h: num(hours.value) };
});
</script>

<template>
  <div>
    <CalcHeader :title="t('grind.title')" :desc="t('grind.desc')" :icon="{ item: 4 }" />
    <div class="calc-grid">
      <div class="fields">
        <div class="row-2">
          <NumberField v-model="trash" :label="t('grind.trash')" />
          <NumberField v-model="trashPrice" :label="t('grind.trashPrice')" />
        </div>
        <NumberField v-model="market" :label="t('grind.market')" :help="t('grind.marketHelp')" />
        <div class="row-2">
          <NumberField v-model="cost" :label="t('grind.cost')" />
          <NumberField v-model="hours" :label="t('grind.hours')" :max="24" />
        </div>
        <ToggleField v-model="vp" :label="t('grind.vp')" :hint="t('grind.vpHint')" />
      </div>
      <ResultBox
        :label="t('grind.net')"
        :value="silver(r.perHour)"
        unit="Silver"
        :rows="[
          [t('grind.fromTrash'), silver(r.tr)],
          [t('grind.fromMarket'), silver(r.m)],
          [t('grind.perDay', { h: fmt2(r.h) }), silver(r.perHour * r.h)],
          [t('grind.perWeek'), silver(r.perHour * r.h * 7)],
        ]"
      >
        <CalcNote>{{ t("grind.note") }}</CalcNote>
      </ResultBox>
    </div>
  </div>
</template>
