<script setup lang="ts">
const { t } = useI18n();
const facts = computed(() => [
  [t("facts.budgetV"), t("facts.budget")],
  ["Lv 75", t("facts.level")],
  ["84.5%", t("facts.market")],
  [t("facts.calcsV"), t("facts.calcs")],
]);
</script>

<template>
  <div class="facts">
    <div class="container facts-grid">
      <div v-for="[v, k] in facts" :key="k" class="fact">
        <strong>{{ v }}</strong>
        <span>{{ k }}</span>
      </div>
    </div>
  </div>
</template>
