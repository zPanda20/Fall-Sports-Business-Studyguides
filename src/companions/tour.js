import { useSyncExternalStore } from 'react';
import { courses, topicsForCourse } from '../data/index.js';
import { say, closePanel, cancelAll } from './manager.js';
import { line } from './dialogue.js';
import { setPref } from './prefs.js';

// The guided tour. Steps are data: where to go, which element to light up (found through a stable
// data-tutorial attribute, never a CSS class), what Seraph says and which pose he uses.
// A step whose element is not on the page is skipped, so the tour never gets stuck.

const firstCourse = () => courses.find((c) => topicsForCourse(c.id).length > 0);
const firstTopic = () => {
  const c = firstCourse();
  return c ? topicsForCourse(c.id).find((t) => t.questions?.length) || topicsForCourse(c.id)[0] : null;
};

export const STEPS = [
  {
    id: 'courses',
    route: '/',
    target: 'courses',
    pose: 'greeting',
    title: 'Your courses',
    text: 'This is home. Each card is a course, with a ring that shows how many topics you have finished. Pick one to start.',
  },
  {
    id: 'search',
    route: '/',
    target: 'nav-search',
    pose: 'pointing',
    title: 'Search',
    text: 'Looking for a term, a formula or a topic? Search looks through every course at once.',
  },
  {
    id: 'due',
    route: '/',
    target: 'nav-due',
    pose: 'pointing',
    title: 'Due dates',
    text: 'All your assignment dates with live countdowns. Tick one when you have handed it in. You can switch the timers off there.',
  },
  {
    id: 'bookmarks',
    route: '/',
    target: 'nav-bookmarks',
    pose: 'bookmark',
    title: 'Bookmarks',
    text: 'Bookmark a whole topic or a single slide, add a note, and come back to it here.',
  },
  {
    id: 'course',
    route: () => (firstCourse() ? `/course/${firstCourse().id}` : null),
    target: 'study-actions',
    pose: 'flashcards',
    title: 'Flashcards, quick tests and exam practice',
    text: 'Every course has flashcards for revision, a quick test of 5, 10 or 15 random questions, and exam-style questions.',
  },
  {
    id: 'topic',
    route: () => (firstTopic() ? `/topic/${firstTopic().id}` : null),
    target: 'slides',
    pose: 'pointing',
    title: 'Study slides',
    text: 'Each topic is a short slide deck. Use the arrows, swipe, or the arrow keys. The "Read this slide" button reads it aloud.',
  },
  {
    id: 'sections',
    route: () => (firstTopic() ? `/topic/${firstTopic().id}` : null),
    target: 'topic-sections',
    pose: 'scholar',
    title: 'Sections and practice',
    text: 'Switch between plain words, a real example, a sports example, practice questions and videos. A wrong answer offers "Review this section" and a ready-made question for an AI.',
  },
  {
    id: 'companions',
    route: '/',
    target: 'nav-companions',
    pose: 'pointing',
    title: 'Companion settings',
    text: 'Switch me off, turn the animations down, or invite my grumpy friend here. You can restart this tour from the same page.',
  },
  {
    id: 'done',
    route: null,
    target: null,
    pose: 'celebration',
    title: 'All done',
    text: null, // uses the line "tourEnd"
  },
];

// ---- state ----
let state = { active: false, i: 0, rect: null };
const listeners = new Set();
const set = (p) => {
  state = { ...state, ...p };
  listeners.forEach((l) => l());
};
export const useTour = () => useSyncExternalStore((l) => (listeners.add(l), () => listeners.delete(l)), () => state);
export const tourActive = () => state.active;

let navigate = null;
let currentPath = () => (window.location.hash.replace(/^#/, '') || '/').split('?')[0];
export const setNavigator = (fn) => {
  navigate = fn;
};

// The element for a step: the first one with that data-tutorial value that is actually on screen.
export function findTarget(name) {
  if (!name) return null;
  const all = [...document.querySelectorAll(`[data-tutorial="${name}"]`)];
  return all.find((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }) || null;
}

let run = 0; // bumps whenever the tour moves, so late timers do nothing

async function waitFor(name, token, ms = 2200) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    if (token !== run) return null;
    const el = findTarget(name);
    if (el) return el;
    await new Promise((r) => setTimeout(r, 60));
  }
  return null;
}

export async function tourGo(i, dir = 1) {
  const token = ++run;
  let n = i;
  while (n >= 0 && n < STEPS.length) {
    const step = STEPS[n];
    const route = typeof step.route === 'function' ? step.route() : step.route;
    if (step.target && route === null) {
      n += dir;
      continue;
    }
    if (route && currentPath() !== route && navigate) {
      navigate(route);
      await new Promise((r) => setTimeout(r, 120));
    }
    let el = null;
    if (step.target) {
      el = await waitFor(step.target, token);
      if (token !== run) return;
      if (!el) {
        n += dir; // missing target: skip it
        continue;
      }
      const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ block: 'center', behavior: calm ? 'auto' : 'smooth' });
      await new Promise((r) => setTimeout(r, calm ? 60 : 380));
      if (token !== run) return;
    }
    show(n, el);
    return;
  }
  // ran off either end of the list: finish
  if (n >= STEPS.length) tourFinish();
  else if (n < 0) tourGo(0, 1);
}

function show(n, el) {
  const step = STEPS[n];
  const last = n === STEPS.length - 1;
  const actions = [];
  if (n > 0) actions.push({ label: 'Back', keep: true, fn: () => tourGo(n - 1, -1) });
  actions.push({ label: last ? 'Finish' : 'Next', primary: true, keep: true, fn: () => (last ? tourFinish() : tourGo(n + 1, 1)) });
  if (!last) actions.push({ label: 'Skip tour', keep: true, fn: () => tourStop() });
  set({ active: true, i: n, rect: el ? true : null });
  say(
    'seraph',
    { text: step.text || line('seraph', 'tourEnd'), heading: step.title, actions, progress: { i: n, n: STEPS.length }, tour: true },
    { priority: 6, auto: false, reaction: step.pose === 'celebration' ? 'celebrate' : step.pose === 'pointing' ? 'point' : step.pose === 'flashcards' ? 'flashcards' : step.pose === 'bookmark' ? 'bookmark' : step.pose === 'scholar' ? 'think' : 'greet' },
  );
}

export function tourStart() {
  run++;
  tourGo(0, 1);
}
export function tourStop() {
  run++;
  set({ active: false, rect: null });
  closePanel();
}
function tourFinish() {
  setPref('tourDone', true);
  run++;
  set({ active: false, rect: null });
  // the final step has already been shown by show(); closing is up to the person
  closePanel();
}

export function tourReset() {
  setPref('tourDone', false);
  setPref('tourDismissed', false);
}

// when other code cancels everything (page change) the tour must not leave a spotlight behind
export function tourAbort() {
  if (!state.active) return;
  run++;
  set({ active: false, rect: null });
  cancelAll();
}
