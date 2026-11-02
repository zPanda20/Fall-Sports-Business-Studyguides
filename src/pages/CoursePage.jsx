import { Link, useParams } from 'react-router-dom';
import { getCourse, getTopic, topicsForCourse, universes, cardsForCourse } from '../data/index.js';
import { useProgress } from '../lib/progress.js';
import Icon from '../components/Icon.jsx';

export default function CoursePage() {
  const { courseId } = useParams();
  const course = getCourse(courseId);
  const progress = useProgress();

  if (!course) {
    return (
      <div className="stack">
        <h1>Course not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  const universe = universes[course.universe];
  const ready = topicsForCourse(course.id);
  const done = ready.filter((t) => progress.done[t.id]).length;
  const cardCount = cardsForCourse(course.id).length;

  return (
    <div className="stack-lg" data-course={course.id}>
      <header className="course-head">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Courses</Link> <span aria-hidden="true">/</span> <span>{course.short}</span>
        </nav>
        <h1>{course.title}</h1>
        <p className="lead">{course.blurb}</p>
        <p className="meta">{done} of {ready.length} available topics done</p>
        {cardCount > 0 && (
          <Link to={`/course/${course.id}/flashcards`} className="button fit">
            <Icon name="cards" size={20} />
            Study flashcards ({cardCount})
          </Link>
        )}
      </header>

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
                  <span className="tile-meta">
                    About {topic.minutes} min{quiz ? ` · best quiz ${quiz.best}/${quiz.total}` : ''}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <section className="running glass">
        <span className="eyebrow">Running example</span>
        <h2 className="serif" style={{ fontSize: '1.4rem' }}>{universe.name}</h2>
        <p>{universe.blurb}</p>
      </section>
    </div>
  );
}
