// Techway, Mock exam and final exam preparation.
// Built from the Mock Exam, its correction, "Key points for success" and "Preparation for the final exam (MCQ)" in the
// Techway lesson document: seven progressive exercises (marks and time plan), the model answers, grading ideas and the
// multiple-choice strategy. The exam-style questions here are new practice items in the same spirit, not copies.
// Real example: Klarna's AI customer-service assistant and its 2025 move back towards human support
// (Customer Experience Dive, 9 May 2025, citing a Bloomberg interview with Klarna's CEO).

export const mockExamTopic = {
  id: 'mock-exam',
  course: 'techway',
  title: 'Mock exam and final exam preparation',
  sessions: 'Mock exam',
  reading: 'Techway lesson, Mock exam and exam preparation',
  minutes: 45,
  summary:
    'What the practice exam looks like (seven exercises, marks and timing), how each exercise is answered, the mistakes that cost marks, and a strategy and checklist for the multiple-choice final exam.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'Format',
      title: 'What the mock exam looks like',
      blocks: [
        {
          type: 'p',
          text: 'The course’s practice exam lasts about **2 hours**, has **7 progressive exercises** plus a bonus, allows a generative AI tool of your choice and is answered in a separate document. The final exam is described in the lesson as **multiple choice (single answer)**. The mock exam trains the skills behind it.',
        },
        {
          type: 'table',
          head: ['Exercise', 'Skill', 'Points', 'Suggested time'],
          rows: [
            ['1', 'Diagnose and structure a prompt (CLEAR)', '15', '15 min'],
            ['2', 'Design a specialized assistant and a test prompt', '20', '25 min'],
            ['3', 'Choose a human-AI workflow pattern and design the workflow', '18', '20 min'],
            ['4', 'Image generation prompt and a modification prompt', '15', '18 min'],
            ['5', 'Chain-of-thought prompt and its application', '18', '25 min'],
            ['6', 'Ethics and confidentiality (GDPR by design)', '10', '12 min'],
            ['7', 'Optimization of a poor explanation', '14', '20 min'],
            ['Bonus', 'Innovation: creative constraints', '10 bonus', '5 min'],
          ],
        },
        {
          type: 'kpis',
          items: [
            { label: 'Prompt techniques', value: '40%', note: 'Structure, clarity, best practice.' },
            { label: 'Productivity', value: '25%', note: 'Assistants, workflows, optimization.' },
            { label: 'Creativity', value: '20%', note: 'Images, CoT, original solutions.' },
            { label: 'Ethics', value: '15%', note: 'Confidentiality, accessibility.' },
          ],
        },
        {
          type: 'p',
          text: 'The scenario: you are a digital transformation consultant helping a 25-person software startup (developers, sales, designers, support, admin) bring AI into its work.',
        },
      ],
    },
    {
      kicker: 'Exercises 1 and 2',
      title: 'Diagnose a prompt and design an assistant',
      blocks: [
        {
          type: 'p',
          text: '**Exercise 1.** The prompt is “Make me a presentation to sell our project management software.” Find five problems: **no context** (client, sector, needs), **no role**, **no format** (slides? length?), **no audience**, **vague objective** (“sell”: which arguments and objections?). Then rewrite it with **CLEAR**, giving a concrete context (a 50-person construction company), the audience (a non-technical management committee focused on return on investment), the format (for example 12 slides for 20 minutes plus questions), the role (B2B software sales expert) and an example or style cue.',
        },
        {
          type: 'p',
          text: '**Exercise 2.** Configure a support assistant (“ClientSuccess”) for four customer profiles: frustrated by a bug, new and lost, satisfied and asking for more, in a hurry. The configuration covers:',
        },
        {
          type: 'bullets',
          items: [
            '**Role and expertise:** customer-relations expert for a software product.',
            '**Context:** the startup, its caring culture and typical customer problems.',
            '**Missions:** one for each of the four profiles (for example calm the angry customer, find the cause, offer an immediate solution and a personal follow-up).',
            '**Style:** professional but warm, never robotic, with technical level adapted to the customer.',
            '**Constraints:** quick replies without losing quality, no promises outside company policy, escalate when needed.',
          ],
        },
        {
          type: 'callout',
          title: 'The test prompt',
          text: 'Give the assistant a realistic case (customer for 8 months, 15 daily users, end of quarter, no recent ticket). Ask it to acknowledge the problem, propose a practical immediate step, avoid blame, protect the relationship and propose a follow-up. Keep personal data out.',
        },
      ],
    },
    {
      kicker: 'Exercise 3',
      title: 'Choose the workflow pattern',
      blocks: [
        {
          type: 'p',
          text: 'The support team spends 3 hours a day on ticket replies and wants 1 hour a day with better quality. The model answer picks **Accelerator**.',
        },
        {
          type: 'table',
          head: ['Pattern', 'Idea', 'Fit for support tickets?'],
          rows: [
            ['Preparer', 'AI prepares material for the human.', 'Too passive: the AI needs the client’s context.'],
            ['Accelerator', 'Human sets direction, AI develops quickly, human validates.', 'Best: each reply is unique but follows a structure; empathy stays human.'],
            ['Analyzer', 'AI digs into large data sets.', 'Tickets are individual cases, not mass data (though useful for monthly trend review).'],
            ['Multiplier', 'AI scales one piece into many variants.', 'Each ticket needs a unique reply.'],
          ],
        },
        {
          type: 'steps',
          items: [
            '**Human qualification (about 5 min):** read the ticket, classify the problem, urgency and emotion, write a short brief.',
            '**AI generation (about 8 min):** produce a personalized reply with tone adapted to the frustration level, including concrete steps.',
            '**Human personalization (about 5 min):** add relationship details, check tone and empathy, make sure the facts are right.',
            '**Send and follow up (about 2 min).**',
            '**Control metrics:** time per ticket, customer satisfaction, manager review of a sample.',
          ],
        },
        {
          type: 'callout',
          title: 'Check the arithmetic against the target',
          text: 'The model workflow takes 20 minutes per ticket against 45 now, a cut of about 56%. The brief asked for 3 hours down to 1 hour, a cut of two thirds. A strong answer notes whether the workflow actually reaches the target, and if not, what else is needed (templates for common cases, shorter qualification, batching).',
        },
      ],
    },
    {
      kicker: 'Exercises 4 and 5',
      title: 'Image prompt and chain-of-thought',
      blocks: [
        {
          type: 'p',
          text: '**Exercise 4.** Write an image prompt for the theme “Collaboration without limits”. The model answer gives the **composition** (slightly high-angle view of a bright shared workspace with 4-5 diverse people around an interactive table), **visual elements** (touch screens, floating projections, colorful project interfaces, collaborative gestures), **style** (modern flat-design illustration with depth), **colors** (bright blues, greens and warm oranges) and **mood** (optimistic, energetic). If the result is too dark and static, the **modification prompt** names the two problems and fixes each: raise brightness, use natural daylight and lighter colors; add dynamism with diagonal composition, motion cues and people mid-gesture, while preserving what works.',
        },
        {
          type: 'p',
          text: '**Exercise 5.** The problem: clients say the interface is too complicated, while advanced users say it lacks features. A good chain-of-thought prompt asks the AI to: (1) restate the problem and the two user groups, (2) list the causes for each, (3) analyze the tension, (4) generate solution options, (5) evaluate them against criteria (cost, adoption, risk) and (6) recommend. A typical solution is a **progressive interface**: simple by default with advanced features revealed on demand, supported by a UX audit, personas for novice, intermediate and expert users, and a pilot on one feature.',
        },
        {
          type: 'callout',
          title: 'Marks come from the structure',
          text: 'The CoT answer earns points for a clear step structure, logical progression, guiding questions and an evaluation with a recommendation. Show that the steps build on each other.',
        },
      ],
    },
    {
      kicker: 'Exercises 6, 7 and bonus',
      title: 'Confidentiality, optimization and creative constraints',
      blocks: [
        {
          type: 'p',
          text: '**Exercise 6.** The prompt contains a company name, an e-mail address, a named contact with a phone number, and details about confidential subcontractors. Fix by removing or replacing every identifier (“a business customer”), keeping the useful context (the software crashes when handling about 50 simultaneous projects) and giving the AI a clear analysis task: likely technical causes, user-experience impact, three priority improvements, and a communication strategy to reassure similar customers. Marks: complete anonymization, and enough context left to stay useful.',
        },
        {
          type: 'p',
          text: '**Exercise 7.** The AI’s explanation of a workflow-automation feature is dense jargon. Analyze it on **clarity** (technical terms, long sentences), **accessibility** (assumes expert knowledge, no example) and **engagement** (no benefit for the reader, no tone). The optimization prompt names the audience (non-technical project managers), asks for plain words, a concrete example, a benefit-first opening, a friendly tone, a length and a format (for instance three short steps).',
        },
        {
          type: 'p',
          text: '**Bonus: creative constraints.** The assistant sets playful or limiting rules (“describe your ideal workspace using only three tools”, “what would you keep if the team halved?”) to reveal real needs before proposing a tailored configuration. It asks questions first, then proposes setups.',
        },
      ],
    },
    {
      kicker: 'Success',
      title: 'What to master and what to avoid',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Master absolutely',
              text: '**CLEAR** in every prompt; adapt tone, style and audience; simple human-AI workflows with checkable outputs; image prompts with composition, elements, style, format and targeted modifications; **GDPR by design** (anonymize, minimize, human supervision, never real data).',
            },
            {
              title: 'Pitfalls',
              text: 'Vague prompts without role, context or format; copy-paste without context or justification; answers too long or unstructured; GDPR oversights (names, e-mails, phone numbers, sensitive details); letting the AI decide alone with no human validation.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Where the full course content sits in this guide',
          text: 'CLEAR: Prompt fundamentals. Assistants and workflows: Masterclass. Productivity: Productivity impact. Chain-of-thought: Advanced prompting. GDPR and confidentiality: GDPR/AI Act and Practical 2. Insight analysis and the AI ecosystem: their own topics.',
        },
      ],
    },
    {
      kicker: 'Final exam',
      title: 'The multiple-choice strategy',
      blocks: [
        {
          type: 'p',
          text: 'Likely format per the lesson: **multiple choice, single answer**. Themes: CLEAR, GDPR by design, configuring assistants, workflows, image prompts, chain-of-thought and adapted communication. Plan on about **60 to 90 seconds per question**.',
        },
        {
          type: 'steps',
          items: [
            '**Read** the instructions and pick out the clues: role, audience, format, constraints, metrics.',
            '**Eliminate** vague options and any that break GDPR principles.',
            '**Compare** what is left and favor anonymization and minimization, human supervision, step-by-step structure and checkable outputs.',
            '**Beware** of “magic” or overly general wording; prefer operational answers.',
            '**If unsure**, choose the most explicit, applicable option.',
          ],
        },
        {
          type: 'bullets',
          items: [
            'Is there a clear role, context and audience?',
            'Is format or length stated?',
            'GDPR: anonymization, minimization, human supervision?',
            'Are steps and outputs verifiable?',
            'Is the tone suited to the audience?',
          ],
        },
        {
          type: 'callout',
          title: 'Use this guide',
          text: 'Do the MCQs in every Techway topic, review each “Review this section” hint, and practice the exam-style questions with a timer.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Mock exam', def: 'A full practice exam with seven exercises (and a bonus) used to prepare for the final.' },
    { term: 'CLEAR', def: 'Context, Length/format, Examples, Audience, Role: the checklist for a strong prompt.' },
    { term: 'Specialized assistant', def: 'An AI configured with a role, context, missions, style and constraints for one job.' },
    { term: 'Accelerator pattern', def: 'Human directs, AI develops quickly, human validates. Good for individual, unique replies.' },
    { term: 'Preparer / Analyzer / Multiplier', def: 'Other workflow patterns: AI prepares material, AI analyzes big data, or AI multiplies one item into many variants.' },
    { term: 'Progressive interface', def: 'A design that is simple by default and reveals advanced features on demand.' },
    { term: 'Modification prompt', def: 'A follow-up that states what is wrong with a result and how to change it while keeping what works.' },
    { term: 'GDPR by design', def: 'Anonymize, minimize and keep humans supervising from the start, never using real personal data in prompts.' },
    { term: 'Creative constraints', def: 'Deliberate limits or playful rules that push an assistant (or a person) to reveal needs and generate original options.' },
    { term: 'Single-answer MCQ', def: 'A multiple-choice question where exactly one option is the best answer.' },
  ],
  cards: [
    { front: 'Five problems of “Make me a presentation to sell our software”', back: 'No context, no role, no format, no audience, vague objective.' },
    { front: 'Parts of an assistant configuration', back: 'Role and expertise, context, missions, communication style, operational constraints.' },
    { front: 'Best pattern for individual support replies', back: 'Accelerator: human sets direction, AI develops, human validates.' },
    { front: 'Why not Multiplier for support tickets?', back: 'Each ticket needs a unique reply.' },
    { front: 'Four steps of the express workflow', back: 'Human qualification, AI generation, human personalization, send and follow-up.' },
    { front: 'Image prompt: what to include', back: 'Composition, visual elements, style, colors, mood, format.' },
    { front: 'How to fix a dark, static image', back: 'Name the problems, then brighten and add dynamism while preserving what works.' },
    { front: 'Chain-of-thought answer structure', back: 'Restate, causes, analyze tension, options, evaluate, recommend.' },
    { front: 'Exercise 6 rule', back: 'Remove every identifier, keep the useful context, give a clear analysis task.' },
    { front: 'Three lenses for a poor explanation', back: 'Clarity, accessibility, engagement.' },
    { front: 'Time per MCQ', back: 'About 60 to 90 seconds.' },
    { front: 'MCQ tie-breaker', back: 'Pick the most explicit, applicable, GDPR-safe option.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: Klarna’s AI support assistant and the human comeback',
    note: 'Customer Experience Dive, 9 May 2025, reporting Klarna’s 2024 claims about its AI assistant and its 2025 decision to bring more human support back. Figures are the company’s own.',
    slides: [
      {
        kicker: 'What happened',
        title: 'Two-thirds of chats handled by AI, then a rethink',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'First month (2024)', value: '2.3M chats', note: 'About two-thirds of Klarna’s customer-service chats, resolved in under 2 minutes on average, the company said.' },
              { label: 'Claimed equivalent', value: '700 agents', note: 'Klarna said the assistant did the work of about 700 representatives.' },
              { label: '2025', value: 'Humans back', note: 'Klarna said customers should always be able to reach a person and began recruiting support staff.' },
            ],
          },
          {
            type: 'p',
            text: 'Klarna’s CEO told Bloomberg that cost had been too dominant a factor, which lowered quality, and that investing in human support quality was the way forward. The AI assistant still handled about two-thirds of inquiries, according to the company.',
          },
        ],
      },
      {
        kicker: 'Link to the exam',
        title: 'Exercise 3: the Accelerator, not the replacement',
        blocks: [
          {
            type: 'table',
            head: ['Mock exam idea', 'What the case shows'],
            rows: [
              ['Accelerator: human directs, AI drafts, human validates', 'The AI handled volume well, but customers still wanted access to people for empathy and hard cases.'],
              ['Control metrics (time, satisfaction, quality review)', 'Speed alone is not enough. Klarna reported faster responses and fewer repeat issues, but tracked quality too.'],
              ['Check the plan against the target', 'A cost target can distort the design. Define quality targets alongside time targets.'],
            ],
          },
          {
            type: 'callout',
            title: 'Exam habit',
            text: 'When asked to design a support workflow, keep a clear human step for personalization and escalation, and include quality metrics next to time metrics.',
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
                title: 'Klarna reinvests in human talent for customer service as AI use continues',
                url: 'https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI/747586/',
                note: 'Customer Experience Dive, 9 May 2025. Klarna’s 2024 AI results and its 2025 move back towards human support.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: a mini mock exam',
    universe: 'beacon',
    slides: [
      {
        kicker: 'Scenario',
        title: 'Seven tasks for Beacon’s fan-services team',
        blocks: [
          {
            type: 'table',
            head: ['Exam skill', 'Beacon task'],
            rows: [
              ['1. Diagnose and CLEAR', 'Fix “Write something about our hospitality packages” into a structured prompt for corporate buyers.'],
              ['2. Assistant', 'Configure “MatchdayHelper” for fans who are lost, upset about a delay, enthusiastic or in a rush at the gate.'],
              ['3. Workflow', 'Choose Accelerator for personal replies and Multiplier for sending one announcement in five languages and three tones.'],
              ['4. Image', 'Prompt and modify a poster for “Everyone belongs”.'],
              ['5. Chain-of-thought', 'Analyze why season-ticket renewals fell among first-year members and suggest actions.'],
              ['6. Confidentiality', 'Remove names, ticket numbers and health notes from a complaint before analysis.'],
              ['7. Optimization', 'Rewrite a stiff terms-of-entry notice into friendly plain language.'],
            ],
          },
        ],
      },
      {
        kicker: 'Worked sample',
        title: 'Exercise 1 for Beacon',
        blocks: [
          {
            type: 'callout',
            title: 'Weak prompt',
            text: '“Write something about our hospitality packages.”',
          },
          {
            type: 'p',
            text: '**Problems:** no context (which packages, for whom), no role, no format, no audience, no clear goal.',
          },
          {
            type: 'callout',
            title: 'CLEAR version',
            text: 'Role: act as a hospitality sales manager at a mid-sized football club. Context: we have 12 match-day boxes for the next season, two near the halfway line, and we want to sign five new corporate clients by March. Audience: marketing directors of local companies with 50-200 staff, short on time. Length and format: a one-page brochure text (about 250 words) with a headline, three benefits and a call to action. Example: a tone like “Bring your clients closer to the action”. Use only the facts I give you, and mark any gaps for me to fill.',
          },
          {
            type: 'p',
            text: 'The box count and the goal are invented for this fictional club.',
          },
        ],
      },
      {
        kicker: 'Time plan',
        title: 'Running the clock',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Mark each exercise’s points and spend time in proportion (Exercise 2 is worth the most).',
              'Write the structure first (role, context, audience, format), then fill the details.',
              'Leave 5 minutes at the end for the GDPR check: any name, e-mail, phone or sensitive detail left in a prompt?',
              'If the AI produces a result, add one line on what you checked or changed.',
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
      q: 'The prompt “Make me a presentation to sell our software” lacks which elements?',
      options: [
        'Only a title',
        'Context, role, format, audience and a precise objective',
        'Only a color scheme',
        'Nothing; it is complete',
      ],
      answer: 1,
      explanation: 'It does not say who the client is, what role the AI plays, how long or what form the presentation takes, who will read it or what the goal is.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which of these is part of a specialized-assistant configuration?',
      options: [
        'Role and expertise, context, missions, communication style and constraints',
        'Only a name',
        'A list of passwords',
        'The AI’s source code',
      ],
      answer: 0,
      explanation: 'A complete configuration defines role, context, missions by situation, style and operating constraints.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'For writing personal replies to different customer support tickets, which pattern fits best?',
      options: ['Multiplier', 'Accelerator', 'Analyzer', 'None; use the AI alone'],
      answer: 1,
      explanation: 'The human directs and validates while the AI drafts quickly. Each ticket needs a unique reply, so Multiplier does not fit.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A workflow takes 20 minutes per ticket, down from 45. The target was to cut daily time from 3 hours to 1 hour. What is the best comment?',
      options: [
        'Target reached.',
        'It cuts about 56%, but the target needs about a 67% cut, so more savings are needed (templates, batching, shorter qualification).',
        'The target is impossible.',
        'Time does not matter.',
      ],
      answer: 1,
      explanation: '3 hours to 1 hour is a two-thirds reduction. 45 to 20 minutes is about 56%, so check the plan against the brief.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'An image comes out too dark and static. What is the best next prompt?',
      options: [
        'Start again with “better”.',
        'State the two problems and the fixes: brighten with daylight and lighter colors, add dynamism with diagonal composition and gestures, keep the layout and style that work.',
        'Ask for a different tool.',
        'Accept the image.',
      ],
      answer: 1,
      explanation: 'A modification prompt names the problems, specifies the fixes and preserves the successful elements.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which chain-of-thought prompt structure fits a “too complicated vs lacks features” product problem?',
      options: [
        'One line: “Fix the interface.”',
        'Restate; causes for each group; analyze the tension; generate options; evaluate on criteria; recommend.',
        'List colors.',
        'Ask for a joke.',
      ],
      answer: 1,
      explanation: 'A structured, progressive chain with evaluation and recommendation earns the marks.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A prompt includes a company name, a contact’s name and phone number, and a confidential detail. What is the first action?',
      options: [
        'Send it as is.',
        'Anonymize: remove identifiers, keep only the context needed for the analysis, and state a clear task.',
        'Add more personal details for accuracy.',
        'Ask the AI to forget it.',
      ],
      answer: 1,
      explanation: 'GDPR by design: minimize and anonymize, but keep enough context for the analysis to stay useful.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which optimization prompt best fixes a jargon-filled feature explanation?',
      options: [
        'Make it better.',
        'Rewrite for non-technical project managers: plain words, a concrete example, benefit first, friendly tone, three short steps.',
        'Make it longer and more technical.',
        'Translate it into French.',
      ],
      answer: 1,
      explanation: 'Name the audience and the transformation: language, example, structure and tone.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'In a single-answer MCQ, two options look plausible: one says “Share the full customer file with the AI for accuracy” and the other says “Anonymize the file and keep human review.” Which should you choose, using the lesson’s strategy?',
      options: [
        'The first, because it is more accurate.',
        'The second, because it applies anonymization/minimization and human supervision.',
        'Neither.',
        'Whichever is longer.',
      ],
      answer: 1,
      explanation: 'The strategy says to eliminate non-GDPR-compliant options and favor anonymization, minimization and human supervision.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'About how long should you spend on each MCQ item, per the lesson?',
      options: ['10 seconds', '60 to 90 seconds', '5 minutes', '10 minutes'],
      answer: 1,
      explanation: 'The lesson suggests 60-90 seconds per item.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'What does the Klarna case suggest about designing an AI-assisted support workflow?',
      options: [
        'Remove all humans once the AI handles most chats.',
        'Keep human access for empathy and hard cases, and track quality metrics as well as speed and cost.',
        'Track only cost.',
        'Avoid measuring anything.',
      ],
      answer: 1,
      explanation: 'Klarna said an over-focus on cost lowered quality, and it moved to ensure customers could always reach a human, which fits the Accelerator pattern and the idea of quality metrics.',
      review: { section: 'real', slide: 1 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 15,
      q: 'A club’s volunteer coordinator uses this prompt: “Write a message to volunteers about the new shifts.” (a) Identify five problems. (b) Rewrite it with CLEAR for the following facts: 80 volunteers, mostly retirees and students; new shifts start next month; they must confirm by Friday. (c) Add one GDPR-aware instruction.',
      answer: [
        'Problems: no context (what changed, when, why), no role, no audience (retirees and students have different needs), no format or length (e-mail? SMS?), no clear goal (what should people do?). Also no tone.',
        'CLEAR version: Role: act as a friendly volunteer coordinator at a football club. Context: 80 volunteers, mostly retirees and students; new match-day shifts start next month; each volunteer must confirm their slot by Friday. Audience: volunteers with varied schedules, mixed technology comfort. Length and format: an e-mail of about 150 words with a short subject line, a three-line summary, bullet points for the new shifts, and a clear confirm-by-Friday call to action. Example/style: warm and appreciative, like “Thank you for everything you do on match days”. Use plain language.',
        'GDPR: do not paste volunteers’ names, phone numbers or personal circumstances into the AI; use placeholders such as [Name], and personalize the final message outside the tool.',
      ],
      marking: [
        'Five valid problems (5)',
        'Role, context, audience, length/format, example all present (5)',
        'Facts correctly used and tone appropriate (3)',
        'GDPR-aware instruction (2)',
      ],
    },
    {
      id: 'e2',
      marks: 14,
      q: 'Design a specialized AI assistant for a club’s ticket office. Define role, context, four missions for different caller profiles, communication style and operating constraints, and write one test prompt for a fan whose digital ticket fails at the gate five minutes before kickoff.',
      answer: [
        'Role: ticketing support specialist with expertise in digital ticketing and fan service. Context: a football club with app-based tickets, large crowds and tight time limits on match day.',
        'Missions: (1) a stressed fan at the gate: give the shortest steps to get in and offer a fallback; (2) a first-time fan unfamiliar with the app: guide patiently in simple steps; (3) a loyal fan asking about upgrades: acknowledge loyalty and explain options; (4) a fan with a refund request: be clear about policy and next steps.',
        'Style: calm, warm and concise; adapt technical level; never robotic; short sentences on match day. Constraints: never promise refunds beyond policy, escalate to a human for security or accessibility issues, do not request or store full payment details, confirm facts from the club system.',
        'Test prompt: “A fan reports that the digital ticket will not load at Gate 4, five minutes before kickoff. They have been a season-ticket holder for three years and are visibly stressed. Write a reply of 3 short steps: reassure, give the quickest fix (reopen app, show screenshot or use the help desk at the gate), and a fallback if it fails. Warm, brief, no personal data.”',
      ],
      marking: [
        'Role and context (3)',
        'Four missions for distinct profiles (4)',
        'Style adapted to profiles (3)',
        'Realistic constraints (2)',
        'Test prompt specific and structured (2)',
      ],
    },
    {
      id: 'e3',
      marks: 10,
      q: 'A club analyst wants to analyze fan complaints with an AI. The first draft prompt is: “Analyze this complaint from Mr. Jean Moreau (jean.moreau@mail.com, season ticket 004512) who says he was refused entry with his wheelchair at the north gate.” (a) List the confidentiality problems. (b) Write a corrected prompt that keeps the analysis useful. (c) Say what the human must still do.',
      answer: [
        'Problems: a full name and e-mail identify the person; a ticket number links to an account; a wheelchair is health-related and so sensitive data; sending identifiable data to an external tool risks storage and exposure; none of it is needed for the analysis.',
        'Corrected prompt: “Analyze a complaint from a season-ticket holder who uses a wheelchair and says they were refused entry at one stadium gate on match day. Identify likely operational causes (staffing, signage, equipment), the impact on accessibility, three priority improvements, and a short communication to reassure similar fans. Do not use personal details.”',
        'The human must check the analysis against the club’s facts, contact the real fan separately with the real details, review any message before sending, and record any accessibility issue in the proper secure system.',
      ],
      marking: [
        'Identifies identifiers and sensitive data (3)',
        'Corrected prompt anonymized but useful (4)',
        'Human tasks (3)',
      ],
    },
  ],

  videos: [],
};
