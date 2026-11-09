// Techway: the course is wired up, every topic is well formed, exam marks add up, review links point at real slides.
import { topics, courses, universes, getCourse } from '../../src/data/index.js';

export default function ({ eq, ok_ }) {
  const course = getCourse('techway');
  ok_(course, 'techway course exists');
  ok_(!course.noExam, 'techway has an exam');
  ok_(universes[course.universe], 'techway universe exists');
  const units = course.blocks.flatMap((b) => b.units);
  const mine = topics.filter((t) => t.course === 'techway');
  eq(units.length, 13, 'techway outline has 13 units');
  eq(mine.length, 13, 'techway has 13 topics');
  for (const u of units) ok_(mine.some((t) => t.id === u.id), `outline unit ${u.id} has a topic`);
  eq(new Set(mine.map((t) => t.id)).size, mine.length, 'techway topic ids are unique');
  ok_(courses.filter((c) => c.id === 'techway').length === 1, 'techway listed once');

  const known = new Set(['sources', 'p', 'big', 'bullets', 'steps', 'columns', 'kpis', 'table', 'callout', 'flow']);
  for (const t of mine) {
    eq(t.sports.universe, 'beacon', `${t.id}: uses the Beacon universe`);
    const sections = { plain: t.plain, real: t.real.slides, sports: t.sports.slides };
    for (const [name, slides] of Object.entries(sections)) {
      ok_(Array.isArray(slides) && slides.length >= 2, `${t.id}: ${name} has slides`);
      for (const s of slides) {
        ok_(s.title && s.blocks?.length, `${t.id}/${name}: slide has a title and blocks`);
        for (const b of s.blocks) {
          ok_(known.has(b.type), `${t.id}/${name}: known block type ${b.type}`);
          if (b.type === 'table') for (const r of b.rows) eq(r.length, b.head.length, `${t.id}/${name}: table row width`);
          if (b.type === 'flow' || b.type === 'columns') ok_(b.items.every((i) => i.title && i.text), `${t.id}/${name}: ${b.type} items complete`);
          if (b.type === 'kpis') ok_(b.items.every((i) => i.label && i.value), `${t.id}/${name}: kpi items complete`);
        }
      }
    }
    ok_(t.terms.length >= 8 && t.terms.every((x) => x.term && x.def), `${t.id}: key terms`);
    ok_(t.cards.length >= 8 && t.cards.every((x) => x.front && x.back), `${t.id}: flashcards`);

    const qids = new Set();
    for (const q of t.questions) {
      ok_(!qids.has(q.id), `${t.id}/${q.id}: unique question id`);
      qids.add(q.id);
      ok_(q.options.length >= 3 && q.options.length <= 5, `${t.id}/${q.id}: 3 to 5 options`);
      ok_(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${t.id}/${q.id}: answer index in range`);
      ok_(new Set(q.options).size === q.options.length, `${t.id}/${q.id}: options are distinct`);
      ok_(q.explanation && q.review, `${t.id}/${q.id}: explanation and review link`);
      const target = sections[q.review.section];
      ok_(target && q.review.slide >= 0 && q.review.slide < target.length, `${t.id}/${q.id}: review slide ${q.review.section}/${q.review.slide} exists`);
    }
    ok_(t.questions.length >= 10, `${t.id}: at least 10 multiple-choice questions`);

    ok_(t.exam.length >= 2 && t.exam.length <= 3, `${t.id}: 2 or 3 exam questions`);
    for (const e of t.exam) {
      ok_(e.q && e.answer.length > 0 && e.marking.length > 0, `${t.id}/${e.id}: question, answer, marking`);
      const marks = e.marking.map((m) => Number((m.match(/\((\d+)\)\s*$/) || [])[1]));
      ok_(marks.every((n) => Number.isFinite(n) && n > 0), `${t.id}/${e.id}: every marking line shows its marks`);
      eq(marks.reduce((a, b) => a + b, 0), e.marks, `${t.id}/${e.id}: marking adds up to ${e.marks}`);
    }
    eq(t.videos.length, 0, `${t.id}: no videos added`);
  }
}
