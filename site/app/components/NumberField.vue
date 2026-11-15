<script setup lang="ts">
const props = withDefaults(
  defineProps<{ label: string; help?: string; min?: number; max?: number }>(),
  { min: 0 },
);
const model = defineModel<string>({ required: true });
const id = useId();
const { t } = useI18n();

const error = computed(() => {
  const v = model.value.trim();
  if (v === "") return "";
  const n = Number(v.replace(/,/g, ""));
  if (Number.isNaN(n)) return t("field.numOnly");
  if (n < props.min) return t("field.min", { n: props.min });
  if (props.max !== undefined && n > props.max) return t("field.max", { n: props.max });
  return "";
});
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="model"
      class="input"
      inputmode="decimal"
      maxlength="16"
      :aria-invalid="error ? true : undefined"
      :aria-describedby="help || error ? `${id}-d` : undefined"
    />
    <span v-if="error" :id="`${id}-d`" class="error">{{ error }}</span>
    <span v-else-if="help" :id="`${id}-d`" class="help">{{ help }}</span>
  </div>
</template>
