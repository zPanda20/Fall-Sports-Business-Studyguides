import { Link, useParams } from 'react-router-dom';
import { getCourse, getTopic, topicsForCourse, universes, cardsForCourse } from '../data/index.js';
import { useProgress } from '../lib/progress.js';

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
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Courses</Link> <span aria-hidden="true">/</span> <span>{course.short}</span>
      </nav>

      <header className="stack">
        <h1>{course.title}</h1>
        <p className="lead">{course.blurb}</p>
        <p className="meta">
          {done} of {ready.length} available topics done
        </p>
      </header>

      <section className="note-card">
        <h2 className="h3">Running example: {universe.name}</h2>
        <p>{universe.blurb}</p>
      </section>

      {cardCount > 0 && (
        <Link to={`/course/${course.id}/flashcards`} className="button secondary fit">
          Study flashcards ({cardCount})
        </Link>
      )}

      {course.blocks.map((block) => (
        <section key={block.title} className="stack">
          <h2 className="h3 block-title">{block.title}</h2>
          <ul className="unit-list">
            {block.units.map((unit) => {
              const topic = getTopic(unit.id);
              const isDone = progress.done[unit.id];
              const quiz = progress.quiz[unit.id];
              if (!topic) {
                return (
                  <li key={unit.id} className="unit soon" aria-disabled="true">
                    <div>
                      <span className="unit-title">{unit.title}</span>
                      <span className="unit-meta">{unit.sessions}</span>
                    </div>
                    <span className="pill">Coming soon</span>
                  </li>
                );
              }
              return (
                <li key={unit.id}>
                  <Link to={`/topic/${unit.id}`} className="unit">
                    <div>
                      <span className="unit-title">{topic.title}</span>
                      <span className="unit-meta">
                        {unit.sessions} · about {topic.minutes} min
                        {quiz ? ` · best quiz ${quiz.best}/${quiz.total}` : ''}
                      </span>
                    </div>
                    <span className={`pill ${isDone ? 'done' : 'ready'}`}>{isDone ? '✓ Done' : 'Ready'}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
