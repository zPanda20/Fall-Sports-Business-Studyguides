import { useState } from 'react';
import { Link } from 'react-router-dom';
import { markDone, setDueDate, formatDue, toLocalInput } from '../lib/deadlines.js';
import Countdown from './Countdown.jsx';
import Icon from './Icon.jsx';

// One assignment: a tick to mark it done (which archives it), its course, its date, and the live clock.
export default function DueRow({ item }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.dueMs ? toLocalInput(item.dueMs) : '');
  const hasDate = item.dueMs !== null;

  function save() {
    const ms = Date.parse(value);
    if (!value || Number.isNaN(ms)) return;
    setDueDate(item.id, new Date(ms).toISOString());
    setEditing(false);
  }

  return (
    <li className="due-item nm" data-course={item.courseId}>
      <button
        type="button"
        className="due-check"
        onClick={() => markDone(item.id)}
        aria-label={`Mark done and archive: ${item.title}`}
        title="Mark as done. It moves to the archive."
      >
        <Icon name="check" size={18} />
      </button>

      <div className="due-main">
        <h3 className="due-title">{item.title}</h3>
        <p className="due-meta">
          {item.courseId ? (
            <Link to={`/course/${item.courseId}`} className="due-course">{item.course}</Link>
          ) : (
            <span className="due-course plain">{item.course}</span>
          )}
          {item.group && <span className="due-course group">Group project</span>}
          {hasDate && <span className="due-when">{formatDue(item.dueMs)}</span>}
        </p>
        {item.note && <p className="due-note">{item.note}</p>}
        {item.files?.length > 0 && (
          <ul className="due-files" aria-label="Files for this assignment">
            {item.files.map((f) => (
              <li key={f.file}>
                <a href={`${import.meta.env.BASE_URL || '/'}files/${f.file}`} download className="due-file">
                  <span aria-hidden="true">⬇</span> {f.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {(editing || !hasDate) && (
          <form
            className="due-edit"
            onSubmit={(e) => {
              e.preventDefault();
              save();
            }}
          >
            <label>
              <span>{hasDate ? 'New due date and time' : item.approx ? 'Add the exact date and time when it is announced' : 'Add the due date and time'}</span>
              <input type="datetime-local" value={value} onChange={(e) => setValue(e.target.value)} required />
            </label>
            <div className="due-edit-actions">
              <button type="submit" className="button small">Save date</button>
              {editing && (
                <button type="button" className="button small secondary" onClick={() => setEditing(false)}>Cancel</button>
              )}
            </div>
          </form>
        )}

        {hasDate && !editing && (
          <p className="due-links">
            <button type="button" className="due-link" onClick={() => { setValue(toLocalInput(item.dueMs)); setEditing(true); }}>
              Change date
            </button>
            {item.changed && (
              <button type="button" className="due-link" onClick={() => setDueDate(item.id, null)}>
                Back to the original date
              </button>
            )}
          </p>
        )}
      </div>

      <div className="due-clock">
        {hasDate ? <Countdown dueMs={item.dueMs} /> : <span className="due-nodate">{item.approx ? `Expected: ${item.approx.toLowerCase()}` : 'No due date yet'}</span>}
      </div>
    </li>
  );
}
