// Every question has to make sense on its own. The daily quiz and exam practice show one question at a time,
// without the lesson around it, so a stem that points at a hidden table, slide, speaker or "previous question"
// cannot be answered. This guard scans every question stem, option and flashcard front for that kind of pointer,
// and pins the specific numeric questions that once left out their figures.
import { topics, courses, getTopic } from '../../src/data/index.js';

const BANNED = /(?:in|from|using) the previous question|the (?:previous|last) question|on the slides?|according to the (slides?|lectures?|sessions?)|the guest speaker|session \d+ takeaways|in the lectures?|from the lectures?|lecture ideas|this session|the five independent reviews|the new coke case|the original prompt|the model accessible note/i;

// Multiple-choice questions must test course content, not what a particular assignment brief says
// (grading weights, required files, section lengths). Those are not exam questions.
const BRIEF = /the brief (says|suggests|advises|states|asks)|group (assignment|project)|grading|criteria carry|points in the grad|required (file|for the)|GROUP_XX|which file is|weight[s]? (each|30)/i;

function texts(item) {
  const out = [];
  if (typeof item.q === 'string') out.push(item.q);
  if (typeof item.front === 'string') out.push(item.front);
  if (Array.isArray(item.options)) for (const o of item.options) if (typeof o === 'string') out.push(o);
  return out;
}

export default function ({ ok_ }) {
  const all = [];
  for (const t of topics) {
    for (const key of ['questions', 'exam', 'flashcards']) {
      for (const item of t[key] || []) all.push({ where: `${t.id}/${key}/${item.id ?? item.front ?? item.q?.slice(0, 20)}`, item });
    }
  }
  for (const c of courses) for (const item of c.examBank || []) all.push({ where: `${c.id}/examBank/${item.id}`, item });
  ok_(all.length > 500, `question context: scanned ${all.length} questions`);
  for (const { where, item } of all) {
    for (const s of texts(item)) ok_(!BANNED.test(s), `question context: ${where} points at hidden material: "${s.slice(0, 70)}"`);
  }

  for (const { where, item } of all) {
    if (!Array.isArray(item.options)) continue;
    for (const s of texts(item)) ok_(!BRIEF.test(s), `question context: ${where} asks about an assignment brief, not course content: "${s.slice(0, 70)}"`);
  }

  // Numeric questions that once left out their figures.
  const find = (topicId, id) => (getTopic(topicId)?.questions || []).concat(getTopic(topicId)?.exam || []).find((x) => x.id === id);
  for (const id of ['q3', 'q4', 'q6']) {
    const q = find('cost-volume-profit', id);
    ok_(q && /\$90/.test(q.q) && /\$30/.test(q.q) && /24,000,000|\$24M|\$24 million/i.test(q.q), `question context: CVP ${id} states price, variable cost and fixed costs`);
  }
  const cb = find('competitive-balance-integrity', 'q6');
  ok_(cb && /240/.test(cb.q) && /120/.test(cb.q) && /80/.test(cb.q) && /60/.test(cb.q) && /20%/.test(cb.q), 'question context: competitive-balance ratio question lists the four revenues and the 20% pool');
}
