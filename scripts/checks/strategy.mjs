// Strategy topics: structure of the exam questions, the visual blocks, and the numbers used in the new examples.
import { whatIsStrategyTopic } from '../../src/data/strategy/what-is-strategy.js';
import { strategicLeadershipTopic } from '../../src/data/strategy/strategic-leadership.js';
import { pestelTopic } from '../../src/data/strategy/pestel.js';
import { fiveForcesTopic } from '../../src/data/strategy/five-forces.js';
import { internalAnalysisTopic } from '../../src/data/strategy/internal-analysis.js';
import { swotTopic } from '../../src/data/strategy/swot.js';
import { performanceBusinessModelsTopic } from '../../src/data/strategy/performance-business-models.js';
import { businessLevelStrategyTopic } from '../../src/data/strategy/business-level-strategy.js';
import { innovationPlatformsTopic } from '../../src/data/strategy/innovation-platforms.js';
import { examBank } from '../../src/data/strategy/exam-bank.js';

export default function ({ eq, ok_ }) {
  const all = [
    whatIsStrategyTopic,
    strategicLeadershipTopic,
    pestelTopic,
    fiveForcesTopic,
    internalAnalysisTopic,
    swotTopic,
    performanceBusinessModelsTopic,
    businessLevelStrategyTopic,
    innovationPlatformsTopic,
  ].filter(Boolean);
  eq(all.length, 9, 'all nine strategy topics load');

  const blockTypes = new Set(['p', 'big', 'bullets', 'steps', 'formulas', 'columns', 'kpis', 'table', 'chart', 'callout', 'forces', 'sources', 'flow', 'cycle', 'bars', 'figure']);
  const walk = (slides, fn) => slides.forEach((s) => s.blocks.forEach(fn));

  for (const t of all) {
    ok_(Array.isArray(t.exam) && t.exam.length >= 2 && t.exam.length <= 3, `${t.id}: 2 or 3 exam questions`);
    const ids = new Set();
    for (const e of t.exam) {
      ok_(!ids.has(e.id), `${t.id}/${e.id}: unique exam id`);
      ids.add(e.id);
      ok_(typeof e.q === 'string' && e.answer.length > 0 && e.marking.length > 0, `${t.id}/${e.id}: has question, answer and marking`);
      // every marking line ends with its marks in brackets, and they add up to the question's marks
      const marks = e.marking.map((m) => Number((m.match(/\((\d+)\)\s*$/) || [])[1]));
      ok_(marks.every((n) => Number.isFinite(n) && n > 0), `${t.id}/${e.id}: every marking line shows its marks`);
      eq(marks.reduce((a, b) => a + b, 0), e.marks, `${t.id}/${e.id}: marking lines add up to ${e.marks} marks`);
    }
    let visuals = 0;
    walk(t.plain, (b) => {
      ok_(blockTypes.has(b.type), `${t.id}: known block type ${b.type}`);
      if (['flow', 'cycle', 'bars', 'figure'].includes(b.type)) visuals++;
      if (b.type === 'cycle') ok_(b.items.length >= 3 && b.items.length <= 6, `${t.id}: a cycle has 3 to 6 steps`);
      if (b.type === 'figure') ok_(b.src.startsWith('bs-') && b.need.length > 20 && b.alt, `${t.id}: figure has a file name, alt text and a description of what to find`);
    });
    ok_(visuals >= 1, `${t.id}: at least one visual block`);
  }

  // hand calculations used in the new text
  const bars = (t) => t.plain.flatMap((s) => s.blocks).filter((b) => b.type === 'bars');
  const [valueBars] = bars(whatIsStrategyTopic);
  eq(valueBars.items[0].value, 100 - 60, 'Firm A value created = 100 − 60');
  eq(valueBars.items[1].value, 90 - 65, 'Firm B value created = 90 − 65');
  const e2 = whatIsStrategyTopic.exam.find((e) => e.id === 'e2');
  ok_(e2.answer[0].includes('$50') && e2.answer[0].includes('$55') && e2.answer[1].includes('$5'), 'exam: X = 120 − 70 = 50, Y = 100 − 45 = 55, gap 5');
  eq(120 - 70, 50, 'Firm X value');
  eq(100 - 45, 55, 'Firm Y value');
  const [carBars] = bars(internalAnalysisTopic);
  eq(carBars.items[1].value, 279449, 'Porsche 2025 deliveries as published on 16 Jan 2026');
  ok_(carBars.items[1].value / carBars.items[0].value > 18, 'Porsche sold at least eighteen times Ferrari’s ceiling');
  eq(310718 - 279449, 31269, 'Porsche fell by 31,269 cars');
  ok_(Math.round(((310718 - 279449) / 310718) * 100) === 10, 'Porsche deliveries fell about 10%');

  // ---- Session 6 and 7 arithmetic ----
  eq(120 - 70, 50, 'Kestrel Paddock Pass value created');
  eq(70 - 35, 35, 'Kestrel Basic Pass value created');
  eq(100 - 60, 40, 'Rival pass value created');
  eq(50 - 40, 10, 'Paddock Pass beats the rival by 10');
  eq(40 - 35, 5, 'Basic Pass trails the rival by 5');
  eq(100 - 70, 30, 'Basic Pass gives up 30 of value');
  eq(60 - 35, 25, 'Basic Pass saves 25 of cost');
  eq(120 - 100, 20, 'Paddock Pass adds 20 of value');
  eq(70 - 60, 10, 'Paddock Pass adds 10 of cost');
  ok_(Math.abs(910 / 16800 * 100 - 5.4) < 0.05, 'Decathlon net result is about 5.4% of net sales');
  eq(3 * 239, 717, 'Three years of WHOOP Peak');
  eq(717 - 199, 518, 'WHOOP Peak against a $199 band over three years');
  eq(350 + 6 * 36, 566, 'Oura three years, low end');
  eq(500 + 6 * 36, 716, 'Oura three years, high end');
  const whoopBars = innovationPlatformsTopic.real.slides.flatMap((sl) => sl.blocks).find((b) => b.type === 'bars');
  eq(whoopBars.items.map((i) => i.value).join(), '199,566,716,717', 'WHOOP and rivals three-year cost bars');
  ok_(whoopBars.items.every((it, k, a) => k === 0 || a[k - 1].value <= it.value), 'bars are in ascending order');

  // ---- Select-ALL exam bank ----
  const topicById = Object.fromEntries(all.map((t) => [t.id, t]));
  const slidesOf = (t, sec) => (sec === 'plain' ? t.plain : sec === 'real' ? t.real.slides : t.sports.slides);
  ok_(examBank.length >= 40, 'exam bank: at least 40 select-all questions');
  eq(new Set(examBank.map((q) => q.id)).size, examBank.length, 'exam bank: unique ids');
  for (const q of examBank) {
    const t = topicById[q.topic];
    ok_(t, `${q.id}: topic exists`);
    ok_(q.options.length >= 4 && q.options.length <= 5, `${q.id}: 4 or 5 options`);
    eq(new Set(q.options).size, q.options.length, `${q.id}: options are distinct`);
    ok_(q.answers.length >= 2 && q.answers.length < q.options.length, `${q.id}: more than one correct answer, but not all options`);
    ok_(q.answers.every((a) => Number.isInteger(a) && a >= 0 && a < q.options.length) && new Set(q.answers).size === q.answers.length, `${q.id}: valid answer indexes`);
    ok_(/select all correct answers|choose all correct answers/i.test(q.q), `${q.id}: question says to select ALL correct answers`);
    ok_(q.explanation && q.explanation.length > 20, `${q.id}: has an explanation`);
    const slides = t && slidesOf(t, q.review.section);
    ok_(slides && q.review.slide >= 0 && q.review.slide < slides.length, `${q.id}: review points at a real slide`);
    ok_(!/\[object|\bNaN\b|\$\{/.test(JSON.stringify(q)), `${q.id}: no broken text`);
  }
  // every topic has select-all questions
  for (const id of Object.keys(topicById)) ok_(examBank.some((q) => q.topic === id), `exam bank covers ${id}`);
}
