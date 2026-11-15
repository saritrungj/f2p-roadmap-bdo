# แผนพัฒนาเว็บ Northern-east heroic (v2: Nuxt)

> อัปเดต 13 พ.ย. 2026 · ย้าย stack จาก Vite + React ไปเป็น **Nuxt 4 (latest)** · ข้อมูลอิงแพตช์ BDO Asia 12 พ.ย. 2026, Garmoth และ BDOCodex

## 1. เป้าหมาย
Landing page ของ **Northern-east heroic** เว็บรวมเครื่องคำนวณ คู่มือ และ roadmap สำหรับเกมเมอร์ไทยสายเติมน้อย เริ่มที่ **Black Desert (PC) เซิร์ฟ Asia**

**ผู้ใช้:** เกมเมอร์ไทยที่เปิดเว็บไว้ข้างเกมตอนกลางคืน เพื่อคำนวณก่อนตีบวก ก่อนขายของ หรือก่อนเลือกจุดฟาร์ม

## 2. Design Read (เหมือนเดิม)
- **อ่านโจทย์เป็น:** landing + เครื่องมือของ gaming community ภาษาภาพ "ผ้าครามอีสาน x เกมแนว tech"
- **Dials:** VARIANCE 7 · MOTION 5 · DENSITY 5
- **Theme:** ค่าเริ่มต้น dark (ตาม `prefers-color-scheme`) มีปุ่มสลับธีม จำค่าใน localStorage
- **สี (OKLCH):** พื้นครามเข้ม + สีเน้นส้มขมิ้นสีเดียว · มุมโค้ง 10px · ปุ่ม pill
- **ฟอนต์:** Chakra Petch (หัวข้อ) + IBM Plex Sans Thai (เนื้อหา) self-host ผ่าน @fontsource ไม่ต้องเรียก Google
- **ห้ามใช้:** em-dash, eyebrow ทุก section, การ์ด 3 ใบเท่ากัน, gradient text, ม่วง AI

## 3. Tech stack (Nuxt cycle, ใช้ `@latest` ทุกครั้ง)

| ส่วน | ตัวที่ใช้ | เวอร์ชันที่ติดตั้ง (13 พ.ย. 2026) |
|---|---|---|
| Framework | **Nuxt 4** (`app/` directory, Nitro server) | nuxt 4.6.4 · vue 3.5.45 · nitropack 2.13.x · vite 8.3.x |
| Security | **nuxt-security** (headers, CSP nonce, rate limiter, request size, XSS, CORS) | 2.7.0 |
| Motion | **motion-v** (Motion for Vue) + `MotionConfig reduced-motion="user"` | 2.12.0 |
| Icons | **@phosphor-icons/vue** | 2.2.1 |
| Fonts | @fontsource/chakra-petch, @fontsource/ibm-plex-sans-thai | 5.3.0 |
| **i18n (th / en)** | **@nuxtjs/i18n** · ไทยที่ `/` อังกฤษที่ `/en` · `strategy: prefix_except_default` · จำภาษาใน cookie `neh_lang` · hreflang + `<html lang>` อัตโนมัติ · ข้อความ UI อยู่ใน `i18n/locales/th.json`, `en.json` | 10.6.0 |
| **ข้อมูลเกม** | **BDOCodex** เป็นแหล่งหลัก: ชื่อไทยจาก `bdocodex.com/th`, อังกฤษจาก `bdocodex.com/seaen` (SEA English = เซิร์ฟ Asia) เก็บใน `app/data/codex.json` + รูปไอคอน/ภาพมอนสเตอร์ใน `public/codex/` | สคริปต์ `collect.mjs` |
| Type check | typescript + vue-tsc (`npm run typecheck`) | 5.9.3 · 3.3.x (TypeScript 7 latest ใช้กับ vue-tsc ยังไม่ได้ เลยใช้ตัวล่าสุดของสาย 5) |
| Style | CSS variables (OKLCH) ไฟล์เดียว `app/assets/css/main.css` | - |

**นโยบายเวอร์ชัน:** ติดตั้ง/อัปเดตด้วย `npm install <pkg>@latest` เสมอ แล้วรัน `npm run build` และ `npm audit` ก่อน deploy ทุกครั้ง
- `npm audit` ตอนนี้พบ 12 รายการ (low 6 / moderate 6) อยู่ใน dependency ฝั่ง build (archiver / minimatch) ไม่ได้ถูกส่งไปที่ browser `npm audit fix --force` จะ downgrade nuxt ไป 4.1.3 **อย่ารันคำสั่งนี้** ให้รอ upstream ออกแพตช์แทน
- เครื่องนี้มี Windows Application Control บล็อก native binary บางตัว เลยตั้ง `overrides.rollup` เป็น `@rollup/wasm-node` ไว้ก่อน (Vite 8 ใช้ Rolldown แล้ว build ผ่าน)

### โครงสร้างโฟลเดอร์
```
site/
  nuxt.config.ts          # modules, routeRules, security
  app/
    app.vue               # layout + theme script (มี nonce)
    assets/css/main.css   # design tokens + styles
    components/           # Section*, Calc*, field components
    data/                 # bdo.ts (สูตร), spots.ts (Garmoth), patches.ts, guide.ts, roadmap.ts
    utils/calc.ts         # pure functions (auto-import)
  server/api/health.get.ts
  public/robots.txt
```

## 4. Security & Rate limit (เหมาะกับ landing page)

| เรื่อง | ตั้งค่า |
|---|---|
| **Rate limit ทั้งเว็บ** | 150 requests / 5 นาที / IP (nuxt-security `rateLimiter`) ส่ง header `x-ratelimit-*` เกินแล้วตอบ 429 |
| **Rate limit API** | `/api/**` 30 requests / นาที / IP + `cache-control: no-store` |
| **Storage ของ rate limit** | ค่าเริ่มต้นเป็น memory (ใช้ได้ถ้ามี server ตัวเดียว) ถ้าขยายหลาย instance ให้ตั้ง Nitro storage driver เป็น Redis หรือ Cloudflare KV |
| **CSP** | `default-src 'self'`, script ใช้ `'strict-dynamic'` + nonce ทุก request, `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'none'`, `img/font/connect 'self'`, `upgrade-insecure-requests` |
| **Headers** | HSTS 1 ปี + preload, X-Frame-Options DENY, nosniff, Referrer-Policy strict-origin-when-cross-origin, COOP same-origin, CORP same-origin, COEP credentialless, Permissions-Policy ปิดกล้อง/ไมค์/ตำแหน่ง |
| **Methods** | อนุญาตแค่ GET / HEAD (landing page ไม่มีฟอร์ม) |
| **Request size** | สูงสุด 64KB ห้ามอัปโหลดไฟล์ |
| **อื่น ๆ** | XSS validator, ซ่อน `X-Powered-By`, ลบ console log ตอน build, input ทุกช่อง `maxlength=16` และ validate เป็นตัวเลข |
| **Cache** | ไม่ cache HTML (ถ้า cache จะใช้ CSP nonce ซ้ำกันทุกคน) · `/_nuxt/**` cache 1 ปีแบบ immutable |
| **CORS** | ปิด (`corsHandler: false`) ไม่ส่ง `Access-Control-Allow-Origin` |
| **ทดสอบแล้ว** | `/api/health` ครั้งที่ 31 ได้ 429 พร้อม `x-ratelimit-*` · POST ได้ 405 · header ความปลอดภัยครบ |
| **ชั้นนอก (แนะนำ)** | วางหลัง Cloudflare เปิด WAF + Bot Fight Mode + rate limit rule อีกชั้น |

> เหตุผลที่ใช้ SSR (Nitro) แทน static: rate limiter และ CSP nonce ต้องมี server ทำงานทุก request ถ้าจะ deploy แบบ static ล้วน (`nuxt generate`) ให้ย้าย rate limit ไปทำที่ CDN และเปลี่ยน CSP เป็นแบบ hash (`security.ssg.hashScripts`)

## 5. โครงหน้า (Sections)
1. **Nav** เครื่องคำนวณ · Roadmap · คู่มือ · อัปเดต · Tips · สลับธีม
2. **Hero** หัวข้อ + CTA 2 ปุ่ม + เครื่องคำนวณตัวเล็ก (ตีเครื่องประดับขึ้น PRI แบบเลื่อน FS)
3. **ตัวเลขสำคัญ** 200 บาท · Lv 75 · 84.5% · 6 เครื่องคำนวณ
4. **Workbench เครื่องคำนวณ 6 ตัว** ภาษีตลาด · โอกาสตีบวก · AP/DP Bracket (ถึง 499 AP ตาม Garmoth) · **จุดฟาร์มที่ไปได้ (Garmoth)** · เงินต่อชั่วโมง · Energy
5. **Roadmap 200 บาท แบบละเอียด** 7 ช่วง (ทุกช่วงกดขยายดูรายละเอียดได้) ตามเส้นทาง HYPERBOOST
6. **คู่มือ (แท็บ)** ระบบพื้นฐาน · Life Skill · การปั้นของ (Processing/Manufacture/Workshop) · การทำเรือ
7. **อัปเดตล่าสุดเซิร์ฟ Asia** timeline แพตช์ 30 ก.ค. ถึง 12 พ.ย. 2026 + วันที่ต้องจำ
8. **ของฟรี (bento 5 ช่อง)**
9. **Tips & Tricks (accordion)**
10. **About + Footer** แหล่งข้อมูล + disclaimer

## 6. แหล่งข้อมูลและการอัปเดตข้อมูล
| ข้อมูล | แหล่ง | ไฟล์ |
|---|---|---|
| แพตช์ | ประกาศทางการ Asia (`_categoryNo=2`) | `app/data/patches.ts` |
| จุดฟาร์ม Silver/ชม. | Garmoth Grind Tracker (Average Tier, ข้อมูล 1 ปีล่าสุด) | `app/data/spots.ts` |
| AP/DP Bracket | Garmoth `/brackets` + BDFoundry | `app/data/bdo.ts` |
| ชื่อไอเทมภาษาไทย / ID | BDOCodex `/th/` (อัปเดตตามแพตช์ 12 พ.ย.) | `app/data/guide.ts` |
| สูตรตีบวก / ภาษี | BDFoundry + Wiki ทางการ | `app/data/bdo.ts` |

**รอบอัปเดต:** ทุกวันพฤหัสหลังแพตช์ Asia ให้เพิ่มแพตช์ใหม่ใน `patches.ts` และดูว่ามีอะไรกระทบสูตรไหม ส่วนจุดฟาร์มให้รีเฟรชเดือนละครั้ง

## 7. ขั้นตอนพัฒนา
1. ✅ Scaffold Nuxt 4 + ติดตั้งแพ็กเกจ `@latest`
2. ✅ ตั้งค่า nuxt-security + routeRules
3. ✅ ย้าย data/utils จากเวอร์ชัน React
4. ✅ เขียน component Vue ทุก section + เครื่องคำนวณ 6 ตัว
5. ✅ ใส่ข้อมูลแพตช์ Asia, Garmoth, คู่มือ, roadmap ละเอียด
6. ✅ Build + ตรวจในเบราว์เซอร์ (desktop / mobile / dark / light) + ตรวจ security headers
7. ⏳ Deploy: `npm run build` แล้วรัน `node .output/server/index.mjs` บน VPS หรือใช้ Nitro preset (`NITRO_PRESET=cloudflare_pages` / `vercel` / `netlify`) ถ้าใช้ serverless ต้องตั้ง storage ของ rate limit เป็น KV
8. ⏳ ใส่ screenshot จริงจากเกมแทนลายผ้าคราม (มี TODO ในโค้ด)

## 8. Phase ถัดไป
- ดึงราคาตลาด Asia อัตโนมัติผ่าน `server/api/` (cache + rate limit เดิม)
- หน้าแยกต่อเกม (`/bdo`, `/bdo/life-skill`, ...) และ sitemap
- เพิ่มเกมอื่นโดยใช้ component ชุดเดิม
- จำค่าที่กรอกในเครื่องคำนวณไว้ใน localStorage

## 9. สองภาษา + ข้อมูลจาก BDOCodex (v3, 13 พ.ย. 2026)

### สิ่งที่ทำแล้ว
- ✅ เว็บสองภาษา **ไทย (`/`) และ English (`/en`)** ด้วย @nuxtjs/i18n ปุ่มสลับภาษาที่ nav (จอเล็กแสดง EN / TH)
- ✅ ชื่อไอเทม เควส มอนสเตอร์ และจุดฟาร์ม **ไม่ได้พิมพ์เอง** แต่ดึงจาก BDOCodex ตามภาษา ผ่าน `useCodex()` + `<CodexChip>` / `<CodexIcon>` ทุกชิปลิงก์ไปหน้า BDOCodex ภาษาเดียวกัน
- ✅ **ทุก section มีรูปจาก BDOCodex**: แท็บเครื่องคำนวณ, หัวเครื่องคำนวณ, roadmap ทุกช่วง, การ์ดคู่มือ, ของฟรี, tips, about
- ✅ **จุดฟาร์มที่ไปได้** แสดงภาพมอนสเตอร์ (Knowledge artwork) + ไอคอนขยะ + ราคาขาย NPC จาก BDOCodex และ AP/DP แนะนำจาก Garmoth (ค่าบนหน้าตัวละคร)
- ✅ ส่วน **"หน้าใน BDOCodex ที่มือใหม่ควรรู้"** 12 ลิงก์ (ตรวจแล้วว่าเปิดได้ทั้ง `/th/` และ `/seaen/`)
- ✅ แก้ข้อมูลผิด: คนงานทำงานเฉพาะตอนออนไลน์, เควสเต็นท์ (Klau ที่ Velia), Olvia ต้องการแค่ Lv 60
- ✅ ไอคอนทั้ง 63 รายการตรวจเทียบกับ BDOCodex search แล้ว (ไม่ตรง 0 รายการ)
- ✅ ภาพเก็บไว้ในเว็บเอง (`public/codex/`) ไม่ hotlink ทำให้ CSP `img-src 'self'` ยังเข้มเหมือนเดิม

### วิธีอัปเดตข้อมูล BDOCodex หลังแพตช์
```bash
node site/scripts/codex-collect.mjs site/scripts/codex-manifest.json site/app/data/codex.json site/public
```
- เพิ่ม ID ใหม่ใน `codex-manifest.json` (items / npcs / quests) แล้วรันคำสั่งด้านบน สคริปต์เว้นระยะ 350ms ต่อหน้าเพื่อไม่ให้รบกวน BDOCodex
- รูปไอคอนและชื่อในเกมเป็นลิขสิทธิ์ของ Pearl Abyss ใส่เครดิตไว้ใน footer แล้ว

### สิ่งที่ยังเหลือ
- รูป screenshot จริงจากเกมสำหรับ hero (ตอนนี้ใช้เครื่องคำนวณจริงแทน)
- เวลารีเซ็ตของเซิร์ฟ Asia ยังไม่มีประกาศยืนยันตรง ๆ (ในเว็บระบุว่าเป็นค่าประมาณ)
- Deploy + ตั้ง `NUXT_PUBLIC_SITE_URL` ให้ hreflang ใช้โดเมนจริง

## 10. AI กวาดแพตช์ 3 เซิร์ฟ (Patch watch, 14 พ.ย. 2026)

### แหล่งข้อมูล (ทางการเท่านั้น)
| เซิร์ฟ | หน้าประกาศ | ภาษา | ตัวกรอง |
|---|---|---|---|
| Asia | `blackdesert.pearlabyss.com/Asia/en-us/News/Notice?_categoryNo=2` | อังกฤษ | หัวข้อมี "Update Details" (ไม่เอา Pearl Shop / security module / Black Desert+) |
| เกาหลี | `www.kr.playblackdesert.com/ko-KR/News/Notice?boardType=2` | เกาหลี | หัวข้อมี "업데이트 안내" (ไม่เอา "최신 버전" / 보안 모듈 / 검은사막+) |
| Global Lab | `blackdesert.pearlabyss.com/GlobalLab/en-US/News/Notice?_categoryNo=2` | เกาหลี | หัวข้อมี "업데이트" / Update |

- robots.txt ของทั้ง 2 โดเมนอนุญาตหน้า `/News/` · ดึงช้า ๆ (เว้น 1.5 วินาที) และระบุ User-Agent ของเว็บ
- **ไม่ใช้ BDOCodex** ในระบบนี้ เพราะ robots.txt ของ BDOCodex ขอไม่ให้บอท AI ดึงข้อมูล · ไม่ดึงจาก Discord / datamine

### การทำงาน
```
GitHub Actions (cron)  →  watch.ts  →  fetch.ts (list + อ่านประกาศ)  →  summarize.ts (Claude)
                                                                         ↓
                    approve.ts  ←  คนตรวจใน Pull Request  ←  site/patch-watch/drafts/*.json
                         ↓
           site/app/data/patch-feed/*.json  →  <PatchFeed> บนเว็บ (แท็บ Asia / เกาหลี / Global Lab)
```
- **โมเดล:** `claude-opus-5-5` · effort `medium` · structured output ด้วย Zod (`betaZodOutputFormat`) ได้ JSON ที่ตรวจ schema แล้ว
- **Refusal fallback:** เปิด `fallbacks: "default"` (beta `server-side-fallback-2026-07-01`) ถ้าโมเดลปฏิเสธ จะรันต่อบนโมเดลสำรองให้อัตโนมัติ
- **Prompt caching:** system prompt ล็อกไว้ไม่ให้เปลี่ยน และใส่ `cache_control` ไว้
- **ผลลัพธ์ต่อประกาศ:** หัวข้อ, สรุป, ไฮไลต์ (สูงสุด 8), ผลต่อสายฟรี, ผลต่อเครื่องคำนวณ, วันที่สำคัญ, ระดับความมั่นใจ ทั้งหมดเป็นไทย + อังกฤษ
- **ป้ายสปอย:** ของจากเกาหลีและ Global Lab ติดป้าย "สปอย" และมีคำเตือนว่าอาจไม่มาถึง Asia

### คำสั่ง (รันใน `site/`)
| คำสั่ง | ทำอะไร |
|---|---|
| `npm run patch:dry` | ดึงและแยกเนื้อหาอย่างเดียว ไม่เรียก Claude (ไม่เสียเงิน) |
| `npm run patch:watch` | หาประกาศใหม่ → ให้ Claude สรุป → เขียน draft (ต้องมี `ANTHROPIC_API_KEY`) |
| `npm run patch:approve` | ดูรายการ draft ที่รอตรวจ |
| `npm run patch:approve -- asia-20054` | อนุมัติ (ตรวจ schema ซ้ำก่อนย้ายขึ้นเว็บ) |
| `npm run patch:approve -- --reject kr-16442` | ทิ้ง draft |
| `npm run patch:typecheck` | ตรวจ type ของสคริปต์ |

### ตั้งเวลา (`.github/workflows/patch-watch.yml`)
- ทุก 3 ชม. วันพุธ-ศุกร์ (เกาหลีพุธ, Asia พฤหัส, Global Lab ศุกร์) และวันละครั้งวันอื่น · กดรันเองได้ (`workflow_dispatch`)
- เจอของใหม่จะเปิด Pull Request พร้อม draft ให้ตรวจ **ไม่เผยแพร่อัตโนมัติ**
- ต้อง `git init` + push ขึ้น GitHub และตั้ง secret `ANTHROPIC_API_KEY` ก่อน
- API key อยู่ใน CI เท่านั้น ไม่เข้าเว็บ (nuxt-security / CSP ไม่ต้องแก้)

### สถานะ
- ✅ ดึงและแยกเนื้อหาจาก 3 แหล่งได้ (ทดสอบแบบ dry-run แล้ว)
- ✅ ตั้งสถานะเริ่มต้น `patch-watch/state.json` แล้ว (เก็บประกาศล่าสุดไว้ให้สรุปครั้งแรก เซิร์ฟละ 1 ฉบับ)
- ✅ ขั้นอนุมัติ + หน้าเว็บทดสอบด้วยไฟล์ตัวอย่างแล้ว (ลบไฟล์ตัวอย่างออกแล้ว)
- ⏳ **ยังไม่ได้เรียก Claude จริง** เพราะเครื่องนี้ยังไม่มี API key
- ค่าใช้จ่ายคาดการณ์: ประมาณ $5-8 ต่อเดือน (4-6 ประกาศต่อสัปดาห์)

## 11. หน้าใหม่: ตีบวก, เช็ก Roadmap, คูปอง (14 พ.ย. 2026)

| หน้า | URL | ข้อมูลมาจาก |
|---|---|---|
| ตีบวก | `/enhance` · `/en/enhance` | ตารางตีบวกจริงของ 13 เกียร์ใน BDOCodex (`app/data/enhance.json`, สคริปต์ `scripts/codex-enhance.mjs`) |
| เช็ก Roadmap | `/roadmap` · `/en/roadmap` | ROADMAP ใน `app/data/content.ts` + เก็บความคืบหน้าใน localStorage (`esan-roadmap-v1`) |
| คูปอง | `/coupons` · `/en/coupons` | ประกาศทางการ Asia (Crack the Code, Twitch Drops) + Garmoth (โค้ดเซิร์ฟอื่น ยังไม่ยืนยันกับ Asia) ใน `app/data/coupons.ts` |

- **ตีบวก:** "เริ่มอะไรก่อน" 5 ขั้น + ตัววางแผน (เลือกเกียร์ ขั้นปัจจุบัน ขั้นเป้าหมาย FS) แสดงโอกาส วัตถุดิบ Cron และความทนทานแต่ละขั้น
- **เช็ก Roadmap:** ติ๊กเช็กลิสต์ 41 ข้อ, บอกขั้นต่อไป, ช่วยประเมินว่าอยู่ช่วงไหนจากเลเวลและสถานะ Season
- **คูปอง:** แยก "ยืนยันแล้วสำหรับ Asia" กับ "เห็นในเซิร์ฟอื่น" ชัดเจน มีปุ่มคัดลอก วันเริ่ม/หมดอายุ และสถานะคำนวณตามเวลาของผู้ใช้
- **เมนู:** เปลี่ยนเป็น 6 ลิงก์ (เครื่องคำนวณ, ตีบวก, เช็ก Roadmap, คูปอง, คู่มือ, อัปเดต) และเอาปุ่ม CTA ซ้ำในเมนูออก

### ยังไม่ได้ทำ: หน้าข้อมูล 12 หัวข้อในเว็บ
- ระบบปฏิเสธการดึงฐานข้อมูลชุดใหญ่จาก BDOCodex (เควส ~18,000, Barter ~4,400, Node, บ้าน, สูตรอาหาร ฯลฯ) เพราะ robots.txt ของ BDOCodex ขอไม่ให้บอท AI ดึงข้อมูล
- สคริปต์ `scripts/codex-topics.mjs` เขียนไว้แล้วแต่ยังไม่ได้รัน ต้องตัดสินใจก่อนว่าจะใช้แหล่งไหน (ดูข้อความถึงผู้ใช้)

## 12. หน้าข้อมูลเกม 12 หัวข้อ จากแหล่งทางการ (14 พ.ย. 2026)

- **URL:** `/data` (หน้ารวม) และ `/data/<slug>` ทั้งไทยและ `/en/...`
- **หัวข้อ:** เควส, Knowledge และ Amity, Adventure Log, Node และคนงาน, บ้านและโกดัง, Contribution, เก็บของและ Mastery, ทำอาหาร, เรือ, อัปเกรดเรือ, Barter, ตารางบอสโลก (Asia)
- **แหล่งข้อมูล:** Adventurer's Guide ทางการของ Pearl Abyss (NA/EU และ Asia) + ประกาศทางการ Asia ทุกหน้ามีรายการแหล่งพร้อมวันที่แก้ไข และลิงก์ BDOCodex เป็น "ข้อมูลดิบเพิ่มเติม" เท่านั้น
- **ข้อมูลอยู่ที่:** `site/app/data/topics.ts` (เขียนเอง ไม่ได้คัดลอกฐานข้อมูล BDOCodex)
- **แก้ข้อมูลผิดที่เจอระหว่างทำ:**
  - Igor Bartali's Adventures ให้รวม **+2 AP / +5 DP** (Wiki ทางการ) ไม่ใช่ +6/+6
  - เรือ Bartali ได้จากเควส **Jarette's Support** (Wiki ทางการ) และวัตถุดิบอัปเกรด Bartali > Epheria ใช้ตัวเลขทางการ (Timber 350, Steel 250, Pine Plywood 700, Flax 100, Gold Bar 1,000G x5)
- **ตารางบอส:** แปลงจากรูปตารางทางการของ Asia (แก้ล่าสุด 30 ต.ค. 2026) เป็นเวลาไทย รูปไม่ได้ระบุเขตเวลา (สันนิษฐานว่า UTC+8)
- `scripts/codex-topics.mjs` ไม่ได้ใช้แล้ว (ทางเลือกแหล่งทางการแทน)
