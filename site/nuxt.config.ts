// Northern-east heroic: Nuxt 4 landing page with nuxt-security hardening.
export default defineNuxtConfig({
  compatibilityDate: "2026-11-01",
  devtools: { enabled: false },
  modules: ["@nuxtjs/i18n", "nuxt-security"],

  // Thai at "/", English at "/en". Locale files live in i18n/locales/.
  i18n: {
    locales: [
      { code: "th", language: "th-TH", name: "ไทย", file: "th.json" },
      { code: "en", language: "en-US", name: "English", file: "en.json" },
    ],
    defaultLocale: "th",
    strategy: "prefix_except_default",
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "neh_lang",
      redirectOn: "root",
      cookieSecure: process.env.NODE_ENV === "production",
    },
  },
  css: [
    "@fontsource/chakra-petch/thai-500.css",
    "@fontsource/chakra-petch/thai-600.css",
    "@fontsource/chakra-petch/thai-700.css",
    "@fontsource/chakra-petch/latin-500.css",
    "@fontsource/chakra-petch/latin-600.css",
    "@fontsource/chakra-petch/latin-700.css",
    "@fontsource/ibm-plex-sans-thai/thai-400.css",
    "@fontsource/ibm-plex-sans-thai/thai-500.css",
    "@fontsource/ibm-plex-sans-thai/latin-400.css",
    "@fontsource/ibm-plex-sans-thai/latin-500.css",
    "~/assets/css/main.css",
    "~/assets/css/pages.css",
    "~/assets/css/motion.css",
    "~/assets/css/adventure-log.css",
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Northern-east heroic",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "color-scheme", content: "dark light" },
        { property: "og:title", content: "Northern-east heroic" },
        { property: "og:type", content: "website" },
      ],
    },
  },

  // No SWR cache on HTML: a cached page would reuse one CSP nonce for every visitor.
  // Cache static assets at the CDN instead; API routes get a tighter limit.
  routeRules: {
    "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
    "/codex/**": { headers: { "cache-control": "public, max-age=604800" } },
    "/api/**": {
      security: {
        rateLimiter: { tokensPerInterval: 30, interval: 60_000 },
      },
      headers: { "cache-control": "no-store" },
    },
  },

  security: {
    nonce: true,
    hidePoweredBy: true,
    removeLoggers: false, // Vite 8 uses oxc; the esbuild drop option would be ignored
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "base-uri": ["'none'"],
        "object-src": ["'none'"],
        "frame-ancestors": ["'none'"],
        "form-action": ["'self'"],
        "img-src": ["'self'", "data:", "https://i.ytimg.com"],
        "font-src": ["'self'"],
        // Vue binds inline style attributes; styles stay same-origin otherwise.
        "style-src": ["'self'", "'unsafe-inline'"],
        "script-src": ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        "script-src-attr": ["'none'"],
        "connect-src": ["'self'"],
        "upgrade-insecure-requests": true,
      },
      strictTransportSecurity: { maxAge: 31_536_000, includeSubdomains: true, preload: true },
      xFrameOptions: "DENY",
      xContentTypeOptions: "nosniff",
      referrerPolicy: "strict-origin-when-cross-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginResourcePolicy: "same-origin",
      crossOriginEmbedderPolicy: "credentialless",
      permissionsPolicy: {
        camera: [],
        microphone: [],
        geolocation: [],
        "display-capture": [],
        fullscreen: ["self"],
      },
    },
    // Whole site: 150 requests / 5 min per IP. In-memory store by default;
    // set a shared Nitro storage driver (Redis / Cloudflare KV) when running >1 instance.
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300_000,
      headers: true,
      throwError: true,
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 64_000,
      maxUploadFileRequestInBytes: 0,
    },
    xssValidator: {},
    // Same-origin only: no Access-Control-Allow-Origin header is sent.
    corsHandler: false,
    allowedMethodsRestricter: { methods: ["GET", "HEAD"] },
  },

  typescript: { strict: true },
});
