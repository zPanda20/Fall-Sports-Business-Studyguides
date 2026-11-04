import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCourse, topicsForCourse } from '../data/index.js';
import { recordTest, useProgress } from '../lib/progress.js';
import { emit } from '../companions/events.js';
import { questionPrompt, bundlePrompt } from '../lib/ai.js';
import Rich from '../lib/Rich.jsx';
import AskAI from '../components/AskAI.jsx';
import Ring from '../components/Ring.jsx';
import Icon from '../components/Icon.jsx';

const plain = (s) => String(s).replace(/\*\*/g, '');
const SIZES = [5, 10, 15];

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Every multiple-choice question in the course, tagged with the topic it came from.
export function mcqPool(courseId, topicIds) {
  return topicsForCourse(courseId)
    .filter((t) => !topicIds || topicIds.includes(t.id))
    .flatMap((t) =>
      (t.questions || [])
        .filter((q) => q.type === 'mcq')
        .map((q) => ({ ...q, key: `${t.id}:${q.id}`, topicId: t.id, topicTitle: t.title })),
    );
}

// A random set of questions with the answer choices shuffled too.
export function drawTest(pool, n) {
  return shuffle(pool)
    .slice(0, n)
    .map((q) => {
      const options = shuffle(q.options.map((text, i) => ({ text, i })));
      return { ...q, options, answerPos: options.findIndex((o) => o.i === q.answer) };
    });
}

export default function QuickTestPage() {
  const { courseId } = useParams();
  const course = getCourse(courseId);
  const progress = useProgress();
  const [topicIds, setTopicIds] = useState(null); // null = every topic
  const [test, setTest] = useState(null); // { qs, index, picked, results[] }

  const topics = course ? topicsForCourse(course.id).filter((t) => (t.questions || []).some((q) => q.type === 'mcq')) : [];
  const pool = useMemo(() => (course ? mcqPool(course.id, topicIds) : []), [course, topicIds]);

  if (!course) {
    return (
      <div className="stack">
        <h1>Course not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  const history = progress.tests[course.id] || [];
  const last = history[history.length - 1];

  function start(n) {
    setTest({ qs: drawTest(pool, n), index: 0, picked: null, results: [] });
  }
  function pick(i) {
    if (test.picked !== null) return;
    const q = test.qs[test.index];
    emit('study:quiz-answer', {
      source: 'test',
      courseId: course.id,
      topicId: q.topicId,
      correct: i === q.answerPos,
      explanation: q.explanation ? plain(q.explanation) : null,
    });
    setTest({ ...test, picked: i, results: [...test.results, { q, i, ok: i === q.answerPos }] });
  }
  function next() {
    const done = test.index === test.qs.length - 1;
    if (done) {
      const score = test.results.filter((r) => r.ok).length;
      const before = history[history.length - 1];
      emit('study:quiz-complete', { source: 'test', courseId: course.id, correct: score, total: test.qs.length, prev: before ? { last: before.correct, total: before.total } : null });
      recordTest(course.id, score, test.qs.length);
      setTest({ ...test, finished: true });
    } else {
      setTest({ ...test, index: test.index + 1, picked: null });
    }
  }
  function toggleTopic(id) {
    const all = topics.map((t) => t.id);
    const cur = topicIds ?? all;
    const nextIds = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    setTopicIds(nextIds.length === all.length ? null : nextIds);
  }

  const crumbs = (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link to="/">Courses</Link> <span aria-hidden="true">/</span>{' '}
      <Link to={`/course/${course.id}`}>{course.short}</Link> <span aria-hidden="true">/</span> <span>Quick test</span>
    </nav>
  );

  // ---- results ----
  if (test?.finished) {
    const score = test.results.filter((r) => r.ok).length;
    const missed = test.results.filter((r) => !r.ok);
    return (
      <div className="stack-lg narrow" data-course={course.id}>
        {crumbs}
        <div className="quiz glass" aria-live="polite">
          <div className="test-score">
            <Ring value={score / test.qs.length} size={112} stroke={10} label={`${score}/${test.qs.length}`} sub="correct" />
            <div>
              <h1 style={{ fontSize: '1.6rem' }}>Test complete</h1>
              <p className="meta">
                {score === test.qs.length ? 'A clean sweep.' : `${missed.length} to revisit.`}
              </p>
            </div>
          </div>
          {missed.length > 0 && (
            <>
              <ul className="missed-list">
                {missed.map((m) => (
                  <li key={m.q.key} className="nm-inset">
                    <strong><Rich text={m.q.q} /></strong>
                    <div className="you">You chose: {plain(m.q.options[m.i].text)}</div>
                    <div className="right">Correct: {plain(m.q.options[m.q.answerPos].text)}</div>
                    <Link className="text-link" to={`/topic/${m.q.topicId}?s=${m.q.review?.section || 'plain'}&slide=${m.q.review?.slide ?? 0}`}>
                      Review: {m.q.topicTitle}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="helpers nm-inset">
                <span className="helpers-title">Get help with all {missed.length} at once</span>
                <AskAI
                  label="Ask an AI"
                  prompt={bundlePrompt({
                    course: course.title,
                    topic: 'a mixed quick test',
                    items: missed.map((m) => ({
                      question: plain(m.q.q),
                      picked: plain(m.q.options[m.i].text),
                      correct: plain(m.q.options[m.q.answerPos].text),
                    })),
                  })}
                />
              </div>
            </>
          )}
          <div className="row">
            <button type="button" className="button" onClick={() => start(test.qs.length)}>New random {test.qs.length}</button>
            <button type="button" className="button secondary" onClick={() => setTest(null)}>Change size</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- a question ----
  if (test) {
    const q = test.qs[test.index];
    const wrong = test.picked !== null && test.picked !== q.answerPos;
    return (
      <div className="stack-lg narrow" data-course={course.id}>
        {crumbs}
        <div className="quiz glass">
          <div className="test-head">
            <Ring value={test.index / test.qs.length} size={52} stroke={6} label={`${test.index + 1}`} sub={`of ${test.qs.length}`} title={`Question ${test.index + 1} of ${test.qs.length}`} />
            <span className="pill">{q.topicTitle}</span>
          </div>
          <p className="question"><Rich text={q.q} /></p>
          <ul className="options" role="list">
            {q.options.map((opt, i) => {
              const state = test.picked === null ? '' : i === q.answerPos ? 'right' : i === test.picked ? 'wrong' : 'dim';
              const mark = state === 'right' ? '✓' : state === 'wrong' ? '✕' : String.fromCharCode(65 + i);
              return (
                <li key={opt.i}>
                  <button type="button" className={`option irid ${state}`} onClick={() => pick(i)} disabled={test.picked !== null}>
                    <span className="option-mark" aria-hidden="true">{mark}</span>
                    <span>{opt.text}</span>
                    {state === 'right' && <span className="sr-only"> (correct answer)</span>}
                    {state === 'wrong' && <span className="sr-only"> (your answer, incorrect)</span>}
                  </button>
                </li>
              );
            })}
          </ul>
          {test.picked !== null && (
            <div className={`feedback ${wrong ? 'wrong' : 'right'}`} aria-live="polite">
              <strong>{wrong ? 'Not quite.' : 'Correct.'}</strong>
              <span><Rich text={q.explanation} /></span>
            </div>
          )}
          {wrong && (
            <div className="helpers nm-inset">
              <span className="helpers-title">Want to understand it better?</span>
              <div className="row">
                <Link className="button small secondary irid" to={`/topic/${q.topicId}?s=${q.review?.section || 'plain'}&slide=${q.review?.slide ?? 0}`}>
                  Review this section
                </Link>
              </div>
              <AskAI
                label="Explain it"
                prompt={questionPrompt({
                  course: course.title,
                  topic: q.topicTitle,
                  question: plain(q.q),
                  picked: plain(q.options[test.picked].text),
                  correct: plain(q.options[q.answerPos].text),
                })}
              />
            </div>
          )}
          {test.picked !== null && (
            <button type="button" className="button fit" onClick={next}>
              {test.index === test.qs.length - 1 ? 'See results' : 'Next question'}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---- setup ----
  return (
    <div className="stack-lg narrow" data-course={course.id}>
      <header className="stack">
        {crumbs}
        <h1>Quick test</h1>
        <p className="lead">A random set of multiple-choice questions from across {course.short}. Pick how many.</p>
        {last && (
          <p className="meta">Last time: {last.correct} of {last.total} right.</p>
        )}
      </header>

      {pool.length === 0 ? (
        <div className="glass" style={{ padding: 24 }}>
          <p>No multiple-choice questions are ready for this course yet.</p>
        </div>
      ) : (
        <>
          <div className="size-picker" role="group" aria-label="How many questions">
            {SIZES.map((n) => (
              <button key={n} type="button" className="size-btn nm irid" disabled={pool.length < Math.min(n, 5)} onClick={() => start(Math.min(n, pool.length))}>
                <Icon name="dice" size={22} />
                <b>{Math.min(n, pool.length)}</b>
                <span>{n > pool.length ? 'all of them' : 'questions'}</span>
              </button>
            ))}
          </div>
          <p className="meta">{pool.length} questions to draw from{topicIds ? ' in the topics you chose' : ''}. Every test is a fresh random mix, and the answer order is shuffled too.</p>

          {topics.length > 1 && (
            <details className="due-archive">
              <summary>Choose topics ({(topicIds ?? topics.map((t) => t.id)).length} of {topics.length})</summary>
              <div className="chips" style={{ marginTop: 12 }}>
                {topics.map((t) => {
                  const on = (topicIds ?? topics.map((x) => x.id)).includes(t.id);
                  return (
                    <button key={t.id} type="button" className="chip" aria-pressed={on} onClick={() => toggleTopic(t.id)}>
                      {on ? '✓ ' : ''}{t.title}
                    </button>
                  );
                })}
              </div>
            </details>
          )}
        </>
      )}
    </div>
  );
}
