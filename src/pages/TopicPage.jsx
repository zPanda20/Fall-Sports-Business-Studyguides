import { Link, useParams } from 'react-router-dom';
import { getTopic, getCourse, universes } from '../data/index.js';
import { useProgress, toggleDone } from '../lib/progress.js';
import Rich from '../lib/Rich.jsx';
import Quiz from '../components/Quiz.jsx';
import ExampleBlocks from '../components/ExampleBlocks.jsx';

function jump(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  }
}

export default function TopicPage() {
  const { topicId } = useParams();
  const topic = getTopic(topicId);
  const progress = useProgress();

  if (!topic) {
    return (
      <div className="stack">
        <h1>Topic not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  const course = getCourse(topic.course);
  const universe = universes[topic.example.universe];
  const isDone = Boolean(progress.done[topic.id]);

  const sections = [
    ['plain', 'In plain words'],
    ['terms', 'Key terms'],
    ['example', 'Sports example'],
    ['practice', 'Practice'],
    ['watch', 'Watch'],
  ];

  return (
    <article className="stack-lg topic" data-course={topic.course}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Courses</Link> <span aria-hidden="true">/</span>{' '}
        <Link to={`/course/${course.id}`}>{course.short}</Link> <span aria-hidden="true">/</span>{' '}
        <span>{topic.sessions}</span>
      </nav>

      <header className="stack">
        <h1>{topic.title}</h1>
        <p className="lead">{topic.summary}</p>
        <p className="meta">
          {topic.sessions} · about {topic.minutes} min · {topic.reading}
        </p>
        <div className="chips" role="navigation" aria-label="On this page">
          {sections.map(([id, label]) => (
            <button key={id} type="button" className="chip" onClick={() => jump(id)}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <section id="plain" tabIndex={-1} className="stack">
        <h2>In plain words</h2>
        {topic.simple.map((p, i) => (
          <p key={i}><Rich text={p} /></p>
        ))}

        {topic.formulas && (
          <div className="card">
            <h3 className="h3">Formulas to know</h3>
            <dl className="formulas">
              {topic.formulas.map((f) => (
                <div key={f.name} className="formula">
                  <dt>{f.name}</dt>
                  <dd>{f.formula}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {topic.pitfalls && (
          <div className="callout warn">
            <strong>Common traps</strong>
            <ul>
              {topic.pitfalls.map((p, i) => (
                <li key={i}><Rich text={p} /></li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section id="terms" tabIndex={-1} className="stack">
        <h2>Key terms</h2>
        <dl className="terms">
          {topic.terms.map((t) => (
            <div key={t.term} className="term">
              <dt>{t.term}</dt>
              <dd>{t.def}</dd>
            </div>
          ))}
        </dl>
        <Link to={`/course/${topic.course}/flashcards?topic=${topic.id}`} className="button secondary fit">
          Flashcards for this topic
        </Link>
      </section>

      <section id="example" tabIndex={-1} className="stack">
        <h2>Sports example</h2>
        <p className="meta">{topic.example.title}. {universe.blurb}</p>
        <ExampleBlocks blocks={topic.example.blocks} />
      </section>

      <section id="practice" tabIndex={-1} className="stack">
        <h2>Practice</h2>
        <Quiz topicId={topic.id} questions={topic.questions} />
      </section>

      <section id="watch" tabIndex={-1} className="stack">
        <h2>Watch</h2>
        <p className="meta">
          Optional. These open on YouTube in a new tab. The videos are not part of this guide, so
          the explanations may differ slightly from your course.
        </p>
        <ul className="videos" role="list">
          {topic.videos.map((v) => (
            <li key={v.url}>
              <a className="video" href={v.url} target="_blank" rel="noopener noreferrer">
                <span className="video-title">{v.title}</span>
                <span className="video-meta">
                  {v.channel}
                  {v.length ? ` · ${v.length}` : ''}
                </span>
                {v.note && <span className="video-note">{v.note}</span>}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="text-link"
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(topic.videoSearch)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Search YouTube for more on this topic ↗
        </a>
      </section>

      <footer className="complete stack-sm">
        <button
          type="button"
          className={`button ${isDone ? 'secondary' : ''}`}
          onClick={() => toggleDone(topic.id)}
          aria-pressed={isDone}
        >
          {isDone ? '✓ Marked as done (tap to undo)' : 'Mark this topic as done'}
        </button>
        <Link to={`/course/${course.id}`} className="text-link">Back to {course.short} topics</Link>
      </footer>
    </article>
  );
}
