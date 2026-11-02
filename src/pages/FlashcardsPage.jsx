import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getCourse, getTopic, cardsForCourse } from '../data/index.js';
import { useProgress, setKnown } from '../lib/progress.js';

export default function FlashcardsPage() {
  const { courseId } = useParams();
  const [params] = useSearchParams();
  const topicId = params.get('topic') || undefined;
  const course = getCourse(courseId);
  const progress = useProgress();

  const all = useMemo(() => cardsForCourse(courseId, topicId), [courseId, topicId]);
  const [hideKnown, setHideKnown] = useState(false);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = hideKnown ? all.filter((c) => !progress.known[c.id]) : all;
  const card = deck[Math.min(index, Math.max(deck.length - 1, 0))];
  const knownCount = all.filter((c) => progress.known[c.id]).length;

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [courseId, topicId, hideKnown]);

  if (!course) {
    return (
      <div className="stack">
        <h1>Course not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  const topic = topicId ? getTopic(topicId) : null;

  function go(delta) {
    if (!deck.length) return;
    setIndex((i) => (i + delta + deck.length) % deck.length);
    setFlipped(false);
  }

  function mark(isKnown) {
    setKnown(card.id, isKnown);
    if (hideKnown && isKnown) {
      // the card leaves the deck; stay at the same position
      setFlipped(false);
    } else {
      go(1);
    }
  }

  return (
    <div className="stack-lg" data-course={course.id}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Courses</Link> <span aria-hidden="true">/</span>{' '}
        <Link to={`/course/${course.id}`}>{course.short}</Link> <span aria-hidden="true">/</span>{' '}
        <span>Flashcards</span>
      </nav>

      <header className="stack">
        <h1>Flashcards</h1>
        <p className="lead">{topic ? topic.title : `All ${course.short} terms so far`}</p>
        <p className="meta">
          {knownCount} of {all.length} marked as known
        </p>
        {topic && (
          <Link to={`/course/${course.id}/flashcards`} className="text-link">
            Show cards from every topic
          </Link>
        )}
      </header>

      {!card ? (
        <div className="card">
          <p>{all.length ? 'You have marked every card as known. Nice work.' : 'No cards yet.'}</p>
          {all.length > 0 && (
            <button type="button" className="button secondary" onClick={() => setHideKnown(false)}>
              Show all cards again
            </button>
          )}
        </div>
      ) : (
        <div className="stack">
          <p className="quiz-count" aria-live="polite">
            Card {Math.min(index, deck.length - 1) + 1} of {deck.length}
          </p>
          <button
            type="button"
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
            aria-label={flipped ? 'Answer shown. Tap to show the question again.' : 'Tap to reveal the answer.'}
          >
            <span className="flash-kind">{flipped ? 'Answer' : card.kind}</span>
            <span className="flash-text">{flipped ? card.back : card.front}</span>
            <span className="flash-hint">{flipped ? 'Tap to flip back' : 'Tap to reveal'}</span>
          </button>
          <p className="meta center">From: {card.topicTitle}</p>

          <div className="row">
            <button type="button" className="button secondary" onClick={() => go(-1)}>← Previous</button>
            <button type="button" className="button secondary" onClick={() => go(1)}>Next →</button>
          </div>
          {flipped && (
            <div className="row">
              <button type="button" className="button secondary" onClick={() => mark(false)}>
                Still learning
              </button>
              <button type="button" className="button" onClick={() => mark(true)}>
                Got it
              </button>
            </div>
          )}

          <label className="check">
            <input type="checkbox" checked={hideKnown} onChange={(e) => setHideKnown(e.target.checked)} />
            <span>Hide cards I already know</span>
          </label>
        </div>
      )}
    </div>
  );
}
