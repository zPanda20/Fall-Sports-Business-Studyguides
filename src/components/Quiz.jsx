import { useState } from 'react';
import Rich from '../lib/Rich.jsx';
import AskAI from './AskAI.jsx';
import { recordQuiz } from '../lib/progress.js';
import { questionPrompt, bundlePrompt } from '../lib/ai.js';

const plain = (s) => String(s).replace(/\*\*/g, '');

// One question at a time. Multiple-choice questions are scored; "exercise"
// questions are self-checked. A wrong answer offers two ways forward: jump back
// to the part of the topic that explains it, or ask an AI to explain it.
export default function Quiz({ topic, courseTitle, onReview }) {
  const questions = topic.questions;
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [missed, setMissed] = useState([]);
  const [finished, setFinished] = useState(false);

  const scored = questions.filter((q) => q.type === 'mcq').length;
  const q = questions[index];
  const isLast = index === questions.length - 1;

  function choose(i) {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) {
      setCorrect((c) => c + 1);
    } else {
      setMissed((m) => [
        ...m,
        { question: plain(q.q), picked: plain(q.options[i]), correct: plain(q.options[q.answer]), review: q.review },
      ]);
    }
  }

  function next() {
    if (isLast) {
      recordQuiz(topic.id, correct, scored);
      setFinished(true);
      return;
    }
    setIndex(index + 1);
    setPicked(null);
    setRevealed(false);
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setRevealed(false);
    setCorrect(0);
    setMissed([]);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz glass" aria-live="polite">
        <h3 className="serif" style={{ fontSize: '1.5rem' }}>Quiz complete</h3>
        <p className="score">
          You got <strong>{correct}</strong> of <strong>{scored}</strong> multiple-choice questions right.
        </p>

        {missed.length === 0 ? (
          <p className="meta">A clean sweep. Try explaining each answer out loud to lock it in.</p>
        ) : (
          <>
            <p className="meta">Here is what to revisit:</p>
            <ul className="missed-list">
              {missed.map((m, n) => (
                <li key={n} className="nm-inset">
                  <strong><Rich text={m.question} /></strong>
                  <div className="you">You chose: {m.picked}</div>
                  <div className="right">Correct: {m.correct}</div>
                </li>
              ))}
            </ul>
            <div className="helpers nm-inset">
              <span className="helpers-title">Get help with all {missed.length} at once</span>
              <AskAI
                label="Ask an AI"
                prompt={bundlePrompt({ course: courseTitle, topic: topic.title, items: missed })}
              />
            </div>
          </>
        )}

        <div className="row">
          <button type="button" className="button" onClick={restart}>Try again</button>
          {missed.length > 0 && (
            <button type="button" className="button secondary irid" onClick={() => onReview(missed[0].review)}>
              Review the explanation
            </button>
          )}
        </div>
      </div>
    );
  }

  const wrong = q.type === 'mcq' && picked !== null && picked !== q.answer;

  return (
    <div className="quiz glass">
      <p className="quiz-count">
        Question {index + 1} of {questions.length}
        {q.type === 'open' && <span className="pill">Exercise</span>}
      </p>
      <p className="question"><Rich text={q.q} /></p>

      {q.type === 'mcq' && (
        <>
          <ul className="options" role="list">
            {q.options.map((opt, i) => {
              const state = picked === null ? '' : i === q.answer ? 'right' : i === picked ? 'wrong' : 'dim';
              const mark = state === 'right' ? '✓' : state === 'wrong' ? '✕' : String.fromCharCode(65 + i);
              return (
                <li key={i}>
                  <button type="button" className={`option irid ${state}`} onClick={() => choose(i)} disabled={picked !== null}>
                    <span className="option-mark" aria-hidden="true">{mark}</span>
                    <span>{opt}</span>
                    {state === 'right' && <span className="sr-only"> (correct answer)</span>}
                    {state === 'wrong' && <span className="sr-only"> (your answer, incorrect)</span>}
                  </button>
                </li>
              );
            })}
          </ul>

          {picked !== null && (
            <div className={`feedback ${wrong ? 'wrong' : 'right'}`} aria-live="polite">
              <strong>{wrong ? 'Not quite.' : 'Correct.'}</strong>
              <span><Rich text={q.explanation} /></span>
            </div>
          )}

          {wrong && (
            <div className="helpers nm-inset">
              <span className="helpers-title">Want to understand it better?</span>
              <div className="row">
                <button type="button" className="button small secondary irid" onClick={() => onReview(q.review)}>
                  Review this section
                </button>
              </div>
              <AskAI
                label="Explain it"
                prompt={questionPrompt({
                  course: courseTitle,
                  topic: topic.title,
                  question: plain(q.q),
                  picked: plain(q.options[picked]),
                  correct: plain(q.options[q.answer]),
                })}
              />
            </div>
          )}
        </>
      )}

      {q.type === 'open' && (
        <>
          {!revealed ? (
            <>
              <p className="meta">Work it out on paper first, then check your answer.</p>
              <button type="button" className="button secondary fit irid" onClick={() => setRevealed(true)}>
                Show model answer
              </button>
            </>
          ) : (
            <div className="feedback neutral" aria-live="polite">
              {q.answer.map((line, i) => (
                <p key={i}><Rich text={line} /></p>
              ))}
            </div>
          )}
        </>
      )}

      {(q.type === 'mcq' ? picked !== null : revealed) && (
        <button type="button" className="button fit" onClick={next}>
          {isLast ? 'See results' : 'Next question'}
        </button>
      )}
    </div>
  );
}
