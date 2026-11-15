<script setup lang="ts">
import { PhCheck, PhCopy, PhArrowSquareOut } from "@phosphor-icons/vue";
import { ASIA_EVENTS, CHECKED_AT, OTHER_REGION_CODES, REDEEM_URL } from "~/data/coupons";

const { t, locale } = useI18n();
const { t: L } = useCodex();
useHead({ title: () => `${t("cp.title")} | Northern-east heroic` });

// Status uses the visitor's clock after mount; SSR renders with the data's check date.
const now = ref(new Date(`${CHECKED_AT}T12:00:00Z`).getTime());
onMounted(() => {
  now.value = Date.now();
});

const dateFmt = computed(
  () => new Intl.DateTimeFormat(locale.value === "th" ? "th-TH" : "en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Bangkok" }),
);
const d = (iso: string) => dateFmt.value.format(new Date(iso));

function state(start: string, end: string) {
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  if (now.value < s) return "soon";
  if (now.value > e) return "expired";
  return e - now.value < 3 * 86400000 ? "ending" : "active";
}
const daysLeft = (end: string) => Math.max(0, Math.ceil((new Date(end).getTime() - now.value) / 86400000));

const events = computed(() => ASIA_EVENTS.map((e) => ({ ...e, st: state(e.start, e.end) })));
const codes = computed(() =>
  OTHER_REGION_CODES.map((c) => ({ ...c, st: state(c.start, c.end) })).sort((a, b) => Number(a.st === "expired") - Number(b.st === "expired")),
);

const copied = ref("");
async function copy(code: string) {
  try {
    await navigator.clipboard.writeText(code);
    copied.value = code;
    setTimeout(() => (copied.value = ""), 1800);
  } catch {
    copied.value = "";
  }
}
</script>

<template>
  <div class="page">
    <header class="page-head container">
      <h1>{{ t("cp.title") }}</h1>
      <p>{{ t("cp.sub", { date: d(`${CHECKED_AT}T12:00:00Z`) }) }}</p>
      <a class="btn btn-primary" :href="REDEEM_URL" target="_blank" rel="noopener noreferrer">
        {{ t("cp.redeem") }} <PhArrowSquareOut :size="18" weight="bold" aria-hidden="true" />
      </a>
      <AsOfBadge />
    </header>

    <section class="container cp-section" aria-labelledby="cp-asia">
      <h2 id="cp-asia">{{ t("cp.asiaTitle") }}</h2>
      <p class="cp-lead">{{ t("cp.asiaLead") }}</p>
      <article v-for="e in events" :key="e.id" class="cp-event spot-card" :data-state="e.st">
        <div class="cp-event-head">
          <h3>{{ L(e.title) }}</h3>
          <span class="cp-state">{{ t(`cp.evState.${e.st}`, { n: daysLeft(e.end) }) }}</span>
        </div>
        <p class="cp-dates">{{ t("cp.period", { from: d(e.start), to: d(e.end) }) }}</p>
        <p>{{ L(e.how) }}</p>
        <ul class="cp-rewards">
          <li v-for="(r, i) in e.rewards" :key="i">
            <img v-if="r.icon" :src="r.icon" alt="" width="40" height="40" loading="lazy" />
            <span>{{ L(r.name) }}</span>
            <b class="num">x{{ fmt(r.amount) }}</b>
          </li>
        </ul>
        <p class="cp-status">{{ L(e.status) }}</p>
        <a :href="e.source" target="_blank" rel="noopener noreferrer">{{ t("cp.source") }}</a>
      </article>
    </section>

    <section class="container cp-section" aria-labelledby="cp-other">
      <h2 id="cp-other">{{ t("cp.otherTitle") }}</h2>
      <p class="cp-warn">{{ t("cp.otherWarn") }}</p>
      <ul class="cp-codes">
        <li v-for="c in codes" :key="c.code" class="cp-code" :data-state="c.st">
          <div class="cp-code-main">
            <code>{{ c.code }}</code>
            <button
              type="button"
              class="icon-btn"
              :aria-label="t('cp.copy', { code: c.code })"
              :disabled="c.st === 'expired'"
              @click="copy(c.code)"
            >
              <PhCheck v-if="copied === c.code" :size="18" weight="bold" />
              <PhCopy v-else :size="18" />
            </button>
          </div>
          <div class="cp-code-meta">
            <span class="cp-state">{{ t(`cp.state.${c.st}`, { n: daysLeft(c.end) }) }}</span>
            <span>{{ L(c.regions) }}</span>
            <span>{{ t("cp.until", { date: d(c.end) }) }}</span>
          </div>
          <ul class="cp-rewards cp-rewards-sm">
            <li v-for="(r, i) in c.rewards" :key="i">
              <img v-if="r.icon" :src="r.icon" alt="" width="28" height="28" loading="lazy" />
              <span>{{ L(r.name) }}</span>
              <b class="num">x{{ fmt(r.amount) }}</b>
            </li>
          </ul>
          <p class="cp-note">{{ L(c.note) }}</p>
        </li>
      </ul>
      <p class="note-line">
        {{ t("cp.otherSource") }}
        <a href="https://garmoth.com/coupons" target="_blank" rel="noopener noreferrer">Garmoth Coupons</a>
      </p>
      <span v-if="copied" class="sr-only" role="status">{{ t("cp.copied") }}</span>
    </section>
  </div>
</template>
