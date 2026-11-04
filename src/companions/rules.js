import { on } from './events.js';
import { getPrefs, setPref } from './prefs.js';
import { say, amend } from './manager.js';
import { line } from './dialogue.js';
import { getTopic } from '../data/index.js';

// Turns what the student does into what the companions say. This file decides; it never draws anything
// and never grades anything. Right and wrong come from the quiz pages themselves.
//
// Rules in short:
//  - only one character speaks at a time; Seraph leads on learning, Demon on his own sarcasm
//  - small reactions are occasional and have a cooldown; big moments (perfect score, meltdown) are rarer
//  - Quiet Study Mode and the pop-up frequency setting are always respected

const S = {
  wrongRun: 0, // wrong answers in a row
  melted: false, // Demon has had his meltdown in this quiz
  wrongByTopic: {},
  lastAt: 0, // last automatic reaction
  flash: { n: 0, at: 0 }, // flashcards marked recently
  lastQuizAt: 0,
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
  demon: () => getPrefs().demon && getPrefs().demonQuiz,
};
const level = () => getPrefs().sarcasm;

// Rewards: art for these is still to come, so for now they are just earned and counted.
export function earn(kind, n = 1) {
  const r = { ...getPrefs().rewards };
  r[kind] = (r[kind] || 0) + n;
  setPref('rewards', r);
}
const earnFor = (n = 1) => {
  const p = getPrefs();
  if (p.seraph) earn('snacks', n);
  if (p.demon) earn('hammers', n);
};

// ---- answers ----
function explainAction(who, explanation) {
  if (!explanation) return [];
  return [
    {
      label: 'Explain it',
      keep: true,
      fn: () => amend({ text: clip(explanation, 420), actions: [{ label: 'Got it', run: 'close' }], compact: false }, who === 'demon' ? 'scholar' : 'eureka'),
    },
  ];
}

function onAnswer(p) {
  if (p.correct) {
    const run = S.wrongRun;
    S.wrongRun = 0;
    if (run >= 2) return comeback();
    if (!cooled() || !roll(0.35)) return undefined;
    const demon = wants.demon() && (!wants.seraph() || Math.random() < 0.5);
    if (demon) return fire('demon', 'correct', 'respect', { priority: 3, ttl: 5000, compact: true });
    if (wants.seraph()) {
      if (Math.random() < 0.06) return fire('seraph', 'oops', 'stumble', { priority: 3, ttl: 5500, compact: true });
      return fire('seraph', 'correct', Math.random() < 0.5 ? 'greet' : 'proud', { priority: 3, ttl: 4500, compact: true });
    }
    return undefined;
  }

  S.wrongRun += 1;
  const key = p.topicId || p.courseId;
  S.wrongByTopic[key] = (S.wrongByTopic[key] || 0) + 1;
  const actions = (who) => explainAction(who, p.explanation);

  // Three misses in a row is Demon's big moment (once per quiz).
  if (wants.demon() && S.wrongRun >= 3 && !S.melted) {
    S.melted = true;
    stamp();
    return fire('demon', 'wrong3', 'meltdown', { priority: 3, ttl: 8000, compact: true, actions: actions('demon'), force: true });
  }

  // Repeated misses on one topic: Seraph helps in a practical way, once per topic.
  if (S.wrongByTopic[key] >= 3 && wants.seraph() && p.topicId && getTopic(p.topicId)) {
    const t = getTopic(p.topicId);
    const ok = say(
      'seraph',
      { text: line('seraph', 'wrongTopic'), compact: true, actions: [{ label: `Open ${t.title}`, to: `/topic/${t.id}`, primary: true }, ...actions('seraph').slice(0, 1)] },
      { priority: 3, auto: true, id: `topic-tricky:${key}`, reaction: 'reassure', ttl: 9000 },
    );
    if (ok) {
      stamp();
      return undefined;
    }
  }

  if (wants.demon()) {
    if (S.wrongRun === 2) return fire('demon', 'wrong2', 'facepalm', { priority: 3, ttl: 7000, compact: true, actions: actions('demon'), force: true, assist: true });
    if (S.wrongRun === 1 && roll(0.8)) return fire('demon', 'wrong1', 'laugh', { priority: 3, ttl: 7000, compact: true, actions: actions('demon'), assist: true });
    return undefined;
  }
  if (wants.seraph() && (S.wrongRun === 1 ? roll(0.7) : cooled())) {
    return fire('seraph', 'wrong', 'reassure', { priority: 3, ttl: 8000, compact: true, actions: actions('seraph') });
  }
  return undefined;
}

// A correct answer after a streak of misses: Seraph celebrates; Demon sometimes lets his guard slip.
function comeback() {
  if (wants.demon() && Math.random() < 0.55) return genuineMoment();
  if (wants.seraph()) return fire('seraph', 'comeback', 'celebrate', { priority: 3, ttl: 7000, compact: true, force: true });
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
  if (assist && wants.seraph() && who === 'demon' && actions.length) {
    // Seraph's helpful follow-up is the same "Explain it" action, offered as a clearer button.
    acts[0] = { ...acts[0], label: 'Seraph, explain it' };
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
  earnFor(perfect ? 2 : 1);

  const note = prefs.seraph || prefs.demon ? 'Reward earned.' : undefined;
  const seraph = wants.seraph();
  const demon = wants.demon();
  const topicLink = p.topicId && getTopic(p.topicId) ? { label: 'Open the study guide', to: `/topic/${p.topicId}` } : null;

  if (perfect) {
    if (seraph) {
      const acts = demon ? [{ label: "Hear Demon's take", keep: true, fn: () => say('demon', { text: line('demon', 'perfect', level()), actions: [{ label: 'Close', run: 'close' }] }, { priority: 6, reaction: 'respect' }) }] : [];
      return say('seraph', { text: line('seraph', 'perfect'), note, actions: [...acts, { label: 'Close', run: 'close' }] }, { priority: 3, auto: true, reaction: 'celebrate', ttl: 12000 });
    }
    if (demon) return say('demon', { text: line('demon', 'perfect', level()), note, actions: [{ label: 'Close', run: 'close' }] }, { priority: 3, auto: true, reaction: 'respect', ttl: 10000 });
  }
  if (improved) {
    if (seraph) return say('seraph', { text: line('seraph', 'improved'), note, actions: [{ label: 'Close', run: 'close' }] }, { priority: 3, auto: true, reaction: 'proud', ttl: 10000 });
    if (demon) return say('demon', { text: line('demon', 'improved', level()), note, actions: [{ label: 'Close', run: 'close' }] }, { priority: 3, auto: true, reaction: 'respect', ttl: 10000 });
  }
  const key = ratio >= 0.6 ? 'steady' : 'tough';
  const acts = [...(topicLink ? [{ ...topicLink, primary: ratio < 0.6 }] : []), { label: 'Close', run: 'close' }];
  if (seraph) return say('seraph', { text: line('seraph', key), note, actions: acts }, { priority: 3, auto: true, reaction: ratio >= 0.6 ? 'greet' : 'reassure', ttl: 12000 });
  if (demon) return say('demon', { text: line('demon', key, level()), note, actions: acts }, { priority: 3, auto: true, reaction: ratio >= 0.6 ? 'quiz' : 'facepalm', ttl: 12000 });
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
  const m = pathname.match(/^\/course\/([^/]+)\/flashcards/);
  if (m) {
    if (wants.seraph()) once(`cards:${m[1]}`, 'seraph', 'flashcards', 'flashcards', { ttl: 7000 });
    else if (wants.demon() && roll(0.5)) once(`cards:${m[1]}`, 'demon', 'flashcards', 'scholar');
  }
}

function onBookmark() {
  if (wants.seraph()) once('bm:' + Date.now(), 'seraph', 'bookmark', 'bookmark', { ttl: 4500 });
  else if (wants.demon() && roll(0.5)) once('bm:' + Date.now(), 'demon', 'bookmark', 'laugh');
}

function onAi(kind) {
  const key = kind === 'export' ? 'exported' : 'ai';
  if (wants.demon() && (!wants.seraph() || roll(0.4))) once(`ai:${key}`, 'demon', key, 'scholar', { ttl: 7000 });
  else if (wants.seraph()) once(`ai:${key}`, 'seraph', key, 'think', { ttl: 7000 });
}

function onModule() {
  earnFor(1);
  const demon = wants.demon() && (!wants.seraph() || Math.random() < 0.4);
  if (demon) fire('demon', 'moduleDone', 'respect', { priority: 3, ttl: 6000, compact: true, force: true });
  else if (wants.seraph()) fire('seraph', 'moduleDone', 'proud', { priority: 3, ttl: 6000, compact: true, force: true });
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
    on('study:task-complete', () => earnFor(1)),
    on('study:flashcard-marked', (p) => {
      if (p.known) {
        S.flash = { n: Date.now() - S.flash.at < 30 * 60_000 ? S.flash.n + 1 : 1, at: Date.now() };
      }
    }),
  ];
  return () => offs.forEach((off) => off());
}

