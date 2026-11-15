// Where to go for each Adventure Log step, plus video walkthroughs and illustrated guides
// made by other players. Locations: BlackDesertFoundry and GrumpyGreen guides (read 14 Nov 2026).
// Videos are YouTube uploads by players; they are linked (not embedded) and may predate 2026 patches.
import type { L } from "./content";

export interface Step {
  do: L;
  /** Region > town or node > spot */
  at?: L;
  /** NPC to talk to, with their town */
  npc?: string;
}
export interface Video {
  id: string;
  title: string;
  /** Start time in seconds. */
  t?: number;
  /** Rough upload year when known, to warn about old clips. */
  year?: number;
  lang?: "en" | "fr" | "pt";
}
export interface Media {
  videos?: Video[];
  /** Illustrated written guide (screenshots / map pins). */
  photos?: { label: string; url: string };
}

const s = (th: string, en: string, atTh?: string, atEn?: string, npc?: string): Step => ({
  do: { th, en },
  at: atTh ? { th: atTh, en: atEn ?? atTh } : undefined,
  npc,
});

/** Steps keyed by "logId:volumeId". When present they replace the plain how-to list. */
export const STEPS: Record<string, Step[]> = {
  /* ---------------- Igor Bartali ---------------- */
  "igor:v1": [
    s("ล่า Cyclops 1 ตัว", "Kill 1 Cyclops", "Calpheon > ทุ่ง Cyclops ตะวันออกเฉียงใต้ของ Trent", "Calpheon > Cyclops Land, southeast of Trent"),
    s("ตกปลาเกรดเหลือง 1 ตัว", "Catch a yellow-grade fish", "Balenos > ชายหาดนอกเมือง Velia", "Balenos > the beach outside Velia"),
    s("ล่า Earth Root Nymph จนได้ความรู้", "Kill Earth Root Nymphs for the knowledge", "Calpheon > Node Crioville > ถ้ำใต้ทะเลสาบ Crioville", "Calpheon > Crioville node > cave south of Crioville lake"),
  ],
  "igor:v2": [
    s("ล่าและชำแหละกวาง Elk", "Kill and butcher an Elk", "Calpheon > เนินเขารอบ Behr (ตะวันตกเฉียงเหนือ)", "Calpheon > hills around Behr (northwest)"),
    s("ล่า Giant Brown Bear ด้วยปืน Matchlock", "Matchlock-hunt a Giant Brown Bear", "Calpheon > ตะวันตกของ Treant Forest ทางไป Ash Forest", "Calpheon > west of Treant Forest on the road to Ash Forest"),
    s("ล่าจระเข้น้ำจืดด้วย Matchlock แล้วชำแหละ", "Matchlock-hunt a Freshwater Crocodile and butcher it", "Calpheon > ทะเลสาบ Kaia (ว่ายไปเกาะกลางทะเลสาบ)", "Calpheon > Lake Kaia (swim to the island)"),
    s("ส่ง Magic Tanning Knife", "Hand over a Magic Tanning Knife", "Calpheon > หมู่บ้าน Behr", "Calpheon > Behr", "Likke Behr (Behr)"),
    s("เรียนความรู้ Trent Carpentry Tool (Energy 10)", "Learn Trent Carpentry Tool knowledge (10 Energy)", "เมือง Calpheon > ฝั่งเหนือ", "Calpheon City > north side", "Harden, Trade Manager (Calpheon City)"),
    s("ล่า Treant 20 ตัว", "Kill 20 Treants", "Calpheon > Treant Forest เหนือ Trent", "Calpheon > Treant Forest, north of Trent"),
    s("กดตอไม้ลึกลับ", "Interact with the Mysterious Tree Stub", "Calpheon > กระท่อมหลัง Treant Forest ใกล้ Node Lumberjack's Rest (ฝั่งตะวันตกของแม่น้ำ ข้ามสะพานเชือก)", "Calpheon > cabin behind Treant Forest near Lumberjack's Rest (west of the river, over the rope bridge)"),
  ],
  "igor:v3": [
    s("ล่าอีกา 1 ตัว", "Kill 1 crow", "Calpheon > Node Hexe Sanctuary (ตะวันออกของ Behr) ทางขึ้น Node", "Calpheon > Hexe Sanctuary node (east of Behr), on the road up"),
    s("คุยกับผู้จัดการ Node Witch's Chapel", "Talk to the Witch's Chapel node manager", "Calpheon > Node Witch's Chapel ในกระท่อม (ตะวันออกเฉียงใต้ของ Hexe)", "Calpheon > inside the Witch's Chapel cabin (southeast of Hexe)", "Hexe's Curse (node manager)"),
    s("ล่า Green Orc Skeleton Warrior (Elite)", "Kill an elite Green Orc Skeleton Warrior", "Calpheon > เนินเขา Hexe Sanctuary", "Calpheon > Hexe Sanctuary hills"),
    s("เอา Witch's Earring ให้ Becker ดู", "Show a Witch's Earring to Becker", "Calpheon > บนเนินตะวันออกเฉียงเหนือของ Behr", "Calpheon > up the hill northeast of Behr", "Becker (near Behr)"),
    s("ล่า Skeleton 20 ตัว", "Kill 20 Skeletons", "Calpheon > Hexe Sanctuary", "Calpheon > Hexe Sanctuary"),
  ],
  "igor:v4": [
    s("ใช้จอบเก็บ Silver Azalea 5 ดอก", "Gather 5 Silver Azalea with a hoe", "Calpheon > ข้ามแม่น้ำตะวันตกเฉียงเหนือของ Behr แล้วขึ้นเขา (ใกล้ Hexe Sanctuary)", "Calpheon > across the river northwest of Behr, up the mountain (near Hexe Sanctuary)"),
    s("ซื้อขวดเปล่า ตักน้ำแม่น้ำ แล้ว Heat เป็น Distilled Water", "Buy an Empty Bottle, fill it at the river, Heat it into Distilled Water", "Calpheon > Behr > แม่น้ำหลังร้าน", "Calpheon > Behr > river behind the vendor", "Indri, Material Vendor (Behr)"),
    s("เก็บของแถม Fairy's Breath", "Get Fairy's Breath as a gathering byproduct", "เก็บด้วยเครื่องมือเก็บของที่ไหนก็ได้", "Any gathering spot"),
    s("ล่า Ogre แล้วใช้ Fluid Collector เก็บเลือด", "Kill an Ogre and collect its blood with a Fluid Collector", "Calpheon > Mansha Forest / ป่าตะวันตกของปราสาท Calpheon", "Calpheon > Mansha Forest / Calpheon Castle Western Forest"),
  ],
  "igor:v5": [
    s("ทำ Highly Concentrated Herbal Juice 5 ขวด", "Make 5 Highly Concentrated Herbal Juice", "กด L > Simple Alchemy (Mineral Water ซื้อจากร้านอาหารทุกเมือง)", "Press L > Simple Alchemy (Mineral Water from any cooking vendor)"),
    s("ล่า Rhutum 30 ตัว", "Kill 30 Rhutums", "Calpheon > Rhutum Outpost / Rhutum Outstation", "Calpheon > Rhutum Outpost / Outstation"),
    s("ใช้จอบเก็บกะหล่ำปลี 1 หัว", "Gather 1 Cabbage with a hoe", "Calpheon > Node Gabino Farm ตะวันตกเฉียงใต้ของเมือง Calpheon", "Calpheon > Gabino Farm node, southwest of Calpheon City", "Tarte (Gabino Farm)"),
    s("กิน Balenos Meal", "Eat a Balenos Meal", "ทำเองที่บ้าน หรือซื้อตลาดกลาง", "Cook at a residence or buy on the Central Market"),
  ],
  "igor:v6": [
    s("เข้าหรือสร้างกิลด์ (สร้าง 100k)", "Join or create a guild (100k to create)", "เมืองใหญ่ไหนก็ได้", "Any large city", "Guild Manager"),
    s("ล่า Troll 10 ตัว", "Kill 10 Trolls", "Calpheon > Node Quint Hill / Anti-Troll Fortification (ตะวันออกของ Port Epheria เหนือเมือง Calpheon)", "Calpheon > Quint Hill / Anti-Troll Fortification (east of Port Epheria, north of Calpheon City)"),
    s("เรียนความรู้พ่อค้าเมือง Calpheon ให้ครบ (ราว 21 คน)", "Complete Calpheon City merchant knowledge (about 21 vendors)", "เมือง Calpheon > กด H > Character > People of Calpheon > Vendors of Calpheon City", "Calpheon City > H > Character > People of Calpheon > Vendors of Calpheon City"),
    s("พิมพ์ 12 ในแชท General", "Type 12 in General chat", "ที่ไหนก็ได้ (กด Enter)", "Anywhere (press Enter)"),
    s("เช่า Storage Container (10 CP) แล้วเอาให้ Valks ดู", "Rent a Storage Container (10 CP) and show it to Valks", "เมือง Calpheon > Storage Keeper แล้วไปหา Valks", "Calpheon City > Storage Keeper, then Valks", "Valks, Trina Knights Master (Calpheon City)"),
    s("จับม้าป่า 1 ตัว (ซื้อเชือกที่ Stable Keeper)", "Tame a wild horse (rope from a Stable Keeper)", "ใกล้ Keplan หรือ Port Epheria", "Near Keplan or Port Epheria"),
  ],
  "igor:v7": [
    s("เล่นมินิเกมต้มสมุนไพร (ตีโดน 5 ครั้ง)", "Play the Herb Brewer minigame (5 hits)", "Calpheon > หมู่บ้าน Florin", "Calpheon > Florin", "Medicinal Herb Brewer (Florin)"),
    s("เก็บ Everlasting Herb (ต้อง Gathering Skilled 5)", "Gather an Everlasting Herb (Gathering Skilled 5)", "Calpheon > ภูเขาตะวันออกเฉียงใต้ของ Florin หรือทางตะวันออกเลย Karanda Ridge", "Calpheon > mountains southeast of Florin, or east past Karanda Ridge"),
    s("แบกลูกแกะหลง 1 ตัวไปส่ง (Amity 10)", "Carry a Lost Lamb back (10 amity)", "Calpheon > Node Lynch Ranch ใต้ Node ฝั่งตะวันตกของหอ Imp", "Calpheon > Lynch Ranch node, south of the node, west of the imp tower", "Murana Lynch (Lynch Ranch)"),
    s("ส่ง Serap's Necklace ระดับ PRI", "Give a PRI Serap's Necklace", "Balenos > Velia > โรงเตี๊ยม", "Balenos > Velia > the inn", "Islin Bartali, Innkeeper (Velia)"),
  ],
  "igor:v8": [
    s("ขับเกวียน 4 ล้อคนเดียว", "Ride a 4-wheel wagon alone", "คอกม้าเมืองไหนก็ได้ (Farm Wagon)", "Any stable (Farm Wagon)", "Lorenzo Murray, Stable Keeper (Velia)"),
    s("ทำ Cold Draft Beer (Cooking Skilled 1+)", "Make Cold Draft Beer (Cooking Skilled 1+)", "ทำที่บ้าน ธัญพืชจากฟาร์ม Finto / Bartali / Loggia รอบ Velia", "Residence cooking; grain from Finto / Bartali / Loggia Farm around Velia"),
    s("เก็บเลือด Weasel ด้วย Fluid Collector", "Collect Weasel Blood with a Fluid Collector", "Balenos > รอบ Velia และ Western Guard Camp", "Balenos > around Velia and Western Guard Camp"),
    s("ปรุง Wise Man's Blood (Alchemy Apprentice 1)", "Make Wise Man's Blood (Alchemy Apprentice 1)", "เครื่องมือ Alchemy ในบ้าน", "A residence Alchemy tool"),
    s("ยิงปืนใหญ่โดนเป้า (ใช้ Energy 20)", "Hit the cannon target (20 Energy)", "Balenos > Velia (หรือหุ่น 6 ตัวในน้ำตะวันตกของ Cron Castle)", "Balenos > Velia (or the 6 scarecrows in the water west of Cron Castle)", "Tranan Underfoe, Blacksmith (Velia)"),
    s("คุยกับ Black Spirit", "Talk to the Black Spirit", "ที่ไหนก็ได้ (กด ,)", "Anywhere (press ,)"),
  ],
  "igor:v9": [
    s("หา Gem Ornament 3 สี แล้วรวมเป็นถุงของ Yaz", "Find the 3 gem ornaments and combine them (Yaz's pouch)", "แดง: ถ้ำเหนือ Ancient Ruins Excavation Site / เหลือง: หน้าผู้จัดการ Node Kamasylve Temple ตะวันออกของ Heidel / น้ำเงิน: ถ้ำเหนือ Stonebeak Shore (Mediah) ใต้ Vagabond", "Red: cave north of Ancient Ruins Excavation Site / Yellow: in front of the Kamasylve Temple node manager, east of Heidel / Blue: cave north of Stonebeak Shore (Mediah), under the Vagabond", "Vagabond (Stonebeak cliff)"),
    s("สร้าง Balenos Traditional Cooking Utensil (Tool Workshop Lv 1)", "Craft a Balenos Traditional Cooking Utensil (Lv 1 Tool Workshop)", "บ้านในเมืองใหญ่ เช่น Heidel 4-1 ชั้น 2", "City housing, e.g. Heidel 4-1, 2F", "Work Supervisor (hire a worker)"),
    s("ล่า Sausan Guard 10 ตัว", "Kill 10 Sausan Guards", "Mediah > Sausan Garrison เหนือ Kusha ตะวันตกเฉียงเหนือของ Altinova", "Mediah > Sausan Garrison, north of Kusha, northwest of Altinova"),
    s("ชนะ Knowledge Battle (Energy ราว 105)", "Win the Knowledge Battle (about 105 Energy)", "Mediah > Altinova ข้าง Storage Keeper", "Mediah > Altinova, next to the Storage Keeper", "Haley (Altinova)"),
  ],
  "igor:v10": [
    s("ล่า Helm Golem (Hard)", "Kill the <Hard> Helm Golem", "Mediah > Node Helm's Post (ด้านนอก และดันเจียนฝั่งตะวันตก)", "Mediah > Helm's Post node (outside, and the dungeon to the west)"),
    s("ได้ความรู้ Creatures of Mediah ครบ", "Complete Creatures of Mediah knowledge", "กด H > Ecology > Ecology of Mediah > Creatures of Mediah", "H > Ecology > Ecology of Mediah > Creatures of Mediah"),
    s("รวม Forbidden Book 5 เล่มเป็น Cartian Spell แล้วล่า Skeleton King", "Combine 5 Forbidden Books into a Cartian Spell and kill the Skeleton King", "ดรอปจาก Mediah: Abandoned Iron Mine, Kratuga Ancient Ruins, Helm's Post, Sausan Garrison", "Drops in Mediah: Abandoned Iron Mine, Kratuga Ancient Ruins, Helm's Post, Sausan Garrison"),
    s("ล่า Ancient Weapon 5 ตัว", "Kill 5 Ancient Weapons", "Mediah > Node Hasrah Cliff ตะวันตกเฉียงใต้ของ Tarif ข้ามแม่น้ำ (ในถ้ำ)", "Mediah > Hasrah Cliff node, southwest of Tarif across the river (in the cave)"),
    s("คุยกับหัวหน้าหมู่บ้าน", "Talk to the village leader", "Mediah > Tarif", "Mediah > Tarif", "Ahon Kirus (Tarif)"),
  ],
  "igor:v11": [
    s("ทำ Potato Crate (Crop Factory)", "Craft a Potato Crate (Crop Factory)", "Balenos > Node Finto Farm (ตะวันออกของ Velia) และบ้าน Velia 2-1", "Balenos > Finto Farm node (east of Velia) and Velia house 2-1", "Work Supervisor"),
    s("ต่อ Node Sand Grain Bazaar ถึง Pilgrim's Haven (3 CP)", "Connect Sand Grain Bazaar to Pilgrim's Haven (3 CP)", "Valencia > Sand Grain Bazaar (ตะวันออกเฉียงเหนือของ Altinova)", "Valencia > Sand Grain Bazaar (northeast of Altinova)"),
    s("ขุด Bag of Muddy Water แล้วดื่ม", "Dig up a Bag of Muddy Water and drink it", "Valencia > ทะเลทรายตะวันออกของ Sand Grain Bazaar (จุดที่มินิแมปหาย)", "Valencia > desert east of Sand Grain Bazaar (where the minimap hides)", "Kulahuth, Material Vendor (Sand Grain Bazaar)"),
    s("กิน Seafood Cron Meal", "Eat a Seafood Cron Meal", "ทำเอง (Simple Cooking) หรือซื้อตลาด", "Simple Cooking or the market"),
    s("ใช้ Book of Training ตีหุ่นฝึก", "Use a Book of Training on the dummies", "Altinova หรือ Valencia (ESC > Function > Find NPC)", "Altinova or Valencia (ESC > Function > Find NPC)", "Jamey Drucker (Altinova / Valencia)"),
  ],
  "igor:v12": [
    s("ล่า Kutum แล้วส่ง Ancient Creature's Fragment", "Kill Kutum and deliver the Ancient Creature's Fragment", "Valencia > Node Scarlet Sand Chamber (Kutum เกิดราววันละ 2 ครั้ง)", "Valencia > Scarlet Sand Chamber node (Kutum spawns about twice a day)", "Desalam (outside Scarlet Sand Chamber)"),
    s("ประกอบ Ancient Explorer's Compass (3 ชิ้น)", "Assemble the Ancient Explorer's Compass (3 parts)", "ดรอป: Titium Valley, Pila Ku Jail, Roud Sulfur Works, Aakman, Hystria หรือซื้อตลาด", "Drops: Titium Valley, Pila Ku Jail, Roud Sulfur Works, Aakman, Hystria, or the market"),
    s("กาง Desert Tent Tool ในทะเลทราย", "Use a Desert Tent Tool in the desert", "ซื้อที่ Sand Grain Bazaar ใช้ในทะเลทราย (มินิแมปหาย)", "Buy at Sand Grain Bazaar, use in the Great Desert", "Bochlo, Stable Keeper (Sand Grain Bazaar)"),
    s("ขึ้นและลงอูฐ (เควส Your Best Friend in the Desert, Lv 55+)", "Mount and dismount a camel (quest Your Best Friend in the Desert, Lv 55+)", "Valencia > Sand Grain Bazaar", "Valencia > Sand Grain Bazaar", "Bochlo (Sand Grain Bazaar)"),
  ],
  "igor:v13": [
    s("ล่า Sand Spirit", "Kill a Sand Spirit", "Valencia > ทะเลทรายตะวันตกเฉียงเหนือของ Ibellab Oasis", "Valencia > desert northwest of Ibellab Oasis"),
    s("ชนะเกม Yar!", "Win a game of Yar!", "Valencia > เมือง Shakatu บนบันไดขึ้นหน้าผาฝั่งตะวันออก", "Valencia > Shakatu City, top of the steps up the east cliff", "Shakatu (Shakatu City)"),
    s("ล่า Gahaz Bandit 10 ตัว", "Kill 10 Gahaz Bandits", "Valencia > Gahaz Bandit's Lair ตะวันออกเฉียงเหนือของ Shakatu", "Valencia > Gahaz Bandit's Lair, northeast of Shakatu"),
    s("คุยกับ Serazad ใน Villa (บัตร 10M หรือบัฟ Old Moon)", "Talk to Serazad in the villa (10M pass or an Old Moon buff)", "Valencia > ตะวันตกของเมือง Shakatu > Shakatu's Villa", "Valencia > west of Shakatu City > Shakatu's Villa", "Dumaham (pass seller), Serazad (inside)"),
    s("คุยกับผู้จัดการท่าเรือ", "Talk to the wharf manager", "Valencia > ท่าเรือตะวันตกของ Deserted City of Runn", "Valencia > docks west of the Deserted City of Runn", "Torio, Wharf Manager"),
    s("ขึ้นและลงช้างจิ๋ว (ราว 30-40M หรือ Gold Bar)", "Mount and dismount a miniature elephant (about 30-40M or gold bars)", "เริ่มที่ Sand Grain Bazaar (Lv 55+) ไปจบที่ Shakatu's Villa", "Starts at Sand Grain Bazaar (Lv 55+), ends at Shakatu's Villa", "Bochlo (Sand Grain Bazaar), Serazad (villa)"),
  ],
  "igor:v14": [
    s("คุยกับ Lonely Palieva", "Talk to Lonely Palieva", "Valencia > Aakman Temple (ทางเข้าถ้ำเหนือ Pilgrim's Haven) ลงทางวนจนสุด", "Valencia > Aakman Temple (cave entrance north of Pilgrim's Haven), bottom of the spiral ramp", "Lonely Palieva (Aakman)"),
    s("ล่า World Boss Nouver แล้วส่ง Desert Tyrant's Mane", "Kill world boss Nouver and deliver the Desert Tyrant's Mane", "Valencia > ทะเลทราย (ดูเวลาบอสในหน้า World Boss)", "Valencia > Great Desert (see the World Boss page for times)", "Atui Balacs, Trade Manager (Sand Grain Bazaar)"),
    s("ค้นพบ Node ทะเลทราย Valencia ครบ (ราว 16 Node)", "Discover every Great Desert node (about 16)", "กด H > Topography > Valencia > Valencia (Great Desert)", "H > Topography > Valencia > Valencia (Great Desert)"),
    s("เข้าเฝ้ากษัตริย์", "Speak to the king", "Valencia > วังในเมือง Valencia", "Valencia > the palace in Valencia City", "King Sahazad Neser (Valencia City)"),
  ],
  "igor:v15": [
    s("ล่าสิงโต Valencia เก็บเนื้อ 10 ชิ้น (ต้องมีมีดชำแหละ)", "Hunt Valencian Lions for 10 lion meat (bring a Butcher Knife)", "Valencia > Node Ancado Inner Harbor เหนือเมือง Valencia", "Valencia > Ancado Inner Harbor node, north of Valencia City"),
    s("จบสายเควส Palm Forest Boy (11 เควส, Lv 55+, Amity 250)", "Finish the Palm Forest Boy questline (11 quests, Lv 55+, 250 amity)", "Valencia > Arehaza ตะวันออกของเมือง Valencia", "Valencia > Arehaza, east of Valencia City", "Yasum, General Goods (Arehaza)"),
    s("กดวัตถุโบราณใต้ปราสาท (เอาหิ่งห้อยไปด้วย)", "Interact with the artifact under the castle (bring a Firefly)", "Valencia Castle > ถ้ำลับฝั่งตะวันออกข้างต้นปาล์ม 2 ต้น > Cokro Chamber > กระโดดลงรูโดม", "Valencia Castle > hidden cave on the east side by two cliff palms > Cokro Chamber > drop through the dome hole"),
    s("กดรอยบนกำแพงปราสาท (Energy 25)", "Interact with the Castle Wall mark (25 Energy)", "Valencia Castle > ยอดหอกลม (ขึ้นบันไดแล้วปีนบันไดลิง)", "Valencia Castle > top of the round spire (stairs, then a ladder)"),
  ],
  /* ---------------- Emma Bartali ---------------- */
  "emma:c2": [s("จบเควส [Crow's Nest] Crow's Mercenary (Lv 56+)", "Complete [Crow's Nest] Crow's Mercenary (Lv 56+)", "Pit of the Undying (รับจาก Black Spirit)", "Pit of the Undying (from the Black Spirit)")],
  "emma:c3": [s("จบ [Promotion] DUO (II) Undying Crow's Insignia", "Complete [Promotion] DUO (II) Undying Crow's Insignia", "Pit of the Undying > เควสรายสัปดาห์ แล้วเข้าลานบอส Kansha (ใส่ Insignia PRI ก่อน)", "Pit of the Undying > weekly quest, then Kansha's boss arena (equip the PRI insignia)", "Chorpy (Pit of the Undying)")],
  "emma:c4": [s("จบเควสค่าสถานะ Tungrad School และ A Gift for Papu", "Complete the Tungrad School and A Gift for Papu stat quests", "Kamasylvia (Grana) และ O'dyllita", "Kamasylvia (Grana) and O'dyllita")],
  "emma:c5": [s("จบ [LoML] Dokkebi's Gift และ [LoML] Ruler of Taebaek", "Complete [LoML] Dokkebi's Gift and [LoML] Ruler of Taebaek", "Land of the Morning Light ภาค 1 (เริ่ม [LoML] Yeonhwa's Departure จาก Black Spirit)", "Land of the Morning Light part 1 (starts with [LoML] Yeonhwa's Departure from the Black Spirit)")],
  "emma:c6": [s("จบ Kzarka: Barrier of Infestation V คนเดียว", "Clear Kzarka: Barrier of Infestation V solo", "เซิร์ฟ Elvia เท่านั้น เริ่ม [Elvia Co-op] Dreary Moonlight หลังจบ [Elvia] Obsidian Ashes", "Elvia servers only; start [Elvia Co-op] Dreary Moonlight after [Elvia] Obsidian Ashes", "Lejenti (turn-in)")],
  "emma:c7": [s("ล่า Sangoon ระดับ Calamity 1 ขึ้นไป", "Defeat Sangoon on Calamity 1 or higher", "ESC > Adventure (F5) > Black Shrine > Donghae (Solo)", "ESC > Adventure (F5) > Black Shrine > Donghae (Solo)")],
  "emma:c8": [s("ล่า Gumiho ระดับ Calamity 1 ขึ้นไป", "Defeat Gumiho on Calamity 1 or higher", "ESC > Adventure (F5) > Black Shrine > Donghae (Solo)", "ESC > Adventure (F5) > Black Shrine > Donghae (Solo)")],
  /* ---------------- Book of Margahan ---------------- */
  "margahan:v1": [
    s("คุยที่ Altar of Agris (+5,000 Agris สูงสุด)", "Chat at the Altar of Agris (+5,000 max Agris)", "Altar of Agris (ปลดล็อกจากเควส Black Spirit แล้วไปหา Edan)", "Altar of Agris (unlock via the Black Spirit quest, then Edan)", "Edan (Ancient Stone Chamber)"),
    s("ถวาย Fruit of Nature 10, เนื้อหมี 30, ข้าวสาลี 100", "Offer 10 Fruit of Nature, 30 Bear Meat, 100 Wheat", "Altar of Agris", "Altar of Agris"),
    s("หาถ้ำลับริมทะเลแล้วกดแสงสีฟ้า", "Find the hidden coastal cave and touch the blue glow", "กระโดดลงทางตะวันตกของแท่นบูชา ดูมินิแมป", "Drop down west of the altar; watch the minimap"),
    s("ขึ้นหลังคาและหอ Cron Castle กดวัตถุเรืองแสง", "Climb Cron Castle's roof and tower, touch the glowing object", "Cron Castle > ออกทางหน้าต่าง ลงหลังคาพัง ขึ้นหอ", "Cron Castle > out the window, onto the broken roof, up the tower"),
    s("รวมแผ่นจารึก Agris แล้วกลับไปหา Edan (ดรอปขยะ +50%)", "Combine the Agris Stone Tablet and return to Edan (junk drops +50%)", "Velia แล้วกลับ Ancient Stone Chamber", "Velia, then back to the Ancient Stone Chamber", "Alustin (Velia), Edan"),
  ],
  "margahan:v2": [
    s("ล่า 1,000 ตัว (AP 100+)", "Kill 1,000 (AP 100+)", "Mediah > Sausan Garrison", "Mediah > Sausan Garrison"),
    s("ล่า 1,500 ตัว (AP 140+ พกน้ำและชา)", "Kill 1,500 (AP 140+, bring water and tea)", "Valencia > Crescent Shrine", "Valencia > Crescent Shrine"),
    s("ล่า 2,000 ตัว (AP 210+)", "Kill 2,000 (AP 210+)", "Drieghan > Sherekhan Necropolis", "Drieghan > Sherekhan Necropolis"),
    s("ล่า 2,000 ตัว (AP 240+)", "Kill 2,000 (AP 240+)", "Kamasylvia > Manshaum Forest", "Kamasylvia > Manshaum Forest"),
    s("ล่า 1,500 ตัว (AP 190+)", "Kill 1,500 (AP 190+)", "Drieghan > Blood Wolf Settlement", "Drieghan > Blood Wolf Settlement"),
  ],
  /* ---------------- Herald's Journal ---------------- */
  "herald:v1": [
    s("คุยกับ NPC 5 คนใน 3 นาที (ขี่ม้าไป)", "Talk to 5 NPCs in 3 minutes (ride a horse)", "เมือง Calpheon: Grandus (ร้านเกราะ), Bartholomeo (ท่าเรือ), Elle Belucci (ข้ามสะพาน), Angela, Romary (คอกม้า)", "Calpheon City: Grandus (armor), Bartholomeo (docks), Elle Belucci (over the bridge), Angela, Romary (stable)", "Rubin (northern Calpheon City)"),
    s("ปีนยอดหอ Calpheon ใน 6 นาที", "Climb to the top of Calpheon Tower in 6 minutes", "เมือง Calpheon > หอกลางเมือง", "Calpheon City > the tower"),
    s("คุยกับ Geranoa ใน 2 นาที", "Talk to Geranoa in 2 minutes", "เมือง Calpheon", "Calpheon City", "Geranoa (Calpheon)"),
    s("ไปคุยกับ Crio ใน 7 นาที", "Reach Crio in 7 minutes", "Balenos > Velia", "Balenos > Velia", "Crio (Velia)"),
  ],
  "herald:v2": [
    s("ตกปลาเกรดน้ำเงิน 1 ตัวใน 15 นาที", "Catch a blue-grade fish in 15 minutes", "Velia > ชายหาดฝั่งตะวันตก", "Velia > west beach", "Crio (Velia)"),
    s("ต่อรองราคาสำเร็จใน 2 นาที", "Win a bargain in 2 minutes", "Velia", "Velia", "Bahar, Trade Manager (Velia)"),
    s("ไปเกาะ Iliya คุยกับ Diega ใน 8 นาที", "Reach Iliya Island and talk to Diega in 8 minutes", "เกาะ Iliya (เรือหรือกริฟฟอนจาก Velia)", "Iliya Island (boat or griffon from Velia)", "Diega (Iliya Island)"),
    s("หาถ้ำลับใน 4 นาที", "Find the hidden cave in 4 minutes", "เริ่มตะวันออกเฉียงเหนือของ Kusha ว่ายน้ำไปทางตะวันออกถึงถ้ำฝั่ง Valencia", "Start northeast of Kusha, swim east to the cave on the Valencia side", "Kunga (northeast of Kusha)"),
  ],
  "herald:v3": [
    s("ล่า Gahaz Bandit 250 ตัวใน 5 นาที", "Kill 250 Gahaz Bandits in 5 minutes", "Valencia > Gahaz Bandit's Lair", "Valencia > Gahaz Bandit's Lair", "Rafa, node manager"),
    s("เข้า Hystria หา Bert", "Enter Hystria and find Bert", "Sand Grain Bazaar > ประตู Hystria ตะวันออกของ Desert Naga Temple", "Sand Grain Bazaar > Hystria portal east of the Desert Naga Temple", "Tavu (Sand Grain Bazaar), Bert (Hystria)"),
    s("คุยผู้จัดการ Node Pilgrim's Sanctum ทั้ง 7", "Talk to all 7 Pilgrim's Sanctum node managers", "Valencia > Obedience, Abstinence, Sincerity, Humility, Purity, Sharing, Fast", "Valencia > Obedience, Abstinence, Sincerity, Humility, Purity, Sharing, Fast"),
    s("คุยหัวหน้าเมืองทั้งหมดใน 18-21 นาที", "Talk to every city chief in 18-21 minutes", "Valencia > Altinova > Velia > Heidel > Calpheon แล้วกลับหา Rubin", "Valencia > Altinova > Velia > Heidel > Calpheon, then back to Rubin", "Sahazad Neser, Neruda Shen, Igor Bartali, Crucio Domongatt, Herman Feresio"),
  ],
  "herald:v4": [
    s("ส่งลังและรถเข็น แล้วกวาดปล่องไฟใน 4 นาที", "Deliver a crate and a wheelbarrow, sweep a chimney, in 4 minutes", "เมือง Calpheon: ลังให้ Milano Belucci (ร้านผลไม้), รถเข็นให้ Merv (ช่างตัดเสื้อ)", "Calpheon City: crate to Milano Belucci (fruit), wheelbarrow to Merv (tailor)", "Rubin"),
    s("ยิงหุ่นไล่กา 25 ตัวด้วย Matchlock", "Shoot 25 scarecrows with a matchlock", "Calpheon > ทุ่ง Dias Farm (คุยกับ NPC กลางทุ่ง)", "Calpheon > Dias Farm field (talk to the NPC in the middle)"),
    s("จับม้าป่าใน 5 นาที", "Tame a wild horse in 5 minutes", "Node Stonetail Horse Ranch > ม้าป่าใกล้ Elric Shrine", "Stonetail Horse Ranch node > wild horse near Elric Shrine", "Shamhain (Stonetail Horse Ranch)"),
    s("ตอบคำถาม NPC 3 คน", "Answer 3 NPCs' questions", "Contaminated Farm (Gorgath), Velia (Alustin), Glish (Freharau)", "Contaminated Farm (Gorgath), Velia (Alustin), Glish (Freharau)"),
    s("แข่งวิ่งข้ามสะพานด้วยร่างปู", "Run the Stoneback Crab course over the bridge", "Node Elder's Bridge เหนือเมือง Calpheon", "Elder's Bridge node, north of Calpheon City", "Rubin"),
  ],
  /* ---------------- Eyes of Adventure (volumes 6-9) ---------------- */
  "eyes:v6": [
    s("หีบที่ 1", "Chest 1", "ก้อนหินกลางน้ำตกก่อนสะพาน Dokkebi Forest ไป Shimnidae", "Rock mid-waterfall before the Dokkebi Forest to Shimnidae bridge"),
    s("หีบที่ 2", "Chest 2", "หลังคาบ้านบนเกาะ Byukgye (กระโดดลงจากภูเขากลาง)", "Roof of a building on Byukgye Island (drop from the central mountain)"),
    s("หีบที่ 3", "Chest 3", "ระหว่างหน้าผา ตะวันออกของเกาะ Haemo เล็ก", "Between the cliffs east of small Haemo Island"),
    s("หีบที่ 4", "Chest 4", "ชายหาดเหนือ Node Bari Forest", "Beach north of the Bari Forest node"),
    s("หีบที่ 5", "Chest 5", "ภูเขาตะวันตกของ Beombawi Valley ทางไปถ้ำ Beombawi", "Mountain west of Beombawi Valley toward Beombawi Cave"),
  ],
  "eyes:v7": [
    s("หีบที่ 1", "Chest 1", "ในน้ำข้าง Dokkebi Princess", "In the water next to the Dokkebi Princess"),
    s("หีบที่ 2", "Chest 2", "น้ำตกเหนือ Node Dokkebi Forest (ปีนฝั่งตะวันออก)", "Waterfall north of the Dokkebi Forest node (climb the east side)"),
    s("หีบที่ 3", "Chest 3", "กระท่อมไผ่ใต้ศาล Bamboo Legion Lieutenant", "Bamboo hut below the Bamboo Legion Lieutenant shrine"),
    s("หีบที่ 4", "Chest 4", "หลังหินกลางดงไผ่ หลังข้ามสะพานไปเกาะใต้ของ Haemo", "Behind a rock in the bamboo after the bridge to south Haemo"),
    s("หีบที่ 5", "Chest 5", "ใต้น้ำตกที่สะพาน Bari Forest ไป Beombawi Gate", "Bottom of the waterfall at the Bari Forest to Beombawi Gate bridge"),
  ],
  "eyes:v8": [
    s("ตกหีบที่ 1", "Fish chest 1", "Dokkebi Forest หันหน้าหา Dokkebi Princess", "Dokkebi Forest, facing the Dokkebi Princess"),
    s("ตกหีบที่ 2", "Fish chest 2", "ใต้ Nopsae Byeot County", "South of Nopsae Byeot County"),
    s("ตกหีบที่ 3", "Fish chest 3", "แท่นหกเหลี่ยมใต้จุดสไนเปอร์ Beombawi", "Hexagon platform south of the Beombawi sniper area"),
    s("ตกหีบที่ 4", "Fish chest 4", "หินก้อนเล็กตะวันออกของ Byukgye", "Small rock east of Byukgye"),
    s("ตกหีบที่ 5", "Fish chest 5", "กลางสะพานหินบนน้ำตก Hanji", "Middle of the pebble bridge atop the Hanji waterfall"),
  ],
  "eyes:v9": [
    s("Dokkebi ตัวที่ 1 (ได้สัตว์เลี้ยง)", "Dokkebi 1 (pet)", "เหนือ Cheongsan Institute หันหน้าหาน้ำตก", "North of Cheongsan Institute, facing the waterfall"),
    s("Dokkebi ตัวที่ 2", "Dokkebi 2", "หน้าผาใต้ของเกาะเล็กตะวันออกของ Yeowoo Pass", "South cliff of the small island east of Yeowoo Pass"),
    s("Dokkebi ตัวที่ 3 (คนงาน Nopsae Byeot)", "Dokkebi 3 (Nopsae Byeot worker)", "หินกลางน้ำตก Bari Forest", "Rock mid-waterfall in Bari Forest"),
    s("Dokkebi ตัวที่ 4 (คนงาน Nampo)", "Dokkebi 4 (Nampo worker)", "ในน้ำระหว่างเกาะ Haemo 2 เกาะ", "In the water between the two Haemo islands"),
    s("Dokkebi ตัวที่ 5 (คนงาน Dalbeol)", "Dokkebi 5 (Dalbeol worker)", "หินกลางน้ำตก Hanji (กระโดดลงจากด้านบน)", "Rock mid-waterfall in Hanji County (drop from the top)"),
  ],
};

/** Videos and illustrated guides per log, and per volume ("logId:volumeId"). */
export const MEDIA: Record<string, Media> = {
  igor: {
    photos: { label: "BlackDesertFoundry (ภาพทุกบท / screenshots for every chapter)", url: "https://www.blackdesertfoundry.com/adventure-log/" },
    videos: [
      { id: "v7E0rHSoL_Q", title: "Bartali Adventure Log 1-8" },
      { id: "RByQiluRNjI", title: "Bartali Adventure Log 11-15" },
    ],
  },
  "igor:v1": { videos: [{ id: "cm8YsYhbH84", title: "Igor Bartali's Adventure Log 1" }] },
  "igor:v3": { videos: [{ id: "zoUxv6IKxlg", title: "Bartali Adventure Log Book 3 Guide" }] },
  "igor:v5": { videos: [{ id: "CBreEoVKf-g", title: "Updated Igor Bartali Adventure Journal Book 5" }] },
  "igor:v6": { videos: [{ id: "i_cy__T1cIg", title: "Bartali Adventure Log Book 6 Guide" }] },
  "igor:v8": { videos: [{ id: "zwxShquq-SY", title: "Bartali Adventure Log Book 8 Guide" }] },
  "igor:v11": { videos: [{ id: "rWWNsCJnOI8", title: "Bartali Adventure Log Book 11 Guide" }] },
  "igor:v12": { videos: [{ id: "T_uy2iPDVMM", title: "Updated Igor Bartali Adventure Journal Book 12" }] },
  "igor:v13": { videos: [{ id: "RQ4mQ_iau08", title: "Bartali Adventure Log Book 13 Guide" }] },
  "igor:v14": { videos: [{ id: "gJZUzV6uPPs", title: "Volume 14: Lonely Palieva (Aakman)" }] },
  emma: {
    photos: { label: "BlackDesertFoundry: Emma Bartali's Journal", url: "https://www.blackdesertfoundry.com/emma-bartalis-journal-guide/" },
    videos: [
      { id: "joTDmRLWHiI", title: "Updated Emma Bartali Journal Guide (guaranteed OCT Kharazad)", year: 2026 },
      { id: "_Js_uH-OVN0", title: "Free PEN Kharazad (Alustin's Support) + Emma Bartali Journal", year: 2026 },
    ],
  },
  eyes: {
    photos: { label: "BlackDesertFoundry: The Eyes of Adventure (ภาพหีบทุกใบ / every chest)", url: "https://www.blackdesertfoundry.com/adventurers-unfamiliar-landscape-journal/" },
    videos: [{ id: "E0ZLvlhP7bs", title: "Eyes of Adventure Book 5: all 100 chests in one route" }],
  },
  "eyes:v5": { videos: [{ id: "E0ZLvlhP7bs", title: "Book 5: all 100 Dokkebi chests" }, { id: "rHLXDRsJ0h4", title: "Book 5 Page 3: 20 chests in best order" }] },
  "eyes:v8": { videos: [{ id: "y6tRwBIf9RU", title: "Book 8: Dokkebi lost belongings" }] },
  "eyes:v9": { videos: [{ id: "IIofCJeH7Nk", title: "Book 9: glowing Dokkebi at night" }] },
  justin: {
    photos: { label: "BlackDesertFoundry: Justin Bartali (ภาพทุกหน้า / screenshot per page)", url: "https://www.blackdesertfoundry.com/justin-bartalis-adventure-log-guide/" },
    videos: [
      { id: "bIR8S8FSzNk", title: "Justin Bartali Adventure Journal Guide" },
      { id: "MTgW8YLtGIE", title: "Justin Bartali Adventure Log 2025", year: 2025 },
    ],
  },
  margahan: {
    photos: { label: "BlackDesertFoundry: Book of Margahan", url: "https://www.blackdesertfoundry.com/book-of-margahan-agris-fever-guide/" },
    videos: [
      { id: "pfidX3VMRBA", title: "Updated Agris Fever Adventure Log / Book of Margahan Vol 1 & 2" },
      { id: "a6cajkjPdPI", title: "Book of Margahan: quick and easy video guide" },
    ],
  },
  herald: {
    photos: { label: "BlackDesertFoundry: Herald's Journal", url: "https://www.blackdesertfoundry.com/heralds-journal/" },
  },
  "herald:v1": { videos: [{ id: "hBA1Y07_x30", title: "Herald's Journal Book 1 walkthrough (console)" }] },
  "herald:v4": { videos: [{ id: "MgoEttySafY", title: "Herald's Journal Volume 4 guide (+3 max Valks)" }] },
  rulupee: { videos: [{ id: "nrx44sHNeHo", title: "BDO Adventure Logs overview: which to do first" }] },
};

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
export const ytUrl = (v: Video) => `https://www.youtube.com/watch?v=${v.id}${v.t ? `&t=${v.t}s` : ""}`;
