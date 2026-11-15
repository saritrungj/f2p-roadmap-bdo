import { useState } from "react";
import { Info } from "@phosphor-icons/react";
import {
  BLACKSTONE_TO_FS,
  CRON_NPC_PRICE,
  ENERGY_MIN_PER_POINT_OFFLINE,
  ENERGY_MIN_PER_POINT_ONLINE,
  ENHANCE,
  FAME_TIERS,
  type GearKind,
} from "../data/bdo";
import {
  apBracket,
  dpBracket,
  duration,
  enhanceChance,
  fmt,
  fmt2,
  marketRetainRate,
  silver,
  successWithin,
  triesFor,
} from "../lib/calc";
import { NumberField, Result, Segmented, SelectField, Toggle, num } from "./Fields";

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="note">
      <Info size={16} weight="bold" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

function Header({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <h3 className="calc-title">{title}</h3>
      <p className="calc-desc">{desc}</p>
    </>
  );
}

const safe = (n: number) => (Number.isFinite(n) ? n : 0);

/* ---------------- Market tax ---------------- */
export function MarketCalc() {
  const [price, setPrice] = useState("250000000");
  const [qty, setQty] = useState("1");
  const [vp, setVp] = useState(false);
  const [fame, setFame] = useState("0");
  const [ring, setRing] = useState(false);

  const gross = safe(num(price)) * safe(num(qty));
  const fameBonus = FAME_TIERS[Number(fame)].bonus;
  const rate = marketRetainRate({ valuePack: vp, fame: fameBonus, ring });
  const net = gross * rate;
  const vpDiff =
    gross *
    (marketRetainRate({ valuePack: true, fame: fameBonus, ring }) -
      marketRetainRate({ valuePack: false, fame: fameBonus, ring }));

  return (
    <div>
      <Header
        title="ภาษีตลาดกลาง"
        desc="ขายของในตลาดแล้วได้เงินจริงเท่าไหร่ และถ้าเปิด Value Pack จะได้เพิ่มอีกเท่าไหร่"
      />
      <div className="calc-grid">
        <div className="fields">
          <div className="row-2">
            <NumberField label="ราคาขายต่อชิ้น (Silver)" value={price} onChange={setPrice} />
            <NumberField label="จำนวน" value={qty} onChange={setQty} />
          </div>
          <Toggle label="มี Value Pack" hint="ได้รับ 84.5% แทน 65%" checked={vp} onChange={setVp} />
          <SelectField
            label="Family Fame"
            value={fame}
            onChange={setFame}
            options={FAME_TIERS.map((t, i) => ({ value: String(i), label: t.label }))}
          />
          <Toggle
            label="Rich Merchant's Ring"
            hint="+5% เปิดครั้งเดียว ใช้ได้ทั้งครอบครัว"
            checked={ring}
            onChange={setRing}
          />
        </div>
        <Result
          label="เงินที่ได้รับจริง"
          value={silver(net)}
          unit="Silver"
          rows={[
            ["ยอดขายรวม", silver(gross)],
            ["อัตราที่ได้รับ", `${fmt2(rate * 100)}%`],
            ["เสียภาษีไป", silver(gross - net)],
            [vp ? "Value Pack ช่วยให้ได้เพิ่ม" : "ถ้ามี Value Pack จะได้เพิ่ม", silver(vpDiff)],
          ]}
        >
          <Note>
            สูตรที่ชุมชนใช้: ราคา x 0.65 x (1 + VP 0.30 + Fame + Ring 0.05) ของขยะที่ขายให้ NPC ไม่เสียภาษี
          </Note>
        </Result>
      </div>
    </div>
  );
}

/* ---------------- Enhancement ---------------- */
export function EnhanceCalc() {
  const [kind, setKind] = useState<GearKind>("armor");
  const [level, setLevel] = useState("PRI (I)");
  const [fs, setFs] = useState("30");
  const [tries, setTries] = useState("10");
  const [crons, setCrons] = useState("0");
  const [extra, setExtra] = useState("0");

  const steps = ENHANCE[kind];
  const step = steps.find((s) => s.level === level) ?? steps[0];
  const chance = enhanceChance(step, safe(num(fs)));
  const n = Math.floor(safe(num(tries)));
  const within = successWithin(chance, n);
  const avg = chance > 0 ? 100 / chance : Infinity;
  const costPerTry = safe(num(crons)) * CRON_NPC_PRICE + safe(num(extra));
  const t90 = triesFor(chance, 0.9);

  const changeKind = (k: GearKind) => {
    setKind(k);
    const list = ENHANCE[k];
    if (!list.some((s) => s.level === level)) setLevel(list[0].level);
  };

  return (
    <div>
      <Header
        title="โอกาสตีบวก"
        desc="ดูโอกาสสำเร็จตาม Failstack ต้องลองเฉลี่ยกี่ครั้ง และต้องเตรียม Silver ไว้เท่าไหร่"
      />
      <div className="calc-grid">
        <div className="fields">
          <Segmented
            label="ประเภทเกียร์"
            value={kind}
            onChange={changeKind}
            options={[
              { value: "armor", label: "เกราะ" },
              { value: "weapon", label: "อาวุธ" },
              { value: "accessory", label: "เครื่องประดับ" },
            ]}
          />
          <SelectField
            label="ขั้นที่จะตี (ขั้นเป้าหมาย)"
            value={step.level}
            onChange={setLevel}
            options={steps.map((s) => ({ value: s.level, label: s.level }))}
          />
          <div className="row-2">
            <NumberField label="Failstack (FS)" value={fs} onChange={setFs} max={400} />
            <NumberField label="จำนวนครั้งที่จะลอง" value={tries} onChange={setTries} max={5000} />
          </div>
          <div className="row-2">
            <NumberField
              label="Cron ต่อครั้ง"
              value={crons}
              onChange={setCrons}
              help="ราคา NPC 3M ต่อก้อน"
            />
            <NumberField
              label="ค่าวัตถุดิบต่อครั้ง"
              value={extra}
              onChange={setExtra}
              help="เช่น ราคา Black Stone"
            />
          </div>
        </div>
        <Result
          label="โอกาสสำเร็จต่อครั้ง"
          value={`${fmt2(chance)}%`}
          rows={[
            [`สำเร็จภายใน ${fmt(n)} ครั้ง`, `${fmt2(within * 100)}%`],
            ["ต้องลองโดยเฉลี่ย", Number.isFinite(avg) ? `${fmt2(avg)} ครั้ง` : "-"],
            ["ลองกี่ครั้งถึงจะมั่นใจ 90%", Number.isFinite(t90) ? `${fmt(t90)} ครั้ง` : "-"],
            ["ค่าใช้จ่ายเฉลี่ยจนสำเร็จ", costPerTry > 0 ? silver(avg * costPerTry) : "ยังไม่ได้กรอก"],
          ]}
        >
          <Note>
            เกียร์เกรดน้ำเงิน/เหลือง ตาม BDFoundry (ก.ค. 2026) เพดานสูงสุด 90%
            {kind === "accessory"
              ? " เครื่องประดับมี soft cap ตีพลาดหายทั้ง 2 ชิ้น"
              : " FS สูงมากเป็นค่าประมาณ เพราะเกมจริงมี soft cap"}
          </Note>
        </Result>
      </div>
      <Note>
        ทำ FS ด้วย Black Stone ผ่าน Valks:{" "}
        {BLACKSTONE_TO_FS.map(([bs, f]) => `${bs} ก้อน = ${f} FS`).join(", ")}
      </Note>
    </div>
  );
}

/* ---------------- AP / DP ---------------- */
export function BracketCalc() {
  const [ap, setAp] = useState("261");
  const [dp, setDp] = useState("300");
  const a = apBracket(safe(num(ap)));
  const d = dpBracket(safe(num(dp)));

  return (
    <div>
      <Header
        title="AP / DP Bracket"
        desc="ใส่ AP และ DP บนหน้าตัวละคร ดูว่าได้โบนัสเท่าไหร่ และต้องเพิ่มอีกนิดเดียวก็ขึ้น bracket ถัดไปหรือยัง"
      />
      <div className="calc-grid">
        <div className="fields">
          <NumberField label="AP (ค่าบนหน้าตัวละคร)" value={ap} onChange={setAp} max={1000} />
          <NumberField label="DP (ค่าบนหน้าตัวละคร)" value={dp} onChange={setDp} max={1000} />
          <Note>AP มือหลักกับ AP Awakening คิด bracket แยกกัน ใส่ทีละค่า</Note>
        </div>
        <Result
          label="โบนัส AP"
          value={`+${fmt(a.bonus)}`}
          unit="AP"
          rows={[
            [
              "AP bracket ถัดไป",
              a.nextAt ? `อีก ${fmt(a.nextAt - safe(num(ap)))} AP ได้ +${a.nextBonus}` : "สูงสุดแล้ว",
            ],
            ["ลดดาเมจจาก DP", `${fmt(d.bonus)}%`],
            [
              "DP bracket ถัดไป",
              d.nextAt ? `อีก ${fmt(d.nextAt - safe(num(dp)))} DP ได้ ${d.nextBonus}%` : "สูงสุดแล้ว",
            ],
          ]}
        >
          <Note>ตาราง BDFoundry (ส.ค. 2026) Igor Bartali Adventure Log ให้ +6 AP / +6 DP ฟรี</Note>
        </Result>
      </div>
    </div>
  );
}

/* ---------------- Silver per hour ---------------- */
export function GrindCalc() {
  const [trash, setTrash] = useState("12000");
  const [trashPrice, setTrashPrice] = useState("1700");
  const [market, setMarket] = useState("40000000");
  const [cost, setCost] = useState("3000000");
  const [hours, setHours] = useState("2");
  const [vp, setVp] = useState(false);

  const rate = marketRetainRate({ valuePack: vp, fame: 0, ring: false });
  const trashSilver = safe(num(trash)) * safe(num(trashPrice));
  const marketNet = safe(num(market)) * rate;
  const perHour = trashSilver + marketNet - safe(num(cost));
  const h = safe(num(hours));

  return (
    <div>
      <Header
        title="เงินต่อชั่วโมง"
        desc="เทียบจุดฟาร์มว่าได้เงินจริงชั่วโมงละเท่าไหร่ หลังหักภาษีตลาดและค่ายา"
      />
      <div className="calc-grid">
        <div className="fields">
          <div className="row-2">
            <NumberField label="ขยะต่อชั่วโมง (ชิ้น)" value={trash} onChange={setTrash} />
            <NumberField label="ราคาขาย NPC ต่อชิ้น" value={trashPrice} onChange={setTrashPrice} />
          </div>
          <NumberField
            label="ของขายตลาดต่อชั่วโมง (ราคาเต็ม)"
            value={market}
            onChange={setMarket}
            help="เช่น Black Stone, ของดรอปหายาก"
          />
          <div className="row-2">
            <NumberField label="ค่ายา/ซ่อมต่อชั่วโมง" value={cost} onChange={setCost} />
            <NumberField label="ฟาร์มวันละกี่ชั่วโมง" value={hours} onChange={setHours} max={24} />
          </div>
          <Toggle label="มี Value Pack" hint="มีผลกับของที่ขายในตลาดเท่านั้น" checked={vp} onChange={setVp} />
        </div>
        <Result
          label="ได้สุทธิต่อชั่วโมง"
          value={silver(perHour)}
          unit="Silver"
          rows={[
            ["จากขยะ (ไม่เสียภาษี)", silver(trashSilver)],
            ["จากตลาด (หลังภาษี)", silver(marketNet)],
            [`ต่อวัน (${fmt2(h)} ชม.)`, silver(perHour * h)],
            ["ต่อสัปดาห์", silver(perHour * h * 7)],
          ]}
        >
          <Note>ราคาตัวอย่างเป็นค่าสมมติ ให้ใส่ราคาตลาดจริงของเซิร์ฟเวอร์คุณ</Note>
        </Result>
      </div>
    </div>
  );
}

/* ---------------- Energy ---------------- */
export function EnergyCalc() {
  const [cur, setCur] = useState("20");
  const [max, setMax] = useState("300");
  const need = Math.max(0, safe(num(max)) - safe(num(cur)));

  return (
    <div>
      <Header
        title="Energy เต็มเมื่อไหร่"
        desc="คำนวณเวลาที่ Energy จะกลับมาเต็ม เอาไว้วางแผนทำงานคนงาน แปรรูป หรือคุย NPC"
      />
      <div className="calc-grid">
        <div className="fields">
          <div className="row-2">
            <NumberField label="Energy ตอนนี้" value={cur} onChange={setCur} />
            <NumberField label="Energy สูงสุด" value={max} onChange={setMax} />
          </div>
          <Note>เพิ่ม Energy สูงสุดได้ฟรี โดยเก็บ Knowledge ให้ครบหมวด เช่น คุยกับ NPC ทุกคนในเมือง</Note>
        </div>
        <Result
          label="ถ้าออนไลน์ค้างไว้"
          value={duration(need * ENERGY_MIN_PER_POINT_ONLINE)}
          rows={[
            ["ต้องฟื้นอีก", `${fmt(need)} แต้ม`],
            ["ถ้าออฟไลน์", duration(need * ENERGY_MIN_PER_POINT_OFFLINE)],
            ["อัตราออนไลน์", "1 แต้ม / 3 นาที"],
            ["อัตราออฟไลน์", "1 แต้ม / 1 ชม."],
          ]}
        >
          <Note>นอนบนเตียงในบ้าน หรือแช่บ่อน้ำร้อน Energy จะฟื้นเร็วกว่านี้</Note>
        </Result>
      </div>
    </div>
  );
}
