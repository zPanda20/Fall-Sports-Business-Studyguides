import { Link } from 'react-router-dom';
import { useDeadlines, restore, formatDay } from '../lib/deadlines.js';
import DueRow from '../components/DueRow.jsx';
import TimerToggle from '../components/TimerToggle.jsx';
import Ring from '../components/Ring.jsx';

export default function DeadlinesPage() {
  const { active, archived } = useDeadlines();

  return (
    <div className="stack-lg">
      <header className="stack">
        <h1>Due dates</h1>
        <p className="lead">
          Tick an assignment when you have handed it in. It moves to the archive below. Your ticks are
          saved on this device only, so everyone keeps their own list.
        </p>
        <div className="head-progress">
          <Ring value={archived.length / (archived.length + active.length || 1)} size={72} stroke={8} label={`${archived.length}/${archived.length + active.length}`} sub="handed in" title={`${archived.length} of ${archived.length + active.length} handed in`} />
          <TimerToggle />
        </div>
      </header>

      <section className="stack" aria-labelledby="due-active">
        <h2 id="due-active" className="block-title serif" style={{ fontSize: '1.3rem' }}>
          To do ({active.length})
        </h2>
        {active.length === 0 ? (
          <div className="glass due-empty">
            <h3 className="serif" style={{ fontSize: '1.2rem' }}>All caught up</h3>
            <p className="meta">Nothing is waiting. Finished items are in the archive below.</p>
          </div>
        ) : (
          <ul className="due-list" role="list">
            {active.map((item) => (
              <DueRow key={item.id} item={item} />
            ))}
          </ul>
        )}
      </section>

      <section className="stack" aria-labelledby="due-archive">
        <details className="due-archive" open={archived.length > 0 && active.length === 0 ? true : undefined}>
          <summary id="due-archive">Archive ({archived.length})</summary>
          {archived.length === 0 ? (
            <p className="meta" style={{ marginTop: 12 }}>Nothing archived yet. Items you tick off will appear here.</p>
          ) : (
            <ul className="arch-list" role="list">
              {archived.map((item) => (
                <li key={item.id} className="arch-item">
                  <div>
                    <span className="arch-title">{item.title}</span>
                    <span className="meta">
                      {item.course} · done {formatDay(item.doneAt)}
                    </span>
                  </div>
                  <button type="button" className="button small secondary" onClick={() => restore(item.id)}>
                    Put back
                  </button>
                </li>
              ))}
            </ul>
          )}
        </details>
      </section>

      <p className="meta">
        Dates come from the course platform and are shown in your own time zone. If your instructor changes a
        date, use &ldquo;Change date&rdquo; on that item. <Link to="/">Back to courses</Link>
      </p>
    </div>
  );
}
