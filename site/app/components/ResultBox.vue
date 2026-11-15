<script setup lang="ts">
defineProps<{ label: string; value: string; unit?: string; rows: [string, string][] }>();
</script>

<template>
  <div class="result" aria-live="polite">
    <div class="result-main">
      <span class="k">{{ label }}</span>
      <span class="v">{{ value }}<small v-if="unit">{{ unit }}</small></span>
    </div>
    <dl class="result-list">
      <div v-for="[k, v] in rows" :key="k">
        <dt>{{ k }}</dt>
        <dd>{{ v }}</dd>
      </div>
    </dl>
    <slot />
  </div>
</template>
