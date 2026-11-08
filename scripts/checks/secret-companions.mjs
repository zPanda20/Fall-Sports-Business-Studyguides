// Hexie Magpie and The Little Cosmic Bassist: hidden until a code is typed, two options per line,
// and Hexie's adult humor stays behind an opt-in and steps aside when the student needs real help.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { HEXIE_STANDARD, HEXIE_SPICY, SPICY_STANDS_DOWN, COSMIC_EN, COSMIC_IT } from '../../src/companions/dialogueSecret.js';
import { line } from '../../src/companions/dialogue.js';
import { whichCode, tryUnlock, relock, normalizeCode } from '../../src/companions/unlock.js';
import { DEFAULTS, getPrefs, setPrefs, resetPrefs } from '../../src/companions/prefs.js';
import { ROLE, SUP, SHARP, WHO } from '../../src/companions/assets.js';
import { REACTIONS } from '../../src/companions/reactions.js';
import { whenText } from '../../src/companions/deadlineWatch.js';

const here = path.dirname(fileURLToPath(import.meta.url));

// Every event in the two dialogue documents, under the key the app uses for it.
const EVENTS = [
  'welcome', 'returning', 'tourOffer', 'quietOn', 'correct', 'wrong1', 'wrong2', 'wrong3', 'comeback',
  'perfect', 'improved', 'steady', 'tough', 'reviseBack', 'improvedRevision', 'flashcards', 'bookmark', 'ai',
  'moduleDone', 'difficult', 'deadline7', 'deadline3', 'deadline1', 'overdue', 'assignmentDone',
  'streak', 'streakBroken', 'sessionEnd',
];
// Lines the app asks for that the documents do not cover (written to match each voice).
const EXTRA = ['resume', 'exported', 'wrongTopic', 'quietOff', 'tourEnd', 'oops'];
const PLACEHOLDERS = new Set(['title', 'when', 'streak_days']);
const holders = (t) => [...t.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);

export default function ({ eq, ok_ }) {
  // ---- the codes ----
  eq(whichCode('MAGPIE-ON-ICE'), 'hexie', 'hexie code opens hexie');
  eq(whichCode('  magpie on ice '), 'hexie', 'codes ignore case, spaces and dashes');
  eq(whichCode('stardust-bass'), 'cosmic', 'cosmic code opens cosmic');
  eq(whichCode('stardust'), null, 'a partial code opens nothing');
  eq(whichCode(''), null, 'an empty code opens nothing');
  eq(whichCode('seraph'), null, 'a guess opens nothing');
  eq(normalizeCode('Magpie-on Ice!'), 'MAGPIEONICE', 'normalize strips punctuation');
  const src = fs.readFileSync(path.join(here, '../../src/companions/unlock.js'), 'utf8');
  ok_(!/magpie|stardust/i.test(src), 'the codes are not written in plain text in the source');

  // ---- locked by default ----
  eq(DEFAULTS.hexie, false, 'hexie off by default');
  eq(DEFAULTS.cosmic, false, 'cosmic off by default');
  eq(DEFAULTS.unlocked.hexie || DEFAULTS.unlocked.cosmic, false, 'both locked by default');
  setPrefs({ unlocked: { hexie: false, cosmic: false } });
  setPrefs({ hexie: true, cosmic: true });
  ok_(!getPrefs().hexie && !getPrefs().cosmic, 'a locked character can never be switched on');
  setPrefs({ hexieStyle: 'spicy', hexieAdult: true });
  eq(getPrefs().hexieStyle, 'standard', 'spicy cannot be set while Hexie is locked');
  eq(tryUnlock('nope'), null, 'a wrong code unlocks nothing');
  ok_(!getPrefs().unlocked.hexie && !getPrefs().unlocked.cosmic, 'still locked after a wrong code');
  eq(tryUnlock('Magpie on ice'), 'hexie', 'the right code unlocks and returns who');
  ok_(getPrefs().unlocked.hexie && getPrefs().hexie, 'hexie is unlocked and on');
  ok_(!getPrefs().cosmic, 'cosmic is still locked');
  setPrefs({ hexieStyle: 'spicy', hexieAdult: false });
  eq(getPrefs().hexieStyle, 'standard', 'spicy needs the adult confirmation');
  resetPrefs();
  ok_(getPrefs().unlocked.hexie && !getPrefs().hexie, 'a reset keeps hexie unlocked but off');
  relock('hexie');
  ok_(!getPrefs().unlocked.hexie && !getPrefs().hexie, 'hiding hexie again locks her');

  // ---- roles ----
  eq(SUP.join(), 'seraph,cosmic', 'supportive characters');
  eq(SHARP.join(), 'demon,hexie', 'sharp characters');
  eq(WHO.length, 4, 'four characters in all');
  for (const who of ['hexie', 'cosmic']) {
    const names = Object.keys(REACTIONS[who]).sort().join();
    const model = Object.keys(REACTIONS[ROLE[who] === 'sup' ? 'seraph' : 'demon']).sort().join();
    eq(names, model, `${who} has the same reaction names as ${ROLE[who] === 'sup' ? 'seraph' : 'demon'}`);
  }

  // ---- two options for every event ----
  const tables = { 'hexie standard': HEXIE_STANDARD, 'cosmic en': COSMIC_EN, 'cosmic it': COSMIC_IT };
  for (const [name, t] of Object.entries(tables)) {
    for (const key of [...EVENTS, ...EXTRA]) ok_(Array.isArray(t[key]), `${name}: missing ${key}`);
    for (const [key, v] of Object.entries(t)) {
      ok_(Array.isArray(v) && v.length === 2, `${name}.${key}: needs exactly two options (A and B)`);
      if (!Array.isArray(v)) continue;
      ok_(v[0] !== v[1], `${name}.${key}: A and B are the same`);
      for (const text of v) {
        ok_(typeof text === 'string' && text.length > 8, `${name}.${key}: empty line`);
        for (const h of holders(text)) ok_(PLACEHOLDERS.has(h), `${name}.${key}: unknown placeholder {${h}}`);
      }
    }
  }
  eq(Object.keys(COSMIC_EN).sort().join(), Object.keys(COSMIC_IT).sort().join(), 'cosmic: English and Italian cover the same events');
  for (const key of Object.keys(HEXIE_SPICY)) ok_(Array.isArray(HEXIE_STANDARD[key]), `hexie spicy.${key} has a standard fallback`);
  for (const key of EVENTS) ok_(Array.isArray(HEXIE_SPICY[key]), `hexie spicy: missing ${key}`);
  for (const key of ['deadline7', 'deadline3', 'deadline1', 'overdue']) {
    for (const [name, t] of Object.entries({ ...tables, 'hexie spicy': HEXIE_SPICY })) {
      ok_(holders(t[key][0]).includes('title'), `${name}.${key} A names the assignment`);
    }
  }
  ok_(holders(COSMIC_IT.streak[0]).includes('streak_days') && holders(COSMIC_EN.streak[0]).includes('streak_days'), 'streak lines keep {streak_days}');

  // ---- Cosmic: his visor never gets a face, and the Italian stays Italian ----
  const visor = /(smil|eyes|eyebrow|frown|grin)/i;
  for (const [name, t] of Object.entries({ 'cosmic en': COSMIC_EN })) {
    for (const [key, v] of Object.entries(t)) for (const text of v) ok_(!visor.test(text), `${name}.${key} describes a face`);
  }
  ok_(/\b(che|di|il|la|per|non)\b/i.test(COSMIC_IT.correct[0] + COSMIC_IT.wrong1[0] + COSMIC_IT.welcome[0]), 'cosmic it reads as Italian');
  eq(whenText(2 * 86_400_000, Date.now(), 'it').startsWith('tra '), true, 'italian "when" for days ahead');
  eq(whenText(-1000, Date.now(), 'it'), 'oggi', 'italian "when" for earlier today');
  eq(whenText(-3 * 86_400_000 - 1000, Date.now(), 'it'), '3 giorni fa', 'italian "when" for days ago');
  eq(whenText(2 * 86_400_000, Date.now(), 'en').startsWith('in '), true, 'english "when" is unchanged');

  // ---- picking a line ----
  tryUnlock('stardust bass');
  setPrefs({ cosmicLang: 'en' });
  const en = new Set(COSMIC_EN.correct);
  let a = 0;
  const N = 800;
  for (let i = 0; i < N; i++) {
    const text = line('cosmic', 'correct');
    ok_(en.has(text), 'cosmic en line comes from the English table');
    if (text === COSMIC_EN.correct[0]) a++;
  }
  ok_(a / N > 0.5 && a / N < 0.8, `option A is preferred but B still appears (A share ${(a / N).toFixed(2)})`);
  setPrefs({ cosmicLang: 'it' });
  ok_(COSMIC_IT.correct.includes(line('cosmic', 'correct')), 'cosmic speaks Italian when set to Italian');
  eq(line('cosmic', 'deadline7', 'playful', { title: 'Essay', when: 'tra 3 giorni' }).includes('Essay'), true, 'placeholders are filled in');
  ok_(!/\{/.test(line('cosmic', 'deadline7', 'playful', { title: 'Essay', when: 'tra 3 giorni' })), 'no placeholder left over');
  ok_(COSMIC_IT.tough.includes(line('cosmic', 'zero')), 'a zero score uses the low-score lines');
  ok_(COSMIC_IT.returning.includes(line('cosmic', 'help')), 'the help greeting uses the returning lines');
  ok_(COSMIC_IT.welcome.includes(line('cosmic', 'intro')), 'intro uses the first-activation lines');

  // ---- Hexie: Standard by default; Spicy only with the opt-in; steps aside when help is needed ----
  tryUnlock('magpie on ice');
  eq(getPrefs().hexieStyle, 'standard', 'hexie starts Standard');
  const std = new Set(Object.values(HEXIE_STANDARD).flat());
  for (let i = 0; i < 300; i++) ok_(std.has(line('hexie', 'correct')), 'standard hexie never says a spicy line');
  setPrefs({ hexieAdult: true, hexieStyle: 'spicy' });
  eq(getPrefs().hexieStyle, 'spicy', 'adult opt-in allows spicy');
  const spicySet = new Set(Object.values(HEXIE_SPICY).flat());
  let spicy = 0;
  for (let i = 0; i < 600; i++) {
    const t = line('hexie', 'correct');
    ok_(spicySet.has(t) || std.has(t), 'a hexie line always comes from one of her tables');
    if (spicySet.has(t)) spicy++;
  }
  ok_(spicy / 600 > 0.55 && spicy / 600 < 0.92, `spicy shows often but not every time (${(spicy / 600).toFixed(2)})`);
  for (const key of SPICY_STANDS_DOWN) {
    for (let i = 0; i < 80; i++) ok_(!spicySet.has(line('hexie', key)) || std.has(line('hexie', key)), `spicy hexie stands down on ${key}`);
  }
  for (const key of ['wrong3', 'tough', 'overdue', 'reviseBack', 'difficult', 'streakBroken']) {
    ok_(SPICY_STANDS_DOWN.has(key), `${key} is a moment where spicy steps aside`);
    for (let i = 0; i < 80; i++) {
      const t = line('hexie', key);
      ok_(HEXIE_STANDARD[key].includes(t), `${key}: spicy hexie speaks Standard here`);
    }
  }
  ok_(HEXIE_STANDARD.tough.includes(line('hexie', 'zero')), 'a zero score uses her standard low-score lines');
  setPrefs({ hexieStyle: 'standard' });
  ok_(HEXIE_STANDARD.correct.includes(line('hexie', 'correct')), 'one switch takes her straight back to Standard');

  // leave the test state clean
  setPrefs({ unlocked: { hexie: false, cosmic: false } });
}
