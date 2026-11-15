<script setup lang="ts">
const { t, locale } = useI18n();
const codexHome = computed(() => (locale.value === "en" ? "https://bdocodex.com/seaen/" : "https://bdocodex.com/th/"));
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <a href="#top" class="brand" style="color: var(--ink)">
          <BrandMark />
          Northern-east heroic
        </a>
        <p style="margin-top: 14px; max-width: 52ch">{{ t("footer.disclaimer") }}</p>
      </div>
      <div>
        <h4>{{ t("footer.sources") }}</h4>
        <ul>
          <li><a :href="codexHome" target="_blank" rel="noopener noreferrer">BDOCodex</a></li>
          <li>
            <a href="https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice?_categoryNo=2" target="_blank" rel="noopener noreferrer">{{ t("footer.notice") }}</a>
          </li>
          <li><a href="https://garmoth.com/grind-tracker/best-grind-spots" target="_blank" rel="noopener noreferrer">Garmoth Grind Tracker</a></li>
          <li><a href="https://www.blackdesertfoundry.com/guide-list/" target="_blank" rel="noopener noreferrer">BDFoundry</a></li>
        </ul>
      </div>
      <div>
        <h4>{{ t("footer.onPage") }}</h4>
        <ul>
          <li><a href="#tools">{{ t("nav.tools") }}</a></li>
          <li><a href="#roadmap">{{ t("nav.roadmap") }}</a></li>
          <li><a href="#guide">{{ t("nav.guide") }}</a></li>
          <li><a href="#patch">{{ t("nav.patch") }}</a></li>
          <li><a href="#tips">{{ t("nav.tips") }}</a></li>
        </ul>
      </div>
    </div>
    <div class="container" style="margin-top: 32px">
      <p>{{ t("footer.asOf") }}</p>
    </div>
  </footer>
</template>
