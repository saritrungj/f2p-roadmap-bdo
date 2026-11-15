// One delegated pointer listener feeds --mx/--my to the hovered .spot-card.
// Pointer events only (no scroll listeners); writes are batched per frame.
export default defineNuxtPlugin(() => {
  if (!window.matchMedia("(hover: hover)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let frame = 0;
  let last: PointerEvent | null = null;
  document.addEventListener(
    "pointermove",
    (e) => {
      last = e;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const ev = last;
        const el = (ev?.target as Element | null)?.closest?.(".spot-card") as HTMLElement | null;
        if (!ev || !el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        el.style.setProperty("--my", `${ev.clientY - r.top}px`);
      });
    },
    { passive: true },
  );
});
