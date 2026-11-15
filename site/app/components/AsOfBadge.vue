<script setup lang="ts">
import { PhCalendarCheck } from "@phosphor-icons/vue";
defineProps<{ compact?: boolean }>();
const { t } = useI18n();
</script>

<template>
  <p class="asof" :class="{ 'asof-compact': compact }">
    <PhCalendarCheck :size="18" weight="duotone" aria-hidden="true" />
    <strong>{{ t("asof.label") }}</strong>
    <span v-if="!compact">{{ t("asof.detail") }}</span>
  </p>
</template>
