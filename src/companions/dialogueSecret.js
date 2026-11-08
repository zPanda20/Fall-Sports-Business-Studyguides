// Lines for the two unlockable companions. Each event has two options, A and B: A is the preferred
// default, B adds variety (see `pick` in dialogue.js).
//
// Hexie Magpie has two versions: STANDARD (the default) and SPICY (adult opt-in, see spicy rules in dialogue.js).
// The Little Cosmic Bassist has two languages: EN and IT.
//
// The wording of every A and B line below is the author's own dialogue. Keys marked "(no hook yet)" are written
// and ready, but the app has no matching event to trigger them (study streaks, ending a session).

const AB = (a, b) => [a, b];

export const HEXIE_STANDARD = {
  welcome: AB(
    'Na, hallo! You summoned the witch on skates. I\'m Hexie. Shall we make a little magic?',
    'Well, look who wandered onto my ice. I\'m Hexie. Na los, try to keep up!',
  ),
  returning: AB(
    'Back for another lap? Wunderbar! I do love a returning audience.',
    'There you are! I was about to choreograph a search party.',
  ),
  tourOffer: AB(
    'Komm mit! I\'ll show you all the clever little corners before you skate into trouble.',
    'A tour? Wonderful! Watch the turns. This place has surprises.',
  ),
  quietOn: AB(
    'Schon gut. Silent glide, then. I\'ll keep my cackling to myself. Mostly.',
    'Very well. I\'ll haunt the sidelines politely.',
  ),
  correct: AB(
    'Sauber! Beautiful landing. Clean edges, no wobble.',
    'Correct! I see someone\'s been sharpening their thinking.',
  ),
  wrong1: AB(
    'Hoppla! A dazzling spin... in entirely the wrong direction.',
    'Oops! The spell fizzled. Let\'s see which part went sideways.',
  ),
  wrong2: AB(
    'Two slips! The ice is telling us to check our footing.',
    'Same rink, second tumble. Let\'s try a different approach.',
  ),
  wrong3: AB(
    'Ach du meine Güte! Three misses? My spellbook is staging an intervention.',
    'Three falls! Enough acrobatics. I\'ll show you a steadier route.',
  ),
  comeback: AB(
    'Na bitte! Perfect landing after that spectacular wobble. THAT is a comeback!',
    'There! One clean edge and the whole routine changes. Beautiful.',
  ),
  perfect: AB(
    'Wunderbar! Every answer? A flawless routine! Take your bow.',
    'Not a single slip. Even I couldn\'t have hexed that any better.',
  ),
  improved: AB(
    'Übung macht den Meister! Cleaner edges than last time.',
    'Would you look at that! The second performance was even better.',
  ),
  steady: AB(
    'Some lovely moves, some messy landings. We know what to rehearse.',
    'Some of the magic is there. Let\'s polish the tricky bits.',
  ),
  tough: AB(
    'Well, that was a snowstorm. Let\'s find one clear step and start there.',
    'A slippery run, but now we know what needs practicing. Komm, we\'ll figure it out.',
  ),
  reviseBack: AB(
    'Back on the ice? Gut! This time we know where it gets slippery.',
    'Oho! A second attempt. Much more interesting than disappearing into a snowbank.',
  ),
  improvedRevision: AB(
    'Na bitte! Now THAT\'S a rematch. Beautifully recovered.',
    'See? You didn\'t need a stronger hex. Just another lap.',
  ),
  flashcards: AB(
    'Tiny spells on little cards. Flip one, and let\'s see what sticks.',
    'Na los! One card, one trick. Don\'t peek at the answer yet!',
  ),
  bookmark: AB(
    'Tucked away safely. Even chaos deserves a filing system.',
    'A little frost charm for later. Do remember to return.',
  ),
  ai: AB(
    'A clever spell isn\'t automatically a true one. Check it against your notes.',
    'I adore mysterious answers. I still verify them.',
  ),
  moduleDone: AB(
    'Geschafft! A graceful exit—or shall we do another lap?',
    'And... finish! Bow if you must. You\'ve earned it.',
  ),
  difficult: AB(
    'This trick again? Excellent. Now I know exactly where to watch.',
    'The cleverest skaters practice the difficult edges. Zeig mal—show me what we\'ve got.',
  ),
  deadline7: AB(
    '{title} is due {when}. Plenty of time for a graceful routine—if we start now.',
    '{title} is due {when}. A sensible witch rehearses before opening night.',
  ),
  deadline3: AB(
    '{title} is due {when}. Na los! Time to stop admiring the ice and start skating.',
    '{title} is due {when}. Our margin for dramatic flourishes is shrinking!',
  ),
  deadline1: AB(
    '{title} is due {when}. Straight lines now. No unnecessary spins.',
    'One day until {title}. Let\'s land the important bits first.',
  ),
  overdue: AB(
    '{title} was due {when}. Submitted? Mark it done. Not yet? Let\'s see your options.',
    'That deadline is behind us. Check the submission first, then we\'ll make a plan.',
  ),
  assignmentDone: AB(
    'Geschafft! Submitted and sealed. A very satisfying final flourish.',
    'Beautiful! One less snowstorm hanging over your head.',
  ),
  // (no hook yet) study streaks and ending a session
  streak: AB(
    '{streak_days} days of practice? Oho! Someone\'s becoming formidable.',
    'Another day, another cleaner edge. Sehr schön!',
  ),
  streakBroken: AB(
    'A broken streak isn\'t a broken spell. Another lap begins whenever you\'re ready.',
    'Schon gut. Days off happen. The ice is still here.',
  ),
  sessionEnd: AB(
    'Off you go, then. I\'ll be practicing my victory cackle.',
    'Enough for today. That was a fine little performance. Bis bald!',
  ),
  // Short lines for moments the dialogue document does not cover. Written to match her voice.
  resume: AB('You were reading {title}. Shall we skate back to it?', 'Unfinished business with {title}? Komm, let\'s pick it up.'),
  exported: AB('Copied! Paste it in, then check the answer against your slides. Trust, but verify.', 'Copied. A clever spell is only as good as its sources, so compare it with your slides.'),
  wrongTopic: AB('This topic keeps tripping us. A look at the study guide might steady the ice.', 'Same corner, third wobble. Shall we read the guide before another go?'),
  quietOff: AB('Quiet mode off. I may glide in now and then. Just wave me away if I\'m too much.', 'The sidelines are boring anyway. I might pop up from time to time.'),
  tourEnd: AB('That\'s the tour! You can restart it any time from the Companions page. Bis bald!', 'And that\'s the whole rink. Restart the tour whenever you like.'),
  oops: AB('Hoppla! My skate caught an edge. Where were we?', 'Whoops. Dropped my spellbook. Ahem. Carry on!'),
  previewWave: AB('Hallo! This is how I say hello. (Preview only.)', 'Na, you found the preview. Hello! (Preview only.)'),
  previewLaugh: AB('Hehehe! A good wobble, that one. (Preview only.)', 'Ha! I needed that. (Preview only.)'),
  previewFacepalm: AB('Hoppla! Down I go. (Preview only.)', 'Oops, the spell fizzled. (Preview only.)'),
  previewRespect: AB('Sauber! A flawless routine. (Preview only.)', 'Take your bow. (Preview only.)'),
};

// Adult opt-in. Suggestive and playful, never graphic. Anything not written here falls back to STANDARD.
export const HEXIE_SPICY = {
  welcome: AB(
    'Well, well. You summoned the naughty witch. Buy me a Glühwein before you start pushing all my buttons, Liebling.',
    'Ach so! You\'ve chosen the spicy version. I hope you\'re better at handling surprises than you are at making sensible decisions.',
  ),
  returning: AB(
    'Back for more? I do admire your stamina, Liebling.',
    'Oh, look who\'s back. Missed me? Don\'t worry. I won\'t make you beg.',
  ),
  tourOffer: AB(
    'Want me to show you around? Careful, Schatz. I do enjoy taking the scenic route.',
    'Follow me. I promise to be gentle... with the onboarding, anyway.',
  ),
  quietOn: AB(
    'You want me quiet? You have NO idea how difficult I find keeping my mouth shut.',
    'Fine. I\'ll behave. What a dreadful waste of talent.',
  ),
  correct: AB(
    'Ooh, that\'s the spot. I do appreciate precision.',
    'Sauber! Keep performing like that and you might actually make me blush.',
  ),
  wrong1: AB(
    'Too eager, Liebling. You rushed straight past the important bit.',
    'That answer had confidence. Shame it couldn\'t quite perform.',
  ),
  wrong2: AB(
    'Twice? A little practice before the main event might help.',
    'Tja. You\'re enthusiastic. Now let\'s work on the technique.',
  ),
  wrong3: AB(
    'Three misses. Our safe word is \'revision.\' I suggest we use it.',
    'Right. Enough fooling around. We\'re opening the textbook.',
  ),
  comeback: AB(
    'Now THAT is a recovery. I like someone who can come back for another round.',
    'Na bitte! You found the rhythm. Much more satisfying, wasn\'t it?',
  ),
  perfect: AB(
    'A flawless performance? Liebling, you\'re making my knees weak. And I skate for a living.',
    'Not a single miss. Now THAT is what I call a satisfying finish.',
  ),
  improved: AB(
    'Someone\'s been practicing their technique after hours. I can tell.',
    'Oh, you\'ve improved. I do love a good second round.',
  ),
  steady: AB(
    'A few excellent moves, but you\'re not hitting all the right spots yet. Let\'s practice.',
    'Promising. Still needs a little attention in the tricky areas.',
  ),
  tough: AB(
    'Even I\'m not flirting with that score. Come on, let\'s work through the difficult bits.',
    'Well, that was rough. No teasing for this one. We\'ll get you back on track.',
  ),
  reviseBack: AB(
    'Back for round two? I do enjoy someone who doesn\'t give up easily.',
    'Oh, we\'re revisiting the difficult bits? Good. I like a challenge.',
  ),
  improvedRevision: AB(
    'Ah, much better. Turns out the second time CAN be more satisfying.',
    'See? A little patience, a little technique... and now we\'re getting somewhere.',
  ),
  flashcards: AB(
    'Flashcards? Darling, I was hoping for strip poker. Fine. Academic version it is.',
    'Show me your cards, Liebling. Let\'s see what you\'ve got.',
  ),
  bookmark: AB(
    'Saved for later? Oh, I do love someone who understands anticipation.',
    'Another one for your private collection? Naughty. I approve.',
  ),
  ai: AB(
    'Check its sources. I enjoy a good fantasy, but not in my citations.',
    'A charming answer isn\'t always a correct one. Believe me, I would know.',
  ),
  moduleDone: AB(
    'Finished already? That was quick. Shall we go again?',
    'Well done, Schatz. That was a rather satisfying little performance.',
  ),
  difficult: AB(
    'Still haven\'t found the sweet spot? Don\'t worry. I can show you.',
    'Some tricks take a little longer to master. No need to rush the good part.',
  ),
  deadline7: AB(
    '{title} is due {when}. Plenty of time for a slow burn—provided you actually start.',
    'Less than a week left. You can take your time, but don\'t tease that deadline forever.',
  ),
  deadline3: AB(
    '{title} is due {when}. Things are getting hot, and not in the fun way.',
    'Just days left. Less flirting with the calendar, more getting things done.',
  ),
  deadline1: AB(
    '{title} is due {when}. No more foreplay with the deadline. Finish the assignment.',
    'One day left, Schatz. This is where we stop talking and start delivering.',
  ),
  overdue: AB(
    '{title} is past due. I\'d make a joke, but let\'s check what happened and what you can still do.',
    'This one needs attention, not flirting. Submitted? Update the task. If not, let\'s find your options.',
  ),
  assignmentDone: AB(
    'Done and submitted. That deserves a little afterparty, Liebling.',
    'A lovely finish. Now THAT\'S the sort of commitment I enjoy.',
  ),
  // (no hook yet)
  streak: AB(
    '{streak_days} days? Such stamina... academically speaking, of course.',
    'Consistency AND technique? Careful, Schatz. You\'re becoming dangerously impressive.',
  ),
  streakBroken: AB(
    'Missed a day? Darling, we\'re not having a dramatic breakup over a calendar.',
    'One missed day isn\'t the end of our little affair with academic excellence.',
  ),
  sessionEnd: AB(
    'That\'s all for tonight? Fine. Leave me wanting more.',
    'Bis bald, Liebling. Try not to have TOO much fun without me.',
  ),
};

// Moments where a joke must never replace help: a low score, three misses in a row, a missed deadline,
// returning after a disappointing result, a difficult concept, a broken streak. Spicy Hexie uses her
// Standard lines here, even when Spicy is on (guardrail 4 and 5 of the spicy document).
export const SPICY_STANDS_DOWN = new Set(['wrong3', 'tough', 'overdue', 'reviseBack', 'difficult', 'streakBroken', 'wrongTopic']);

export const COSMIC_EN = {
  welcome: AB(
    'Hey, I\'m Cosmic. No big speech. We\'ll find our rhythm together.',
    'Glad you\'re here. I\'m Cosmic. One step at a time sound good?',
  ),
  returning: AB(
    'Hey, welcome back. Ready for another round?',
    'Good to see you. We can pick up where we left off.',
  ),
  tourOffer: AB(
    'Want a quick tour? I\'ll show you where everything lives.',
    'Come on, I\'ll show you the useful bits first.',
  ),
  quietOn: AB(
    'Quiet mode on. I\'ll be here when you need me.',
    'Got it. I\'ll hang back for now.',
  ),
  correct: AB('There it is. Nice work.', 'That\'s right. Clean and confident.'),
  wrong1: AB('Not quite. Want to see how it works?', 'Missed that one. We can figure it out.'),
  wrong2: AB(
    'Two tricky ones. Might be worth slowing the tempo.',
    'That\'s two misses. Let\'s find the part that isn\'t clicking.',
  ),
  wrong3: AB(
    'Three tough questions. Want a different explanation before the next one?',
    'This section\'s fighting back. Let\'s give it a fresh approach.',
  ),
  comeback: AB('There it is. You found your groove again.', 'That one landed. Nice comeback.'),
  perfect: AB('Every answer right. That was beautifully played.', 'Perfect score. That\'s a feeling worth keeping.'),
  improved: AB(
    'Better than last time. Your work\'s adding up.',
    'That\'s real progress, even if it felt slow while you were doing it.',
  ),
  steady: AB(
    'A solid starting point. We can clean up the misses.',
    'Some things clicked. Let\'s work through the ones that didn\'t.',
  ),
  tough: AB(
    'Rough round. Want to start with one question and build from there?',
    'That score stings a little. It doesn\'t have to be the last word.',
  ),
  reviseBack: AB(
    'You came back to the hard part. That\'s how it gets easier.',
    'Good call revisiting it. We can take it one piece at a time.',
  ),
  improvedRevision: AB('Look at that difference. Worth the second try.', 'Same topic, new result. Nice.'),
  flashcards: AB('A few cards, a few minutes. Good place to start.', 'Flip one. We\'ll see what you remember. No pressure.'),
  bookmark: AB('Saved. Good ideas deserve somewhere to land.', 'Marked for later. Future you might appreciate that.'),
  ai: AB(
    'Useful answer. Let\'s check it against the slides before we trust it.',
    'Even helpful tools can miss a note. Verify the important bits.',
  ),
  moduleDone: AB('One more topic finished. Glad we got there.', 'That\'s a chapter behind you. Nice.'),
  difficult: AB(
    'Back for another look? Good. We\'ll find what makes it click.',
    'Some things take a second listen. Let\'s try again.',
  ),
  deadline7: AB(
    '{title} is due {when}. We have room to make a calm plan.',
    'Less than a week until {title}. Want to split it into smaller steps?',
  ),
  deadline3: AB(
    '{title} is due {when}. Just a few days left. Let\'s focus on what\'s next.',
    'A few days to go. A simple plan beats a last-minute sprint.',
  ),
  deadline1: AB(
    '{title} is due {when}. Let\'s choose the next thing you can finish today.',
    'One day left. I\'ll help you prioritize the essentials.',
  ),
  overdue: AB(
    '{title} was due {when}. If you submitted, mark it done. If not, let\'s check your next steps.',
    'That date has passed. Let\'s check the status before deciding what to do.',
  ),
  assignmentDone: AB('It\'s in. You made it.', 'Submitted. Nice feeling, isn\'t it?'),
  // (no hook yet)
  streak: AB('{streak_days} days of showing up. That\'s something.', 'Look at that streak. Quiet consistency goes a long way.'),
  streakBroken: AB('A missed day doesn\'t undo what you\'ve learned.', 'We can start fresh today. No dramatic reset required.'),
  sessionEnd: AB('That\'s enough for this round. Good work showing up.', 'Go enjoy the rest of your day. The next verse can wait.'),
  // Short lines for moments the dialogue document does not cover.
  resume: AB('You were reading {title}. Want to pick up where we left off?', 'Still on {title}? We can pick it back up.'),
  exported: AB('Copied. Paste it into your chat, then check the answer against your slides.', 'Copied. Compare what comes back with the slides.'),
  wrongTopic: AB('This topic keeps pushing back. Want to read the study guide before the next try?', 'A few misses on this one. The guide might help it click.'),
  quietOff: AB('Quiet mode off. I might chime in now and then. Wave me off whenever.', 'Back in the mix. I\'ll keep it light.'),
  tourEnd: AB('That\'s the tour. You can restart it any time from the Companions page.', 'And that\'s the lay of the land. Restart the tour whenever you like.'),
  oops: AB('Whoops, dropped my pick. Where were we?', 'Lost my place for a second. Carry on.'),
  previewWave: AB('Hey. This is how I say hi. (Preview only.)', 'Hi there. (Preview only.)'),
  previewCelebrate: AB('Every answer right. That was beautifully played. (Preview only.)', 'That\'s a feeling worth keeping. (Preview only.)'),
  previewReassure: AB('Not quite, but we can work it out together. (Preview only.)', 'Rough round. One question at a time. (Preview only.)'),
  previewStumble: AB('Whoops. Tripped over my own cable. (Preview only.)', 'Okay, that was not graceful. (Preview only.)'),
};

export const COSMIC_IT = {
  welcome: AB(
    'Ehi, sono Cosmic. Niente grandi discorsi. Troveremo il nostro ritmo insieme.',
    'Che bello averti qui. Io sono Cosmic. Cominciamo con calma, un passo alla volta?',
  ),
  returning: AB('Ehi, rieccoti. Pronti per un altro giro?', 'Bello rivederti. Riprendiamo da dove ci siamo fermati.'),
  tourOffer: AB(
    'Ti va un giro veloce? Ti faccio vedere dove trovare tutto.',
    'Vieni, ti mostro prima le cose più utili.',
  ),
  quietOn: AB('Modalità silenziosa attiva. Sono qui quando ti servo.', 'Ricevuto. Me ne sto tranquillo, per ora.'),
  correct: AB('Ci siamo. Ottima risposta.', 'Giusto. Precisa e sicura.'),
  wrong1: AB('Non proprio. Vuoi vedere insieme come funziona?', 'Questa non è andata. Possiamo capirla insieme.'),
  wrong2: AB(
    'Due domande difficili. Forse conviene rallentare un po\' il ritmo.',
    'Due errori di fila. Vediamo qual è il punto che non torna.',
  ),
  wrong3: AB(
    'Tre domande toste. Vuoi provare una spiegazione diversa prima di continuare?',
    'Questo argomento ci sta dando del filo da torcere. Cambiamo approccio.',
  ),
  comeback: AB('Eccolo, il ritmo. L\'hai ritrovato.', 'Questa è andata. Bel recupero.'),
  perfect: AB('Tutte giuste. Una prova davvero bella.', 'Punteggio pieno. Una soddisfazione da godersi.'),
  improved: AB(
    'Meglio dell\'ultima volta. Il lavoro sta dando i suoi frutti.',
    'Questo sì che è progresso, anche se magari non te ne accorgevi giorno per giorno.',
  ),
  steady: AB(
    'Una buona base. Sistemiamo le risposte sbagliate.',
    'Alcune cose sono chiare. Lavoriamo su quelle che ancora non tornano.',
  ),
  tough: AB(
    'È stata dura. Vuoi partire da una sola domanda e ricostruire da lì?',
    'Un risultato che punge un po\'. Ma non dev\'essere l\'ultima parola.',
  ),
  reviseBack: AB(
    'Sei di nuovo qui per la parte difficile. È così che si migliora.',
    'Bella scelta tornarci sopra. Possiamo affrontarla un pezzo alla volta.',
  ),
  improvedRevision: AB('Guarda che differenza. Ne è valsa la pena riprovarci.', 'Stesso argomento, altro risultato. Bel salto.'),
  flashcards: AB('Qualche carta, qualche minuto. Un ottimo punto di partenza.', 'Gira la prima carta. Vediamo cosa ricordi. Nessuna pressione.'),
  bookmark: AB('Salvato. Le idee buone meritano un posto dove tornare.', 'Segnato per dopo. Il tuo io del futuro ringrazierà.'),
  ai: AB(
    'Risposta utile. Prima di fidarci, confrontiamola con le slide.',
    'Anche gli strumenti migliori possono prendere una nota sbagliata. Controlliamo i punti importanti.',
  ),
  moduleDone: AB('Un altro argomento completato. Bel lavoro.', 'Anche questo capitolo è alle spalle. Bene così.'),
  difficult: AB(
    'Ci torniamo? Bene. Vediamo cosa può far scattare la scintilla.',
    'A volte serve un secondo ascolto. Riproviamoci.',
  ),
  deadline7: AB(
    'Scadenza di {title}: {when}. C\'è ancora tempo per organizzarci con calma.',
    'Manca meno di una settimana a {title}. Ti va di dividerlo in piccoli passi?',
  ),
  deadline3: AB(
    '{title} scade {when}. Restano pochi giorni: concentriamoci sulla prossima cosa da fare.',
    'Pochi giorni alla consegna. Un piano semplice vale più di una corsa all\'ultimo minuto.',
  ),
  deadline1: AB(
    '{title} scade {when}. Scegliamo la prossima cosa che puoi finire oggi.',
    'Manca un giorno. Ti aiuto a dare priorità alle cose essenziali.',
  ),
  overdue: AB(
    'La scadenza di {title} era {when}. Se hai consegnato, segna l\'attività come completata. Altrimenti vediamo i prossimi passi.',
    'La scadenza è passata. Prima controlliamo la situazione, poi decidiamo come procedere.',
  ),
  assignmentDone: AB('Consegnato. Ce l\'hai fatta.', 'Inviato. È una bella sensazione, vero?'),
  // (no hook yet)
  streak: AB('Giorni di studio consecutivi: {streak_days}. Non è poco.', 'Un giorno dopo l\'altro. Ed eccoti a quota {streak_days}.'),
  streakBroken: AB('Un giorno saltato non cancella quello che hai imparato.', 'Si può ricominciare oggi. Senza grandi drammi.'),
  sessionEnd: AB('Per oggi va bene così. Hai fatto la tua parte.', 'Goditi il resto della giornata. La prossima strofa può aspettare.'),
  // Short lines for moments the dialogue document does not cover.
  resume: AB('Stavi leggendo {title}. Riprendiamo da lì?', 'Ancora su {title}? Possiamo ripartire da dove eri rimasto.'),
  exported: AB('Copiato. Incollalo nella chat, poi confronta la risposta con le slide.', 'Copiato. Confronta quello che ti risponde con le slide.'),
  wrongTopic: AB('Questo argomento ci sta resistendo. Vuoi rileggere la guida prima di riprovare?', 'Qualche errore su questo punto. La guida potrebbe aiutare a farlo scattare.'),
  quietOff: AB('Modalità silenziosa disattivata. Ogni tanto potrei farmi sentire. Mandami via quando vuoi.', 'Torno in gioco. Senza esagerare.'),
  tourEnd: AB('Il giro è finito. Puoi ripeterlo quando vuoi dalla pagina dei compagni.', 'Ecco com\'è fatto il posto. Rifai il giro quando ti va.'),
  oops: AB('Ops, mi è caduto il plettro. Dove eravamo?', 'Ho perso il filo per un attimo. Andiamo avanti.'),
  previewWave: AB('Ehi. Ecco come saluto. (Solo anteprima.)', 'Ciao! (Solo anteprima.)'),
  previewCelebrate: AB('Tutte giuste. Una prova davvero bella. (Solo anteprima.)', 'Una soddisfazione da godersi. (Solo anteprima.)'),
  previewReassure: AB('Non proprio, ma ci arriviamo insieme. (Solo anteprima.)', 'Giro duro. Una domanda alla volta. (Solo anteprima.)'),
  previewStumble: AB('Ops. Inciampato nel mio stesso cavo. (Solo anteprima.)', 'Ok, non è stato elegante. (Solo anteprima.)'),
};

// Buttons that Cosmic shows in Italian when his language is set to Italian. Anything not listed stays as written.
export const IT_LABELS = {
  Close: 'Chiudi',
  'Got it': 'Ok',
  'Explain it': 'Spiegamelo',
  'Seraph, explain it': 'Spiegamelo',
  'Open due dates': 'Apri le scadenze',
  'Revise this course': 'Ripassa questo corso',
  'Snooze a day': 'Rimanda di un giorno',
  Dismiss: 'Chiudi',
  'Show me around': 'Fammi vedere',
  'Not now': 'Non ora',
  "Don't show this again": 'Non mostrare più',
  'Open the study guide': 'Apri la guida',
  'What can you do?': 'Cosa sai fare?',
  Back: 'Indietro',
  Next: 'Avanti',
  Finish: 'Fine',
  'Skip tour': 'Salta il giro',
  'Study flashcards': 'Studia con le flashcard',
  'Take a quick test': 'Fai un quiz veloce',
  'Practice exam questions': 'Domande d\'esame',
  'See my due dates': 'Le mie scadenze',
  'Search the guides': 'Cerca nelle guide',
  'Try a quick test after those cards': 'Fai un quiz dopo le carte',
};
