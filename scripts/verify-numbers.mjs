// Run with: npm run verify
// Checks the Ironhawks numbers against values worked out by hand, and checks
// that every quiz question is well formed. Fails loudly if anything is off.
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
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
import { bookmarkPrompt } from '../src/lib/ai.js';
import { DEADLINES } from '../src/data/deadlines.js';
import { resolve, split, splitDuration, urgency, spoken, toLocalInput } from '../src/lib/deadlines.js';

let checks = 0;
const eq = (actual, expected, label) => {
  assert.equal(actual, expected, `${label}: expected ${expected}, got ${actual}`);
  checks++;
};
const ok_ = (cond, label) => {
  assert.ok(cond, label);
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

// ---- Accounting topics: worked numbers, checked by hand-style arithmetic ----
const round2 = (x) => Math.round(x * 100) / 100;
// Ironhawks (full franchise: arena $560M / 40 yrs, practice facility $70M / 25 yrs, payroll ~$180M, revenue ~$420M)
eq(560 / 40, 14, 'arena depreciation $M');
eq(round2(70 / 25), 2.8, 'practice facility depreciation $M');
eq(round2(560 / 40 + 70 / 25), 16.8, 'total depreciation $M');
eq(560 - 14, 546, 'arena book value after year one');
// start-up equation: owners invest 300; arena 560 = 260 cash + 300 loan; equipment 5 on account
eq(300 - 260, 40, 'cash after arena');
eq(40 + 560, 300 + 300, 'equation after day two');
eq(40 + 560 + 5, 300 + 5 + 300, 'equation after day three');
eq(605 - 5, 300 + 300, 'equation after paying the supplier (assets and liabilities each fall 5)');
// Ironhawks income statement ($M) -> closing -> retained earnings
const ihExp = 180 + 155.2 + 16.8 + 18;
near(420 - ihExp, 50, 'Ironhawks pre-tax income', 1e-9);
near((420 - ihExp) * 0.2, 10, 'Ironhawks tax at 20%', 1e-9);
near(420 - ihExp - 10, 40, 'Ironhawks net income', 1e-9);
near(ihExp + 10, 380, 'Ironhawks closed expenses incl. tax', 1e-9);
eq(0 + 40 - 5, 35, 'Ironhawks ending retained earnings');
eq(300 + 35, 335, 'Ironhawks owners equity');
eq(30 * 0.06 * 4 / 12, 0.6, 'Ironhawks accrued interest $M'); // 30 x 6% x 4/12
eq(82 / 41, 2, 'ticket revenue per game $M');
eq(82 - 10 * 2, 62, 'unearned ticket revenue after 10 games');
eq(25 * 2, 50, 'ticket revenue earned after 25 games');
eq(82 - 25 * 2, 32, 'unearned ticket revenue after 25 games');
eq(8_000_000 * 6 / 24, 2_000_000, 'sponsorship earned after 6 of 24 months');
// Overnight Auto Service
eq(175_000 - 108_430, 66_570, 'Overnight pre-tax income');
eq(Math.round(66_570 * 0.4), 26_628, 'Overnight tax at 40%');
eq(66_570 - 26_628, 39_942, 'Overnight net income');
eq(108_430 + 26_628, 135_058, 'Overnight closed expenses');
eq(175_000 - 135_058, 39_942, 'Overnight Income Summary balance');
eq(123_800 - 43_800, 80_000, 'Overnight equity after tools purchase');
eq(80_000 - 52_000 - 6_000 + 0, 22_000, 'Overnight cash after land and building down payment');
eq(800 - 64_200 + 80_000, 16_600, 'Overnight net change in cash');
eq(13_120 + 6_600 + 1_400 + 12_000 + 36_000 + 52_000 + 3_200 + 830 + 6_100 + 1_800, 133_050, 'Overnight trial balance debits');
eq(10_470 + 30_000 + 80_000 + 0 + 12_580, 133_050, 'Overnight trial balance credits');
eq(1_800 - 1_200, 600, 'supplies used');
eq(18_000 / 12, 1_500, 'insurance per month');
eq(36_000 / 240, 150, 'building depreciation per month');
eq(36_000 - 1_650, 34_350, 'building book value');
eq(4_000 * 0.09 / 12, 30, 'accrued interest on $4,000 at 9% for a month');
eq(9_000 / 3, 3_000, 'unearned rent per month');
// Chapter 7: Foster securities, receivables, notes
eq(4_000 * 49.5 + 2_000, 200_000, 'Foster cost');
eq(4_000 * 0.3, 1_200, 'Foster dividend');
eq(500 * 52 - 200 - 500 * 50, 800, 'Foster gain');
eq(600 * 48 - 250, 28_550, 'Foster proceeds on loss sale');
eq(28_550 - 600 * 50, -1_450, 'Foster loss');
eq(200_000 - 25_000 - 30_000, 145_000, 'Foster remaining cost');
eq(2_900 * 47, 136_300, 'Foster market value');
eq(145_000 - 136_300, 8_700, 'Foster unrealized loss');
eq(250_000 - 10_000, 240_000, 'net realizable value');
eq((250_000 - 4_000) - (10_000 - 4_000), 240_000, 'NRV unchanged by write-off');
eq(200_000 * 0.06, 12_000, 'interest one year');
eq(Math.round(200_000 * 0.06 * 4 / 12), 4_000, 'interest four months');
eq(60_000 * 0.06 / 12, 300, 'note interest at 31 December');
eq(60_000 * 0.06 * 3 / 12, 900, 'note total interest');
eq(60_000 + 900, 60_900, 'note cash at maturity');
eq(900 - 300, 600, 'note remaining interest revenue');
// Chapter 8: Mead and the Kitchen Counter
eq((2 * 1000 + 3 * 1200) / 5, 1120, 'Mead average cost');
eq(2 * 1000 + 2 * 1200, 4_400, 'Mead FIFO four units');
eq(3 * 1200 + 1 * 1000, 4_600, 'Mead LIFO four units');
eq(10_000 + 80_000 - 7_000, 83_000, 'Merei cost of goods sold');
const kc = [[10, 80], [5, 90], [5, 100], [5, 120], [5, 130]];
const kcTotal = kc.reduce((a, [n, c]) => a + n * c, 0);
eq(kcTotal, 3_000, 'Kitchen Counter goods available');
const layersFromEnd = (order, units) => {
  let left = units, cost = 0;
  for (const [n, c] of order) { const take = Math.min(n, left); cost += take * c; left -= take; if (!left) break; }
  return cost;
};
const kcEndFifo = layersFromEnd([...kc].reverse(), 12); // newest costs stay
const kcEndLifo = layersFromEnd(kc, 12); // oldest costs stay
eq(kcEndFifo, 1_450, 'Kitchen Counter FIFO ending inventory');
eq(kcTotal - kcEndFifo, 1_550, 'Kitchen Counter FIFO cost of goods sold');
eq(kcEndLifo, 980, 'Kitchen Counter LIFO ending inventory');
eq(kcTotal - kcEndLifo, 2_020, 'Kitchen Counter LIFO cost of goods sold');
eq(12 * (kcTotal / 30), 1_200, 'Kitchen Counter average ending inventory');
eq(18 * (kcTotal / 30), 1_800, 'Kitchen Counter average cost of goods sold');
eq(3 * 80 + 4 * 100 + 5 * 120, 1_240, 'Kitchen Counter specific ID ending inventory');
eq(kcTotal - 1_240, 1_760, 'Kitchen Counter specific ID cost of goods sold');
// Ironhawks jerseys
eq(1_000 * 40 + 200 * 50, 50_000, 'jerseys FIFO cost of goods sold');
eq(1_000 * 50 + 200 * 40, 58_000, 'jerseys LIFO cost of goods sold');
eq((1_000 * 40 + 1_000 * 50) / 2_000 * 1_200, 54_000, 'jerseys average cost of goods sold');
eq(1_200 * 90 - 50_000, 58_000, 'jerseys FIFO gross profit');
eq(1_200 * 90 - 58_000, 50_000, 'jerseys LIFO gross profit');
eq(58_000 - 50_000, 8_000, 'jerseys profit difference');
eq(800 * 50, 40_000, 'jerseys FIFO ending inventory');
eq(800 * 40, 32_000, 'jerseys LIFO ending inventory');
// Chapter 9
eq(10_000 + 600 + 1_350 + 500, 12_450, 'machine cost');
eq(200_000 + 40_000 + 344_000 + 216_000, 800_000, 'lump-sum allocation total');
eq(250_000 / 1_000_000 * 800_000, 200_000, 'lump-sum land share');
eq(430_000 / 1_000_000 * 800_000, 344_000, 'lump-sum building share');
eq((17_000 - 2_000) / 5, 3_000, 'truck depreciation');
eq((10_000 - 3 * 2_000) / 4, 1_000, 'revised depreciation');
eq(10_000 - 8_000, 2_000, 'machine book value');
eq(3_000 - 2_000, 1_000, 'gain on disposal');
eq(1_200 - 2_000, -800, 'loss on disposal');
eq(100_000 - 72_000, 28_000, 'impairment loss');
eq(100_000 / 8, 12_500, 'patent amortization');
eq(1_000_000 + 60_000 + 25_000 + 15_000, 1_100_000, 'Ironhawks equipment cost');
eq((10 - 1) / 5, 1.8, 'Ironhawks training equipment depreciation $M');
near(10 - 3 * 1.8, 4.6, 'Ironhawks equipment book value', 1e-9);
near(5.5 - 4.6, 0.9, 'Ironhawks equipment gain', 1e-9);
near(4.0 - 4.6, -0.6, 'Ironhawks equipment loss', 1e-9);
eq(12 / 10, 1.2, 'Ironhawks trademark amortization $M');
eq(30 * 0.04, 1.2, 'Ironhawks allowance $M');
near(30 - 1.2, 28.8, 'Ironhawks receivables NRV', 1e-9);
near((30 - 0.5) - (1.2 - 0.5), 28.8, 'Ironhawks NRV after write-off', 1e-9);
// Chapter 10
eq(10_000 * 0.06 * 6 / 12, 300, 'Porter total interest');
eq(10_000 * 0.06 * 2 / 12, 100, 'Porter accrued interest');
eq(300 - 100, 200, 'Porter interest expense next year');
eq(10_000 + 300, 10_300, 'Porter repayment');
eq(10 + 290, 300, 'Ironhawks loan split');
// Manchester United, quarter ended 30 September 2025 (figures in GBP thousands as published)
const mu = { rev: 140_345, matchday: 26_200, borrowCur: 267_950, borrowNon: 481_218, defCur: 218_676, defNon: 6_326 };
eq(Math.round((mu.borrowCur + mu.borrowNon) / 100) / 10, 749.2, 'Man Utd borrowings total, GBP M');
eq(Math.round((mu.defCur + mu.defNon) / 100) / 10, 225.0, 'Man Utd deferred revenue total, GBP M');
eq(Math.round(mu.matchday / mu.rev * 100), 19, 'Man Utd matchday share of revenue, %');
near(218.7 / 140.3, 1.5588, 'Man Utd deferred revenue vs quarterly revenue', 1e-3);
near(54.1 * 4, 216.4, 'Man Utd amortization x4, GBP M', 1e-9);
// Other real examples
near(114 / 25.5, 4.47, 'Wimbledon payout vs premiums', 0.01);
ok_(41 / 125 < 1 / 3, 'Athletics payroll less than a third of the Yankees');
// Strategy: Kestrel
eq(20 - 14, 6, 'Kestrel value created $M');
eq(18 - 15, 3, 'Sparrow value created $M');
eq(6 - 3, 3, 'Kestrel advantage $M');
eq((20 - 18) + (15 - 14), 3, 'Kestrel advantage from WTP plus WTS');
eq(8 * 20_000 * 12, 1_920_000, 'Kestrel Pass annual revenue');
eq(8 * 18_000 * 12, 1_728_000, 'Kestrel Pass after churn');
eq(1_920_000 - 1_728_000, 192_000, 'Kestrel Pass revenue lost');

// ---- Slide structure ----
const BLOCKS = new Set(['p', 'big', 'bullets', 'formulas', 'columns', 'kpis', 'table', 'steps', 'chart', 'callout', 'forces', 'sources', 'flow', 'cycle', 'bars', 'figure', 'balance', 'sheet']);
const SECTION_SLIDES = (t) => ({ plain: t.plain, real: t.real.slides, sports: t.sports.slides });
for (const t of topics) {
  for (const [name, slides] of Object.entries(SECTION_SLIDES(t))) {
    assert.ok(Array.isArray(slides) && slides.length > 0, `${t.id}/${name}: needs slides`);
    for (const [i, s] of slides.entries()) {
      assert.ok(s.title && Array.isArray(s.blocks) && s.blocks.length > 0, `${t.id}/${name}[${i}]: slide needs title and blocks`);
      for (const b of s.blocks) {
        const where = `${t.id}/${name}[${i}]`;
        assert.ok(BLOCKS.has(b.type), `${where}: unknown block ${b.type}`);
        if (b.type === 'flow') assert.ok(b.items?.length >= 2 && b.items.every((x) => x.title), `${where}: flow needs 2+ titled items`);
        if (b.type === 'cycle') assert.ok(b.items?.length >= 3 && b.items.length <= 6 && b.items.every((x) => x.title), `${where}: cycle needs 3-6 titled items`);
        if (b.type === 'bars') assert.ok(b.items?.length >= 2 && b.items.every((x) => x.label && Number.isFinite(x.value) && x.value >= 0), `${where}: bars need labeled, non-negative values`);
        if (b.type === 'figure') assert.ok(b.alt && b.need && (!b.src || /^[\w.-]+\.(png|jpe?g|webp|svg|gif)$/i.test(b.src)), `${where}: figure needs alt, need and a plain file name`);
      }
      checks++;
    }
  }
  // the real example must show where its facts come from
  const hasSources = t.real.slides.some((s) => s.blocks.some((b) => b.type === 'sources' && b.items.every((x) => /^https:\/\//.test(x.url) && x.note)));
  assert.ok(hasSources, `${t.id}: real example needs a sources slide with https links`);
  assert.ok(t.real.title && t.real.note, `${t.id}: real example needs title and note`);
  assert.ok(t.sports.title && t.sports.universe, `${t.id}: sports example needs title and universe`);
  assert.ok(t.terms.length > 0, `${t.id}: needs terms`);
  for (const e of t.exam || []) {
    assert.ok(e.id && Number.isFinite(e.marks) && e.marks > 0 && e.q && Array.isArray(e.answer) && e.answer.length > 0, `${t.id}/exam ${e.id}: needs id, marks, q, answer[]`);
    assert.ok(Array.isArray(e.marking) && e.marking.length >= 2, `${t.id}/exam ${e.id}: needs 2+ marking points`);
    checks++;
  }
  assert.equal(new Set((t.exam || []).map((e) => e.id)).size, (t.exam || []).length, `${t.id}: exam ids are unique`);
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
    assert.ok(!/\[object|\bNaN\b|\$\{/.test(JSON.stringify(q)), `${t.id}/${q.id}: bad value in text`);
    checks++;
  }
  assert.ok(Array.isArray(t.videos), `${t.id}: videos must be an array (may be empty)`);
  assert.ok(!/\[object|\bNaN\b|\$\{/.test(JSON.stringify(t)), `${t.id}: bad value in content`);
  checks++;
}

// ---- Every topic belongs to a unit in its course outline ----
for (const t of topics) {
  const course = courses.find((c) => c.id === t.course);
  assert.ok(course, `${t.id}: unknown course ${t.course}`);
  assert.ok(allUnits(course).some((u) => u.id === t.id), `${t.id}: not in the ${t.course} outline`);
  checks++;
}

// ---- Course outlines ----
for (const course of courses) {
  const units = allUnits(course);
  const ids = units.map((u) => u.id);
  assert.equal(new Set(ids).size, ids.length, `${course.id}: duplicate unit ids`);
  checks++;
  for (const u of units) {
    assert.ok(u.title && u.sessions, `${course.id}/${u.id}: unit needs a title and sessions`);
    if (u.covers) assert.ok(Array.isArray(u.covers) && u.covers.length > 0 && u.covers.every((c) => typeof c === 'string' && c.trim()), `${u.id}: covers must be a list of text`);
    checks++;
  }
  if (course.universe) assert.ok(typeof course.universe === 'string', `${course.id}: universe`);
}
// Market Research follows the syllabus: 12 sessions plus 2 asynchronous activities, no topic left uncovered
{
  const mr = courses.find((c) => c.id === 'market-research');
  ok_(mr, 'Market Research course exists');
  const units = allUnits(mr);
  eq(units.length, 14, 'Market Research units (12 sessions + 2 async)');
  for (let n = 1; n <= 12; n++) ok_(units.some((u) => u.sessions === `Session ${n}`), `Market Research has Session ${n}`);
  ok_(units.some((u) => u.sessions.startsWith('Async A')), 'Market Research has Async A');
  ok_(units.some((u) => u.sessions.startsWith('Async B')), 'Market Research has Async B');
  ok_(units.every((u) => Array.isArray(u.covers)), 'Every Market Research unit lists the topics it covers');
  const all = units.flatMap((u) => u.covers).join(' | ').toLowerCase();
  for (const word of ['representativeness', 'causality', 'mixed methods', 'zotero', 'validity', 'competitor analysis', 'sampling', 'qualtrics', 'jamovi', 'anova', 'regression', 'focus groups', 'projective', 'netnography', 'taguette', 'semi-structured']) {
    ok_(all.includes(word), `Market Research covers "${word}"`);
  }
}

// International Sports Governance follows its syllabus: sessions 1-12, two asynchronous activities, a final assessment
{
  const g = courses.find((c) => c.id === 'sport-governance');
  ok_(g, 'Sport Governance course exists');
  const units = allUnits(g);
  eq(units.length, 15, 'Sport Governance units (12 sessions + 2 async + final assessment)');
  for (let n = 1; n <= 12; n++) ok_(units.some((u) => u.sessions === `Session ${n}`), `Sport Governance has Session ${n}`);
  ok_(units.some((u) => u.sessions.startsWith('Async 1')) && units.some((u) => u.sessions.startsWith('Async 2')), 'Sport Governance has both asynchronous activities');
  ok_(units.some((u) => u.sessions.startsWith('Final assessment')), 'Sport Governance has the final assessment');
  ok_(units.every((u) => Array.isArray(u.covers)), 'Every Sport Governance unit lists what it covers');
  ok_(typeof g.tag === 'string' && g.tag.length > 0, 'Sport Governance carries a status tag');
  const all = units.flatMap((u) => u.covers).join(' | ').toLowerCase();
  for (const word of ['three levels of governance', 'stakeholders', 'non-olympic', 'regulatory standards', 'fifagate', 'autonomy', 'competitive balance', 'integrity', 'safeguarding', 'ethical decision making', 'sustainability', 'race and socioeconomic']) {
    ok_(all.includes(word), `Sport Governance covers "${word}"`);
  }
}
// Foundations of Sport Management follows its syllabus: 12 sessions, six asynchronous activities listed inside them
{
  const f = courses.find((c) => c.id === 'sport-management');
  ok_(f, 'Sport Management course exists');
  const units = allUnits(f);
  eq(units.length, 12, 'Sport Management units (12 sessions)');
  for (let n = 1; n <= 12; n++) ok_(units.some((u) => u.sessions === `Session ${n}`), `Sport Management has Session ${n}`);
  ok_(units.every((u) => Array.isArray(u.covers)), 'Every Sport Management unit lists what it covers');
  ok_(typeof f.tag === 'string' && f.tag.length > 0, 'Sport Management carries a status tag');
  const all = units.flatMap((u) => u.covers).join(' | ').toLowerCase();
  for (const word of ['ecosystem', 'fandom', 'fan engagement', 'sports marketing', 'media rights', 'sponsorship', 'endorsements', 'cryptocurrency', 'luxury', 'gender pay gap', 'analytics']) {
    ok_(all.includes(word), `Sport Management covers "${word}"`);
  }
  for (let n = 1; n <= 6; n++) ok_(all.includes(`async activity ${n}`), `Sport Management lists async activity ${n}`);
}
// every course names the date of its syllabus
for (const c of courses.filter((c) => c.overview)) ok_(typeof c.syllabusDate === 'string' && c.syllabusDate.length > 0, `${c.id}: syllabus date`);

// ---- Bookmark message ----
{
  const one = bookmarkPrompt({ items: [{ course: 'Market Research', topic: 'Sampling', where: 'Slide 2', excerpt: 'A sample is a part of a population.', note: 'Why not ask everyone?' }] });
  ok_(one.includes('Why not ask everyone?') && one.includes('Sampling') && one.includes('A sample is a part of a population.'), 'bookmark message carries topic, slide text and note');
  const none = bookmarkPrompt({ items: [{ course: 'Accounting', topic: 'Basics', note: '' }] });
  ok_(none.includes('explain the idea from the start'), 'bookmark message handles an empty note');
  const two = bookmarkPrompt({ items: [{ course: 'A', topic: 'B', note: 'x' }, { course: 'C', topic: 'D', note: 'y' }] });
  ok_(two.includes('1. Course: A') && two.includes('2. Course: C'), 'bookmark message numbers several items');
}

// ---- Due dates ----
{
  eq(DEADLINES.length, 11, 'eleven due dates');
  eq(new Set(DEADLINES.map((d) => d.id)).size, DEADLINES.length, 'due date ids are unique');
  for (const d of DEADLINES) {
    ok_(d.title && d.course, `${d.id}: has a title and a course`);
    ok_(d.dueAt === null || Number.isFinite(Date.parse(d.dueAt)), `${d.id}: dueAt is a valid date or null`);
    ok_(d.dueAt === null || /[+-]\d\d:\d\d$/.test(d.dueAt), `${d.id}: dueAt names its UTC offset`);
    ok_(!d.courseId || courses.some((c) => c.id === d.courseId), `${d.id}: course link points at a real course`);
  }
  const at = (id) => Date.parse(DEADLINES.find((d) => d.id === id).dueAt);
  eq(at('leadership-workshop-reflection'), Date.UTC(2026, 10, 6, 22, 59), 'Workshop reflection: 6 Nov 23:59 (UTC+1)');
  eq(at('strategy-async-assignment-1'), Date.UTC(2026, 10, 8, 22, 59), 'Strategy assignment 1: 8 Nov 23:59 (UTC+1)');
  eq(at('sport-management-async-group-assignment'), Date.UTC(2026, 10, 13, 16, 0), 'Group assignment: 13 Nov 17:00 (UTC+1)');
  eq(at('careers-submit-cv'), Date.UTC(2026, 10, 14, 23, 0), 'CV: 15 Nov 00:00 (UTC+1)');
  eq(at('strategy-final-group-assignment'), Date.UTC(2026, 10, 27, 22, 59), 'Final group assignment: 27 Nov 23:59 (UTC+1)');
  eq(DEADLINES.filter((d) => d.dueAt === null).length, 5, 'five items have no exact date yet');
  eq(DEADLINES.filter((d) => d.group).map((d) => d.id).join(), 'sport-management-async-group-assignment,strategy-final-group-assignment,strategy-final-presentation,governance-super-league,accounting-company-analysis,market-research-project', 'group projects are tagged');
  eq(Date.parse(DEADLINES.find((d) => d.id === 'strategy-final-presentation').dueAt), Date.UTC(2026, 10, 30, 22, 59), 'Strategy presentation: 30 Nov (end of day, UTC+1)');
  ok_(DEADLINES.filter((d) => d.dueAt === null && d.group).every((d) => d.approx), 'undated group projects say roughly when');

  // countdown arithmetic: 2 days 4 hours 12 minutes 9 seconds
  const ms = ((2 * 24 + 4) * 3600 + 12 * 60 + 9) * 1000;
  const sd = splitDuration(ms);
  ok_(sd.days === 2 && sd.hours === 4 && sd.minutes === 12 && sd.seconds === 9 && !sd.late, 'splitDuration breaks time into d/h/m/s');
  const late = splitDuration(-90 * 1000);
  ok_(late.late && late.minutes === 1 && late.seconds === 30, 'splitDuration handles overdue time');
  eq(urgency(-1), 'late', 'urgency: overdue');
  eq(urgency(2 * 3600 * 1000), 'urgent', 'urgency: under 3 hours');
  eq(urgency(10 * 3600 * 1000), 'soon', 'urgency: under a day');
  eq(urgency(3 * 24 * 3600 * 1000), 'calm', 'urgency: days away');
  eq(spoken(ms), 'Due in 2 days 4 hours', 'spoken phrase');
  eq(spoken(-3600 * 1000), 'Overdue by 1 hour', 'spoken phrase when overdue');
  eq(spoken(20 * 1000), 'Due in less than a minute', 'spoken phrase under a minute');
  ok_(/^\d{4}-\d\d-\d\dT\d\d:\d\d$/.test(toLocalInput(Date.now())), 'datetime-local value has the right shape');

  // active / archive split
  const empty = { done: {}, dates: {} };
  const all = split(resolve(empty));
  eq(all.active.length, 11, 'all eleven start in the list');
  eq(all.archived.length, 0, 'nothing is archived at the start');
  const dated = all.active.filter((d) => d.dueMs !== null).map((d) => d.dueMs);
  ok_(dated.every((v, i) => i === 0 || dated[i - 1] <= v), 'list is soonest first');
  ok_(all.active.slice(-5).every((d) => d.dueMs === null), 'undated items come last');
  const done = split(resolve({ done: { 'careers-submit-cv': 5, 'strategy-async-assignment-1': 9 }, dates: {} }));
  eq(done.active.length, 9, 'ticked items leave the list');
  eq(done.archived.map((d) => d.id).join(), 'strategy-async-assignment-1,careers-submit-cv', 'archive shows the newest first');
  const dateAdded = split(resolve({ done: {}, dates: { 'presentation-skills-speaker-analysis': '2026-11-10T12:00:00+01:00' } }));
  eq(dateAdded.active.filter((d) => d.dueMs === null).length, 4, 'adding a date gives an undated item a clock');
  const changed = resolve({ done: {}, dates: { 'careers-submit-cv': '2026-11-20T12:00:00+01:00' } }).find((d) => d.id === 'careers-submit-cv');
  ok_(changed.changed && changed.dueMs === Date.parse('2026-11-20T12:00:00+01:00'), 'a changed date overrides the original');
}

// ---- Extra check files: every scripts/checks/*.mjs default-exports (helpers) => void ----
{
  const dir = new URL('./checks/', import.meta.url);
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.mjs')).sort()) {
    const mod = await import(pathToFileURL(new URL(f, dir).pathname).href);
    mod.default({ eq, ok_, near });
  }
}

console.log(`All ${checks} checks passed.`);
