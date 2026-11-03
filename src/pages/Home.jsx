import { Link } from 'react-router-dom';
import { courses, allUnits, topicsForCourse } from '../data/index.js';
import { useProgress } from '../lib/progress.js';
import Icon from '../components/Icon.jsx';

const HOW = [
  { icon: 'plain', title: 'In plain words', text: 'Short, clickable slides that explain each idea simply.' },
  { icon: 'real', title: 'Real and sports examples', text: 'A real case, then a fictional team that carries through the course.' },
  { icon: 'practice', title: 'Practice', text: 'Exam-style questions, with help the moment you get one wrong.' },
  { icon: 'ai', title: 'Extra help from AI', text: 'Missed a question? Send it to the AI you like, with a ready-made message asking for a simpler explanation.' },
  { icon: 'bookmark', title: 'Bookmark what confuses you', text: 'Flag any topic or slide to ask about later. Everything lands on one Bookmarks page, ready to send to an AI.' },
  { icon: 'watch', title: 'Watch', text: 'Hand-picked videos when you want a second explanation.' },
];

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

      <section className="course-grid" aria-label="Courses">
        {courses.map((course) => {
          const ready = topicsForCourse(course.id);
          const total = allUnits(course).length;
          const done = ready.filter((t) => progress.done[t.id]).length;
          const pctDone = ready.length ? (done / ready.length) * 100 : 0;
          return (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="course-card glass irid"
              data-glow
              data-course={course.id}
            >
              <span className="glowline" aria-hidden="true" />
              <span className="eyebrow">{course.short}</span>
              <h2>{course.title}</h2>
              <p>{course.blurb}</p>
              <div className="progress" role="img" aria-label={`${done} of ${ready.length} available topics complete`}>
                <div className="progress-bar" style={{ width: `${pctDone}%` }} />
              </div>
              <p className="meta">
                {ready.length === 0 ? `${total} topics planned` : `${done} of ${ready.length} available topics done · ${total} planned`}
              </p>
              <span className="card-cta">Open course →</span>
            </Link>
          );
        })}
      </section>

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
