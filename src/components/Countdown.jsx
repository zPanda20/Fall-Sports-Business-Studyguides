import { useNow, splitDuration, urgency, spoken } from '../lib/deadlines.js';

// A live clock to a due moment: days, hours, minutes, seconds, ticking every second.
// Past the deadline it counts up, so you can see how late it is.
export default function Countdown({ dueMs, compact = false }) {
  const now = useNow();
  const ms = dueMs - now;
  const { days, hours, minutes, seconds, late } = splitDuration(ms);
  const two = (n) => String(n).padStart(2, '0');
  const tone = urgency(ms);

  if (compact) {
    const text = `${days ? `${days}d ` : ''}${two(hours)}h ${two(minutes)}m ${two(seconds)}s`;
    return (
      <span className={`cd-line ${tone}`}>
        <span aria-hidden="true">{late ? `Overdue ${text}` : text}</span>
        <span className="sr-only">{spoken(ms)}</span>
      </span>
    );
  }

  const parts = [
    ['days', days],
    ['hrs', hours],
    ['min', minutes],
    ['sec', seconds],
  ];
  return (
    <div className={`cd ${tone}`} role="timer">
      <span className="cd-label" aria-hidden="true">{late ? 'Overdue by' : 'Due in'}</span>
      <div className="cd-tiles" aria-hidden="true">
        {parts.map(([unit, n]) => (
          <span key={unit} className="cd-tile">
            <b>{unit === 'days' ? n : two(n)}</b>
            <small>{unit}</small>
          </span>
        ))}
      </div>
      <span className="sr-only">{spoken(ms)}</span>
    </div>
  );
}
