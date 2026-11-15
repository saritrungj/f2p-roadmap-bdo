<script setup lang="ts">
import type { Ref } from "~/data/content";

const props = defineProps<{ r: Ref }>();
const { ref: lookup } = useCodex();
const e = computed(() => lookup(props.r));
</script>

<template>
  <a class="chip codex-chip" :href="e.url" target="_blank" rel="noopener noreferrer" :title="e.name">
    <img v-if="e.icon" :src="e.icon" alt="" width="28" height="28" loading="lazy" decoding="async" />
    <span>{{ e.name }}</span>
  </a>
</template>
