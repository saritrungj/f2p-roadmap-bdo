# Northern-east heroic — Black Desert Asia Roadmap & Tools

เว็บรวมเครื่องคำนวณ คู่มือ และ Roadmap การเล่น Black Desert (PC) เซิร์ฟเวอร์ Asia สำหรับผู้เล่นทุกสาย (อิงข้อมูลแพตช์ Asia, BDOCodex และ Garmoth)

---

## 🧭 Roadmap 2 สายการเล่นหลัก

เว็บรองรับการวางแผนการเล่น 2 สายหลัก (3 รูปแบบ):

1. **สายฟรี (Pure F2P) — งบ 0 - 200 บาท**
   - จ่ายเฉพาะค่า Game Pass ครั้งเดียว (หรือรับฟรีจากอีเวนต์/Trial)
   - อาศัย Season Pass ฟรี, เควสแจกของ, HYPERBOOST รับเกียร์บอส PEN, Sovereign, Slumbering Origin
   - เต็นท์ฟรี Klau ที่ Velia, ม้าในฝันฟรี (Y), และแลก Value Pack 1 วันจาก Loyalty

2. **สายเติมเงิน (Spender)**
   - **แบบที่ 1: เติมเพื่อซื้อของที่จำเป็น (Smart Spender / Dolphin — งบ ~1,500 - 3,500 บาท)**
     - เน้นของถาวรที่ประหยัดเวลาอย่างมหาศาลและคุ้มค่าสูงสุด (Highest ROI)
     - เต็นท์แคช Naphart Campsite (ซ่อมไม่ลดความทนทานสูงสุด + ซื้อ Villa Buff ได้ทุกที่)
     - Black Spirit Season Pass พรีเมียม (Cron x2 + วัตถุดิบตีบวก)
     - นางฟ้าสกิลเทพ (Miraculous Cheer V ปั๊มยาอัตโนมัติ 2s + Feathery Steps V วิ่งได้แม้น้ำหนักเกิน)
     - สัตว์เลี้ยงจ่าฝูง Tier 5 Alpha + กองทัพเมดคลัง/ตลาด 8-12 ตัว
   - **แบบที่ 2: เติมเงินเยอะ (Whale / Heavy Spender — งบหลักหมื่นถึงหลักแสนบาท)**
     - ทางลัดสู่ End-Game ไวที่สุด
     - สกัดชุดแฟชั่นเป็น Cron Stone (Melting Outfits) เคาะ Sovereign & Slumbering Origin จบไว
     - ผัน Pearl เป็น Silver ในตลาดกลาง กว้านซื้อไอเทมจบเกม (PEN Accessories, Garmoth's Heart)
     - ขยายคลังทุกเมืองและที่พักคนงานด้วย Pearl เพื่อเอา Contribution Points ไปต่อโหนดทำเงิน 100%
     - กองทัพเมด 30-50 ตัว และม้ามายาขั้น 10 (Mythical Dream Horses)

---

## ⚡ การติดตั้งและรันบน Cloudflare Workers

โปรเจกต์ Nuxt 4 ได้รับการปรับแต่งให้รันบน **Cloudflare Workers with Static Assets** โดยอัตโนมัติ

### 1. ติดตั้ง Dependencies
```bash
cd site
npm install
```

### 2. รันโหมด Development (Vite Dev Server)
```bash
npm run dev
```

### 3. ตรวจสอบ Typecheck
```bash
npm run typecheck
```

### 4. คอมไพล์สำหรับ Cloudflare Workers
```bash
npm run build
# หรือ
npm run build:cf
```
คำสั่งนี้จะสร้าง:
- `.output/server/index.mjs` (Worker SSR Handler)
- `.output/public/` (Static Client Assets สำหรับ Edge CDN)

### 5. ทดสอบรันจำลองบน Cloudflare Workers บนเครื่อง (Local Preview)
```bash
npm run preview:worker
```

### 6. Deploy ขึ้น Cloudflare Workers
```bash
npm run deploy
```
*(ต้องล็อกอิน Cloudflare ผ่าน `npx wrangler login` ก่อน)*

---

## 📁 โครงสร้างโปรเจกต์
- `site/` — โค้ด Nuxt 4 (Vue 3, Nitro, nuxt-security, i18n)
  - `wrangler.jsonc` — คอนฟิกการ Deploy Cloudflare Workers with Assets
  - `nuxt.config.ts` — ตั้งค่า Nitro preset `cloudflare-module` และ Security Headers
  - `app/pages/roadmap.vue` — หน้าเช็กลิสต์ Roadmap พร้อม Track Selector แยกความคืบหน้าตามสายใน `localStorage`
  - `app/components/RoadmapSection.vue` — ส่วนแสดง Roadmap บนหน้าแรก พร้อมสวิตช์เลือกสาย
  - `app/data/content.ts` — ข้อมูลขั้นตอนทั้ง 3 โหมด (`ROADMAPS.f2p`, `ROADMAPS.spender_essential`, `ROADMAPS.spender_whale`)
- `BDO-F2P-Roadmap-200THB.md` — คู่มือเจาะลึกกลยุทธ์ทั้งสายฟรีและสายเติมเงิน