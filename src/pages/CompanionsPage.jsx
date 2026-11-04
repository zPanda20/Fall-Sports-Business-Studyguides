import { useState } from 'react';
import { usePrefs, setPref, resetPrefs } from '../companions/prefs.js';
import { say, closePanel } from '../companions/manager.js';
import { line } from '../companions/dialogue.js';
import { CHARACTERS, faceUrl } from '../companions/assets.js';

function Switch({ checked, onChange, label, hint, id }) {
  return (
    <div className="cmp-row">
      <div>
        <label id={`${id}-l`} className="cmp-row-label">{label}</label>
        {hint && <p className="meta" id={`${id}-h`}>{hint}</p>}
      </div>
      <button type="button" id={id} className="switch cmp-switch" role="switch" aria-checked={checked} aria-labelledby={`${id}-l`} aria-describedby={hint ? `${id}-h` : undefined} onClick={() => onChange(!checked)}>
        <span className="switch-track" aria-hidden="true"><span className="switch-dot" /></span>
        <span>{checked ? 'On' : 'Off'}</span>
      </button>
    </div>
  );
}

function Choice({ name, value, current, onPick, title, text }) {
  return (
    <label className={`cmp-choice ${current === value ? 'is-on' : ''}`}>
      <input type="radio" name={name} value={value} checked={current === value} onChange={() => onPick(value)} />
      <span>
        <strong>{title}</strong>
        <span className="meta">{text}</span>
      </span>
    </label>
  );
}

export default function CompanionsPage() {
  const p = usePrefs();
  const [asking, setAsking] = useState(false);

  const demo = (who, key, reaction) =>
    say(who, { text: line(who, key, p.sarcasm), actions: [{ label: 'Close', run: 'close' }] }, { priority: 6, auto: false, reaction });

  function activateDemon() {
    setPref('demon', true);
    setPref('demonSeen', true);
    setAsking(false);
    // Wait one tick so the new setting is saved before the message is requested.
    setTimeout(() => say('demon', { text: line('demon', 'welcome', p.sarcasm), actions: [{ label: 'Close', run: 'close' }] }, { priority: 6, auto: false, reaction: 'greet' }), 0);
  }

  return (
    <div className="stack-lg">
      <header className="stack">
        <h1>Study companions</h1>
        <p className="lead">
          Two little helpers live in the corner of the screen. Seraph Orca is a friendly guide. Demon Panda is
          an optional, sarcastic advisor. Both can be switched off at any time. These settings are saved on this
          device only.
        </p>
      </header>

      <section className="glass cmp-card" aria-labelledby="cmp-seraph">
        <div className="cmp-card-head">
          <img src={faceUrl('seraph', 'delighted')} alt="" width="72" height="72" />
          <div>
            <h2 id="cmp-seraph" className="serif">Seraph Orca</h2>
            <p className="meta">The friendly study assistant. Helps you find things and cheers you on. On by default.</p>
          </div>
        </div>
        <Switch id="cmp-s-on" label="Show Seraph" checked={p.seraph} onChange={(v) => { if (!v) closePanel(); setPref('seraph', v); }} />
      </section>

      <section className="glass cmp-card" aria-labelledby="cmp-demon">
        <div className="cmp-card-head">
          <img src={faceUrl('demon', 'smug')} alt="" width="72" height="72" />
          <div>
            <h2 id="cmp-demon" className="serif">Demon Panda</h2>
            <p className="meta">The sarcastic advisor. Rude in a funny way, but he still helps. Off until you turn him on.</p>
          </div>
        </div>

        {p.demon ? (
          <Switch id="cmp-d-on" label="Show Demon" checked onChange={() => { closePanel(); setPref('demon', false); }} />
        ) : asking ? (
          <div className="cmp-ask" role="group" aria-label="Meet Demon Panda">
            <p>
              <strong>Meet Demon.</strong> He teases wrong answers, puts off nothing and nags about deadlines.
              His jokes are about your answers and your habits, never about you as a person. He always
              explains the correct answer when you ask, and you can turn him off or turn the sarcasm down at any time.
            </p>
            <div className="cmp-ask-actions">
              <button type="button" className="button small" onClick={activateDemon}>Activate Demon</button>
              <button type="button" className="button small secondary" onClick={() => setAsking(false)}>Not now</button>
            </div>
          </div>
        ) : (
          <div className="cmp-row">
            <div>
              <span className="cmp-row-label">Show Demon</span>
              <p className="meta">He stays hidden until you say so.</p>
            </div>
            <button type="button" className="button small" onClick={() => setAsking(true)}>Meet Demon</button>
          </div>
        )}

        <fieldset className="cmp-fieldset" disabled={!p.demon}>
          <legend>Sarcasm level</legend>
          <div className="cmp-choices">
            <Choice name="sarcasm" value="mild" current={p.sarcasm} onPick={(v) => setPref('sarcasm', v)} title="Mild" text="Light teasing and gentle humor." />
            <Choice name="sarcasm" value="playful" current={p.sarcasm} onPick={(v) => setPref('sarcasm', v)} title="Playful (recommended)" text="Obvious sarcasm and theatrical reactions." />
            <Choice name="sarcasm" value="spicy" current={p.sarcasm} onPick={(v) => setPref('sarcasm', v)} title="Extra spicy" text="Cartoon banter that can swear. Still never about who you are." />
          </div>
        </fieldset>
      </section>

      <section className="glass cmp-card" aria-labelledby="cmp-shared">
        <h2 id="cmp-shared" className="serif">Motion and quiet</h2>
        <Switch id="cmp-anim" label="Animations" hint="Floating, bouncing and glitch effects." checked={p.animations} onChange={(v) => setPref('animations', v)} />
        <fieldset className="cmp-fieldset" disabled={!p.animations}>
          <legend>Reduced motion</legend>
          <div className="cmp-choices">
            <Choice name="motion" value="auto" current={p.motion} onPick={(v) => setPref('motion', v)} title="Follow my device" text="Calm when your phone or computer asks for less motion." />
            <Choice name="motion" value="reduced" current={p.motion} onPick={(v) => setPref('motion', v)} title="Always calm" text="Simple fades only." />
            <Choice name="motion" value="full" current={p.motion} onPick={(v) => setPref('motion', v)} title="Full motion" text="Ignore my device setting." />
          </div>
        </fieldset>
        <Switch
          id="cmp-quiet"
          label="Quiet Study Mode"
          hint="No automatic messages and no big animations. You can still open the helpers yourself."
          checked={p.quiet}
          onChange={(v) => { if (v) closePanel(); setPref('quiet', v); }}
        />
      </section>

      <section className="glass cmp-card" aria-labelledby="cmp-try">
        <h2 id="cmp-try" className="serif">Try the moves</h2>
        <p className="meta">A quick look at how they react. Nothing here changes your progress.</p>
        <div className="cmp-try">
          <button type="button" className="button small secondary" disabled={!p.seraph} onClick={() => demo('seraph', 'previewWave', 'greet')}>Seraph waves</button>
          <button type="button" className="button small secondary" disabled={!p.seraph} onClick={() => demo('seraph', 'previewCelebrate', 'celebrate')}>Seraph celebrates</button>
          <button type="button" className="button small secondary" disabled={!p.seraph} onClick={() => demo('seraph', 'previewReassure', 'reassure')}>Seraph reassures</button>
          <button type="button" className="button small secondary" disabled={!p.seraph} onClick={() => demo('seraph', 'previewStumble', 'stumble')}>Seraph trips</button>
          <button type="button" className="button small secondary" disabled={!p.demon} onClick={() => demo('demon', 'previewFacepalm', 'facepalm')}>Demon facepalms</button>
          <button type="button" className="button small secondary" disabled={!p.demon} onClick={() => demo('demon', 'previewLaugh', 'laugh')}>Demon laughs</button>
          <button type="button" className="button small secondary" disabled={!p.demon} onClick={() => demo('demon', 'previewMeltdown', 'meltdown')}>Demon melts down</button>
          <button type="button" className="button small secondary" disabled={!p.demon} onClick={() => demo('demon', 'previewRespect', 'respect')}>Demon approves</button>
        </div>
        {!p.demon && <p className="meta">Turn Demon on above to try his moves.</p>}
      </section>

      <p>
        <button type="button" className="button small secondary" onClick={() => { closePanel(); resetPrefs(); }}>
          Reset companion settings
        </button>
      </p>
    </div>
  );
}
