import { Link } from 'react-router-dom';
import { courses, allUnits, topicsForCourse } from '../data/index.js';
import { useProgress } from '../lib/progress.js';
import Icon from '../components/Icon.jsx';
import UpNext from '../components/UpNext.jsx';
import Ring from '../components/Ring.jsx';

const HOW = [
  { icon: 'plain', title: 'In plain words', text: 'Short, clickable slides that explain each idea simply.' },
  { icon: 'real', title: 'Real and sports examples', text: 'A real case, then a fictional team that carries through the course.' },
  { icon: 'practice', title: 'Practice', text: 'Exam-style questions, with help the moment you get one wrong.' },
  { icon: 'ai', title: 'Extra help from AI', text: 'Missed a question? Send it to the AI you like, with a ready-made message asking for a simpler explanation.' },
  { icon: 'bookmark', title: 'Bookmark what confuses you', text: 'Flag any topic or slide to ask about later. Everything lands on one Bookmarks page, ready to send to an AI.' },
  { icon: 'watch', title: 'Watch', text: 'Hand-picked videos when you want a second explanation.' },
];

function CourseCard({ course, progress }) {
  const ready = topicsForCourse(course.id);
  const total = allUnits(course).length;
  const done = ready.filter((t) => progress.done[t.id]).length;
  return (
    <Link to={`/course/${course.id}`} className="course-card glass irid" data-glow data-course={course.id}>
      <span className="glowline" aria-hidden="true" />
      <span className="card-top">
        <span className="eyebrow">{course.short}</span>
        <span className="pills">
          {course.tag && <span className="pill ready">{course.tag}</span>}
          {course.noExam && <span className="pill">No exam</span>}
        </span>
      </span>
      <h2>{course.title}</h2>
      <p>{course.blurb}</p>
      <div className="card-progress">
        {ready.length > 0 && (
          <Ring value={done / ready.length} size={68} stroke={7} label={`${done}/${ready.length}`} sub="topics" title={`${done} of ${ready.length} available topics complete`} />
        )}
        <p className="meta">
          {ready.length === 0 ? `${total} topics planned` : `${done} of ${ready.length} available topics done · ${total} planned`}
        </p>
      </div>
      <span className="card-cta">Open course →</span>
    </Link>
  );
}

export default function Home() {
  const progress = useProgress();

  return (
    <div className="stack-lg">
      <section className="hero">
        <span className="eyebrow">Sports business study guides</span>
        <h1>
          Study one clear step <span className="irid-text">at a time.</span>
        </h1>
        <p className="lead">
          Plain-language slides, real and fictional sports examples, practice questions and
          flashcards. Pick a course to begin.
        </p>
      </section>

      <UpNext />

      <section className="course-grid" aria-label="Courses with an exam">
        {courses.filter((c) => !c.noExam).map((course) => (
          <CourseCard key={course.id} course={course} progress={progress} />
        ))}
      </section>

      {courses.some((c) => c.noExam) && (
        <section className="stack" aria-label="Courses with no exam">
          <h2 className="eyebrow">No exam</h2>
          <div className="course-grid">
            {courses.filter((c) => c.noExam).map((course) => (
              <CourseCard key={course.id} course={course} progress={progress} />
            ))}
          </div>
        </section>
      )}

      <section className="stack">
        <h2>How each topic works</h2>
        <div className="how-grid">
          {HOW.map((h) => (
            <div key={h.title} className="how-item nm">
              <span className="ico"><Icon name={h.icon} size={22} /></span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
        <p className="meta">Your progress is saved on this device only. No account needed.</p>
      </section>
    </div>
  );
}
