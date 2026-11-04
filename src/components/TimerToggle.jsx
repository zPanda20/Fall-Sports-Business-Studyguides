import { useTimersOn, setTimersOn } from '../lib/deadlines.js';
import Icon from './Icon.jsx';

// Shows or hides the live countdown clocks. The dates stay visible either way.
export default function TimerToggle() {
  const on = useTimersOn();
  return (
    <button
      type="button"
      className="switch"
      role="switch"
      aria-checked={on}
      onClick={() => setTimersOn(!on)}
    >
      <span className="switch-track" aria-hidden="true"><span className="switch-dot" /></span>
      <Icon name="timer" size={18} />
      <span>Countdown timers {on ? 'on' : 'off'}</span>
    </button>
  );
}
