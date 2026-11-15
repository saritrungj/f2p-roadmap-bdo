<script setup lang="ts">
import { PhInfo } from "@phosphor-icons/vue";
</script>

<template>
  <p class="note">
    <PhInfo :size="16" weight="bold" aria-hidden="true" />
    <span><slot /></span>
  </p>
</template>
