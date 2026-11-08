import { on } from './events.js';
import { getPrefs, setPref } from './prefs.js';
import { say, amend } from './manager.js';
import { line } from './dialogue.js';
import { getTopic } from '../data/index.js';
import { getProgress } from '../lib/progress.js';
import { CHARACTERS, REWARD_ART_READY, ROLE, SHARP, SUP } from './assets.js';

// Turns what the student does into what the companions say. This file decides; it never draws anything
// and never grades anything. Right and wrong come from the quiz pages themselves.
//
// Rules in short:
//  - only one character speaks at a time; the supportive ones (Seraph, Cosmic) lead on learning, the sharp ones
//    (Demon, Hexie) on their own sarcasm. When two of a kind are on, one is picked at random each time
//  - small reactions are occasional and have a cooldown; big moments (perfect score, meltdown) are rarer
//  - Quiet Study Mode and the pop-up frequency setting are always respected

const S = {
  wrongRun: 0, // wrong answers in a row
  melted: false, // Demon has had his meltdown in this quiz
  wrongByTopic: {},
  lastAt: 0, // last automatic reaction
  flash: { n: 0, at: 0 }, // flashcards marked recently
  lastQuizAt: 0,
  revise: null, // { topicId, at } after a middling or low result
  low: {}, // topicId -> { ratio, at } of the last weak result, to notice an improvement after revising
};
export const session = S;

const FREQ = { rare: { chance: 0.5, gap: 60_000 }, normal: { chance: 1, gap: 20_000 }, lively: { chance: 1.6, gap: 8_000 } };
const freq = () => FREQ[getPrefs().popups] || FREQ.normal;
const roll = (p) => Math.random() < Math.min(1, p * freq().chance);
const cooled = () => Date.now() - S.lastAt >= freq().gap;
const stamp = () => {
  S.lastAt = Date.now();
};
const clip = (s, n = 280) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

const wants = {
  seraph: () => getPrefs().seraph,
  cosmic: () => getPrefs().cosmic,
  demon: () => getPrefs().demon && getPrefs().demonQuiz,
  hexie: () => getPrefs().hexie && getPrefs().demonQuiz,
};
const level = () => getPrefs().sarcasm;
// One of the characters of this kind that is switched on, or null.
const pickOf = (list) => {
  const on = list.filter((w) => wants[w]());
  return on.length ? on[Math.floor(Math.random() * on.length)] : null;
};
const sup = () => pickOf(SUP);
const sharp = () => pickOf(SHARP);
const isNew = (who) => who === 'hexie' || who === 'cosmic';
const reactionFor = (who, sup_, sharp_) => (ROLE[who] === 'sup' ? sup_ : sharp_);

// Rewards: art for these is still to come, so for now they are just earned and counted.
export function earn(kind, n = 1) {
  const r = { ...getPrefs().rewards };
  r[kind] = (r[kind] || 0) + n;
  setPref('rewards', r);
}
const earnFor = (n = 1) => {
  const p = getPrefs();
  if (p.seraph || p.cosmic) earn('snacks', n);
  if (p.demon || p.hexie) earn('hammers', n);
};

// ---- answers ----
function explainAction(who, explanation) {
  if (!explanation) return [];
  return [
    {
      label: 'Explain it',
      keep: true,
      fn: () => amend({ text: clip(explanation, 420), actions: [{ label: 'Got it', run: 'close' }], compact: false }, reactionFor(who, 'eureka', 'scholar')),
    },
  ];
}

// Cosmic has a line for each length of losing streak; Seraph has one line for any miss.
const wrongKey = (who, run) => (who === 'seraph' ? 'wrong' : run === 2 ? 'wrong2' : run === 3 ? 'wrong3' : 'wrong1');

function onAnswer(p) {
  const A = sup();
  const D = sharp();
  if (p.correct) {
    const run = S.wrongRun;
    S.wrongRun = 0;
    if (run >= 2) return comeback();
    if (!cooled() || !roll(0.35)) return undefined;
    if (D && (!A || Math.random() < 0.5)) return fire(D, 'correct', 'respect', { priority: 3, ttl: 5000, compact: true });
    if (A) {
      if (Math.random() < 0.06) return fire(A, 'oops', 'stumble', { priority: 3, ttl: 5500, compact: true });
      return fire(A, 'correct', Math.random() < 0.5 ? 'greet' : 'proud', { priority: 3, ttl: 4500, compact: true });
    }
    return undefined;
  }

  S.wrongRun += 1;
  const key = p.topicId || p.courseId;
  S.wrongByTopic[key] = (S.wrongByTopic[key] || 0) + 1;
  const actions = (who) => explainAction(who, p.explanation);

  // Three misses in a row is a sharp character's big moment (once per quiz).
  if (D && S.wrongRun >= 3 && !S.melted) {
    S.melted = true;
    stamp();
    return fire(D, 'wrong3', 'meltdown', { priority: 3, ttl: 8000, compact: true, actions: actions(D), force: true });
  }

  // Repeated misses on one topic: the supportive character helps in a practical way, once per topic.
  // (Cosmic gives his own line for the third miss in a row first; the topic nudge follows on the next miss.)
  const cosmicThird = A === 'cosmic' && !D && S.wrongRun === 3 && !S.melted;
  if (S.wrongByTopic[key] >= 3 && A && !cosmicThird && p.topicId && getTopic(p.topicId)) {
    const t = getTopic(p.topicId);
    const ok = say(
      A,
      { text: line(A, 'wrongTopic'), compact: true, actions: [{ label: `Open ${t.title}`, to: `/topic/${t.id}`, primary: true }, ...actions(A).slice(0, 1)] },
      { priority: 3, auto: true, id: `topic-tricky:${key}`, reaction: 'reassure', ttl: 9000 },
    );
    if (ok) {
      stamp();
      return undefined;
    }
  }

  if (D) {
    if (S.wrongRun === 2) return fire(D, 'wrong2', 'facepalm', { priority: 3, ttl: 7000, compact: true, actions: actions(D), force: true, assist: true });
    if (S.wrongRun === 1 && roll(0.8)) return fire(D, 'wrong1', 'laugh', { priority: 3, ttl: 7000, compact: true, actions: actions(D), assist: true });
    return undefined;
  }
  const streakNote = A === 'cosmic' && S.wrongRun >= 2; // his lines for two and three misses in a row skip the cooldown
  if (A && (S.wrongRun === 1 ? roll(0.7) : streakNote || cooled())) {
    // Cosmic marks a longer losing streak once per quiz, like the sharp characters do.
    if (A === 'cosmic' && S.wrongRun >= 3) {
      if (S.melted) return undefined;
      S.melted = true;
    }
    return fire(A, wrongKey(A, S.wrongRun), 'reassure', { priority: 3, ttl: 8000, compact: true, actions: actions(A), force: streakNote });
  }
  return undefined;
}

// A correct answer after a streak of misses: the supportive character celebrates; Demon sometimes lets his guard slip.
function comeback() {
  const A = sup();
  const D = sharp();
  if (D === 'demon' && Math.random() < 0.55) return genuineMoment();
  if (D === 'hexie' && (!A || Math.random() < 0.5)) return fire('hexie', 'comeback', 'respect', { priority: 3, ttl: 7000, compact: true, force: true });
  if (A) return fire(A, 'comeback', 'celebrate', { priority: 3, ttl: 7000, compact: true, force: true });
  return undefined;
}

// Demon almost makes a joke, pauses, then says something genuinely kind. Rare on purpose.
function genuineMoment() {
  const lv = level();
  const ok = say('demon', { text: line('demon', 'supportSetup', lv), compact: true, actions: [] }, { priority: 3, auto: true, reaction: 'greet', ttl: 9000 });
  if (!ok) return undefined;
  stamp();
  setTimeout(() => amend({ text: line('demon', 'support', lv) }, 'respect'), 1700);
  return undefined;
}

// Say something. `assist` adds a button so Seraph can step in (one panel at a time).
function fire(who, key, reaction, o = {}) {
  const { priority = 3, ttl, compact, actions = [], force = false, assist = false, id } = o;
  if (!force && !cooled()) return false;
  const acts = [...actions];
  const helper = ROLE[who] === 'sharp' ? sup() : null;
  if (assist && helper && actions.length) {
    // The helper's follow-up is the same "Explain it" action, offered as a clearer button.
    acts[0] = { ...acts[0], label: `${CHARACTERS[helper].short}, explain it` };
  }
  const vars = o.vars;
  const ok = say(who, { text: line(who, key, level(), vars), compact, actions: acts }, { priority, auto: true, id, reaction, ttl });
  if (ok) stamp();
  return ok;
}

// ---- finishing a quiz or test ----
function onComplete(p) {
  const prefs = getPrefs();
  S.wrongRun = 0;
  S.melted = false;
  S.lastQuizAt = Date.now();
  const total = p.total || 1;
  const ratio = p.correct / total;
  const perfect = p.total >= 3 && p.correct === p.total;
  const improved = Boolean(p.prev) && p.correct > p.prev.last && p.total === p.prev.total;
  // A better result on a topic that went badly earlier today or yesterday counts as "improved after revising".
  const before = p.topicId ? S.low[p.topicId] : null;
  const afterRevision = Boolean(before) && Date.now() - before.at < 24 * 3_600_000 && ratio > before.ratio;
  if (p.topicId) {
    if (ratio < 0.9) S.low[p.topicId] = { ratio, at: Date.now() };
    else delete S.low[p.topicId];
  }
  earnFor(perfect ? 2 : 1);

  const A = sup();
  const D = sharp();
  const lead = A || D;
  const note = REWARD_ART_READY && (prefs.seraph || prefs.demon || prefs.cosmic || prefs.hexie) ? 'Reward earned.' : undefined;
  const topicLink = p.topicId && getTopic(p.topicId) ? { label: 'Open the study guide', to: `/topic/${p.topicId}` } : null;
  const close = { label: 'Close', run: 'close' };

  if (perfect && lead) {
    const acts =
      A && D
        ? [{ label: `Hear ${CHARACTERS[D].short}'s take`, keep: true, fn: () => say(D, { text: line(D, 'perfect', level()), actions: [{ label: 'Close', run: 'close' }] }, { priority: 6, reaction: 'respect' }) }]
        : [];
    return say(lead, { text: line(lead, 'perfect', level()), note, actions: [...acts, close] }, { priority: 3, auto: true, reaction: reactionFor(lead, 'celebrate', 'respect'), ttl: 12000 });
  }
  if (lead && (improved || (afterRevision && isNew(lead)))) {
    const key = afterRevision && isNew(lead) ? 'improvedRevision' : 'improved';
    return say(lead, { text: line(lead, key, level()), note, actions: [close] }, { priority: 3, auto: true, reaction: reactionFor(lead, 'proud', 'respect'), ttl: 10000 });
  }
  const zero = p.correct === 0 && p.total >= 3;
  const key = zero ? 'zero' : ratio >= 0.6 ? 'steady' : 'tough';
  // Remember the topic so a trip back to the study guide gets a follow-up.
  if (p.topicId && ratio < 0.9) S.revise = { topicId: p.topicId, at: Date.now() };
  const acts = [...(topicLink ? [{ ...topicLink, primary: ratio < 0.6 }] : []), close];
  if (lead) {
    const good = ratio >= 0.6;
    return say(lead, { text: line(lead, key, level()), note, actions: acts }, { priority: 3, auto: true, reaction: ROLE[lead] === 'sup' ? (good ? 'greet' : 'reassure') : good ? 'quiz' : 'facepalm', ttl: 12000 });
  }
  return undefined;
}

// ---- small events ----
function once(id, who, key, reaction, o = {}) {
  if (!wants[who]() || !cooled()) return false;
  const ok = say(who, { text: line(who, key, level()), compact: true, actions: [] }, { priority: 2, auto: true, id, reaction, ttl: o.ttl || 6000 });
  if (ok) stamp();
  return ok;
}

function onPage({ pathname }) {
  const A = sup();
  const D = sharp();
  const topic = pathname.match(/^\/topic\/([^/]+)/);
  let revising = false;
  if (topic && S.revise && S.revise.topicId === decodeURIComponent(topic[1]) && Date.now() - S.revise.at < 2 * 3_600_000) {
    S.revise = null;
    revising = true;
    const who = D && (!A || Math.random() < 0.6) ? D : A;
    if (who) once(`revise:${topic[1]}:${Date.now()}`, who, 'reviseBack', reactionFor(who, 'think', 'scholar'), { ttl: 6000 });
  }
  // Coming back to a topic where the last quiz went badly (the two newer characters have a line for it).
  if (topic && !revising) {
    const id = decodeURIComponent(topic[1]);
    const q = getProgress().quiz[id];
    const who = pickOf(['hexie', 'cosmic']);
    if (who && q && q.total && q.last / q.total < 0.6 && getTopic(id)) once(`hard:${id}`, who, 'difficult', reactionFor(who, 'think', 'scholar'), { ttl: 6000 });
  }
  const m = pathname.match(/^\/course\/([^/]+)\/flashcards/);
  if (m) {
    if (A) once(`cards:${m[1]}`, A, 'flashcards', 'flashcards', { ttl: 7000 });
    else if (D && roll(0.5)) once(`cards:${m[1]}`, D, 'flashcards', 'scholar');
  }
}

function onBookmark() {
  const A = sup();
  const D = sharp();
  if (A) once('bm:' + Date.now(), A, 'bookmark', 'bookmark', { ttl: 4500 });
  else if (D && roll(0.5)) once('bm:' + Date.now(), D, 'bookmark', 'laugh');
}

function onAi(kind) {
  const key = kind === 'export' ? 'exported' : 'ai';
  const A = sup();
  const D = sharp();
  if (D && (!A || roll(0.4))) once(`ai:${key}`, D, key, 'scholar', { ttl: 7000 });
  else if (A) once(`ai:${key}`, A, key, 'think', { ttl: 7000 });
}

function onModule() {
  earnFor(1);
  const A = sup();
  const D = sharp();
  if (D && (!A || Math.random() < 0.4)) fire(D, 'moduleDone', 'respect', { priority: 3, ttl: 6000, compact: true, force: true });
  else if (A) fire(A, 'moduleDone', 'proud', { priority: 3, ttl: 6000, compact: true, force: true });
}

// Ticking off an assignment: only the two newer characters have a line for it.
function onTaskDone({ id }) {
  earnFor(1);
  const who = pickOf(['hexie', 'cosmic']);
  if (who) once(`done:${id}:${Date.now()}`, who, 'assignmentDone', reactionFor(who, 'celebrate', 'respect'), { ttl: 6000 });
}

// Start listening. Returns a function that stops listening.
export function startRules() {
  const offs = [
    on('study:quiz-answer', onAnswer),
    on('study:quiz-complete', onComplete),
    on('study:page-enter', (p) => {
      S.wrongRun = 0;
      S.melted = false;
      onPage(p);
    }),
    on('study:bookmark-added', onBookmark),
    on('study:ai-open', () => onAi('open')),
    on('study:chat-export', () => onAi('export')),
    on('study:module-complete', onModule),
    on('study:task-complete', onTaskDone),
    on('study:flashcard-marked', (p) => {
      if (p.known) {
        S.flash = { n: Date.now() - S.flash.at < 30 * 60_000 ? S.flash.n + 1 : 1, at: Date.now() };
      }
    }),
  ];
  return () => offs.forEach((off) => off());
}

