<script setup lang="ts">
import { TOPICS } from "~/data/topics";

const { t } = useI18n();
const { t: L } = useCodex();
const localePath = useLocalePath();
useHead({ title: () => `${t("data.title")} | Northern-east heroic` });
</script>

<template>
  <div class="page">
    <header class="page-head container">
      <h1>{{ t("data.title") }}</h1>
      <p>{{ t("data.sub") }}</p>
      <AsOfBadge />
    </header>
    <div class="container">
      <ul class="data-index stagger">
        <li v-for="x in TOPICS" :key="x.slug">
          <NuxtLink :to="localePath(`/data/${x.slug}`)" class="spot-card">
            <CodexIcon :r="x.icon" :size="44" />
            <span>
              <strong>{{ L(x.title) }}</strong>
              <small>{{ L(x.lead) }}</small>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
