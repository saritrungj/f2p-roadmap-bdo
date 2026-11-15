// In-site game data pages (/data/<slug>). Facts come from official Pearl Abyss sources:
// the Adventurer's Guide wiki (NA/EU edition, plus the Asia wiki where noted) and official
// Asia notices, checked 14 Nov 2026. BDOCodex is linked only as "more raw data".
import type { Topic } from "./topics-types";

const W = (n: number) => `https://www.naeu.playblackdesert.com/en-US/Wiki?wikiNo=${n}`;
const ASIA = (n: number) => `https://blackdesert.pearlabyss.com/Asia/en-us/News/Notice/Detail?_boardNo=${n}`;

export const TOPICS: Topic[] = [
  /* 1 ------------------------------------------------------------ */
  {
    slug: "quests",
    icon: { item: 40653 },
    title: { th: "เควส", en: "Quests" },
    lead: { th: "เดินเควสหลักยังไง ติดตามเควสยังไง และเควสไหนที่มือใหม่ต้องทำ", en: "How to follow the main quest, track quests, and which quests new players need." },
    sections: [
      {
        kind: "steps",
        title: { th: "เส้นทางเควสหลักปี 2026", en: "The 2026 main quest path" },
        items: [
          { th: "สร้างตัวละครแล้วเลือกเริ่มที่ Ancient Stone Chamber (Wiki แนะนำสำหรับคนเล่นครั้งแรก เพราะได้เนื้อเรื่องเต็มและเลเวลเร็วกว่า)", en: "Start at the Ancient Stone Chamber (the wiki recommends it for first-time players: full story and faster progression)." },
          { th: "เควสแรกของเส้นเริ่มต้นพาไปถึง Lv 56 เช่น [Calpheon] Hero of Calpheon", en: "The first main quest of a starting path takes you to Lv 56, e.g. [Calpheon] Hero of Calpheon." },
          { th: "Lv 56 คุยกับ Black Spirit เพื่อเริ่ม Awakening แล้วต่อด้วย Succession (ต้องทำทั้งสองอย่างก่อนเลือกสไตล์)", en: "At Lv 56, talk to the Black Spirit to start Awakening, then Succession (both before choosing a combat style)." },
          { th: "เควสหลัก Mediah ที่เหลืออยู่ให้ EXP พอถึง Lv 60 ถ้าเริ่มที่ Lv 56", en: "The remaining Mediah main quest gives enough EXP to reach Lv 60 if started at Lv 56." },
          { th: "เริ่มคอร์สต่อสู้ของ Olvia Academy ที่ Lv 60 ได้ EXP พอถึง Lv 61", en: "Starting the Olvia Academy combat course at Lv 60 gives enough EXP for Lv 61." },
          { th: "ต่อเนื้อเรื่องไป Valencia, Kamasylvia, Drieghan, O'dyllita และ Mountain of Eternal Winter", en: "Continue the story into Valencia, Kamasylvia, Drieghan, O'dyllita and the Mountain of Eternal Winter." },
        ],
      },
      {
        kind: "table",
        title: { th: "เควสหลักเก่าที่ถูกลบในปี 2026", en: "Old main quests removed in 2026" },
        head: [{ th: "ภูมิภาค", en: "Region" }, { th: "วันที่", en: "Date" }, { th: "เส้นที่เหลืออยู่", en: "Remaining questline" }],
        rows: [
          ["Serendia", "15 Oct 2026", "[Serendia] Golden Lion of Serendia"],
          ["Calpheon", "29 Oct 2026", "[Calpheon] Hero of Calpheon"],
          ["Mediah", "5 Nov 2026", "[Mediah] The Dark Energy Threatening Mediah"],
          ["Kamasylvia", "12 Nov 2026", "[Kamasylvia] The Light of Kamasylve"],
        ],
        note: { th: "ตัวละครที่ทำค้างไว้ เริ่มเส้นที่เหลือได้ตั้งแต่เควสแรก ไม่ว่าทำเส้นเก่าไปถึงไหน", en: "Characters part-way through an old line can start the remaining line from its first quest, whatever their old progress." },
      },
      {
        kind: "list",
        title: { th: "หน้าต่างเควส (O) ใช้ยังไง", en: "Using the quest window (O)" },
        items: [
          { th: "แท็บ: Ongoing, Main, Suggested (ปลดระบบและสอนการเล่น), Recurring (เควสรายวัน/รายสัปดาห์), New", en: "Tabs: Ongoing, Main, Suggested (feature unlocks and tutorials), Recurring (dailies/weeklies), New." },
          { th: "คลิกขวาที่ชื่อเควสแล้วกด T ให้ตัวละครวิ่งไปเอง", en: "Right-click a quest title, then press T to auto-run." },
          { th: "ตัวกรองประเภทเควสปลดที่ Lv 20 เควสหลักปิดไม่ได้ มือใหม่ควรเปิดไว้ทุกประเภท", en: "Quest-type filters unlock at Lv 20; Main Story cannot be disabled. New players should keep every type on." },
          { th: "ต้องทำเควส Black Spirit ถึงจะขึ้น Lv 50 ได้ แม้ EXP จะเต็ม", en: "You must complete a Black Spirit quest to reach Lv 50, even with full EXP." },
          { th: "เควสรายวันรีเซ็ตเที่ยงคืน รายสัปดาห์รีเซ็ตวันพฤหัส (ตามเวลาเซิร์ฟเวอร์)", en: "Dailies reset at midnight and weeklies on Thursday (server time)." },
        ],
      },
    ],
    refs: [{ quest: "21139/96" }, { quest: "699/21" }, { quest: "699/19" }, { quest: "683/4" }, { quest: "7542/1" }],
    sources: [
      { label: "Adventurer's Guide: Quests", url: W(15), date: "2025-07-29" },
      { label: "Adventurer's Guide: Black Spirit", url: W(18), date: "2026-04-15" },
      { label: "Adventurer's Guide: Beginner Guide", url: W(259), date: "2026-08-18" },
      { label: "Asia notice: Level & EXP revamp", url: ASIA(19899), date: "2026-10-08" },
      { label: "Asia notice: Nov 12 update", url: ASIA(20041), date: "2026-11-12" },
    ],
    codexPath: "quests/",
  },
  /* 2 ------------------------------------------------------------ */
  {
    slug: "knowledge",
    icon: { item: 17501 },
    title: { th: "Knowledge และ Amity", en: "Knowledge and Amity" },
    lead: { th: "เก็บ Knowledge เพื่อเพิ่ม Energy สูงสุดและอัตราดรอป และใช้ Amity ปลดเควสกับร้านค้า", en: "Collect knowledge for more max Energy and drop rate, and use Amity to unlock quests and shops." },
    sections: [
      {
        kind: "list",
        title: { th: "Knowledge คืออะไร", en: "What knowledge is" },
        items: [
          { th: "กด H เปิดหน้า Knowledge หมวดจะโผล่เมื่อได้ Knowledge ชิ้นแรกในหมวดนั้น", en: "Press H to open Knowledge; a category appears once you get its first entry." },
          { th: "หมวดหลัก: Character, Topography & Sea, Ecology, Adventure Journal, Academics, Life Skill, Learning the Ropes, Trade", en: "Main categories: Character, Topography & Sea, Ecology, Adventure Journal, Academics, Life Skill, Learning the Ropes, Trade." },
          { th: "เก็บครบหมวดย่อยจะเพิ่ม Energy สูงสุดให้ทุกตัวในครอบครัว (เฉพาะ 5 หมวดแรก) เช่น Residents of Velia +2", en: "Completing a sub-category raises max Energy for every character in the family (first five categories only), e.g. Residents of Velia +2." },
          { th: "Ecology ได้จากการล่ามอนสเตอร์แบบสุ่ม คะแนน Ecology สะสมเพิ่มอัตราดรอปไอเทม", en: "Ecology entries come from killing monsters at a chance; accumulated Ecology points raise the item drop rate." },
        ],
      },
      {
        kind: "list",
        title: { th: "หา Knowledge จากไหน", en: "Where knowledge comes from" },
        items: [
          { th: "คุยกับ NPC ที่มีเครื่องหมาย ! (NPC ไม่มีชื่อก็ให้ได้)", en: "Talk to NPCs with a \"!\" (nameless NPCs can give entries too)." },
          { th: "รางวัลเควส, สำรวจพื้นที่ใหม่, Life Skill และการผลิต", en: "Quest rewards, exploring new areas, life skills and production." },
          { th: "ล่ามอนสเตอร์ (สุ่ม), ชั้นหนังสือ Knowledge และร้านขาย Knowledge", en: "Hunting (at a chance), Knowledge Bookshelves and Knowledge Vendors." },
          { th: "สำรวจเกาะต่าง ๆ ในทะเลรวมแล้วได้ Energy สูงสุดเพิ่มประมาณ 30-40", en: "Exploring sea islands adds about 30-40 max Energy in total." },
        ],
      },
      {
        kind: "table",
        title: { th: "Energy ใช้ทำอะไรบ้าง", en: "What Energy is spent on" },
        head: [{ th: "การกระทำ", en: "Action" }, { th: "Energy", en: "Energy" }],
        rows: [
          [{ th: "ทักทาย NPC (ได้ Amity 3)", en: "Greet an NPC (+3 Amity)" }, "3"],
          [{ th: "มินิเกมคุย", en: "Conversation mini-game" }, { th: "เริ่ม 2", en: "from 2" }],
          [{ th: "เก็บของ", en: "Gathering" }, { th: "1 ต่อครั้ง (ลดลงตามเลเวล)", en: "1 per action (less at higher level)" }],
          [{ th: "ตกปลาแบบกด Space ค้าง", en: "Fishing, hold Space" }, { th: "สูงสุด 10", en: "up to 10" }],
          [{ th: "ดูสัญญาคนงาน", en: "View a worker contract" }, "5"],
          [{ th: "ต่อราคา Trade", en: "Trade bargaining" }, "5"],
          [{ th: "ลบ Knowledge", en: "Delete knowledge" }, "10"],
        ],
        note: { th: "Energy เริ่มที่ 50 ฟื้น 1 แต้ม/3 นาทีตอนออนไลน์ และ 1 แต้ม/ชม. ตอนออฟไลน์", en: "Energy starts at 50 and recovers 1 per 3 min online, 1 per hour offline." },
      },
      {
        kind: "list",
        title: { th: "Amity", en: "Amity" },
        items: [
          { th: "ค่าความสนิทกับ NPC ใช้ร่วมกันทั้งครอบครัว ขึ้นจากการคุย ทักทาย และเควส ลดลงเมื่อขโมย", en: "Family-wide friendliness with each NPC; rises through talk, greetings and quests, falls when you steal." },
          { th: "มินิเกมคุย: ต้องมี Knowledge ตรงหัวข้อที่ NPC สนใจ คุยต่อเนื่องหลังชนะไม่เสีย Energy แต่ถ้าแพ้ Amity ทั้งชุดหายหมด", en: "Conversation mini-game: you need knowledge on the NPC's interests. Chained talks after a win cost no Energy, but a loss wipes the chain's Amity." },
          { th: "ทักทาย: 3 Energy ได้ 3 Amity ไม่มีวันพลาดแต่ช้ากว่า", en: "Greeting: 3 Energy for 3 Amity; never fails but slower." },
          { th: "Amity ปลด Knowledge, เควส และของในร้าน Amity (การซื้อจะใช้ Amity)", en: "Amity unlocks knowledge, quests and Amity shop items (buying spends Amity)." },
        ],
      },
    ],
    sources: [
      { label: "Adventurer's Guide: Knowledge", url: W(10), date: "2025-09-11" },
      { label: "Adventurer's Guide: Energy", url: W(23), date: "2025-07-29" },
      { label: "Adventurer's Guide: Amity", url: W(24), date: "2024-11-05" },
    ],
    codexPath: "knowledge/",
  },
  /* 3 ------------------------------------------------------------ */
  {
    slug: "adventure-logs",
    icon: { item: 40653 },
    title: { th: "Adventure Log", en: "Adventure Logs" },
    lead: { th: "สมุดผจญภัยที่ให้ค่าสถานะถาวรทั้งครอบครัว และควรเริ่มเล่มไหนก่อน", en: "Family-wide permanent stats from adventure logs, and which to start first." },
    sections: [
      {
        kind: "list",
        title: { th: "ใช้งานยังไง", en: "How it works" },
        items: [
          { th: "เปิดที่ ESC > Adventure (F5) > Adventure Log Bookshelf", en: "Open via ESC > Adventure (F5) > Adventure Log Bookshelf." },
          { th: "ทำครบบทแล้วปุ่ม Reward จะเรืองแสง กดรับได้เลย ค่าสถานะมีผลกับทั้งครอบครัวทันที", en: "When a chapter is done its Reward button glows; claim it and stats apply to the whole family." },
          { th: "รางวัลมีทั้ง AP, DP, HP สูงสุด, Stamina สูงสุด และน้ำหนักบรรทุก", en: "Rewards include AP, DP, max HP, max Stamina and weight limit." },
        ],
      },
      {
        kind: "table",
        title: { th: "สมุดที่มือใหม่ควรรู้", en: "Logs worth knowing" },
        head: [{ th: "สมุด", en: "Log" }, { th: "เงื่อนไข", en: "Requirement" }, { th: "รางวัลเด่น", en: "Key rewards" }],
        rows: [
          ["Igor Bartali's Adventures", { th: "Lv 51 + เควสหลัก Calpheon หรือ Fughar's Memorandum บท 6", en: "Lv 51 + Calpheon main quest or Fughar's Memorandum Ch. 6" }, { th: "ราว +6 AP / +6 DP, HP +877, น้ำหนัก +28 LT ทั้งครอบครัว (15 เล่ม, ไกด์ผู้เล่นนับ Wiki ทางการแสดงไม่ครบ)", en: "About +6 AP / +6 DP, +877 HP, +28 LT family-wide (15 volumes; player-guide count, the official wiki is missing rows)" }],
          ["The Eyes of Adventure", "Lv 11", { th: "ของ Land of the Morning Light และสัตว์เลี้ยง Prankkebi", en: "Morning Light items and the Prankkebi pet" }],
          ["Crow Merchants' Records", { th: "Lv 55 + เควส Black Spirit", en: "Lv 55 + Black Spirit quest" }, { th: "Advice of Valks +60/+80/+100, หินคาพลาส", en: "Advice of Valks +60/+80/+100, Caphras Stones" }],
          ["Shakatu Merchants' Archive", { th: "Lv 57 + เควส Black Spirit", en: "Lv 57 + Black Spirit quest" }, { th: "Item Collection Increase Scroll x3 และอื่น ๆ", en: "Item Collection Increase Scroll x3 and more" }],
          ["Old Moon Logs", { th: "Lv 58 + เควส Black Spirit", en: "Lv 58 + Black Spirit quest" }, { th: "Valks' Cry x10, Gold Bar และอื่น ๆ", en: "Valks' Cry x10, Gold Bars and more" }],
        ],
      },
      {
        kind: "steps",
        title: { th: "ลำดับแนะนำ", en: "Suggested order" },
        items: [
          { th: "The Eyes of Adventure ตั้งแต่ Lv 11", en: "The Eyes of Adventure from Lv 11." },
          { th: "Igor Bartali ที่ Lv 51 (แหล่งค่าสถานะครอบครัวหลัก ใช้เวลานาน เริ่มเร็วดีที่สุด)", en: "Igor Bartali at Lv 51 (the main family-stat source; long, start early)." },
          { th: "Crow / Shakatu / Old Moon ช่วง Lv 55-58", en: "Crow / Shakatu / Old Moon logs at Lv 55-58." },
        ],
      },
    ],
    refs: [{ item: 40653 }],
    sources: [
      { label: "Adventurer's Guide: Adventure Log", url: W(328), date: "2026-10-28" },
    ],
    codexPath: "adventurelogs/",
    cta: { to: "/adventure-log", label: "al.cta" },
  },
  /* 4 ------------------------------------------------------------ */
  {
    slug: "nodes",
    icon: { item: 64687 },
    title: { th: "Node และคนงาน", en: "Nodes and workers" },
    lead: { th: "ต่อ Node จ้างคนงาน ให้วัตถุดิบไหลเข้าโกดังระหว่างที่เปิดเกมไว้", en: "Connect nodes and hire workers so materials flow into storage while the game is running." },
    sections: [
      {
        kind: "callout",
        title: { th: "สิ่งที่ต้องรู้ก่อน", en: "Know this first" },
        body: { th: "คนงานทำงานเฉพาะตอนเราล็อกอินอยู่ (เปิด AFK ได้) Wiki ทางการไม่ได้เขียนเรื่องนี้ แต่ไกด์ผู้เล่นยืนยันว่าล็อกเอาท์แล้วคนงานจะทำงานรอบปัจจุบันจนจบแล้วหยุด", en: "Workers only work while you are logged in (AFK is fine). The official wiki does not state this; player guides confirm that after logout they finish the current job and stop." },
      },
      {
        kind: "steps",
        title: { th: "ลงทุน Node", en: "Investing in a node" },
        items: [
          { th: "ค้นพบ Node ด้วยการเดินสำรวจหรือคุยกับผู้จัดการ Node", en: "Discover the node by exploring or talking to its node manager." },
          { th: "Node ต้องต่อกับ Node ที่ลงทุนแล้ว เส้นสีขาว = ลงทุนได้ สีส้ม = เชื่อมแล้ว", en: "It must connect to an invested node: a white line means you can invest now, orange means connected." },
          { th: "ที่ผู้จัดการ Node กด Node Management > Invest Contribution", en: "At the node manager: Node Management > Invest Contribution." },
          { th: "Node ผลิต (ฟาร์ม, เหมือง, ตัดไม้, ผลิต, ขุด) ต้องลงทุนเพิ่ม แล้วส่งคนงานไปทำงาน", en: "Production subnodes (farming, mining, lumbering, production, excavation) need their own investment, then a worker." },
          { th: "ถอนจากปลายสายเท่านั้น ถอน Node ผลิตก่อน และยกเลิกงานคนงานก่อนถอน", en: "Withdraw from the end of a chain only; withdraw production nodes first and stop their workers." },
        ],
      },
      {
        kind: "table",
        title: { th: "เผ่าคนงาน", en: "Worker races" },
        head: [{ th: "เผ่า", en: "Race" }, { th: "จุดเด่น", en: "Strength" }],
        rows: [
          ["Goblin", { th: "ทำงานและเดินเร็วสุด แต่ Stamina น้อย", en: "Fastest work and movement, low stamina" }],
          ["Human", { th: "สมดุล", en: "Balanced" }],
          ["Giant", { th: "Stamina สูง ช้า มีทาเลนต์เพิ่มผลผลิต", en: "High stamina, slow, production-increase talent" }],
          ["Papu / Fadu", { th: "คนงาน Kamasylvia เทียบ Goblin / Human-Giant", en: "Kamasylvia equivalents of Goblin / Human-Giant" }],
          ["Dokkebi / Dolswe / Shellfolk", { th: "คนงาน Land of the Morning Light เทียบ Goblin / Human / Giant", en: "Morning Light equivalents of Goblin / Human / Giant" }],
        ],
      },
      {
        kind: "list",
        title: { th: "จ้างและดูแลคนงาน", en: "Hiring and care" },
        items: [
          { th: "จ้างที่ Work Supervisor ดูสัญญาครั้งละ 5 Energy + Silver ตามเกรด", en: "Hire at the Work Supervisor: 5 Energy per contract view plus silver by grade." },
          { th: "ทุกเมืองมีคนงานฟรี 1 คน คนต่อไปต้องมีบ้านที่ตั้งเป็นที่พัก (Lodging)", en: "Each town gives 1 free worker; more need a house set to lodging." },
          { th: "ให้อาหารด้วยเบียร์หรือเนื้อนกย่าง เปิด Auto-recover จะดึงอาหารจาก Family Inventory เมื่อ Stamina เหลือ 3", en: "Feed beer or grilled bird meat; auto-recover pulls food from the Family Inventory at 3 stamina." },
          { th: "เลื่อนขั้นทุก 10 เลเวล ใช้เวลา 8 ชม. โอกาส Skilled 90%, Professional 70%, Artisan 50% เลื่อนแล้วกลับเป็น Lv 1", en: "Promote every 10 levels (8 h): Skilled 90%, Professional 70%, Artisan 50%. A promoted worker returns to Lv 1." },
          { th: "ขาย Trade ของจาก Node ที่ไม่ได้เชื่อม ได้แค่ 30% ของราคา และค่าส่งของข้ามเมืองที่ไม่เชื่อมแพงขึ้น 3 เท่า", en: "Trade goods from an unconnected node sell for only 30%; transport between unconnected towns costs 3x." },
        ],
      },
    ],
    refs: [{ item: 64687 }, { item: 9213 }],
    sources: [
      { label: "Adventurer's Guide: Nodes", url: W(20), date: "2025-07-29" },
      { label: "Adventurer's Guide: Workers", url: W(40), date: "2026-03-20" },
      { label: "Adventurer's Guide: Worker Promotion", url: W(376), date: "2024-03-22" },
    ],
    codexPath: "nodes/",
  },
  /* 5 ------------------------------------------------------------ */
  {
    slug: "houses",
    icon: { item: 3701 },
    title: { th: "บ้านและโกดัง", en: "Houses and storage" },
    lead: { th: "ซื้อบ้านด้วย Contribution แล้วตั้งเป็นที่พัก ที่พักคนงาน โกดัง หรือโรงงาน", en: "Buy houses with Contribution and set them as residence, lodging, storage or workshops." },
    sections: [
      {
        kind: "steps",
        title: { th: "ซื้อบ้าน", en: "Buying a house" },
        items: [
          { th: "เปิดแผนที่ (M) คลิกเมือง บ้านสีฟ้าซื้อได้เลย สีเทาต้องซื้อบ้านข้าง ๆ ก่อน", en: "Open the map (M) and click a town; blue houses can be bought, grey ones need a neighbour first." },
          { th: "ใช้ CP + Silver เล็กน้อย ขายคืนได้ CP คืนเต็ม (Silver ค่าอัปเกรดไม่คืน) ขายย้อนลำดับที่ซื้อ", en: "Costs CP plus a little silver; selling refunds CP (not upgrade silver). Sell in reverse purchase order." },
          { th: "ถ้าไม่เลือกการใช้งาน บ้านจะเป็นโกดังโดยอัตโนมัติ", en: "Without a chosen usage, a house defaults to storage." },
          { th: "เริ่มต้นจากบ้านพัก 1 CP ใกล้โกดัง ไว้วางอุปกรณ์ทำอาหาร (Wiki ทำอาหารแนะนำ)", en: "Start with a 1 CP residence near storage for cooking tools (the Cooking guide recommends it)." },
        ],
      },
      {
        kind: "table",
        title: { th: "การใช้งานบ้าน", en: "House usages" },
        head: [{ th: "การใช้งาน", en: "Usage" }, { th: "ทำอะไร", en: "What it does" }],
        rows: [
          [{ th: "ที่พัก (Residence)", en: "Residence" }, { th: "วางอุปกรณ์ทำอาหาร/แปรธาตุ เฟอร์นิเจอร์ นอนพัก เริ่มได้ 5 หลัง", en: "Cooking/alchemy tools, furniture, rest; 5 to start" }],
          [{ th: "ที่พักคนงาน (Lodging)", en: "Lodging" }, { th: "จ้างคนงานในเมืองนั้นเพิ่ม", en: "More workers in that town" }],
          [{ th: "โกดัง (Storage)", en: "Storage" }, { th: "เพิ่มช่องโกดังเมืองนั้น (โกดังเริ่ม 16 ช่อง)", en: "More storage slots (town storage starts at 16)" }],
          [{ th: "Refinery", en: "Refinery" }, { th: "ทำ Black Stone Powder และ Black Stone", en: "Black Stone Powder and Black Stones" }],
          [{ th: "โรงงาน", en: "Workshops" }, { th: "อาวุธ เกราะ เครื่องมือ เฟอร์นิเจอร์ ฯลฯ เลเวลสูงทำของดีขึ้น", en: "Weapon, armor, tool, furniture, etc.; higher levels craft better items" }],
          [{ th: "อู่ต่อเรือ / โรงเกวียน", en: "Shipyard / wagon workshop" }, { th: "ผลิตใบลงทะเบียนเรือหรือเกวียน", en: "Produces ship or wagon registrations" }],
        ],
      },
      {
        kind: "list",
        title: { th: "โกดัง", en: "Storage" },
        items: [
          { th: "โกดังแต่ละเมืองแยกกัน ส่งของข้ามเมืองด้วยเกวียน (ค่าส่ง 3 เท่าถ้าไม่ได้เชื่อม Node)", en: "Each town's storage is separate; send items by wagon (3x cost if towns are not node-connected)." },
          { th: "ทำ Magnus หรือใช้เมดโกดังเพื่อเปิดโกดังระยะไกล", en: "Use the Magnus or a storage maid for remote access." },
          { th: "คนงานหยิบวัตถุดิบจากโกดังเมืองบ้านเกิด และส่งของเข้าโกดังเมืองนั้น", en: "Workers take materials from, and deliver to, their home town's storage." },
        ],
      },
    ],
    sources: [
      { label: "Adventurer's Guide: Houses", url: W(29), date: "2026-03-20" },
      { label: "Adventurer's Guide: Storage", url: W(43), date: "2026-04-16" },
      { label: "Asia notice: Aug 27 update", url: ASIA(19749), date: "2026-08-27" },
    ],
    codexPath: "houses/",
  },
  /* 6 ------------------------------------------------------------ */
  {
    slug: "contribution",
    icon: { item: 405 },
    title: { th: "Contribution (CP)", en: "Contribution (CP)" },
    lead: { th: "แต้มที่ใช้ลงทุน Node ซื้อบ้าน และเช่าของ ได้คืนเต็มเมื่อถอน", en: "Points for nodes, houses and rentals, fully refunded when withdrawn." },
    sections: [
      {
        kind: "list",
        title: { th: "หา Contribution EXP จากไหน", en: "Earning Contribution EXP" },
        items: [
          { th: "เควส (แหล่งหลัก) และเควสเมืองแบบทำซ้ำในแท็บ Recurring", en: "Quests (the main source) and repeatable town quests in the Recurring tab." },
          { th: "แลก Byproduct จากทำอาหาร แปรธาตุ ฟาร์ม และตกปลา กับ NPC", en: "Exchange byproducts from cooking, alchemy, farming and fishing with NPCs." },
          { th: "สำรวจพื้นที่ครั้งแรก", en: "First-time exploration." },
          { th: "Token จากป้องกัน Gateway node ตอนกลางคืน (แลกใช้ Energy)", en: "Gateway node defense tokens at night (exchanging costs Energy)." },
          { th: "Rawr-Rawr World Boss รายสัปดาห์ให้ 300 Contribution EXP", en: "The weekly Rawr-Rawr world boss quest gives 300 Contribution EXP." },
        ],
      },
      {
        kind: "callout",
        title: { th: "เควส CP รายสัปดาห์ของ Liana", en: "Liana's weekly CP quest" },
        body: { th: "รับจาก Liana ในทุกเมือง ทำได้เมื่อ CP สูงสุดอยู่ระหว่าง 220-349 สัปดาห์ละครั้ง รีเซ็ตวันพฤหัส", en: "From Liana in every city, available at 220-349 max CP, once per week, resetting on Thursday." },
      },
      {
        kind: "list",
        title: { th: "ใช้ CP กับอะไร", en: "Spending CP" },
        items: [
          { th: "ลงทุน Node และ Node ผลิต", en: "Nodes and production subnodes." },
          { th: "ซื้อบ้าน (CP + Silver เล็กน้อย)", en: "Houses (CP plus a little silver)." },
          { th: "เช่าของ [CP] เช่น เกียร์เริ่มต้น รั้วฟาร์ม ปืนล่าสัตว์ คืนของแล้วได้ CP คืน", en: "[CP] rentals such as starter gear, fences and a matchlock; returning them refunds CP." },
          { th: "กดตัวเลข CP มุมซ้ายบนเพื่อดูว่าลงทุนอะไรไว้บ้าง", en: "Click the CP display at the top-left to review investments." },
        ],
      },
    ],
    refs: [{ item: 405 }],
    sources: [
      { label: "Adventurer's Guide: Contribution", url: W(19), date: "2025-07-29" },
      { label: "Asia notice: Oct 29 update (Rawr-Rawr)", url: ASIA(19985), date: "2026-10-29" },
    ],
    codexPath: "cptable/",
  },
  /* 7 ------------------------------------------------------------ */
  {
    slug: "gathering-mastery",
    icon: { item: 16113 },
    title: { th: "เก็บของและ Mastery", en: "Gathering and mastery" },
    lead: { th: "เครื่องมือ Mastery และเกียร์ Life ที่ใช้ร่วมกันทั้งครอบครัวหลังแพตช์ 3 ก.ย. 2026", en: "Tools, mastery and family-wide life gear after the 3 Sep 2026 patch." },
    sections: [
      {
        kind: "table",
        title: { th: "เครื่องมือเก็บของ", en: "Gathering tools" },
        head: [{ th: "เครื่องมือ", en: "Tool" }, { th: "ใช้กับ", en: "Used on" }],
        rows: [
          ["Lumbering Axe", { th: "ต้นไม้", en: "Trees" }],
          ["Fluid Collector", { th: "ยางไม้ / เลือด", en: "Sap / blood" }],
          ["Tanning Knife", { th: "หนังสัตว์", en: "Hides" }],
          ["Butcher Knife", { th: "เนื้อสัตว์", en: "Meat" }],
          ["Hoe", { th: "สมุนไพร / เห็ด", en: "Herbs / mushrooms" }],
          ["Pickaxe", { th: "แร่", en: "Ore" }],
        ],
      },
      {
        kind: "list",
        title: { th: "Mastery", en: "Mastery" },
        items: [
          { th: "ของที่เก็บได้มี 3 ระดับ: ธรรมดา พิเศษ หายาก Mastery สูงได้ของธรรมดามากขึ้น และมีโอกาสได้ของพิเศษ/หายาก (เช่น หินคาพลาส) มากขึ้น", en: "Resources are basic, special or rare; higher mastery gives more basic resources and better odds for special/rare ones (e.g. Caphras Stones)." },
          { th: "Mastery มาจากเลเวลสาย เกียร์ ยา และอาหาร มือใหม่ให้เน้น EXP ก่อนแล้วค่อยเน้นเกียร์ Mastery", en: "Mastery comes from skill level, gear, elixirs and food. New players should focus on EXP first, mastery gear later." },
          { th: "เลเวลเก็บของสูงขึ้น มีโอกาสไม่เสีย Energy (สูงสุดที่ Professional 3 หลังแพตช์ 3 ก.ย.)", en: "Higher gathering level gives a chance to spend no Energy (maxes at Professional 3 after 3 Sep)." },
          { th: "Magic Gathering Tool ลดเวลา 11 วินาที ดรอป +80% แต่ปิดโบนัสดรอปจาก Mastery", en: "Magic Gathering Tool: -11 s and +80% drop rate, but disables mastery's drop bonus." },
          { th: "Demihar Gathering Tool ได้จาก Challenge (Y) หลังถึง Apprentice ใช้ได้ 14 วัน (EXP +50%)", en: "Demihar Gathering Tool from Challenges (Y) after Apprentice; 14 days, +50% EXP." },
        ],
      },
      {
        kind: "list",
        title: { th: "เกียร์ Life ใช้ร่วมกันทั้งครอบครัว (3 ก.ย. 2026)", en: "Family-wide life gear (3 Sep 2026)" },
        items: [
          { th: "เครื่องประดับ หินแปรธาตุ และ Evergreen Orb ใส่ในหมวดเดียวมีผลทุก Life Skill ส่วนอย่างอื่นใส่แยกตามหมวด", en: "Accessories, alchemy stones and the Evergreen Orb apply to every life skill from one slot; everything else is per category." },
          { th: "เกียร์ Life ไม่มี DP และน้ำหนักบรรทุกแล้ว หินแปรธาตุ Life ไม่ลดความทนทาน", en: "Life gear no longer has DP or weight limit; life alchemy stones lose no durability." },
          { th: "เครื่องประดับ Life ที่รวมเป็นของทั้งครอบครัว: Floramos, Loggia, Geranoa, Manos, Preonne", en: "Life accessories now shared family-wide: Floramos, Loggia, Geranoa, Manos, Preonne." },
        ],
      },
      {
        kind: "table",
        title: { th: "Evergreen Orb: Life EXP ต่อขั้น (ตีสำเร็จ 100%)", en: "Evergreen Orb: life EXP per level (100% success)" },
        head: [{ th: "ขั้น", en: "Level" }, "Life EXP", { th: "Evergreen Shard ต่อขั้น", en: "Shards per level" }],
        rows: [
          ["+0", "4%", "-"],
          ["+5", "24%", "1"],
          ["+9", "48%", "6"],
          ["+12", "69%", "20"],
          ["+15", "90%", "20"],
        ],
        note: { th: "Shard ได้จาก Heating: Essence of Dawn x1 + Trace of Nature x30 + Magical Lightstone Crystal x500 หรือจากมินิเกม Green Artisan", en: "Shards: Heating Essence of Dawn x1 + Trace of Nature x30 + Magical Lightstone Crystal x500, or the Green Artisan mini-game." },
      },
      {
        kind: "table",
        title: { th: "Preonne แลกจาก Manos กับ Liana", en: "Preonne from Manos via Liana" },
        head: [{ th: "ให้ Manos", en: "Manos given" }, { th: "ได้ Preonne", en: "Preonne received" }],
        rows: [
          ["TRI (III)", "+0"],
          ["TET (IV)", "TRI (III)"],
          ["PEN (V)", "OCT (VIII)"],
        ],
      },
    ],
    refs: [{ item: 16113 }, { item: 933601 }, { item: 705503 }, { item: 705533 }],
    sources: [
      { label: "Adventurer's Guide: Gathering", url: W(34), date: "2026-11-03" },
      { label: "Adventurer's Guide: Life Skills", url: W(85), date: "2026-07-17" },
      { label: "Adventurer's Guide: Preonne Accessories", url: W(433), date: "2025-02-11" },
      { label: "Asia notice: Life Skill Gear Integration", url: ASIA(19773), date: "2026-09-03" },
    ],
    codexPath: "gatheringmastery/",
  },
  /* 8 ------------------------------------------------------------ */
  {
    slug: "cooking",
    icon: { item: 3717 },
    title: { th: "ทำอาหาร", en: "Cooking" },
    lead: { th: "เริ่มทำอาหารยังไง สูตรเบียร์ให้คนงาน และส่ง Imperial Delivery", en: "How to start cooking, the worker beer recipe, and Imperial delivery." },
    sections: [
      {
        kind: "steps",
        title: { th: "เริ่มทำอาหาร", en: "Getting started" },
        items: [
          { th: "ซื้อบ้านพัก (Residence) 1 CP ใกล้โกดัง", en: "Buy a 1 CP residence near storage." },
          { th: "ซื้อ Cooking Utensil จากร้านอาหาร/โรงแรม (ใช้ได้ประมาณ 100 ครั้ง) แล้ววางในบ้านด้วย Place Mode", en: "Buy a Cooking Utensil from an innkeeper or food vendor (about 100 uses) and place it in the residence." },
          { th: "กด R ที่อุปกรณ์ ใส่วัตถุดิบด้วยคลิกขวา กด Start Cooking หรือใช้ Batch Production ทำทีละเยอะ", en: "Press R at the utensil, right-click ingredients in, then Start Cooking or use Batch Production." },
          { th: "วัตถุดิบถูกและครบ สำเร็จเสมอ (ใส่เกินได้) วัตถุดิบผิดล้มเหลวเสมอ", en: "Correct ingredients always succeed (extra is fine); wrong ones always fail." },
        ],
      },
      {
        kind: "table",
        title: { th: "สูตรเริ่มต้น (สูตรทางการ)", en: "Starter recipes (official)" },
        head: [{ th: "อาหาร", en: "Dish" }, { th: "เลเวล", en: "Level" }, { th: "วัตถุดิบ", en: "Ingredients" }],
        rows: [
          [{ th: "เบียร์ (Beer) อาหารคนงาน", en: "Beer (worker food)" }, "Beginner 1", { th: "Grain 5, Mineral Water 6, Leavening Agent 2, Sugar 1", en: "Grain 5, Mineral Water 6, Leavening Agent 2, Sugar 1" }],
          [{ th: "น้ำส้มสายชู (Vinegar)", en: "Vinegar" }, "Beginner 1", "Grain 1, Fruit 1, Leavening Agent 1, Sugar 1"],
          ["Essence of Liquor", "Beginner 1", { th: "Flour 1, Fruit 1, Leavening Agent 1 (Flour ได้จากบด Grain)", en: "Flour 1, Fruit 1, Leavening Agent 1 (grind grain into flour)" }],
        ],
        note: { th: "Grain ใช้แทนกันได้: ข้าวสาลี ข้าวบาร์เลย์ มันฝรั่ง มันเทศ ข้าวโพด ข้าว · เครื่องปรุงซื้อได้ที่ร้านอาหารทุกร้าน", en: "Grain substitutes: wheat, barley, potato, sweet potato, corn, rice. Seasonings are sold by any cooking vendor." },
      },
      {
        kind: "list",
        title: { th: "Mastery และ Imperial Delivery", en: "Mastery and Imperial delivery" },
        items: [
          { th: "Mastery เพิ่มจำนวนจานต่อครั้ง โอกาสได้ของเพิ่ม โอกาสทำแบบเยอะ 10 เท่า และกำไร Imperial", en: "Mastery raises dishes per cook, bonus and mass-cooking chances, and Imperial profit." },
          { th: "แพ็กอาหารลงกล่องด้วย L > Imperial Cuisine แล้วส่ง NPC Imperial ได้ 250% ของราคาตลาด", en: "Pack dishes with L > Imperial Cuisine and deliver to Imperial NPCs for 250% of market price." },
          { th: "ส่งได้วันละ CP ÷ 2 กล่อง (รวมทำอาหารกับแปรธาตุ)", en: "Daily limit is CP ÷ 2 boxes, shared with alchemy." },
          { th: "Golden Seal จะเปลี่ยนเป็น Imperial Reward Seal วันที่ 3 ธ.ค. 2026 ของรางวัลถูกลงมาก", en: "Golden Seals become Imperial Reward Seals on 3 Dec 2026, with much cheaper rewards." },
        ],
      },
    ],
    refs: [{ item: 3717 }, { item: 9213 }],
    sources: [
      { label: "Adventurer's Guide: Cooking", url: W(27), date: "2025-05-16" },
      { label: "Adventurer's Guide: Imperial Crafting Delivery", url: W(133), date: "2026-07-17" },
      { label: "Asia notice: Nov 5 update", url: ASIA(20010), date: "2026-11-05" },
    ],
    codexPath: "recipes/culinary/",
  },
  /* 9 ------------------------------------------------------------ */
  {
    slug: "ships",
    icon: { item: 49021 },
    title: { th: "เรือ", en: "Ships" },
    lead: { th: "เรือแต่ละลำทำอะไร ควรเลือกสายไหน และลูกเรือทำงานยังไง", en: "What each ship is for, which line to pick, and how sailors work." },
    sections: [
      {
        kind: "callout",
        title: { th: "เลือกครั้งเดียว", en: "A one-time choice" },
        body: { th: "ตอนอัปเกรดจาก Bartali ต้องเลือก Epheria Sailboat (สาย Barter) หรือ Frigate (สายต่อสู้) ทางนี้กำหนดว่าจะได้ Carrack แบบไหน", en: "Upgrading from the Bartali you pick the Epheria Sailboat (barter line) or the Frigate (combat line). That choice decides which Carracks you can reach." },
      },
      {
        kind: "table",
        title: { th: "สายเรือ", en: "Ship lines" },
        head: [{ th: "สาย", en: "Line" }, { th: "เส้นทาง", en: "Path" }, { th: "Carrack ปลายทาง", en: "Final Carrack" }],
        rows: [
          [{ th: "Barter", en: "Barter" }, "Bartali > Epheria Sailboat > Improved Sailboat > Caravel", "Balance / Advance"],
          [{ th: "ต่อสู้", en: "Combat" }, "Bartali > Epheria Frigate > Improved Frigate > Galleass", "Volante / Valor"],
        ],
      },
      {
        kind: "table",
        title: { th: "Carrack แต่ละแบบ", en: "Carrack variants" },
        head: ["Carrack", { th: "จุดเด่น", en: "Strength" }],
        rows: [
          ["Balance", { th: "ค่าสถานะสมดุล", en: "Even stats" }],
          ["Advance", { th: "ช่องเก็บของเยอะสุด เหมาะ Barter", en: "Most storage, best for barter" }],
          ["Volante", { th: "เร็วสุด", en: "Fastest" }],
          ["Valor", { th: "โจมตีแรงสุด", en: "Highest attack" }],
        ],
        note: { th: "Caravel: 30 ช่อง 10,000 LT · Galleass: ปืนใหญ่ข้างละ 4 · Epheria Sailboat 10 cabin · Carrack 100 cabin · Panokseon 150 cabin", en: "Caravel: 30 slots, 10,000 LT. Galleass: 4 cannons per side. Epheria Sailboat 10 cabins, Carrack 100, Panokseon 150." },
      },
      {
        kind: "list",
        title: { th: "เรือลำแรกและลูกเรือ", en: "First ship and sailors" },
        items: [
          { th: "Bartali Sailboat ซื้อจาก Proix (Velia) 10,000,000 Silver หรือได้จากสายเควส [The Great Expedition] (เริ่ม Vigorous Velia ที่ Black Spirit Lv 50 จบที่ First Sailboat into Oquilla's Eye)", en: "Bartali Sailboat: 10,000,000 silver from Proix (Velia) or the [The Great Expedition] questline (Vigorous Velia from the Black Spirit at Lv 50, ending with First Sailboat into Oquilla's Eye)." },
          { th: "สัญญาลูกเรือ 3,000,000 Silver จาก Philaberto Falasi (Port Epheria), Islin Bartali หรือ Proix (Velia)", en: "Sailor contract: 3,000,000 silver from Philaberto Falasi (Port Epheria), Islin Bartali or Proix (Velia)." },
          { th: "ลูกเรือในช่องใบเรือเพิ่ม Endurance/Wits x2, พวงมาลัย Awareness/Strength x2, ปืนใหญ่ Focus/Force/Vision x2", en: "Sailors on the sail double Endurance/Wits, the wheel Awareness/Strength, cannons Focus/Force/Vision." },
          { th: "Rations หมดเรือช้าลงมาก ความทนทานหมดเรือพัง", en: "Out of rations the ship slows sharply; at zero durability it is destroyed." },
          { th: "ตั้งแต่ 23 ก.ย. 2026 ใช้ร้าน ซ่อม เติมเสบียง และโหลดของ จากบนเรือใหญ่ได้เลย", en: "Since 23 Sep 2026 you can shop, repair, resupply and load cargo without leaving a big ship." },
        ],
      },
    ],
    refs: [{ item: 49028 }, { item: 49011 }, { item: 49023 }, { item: 49021 }],
    sources: [
      { label: "Adventurer's Guide: Sailing & Bartering", url: W(325), date: "2026-10-02" },
      { label: "Adventurer's Guide: Stable & Wharf", url: W(42), date: "2025-07-21" },
      { label: "Asia notice: Ship and Barter QoL", url: ASIA(19844), date: "2026-09-23" },
    ],
    codexPath: "ships/",
  },
  /* 10 ----------------------------------------------------------- */
  {
    slug: "ship-upgrades",
    icon: { item: 49023 },
    title: { th: "อัปเกรดเรือ", en: "Ship upgrades" },
    lead: { th: "วัตถุดิบของการอัปเกรดแต่ละขั้น จาก Adventurer's Guide ทางการ", en: "Materials for every upgrade step, from the official Adventurer's Guide." },
    sections: [
      {
        kind: "table",
        title: { th: "วัตถุดิบอัปเกรด", en: "Upgrade materials" },
        head: [{ th: "ขั้น", en: "Step" }, { th: "วัตถุดิบ", en: "Materials" }],
        rows: [
          ["Bartali > Epheria Sailboat", "Permit, +10 Old parts x4, Standardized Timber Square 350, Steel 250, Pine Plywood 700, Flax Fabric 100, Gold Bar 1,000G x5"],
          ["Bartali > Epheria Frigate", "Permit, +10 Old parts x4, Standardized Timber Square 450, Jade Coral Ingot 350, Pine Coated Plywood 750, Enhanced Flax Fabric 200, Gold Bar 1,000G x5"],
          ["> Improved Sailboat / Frigate", "Epheria Old parts, Standardized Timber Square 250, Steel 200, Pine Plywood 500, Flax Fabric 100, Hard Pillar 30, Ultimate Armor Reform Stone 10"],
          ["Improved Sailboat > Caravel", "Permit, +10 Old parts, Graphite Ingot for Upgrade 100, Timber for Upgrade 100, Adhesive for Upgrade 100, Island Tree Coated Plywood 100, Rock Salt Ingot 100, Deep Sea Memory Filled Glue 4"],
          ["Improved Frigate > Galleass", { th: "เหมือน Caravel + Tide-Dyed Standardized Timber Square 3, Cobalt Ingot 2, Moon Scale Plywood 10", en: "Same as Caravel + Tide-Dyed Standardized Timber Square 3, Cobalt Ingot 2, Moon Scale Plywood 10" }],
          ["Caravel > Carrack (Balance)", "+10 blue parts x4, Moon Vein Flax Fabric 180, Deep Tide-Dyed Standardized Timber Square 144, Abyssal Gem 2, Brilliant Rock Salt Ingot 30, Brilliant Pearl Shard 30, Tear of the Ocean 50"],
          ["Caravel > Carrack (Advance)", "+10 blue parts x4, Moon Vein Flax Fabric 180, Deep Tide-Dyed Standardized Timber Square 144, Abyssal Gem 2, Brilliant Rock Salt Ingot 35, Brilliant Pearl Shard 35, Tear of the Ocean 42"],
          ["Galleass > Carrack (Volante)", "+10 parts x4, Moon Vein Flax Fabric 210, Deep Tide-Dyed Standardized Timber Square 144, Abyssal Gem 2, Brilliant Rock Salt Ingot 30, Brilliant Pearl Shard 30, Tear of the Ocean 42"],
          ["Galleass > Carrack (Valor)", "+10 parts x4, Moon Vein Flax Fabric 180, Deep Tide-Dyed Standardized Timber Square 170, Abyssal Gem 2, Brilliant Rock Salt Ingot 30, Brilliant Pearl Shard 30, Tear of the Ocean 42"],
        ],
      },
      {
        kind: "list",
        title: { th: "ชิ้นส่วนเรือ", en: "Ship parts" },
        items: [
          { th: "ชิ้นส่วนเขียว Caravel/Galleass ซื้อจาก Falasi ตีด้วย Tidal Black Stone สำเร็จ 100% (10 ก้อนต่อชิ้นถึง +10)", en: "Green Caravel/Galleass parts from Falasi; Tidal Black Stones always succeed (10 per part to +10)." },
          { th: "ชิ้นส่วนน้ำเงิน Caravel/Galleass ทำที่ Ship Part Workshop ของ Port Epheria (ต้องเลเวล 4)", en: "Blue Caravel/Galleass parts: Port Epheria Ship Part Workshop (level 4)." },
          { th: "Carrack: เขียว Toro (Crow Coin ที่ Ravinia) > น้ำเงิน Chiro (เกาะ Iliya) > เหลือง Falasi (ใบอนุญาต 5 พันล้าน Silver)", en: "Carrack: green Toro (Crow Coins at Ravinia) > blue Chiro (Iliya Island) > yellow Falasi (5B silver permit)." },
          { th: "อัปเกรดไม่ได้ถ้าชิ้นส่วนความทนทานไม่เต็ม มีของบนเรือ หรือมีลูกเรืออยู่", en: "You cannot upgrade if a part is below max durability, the ship holds items, or a sailor is aboard." },
        ],
      },
    ],
    refs: [{ item: 756001 }, { item: 10 }],
    sources: [
      { label: "Adventurer's Guide: Ship Upgrading", url: W(265), date: "2026-10-23" },
      { label: "Asia notice: Lyngbakr & yellow ship gear", url: ASIA(19749), date: "2026-08-27" },
    ],
    codexPath: "shipsupgrade/",
  },
  /* 11 ----------------------------------------------------------- */
  {
    slug: "barter",
    icon: { item: 10 },
    title: { th: "Barter", en: "Bartering" },
    lead: { th: "แลกของบนเกาะด้วยเรือ ของแต่ละระดับมีค่าเท่าไหร่ และข้อควรระวัง", en: "Trading goods between islands by ship, what each tier is worth, and the risks." },
    sections: [
      {
        kind: "table",
        title: { th: "ระดับของ Barter", en: "Barter goods tiers" },
        head: [{ th: "ระดับ", en: "Tier" }, { th: "น้ำหนัก", en: "Weight" }, { th: "มูลค่า Silver", en: "Silver value" }],
        rows: [
          ["Lv1", "100 LT", "-"],
          ["Lv2", "400 LT", "-"],
          ["Lv3", "900 LT", "1M"],
          ["Lv4", "1,000 LT", "2M"],
          ["Lv5", "1,000 LT", "25M"],
          ["Lv6", "2,000 LT", "50M"],
          ["Lv7", "2,000 LT", "100M"],
        ],
        note: { th: "Lv3-5 ขายร้านได้ Lv4-5 แลก Crow Coin ได้", en: "Lv3-5 sell to shops; Lv4-5 can give Crow Coins." },
      },
      {
        kind: "list",
        title: { th: "กติกา", en: "Rules" },
        items: [
          { th: "Barter ได้บนเรือเท่านั้น ต้องโหลดของผ่าน Load Cargo ที่ Wharf Manager", en: "You can only barter from a ship; load goods through the Wharf Manager's Load Cargo." },
          { th: "ทุกการแลกใช้ Parley ส่วนแต้มรีเฟรชเส้นทาง (Barter Refresh) รีเซ็ตทุกวันเป็น 100 (มี Value Pack 150)", en: "Each exchange costs parley; barter refresh points reset daily to 100 (150 with a Value Pack)." },
          { th: "ยิ่ง Barter สะสมมาก เส้นทางยิ่งเพิ่ม (3 เส้นตอนเริ่ม ประมาณ 6 เส้นที่ 70 ครั้ง)", en: "Routes grow with your total barters (3 at start, about 6 at 70)." },
          { th: "Special Barter (ป้ายทองบนแผนที่) สุ่มโผล่ โอกาสเพิ่มตามจำนวน Barter", en: "Special Barters (gold badge on the map) appear at random, more often as you barter more." },
          { th: "ตั้งแต่ 23 ก.ย. 2026 หน้า Barter บอกระยะทาง และมีปุ่มหาเมือง/ท่าเรือใกล้สุด", en: "Since 23 Sep 2026 barter info shows distances and a Nearby Town/Wharf button." },
        ],
      },
      {
        kind: "callout",
        title: { th: "ระวังของหาย", en: "Do not lose your goods" },
        body: { th: "ของ Barter จะหายทั้งหมดถ้าเรือใหญ่พัง หรือเก็บเรือแบบระยะไกล (Remote Collection)", en: "Barter goods are destroyed if a large ship is destroyed or remotely collected." },
      },
    ],
    refs: [{ item: 10 }],
    sources: [
      { label: "Adventurer's Guide: Sailing & Bartering", url: W(325), date: "2026-10-02" },
      { label: "Asia notice: Ship and Barter QoL", url: ASIA(19844), date: "2026-09-23" },
    ],
    codexPath: "barter/",
  },
  /* 12 ----------------------------------------------------------- */
  {
    slug: "world-bosses",
    icon: { item: 44362 },
    title: { th: "ตารางบอสโลก (Asia)", en: "World boss schedule (Asia)" },
    lead: { th: "เวลาเกิดบอสโลกของเซิร์ฟ Asia จาก Adventurer's Guide ทางการของ Asia แสดงเป็นเวลาไทย", en: "Asia server world boss times from the official Asia Adventurer's Guide, shown in Thai time." },
    sections: [
      {
        kind: "table",
        title: { th: "ตารางรายสัปดาห์ (เวลาไทย UTC+7)", en: "Weekly schedule (Thai time, UTC+7)" },
        head: [{ th: "เวลา", en: "Time" }, { th: "จ.", en: "Mon" }, { th: "อ.", en: "Tue" }, { th: "พ.", en: "Wed" }, { th: "พฤ.", en: "Thu" }, { th: "ศ.", en: "Fri" }, { th: "ส.", en: "Sat" }, { th: "อา.", en: "Sun" }],
        rows: [
          ["00:30", "Karanda + Bulgasal", "Nouver + Sangoon", "Offin + Golden Pig King", "Kutum + Uturi", "Nouver + Sangoon", "-", "Kzarka + Golden Pig King"],
          ["10:00", "Kzarka + Uturi", "Kutum + Golden Pig King", "Nouver + Bulgasal", "Kzarka + Sangoon", "Kutum + Bulgasal", "Karanda + Golden Pig King", "Nouver + Sangoon"],
          ["13:00", "Garmoth", "Garmoth", "Garmoth", "Garmoth", "Garmoth", "Garmoth", "Garmoth"],
          ["14:00", "Kutum + Golden Pig King", "Kzarka + Sangoon", "Karanda + Uturi", "Nouver + Golden Pig King", "Karanda + Uturi", "Kutum + Sangoon", "Kutum + Bulgasal"],
          ["15:00", "-", "-", "-", "-", "-", "-", "Vell"],
          ["16:00", "Rawr-Rawr", "Rawr-Rawr", "Rawr-Rawr", "Rawr-Rawr", "Rawr-Rawr", "Rawr-Rawr", "Rawr-Rawr"],
          ["17:00", "-", "-", "-", "-", "-", "Garmoth", "-"],
          ["18:00", "-", "Quint + Muraka", "-", "-", "-", "Quint + Muraka", "-"],
          ["19:00", "Karanda + Sangoon", "Kzarka + Uturi", "Kutum + Bulgasal", "Kzarka + Sangoon", "Nouver + Golden Pig King", "Karanda + Bulgasal", { th: "Kzarka + Uturi (19:15)", en: "Kzarka + Uturi (19:15)" }],
          ["22:15", "Garmoth", "Garmoth", "Garmoth", "Garmoth", "Garmoth", "-", "Garmoth"],
          ["22:30", "Offin + Uturi", "Nouver + Bulgasal", "-", "Karanda + Uturi", "Offin + Bulgasal", "-", "Nouver + Golden Pig King"],
          ["23:00", "-", "-", { th: "Vell (เที่ยงคืนพฤหัสตามเวลาเซิร์ฟ)", en: "Vell (Thu 00:00 server time)" }, "-", "-", "-", "-"],
        ],
        note: { th: "แปลงจากตารางทางการ (เวลาเซิร์ฟ UTC+8 ลบ 1 ชม.) รูปตารางทางการไม่ได้ระบุเขตเวลา ถ้าในเกมแจ้งไม่ตรง ให้เชื่อในเกม · Sangoon, Bulgasal, Uturi, Golden Pig King อาจกลายเป็น Dark Bonghwang ได้ตามโอกาส", en: "Converted from the official table (UTC+8 server time minus 1 h); the official image gives no time zone, so trust in-game alerts if they differ. Sangoon, Bulgasal, Uturi and Golden Pig King can be replaced by Dark Bonghwang at a chance." },
      },
      {
        kind: "table",
        title: { th: "บอสและของเด่น", en: "Bosses and notable loot" },
        head: [{ th: "บอส", en: "Boss" }, { th: "ที่อยู่", en: "Location" }, { th: "ของเด่น", en: "Notable loot" }],
        rows: [
          ["Kzarka", "Serendia Shrine", { th: "อาวุธหลัก Kzarka", en: "Kzarka main weapon" }],
          ["Nouver", "Tyrant Hill, Valencia", { th: "อาวุธรอง Nouver", en: "Nouver sub-weapon" }],
          ["Karanda", "Karanda Ridge, Calpheon", { th: "อาวุธ Awakening Dandelion", en: "Dandelion awakening weapon" }],
          ["Kutum", "Scarlet Sand Chamber, Valencia", { th: "อาวุธรอง Kutum", en: "Kutum sub-weapon" }],
          ["Offin", "Mirumok Ruins, Kamasylvia", { th: "อาวุธ Offin Tett's Light", en: "Offin Tett's Light weapon" }],
          ["Garmoth", "Garmoth's Nest, Drieghan", { th: "หัวใจการ์มอท (ได้ของ 3 ครั้ง/สัปดาห์ บน NA/EU)", en: "Garmoth's Heart (loot 3 times/week on NA/EU)" }],
          ["Quint / Muraka", "Calpheon", { th: "Mutant Enhancer, Dim Ogre Ring (Muraka) อยู่ 15 นาที", en: "Mutant Enhancers, Dim Ogre Ring (Muraka); 15 minutes" }],
          ["Vell", "Vell's Realm (sea)", { th: "หัวใจเวล ตีด้วยปืนใหญ่เรือเท่านั้น", en: "Vell's Heart; ship cannons only" }],
          ["Rawr-Rawr", "Narcion", { th: "เควสรายสัปดาห์: Contribution EXP 300 + กล่องรางวัล", en: "Weekly quest: 300 Contribution EXP + reward box" }],
        ],
      },
      {
        kind: "list",
        title: { th: "รางวัลทำงานยังไง", en: "How rewards work" },
        items: [
          { th: "ได้ของตามดาเมจที่ทำ (มีดวงด้วย) HP บอสใช้ร่วมกันทุกเซิร์ฟ", en: "Loot depends on damage dealt (with some luck); boss HP is shared across servers." },
          { th: "บอสหายไปหลัง 30 นาที (Quint / Muraka 15 นาที)", en: "Bosses despawn after 30 minutes (Quint / Muraka 15)." },
          { th: "ตั้งแต่ 12 พ.ย. 2026 ชุดเกียร์บอสดรอปจาก World/Field Boss ตามอันดับดาเมจ", en: "Since 12 Nov 2026, boss gear outfits drop from world/field bosses by contribution rank." },
          { th: "ตั้งเตือนบอสล่วงหน้า 5, 15 หรือ 30 นาทีได้ในเกม", en: "You can set boss alerts 5, 15 or 30 minutes ahead in-game." },
        ],
      },
    ],
    refs: [{ item: 44362 }],
    sources: [
      { label: "Asia Adventurer's Guide: World Boss Raid", url: "https://blackdesert.pearlabyss.com/Asia/en-US/Game/Wiki?_masterWikiNo=66", date: "2026-10-30" },
      { label: "Adventurer's Guide: World Bosses", url: W(83), date: "2026-10-29" },
      { label: "Asia notice: Oct 29 update (Rawr-Rawr)", url: ASIA(19985), date: "2026-10-29" },
      { label: "Asia notice: Nov 12 update (boss outfits)", url: ASIA(20041), date: "2026-11-12" },
    ],
    codexPath: "bosstimer/",
  },
];
