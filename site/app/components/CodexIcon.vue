<script setup lang="ts">
import type { Ref } from "~/data/content";

const props = withDefaults(defineProps<{ r: Ref; size?: number }>(), { size: 44 });
const { ref: lookup } = useCodex();
const e = computed(() => lookup(props.r));
</script>

<template>
  <img
    v-if="e.icon"
    class="codex-icon"
    :src="e.icon"
    :alt="e.name"
    :width="size"
    :height="size"
    loading="lazy"
    decoding="async"
  />
</template>
