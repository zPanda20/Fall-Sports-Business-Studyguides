import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCourse, topicsForCourse } from '../data/index.js';
import { ExamQuestion } from '../components/ExamQuestions.jsx';
import Rich from '../lib/Rich.jsx';
import Icon from '../components/Icon.jsx';
import { mcqPool, drawTest } from './QuickTestPage.jsx';

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


const plain = (s) => String(s).replace(/\*\*/g, '');
const fmtClock = (sec) => {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const x = sec % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(x).padStart(2, '0')}`;
};

// A 2-hour clock for the full mock. It only counts; nothing stops you when it reaches zero.
function ExamClock({ minutes }) {
  const [left, setLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setLeft((v) => Math.max(0, v - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);
  return (
    <div className="mock-clock nm-inset" role="timer" aria-label="Exam clock">
      <b>{fmtClock(left)}</b>
      <span className="meta">{left === 0 ? 'Time is up. In the real exam you would stop here.' : running ? 'remaining' : `${minutes} minutes, as in the exam`}</span>
      <button type="button" className="button small secondary" onClick={() => setRunning((v) => !v)}>
        {running ? 'Pause' : left === minutes * 60 ? 'Start the clock' : 'Resume'}
      </button>
    </div>
  );
}

// Part A of the mock: multiple choice, answered one by one with the reason shown straight away.
function MockMcq({ qs }) {
  const [picked, setPicked] = useState({});
  const answered = Object.keys(picked).length;
  const score = qs.filter((q, n) => picked[n] === q.answerPos).length;
  return (
    <div className="stack">
      {qs.map((q, n) => {
        const p = picked[n];
        return (
          <article key={q.key} className="exam-q glass">
            <div className="exam-head">
              <span className="pill">1 mark</span>
              <span className="meta">{n + 1} of {qs.length}</span>
            </div>
            <p className="question"><Rich text={q.q} /></p>
            <ul className="options" role="list">
              {q.options.map((opt, i) => {
                const state = p === undefined ? '' : i === q.answerPos ? 'right' : i === p ? 'wrong' : 'dim';
                const mark = state === 'right' ? '✓' : state === 'wrong' ? '✕' : String.fromCharCode(65 + i);
                return (
                  <li key={opt.i}>
                    <button type="button" className={`option irid ${state}`} disabled={p !== undefined} onClick={() => setPicked({ ...picked, [n]: i })}>
                      <span className="option-mark" aria-hidden="true">{mark}</span>
                      <span>{opt.text}</span>
                      {state === 'right' && <span className="sr-only"> (correct answer)</span>}
                      {state === 'wrong' && <span className="sr-only"> (your answer, incorrect)</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
            {p !== undefined && (
              <div className={`feedback ${p === q.answerPos ? 'right' : 'wrong'}`} aria-live="polite">
                <strong>{p === q.answerPos ? 'Correct.' : 'Not quite.'}</strong>
                <span><Rich text={q.explanation} /></span>
              </div>
            )}
            {p !== undefined && p !== q.answerPos && (
              <Link className="text-link" to={`/topic/${q.topicId}?s=${q.review?.section || 'plain'}&slide=${q.review?.slide ?? 0}`}>
                Review: {q.topicTitle}
              </Link>
            )}
          </article>
        );
      })}
      <p className="meta" aria-live="polite">{answered === qs.length ? `Part A score: ${score} of ${qs.length}.` : `${answered} of ${qs.length} answered.`}</p>
    </div>
  );
}

const MCQ_MOCK = 15;

// Builds one sitting that follows the announced format.
function buildMock(bank, mcq) {
  const shorts = bank.filter((q) => q.kind === 'short');
  const core = bank.filter((q) => q.kind === 'essay' && q.group === 'core');
  const choice = bank.filter((q) => q.kind === 'essay' && q.group === 'choice');
  return {
    mcq: drawTest(mcq, Math.min(MCQ_MOCK, mcq.length)),
    shorts: shuffle(shorts).slice(0, 5),
    core: shuffle(core)[0],
    choice: shuffle(choice).slice(0, 2),
  };
}

export default function ExamPracticePage() {
  const { courseId } = useParams();
  const course = getCourse(courseId);
  const pool = useMemo(
    () =>
      course
        ? topicsForCourse(course.id).flatMap((t) =>
            (t.exam || []).map((q) => ({ q, qid: `${t.id}:${q.id}`, topic: t.title })),
          )
        : [],
    [course],
  );
  const bank = useMemo(
    () => (course?.examBank || []).map((q) => ({ q, qid: `bank:${q.id}`, topic: q.area })),
    [course],
  );
  const mcq = useMemo(() => (course ? mcqPool(course.id) : []), [course]);
  const [set, setSet] = useState(null);
  const [mode, setMode] = useState(null); // format view: null | 'mock' | 'mcq' | 'short' | 'essay' | 'older'
  const [mock, setMock] = useState(null);
  const [drawn, setDrawn] = useState(null);

  if (!course) {
    return (
      <div className="stack">
        <h1>Course not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  const crumbs = (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link to="/">Courses</Link> <span aria-hidden="true">/</span>{' '}
      <Link to={`/course/${course.id}`}>{course.short}</Link> <span aria-hidden="true">/</span> <span>Exam practice</span>
    </nav>
  );

  // ------------------------------------------------------------------ courses with a known exam format
  if (course.examFormat) {
    const fmt = course.examFormat;
    const shorts = bank.filter((b) => b.q.kind === 'short');
    const essays = bank.filter((b) => b.q.kind === 'essay');
    const core = essays.filter((b) => b.q.group === 'core');
    const choice = essays.filter((b) => b.q.group === 'choice');

    function startMock() {
      setMock(buildMock(
        bank.map((b) => b.q),
        mcq,
      ));
      setMode('mock');
    }
    function draw(m) {
      if (m === 'short') setDrawn(shuffle(shorts).slice(0, 5));
      if (m === 'essay') setDrawn([shuffle(core)[0], ...shuffle(choice).slice(0, 2)]);
      if (m === 'older') setDrawn(shuffle(pool).slice(0, Math.min(5, pool.length)));
      setMode(m);
    }

    const back = (
      <div className="row">
        <button type="button" className="button secondary" onClick={() => { setMode(null); setMock(null); setDrawn(null); }}>Back to the exam menu</button>
      </div>
    );

    return (
      <div className="stack-lg narrow" data-course={course.id}>
        <header className="stack">
          {crumbs}
          <h1>Exam practice</h1>
          <p className="lead">Built to match the real final exam: {fmt.date}, {fmt.minutes / 60} hours, {fmt.mode.toLowerCase()}.</p>
        </header>

        {mode === null && (
          <>
            <section className="exam-format glass" aria-label="The real exam format">
              <h2>What the real exam looks like</h2>
              <ol className="exam-parts">
                {fmt.parts.map((pt) => (
                  <li key={pt.name}><strong>{pt.name}.</strong> {pt.detail}</li>
                ))}
              </ol>
              <p className="meta"><strong>It tests:</strong> {fmt.focus}</p>
              <p className="meta">The instructor has not given marks per question, so the marks here are practice marks: one per point in a short answer, and 20 for an essay.</p>
            </section>
            <div className="exam-modes">
              <button type="button" className="exam-mode nm irid" onClick={startMock}>
                <Icon name="dice" size={22} />
                <b>Full mock exam</b>
                <span>{MCQ_MOCK} multiple choice, 5 short answers, 1 core essay and 1 essay from two. With the 2-hour clock.</span>
              </button>
              <button type="button" className="exam-mode nm irid" onClick={() => setMode('mcq')}>
                <Icon name="practice" size={22} />
                <b>Multiple choice</b>
                <span>{mcq.length} questions across all topics, in the Quick test.</span>
              </button>
              <button type="button" className="exam-mode nm irid" onClick={() => draw('short')}>
                <Icon name="practice" size={22} />
                <b>Short answers ({shorts.length})</b>
                <span>5 random questions. Answer with 5 to 6 points, then mark yourself.</span>
              </button>
              <button type="button" className="exam-mode nm irid" onClick={() => draw('essay')}>
                <Icon name="practice" size={22} />
                <b>Essays ({essays.length})</b>
                <span>One everyone answers and two to choose from. Practice planning an argument.</span>
              </button>
              {pool.length > 0 && (
                <button type="button" className="exam-mode nm irid" onClick={() => draw('older')}>
                  <Icon name="practice" size={22} />
                  <b>Topic questions ({pool.length})</b>
                  <span>Shorter written questions from each lecture topic.</span>
                </button>
              )}
            </div>
          </>
        )}

        {mode === 'mock' && mock && (
          <>
            <ExamClock minutes={fmt.minutes} />
            <section className="stack" aria-label="Part A multiple choice">
              <h2 className="exam-section">Part A. Multiple choice</h2>
              <MockMcq qs={mock.mcq} />
            </section>
            <section className="stack" aria-label="Part B short answers">
              <h2 className="exam-section">Part B. Short answers</h2>
              <p className="meta">Answer each with 5 to 6 points. Bullet points are fine.</p>
              {mock.shorts.map((q, i) => (
                <ExamQuestion key={q.id} q={q} qid={`bank:${q.id}`} heading={`${i + 1} of ${mock.shorts.length} · ${q.area}`} />
              ))}
            </section>
            <section className="stack" aria-label="Part C essays">
              <h2 className="exam-section">Part C. Essays</h2>
              <p className="meta">Essay 1 is compulsory. For essay 2, choose one of the two options.</p>
              <ExamQuestion q={mock.core} qid={`bank:${mock.core.id}`} heading={`Essay 1 (everyone) · ${mock.core.area}`} />
              <p className="meta"><strong>Essay 2: choose one of these two.</strong></p>
              {mock.choice.map((q, i) => (
                <ExamQuestion key={q.id} q={q} qid={`bank:${q.id}`} heading={`Option ${String.fromCharCode(65 + i)} · ${q.area}`} />
              ))}
            </section>
            <div className="row">
              <button type="button" className="button" onClick={startMock}>New mock exam</button>
              {back}
            </div>
          </>
        )}

        {mode === 'mcq' && (
          <div className="glass" style={{ padding: 24 }}>
            <p>The multiple choice part uses the same questions as the Quick test, which also shows a review link for every answer you miss.</p>
            <div className="row">
              <Link to={`/course/${course.id}/test`} className="button fit">Open the Quick test</Link>
              {back}
            </div>
          </div>
        )}

        {(mode === 'short' || mode === 'essay' || mode === 'older') && drawn && (
          <>
            {mode === 'essay' && (
              <p className="meta">Essay 1 is the one everyone answers. Pick one of the other two for essay 2, and plan your argument before you read the model answer.</p>
            )}
            <div className="stack">
              {drawn.map((item, i) => {
                const q = item.q || item;
                const qid = item.qid || `bank:${q.id}`;
                const label =
                  mode === 'essay'
                    ? i === 0 ? `Essay 1 (everyone) · ${q.area}` : `Option ${String.fromCharCode(64 + i)} for essay 2 · ${q.area}`
                    : `${i + 1} of ${drawn.length} · ${item.topic || q.area}`;
                return <ExamQuestion key={qid} q={q} qid={qid} heading={label} note={q.note} />;
              })}
            </div>
            <div className="row">
              <button type="button" className="button" onClick={() => draw(mode)}>New random set</button>
              {back}
            </div>
          </>
        )}
      </div>
    );
  }

  // ------------------------------------------------------------------ other courses
  return (
    <div className="stack-lg narrow" data-course={course.id}>
      <header className="stack">
        {crumbs}
        <h1>Exam practice</h1>
        <p className="lead">
          Written questions at exam level. Write your own answer first, then compare with the model answer and mark yourself point by point.
        </p>
      </header>

      {pool.length === 0 ? (
        <div className="glass" style={{ padding: 24 }}>
          <p>No exam-style questions are ready for this course yet.</p>
        </div>
      ) : !set ? (
        <>
          <div className="size-picker" role="group" aria-label="How many questions">
            {[3, 5, 8].map((n) => (
              <button key={n} type="button" className="size-btn nm irid" onClick={() => setSet(shuffle(pool).slice(0, Math.min(n, pool.length)))}>
                <Icon name="dice" size={22} />
                <b>{Math.min(n, pool.length)}</b>
                <span>random questions</span>
              </button>
            ))}
          </div>
          <p className="meta">{pool.length} exam-style questions across {course.short}. You can also find them in the Practice section of each topic.</p>
        </>
      ) : (
        <>
          <div className="stack">
            {set.map((item, i) => (
              <ExamQuestion key={item.qid} q={item.q} qid={item.qid} heading={`${i + 1} of ${set.length} · ${item.topic}`} />
            ))}
          </div>
          <div className="row">
            <button type="button" className="button" onClick={() => setSet(shuffle(pool).slice(0, set.length))}>New random {set.length}</button>
            <button type="button" className="button secondary" onClick={() => setSet(null)}>Change size</button>
          </div>
        </>
      )}
    </div>
  );
}
