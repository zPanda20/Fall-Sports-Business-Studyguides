import { Component, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './companions.css';
import { CHARACTERS, POSE_SIZE, faceUrl, poseUrl, warm, warmDefaults, WHO } from './assets.js';
import { usePrefs, setPref } from './prefs.js';
import { useCompanion, say, closePanel, cancelAll } from './manager.js';
import { line } from './dialogue.js';
import { helpActions } from './context.js';

// If anything in the companion code breaks, hide the companions and keep the app working.
class Boundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    console.warn('Study companions switched off for this page view:', error);
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

// 'full' when motion is welcome, 'off' when the person (or their device) asked for calm.
function useMotion(prefs) {
  const [deviceCalm, setDeviceCalm] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return undefined;
    const on = () => setDeviceCalm(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  if (!prefs.animations) return 'off';
  if (prefs.motion === 'reduced') return 'off';
  if (prefs.motion === 'auto' && deviceCalm) return 'off';
  return 'full';
}

// A full-body pose. When the pose changes, the new picture is loaded first and then fades in over
// the old one, so there is never a blank flash.
function PoseImage({ who, pose }) {
  const [shown, setShown] = useState(pose);
  const [prev, setPrev] = useState(null);
  const [failed, setFailed] = useState(false);
  const timer = useRef(0);
  useEffect(() => {
    if (pose === shown) return undefined;
    let live = true;
    const im = new Image();
    const swap = () => {
      if (!live) return;
      setPrev(shown);
      setShown(pose);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => live && setPrev(null), 240);
    };
    im.onload = swap;
    im.onerror = swap;
    im.src = poseUrl(who, pose);
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pose, who]);
  useEffect(() => () => clearTimeout(timer.current), []);
  const [w, h] = POSE_SIZE[who];
  if (failed) return <span className="cmp-pose-missing" aria-hidden="true">{CHARACTERS[who].short[0]}</span>;
  return (
    <span className="cmp-pose" style={{ aspectRatio: `${w} / ${h}` }}>
      {prev && <img className="out" src={poseUrl(who, prev)} alt="" width={w} height={h} draggable="false" />}
      <img className="in" key={shown} src={poseUrl(who, shown)} alt="" width={w} height={h} draggable="false" onError={() => setFailed(true)} />
    </span>
  );
}

function Face({ who, face }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="cmp-face-missing" aria-hidden="true">{CHARACTERS[who].short[0]}</span>;
  return <img key={face} className="cmp-face" src={faceUrl(who, face)} alt="" width="256" height="256" draggable="false" onError={() => setFailed(true)} />;
}

function Panel({ who, msg, state, c, onAction, onOff, panelRef }) {
  const ch = CHARACTERS[who];
  const open = state === 'open';
  return (
    <section
      ref={open ? panelRef : undefined}
      className="cmp-panel"
      data-who={who}
      data-state={state}
      role="dialog"
      aria-label={`${ch.name}, ${ch.role}`}
      tabIndex={-1}
    >
      <div className="cmp-fig-col" aria-hidden="true">
        <div className="cmp-fig" data-anim={c.anim[who]}>
          <PoseImage who={who} pose={c.pose[who]} />
        </div>
      </div>
      <div className="cmp-body">
        <header className="cmp-head">
          <span className="cmp-avatar"><Face who={who} face={c.face[who]} /></span>
          <span className="cmp-title">
            <strong>{ch.name}</strong>
            <span>{ch.role}</span>
          </span>
          <Link className="cmp-icon-btn" to="/companions" onClick={closePanel} aria-label="Companion settings" title="Companion settings">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
            </svg>
          </Link>
          <button type="button" className="cmp-icon-btn" onClick={closePanel} aria-label={`Close ${ch.short}`} title="Close">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>
        <p className="cmp-text">{msg?.text}</p>
        {msg?.actions?.length > 0 && (
          <div className="cmp-actions">
            {msg.actions.map((a) =>
              a.to ? (
                <Link key={a.label} className={`cmp-btn ${a.primary ? 'is-primary' : ''}`} to={a.to} onClick={closePanel}>
                  {a.label}
                </Link>
              ) : (
                <button key={a.label} type="button" className={`cmp-btn ${a.primary ? 'is-primary' : ''}`} onClick={() => onAction(a)}>
                  {a.label}
                </button>
              ),
            )}
          </div>
        )}
        <button type="button" className="cmp-off" onClick={() => onOff(who)}>
          Switch {ch.short} off
        </button>
      </div>
    </section>
  );
}

function Inner() {
  const prefs = usePrefs();
  const c = useCompanion();
  const { pathname } = useLocation();
  const motion = useMotion(prefs);
  const panelRef = useRef(null);
  const launchRefs = useRef({});
  const lastMsg = useRef({});
  if (c.msg) lastMsg.current[c.msg.who] = c.msg;

  const level = prefs.sarcasm;

  function openHelp(who) {
    const actions = helpActions(who, pathname);
    say(who, { text: line(who, 'help', level), actions }, { priority: 6, auto: false, reaction: 'greet' });
  }

  function onAction(a) {
    if (a.run === 'menu') openHelp(c.msg?.who || 'seraph');
    else closePanel();
  }

  function switchOff(who) {
    closePanel();
    setPref(who, false);
  }

  // Change of page: drop anything in flight so no stale panel or timer follows the student around.
  useEffect(() => {
    cancelAll();
  }, [pathname]);

  // Get the small default pictures ready once the browser is idle.
  useEffect(() => {
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1200));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const id = idle(() => WHO.forEach((w) => prefs[w] && warmDefaults(w)));
    return () => cancel(id);
  }, [prefs.seraph, prefs.demon]); // eslint-disable-line react-hooks/exhaustive-deps

  // First visit on this device: Seraph says hello once and never forces anything.
  useEffect(() => {
    if (!prefs.seraph || prefs.introSeen || prefs.quiet || pathname === '/companions') return undefined;
    const t = setTimeout(() => {
      const shown = say(
        'seraph',
        {
          text: line('seraph', 'intro'),
          actions: [
            { label: 'What can you do?', run: 'menu', primary: true },
            { label: 'Got it', run: 'close' },
          ],
        },
        { priority: 2, auto: true, id: 'intro', reaction: 'greet' },
      );
      if (shown) setPref('introSeen', true);
    }, 2600);
    return () => clearTimeout(t);
  }, [prefs.seraph, prefs.introSeen, prefs.quiet, pathname]);

  // Escape closes the panel (unless you are typing somewhere).
  useEffect(() => {
    if (!c.panel) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      const who = c.panel;
      closePanel();
      launchRefs.current[who]?.focus({ preventScroll: true });
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [c.panel]);

  // When the person opened the panel, move focus into it so keyboard and screen-reader users land there.
  useEffect(() => {
    if (c.panel && c.msg && !c.msg.auto) panelRef.current?.focus({ preventScroll: true });
  }, [c.msg]); // eslint-disable-line react-hooks/exhaustive-deps

  const visible = WHO.filter((w) => prefs[w]);
  if (!visible.length) return null;

  const openWho = c.panel;
  const fadingWho = !c.panel && c.closing ? c.closing : null;
  const onTopic = pathname.startsWith('/topic/');

  return (
    <div className="cmp-root" data-motion={motion} data-topic={onTopic ? '1' : undefined} data-quiet={prefs.quiet ? '1' : undefined}>
      {openWho && <Panel who={openWho} msg={c.msg} state="open" c={c} onAction={onAction} onOff={switchOff} panelRef={panelRef} />}
      {fadingWho && <Panel who={fadingWho} msg={lastMsg.current[fadingWho]} state="closing" c={c} onAction={() => {}} onOff={() => {}} />}

      <div className="cmp-tray">
        {visible.map((who) => {
          const ch = CHARACTERS[who];
          const open = c.panel === who;
          return (
            <button
              key={who}
              ref={(el) => {
                launchRefs.current[who] = el;
              }}
              type="button"
              className="cmp-launch"
              data-who={who}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-label={open ? `Close ${ch.name}` : `Open ${ch.name}, ${ch.role.toLowerCase()}`}
              onClick={() => (open ? closePanel() : openHelp(who))}
              onPointerEnter={() => warm(poseUrl(who, 'greeting'))}
              onFocus={() => warm(poseUrl(who, 'greeting'))}
            >
              <Face who={who} face={c.face[who]} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CompanionLayer() {
  return (
    <Boundary>
      <Inner />
    </Boundary>
  );
}
