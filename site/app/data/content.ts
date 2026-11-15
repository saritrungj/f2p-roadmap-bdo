// Bilingual site content (th / en). Item, quest and NPC names are NOT written here:
// they render from BDOCodex data (app/data/codex.json) through <CodexChip> refs,
// so each language shows the official name from bdocodex.com/th or bdocodex.com/seaen.

export type L = { th: string; en: string };
export type Ref = { item: number } | { quest: string } | { npc: number };

export interface Phase {
  title: L;
  when: L;
  goal: L;
  icon: Ref;
  steps: L[];
  details: L[];
  refs: Ref[];
}

export interface GuideCard {
  title: L;
  icon: Ref;
  items: L[];
  refs?: Ref[];
  wide?: boolean;
}

export interface GuideTab {
  id: "basics" | "life" | "craft" | "sail";
  label: L;
  cards: GuideCard[];
}

export interface Tip {
  q: L;
  a: L;
  icon: Ref;
}

export interface FreeTile {
  title: L;
  body: L;
  icon: Ref;
  refs?: Ref[];
  style?: "kram" | "accent" | "pattern";
}

/* ------------------------------------------------------------------ */
export const ROADMAP: Phase[] = [
  {
    title: { th: "เตรียมไอดี", en: "Set up the account" },
    when: { th: "วันที่ 0", en: "Day 0" },
    goal: { th: "มีไอดีเซิร์ฟ Asia พร้อมเล่น ใช้เงิน 200 บาทครั้งเดียว", en: "An Asia-server account, paid for once with 200 THB" },
    icon: { item: 47031 },
    steps: [
      { th: "สมัคร Pearl Abyss Account ที่เว็บ Asia เลือกประเทศ Thailand", en: "Create a Pearl Abyss account on the Asia site and pick Thailand" },
      { th: "ซื้อ Traveler Edition-ASIA 200 บาท (Game Pass + Value Pack 15 วัน + Coupon Bundle Box)", en: "Buy Traveler Edition-ASIA for 200 THB (Game Pass + 15-day Value Pack + Coupon Bundle Box)" },
      { th: "ตั้ง Secondary Password เพื่อเริ่มนับสถานะ New Adventurer 60 วัน", en: "Set a secondary password to start your 60-day New Adventurer status" },
    ],
    details: [
      { th: "ซื้อเฉพาะ Edition ของเซิร์ฟ Asia เพราะไอดี Steam / NA-EU ย้ายมา Asia ไม่ได้", en: "Buy the Asia edition only; Steam and NA/EU accounts cannot move to Asia" },
      { th: "เปิด DirectX 12 / FSR 3.1 ได้จากตัวเปิดเกม (ตั้งแต่ 29 ต.ค. 2026)", en: "DirectX 12 / FSR 3.1 can be enabled from the launcher (since 29 Oct 2026)" },
      { th: "60 วันแรก Magnus ย้ายระหว่าง Balenos กับ Land of the Morning Light ได้ฟรี", en: "For your first 60 days, Magnus travel between Balenos and the Land of the Morning Light is free" },
    ],
    refs: [{ item: 47031 }],
  },
  {
    title: { th: "Season Character", en: "Season character" },
    when: { th: "วันที่ 1-7", en: "Days 1-7" },
    goal: { th: "เก็บเลเวลเร็วที่สุดด้วย Season Server", en: "Level as fast as possible on a Season server" },
    icon: { item: 695116 },
    steps: [
      { th: "สร้างตัวแรกเป็น Season Character (มีตั๋ว 3 ใบ ถือได้สูงสุด 5 ใบ)", en: "Make your first character a Season character (3 tickets to start, 5 max)" },
      { th: "เดินเควสหลัก เส้นแรกพาไปถึง Lv 56 (เส้น Mediah ถึง 60)", en: "Follow the main quest; the starting lines take you to Lv 56 (Mediah to 60)" },
      { th: "ทำ HYPERBOOST Season Pass ให้จบด้วยการเก็บเลเวลกับเควส Awakening / Succession", en: "Finish the HYPERBOOST Season Pass by levelling and doing the Awakening / Succession quest" },
    ],
    details: [
      { th: "ทุกอาชีพมีค่าสถานะพื้นฐานเท่ากันแล้ว เลือกที่ชอบได้เลย (8 ต.ค. 2026)", en: "All classes share the same base stats now, so pick what you enjoy (8 Oct 2026)" },
      { th: "อาวุธ Tuvala เป็นเกียร์ Season เท่ากับ PEN Boss gear แล้ว", en: "Tuvala gear is the Season gear and now equals PEN boss gear" },
      { th: "ล็อกอินรับรางวัลรายวันด้วยตัว Lv 7+ ทุกวัน", en: "Claim daily login rewards with a Lv 7+ character every day" },
    ],
    refs: [{ item: 695116 }],
  },
  {
    title: { th: "เควสฟรีที่ต้องทำ", en: "Free quests to clear" },
    when: { th: "วันที่ 3-14", en: "Days 3-14" },
    goal: { th: "ปลดระบบที่ดูเหมือนต้องจ่ายให้ครบ", en: "Unlock the systems that look paid" },
    icon: { item: 49013 },
    steps: [
      { th: "เต็นท์: Lv 50+ รับเควส [ADV Support] Start of Camping จาก Black Spirit (แท็บ Suggested) แล้วไปคุยกับ Klau ที่ Velia ทำได้ครอบครัวละครั้ง", en: "Campsite: at Lv 50+, accept [ADV Support] Start of Camping from the Black Spirit (Suggested tab), which sends you to Klau in Velia (once per family)" },
      { th: "พ่อบ้านและเมดฟรีจากเควส Black Spirit", en: "Free butler and maid from the Black Spirit quests" },
      { th: "แฟรี่ สัตว์เลี้ยง Artifact และช่องกระเป๋า จากเควส Black Spirit / Suggested", en: "Fairy, pets, artifacts and inventory slots from Black Spirit / Suggested quests" },
    ],
    details: [
      { th: "เควสเต็นท์ให้ Camping Tool, เต็นท์, ทั่ง และร้านค้า (ขั้นที่คุยกับ Klau ได้ Contribution EXP 80) ตัวที่ใช้เส้นเควสแบบย่อรับไม่ได้ ให้ใช้ตัวอื่นในครอบครัว", en: "The campsite quest gives the Camping Tool, tent, anvil and shop (the Klau step gives 80 Contribution EXP). Simplified-questline characters can't take it; use another family character" },
      { th: "ม้าในฝันฟรี: เปิด Challenge (Y) รับ Vipiko's Dreaming Horse", en: "Free dream horse: claim Vipiko's Dreaming Horse in Challenges (Y)" },
      { th: "Magnus: รับเควส [The Magnus] Nostalgic for Velia จาก Black Spirit (ในเขต Balenos) แล้วไปหา Eileen ที่ Velia ได้ fast travel ครั้งละ 5M ทุกระยะทาง", en: "Magnus: accept [The Magnus] Nostalgic for Velia from the Black Spirit (in Balenos), then see Eileen in Velia; fast travel is a flat 5M per trip" },
      { th: "กด F8 เปิด Black Spirit's Scheduler ดูเควสรายวัน/รายสัปดาห์", en: "Press F8 for the Black Spirit's Scheduler of daily and weekly quests" },
    ],
    refs: [{ quest: "3530/282" }, { quest: "699/21" }, { quest: "699/19" }, { quest: "6802/1" }, { quest: "21416/1" }, { quest: "7542/1" }, { quest: "683/4" }, { item: 65298 }],
  },
  {
    title: { th: "Olvia Academy + HYPERBOOST", en: "Olvia Academy + HYPERBOOST" },
    when: { th: "สัปดาห์ที่ 2-3", en: "Weeks 2-3" },
    goal: { th: "ได้เกียร์ฟรีระดับกลางครบทั้งตัว", en: "A full free mid-game gear set" },
    icon: { item: 747206 },
    steps: [
      { th: "มีตัวละคร Lv 60+ ในครอบครัวก็สมัคร Olvia Academy Class 4 ได้ (ถึง 25 ก.พ. 2027) ไม่ต้อง Graduate ก่อน", en: "Any Lv 60+ character in the family can enrol in Olvia Academy Class 4 (until 25 Feb 2027); no Season graduation needed" },
      { th: "คอร์สต่อสู้ (ครอบครัวละครั้ง): กล่องอาวุธ Blackstar TET/PEN, กล่องเกราะ PEN Boss, Cron 6,000", en: "Combat course (once per family): TET/PEN Blackstar weapon boxes, PEN boss armor box, 6,000 Cron Stones" },
      { th: "Graduate Season แล้วรับเกียร์ HYPERBOOST: อาวุธ Sovereign, เกราะ Slumbering Origin, เครื่องประดับ PEN Kharazad", en: "Graduate from Season, then collect HYPERBOOST gear: Sovereign weapons, Slumbering Origin armor, PEN Kharazad accessories" },
    ],
    details: [
      { th: "Emma Bartali's Journal ให้ Ancient Black Stone ที่ตี PEN ขึ้นไปสำเร็จแน่นอน", en: "Emma Bartali's Journal gives Ancient Black Stones that guarantee PEN and higher" },
      { th: "ใส่ Crystal ให้ครบช่อง เริ่ม Lightstone แบบ Trained Fists แล้วค่อยเปลี่ยนเป็น Target Openings ผ่าน Kabua's Artifact", en: "Fill crystal sockets; start with the Trained Fists lightstone set and move to Target Openings via Kabua's Artifact" },
    ],
    refs: [{ item: 747206 }, { item: 12140 }, { item: 790873 }, { item: 742269 }],
  },
  {
    title: { th: "เก็บเลเวล 60 ถึง 75", en: "Level 60 to 75" },
    when: { th: "สัปดาห์ที่ 3-6", en: "Weeks 3-6" },
    goal: { th: "ถึง Lv 75 และหาเงินจากการฟาร์ม", en: "Reach Lv 75 and earn silver grinding" },
    icon: { item: 44322 },
    steps: [
      { th: "ใช้แท็บ \"จุดฟาร์มที่ไปได้\" เลือกจุดตาม AP/DP บนหน้าตัวละคร", en: "Use the Grind spots tab to pick a spot from your character-window AP/DP" },
      { th: "ตั้งเต็นท์ใช้บัฟ EXP (Body Enhancement 100%) ระหว่างฟาร์ม", en: "Pitch the campsite for its EXP buff (Body Enhancement 100%) while grinding" },
      { th: "เล่น Black Shrine Donghae (Solo) ด้วยเกียร์ตัวเอง (เลิกปรับ AP/DP ให้แล้ว Calamity 1 ต้อง AP 300-310) และตี Rawr-Rawr World Boss ทุกวัน 16:00 เวลาไทย (17:00 เวลาเซิร์ฟ)", en: "Run Black Shrine Donghae (Solo) with your own gear (the AP/DP equaliser is gone; Calamity 1 wants 300-310 AP) and hit the daily Rawr-Rawr world boss at 16:00 Thai time (17:00 server time)" },
    ],
    details: [
      { th: "Lv 70-75: ทุกเลเวลได้ Extra AP vs. monsters +3 และลดดาเมจจากมอนสเตอร์ +3", en: "Lv 70-75: each level gives +3 Extra AP vs. monsters and +3 monster damage reduction" },
      { th: "ขยะขาย NPC ไม่เสียภาษี ส่วน Ancient Black Stone (PEN/HEX/SEP) และ Ancient Hammer ขาย NPC ไม่ได้แล้ว (6 ส.ค.) ถ้าไม่ใช้ให้เผา (Heating) เป็น Cron Stone", en: "Junk sold to NPCs is untaxed; Ancient Black Stones (PEN/HEX/SEP) and Ancient Hammers can't be sold to NPCs since 6 Aug, so heat unneeded ones into Cron Stones" },
    ],
    refs: [{ item: 44322 }, { item: 16001 }, { item: 16080 }],
  },
  {
    title: { th: "คนงานและ Life Skill (ตอนออนไลน์)", en: "Workers and life skills (while online)" },
    when: { th: "เดือนแรก", en: "First month" },
    goal: { th: "ให้คนงานกับ Life Skill หาเงินระหว่างที่เปิดเกมค้างไว้", en: "Let workers and life skills earn while the game stays open" },
    icon: { item: 64687 },
    steps: [
      { th: "ลงทุน Node + จ้างคนงาน (ใช้ CP) ให้ขนวัตถุดิบเข้าเมือง", en: "Invest Contribution in nodes and hire workers to haul materials to town" },
      { th: "สำคัญ: คนงานทำงานเฉพาะตอนออนไลน์ (AFK ก็นับ) ถ้าล็อกเอาท์ งานที่ทำอยู่จะจบรอบนั้นแล้วหยุด", en: "Important: workers only work while you are logged in (AFK counts). On logout they finish the current job and stop" },
      { th: "ทำคอร์ส Life ของ Olvia แล้วเริ่มเก็บของ + ตกปลา ต่อด้วยทำอาหาร / แปรรูป", en: "Take the Olvia life courses, start with gathering + fishing, then cooking / processing" },
    ],
    details: [
      { th: "พืชในฟาร์ม, ตกปลา AFK และแปรรูปก็ทำงานเฉพาะตอนออนไลน์เช่นกัน", en: "Farm crops, AFK fishing and processing also only progress while you are online" },
      { th: "ของที่ลงขายในตลาดกลางรอคนซื้อได้แม้ออฟไลน์ (คำสั่งซื้ออยู่ฝั่งเซิร์ฟเวอร์)", en: "Central Market listings wait server-side for buyers even when you are offline" },
      { th: "Energy ออฟไลน์ฟื้นช้ากว่า (1 แต้ม/ชม.) ออนไลน์ 1 แต้ม/3 นาที", en: "Energy recovers slower offline (1 point/hour) than online (1 point/3 min)" },
      { th: "เปิด Value Pack 15 วันตอนเริ่มขายของในตลาดเป็นล็อตใหญ่", en: "Open the 15-day Value Pack when you start selling in bulk" },
    ],
    refs: [{ item: 64687 }, { item: 9213 }, { item: 933601 }, { item: 16141 }],
  },
  {
    title: { th: "เล่นยาวแบบไม่เติม", en: "Long term, no top-ups" },
    when: { th: "เดือนที่ 2 เป็นต้นไป", en: "Month 2 onward" },
    goal: { th: "ขึ้นเกียร์ต่อด้วย Silver ล้วน", en: "Keep upgrading with silver only" },
    icon: { item: 49011 },
    steps: [
      { th: "แลก Value Pack 1 วันจาก Loyalty ทุกสัปดาห์ เปิดวันที่ขายของ", en: "Trade Loyalty for a 1-day Value Pack weekly and open it on selling days" },
      { th: "เริ่มสายเรือ: ได้เรือ Bartali จากสายเควส [The Great Expedition] (เริ่ม Vigorous Velia ที่ Black Spirit Lv 50 จบที่ First Sailboat into Oquilla's Eye) หรือซื้อ 10M แล้วต่อ Epheria จนถึง Carrack", en: "Start sailing: get a Bartali Sailboat from the [The Great Expedition] questline (Vigorous Velia from the Black Spirit at Lv 50, ending with First Sailboat into Oquilla's Eye) or buy it for 10M, then Epheria ships up to the Carrack" },
      { th: "เข้ากิลด์ที่มี Guild Fame สูงเพื่อรับบัฟ EXP / น้ำหนัก", en: "Join a guild with high Guild Fame for EXP and weight buffs" },
    ],
    details: [
      { th: "ใช้ Ancient Anvil สะสม Agris Essence กับของที่ตีพลาดบ่อย", en: "Use the Ancient Anvil to stack Agris Essence on gear you fail often" },
      { th: "ไป Inner Edania เมื่อเกียร์พร้อม (Hadum / Throne of Edana ต้องการ 428 AP / 520 DP)", en: "Move to Inner Edania when ready (Hadum / Throne of Edana need 428 AP / 520 DP)" },
    ],
    refs: [{ quest: "3706/12" }, { item: 49028 }, { item: 49011 }, { item: 49021 }],
  },
];

/* ------------------------------------------------------------------ */
export const GUIDE: GuideTab[] = [
  {
    id: "basics",
    label: { th: "ระบบพื้นฐาน", en: "Core systems" },
    cards: [
      {
        title: { th: "Black Spirit และเควส", en: "Black Spirit and quests" },
        icon: { item: 40653 },
        items: [
          { th: "กด , เปิด Black Spirit และกด O เปิดหน้าเควส เดินตามแท็บ Main", en: "Press , for the Black Spirit and O for quests; follow the Main tab" },
          { th: "คลิกขวาที่เควสแล้วกด T ให้วิ่งไปเอง", en: "Right-click a quest and press T to auto-run" },
          { th: "กด F8 เปิด Black Spirit's Scheduler", en: "Press F8 for the Black Spirit's Scheduler" },
          { th: "เริ่ม Igor Bartali's Adventure Log เร็ว ๆ (ไกด์ผู้เล่นนับรวมได้ราว +6 AP / +6 DP, HP +877, น้ำหนัก +28 LT ทั้งครอบครัว)", en: "Start Igor Bartali's Adventure Log early (player guides count about +6 AP / +6 DP, +877 HP and +28 LT family-wide)" },
        ],
        refs: [{ item: 40653 }],
      },
      {
        title: { th: "Energy และ Contribution", en: "Energy and Contribution" },
        icon: { item: 17501 },
        items: [
          { th: "Energy ฟื้น 1 แต้ม / 3 นาที ตอนออนไลน์ และ 1 แต้ม / 1 ชม. ตอนออฟไลน์", en: "Energy: 1 point / 3 min online, 1 point / 1 hour offline" },
          { th: "นอนเตียงในบ้านหรือแช่บ่อน้ำร้อนฟื้นเร็วขึ้น", en: "A bed in your residence or a hot spring speeds it up" },
          { th: "Contribution (CP) ได้จากเควส ใช้กับ Node และบ้าน ถอนแล้วคืนเต็ม", en: "Contribution (CP) comes from quests, is spent on nodes and houses, and is refunded in full" },
        ],
        refs: [{ item: 17501 }, { item: 405 }],
      },
      {
        title: { th: "คนงาน: ออนไลน์เท่านั้น", en: "Workers: online only" },
        icon: { item: 64687 },
        items: [
          { th: "คนงานทำงานเฉพาะตอนเราล็อกอินอยู่ (เปิดเกม AFK ก็ได้)", en: "Workers only work while you are logged in (AFK is fine)" },
          { th: "ล็อกเอาท์แล้ว งานที่ทำค้างจะทำต่อจนจบรอบนั้น แต่จะไม่เริ่มรอบใหม่", en: "After logout they finish the current job but do not start the next" },
          { th: "ทุกเมืองมีคนงานฟรี 1 คน คนต่อไปต้องมีที่พัก ให้เบียร์เป็นอาหาร", en: "Each town gives one free worker; more need lodging. Feed them beer" },
        ],
        refs: [{ item: 64687 }, { item: 9213 }],
      },
      {
        title: { th: "Magnus และม้าฟรี", en: "Magnus and a free horse" },
        icon: { item: 65298 },
        items: [
          { th: "Magnus: fast travel ครั้งละ 5M Silver ทุกระยะทาง และมีโกดังรวม", en: "Magnus fast travel costs 5M silver per trip at any distance, plus shared storage" },
          { th: "Vipiko's Dreaming Horse ฟรีที่ Challenge (Y) เลือกม้าในฝันได้ 1 ตัว", en: "Vipiko's Dreaming Horse is free in Challenges (Y); choose one dream horse" },
        ],
        refs: [{ item: 65298 }],
      },
      {
        title: { th: "ตีบวก", en: "Enhancing" },
        icon: { item: 16001 },
        items: [
          { th: "Cron Stone กันขั้นลดเมื่อตีพลาด ราคา NPC 3M", en: "Cron Stones prevent downgrades; NPC price 3M" },
          { th: "Caphras ใช้กับเกียร์ TRI ขึ้นไป แนะนำหยุดที่ Lv 10", en: "Caphras works on TRI+ gear; stopping at level 10 is recommended" },
          { th: "Ancient Anvil: ตีพลาดได้ Agris Essence ครบเพดานแล้วครั้งถัดไปสำเร็จ 100%", en: "Ancient Anvil: failures store Agris Essence; at the cap the next tap succeeds" },
        ],
        refs: [{ item: 16001 }, { item: 16002 }, { item: 16080 }, { item: 721003 }, { item: 44195 }, { item: 17643 }],
        wide: true,
      },
      {
        title: { th: "Value Pack ให้อะไร", en: "What the Value Pack gives" },
        icon: { item: 47031 },
        items: [
          { th: "ขายตลาดได้ 84.5% (ปกติ 65%), น้ำหนัก +200 LT, กระเป๋าและโกดัง +16", en: "84.5% market payout (65% without), +200 LT weight, +16 inventory and storage" },
          { th: "EXP ต่อสู้/สกิล/Life/ม้า +30% และ Barter Refresh +50", en: "+30% combat/skill/life/mount EXP and +50 barter refresh points" },
        ],
        refs: [{ item: 47031 }],
      },
    ],
  },
  {
    id: "life",
    label: { th: "Life Skill", en: "Life skills" },
    cards: [
      {
        title: { th: "เริ่มยังไง", en: "Getting started" },
        icon: { item: 16113 },
        items: [
          { th: "11 สาย: เก็บของ ตกปลา ล่าสัตว์ ทำอาหาร แปรธาตุ แปรรูป ฝึกม้า ค้าขาย ฟาร์ม เดินเรือ Barter", en: "11 skills: gathering, fishing, hunting, cooking, alchemy, processing, training, trading, farming, sailing, barter" },
          { th: "เปิดประเภทเควส Life / Fishing ในหน้า O แล้วใช้ Black Spirit > Guide", en: "Enable Life / Fishing quest types in O, then use Black Spirit > Guide" },
          { th: "ทุกอย่างทำงานเฉพาะตอนออนไลน์ แต่เปิด AFK ทิ้งไว้ได้", en: "Everything progresses only while online, but AFK works" },
        ],
        refs: [{ item: 16113 }, { item: 16125 }, { item: 16117 }, { item: 16141 }],
      },
      {
        title: { th: "Olvia Academy คอร์ส Life", en: "Olvia Academy life courses" },
        icon: { item: 761924 },
        items: [
          { th: "ต้องมีตัว Lv 60+ ในครอบครัว ได้เกียร์ Life และ Cron 1,000 ก้อนต่อสาย (ครอบครัวละครั้ง)", en: "Needs a Lv 60+ character; gives life gear and 1,000 Cron Stones per skill (once per family)" },
          { th: "Class 4 เปิดถึง 25 ก.พ. 2027", en: "Class 4 runs until 25 Feb 2027" },
        ],
        refs: [{ item: 761924 }],
        wide: true,
      },
      {
        title: { th: "เกียร์ Life (หลัง 3 ก.ย. 2026)", en: "Life gear (after 3 Sep 2026)" },
        icon: { item: 933601 },
        items: [
          { th: "เครื่องประดับ / หินแปรธาตุ / Evergreen Orb ใส่ครั้งเดียวมีผลทุกสายทุกตัว", en: "Accessories, alchemy stone and Evergreen Orb apply to every skill and character" },
          { th: "Evergreen Orb ให้ Life EXP สูงสุด +90% ตีสำเร็จ 100%", en: "Evergreen Orb gives up to +90% life EXP and always enhances successfully" },
          { th: "เครื่องประดับ Life: Floramos, Loggia, Geranoa, Manos, Preonne ตั้งแต่ 3 ก.ย. เกียร์ Life ไม่มี DP และไม่เพิ่มน้ำหนักบรรทุกแล้ว", en: "Life accessories: Floramos, Loggia, Geranoa, Manos, Preonne. Since 3 Sep, life gear no longer gives DP or weight limit" },
        ],
        refs: [{ item: 933601 }, { item: 705503 }, { item: 705533 }],
      },
      {
        title: { th: "ลำดับแนะนำสายฟรี", en: "Suggested order for free players" },
        icon: { item: 3717 },
        items: [
          { th: "เก็บของ + ตกปลา ลงทุนน้อย", en: "Gathering + fishing: low cost" },
          { th: "ทำอาหาร (เบียร์ให้คนงาน) + แปรรูป", en: "Cooking (beer for workers) + processing" },
          { th: "ฝึกม้า: เชือกจับม้า + Lump of Raw Sugar จับติดแน่นอน", en: "Training: capture rope + Lump of Raw Sugar guarantees the capture" },
        ],
        refs: [{ item: 3717 }, { item: 3701 }, { item: 54003 }],
      },
    ],
  },
  {
    id: "craft",
    label: { th: "การปั้นของ", en: "Crafting" },
    cards: [
      {
        title: { th: "แปรรูป (L)", en: "Processing (L)" },
        icon: { item: 4918 },
        items: [
          { th: "บด สับ ให้ความร้อน ตากแห้ง กรอง แปรธาตุ/ทำอาหารอย่างง่าย Manufacture", en: "Grinding, chopping, heating, drying, filtering, simple alchemy/cooking, manufacture" },
          { th: "พลาดเสียแค่เวลา ไม่เสียวัตถุดิบ ต้องมีช่องว่าง 2 ช่อง", en: "Failure only costs time, never materials; keep 2 free slots" },
          { th: "ทำได้ตอนออนไลน์ (AFK ได้) หยุดเมื่อวัตถุดิบหมดหรือน้ำหนักเกิน", en: "Runs while online (AFK ok); stops when materials run out or you are overweight" },
        ],
        refs: [{ item: 4918 }, { item: 16004 }],
      },
      {
        title: { th: "โรงงานผ่านคนงาน", en: "Workshops with workers" },
        icon: { item: 64687 },
        items: [
          { th: "ซื้อบ้านด้วย CP ตั้งเป็นโรงงาน วางวัตถุดิบในโกดังเมืองเดียวกับคนงาน", en: "Buy a house with CP, set it as a workshop, keep materials in the worker's town storage" },
          { th: "สั่งผลิตใน Manage Crafting ยกเลิกกลางคันวัตถุดิบไม่คืน", en: "Queue jobs in Manage Crafting; cancelling does not refund materials" },
          { th: "คนงานทำงานเฉพาะตอนออนไลน์", en: "Workers only work while you are online" },
        ],
        refs: [{ item: 64687 }],
      },
      {
        title: { th: "ของที่ควรคราฟต์เอง", en: "Worth crafting yourself" },
        icon: { item: 16000 },
        items: [
          { th: "Crystal Extraction Tool ใช้ถอด Crystal", en: "Crystal Extraction Tool for removing crystals" },
          { th: "Concentrated Magical Black Stone ใช้ตีเกียร์ PRI ขึ้นไป", en: "Concentrated Magical Black Stone for PRI+ attempts" },
          { th: "แปรรูปแบบเยอะ (27 ส.ค. 2026) เฉพาะชิ้นส่วนเรือเกรดเหลืองและ Sunset Tidal Black Stone: วัตถุดิบ 10 เท่า + Black Stone Powder 1", en: "Mass processing (27 Aug 2026), only for yellow-grade ship parts and Sunset Tidal Black Stone: 10x materials + 1 Black Stone Powder" },
        ],
        refs: [{ item: 16000 }, { item: 16004 }],
        wide: true,
      },
    ],
  },
  {
    id: "sail",
    label: { th: "การทำเรือ", en: "Sailing" },
    cards: [
      {
        title: { th: "เส้นทางเรือสายฟรี", en: "Free-player ship path" },
        icon: { item: 49021 },
        items: [
          { th: "Bartali > Epheria Sailboat > Epheria Caravel > Carrack (Advance แนะนำลำแรก)", en: "Bartali > Epheria Sailboat > Epheria Caravel > Carrack (Advance as the first)" },
          { th: "Carrack ซื้อในตลาดได้แล้ว และแปลงเป็น Ship License ขายได้", en: "Carracks can now be bought on the market and converted into Ship Licenses" },
        ],
        refs: [{ item: 49028 }, { item: 49011 }, { item: 49023 }, { item: 49021 }],
        wide: true,
      },
      {
        title: { th: "เรือลำแรก Bartali", en: "First ship: Bartali" },
        icon: { item: 49028 },
        items: [
          { th: "สายเควส [The Great Expedition] จบที่ First Sailboat into Oquilla's Eye (เริ่ม Vigorous Velia ที่ Black Spirit Lv 50) หรือซื้อจาก Proix ที่ Velia 10M", en: "The [The Great Expedition] questline ending with First Sailboat into Oquilla's Eye (starts with Vigorous Velia from the Black Spirit at Lv 50), or buy from Proix in Velia for 10M" },
          { th: "ลูกเรือ 3M จาก Falasi (Port Epheria)", en: "Sailors cost 3M from Falasi (Port Epheria)" },
        ],
        refs: [{ quest: "3706/12" }, { item: 49028 }],
      },
      {
        title: { th: "Caravel และ Carrack", en: "Caravel and Carrack" },
        icon: { item: 49023 },
        items: [
          { th: "Caravel: ใบอนุญาตจาก Falasi + เกียร์เขียว 4 ชิ้น +10 + วัสดุจากเควสรายวัน", en: "Caravel: permit from Falasi + four +10 green parts + daily-quest materials" },
          { th: "Carrack: ชิ้นส่วน Caravel น้ำเงิน 4 ชิ้น +10 + วัสดุจาก Barter", en: "Carrack: four +10 blue Caravel parts + barter materials" },
          { th: "ตีเกียร์เรือด้วย Tidal Black Stone", en: "Enhance ship gear with Tidal Black Stones" },
        ],
        refs: [{ item: 756001 }, { item: 10 }],
      },
      {
        title: { th: "Barter", en: "Bartering" },
        icon: { item: 10 },
        items: [
          { th: "ของ Barter 7 ระดับ ระดับ 3 ขึ้นไปขายเป็น Silver ได้ บางชิ้นแลก Crow Coin", en: "7 barter tiers; tier 3+ sell for silver, some trade for Crow Coins" },
          { th: "เรือจมหรือเก็บเรือระยะไกล ของ Barter หายหมด", en: "Barter goods are lost if the ship sinks or is stored remotely" },
          { th: "ตั้งแต่ 23 ก.ย. 2026 ใช้ร้าน ซ่อม/เติมเสบียง จัดลูกเรือ และ Load Cargo จากบนเรือใหญ่ได้", en: "Since 23 Sep 2026, use shops, Repair & Supply, Manage Sailors and Load Cargo from a big ship" },
        ],
        refs: [{ item: 10 }],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
export const FREE: FreeTile[] = [
  {
    title: { th: "เกียร์ฟรีทั้งชุด", en: "A full free gear set" },
    body: { th: "Season Tuvala, Olvia Academy และ HYPERBOOST: Sovereign / Slumbering Origin / PEN Kharazad (ครอบครัวละครั้ง)", en: "Season Tuvala, Olvia Academy and HYPERBOOST: Sovereign / Slumbering Origin / PEN Kharazad (once per family)" },
    icon: { item: 747206 },
    refs: [{ item: 747206 }, { item: 12140 }],
    style: "kram",
  },
  {
    title: { th: "เต็นท์แคมป์ฟรี", en: "Free campsite" },
    body: { th: "Lv 50+ รับเควส [ADV Support] Start of Camping จาก Black Spirit ไปหา Klau ที่ Velia ได้ Camping Tool, เต็นท์, ทั่ง, ร้านค้า", en: "At Lv 50+, the Black Spirit's [ADV Support] Start of Camping sends you to Klau in Velia for the Camping Tool, tent, anvil and shop" },
    icon: { item: 49013 },
    refs: [{ quest: "3530/282" }],
    style: "accent",
  },
  {
    title: { th: "พ่อบ้าน เมด สัตว์เลี้ยง แฟรี่", en: "Butler, maid, pets, fairy" },
    body: { th: "จากเควส Black Spirit และเควสสัตว์เลี้ยงของแต่ละภูมิภาค", en: "From Black Spirit quests and each region's pet quests" },
    icon: { item: 54031 },
    refs: [{ quest: "699/21" }, { quest: "6802/1" }],
    style: "pattern",
  },
  {
    title: { th: "ม้าในฝันฟรี", en: "Free dream horse" },
    body: { th: "Vipiko's Dreaming Horse จาก Challenge (Y)", en: "Vipiko's Dreaming Horse from Challenges (Y)" },
    icon: { item: 65298 },
    refs: [{ item: 65298 }],
  },
  {
    title: { th: "Value Pack 1 วัน", en: "1-day Value Pack" },
    body: { th: "แลกจากร้าน Loyalty ได้ทุกสัปดาห์", en: "From the Loyalty shop every week" },
    icon: { item: 47031 },
    refs: [{ item: 47031 }],
  },
];

/* ------------------------------------------------------------------ */
export const TIPS: Tip[] = [
  {
    q: { th: "ขายขยะให้ NPC อย่าเอาไปลงตลาด", en: "Sell junk to NPCs, not the market" },
    a: { th: "ขาย NPC ไม่เสียภาษี 35% ราคาขาย NPC ของขยะแต่ละจุดดูได้ในแท็บจุดฟาร์ม (ข้อมูล BDOCodex)", en: "NPC sales skip the 35% tax. Each spot's junk NPC price is in the Grind spots tab (BDOCodex data)." },
    icon: { item: 44322 },
  },
  {
    q: { th: "คนงานไม่ทำงานตอนออฟไลน์", en: "Workers do not work offline" },
    a: { th: "อยากให้คนงานทำงานยาว ๆ ต้องเปิดเกมค้างไว้ (AFK ได้) ล็อกเอาท์แล้วจะหยุดหลังจบงานรอบนั้น ตกปลา AFK แปรรูป และพืชในฟาร์มก็เหมือนกัน", en: "To keep workers busy, leave the game running (AFK). After logout they stop once the current job ends. AFK fishing, processing and crops work the same way." },
    icon: { item: 64687 },
  },
  {
    q: { th: "Ancient Black Stone ขาย NPC ไม่ได้แล้ว", en: "Ancient Black Stones no longer sell to NPCs" },
    a: { th: "ตั้งแต่ 6 ส.ค. 2026 ให้เก็บไว้ตีบวก หรือเผาเป็น Cron", en: "Since 6 Aug 2026, keep them for enhancing or heat them into Cron Stones." },
    icon: { item: 16001 },
  },
  {
    q: { th: "เกียร์ Life ใส่ครั้งเดียวใช้ทั้งครอบครัว", en: "Life gear is family-wide" },
    a: { th: "ตั้งแต่ 3 ก.ย. 2026 เครื่องประดับ หินแปรธาตุ และ Evergreen Orb มีผลทุกสายทุกตัว แต่ไม่มี DP และไม่เพิ่มน้ำหนักบรรทุกแล้ว", en: "Since 3 Sep 2026, accessories, alchemy stone and Evergreen Orb apply to every skill and character, but no longer give DP or weight limit." },
    icon: { item: 933601 },
  },
  {
    q: { th: "รอแลก Imperial Delivery หลัง 3 ธ.ค.", en: "Wait to spend Imperial seals until 3 Dec" },
    a: { th: "Golden Seal จะเปลี่ยนเป็น Imperial Reward Seal และของหลายอย่างถูกลงมาก (ยังไม่ประกาศอัตราแลก)", en: "Golden Seals become Imperial Reward Seals and many rewards get much cheaper (rate not announced yet)." },
    icon: { item: 4 },
  },
  {
    q: { th: "เวลารีเซ็ตเซิร์ฟ Asia", en: "Asia server reset times" },
    a: { th: "ประกาศ Asia ใช้เวลา UTC+8 รีเซ็ตรายวันน่าจะเป็น 23:00 เวลาไทย และรายสัปดาห์คืนวันพุธ 23:00 (ยังไม่มีประกาศยืนยันตรง ๆ)", en: "Asia notices use UTC+8, so the daily reset is likely 23:00 Thai time and the weekly reset Wednesday 23:00 Thai time (not stated outright in any notice)." },
    icon: { item: 405 },
  },
];

/* ------------------------------------------------------------------ */
export const PATCHES: { date: L; title: L; board: number; points: L[] }[] = [
  {
    date: { th: "12 พ.ย. 2026", en: "12 Nov 2026" },
    title: { th: "Olvia Academy Class 4", en: "Olvia Academy Class 4" },
    board: 20041,
    points: [
      { th: "Class 4 เปิดถึง 25 ก.พ. 2027", en: "Class 4 runs until 25 Feb 2027" },
      { th: "ชุดเกียร์บอสดรอปจาก World/Field Boss", en: "Boss gear outfits drop from world and field bosses" },
      { th: "บอสรายสัปดาห์ Outer Edania เลือดลด 10-15%", en: "Outer Edania weekly bosses lose about 10-15% HP" },
    ],
  },
  {
    date: { th: "5 พ.ย. 2026", en: "5 Nov 2026" },
    title: { th: "สลับตัวละครทันที", en: "Instant character switching" },
    board: 20010,
    points: [
      { th: "สลับไปตัวที่ Tag ไว้ (Lv 20+) ได้ทันที", en: "Switch instantly to tagged Lv 20+ characters" },
      { th: "Golden Seal เปลี่ยนเป็น Imperial Reward Seal วันที่ 3 ธ.ค.", en: "Golden Seals become Imperial Reward Seals on 3 Dec" },
    ],
  },
  {
    date: { th: "29 ต.ค. 2026", en: "29 Oct 2026" },
    title: { th: "DirectX 12 และ FSR 3.1", en: "DirectX 12 and FSR 3.1" },
    board: 19985,
    points: [
      { th: "Rawr-Rawr เป็น World Boss รายวัน 16:00 เวลาไทย (17:00 เวลาเซิร์ฟ)", en: "Rawr-Rawr becomes a daily world boss at 16:00 Thai time (17:00 server time)" },
      { th: "ลบเควสหลัก Calpheon เก่า", en: "Old Calpheon main quests removed" },
    ],
  },
  {
    date: { th: "8 ต.ค. 2026", en: "8 Oct 2026" },
    title: { th: "ปรับเลเวลและ EXP", en: "Level and EXP revamp" },
    board: 19899,
    points: [
      { th: "เลเวลสูงสุด 75 เควสหลักพาไป Lv 56", en: "Level cap 75; main quests reach Lv 56" },
      { th: "บัฟ EXP เต็นท์ 100% ชุด Pearl 50%", en: "Campsite EXP buff 100%, Pearl outfit set 50%" },
    ],
  },
  {
    date: { th: "23 ก.ย. 2026", en: "23 Sep 2026" },
    title: { th: "ปรับเรือและ Barter", en: "Ship and barter QoL" },
    board: 19844,
    points: [{ th: "ใช้บริการท่าเรือจากบนเรือใหญ่ได้", en: "Wharf services usable from big ships" }],
  },
  {
    date: { th: "3 ก.ย. 2026", en: "3 Sep 2026" },
    title: { th: "รวมเกียร์ Life Skill", en: "Life skill gear integration" },
    board: 19773,
    points: [
      { th: "เกียร์ Life เป็นของครอบครัว", en: "Life gear becomes family-wide" },
      { th: "Evergreen Orb Life EXP สูงสุด +90%", en: "Evergreen Orb gives up to +90% life EXP" },
    ],
  },
  {
    date: { th: "20 ส.ค. 2026", en: "20 Aug 2026" },
    title: { th: "ถอด Progression Pass", en: "Progression Pass removed" },
    board: 19716,
    points: [{ th: "แทนที่ด้วยหน้าแนะนำ HYPERBOOST", en: "Replaced by the HYPERBOOST guide" }],
  },
  {
    date: { th: "6 ส.ค. 2026", en: "6 Aug 2026" },
    title: { th: "Guild Fame", en: "Guild Fame" },
    board: 19666,
    points: [{ th: "Ancient Black Stone (PEN/HEX/SEP) และ Ancient Hammer ขาย NPC ไม่ได้แล้ว เผาเป็น Cron Stone แทน", en: "Ancient Black Stones (PEN/HEX/SEP) and Ancient Hammers can no longer be sold to NPCs; heat them into Cron Stones" }],
  },
  {
    date: { th: "30 ก.ค. 2026", en: "30 Jul 2026" },
    title: { th: "HYPERBOOST + Agent", en: "HYPERBOOST + Agent" },
    board: 19633,
    points: [
      { th: "เส้นทางเกียร์ฟรีหลัง Graduate", en: "Free gear path after graduation" },
      { th: "Tuvala เท่ากับ PEN Boss gear", en: "Tuvala equals PEN boss gear" },
    ],
  },
];

export const WATCH: L[] = [
  { th: "3 ธ.ค. 2026: Imperial Reward Seal", en: "3 Dec 2026: Imperial Reward Seals" },
  { th: "3 ธ.ค. 2026: Pearl's Blessings for Black Friday หมด", en: "3 Dec 2026: Pearl's Blessings for Black Friday ends" },
  { th: "10 ธ.ค. 2026: Combat Special Pass หมด", en: "10 Dec 2026: Combat Special Pass ends" },
  { th: "25 ก.พ. 2027: Olvia Academy Class 4 ปิด", en: "25 Feb 2027: Olvia Academy Class 4 closes" },
];

/** BDOCodex sections worth bookmarking as a new player (path after /th/ or /seaen/). */
export const CODEX_LINKS: { path: string; label: L; why: L; icon: Ref }[] = [
  { path: "quests/", label: { th: "เควส", en: "Quests" }, why: { th: "ค้นชื่อเควส ดูเงื่อนไขและของรางวัลเป็นภาษาไทย", en: "Search quests, conditions and rewards" }, icon: { item: 40653 } },
  { path: "knowledge/", label: { th: "Knowledge", en: "Knowledge" }, why: { th: "เก็บ Knowledge เพื่อเพิ่ม Energy สูงสุด", en: "Collect knowledge to raise max Energy" }, icon: { item: 17501 } },
  { path: "adventurelogs/", label: { th: "Adventure Log", en: "Adventure logs" }, why: { th: "Igor Bartali ให้ราว +6 AP / +6 DP ทั้งครอบครัว", en: "Igor Bartali gives about +6 AP / +6 DP family-wide" }, icon: { item: 40653 } },
  { path: "nodes/", label: { th: "Node", en: "Nodes" }, why: { th: "ดู Node, CP ที่ต้องใช้ และของที่คนงานเก็บได้", en: "Nodes, CP cost and worker materials" }, icon: { item: 405 } },
  { path: "houses/", label: { th: "บ้าน", en: "Houses" }, why: { th: "เลือกบ้านทำที่พักคนงาน / โกดัง / โรงงาน", en: "Pick houses for lodging, storage, workshops" }, icon: { item: 64687 } },
  { path: "cptable/", label: { th: "ตาราง CP", en: "CP table" }, why: { th: "Contribution EXP ที่ต้องใช้ต่อแต้ม", en: "Contribution EXP needed per point" }, icon: { item: 405 } },
  { path: "gatheringmastery/", label: { th: "Mastery เก็บของ", en: "Gathering mastery" }, why: { th: "ดูผลของ Mastery ทุกระดับ (มีของสายอื่นด้วย)", en: "Mastery effects per tier (other skills too)" }, icon: { item: 16113 } },
  { path: "recipes/culinary/", label: { th: "สูตรอาหาร", en: "Cooking recipes" }, why: { th: "สูตรทำอาหาร รวมเบียร์ให้คนงาน", en: "Cooking recipes, including worker beer" }, icon: { item: 9213 } },
  { path: "ships/", label: { th: "เรือ", en: "Ships" }, why: { th: "ค่าสถานะเรือแต่ละลำ", en: "Stats for every ship" }, icon: { item: 49021 } },
  { path: "shipsupgrade/", label: { th: "อัปเกรดเรือ", en: "Ship upgrades" }, why: { th: "วัตถุดิบอัปเกรดเรือทุกขั้น", en: "Materials for every ship upgrade" }, icon: { item: 49023 } },
  { path: "barter/", label: { th: "Barter", en: "Barter" }, why: { th: "รายการแลกเปลี่ยน Barter", en: "Barter exchange list" }, icon: { item: 10 } },
  { path: "bosstimer/", label: { th: "ตารางบอส", en: "Boss timer" }, why: { th: "เวลาเกิด World Boss", en: "World boss spawn times" }, icon: { item: 44362 } },
];

export const patchUrl = (n: number) =>
  `https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice/Detail?_boardNo=${n}`;
