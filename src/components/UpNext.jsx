import { Link } from 'react-router-dom';
import { useDeadlines, markDone, formatDue } from '../lib/deadlines.js';
import Countdown from './Countdown.jsx';
import Icon from './Icon.jsx';

// The next few things due, on the home page, with the same live clock.
export default function UpNext() {
  const { active } = useDeadlines();
  const dated = active.filter((d) => d.dueMs !== null).slice(0, 3);

  return (
    <section className="upnext glass" aria-labelledby="upnext-title">
      <div className="upnext-head">
        <h2 id="upnext-title" className="serif" style={{ fontSize: '1.3rem' }}>Coming up</h2>
        <Link to="/deadlines" className="text-link">All due dates ({active.length}) →</Link>
      </div>
      {dated.length === 0 ? (
        <p className="meta">
          {active.length === 0 ? 'Everything is handed in. Nice work.' : 'Nothing with a date yet. Open the list to add the missing dates.'}
        </p>
      ) : (
        <ul className="up-list" role="list">
          {dated.map((d) => (
            <li key={d.id} className="up-item">
              <button type="button" className="due-check" onClick={() => markDone(d.id)} aria-label={`Mark done and archive: ${d.title}`} title="Mark as done">
                <Icon name="check" size={16} />
              </button>
              <div className="up-main">
                <span className="up-title">{d.title}</span>
                <span className="meta">{d.course} · {formatDue(d.dueMs)}</span>
              </div>
              <Countdown dueMs={d.dueMs} compact />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
