import { useSyncExternalStore } from 'react';

// ---------------------------------------------------------------------------
// "Ask an AI" hand-off.
// ChatGPT and Perplexity accept a prefilled prompt in the URL, so those open
// ready to send. The others have no reliable prefill link, so for them we copy
// the prompt to the clipboard and open a new chat to paste it into.
// (Checked November 2026. Claude's ?q= link was reported broken in late 2025.)
// ---------------------------------------------------------------------------
export const PROVIDERS = [
  { id: 'chatgpt', name: 'ChatGPT', mode: 'prefill', url: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}` },
  { id: 'perplexity', name: 'Perplexity', mode: 'prefill', url: (p) => `https://www.perplexity.ai/search?q=${encodeURIComponent(p)}` },
  { id: 'claude', name: 'Claude', mode: 'copy', url: () => 'https://claude.ai/new' },
  { id: 'gemini', name: 'Gemini', mode: 'copy', url: () => 'https://gemini.google.com/app' },
  { id: 'mistral', name: 'Mistral', mode: 'copy', url: () => 'https://chat.mistral.ai/chat' },
  { id: 'deepseek', name: 'DeepSeek', mode: 'copy', url: () => 'https://chat.deepseek.com/' },
];

// Very long prompts do not fit safely in a URL, so those fall back to copy-and-paste.
export const MAX_URL_PROMPT = 1800;

const KEY = 'sbsg:ai';
let pref = (() => {
  try {
    return localStorage.getItem(KEY) || PROVIDERS[0].id;
  } catch {
    return PROVIDERS[0].id;
  }
})();
const listeners = new Set();

export function useAiPref() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => pref,
  );
}

export function setAiPref(id) {
  pref = id;
  try {
    localStorage.setItem(KEY, id);
  } catch {
    // ignore blocked storage
  }
  listeners.forEach((l) => l());
}

export const getProvider = (id) => PROVIDERS.find((p) => p.id === id) || PROVIDERS[0];

// ---- prompt builders ----
export function questionPrompt({ course, topic, question, picked, correct }) {
  return [
    'Please explain this concept to me in simple terms.',
    '',
    `I am studying "${topic}" in my ${course} course and I got a practice question wrong.`,
    '',
    `Question: ${question}`,
    `I chose: ${picked}`,
    `The correct answer was: ${correct}`,
    '',
    'Please explain why my choice was wrong and why the correct answer is right, then give me one simple everyday example so it sticks.',
  ].join('\n');
}

export function bundlePrompt({ course, topic, items }) {
  const lines = [
    'Please explain these concepts to me in simple terms.',
    '',
    `I am studying "${topic}" in my ${course} course and I got these practice questions wrong.`,
  ];
  items.forEach((it, i) => {
    lines.push('', `${i + 1}. Question: ${it.question}`, `   I chose: ${it.picked}`, `   Correct answer: ${it.correct}`);
  });
  lines.push('', 'For each one, explain why my choice was wrong and why the correct answer is right, using simple language and one everyday example.');
  return lines.join('\n');
}

// Bookmarks. Each item: { course, topic, where?, excerpt?, note? }
export function bookmarkPrompt({ items }) {
  const many = items.length > 1;
  const lines = [
    many ? 'Please help me understand these things I am confused about.' : 'Please help me understand something I am confused about.',
    '',
    `I am a student using a study guide. I bookmarked ${many ? 'the parts below' : 'the part below'} because ${many ? 'they' : 'it'} did not make sense to me.`,
  ];
  items.forEach((it, i) => {
    lines.push('', `${i + 1}. Course: ${it.course}. Topic: ${it.topic}.`);
    if (it.where) lines.push(`   Where: ${it.where}`);
    if (it.excerpt) lines.push(`   What the guide says: ${it.excerpt}`);
    lines.push(`   What confuses me: ${it.note || 'I am not sure. Please explain the idea from the start.'}`);
  });
  lines.push(
    '',
    `${many ? 'For each one, explain' : 'Please explain'} it in simple language, give one everyday example, and finish with one quick question to check that I understood. Stick to what a university course would teach, and tell me if something may differ from how my instructor teaches it.`,
  );
  return lines.join('\n');
}
