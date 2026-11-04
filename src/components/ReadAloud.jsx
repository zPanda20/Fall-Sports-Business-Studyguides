import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

// Reads text out loud with the browser's own voices. Nothing is sent anywhere.
const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

function pickVoice() {
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter((v) => /^en(-|_|$)/i.test(v.lang));
  return en.find((v) => /natural|google|samantha|daniel|aria|jenny/i.test(v.name)) || en[0] || null;
}

// Splits into sentence-sized pieces: long utterances are cut off in some browsers.
function chunks(text) {
  return (text.match(/[^.!?]+[.!?]*\s*/g) || [text]).map((c) => c.trim()).filter(Boolean);
}

export default function ReadAloud({ text, label = 'Read aloud', compact = false }) {
  const [state, setState] = useState('idle'); // idle | playing | paused
  const run = useRef(0);

  // Stop when the text changes (a new slide) or the component goes away.
  useEffect(() => {
    run.current++;
    if (supported) window.speechSynthesis.cancel();
    setState('idle');
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
  }, [text]);

  if (!supported) return null;

  function play() {
    const synth = window.speechSynthesis;
    synth.cancel();
    const id = ++run.current;
    const parts = chunks(text);
    const voice = pickVoice();
    parts.forEach((part, i) => {
      const u = new SpeechSynthesisUtterance(part);
      if (voice) u.voice = voice;
      u.lang = voice?.lang || 'en-US';
      u.rate = 0.96;
      u.onend = () => {
        if (run.current === id && i === parts.length - 1) setState('idle');
      };
      u.onerror = () => {
        if (run.current === id) setState('idle');
      };
      synth.speak(u);
    });
    setState('playing');
  }
  function pause() {
    window.speechSynthesis.pause();
    setState('paused');
  }
  function resume() {
    window.speechSynthesis.resume();
    setState('playing');
  }
  function stop() {
    run.current++;
    window.speechSynthesis.cancel();
    setState('idle');
  }

  return (
    <div className={`read-aloud ${compact ? 'compact' : ''}`} role="group" aria-label={label}>
      {state === 'idle' && (
        <button type="button" className="button small secondary" onClick={play}>
          <Icon name="speaker" size={18} /> {label}
        </button>
      )}
      {state === 'playing' && (
        <button type="button" className="button small secondary" onClick={pause}>Pause</button>
      )}
      {state === 'paused' && (
        <button type="button" className="button small secondary" onClick={resume}>Resume</button>
      )}
      {state !== 'idle' && (
        <button type="button" className="button small secondary" onClick={stop}>Stop</button>
      )}
    </div>
  );
}
