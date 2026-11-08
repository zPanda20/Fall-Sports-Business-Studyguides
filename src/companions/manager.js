import { useSyncExternalStore } from 'react';
import { getPrefs, subscribePrefs } from './prefs.js';
import { REACTIONS } from './reactions.js';
import { facePath } from './emotions.js';
import { NEUTRAL_FACE, WHO } from './assets.js';
import { ui } from './dialogue.js';

// One shared brain for both characters. It decides who is on screen, which pose and face each
// one has, and which message is showing. Only one panel can be open at a time.
// Messages have a priority; a less important message never replaces a more important one.
//
// Priorities (higher wins): 1 decoration, 2 suggestion, 3 quiz reaction, 4 deadline,
// 5 tour step, 6 the person asked for help.

const EXIT_MS = 300;

const each = (fn) => Object.fromEntries(WHO.map((w) => [w, fn(w)]));

const fresh = () => ({
  panel: null, // a character id, or null: who has the open panel
  closing: null, // the character whose panel is fading out
  msg: null, // { id, who, text, actions, priority, auto }
  pose: each(() => 'idle'),
  face: each((w) => NEUTRAL_FACE[w]),
  anim: each(() => 'idle'),
  enterKey: 0, // bumps on each entrance so the animation replays
});

let state = fresh();
const listeners = new Set();
const set = (patch) => {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
};
const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
export const useCompanion = () => useSyncExternalStore(subscribe, () => state);
export const getCompanionState = () => state;

// Every timer is tagged with a token. Starting something new bumps the token, so an old timer that
// fires late does nothing (this is what stops a dismissed character from popping back up).
const tokens = { ...each(() => 0), face: each(() => 0), exit: 0 };
const timers = new Set();
function later(ms, fn) {
  const t = setTimeout(() => {
    timers.delete(t);
    fn();
  }, ms);
  timers.add(t);
}

function setFace(who, target) {
  const steps = facePath(who, state.face[who], target).slice(1);
  const token = ++tokens.face[who];
  steps.forEach((f, n) => {
    later(n * 140, () => {
      if (tokens.face[who] !== token) return;
      set({ face: { ...state.face, [who]: f } });
    });
  });
}

// Play a named reaction (see reactions.js), then settle back to idle.
export function perform(who, name, { enter = false } = {}) {
  const r = REACTIONS[who]?.[name];
  if (!r) return;
  const token = ++tokens[who];
  set({
    pose: { ...state.pose, [who]: r.pose },
    anim: { ...state.anim, [who]: enter ? 'enter' : r.anim },
    enterKey: enter ? state.enterKey + 1 : state.enterKey,
  });
  setFace(who, r.face);
  const settle = () => {
    if (tokens[who] !== token) return;
    set({ anim: { ...state.anim, [who]: 'idle' } });
  };
  if (enter) {
    later(420, () => {
      if (tokens[who] !== token) return;
      set({ anim: { ...state.anim, [who]: r.anim } });
      if (r.ms) later(r.ms, settle);
    });
  } else if (r.ms) {
    later(r.ms, settle);
  }
}

function typing() {
  const el = document.activeElement;
  return Boolean(el && (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && el.type !== 'checkbox' && el.type !== 'radio')));
}

const shown = new Set(); // message ids already shown this session, to avoid repeats

// Show a message. Returns true if it was shown.
//   opts.priority  how important it is (see above); default 2
//   opts.auto      true when the app started it, false when the person asked
//   opts.id        a repeat guard: the same id is shown once per session
//   opts.reaction  which reaction to play with it; default 'greet'
//   opts.ttl       close by itself after this many ms (automatic messages only)
export function say(who, msg, opts = {}) {
  const { priority = 2, auto = false, id, reaction = 'greet', ttl = 0 } = opts;
  const prefs = getPrefs();
  if (!WHO.includes(who) || !prefs[who]) return false;
  if (auto && prefs.quiet) return false;
  if (auto && typing()) return false;
  if (id && shown.has(id)) return false;
  if (state.panel && state.msg && state.msg.priority > priority) return false;
  if (id) shown.add(id);
  tokens.exit++;
  const switching = state.panel && state.panel !== who;
  set({
    panel: who,
    closing: switching ? state.panel : null,
    msg: { actions: [], ...msg, who, priority, auto, id, ...(msg.actions ? { actions: msg.actions.map((a) => ({ ...a, label: ui(who, a.label) })) } : {}) },
  });
  if (switching) {
    const t = ++tokens.exit;
    later(EXIT_MS, () => tokens.exit === t && set({ closing: null }));
  }
  perform(who, reaction, { enter: true });
  if (ttl && auto) {
    const mine = state.msg;
    later(ttl, () => {
      // Leave it alone if it was replaced or closed, or if the person is reading or using it.
      if (state.msg !== mine || hovering) return;
      closePanel();
    });
  }
  return true;
}

// The panel tells us when the pointer or focus is inside it, so a timed message never vanishes mid-read.
let hovering = false;
export const holdPanel = (on) => {
  hovering = on;
};

// Change the text (or buttons) of the message on screen without replaying the entrance.
export function amend(patch, reaction) {
  if (!state.msg) return;
  const who = state.msg.who;
  const next = patch.actions ? { ...patch, actions: patch.actions.map((a) => ({ ...a, label: ui(who, a.label) })) } : patch;
  set({ msg: { ...state.msg, ...next } });
  if (reaction) perform(state.msg.who, reaction);
}

export function closePanel() {
  if (!state.panel) return;
  const who = state.panel;
  const t = ++tokens.exit;
  tokens[who]++;
  set({ panel: null, closing: who, msg: null, anim: { ...state.anim, [who]: 'exit' } });
  later(EXIT_MS, () => {
    if (tokens.exit !== t) return;
    set({ closing: null, pose: { ...state.pose, [who]: 'idle' }, anim: { ...state.anim, [who]: 'idle' } });
    setFace(who, NEUTRAL_FACE[who]);
  });
}

// Drop everything in flight (used when the page changes or a character is switched off).
export function cancelAll() {
  timers.forEach(clearTimeout);
  timers.clear();
  WHO.forEach((w) => {
    tokens[w]++;
    tokens.face[w]++;
  });
  tokens.exit++;
  state = { ...fresh(), enterKey: state.enterKey };
  listeners.forEach((l) => l());
}

// Switching a character off removes his panel and stops anything he had scheduled.
let before = getPrefs();
subscribePrefs(() => {
  const now = getPrefs();
  for (const who of WHO) {
    if (before[who] && !now[who] && (state.panel === who || state.closing === who)) cancelAll();
  }
  before = now;
});
