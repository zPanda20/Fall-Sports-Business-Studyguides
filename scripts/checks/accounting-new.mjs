// Accounting: checks on the exam-level questions and the visual numbers added to the Accounting topics.
// Every worked number in an exam answer is recalculated here from the inputs in the question.
import { accountingBasicsTopic } from '../../src/data/accounting/accounting-basics.js';
import { accountingProcessTopic } from '../../src/data/accounting/accounting-process.js';
import { statementsAndNotesTopic } from '../../src/data/accounting/statements-and-notes.js';
import { balanceSheetAssetsTopic } from '../../src/data/accounting/balance-sheet-assets.js';
import { balanceSheetLiabilitiesEquityTopic } from '../../src/data/accounting/balance-sheet-liabilities-equity.js';
import { cvpTopic } from '../../src/data/accounting/cost-volume-profit.js';
import { ironhawks as m, contributionMargin, unitsForProfit } from '../../src/lib/cvp.js';

export default function ({ eq, ok_, near }) {
  const topics = [
    accountingBasicsTopic,
    accountingProcessTopic,
    statementsAndNotesTopic,
    balanceSheetAssetsTopic,
    balanceSheetLiabilitiesEquityTopic,
    cvpTopic,
  ];

  // ---- structure: every topic has 2-3 exam questions whose marking adds up ----
  const figures = [];
  for (const t of topics) {
    ok_(Array.isArray(t.exam) && t.exam.length >= 2 && t.exam.length <= 3, `${t.id}: has 2-3 exam-level questions`);
    eq(new Set(t.exam.map((e) => e.id)).size, t.exam.length, `${t.id}: exam ids are unique`);
    for (const e of t.exam) {
      ok_(e.q && e.q.length > 40, `${t.id} ${e.id}: has a question`);
      ok_(Array.isArray(e.answer) && e.answer.length > 0 && e.answer.every((a) => typeof a === 'string' && a.length > 0), `${t.id} ${e.id}: has a model answer`);
      const marks = e.marking.map((line) => {
        const mm = line.match(/\((\d+)\)$/) || line.match(/\((\d+)\)\s*$/);
        return mm ? Number(mm[1]) : NaN;
      });
      ok_(marks.every(Number.isFinite), `${t.id} ${e.id}: every marking line ends with its marks`);
      eq(marks.reduce((a, b) => a + b, 0), e.marks, `${t.id} ${e.id}: marking lines add up to ${e.marks}`);
    }
    // visuals: at least one visual block somewhere in the topic
    const kinds = [];
    const walk = (v) => {
      if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === 'object') {
        if (['flow', 'cycle', 'bars', 'figure'].includes(v.type)) kinds.push(v);
        Object.values(v).forEach(walk);
      }
    };
    walk(t.plain);
    walk(t.sports);
    walk(t.real);
    ok_(kinds.length >= 1, `${t.id}: has at least one visual block`);
    for (const b of kinds) {
      if (b.type === 'figure') {
        ok_(/^acc-[a-z0-9-]+\.png$/.test(b.src) && b.alt && b.need, `${t.id}: figure ${b.src} has a name, alt text and a description of what to find`);
        figures.push(b.src);
      }
      if (b.type === 'bars') ok_(b.items.every((i) => i.label && Number.isFinite(i.value) && i.value >= 0), `${t.id}: bar values are numbers`);
      if (b.type === 'flow' || b.type === 'cycle') ok_(b.items.length >= 3 && b.items.length <= 6, `${t.id}: ${b.type} has 3-6 steps`);
    }
  }
  eq(new Set(figures).size, figures.length, 'accounting figure file names are unique');

  const text = (t, id) => t.exam.find((e) => e.id === id).answer.join(' ');
  const barsIn = (t, title) => {
    let found;
    const walk = (v) => {
      if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === 'object') {
        if (v.type === 'bars' && v.title === title) found = v;
        Object.values(v).forEach(walk);
      }
    };
    walk(t.plain);
    walk(t.sports);
    return found;
  };

  // ---- accounting-basics ----
  {
    const t = accountingBasicsTopic;
    // Day 1-4 equation totals
    let cash = 300, arena = 0, equip = 0, loan = 0, payable = 0, stock = 300;
    eq(cash, stock, 'Day 1: assets = equity');
    cash -= 260; arena = 560; loan = 300;
    eq(cash + arena, 600, 'Day 2: assets');
    eq(loan + stock, 600, 'Day 2: liabilities + equity');
    equip = 5; payable = 5;
    eq(cash + arena + equip, 605, 'Day 3: assets');
    eq(loan + payable + stock, 605, 'Day 3: liabilities + equity');
    cash -= 5; payable -= 5;
    eq(cash + arena + equip, 605 - 0 + 0 - 5 + 0 || 600, 'Day 4: assets after paying the supplier');
    eq(cash + arena + equip, loan + payable + stock, 'Day 4: equation balances');
    const a = text(t, 'e1');
    ok_(a.includes('$600M') && a.includes('$605M') && a.includes('$40M') && a.includes('$300M'), 'basics e1: answer carries the worked totals');
    // Overnight cash flow
    eq(800 - 64200 + 80000, 16600, 'basics e3: change in cash');
    ok_(text(t, 'e3').includes('+$16,600'), 'basics e3: answer states +$16,600');
  }

  // ---- accounting-process ----
  {
    const t = accountingProcessTopic;
    const arena = 560 / 40, practice = 70 / 25;
    near(arena, 14, 'process e1: arena depreciation');
    near(practice, 2.8, 'process e1: practice facility depreciation', 1e-9);
    near(arena + practice, 16.8, 'process e1: total depreciation');
    const perGame = 82 / 41;
    eq(perGame, 2, 'process e1: ticket revenue per game');
    eq(10 * perGame, 20, 'process e1: earned after 10 games');
    eq(82 - 10 * perGame, 62, 'process e1: liability left after 10 games');
    const revenue = 20 + 1.2;
    const expense = arena + practice + 6;
    near(revenue, 21.2, 'process e1: revenue adjustments');
    near(expense, 22.8, 'process e1: expense adjustments');
    near(revenue - expense, -1.6, 'process e1: net income change');
    const a = text(t, 'e1');
    ok_(a.includes('$14M') && a.includes('$2.8M') && a.includes('$16.8M') && a.includes('$62M') && a.includes('−$1.6M'), 'process e1: answer carries the worked numbers');
    // sponsorship
    eq(8 / 2, 4, 'process e2: yearly sponsorship revenue');
    eq((8 / 2) * (6 / 12), 2, 'process e2: six months');
    eq(8 - 2, 6, 'process e2: unearned balance');
    ok_(text(t, 'e2').includes('$2M') && text(t, 'e2').includes('$6M'), 'process e2: answer carries $2M and $6M');
    // bars: unearned ticket revenue after n games = 82 - 2n
    const b = barsIn(t, 'Unearned Ticket Revenue still owed ($M)');
    eq(b.items.map((i) => i.value).join(), [82, 82 - 2 * 10, 82 - 2 * 25, 82 - 2 * 41].join(), 'process bars: unearned revenue after 0, 10, 25, 41 games');
  }

  // ---- statements-and-notes ----
  {
    const t = statementsAndNotesTopic;
    // season 1 (the existing example) and season 2 (exam)
    const season1 = 420 - 180 - 155.2 - 16.8 - 18;
    near(season1, 50, 'statements: season 1 income before taxes');
    near(season1 * 0.2, 10, 'statements: season 1 tax');
    const pre = 450 - 190 - 160.2 - 16.8 - 18;
    near(pre, 65, 'statements e1: income before taxes', 1e-9);
    const tax = pre * 0.2;
    near(tax, 13, 'statements e1: income tax', 1e-9);
    const ni = pre - tax;
    near(ni, 52, 'statements e1: net income', 1e-9);
    const re = 35 + ni - 10;
    near(re, 77, 'statements e1: ending retained earnings', 1e-9);
    near(300 + re, 377, 'statements e1: owners’ equity', 1e-9);
    const exp = 190 + 160.2 + 16.8 + 18 + tax;
    near(exp, 398, 'statements e2: total expenses closed', 1e-9);
    near(450 - exp, 52, 'statements e2: Income Summary balance', 1e-9);
    const a = text(t, 'e1');
    ok_(a.includes('$65.0M') && a.includes('$13.0M') && a.includes('$52.0M') && a.includes('$77M') && a.includes('$377M'), 'statements e1: answer carries the worked numbers');
    ok_(text(t, 'e2').includes('$398M') && text(t, 'e2').includes('$52M'), 'statements e2: answer carries $398M and $52M');
    // the bars add up to the $420M of revenue
    const b = barsIn(t, 'Use of the $420M of revenue ($M)');
    near(b.items.reduce((s, i) => s + i.value, 0), 420, 'statements bars: the six uses add up to $420M', 1e-9);
  }

  // ---- balance-sheet-assets ----
  {
    const t = balanceSheetAssetsTopic;
    eq(1_000_000 + 60_000 + 25_000 + 15_000, 1_100_000, 'assets e1: equipment cost');
    const dep = (10 - 1) / 5;
    near(dep, 1.8, 'assets e1: annual depreciation', 1e-9);
    near(dep * 3, 5.4, 'assets e1: accumulated depreciation', 1e-9);
    near(10 - dep * 3, 4.6, 'assets e1: book value after 3 years', 1e-9);
    near(5.5 - 4.6, 0.9, 'assets e1: gain at $5.5M', 1e-9);
    near(4.0 - 4.6, -0.6, 'assets e1: loss at $4.0M', 1e-9);
    const a1 = text(t, 'e1');
    ok_(a1.includes('$1,100,000') && a1.includes('$1.8M') && a1.includes('$5.4M') && a1.includes('$4.6M') && a1.includes('$0.9M gain') && a1.includes('$0.6M loss'), 'assets e1: answer carries the worked numbers');
    // inventory
    const revenue = 1200 * 90;
    eq(revenue, 108000, 'assets e2: revenue');
    const fifo = 1000 * 40 + 200 * 50;
    const lifo = 1000 * 50 + 200 * 40;
    const avgUnit = (40000 + 50000) / 2000;
    const avg = 1200 * avgUnit;
    eq(fifo, 50000, 'assets e2: FIFO cost of goods sold');
    eq(lifo, 58000, 'assets e2: LIFO cost of goods sold');
    eq(avgUnit, 45, 'assets e2: average unit cost');
    eq(avg, 54000, 'assets e2: average cost of goods sold');
    eq(revenue - fifo, 58000, 'assets e2: FIFO gross profit');
    eq(revenue - lifo, 50000, 'assets e2: LIFO gross profit');
    eq(revenue - avg, 54000, 'assets e2: average gross profit');
    eq(800 * 50, 40000, 'assets e2: FIFO ending inventory');
    eq(800 * 40, 32000, 'assets e2: LIFO ending inventory');
    eq(800 * avgUnit, 36000, 'assets e2: average ending inventory');
    eq(90000 - fifo, 40000, 'assets e2: FIFO ending = available minus sold');
    eq(90000 - lifo, 32000, 'assets e2: LIFO ending = available minus sold');
    eq(lifo - fifo, 8000, 'assets e2: gap between methods');
    const a2 = text(t, 'e2');
    ok_(['$50,000', '$58,000', '$40,000', '$32,000', '$54,000', '$36,000', '$8,000'].every((x) => a2.includes(x)), 'assets e2: answer carries the worked numbers');
    const gp = barsIn(t, 'Gross profit by method ($)');
    eq(gp.items.map((i) => i.value).join(), [revenue - fifo, revenue - avg, revenue - lifo].join(), 'assets bars: gross profit by method');
    // receivables and intangibles
    near(0.04 * 30, 1.2, 'assets e3: allowance', 1e-9);
    near(30 - 1.2, 28.8, 'assets e3: net realizable value', 1e-9);
    near(30 - 0.5 - (1.2 - 0.5), 28.8, 'assets e3: net realizable value after the write-off', 1e-9);
    near(12 / 10, 1.2, 'assets e3: yearly amortization', 1e-9);
    near(12 - 4 * 1.2, 7.2, 'assets e3: book value after 4 years', 1e-9);
    const a3 = text(t, 'e3');
    ok_(['$1.2M', '$28.8M', '$29.5M', '$0.7M', '$7.2M'].every((x) => a3.includes(x)), 'assets e3: answer carries the worked numbers');
    // depreciation bars
    const bv = barsIn(t, 'Book value at the end of each year ($M)');
    bv.items.forEach((i, y) => near(i.value, 10 - dep * y, `assets bars: book value after year ${y}`, 1e-9));
    near(bv.items.at(-1).value, 1, 'assets bars: ends at the residual value', 1e-9);
  }

  // ---- balance-sheet-liabilities-equity ----
  {
    const t = balanceSheetLiabilitiesEquityTopic;
    const current = 5 + 6 + 62 + 10;
    eq(current, 83, 'liabilities e1: current liabilities');
    eq(current + 290, 373, 'liabilities e1: total liabilities');
    near(30 * 0.06 * (4 / 12), 0.6, 'liabilities e1: interest', 1e-9);
    const a = text(t, 'e1');
    ok_(a.includes('$83M') && a.includes('$290M') && a.includes('$373M') && a.includes('$0.6M'), 'liabilities e1: answer carries the worked numbers');
    eq(0 + 40 - 5, 35, 'liabilities e3: retained earnings');
    eq(300 + 35, 335, 'liabilities e3: owners’ equity');
    const b = barsIn(t, 'Liabilities by item ($M)');
    eq(b.items.reduce((s, i) => s + i.value, 0), 373, 'liabilities bars: items add up to $373M');
  }

  // ---- cost-volume-profit (answers are generated from the same maths) ----
  {
    const t = cvpTopic;
    const cm = contributionMargin(m);
    eq(cm, 60, 'cvp e1: contribution margin');
    eq(unitsForProfit(m), 400_000, 'cvp e1: break-even tickets');
    eq(unitsForProfit(m, 6_000_000), 500_000, 'cvp e1: tickets for $6M profit');
    eq(600_000 * cm - m.fixed, 12_000_000, 'cvp e1: profit at 600,000 tickets');
    near((600_000 - 400_000) / 600_000, 1 / 3, 'cvp e1: margin of safety', 1e-12);
    const a1 = text(t, 'e1');
    ok_(['$60', '66.7%', '400,000', '$36,000,000', '500,000', '$12,000,000', '33.3%'].every((x) => a1.includes(x)), 'cvp e1: answer carries the worked numbers');
    eq(unitsForProfit({ ...m, fixed: m.fixed + 3_000_000 }), 450_000, 'cvp e2: rent up');
    eq(unitsForProfit({ ...m, price: 80 }), 480_000, 'cvp e2: price down');
    eq(unitsForProfit({ ...m, variable: 35 }), 436_364, 'cvp e2: variable cost up (24,000,000 ÷ 55 = 436,363.6 rounded up)');
    const a2 = text(t, 'e2');
    ok_(['450,000', '480,000', '436,364', '436,363.6'].every((x) => a2.includes(x)), 'cvp e2: answer carries the worked numbers');
    const bars = barsIn(t, 'Break-even tickets by scenario');
    eq(bars.items.map((i) => i.value).join(), [480_000, 450_000, 436_364, 400_000].join(), 'cvp bars: break-even by scenario');
  }
}
