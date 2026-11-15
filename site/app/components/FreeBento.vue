<script setup lang="ts">
import { FREE } from "~/data/content";

const { t } = useI18n();
const { t: L } = useCodex();
</script>

<template>
  <section id="free" class="section">
    <div class="container">
      <div class="section-head reveal">
        <h2>{{ t("free.title") }}</h2>
        <p>{{ t("free.sub") }}</p>
      </div>
      <div class="bento">
        <article
          v-for="(f, i) in FREE"
          :key="i"
          class="tile reveal"
          :class="{ 'tile-kram': f.style === 'kram', 'tile-accent': f.style === 'accent', 'tile-pattern': f.style === 'pattern' }"
        >
          <CodexIcon :r="f.icon" :size="56" class="tile-img" />
          <h3>{{ L(f.title) }}</h3>
          <p>{{ L(f.body) }}</p>
          <div v-if="f.refs?.length" class="chip-row">
            <CodexChip v-for="(r, j) in f.refs" :key="j" :r="r" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
