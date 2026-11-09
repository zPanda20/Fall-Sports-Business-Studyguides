// Techway, Chapter 1: Discovering generative AI.
// Built from Chapter 1 of the Techway lesson document (the "super-predictor" idea, machine learning and deep learning,
// transformers, tokens, how a reply is generated, variability, training, the context window and hallucinations).
// Real example: Mata v. Avianca (U.S. District Court, S.D.N.Y., sanctions order of 22 June 2023, Judge P. Kevin Castel),
// as reported by LawNext, "Court imposes sanctions on lawyers who filed bogus cases after relying on ChatGPT for legal research".

export const genaiBasicsTopic = {
  id: 'genai-basics',
  course: 'techway',
  title: 'Discovering generative AI: predictions, tokens and limits',
  sessions: 'Chapter 1',
  reading: 'Techway lesson, Chapter 1',
  minutes: 35,
  summary:
    'What a generative AI really does: it predicts the next piece of text, one token at a time. Learn how it is trained, why it varies, where it fails (no live data, no real math, no memory beyond its window) and why it sometimes invents facts.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'A super-predictor, not a mind',
      blocks: [
        {
          type: 'big',
          text: 'A generative AI is a program that **predicts what text should come next**. It does this so well that it looks like understanding, but underneath it is pattern-matching on a huge scale.',
        },
        {
          type: 'p',
          text: 'Think of the suggestions your phone keyboard shows while you type. After “Hello, how” it offers “are you”. That is prediction from patterns in lots of earlier conversations. ChatGPT works on the same principle, but at a much bigger scale.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Your keyboard', text: 'Suggests the next word or two, using the last few words you typed.' },
            { title: 'A generative AI', text: 'Writes whole, connected passages, keeps track of a long conversation, copies a style or tone, and follows your instructions.' },
          ],
        },
        {
          type: 'callout',
          title: 'You already use AI every day',
          text: 'Maps that pick a route, shops that recommend products, streaming apps that suggest a film, spam filters. ChatGPT is a more conversational member of the same family.',
        },
      ],
    },
    {
      kicker: 'Definition',
      title: 'What is generative AI?',
      blocks: [
        {
          type: 'p',
          text: 'The lesson explains it at three levels. Each one is a deeper way of saying the same thing.',
        },
        {
          type: 'table',
          head: ['Level', 'In one sentence'],
          rows: [
            ['Basic', 'A program that **creates new content** (text, images, code, music) based on patterns it learned from training data.'],
            ['Intermediate', 'It uses statistical models to **predict the most likely continuation** of a sequence, whether words in a text or pixels in an image.'],
            ['Expert', 'A neural network that stores the relationships between things in a very high-dimensional mathematical space, and uses them to generate coherent, relevant content.'],
          ],
        },
        {
          type: 'steps',
          items: [
            '**Learning from massive exposure.** It has been trained on enormous amounts of text (books, articles, websites, conversations), so it picked up how language is used, a bit like a child absorbing a first language by listening.',
            '**Prediction in context.** For every word it writes, it works out how likely each possible next word is, given everything so far.',
            '**Long-range coherence.** Unlike simple autocorrect, it keeps the thread of the conversation and adapts to what you asked.',
          ],
        },
      ],
    },
    {
      kicker: 'Prediction',
      title: 'It does not always pick the top choice',
      blocks: [
        {
          type: 'p',
          text: 'Suppose a club assistant AI is completing the sentence “The crowd at Beacon Park was…”. The model scores many possible next words. The numbers below are made up to show the idea; real models weigh thousands of options.',
        },
        {
          type: 'table',
          head: ['Next word', 'Illustrative chance'],
          rows: [
            ['“electric”', '24%'],
            ['“loud”', '19%'],
            ['“huge”', '14%'],
            ['“buzzing”', '10%'],
            ['“silent”', '1%'],
          ],
        },
        {
          type: 'p',
          text: 'If the AI always chose the single most likely word, every answer to the same question would be identical and sound robotic. Instead it **samples** from the likely candidates. That is why asking the same question three times gives three different wordings with the same meaning. A very unlikely word, like “silent” in a happy match report, is rarely chosen.',
        },
        {
          type: 'callout',
          title: 'Variability is a feature, not a bug',
          text: 'The lesson’s key takeaway names “temperature” as the slider between coherence and creativity: a low setting makes the AI stick to the safest words, a high setting lets it take more adventurous ones.',
        },
      ],
    },
    {
      kicker: 'How it learns',
      title: 'Machine learning and deep learning',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Data', text: 'Thousands of labeled examples, such as photos tagged “dog” or “cat”.' },
            { title: 'Patterns', text: 'The algorithm finds features that tell the groups apart.' },
            { title: 'Predictions', text: 'It sorts new examples it has never seen before.' },
          ],
        },
        {
          type: 'p',
          text: '**Machine learning** means learning from examples instead of being given hand-written rules. **Deep learning** is machine learning with many stacked layers of artificial neurons, which is where the word “deep” comes from.',
        },
        {
          type: 'columns',
          items: [
            { title: 'The company analogy', text: 'Staff handle raw information, supervisors spot simple patterns, managers combine patterns into concepts, and executives decide. Each network layer refines what the previous one passed up.' },
            { title: 'Example: spotting joy in a text', text: 'Early layers see letters and punctuation. Middle layers see words like “super” and “!”. Higher layers see a positive tone. The top layer concludes “joy”, with a certain intensity.' },
          ],
        },
        {
          type: 'p',
          text: 'This layered build-up explains why AI can catch subtle tone and still stumble on something a person finds obvious.',
        },
      ],
    },
    {
      kicker: 'The architecture',
      title: 'Transformers: reading everything at once',
      blocks: [
        {
          type: 'p',
          text: 'ChatGPT-style models are built on an architecture called the **Transformer**.',
        },
        {
          type: 'table',
          head: ['', 'Older systems', 'Transformers'],
          rows: [
            ['How they read', 'One word at a time, left to right, like reading a book.', 'The whole text at once.'],
            ['What they notice', 'Mostly nearby words.', 'Links between all the words, even far apart ones.'],
            ['Detective picture', 'Reading clues one by one in order.', 'Spreading every clue on a board and seeing the connections immediately.'],
          ],
        },
        {
          type: 'callout',
          title: 'Why it matters for you',
          text: 'Because the model looks at all your words together, the **whole prompt** shapes the answer. A detail buried in paragraph three still counts.',
        },
      ],
    },
    {
      kicker: 'Building blocks',
      title: 'Tokens: how the AI sees text',
      blocks: [
        {
          type: 'p',
          text: 'The AI does not see words the way you do. It chops text into **tokens**: pieces that may be a whole word, part of a word, a number or a punctuation mark.',
        },
        {
          type: 'table',
          head: ['Text', 'Likely tokens', 'What you notice'],
          rows: [
            ['The extraordinary technological development', 'The · extraordinary · technological · develop · ment', 'Long words get split.'],
            ['COVID-19 transformed remote work', 'COVID · - · 19 · transformed · remote · work', 'Numbers and acronyms are handled separately.'],
            ['john.smith@company.com', 'john · . · smith · @ · company · . · com', 'E-mail addresses break into structural parts.'],
          ],
        },
        {
          type: 'p',
          text: 'The exact split depends on the model, so treat these as typical, not exact. The practical lesson is simple: rare or oddly written words are harder for the AI, so prefer clear, common wording. Tokens also set limits on how much text a model can handle at once.',
        },
      ],
    },
    {
      kicker: 'Step by step',
      title: 'What happens when you press enter',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Tokenize', text: 'Your prompt is cut into tokens.' },
            { title: '2. Understand context', text: 'The model weighs how all tokens relate.' },
            { title: '3. Predict', text: 'It scores every possible first token of the answer.' },
            { title: '4. Select', text: 'It picks among the likely ones (not always the top one).' },
            { title: '5. Repeat', text: 'The new token joins the context, and it predicts the next.' },
            { title: '6. Stay coherent', text: 'The thread is kept to the end of the answer.' },
          ],
        },
        {
          type: 'callout',
          title: 'Every token shapes the next',
          text: 'Small changes in how you phrase a request change the starting point, and the whole answer grows from there. This is why prompt wording matters so much in the rest of the course.',
        },
      ],
    },
    {
      kicker: 'Limits',
      title: 'Five questions the AI cannot answer well alone',
      blocks: [
        {
          type: 'table',
          head: ['You ask (web search off)', 'What usually happens', 'What it reveals'],
          rows: [
            ['“What is the weather in my city right now?”', 'It says it has no real-time data.', 'It has a **knowledge cut-off date**.'],
            ['“Tell me about my day yesterday.”', 'It says it cannot know.', 'It only knows what is in training data and in this chat.'],
            ['“Give me Apple’s stock price right now.”', 'It says it has no live data.', 'Live facts need a connected tool such as web search.'],
            ['“Explain this photo” (with no photo attached)', 'It says it sees no image.', 'What it can do depends on the model and the tools switched on.'],
            ['“Multiply 2847 × 9632 × 5391 exactly.”', 'It tries and may be wrong.', 'It predicts patterns; it is **not a calculator**.'],
          ],
        },
        {
          type: 'p',
          text: 'Web search, file reading and code tools are optional add-ons. The base model, by itself, has no live internet access.',
        },
      ],
    },
    {
      kicker: 'Behind the scenes',
      title: 'Training and the context window',
      blocks: [
        {
          type: 'p',
          text: 'Training a large model is a huge project: terabytes of text (the equivalent of millions of books), thousands of processors working for months, and a cost the lesson puts at several million dollars for a model like GPT-4.',
        },
        {
          type: 'steps',
          items: [
            '**Pre-training.** Learn the patterns of language from raw text.',
            '**Supervised fine-tuning.** Refine the model using good example conversations written or checked by people.',
            '**Reinforcement learning from human feedback.** Reward the answers that people prefer.',
          ],
        },
        {
          type: 'callout',
          title: 'The context window',
          text: 'The model has a limited working memory, measured in tokens. The lesson’s example is about 32,000 tokens, roughly 25 pages. Past the limit, the earliest parts of a long conversation fall out of view. Newer models offer larger windows, but the limit never disappears.',
        },
        {
          type: 'bullets',
          items: [
            'Very long documents may not fit in one go.',
            'Complex requests need clear structure.',
            'Big projects work better split into smaller pieces.',
          ],
        },
      ],
    },
    {
      kicker: 'Reliability',
      title: 'Hallucinations: confident and wrong',
      blocks: [
        {
          type: 'p',
          text: 'A **hallucination** is a fluent, confident statement that is false, such as an invented statistic, quote or source. The AI is not lying on purpose. It is a side effect of how it works.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Pressure to answer', text: 'The system is built to produce a plausible continuation, even when it has nothing solid.' },
            { title: 'Frequent is not the same as true', text: 'A pattern that appears often in training text can look right without being verified.' },
            { title: 'Over-generalizing', text: 'It stretches partial information into a complete-sounding answer.' },
          ],
        },
        {
          type: 'callout',
          title: 'The rule',
          text: 'The smoother the answer sounds, the easier it is to trust. Always check names, numbers, dates and sources before you rely on or share them.',
        },
      ],
    },
    {
      kicker: 'Check your beliefs',
      title: 'Five myths and the reality',
      blocks: [
        {
          type: 'table',
          head: ['Myth', 'Reality'],
          rows: [
            ['“ChatGPT truly understands what it writes.”', 'It calculates the most probable next token from patterns. It does not understand in the human sense.'],
            ['“AI creates something totally new from nothing.”', 'It recombines learned patterns into new combinations.'],
            ['“The more information I paste, the better the answer.”', 'Relevant and clear beats long. Too much can dilute the request or push earlier content out of the window.'],
            ['“ChatGPT is always connected to the internet.”', 'The base model has a cut-off date. Web search is an optional add-on.'],
            ['“AI can replace human creativity.”', 'Its creativity is controlled variability. People still guide, judge and refine.'],
          ],
        },
      ],
    },
    {
      kicker: 'Takeaways',
      title: 'What to carry into the next chapter',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Generative AI is a super-predictor of patterns**, not a magician and not a mind.',
            '**Tokens** are the basic units it handles.',
            '**Temperature** is the slider between safe coherence and creative variety.',
            '**Limits:** a context window, no live data by itself, weak exact math and hallucinations.',
            '**Your role:** an informed partner who steers the tool and checks its work.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Generative AI', def: 'A program that creates new content, such as text, images, code or music, based on patterns learned from training data.' },
    { term: 'Prediction (next-token)', def: 'Calculating how likely each possible next piece of text is, given everything written so far.' },
    { term: 'Machine learning', def: 'Letting a system learn patterns from many examples instead of following hand-written rules.' },
    { term: 'Deep learning', def: 'Machine learning that uses neural networks with many stacked layers, each refining what the previous layer found.' },
    { term: 'Neural network', def: 'A system of connected mathematical units, loosely inspired by the brain, that learns patterns from data.' },
    { term: 'Transformer', def: 'The architecture behind ChatGPT-style models. It looks at all the words of a text together and weighs the links between them.' },
    { term: 'Token', def: 'A small piece of text the model works with: a word, part of a word, a number or a punctuation mark.' },
    { term: 'Tokenization', def: 'Cutting text into tokens before the model processes it.' },
    { term: 'Temperature', def: 'A setting that controls how adventurous the word choice is: low means safe and repetitive, high means varied and less predictable.' },
    { term: 'Pre-training', def: 'The first training phase, where the model learns language patterns from huge amounts of raw text.' },
    { term: 'Fine-tuning', def: 'A later phase that refines a model with high-quality example conversations.' },
    { term: 'Reinforcement learning from human feedback', def: 'Training in which people rate answers and the model is steered toward the ones they prefer.' },
    { term: 'Knowledge cut-off', def: 'The date after which the model has no training information. It cannot know later events unless given a tool or the text.' },
    { term: 'Context window', def: 'The limited amount of text, counted in tokens, that the model can consider at once. Older content outside it is “forgotten”.' },
    { term: 'Hallucination', def: 'A fluent, confident output that is false or invented, such as a fake source or statistic.' },
    { term: 'Multimodality', def: 'The ability of a model to work with more than one kind of input or output, such as text and images.' },
    { term: 'Web search (add-on)', def: 'An optional tool that lets the model fetch current information; it is not part of the base model itself.' },
  ],
  cards: [
    { front: 'Generative AI in one line', back: 'A super-predictor of patterns: it creates new content by predicting what comes next, based on what it learned in training.' },
    { front: 'Keyboard prediction vs generative AI', back: 'Same principle, different scale: a keyboard suggests the next word, a generative AI writes whole coherent passages and follows instructions.' },
    { front: 'Why do answers vary between runs?', back: 'The model samples from likely next words instead of always taking the top one. This controlled variability is a feature.' },
    { front: 'Machine learning vs deep learning', back: 'Machine learning learns from examples. Deep learning does it with many-layered neural networks.' },
    { front: 'What is special about Transformers?', back: 'They look at the whole text at once and weigh links between all words, instead of reading strictly left to right.' },
    { front: 'What is a token?', back: 'A small piece of text: a word, part of a word, a number or punctuation. It is the unit the model reads and writes.' },
    { front: 'The six steps of generating a reply', back: 'Tokenize, understand context, predict, select, repeat, keep coherent.' },
    { front: 'Three phases of training', back: 'Pre-training, supervised fine-tuning, reinforcement learning from human feedback.' },
    { front: 'What is the context window?', back: 'The model’s limited working memory in tokens. Content beyond it is no longer seen.' },
    { front: 'Why is AI bad at exact arithmetic?', back: 'It predicts patterns in text; it is not a calculator, so long calculations can be wrong.' },
    { front: 'What causes hallucinations?', back: 'Pressure to answer, confusing frequent patterns with facts, and over-generalizing from partial data.' },
    { front: 'Does more input always give better output?', back: 'No. Clear and relevant beats long. Too much can dilute the request or overflow the window.' },
    { front: 'Does ChatGPT have live internet access?', back: 'Not by itself. It has a knowledge cut-off; web search is an optional add-on.' },
    { front: 'Your role with AI', back: 'An informed partner: steer the tool, use its strengths, and check its work.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: the lawyers and the cases that did not exist',
    note: 'Mata v. Avianca, U.S. District Court, Southern District of New York. Facts as reported by LawNext on the sanctions order of 22 June 2023. Details such as the number of fake cases are left out because the report does not give them.',
    slides: [
      {
        kicker: 'What happened',
        title: 'A legal brief full of invented cases',
        blocks: [
          {
            type: 'p',
            text: 'In a personal-injury lawsuit against the airline Avianca, the plaintiff’s lawyers filed a brief containing case citations they had obtained from ChatGPT. The cited judicial opinions, with their quotes and citations, **did not exist**. The AI had produced text that looked exactly like real case law.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Sanction', value: '$5,000', note: 'On two lawyers and their firm' },
              { label: 'Date of order', value: '22 June 2023', note: 'Judge P. Kevin Castel' },
              { label: 'Court', value: 'S.D.N.Y.', note: 'U.S. District Court, New York' },
            ],
          },
        ],
      },
      {
        kicker: 'What the judge said',
        title: 'Using AI is not the offense. Not checking is.',
        blocks: [
          {
            type: 'bullets',
            items: [
              'The judge said using AI is not automatically improper, but lawyers remain the **gatekeepers** for the accuracy of what they file.',
              'The lawyers failed that role by submitting the fake opinions, and then **standing by them** after the court questioned whether they existed.',
              'The court found bad faith through “conscious avoidance and false and misleading statements to the Court”.',
              'Besides the $5,000 penalty, the lawyers had to notify their client and each judge falsely named as the author of a fake opinion.',
            ],
          },
          {
            type: 'callout',
            title: 'The point for you',
            text: 'The tool is responsible for nothing. **You are responsible for what you send out**, whoever or whatever drafted it.',
          },
        ],
      },
      {
        kicker: 'Link back to the chapter',
        title: 'Why this was predictable',
        blocks: [
          {
            type: 'table',
            head: ['Idea from Chapter 1', 'How it showed up'],
            rows: [
              ['Prediction, not lookup', 'Asked for cases, the model produced text shaped like cases. It did not search a database of real ones.'],
              ['Pressure to answer', 'It gave a confident answer rather than saying it had no verified source.'],
              ['Frequent pattern is not fact', 'Case names, courts and quotation styles follow familiar patterns, so fakes look right.'],
              ['Your role', 'A person had to verify each citation in an official source. That step was skipped.'],
            ],
          },
        ],
      },
      {
        kicker: 'Sources',
        title: 'Where these facts come from',
        blocks: [
          {
            type: 'sources',
            items: [
              {
                title: 'Court imposes sanctions on lawyers who filed bogus cases after relying on ChatGPT for legal research',
                url: 'https://www.lawnext.com/2023/06/court-imposes-sanctions-on-lawyers-who-filed-bogus-cases-after-relying-on-chatgpt-for-legal-research.html',
                note: 'LawNext, June 2023. The sanctions order in Mata v. Avianca and the fake case citations.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: the match report that got a score wrong',
    universe: 'beacon',
    slides: [
      {
        kicker: 'The situation',
        title: 'A busy press officer asks the AI for help',
        blocks: [
          {
            type: 'p',
            text: 'Beacon Athletic’s communications officer, Dana, has 20 minutes before the club website must post a match report. She pastes the match notes into a chat assistant and asks for a 200-word report. The draft reads beautifully. It says the winning goal came “in the 89th minute from the club’s captain”.',
          },
          {
            type: 'p',
            text: 'In the notes she pasted, the goal was scored in the 87th minute by a substitute. The captain was not on the pitch.',
          },
        ],
      },
      {
        kicker: 'Why it happened',
        title: 'Reading the error with Chapter 1 ideas',
        blocks: [
          {
            type: 'table',
            head: ['What went wrong', 'Chapter 1 idea'],
            rows: [
              ['The minute and the scorer were changed.', 'The model predicts a **plausible** match report. “Late goal by the captain” is a very common pattern, so it was a likely continuation.'],
              ['It sounded certain.', 'Hallucinations come with no warning label. Fluent does not mean true.'],
              ['It did not check the notes.', 'It has no built-in fact-checker, only patterns. The facts have to be supplied and then verified.'],
            ],
          },
        ],
      },
      {
        kicker: 'The fix',
        title: 'A safer routine in four moves',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Give the facts in the prompt.** Paste the verified match data and say: use only these facts.',
              '**Ask for what is missing.** “If a detail is not in the notes, write [CHECK] instead of guessing.”',
              '**Verify the details a fan would notice.** Scorers, minutes, scores, names and dates, against the official match sheet.',
              '**A person approves it.** The club, not the tool, is responsible for what is published.',
            ],
          },
          {
            type: 'callout',
            title: 'What AI is good for here',
            text: 'Tone, structure and speed. Dana can ask for three headline options in different tones, because variability helps with style but hurts with facts.',
          },
        ],
      },
      {
        kicker: 'The size of the task',
        title: 'Tokens and the context window in practice',
        blocks: [
          {
            type: 'p',
            text: 'Dana later wants the AI to summarize the whole 38-match season from pasted notes. The notes are far too long for one go.',
          },
          {
            type: 'bullets',
            items: [
              'The beginning of the pasted text may fall outside the context window, so the summary quietly ignores early matches.',
              'A better plan is to summarize each month separately, then ask for a summary of the summaries.',
              'Rare names (a player called “Oluwaseun Adebayo-Nwachukwu”) may split into many tokens. Spelling them out once and checking them afterwards avoids silly mistakes.',
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ practice
  questions: [
    {
      id: 'q1',
      type: 'mcq',
      q: 'Which statement best describes how ChatGPT produces text?',
      options: [
        'It looks up the correct answer in a database of verified facts.',
        'It predicts the most likely next token, over and over, based on patterns learned in training.',
        'It understands meaning exactly like a human expert.',
        'It copies a stored answer to the closest earlier question.',
      ],
      answer: 1,
      explanation: 'A generative AI is a “super-predictor”. It calculates probabilities for the next token and builds the answer one token at a time. It is not a database lookup and it does not understand in the human sense.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'You ask the same question three times and get three differently worded answers with the same meaning. Why?',
      options: [
        'The system is broken.',
        'The AI chooses among several likely next words rather than always the single most probable one.',
        'Each answer comes from a different human writer.',
        'The AI forgets your question each time.',
      ],
      answer: 1,
      explanation: 'The model samples from a range of plausible candidates. This controlled variability avoids repetitive, robotic output and is intentional.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'What is a token?',
      options: [
        'A paid credit for using the app.',
        'A small piece of text, such as a word, part of a word, a number or a punctuation mark.',
        'A password for the chat.',
        'A full paragraph.',
      ],
      answer: 1,
      explanation: 'Tokens are the building blocks the model reads and writes. Long or rare words are often split into several tokens.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'What makes the Transformer architecture different from older systems?',
      options: [
        'It reads strictly one word at a time from left to right.',
        'It looks at the whole text at once and weighs the relationships between all words, including distant ones.',
        'It only works with images.',
        'It has no layers.',
      ],
      answer: 1,
      explanation: 'The Transformer sees all the text together, like laying every clue on a board at once. This helps keep long texts coherent.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'You ask a chatbot (web search off) for the current price of a stock. What is the most likely, and most correct, behavior?',
      options: [
        'It states the exact live price.',
        'It explains it has no real-time data because of its knowledge cut-off.',
        'It refuses to speak.',
        'It guesses the live price with perfect accuracy.',
      ],
      answer: 1,
      explanation: 'Without a connected tool, the model has no real-time information. A knowledge cut-off is built into the base model.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Why can a chatbot make mistakes in a long multiplication such as 2847 × 9632 × 5391?',
      options: [
        'It is a pattern predictor for text, not a calculator.',
        'It refuses numbers.',
        'It is paid by the minute.',
        'Numbers are not tokens.',
      ],
      answer: 0,
      explanation: 'The model predicts likely answers from patterns rather than running exact arithmetic. For precise math, use a calculator, a spreadsheet or a code tool.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Which is the correct order of the three training phases?',
      options: [
        'Reinforcement learning, pre-training, fine-tuning.',
        'Pre-training, supervised fine-tuning, reinforcement learning from human feedback.',
        'Fine-tuning, pre-training, reinforcement learning.',
        'Only pre-training is used.',
      ],
      answer: 1,
      explanation: 'Models first learn general language patterns, then are refined with good example conversations, then are tuned toward answers people prefer.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'What is the context window?',
      options: [
        'The browser window where you type.',
        'The limited amount of text, measured in tokens, the model can take into account at once.',
        'The length of time the app stays open.',
        'The list of your past chats.',
      ],
      answer: 1,
      explanation: 'It is the model’s working memory. Content that falls outside it is no longer seen, which matters for long documents and long conversations.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'Which of the following is a cause of hallucinations listed in the lesson?',
      options: [
        'Pressure to produce an answer even without certainty.',
        'The AI deliberately lies to the user.',
        'The user typing too fast.',
        'Too few tokens in the keyboard.',
      ],
      answer: 0,
      explanation: 'The lesson names pressure to respond, confusing frequent patterns with verified facts, and over-generalizing from partial data. It is a side effect of probabilistic text generation, not a deliberate deception.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'True or false: the more information you paste into the prompt, the better the answer always is.',
      options: [
        'True: more is always better.',
        'False: relevance and clarity matter more, and too much text can dilute the request or push earlier content out of the context window.',
        'True, but only for images.',
        'False: you should never paste anything.',
      ],
      answer: 1,
      explanation: 'The lesson’s myth check is clear on this. Give what is relevant, in a clear structure.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'In Mata v. Avianca, what did the judge treat as the real failure?',
      options: [
        'That the lawyers used a computer at all.',
        'That the lawyers submitted AI-generated citations without verifying them and then stood by them.',
        'That ChatGPT is illegal in New York.',
        'That the brief was too short.',
      ],
      answer: 1,
      explanation: 'The court said AI use is not automatically improper, but lawyers must check the accuracy of what they file. The sanction followed the failure to verify and the false statements afterwards.',
      review: { section: 'real', slide: 1 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'Which tactic best reduces the risk of hallucinated facts in a match report?',
      options: [
        'Ask for a longer report.',
        'Supply verified facts, tell the AI to use only those, and check key details afterwards.',
        'Turn up the temperature.',
        'Ask the AI if it is sure.',
      ],
      answer: 1,
      explanation: 'Grounding the answer in supplied facts and verifying the details a reader would notice is the dependable approach. Asking the AI whether it is sure does not check anything.',
      review: { section: 'sports', slide: 2 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'A colleague says: “ChatGPT looks things up and knows the truth, so we can paste its answers straight into our reports.” Explain how a generative AI actually produces text and why the colleague’s plan is risky. Use at least three technical ideas from the chapter.',
      answer: [
        'A generative AI is a prediction system. It cuts the prompt into tokens, uses a Transformer to weigh the relationships between all of them, calculates the probability of every possible next token, selects one from the likely candidates (not always the top one) and repeats the process token by token. It is trained on huge amounts of text, so it has learned patterns of language, not a verified database of facts.',
        'Because it generates the most plausible continuation, it can produce hallucinations: fluent, confident statements that are false. Causes include pressure to answer, treating frequent patterns as facts and over-generalizing. It also has a knowledge cut-off and no live data on its own, and its context window is limited, so it may ignore parts of a long input.',
        'Pasting its output straight into a report is therefore risky. The user remains responsible and must verify names, numbers, dates and sources. A safer method is to supply verified facts in the prompt, tell the AI to use only them, and check the key details before publishing.',
      ],
      marking: [
        'Describes next-token prediction rather than lookup (2)',
        'Mentions tokens and/or Transformer context handling (1)',
        'Explains hallucination and at least one cause (2)',
        'Mentions a limitation such as cut-off, no live data or context window (1)',
        'Concludes the human must verify, with a practical safeguard (2)',
      ],
    },
    {
      id: 'e2',
      marks: 6,
      q: 'Explain why the same prompt can produce different answers, and say what the “temperature” setting changes. Give one task where you want low variability and one where you want high variability.',
      answer: [
        'At each step the model scores many possible next tokens and then samples from the plausible ones instead of always taking the single most likely token. This controlled variability avoids repetitive, robotic text, so the same prompt gives different wordings with a similar meaning.',
        'Temperature is the slider between coherence and creativity. A low temperature makes the model choose the safest, most probable tokens (more consistent, more repetitive). A high temperature lets it choose less likely tokens (more varied, more surprising, but with more risk of drifting).',
        'Low variability suits factual or consistent tasks such as summarizing official match data or extracting figures from a table. High variability suits brainstorming, such as generating many different slogans or event ideas.',
      ],
      marking: [
        'Explains sampling from likely candidates (2)',
        'Defines temperature correctly (2)',
        'One suitable low-variability task (1)',
        'One suitable high-variability task (1)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'You paste a 90-page strategy document into a chatbot and ask for a summary. The summary ignores the first third of the document and states one figure that is not in the text. Using the concepts of the context window, tokens and hallucination, explain what probably happened and describe how you would redo the task.',
      answer: [
        'The document probably exceeds the model’s context window, which is measured in tokens. Text outside the window is no longer seen, so the earliest part was effectively forgotten and the summary ignored it.',
        'The invented figure is a hallucination: the model had to produce a fluent summary and filled a gap with a plausible-sounding number, confusing a typical pattern with a verified fact.',
        'To redo it, split the document into sections that fit the window, summarize each one with the instruction to use only the supplied text and to flag missing information, then ask for a summary of the section summaries. Finally verify every figure and quotation against the original document before using the result.',
      ],
      marking: [
        'Links the ignored part to the context window and tokens (2)',
        'Identifies the figure as a hallucination and gives a cause (2)',
        'Proposes splitting into sections (2)',
        'Includes a “use only the supplied text” instruction (1)',
        'Includes human verification against the source (1)',
      ],
    },
  ],

  videos: [],
};
