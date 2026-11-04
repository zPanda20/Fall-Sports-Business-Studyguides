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
  tourOffer: [
    "Hi! I'm Seraph. I can show you around, help you study, and point you to useful tools. Want a quick tour?",
  ],
  tourEnd: ["That's the tour! You can restart it any time from the Companions page. Happy studying!"],
  correct: ['Yes! That is exactly right.', 'Nice work. That one is yours.', 'Correct! You are getting the hang of this.', 'Right on. Keep going!'],
  comeback: ['You got there! A few misses, then a hit. That is how learning works.', 'And there it is. Well done for sticking with it!'],
  wrong: [
    "Not quite, but that's okay. Want to see why the other answer is correct?",
    'Close! Let me show you the idea behind it.',
    'That one is tricky. Shall we go through it?',
  ],
  wrongTopic: ['This topic seems tricky. Would you like to review the study guide before trying again?', 'A few misses on this topic. A quick read of the guide might help.'],
  perfect: ['Perfect score! You absolutely nailed that!', 'Every answer right. Wonderful!'],
  improved: ["You're improving! That's what consistent practice can do.", 'Better than last time. Nice progress!'],
  steady: ['Good effort! Look at the questions you missed and try again when you are ready.', 'A solid round. The missed ones are the best ones to revisit.'],
  tough: ['That was a tough round, and that is okay. The missed questions below show exactly what to revisit.'],
  flashcards: ['Flip the card, think, then check. Mark the ones you know and I will hide them next time.', 'Say the answer out loud before you flip. It sticks better.'],
  bookmark: ['Saved! You can find it in Bookmarks.', 'Bookmarked. Great way to come back to it later.'],
  ai: ["Good idea. Check what an AI tells you against your slides, since your slides win if they differ."],
  exported: ['Message copied. Paste it into your AI chat, then compare its answer with your slides.'],
  moduleDone: ['Topic done! That is real progress.', 'Another topic finished. Nicely done!'],
  deadline: ['Heads up: {title} is due {when}. Want to revise first?', '{title} is coming up {when}. A short study session now will help.'],
  resume: ['You were reading {title}. Want to pick up where you left off?'],
  oops: ['Oops! My wing got tangled for a second. Where were we?', 'Whoops, I dropped my notes. Ahem. Nice work!'],
  quietOnShort: ['Okay, quiet it is.'],
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
  tourOffer: {
    mild: ["Hello. Want a tour? I will point at things and sigh."],
    playful: ["A tour? Fine. I'll point at things and judge. Ready?"],
    spicy: ["Want a tour? I'll show you around, and you can try not to get lost, damn it."],
  },
  correct: {
    mild: ['Well done. That was correct.', 'Correct. I am not surprised, much.'],
    playful: ['Well, look at that. You actually knew the answer.', 'Correct. Do not let it go to your head.', 'Huh. Right. Lucky or learned?'],
    spicy: ['Well, hell. You got it right.', 'Correct. I almost had a joke ready, too.', 'Right answer. My expectations just got a bruise.'],
  },
  wrong1: {
    mild: ['An interesting answer. Not the right one.', 'Close, but no.'],
    playful: ['An interesting answer. Unfortunately, reality disagrees.', 'Bold choice. Unfortunately, no.', 'Confident. Wrong, but confident.'],
    spicy: ['Wow. Confident. Wrong, but confident.', 'That answer was a choice. A bad one.', 'Nope. Not even in the neighborhood.'],
  },
  wrong2: {
    mild: ['Two in a row. Take a breath.'],
    playful: ['Two in a row. The streak is not the good kind.', 'Again? Fascinating. Painful, but fascinating.'],
    spicy: ['Two in a row. Impressive, in the worst way.', 'Wrong again. The textbook is crying.'],
  },
  wrong3: {
    mild: ['Three in a row. Maybe read the topic once more?'],
    playful: ["THREE IN A ROW? At this point I'm considering filing a complaint with the syllabus.", 'Three wrong. I need to lie down in a glitch.'],
    spicy: ["THREE IN A ROW? What the actual hell? Go read the topic. Please.", "Three in a row. I'm legally obligated to scream."],
  },
  perfect: {
    mild: ['A perfect score. Well done.'],
    playful: ["Fine. I'll admit it. That was impressive.", 'Perfect. I have nothing sarcastic to say. Give me a minute.'],
    spicy: ['My expectations were low but HOLY SHIT!', 'Perfect? Damn. Okay. Respect.'],
  },
  improved: {
    mild: ['Better than last time. Good.'],
    playful: ['Apparently the studying worked. Shocking development.', 'Improvement. Who authorized this?'],
    spicy: ['You improved? Well, damn. Look at you.', 'Better than last time. Annoyingly.'],
  },
  steady: {
    mild: ['An average round. Review what you missed.'],
    playful: ['Not terrible. Not great. Revisit the misses, champ.', 'Mediocre. Entirely fixable though.'],
    spicy: ['Meh. Fix the misses and come back.', 'Not a disaster. Not a victory. Go fix it.'],
  },
  tough: {
    mild: ['A hard round. Read the topic again, then try once more.'],
    playful: ['Ouch. That one hurt to watch. The topic guide is right there, you know.', 'Rough. Go revise, then come back and annoy me.'],
    spicy: ['That was brutal. Go read the damn guide. Then come back.', 'Ouch. Revise. Return. Redeem yourself.'],
  },
  flashcards: {
    mild: ['Flashcards. Good idea.'],
    playful: ['Flashcards. Revolutionary idea: remembering things.', 'Reviewing cards. Proud of you. A little.'],
    spicy: ['Flashcards. Remember things. Revolutionary, I know.', 'Cards, huh? About damn time.'],
  },
  bookmark: {
    mild: ['Saved. Do come back to it.'],
    playful: ['A bookmark. Because reading it now would be too easy.', 'Saved for later. Sure. Later.'],
    spicy: ['Another bookmark. Reading it now would be too much, right?', "Saved for 'later'. Sure thing."],
  },
  ai: {
    mild: ['Checking with an AI? Compare it with your slides.'],
    playful: ['Asking an AI? Fine. But check it against the slides.', 'I will be watching what it says. Suspiciously.'],
    spicy: ["Asking a chatbot? Verify it against the slides, or it'll make shit up."],
  },
  exported: {
    mild: ['Copied. Check the answer against your slides.'],
    playful: ['Copied. Trust, but verify. Mostly verify.'],
    spicy: ['Copied. Verify it, because bots love making things up.'],
  },
  moduleDone: {
    mild: ['Topic done. Good.'],
    playful: ['A topic finished. I am almost proud.', 'Done. Next one is waiting.'],
    spicy: ["Topic done. Damn, who's the overachiever?", 'Finished. Do another. Go on.'],
  },
  deadline7: {
    mild: ['{title} is due {when}. Plenty of time, if you start soon.'],
    playful: ['{title} is due {when}. Plenty of time. Which is exactly what people say before disaster.'],
    spicy: ["{title} is due {when}. Plenty of time, they said, right before it wasn't."],
  },
  deadline3: {
    mild: ['{title} is due {when}. Time to start.'],
    playful: ["{title}: due {when}. You have officially entered the 'perhaps I should study' phase."],
    spicy: ["{title} is due {when}. You've entered the 'oh shit' phase. Welcome."],
  },
  deadline1: {
    mild: ['{title} is due {when}. That is very soon.'],
    playful: ['{title} is due {when}. Just making sure your calendar and your optimism have met.'],
    spicy: ['{title} is due {when}. Your calendar and your optimism need to talk. Now.'],
  },
  overdue: {
    mild: ['{title} is past its date and still on your list. Handed it in? Tick it off.'],
    playful: ["{title} is past its date and still on your list. If you handed it in, tick it. If not... well."],
    spicy: ["{title} is past its date and still on the list. Handed it in? Tick it. If not, hell."],
  },
  support: {
    mild: ['That was good work. Genuinely.'],
    playful: ["...Okay. That was actually good. I'm proud of you. A little. Don't tell anyone."],
    spicy: ["...Okay, no jokes. That was genuinely great. Proud of you. Don't make it weird."],
  },
  supportSetup: {
    mild: ['Hmm.'],
    playful: ['Let me find something sarcastic to say about that...'],
    spicy: ['Hold on, I had a roast ready for this...'],
  },
  previewRespect: {
    mild: ['Well done. Do not let it go to your head. (Preview only.)'],
    playful: ["Fine. I'll admit it. That was impressive. (Preview only.)"],
    spicy: ['My expectations were low but HOLY SHIT! (Preview only.)'],
  },
};

const last = new Map(); // key -> index used last, so a line never repeats back to back

// {title} and {when} in a line are replaced from `vars`.
export function line(who, key, level = 'playful', vars) {
  const table = who === 'demon' ? DEMON[key]?.[level] ?? DEMON[key]?.playful : SERAPH[key];
  if (!table || !table.length) return '';
  const id = `${who}:${key}:${level}`;
  let i = Math.floor(Math.random() * table.length);
  if (table.length > 1 && i === last.get(id)) i = (i + 1) % table.length;
  last.set(id, i);
  const text = table[i];
  return vars ? text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m)) : text;
}
