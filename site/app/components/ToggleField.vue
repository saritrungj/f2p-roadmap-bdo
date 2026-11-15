<script setup lang="ts">
defineProps<{ label: string; hint?: string }>();
const model = defineModel<boolean>({ required: true });
</script>

<template>
  <label class="toggle">
    <span>
      {{ label }}
      <small v-if="hint">{{ hint }}</small>
    </span>
    <input v-model="model" type="checkbox" />
  </label>
</template>
