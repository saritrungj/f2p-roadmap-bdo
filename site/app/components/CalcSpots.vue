<script setup lang="ts">
import { SPOTS, spotUrl } from "~/data/spots";

const { t } = useI18n();
const { t: L, item, npc } = useCodex();
const ap = ref("280");
const dp = ref("360");

const list = computed(() => {
  const a = num(ap.value);
  const d = num(dp.value);
  return SPOTS.filter((s) => s.ap <= a && s.dp <= d)
    .sort((x, y) => y.silverHr - x.silverHr)
    .slice(0, 5)
    .map((s) => ({ s, trash: item(s.trash), mob: s.monster ? npc(s.monster) : null }));
});
const next = computed(() => {
  const a = num(ap.value);
  const d = num(dp.value);
  return SPOTS.filter((s) => s.ap > a || s.dp > d).sort((x, y) => x.ap - y.ap)[0];
});
</script>

<template>
  <div>
    <CalcHeader :title="t('spots.title')" :desc="t('spots.desc')" :icon="{ item: 44322 }" />
    <div class="calc-grid calc-grid-spots">
      <div class="fields">
        <div class="row-2">
          <NumberField v-model="ap" :label="t('spots.ap')" :max="1000" />
          <NumberField v-model="dp" :label="t('spots.dp')" :max="1000" />
        </div>
        <CalcNote v-if="next">{{ t("spots.next", { name: L(next.name), ap: next.ap, dp: next.dp }) }}</CalcNote>
        <CalcNote>{{ t("spots.note") }}</CalcNote>
      </div>
      <div class="result" aria-live="polite">
        <p v-if="list.length === 0" class="spot-empty">{{ t("spots.empty") }}</p>
        <ol v-else class="spots">
          <li v-for="{ s, trash, mob } in list" :key="s.garmoth" class="spot">
            <img
              v-if="mob?.icon"
              class="spot-art"
              :src="mob.icon"
              :alt="mob.name"
              width="72"
              height="72"
              loading="lazy"
              decoding="async"
            />
            <img v-else class="spot-art" :src="trash.icon ?? ''" :alt="trash.name" width="72" height="72" loading="lazy" />
            <div class="spot-body">
              <a :href="spotUrl(s.garmoth)" target="_blank" rel="noopener noreferrer"><strong>{{ L(s.name) }}</strong></a>
              <span>{{ L(s.region) }} · {{ s.ap }} AP / {{ s.dp }} DP</span>
              <a class="spot-trash" :href="trash.url" target="_blank" rel="noopener noreferrer">
                <img v-if="trash.icon" :src="trash.icon" alt="" width="22" height="22" loading="lazy" />
                {{ trash.name }}<template v-if="trash.sell"> · {{ t("spots.npcSell", { price: fmt(trash.sell) }) }}</template>
              </a>
            </div>
            <b class="num">{{ silver(s.silverHr) }}<small>{{ t("spots.perHour") }}</small></b>
          </li>
        </ol>
        <CalcNote>
          <a href="https://garmoth.com/grind-tracker/best-grind-spots" target="_blank" rel="noopener noreferrer">{{ t("spots.all") }}</a>
        </CalcNote>
      </div>
    </div>
  </div>
</template>
