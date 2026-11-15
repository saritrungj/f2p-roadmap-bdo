<script setup lang="ts">
defineProps<{ label: string; options: { value: string; label: string }[] }>();
const model = defineModel<string>({ required: true });
</script>

<template>
  <div class="field" role="group" :aria-label="label">
    <span class="label">{{ label }}</span>
    <div class="seg">
      <button
        v-for="o in options"
        :key="o.value"
        type="button"
        :aria-pressed="o.value === model"
        @click="model = o.value"
      >
        {{ o.label }}
      </button>
    </div>
  </div>
</template>
