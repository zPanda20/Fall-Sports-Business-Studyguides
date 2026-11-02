// Run with: npm run verify
// Checks the Ironhawks numbers against values worked out by hand, and checks
// that every quiz question is well formed. Fails loudly if anything is off.
import assert from 'node:assert/strict';
import {
  ironhawks as m,
  contributionMargin,
  contributionMarginRatio,
  unitsForProfit,
  profitAt,
  revenueAt,
  seasonCapacity,
  marginOfSafety,
} from '../src/lib/cvp.js';
import { topics, courses, allUnits } from '../src/data/index.js';

let checks = 0;
const eq = (actual, expected, label) => {
  assert.equal(actual, expected, `${label}: expected ${expected}, got ${actual}`);
  checks++;
};
const near = (actual, expected, label, tol = 1e-9) => {
  assert.ok(Math.abs(actual - expected) < tol, `${label}: expected ${expected}, got ${actual}`);
  checks++;
};

// ---- Ironhawks, worked by hand ----
// price 90, variable 30, fixed 24,000,000, 41 games x 18,000 seats
eq(contributionMargin(m), 60, 'contribution margin');
near(contributionMarginRatio(m), 2 / 3, 'CM ratio');
eq(unitsForProfit(m), 400_000, 'break-even tickets'); // 24,000,000 / 60
eq(revenueAt(m, 400_000), 36_000_000, 'break-even revenue'); // 400,000 x 90
near(24_000_000 / (2 / 3), 36_000_000, 'break-even revenue via CM ratio', 1e-6);
eq(seasonCapacity(m), 738_000, 'season capacity'); // 41 x 18,000
eq(Math.ceil(400_000 / 41), 9_757, 'break-even per game'); // 9,756.1 rounded up
near(400_000 / 738_000, 0.5420054, 'share of seats', 1e-6);
eq(unitsForProfit(m, 6_000_000), 500_000, 'tickets for $6M profit'); // 30,000,000 / 60
eq(profitAt(m, 600_000), 12_000_000, 'profit at 600,000'); // 36,000,000 - 24,000,000
eq(marginOfSafety(m, 600_000).units, 200_000, 'margin of safety units');
near(marginOfSafety(m, 600_000).pct, 1 / 3, 'margin of safety %');
eq(unitsForProfit(m, 9_000_000), 550_000, 'tickets for $9M profit'); // 33,000,000 / 60
eq(revenueAt(m, 550_000), 49_500_000, 'revenue for $9M profit');
eq(Math.ceil(550_000 / 41), 13_415, 'per game for $9M profit'); // 13,414.6
near(550_000 / 738_000, 0.745257, 'share of seats for $9M', 1e-5);
// what-ifs
eq(unitsForProfit({ ...m, fixed: 27_000_000 }), 450_000, 'rent +3M');
eq(unitsForProfit({ ...m, price: 80 }), 480_000, 'price 80'); // 24,000,000 / 50
eq(unitsForProfit({ ...m, variable: 35 }), 436_364, 'variable +5'); // 24,000,000 / 55 = 436,363.6
// profit is exactly zero at break-even
eq(profitAt(m, unitsForProfit(m)), 0, 'profit at break-even');

// ---- Real example: Green Bay Packers FY ended 31 March 2025 ----
// As reported by the team (packers.com, 23 July 2025). Figures in $ millions.
const pk = { rev: 64.9, exp: 41.3, profitChange: 23.6, profit: 83.7, prev: 60.1, local: 34.6, national: 30.3 };
near(pk.rev - pk.exp, pk.profitChange, 'Packers: revenue change - expense change = profit change', 1e-9);
near(pk.profit - pk.prev, pk.profitChange, 'Packers: operating profit change', 1e-9);
near(pk.profitChange / pk.prev, 0.393, 'Packers: profit growth %', 0.001);
near(pk.local + pk.national, pk.rev, 'Packers: local + national = revenue change', 1e-9);
near(pk.profitChange / pk.rev, 0.364, 'Packers: incremental margin', 0.001);

// ---- Slide structure ----
const BLOCKS = new Set(['p', 'big', 'bullets', 'formulas', 'columns', 'kpis', 'table', 'steps', 'chart', 'callout', 'forces', 'sources']);
const SECTION_SLIDES = (t) => ({ plain: t.plain, real: t.real.slides, sports: t.sports.slides });
for (const t of topics) {
  for (const [name, slides] of Object.entries(SECTION_SLIDES(t))) {
    assert.ok(Array.isArray(slides) && slides.length > 0, `${t.id}/${name}: needs slides`);
    for (const [i, s] of slides.entries()) {
      assert.ok(s.title && Array.isArray(s.blocks) && s.blocks.length > 0, `${t.id}/${name}[${i}]: slide needs title and blocks`);
      for (const b of s.blocks) assert.ok(BLOCKS.has(b.type), `${t.id}/${name}[${i}]: unknown block ${b.type}`);
      checks++;
    }
  }
  // the real example must show where its facts come from
  const hasSources = t.real.slides.some((s) => s.blocks.some((b) => b.type === 'sources' && b.items.every((x) => /^https:\/\//.test(x.url) && x.note)));
  assert.ok(hasSources, `${t.id}: real example needs a sources slide with https links`);
  assert.ok(t.real.title && t.real.note, `${t.id}: real example needs title and note`);
  assert.ok(t.sports.title && t.sports.universe, `${t.id}: sports example needs title and universe`);
  assert.ok(t.terms.length > 0, `${t.id}: needs terms`);
  checks++;
}

// ---- Quiz structure ----
for (const t of topics) {
  const ids = new Set();
  for (const q of t.questions) {
    assert.ok(!ids.has(q.id), `${t.id}: duplicate question id ${q.id}`);
    ids.add(q.id);
    if (q.type === 'mcq') {
      assert.ok(q.options.length >= 3, `${t.id}/${q.id}: needs at least 3 options`);
      assert.equal(new Set(q.options).size, q.options.length, `${t.id}/${q.id}: duplicate options`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${t.id}/${q.id}: answer index`);
      assert.ok(q.explanation && q.explanation.length > 20, `${t.id}/${q.id}: missing explanation`);
    } else {
      assert.equal(q.type, 'open', `${t.id}/${q.id}: unknown type`);
      assert.ok(Array.isArray(q.answer) && q.answer.length > 0, `${t.id}/${q.id}: open question needs answer lines`);
    }
    const sec = SECTION_SLIDES(t)[q.review?.section];
    assert.ok(sec && Number.isInteger(q.review.slide) && q.review.slide >= 0 && q.review.slide < sec.length, `${t.id}/${q.id}: review must point at a real slide`);
    assert.ok(!/NaN|undefined|\[object/.test(JSON.stringify(q)), `${t.id}/${q.id}: bad value in text`);
    checks++;
  }
  assert.ok(t.videos.length > 0, `${t.id}: needs at least one video`);
  assert.ok(!/NaN|undefined|\[object/.test(JSON.stringify(t)), `${t.id}: bad value in content`);
  checks++;
}

// ---- Every topic belongs to a unit in its course outline ----
for (const t of topics) {
  const course = courses.find((c) => c.id === t.course);
  assert.ok(course, `${t.id}: unknown course ${t.course}`);
  assert.ok(allUnits(course).some((u) => u.id === t.id), `${t.id}: not in the ${t.course} outline`);
  checks++;
}

console.log(`All ${checks} checks passed.`);
