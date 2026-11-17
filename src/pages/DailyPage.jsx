import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCourse } from '../data/index.js';
import { useBookmarks } from '../lib/bookmarks.js';
import { buildCatalog, SIZES } from '../lib/dailyPick.js';
import {
  BADGES, MAX_SHIELDS, POINTS, SHOP,
  answer, buy, equip, finishQuiz, nextRank, rankFor, startQuiz, streakNow, todayQuiz, useDaily, viewItem, weekStrip,
} from '../lib/daily.js';
import { bundlePrompt, questionPrompt } from '../lib/ai.js';
import Rich from '../lib/Rich.jsx';
import AskAI from '../components/AskAI.jsx';
import Ring from '../components/Ring.jsx';
import Icon from '../components/Icon.jsx';

const plain = (s) => String(s).replace(/\*\*/g, '');
const DAY_LETTERS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dayLetter = (key) => DAY_LETTERS[new Date(`${key}T12:00:00`).getDay()];
const shopItem = (id) => SHOP.find((s) => s.id === id);

// A short burst of falling emoji when a quiz is finished. Hidden for people who prefer reduced motion (see the CSS).
function Burst({ glyphs }) {
  const [on, setOn] = useState(true);
  const bits = useMemo(
    () => Array.from({ length: 28 }, (_, i) => ({
      left: Math.random() * 100, delay: Math.random() * 0.9, dur: 2.4 + Math.random() * 1.6,
      glyph: glyphs[i % glyphs.length], size: 16 + Math.random() * 16, drift: Math.round((Math.random() - 0.5) * 90),
    })),
    [glyphs],
  );
  useEffect(() => {
    const t = setTimeout(() => setOn(false), 5200);
    return () => clearTimeout(t);
  }, []);
  if (!on) return null;
  return (
    <div className="burst" aria-hidden="true">
      {bits.map((b, i) => (
        <span key={i} style={{ left: `${b.left}%`, animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s`, fontSize: b.size, '--drift': `${b.drift}px` }}>{b.glyph}</span>
      ))}
    </div>
  );
}

function StreakCard({ d }) {
  const streak = streakNow(d);
  const week = weekStrip(d);
  const rank = rankFor(d.lifetime);
  const upcoming = nextRank(d.lifetime);
  const status = {
    safe: 'Done for today. See you tomorrow.',
    open: 'Finish today’s quiz to keep it going.',
    shield: 'You missed a day, but a streak shield will cover it.',
    broken: d.best > 0 ? 'Start a new streak today.' : 'Do your first quiz to start a streak.',
  }[streak.status];
  return (
    <section className="streak-card glass" aria-label="Your streak and points">
      <div className="streak-main">
        <span className={`flame ${streak.count > 0 ? 'lit' : ''}`} aria-hidden="true"><Icon name="flame" size={34} /></span>
        <div>
          <p className="streak-count"><b>{streak.count}</b> day streak</p>
          <p className="meta">{status}</p>
        </div>
      </div>
      <ol className="week-strip" aria-label="The last seven days">
        {week.map((w) => (
          <li key={w.key} className={`${w.done ? 'done' : ''} ${w.today ? 'today' : ''} ${w.shielded && !w.done ? 'shielded' : ''}`} aria-label={`${w.key}: ${w.done ? 'quiz done' : w.shielded ? 'covered by a shield' : 'no quiz'}`}>
            <span>{dayLetter(w.key)}</span>
            <i aria-hidden="true">{w.done ? '✓' : w.shielded ? '🛡' : ''}</i>
          </li>
        ))}
      </ol>
      <div className="stat-row">
        <div className="stat nm-inset"><b>{d.points}</b><span>points</span></div>
        <div className="stat nm-inset"><b>{rank.name}</b><span>{upcoming ? `${upcoming.at - d.lifetime} to ${upcoming.name}` : 'top rank'}</span></div>
        <div className="stat nm-inset"><b>{d.best}</b><span>best streak</span></div>
        <div className="stat nm-inset"><b>{d.shields}/{MAX_SHIELDS}</b><span>shields</span></div>
      </div>
    </section>
  );
}

function Shelf({ d }) {
  return (
    <section className="stack" aria-label="Unlocks">
      <h2>Unlock shelf</h2>
      <p className="meta">Points you earn can be spent here. Ranks and badges come automatically.</p>
      <div className="shelf">
        {SHOP.map((it) => {
          const owned = it.consumable ? false : d.owned[it.id];
          const equipped = it.kind === 'theme' ? d.theme === it.id : it.kind === 'burst' ? d.burst === it.id : false;
          const can = d.points >= it.cost;
          const full = it.consumable && d.shields >= MAX_SHIELDS;
          return (
            <div key={it.id} className="shelf-item nm" data-kind={it.kind} data-id={it.id}>
              <div className="shelf-top">
                <b>{it.name}</b>
                {it.kind === 'theme' && <span className={`swatch ${it.id}`} aria-hidden="true" />}
                {it.kind === 'burst' && <span className="glyphs" aria-hidden="true">{it.glyphs.slice(0, 3).join(' ')}</span>}
                {it.kind === 'shield' && <span className="glyphs" aria-hidden="true">🛡️</span>}
              </div>
              <p className="meta">{it.blurb}</p>
              {owned ? (
                <button type="button" className="button small secondary" disabled={equipped} onClick={() => equip(it.id)}>
                  {equipped ? 'In use' : 'Use this'}
                </button>
              ) : (
                <button type="button" className="button small" disabled={!can || full} onClick={() => buy(it.id)}>
                  {full ? 'Holding the max' : `${it.cost} points`}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <h3>Badges</h3>
      <ul className="badge-grid" role="list">
        {BADGES.map((b) => (
          <li key={b.id} className={`badge nm-inset ${d.badges[b.id] ? 'got' : ''}`}>
            <b>{b.name}</b>
            <span>{d.badges[b.id] ? 'Earned' : b.blurb}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Question({ item, index, total, quiz, onNext }) {
  const q = useMemo(() => viewItem(item), [item]);
  const done = quiz.results[index] !== undefined;
  const picks = quiz.answers[index] || [];
  const [draft, setDraft] = useState([]);
  useEffect(() => setDraft([]), [index]);
  if (!q) return null;
  const course = getCourse(q.courseId);
  const ok = quiz.results[index];
  const isReview = quiz.reviewKeys?.includes(q.key);

  const stateOf = (o) => {
    if (!done) return draft.includes(o.orig) ? 'picked' : '';
    const right = q.answers.includes(o.orig);
    if (right) return 'right';
    return picks.includes(o.orig) ? 'wrong' : 'dim';
  };
  function tap(o) {
    if (done) return;
    if (q.multi) setDraft((cur) => (cur.includes(o.orig) ? cur.filter((x) => x !== o.orig) : [...cur, o.orig]));
    else answer(index, [o.orig]);
  }
  const optText = (list) => q.options.filter((o) => list.includes(o.orig)).map((o) => plain(o.text)).join('; ');

  return (
    <div className="quiz glass">
      <div className="test-head">
        <Ring value={index / total} size={52} stroke={6} label={`${index + 1}`} sub={`of ${total}`} title={`Question ${index + 1} of ${total}`} />
        <span className="tags">
          <span className="pill course-pill" data-course={q.courseId}>{q.courseShort}</span>
          <span className="pill">{q.topicTitle}</span>
          {isReview && <span className="pill review-pill">Another look</span>}
        </span>
      </div>
      <p className="question"><Rich text={q.q} /></p>
      {q.multi && <p className="meta multi-hint">More than one answer is correct. Pick every one that applies.</p>}
      <ul className="options" role="list">
        {q.options.map((o, i) => {
          const st = stateOf(o);
          const mark = st === 'right' ? '✓' : st === 'wrong' ? '✕' : String.fromCharCode(65 + i);
          return (
            <li key={o.orig}>
              <button type="button" className={`option irid ${st}`} onClick={() => tap(o)} disabled={done} aria-pressed={q.multi && !done ? draft.includes(o.orig) : undefined}>
                <span className="option-mark" aria-hidden="true">{mark}</span>
                <span>{o.text}</span>
                {st === 'right' && <span className="sr-only"> (correct answer)</span>}
                {st === 'wrong' && <span className="sr-only"> (your answer, incorrect)</span>}
              </button>
            </li>
          );
        })}
      </ul>
      {q.multi && !done && (
        <button type="button" className="button fit" disabled={draft.length === 0} onClick={() => answer(index, draft)}>Check my answers</button>
      )}
      {done && (
        <div className={`feedback ${ok ? 'right' : 'wrong'}`} aria-live="polite">
          <strong>{ok ? 'Correct.' : 'Not quite.'}</strong>
          <span><Rich text={q.explanation} /></span>
        </div>
      )}
      {done && !ok && (
        <div className="helpers nm-inset">
          <span className="helpers-title">Want to understand it better?</span>
          <div className="row">
            <Link className="button small secondary irid" to={`/topic/${q.topicId}?s=${q.review?.section || 'plain'}&slide=${q.review?.slide ?? 0}`}>Review this section</Link>
          </div>
          <AskAI
            label="Explain it"
            prompt={questionPrompt({
              course: course?.title || q.courseShort,
              topic: q.topicTitle,
              question: plain(q.q),
              picked: optText(picks),
              correct: optText(q.answers),
            })}
          />
        </div>
      )}
      {done && (
        <button type="button" className="button fit" onClick={onNext}>{index === total - 1 ? 'See results' : 'Next question'}</button>
      )}
    </div>
  );
}

function Results({ d, quiz, justFinished }) {
  const s = quiz.summary;
  const catalog = useMemo(() => new Map(buildCatalog().map((i) => [i.key, i])), []);
  const missed = quiz.items
    .map((it, i) => ({ q: viewItem(it), i }))
    .filter(({ i }) => quiz.results[i] === false);
  const optText = (q, list) => q.options.filter((o) => list.includes(o.orig)).map((o) => plain(o.text)).join('; ');
  const burst = shopItem(d.burst)?.glyphs || ['🎉'];
  const daily = quiz.mode === 'daily';
  const streak = streakNow(d);
  const rows = Object.values(s.byCourse);
  return (
    <div className="quiz glass" aria-live="polite">
      {justFinished && s.correct > 0 && <Burst glyphs={burst} />}
      <div className="test-score">
        <Ring value={s.correct / s.total} size={112} stroke={10} label={`${s.correct}/${s.total}`} sub="correct" />
        <div>
          <h2 style={{ fontSize: '1.6rem' }}>{daily ? 'Daily quiz done' : 'Bonus set done'}</h2>
          <p className="meta">{s.correct === s.total ? 'A clean sheet.' : `${missed.length} to come back to. They return in a later quiz.`}</p>
        </div>
      </div>
      <ul className="earn-list">
        <li><b>+{s.earned}</b> points {daily ? `(${POINTS.correct} per correct answer, ${POINTS.complete} for finishing)` : `(${POINTS.bonusCorrect} per correct answer)`}</li>
        {daily && <li><b>{streak.count}</b> day streak{s.shieldSaved ? '. A streak shield covered the day you missed.' : ''}</li>}
        {s.milestones.map((m) => <li key={m.days}><b>+{m.points}</b> bonus for a {m.days}-day streak</li>)}
        {s.badges.map((id) => <li key={id}>New badge: <b>{BADGES.find((b) => b.id === id)?.name}</b></li>)}
      </ul>
      {rows.length > 1 && (
        <div className="chips" aria-label="Score by course">
          {rows.map((r) => <span key={r.short} className="chip static">{r.short}: {r.correct}/{r.total}</span>)}
        </div>
      )}
      {missed.length > 0 && (
        <>
          <ul className="missed-list">
            {missed.map(({ q, i }) => (
              <li key={q.key} className="nm-inset">
                <span className="pill course-pill" data-course={q.courseId}>{q.courseShort}</span>
                <strong><Rich text={q.q} /></strong>
                <div className="you">You chose: {optText(q, quiz.answers[i] || [])}</div>
                <div className="right">Correct: {optText(q, q.answers)}</div>
                <Link className="text-link" to={`/topic/${q.topicId}?s=${q.review?.section || 'plain'}&slide=${q.review?.slide ?? 0}`}>Review: {q.topicTitle}</Link>
              </li>
            ))}
          </ul>
          <div className="helpers nm-inset">
            <span className="helpers-title">Get help with all {missed.length} at once</span>
            <AskAI
              label="Ask an AI"
              prompt={bundlePrompt({
                course: 'my sports business master’s courses',
                topic: 'a mixed daily review quiz',
                items: missed.map(({ q, i }) => ({
                  question: `[${q.courseShort}, ${q.topicTitle}] ${plain(q.q)}`,
                  picked: optText(q, quiz.answers[i] || []),
                  correct: optText(q, q.answers),
                })),
              })}
            />
          </div>
        </>
      )}
      <p className="meta">{catalog.size} questions in the pool across every course with an exam.</p>
    </div>
  );
}

export default function DailyPage() {
  const d = useDaily();
  const marks = useBookmarks();
  const catalog = useMemo(() => buildCatalog(), []);
  const quiz = todayQuiz(d);
  const [size, setSize] = useState(SIZES.includes(d.lastSize) ? d.lastSize : 10);
  const [focus, setFocus] = useState(false);
  const [idx, setIdx] = useState(0);
  const [justFinished, setJustFinished] = useState(false);

  const topicIds = useMemo(() => {
    const inPool = new Set(catalog.map((i) => i.topicId));
    return [...new Set(marks.map((m) => m.topicId))].filter((t) => inPool.has(t));
  }, [marks, catalog]);
  const focusCount = useMemo(() => catalog.filter((i) => topicIds.includes(i.topicId)).length, [catalog, topicIds]);
  const courseCount = new Set(catalog.map((i) => i.courseId)).size;

  // When a quiz is open, resume at the first unanswered question.
  const startedId = quiz ? `${quiz.date}:${quiz.mode}:${quiz.items.map((i) => i.key).join(',')}` : null;
  useEffect(() => {
    if (!quiz) return;
    const first = quiz.items.findIndex((_, i) => quiz.results[i] === undefined);
    setIdx(first === -1 ? quiz.items.length - 1 : first);
    setJustFinished(false);
  }, [startedId]); // eslint-disable-line react-hooks/exhaustive-deps

  const wrapperProps = { className: 'stack-lg narrow daily', 'data-qtheme': d.theme };

  function begin(mode) {
    setJustFinished(false);
    startQuiz({ size, focusTopicIds: focus && topicIds.length ? topicIds : null, mode });
  }
  function next() {
    if (idx >= quiz.items.length - 1) {
      finishQuiz();
      setJustFinished(true);
    } else setIdx(idx + 1);
  }

  const header = (
    <header className="stack">
      <h1>Daily quiz</h1>
      <p className="lead">A few questions a day, mixed from every course with an exam. A different set each day, with the ones you missed coming back.</p>
    </header>
  );

  // ---- a quiz in progress ----
  if (quiz && !quiz.finished) {
    const item = quiz.items[idx];
    return (
      <div {...wrapperProps}>
        <StreakCardCompact d={d} />
        <Question key={`${startedId}:${idx}`} item={item} index={idx} total={quiz.items.length} quiz={quiz} onNext={next} />
      </div>
    );
  }

  // ---- finished: results, then a bonus set if wanted ----
  if (quiz && quiz.finished && quiz.summary) {
    const dailyFinished = Boolean(d.days[quiz.date]);
    return (
      <div {...wrapperProps}>
        {header}
        <StreakCard d={d} />
        <Results d={d} quiz={quiz} justFinished={justFinished} />
        {dailyFinished && (
          <section className="stack" aria-label="Bonus set">
            <h2>Want more?</h2>
            <p className="meta">A bonus set is extra practice. It earns {POINTS.bonusCorrect} points per correct answer and does not change your streak.</p>
            <Setup size={size} setSize={setSize} focus={focus} setFocus={setFocus} topicIds={topicIds} focusCount={focusCount} courseCount={courseCount} onStart={() => begin('bonus')} label="Start a bonus set" />
          </section>
        )}
        <Shelf d={d} />
      </div>
    );
  }

  // ---- nothing started today ----
  return (
    <div {...wrapperProps}>
      {header}
      <StreakCard d={d} />
      <section className="stack" aria-label="Start today’s quiz">
        <h2>Today’s quiz</h2>
        <Setup size={size} setSize={setSize} focus={focus} setFocus={setFocus} topicIds={topicIds} focusCount={focusCount} courseCount={courseCount} onStart={() => begin('daily')} label="Start today’s quiz" />
      </section>
      <Shelf d={d} />
    </div>
  );
}

function StreakCardCompact({ d }) {
  const s = streakNow(d);
  return (
    <p className="daily-strip glass">
      <span className={`flame ${s.count > 0 ? 'lit' : ''}`} aria-hidden="true"><Icon name="flame" size={18} /></span>
      <b>{s.count}</b> day streak
      <span className="spacer" />
      <b>{d.points}</b> points
    </p>
  );
}

function Setup({ size, setSize, focus, setFocus, topicIds, focusCount, courseCount, onStart, label }) {
  return (
    <>
      <div className="size-picker" role="group" aria-label="How many questions">
        {SIZES.map((n) => (
          <button key={n} type="button" className="size-btn nm irid" aria-pressed={size === n} onClick={() => setSize(n)}>
            <Icon name="dice" size={22} />
            <b>{n}</b>
            <span>questions</span>
          </button>
        ))}
      </div>
      <label className={`focus-toggle nm-inset ${topicIds.length === 0 ? 'off' : ''}`}>
        <input type="checkbox" checked={focus && topicIds.length > 0} disabled={topicIds.length === 0} onChange={(e) => setFocus(e.target.checked)} />
        <span>
          <b>Focus on my bookmarks</b>
          <small>
            {topicIds.length === 0
              ? 'Bookmark topics or slides you find tricky and they will show up here.'
              : `${topicIds.length} bookmarked topic${topicIds.length === 1 ? '' : 's'}, ${focusCount} questions. ${focusCount < size ? 'The rest of the quiz is topped up from other topics.' : ''}`}
          </small>
        </span>
      </label>
      <button type="button" className="button" onClick={onStart}>{label}</button>
      <p className="meta">Mixed from {courseCount} courses. Each question shows which course it is from. About a third of a quiz brings back questions you missed on an earlier day.</p>
    </>
  );
}
