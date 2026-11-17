// Daily quiz: choosing the questions. Pure functions only (no browser APIs), so the checks can run them in Node.
//
// The rules:
//  - Questions come from every course that has an exam, one pool each, mixed together.
//  - Courses take turns, so a quiz of 5 has one question from each of five courses, 10 has two each, and so on.
//  - Within a course, the questions you have never seen come first. Then the ones you saw longest ago.
//    That is what makes every daily quiz different from the last, until you have seen every question.
//  - About a third of a quiz brings back questions you got wrong on an earlier day (spaced repetition).
//  - "Focus on my bookmarks" limits the pool to topics you bookmarked, and tops up from the rest if there are too few.
import { courses, topics } from '../data/index.js';

export const SIZES = [5, 10, 15];

// ---- days ----
const pad = (n) => String(n).padStart(2, '0');
export const dateKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
// Whole days since 1970 for a local date key, so "yesterday" is always exactly one less (daylight saving safe).
export const dayNumber = (key) => {
  const [y, m, d] = key.split('-').map(Number);
  return Math.round(Date.UTC(y, m - 1, d) / 86400000);
};
export const keyFromDayNumber = (n) => new Date(n * 86400000).toISOString().slice(0, 10);

// ---- random ----
export function seeded(seed) {
  let s = 0;
  for (const ch of String(seed)) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
export function shuffled(list, rnd = Math.random) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- the catalog: every question that can appear, in one shape ----
// { key, courseId, courseShort, topicId, topicTitle, q, options[], answers[], multi, explanation, review }
let cached = null;
export function buildCatalog() {
  if (cached) return cached;
  const items = [];
  for (const c of courses.filter((x) => !x.noExam)) {
    const ts = topics.filter((t) => t.course === c.id);
    const titleOf = Object.fromEntries(ts.map((t) => [t.id, t.title]));
    for (const t of ts) {
      for (const q of t.questions || []) {
        if (q.type !== 'mcq' || !Array.isArray(q.options) || q.options.length < 2) continue;
        items.push({
          key: `${t.id}:${q.id}`, courseId: c.id, courseShort: c.short, topicId: t.id, topicTitle: t.title,
          q: q.q, options: q.options, answers: [q.answer], multi: false, explanation: q.explanation, review: q.review,
        });
      }
    }
    // Exam-style bank (Business Strategy): single answer and "choose ALL correct answers" questions.
    for (const b of c.examBank || []) {
      if (!Array.isArray(b.options) || !Array.isArray(b.answers) || !titleOf[b.topic]) continue;
      items.push({
        key: `bank:${b.id}`, courseId: c.id, courseShort: c.short, topicId: b.topic, topicTitle: titleOf[b.topic],
        q: b.q, options: b.options, answers: b.answers, multi: b.answers.length > 1, explanation: b.explanation, review: b.review,
      });
    }
  }
  cached = items;
  return items;
}

// ---- the draw ----
// seen:   { key: dayNumber }  when each question was last used (missing = never)
// missed: { key: { day } }    questions answered wrongly and not yet answered right since
// Returns { keys, reviewCount, reviewKeys, toppedUp } where toppedUp is how many questions came from outside the focus topics.
export function pickQuestions({ catalog = buildCatalog(), size, focusTopicIds = null, seen = {}, missed = {}, day, rnd = Math.random }) {
  const focused = focusTopicIds && focusTopicIds.length ? catalog.filter((i) => focusTopicIds.includes(i.topicId)) : null;
  const take = (pool, n, exclude) => {
    const chosen = [];
    // 1. Questions to revisit: missed on an earlier day, oldest first.
    const due = pool
      .filter((i) => !exclude.has(i.key) && missed[i.key] && missed[i.key].day < day)
      .sort((a, b) => missed[a.key].day - missed[b.key].day || rnd() - 0.5);
    const reviewQuota = Math.min(due.length, Math.floor(n / 3));
    for (const i of due.slice(0, reviewQuota)) chosen.push(i);
    const used = new Set([...exclude, ...chosen.map((i) => i.key)]);
    // 2. The rest: courses take turns; within a course the least recently seen questions come first.
    const queues = new Map();
    for (const i of pool) {
      if (used.has(i.key)) continue;
      if (!queues.has(i.courseId)) queues.set(i.courseId, []);
      queues.get(i.courseId).push(i);
    }
    for (const [id, list] of queues) {
      const tiebreak = new Map(list.map((i) => [i.key, rnd()]));
      queues.set(id, list.sort((a, b) => (seen[a.key] ?? -1) - (seen[b.key] ?? -1) || tiebreak.get(a.key) - tiebreak.get(b.key)));
    }
    // Courses take turns: always give the next place to the course with the fewest questions so far
    // (questions brought back for review count towards their course).
    const order = shuffled([...queues.keys(), ...chosen.map((i) => i.courseId)].filter((v, k, a) => a.indexOf(v) === k), rnd);
    const count = (id) => chosen.filter((i) => i.courseId === id).length;
    while (chosen.length < n) {
      const open = order.filter((id) => queues.get(id)?.length);
      if (!open.length) break;
      const id = open.reduce((best, c) => (count(c) < count(best) ? c : best), open[0]);
      chosen.push(queues.get(id).shift());
    }
    return { chosen, reviewCount: reviewQuota, reviewKeys: due.slice(0, reviewQuota).map((i) => i.key) };
  };

  if (!focused) {
    const { chosen, reviewCount, reviewKeys } = take(catalog, size, new Set());
    return { keys: shuffled(chosen.map((i) => i.key), rnd), reviewCount, reviewKeys, toppedUp: 0 };
  }
  const first = take(focused, size, new Set());
  let chosen = first.chosen;
  let toppedUp = 0;
  if (chosen.length < size) {
    const rest = take(catalog, size - chosen.length, new Set(chosen.map((i) => i.key)));
    toppedUp = rest.chosen.length;
    chosen = [...chosen, ...rest.chosen];
  }
  return { keys: shuffled(chosen.map((i) => i.key), rnd), reviewCount: first.reviewCount, reviewKeys: first.reviewKeys, toppedUp };
}

// A random display order for one question's options (positions of the original options).
export const optionOrder = (n, rnd = Math.random) => shuffled(Array.from({ length: n }, (_, i) => i), rnd);

export const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
