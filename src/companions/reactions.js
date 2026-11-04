// Which pose, motion and face a character uses for a named reaction.
// This is pure data: it says nothing about how the motion looks (that is companions.css).
// `ms` is how long the reaction lasts before the character settles back to idle.

export const REACTIONS = {
  seraph: {
    idle: { pose: 'idle', anim: 'idle', face: 'friendly', ms: 0 },
    greet: { pose: 'greeting', anim: 'wave', face: 'friendly', ms: 1000 },
    point: { pose: 'pointing', anim: 'point', face: 'friendly', ms: 800 },
    think: { pose: 'scholar', anim: 'tilt', face: 'thinking', ms: 1000 },
    celebrate: { pose: 'celebration', anim: 'cheer', face: 'delighted', ms: 1700 },
    reassure: { pose: 'reassurance', anim: 'reassure', face: 'reassuring', ms: 900 },
    eureka: { pose: 'eureka', anim: 'bounce', face: 'delighted', ms: 1000 },
    proud: { pose: 'proud', anim: 'bounce', face: 'delighted', ms: 1100 },
    flashcards: { pose: 'flashcards', anim: 'wave', face: 'friendly', ms: 1000 },
    bookmark: { pose: 'bookmark', anim: 'wave', face: 'delighted', ms: 1000 },
    stumble: { pose: 'greeting', anim: 'stumble', face: 'shocked', ms: 1000 },
  },
  demon: {
    idle: { pose: 'idle', anim: 'idle', face: 'deadpan', ms: 0 },
    greet: { pose: 'greeting', anim: 'dismiss', face: 'smug', ms: 700 },
    point: { pose: 'pointing', anim: 'snap', face: 'suspicious', ms: 600 },
    facepalm: { pose: 'facepalm', anim: 'facepalm', face: 'deadpan', ms: 1300 },
    laugh: { pose: 'laughter', anim: 'laugh', face: 'hysterical', ms: 1100 },
    meltdown: { pose: 'meltdown', anim: 'meltdown', face: 'furious', ms: 1700 },
    quiz: { pose: 'quiz', anim: 'snap', face: 'smug', ms: 800 },
    deadline: { pose: 'deadline', anim: 'snap', face: 'suspicious', ms: 900 },
    respect: { pose: 'respect', anim: 'thumbs', face: 'smug', ms: 1500 },
    scholar: { pose: 'scholar', anim: 'tilt', face: 'suspicious', ms: 900 },
  },
};

export const reactionNames = (who) => Object.keys(REACTIONS[who]);
