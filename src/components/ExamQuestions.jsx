import { useState } from 'react';
import Rich from '../lib/Rich.jsx';
import { recordExam, useProgress } from '../lib/progress.js';
import Ring from './Ring.jsx';

// Exam-style written questions: write your answer, reveal the model answer, then tick
// the marking points you would have earned. Nothing here is sent anywhere.
export function ExamQuestion({ q, qid, heading }) {
  const progress = useProgress();
  const prev = progress.exams[qid];
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);
  const [ticked, setTicked] = useState(() => new Set());

  const got = ticked.size;
  const of = q.marking.length;

  function toggle(i) {
    const next = new Set(ticked);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setTicked(next);
    recordExam(qid, next.size, of);
  }

  return (
    <article className="exam-q glass">
      <div className="exam-head">
        <span className="pill">{q.marks} marks</span>
        {heading && <span className="meta">{heading}</span>}
        {prev && !shown && <span className="meta">Last self-mark: {prev.got} of {prev.of} points</span>}
      </div>
      <p className="question"><Rich text={q.q} /></p>
      <label className="exam-answer">
        <span>Your answer (optional, stays on this screen)</span>
        <textarea rows={6} value={text} onChange={(e) => setText(e.target.value)} placeholder="Write it as you would in the exam…" />
      </label>
      {!shown ? (
        <button type="button" className="button secondary fit irid" onClick={() => setShown(true)}>Show model answer and marking points</button>
      ) : (
        <div className="exam-model">
          <div className="feedback neutral">
            <strong>Model answer</strong>
            {q.answer.map((line, i) => (
              <p key={i}><Rich text={line} /></p>
            ))}
          </div>
          <div className="exam-mark nm-inset">
            <div className="exam-mark-head">
              <strong>Mark yourself</strong>
              <Ring value={of ? got / of : 0} size={56} stroke={6} label={`${got}/${of}`} title={`${got} of ${of} points`} />
            </div>
            <p className="meta">Tick each point your answer made. Be strict: a vague mention does not count.</p>
            <ul className="mark-list">
              {q.marking.map((m, i) => (
                <li key={i}>
                  <label className="check">
                    <input type="checkbox" checked={ticked.has(i)} onChange={() => toggle(i)} />
                    <span>{m}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default function ExamQuestions({ topic }) {
  const list = topic.exam || [];
  if (list.length === 0) return <p className="meta">No exam-style questions have been added for this topic yet.</p>;
  return (
    <div className="stack">
      {list.map((q, i) => (
        <ExamQuestion key={q.id} q={q} qid={`${topic.id}:${q.id}`} heading={`Question ${i + 1} of ${list.length}`} />
      ))}
    </div>
  );
}
