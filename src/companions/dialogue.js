// What the companions say. Short lines, several variants, no sentence twice in a row.
// Demon's lines change with the sarcasm level. He teases the situation, the answer or the
// procrastination, never the person. 'spicy' allows mild swearing, nothing worse.

const SERAPH = {
  help: [
    'What would you like help with today?',
    'Hi! Where would you like to start?',
    'Happy to help. What are you working on?',
  ],
  intro: [
    "Hi, I'm Seraph! I live in this corner. Tap me whenever you want help finding things, and I'll stay quiet otherwise.",
  ],
  quietOn: ['Quiet mode is on. I will stay out of your way. Tap me if you need me.'],
  quietOff: ['Quiet mode is off. I may pop up now and then, and you can always dismiss me.'],
  settingsHint: ['You can switch me off, or invite my grumpy friend, in the companion settings.'],
  previewWave: ['Hello again! This is how I say hi.'],
  previewCelebrate: ['Perfect score! You absolutely nailed that! (This is only a preview.)'],
  previewReassure: ["Not quite, but that's okay. We can go through it together. (Preview only.)"],
  previewStumble: ['Oops! My wing got tangled. Give me a second.'],
};

const DEMON = {
  help: {
    mild: ['Oh, you need something? Fine. What is it?', 'Hello. Let me guess: you need help.'],
    playful: ["Oh good, you're back. What do you need this time?", 'Yes? I was busy being brilliant.'],
    spicy: ["Well, damn. You actually opened me. What now?", 'Speak. I have exactly zero patience today.'],
  },
  welcome: {
    mild: ["Hello. I'm Demon. I'll be mildly unimpressed from the corner."],
    playful: ["Oh, you turned me on. Brave. I'm Demon, and I have opinions about your study habits."],
    spicy: ["You turned me on? Bold. I'm Demon. Expect sarcasm, and the occasional swear."],
  },
  quietOn: {
    mild: ['Quiet mode. Fine. I will be silent and disappointed.'],
    playful: ['Quiet mode? I will sulk in silence. Very loudly.'],
    spicy: ["Quiet mode. Fine. I'll bite my tongue. Barely."],
  },
  previewFacepalm: {
    mild: ['An interesting answer. Unfortunately, reality disagrees. (Preview only.)'],
    playful: ['Bold choice. Unfortunately, no. (Preview only.)'],
    spicy: ['Wow. Just wow. Even the textbook is embarrassed. (Preview only.)'],
  },
  previewLaugh: {
    mild: ['Hehe. That was funny. (Preview only.)'],
    playful: ['Ha! I needed that. (Preview only.)'],
    spicy: ['Hahaha, oh hell, that was good. (Preview only.)'],
  },
  previewMeltdown: {
    mild: ['Three in a row? I need a moment. (Preview only.)'],
    playful: ["THREE IN A ROW? I'm filing a complaint with the syllabus. (Preview only.)"],
    spicy: ["THREE IN A ROW? What the hell is happening? (Preview only.)"],
  },
  previewRespect: {
    mild: ['Well done. Do not let it go to your head. (Preview only.)'],
    playful: ["Fine. I'll admit it. That was impressive. (Preview only.)"],
    spicy: ['My expectations were low but HOLY SHIT! (Preview only.)'],
  },
};

const last = new Map(); // key -> index used last, so a line never repeats back to back

export function line(who, key, level = 'playful') {
  const table = who === 'demon' ? DEMON[key]?.[level] ?? DEMON[key]?.playful : SERAPH[key];
  if (!table || !table.length) return '';
  const id = `${who}:${key}:${level}`;
  let i = Math.floor(Math.random() * table.length);
  if (table.length > 1 && i === last.get(id)) i = (i + 1) % table.length;
  last.set(id, i);
  return table[i];
}
