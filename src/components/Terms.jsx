import { useState } from 'react';
import { Link } from 'react-router-dom';

// Tap a term to see its meaning. Compact enough to stay in the first screen.
export default function Terms({ terms, courseId, topicId }) {
  const [active, setActive] = useState(0);
  const term = terms[active];

  return (
    <div className="stack">
      <div className="term-grid" role="group" aria-label="Key terms">
        {terms.map((t, n) => (
          <button
            key={t.term}
            type="button"
            className="term-chip irid"
            aria-pressed={n === active}
            onClick={() => setActive(n)}
          >
            {t.term}
          </button>
        ))}
      </div>

      <div key={active} className="term-detail glass" data-glow aria-live="polite">
        <span className="eyebrow">Term {active + 1} of {terms.length}</span>
        <span className="serif">{term.term}</span>
        <p>{term.def}</p>
      </div>

      <Link to={`/course/${courseId}/flashcards?topic=${topicId}`} className="button secondary fit irid">
        Flashcards for this topic
      </Link>
    </div>
  );
}
