import { useState } from 'react';
import { usePrefs, setPref, setPrefs, resetPrefs, isPreview } from '../companions/prefs.js';
import { tryUnlock, relock } from '../companions/unlock.js';
import { tourReset, tourStart } from '../companions/tour.js';
import { say, closePanel } from '../companions/manager.js';
import { line } from '../companions/dialogue.js';
import { CHARACTERS, REWARD_ART_READY, faceUrl } from '../companions/assets.js';

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
  const [askingAdult, setAskingAdult] = useState(false);
  const [code, setCode] = useState('');
  const [codeMsg, setCodeMsg] = useState('');
  const hexie = p.unlocked.hexie;
  const cosmic = p.unlocked.cosmic;
  const secretNames = [hexie && 'Hexie', cosmic && 'Cosmic'].filter(Boolean);

  // The code box at the bottom. A right code reveals the character and has them say hello.
  function submitCode(e) {
    e.preventDefault();
    const who = tryUnlock(code);
    if (!who) {
      setCodeMsg(code.trim() ? "That code doesn't open anything." : 'Type a code first.');
      return;
    }
    setCode('');
    setCodeMsg(`Unlocked: ${CHARACTERS[who].name}. ${CHARACTERS[who].short} is now on, and settings for ${CHARACTERS[who].short} have appeared above.`);
    setPref(who === 'hexie' ? 'hexieSeen' : 'cosmicSeen', true);
    // Wait one tick so the new setting is saved before the message is requested.
    setTimeout(() => say(who, { text: line(who, 'welcome'), actions: [{ label: 'Close', run: 'close' }] }, { priority: 6, auto: false, reaction: 'greet' }), 0);
  }

  function pickSpicy() {
    if (p.hexieAdult) setPref('hexieStyle', 'spicy');
    else setAskingAdult(true);
  }
  function confirmAdult() {
    setPrefs({ hexieAdult: true, hexieStyle: 'spicy' });
    setAskingAdult(false);
  }
  function hide(who) {
    closePanel();
    relock(who);
    setCodeMsg('');
  }

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
          Little helpers live in the corner of the screen. Seraph Orca is a friendly guide. Demon Panda is
          an optional, sarcastic advisor. They can be switched off at any time. These settings are saved on this
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

      {hexie && (
        <section className="glass cmp-card cmp-secret" data-who="hexie" aria-labelledby="cmp-hexie">
          <div className="cmp-card-head">
            <img src={faceUrl('hexie', 'sly')} alt="" width="72" height="72" />
            <div>
              <h2 id="cmp-hexie" className="serif">Hexie Magpie</h2>
              <p className="meta">The Frostbound Trickster. Mischievous, theatrical and secretly on your side, with a little German thrown in.</p>
            </div>
          </div>
          <Switch id="cmp-h-on" label="Show Hexie" checked={p.hexie} onChange={(v) => { if (!v) closePanel(); setPref('hexie', v); }} />
          <fieldset className="cmp-fieldset" disabled={!p.hexie}>
            <legend>Her style</legend>
            <div className="cmp-choices">
              <Choice name="hexieStyle" value="standard" current={p.hexieStyle} onPick={() => { setPref('hexieStyle', 'standard'); setAskingAdult(false); }} title="Standard" text="Cheeky and theatrical, safe for any audience." />
              <Choice name="hexieStyle" value="spicy" current={askingAdult ? '' : p.hexieStyle} onPick={pickSpicy} title="Spicy (adults only)" text="Flirty, suggestive humor. Never graphic, and she stays serious when you are struggling." />
            </div>
          </fieldset>
          {askingAdult && (
            <div className="cmp-adult" role="group" aria-label="Adults only">
              <p>
                <strong>Spicy Hexie is for adults.</strong> Her jokes are flirty and suggestive. She switches to her
                Standard voice on low scores, missed deadlines and anything where you need real help, and you can
                switch back to Standard at any time, here or from her help menu.
              </p>
              <div className="cmp-ask-actions">
                <button type="button" className="button small" onClick={confirmAdult}>I am 18 or older. Make her spicy</button>
                <button type="button" className="button small secondary" onClick={() => setAskingAdult(false)}>Keep her Standard</button>
              </div>
            </div>
          )}
          <p>
            <button type="button" className="button small secondary" onClick={() => hide('hexie')}>Hide Hexie again</button>
          </p>
        </section>
      )}

      {cosmic && (
        <section className="glass cmp-card cmp-secret" data-who="cosmic" aria-labelledby="cmp-cosmic">
          <div className="cmp-card-head">
            <img src={faceUrl('cosmic', 'notes')} alt="" width="72" height="72" />
            <div>
              <h2 id="cmp-cosmic" className="serif">The Little Cosmic Bassist</h2>
              <p className="meta">A calm, friendly study buddy with a bass on his back and a soft spot for ice cream.</p>
            </div>
          </div>
          <Switch id="cmp-c-on" label="Show Cosmic" checked={p.cosmic} onChange={(v) => { if (!v) closePanel(); setPref('cosmic', v); }} />
          <fieldset className="cmp-fieldset" disabled={!p.cosmic}>
            <legend>Language</legend>
            <div className="cmp-choices">
              <Choice name="cosmicLang" value="en" current={p.cosmicLang} onPick={(v) => setPref('cosmicLang', v)} title="English" text="He talks in English." />
              <Choice name="cosmicLang" value="it" current={p.cosmicLang} onPick={(v) => setPref('cosmicLang', v)} title="Italiano" text="Parla in italiano, anche nelle scadenze." />
            </div>
          </fieldset>
          <p>
            <button type="button" className="button small secondary" onClick={() => hide('cosmic')}>Hide Cosmic again</button>
          </p>
        </section>
      )}

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
          {hexie && (
            <>
              <button type="button" className="button small secondary" disabled={!p.hexie} onClick={() => demo('hexie', 'previewWave', 'greet')}>Hexie glides in</button>
              <button type="button" className="button small secondary" disabled={!p.hexie} onClick={() => demo('hexie', 'previewLaugh', 'laugh')}>Hexie cackles</button>
              <button type="button" className="button small secondary" disabled={!p.hexie} onClick={() => demo('hexie', 'previewFacepalm', 'facepalm')}>Hexie wipes out</button>
              <button type="button" className="button small secondary" disabled={!p.hexie} onClick={() => demo('hexie', 'previewRespect', 'respect')}>Hexie takes a bow</button>
            </>
          )}
          {cosmic && (
            <>
              <button type="button" className="button small secondary" disabled={!p.cosmic} onClick={() => demo('cosmic', 'previewWave', 'greet')}>Cosmic waves</button>
              <button type="button" className="button small secondary" disabled={!p.cosmic} onClick={() => demo('cosmic', 'previewCelebrate', 'celebrate')}>Cosmic celebrates</button>
              <button type="button" className="button small secondary" disabled={!p.cosmic} onClick={() => demo('cosmic', 'previewReassure', 'reassure')}>Cosmic reassures</button>
              <button type="button" className="button small secondary" disabled={!p.cosmic} onClick={() => demo('cosmic', 'previewStumble', 'stumble')}>Cosmic trips</button>
            </>
          )}
        </div>
        {!p.demon && <p className="meta">Turn Demon on above to try his moves.</p>}
      </section>

      {isPreview() && (
        <section className="glass cmp-card" aria-labelledby="cmp-early">
          <h2 id="cmp-early" className="serif">Tour, reactions and reminders</h2>
          <p className="meta">Choose what the helpers do on their own. Quiet Study Mode above silences all of it.</p>
          <Switch id="cmp-tour" label="Tour guidance" hint="Seraph offers the tour once and explains pages." checked={p.tutorial} onChange={(v) => setPref('tutorial', v)} />
          <div className="cmp-ask-actions">
            <button type="button" className="button small" onClick={() => { tourReset(); tourStart(); }}>Restart the tour</button>
            <button type="button" className="button small secondary" onClick={tourReset}>Reset tour progress</button>
          </div>
          <Switch id="cmp-sugg" label="Study suggestions" hint="Resume where you left off, review weak topics, and Seraph's deadline tips." checked={p.suggestions} onChange={(v) => setPref('suggestions', v)} />
          <Switch id="cmp-cel" label="Celebrations" hint="Small cheers after right answers and good results from the friendly helpers." checked={p.celebrate} onChange={(v) => setPref('celebrate', v)} />
          <Switch id="cmp-dq" label={`${['Demon', ...(hexie ? ['Hexie'] : [])].join(' and ')} react${hexie ? '' : 's'} to quizzes`} checked={p.demonQuiz} onChange={(v) => setPref('demonQuiz', v)} />
          <Switch id="cmp-dd" label={`${['Demon', ...(hexie ? ['Hexie'] : [])].join(' and ')} deadline reminders`} hint="Uses your real due dates. Never late at night, and you can snooze." checked={p.demonDeadlines} onChange={(v) => setPref('demonDeadlines', v)} />
          <Switch id="cmp-gl" label="Major glitch effects" hint="Demon's short digital glitches when he appears or melts down." checked={p.glitch} onChange={(v) => setPref('glitch', v)} />
          <Switch id="cmp-focus" label="Hide during focused study" hint="Hides the helpers on topic, quiz, test and flashcard pages." checked={p.focusHide} onChange={(v) => setPref('focusHide', v)} />
          <fieldset className="cmp-fieldset">
            <legend>How often they speak up</legend>
            <div className="cmp-choices">
              <Choice name="popups" value="rare" current={p.popups} onPick={(v) => setPref('popups', v)} title="Rarely" text="Only the important moments." />
              <Choice name="popups" value="normal" current={p.popups} onPick={(v) => setPref('popups', v)} title="Normal" text="Selective reactions with cooldowns." />
              <Choice name="popups" value="lively" current={p.popups} onPick={(v) => setPref('popups', v)} title="Lively" text="More reactions, still never twice at once." />
            </div>
          </fieldset>
          {REWARD_ART_READY && (
            <p className="meta">
              Rewards earned so far: {p.rewards.snacks} snacks for Seraph, {p.rewards.hammers} hammers for Demon, {p.rewards.pats} head pats.
            </p>
          )}
        </section>
      )}

      <p>
        <button type="button" className="button small secondary" onClick={() => { closePanel(); resetPrefs(); setAskingAdult(false); }}>
          Reset companion settings
        </button>
      </p>

      <section className="cmp-code" aria-labelledby="cmp-code-h">
        <h2 id="cmp-code-h" className="serif">Secret code</h2>
        <p className="meta">Got a code from someone? Type it here to meet a hidden helper.</p>
        <form onSubmit={submitCode} autoComplete="off">
          <input
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value); setCodeMsg(''); }}
            aria-label="Secret code"
            aria-describedby="cmp-code-msg"
            placeholder="Enter code"
            autoComplete="off"
            autoCapitalize="characters"
            autoCorrect="off"
            spellCheck="false"
            maxLength={40}
          />
          <button type="submit" className="button small">Unlock</button>
        </form>
        <p id="cmp-code-msg" className="meta cmp-code-msg" role="status" aria-live="polite">{codeMsg || (secretNames.length ? `Already unlocked: ${secretNames.join(' and ')}.` : '')}</p>
      </section>
    </div>
  );
}
