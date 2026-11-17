import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { REWARD_FRAMES, rewardUrl, warm } from '../companions/assets.js';
import { usePrefs } from '../companions/prefs.js';
import { REWARD_KINDS, spendReward } from '../companions/rewards.js';
import { art } from '../lib/daily.js';

// Plays one reward: a snack for Seraph, a hammer swing at Demon, or a head pat for either of them.
// It steps through the drawn frames and adds a little motion (a flying fish cracker, a swinging mallet, a patting hand).
// `kind` is 'snacks' | 'hammers' | 'pats'; `who` is 'seraph' | 'demon' (only needed for pats).
const SCRIPTS = {
  snacks: { who: 'seraph', frames: ['snack1', 'snack2', 'snack3'], steps: [{ at: 0, f: 0 }, { at: 1100, f: 1, fx: 'chew' }, { at: 2300, f: 2, fx: 'happy' }], end: 3700, lines: ['Seraph is delighted.'] },
  hammers: { who: 'demon', frames: ['hammer1', 'hammer2', 'hammer3'], steps: [{ at: 0, f: 0 }, { at: 950, f: 1, fx: 'bonk' }, { at: 2000, f: 2, fx: 'dizzy' }], end: 3500, lines: ['Demon has had a long day.'] },
  pats: { frames: ['pat'], steps: [{ at: 0, f: 0, fx: 'pat' }], end: 3300, lines: { seraph: 'Seraph is delighted.', demon: 'Demon pretends he did not like that.' } },
};
const TITLES = { snacks: 'Snack time', hammers: 'Bonk', pats: 'Head pats' };

export function warmRewardArt() {
  for (const [who, names] of Object.entries(REWARD_FRAMES)) names.forEach((n) => warm(rewardUrl(who, n)));
}

export default function RewardStage({ kind, who: whoProp, onClose }) {
  const prefs = usePrefs();
  const script = SCRIPTS[kind];
  const who = script.who || whoProp || 'seraph';
  const [run, setRun] = useState(0);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const closeRef = useRef(null);
  const still = prefs.animations === false || prefs.motion === 'reduced';

  useEffect(() => {
    setStep(0);
    setDone(false);
    const timers = script.steps.slice(1).map((s, i) => setTimeout(() => setStep(i + 1), s.at));
    timers.push(setTimeout(() => setDone(true), script.end));
    return () => timers.forEach(clearTimeout);
  }, [run, kind]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const cur = script.steps[step];
  const left = prefs.rewards?.[kind] || 0;
  const line = typeof script.lines === 'object' && !Array.isArray(script.lines) ? script.lines[who] : script.lines[0];
  function again() {
    if (spendReward(kind)) setRun((r) => r + 1);
  }

  return createPortal(
    <div className="rw-overlay" role="dialog" aria-modal="true" aria-label={TITLES[kind]} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`rw-card glass ${still ? 'still' : ''}`}>
        <div className={`rw-figure rw-${kind} rw-who-${who}`} data-fx={cur.fx || ''} key={run}>
          {script.frames.map((name, i) => (
            <img key={name} className={`rw-frame ${i === cur.f ? 'on' : ''}`} src={rewardUrl(who, name)} alt="" draggable="false" />
          ))}
          {kind === 'snacks' && <img className="rw-item rw-fish" src={art('items', 'snack')} alt="" />}
          {kind === 'hammers' && <img className="rw-item rw-mallet" src={art('items', 'mallet')} alt="" />}
          {kind === 'hammers' && <span className="rw-bonk" aria-hidden="true">BONK!</span>}
          {kind === 'pats' && <img className="rw-item rw-hand" src={art('items', 'hand')} alt="" />}
          <span className="rw-hearts" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => <i key={i} style={{ '--i': i }}>{kind === 'hammers' ? '★' : '♥'}</i>)}
          </span>
        </div>
        <p className="rw-line" aria-live="polite">{done ? line : ' '}</p>
        <div className="row rw-actions">
          {done && left > 0 && (
            <button type="button" className="button small secondary" onClick={again}>
              Again ({left} left)
            </button>
          )}
          <button type="button" ref={closeRef} className="button small" onClick={onClose}>{done ? 'Done' : 'Close'}</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export { REWARD_KINDS };
