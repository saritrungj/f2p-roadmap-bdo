// Lightweight health check. Rate limited by routeRules["/api/**"] (30 req / min / IP).
export default defineEventHandler(() => ({ ok: true, time: new Date().toISOString() }));
