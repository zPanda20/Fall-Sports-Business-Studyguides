import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCourse, getTopic, topicsForCourse, universes, cardsForCourse, allUnits } from '../data/index.js';
import { mcqPool } from './QuickTestPage.jsx';
import { useProgress } from '../lib/progress.js';
import Icon from '../components/Icon.jsx';
import ReadAloud from '../components/ReadAloud.jsx';
import Ring from '../components/Ring.jsx';

function basicsText(course) {
  return `${course.title}. Course basics. ` + course.overview.map((o) => `${o.label}. ${o.text}`).join(' ');
}

export default function CoursePage() {
  const { courseId } = useParams();
  const course = getCourse(courseId);
  const progress = useProgress();
  const [basicsOpen, setBasicsOpen] = useState(false);

  if (!course) {
    return (
      <div className="stack">
        <h1>Course not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  const universe = course.universe ? universes[course.universe] : null;
  const ready = topicsForCourse(course.id);
  const done = ready.filter((t) => progress.done[t.id]).length;
  const cardCount = cardsForCourse(course.id).length;
  const mcqCount = mcqPool(course.id).length;
  const examCount = ready.reduce((n, t) => n + (t.exam || []).length, 0);

  return (
    <div className="stack-lg" data-course={course.id}>
      <header className="course-head">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Courses</Link> <span aria-hidden="true">/</span> <span>{course.short}</span>
        </nav>
        <h1>
          {course.title}{' '}
          {course.tag && <span className="pill ready title-tag">{course.tag}</span>}
          {course.noExam && <span className="pill title-tag">No exam</span>}
          {course.overview && (
            <button
              type="button"
              className="basics-btn"
              aria-expanded={basicsOpen}
              aria-controls="course-basics"
              onClick={() => setBasicsOpen((o) => !o)}
            >
              <Icon name="info" size={16} /> Course basics
            </button>
          )}
        </h1>
        <p className="lead">{course.blurb}</p>
        <div className="head-progress">
          {ready.length > 0 && (
            <Ring value={done / ready.length} size={64} stroke={7} label={`${done}/${ready.length}`} sub="done" title={`${done} of ${ready.length} available topics done`} />
          )}
          <p className="meta">
            {ready.length === 0
              ? `${allUnits(course).length} topics planned. Study guides are added as the course materials arrive.`
              : `${done} of ${ready.length} available topics done · ${allUnits(course).length} planned`}
          </p>
        </div>
        <div className="study-actions">
          {cardCount > 0 && (
            <Link to={`/course/${course.id}/flashcards`} className="button fit">
              <Icon name="cards" size={20} />
              Study flashcards ({cardCount})
            </Link>
          )}
          {mcqCount >= 5 && (
            <Link to={`/course/${course.id}/test`} className="button fit secondary">
              <Icon name="dice" size={20} />
              Quick test
            </Link>
          )}
          {examCount > 0 && (
            <Link to={`/course/${course.id}/exam`} className="button fit secondary">
              <Icon name="practice" size={20} />
              Exam practice ({examCount})
            </Link>
          )}
        </div>
      </header>

      {course.overview && basicsOpen && (
        <section id="course-basics" className="glance glass" aria-label="Course basics">
          <div className="glance-head">
            <h2 className="serif" style={{ fontSize: '1.3rem' }}>Course basics</h2>
            <ReadAloud text={basicsText(course)} />
          </div>
          <dl>
            {course.overview.map((o) => (
              <div key={o.label}>
                <dt>{o.label}</dt>
                <dd>{o.text}</dd>
              </div>
            ))}
          </dl>
          <p className="meta">From the course syllabus{course.syllabusDate ? ` (version dated ${course.syllabusDate})` : ''}. Your instructor&rsquo;s latest word always wins.</p>
        </section>
      )}

      {course.blocks.map((block) => (
        <section key={block.title} className="stack">
          <h2 className="block-title serif" style={{ fontSize: '1.3rem' }}>{block.title}</h2>
          <div className="tiles">
            {block.units.map((unit) => {
              const topic = getTopic(unit.id);
              const isDone = progress.done[unit.id];
              const quiz = progress.quiz[unit.id];

              if (!topic) {
                return (
                  <div key={unit.id} className="tile soon" aria-disabled="true">
                    <div className="tile-top">
                      <span className="tile-session">{unit.sessions}</span>
                      <span className="pill">Coming soon</span>
                    </div>
                    <span className="tile-title">{unit.title}</span>
                    {unit.covers && (
                      <ul className="tile-covers" aria-label="Topics covered">
                        {unit.covers.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={unit.id}
                  to={`/topic/${unit.id}`}
                  className={`tile nm irid ${isDone ? 'is-done' : ''}`}
                >
                  <div className="tile-top">
                    <span className="tile-session">{unit.sessions}</span>
                    <span className={`pill ${isDone ? 'done' : 'ready'}`}>{isDone ? '✓ Done' : 'Ready'}</span>
                  </div>
                  <span className="tile-title">{topic.title}</span>
                  <span className="tile-meta tile-ring">
                    {quiz && <Ring value={quiz.total ? quiz.best / quiz.total : 0} size={34} stroke={4} label={`${quiz.best}`} title={`Best quiz ${quiz.best} of ${quiz.total}`} />}
                    <span>About {topic.minutes} min{quiz ? ` · best quiz ${quiz.best}/${quiz.total}` : ''}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      {universe && (
        <section className="running glass">
          <span className="eyebrow">Running example</span>
          <h2 className="serif" style={{ fontSize: '1.4rem' }}>{universe.name}</h2>
          <p>{universe.blurb}</p>
        </section>
      )}
    </div>
  );
}
