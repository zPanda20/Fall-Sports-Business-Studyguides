// Re-calculates the numbers used in Market Research topics 1 to 3 and checks the structure of the new fields.
import { whyMarketResearchTopic as t1 } from '../../src/data/market-research/why-market-research.js';
import { methodologyParadigmsTopic as t2 } from '../../src/data/market-research/methodology-paradigms.js';
import { researchQuestionProposalTopic as t3 } from '../../src/data/market-research/research-question-proposal.js';

export default function ({ eq, ok_ }) {
  // ---- Session 1: Harbor City Rovers ----
  eq(Math.round((14200 / 20000) * 100), 71, 'MR1: 14,200 of 20,000 seats is 71%');
  eq(14200 * 0.4, 5680, 'MR1: 40% of the 14,200 crowd is 5,680');
  eq(600 * 0.8, 480, 'MR1: 80% of 600 replies is 480');
  // L.E.K. survey: 28% avid + 19% casual = 47% fans
  eq(28 + 19, 47, 'MR1: L.E.K. avid plus casual fans is 47%');
  // Literary Digest: 2.4 million of 10 million is about a quarter
  eq(Math.round((2.4 / 10) * 100), 24, 'MR1: Literary Digest return rate is about 24%');
  eq(57 + 43, 100, 'MR1: Digest prediction adds to 100%');

  // ---- Session 2 ----
  eq(Math.round((994 / 4000) * 100), 25, 'MR2: 994 of about 4,000 core supporters is about a quarter');
  eq(51 + 48 + 1, 100, 'MR2: gender split adds to 100%');
  eq(6000 * 0.25, 1500, 'MR2: a quarter of 6,000 season-ticket holders is 1,500');
  const replies = [168, 126, 84, 42];
  eq(replies.reduce((a, b) => a + b, 0), 420, 'MR2: reasons add to 420 replies');
  eq(replies.map((r) => Math.round((r / 420) * 100)).join(), '40,30,20,10', 'MR2: reason shares are 40, 30, 20, 10 percent');

  // ---- structure of every topic ----
  for (const t of [t1, t2, t3]) {
    ok_(t.course === 'market-research', `${t.id}: course`);
    ok_(t.questions.filter((q) => q.type === 'mcq').length >= 6, `${t.id}: at least six MCQs`);
    ok_(t.questions.some((q) => q.type === 'open'), `${t.id}: has an open exercise`);
    ok_(Array.isArray(t.exam) && t.exam.length >= 2, `${t.id}: has exam-level questions`);
    for (const e of t.exam) {
      ok_(e.id && e.marks > 0 && e.q && e.answer.length > 0 && e.marking.length > 0, `${t.id}/${e.id}: exam question is complete`);
    }
    for (const q of t.questions.filter((x) => x.type === 'mcq')) {
      ok_(q.options.length === 4 && q.answer >= 0 && q.answer < 4, `${t.id}/${q.id}: four options and a valid answer`);
      ok_(q.review.slide < t.plain.length, `${t.id}/${q.id}: review points at a real slide`);
    }
    ok_(t.real.slides.at(-1).blocks.some((b) => b.type === 'sources'), `${t.id}: real example ends with sources`);
    ok_(t.sports.universe === 'harbor', `${t.id}: sports example uses Harbor City Rovers`);
  }
  // marks in each exam question add up to what the marking guide says
  for (const t of [t1, t2, t3]) {
    for (const e of t.exam) {
      const total = e.marking.reduce((sum, line) => sum + Number(/\((\d+)\)\s*$/.exec(line)?.[1] ?? NaN), 0);
      eq(total, e.marks, `${t.id}/${e.id}: marking guide adds up to ${e.marks} marks`);
    }
  }
}
