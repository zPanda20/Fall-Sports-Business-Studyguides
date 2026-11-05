// Checks for the Market Research Session 7 (sampling) topic and the group-project topic:
// structure, review links, and the small calculations in the fictional Harbor City Rovers examples.
import { samplingTopic } from '../../src/data/market-research/sampling.js';
import { groupProjectTopic } from '../../src/data/market-research/group-project.js';

const walk = (v, f) => {
  if (Array.isArray(v)) v.forEach((x) => walk(x, f));
  else if (v && typeof v === 'object') {
    f(v);
    Object.values(v).forEach((x) => walk(x, f));
  }
};

export default function ({ eq, ok_, near }) {
  const topics = [samplingTopic, groupProjectTopic];
  topics.forEach((t) => {
    const tag = t.id;
    eq(t.course, 'market-research', `${tag}: course`);
    eq(t.sports.universe, 'harbor', `${tag}: fictional example uses Harbor City Rovers`);
    ok_(t.plain.length >= 12 && t.terms.length >= 12 && t.cards.length >= 10, `${tag}: enough slides, terms and cards`);
    ok_(t.real.slides.some((s) => s.blocks.some((b) => b.type === 'sources' && b.items.length >= 2)), `${tag}: real example has sources`);
    ok_(/(19|20)\d\d/.test(JSON.stringify(t.real)), `${tag}: real example carries a date`);

    const mcq = t.questions.filter((q) => q.type === 'mcq');
    ok_(mcq.length >= 8, `${tag}: at least 8 MCQs`);
    ok_(t.questions.some((q) => q.type === 'open'), `${tag}: has an open exercise`);
    const answerSpots = new Set(mcq.map((q) => q.answer));
    ok_(answerSpots.size >= 2, `${tag}: correct answers are not all in the same position`);
    const qids = new Set();
    for (const q of t.questions) {
      ok_(!qids.has(q.id), `${tag}/${q.id}: unique id`);
      qids.add(q.id);
      if (q.type === 'mcq') {
        eq(q.options.length, 4, `${tag}/${q.id}: four options`);
        eq(new Set(q.options).size, 4, `${tag}/${q.id}: options are distinct`);
        ok_(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, `${tag}/${q.id}: answer index in range`);
        ok_(q.explanation && q.explanation.length > 20, `${tag}/${q.id}: has an explanation`);
      }
      const r = q.review;
      ok_(r && ['plain', 'real', 'sports'].includes(r.section), `${tag}/${q.id}: review section`);
      const slides = r.section === 'plain' ? t.plain : t[r.section].slides;
      ok_(r.slide >= 0 && r.slide < slides.length, `${tag}/${q.id}: review slide exists`);
    }
    ok_(t.exam.length >= 2 && t.exam.length <= 3, `${tag}: 2-3 exam questions`);
    for (const e of t.exam) {
      const total = e.marking.reduce((n, m) => n + Number((m.match(/\((\d+)\s*(?:,[^)]*)?\)\s*$/) || [0, 0])[1]), 0);
      eq(total, e.marks, `${tag}/${e.id}: marking points add up to the marks`);
    }
    let visuals = 0;
    walk([t.plain, t.real.slides, t.sports.slides], (o) => {
      if (['flow', 'cycle', 'bars'].includes(o.type)) visuals++;
    });
    ok_(visuals >= 2, `${tag}: at least two flow, cycle or bars blocks`);
  });

  // Sampling: the Harbor City Rovers satisfaction example
  const crowd = [12000, 9600, 2400];
  eq(crowd.reduce((a, b) => a + b, 0), 24000, 'sampling: crowd groups add to 24,000');
  near(12000 / 24000, 0.5, 'sampling: season-ticket share');
  near(9600 / 24000, 0.4, 'sampling: general admission share');
  near(2400 / 24000, 0.1, 'sampling: hospitality share');
  const weighted = 0.5 * 3.9 + 0.4 * 3.4 + 0.1 * 4.6;
  near(weighted, 3.77, 'sampling: weighted satisfaction');
  near(4.6 - weighted, 0.83, 'sampling: VIP-only overstatement');
  const bars = samplingTopic.sports.slides[1].blocks.find((b) => b.type === 'bars').items;
  ok_(bars.some((i) => i.value === 3.77) && bars.some((i) => i.value === 4.6), 'sampling: bar values match the table');
  eq([200, 160, 40].reduce((a, b) => a + b, 0), 400, 'sampling: strata add to 400');
  eq(400 * 0.5, 200, 'sampling: season-ticket stratum');
  eq(400 * 0.4, 160, 'sampling: general admission stratum');
  eq(400 * 0.1, 40, 'sampling: hospitality stratum');
  eq(12000 / 300, 40, 'sampling: systematic interval');
  eq(17 + 40 + 40, 97, 'sampling: third pick from start 17');
  near(310 / 400, 0.775, 'sampling: response rate');

  // Group project: grading weights and the t test example
  eq(15 + 20 + 25 + 20 + 10 + 10, 100, 'project: grading adds to 100');
  const gb = groupProjectTopic.plain[14].blocks.find((b) => b.type === 'bars').items.map((i) => i.value);
  eq(gb.reduce((a, b) => a + b, 0), 100, 'project: grading bars add to 100');
  near(5.1 - 4.4, 0.7, 'project: mean difference');
  const sp = Math.sqrt(((40 - 1) * 1.2 ** 2 + (40 - 1) * 1.3 ** 2) / 78);
  const t = (5.1 - 4.4) / (sp * Math.sqrt(2 / 40));
  near(t, 2.5, 'project: t statistic', 0.01);
  near((5.1 - 4.4) / sp, 0.56, 'project: Cohen d', 0.01);
}
