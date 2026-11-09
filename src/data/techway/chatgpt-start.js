// Techway, Chapter 2: Getting started with ChatGPT.
// Built from Chapter 2 of the Techway lesson document (conversations and history, fast versus reasoning models,
// regenerate / edit / share / settings, the three levels of built-in safeguards, confidentiality, five usage reflexes,
// user profiles and the personal "signature" prompt).
// Real example: Samsung's ban on generative AI tools after staff uploaded internal code (Bloomberg, 2 May 2023,
// as syndicated by Business Standard).

export const chatgptStartTopic = {
  id: 'chatgpt-start',
  course: 'techway',
  title: 'Getting started with ChatGPT: interface, models, safeguards and habits',
  sessions: 'Chapter 2',
  reading: 'Techway lesson, Chapter 2',
  minutes: 30,
  summary:
    'How to work comfortably in a chat assistant: organize conversations, choose between a fast model and a reasoning model, use regenerate / edit / share and the settings, understand the safeguards, protect confidential data and build five good habits.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'A brilliant expert who knows nothing about you',
      blocks: [
        {
          type: 'big',
          text: 'ChatGPT is like meeting an expert who speaks every language and knows every topic, but **knows nothing about you or your situation**. How you start the conversation decides how useful it is.',
        },
        {
          type: 'p',
          text: 'The interface is deliberately plain: a text box and a send button. The lesson compares it to the reception desk of a grand hotel. The desk is simple, but behind it is a huge range of services. You get the most from it by explaining clearly what you need.',
        },
        {
          type: 'callout',
          title: 'Simple is not basic',
          text: 'A bare interface hides many features: model choice, search, image and document tools, sharing, and privacy settings.',
        },
      ],
    },
    {
      kicker: 'Organizing',
      title: 'Conversations are rooms; history is your memory',
      blocks: [
        {
          type: 'p',
          text: 'The sidebar lists your past chats. Each chat keeps **its own context**. Titles are generated automatically, and you can rename them so you can find them again.',
        },
        {
          type: 'table',
          head: ['Create a chat for…', 'Use it for'],
          rows: [
            ['Professional monitoring', 'Questions and analysis about your industry.'],
            ['Creative assistant', 'Brainstorming, ideas, creative projects.'],
            ['Productivity coach', 'Organization, work methods, optimization.'],
            ['Technical trainer', 'Learning a new skill step by step.'],
            ['Experimentation lab', 'Testing prompts and trying things out.'],
          ],
        },
        {
          type: 'callout',
          title: 'One important limit',
          text: 'The assistant remembers a lot of what was said **inside one conversation**, but (by default) it cannot see your other conversations. That is a feature: separate chats give you separate, clean contexts. Keep valuable chats instead of deleting them, and return to them rather than starting from zero.',
        },
        {
          type: 'p',
          text: 'Tip from the lesson: in a long-running work chat, start by giving your context (sector, role, challenges) once, then build on it week after week.',
        },
      ],
    },
    {
      kicker: 'Choosing a model',
      title: 'A fast student or a careful expert',
      blocks: [
        {
          type: 'p',
          text: 'The lesson contrasts two kinds of model, using GPT-4o and o4-mini as the examples. The names change quickly, so remember the idea: **fast general models** versus **slower reasoning models**.',
        },
        {
          type: 'table',
          head: ['', 'Fast general model (e.g., GPT-4o)', 'Reasoning model (e.g., o4-mini)'],
          rows: [
            ['Strengths', 'Speed, lower cost, great for routine work.', 'Step-by-step logic, finer reading of context, steadier over long texts, fewer factual slips.'],
            ['Good for', 'Standard emails, short summaries, simple translation, basic brainstorming.', 'Complex documents, long structured pieces, multi-step problems, tasks with nuance.'],
          ],
        },
        {
          type: 'p',
          text: 'A good test is to give both the same demanding request, such as “analyze remote work from the point of view of employer, employee and society, show the tensions, and propose three balancing solutions”. The fast model tends to give a clear but generic list. The reasoning model tends to find tensions between viewpoints and offer more specific, joined-up solutions.',
        },
        {
          type: 'callout',
          title: 'Rule of thumb',
          text: 'Use the fast model when the task is simple and repeated. Switch to the reasoning model when the task is complex, long or needs careful logic.',
        },
      ],
    },
    {
      kicker: 'The interface',
      title: 'Features that change how you work',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Regenerate', text: 'Ask for another version of the same answer instead of rewording your question. The AI explores a different route.' },
            { title: 'Edit a message', text: 'Change your earlier prompt and see how the answer changes. A fast way to learn what each wording does.' },
            { title: 'Share a link', text: 'Create a link to a conversation so colleagues can read it or you can reopen it later.' },
            { title: 'Tools and modes', text: 'Switch on web search, image creation or a document/canvas workspace when the job needs them.' },
          ],
        },
        {
          type: 'p',
          text: 'The **settings** matter too. From there you can control whether your conversations may be used to improve the models and manage your history according to your privacy needs.',
        },
        {
          type: 'callout',
          title: 'Interfaces change',
          text: 'Menus and button names are updated often. The skills transfer: find out what regenerate, edit, share, tools and privacy settings look like in the version you use.',
        },
      ],
    },
    {
      kicker: 'Safeguards',
      title: 'Three levels of built-in protection',
      blocks: [
        {
          type: 'p',
          text: 'The assistant is not “censored” at random. It has thought-out safeguards. Knowing the levels helps you use them sensibly.',
        },
        {
          type: 'table',
          head: ['Level', 'What it covers', 'What to do'],
          rows: [
            ['1. Categorical refusal', 'Illegal or dangerous content, harm to individuals, major intellectual-property violations.', 'These are firm limits. Do not try to get around them.'],
            ['2. Contextual caution', 'Specific medical or legal advice, personal information about public figures, recent controversial topics.', 'It can often help if you give a fitting context or rephrase honestly.'],
            ['3. Alternative suggestion', 'Requests that are too vague, need specialist skills or need human contact.', 'It steers you toward a better approach.'],
          ],
        },
        {
          type: 'callout',
          title: 'The lesson’s reading of limits',
          text: 'Limits are not walls but invitations to reformulate your need more intelligently. When it hesitates, ask: “How else could you help me with this?” The goal is to understand, not to bypass.',
        },
      ],
    },
    {
      kicker: 'Confidentiality',
      title: 'The consultant rule',
      blocks: [
        {
          type: 'big',
          text: 'Never give the chat anything you would not hand to an **external consultant**.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Do not share',
              text: 'Sensitive personal data (ID numbers, addresses, passwords), confidential company information, private details about other people, secret strategies.',
            },
            {
              title: 'Do instead',
              text: 'Use anonymized or fictional data for tests and learning. Ask for a method or template, not an analysis of the real file.',
            },
          ],
        },
        {
          type: 'table',
          head: ['Risky request', 'Safer request'],
          rows: [
            ['“Analyze the HR file of our company ACME Corp.”', '“Help me build a grid to evaluate the performance of a 15-person team in the tech sector.”'],
          ],
        },
        {
          type: 'p',
          text: 'Confidentiality is a **personal responsibility**. The tool cannot know what is sensitive in your organization.',
        },
      ],
    },
    {
      kicker: 'Habits',
      title: 'The five reflexes of an informed beginner',
      blocks: [
        {
          type: 'table',
          head: ['Reflex', 'Weak habit', 'Good habit'],
          rows: [
            ['1. Start simple', 'Dump all the information at once.', 'Begin with the essentials, then enrich based on the replies.'],
            ['2. Contextualize without overloading', '“Write me something.”', '“Write a professional e-mail to postpone a meeting, courteous but firm.”'],
            ['3. Use the conversation', 'Start from scratch each time.', '“Now adapt this version for an external client.”'],
            ['4. Ask for clarification', 'Accept a vague answer.', '“Expand point 3 with a concrete example.”'],
            ['5. Test and refine', 'Keep prompts that “kind of” work.', 'Note your best wordings and improve them.'],
          ],
        },
      ],
    },
    {
      kicker: 'Practice',
      title: 'From vague request to effective prompt',
      blocks: [
        {
          type: 'table',
          head: ['Vague', 'More effective (template)'],
          rows: [
            ['“Help me with my work.”', '“I am a [role] in [industry]. Help me structure my presentation on [topic] for an executive committee: three main points with key arguments.”'],
            ['“Do something creative.”', '“Create 5 visual concepts for an Instagram campaign about [theme], for [audience], in a [style] style. Format: description + tagline.”'],
            ['“Explain this complicated thing.”', '“Explain [specific concept] with everyday analogies. I am a [level] and need it for [goal].”'],
            ['“Help me write.”', '“Help me draft a [document type] of [length] for [audience] about [topic]. Tone: [tone]. Goal: [inform / persuade / entertain].”'],
          ],
        },
        {
          type: 'p',
          text: 'The improvement comes from adding **role, topic, audience, format and goal**. Chapter 3 turns this instinct into a framework (CLEAR).',
        },
      ],
    },
    {
      kicker: 'Your style',
      title: 'Four user profiles',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'The Strategist', text: 'Likes to analyze and compare. Favorite words: analyze, compare, what is at stake. Trap: over-analyzing and not acting.' },
            { title: 'The Executor', text: 'Wants fast, concrete results. Favorite words: create, list, format. Trap: skipping context because of impatience.' },
            { title: 'The Creative', text: 'Seeks inspiration. Favorite words: imagine, what if, adapt. Trap: losing practical focus.' },
            { title: 'The Learner', text: 'Wants to understand. Favorite words: explain, give examples, how. Trap: staying in theory and not practicing.' },
          ],
        },
        {
          type: 'p',
          text: 'Knowing your profile tells you what to add on purpose: the Executor adds context, the Creative adds a goal, the Strategist sets a deadline for a decision, and the Learner schedules practice.',
        },
      ],
    },
    {
      kicker: 'Your signature',
      title: 'A reusable “signature prompt”',
      blocks: [
        {
          type: 'p',
          text: 'A signature prompt is a short paragraph you paste at the start of an important new chat so the AI knows who it is helping.',
        },
        {
          type: 'steps',
          items: [
            '**Who you are:** role, sector, experience.',
            '**How you work:** your approach, such as efficiency or depth.',
            '**How to answer you:** short or detailed, examples or theory, direct or nuanced.',
            '**Today’s goal:** one specific objective.',
          ],
        },
        {
          type: 'callout',
          title: 'Example in the lesson',
          text: '“I am a digital project manager in e-commerce with 5 years of experience. My style prioritizes efficiency and concrete action. Please use short bullet points, concrete examples rather than theory and a direct tone. My goal today is to improve my team-management processes.”',
        },
        {
          type: 'bullets',
          items: [
            'You are ready for prompt engineering when you move through the interface without thinking, organize chats by theme, know the model differences, rephrase when an answer disappoints, adapt to the request type and follow ethical practice.',
            'Questions still open at this point (and that is normal): how to get exactly what I want, why the AI “misunderstands”, how to avoid generic answers. Chapter 3 answers them.',
          ],
        },
      ],
    },
    {
      kicker: 'Takeaways',
      title: 'Remember',
      blocks: [
        {
          type: 'bullets',
          items: [
            'A simple interface does not mean basic features. Explore them.',
            'Choose the model by task complexity: fast for routine, reasoning for complex.',
            'Organizing your conversations saves time in the long run.',
            'Ethical limits are invitations to reformulate, not obstacles to bypass.',
            'Confidentiality is your job: never share what you would not tell an outside consultant.',
            'A personal signature prompt makes conversations more relevant right away.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Conversation (chat thread)', def: 'One continuous exchange with the assistant. It keeps its own context, separate from your other chats by default.' },
    { term: 'Sidebar history', def: 'The list of your past conversations, which you can rename, revisit and organize by topic.' },
    { term: 'Fast general model', def: 'A model optimized for speed and low cost, well suited to routine tasks such as short emails and simple summaries.' },
    { term: 'Reasoning model', def: 'A model that works through problems step by step, better suited to complex, multi-step or nuanced tasks.' },
    { term: 'Regenerate', def: 'Asking the assistant for another version of the same answer without changing the prompt.' },
    { term: 'Edit a message', def: 'Changing an earlier prompt in the conversation and re-running it to see how the wording changes the answer.' },
    { term: 'Shared conversation link', def: 'A link to a conversation that colleagues can open, or that you can use to return to a good exchange later.' },
    { term: 'Data controls (settings)', def: 'Settings that let you decide whether your conversations may be used for model training and how your history is kept.' },
    { term: 'Categorical refusal', def: 'A firm built-in limit on clearly illegal, dangerous or seriously harmful requests. It does not change with rewording.' },
    { term: 'Contextual caution', def: 'Extra care on topics such as medical or legal advice, where the answer depends on context and framing.' },
    { term: 'Consultant rule', def: 'Never give the assistant information you would not entrust to an outside consultant.' },
    { term: 'Anonymized data', def: 'Data from which names and other identifying details are removed so a person or company cannot be recognized.' },
    { term: 'Signature prompt', def: 'A reusable opening paragraph describing your role, style and goal, pasted at the start of important conversations.' },
    { term: 'Conversational continuity', def: 'Building on earlier answers inside the same chat (“now adapt this for a client”) instead of starting over.' },
  ],
  cards: [
    { front: 'Why separate chats by theme?', back: 'Each chat builds its own context. Separate chats keep the AI focused and your history easy to search.' },
    { front: 'Does ChatGPT see your other chats?', back: 'Not by default. It remembers much of what is said within a conversation, but chats are separate contexts.' },
    { front: 'Fast model vs reasoning model', back: 'Fast: quick, cheap, routine tasks. Reasoning: step-by-step logic for complex, long or nuanced tasks.' },
    { front: 'Regenerate vs rewording', back: 'Regenerate asks for another take on the same prompt. Rewording changes the prompt itself.' },
    { front: 'Why edit an earlier prompt?', back: 'To see exactly how each change in wording changes the answer.' },
    { front: 'The three levels of safeguards', back: '1) Categorical refusals, 2) contextual caution, 3) alternative suggestions.' },
    { front: 'How should you treat a refusal?', back: 'As an invitation to reformulate legitimately (ask “how else could you help?”), not as a wall to bypass.' },
    { front: 'The consultant rule', back: 'Never share what you would not entrust to an external consultant.' },
    { front: 'What not to paste into a chat', back: 'Sensitive personal data, confidential company information, private details about others, secret strategies.' },
    { front: 'The five reflexes', back: 'Start simple; contextualize without overloading; use continuity; ask for clarification; test and refine.' },
    { front: 'Four user profiles', back: 'Strategist, Executor, Creative, Learner, each with a typical trap to avoid.' },
    { front: 'What goes in a signature prompt?', back: 'Your role and experience, work style, preferred answer format and the day’s goal.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: Samsung and the code that left the building',
    note: 'Reported by Bloomberg on 2 May 2023 (read via Business Standard). The report says it was unclear exactly what information was uploaded, so this guide does not claim more than that.',
    slides: [
      {
        kicker: 'What happened',
        title: 'Engineers pasted internal code into a chatbot',
        blocks: [
          {
            type: 'p',
            text: 'In April 2023, Samsung Electronics staff uploaded sensitive internal code to ChatGPT. On Monday 1 May 2023, a memo told employees at one of the company’s largest divisions that generative AI tools were banned on company-owned computers, tablets, phones and internal networks.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Memo date', value: '1 May 2023', note: 'Reported 2 May 2023' },
              { label: 'Staff who saw a security risk', value: '65%', note: 'Internal survey the month before' },
              { label: 'Penalty for breaking the rule', value: 'Dismissal', note: 'Can lead to termination' },
            ],
          },
        ],
      },
      {
        kicker: 'The company’s reasons',
        title: 'Why the data was a concern',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Data sent to AI platforms such as ChatGPT, Google Bard and Bing is **stored on external servers**.',
              'It is **hard to retrieve or delete** once sent.',
              'There was a concern it could be **disclosed to other users**.',
              'The ban did not cover consumer devices Samsung sells, but staff using AI on personal devices were told not to submit company or personal data.',
            ],
          },
          {
            type: 'callout',
            title: 'Chapter 2 rule in action',
            text: 'Nobody needed a tool to be “evil” for this to go wrong. Convenience plus a pasted file was enough. The consultant rule exists to stop exactly this.',
          },
        ],
      },
      {
        kicker: 'What organizations do',
        title: 'Better than a ban: a clear policy',
        blocks: [
          {
            type: 'table',
            head: ['Approach', 'Idea'],
            rows: [
              ['Rules in writing', 'Say which data may never be pasted and which tools are approved.'],
              ['Approved tools', 'Provide a company-approved assistant with data controls instead of leaving staff to use personal accounts.'],
              ['Training', 'Teach the consultant rule and anonymization, as in this chapter.'],
              ['Check settings', 'Review whether chats may be used for training.'],
            ],
          },
          {
            type: 'p',
            text: 'Samsung’s response was a ban; many organizations choose a controlled alternative. This table is a general summary, not a claim about what Samsung did next.',
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
                title: 'Samsung bans employees from using AI after spotting ChatGPT data leak',
                url: 'https://business-standard.com/amp/technology/tech-news/samsung-bans-employees-from-using-ai-after-spotting-chatgpt-data-leak-123050200197_1.html',
                note: 'Business Standard (Bloomberg report), 2 May 2023. The staff restriction after internal code was uploaded.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: setting up the communications desk',
    universe: 'beacon',
    slides: [
      {
        kicker: 'Set up',
        title: 'Five chats for the club’s communications team',
        blocks: [
          {
            type: 'p',
            text: 'Beacon Athletic’s three-person communications team sets up the assistant properly instead of using one giant chat.',
          },
          {
            type: 'table',
            head: ['Chat title', 'Purpose', 'Model choice'],
            rows: [
              ['Match-day posts', 'Quick social captions and score updates.', 'Fast model'],
              ['Sponsor reporting', 'Long, structured summaries of sponsor activity.', 'Reasoning model'],
              ['Fan newsletter ideas', 'Brainstorming themes and subject lines.', 'Fast model'],
              ['Learning corner', 'Learning how to write better prompts.', 'Either'],
              ['Experiment lab', 'Testing wording changes safely.', 'Either'],
            ],
          },
        ],
      },
      {
        kicker: 'The signature prompt',
        title: 'One paragraph that saves 20 minutes a week',
        blocks: [
          {
            type: 'callout',
            title: 'Dana’s signature prompt',
            text: '“I am the communications officer of a mid-sized football club with 12,000 members. My style is friendly and plain. Reply in short bullet points with ready-to-post wording, use first names for players, and keep to 280 characters for social posts. Today’s goal is to prepare the weekend’s match content.”',
          },
          {
            type: 'p',
            text: 'Notice what is left out: no names of fans, no sponsor contract values and no internal budget numbers. Role, tone and format are enough for the AI to adapt.',
          },
        ],
      },
      {
        kicker: 'Confidentiality',
        title: 'Spot the risky requests',
        blocks: [
          {
            type: 'table',
            head: ['Request someone typed', 'Problem', 'Safer version'],
            rows: [
              ['“Here is our season-ticket holder list with e-mails. Write a personal message for each.”', 'Pastes personal data of fans.', 'Ask for a template with placeholders such as [First name] and let the mail tool fill them in.'],
              ['“Summarize this sponsorship contract and tell us what price we can ask.”', 'Pastes a confidential contract and commercial terms.', '“Give me a checklist of terms to review in a sponsorship contract.”'],
              ['“Rewrite this injury update for a player named in our medical file.”', 'Health information about a named person.', 'Use only information the club has already cleared for publication.'],
            ],
          },
        ],
      },
      {
        kicker: 'Habits',
        title: 'Applying the five reflexes to a real job',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Start simple:** “Write a post announcing our home game on Saturday at 3 pm.”',
              '**Add context:** “Friendly tone, mention the family zone, under 280 characters.”',
              '**Use continuity:** “Now make a version for the club’s partners’ LinkedIn page.”',
              '**Ask for clarification:** “Give me two alternative opening lines.”',
              '**Test and refine:** Save the version that worked in the Experiment lab chat with a note on why.',
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
      q: 'Why does the lesson recommend creating separate, clearly titled conversations for different uses?',
      options: [
        'Because the AI can only handle one chat.',
        'Because each conversation keeps its own context, so separate chats give focused, easily searchable spaces.',
        'Because titles change the AI’s model.',
        'Because it is required by law.',
      ],
      answer: 1,
      explanation: 'A conversation holds its own context. Segmenting by use means the AI adapts to each purpose and you can find past work quickly.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'By default, what can ChatGPT access when you open a new conversation?',
      options: [
        'Everything you have ever said in all other conversations.',
        'Only the content of the current conversation (plus any settings or features you have turned on).',
        'Nothing at all, not even your message.',
        'Your company’s internal files.',
      ],
      answer: 1,
      explanation: 'The lesson stresses that it remembers much of what was said within a conversation but has no access to other conversations. This keeps contexts separate.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which task is the best fit for a reasoning model rather than a fast general model?',
      options: [
        'Writing a standard thank-you email.',
        'Translating a short sentence.',
        'Analyzing a long, complex document and resolving a multi-step problem.',
        'Brainstorming five basic ideas.',
      ],
      answer: 2,
      explanation: 'Reasoning models are better at multi-step logic, long structured content and nuance. Routine, short tasks are fine on a fast model.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'You are unhappy with an answer but your prompt was fine. What is the lesson’s suggested first move?',
      options: [
        'Delete the conversation.',
        'Use regenerate to get another take on the same prompt.',
        'Switch off the internet.',
        'Accept the first answer.',
      ],
      answer: 1,
      explanation: 'Regenerating lets the AI explore another route without you rewriting the request. Editing your prompt is the other tool when the wording itself is the issue.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which of the following is a Level 1 (categorical) safeguard?',
      options: [
        'Asking for more detail on a vague request.',
        'Refusing illegal or dangerous content.',
        'Suggesting you consult a specialist.',
        'Asking you to rephrase a medical question.',
      ],
      answer: 1,
      explanation: 'Level 1 covers firm refusals: illegal or dangerous content, harm to individuals and major intellectual property violations. Levels 2 and 3 are more flexible.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'A request is too vague and the AI proposes a more precise way to ask. Which level of safeguard is this?',
      options: [
        'Level 1: categorical refusal.',
        'Level 2: contextual caution.',
        'Level 3: alternative suggestion.',
        'No safeguard.',
      ],
      answer: 2,
      explanation: 'Level 3 steers you toward a better approach when the request is too broad, needs specialist skills or needs human contact.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'What is the “golden rule” for confidentiality in the lesson?',
      options: [
        'Never use AI at all.',
        'Never share information you would not entrust to an external consultant.',
        'Always share everything so the AI is well informed.',
        'Share only passwords.',
      ],
      answer: 1,
      explanation: 'Treat the assistant like an outside consultant. Use anonymized or fictional data, and keep sensitive personal and company information out.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which request is safest?',
      options: [
        '“Analyze the HR file of our company ACME Corp.” (with the file pasted)',
        '“Help me create an analysis grid to evaluate the performance of a 15-person tech team.”',
        '“Here are our customers’ phone numbers, sort them.”',
        '“Here is our secret strategy, improve it.”',
      ],
      answer: 1,
      explanation: 'Asking for a method or template means no real confidential data is shared. The other options paste sensitive material.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'Which pair shows the reflex “contextualize without overloading”?',
      options: [
        'Bad: “Write me something.” Good: “Write me a professional email to postpone a meeting, courteous but firm.”',
        'Bad: a short request. Good: a 10-page request.',
        'Bad: asking questions. Good: never asking.',
        'Bad: using regenerate. Good: starting over.',
      ],
      answer: 0,
      explanation: 'The good version adds just enough context (type, purpose, tone) without drowning the request in detail.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'A user who loves quick, concrete outputs (“create”, “list”, “format”) but often forgets to give context matches which profile?',
      options: ['The Strategist', 'The Executor', 'The Creative', 'The Learner'],
      answer: 1,
      explanation: 'The Executor wants fast, concrete solutions. The trap named in the lesson is lacking context because of impatience.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'What should a good signature prompt contain?',
      options: [
        'Your password and employer’s secrets.',
        'Your role and experience, your work style, how you want answers, and the goal of the session.',
        'A long copy of your CV.',
        'Only the word “please”.',
      ],
      answer: 1,
      explanation: 'A signature prompt gives the AI the context to adapt to you: who you are, how you work, the format you want and the goal.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'According to the Samsung case, why did the company worry about staff pasting code into a public chatbot?',
      options: [
        'Chatbots are always slow.',
        'Data sent to external AI platforms is stored on outside servers, is hard to retrieve or delete, and might be disclosed to other users.',
        'The code was too long to read.',
        'Because AI cannot read code.',
      ],
      answer: 1,
      explanation: 'Those were the concerns reported in May 2023. They illustrate why the consultant rule matters.',
      review: { section: 'real', slide: 1 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'A new colleague pastes a spreadsheet of customer names, e-mail addresses and complaints into a public chatbot and asks for “a personalized reply to each”. Explain what is wrong, state the confidentiality rule from the course, and rewrite the request so that no personal data is shared.',
      answer: [
        'The colleague has shared personal data about third parties (names, e-mail addresses, complaints) with an external service. Data sent to such platforms may be stored on outside servers, may be hard to retrieve or delete, and may be used or disclosed in ways the customers did not expect. This also creates data-protection exposure for the organization.',
        'The golden rule is: never share information you would not entrust to an external consultant. Sensitive personal data, confidential company information, private details about third parties and secret strategies should not be pasted. Use anonymized or fictional data instead, and check the privacy and data-control settings.',
        'A safer request: “Write a reply template for a customer whose delivery arrived late. Use placeholders such as [First name], [Order number] and [Issue]. Tone: apologetic but professional, under 120 words.” The colleague can then fill in the placeholders locally or with an approved tool.',
      ],
      marking: [
        'Identifies the personal data and third-party exposure (2)',
        'States the consultant rule (2)',
        'Mentions anonymization/fictional data or approved tools (1)',
        'Gives a rewritten request using placeholders or a template (2)',
        'Rewrite specifies tone/length/format (1)',
      ],
    },
    {
      id: 'e2',
      marks: 6,
      q: 'Compare a fast general model with a reasoning model. For each, give one task it suits and explain how you would decide which to use.',
      answer: [
        'A fast general model prioritizes speed and lower cost and is well suited to routine, repeatable tasks such as writing a standard email, summarizing a short text, simple translation or basic brainstorming.',
        'A reasoning model works through problems step by step. It handles complex documents, multi-step problems and long structured content better, keeps coherence over long texts, and makes fewer factual slips, but is slower and usually costlier. It suits, for example, analyzing a long report and proposing recommendations that balance several viewpoints.',
        'To choose, look at the complexity and stakes of the task: simple and repeated means the fast model; complex, nuanced, long or logic-heavy means the reasoning model. A quick test is to send the same demanding request to both and compare depth, structure and nuance.',
      ],
      marking: [
        'Describes the fast model correctly (1)',
        'Gives a suitable task for the fast model (1)',
        'Describes the reasoning model correctly (1)',
        'Gives a suitable task for the reasoning model (1)',
        'Explains a decision rule (complexity, length, nuance) (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Explain what a “signature prompt” is and write one for a marketing assistant at a sports club. Say why it improves the quality of the conversation.',
      answer: [
        'A signature prompt is a short, reusable opening paragraph pasted at the start of an important conversation. It tells the AI who you are, how you work, how you want answers shaped and what you want to achieve in that session.',
        'Example: “I am a marketing assistant at a mid-sized football club, with two years of experience. I work quickly and prefer practical suggestions. Please answer in short bullet points with ready-to-use wording and a friendly tone. Today’s goal is to plan the social media content for the next home match.” It uses no confidential data.',
        'It improves the conversation because the AI starts with the context it otherwise lacks. Answers are more relevant in content, format and tone, and you avoid repeating the same background in every chat.',
      ],
      marking: [
        'Correct definition (2)',
        'Includes role/experience, style, format preferences and goal (2)',
        'Contains no confidential information (1)',
        'Explains the benefit: context, relevance, saved effort (1)',
      ],
    },
  ],

  videos: [],
};
