// Daily quiz: the question catalog, the draw (different every day, courses mixed, missed ones return, bookmark focus),
// and the streak, shield and points rules.
import { courses } from '../../src/data/index.js';
import { buildCatalog, dateKey, dayNumber, pickQuestions, seeded, optionOrder, sameSet } from '../../src/lib/dailyPick.js';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getPrefs } from '../../src/companions/prefs.js';
import { REWARD_FRAMES } from '../../src/companions/assets.js';
import { RANKS, BADGES, flameFor, art, getDaily, startQuiz, answer, finishQuiz, buy, viewItem, streakNow, todayQuiz, POINTS, MILESTONES, SHOP } from '../../src/lib/daily.js';

export default function ({ eq, ok_ }) {
  const catalog = buildCatalog();
  const examCourses = courses.filter((c) => !c.noExam).map((c) => c.id);

  // ---- the catalog ----
  eq(new Set(catalog.map((i) => i.key)).size, catalog.length, 'daily: question keys are unique');
  for (const id of examCourses) ok_(catalog.some((i) => i.courseId === id), `daily: ${id} has questions in the pool`);
  ok_(!catalog.some((i) => courses.find((c) => c.id === i.courseId)?.noExam), 'daily: courses with no exam are left out');
  ok_(catalog.every((i) => i.options.length >= 2 && i.answers.length >= 1 && i.answers.every((a) => a >= 0 && a < i.options.length)), 'daily: every question has valid options and answers');
  ok_(catalog.every((i) => i.courseShort && i.topicTitle), 'daily: every question can be tagged with its course and topic');
  ok_(catalog.some((i) => i.multi), 'daily: choose-ALL questions are in the pool');
  // Questions must stand alone, the way an exam asks them: no "according to the lecture" or slide references.
  for (const i of catalog) {
    const text = `${i.q} ${i.options.join(' ')}`;
    ok_(!/\blectures?\b|\blecturer\b|\bslides?\b|\bthe course\b|\bin class\b/i.test(text), `daily: ${i.key} does not refer to a lecture or slide`);
    if (i.courseId !== 'techway') ok_(!/\bsessions?\b/i.test(text), `daily: ${i.key} does not refer to a session`);
  }

  // ---- the draw ----
  const byKey = new Map(catalog.map((i) => [i.key, i]));
  const simulate = (size, days, focusTopicIds = null) => {
    const rnd = seeded(`sim-${size}-${days}`);
    const seen = {};
    const out = [];
    for (let day = 1; day <= days; day++) {
      const r = pickQuestions({ catalog, size, seen, missed: {}, day, focusTopicIds, rnd });
      for (const k of r.keys) seen[k] = day;
      out.push(r.keys);
    }
    return out;
  };

  for (const size of [5, 10, 15]) {
    const quizzes = simulate(size, 12);
    for (const [n, keys] of quizzes.entries()) {
      eq(keys.length, size, `daily: day ${n + 1} (size ${size}) has ${size} questions`);
      eq(new Set(keys).size, size, `daily: day ${n + 1} (size ${size}) has no duplicates`);
    }
    // courses take turns
    const perCourse = (keys) => examCourses.map((c) => keys.filter((k) => byKey.get(k).courseId === c).length);
    for (const keys of quizzes) {
      const counts = perCourse(keys);
      ok_(Math.max(...counts) - Math.min(...counts) <= 1, `daily: size ${size} mixes the courses evenly (${counts.join('/')})`);
    }
    // nothing repeats while there are still unseen questions in every course
    const all = quizzes.flat();
    eq(new Set(all).size, all.length, `daily: no question repeats in 12 days of size ${size}`);
  }

  // Past the point where the smallest course runs out, a day still never repeats yesterday's questions.
  const long = simulate(10, 40);
  for (let i = 1; i < long.length; i++) {
    ok_(long[i].every((k) => !long[i - 1].includes(k)), `daily: day ${i + 1} shares nothing with day ${i} (40-day run)`);
  }
  ok_(new Set(long.map((q) => q.join('|'))).size === long.length, 'daily: no two days are the same quiz');

  // ---- missed questions return ----
  {
    const rnd = seeded('missed');
    const missed = {};
    const pickedMissed = catalog.slice(0, 4).map((i) => i.key);
    for (const k of pickedMissed) missed[k] = { day: 5 };
    const sameDay = pickQuestions({ catalog, size: 10, seen: {}, missed, day: 5, rnd });
    ok_(pickedMissed.every((k) => !sameDay.keys.includes(k)) || sameDay.reviewCount === 0, 'daily: a question missed today is not repeated the same day');
    const nextDay = pickQuestions({ catalog, size: 10, seen: {}, missed, day: 6, rnd });
    eq(nextDay.reviewCount, 3, 'daily: a size-10 quiz brings back up to 3 missed questions');
    eq(nextDay.reviewKeys.filter((k) => pickedMissed.includes(k)).length, 3, 'daily: the questions that come back are the missed ones');
    ok_(nextDay.reviewKeys.every((k) => nextDay.keys.includes(k)), 'daily: returning questions are in the quiz');
    eq(pickQuestions({ catalog, size: 5, seen: {}, missed, day: 6, rnd }).reviewCount, 1, 'daily: a size-5 quiz brings back 1 missed question');
  }

  // ---- bookmark focus ----
  {
    const topicId = catalog.find((i) => i.courseId === 'strategy').topicId;
    const inTopic = catalog.filter((i) => i.topicId === topicId).map((i) => i.key);
    const rnd = seeded('focus');
    const small = pickQuestions({ catalog, size: 5, focusTopicIds: [topicId], seen: {}, missed: {}, day: 1, rnd });
    ok_(small.keys.every((k) => inTopic.includes(k)) && small.toppedUp === 0, 'daily: focus on a bookmarked topic draws only from it');
    ok_(inTopic.length > 5, 'daily: the test topic has enough questions');
    const tiny = pickQuestions({ catalog, size: 15, focusTopicIds: [topicId], seen: {}, missed: {}, day: 1, rnd });
    eq(tiny.keys.length, 15, 'daily: a focus quiz is topped up to full size');
    ok_(tiny.keys.filter((k) => inTopic.includes(k)).length >= Math.min(15, inTopic.length), 'daily: bookmarked topics come first when topping up');
    // a topic with very few questions
    const rare = [...new Set(catalog.map((i) => i.topicId))].map((t) => [t, catalog.filter((i) => i.topicId === t).length]).sort((a, b) => a[1] - b[1])[0];
    const topped = pickQuestions({ catalog, size: 15, focusTopicIds: [rare[0]], seen: {}, missed: {}, day: 1, rnd: seeded('rare') });
    eq(topped.toppedUp, 15 - rare[1], 'daily: the shortfall is topped up from other topics');
  }

  // ---- options are shuffled per question ----
  {
    const rnd = seeded('order');
    for (const n of [3, 4, 5]) {
      const o = optionOrder(n, rnd);
      ok_(o.length === n && new Set(o).size === n && o.every((x) => x >= 0 && x < n), `daily: option order is a permutation of ${n}`);
    }
    ok_(sameSet([1, 0], [0, 1]) && !sameSet([0], [0, 1]), 'daily: answer sets compare by content, not order');
  }

  // ---- artwork: every picture the daily quiz points at exists ----
  const pub = (rel) => fileURLToPath(new URL(`../../public/${rel}`, import.meta.url));
  const has = (rel) => fs.existsSync(pub(rel)) && fs.statSync(pub(rel)).size > 1000;
  for (const r of RANKS) ok_(has(`daily/ranks/${r.id}.webp`), `daily art: rank emblem ${r.id}`);
  for (const b of BADGES) ok_(has(`daily/badges/${b.id}.webp`), `daily art: badge ${b.id}`);
  for (const n of ['ember', 'small', 'big', 'inferno']) ok_(has(`daily/flames/${n}.webp`), `daily art: flame ${n}`);
  for (const n of ['shield', 'shield-cracked', 'snack', 'mallet', 'hand']) ok_(has(`daily/items/${n}.webp`), `daily art: item ${n}`);
  for (const it of SHOP) {
    if (it.banner) ok_(has(`daily/banners/${it.banner}.webp`), `daily art: banner for ${it.id}`);
    for (const img of it.images || []) ok_(has(`daily/${img}.webp`), `daily art: ${it.id} piece ${img}`);
  }
  for (const [who, names] of Object.entries(REWARD_FRAMES)) for (const n of names) ok_(has(`companions/${who}/rewards/${n}.webp`), `reward frame: ${who} ${n}`);
  eq([0, 1, 2, 3, 6, 7, 13, 14, 40].map((n) => flameFor(n).id).join(','), 'ember,ember,ember,small,small,big,big,inferno,inferno', 'daily art: the flame grows with the streak');
  ok_(!flameFor(0).lit && flameFor(1).lit, 'daily art: a zero streak shows a cold flame');

  // ---- streaks, shields, points (a pretend calendar in November 2026) ----
  const at = (d) => new Date(`2026-11-${String(d).padStart(2, '0')}T12:00:00`);
  const play = (d, { allRight = true, size = 5, mode = 'daily' } = {}) => {
    const now = at(d);
    startQuiz({ size, mode, now });
    const t = todayQuiz(getDaily(), now);
    t.items.forEach((it, i) => {
      const q = viewItem(it);
      const wrongOnes = q.options.map((o) => o.orig).filter((o) => !q.answers.includes(o));
      answer(i, allRight ? q.answers : [wrongOnes[0]], now);
    });
    return finishQuiz(now);
  };

  ok_(dayNumber('2026-11-02') + 1 === dayNumber('2026-11-03'), 'daily: day numbers step by one');
  eq(dateKey(at(9)), '2026-11-09', 'daily: date keys use the local calendar day');
  eq(streakNow(getDaily(), at(9)).status, 'broken', 'daily: no streak before the first quiz');

  const d1 = play(9, { allRight: false });
  eq(d1.streak, 1, 'daily: first quiz starts a streak even with every answer wrong');
  eq(d1.correct, 0, 'daily: the all-wrong quiz scored zero');
  eq(getDaily().points, POINTS.complete, 'daily: finishing earns the completion points even with every answer wrong');
  eq(streakNow(getDaily(), at(9)).status, 'safe', 'daily: streak is safe on the day it was done');
  eq(streakNow(getDaily(), at(10)).status, 'open', 'daily: streak is open the next day');
  ok_(Object.keys(getDaily().missed).length === 5, 'daily: wrong answers are remembered to come back');

  eq(getPrefs().rewards.pats, 1, 'daily rewards: finishing a daily quiz earns a head pat');
  eq(getPrefs().rewards.snacks, 0, 'daily rewards: no snack below 80%');
  eq(getPrefs().rewards.hammers, 0, 'daily rewards: no hammer without a perfect score or milestone');
  const before = getDaily().points;
  const d2 = play(10);
  eq(d2.streak, 2, 'daily: the next day adds to the streak');
  eq(getDaily().points - before, 5 * POINTS.correct + POINTS.complete, 'daily: points are per correct answer plus completion');
  ok_(d2.correct === 5, 'daily: all answers right');
  ok_(d1.badges.includes('first') && d1.badges.includes('everyCourse'), 'daily: first-quiz and full-squad badges');
  ok_(d2.badges.includes('sweep'), 'daily: clean-sheet badge');

  eq(getPrefs().rewards.pats, 2, 'daily rewards: a second head pat');
  eq(getPrefs().rewards.snacks, 1, 'daily rewards: 80% or better earns a snack');
  eq(getPrefs().rewards.hammers, 1, 'daily rewards: a perfect score earns a hammer');
  const bonusBefore = getDaily().points;
  const b = play(10, { mode: 'bonus' });
  eq(getDaily().streak, 2, 'daily: a bonus set does not change the streak');
  eq(getDaily().points - bonusBefore, 5 * POINTS.bonusCorrect, 'daily: a bonus set earns reduced points and no completion bonus');
  ok_(b.correct === 5, 'daily: bonus set scored');
  eq(getPrefs().rewards.pats, 2, 'daily rewards: a bonus set earns no rewards');

  const d3 = play(11);
  eq(d3.streak, 3, 'daily: three days in a row');
  eq(d3.milestones.length, 1, 'daily: the 3-day milestone pays out');
  eq(d3.milestones[0].points, MILESTONES[0].points, 'daily: milestone amount');
  ok_(d3.badges.includes('streak3'), 'daily: hat-trick badge');
  eq(getPrefs().rewards.hammers, 2, 'daily rewards: a perfect score on a milestone day');
  const again = finishQuiz(at(11));
  eq(again.streak, 3, 'daily: finishing twice does not double count');

  // skip the 12th: streak breaks without a shield
  eq(streakNow(getDaily(), at(13)).status, 'broken', 'daily: missing a day with no shield breaks the streak');
  const d5 = play(13);
  eq(d5.streak, 1, 'daily: a new streak starts at 1');
  eq(getDaily().best, 3, 'daily: the best streak is kept');

  // shields
  const shield = SHOP.find((s) => s.kind === 'shield');
  ok_(getDaily().points >= shield.cost, 'daily: enough points to buy a shield in this test');
  ok_(buy('shield') && getDaily().shields === 1, 'daily: buying a shield');
  eq(streakNow(getDaily(), at(15)).status, 'shield', 'daily: a shield covers one missed day');
  const d7 = play(15);
  eq(d7.streak, 2, 'daily: the shield keeps the streak going over the missed day');
  ok_(d7.shieldSaved && getDaily().shields === 0, 'daily: the shield is used up');
  // two missed days: shield cannot help
  buy('shield');
  eq(streakNow(getDaily(), at(18)).status, 'broken', 'daily: two missed days break the streak even with a shield');
  const pointsBeforePat = getDaily().points;
  const patsBefore = getPrefs().rewards.pats;
  ok_(buy('reward-pat') && getPrefs().rewards.pats === patsBefore + 1, 'daily rewards: a head pat can be bought with points');
  eq(pointsBeforePat - getDaily().points, SHOP.find((x) => x.id === 'reward-pat').cost, 'daily rewards: and costs its price');
  ok_(!buy('theme-gold') || getDaily().owned['theme-gold'], 'daily: buying a theme unlocks it');
  ok_(getDaily().points >= 0, 'daily: points never go negative');
}
