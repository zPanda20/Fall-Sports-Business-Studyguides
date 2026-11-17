import { useSyncExternalStore } from 'react';
import { emit } from '../companions/events.js';
import { publicUrl } from '../companions/assets.js';
import { addReward } from '../companions/rewards.js';
import { buildCatalog, dateKey, dayNumber, optionOrder, pickQuestions, sameSet } from './dailyPick.js';

// Daily quiz state: today's quiz, streak, points, unlocks. Stored only in this browser, like progress.
const KEY = 'sbsg:daily:v1';

// Artwork lives in public/daily/<folder>/<name>.webp (made by scripts/prepare-daily-art.py).
export const art = (folder, name) => publicUrl(`daily/${folder}/${name}.webp`);
// The streak flame grows with the streak. Zero shows a cold, dimmed ember.
export function flameFor(count) {
  const id = count >= 14 ? 'inferno' : count >= 7 ? 'big' : count >= 3 ? 'small' : 'ember';
  return { id, lit: count > 0, src: art('flames', id) };
}

export const POINTS = { correct: 10, bonusCorrect: 5, complete: 20 };
export const MILESTONES = [
  { days: 3, points: 30 },
  { days: 7, points: 60 },
  { days: 14, points: 120 },
  { days: 30, points: 250 },
  { days: 60, points: 500 },
  { days: 100, points: 1000 },
];
export const RANKS = [
  { at: 0, id: 'rookie', name: 'Rookie' },
  { at: 100, id: 'reserve', name: 'Reserve' },
  { at: 300, id: 'starter', name: 'Starter' },
  { at: 700, id: 'captain', name: 'Captain' },
  { at: 1500, id: 'allstar', name: 'All-Star' },
  { at: 3000, id: 'hall', name: 'Hall of Famer' },
];
export const rankFor = (lifetime) => [...RANKS].reverse().find((r) => lifetime >= r.at) || RANKS[0];
export const nextRank = (lifetime) => RANKS.find((r) => r.at > lifetime) || null;

// The unlock shelf. Add an item here and it shows up. `kind` decides where it applies.
export const SHOP = [
  { id: 'theme-classic', kind: 'theme', name: 'Classic', cost: 0, blurb: 'The usual study-guide colors.' },
  { id: 'theme-sunset', kind: 'theme', name: 'Sunset', cost: 60, blurb: 'A candy-pastel sky behind your daily quiz.', banner: 'sunset' },
  { id: 'theme-midnight', kind: 'theme', name: 'Midnight', cost: 100, blurb: 'Glassy cosmic waves in deep violet.', banner: 'midnight' },
  { id: 'theme-gold', kind: 'theme', name: 'Gold', cost: 200, blurb: 'A golden celebration. Earned, not given.', banner: 'gold' },
  { id: 'burst-confetti', kind: 'burst', name: 'Confetti', cost: 0, blurb: 'The classic finish.', glyphs: ['🎉', '✨', '🎊'] },
  { id: 'burst-balls', kind: 'burst', name: 'Ball game', cost: 80, blurb: 'Footballs, basketballs, tennis balls and more rain down.', images: ['balls/football', 'balls/basketball', 'balls/tennis', 'balls/volleyball', 'balls/rugby'] },
  { id: 'burst-racing', kind: 'burst', name: 'Pit lane', cost: 120, blurb: 'Checkered flags and race cars.', glyphs: ['🏁', '🏎️', '🏆'] },
  { id: 'burst-trophies', kind: 'burst', name: 'Medal shower', cost: 150, blurb: 'Crests and medals rain down.', images: ['ranks/allstar', 'ranks/hall', 'ranks/captain', 'badges/streak30', 'badges/sweep'] },
  { id: 'shield', kind: 'shield', name: 'Streak shield', cost: 120, blurb: 'Saves your streak if you miss one day. Holds up to 2.', consumable: true },
  { id: 'reward-pat', kind: 'reward', reward: 'pats', name: 'Head pat', cost: 15, blurb: 'One head pat to give Seraph or Demon.', consumable: true },
  { id: 'reward-snack', kind: 'reward', reward: 'snacks', name: 'Snack for Seraph', cost: 25, blurb: 'A golden fish cracker for Seraph.', consumable: true },
  { id: 'reward-hammer', kind: 'reward', reward: 'hammers', name: 'Hammer for Demon', cost: 25, blurb: 'One swing at Demon. He had it coming.', consumable: true },
];
export const MAX_SHIELDS = 2;

export const BADGES = [
  { id: 'first', name: 'First whistle', blurb: 'Finish your first daily quiz.' },
  { id: 'week', name: 'Seven days in', blurb: 'Finish 7 daily quizzes in total.' },
  { id: 'streak3', name: 'Hat trick', blurb: 'A 3-day streak.' },
  { id: 'streak7', name: 'Full week', blurb: 'A 7-day streak.' },
  { id: 'streak14', name: 'Two weeks strong', blurb: 'A 14-day streak.' },
  { id: 'streak30', name: 'Ever-present', blurb: 'A 30-day streak.' },
  { id: 'sweep', name: 'Clean sheet', blurb: 'Every answer right in a daily quiz.' },
  { id: 'everyCourse', name: 'Full squad', blurb: 'A daily quiz with a question from every course.' },
  { id: 'comeback', name: 'Comeback kid', blurb: 'Get 5 questions right that you missed before.' },
  { id: 'bookmarks', name: 'Know your weak spots', blurb: 'Finish a quiz focused on your bookmarks.' },
  { id: 'long', name: 'Full 15', blurb: 'Finish a 15-question quiz.' },
];

const EMPTY = {
  days: {}, // 'YYYY-MM-DD' -> { correct, total, size }
  streak: 0, best: 0, lastDay: null, // lastDay is a day number
  points: 0, lifetime: 0,
  seen: {}, missed: {}, redeemed: 0,
  today: null,
  shields: 0, shieldsUsed: [],
  owned: { 'theme-classic': true, 'burst-confetti': true },
  theme: 'theme-classic', burst: 'burst-confetti',
  milestones: {}, badges: {},
  lastSize: 10, lastFocus: false,
};

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const p = JSON.parse(raw);
    const s = { ...EMPTY, ...p };
    for (const k of ['days', 'seen', 'missed', 'owned', 'milestones', 'badges']) if (!s[k] || typeof s[k] !== 'object') s[k] = EMPTY[k];
    s.owned = { ...EMPTY.owned, ...s.owned };
    if (!Array.isArray(s.shieldsUsed)) s.shieldsUsed = [];
    return s;
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
    // Storage can be blocked (private mode). The quiz still works for this visit.
  }
  listeners.forEach((l) => l());
}
const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
export const getDaily = () => state;
export const useDaily = () => useSyncExternalStore(subscribe, () => state);

// ---- read helpers ----
const catalogByKey = () => new Map(buildCatalog().map((i) => [i.key, i]));

// Today's quiz if one was started today, else null (an old unfinished one is simply dropped).
export function todayQuiz(s = state, now = new Date()) {
  return s.today && s.today.date === dateKey(now) ? s.today : null;
}
export const dailyDoneToday = (s = state, now = new Date()) => Boolean(s.days[dateKey(now)]);

// The streak as it should be shown right now.
// 'safe' = done today, 'open' = you have until the end of today, 'shield' = a missed day will be covered, 'broken' = back to zero.
export function streakNow(s = state, now = new Date()) {
  const t = dayNumber(dateKey(now));
  if (s.lastDay === t) return { count: s.streak, status: 'safe' };
  if (s.lastDay === t - 1) return { count: s.streak, status: 'open' };
  if (s.lastDay === t - 2 && s.shields > 0) return { count: s.streak, status: 'shield' };
  return { count: 0, status: 'broken' };
}

// The last 7 days, oldest first, for the little week strip.
export function weekStrip(s = state, now = new Date()) {
  const t = dayNumber(dateKey(now));
  return Array.from({ length: 7 }, (_, i) => {
    const n = t - 6 + i;
    const key = new Date(n * 86400000).toISOString().slice(0, 10);
    return { key, done: Boolean(s.days[key]), today: n === t, shielded: s.shieldsUsed.includes(key) };
  });
}

// What a quiz item looks like on screen: the question with its options in this quiz's order.
export function viewItem(item) {
  const q = catalogByKey().get(item.key);
  if (!q) return null;
  return { ...q, options: item.order.map((o) => ({ text: q.options[o], orig: o })) };
}

// ---- actions ----
// Start a quiz. mode 'daily' counts for the streak; 'bonus' (only after the daily one) just earns points per answer.
export function startQuiz({ size, focusTopicIds, mode = 'daily', now = new Date() }) {
  const date = dateKey(now);
  const day = dayNumber(date);
  const focus = Boolean(focusTopicIds && focusTopicIds.length);
  const catalog = buildCatalog();
  const picked = pickQuestions({ catalog, size, focusTopicIds: focus ? focusTopicIds : null, seen: state.seen, missed: state.missed, day });
  const byKey = new Map(catalog.map((i) => [i.key, i]));
  const items = picked.keys.map((key) => ({ key, order: optionOrder(byKey.get(key).options.length) }));
  const seen = { ...state.seen };
  for (const k of picked.keys) seen[k] = day;
  commit({
    ...state,
    seen,
    lastSize: size,
    lastFocus: focus,
    today: {
      date, mode, size: items.length, focus, toppedUp: picked.toppedUp, reviewKeys: picked.reviewKeys,
      items, answers: {}, results: {}, finished: false, earned: 0, summary: null,
    },
  });
}

// Record an answer. picks = the original option numbers the student chose.
export function answer(index, picks, now = new Date()) {
  const t = todayQuiz(state, now);
  if (!t || t.finished || t.results[index] !== undefined) return;
  const item = t.items[index];
  const q = catalogByKey().get(item.key);
  if (!q) return;
  const ok = sameSet(picks, q.answers);
  const day = dayNumber(t.date);
  const missed = { ...state.missed };
  let redeemed = state.redeemed;
  if (ok) {
    if (missed[item.key]) {
      delete missed[item.key];
      redeemed += 1;
    }
  } else {
    missed[item.key] = { day };
  }
  const gain = ok ? (t.mode === 'daily' ? POINTS.correct : POINTS.bonusCorrect) : 0;
  commit({
    ...state,
    missed,
    redeemed,
    points: state.points + gain,
    lifetime: state.lifetime + gain,
    today: { ...t, answers: { ...t.answers, [index]: picks }, results: { ...t.results, [index]: ok }, earned: t.earned + gain },
  });
  emit('study:quiz-answer', { source: 'daily', courseId: q.courseId, topicId: q.topicId, correct: ok, explanation: q.explanation ? String(q.explanation).replace(/\*\*/g, '') : null });
}

// Finish the quiz: completion points, streak, milestones and badges. Returns the summary (also saved on today).
export function finishQuiz(now = new Date()) {
  const t = todayQuiz(state, now);
  if (!t || t.finished) return t?.summary || null;
  const total = t.items.length;
  const correct = Object.values(t.results).filter(Boolean).length;
  const daily = t.mode === 'daily';
  const day = dayNumber(t.date);
  const catalog = catalogByKey();
  const coursesIn = new Set(t.items.map((i) => catalog.get(i.key)?.courseId));
  const allCourses = new Set(buildCatalog().map((i) => i.courseId));

  let { streak, best, lastDay, shields } = state;
  let shieldsUsed = state.shieldsUsed;
  let shieldSaved = false;
  let bonus = 0;
  const milestonesHit = [];
  const milestones = { ...state.milestones };
  const badges = { ...state.badges };
  const newBadges = [];
  const award = (id) => {
    if (!badges[id]) {
      badges[id] = t.date;
      newBadges.push(id);
    }
  };
  const days = { ...state.days };

  if (daily) {
    bonus += POINTS.complete;
    if (lastDay === day) {
      // already counted (cannot normally happen)
    } else if (lastDay === day - 1) streak += 1;
    else if (lastDay === day - 2 && shields > 0) {
      streak += 1;
      shields -= 1;
      shieldSaved = true;
      shieldsUsed = [...shieldsUsed, new Date((day - 1) * 86400000).toISOString().slice(0, 10)];
    } else streak = 1;
    lastDay = day;
    best = Math.max(best, streak);
    days[t.date] = { correct, total, size: total };
    for (const m of MILESTONES) {
      if (streak >= m.days && !milestones[m.days]) {
        milestones[m.days] = t.date;
        bonus += m.points;
        milestonesHit.push(m);
        if ([3, 7, 14, 30].includes(m.days)) award(`streak${m.days}`);
      }
    }
    award('first');
    if (Object.keys(days).length >= 7) award('week');
    if (total >= 5 && correct === total) award('sweep');
    if ([...allCourses].every((c) => coursesIn.has(c)) && total >= allCourses.size) award('everyCourse');
    if (t.focus) award('bookmarks');
    if (total >= 15) award('long');
  }
  if (state.redeemed >= 5) award('comeback');

  const byCourse = {};
  t.items.forEach((it, i) => {
    const q = catalog.get(it.key);
    if (!q) return;
    const row = (byCourse[q.courseId] ||= { short: q.courseShort, correct: 0, total: 0 });
    row.total += 1;
    if (t.results[i]) row.correct += 1;
  });
  // Finishing a daily quiz earns something to play with: a head pat always, a snack for 80% or better,
  // and a hammer swing for a perfect score or a streak milestone.
  const rewards = { pats: 0, snacks: 0, hammers: 0 };
  if (daily) {
    rewards.pats = 1;
    if (total > 0 && correct / total >= 0.8) rewards.snacks = 1;
    if ((total >= 5 && correct === total) || milestonesHit.length) rewards.hammers = 1;
  }
  const summary = { correct, total, bonus, earned: t.earned + bonus, streak, shieldSaved, milestones: milestonesHit, badges: newBadges, byCourse, rewards };
  commit({
    ...state,
    streak, best, lastDay, shields, shieldsUsed, days, milestones, badges,
    points: state.points + bonus,
    lifetime: state.lifetime + bonus,
    today: { ...t, finished: true, summary },
  });
  for (const [kind, n] of Object.entries(rewards)) if (n) addReward(kind, n);
  emit('study:quiz-complete', { source: 'daily', courseId: null, topicId: null, correct, total, prev: null });
  return summary;
}

export function buy(id) {
  const item = SHOP.find((s) => s.id === id);
  if (!item || state.points < item.cost) return false;
  if (item.kind === 'reward') {
    commit({ ...state, points: state.points - item.cost });
    addReward(item.reward, 1);
    return true;
  }
  if (item.consumable) {
    if (state.shields >= MAX_SHIELDS) return false;
    commit({ ...state, points: state.points - item.cost, shields: state.shields + 1 });
    return true;
  }
  if (state.owned[id]) return false;
  commit({ ...state, points: state.points - item.cost, owned: { ...state.owned, [id]: true } });
  return true;
}

export function equip(id) {
  const item = SHOP.find((s) => s.id === id);
  if (!item || !state.owned[id] || !['theme', 'burst'].includes(item.kind)) return;
  commit({ ...state, [item.kind]: id });
}
