import { useId, type ReactNode } from "react";

interface NumberFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  help?: string;
  min?: number;
  max?: number;
  suffix?: string;
}

/** Parses the raw input; returns NaN for empty/invalid text. */
export function num(v: string): number {
  if (v.trim() === "") return NaN;
  return Number(v.replace(/,/g, ""));
}

export function NumberField({ label, value, onChange, help, min = 0, max }: NumberFieldProps) {
  const id = useId();
  const n = num(value);
  let error = "";
  if (value.trim() !== "" && Number.isNaN(n)) error = "กรอกเป็นตัวเลขเท่านั้น";
  else if (!Number.isNaN(n) && n < min) error = `ต้องไม่น้อยกว่า ${min}`;
  else if (max !== undefined && !Number.isNaN(n) && n > max) error = `ต้องไม่เกิน ${max}`;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={help || error ? `${id}-d` : undefined}
      />
      {error ? (
        <span id={`${id}-d`} className="error">
          {error}
        </span>
      ) : help ? (
        <span id={`${id}-d`} className="help">
          {help}
        </span>
      ) : null}
    </div>
  );
}

interface ToggleProps {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

export function Toggle({ label, hint, checked, onChange }: ToggleProps) {
  return (
    <label className="toggle">
      <span>
        {label}
        {hint && <small>{hint}</small>}
      </span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </label>
  );
}

interface SegProps<T extends string> {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}

export function Segmented<T extends string>({ label, options, value, onChange }: SegProps<T>) {
  return (
    <div className="field" role="group" aria-label={label}>
      <span className="label">{label}</span>
      <div className="seg">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={o.value === value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

export function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="select" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Result({
  label,
  value,
  unit,
  rows,
  children,
}: {
  label: string;
  value: string;
  unit?: string;
  rows: [string, string][];
  children?: ReactNode;
}) {
  return (
    <div className="result" aria-live="polite">
      <div className="result-main">
        <span className="k">{label}</span>
        <span className="v">
          {value}
          {unit && <small>{unit}</small>}
        </span>
      </div>
      <dl className="result-list">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      {children}
    </div>
  );
}
