// A circular progress ring. value is 0 to 1. The ring fills smoothly when it changes.
export default function Ring({ value, size = 64, stroke = 7, label, sub, tone, title }) {
  const v = Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span
      className={`ring ${tone || ''}`}
      style={{ width: size, height: size, '--rs': `${size}px` }}
      role="img"
      aria-label={title || `${Math.round(v * 100)} percent${sub ? `, ${sub}` : ''}`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle className="ring-track" cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} />
        <circle
          className="ring-fill"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - v)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="ring-text" aria-hidden="true">
        <b>{label ?? `${Math.round(v * 100)}%`}</b>
        {sub && <small>{sub}</small>}
      </span>
    </span>
  );
}
