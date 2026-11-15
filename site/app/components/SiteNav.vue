<script setup lang="ts">
import { PhMoon, PhSun, PhTranslate } from "@phosphor-icons/vue";

type Theme = "dark" | "light";
const theme = ref<Theme>("dark");
const { t, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const other = computed(() => (locale.value === "th" ? "en" : "th"));

onMounted(() => {
  const set = document.documentElement.dataset.theme as Theme | undefined;
  theme.value = set ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
});

function toggle() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme.value;
  try {
    localStorage.setItem("neh-theme", theme.value);
  } catch {
    /* storage blocked: theme still applies for this visit */
  }
}

const localePath = useLocalePath();
const route = useRoute();
// Home sections are anchors on "/", the rest are their own pages.
const links = computed(() => [
  { key: "tools", to: `${localePath("/")}#tools` },
  { key: "enhance", to: localePath("/enhance") },
  { key: "roadmap", to: localePath("/roadmap") },
  { key: "alog", to: localePath("/adventure-log") },
  { key: "coupons", to: localePath("/coupons") },
  { key: "data", to: localePath("/data") },
  { key: "patch", to: `${localePath("/")}#patch` },
]);
const isCurrent = (to: string) => !to.includes("#") && (route.path === to || route.path.startsWith(`${to}/`));
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <NuxtLink :to="localePath('/')" class="brand" :aria-label="t('nav.home')">
        <BrandMark />
        Northern-east heroic
      </NuxtLink>
      <nav :aria-label="t('nav.menu')">
        <ul class="nav-links">
          <li v-for="l in links" :key="l.key">
            <NuxtLink :to="l.to" :aria-current="isCurrent(l.to) ? 'page' : undefined">{{ t(`nav2.${l.key}`) }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="nav-actions">
        <NuxtLink
          :to="switchLocalePath(other)"
          class="lang-btn"
          :hreflang="other"
          :aria-label="`${t('nav.lang')}: ${t('nav.switchTo')}`"
        >
          <PhTranslate :size="18" weight="bold" aria-hidden="true" />
          <span class="lang-long">{{ t("nav.switchTo") }}</span>
          <span class="lang-short" aria-hidden="true">{{ other.toUpperCase() }}</span>
        </NuxtLink>
        <button
          type="button"
          class="icon-btn"
          :aria-label="theme === 'dark' ? t('nav.toLight') : t('nav.toDark')"
          @click="toggle"
        >
          <PhSun v-if="theme === 'dark'" :size="20" />
          <PhMoon v-else :size="20" />
        </button>
      </div>
    </div>
  </header>
</template>
