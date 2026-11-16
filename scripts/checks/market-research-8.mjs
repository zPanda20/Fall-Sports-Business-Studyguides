// Checks for the Market Research Session 8 (questionnaire design) topic: structure, review links, and the small
// calculations in the fictional Harbor City Rovers example and the real Pew figures.
import { questionnaireDesignTopic as t } from '../../src/data/market-research/questionnaire-design.js';

const walk = (v, f) => {
  if (Array.isArray(v)) v.forEach((x) => walk(x, f));
  else if (v && typeof v === 'object') {
    f(v);
    Object.values(v).forEach((x) => walk(x, f));
  }
};

export default function ({ eq, ok_, near }) {
  const tag = t.id;
  eq(t.course, 'market-research', `${tag}: course`);
  eq(t.sessions, 'Session 8', `${tag}: session`);
  eq(t.sports.universe, 'harbor', `${tag}: fictional example uses Harbor City Rovers`);
  ok_(t.plain.length >= 12 && t.terms.length >= 12 && t.cards.length >= 10, `${tag}: enough slides, terms and cards`);
  ok_(t.real.slides.some((s) => s.blocks.some((b) => b.type === 'sources' && b.items.length >= 2 && b.items.every((i) => /^https:\/\//.test(i.url)))), `${tag}: real example has https sources`);
  ok_(/(19|20)\d\d/.test(JSON.stringify(t.real)), `${tag}: real example carries a date`);
  eq(t.videos.length, 0, `${tag}: no videos`);

  const mcq = t.questions.filter((q) => q.type === 'mcq');
  ok_(mcq.length >= 8, `${tag}: at least 8 MCQs`);
  ok_(t.questions.some((q) => q.type === 'open'), `${tag}: has an open exercise`);
  ok_(new Set(mcq.map((q) => q.answer)).size >= 1, `${tag}: answers present`);
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

  // Review links point at the slides they claim to
  const titleOf = (sec, i) => (sec === 'plain' ? t.plain : t[sec].slides)[i].title;
  ok_(/Question order/.test(titleOf('plain', 2)), `${tag}: slide 2 is the question order`);
  ok_(/Nominal/.test(titleOf('plain', 11)), `${tag}: slide 11 is measurement levels`);
  ok_(/Independent/.test(titleOf('plain', 14)), `${tag}: slide 14 is the variables`);

  // Real example: Pew figures
  near(60 - 48, 12, 'questionnaire: jobs vs good jobs gap, points', 1e-9);
  const pewBars = t.real.slides[0].blocks.find((b) => b.type === 'bars').items.map((i) => i.value);
  eq(pewBars.join(), '60,48', 'questionnaire: Pew bar values');
  const orderBars = t.real.slides[2].blocks.find((b) => b.type === 'bars').items.map((i) => i.value);
  eq(orderBars.join(), '88,78', 'questionnaire: Pew order-effect bar values');
  near(88 - 78, 10, 'questionnaire: December 2008 order effect, points', 1e-9);
  near(45 - 37, 8, 'questionnaire: October 2003 order effect, points', 1e-9);
  near(68 - 43, 25, 'questionnaire: Iraq favor drop with the casualty clause, points', 1e-9);
  near(51 - 44, 7, 'questionnaire: terminally ill wording gap, points', 1e-9);

  // Harbor City Rovers: the double-barrelled example
  near((2.6 + 4.2) / 2, 3.4, 'questionnaire: combined satisfaction average', 1e-9);
  const rb = t.sports.slides[2].blocks.find((b) => b.type === 'bars').items;
  ok_(rb.some((i) => i.value === 3.4) && rb.some((i) => i.value === 2.6) && rb.some((i) => i.value === 4.2), 'questionnaire: Rovers bars match the text');
  ok_(rb.every((i, k) => k === 0 || rb[k - 1].value >= i.value), 'questionnaire: Rovers bars are sorted high to low');
}
