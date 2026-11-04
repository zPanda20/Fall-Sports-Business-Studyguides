import { useEffect, useMemo, useRef, useState } from 'react';
import Rich from '../lib/Rich.jsx';
import { balanceAt } from '../lib/balance.js';

// An animated balance sheet. Step through events one at a time and watch the bars move
// while Assets always equal Liabilities + Equity.
// block: { unit, lines:{assets:[...],liabilities:[...],equity:[...]}, steps:[{event, effects:{line:delta}, note?}] }

// Counts a number up or down to its new value instead of jumping.
function useTween(target, ms = 650) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setV(target);
      from.current = target;
      return undefined;
    }
    const start = performance.now();
    const a = from.current;
    let raf;
    const tick = (t) => {
      const k = Math.min(1, (t - start) / ms);
      const e = 1 - (1 - k) * (1 - k) * (1 - k);
      const cur = a + (target - a) * e;
      from.current = cur;
      setV(cur);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

const fmt = (n, unit) => `${unit?.startsWith('$') ? '$' : ''}${Math.round(n).toLocaleString('en-US')}${unit === '$M' ? 'M' : unit && !unit.startsWith('$') ? ` ${unit}` : ''}`;

function Line({ name, value, max, changed, unit }) {
  const v = useTween(value);
  return (
    <li className={`bl-line ${changed ? 'changed' : ''}`}>
      <span className="bl-name">{name}</span>
      <span className="bl-bar"><span style={{ width: `${Math.max(0, (v / max) * 100)}%` }} /></span>
      <span className="bl-val">{fmt(v, unit)}</span>
    </li>
  );
}

function Total({ label, value, unit }) {
  const v = useTween(value);
  return (
    <div className="bl-total">
      <span>{label}</span>
      <b>{fmt(v, unit)}</b>
    </div>
  );
}

export default function BalanceLab({ block }) {
  const [step, setStep] = useState(0);
  const values = useMemo(() => balanceAt(block, step), [block, step]);
  const prev = useMemo(() => balanceAt(block, Math.max(0, step - 1)), [block, step]);
  const sum = (names) => names.reduce((s, n) => s + values[n], 0);
  const A = sum(block.lines.assets);
  const L = sum(block.lines.liabilities);
  const E = sum(block.lines.equity);
  const max = Math.max(1, ...Object.values(values).map(Math.abs), ...Object.values(balanceAt(block, block.steps.length)).map(Math.abs));
  const cur = step > 0 ? block.steps[step - 1] : null;
  const balanced = Math.abs(A - (L + E)) < 1e-9;

  const col = (title, names, total, tone) => (
    <div className={`bl-col ${tone}`}>
      <h4>{title}</h4>
      <ul>
        {names.map((n) => (
          <Line key={n} name={n} value={values[n]} max={max} unit={block.unit} changed={step > 0 && values[n] !== prev[n]} />
        ))}
      </ul>
      <Total label="Total" value={total} unit={block.unit} />
    </div>
  );

  return (
    <div className="balance-lab nm-inset">
      <div className="bl-event" aria-live="polite">
        <span className="meta">{step === 0 ? 'Start' : `Event ${step} of ${block.steps.length}`}</span>
        <p><Rich text={cur ? cur.event : 'Everything starts at zero. Step through the events and watch each side move.'} /></p>
        {cur?.note && <p className="meta"><Rich text={cur.note} /></p>}
      </div>

      <div className="bl-grid">
        {col('Assets', block.lines.assets, A, 'a')}
        <div className="bl-eq" aria-hidden="true">=</div>
        <div className="bl-right">
          {col('Liabilities', block.lines.liabilities, L, 'l')}
          <div className="bl-plus" aria-hidden="true">+</div>
          {col('Owners’ equity', block.lines.equity, E, 'e')}
        </div>
      </div>

      <p className={`bl-check ${balanced ? 'ok' : 'bad'}`} role="status">
        {balanced
          ? `Balanced: ${fmt(A, block.unit)} assets = ${fmt(L, block.unit)} liabilities + ${fmt(E, block.unit)} equity`
          : 'Out of balance'}
      </p>

      <div className="bl-controls">
        <button type="button" className="button small secondary" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>← Back</button>
        <button type="button" className="button small" onClick={() => setStep(Math.min(block.steps.length, step + 1))} disabled={step === block.steps.length}>
          {step === 0 ? 'Start' : 'Next event →'}
        </button>
        <button type="button" className="button small secondary" onClick={() => setStep(0)} disabled={step === 0}>Reset</button>
      </div>
    </div>
  );
}
