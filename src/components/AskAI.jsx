import { useState } from 'react';
import { PROVIDERS, MAX_URL_PROMPT, getProvider, setAiPref, useAiPref } from '../lib/ai.js';

// Sends a ready-made prompt to the student's preferred AI.
export default function AskAI({ prompt, label = 'Ask an AI' }) {
  const pref = useAiPref();
  const provider = getProvider(pref);
  const [message, setMessage] = useState('');

  const direct = provider.mode === 'prefill' && prompt.length <= MAX_URL_PROMPT;

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
      return true;
    } catch {
      return false;
    }
  }

  function ask() {
    if (direct) {
      window.open(provider.url(prompt), '_blank', 'noopener,noreferrer');
      setMessage(`Opened ${provider.name} with your question ready to send.`);
      return;
    }
    // Copy first (needs the click), then open the chat to paste into.
    const copied = copy();
    window.open(provider.url(prompt), '_blank', 'noopener,noreferrer');
    copied.then((ok) =>
      setMessage(
        ok
          ? `Message copied. Paste it into the new ${provider.name} chat.`
          : 'Could not copy automatically. Open "See the message" below and copy it by hand.',
      ),
    );
  }

  async function copyOnly() {
    setMessage((await copy()) ? 'Message copied.' : 'Could not copy automatically. Select the text below and copy it.');
  }

  return (
    <div className="ask">
      <div className="ask-row">
        <label>
          <span className="sr-only">Choose your AI</span>
          <select className="select" value={provider.id} onChange={(e) => { setAiPref(e.target.value); setMessage(''); }}>
            {PROVIDERS.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </label>
        <button type="button" className="button small" onClick={ask}>
          {label} · {provider.name}
        </button>
        <button type="button" className="button small secondary" onClick={copyOnly}>
          Copy message
        </button>
      </div>
      <p className="ask-msg" aria-live="polite">
        {message || (direct ? '' : `${provider.name} cannot take a prefilled link, so the message is copied for you to paste.`)}
      </p>
      <details>
        <summary>See the message</summary>
        <textarea readOnly value={prompt} aria-label="Message that will be sent" onFocus={(e) => e.target.select()} />
      </details>
    </div>
  );
}
