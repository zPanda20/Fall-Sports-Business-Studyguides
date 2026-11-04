// Checks for the Market Research topics for Sessions 4, 5 and 6: structure, review links, figures and the
// small calculations shown in the fictional Harbor City Rovers examples.
import { literatureReviewTopic } from '../../src/data/market-research/literature-review.js';
import { measurementValidityTopic } from '../../src/data/market-research/measurement-validity.js';
import { quantitativeOverviewTopic } from '../../src/data/market-research/quantitative-overview.js';

const walk = (v, f) => {
  if (Array.isArray(v)) v.forEach((x) => walk(x, f));
  else if (v && typeof v === 'object') {
    f(v);
    Object.values(v).forEach((x) => walk(x, f));
  }
};

export default function ({ eq, ok_, near }) {
  const topics = [literatureReviewTopic, measurementValidityTopic, quantitativeOverviewTopic];
  const ids = ['literature-review', 'measurement-validity', 'quantitative-overview'];

  topics.forEach((t, k) => {
    const tag = t.id;
    eq(t.id, ids[k], `${tag}: id`);
    eq(t.course, 'market-research', `${tag}: course`);
    eq(t.sports.universe, 'harbor', `${tag}: fictional example uses Harbor City Rovers`);
    ok_(t.plain.length >= 8 && t.terms.length >= 10 && t.cards.length >= 6, `${tag}: enough slides, terms and cards`);
    ok_(t.real.slides.some((s) => s.blocks.some((b) => b.type === 'sources' && b.items.length > 0)), `${tag}: real example has a sources slide`);
    ok_(JSON.stringify(t.real).includes('2023') || JSON.stringify(t.real).includes('1985') || JSON.stringify(t.real).includes('2014'), `${tag}: real example carries dates`);

    // MCQs
    const mcq = t.questions.filter((q) => q.type === 'mcq');
    ok_(mcq.length >= 6, `${tag}: at least 6 MCQs`);
    ok_(t.questions.some((q) => q.type === 'open'), `${tag}: has an open exercise`);
    const qids = new Set();
    for (const q of t.questions) {
      ok_(!qids.has(q.id), `${tag}/${q.id}: unique id`);
      qids.add(q.id);
      if (q.type === 'mcq') {
        eq(q.options.length, 4, `${tag}/${q.id}: four options`);
        ok_(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, `${tag}/${q.id}: answer index in range`);
        ok_(q.explanation && q.explanation.length > 20, `${tag}/${q.id}: has an explanation`);
        eq(new Set(q.options).size, 4, `${tag}/${q.id}: options are distinct`);
      } else {
        ok_(Array.isArray(q.answer) && q.answer.length > 0, `${tag}/${q.id}: open question has a model answer`);
      }
      const r = q.review;
      ok_(r && ['plain', 'real', 'sports'].includes(r.section), `${tag}/${q.id}: review section`);
      const slides = r.section === 'plain' ? t.plain : t[r.section].slides;
      ok_(Number.isInteger(r.slide) && r.slide >= 0 && r.slide < slides.length, `${tag}/${q.id}: review slide exists`);
    }

    // exam-level questions
    ok_(t.exam.length >= 2 && t.exam.length <= 3, `${tag}: 2-3 exam questions`);
    for (const e of t.exam) {
      ok_(e.marks > 0 && e.q && e.answer.length > 0 && e.marking.length > 0, `${tag}/${e.id}: exam question complete`);
    }

    // visual blocks and figures
    let visuals = 0;
    walk([t.plain, t.real.slides, t.sports.slides], (o) => {
      if (['flow', 'cycle', 'bars'].includes(o.type)) visuals++;
      if (o.type === 'figure') {
        ok_(/^mr-[a-z0-9-]+\.png$/.test(o.src) && o.alt && o.need, `${tag}: figure ${o.src} has src, alt and need`);
      }
    });
    ok_(visuals >= 1, `${tag}: at least one flow, cycle or bars block`);
  });

  // Literature review example: papers left after each step
  const bars = literatureReviewTopic.sports.slides[1].blocks.find((b) => b.type === 'bars').items.map((i) => i.value);
  eq(bars.join(), '240,200,60,24,15', 'literature: papers left at each step');
  eq(240 - 40, 200, 'literature: 40 duplicates removed');
  ok_(bars.every((v, i) => i === 0 || v < bars[i - 1]), 'literature: the funnel only narrows');

  // Measurement example: Fan Loyalty Score
  near((6 + 7 + 5 + 6) / 4, 6.0, 'measurement: Fan A score');
  near((3 + 4 + 2 + 3) / 4, 3.0, 'measurement: Fan B score');

  // Quantitative example: occupancy
  near(40500 / 45000, 0.9, 'quant: Northgate occupancy');
  near(24000 / 30000, 0.8, 'quant: Rovers occupancy');
  near(13000 / 20000, 0.65, 'quant: Eastvale occupancy');
  const occ = quantitativeOverviewTopic.sports.slides[1].blocks.find((b) => b.type === 'bars').items.map((i) => i.value);
  eq(occ.join(), '90,80,65', 'quant: bar values match the table');
}
