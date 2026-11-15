<script setup lang="ts">
import { MotionConfig } from "motion-v";

const { t } = useI18n();
const i18nHead = useLocaleHead({ seo: true });

// Applies the saved theme before first paint. nuxt-security adds the CSP nonce.
useHead({
  htmlAttrs: { lang: () => i18nHead.value.htmlAttrs?.lang },
  link: () => i18nHead.value.link ?? [],
  meta: () => [
    ...(i18nHead.value.meta ?? []),
    { name: "description", content: t("meta.description") },
  ],
  script: [
    {
      key: "theme",
      tagPosition: "head",
      innerHTML:
        "try{var t=localStorage.getItem('neh-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}",
    },
  ],
});
</script>

<template>
  <MotionConfig reduced-motion="user">
    <SiteNav />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
  </MotionConfig>
</template>
