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
export type RoadmapTrack = "f2p" | "spender_essential" | "spender_whale";

export interface RoadmapTrackMeta {
  id: RoadmapTrack;
  category: "f2p" | "spender";
  title: L;
  badge: L;
  budget: L;
  budgetSub: L;
  desc: L;
  icon: Ref;
  highlights: L[];
  phases: Phase[];
}

export const ROADMAP_F2P: Phase[] = [
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

export const ROADMAP_SPENDER_ESSENTIAL: Phase[] = [
  {
    title: { th: "วางแผนงบและไอดี", en: "Budget & account setup" },
    when: { th: "วันที่ 0", en: "Day 0" },
    goal: { th: "วางงบซื้อของจำเป็นถาวร รอจังหวะโปร 1+1 / คูปอง F3", en: "Budget for permanent essentials; wait for 1+1 deals or F3 coupons" },
    icon: { item: 47031 },
    steps: [
      { th: "ซื้อ Traveler หรือ Explorer Edition-ASIA (ได้ Game Pass + Value Pack + Pearl ตั้งต้น)", en: "Buy Traveler or Explorer Edition-ASIA (Game Pass + Value Pack + starter Pearls)" },
      { th: "เปิดหน้าต่างร้านค้า F3 เช็คคูปองส่วนลด 20-50% ประจำเดือน", en: "Check F3 Pearl Shop for monthly 20-50% discount coupons" },
      { th: "วางแผน 4 เสาหลัก: เต็นท์แคช, Black Spirit Pass, สัตว์เลี้ยง Tier 5, ตั๋วรีสกิลนางฟ้า", en: "Target the 4 pillars: Cash Tent, Black Spirit Pass, Tier 5 Pet, Fairy reroll orbs" },
    ],
    details: [
      { th: "อย่าซื้อเต็นท์แคชในราคาเต็ม! รอจังหวะมีคูปองลด 20-30% ใน F3 หรือเทศกาลลดใหญ่", en: "Never buy the cash tent at full price; use a 20-30% F3 coupon or seasonal sale" },
      { th: "ซื้อ Pearl ทางการเซิร์ฟ Asia จะได้รับ Pearl's Blessings เพิ่มเมื่อใช้ Pearl ถึงเกณฑ์", en: "Buying official Asia pearls earns extra Pearl's Blessings tiers" },
    ],
    refs: [{ item: 47031 }, { item: 49001 }],
  },
  {
    title: { th: "Season + Black Spirit Pass", en: "Season + Black Spirit Pass" },
    when: { th: "วันที่ 1-7", en: "Days 1-7" },
    goal: { th: "รับของรางวัล Season Pass สองเท่าและสะสม Cron ก้อนโต", en: "Double Season Pass rewards and build an early Cron Stone stockpile" },
    icon: { item: 695116 },
    steps: [
      { th: "สร้าง Season Character และปลดล็อค Black Spirit Pass พรีเมียมในหน้า Season Pass", en: "Create a Season character and unlock the premium Black Spirit Pass" },
      { th: "เก็บเลเวลตามเควสหลักจนถึง Lv 60 พร้อมทำเงื่อนไข Season Pass ครบทุกช่อง", en: "Follow the main quest to Lv 60 while clearing all Season Pass goals" },
      { th: "รับของรางวัลทั้งแถวฟรีและแถวพรีเมียม: Cron Stone, Advice of Valks, กล่องคอสตูม", en: "Collect both free & premium rows: Cron Stones, Advice of Valks, costume boxes" },
    ],
    details: [
      { th: "Black Spirit Pass ถือเป็นไอเทมที่คุ้มค่า Silver/THB ที่สุดในเกมสำหรับไอดีใหม่", en: "Black Spirit Pass offers the single highest Silver/THB value in the game for newcomers" },
      { th: "นำ Advice of Valks ที่ได้ไปตีเกียร์ Tuvala PEN ครบเซ็ตเพื่อเตรียม Graduate", en: "Use bonus Advice of Valks to easily reach full PEN Tuvala gear for graduation" },
    ],
    refs: [{ item: 695116 }, { item: 16001 }],
  },
  {
    title: { th: "สัตว์เลี้ยง Tier 5 & นางฟ้าสกิลเทพ", en: "Tier 5 Pet & Godly Fairy" },
    when: { th: "สัปดาห์ที่ 2", en: "Week 2" },
    goal: { th: "ปั้นฝูงเก็บของไวสุดและนางฟ้าปั๊มยาอัตโนมัติ", en: "Max looting speed with Alpha Pet & automatic potion fairy" },
    icon: { item: 17658 },
    steps: [
      { th: "ทำเควสฝึกฝนสัตว์เลี้ยงตั้ง Alpha Pet Tier 5 หนึ่งตัว (เก็บของเร็วขึ้น 15% สั่งคุมฝูง)", en: "Complete pet training quest for a Tier 5 Alpha Pet (+15% loot speed, pack lead)" },
      { th: "ผสมสัตว์เลี้ยงตัวอื่นในฝูงให้ได้ Tier 3-4 ครบ 5 ตัวเพื่อไม่ให้พลาดขยะตอนฟาร์ม", en: "Breed other pets to Tier 3-4 to fill all 5 slots without missing loot" },
      { th: "เปิดได้ Radiant Fairy เกรด 4 แล้วใช้ Theiah's Orb รีหาสกิล Miraculous Cheer V + Feathery Steps V", en: "Get a Radiant Fairy (Tier 4) and use Theiah's Orbs for Miraculous Cheer V & Feathery Steps V" },
    ],
    details: [
      { th: "Miraculous Cheer V ปั๊มยา HP/MP ทุก 2 วินาทีอัตโนมัติ ช่วยให้รอดตายในจุดฟาร์มยากๆ", en: "Miraculous Cheer V autosips potions every 2s, saving you in high-damage spots" },
      { th: "Feathery Steps V วิ่งความเร็วปกติได้แม้แบกน้ำหนักเกินถึง 125%", en: "Feathery Steps V lets you run at full speed even at 125% heavy weight" },
      { th: "รีสกิลตอนนางฟ้าเลเวลต่ำ (Lv 10-20) ใช้ Theiah's Orb น้อยกว่าตอนเลเวล 50", en: "Reroll skills at low fairy levels (10-20) to save significant Theiah's Orbs" },
    ],
    refs: [{ item: 17658 }, { item: 49001 }],
  },
  {
    title: { th: "เต็นท์แคช Naphart Campsite", en: "Naphart Campsite Cash Tent" },
    when: { th: "สัปดาห์ที่ 2-3", en: "Weeks 2-3" },
    goal: { th: "ของชิ้นสำคัญที่สุด: ซ่อมไม่ลดความทนทาน + ซื้อ Villa Buff ได้ทุกที่", en: "The #1 must-have: repair without dura loss + Villa buff anywhere" },
    icon: { item: 49013 },
    steps: [
      { th: "ซื้อ Naphart Campsite จากร้าน F3 (ใช้คูปองลดราคา)", en: "Purchase Naphart Campsite in F3 (with a discount coupon)" },
      { th: "ติดตั้งเต็นท์แคช แล้วเปิดใช้บัฟ Villa Scroll (Monster AP +10, DP +10, EXP +10%)", en: "Pitch campsite and trigger Villa buff (Monster AP +10, DP +10, EXP +10%) directly" },
      { th: "ซ่อมอาวุธและเกราะได้ทันทีกลางจุดฟาร์มโดยไม่ลด Max Durability", en: "Repair gear on the spot without losing maximum durability" },
    ],
    details: [
      { th: "เต็นท์แคชเป็นของถาวรใช้ได้ทุกตัวละครในครอบครัว คุ้มค่าที่สุดในระยะยาว", en: "The cash campsite is family-wide permanent and offers unmatched long-term value" },
      { th: "ไม่ต้องวิ่งไปวิลล่าในบาเลนเซีย และไม่ต้องซื้อใบซ่อมชั่วคราวเหมือนเต็นท์ฟรี", en: "No need to visit Valencia villas or buy temporary anvil scrolls like the free tent" },
    ],
    refs: [{ item: 49013 }, { item: 49021 }],
  },
  {
    title: { th: "เสริมทัพเมด & คลังเก็บของ", en: "Maids & Storage Expansion" },
    when: { th: "สัปดาห์ที่ 3-5", en: "Weeks 3-5" },
    goal: { th: "ฟาร์มต่อเนื่องหลายชั่วโมงโดยไม่ต้องกลับเมือง", en: "Grind uninterrupted for hours without returning to town" },
    icon: { item: 699 },
    steps: [
      { th: "ซื้อ Maid Bundle (Storage & Transaction) ช่วงโปรลด 50% หรือ 2+2", en: "Pick up Maid Bundles during 50% off or 2+2 promotion periods" },
      { th: "ตั้งเป้ามี Storage Maid 6-8 ตัว และ Transaction Maid 3-4 ตัว (รวมกับเควสฟรี)", en: "Aim for 6-8 Storage Maids and 3-4 Transaction Maids (including free quest maids)" },
      { th: "ส่งขยะและไอเทมดรอปหนักๆ เข้าคลังเมืองหลวงผ่านเมดได้ทุก 20 นาที", en: "Transfer heavy junk and rare drops to city storage every 20 minutes" },
    ],
    details: [
      { th: "Transaction Maid ใช้ดึงน้ำยา คัมภีร์ หรือวัตถุดิบเร่งด่วนจากตลาดกลางได้ทันที", en: "Transaction Maids pull emergency potions, scrolls, or mats straight from market" },
      { th: "ซื้อช่องเก็บของหรือน้ำหนักเฉพาะตัวหลัก (Main Character) ที่เล่นยาวจริง ๆ", en: "Buy inventory slots & weight only on your true main character" },
    ],
    refs: [{ item: 64687 }],
  },
  {
    title: { th: "บริหาร Value Pack & แพ็คเสริม", en: "Value Pack & Buff Management" },
    when: { th: "เดือนที่ 1-2", en: "Months 1-2" },
    goal: { th: "รับภาษีตลาด 84.5% และโบนัสดรอปเรทอย่างคุ้มค่า", en: "Collect 84.5% market payout and optimize drop rate bonuses" },
    icon: { item: 49011 },
    steps: [
      { th: "เปิด Value Pack 30 วันในช่วงที่มีของสะสมขายในตลาดเป็นล็อตใหญ่", en: "Activate 30-day Value Pack when offloading bulk market sales" },
      { th: "เปิด Blessing of Kamasylve (+20% Drop Rate) ในช่วงมีเทศกาลฟาร์มหรือ Drop Event", en: "Use Blessing of Kamasylve (+20% Drop Rate) during grind festivals" },
      { th: "ใช้ Secret Book of Old Moon สลับ Skill Add-on และทดลอง build ตัวละครได้อิสระ", en: "Use Secret Book of Old Moon to freely test class builds & Skill Add-ons" },
    ],
    details: [
      { th: "หากไม่ได้ฟาร์มขายของหนัก ให้ดองของไว้แล้วใช้ Value Pack 1 วันจาก Loyalty ขายรวม", en: "During quiet weeks, hoard items and sell with a 1-day Loyalty Value Pack" },
    ],
    refs: [{ item: 49011 }, { item: 49028 }, { item: 49021 }],
  },
  {
    title: { th: "ก้าวสู่ End-Game สบายๆ", en: "Comfortable End-Game Transition" },
    when: { th: "เดือนที่ 2 เป็นต้นไป", en: "Month 2 onward" },
    goal: { th: "เข้าถึงจุดฟาร์ม 310+ AP / 400+ DP ไวกว่าสายฟรี 2 เท่า", en: "Reach 310+ AP / 400+ DP spots twice as fast as pure F2P" },
    icon: { item: 790873 },
    steps: [
      { th: "ฟาร์มโซน High-Tier (Elvia, Dehkia, Yzrahid) ด้วยความมั่นใจจากบัฟเต็นท์แคชและนางฟ้า V", en: "Farm High-Tier zones (Elvia, Dehkia, Yzrahid) with tent villa buffs & auto-heal" },
      { th: "นำ Cron Stone ที่ได้จาก Season Pass และอีเวนต์มาเคาะ Sovereign Weapon & Slumbering Origin", en: "Use stockpiled Cron Stones from passes/events to upgrade Sovereign & Slumbering gear" },
      { th: "สะสม Silver ซื้อเครื่องประดับ PEN และหัวใจกามอสจากตลาดกลาง", en: "Accumulate silver efficiently to buyout PEN accessories & Garmoth's Heart" },
    ],
    details: [
      { th: "ด้วยระบบที่ครบถ้วน คุณจะเสียเวลากับการจัดการตัวละครน้อยลง และฟาร์มเงินได้มากกว่า", en: "With full convenience unlocked, you spend less time managing inventory and more time earning" },
    ],
    refs: [{ item: 790873 }, { item: 742269 }, { item: 12140 }],
  },
];

export const ROADMAP_SPENDER_WHALE: Phase[] = [
  {
    title: { th: "สถาปนาไอดีระดับ Conqueror", en: "Conqueror Account Foundation" },
    when: { th: "วันที่ 0", en: "Day 0" },
    goal: { th: "ปลดล็อครากฐานพรีเมียมสูงสุดตั้งแต่วินาทีแรก", en: "Unlock maximum premium foundation from minute one" },
    icon: { item: 47031 },
    steps: [
      { th: "ซื้อ Conqueror Edition-ASIA (Game Pass + 900 Pearl + Value Pack + สัตว์เลี้ยงพรีเมียม)", en: "Buy Conqueror Edition-ASIA (Game Pass + 900 Pearls + Value Pack + premium pet)" },
      { th: "ซื้อ Naphart Campsite ทันที", en: "Purchase Naphart Campsite immediately" },
      { th: "ปลดล็อคช่องคลังเก็บของ (Storage) และที่พักคนงาน (Worker Lodging) ทุกเมืองด้วย Pearl", en: "Max city storage and worker lodging across all regions using Pearls" },
    ],
    details: [
      { th: "การขยายคลังและที่พักคนงานด้วย Pearl ช่วยประหยัด Contribution Points (CP) มหาศาล เอา CP ไปต่อโหนดระดับสูงได้ 100%", en: "Maxing storage & lodging with Pearls saves hundreds of CP, freeing 100% of CP for high-income nodes" },
      { th: "รับ Pearl's Blessings ขั้นสูงสุด พร้อมกล่องไอเทมเสริมพลังมหาศาล", en: "Reach highest Pearl's Blessings tier for massive bonus item boxes" },
    ],
    refs: [{ item: 47031 }, { item: 49013 }, { item: 49001 }],
  },
  {
    title: { th: "Fast-Track Season ใน 24 ชั่วโมง", en: "24-Hour Season Fast-Track" },
    when: { th: "วันที่ 1-3", en: "Days 1-3" },
    goal: { th: "จบ Season ทันทีและดันเลเวล 61-62 ภายในวันเดียว", en: "Graduate Season instantly and push Lv 61-62 in a single day" },
    icon: { item: 695116 },
    steps: [
      { th: "ซื้อ Black Spirit Pass พรีเมียม แล้วกดบัฟ Combat EXP 530% + Blessed Message Scroll", en: "Buy Black Spirit Pass and stack 530% Combat EXP + Blessed Message Scrolls" },
      { th: "ดันเลเวล 1 ถึง 61 ในเวลาไม่กี่ชั่วโมง เคลียร์ Season Pass ทุกภารกิจ", en: "Power-level 1 to 61 in hours; clear all Season Pass milestones" },
      { th: "เคาะ Tuvala PEN ทุกชิ้นรวดเดียวแล้ว Graduate เพื่อรับเกียร์ HYPERBOOST", en: "Instantly enhance full PEN Tuvala, graduate, and claim HYPERBOOST endgame starters" },
    ],
    details: [
      { th: "ข้ามข้อจำกัด Season สู่ตัวละครหลักทันทีเพื่อเริ่มใส่เกียร์จริง", en: "Bypass season constraints immediately to equip true boss & endgame gear" },
      { th: "ลงทะเบียน Olvia Academy Class 4 รับกล่องเกียร์บอสและ Cron 6,000 ก้อน", en: "Enrol in Olvia Academy Class 4 for boss armor and 6,000 Cron Stones" },
    ],
    refs: [{ item: 695116 }, { item: 747206 }, { item: 16001 }],
  },
  {
    title: { th: "ทัพสัตว์เลี้ยง & นางฟ้า 5 สกิลตัน", en: "Perfect Pets & 5-Skill Fairy" },
    when: { th: "วันที่ 3-7", en: "Days 3-7" },
    goal: { th: "ระบบช่วยเหลือตัวละครระดับ Max Tier ทุกฟังก์ชัน", en: "Max-tier pet squad and 5-skill perfect fairy setup" },
    icon: { item: 17658 },
    steps: [
      { th: "ซื้อสัตว์เลี้ยงพรีเมียมจากร้านค้ามาผสมขึ้น Tier 4 ครบ 5 ตัว และดันเป็น Tier 5 Alpha", en: "Breed 5x Tier 4 pets and upgrade one into a Tier 5 Alpha pack leader" },
      { th: "จัดฝูงเฉพาะทาง: จิ้งจอกอาร์กติก (ดรอปเรท), เม่น (เก็บของ x2), หมีขาว (น้ำหนัก)", en: "Assemble specialized sets: Arctic Fox (drop rate), Hedgehog (2x gather), Polar Bear (weight)" },
      { th: "ปั้น Radiant Fairy แล้วรีสกิลด้วย Theiah's Orb จนได้สกิล V ครบทั้ง 5 ช่อง", en: "Roll Radiant Fairy to 5x Tier V skills using Theiah's Orbs" },
    ],
    details: [
      { th: "Continuous Care V (ดูแลอย่างต่อเนื่อง) กินอาหาร ยา และคัมภีร์บัฟอัตโนมัติถึง 20 ชนิดพร้อมกัน", en: "Continuous Care V automatically consumes up to 20 food, draught, and scroll buffs simultaneously" },
      { th: "Feathery Steps V + Miraculous Cheer V ปั๊มยาและวิ่งได้แม้น้ำหนักเกินแบบ 100%", en: "Feathery Steps V + Miraculous Cheer V guarantee non-stop combat without weight or HP limits" },
    ],
    refs: [{ item: 17658 }, { item: 49001 }],
  },
  {
    title: { th: "หลอมชุดแฟชั่นเป็น Cron Stone", en: "Costume Melting for Crons" },
    when: { th: "สัปดาห์ที่ 2", en: "Week 2" },
    goal: { th: "ตุน Cron Stone ไม่จำกัดเพื่อเคาะ Sovereign & Slumbering Origin", en: "Unlimited Cron Stones via outfit extraction for Sovereign & Slumbering upgrades" },
    icon: { item: 16001 },
    steps: [
      { th: "ซื้อ Premium Outfit Set Bundle ในช่วงโปรโมชั่นลดราคาพิเศษใน F3", en: "Purchase discounted Premium Outfit Bundles in F3 sales" },
      { th: "นำชุดแฟชั่นไปให้ช่างตีเหล็กในเมืองหลวงสกัด (Extract) เป็น Cron Stone และ Valks' Cry", en: "Extract outfits at city blacksmiths for thousands of Cron Stones and Valks' Cry" },
      { th: "นำ Cron Stone ไปเคาะอาวุธ Sovereign ขึ้น TRI/TET/PEN และเกราะ Slumbering Origin ขึ้น Wailing", en: "Use Cron Stones to push Sovereign weapons to TRI/TET/PEN and Slumbering armor to Wailing" },
    ],
    details: [
      { th: "การหลอมชุดแฟชั่นให้ Cron Stone ในราคาต่อ Pearl ที่ประหยัดกว่าซื้อตรงจาก NPC หลายเท่า", en: "Outfit melting yields Cron Stones at a fraction of direct NPC silver costs" },
      { th: "ใช้ร่วมกับระบบ Ancient Anvil เพื่อการันตีสำเร็จ 100% เมื่อสะสม Agris Essence เต็ม", en: "Combines with Ancient Anvil to guarantee 100% success once Agris Essence maxes out" },
    ],
    refs: [{ item: 16001 }, { item: 790873 }, { item: 742269 }],
  },
  {
    title: { th: "ผัน Pearl เป็น Silver ในตลาดกลาง", en: "Pearl to Silver via Market" },
    when: { th: "สัปดาห์ที่ 3-4", en: "Weeks 3-4" },
    goal: { th: "ซื้อไอเทมจบเกม (PEN Accessories, Garmoth Heart) ตรงจากตลาด", en: "Buyout endgame items (PEN accessories, Garmoth's Heart) directly from market" },
    icon: { item: 12140 },
    steps: [
      { th: "ขายชุดแฟชั่นยอดนิยมลงตลาดกลาง Central Market รับ Silver ระดับหลายหมื่นล้าน (เปิด VP)", en: "Sell high-demand outfits on Central Market for tens of billions of Silver (with VP active)" },
      { th: "ตั้ง Pre-order ประมูลไอเทมดรอปยาก: หัวใจกามอส (Garmoth's Heart), Girin's Tear, PEN Deboreka", en: "Place pre-orders on rare endgame items: Garmoth's Heart, Girin's Tear, PEN Deboreka" },
      { th: "กว้านซื้อวัตถุดิบและคริสตัลท็อปเทียร์เพื่อดัน Gear Score ทะลุ 700-740+", en: "Buyout top-tier crystals and mats to catapult Gear Score beyond 700-740+" },
    ],
    details: [
      { th: "ชุดแฟชั่นในเซิร์ฟ Asia มีผู้เล่นรอรับซื้อในตลาดกลางตลอดเวลา ทำให้แปลงเป็น Silver ได้ทันที", en: "Asia server has perpetual Central Market demand for outfits, providing instant Silver liquidity" },
      { th: "ร่นเวลาการฟาร์มหาของแรร์ที่ต้องใช้เวลาหลายเดือนให้เหลือเพียงไม่กี่วัน", en: "Compress months of low-percentage drop grinding into a few days" },
    ],
    refs: [{ item: 12140 }, { item: 49011 }],
  },
  {
    title: { th: "กองทัพเมด 30-50 ตัว & ม้ามายาขั้น 10", en: "30-50 Maids & Mythical T10 Horse" },
    when: { th: "เดือนที่ 1", en: "Month 1" },
    goal: { th: "ความคล่องตัวระดับสูงสุดทั้งบนบกและผืนฟ้า", en: "Maximum mobility on land, across water, and through the sky" },
    icon: { item: 65298 },
    steps: [
      { th: "ซื้อ Storage Maid และ Transaction Maid รวม 30-50 ตัว ดูดของเข้าคลังได้ไม่จำกัด", en: "Acquire 30-50 Storage & Transaction Maids for virtually limitless remote hauling" },
      { th: "ทำม้ามายาขั้น 10 (Mythical Dream Horse): ซื้อ Mount Skill Change Coupon สุ่มสกิลม้า", en: "Breed a Tier 10 Mythical Horse: use Mount Skill Change coupons for all skills" },
      { th: "เลือกทำ Mythical Arduanatt (ม้ามีปีกบินข้ามเขา) หรือ Mythical Diné (ม้าวิ่งบนผิวน้ำ)", en: "Unlock Mythical Arduanatt (infinite glide over mountains) or Mythical Diné (sprint across oceans)" },
    ],
    details: [
      { th: "ม้ามายาขั้น 10 และกองทัพเมดตัดขั้นตอนการเดินทางและการจัดการช่องสัมภาระออกจากการเล่น 100%", en: "T10 mythical mounts and 40+ maids effectively eliminate travel bottlenecks and bag clutter entirely" },
    ],
    refs: [{ item: 65298 }, { item: 64687 }],
  },
  {
    title: { th: "ครอง End-Game Zone & PvP ระดับสูง", en: "Dominate End-Game & High PvP" },
    when: { th: "เดือนที่ 2 เป็นต้นไป", en: "Month 2 onward" },
    goal: { th: "พร้อมรบใน Inner Edania (428 AP / 520 DP) และกิลด์วอร์ชั้นนำ", en: "Dominate Inner Edania (428 AP / 520 DP) and top-tier guild siege wars" },
    icon: { item: 44322 },
    steps: [
      { th: "ลุยจุดฟาร์มสูงสุดของเกม: Inner Edania (Throne of Edana 428 AP / 520 DP), Dehkia Ash Forest", en: "Conquer peak zones: Inner Edania (Throne of Edana 428 AP / 520 DP), Dehkia Ash Forest" },
      { th: "โซโล่ Black Shrine Donghae Calamity ระดับสูงสุดด้วยเกียร์ Sovereign และบัฟครบสูบ", en: "Solo top-calamity Black Shrine Donghae bosses with Sovereign gear & full elixir rotation" },
      { th: "เข้าร่วมกิลด์ระดับแนวหน้าใน Node War, Siege War และ Arena of Solare จัดอันดับ", en: "Join top-ranked guilds for Node Wars, Castle Sieges, and ranked Arena of Solare" },
    ],
    details: [
      { th: "เปิดบัฟพรีเมียมครบวงจรตลอด 24 ชั่วโมง: Value Pack + Kamasylve + Old Moon + Villa Buff", en: "Run full 24/7 premium buffs: Value Pack + Kamasylve + Old Moon + Villa Buffs" },
    ],
    refs: [{ item: 44322 }, { item: 790873 }, { item: 742269 }],
  },
];

export const ROADMAPS: Record<RoadmapTrack, RoadmapTrackMeta> = {
  f2p: {
    id: "f2p",
    category: "f2p",
    title: { th: "สายฟรี (Pure F2P)", en: "Pure F2P Track" },
    badge: { th: "งบ 0 - 200 บาท", en: "0 - 200 THB Budget" },
    budget: { th: "200 บาท", en: "200 THB" },
    budgetSub: {
      th: "จ่ายค่าเกมครั้งเดียว ที่เหลืออาศัยระบบฟรีทั้งหมด",
      en: "One-time game pass; everything else from free systems",
    },
    desc: {
      th: "เส้นทางสำหรับผู้เล่นที่ไม่เติมเงินเพิ่ม อาศัย Season Server, HYPERBOOST, เควสฟรี, อีเวนต์ และ Loyalty Point",
      en: "Path for players spending zero extra: relies on Season Server, HYPERBOOST, free quests, events, and Loyalty",
    },
    icon: { item: 47031 },
    highlights: [
      { th: "เต็นท์ฟรีจาก Klau ที่ Velia (ซ่อมและกดบัฟ 100% EXP)", en: "Free campsite from Klau in Velia (repair & 100% EXP buff)" },
      { th: "ม้าในฝันฟรี (Vipiko's Dreaming Horse) กดรับที่ Challenge (Y)", en: "Free dream horse from Challenges (Y)" },
      { th: "เกียร์บอส PEN, Sovereign, Slumbering Origin ฟรีจาก HYPERBOOST", en: "Free PEN Boss, Sovereign, and Slumbering Origin gear from HYPERBOOST" },
      { th: "สะสม Loyalty Point แลก Value Pack 1 วันมาเปิดตอนขายของ", en: "Use weekly Loyalty for 1-day Value Pack on market days" },
    ],
    phases: ROADMAP_F2P,
  },
  spender_essential: {
    id: "spender_essential",
    category: "spender",
    title: { th: "สายเติมเพื่อของจำเป็น (Smart Spender)", en: "Smart Spender (Essential Items)" },
    badge: { th: "งบประหยัด คุ้มค่าสูงสุด", en: "High ROI / Best Value" },
    budget: { th: "1,500 - 3,500 บาท", en: "1,500 - 3,500 THB" },
    budgetSub: {
      th: "ซื้อเฉพาะของที่ประหยัดเวลาอย่างมหาศาลและอยู่ถาวร รอลดราคา 1+1",
      en: "Invest only in permanent, massive time-savers during 1+1 sales",
    },
    desc: {
      th: "เส้นทางสำหรับผู้เล่นที่ต้องการความสะดวกสบายสูงสุดโดยไม่สิ้นเปลือง ลงทุนเฉพาะ Must-Have Items เช่น เต็นท์แคช, Black Spirit Pass, นางฟ้าสกิลเทพ, และสัตว์เลี้ยง Tier 5",
      en: "For players seeking maximum comfort without overspending: invest only in essentials like Naphart Campsite, Black Spirit Pass, Fairy skills, and Tier 5 Pet",
    },
    icon: { item: 49013 },
    highlights: [
      { th: "เต็นท์แคช Naphart Campsite: ซื้อ Villa Buff ได้ทุกที่ + ซ่อมไม่ลด Max Dura", en: "Naphart Campsite: buy Villa Buff anywhere + repair without Max Dura loss" },
      { th: "Black Spirit Season Pass (พรีเมียม): คุ้มที่สุด ได้ Cron Stone และกล่องสุ่ม x2", en: "Black Spirit Pass: double rewards, huge Cron Stone injection" },
      { th: "รีสกิลนางฟ้าให้ได้ Miraculous Cheer V (ปั๊มยาออโต้ 2s) + Feathery Steps V", en: "Fairy with Miraculous Cheer V (auto potion) & Feathery Steps V (heavy running)" },
      { th: "สัตว์เลี้ยงจ่าฝูง Tier 5 + เมดคลัง/ตลาด 6-10 ตัว ฟาร์มต่อเนื่องไม่ต้องกลับเมือง", en: "Tier 5 Alpha Pet + 6-10 Maids for non-stop farming without town trips" },
    ],
    phases: ROADMAP_SPENDER_ESSENTIAL,
  },
  spender_whale: {
    id: "spender_whale",
    category: "spender",
    title: { th: "สายเติมเงินเยอะ (Whale)", en: "Whale Track (Heavy Spender)" },
    badge: { th: "ทางลัดสู่ End-Game ไวที่สุด", en: "Fast-Track to End-Game" },
    budget: { th: "หลักหมื่น - หลักแสนบาท", en: "High Budget (10k+ THB)" },
    budgetSub: {
      th: "ปลดล็อคทุกข้อจำกัดด้วย Cron Stone จากการหลอมชุดแฟชั่นและตลาดกลาง",
      en: "Break all limits with Cron Stones from outfit melting & Central Market buyout",
    },
    desc: {
      th: "เส้นทางสำหรับผู้เล่นที่เน้นเวลาเป็นสำคัญ ใช้พลังเงินจริงกว้านซื้อความสะดวกและความก้าวหน้าสูงสุด หลอมชุดแฟชั่นเป็น Cron Stone ดึงของ End-Game ในตลาด และทำม้ามายาขั้น 10",
      en: "For players prioritizing speed and power: melt outfits into Cron Stones, buyout End-Game gear on Central Market, unlock max maids, and breed Mythical horses",
    },
    icon: { item: 16001 },
    highlights: [
      { th: "หลอมชุดแฟชั่นเป็น Cron Stone (Melting Outfits) เคาะ Sovereign & Slumbering Origin จบไว", en: "Costume melting for endless Cron Stones to push Sovereign & Slumbering gear" },
      { th: "แปลง Pearl เป็น Silver มหาศาลผ่านตลาดกลาง กว้านซื้อ PEN Accessories และ Garmoth's Heart", en: "Sell premium outfits for massive Silver to buyout PEN accessories & boss hearts" },
      { th: "ขยายคลังทุกเมือง + ที่พักคนงาน Pearl เต็มแม็กซ์ ปล่อย CP ไปต่อโหนดระดับสูง 100%", en: "Max city storage & worker lodgings with Pearl; free 100% CP for high-tier nodes" },
      { th: "กองทัพเมด 30-50 ตัว + ม้ามายาขั้น 10 (Mythical Arduanatt / Diné / Doom)", en: "Army of 30-50 maids + Mythical T10 dream horses (flight / water running)" },
    ],
    phases: ROADMAP_SPENDER_WHALE,
  },
};

// Backwards compatibility
export const ROADMAP: Phase[] = ROADMAPS.f2p.phases;

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
