// Locations for the remaining logs (Crow Merchants, Shakatu, Old Moon, Justin, Storybook, Eyes 1-5).
// Source: BlackDesertFoundry log guides (read 14 Nov 2026). Videos: player uploads on YouTube.
import type { Media, Step } from "./adventure-log-places";

const s = (th: string, en: string, atTh?: string, atEn?: string, npc?: string): Step => ({
  do: { th, en },
  at: atTh ? { th: atTh, en: atEn ?? atTh } : undefined,
  npc,
});
const SHRINE = ["ESC > Adventure (F5) > Black Shrine > เลือกบอส > Start Battle", "ESC > Adventure (F5) > Black Shrine > pick a boss > Start Battle"] as const;
const RIFT = ["ESC > Adventure (F5) > Dark Rift หรือดูบนแผนที่ (M)", "ESC > Adventure (F5) > Dark Rift, or the world map (M)"] as const;

export const STEPS_MORE: Record<string, Step[]> = {
  /* ---------------- Emma (remaining chapters) ---------------- */
  "emma:c1": [s("จบ Igor Bartali's Adventures เล่ม V แล้วกดรับ", "Finish Igor Bartali's Adventures Volume V, then claim", "ดูสถานที่ในเช็กลิสต์ Igor เล่ม V ด้านบน", "See Igor Volume V in this checklist for locations")],
  "emma:c9": [
    s("ล่า Jigwi (Hard) ตามประกาศทางการ", "Defeat Jigwi (Hard), per the official note", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)"),
    s("ไกด์ผู้เล่นบอก Dastard Bheg ใน Dark Rift ให้เช็กเงื่อนไขในเกม", "Player guides say Dastard Bheg in the Dark Rift; check in game", RIFT[0], RIFT[1]),
  ],
  "emma:c10": [
    s("ล่า Bulgasal (Hard) ตามประกาศทางการ", "Defeat Bulgasal (Hard), per the official note", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)"),
    s("ไกด์ผู้เล่นบอก Dim Tree Spirit ใน Dark Rift", "Player guides say Dim Tree Spirit in the Dark Rift", RIFT[0], RIFT[1]),
  ],
  "emma:c11": [
    s("ล่า Uturi (Hard) ตามประกาศทางการ", "Defeat Uturi (Hard), per the official note", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)"),
    s("ไกด์ผู้เล่นบอก Ferrid ใน Dark Rift", "Player guides say Ferrid in the Dark Rift", RIFT[0], RIFT[1]),
  ],
  "emma:c12": [
    s("ล่า Bihyung (Hard) ตามประกาศทางการ", "Defeat Bihyung (Hard), per the official note", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)", "ESC > Adventure (F5) > Black Shrine > Hwanghae (Party)"),
    s("ไกด์ผู้เล่นบอก Ahib Griffon ใน Dark Rift", "Player guides say Ahib Griffon in the Dark Rift", RIFT[0], RIFT[1]),
  ],
  "emma:c13": [s("รับรางวัลบท 1-12 ครบ แล้วคุยกับ Black Spirit", "Claim Ch. 1-12, then talk to the Black Spirit", "ที่ไหนก็ได้ (กด ,)", "Anywhere (press ,)", "Black Spirit")],
  /* ---------------- Rulupee ---------------- */
  "rulupee:c1": [
    s("ทำเควสสะสมให้ถึง 101 / 150 / 255 / 400 / 601 เควส แล้วกดรับทีละบท", "Reach 101 / 150 / 255 / 400 / 601 completed quests, claiming each chapter", "ดูจำนวนเควสที่ทำแล้วด้านล่างของหน้าต่างเควส (กด O) เควสรายวัน/รายสัปดาห์ไม่นับ", "The count is at the bottom of the Quest window (O); repeatable quests don't count"),
  ],
  "rulupee:c6": [s("ครบ 850 เควส แล้วรับเควสลับ Discreet Secret... จาก Black Spirit", "Reach 850 quests, then take Discreet Secret... from the Black Spirit", "ที่ไหนก็ได้ (กด , คุยกับ Black Spirit)", "Anywhere (press , for the Black Spirit)", "Black Spirit")],
  "rulupee:c7": [
    s("ครบ 1,004 เควส + เควส Exciting Secret...", "1,004 quests + Exciting Secret...", "Black Spirit", "Black Spirit", "Black Spirit"),
    s("ครบ 4,921 / 9,999 / 19,235 เควส + เควส Special Secret I / II / III", "4,921 / 9,999 / 19,235 quests + Special Secret I / II / III", "Black Spirit", "Black Spirit", "Black Spirit"),
    s("ครบ 29,999 เควส + เควส A Surprise Secret... (ได้ฉายา 30K)", "29,999 quests + A Surprise Secret... (30K title)", "Black Spirit", "Black Spirit", "Black Spirit"),
  ],
  /* ---------------- Fughar ---------------- */
  "fughar:v1": [
    s("พบพ่อค้ากลางคืน Patrigio", "Meet Patrigio, the night vendor", "เมืองไหนก็ได้ ช่วง 4 ทุ่มถึง 7 โมงเช้าในเกม", "Any town, 10 PM to 7 AM in-game", "Patrigio (night vendor)"),
    s("จบสายเควส Bright Red Apple (5 เควส)", "Finish the Bright Red Apple questline (5 quests)", "เมือง Calpheon", "Calpheon City", "Milano Belucci > Lindsiyana Herba > Ahr > a noble (Calpheon)"),
    s("ความรู้คน Calpheon: ชนชั้นสูง 16, ประชาชน 18, พ่อค้า 21", "Calpheon knowledge: upper class 16, citizens 18, merchants 21", "กด H > Character > People of Calpheon", "H > Character > People of Calpheon"),
    s("เอา Nutritious Haystack ไปขายที่ Heidel", "Take a Nutritious Haystack to Heidel's trader", "Northern Wheat Plantation แล้วไป Heidel", "Northern Wheat Plantation, then Heidel", "Norma Leight (Northern Wheat Plantation)"),
    s("ล่า 777 ตัว (ตีหลุมศพเรียกมอนสเตอร์)", "Kill 777 (attack the Traitor's Gravestones to spawn them)", "Calpheon > รอบ Node Marie Cave / Traitor's Graveyard", "Calpheon > around Marie Cave / Traitor's Graveyard"),
  ],
  "fughar:v2": [
    s("จบสายเควส Sweet Sunlight (5 เควส)", "Finish the Sweet Sunlight questline (5 quests)", "Keplan > Glish > Tarif > Altinova", "Keplan > Glish > Tarif > Altinova", "Greco Gorda (Keplan), Freharau / Larc / Kanna (Glish), Brorum (Tarif), Quina (Altinova)"),
    s("ความรู้ช่างตีเหล็กในตำนาน 3 คน (ล่ามอนสเตอร์ Helm's Post บางส่วน)", "Knowledge of the 3 Legendary Blacksmiths (some from Helm's Post monsters)", "Mediah > Altinova", "Mediah > Altinova", "Tulem (Altinova)"),
    s("เล่นมินิเกม Amity แล้วคุยกับ Neruda Shen", "Play the amity minigame and chat with Neruda Shen", "Mediah > Altinova", "Mediah > Altinova", "Neruda Shen (Altinova)"),
    s("ล่า 777 ตัวใน Kratuga (ต้องมี Black Spirit's Claw Piece หรือ Unsealed Ruins Slate)", "Kill 777 in Kratuga (needs a Black Spirit's Claw Piece or Unsealed Ruins Slate)", "Mediah > ถ้ำ Hasrah Ruins > กำแพงด้านในสุด", "Mediah > Hasrah Ruins cave > the wall deep inside"),
    s("ต่อ Node จาก Calpheon ถึง Altinova (ราว 18 CP)", "Connect Calpheon to Altinova by nodes (about 18 CP)", "เส้นทาง Node Calpheon > Mediah", "Calpheon > Mediah node route"),
  ],
  "fughar:v3": [
    s("จบสายเควส Crow's Nest ภาค 1-2 (เริ่ม Lv 56)", "Finish the Crow's Nest questline parts 1-2 (from Lv 56)", "รับจาก Black Spirit", "From the Black Spirit", "Black Spirit"),
    s("ใส่ Undying Crow's Insignia", "Equip the Undying Crow's Insignia", "ได้จากบททดสอบ Pit of the Undying", "From the Pit of the Undying trial"),
    s("แลกเงิน 1 พันล้านเป็น Gold Bar 1,000G 10 แท่ง ให้ Black Spirit ดู แล้วแลกคืน", "Swap 1B silver for 10 x 1,000G gold bars, show the Black Spirit, swap back", "Storage Keeper เมืองไหนก็ได้", "Any Storage Keeper", "Storage Keeper, Black Spirit"),
    s("กลับไปรายงาน Fughar", "Report back to Fughar", "Fughar (กด ESC > Find NPC)", "Fughar (ESC > Find NPC)", "Fughar"),
  ],
  /* ---------------- Caphras ---------------- */
  "caphras:v2": [
    s("ไปจุดที่พบ Caphras (แสงสีฟ้า)", "Go where Caphras was found (blue light)", "Kamasylvia > Grana > ต้น Kamasylvia", "Kamasylvia > Grana > the Kamasylvia tree"),
    s("ล่า Feather Wolf 150 ตัว", "Kill 150 Feather Wolves", "Kamasylvia > Navarn Steppe", "Kamasylvia > Navarn Steppe"),
    s("ซื้อสินค้าการค้า Eastern Culture Beyond the Desert ไปขายที่ Valencia", "Buy Eastern Culture Beyond the Desert and sell it in Valencia", "ซื้อที่ Tarif ขายที่ผู้จัดการการค้าเมือง Valencia", "Buy in Tarif, sell to Valencia City's trade manager", "Brorum (Tarif)"),
    s("ความรู้ Valencia: Expedition Log 7 + Valencia Great Desert 21", "Valencia knowledge: Expedition Log 7 + Great Desert 21", "กด H > Topography / Character", "H > Topography / Character"),
    s("ล่า 1,000 ตัว", "Kill 1,000", "Valencia > Pila Ku Jail", "Valencia > Pila Ku Jail"),
  ],
  "caphras:v3": [
    s("เอา Cadry Ring ให้ดู", "Show a Cadry Ring", "Valencia > Node Cadry Ruins", "Valencia > Cadry Ruins node", "Anne Laker (Cadry Ruins node manager)"),
    s("จบ 3 เควส Velia: Remnants of Someone, Traces He Left, Tragedy Revealed", "Finish 3 Velia quests: Remnants of Someone, Traces He Left, Tragedy Revealed", "Balenos > Velia (Titanium Ore, Powder of Rift, Black Stone Powder ซื้อตลาดได้)", "Balenos > Velia (Titanium Ore, Powder of Rift, Black Stone Powder from the market)", "Zaaira, Alustin, Eileen / Clorince (Velia)"),
    s("ความรู้ Cron Castle 3 อย่าง: Gold Coin, Cron Castle Fall, Altar", "Cron Castle knowledge: Gold Coin, Cron Castle Fall, Altar", "Velia / Cron Castle", "Velia / Cron Castle", "Igor Bartali (Velia), Tranan Underfoe (Velia, 501 amity)"),
    s("ดำน้ำหาแสงฟ้าที่ Caphras ถูกผนึก", "Dive to the blue light where Caphras was sealed", "ทะเลตะวันตกของ Cron Castle ใต้น้ำ", "Underwater, just west of Cron Castle"),
    s("ประวัติเกาะ Iliya", "History of Iliya Island", "เกาะ Iliya > Iliya Cliff", "Iliya Island > Iliya Cliff", "Diega (Iliya Island)"),
  ],
  "caphras:v1": [
    s("ตามหา Lutragon", "Find Lutragon", "Kamasylvia > Muiquun ฝั่งตะวันออกข้าง Stable Keeper", "Kamasylvia > Muiquun, east side by the Stable Keeper", "Lutragon (Muiquun)"),
    s("แกะผนึก Ancient Spellbook (ต้องมี Ancient Magic Tome, Energy 50)", "Break the seal on the Ancient Spellbook (Ancient Magic Tome, 50 Energy)", "Mediah > Tarif > บ้านที่มี Forbidden Books กลางห้อง", "Mediah > Tarif > the house with the Forbidden Books"),
    s("รับ Ancient Spellbook", "Get the Ancient Spellbook", "Valencia City", "Valencia City", "Kiyak (Valencia City)"),
    s("ความรู้ O'dyllita (NPC 14 คน)", "O'dyllita knowledge (14 NPC topics)", "กด H > Character > Shadow of O'dyllita", "H > Character > Shadow of O'dyllita"),
    s("กด Black Shard", "Interact with the Black Shard", "Kamasylvia > Grana > ต้น Kamasylvia", "Kamasylvia > Grana > the Kamasylvia tree"),
  ],
  "caphras:v4": [
    s("หาของขวัญหลังอาคาร", "Find the gift behind the building", "เกาะ Iliya", "Iliya Island", "Barbara (Iliya Island)"),
    s("ส่ง Rusted Headband", "Deliver the Rusted Headband", "Serendia > ทางเข้า Kzarka Shrine", "Serendia > Kzarka Shrine entrance", "Orwen (Serendia)"),
    s("ไปห้องลับในแล็บ Caphras", "Visit the secret room in Caphras' lab", "Caphras Cave > ห้องลับ (เศษสีดำ)", "Caphras Cave > secret room (black shard)"),
    s("ล่า 1,500 ตัว + ความรู้ Cadry Summoning Stone", "Kill 1,500 + Cadry Summoning Stone knowledge", "Valencia > Cadry Ruins", "Valencia > Cadry Ruins"),
    s("หาความทรงจำของ Caphras", "Find Caphras' Memory", "Valencia City > สวนในวังหลวง", "Valencia City > Royal Palace gardens"),
    s("คุยกับ Ahib ที่ Star's End", "Talk to the Ahib at Star's End", "Calpheon > เนินใกล้ Star's End (Mountain of Sanctity)", "Calpheon > the hill near Star's End (Mountain of Sanctity)", "O'Arma"),
  ],
  /* ---------------- Deve (Shakatu) ---------------- */
  "deve:v1": [
    s("ส่งแร่ 5 ชนิด", "Hand in 5 different ores", "ซื้อตลาดกลาง หรือขุดเอง", "Central Market or mine them", "Deve, Storage Keeper (Altinova) > Chat"),
    s("ส่งผง 3 ชนิด", "Hand in 3 different powders", "ตลาดกลาง", "Central Market", "Deve (Altinova)"),
    s("ส่ง Gold Bar 1G / 10G / 100G / 1,000G", "Hand in 1G / 10G / 100G / 1,000G gold bars", "แลกเงินที่ Storage Keeper", "Exchange silver at a Storage Keeper", "Deve (Altinova)"),
    s("ส่งดอกไม้ 7 ชนิด (ได้น้ำหนัก +1 LT)", "Hand in 7 different flowers (+1 LT)", "ตลาดกลาง หรือเก็บที่ Grana / Navarn Steppe / กุหลาบรอบ Calpheon", "Market, or gather around Grana / Navarn Steppe / roses near Calpheon", "Deve (Altinova)"),
  ],
  "deve:v2": [
    s("ส่งเก้าอี้ 5 แบบ (ของ Pearl Shop ไม่นับ)", "Hand in 5 different chairs (Pearl Shop chairs don't count)", "ตลาดกลาง หรือร้านเฟอร์นิเจอร์ Velia / Calpheon / Heidel / Altinova", "Market, or furniture vendors in Velia / Calpheon / Heidel / Altinova", "Deve (Altinova)"),
    s("ส่งโคมระย้า 3 อัน", "Hand in 3 chandeliers", "เมือง Calpheon (ถูกสุด)", "Calpheon City (cheapest)", "Annabella Belucci, candlestick vendor (Calpheon)"),
    s("ส่งเตียง 2 เตียง และหัวสัตว์สตัฟฟ์ 2 ชิ้น (ได้น้ำหนัก +1 LT)", "Hand in 2 beds and 2 stuffed heads (+1 LT)", "ตลาดกลาง หรือร้านเฟอร์นิเจอร์ในเมือง", "Market or town furniture vendors", "Deve (Altinova)"),
  ],
  "deve:v3": [
    s("ปะการัง 3, ยา Seal + Webfoot, เบ็ดไม่ตีบวก 3, กุญแจทองแดง/เงิน/ทอง", "3 corals, a Seal elixir + a webfoot, 3 un-enhanced rods, bronze/silver/gold keys", "ตลาดกลาง; Webfoot จาก Naga ตะวันตกเฉียงเหนือของ Glish; กุญแจทองแดงจากเควส Urahr (Glish)", "Market; webfoot from Swamp Nagas northwest of Glish; bronze key from Urahr's quest (Glish)", "Morco (behind Deve): 100 silver keys to 1 gold key daily"),
    s("กับดัก 4, ของสวยงาม 3, ของความรัก 2, เหล้า 5, ไอเทม Energy 5", "4 traps, 3 presentable items, 2 love items, 5 drinks, 5 energy items", "ตลาดกลางเป็นหลัก; กับดักทำที่ Siege Weapon Workshop Lv 2 (Altinova)", "Mostly the market; traps from a Lv 2 Siege Weapon Workshop (Altinova)", "Deve (Altinova)"),
    s("ไอเทม Ogre 2, ของความทรงจำ 1, ปะการัง Golden Sun, เห็ด 3, เครื่องปั้น 3, Pure 3, ชุด Calpheon Noble, น้ำตา 1, ของมิตรภาพ 1, ของจิปาถะ 5", "2 ogre items, 1 memory item, Golden Sun coral, 3 mushrooms, 3 pottery, 3 Pure items, a Calpheon Noble outfit, a tear, a friendship token, 5 misc items", "ตลาดกลางเป็นหลัก ของไม่ถูกใช้หมด (แค่ให้ดู)", "Mostly the market; items are only shown, not consumed", "Deve (Altinova)"),
  ],
  /* ---------------- Dorin (Shakatu) ---------------- */
  "dorin:v1": [
    s("ส่ง Black Stone 30, Reform Stone 1, อาวุธเขียว DUO 1, เกราะเขียว DUO 1 (ของจะหายไป ห้ามมี Gem)", "Hand in 30 Black Stones, 1 Reform Stone, a DUO green weapon, a DUO green armor (consumed, no gems)", "Mediah > ถ้ำ Helm's Post ชั้นล่างสุด (เดินลงบันได)", "Mediah > Helm's Post cave, lowest floor (follow the stairs down)", "Dorin Morgrim"),
  ],
  "dorin:v2": [
    s("บท 1-3 (ข้ามได้): อาวุธบอส +15, เกราะบอส PRI, อาวุธบอส PRI", "Ch. 1-3 (skippable): +15 boss weapon, PRI boss armor, PRI boss weapon", "Helm's Post ชั้นล่างสุด", "Helm's Post, lowest floor", "Dorin Morgrim"),
    s("บท 4-5: เกราะบอส DUO และอาวุธบอส DUO (Kzarka / Offin Tett / Nouver / Kutum ไม่รับอาวุธ Awakening)", "Ch. 4-5: DUO boss armor and DUO boss weapon (Kzarka / Offin Tett / Nouver / Kutum; no awakening weapons)", "Helm's Post ชั้นล่างสุด", "Helm's Post, lowest floor", "Dorin Morgrim"),
  ],
  /* ---------------- Alustin (Shakatu) ---------------- */
  "alustin:v1": [
    s("ทำ Caphras Stone (Ancient Spirit Dust 5 + Black Stone 1) ส่ง 1 / 5 / 10 ก้อน", "Make Caphras Stones (5 Ancient Spirit Dust + 1 Black Stone) and hand in 1 / 5 / 10", "กด L > Simple Alchemy", "Press L > Simple Alchemy", "Alustin (Velia)"),
    s("เล่ม 1: Clear Liquid Reagent 1,500, Resurrection Elixir 1,000, Elixir of Energy 1,000, Pure Powder Reagent 1,500", "Book 1: 1,500 Clear Liquid Reagent, 1,000 Resurrection Elixir, 1,000 Elixir of Energy, 1,500 Pure Powder Reagent", "ปรุงที่ Alchemy Tool ในบ้าน (Beginner)", "A residence Alchemy Tool (Beginner)", "Alustin (Velia)"),
    s("เล่ม 2: Fisher's Elixir, Sinner's Blood, Metal Solvent, Tenacious Origin of Life", "Book 2: Fisher's Elixir, Sinner's Blood, Metal Solvent, Tenacious Origin of Life", "Alchemy Apprentice ถึง Skilled", "Alchemy Apprentice to Skilled", "Alustin (Velia)"),
    s("เล่ม 3: Oil of Corruption, Oil of Fortitude, Elixir of Remarkable Will, Fierce Demihuman Hunting Elixir", "Book 3: Oil of Corruption, Oil of Fortitude, Elixir of Remarkable Will, Fierce Demihuman Hunting Elixir", "Alchemy Skilled ถึง Professional", "Alchemy Skilled to Professional", "Alustin (Velia)"),
  ],
  /* ---------------- Pavino (Old Moon) ---------------- */
  "pavino:b1": [
    s("ล่า Red Nose และ Muskan", "Defeat Red Nose and Muskan", RIFT[0], RIFT[1]),
    s("ล่า Dastard Bheg และ Dim Tree Spirit", "Defeat Dastard Bheg and Dim Tree Spirit", RIFT[0], RIFT[1]),
    s("ล่า Ferrid และ Ahib Griffon", "Defeat Ferrid and Ahib Griffon", RIFT[0], RIFT[1]),
  ],
  "pavino:b2": [
    s("รอย Pyresh 1: พิมพ์ 1321 ในแชท", "Trace 1: type 1321 in chat", "Calpheon > ยอดหอระฆัง กระโดดลงขอบฝั่งใต้", "Calpheon > top of the Bell Tower, drop to the south ledge"),
    s("รอย 2: พิมพ์ 6", "Trace 2: type 6", "เหนือ Florin ใกล้จุดเกิด Karanda บนหินยอดเขา", "North of Florin near the Karanda spawn, on a rock top"),
    s("รอย 3: พิมพ์ .+.", "Trace 3: type .+.", "ใต้ Keplan > ถ้ำ Marie Cave ก่อนโค้งซ้ายแรก", "South of Keplan > Marie Cave, before the first left bend"),
    s("รอย 4: พิมพ์ 11", "Trace 4: type 11", "Mediah > เกาะใกล้ Node Splashing Point (ตะวันออกเฉียงใต้ของ Tarif)", "Mediah > island near Splashing Point (southeast of Tarif)"),
    s("รอย 5: พิมพ์ 45", "Trace 5: type 45", "ปราสาท Mediah > ห้องบัลลังก์ หน้าต่างกลางด้านหลัง", "Mediah Castle > throne room, back middle window"),
    s("รอย 6: พิมพ์ 4198", "Trace 6: type 4198", "Valencia > หน้าผาเหนือ Barhan Gateway ทางฝั่งตะวันออก", "Valencia > cliff north of Barhan Gateway, east path"),
    s("รอย 7-8: พิมพ์ 11 และ 67", "Traces 7-8: type 11 and 67", "Ibellab Oasis และตะวันตกเฉียงใต้ของทะเลสาบ Gavinya Great Crater", "Ibellab Oasis, and southwest of the lake at Gavinya Great Crater"),
    s("รอย 9-10: พิมพ์ 68 และ 0", "Traces 9-10: type 68 and 0", "ในหอ Rakshan Observatory และหน้าอาคารใน Arehaza", "Inside Rakshan Observatory, and outside a building in Arehaza"),
  ],
  "pavino:b3": [
    s("ไปที่ที่เต็มไปด้วยความทรงจำ", "Go to the place tainted by memory", "Calpheon > ยอดหลังคาหอระฆัง (ขึ้นบันไดลิง)", "Calpheon > Bell Tower roof (via the ladder)"),
    s("ไปหารักที่สองของเธอ", "Find her second love", "ตะวันตกเฉียงใต้ของเมือง Calpheon", "Southwest Calpheon City", "Artist (Calpheon)"),
    s("ความรู้ Exploration I ครบ", "Complete Exploration I knowledge", "กด H > Academics > Exploration I", "H > Academics > Exploration I"),
    s("วิ่งจาก Florin ถึง Calpheon ใน 2 นาที", "Ride from Florin to Calpheon in 2 minutes", "Calpheon ไป Florin แล้ววิ่งกลับ", "Calpheon to Florin and back", "Rubin (Calpheon), Herar, Stable Keeper (Florin)"),
    s("หาตัวเอกของเรื่อง", "Find the main character", "Northern Wheat Plantation เหนือเมือง Calpheon", "Northern Wheat Plantation, north of Calpheon City", "Norma Leight"),
  ],
  "pavino:b4": [
    s("ส่ง DUO Rainbow Coral Ring, DUO Tree Spirit Belt, DUO Ancient Weapon Core, TRI Kagtum Submission Ring, DUO Orkinrad's Belt + DUO Ring of Cadry", "Hand in DUO Rainbow Coral Ring, DUO Tree Spirit Belt, DUO Ancient Weapon Core, TRI Kagtum Submission Ring, DUO Orkinrad's Belt + DUO Ring of Cadry", "Serendia > Heidel (เครื่องประดับซื้อตลาด)", "Serendia > Heidel (buy the accessories on the market)", "Dora Fonti, Jeweler (Heidel)"),
  ],
  /* ---------------- Lamute ---------------- */
  "lamute:b1": [
    s("เล่ม 1: ส่ง Milk, Noc Ingot, Honey Wine หรือโจ๊กไก่, พิมพ์ 999, เปิด Secret Book", "Book 1: hand in Milk, a Noc Ingot, Honey Wine or chicken porridge, type 999, open the Secret Book", "O'dyllita > Grandiha (กองหนังสือบนระเบียงเลยน้ำพุ)", "O'dyllita > Grandiha (book pile on the balcony past the fountain)", "Benns Carter, Benns Euron, Benns Chasey, Benns Ruberen"),
    s("เล่ม 2: ผลไม้ตามราศีให้ Dream Doctor, คุย Monmunia ในร่าง Papu, Porong Floral Wreath, Best Flower", "Book 2: zodiac fruit for the Dream Doctor, chat with Monmunia as a Papu, Porong Floral Wreath, Best Flower", "เกาะ Papua Crinea (ท่าเรือเหนือ)", "Papua Crinea (north wharf)", "Dream Doctor, Benns Moanna, Monmunia"),
    s("เล่ม 3: Flower Filled With Determination, ฝึกปู 2 วัน แล้ว 5 วัน", "Book 3: Flower Filled With Determination, crab training for 2 then 5 dailies", "Papua Crinea > Garden of Birth / หาดตะวันออก", "Papua Crinea > Garden of Birth / east beach", "Muadiya, Commander Garania"),
    s("เล่ม 4-5: Moon Village, Abyssal Pearl Fishism, จดหมายแนะนำ, สอบ Otter Military Academy (คำตอบ Craorshur / Papu / Thousand Year War), ฝึก Stoneback Crab", "Books 4-5: Moon Village, Abyssal Pearl Fishism, recommendation letter, Otter Military Academy exam (answers Craorshur / Papu / Thousand Year War), Stoneback Crab training", "Papua Crinea > ถ้ำหาดตะวันตก, เกาะเล็กฝั่งตะวันตก", "Papua Crinea > west beach cave, small west island", "Berdao, Puranuo, Pikeo, Ticirio, Digrio"),
  ],
  /* ---------------- Storybook ---------------- */
  "storybook:v1": [s("ล่าบอสตัวไหนก็ได้ในระดับ 1", "Defeat any boss on difficulty 1", SHRINE[0], SHRINE[1])],
  "storybook:v2": [s("ล่าบอสในระดับถัดไป (บอส Sun / Moon / Earth)", "Defeat bosses on the next difficulty (Sun / Moon / Earth bosses)", SHRINE[0], SHRINE[1])],
  "storybook:v3": [s("ล่าบอสครบในกลุ่ม Calamity 1-3", "Defeat the bosses on Calamity 1-3", SHRINE[0], SHRINE[1])],
  "storybook:v4": [s("ล่าบอสครบในกลุ่ม Calamity 4-6", "Defeat the bosses on Calamity 4-6", SHRINE[0], SHRINE[1])],
  "storybook:v5": [s("ล่าบอสครบในกลุ่ม Calamity 7-9", "Defeat the bosses on Calamity 7-9", SHRINE[0], SHRINE[1])],
  /* ---------------- Justin ---------------- */
  "justin:p1": [
    s("หน้า 1", "Page 1", "Port Epheria > ยอดหอ", "Port Epheria > top of the tower", "Fabri (Port Epheria)"),
    s("หน้า 2", "Page 2", "เมือง Calpheon > ยอดหอ", "Calpheon City > top of the tower"),
    s("หน้า 3", "Page 3", "Glish > ในโรงเตี๊ยม", "Glish > inside the inn", "Deborah (Glish)"),
    s("หน้า 4", "Page 4", "Heidel > กำแพงปราสาท ตรงข้าม Skill Instructor", "Heidel > castle wall, opposite the Skill Instructor"),
  ],
  "justin:p5": [
    s("หน้า 5", "Page 5", "Mediah > Abandoned Iron Mine > ข้างเต็นท์", "Mediah > Abandoned Iron Mine > by the tent"),
    s("หน้า 6", "Page 6", "Altinova > บันไดข้างต้นไม้ใหญ่ทางไป Neruda Shen", "Altinova > stairs by the big tree toward Neruda Shen"),
    s("หน้า 7", "Page 7", "เมือง Valencia > ฝั่งตะวันตกของสนามกีฬาวงกลม", "Valencia City > west side of the round stadium"),
    s("หน้า 8", "Page 8", "Arehaza > ข้างประภาคาร", "Arehaza > next to the lighthouse"),
  ],
  "justin:p9": [
    s("หน้า 9", "Page 9", "Ulukita > Asparkan Castle เหนือ Salih", "Ulukita > Asparkan Castle, above Salih"),
    s("หน้า 10", "Page 10", "Ulukita > ถ้ำ Muzgar บนโครงไม้ทางเข้า", "Ulukita > Muzgar cave entrance, top of the wooden structures"),
    s("หน้า 11", "Page 11", "Mountain of Eternal Winter > Eilton ข้างบ้าน", "Mountain of Eternal Winter > Eilton, by the house", "Ulan (Eilton)"),
    s("หน้า 12", "Page 12", "ทางเข้า Camp Balacs", "Camp Balacs entrance"),
  ],
  "justin:p13": [
    s("หน้า 13", "Page 13", "Drieghan > Duvencrune > หลังคาหลังอาคาร Akasak", "Drieghan > Duvencrune > rooftop behind Akasak's building"),
    s("หน้า 14", "Page 14", "ยอดอาคารข้ามสะพานจาก Night Crow Post", "Top of the building across the bridge from Night Crow Post"),
    s("หน้า 15", "Page 15", "O'dyllita > O'draxxia > บันได", "O'dyllita > O'draxxia > the stairs", "Faimal Arhan (O'draxxia)"),
    s("หน้า 16", "Page 16", "Starry Midnight Port > กำแพงพัง", "Starry Midnight Port > the broken wall"),
    s("หน้า 17", "Page 17", "Kamasylvia > Grana > ยอดหอกลาง", "Kamasylvia > Grana > top of the central tower"),
  ],
  /* ---------------- Eyes of Adventure 1-5 ---------------- */
  "eyes:v1": [
    s("ถาม Slowkkebi เรื่อง Mirrorkkebi", "Ask Slowkkebi about Mirrorkkebi", "Dokkebi Forest ข้าง Dokkebi Princess", "Dokkebi Forest, next to the Dokkebi Princess", "Slowkkebi"),
    s("ตก Pollack 5 ตัว", "Catch 5 Pollack", "ท่าเรือน้ำเค็ม เช่น Solgaji", "A saltwater dock, e.g. Solgaji"),
    s("พิมพ์ The Painting is really beautiful", "Chat: The Painting is really beautiful", "Node Shimnidae Forest", "Shimnidae Forest node", "Shin Taesun (node manager)"),
    s("ดูการแสดง Kkebibat", "Watch the Kkebibat show", "เนื้อเรื่อง Tale of Duoksini (LoML)", "Tale of Duoksini storyline (LoML)"),
    s("กดผ้าซักที่ลอยมา", "Interact with the drifting laundry", "ริมแม่น้ำตะวันตกเฉียงใต้ของ Nopsae Byeot", "Riverbank southwest of Nopsae Byeot"),
  ],
  "eyes:v2": [
    s("กดยอดเขาตอน 7 โมงเช้าในเกม", "Interact with the peak at 7 AM in-game", "ภูเขาตะวันออกของศาล Sangoon", "Mountain east of the Sangoon shrine"),
    s("ตัดหน่อไม้ 5 ด้วยขวานตัดไม้", "Gather 5 Bamboo Sprouts with an axe", "Shimnidae Forest", "Shimnidae Forest"),
    s("กดแท่นไห 5 ใบ", "Interact with the 5-pot Jangdok platform", "หน้าบ้าน Miss Myo ใน Nopsae Byeot", "Outside Miss Myo's house, Nopsae Byeot", "Miss Myo"),
    s("เก็บข้าว 100", "Gather 100 Rice", "นาข้าวเหลือง Nopsae Byeot", "Yellow fields, Nopsae Byeot"),
    s("กดวัตถุใต้น้ำตก", "Interact with the object under the waterfall", "น้ำตกเหนือ Hanji County", "Waterfall north of Hanji County"),
  ],
  "eyes:v3": [
    s("กด Prepared Snack ตอนบ่าย 3 ในเกม", "Interact with the Prepared Snack at 3 PM in-game", "Nopsae Byeot", "Nopsae Byeot"),
    s("เก็บ Reed 300", "Gather 300 Reed", "ดงต้นอ้อขาว Node Gowun Plateau", "White reeds, Gowun Plateau node"),
    s("เก็บดอก Maehwa จากต้นสีแดง", "Gather a Maehwa from the red trees", "ใกล้ Donghae Office หมู่บ้าน Nampo Moodle", "Near the Donghae Office, Nampo Moodle Village"),
    s("กดหมา Badugi", "Interact with Badugi the dog", "หมู่บ้าน Nampo Moodle", "Nampo Moodle Village"),
    s("ตก Neon Damselfish 1 ตัว", "Catch a Neon Damselfish", "ท่าเรือ/หาดน้ำเค็มที่ Nampo", "Saltwater dock or beach at Nampo"),
  ],
  "eyes:v4": [
    s("แอบฟังที่กำแพง Donghae Office", "Eavesdrop at the Donghae Office wall", "หมู่บ้าน Nampo Moodle", "Nampo Moodle Village"),
    s("คุยกับ Yoosung", "Talk to Yoosung", "เกาะ Byukgye", "Byukgye Island", "Yoosung"),
    s("ทำ Moodle Gukbap ที่บ้าน (เรียนสูตรก่อน)", "Cook Moodle Gukbap at a residence (learn the recipe first)", "หมู่บ้าน Nampo Moodle", "Nampo Moodle Village", "Wolim (Nampo)"),
    s("ถวายเนื้อวัว 100 ที่รูปปั้น Fox Goddess", "Offer 100 Beef at the Fox Goddess Statue", "ถ้ำ Yeowoo Pass ชั้นล่าง (ไม่ใช่ศาล Gumiho)", "Lower Yeowoo Pass cave (not the Gumiho shrine)"),
    s("แอบฟังข้างผู้จัดการการค้า", "Eavesdrop by the Trade Manager", "หมู่บ้าน Nampo Moodle", "Nampo Moodle Village"),
  ],
  "eyes:v5": [
    s("หาหีบ Dokkebi ครบ 100 ใบ (5 หน้า x 20)", "Find all 100 Dokkebi chests (5 pages x 20)", "Haemo 6, Byukgye 7, Nampo/Shimnidae 23, Hanji/Solgaji 13, Dokkebi Forest 8, Golden Pig Cave/Drybranch 10, Nopsae Byeot/Dalbeol 15, Beombawi/Bari 18", "Haemo 6, Byukgye 7, Nampo/Shimnidae 23, Hanji/Solgaji 13, Dokkebi Forest 8, Golden Pig Cave/Drybranch 10, Nopsae Byeot/Dalbeol 15, Beombawi/Bari 18"),
  ],
};

export const MEDIA_MORE: Record<string, Media> = {
  fughar: { photos: { label: "BlackDesertFoundry: Fughar's Road to Success", url: "https://www.blackdesertfoundry.com/fughars-adventure-journal/" } },
  "fughar:v1": { videos: [{ id: "9Apuu0X03ko", title: "Fughar's Road to Success Vol. 1" }] },
  "fughar:v2": { videos: [{ id: "hUgAi4h8Shw", title: "Fughar's Road to Success Vol. 2" }] },
  "fughar:v3": { videos: [{ id: "4sYpyH5Osfc", title: "Fughar's Adventure Log Book 3 full guide" }] },
  caphras: { photos: { label: "BlackDesertFoundry: Caphras' Record (ภาพทุกบท / every chapter)", url: "https://www.blackdesertfoundry.com/caphras-journal/" } },
  "caphras:v1": { videos: [{ id: "KJrADRolBG4", title: "Caphras Record Book 1" }] },
  "caphras:v2": { videos: [{ id: "raBcsv9MDIw", title: "Caphras Record Book 2 & 3" }] },
  "caphras:v3": { videos: [{ id: "raBcsv9MDIw", title: "Caphras Record Book 2 & 3" }] },
  "caphras:v4": { videos: [{ id: "RVQGFo_L8fw", title: "Caphras Record Book 4" }] },
  deve: { photos: { label: "BlackDesertFoundry: Deve's Encyclopedia (รายการไอเทม / item lists)", url: "https://www.blackdesertfoundry.com/deves-encyclopedia/" } },
  dorin: { photos: { label: "BlackDesertFoundry: Dorin Morgrim's Secrets", url: "https://www.blackdesertfoundry.com/dorin-morgrims-secret-journal/" } },
  alustin: { photos: { label: "BlackDesertFoundry: Alustin's Alchemy (สูตรทุกตัว / every recipe)", url: "https://www.blackdesertfoundry.com/alustins-alchemy-journal/" } },
  pavino: { photos: { label: "BlackDesertFoundry: Pavino Greko (ภาพรอย Pyresh ทุกจุด / every trace)", url: "https://www.blackdesertfoundry.com/pavino-grekos-collection/" } },
  lamute: { photos: { label: "BlackDesertFoundry: Lamute Gang (ภาพทุกบท / every chapter)", url: "https://www.blackdesertfoundry.com/lamute-gangs-adventure-journal/" } },
  storybook: { photos: { label: "BlackDesertFoundry: Boss Storybook", url: "https://www.blackdesertfoundry.com/boss-encyclopedia-guide/" } },
};
