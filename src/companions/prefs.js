import { useSyncExternalStore } from 'react';

// Companion settings live only in this browser, in one versioned localStorage entry.
// Updating the app never resets them: saved values are merged over the defaults.
const KEY = 'sbsg:companions:v1';
const PREVIEW_KEY = 'sbsg:companions:preview';

export const DEFAULTS = {
  seraph: true, // on by default, can be switched off
  demon: false, // off until someone turns him on
  introSeen: false, // Seraph has said hello once on this device
  demonSeen: false, // Demon has been introduced once
  sarcasm: 'playful', // 'mild' | 'playful' | 'spicy'
  animations: true,
  motion: 'auto', // 'auto' follows the device, 'reduced' always calms things down, 'full' ignores the device
  quiet: false, // Quiet Study Mode: no automatic messages at all
  // These only matter once the unreleased parts are switched on (see isPreview):
  popups: 'normal', // 'rare' | 'normal' | 'lively'
  suggestions: true,
  tutorial: true,
  celebrate: true,
  demonQuiz: true,
  demonDeadlines: true,
  glitch: true,
  focusHide: false,
  tourDone: false,
  tourDismissed: false,
  tipsSeen: {},
  deadlineSeen: {}, // 'id:level' -> when a reminder was last shown
  snoozed: {}, // deadline id -> snoozed until (ms)
  rewards: { snacks: 0, hammers: 0, pats: 0 }, // earned by finishing quizzes, tasks and topics
  last: '', // the topic you were last reading, so Seraph can offer to resume
};

const CHOICES = {
  sarcasm: ['mild', 'playful', 'spicy'],
  motion: ['auto', 'reduced', 'full'],
  popups: ['rare', 'normal', 'lively'],
};

function clean(raw) {
  const out = { ...DEFAULTS };
  if (!raw || typeof raw !== 'object') return out;
  for (const k of Object.keys(DEFAULTS)) {
    if (!(k in raw)) continue;
    const v = raw[k];
    if (CHOICES[k]) {
      if (CHOICES[k].includes(v)) out[k] = v;
    } else if (typeof DEFAULTS[k] === 'boolean') {
      if (typeof v === 'boolean') out[k] = v;
    } else if (k === 'last') {
      if (typeof v === 'string' && v.length < 120) out[k] = v;
    } else if (typeof DEFAULTS[k] === 'object') {
      if (v && typeof v === 'object' && !Array.isArray(v)) out[k] = k === 'rewards' ? { ...DEFAULTS.rewards, ...v } : v;
    }
  }
  return out;
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return clean(raw ? JSON.parse(raw) : null);
  } catch {
    return { ...DEFAULTS };
  }
}

let state = load();
const listeners = new Set();

function commit(next) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage can be blocked (private mode). Settings still work until the tab closes.
  }
  listeners.forEach((l) => l());
}

export const getPrefs = () => state;
export function subscribePrefs(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
export const usePrefs = () => useSyncExternalStore(subscribePrefs, getPrefs);

export function setPref(key, value) {
  if (!(key in DEFAULTS) || state[key] === value) return;
  commit(clean({ ...state, [key]: value }));
}
export function setPrefs(patch) {
  commit(clean({ ...state, ...patch }));
}
export function resetPrefs() {
  commit({ ...DEFAULTS });
}

// ---- unreleased parts ----
// The tour, quiz reactions, deadline nagging and context help are built but hidden from everyone
// until they are approved. To try them on your own device, open the site once with ?companions=preview
// (and ?companions=off to hide them again). It is remembered in this browser only.
let preview = false;
try {
  const q = new URLSearchParams(window.location.search).get('companions');
  if (q === 'preview') localStorage.setItem(PREVIEW_KEY, '1');
  if (q === 'off') localStorage.removeItem(PREVIEW_KEY);
  preview = localStorage.getItem(PREVIEW_KEY) === '1';
} catch {
  preview = false;
}
export const isPreview = () => preview;
