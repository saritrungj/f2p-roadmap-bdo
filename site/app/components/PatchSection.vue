<script setup lang="ts">
import { PATCHES, WATCH, patchUrl } from "~/data/content";

const { t } = useI18n();
const { t: L } = useCodex();
</script>

<template>
  <section id="patch" class="section" style="background: var(--surface)">
    <div class="container">
      <div class="section-head reveal">
        <h2>{{ t("patch.title") }}</h2>
        <p>{{ t("patch.sub") }}</p>
      </div>
      <div class="patches" tabindex="0" :aria-label="t('patch.scroll')">
        <article v-for="(p, i) in PATCHES" :key="p.board" class="patch" :class="{ 'patch-latest': i === 0 }">
          <time>{{ L(p.date) }}</time>
          <h3>{{ L(p.title) }}</h3>
          <ul>
            <li v-for="(pt, j) in p.points" :key="j">{{ L(pt) }}</li>
          </ul>
          <a :href="patchUrl(p.board)" target="_blank" rel="noopener noreferrer">{{ t("patch.read") }}</a>
        </article>
      </div>
      <PatchFeed />
      <div class="watch reveal">
        <strong>{{ t("patch.watch") }}</strong>
        <ul>
          <li v-for="(w, i) in WATCH" :key="i">{{ L(w) }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
