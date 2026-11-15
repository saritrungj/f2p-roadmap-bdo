// Coupons and code events for Black Desert ASIA, checked 14 Nov 2026.
// Asia-confirmed items come from official Asia notices. "Other region" codes come from
// Garmoth's coupon list and are NOT confirmed for Asia.
import type { L } from "./content";

export interface Reward {
  name: L;
  amount: number;
  icon: string | null; // local path under /codex/
}

export interface CodeEvent {
  id: string;
  kind: "event" | "drops";
  title: L;
  how: L;
  start: string; // ISO
  end: string; // ISO
  rewards: Reward[];
  status: L;
  source: string;
}

export interface Code {
  code: string;
  regions: L;
  start: string;
  end: string;
  rewards: Reward[];
  note: L;
  asiaConfirmed: false;
}

// Thai item names: bdocodex.com/th/item/<id>/ (1000877, 1000390, 767024, 767243, 752220).
const ICON = {
  outfit: "/codex/new_icon/09_cash/00021011.webp",
  chest: "/codex/new_icon/03_etc/01000877.webp",
  enhanceBox: "/codex/new_icon/09_cash/00756240.webp",
  cron: "/codex/new_icon/03_etc/00016080.webp",
};

const CRACK_REWARDS: Reward[] = [
  { name: { th: "[กิจกรรม] กล่องตระการตาของชาคาทู", en: "[Event] Shakatu's Gleaming Chest" }, amount: 1, icon: ICON.chest },
  { name: { th: "[กิจกรรม] กล่องเลือกสนับสนุนเสริมประสิทธิภาพเจิดจรัส", en: "[Event] Choose Your Resplendent Enhancement Box" }, amount: 1, icon: ICON.enhanceBox },
  { name: { th: "[กิจกรรม] กล่องชุดพรีเมี่ยมแทนคำขอบคุณ", en: "[Event] Thankful Premium Outfit Box" }, amount: 1, icon: ICON.outfit },
];

export const ASIA_EVENTS: CodeEvent[] = [
  {
    id: "crack-the-code",
    kind: "event",
    title: { th: "[เดือนแห่งชาคาทู] Crack the Code (คูปอง 3 ชุด)", en: "[Shakatu's Month] Crack the Code (3 coupons)" },
    how: {
      th: "เก็บกล่องรหัสลับจากการล่ามอน เก็บของ หรือตกปลา แล้วให้ชาคาทูที่ Velia ประเมิน จะได้ตัวอักษรรวม 14 ตัว ผู้เล่นต้องช่วยกันประกอบเป็นโค้ด 16 ตัวอักษร 3 ชุด เมื่อมีคนลงทะเบียนครบตามจำนวนที่กำหนด Pearl Abyss จะประกาศโค้ดที่ถูกต้อง",
      en: "Collect secret code boxes from combat, gathering or fishing and have Shakatu in Velia appraise them to reveal 14 letters. Players combine them into three 16-letter codes. Pearl Abyss publishes the correct codes once enough players have registered them.",
    },
    start: "2026-11-12T02:00:00Z",
    end: "2026-11-26T02:00:00Z",
    rewards: CRACK_REWARDS,
    status: { th: "Asia ยังไม่ประกาศโค้ด", en: "Asia has not published the codes yet" },
    source: "https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice/Detail?_boardNo=20047",
  },
  {
    id: "twitch-finals",
    kind: "drops",
    title: { th: "Twitch Drops: Master Class 2026 รอบชิง", en: "Twitch Drops: Master Class 2026 Finals" },
    how: {
      th: "ผูกบัญชี Twitch แล้วดูถ่ายทอดสด 2 ชั่วโมงในวันที่ 14-15 พ.ย. รับของที่ Web Storage > Claim Drops ภายในก่อนปิดปรับปรุง 3 ธ.ค.",
      en: "Link Twitch and watch 2 hours of the broadcast on 14-15 Nov. Claim in Web Storage > Claim Drops before maintenance on 3 Dec.",
    },
    start: "2026-11-14T00:00:00Z",
    end: "2026-12-03T02:00:00Z",
    rewards: [{ name: { th: "หินครอน", en: "Cron Stone" }, amount: 500, icon: ICON.cron }],
    status: { th: "ยืนยันสำหรับ Asia", en: "Confirmed for Asia" },
    source: "https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice/Detail?_boardNo=20059",
  },
  {
    id: "twitch-qualifiers",
    kind: "drops",
    title: { th: "Twitch Drops: Master Class 2026 รอบคัดเลือก", en: "Twitch Drops: Master Class 2026 Qualifiers" },
    how: {
      th: "ดูถ่ายทอดสด 2 ชั่วโมงในวันที่ 21-22 พ.ย. รับของภายในก่อนปิดปรับปรุง 10 ธ.ค.",
      en: "Watch 2 hours on 21-22 Nov and claim before maintenance on 10 Dec.",
    },
    start: "2026-11-21T00:00:00Z",
    end: "2026-12-10T02:00:00Z",
    rewards: [{ name: { th: "หินครอน", en: "Cron Stone" }, amount: 500, icon: ICON.cron }],
    status: { th: "ยืนยันสำหรับ Asia", en: "Confirmed for Asia" },
    source: "https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice/Detail?_boardNo=20016",
  },
];

const NAEU = { th: "พบในเซิร์ฟ NA/EU", en: "Seen on NA/EU" };
const LIKELY_ANSWER = {
  th: "น่าจะเป็นคำตอบของ Crack the Code ฝั่ง NA/EU (16 ตัวอักษร รางวัลตรงกัน) Asia อาจใช้โค้ดอื่น",
  en: "Likely the NA/EU Crack the Code answer (16 letters, same reward). Asia may use different codes.",
};

export const OTHER_REGION_CODES: Code[] = [
  { code: "TRADEWITHSHAKATU", regions: NAEU, start: "2026-11-12T17:07:30Z", end: "2026-12-10T23:59:00Z", rewards: [CRACK_REWARDS[0]!], note: LIKELY_ANSWER, asiaConfirmed: false },
  { code: "CHOOSEYOURREWARD", regions: NAEU, start: "2026-11-12T17:06:57Z", end: "2026-12-10T23:59:00Z", rewards: [CRACK_REWARDS[1]!], note: LIKELY_ANSWER, asiaConfirmed: false },
  { code: "SHAREYOURREWARDS", regions: NAEU, start: "2026-11-12T17:07:55Z", end: "2026-12-10T23:59:00Z", rewards: [CRACK_REWARDS[2]!], note: LIKELY_ANSWER, asiaConfirmed: false },
  {
    code: "TYALLADVENTURERS",
    regions: NAEU,
    start: "2026-07-26T08:09:05Z",
    end: "2026-11-26T23:59:00Z",
    rewards: [{ ...CRACK_REWARDS[2]!, amount: 10 }],
    note: { th: "ไม่พบประกาศของ Asia", en: "No Asia notice found" },
    asiaConfirmed: false,
  },
  {
    code: "BEYONDTHEJOURNEY",
    regions: NAEU,
    start: "2026-07-26T08:08:01Z",
    end: "2026-11-26T23:59:00Z",
    rewards: [
      { name: { th: "หินครอน", en: "Cron Stone" }, amount: 50000, icon: ICON.cron },
      { name: { th: "กล่องเลือกค้อนล้ำค่า", en: "Choose Your Rare Hammer Box" }, amount: 5, icon: null },
      { name: { th: "Advice of Valks (+450, +350, +300, +250)", en: "Advice of Valks (+450, +350, +300, +250)" }, amount: 1, icon: null },
      { name: { th: "กล่องใบแลกเปลี่ยนอาวุธ", en: "Weapon Exchange Coupon Box" }, amount: 1, icon: null },
    ],
    note: { th: "ไม่พบประกาศของ Asia", en: "No Asia notice found" },
    asiaConfirmed: false,
  },
];

export const REDEEM_URL = "https://store.pearlabyss.com/en-us/Coupon";
export const CHECKED_AT = "2026-11-14";
