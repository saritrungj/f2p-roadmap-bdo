<script setup lang="ts">
import { BLACKSTONE_TO_FS, CRON_NPC_PRICE, ENHANCE, type GearKind } from "~/data/bdo";

const { t } = useI18n();
const localePath = useLocalePath();
const kind = ref<GearKind>("armor");
const level = ref("PRI (I)");
const fs = ref("30");
const tries = ref("10");
const crons = ref("0");
const extra = ref("0");

const kinds = computed(() => [
  { value: "armor", label: t("enhance.armor") },
  { value: "weapon", label: t("enhance.weapon") },
  { value: "accessory", label: t("enhance.accessory") },
]);
const steps = computed(() => ENHANCE[kind.value]);
watch(kind, () => {
  if (!steps.value.some((s) => s.level === level.value)) level.value = steps.value[0]!.level;
});
const levelOptions = computed(() => steps.value.map((s) => ({ value: s.level, label: s.level })));

const r = computed(() => {
  const step = steps.value.find((s) => s.level === level.value) ?? steps.value[0]!;
  const chance = enhanceChance(step, num(fs.value));
  const n = Math.floor(num(tries.value));
  const avg = chance > 0 ? 100 / chance : Infinity;
  const cost = num(crons.value) * CRON_NPC_PRICE + num(extra.value);
  return { chance, n, within: successWithin(chance, n), avg, t90: triesFor(chance, 0.9), cost };
});
const fsTable = computed(() =>
  BLACKSTONE_TO_FS.map(([bs, f]) => t("enhance.fsItem", { bs, fs: f })).join(", "),
);
</script>

<template>
  <div>
    <CalcHeader :title="t('enhance.title')" :desc="t('enhance.desc')" :icon="{ item: 16001 }" />
    <div class="calc-grid">
      <div class="fields">
        <SegmentedField v-model="kind" :label="t('enhance.kind')" :options="kinds" />
        <SelectField v-model="level" :label="t('enhance.level')" :options="levelOptions" />
        <div class="row-2">
          <NumberField v-model="fs" :label="t('enhance.fs')" :max="400" />
          <NumberField v-model="tries" :label="t('enhance.tries')" :max="5000" />
        </div>
        <div class="row-2">
          <NumberField v-model="crons" :label="t('enhance.crons')" :help="t('enhance.cronsHelp')" />
          <NumberField v-model="extra" :label="t('enhance.extra')" :help="t('enhance.extraHelp')" />
        </div>
        <div class="chip-row">
          <CodexChip :r="{ item: 16001 }" />
          <CodexChip :r="{ item: 16002 }" />
          <CodexChip :r="{ item: 16080 }" />
          <CodexChip :r="{ item: 17643 }" />
        </div>
      </div>
      <ResultBox
        :label="t('enhance.chance')"
        :value="`${fmt2(r.chance)}%`"
        :rows="[
          [t('enhance.within', { n: fmt(r.n) }), `${fmt2(r.within * 100)}%`],
          [t('enhance.avg'), Number.isFinite(r.avg) ? t('enhance.times', { n: fmt2(r.avg) }) : '-'],
          [t('enhance.t90'), Number.isFinite(r.t90) ? t('enhance.times', { n: fmt(r.t90) }) : '-'],
          [t('enhance.cost'), r.cost > 0 ? silver(r.avg * r.cost) : t('enhance.notSet')],
        ]"
      >
        <CalcNote>
          {{ t("enhance.note") }} {{ kind === "accessory" ? t("enhance.noteAcc") : t("enhance.noteGear") }}
          {{ t("enhance.noteUi") }}
        </CalcNote>
      </ResultBox>
    </div>
    <CalcNote>{{ t("enhance.fsTable", { list: fsTable }) }}</CalcNote>
    <NuxtLink :to="localePath('/enhance')" class="section-link">{{ t("links.enhancePage") }}</NuxtLink>
  </div>
</template>
