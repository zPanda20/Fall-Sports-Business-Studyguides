import { useEffect, useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getTopic, getCourse, universes } from '../data/index.js';
import { useProgress, toggleDone } from '../lib/progress.js';
import Icon from '../components/Icon.jsx';
import Slides from '../components/Slides.jsx';
import Terms from '../components/Terms.jsx';
import Quiz from '../components/Quiz.jsx';
import ExamQuestions from '../components/ExamQuestions.jsx';
import Ring from '../components/Ring.jsx';
import BookmarkButton from '../components/BookmarkButton.jsx';
import { topicBookmarkId } from '../lib/bookmarks.js';

const SECTIONS = [
  { id: 'plain', label: 'In plain words', short: 'Basics', icon: 'plain' },
  { id: 'terms', label: 'Key terms', short: 'Terms', icon: 'terms' },
  { id: 'real', label: 'Real example', short: 'Real', icon: 'real' },
  { id: 'sports', label: 'Sports example', short: 'Sports', icon: 'sports' },
  { id: 'practice', label: 'Practice', short: 'Practice', icon: 'practice' },
  { id: 'watch', label: 'Watch', short: 'Watch', icon: 'watch' },
];

export default function TopicPage() {
  const { topicId } = useParams();
  const [params, setParams] = useSearchParams();
  const progress = useProgress();
  const panelRef = useRef(null);
  const [visited, setVisited] = useState(() => new Set(['plain']));
  const [practiceMode, setPracticeMode] = useState('mcq');

  const topic = getTopic(topicId);
  const section = SECTIONS.some((s) => s.id === params.get('s')) ? params.get('s') : 'plain';
  const slideParam = params.get('slide');

  // Remember which sections have been opened (for the little check marks).
  useEffect(() => {
    setVisited((v) => (v.has(section) ? v : new Set(v).add(section)));
  }, [section]);

  // When the section changes, bring the panel back into view if it has scrolled away.
  useEffect(() => {
    const el = panelRef.current;
    if (el && el.getBoundingClientRect().top < 60) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [section, slideParam]);

  if (!topic) {
    return (
      <div className="stack">
        <h1>Topic not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  const course = getCourse(topic.course);
  const universe = universes[topic.sports.universe];
  const isDone = Boolean(progress.done[topic.id]);
  const idx = SECTIONS.findIndex((s) => s.id === section);
  const nextSection = SECTIONS[idx + 1];

  const open = (id, slide) => {
    const next = { s: id };
    if (slide !== undefined && slide !== null) next.slide = String(slide);
    setParams(next);
  };
  const review = (r) => open(r?.section || 'plain', r?.slide ?? 0);
  const startSlide = Number(slideParam) || 0;
  const slideKey = `${section}-${slideParam ?? 0}`;
  const finish = nextSection ? () => open(nextSection.id) : undefined;
  const finishLabel = nextSection ? `Next: ${nextSection.label}` : undefined;

  const topicMark = {
    id: topicBookmarkId(topic.id),
    topicId: topic.id,
    courseId: topic.course,
    topicTitle: topic.title,
    scope: 'topic',
  };
  const slideMark = (sec) => ({ topicId: topic.id, courseId: topic.course, topicTitle: topic.title, section: sec });

  const head = {
    plain: { title: 'In plain words', note: 'The idea, one step at a time. Tap the arrows, swipe, or use your arrow keys.' },
    terms: { title: 'Key terms', note: 'Tap a term to see what it means.' },
    real: { title: topic.real.title, note: topic.real.note },
    sports: { title: topic.sports.title, note: universe.blurb },
    practice: { title: 'Practice', note: 'Pick an answer. If you miss one, you can jump back to the explanation or ask an AI.' },
    watch: { title: 'Watch', note: 'Optional. Videos open on YouTube in a new tab and are not part of this guide, so explanations may differ slightly from your course.' },
  }[section];

  return (
    <div className="topic-wrap has-tabbar" data-course={topic.course}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Courses</Link> <span aria-hidden="true">/</span>{' '}
        <Link to={`/course/${course.id}`}>{course.short}</Link> <span aria-hidden="true">/</span>{' '}
        <span>{topic.sessions}</span>
      </nav>

      <div className="mobile-title">
        <h1 style={{ fontSize: '1.7rem' }}>{topic.title}</h1>
        <p className="meta">{topic.sessions} · about {topic.minutes} min</p>
        <BookmarkButton item={topicMark} variant="topic" />
      </div>

      <div className="shell">
        {/* Glass sidebar (desktop) */}
        <aside className="side glass" data-glow aria-label="Topic sections">
          <div className="side-title">
            <h1 className="serif">{topic.title}</h1>
            <p className="meta">{topic.sessions} · about {topic.minutes} min</p>
            <div className="side-ring">
              <Ring value={visited.size / SECTIONS.length} size={48} stroke={5} label={`${visited.size}/${SECTIONS.length}`} title={`${visited.size} of ${SECTIONS.length} sections opened`} />
              <span className="meta">sections opened</span>
            </div>
            <BookmarkButton item={topicMark} variant="topic" />
          </div>
          <ul className="side-nav">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={`side-item irid ${s.id === section ? 'is-on' : ''}`}
                  aria-current={s.id === section}
                  onClick={() => open(s.id)}
                >
                  <span className="ico"><Icon name={s.icon} /></span>
                  <span>{s.label}</span>
                  {visited.has(s.id) && s.id !== section && (
                    <span className="side-check" aria-label="opened"><Icon name="check" size={16} /></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="side-foot">
            <button
              type="button"
              className={`button small ${isDone ? 'secondary' : ''}`}
              onClick={() => toggleDone(topic.id)}
              aria-pressed={isDone}
            >
              {isDone ? '✓ Done (tap to undo)' : 'Mark topic as done'}
            </button>
            <Link to={`/course/${course.id}`} className="text-link">← All {course.short} topics</Link>
          </div>
        </aside>

        {/* Neumorphic content panel */}
        <section className="panel nm" ref={panelRef} aria-labelledby="panel-title">
          <div className="panel-head">
            {SECTIONS[idx].label !== head.title && <span className="eyebrow">{SECTIONS[idx].label}</span>}
            <h2 id="panel-title">{head.title}</h2>
            <p className="meta">{head.note}</p>
          </div>

          {topic.partial && section === 'plain' && (
            <aside className="callout warn" style={{ marginBottom: '1rem' }}>
              <strong>Partly covered</strong>
              <p>{topic.partial}</p>
            </aside>
          )}

          {section === 'plain' && (
            <Slides key={slideKey} slides={topic.plain} start={startSlide} label="In plain words" bookmark={slideMark('plain')} onFinish={finish} finishLabel={finishLabel} />
          )}
          {section === 'terms' && <Terms terms={topic.terms} courseId={course.id} topicId={topic.id} />}
          {section === 'real' && (
            <Slides key={slideKey} slides={topic.real.slides} start={startSlide} label="Real example" bookmark={slideMark('real')} onFinish={finish} finishLabel={finishLabel} />
          )}
          {section === 'sports' && (
            <Slides key={slideKey} slides={topic.sports.slides} start={startSlide} label="Sports example" bookmark={slideMark('sports')} onFinish={finish} finishLabel={finishLabel} />
          )}
          {section === 'practice' && (
            <>
              {topic.exam?.length > 0 && (
                <div className="mode-tabs" role="tablist" aria-label="Kind of practice">
                  <button type="button" role="tab" aria-selected={practiceMode === 'mcq'} className="chip" aria-pressed={practiceMode === 'mcq'} onClick={() => setPracticeMode('mcq')}>
                    Multiple choice
                  </button>
                  <button type="button" role="tab" aria-selected={practiceMode === 'exam'} className="chip" aria-pressed={practiceMode === 'exam'} onClick={() => setPracticeMode('exam')}>
                    Exam-style ({topic.exam.length})
                  </button>
                </div>
              )}
              {practiceMode === 'exam' && topic.exam?.length > 0 ? (
                <ExamQuestions topic={topic} />
              ) : (
                <Quiz topic={topic} courseTitle={course.title} onReview={review} />
              )}
            </>
          )}
          {section === 'watch' && (
            <div className="stack">
              {topic.videos.length === 0 && (
                <p className="meta">No videos have been added for this topic yet. This guide is built from your course slides and notes, so everything you need is in the other sections.</p>
              )}
              <ul className="videos" role="list">
                {topic.videos.map((v) => (
                  <li key={v.url}>
                    <a className="video glass irid" data-glow href={v.url} target="_blank" rel="noopener noreferrer">
                      <span className="video-title">{v.title} ↗</span>
                      <span className="video-meta">
                        {v.channel}
                        {v.length ? ` · ${v.length}` : ''}
                      </span>
                      {v.note && <span className="video-note">{v.note}</span>}
                    </a>
                  </li>
                ))}
              </ul>
              {topic.videoSearch && (
                <a
                  className="text-link"
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(topic.videoSearch)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Search YouTube for more on this topic ↗
                </a>
              )}
              <div className="complete">
                <button
                  type="button"
                  className={`button ${isDone ? 'secondary' : ''}`}
                  onClick={() => toggleDone(topic.id)}
                  aria-pressed={isDone}
                >
                  {isDone ? '✓ Marked as done (tap to undo)' : 'Mark this topic as done'}
                </button>
                <Link to={`/course/${course.id}`} className="text-link">Back to {course.short} topics</Link>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Glass tab bar (phones) */}
      <nav className="tabbar glass" aria-label="Topic sections">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            className="tab"
            aria-current={s.id === section}
            aria-label={s.label}
            onClick={() => open(s.id)}
          >
            <Icon name={s.icon} size={20} />
            <span>{s.short}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
