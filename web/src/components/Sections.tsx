import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Backpack,
  Coins,
  Crosshair,
  Gift,
  Hammer,
  Lightning,
  MapTrifold,
  Moon,
  PawPrint,
  Plus,
  ShieldStar,
  Sun,
  Sword,
  Tent,
} from "@phosphor-icons/react";
import { BracketCalc, EnergyCalc, EnhanceCalc, GrindCalc, MarketCalc } from "./Calculators";
import { ENHANCE } from "../data/bdo";
import { enhanceChance, fmt2, successWithin } from "../lib/calc";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- Brand mark: simple geometric monogram ---------- */
function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <path d="M10 9h12v3.2h-8.4v2.4h7v3h-7v2.6H22V23H10z" fill="var(--on-accent)" />
    </svg>
  );
}

/* ---------- Theme ---------- */
type Theme = "dark" | "light";

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme as Theme | undefined;
  if (set) return set;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => currentTheme());
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("esan-theme", theme);
    } catch {
      /* storage unavailable: theme still works for this visit */
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))] as const;
}

export function Nav() {
  const [theme, toggle] = useTheme();
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="E-SAN ADVENTURE หน้าแรก">
          <BrandMark />
          E-SAN ADVENTURE
        </a>
        <nav aria-label="เมนูหลัก">
          <ul className="nav-links">
            <li><a href="#tools">เครื่องคำนวณ</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#free">ของฟรี</a></li>
            <li><a href="#tips">Tips</a></li>
            <li><a href="#about">เกี่ยวกับเรา</a></li>
          </ul>
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === "dark" ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด"}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#tools" className="btn btn-primary nav-cta">
            เปิดเครื่องคำนวณ
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero quick check: a live mini calculator ---------- */
function QuickCheck() {
  const [fs, setFs] = useState(20);
  const step = ENHANCE.accessory[0];
  const chance = enhanceChance(step, fs);
  const pair = successWithin(chance, 2);
  return (
    <div className="quick">
      <div className="quick-head">
        <Hammer size={22} weight="duotone" aria-hidden />
        <span>ลองเลย: ตีเครื่องประดับขึ้น PRI</span>
      </div>
      <label className="quick-label" htmlFor="quick-fs">
        Failstack <strong className="num">{fs}</strong>
      </label>
      <input
        id="quick-fs"
        className="quick-range"
        type="range"
        min={0}
        max={60}
        value={fs}
        onChange={(e) => setFs(Number(e.target.value))}
      />
      <div className="quick-out">
        <span>โอกาสสำเร็จ</span>
        <strong className="num">{fmt2(chance)}%</strong>
      </div>
      <dl className="result-list">
        <div>
          <dt>ต้องลองโดยเฉลี่ย</dt>
          <dd>{fmt2(100 / chance)} ครั้ง</dd>
        </div>
        <div>
          <dt>สำเร็จภายใน 2 ครั้ง</dt>
          <dd>{fmt2(pair * 100)}%</dd>
        </div>
        <div>
          <dt>ถ้าเกิน FS 18</dt>
          <dd>เพิ่มแค่ 0.5% ต่อ FS</dd>
        </div>
      </dl>
    </div>
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  const reduce = useReducedMotion();
  const enter = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.08 * i, ease: EASE },
        };

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <motion.p className="hero-eyebrow" {...enter(0)}>
            <MapTrifold size={18} weight="bold" aria-hidden />
            เริ่มที่ Black Desert
          </motion.p>
          <motion.h1 {...enter(1)}>
            <span className="line">เล่นให้คุ้ม</span>
            <em className="line">จ่ายแค่ค่าเกม</em>
          </motion.h1>
          <motion.p className="hero-sub" {...enter(2)}>
            เครื่องคำนวณภาษีตลาด ตีบวก AP/DP พร้อม roadmap ไอดีใหม่งบ 200 บาท ข้อมูลอัปเดตพฤศจิกายน 2026
          </motion.p>
          <motion.div className="hero-ctas" {...enter(3)}>
            <a href="#tools" className="btn btn-primary">
              เปิดเครื่องคำนวณ <ArrowRight size={18} weight="bold" aria-hidden />
            </a>
            <a href="#roadmap" className="btn btn-ghost">
              ดู Roadmap
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <QuickCheck />
        </motion.div>
      </div>
    </section>
  );
}

export function Facts() {
  const facts = [
    ["200 บาท", "งบทั้งหมด (Traveler Edition)"],
    ["+1000%", "EXP บน Season Server"],
    ["84.5%", "เงินที่ได้จากตลาดเมื่อมี Value Pack"],
    ["5 ตัว", "เครื่องคำนวณพร้อมใช้"],
  ];
  return (
    <div className="facts">
      <div className="container facts-grid">
        {facts.map(([v, k]) => (
          <div className="fact" key={k}>
            <strong>{v}</strong>
            <span>{k}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Workbench ---------- */
const TABS = [
  { id: "market", label: "ภาษีตลาด", icon: Coins, el: MarketCalc },
  { id: "enhance", label: "โอกาสตีบวก", icon: Hammer, el: EnhanceCalc },
  { id: "bracket", label: "AP / DP Bracket", icon: Sword, el: BracketCalc },
  { id: "grind", label: "เงินต่อชั่วโมง", icon: Crosshair, el: GrindCalc },
  { id: "energy", label: "Energy", icon: Lightning, el: EnergyCalc },
] as const;

export function Workbench() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("market");
  const reduce = useReducedMotion();
  const Current = TABS.find((t) => t.id === active)!.el;

  return (
    <section className="section" id="tools">
      <div className="container">
        <div className="section-head reveal">
          <h2>เครื่องคำนวณที่ใช้บ่อย</h2>
          <p>เปิดค้างไว้ข้างเกม กรอกตัวเลขแล้วได้ผลทันที ไม่ต้องสมัคร ไม่ต้องล็อกอิน</p>
        </div>
        <div className="bench">
          <div className="bench-tabs" role="tablist" aria-label="เลือกเครื่องคำนวณ">
            {TABS.map((t) => {
              const Icon = t.icon;
              const on = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={on}
                  aria-controls="bench-panel"
                  className="bench-tab"
                  onClick={() => setActive(t.id)}
                >
                  <Icon size={20} weight="duotone" aria-hidden />
                  <span>{t.label}</span>
                  {on && (
                    <motion.i
                      layoutId="bench-tab-bg"
                      className="bench-tab-bg"
                      aria-hidden
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="bench-panel" id="bench-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: EASE }}
              >
                <Current />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Roadmap ---------- */
const PHASES = [
  {
    title: "เตรียมไอดี",
    when: "วันแรก",
    items: [
      "สมัคร Pearl Abyss Account เลือกประเทศ Thailand",
      "ซื้อ Traveler Edition-ASIA 200 บาท (ดูก่อนว่าช่วงนี้มีลดราคาไหม)",
      "ตั้ง Secondary Password เพื่อเริ่มสถานะ New Adventurer",
    ],
  },
  {
    title: "Season Character",
    when: "สัปดาห์ที่ 1-2",
    items: [
      "สร้างตัวแรกเป็น Season ได้ Combat EXP +1000%",
      "ทำ Season Pass ด้วยการเก็บเลเวลและทำเควส Succession/Awakening",
      "เอา Adventure Token ไปแลก Inventory +16, เมด, สัตว์เลี้ยง",
    ],
  },
  {
    title: "เกียร์และเควสฟรี",
    when: "สัปดาห์ที่ 2-4",
    items: [
      "ใส่ PEN (V) Tuvala ให้ครบชุด",
      "ทำ Magnus ได้ fast travel และ PEN Boss gear",
      "ทำเควสกลุ่ม [ADV Support] ทั้งหมด เช่น แคมป์ แฟรี่ สัตว์เลี้ยง",
    ],
  },
  {
    title: "Graduate",
    when: "เดือนแรก",
    items: [
      "Graduate ตัวละครแล้วแลก Tuvala เป็น Boss gear",
      "เริ่ม Progression Pass",
      "เปิด Value Pack 15 วันตอนเริ่มขายของในตลาด",
    ],
  },
  {
    title: "เล่นยาวแบบไม่เติม",
    when: "เดือนที่ 2 เป็นต้นไป",
    items: [
      "วาง Node และคนงานไว้หาเงินตอนออฟไลน์",
      "แลก Value Pack 1 วันจาก Loyalty ทุกสัปดาห์",
      "ซื้อชุดต่อจากผู้เล่นอื่นในตลาดด้วย Silver",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="section" id="roadmap" style={{ background: "var(--surface)" }}>
      <div className="container roadmap">
        <div className="roadmap-intro">
          <h2 style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.75rem)" }}>Roadmap ไอดีใหม่ งบ 200 บาท</h2>
          <p style={{ marginTop: 14, color: "var(--ink-2)", maxWidth: "44ch" }}>
            จ่ายค่าเกมครั้งเดียว ที่เหลือเก็บเอาจาก Season Pass เควสฟรี และอีเวนต์
          </p>
          <div className="budget">
            <strong className="num">200 บาท</strong>
            <p>ได้ Game Pass + Value Pack 15 วัน + Coupon Bundle Box</p>
          </div>
        </div>
        <ol className="phases">
          {PHASES.map((p, i) => (
            <li className="phase reveal" key={p.title}>
              <span className="phase-num" aria-hidden>
                {i + 1}
              </span>
              <div>
                <h3>{p.title}</h3>
                <span className="when">{p.when}</span>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Free bento ---------- */
export function FreeBento() {
  return (
    <section className="section" id="free">
      <div className="container">
        <div className="section-head reveal">
          <h2>ของที่ได้ฟรี ไม่ต้องเติม</h2>
          <p>ระบบที่ดูเหมือนต้องจ่าย แต่จริง ๆ มีทางได้ฟรีอยู่</p>
        </div>
        <div className="bento">
          <article className="tile tile-kram reveal">
            {/* TODO: optional background screenshot of the free campsite, 1400x700 */}
            <Tent size={30} weight="duotone" className="tile-icon" aria-hidden />
            <h3>เต็นท์แคมป์ฟรี</h3>
            <p>
              จบเนื้อเรื่อง Calpheon แล้วรับเควส "Start of Camping" ได้เต็นท์ถาวร ซ่อมของ เก็บของ ซื้อยากลางทุ่งได้
            </p>
          </article>
          <article className="tile tile-accent reveal">
            <ShieldStar size={30} weight="duotone" className="tile-icon" aria-hidden />
            <h3>เกียร์ PEN ฟรี</h3>
            <p>Season Pass ให้ PEN (V) Tuvala ส่วน Magnus ให้ PEN Boss gear อีก 1 ชิ้น</p>
          </article>
          <article className="tile tile-pattern reveal">
            <PawPrint size={30} weight="duotone" className="tile-icon" aria-hidden />
            <h3>แฟรี่และสัตว์เลี้ยง</h3>
            <p>ได้แฟรี่ตอน Lv 53 และสัตว์เลี้ยง 5-6 ตัวจากเควส [ADV Support]</p>
          </article>
          <article className="tile reveal">
            <Backpack size={30} weight="duotone" className="tile-icon" aria-hidden />
            <h3>ช่องกระเป๋า + น้ำหนัก</h3>
            <p>ขยายกระเป๋าได้ประมาณ 190 ช่องจากเควส ส่วนน้ำหนักเพิ่มจาก Loyalty, Strength และ Adventure Log</p>
          </article>
          <article className="tile reveal">
            <Gift size={30} weight="duotone" className="tile-icon" aria-hidden />
            <h3>Value Pack 1 วัน</h3>
            <p>แลกจากร้าน Loyalty ได้ทุกสัปดาห์ เปิดเฉพาะวันที่จะขายของเยอะ</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tips ---------- */
const TIPS = [
  {
    q: "ขายขยะให้ NPC อย่าเอาไปลงตลาด",
    a: "ขายของให้ NPC ไม่เสียภาษี 35% ส่วนของที่ลงตลาดต้องหักภาษีก่อน ถ้ามี Value Pack จะได้ 84.5% ถ้าไม่มีได้ 65%",
  },
  {
    q: "เก็บ Value Pack ไว้เปิดวันที่จะขายของเยอะ",
    a: "Value Pack ให้เงินจากตลาดเพิ่มราว 19.5% ของยอดขาย เปิดตอนขายของล็อตใหญ่ได้เงินเพิ่มมากกว่าเปิดทิ้งไว้ตั้งแต่วันแรก",
  },
  {
    q: "ใช้ Ancient Anvil ช่วยตีบวกฟรี",
    a: "ตีพลาดแต่ละครั้งได้ Agris Essence สะสมไว้ พอครบเพดาน ครั้งถัดไปสำเร็จ 100% ใช้กับของที่ตีซ้ำบ่อยจะคุ้มมาก",
  },
  {
    q: "อยู่ Season Server ให้นานพอก่อน Graduate",
    a: "EXP ต่อสู้ +1000% และได้ของ Season ฟรีจำนวนมาก Graduate หลังได้ Tuvala ครบชุดและเคลียร์ Season Pass แล้ว",
  },
  {
    q: "ดู Bracket ก่อนลงทุนตีบวก",
    a: "AP บางช่วงเพิ่มนิดเดียวก็ได้โบนัสเยอะ ใช้เครื่องคำนวณ AP/DP ดูว่าเหลืออีกกี่แต้มถึง bracket ถัดไป",
  },
  {
    q: "ล็อกอินทุกวันในช่วงอีเวนต์",
    a: "รางวัลล็อกอินรายวันย้อนรับไม่ได้ และต้องใช้ตัวละคร Lv 7 ขึ้นไป ของที่ได้ เช่น Cron Stone และ Advice of Valks ช่วยประหยัดเงินได้มาก",
  },
];

export function Tips() {
  return (
    <section className="section" id="tips" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head reveal">
          <h2>Tips & Tricks</h2>
          <p>เทคนิคสั้น ๆ ที่ช่วยประหยัด Silver และเวลา</p>
        </div>
        <div className="tips">
          {TIPS.map((t, i) => (
            <details className="tip" key={t.q} open={i === 0}>
              <summary>
                {t.q}
                <Plus size={22} weight="bold" aria-hidden />
              </summary>
              <p className="tip-body">{t.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About + Footer ---------- */
export function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about-panel reveal">
          {/* TODO: optional community photo, 1600x1000 */}
          <strong>E-SAN</strong>
          <strong>ADVENTURE</strong>
          <span>เล่นเกมแบบคนอีสาน คุ้มทุกบาท</span>
        </div>
        <div className="reveal">
          <h2>เกี่ยวกับ E-SAN ADVENTURE</h2>
          <p>
            เราเป็นกลุ่มคนเล่นเกมจากอีสานที่อยากเล่นเกมให้สนุกโดยไม่ต้องเติมเงินหนัก เลยรวบรวมสูตร ตัวเลข และเส้นทางที่ลองใช้จริงไว้ในที่เดียว
          </p>
          <p>ตอนนี้เริ่มที่ Black Desert ก่อน แล้วจะเพิ่มเกมอื่นตามมาด้วยรูปแบบเดียวกัน</p>
          <div className="games">
            <span className="chip chip-on">Black Desert (PC)</span>
            <span className="chip">เกมถัดไปกำลังเตรียม</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand" style={{ color: "var(--ink)" }}>
            <BrandMark />
            E-SAN ADVENTURE
          </a>
          <p style={{ marginTop: 14, maxWidth: "46ch" }}>
            เว็บโดยแฟนเกม ไม่ใช่เว็บทางการ ไม่ได้เกี่ยวข้องกับ Pearl Abyss ตัวเลขในเกมอาจเปลี่ยนหลังอัปเดต ก่อนจ่ายเงินให้เช็กกับประกาศทางการทุกครั้ง
          </p>
        </div>
        <div>
          <h4>แหล่งข้อมูล</h4>
          <ul>
            <li><a href="https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice" target="_blank" rel="noreferrer">ประกาศทางการ Asia</a></li>
            <li><a href="https://www.blackdesertfoundry.com/guide-list/" target="_blank" rel="noreferrer">BDFoundry</a></li>
            <li><a href="https://www.naeu.playblackdesert.com/en-US/Wiki" target="_blank" rel="noreferrer">Adventurer's Guide (Wiki)</a></li>
          </ul>
        </div>
        <div>
          <h4>ในหน้านี้</h4>
          <ul>
            <li><a href="#tools">เครื่องคำนวณ</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#free">ของฟรี</a></li>
            <li><a href="#tips">Tips</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: 32 }}>
        <p>ข้อมูล ณ วันที่ 13 พฤศจิกายน 2026</p>
      </div>
    </footer>
  );
}
