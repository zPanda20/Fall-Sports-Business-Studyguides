// Strategy topics: structure of the exam questions, the visual blocks, and the numbers used in the new examples.
import { whatIsStrategyTopic } from '../../src/data/strategy/what-is-strategy.js';
import { strategicLeadershipTopic } from '../../src/data/strategy/strategic-leadership.js';
import { pestelTopic } from '../../src/data/strategy/pestel.js';
import { fiveForcesTopic } from '../../src/data/strategy/five-forces.js';
import { internalAnalysisTopic } from '../../src/data/strategy/internal-analysis.js';
import { swotTopic } from '../../src/data/strategy/swot.js';
import { performanceBusinessModelsTopic } from '../../src/data/strategy/performance-business-models.js';

export default function ({ eq, ok_ }) {
  const all = [
    whatIsStrategyTopic,
    strategicLeadershipTopic,
    pestelTopic,
    fiveForcesTopic,
    internalAnalysisTopic,
    swotTopic,
    performanceBusinessModelsTopic,
  ].filter(Boolean);
  eq(all.length, 7, 'all seven strategy topics load');

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
}
