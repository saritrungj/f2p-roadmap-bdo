<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section id="about" class="section">
    <div class="container about">
      <div class="about-panel reveal">
        <div class="about-icons" aria-hidden="true">
          <CodexIcon :r="{ npc: 45555 }" :size="96" />
          <CodexIcon :r="{ item: 65298 }" :size="56" />
        </div>
        <strong>Northern-east</strong>
        <strong>heroic</strong>
        <span>{{ t("about.tag") }}</span>
      </div>
      <div class="reveal">
        <h2>{{ t("about.title") }}</h2>
        <p>{{ t("about.p1") }}</p>
        <p>{{ t("about.p2") }}</p>
        <div class="games">
          <span class="chip chip-on">{{ t("about.game") }}</span>
          <span class="chip">{{ t("about.next") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
