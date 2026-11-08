// The one place that knows where companion artwork lives. Nothing else hard-codes an image path.
// Files are made by `python3 scripts/prepare-companion-art.py "<folder of originals>"`
// and live in public/companions/<character>/poses and /expressions.

const base = () => (import.meta.env && import.meta.env.BASE_URL) || '/';

export const CHARACTERS = {
  seraph: { id: 'seraph', name: 'Seraph Orca', short: 'Seraph', role: 'Study helper' },
  demon: { id: 'demon', name: 'Demon Panda', short: 'Demon', role: 'Sarcastic advisor' },
  // The two below stay hidden until their secret code is entered on the Companions page (see unlock.js).
  hexie: { id: 'hexie', name: 'Hexie Magpie', short: 'Hexie', role: 'Frostbound trickster', secret: true },
  cosmic: { id: 'cosmic', name: 'The Little Cosmic Bassist', short: 'Cosmic', role: 'Study buddy', secret: true },
};
export const WHO = Object.keys(CHARACTERS);

// Every character plays one of two parts. Supportive ones lead on learning and encouragement;
// sharp ones lead on sarcasm and deadlines. The rules pick between the ones that are switched on.
export const ROLE = { seraph: 'sup', cosmic: 'sup', demon: 'sharp', hexie: 'sharp' };
export const SUP = WHO.filter((w) => ROLE[w] === 'sup');
export const SHARP = WHO.filter((w) => ROLE[w] === 'sharp');

// pose name -> what it is for (S02-S11 and D02-D11 from the brief, plus a calm idle pose for each)
export const POSES = {
  seraph: {
    idle: 'Resting pose, the default',
    greeting: 'S02 Enthusiastic Greeting: welcome, tour introduction',
    pointing: 'S03 Pointing and Explaining: directing attention to a feature',
    scholar: 'S04 Celestial Scholar: presenting study material, AI chat',
    reassurance: 'S05 Compassionate Reassurance: wrong answers, hard topics',
    celebration: 'S06 Heavenly Celebration: excellent results',
    flashcards: 'S07 Flashcard Master: flashcards and revision',
    perch: 'S08 Curious Percher: resting on a panel',
    eureka: 'S09 Eureka!: hints and explanations',
    bookmark: 'S10 Bookmark Keeper: saving bookmarks',
    proud: 'S11 Proud Teacher: improvement and milestones',
  },
  demon: {
    idle: 'Resting pose, the default',
    greeting: 'D02 Smug Greeting: activation and welcome',
    pointing: 'D03 Accusatory Pointing: sarcastic tutorials',
    facepalm: 'D04 Ultimate Facepalm: wrong answers',
    laughter: 'D05 Evil Laughter: funny mistakes',
    meltdown: 'D06 System Meltdown: repeated errors',
    quiz: 'D07 Quiz Challenger: inviting a quiz',
    deadline: 'D08 Deadline Enforcer: deadlines and exams',
    respect: 'D09 Reluctant Respect: correct answers (the thumbs-up)',
    perch: 'D10 Judgmental Percher: resting on a panel',
    scholar: 'D11 Suspicious Scholar: reviewing notes',
  },
  hexie: {
    idle: 'Guilty Snow Witch: resting pose, the default',
    greeting: 'Frosty Glide: welcome and hello',
    spell: 'Frostbound Spell Skate: pointing out features, deadlines, reviewing notes',
    leap: 'Crystal Skating Leap: spare big move',
    spin: 'Icy Spin: laughing at a funny mistake',
    victory: 'Icy Victory Pose: reluctant respect, good results',
    performance: 'Icy Witch Performance: inviting a quiz',
    mishap: 'Magical Ice Mishap: wrong answers and meltdowns',
    perch: 'Scheming Magpie perched: resting on a panel',
  },
  cosmic: {
    idle: 'Standing, the default',
    greeting: 'Friendly wave: welcome and hello',
    pointing: 'Pointing and explaining',
    playing: 'Playing the bass: thinking and reviewing',
    celebrate: 'Fist pump: great results',
    dance: 'Dancing: hints and eureka moments',
    walk: 'Walking with ice cream: progress and milestones',
    offer: 'Offering ice cream: flashcards',
    stumble: 'Stumbling: a clumsy moment',
    perch: 'Sitting: resting on a panel',
    curl: 'Curled up: reassurance after a hard round',
  },
};

// D01 / S01: the two six-face sheets, cut into single heads
export const FACES = {
  seraph: ['friendly', 'delighted', 'thinking', 'confused', 'reassuring', 'shocked'],
  demon: ['smug', 'deadpan', 'suspicious', 'shocked', 'hysterical', 'furious'],
  hexie: ['cackle', 'sly', 'delighted', 'innocent', 'flustered', 'smug'],
  // Cosmic's visor never shows a face. His "expressions" are the symbols that float beside his helmet.
  cosmic: ['sparkle', 'notes', 'alert', 'question', 'idea', 'sweat'],
};
export const NEUTRAL_FACE = { seraph: 'friendly', demon: 'deadpan', hexie: 'innocent', cosmic: 'sparkle' };

// Flip to true once snack / hammer / head-pat art exists, so the app can show earned rewards.
export const REWARD_ART_READY = false;

export const POSE_SIZE = { seraph: [487, 640], demon: [480, 640], hexie: [480, 640], cosmic: [480, 640] };

export const poseUrl = (who, pose) => `${base()}companions/${who}/poses/${pose}.webp`;
export const faceUrl = (who, face) => `${base()}companions/${who}/expressions/${face}.webp`;

export const hasPose = (who, pose) => Boolean(POSES[who] && POSES[who][pose]);
export const hasFace = (who, face) => FACES[who]?.includes(face) ?? false;

// Fetch an image ahead of time. Failures are ignored: a missing file must never break the app.
const warmed = new Set();
export function warm(url) {
  if (typeof Image === 'undefined' || warmed.has(url)) return;
  warmed.add(url);
  const im = new Image();
  im.decoding = 'async';
  im.src = url;
}
export function warmDefaults(who) {
  warm(poseUrl(who, 'idle'));
  warm(faceUrl(who, NEUTRAL_FACE[who]));
}
