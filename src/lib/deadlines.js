import { useMemo, useSyncExternalStore } from 'react';
import { DEADLINES } from '../data/deadlines.js';

// ---------------------------------------------------------------------------
// Due dates. What is done, and any dates a student adds or changes, live only in
// this browser (localStorage), like progress and bookmarks. Each person sees their own.
// ---------------------------------------------------------------------------
const KEY = 'sbsg:deadlines:v1';

function load() {
  try {
    const p = JSON.parse(localStorage.getItem(KEY) || 'null');
    const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
    return { done: obj(p?.done), dates: obj(p?.dates) };
  } catch {
    return { done: {}, dates: {} };
  }
}

let state = load();
const listeners = new Set();

function commit(next) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage can be blocked (private mode). It still works for this visit.
  }
  listeners.forEach((l) => l());
}
const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

// ---- the "just archived" undo message ----
let last = null;
let lastTimer = null;
const lastListeners = new Set();
function setLast(v) {
  last = v;
  clearTimeout(lastTimer);
  if (v) lastTimer = setTimeout(() => setLast(null), 8000);
  lastListeners.forEach((l) => l());
}
export function useLastArchived() {
  return useSyncExternalStore(
    (l) => {
      lastListeners.add(l);
      return () => lastListeners.delete(l);
    },
    () => last,
  );
}

// ---- changes ----
export function markDone(id) {
  const item = DEADLINES.find((d) => d.id === id);
  if (!item || state.done[id]) return;
  commit({ ...state, done: { ...state.done, [id]: Date.now() } });
  setLast({ id, title: item.title });
}
export function restore(id) {
  if (!state.done[id]) return;
  const done = { ...state.done };
  delete done[id];
  commit({ ...state, done });
  if (last?.id === id) setLast(null);
}
// iso: an ISO date string, or null to go back to the original date
export function setDueDate(id, iso) {
  const dates = { ...state.dates };
  if (iso) dates[id] = iso;
  else delete dates[id];
  commit({ ...state, dates });
}

// ---- reading ----
// Everything resolved: the exact due time (ms, or null), whether the student changed it, when it was done.
export function resolve(s) {
  return DEADLINES.map((d) => {
    const iso = s.dates[d.id] ?? d.dueAt;
    const ms = iso ? Date.parse(iso) : NaN;
    return {
      ...d,
      dueMs: Number.isFinite(ms) ? ms : null,
      changed: Boolean(s.dates[d.id]),
      doneAt: s.done[d.id] || null,
    };
  });
}
// Active: soonest first, undated last. Archive: most recently finished first.
export function split(items) {
  const active = items
    .filter((d) => !d.doneAt)
    .sort((a, b) => (a.dueMs ?? Infinity) - (b.dueMs ?? Infinity));
  const archived = items.filter((d) => d.doneAt).sort((a, b) => b.doneAt - a.doneAt);
  return { active, archived };
}
export function useDeadlines() {
  const s = useSyncExternalStore(subscribe, () => state);
  return useMemo(() => split(resolve(s)), [s]);
}

// ---- the live clock ----
// One timer for the whole page, started when something is listening and stopped when nothing is.
let now = Date.now();
let timer = null;
const tickListeners = new Set();
function tick() {
  now = Date.now();
  tickListeners.forEach((l) => l());
}
function subscribeTick(l) {
  tickListeners.add(l);
  if (tickListeners.size === 1) {
    tick();
    timer = setInterval(tick, 1000);
    document.addEventListener('visibilitychange', tick);
  }
  return () => {
    tickListeners.delete(l);
    if (tickListeners.size === 0) {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', tick);
    }
  };
}
export function useNow() {
  return useSyncExternalStore(subscribeTick, () => now);
}

// Splits a number of milliseconds into whole days, hours, minutes and seconds.
export function splitDuration(ms) {
  const total = Math.floor(Math.abs(ms) / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    late: ms < 0,
  };
}

// How pressing it is: 'late', 'urgent' (under 3 hours), 'soon' (under a day), 'calm'.
export function urgency(ms) {
  if (ms < 0) return 'late';
  if (ms < 3 * 3600 * 1000) return 'urgent';
  if (ms < 24 * 3600 * 1000) return 'soon';
  return 'calm';
}

// A phrase for people who use a screen reader (it does not tick every second).
export function spoken(ms) {
  const { days, hours, minutes, late } = splitDuration(ms);
  const bits = [];
  if (days) bits.push(`${days} ${days === 1 ? 'day' : 'days'}`);
  if (hours) bits.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
  if (!days && minutes) bits.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
  if (bits.length === 0) bits.push('less than a minute');
  return late ? `Overdue by ${bits.join(' ')}` : `Due in ${bits.join(' ')}`;
}

// Date and time in the viewer's own time zone, with the zone named so there is no doubt.
export function formatDue(ms) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(new Date(ms));
}
export function formatDay(ms) {
  return new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }).format(new Date(ms));
}

// value for <input type="datetime-local"> (the viewer's local time)
export function toLocalInput(ms) {
  const d = new Date(ms);
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}
