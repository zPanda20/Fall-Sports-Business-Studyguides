import { useState } from 'react';
import Rich from '../lib/Rich.jsx';
import { recordQuiz } from '../lib/progress.js';

// One question at a time. Multiple-choice questions are scored.
// "Exercise" questions are self-checked: try first, then reveal the model answer.
export default function Quiz({ topicId, questions }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  const scored = questions.filter((q) => q.type === 'mcq').length;
  const q = questions[index];
  const isLast = index === questions.length - 1;

  function choose(i) {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setCorrect((c) => c + 1);
  }

  function next() {
    if (isLast) {
      recordQuiz(topicId, correct, scored);
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
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz card" aria-live="polite">
        <h3 className="h3">Quiz complete</h3>
        <p className="score">
          You got <strong>{correct}</strong> of <strong>{scored}</strong> multiple-choice questions right.
        </p>
        <p className="meta">
          {correct === scored
            ? 'A clean sweep. Try explaining each answer out loud to lock it in.'
            : 'Read the explanations for the ones you missed, then try again.'}
        </p>
        <button type="button" className="button" onClick={restart}>Try again</button>
      </div>
    );
  }

  return (
    <div className="quiz card">
      <p className="quiz-count">
        Question {index + 1} of {questions.length}
        {q.type === 'open' && <span className="pill">Exercise</span>}
      </p>
      <p className="question"><Rich text={q.q} /></p>

      {q.type === 'mcq' && (
        <>
          <ul className="options" role="list">
            {q.options.map((opt, i) => {
              const state =
                picked === null ? '' : i === q.answer ? 'right' : i === picked ? 'wrong' : 'dim';
              return (
                <li key={i}>
                  <button
                    type="button"
                    className={`option ${state}`}
                    onClick={() => choose(i)}
                    disabled={picked !== null}
                  >
                    <span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + i)}</span>
                    <span>{opt}</span>
                    {picked !== null && i === q.answer && <span className="sr-only"> (correct answer)</span>}
                    {picked !== null && i === picked && i !== q.answer && <span className="sr-only"> (your answer, incorrect)</span>}
                  </button>
                </li>
              );
            })}
          </ul>
          {picked !== null && (
            <div className={`feedback ${picked === q.answer ? 'right' : 'wrong'}`} aria-live="polite">
              <strong>{picked === q.answer ? 'Correct.' : 'Not quite.'}</strong> <Rich text={q.explanation} />
            </div>
          )}
        </>
      )}

      {q.type === 'open' && (
        <>
          {!revealed ? (
            <>
              <p className="meta">Work it out on paper first, then check your answer.</p>
              <button type="button" className="button secondary" onClick={() => setRevealed(true)}>
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
        <button type="button" className="button" onClick={next}>
          {isLast ? 'See results' : 'Next question'}
        </button>
      )}
    </div>
  );
}
