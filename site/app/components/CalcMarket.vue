<script setup lang="ts">
import { FAME_TIERS } from "~/data/bdo";

const { t, tm, rt } = useI18n();
const price = ref("250000000");
const qty = ref("1");
const vp = ref(false);
const fame = ref("0");
const ring = ref(false);

const fameOptions = computed(() =>
  (tm("market.fameTiers") as unknown[]).map((m, i) => ({ value: String(i), label: rt(m as never) })),
);
const r = computed(() => {
  const gross = num(price.value) * num(qty.value);
  const f = FAME_TIERS[Number(fame.value)]?.bonus ?? 0;
  const rate = marketRetainRate({ valuePack: vp.value, fame: f, ring: ring.value });
  const vpDiff =
    gross *
    (marketRetainRate({ valuePack: true, fame: f, ring: ring.value }) -
      marketRetainRate({ valuePack: false, fame: f, ring: ring.value }));
  return { gross, rate, net: gross * rate, vpDiff };
});
</script>

<template>
  <div>
    <CalcHeader :title="t('market.title')" :desc="t('market.desc')" :icon="{ item: 47031 }" />
    <div class="calc-grid">
      <div class="fields">
        <div class="row-2">
          <NumberField v-model="price" :label="t('market.price')" />
          <NumberField v-model="qty" :label="t('market.qty')" />
        </div>
        <ToggleField v-model="vp" :label="t('market.vp')" :hint="t('market.vpHint')" />
        <SelectField v-model="fame" :label="t('market.fame')" :options="fameOptions" />
        <ToggleField v-model="ring" :label="t('market.ring')" :hint="t('market.ringHint')" />
      </div>
      <ResultBox
        :label="t('market.net')"
        :value="silver(r.net)"
        unit="Silver"
        :rows="[
          [t('market.gross'), silver(r.gross)],
          [t('market.rate'), `${fmt2(r.rate * 100)}%`],
          [t('market.tax'), silver(r.gross - r.net)],
          [vp ? t('market.vpGain') : t('market.vpWould'), silver(r.vpDiff)],
        ]"
      >
        <CalcNote>{{ t("market.note") }}</CalcNote>
      </ResultBox>
    </div>
  </div>
</template>
