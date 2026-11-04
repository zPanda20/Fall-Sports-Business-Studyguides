// International Sports Governance: structure of the exam questions and visual blocks, and the numbers used in the worked examples.
import { governanceLevelsTopic } from '../../src/data/sport-governance/governance-levels.js';
import { systemicGovernanceStakeholdersTopic } from '../../src/data/sport-governance/systemic-governance-stakeholders.js';
import { olympicVsNonOlympicTopic } from '../../src/data/sport-governance/olympic-vs-non-olympic.js';
import { organizationalGovernanceTopic } from '../../src/data/sport-governance/organizational-governance.js';
import { fifaReformsTopic } from '../../src/data/sport-governance/fifa-reforms.js';
import { politicalGovernanceAutonomyTopic } from '../../src/data/sport-governance/political-governance-autonomy.js';
import { competitiveBalanceIntegrityTopic } from '../../src/data/sport-governance/competitive-balance-integrity.js';

export default function ({ eq, ok_, near }) {
  const all = [
    governanceLevelsTopic,
    systemicGovernanceStakeholdersTopic,
    olympicVsNonOlympicTopic,
    organizationalGovernanceTopic,
    fifaReformsTopic,
    politicalGovernanceAutonomyTopic,
    competitiveBalanceIntegrityTopic,
  ].filter(Boolean);
  eq(all.length, 7, 'all seven governance topics load');

  const blockTypes = new Set(['p', 'big', 'bullets', 'steps', 'formulas', 'columns', 'kpis', 'table', 'chart', 'callout', 'forces', 'sources', 'flow', 'cycle', 'bars', 'figure', 'balance', 'sheet']);
  const walk = (slides, fn) => slides.forEach((s) => s.blocks.forEach(fn));

  for (const t of all) {
    ok_(t.course === 'sport-governance', `${t.id}: belongs to sport-governance`);
    ok_(Array.isArray(t.exam) && t.exam.length >= 2 && t.exam.length <= 3, `${t.id}: 2 or 3 exam questions`);
    const ids = new Set();
    for (const e of t.exam) {
      ok_(!ids.has(e.id), `${t.id}/${e.id}: unique exam id`);
      ids.add(e.id);
      ok_(e.marks > 0, `${t.id}/${e.id}: has marks`);
      ok_(e.answer.length >= 3 && e.marking.length >= 2, `${t.id}/${e.id}: model answer and marking`);
      const m = e.marking.map((l) => Number((l.match(/^(\d+) marks?/) || [])[1])).filter((n) => !Number.isNaN(n));
      eq(m.reduce((a, b) => a + b, 0), e.marks, `${t.id}/${e.id}: marking lines add up to the marks`);
    }
    const mcq = t.questions.filter((q) => q.type === 'mcq');
    ok_(mcq.length >= 6, `${t.id}: at least 6 MCQs`);
    ok_(t.questions.some((q) => q.type === 'open'), `${t.id}: has an open question`);
    for (const q of mcq) ok_(q.answer >= 0 && q.answer < q.options.length, `${t.id}/${q.id}: answer index in range`);
    for (const part of [t.plain, t.real.slides, t.sports.slides]) {
      walk(part, (b) => ok_(blockTypes.has(b.type), `${t.id}: known block type ${b.type}`));
    }
  }

  // FIFA reforms
  const fifa = fifaReformsTopic;
  eq(9 + 5, 14, 'FIFA: 9 officials + 5 corporate executives = 14 defendants');
  eq(4 + 1, 5, 'FIFA: 4 sports marketing executives + 1 intermediary = 5 corporate executives');
  eq(3 * 4, 12, 'FIFA: three four-year terms = 12 years');
  eq(26 - 9, 17, 'FIFA: standing committees cut by 17');
  ok_(179 + 22 === 201, 'FIFA: votes cast 179 + 22 = 201');
  ok_(fifa.plain.some((s) => s.blocks.some((b) => b.type === 'kpis' && b.items.some((k) => k.value === '179 to 22'))), 'FIFA: vote shown as 179 to 22');

  // Competitive balance: the revenue pool example (four clubs, 20% pooled, shared equally)
  const rev = [240, 120, 80, 60];
  const total = rev.reduce((a, b) => a + b, 0);
  eq(total, 500, 'Pool: total revenue 500');
  const pool = total * 0.2;
  eq(pool, 100, 'Pool: 20% of 500 = 100');
  const share = pool / rev.length;
  eq(share, 25, 'Pool: equal share = 25 each');
  const after = rev.map((r) => r - r * 0.2 + share);
  eq(after.join(','), '217,121,89,73', 'Pool: revenue after the pool');
  eq(after.reduce((a, b) => a + b, 0), 500, 'Pool: total unchanged');
  near(rev[0] / rev[3], 4.0, 'Pool: ratio before', 0.001);
  near(after[0] / after[3], 3.0, 'Pool: ratio after is about 3.0', 0.05);
  eq(rev[0] * 0.2 - share, 23, 'Pool: Club A net loss of 23');

  // The numbers shown in the pool slides must match the data used above
  const bars = [];
  walk(competitiveBalanceIntegrityTopic.sports.slides, (b) => { if (b.type === 'bars') bars.push(b.items.map((i) => i.value)); });
  eq(bars[0].join(','), rev.join(','), 'Pool slides: bars before');
  eq(bars[1].join(','), after.join(','), 'Pool slides: bars after');

  // F1 cap and NBA lottery figures
  eq(215 - 135, 80, 'F1: 2026 cap is 80 above 2025');
  eq(14 * 3, 42, 'NBA: the three worst teams share 42% of the top-pick chances');
  near(14 * 3 + 12.5, 54.5, 'NBA: top four teams', 0.001);
  eq(58 - 27, 31, 'Tyson v Paul: age gap of 31 years');

  // Other governance examples
  near((4 / 35) * 100, 11.4, 'Organizational: 4 of 35 is about 11%', 0.1);
  near((7 / 20) * 100, 35, 'Organizational: 7 of 20 is 35%', 0.001);
  eq(600 * 0.9, 540, 'Olympic vs non-Olympic: 90% of 600 = 540');
  eq(180 + 120 + 150 + 60 + 30, 540, 'Olympic vs non-Olympic: spend lines add up to 540');
  eq(150 + 60 + 30, 240, 'Olympic vs non-Olympic: member grants, development and prizes = 240');
  near((240 / 600) * 100, 40, 'Olympic vs non-Olympic: 240 of 600 is 40%', 0.001);
  eq(31 + 8 + 36 + 5, 80, 'Olympic vs non-Olympic: recipient groups listed on the slides');
}
