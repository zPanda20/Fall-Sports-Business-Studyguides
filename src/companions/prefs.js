import { useSyncExternalStore } from 'react';

// Companion settings live only in this browser, in one versioned localStorage entry.
// Updating the app never resets them: saved values are merged over the defaults.
const KEY = 'sbsg:companions:v1';

export const DEFAULTS = {
  seraph: true, // on by default, can be switched off
  demon: false, // off until someone turns him on
  // Hexie stays hidden and switched off until her code is entered (unlock.js). `unlocked` is the only thing that
  // reveals her. Cosmic is a normal companion: off until someone activates him, like Demon.
  unlocked: { hexie: false },
  hexie: false,
  cosmic: false,
  hexieSeen: false,
  cosmicSeen: false,
  hexieStyle: 'standard', // 'standard' | 'spicy' (spicy also needs hexieAdult)
  hexieAdult: false, // the person confirmed they are 18 or older and chose the adult humor
  cosmicLang: 'en', // 'en' | 'it'
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
  hexieStyle: ['standard', 'spicy'],
  cosmicLang: ['en', 'it'],
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
  // A locked character can never be on, and Spicy Hexie needs the adult confirmation, whatever is saved.
  const u = out.unlocked && typeof out.unlocked === 'object' ? out.unlocked : {};
  out.unlocked = { hexie: u.hexie === true };
  if (!out.unlocked.hexie) {
    out.hexie = false;
    out.hexieStyle = 'standard';
    out.hexieAdult = false;
  }
  if (!out.hexieAdult) out.hexieStyle = 'standard';
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
// A reset puts the settings back to how they started. Unlocked characters stay unlocked (but switched off).
export function resetPrefs() {
  commit(clean({ ...DEFAULTS, unlocked: state.unlocked }));
}

// The tour, quiz reactions, reminders and help are all live. This stays as one switch in case a part ever
// needs to be held back again.
export const isPreview = () => true;
