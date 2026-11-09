// Techway, Chapter 3: The fundamentals of prompt engineering (the CLEAR framework).
// Built from Chapter 3 of the Techway lesson document (why spontaneous requests fail, the three pitfalls, CLEAR =
// Context / Length / Examples / Audience / Role, basic to advanced CLEAR, the seven warning signals of a faulty prompt,
// iterative refinement and the three levels of mastery).
// Real example: OpenAI's published "Prompt engineering" guide for developers (strategies announced 16 December 2023,
// as summarized by The Decoder), which lines up closely with CLEAR.

export const promptFundamentalsTopic = {
  id: 'prompt-fundamentals',
  course: 'techway',
  title: 'Prompt engineering fundamentals: the CLEAR framework',
  sessions: 'Chapter 3',
  reading: 'Techway lesson, Chapter 3',
  minutes: 40,
  summary:
    'Why vague requests give generic answers and how to fix them. Learn CLEAR (Context, Length, Examples, Audience, Role), the cascade, composite-role and meta-prompt techniques, the seven warning signals of a bad prompt and the iterative refinement method.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The problem',
      title: 'Why “just talk to it” falls short',
      blocks: [
        {
          type: 'big',
          text: 'A person fills in the gaps of a vague request. An AI **generates from exactly what you wrote**. The less you say, the more it has to guess.',
        },
        {
          type: 'p',
          text: 'Try “Write me something interesting”. You will get a general text on a broad topic in a neutral style and a medium length. Not bad, but probably not what you had in mind. The AI did its best with too little information.',
        },
        {
          type: 'callout',
          title: 'The chef picture',
          text: 'Walking into a top restaurant and saying “make me something to eat” gets you a dish, but the chef must guess: vegetarian? Allergic? Hungry or peckish? In a hurry? Budget? The AI is your digital chef. Tell it your tastes, limits and goal.',
        },
      ],
    },
    {
      kicker: 'Common mistakes',
      title: 'Three pitfalls for beginners',
      blocks: [
        {
          type: 'table',
          head: ['Pitfall', 'The false belief', 'Reality', 'Fix'],
          rows: [
            ['1. Misplaced economy of words', '“Shorter is better.”', 'AI needs relevant context to do well. Relevant, not long.', '“Help me with my resume” becomes “Rewrite the experience section of my resume for a digital project manager job at a startup; highlight my 3 years at a web agency and agile skills.”'],
            ['2. Unshared implicit context', '“It will understand my situation.”', 'It only knows what you tell it.', '“Improve our marketing” becomes “I run an online ethical-clothing shop for women 25-40 with a €2,000/month budget; conversions are stuck at 1.2%. How can we raise them?”'],
            ['3. Vague objective', '“I’ll see what it produces.”', 'Without a goal even a good text may be unusable.', '“Tell me about AI” becomes “Explain AI’s impact on marketing jobs in 2024 so I can advise my students on skills to build.”'],
          ],
        },
      ],
    },
    {
      kicker: 'The framework',
      title: 'CLEAR: five elements of a strong prompt',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'C: Context', text: 'Who, where, when, what is at stake.' },
            { title: 'L: Length', text: 'How much, and in what format.' },
            { title: 'E: Examples', text: 'Samples that show the style or structure you want.' },
            { title: 'A: Audience', text: 'Who the result is for.' },
            { title: 'R: Role', text: 'What expertise the AI should adopt.' },
          ],
        },
        {
          type: 'callout',
          title: 'Order does not matter',
          text: 'The lesson’s own worked examples list the elements in different orders (for example R, C, A, L, E). What matters is that all five are covered.',
        },
      ],
    },
    {
      kicker: 'C: Context',
      title: 'Context: four kinds',
      blocks: [
        {
          type: 'p',
          text: 'The AI adjusts its detail level, vocabulary and references to the context you give.',
        },
        {
          type: 'table',
          head: ['Type', 'Answers the question', 'Examples'],
          rows: [
            ['Situational', 'Where and when?', '“For a client presentation tomorrow morning.” “Ahead of the September product launch.”'],
            ['Functional', 'What is my role?', '“As an HR manager in a tech SME.” “As a freelance soft-skills trainer.”'],
            ['Organizational', 'What is my environment?', '“A fast-growing start-up with a relaxed culture.” “A large bank with formal procedures.” “A non-profit on a tight budget.”'],
            ['Stakes', 'Why does it matter now?', '“After negative client feedback on support.” “To comply with the new GDPR regulation.” “A big competitor just entered our market.”'],
          ],
        },
      ],
    },
    {
      kicker: 'L: Length',
      title: 'Length: set the size and shape',
      blocks: [
        {
          type: 'p',
          text: 'Without guidance, the AI aims for a “happy medium” that may be wrong for you. It can write a 280-character post or a 50-page report.',
        },
        {
          type: 'table',
          head: ['Size', 'Ways to ask'],
          rows: [
            ['Short', '“In 3 bullet points”, “summary of 100 words max”, “a 250-character post”.'],
            ['Medium', '“A detailed paragraph”, “a standard professional e-mail”, “a 5-slide presentation”.'],
            ['Long', '“A full analysis in 1,000 words”, “a detailed guide with examples”, “a structured multi-section report”.'],
          ],
        },
        {
          type: 'callout',
          title: 'Expert tip: combine length AND structure',
          text: '“Write an e-mail of 200 words maximum: a hook (1 sentence), the problem (1 paragraph), the solution (1 paragraph) and a call to action (1 sentence).”',
        },
      ],
    },
    {
      kicker: 'E: Examples',
      title: 'Examples: show instead of tell',
      blocks: [
        {
          type: 'p',
          text: 'This is **few-shot prompting**: give 1 to 3 samples and the AI copies the pattern. Chapter 4 goes deeper.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Style examples', text: 'Paste a few sentences with the tone you want: “Adopt a tone like these sentences…”.' },
            { title: 'Structure examples', text: 'Give a skeleton: CHALLENGE / SOLUTION / RESULT, and ask it to fill each part.' },
            { title: 'Format examples', text: 'Show a mini layout: a title, a bold key point, a one-line practical tip.' },
          ],
        },
      ],
    },
    {
      kicker: 'A: Audience',
      title: 'Audience: same content, different message',
      blocks: [
        {
          type: 'table',
          head: ['Audience', 'What the AI should do'],
          rows: [
            ['Novices', 'Avoid jargon, use analogies, start with basics, encourage.'],
            ['Experts', 'Use technical vocabulary, focus on nuance, cite recent developments, challenge and go deeper.'],
            ['Decision-makers', 'Start with business impact, summarize, quantify benefits and risks, give clear recommendations.'],
            ['Operational staff', 'Detail the steps, expect practical difficulties, supply tools and examples.'],
          ],
        },
      ],
    },
    {
      kicker: 'R: Role',
      title: 'Role: borrow an expert’s way of thinking',
      blocks: [
        {
          type: 'p',
          text: 'Asking the AI to act as a specific expert shifts its **vocabulary**, **references** (theories, tools, best practices), **method** (structured or creative) and **angle** (business, technical, human).',
        },
        {
          type: 'columns',
          items: [
            { title: 'General roles', text: '“Act as a senior consultant in [field]”, “an experienced coach specializing in [issue]”, “a seasoned analyst in [sector]”.' },
            { title: 'Specialized roles', text: '“A growth marketer with 10 years in B2B software”, “a CFO who has supported three fundraising rounds”, “a certified Scrum Master”.' },
          ],
        },
        {
          type: 'callout',
          title: 'A role is a lens, not a license',
          text: 'Saying “you are a doctor” does not make the answer medically reliable. It only changes the style and approach. Facts still need checking.',
        },
      ],
    },
    {
      kicker: 'Put it together',
      title: 'From “help me be productive” to a CLEAR prompt',
      blocks: [
        {
          type: 'table',
          head: ['Element', 'Content'],
          rows: [
            ['Role', 'A productivity coach who supports tech managers.'],
            ['Context', 'I manage 3 teams (8 people) at a fast-growing fintech start-up, with 40+ e-mails a day and 6 hours of meetings. I spend my days “putting out fires” instead of working on strategy.'],
            ['Audience', 'Myself: intermediate on productivity methods; I tried GTD and Pomodoro without full success.'],
            ['Length', 'An action plan of 300 words maximum, 3 priority areas with 2 concrete actions each.'],
            ['Examples', 'Draw on the “Deep Work” approach and on how well-known software companies organize work.'],
          ],
        },
        {
          type: 'p',
          text: 'Compare that with “Help me improve my productivity”. The difference in the precision of the expected answer is the whole point of CLEAR.',
        },
      ],
    },
    {
      kicker: 'Levels 2 and 3',
      title: 'Intermediate and advanced CLEAR techniques',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Cascade prompts', text: 'Break a big job into several linked CLEAR prompts. Example: (1) analysis with a SWOT, (2) strategy based on that SWOT, (3) week-by-week execution plan for one axis.' },
            { title: 'Composite roles', text: 'Blend two expertises, such as a mix of product vision and marketing, or structure from a consultancy plus design thinking.' },
            { title: 'Dynamic context', text: 'State the starting situation, the expected change and the flexibility needed.' },
            { title: 'Multi-level audience', text: 'Name the main audience, the secondary readers and the sensitivities to respect.' },
          ],
        },
        {
          type: 'callout',
          title: 'The meta-prompt',
          text: '“I want to create [goal]. Help me build the best CLEAR prompt by asking me the right questions about Context, Length, Examples, Audience and Role, step by step.” The AI interviews you and reveals what you forgot.',
        },
      ],
    },
    {
      kicker: 'Diagnosis',
      title: 'Seven warning signals of a faulty prompt',
      blocks: [
        {
          type: 'table',
          head: ['#', 'Symptom', 'Likely cause', 'Remedy'],
          rows: [
            ['1', 'Correct but generic content.', 'Not enough specific context.', 'Add concrete details of your situation.'],
            ['2', 'Answers a different question.', 'Unclear objective or ambiguous wording.', 'Rewrite the goal with a precise action verb.'],
            ['3', 'Too basic, or incomprehensible.', 'Audience not defined.', 'State the expected level of expertise.'],
            ['4', 'Good but unusable as is.', 'Length and format not specified.', 'Describe the output format, with an example.'],
            ['5', 'Style does not fit the use.', 'Wrong role or no style examples.', 'Change the role and give tone samples.'],
            ['6', 'Always the same kind of answer.', 'Prompts too alike, no creativity requested.', 'Vary roles and ask for originality.'],
            ['7', 'Dates, numbers or facts look wrong.', 'Outside its knowledge, or hallucination.', 'Name expected sources or limit to general principles; verify.'],
          ],
        },
      ],
    },
    {
      kicker: 'Repairing',
      title: 'Iterative refinement, step by step',
      blocks: [
        {
          type: 'p',
          text: 'Improve the prompt step by step instead of rewriting everything.',
        },
        {
          type: 'steps',
          items: [
            '**Start minimal** to test how the AI reads your basic request.',
            '**Add missing context:** “In addition to my request, here is the context I forgot…”.',
            '**Fix the format:** “Reformat your answer as…”.',
            '**Adjust tone:** “Now adapt the tone for [audience].”',
            '**Deepen one point:** “Expand on point X with this detail.”',
          ],
        },
        {
          type: 'p',
          text: 'Worked diagnosis from the lesson: “Write something good for my business” lacks context, objective, audience, format and role. A repaired version names the business (a handmade-jewelry shop earning €50k a year aiming to double), the role (a digital-strategy consultant), the reader (a business novice), the length (300 words, 5 steps) and the tone (direct, reassuring, no jargon).',
        },
      ],
    },
    {
      kicker: 'Where this leads',
      title: 'Three levels of mastery',
      blocks: [
        {
          type: 'table',
          head: ['Level', 'What you can do'],
          rows: [
            ['1. Functional prompt engineer (this chapter)', 'Use CLEAR, turn spontaneous requests into structured ones, diagnose and fix prompts, get predictable usable results.'],
            ['2. Specialized prompt engineer (Chapter 4)', 'Use techniques by domain, multi-step and conditional prompts, handle complex constraints.'],
            ['3. Expert prompt engineer (Chapters 5-8)', 'Build interconnected prompt systems, invent your own methods, solve multi-dimensional problems, teach others.'],
          ],
        },
        {
          type: 'bullets',
          items: [
            '**CLEAR** is the universal checklist: Context, Length, Examples, Audience, Role.',
            'Use the **seven signals** to diagnose a poor answer quickly.',
            '**Refine** progressively instead of starting over.',
            'The right **role** unlocks expert-style answers (but still verify facts).',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Prompt', def: 'The instruction or question you give a generative AI.' },
    { term: 'Prompt engineering', def: 'The skill of writing clear, structured prompts that reliably produce the output you need.' },
    { term: 'CLEAR', def: 'The lesson’s framework: Context, Length, Examples, Audience, Role.' },
    { term: 'Context', def: 'The background of your request: the situation, your role, your organization and what is at stake.' },
    { term: 'Length (and format)', def: 'The size and shape you want the answer to take, such as 3 bullets, 200 words or 8 slides.' },
    { term: 'Examples (few-shot)', def: 'A small number of samples of the style, structure or format you want the AI to copy.' },
    { term: 'Audience', def: 'The people who will read or use the result. It sets the level, tone and focus.' },
    { term: 'Role', def: 'The expert identity you ask the AI to adopt, which shapes its vocabulary, references, method and angle.' },
    { term: 'Implicit context', def: 'Background you know but have not stated. The AI cannot see it.' },
    { term: 'Cascade prompt', def: 'A chain of linked CLEAR prompts in which each step builds on the previous answer.' },
    { term: 'Composite role', def: 'A role that blends two or more areas of expertise to get richer answers.' },
    { term: 'Meta-prompt', def: 'A prompt that asks the AI to help you build the best prompt by asking you questions.' },
    { term: 'Iterative refinement', def: 'Improving a prompt and its answer step by step (context, format, tone, depth) instead of starting again.' },
    { term: 'Generic output', def: 'A correct but bland answer that could apply to anyone. A sign the prompt lacked specific context.' },
  ],
  cards: [
    { front: 'What does CLEAR stand for?', back: 'Context, Length, Examples, Audience, Role.' },
    { front: 'The four kinds of context', back: 'Situational, functional, organizational and stakes.' },
    { front: 'Why specify length AND structure?', back: 'Length alone gives a happy medium. Adding structure (hook, problem, solution, call to action) gives control.' },
    { front: 'What is few-shot prompting?', back: 'Giving 1 to 3 examples of the style, structure or format wanted so the AI repeats the pattern.' },
    { front: 'Why define the audience?', back: 'The same content must change with the reader’s expertise and role (novice, expert, decision-maker, operational staff).' },
    { front: 'What does a role change?', back: 'Vocabulary, references, method and angle of analysis.' },
    { front: 'The three beginner pitfalls', back: 'Misplaced economy of words, unshared implicit context, vague objective.' },
    { front: 'What is a cascade prompt?', back: 'Several connected CLEAR prompts: analysis, then strategy, then execution.' },
    { front: 'What is a meta-prompt?', back: 'Asking the AI to interview you about C, L, E, A, R and co-create the best prompt.' },
    { front: 'Signal 1: correct but generic', back: 'Cause: lack of specific context. Remedy: add concrete details.' },
    { front: 'Signal 7: suspicious facts', back: 'Cause: beyond its knowledge or hallucination. Remedy: name sources or keep to general principles, and verify.' },
    { front: 'Iterative refinement in five steps', back: 'Minimal prompt, add context, set format, adjust tone, deepen one point.' },
    { front: 'Is a role a guarantee of accuracy?', back: 'No. It changes style and approach, not reliability. Facts still need checking.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real guide: what OpenAI tells developers to do',
    note: 'OpenAI’s prompt engineering guide, released 16 December 2023, summarized by The Decoder. The strategies are paraphrased here and compared with CLEAR. This is our own comparison, not something OpenAI says.',
    slides: [
      {
        kicker: 'The guide',
        title: 'Six strategies from the company that makes ChatGPT',
        blocks: [
          {
            type: 'p',
            text: 'In December 2023 OpenAI published a guide to getting better results from its models. As summarized by The Decoder, it lists six strategies.',
          },
          {
            type: 'steps',
            items: [
              '**Write clear instructions.** Include details, assign a role, use delimiters, specify steps, give examples and set the output length.',
              '**Provide reference text.** Ground answers in text you supply to reduce wrong answers.',
              '**Split complex tasks** into simpler subtasks.',
              '**Give the model time to “think”.** Ask for step-by-step reasoning before the final answer.',
              '**Use external tools** such as search or code execution.',
              '**Test changes systematically.** Evaluate prompts repeatably rather than by gut feeling.',
            ],
          },
        ],
      },
      {
        kicker: 'Compare',
        title: 'The first strategy is CLEAR in other words',
        blocks: [
          {
            type: 'table',
            head: ['OpenAI’s “clear instructions” tactic', 'CLEAR element'],
            rows: [
              ['Include details in your query', 'Context'],
              ['Ask the model to adopt a persona', 'Role'],
              ['Provide examples', 'Examples'],
              ['Specify the desired output length', 'Length'],
              ['(Implied: say who the output is for)', 'Audience'],
            ],
          },
          {
            type: 'callout',
            title: 'Why it matters',
            text: 'The framework you learned is not a classroom invention. It matches what the tool-makers themselves recommend, so the habit will still be useful when interfaces change.',
          },
        ],
      },
      {
        kicker: 'What comes next',
        title: 'The other strategies are in later chapters',
        blocks: [
          {
            type: 'table',
            head: ['OpenAI strategy', 'Where you meet it in Techway'],
            rows: [
              ['Split complex tasks', 'Multi-step prompt architectures and the productivity workflows (Chapters 5 and 8).'],
              ['Give time to think', 'Chain-of-thought (Chapter 8).'],
              ['Reference text', 'Information analysis and sourcing (Chapter 7); anonymization (GDPR chapter).'],
              ['External tools', 'The AI ecosystem (Beyond ChatGPT).'],
              ['Test changes', 'Prompt A/B testing (Chapter 8) and continuous improvement (Mock exam).'],
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
                title: 'OpenAI releases prompt guide for better ChatGPT and LLM performance',
                url: 'https://the-decoder.com/openai-releases-prompt-guide-for-better-chatgpt-and-llm-performance/',
                note: 'The Decoder, December 2023. Summary of OpenAI’s six strategies. The comparison with CLEAR is ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: the sponsor thank-you e-mail',
    universe: 'beacon',
    slides: [
      {
        kicker: 'The vague version',
        title: 'What Dana typed first',
        blocks: [
          {
            type: 'callout',
            title: 'Prompt v1',
            text: '“Write an email to our sponsor.”',
          },
          {
            type: 'p',
            text: 'The reply is polite, long and generic: “Dear Partner, thank you for your continued support…”. It could have come from any club. Using the seven signals: **signal 1** (generic) and **signal 4** (not usable as is). The missing pieces are context, audience, length, role and examples.',
          },
        ],
      },
      {
        kicker: 'Rebuild with CLEAR',
        title: 'Five elements, one strong prompt',
        blocks: [
          {
            type: 'table',
            head: ['Element', 'Dana’s answer'],
            rows: [
              ['Role', 'Act as an experienced sponsorship manager at a mid-sized football club.'],
              ['Context', 'Our shirt sponsor, a regional bank, just saw its logo on the fan-zone screens at the derby, which drew a record crowd of 11,400. They have asked for a mid-season review meeting.'],
              ['Audience', 'The bank’s marketing director: busy, numbers-minded, cares about visibility and community image.'],
              ['Length', 'A 150-word e-mail: a hook (1 sentence), one paragraph of highlights, one paragraph proposing a meeting date, a closing line.'],
              ['Examples', 'Tone like this opening: “Saturday’s derby was our biggest crowd of the season, and your name was on every big screen.”'],
            ],
          },
          {
            type: 'p',
            text: 'The attendance figure is a made-up number for this fictional club. Notice that Dana gave no private contract terms.',
          },
        ],
      },
      {
        kicker: 'Repair',
        title: 'Refining instead of restarting',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Check:** the reply is warm but over 200 words. That is a length signal.',
              '**Refine:** “Cut to 150 words and move the meeting proposal to the first paragraph.”',
              '**Adjust tone:** “Slightly more formal; the director prefers brief, direct notes.”',
              '**Verify:** the attendance and match details are checked against the club’s own records before sending.',
            ],
          },
          {
            type: 'callout',
            title: 'Meta-prompt bonus',
            text: 'Next time Dana asks the AI: “Help me build a CLEAR prompt for a sponsor update by asking me the right questions.” The AI asks about the sponsor’s goals, the tone and the length and fills the gaps.',
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
      q: 'Why does a vague request such as “Write me something interesting” usually give a mediocre result?',
      options: [
        'The AI refuses vague requests.',
        'The AI has to guess your intentions from very little information, because it generates exactly from what you wrote.',
        'The AI cannot write about anything interesting.',
        'It always gives a very long answer.',
      ],
      answer: 1,
      explanation: 'A human fills in gaps intuitively; the AI does not. With too little information it calculates a likely general answer.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What does CLEAR stand for?',
      options: [
        'Clarity, Logic, Emotion, Accuracy, Review',
        'Context, Length, Examples, Audience, Role',
        'Concept, Layout, Evidence, Action, Result',
        'Check, Learn, Edit, Apply, Repeat',
      ],
      answer: 1,
      explanation: 'C = Context, L = Length (and format), E = Examples, A = Audience, R = Role.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: '“Following negative client feedback on our support” is an example of which kind of context?',
      options: ['Situational', 'Functional', 'Organizational', 'Context of stakes'],
      answer: 3,
      explanation: 'It explains why the request matters now. The four kinds are situational (where/when), functional (your role), organizational (your environment) and stakes (why now).',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'You want a message that is easy to use straight away. Which length instruction gives the best control?',
      options: [
        '“Make it good.”',
        '“200 words maximum: a hook of one sentence, one paragraph on the problem, one on the solution and a one-sentence call to action.”',
        '“Write as much as you can.”',
        '“Short.”',
      ],
      answer: 1,
      explanation: 'Combining length and structure gives the most control. The other options leave the AI to guess.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which CLEAR element corresponds to few-shot prompting?',
      options: ['Context', 'Length', 'Examples', 'Role'],
      answer: 2,
      explanation: 'Few-shot prompting means giving 1 to 3 samples of the style, structure or format wanted so the AI copies the pattern.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'For a message aimed at board members who decide on budgets, what should the AI do?',
      options: [
        'Use heavy technical vocabulary.',
        'Start with business impact, summarize, quantify benefits and risks and give a clear recommendation.',
        'Explain basic definitions at length.',
        'Include as many implementation details as possible.',
      ],
      answer: 1,
      explanation: 'Decision-makers need impact first, short summaries, numbers and recommendations. Operational staff need implementation steps.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'What changes when you give the AI a specific role?',
      options: [
        'Its facts become guaranteed correct.',
        'Its vocabulary, references, method and angle of analysis shift toward that kind of expert.',
        'Nothing changes.',
        'It stops using tokens.',
      ],
      answer: 1,
      explanation: 'A role changes style and approach. It does not guarantee accuracy, so facts still need verification.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which statement is a pitfall called “unshared implicit context”?',
      options: [
        'Writing a very long prompt.',
        'Asking “How can we improve our marketing strategy?” without saying who “we” are, the budget or the goal.',
        'Giving an example.',
        'Naming the audience.',
      ],
      answer: 1,
      explanation: 'The AI only knows what you tell it. “We”, the budget and the situation have to be stated.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'You break a marketing-strategy job into three prompts: analysis, then strategy based on the analysis, then a weekly action plan. What is this technique called?',
      options: ['Composite role', 'Cascade prompt', 'Meta-prompt', 'Temperature'],
      answer: 1,
      explanation: 'A cascade breaks a complex request into linked CLEAR prompts, each building on the last answer.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'What is a meta-prompt?',
      options: [
        'A prompt written in a very small font.',
        'A prompt that asks the AI to help you build the best prompt by asking you questions about C, L, E, A and R.',
        'A prompt with no words.',
        'A prompt that ignores the audience.',
      ],
      answer: 1,
      explanation: 'It turns the AI into an interviewer that reveals the dimensions you forgot.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'The AI’s answer is correct but is so general it could apply to any business. According to the seven warning signals, what should you do?',
      options: [
        'Enrich the context with concrete details of your situation.',
        'Remove the audience.',
        'Delete the role.',
        'Ask for a shorter answer only.',
      ],
      answer: 0,
      explanation: 'Signal 1 (generic content) means not enough specific context. Add real details.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'The answer contains dates and numbers that look inaccurate. Which is the recommended remedy?',
      options: [
        'Trust them because the tone is confident.',
        'Name the expected sources or limit the request to general principles, and verify the facts.',
        'Increase the temperature.',
        'Ask for a longer answer.',
      ],
      answer: 1,
      explanation: 'Signal 7 points to a request outside the AI’s knowledge or a hallucination. Constrain the request and check the facts.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q13',
      type: 'mcq',
      q: 'Which approach follows the iterative refinement method?',
      options: [
        'Discard the prompt and write a new one from scratch every time.',
        'Start with a minimal prompt, then add missing context, set the format, adjust the tone and deepen one point.',
        'Never change the prompt.',
        'Ask the same question 20 times.',
      ],
      answer: 1,
      explanation: 'Step-by-step improvement saves effort and shows which change made the difference.',
      review: { section: 'plain', slide: 11 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A sports club’s ticketing manager writes this prompt: “Write something good about our season ticket offer.” (a) Diagnose the prompt using at least four of the seven warning signals or the CLEAR elements. (b) Rewrite it as a complete CLEAR prompt. Use invented but plausible details and no confidential data.',
      answer: [
        'Diagnosis: the context is missing (which club, which offer, what stakes), the objective is vague (“something good”), the audience is undefined (current members, new fans, companies?), the format and length are not specified (post, e-mail, flyer, length?) and there is no role or style example. The likely result is generic content (signal 1) that cannot be used directly (signal 4) and a tone that may not fit (signal 5).',
        'CLEAR version. Role: act as an experienced ticketing and membership marketer at a mid-sized football club. Context: we want to sell 500 additional season tickets before the first home game; the new family package costs less per match than single tickets and includes a children’s area. Audience: local families with children under 12, many of whom attend only a few games a year. Length: a 120-word e-mail with a one-sentence hook, two short paragraphs (benefits, deadline) and a clear call to action. Examples: friendly and simple, like “Bring the whole family: your seats are waiting.”',
        'The rewritten prompt gives the AI the situation, the goal, the reader, the form and a style reference, so the output can be used with only light edits. The numbers should still be checked against club data before publication.',
      ],
      marking: [
        'Identifies at least four problems and links to CLEAR or signals (3)',
        'Includes a role (1)',
        'Gives specific context and a clear goal (2)',
        'Defines the audience (1)',
        'Specifies length and structure (2)',
        'Provides a style example (1)',
      ],
    },
    {
      id: 'e2',
      marks: 6,
      q: 'Explain the difference between a cascade prompt and a meta-prompt, and give a sports-business situation where each would be useful.',
      answer: [
        'A cascade prompt splits a complex job into several linked CLEAR prompts, each using the output of the previous one. For example, to plan a sponsor campaign: first an analysis of the sponsor’s goals, then a strategy built on that analysis, then a week-by-week action plan. It keeps each step focused and lets you validate before moving on.',
        'A meta-prompt asks the AI to help you build the prompt itself by interviewing you about Context, Length, Examples, Audience and Role. It is useful when you are unsure what to include, for instance when a club employee must write a sponsorship proposal for the first time and does not know which details matter.',
        'Summary: the cascade organizes the work across steps; the meta-prompt improves the prompt before it is used.',
      ],
      marking: [
        'Correct definition of cascade prompt (2)',
        'Correct definition of meta-prompt (2)',
        'Relevant sports-business example for each (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'An AI-generated report for a club board is accurate in content but too technical and far too long. Name the two most likely prompt problems, give the remedy for each and explain how iterative refinement would fix the current report without starting again.',
      answer: [
        'Too technical points to a poorly defined audience (signal 3): the AI did not know the board members are non-technical. Too long and hard to use points to missing length and format specifications (signal 4). Remedies: state the expected level of expertise and the audience’s priorities, and give a precise length and structure.',
        'With iterative refinement, keep the report and issue follow-up instructions: adapt the tone and vocabulary for non-technical board members, reformat it with a one-paragraph summary and three key decisions, cut it to about one page, then expand one section if needed. This improves the output step by step without rewriting the whole prompt.',
        'Before circulating, the numbers and claims should be checked against the source data.',
      ],
      marking: [
        'Identifies audience problem (1)',
        'Identifies length/format problem (1)',
        'Gives a correct remedy for each (2)',
        'Describes refinement as follow-up instructions rather than restarting (2)',
      ],
    },
  ],

  videos: [],
};
