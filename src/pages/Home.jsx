import { Link } from 'react-router-dom';
import { courses, allUnits, topicsForCourse } from '../data/index.js';
import { useProgress } from '../lib/progress.js';

export default function Home() {
  const progress = useProgress();

  return (
    <div className="stack-lg">
      <section className="hero">
        <h1>Study sports business, one clear step at a time.</h1>
        <p className="lead">
          Plain-language explanations, examples built around fictional teams, practice
          questions and flashcards. Pick a course to begin.
        </p>
      </section>

      <section className="course-grid" aria-label="Courses">
        {courses.map((course) => {
          const ready = topicsForCourse(course.id);
          const total = allUnits(course).length;
          const done = ready.filter((t) => progress.done[t.id]).length;
          const pctDone = ready.length ? (done / ready.length) * 100 : 0;
          return (
            <Link key={course.id} to={`/course/${course.id}`} className="course-card" data-course={course.id}>
              <h2>{course.title}</h2>
              <p>{course.blurb}</p>
              <div className="progress" role="img" aria-label={`${done} of ${ready.length} available topics complete`}>
                <div className="progress-bar" style={{ width: `${pctDone}%` }} />
              </div>
              <p className="meta">
                {done} of {ready.length} available topics done · {total} planned
              </p>
              <span className="card-cta">Open course →</span>
            </Link>
          );
        })}
      </section>

      <section className="how">
        <h2>How each topic works</h2>
        <ol className="how-list">
          <li><strong>In plain words.</strong> The idea explained simply, with the key terms defined.</li>
          <li><strong>A sports example.</strong> The same idea applied to one consistent fictional team.</li>
          <li><strong>Practice.</strong> Exam-style questions with explanations.</li>
          <li><strong>Watch.</strong> Hand-picked videos if you want another explanation.</li>
        </ol>
        <p className="meta">Your progress is saved on this device only. No account needed.</p>
      </section>
    </div>
  );
}
