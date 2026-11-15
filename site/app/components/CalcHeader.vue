<script setup lang="ts">
import type { Ref } from "~/data/content";
defineProps<{ title: string; desc: string; icon: Ref }>();
</script>

<template>
  <div class="calc-head">
    <CodexIcon :r="icon" :size="48" />
    <div>
      <h3 class="calc-title">{{ title }}</h3>
      <p class="calc-desc">{{ desc }}</p>
    </div>
  </div>
</template>
