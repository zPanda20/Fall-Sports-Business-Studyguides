import { useEffect, useState } from 'react';
import { usePrefs } from '../companions/prefs.js';
import { REWARD_KINDS, spendReward } from '../companions/rewards.js';
import { art } from '../lib/daily.js';
import RewardStage, { warmRewardArt } from './RewardStage.jsx';

// The things you have earned, and a button to use each one. Used on the Daily page and the Companions page.
export default function RewardCorner() {
  const prefs = usePrefs();
  const [playing, setPlaying] = useState(null);
  useEffect(warmRewardArt, []);
  const r = prefs.rewards || {};

  function use(kind, who) {
    if (!spendReward(kind)) return;
    setPlaying({ kind, who });
  }
  const card = (kind, buttons) => {
    const k = REWARD_KINDS[kind];
    return (
      <div className="reward-card nm" data-kind={kind}>
        <img src={art('items', k.icon)} alt="" width="64" height="64" loading="lazy" />
        <div>
          <b>{r[kind] || 0}</b> <span>{(r[kind] || 0) === 1 ? k.single : k.plural}</span>
        </div>
        <div className="row">{buttons}</div>
      </div>
    );
  };
  return (
    <section className="stack" aria-label="Rewards">
      <h2>Reward corner</h2>
      <p className="meta">Finish the daily quiz for a head pat, score 80% or better for a snack, and earn a hammer swing with a perfect score or a streak milestone. You can also buy more on the unlock shelf.</p>
      <div className="reward-grid">
        {card('snacks', <button type="button" className="button small" disabled={!r.snacks} onClick={() => use('snacks')}>Feed Seraph</button>)}
        {card('hammers', <button type="button" className="button small" disabled={!r.hammers} onClick={() => use('hammers')}>Bonk Demon</button>)}
        {card('pats', (
          <>
            <button type="button" className="button small" disabled={!r.pats} onClick={() => use('pats', 'seraph')}>Pat Seraph</button>
            <button type="button" className="button small secondary" disabled={!r.pats} onClick={() => use('pats', 'demon')}>Pat Demon</button>
          </>
        ))}
      </div>
      {playing && <RewardStage kind={playing.kind} who={playing.who} onClose={() => setPlaying(null)} />}
    </section>
  );
}
