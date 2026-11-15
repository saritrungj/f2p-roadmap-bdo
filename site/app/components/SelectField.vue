<script setup lang="ts">
defineProps<{ label: string; options: { value: string; label: string }[] }>();
const model = defineModel<string>({ required: true });
const id = useId();
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <select :id="id" v-model="model" class="select">
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
  </div>
</template>
