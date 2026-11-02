import { useSyncExternalStore } from 'react';

// Progress lives only in the student's own browser (localStorage).
// No accounts, no server. Clearing site data resets it.
const KEY = 'sbsg:progress:v1';
const EMPTY = { done: {}, quiz: {}, known: {} };

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw);
    return {
      done: parsed.done || {},
      quiz: parsed.quiz || {},
      known: parsed.known || {},
    };
  } catch {
    return { ...EMPTY };
  }
}

let state = load();
const listeners = new Set();

function commit(next) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage can be blocked (private mode). The app still works for the session.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useProgress() {
  return useSyncExternalStore(subscribe, () => state);
}

export function toggleDone(topicId) {
  const done = { ...state.done };
  if (done[topicId]) delete done[topicId];
  else done[topicId] = true;
  commit({ ...state, done });
}

export function recordQuiz(topicId, correct, total) {
  const prev = state.quiz[topicId];
  const best = prev ? Math.max(prev.best, correct) : correct;
  commit({ ...state, quiz: { ...state.quiz, [topicId]: { best, total, last: correct } } });
}

export function setKnown(cardId, isKnown) {
  const known = { ...state.known };
  if (isKnown) known[cardId] = true;
  else delete known[cardId];
  commit({ ...state, known });
}

export function resetProgress() {
  commit({ ...EMPTY });
}
