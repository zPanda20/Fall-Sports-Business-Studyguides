import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCourse, topicsForCourse } from '../data/index.js';
import { ExamQuestion } from '../components/ExamQuestions.jsx';
import Icon from '../components/Icon.jsx';

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
  const [set, setSet] = useState(null);

  if (!course) {
    return (
      <div className="stack">
        <h1>Course not found</h1>
        <Link to="/">Back to courses</Link>
      </div>
    );
  }

  return (
    <div className="stack-lg narrow" data-course={course.id}>
      <header className="stack">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Courses</Link> <span aria-hidden="true">/</span>{' '}
          <Link to={`/course/${course.id}`}>{course.short}</Link> <span aria-hidden="true">/</span> <span>Exam practice</span>
        </nav>
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
