// Techway, Chapter 5: Professional productivity (the IMPACT framework).
// Built from Chapter 5 of the Techway lesson document (three levels of professional integration, IMPACT = Identify /
// Model / Prompt / Automate / Capitalize / Transmit, communication, content and analysis assistants, the atomic
// content technique, layered analysis, metrics and expanded ROI, PDCA and A/B testing of prompts, and the pitfalls of
// over-dependence with the 80/20 rule).
// Real example: Brynjolfsson, Li and Raymond, "Generative AI at Work" (NBER Working Paper 31161, April 2023, revised
// November 2023; published in The Quarterly Journal of Economics, 2025, vol. 140, no. 2).

export const productivityImpactTopic = {
  id: 'productivity-impact',
  course: 'techway',
  title: 'Professional productivity: the IMPACT framework',
  sessions: 'Chapter 5',
  reading: 'Techway lesson, Chapter 5',
  minutes: 40,
  summary:
    'Move from occasional AI use to a system: Identify, Model, Prompt, Automate, Capitalize, Transmit. Build assistants for communication, content and analysis, measure value beyond time saved, improve by testing, and keep a human 20%.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The shift',
      title: 'From occasional use to a transformed way of working',
      blocks: [
        {
          type: 'big',
          text: 'The step from technique to **strategy**: do not just use AI now and then. Build it into how you work, step by step, so the gains repeat.',
        },
        {
          type: 'table',
          head: ['Level', 'How you work', 'Gain the lesson attaches to it'],
          rows: [
            ['1. Occasional user', 'A few ad hoc tasks; every chat starts from scratch.', '10-15%'],
            ['2. Systematic user', 'Spotted recurring uses; reusable prompts.', '25-40%'],
            ['3. Augmented professional', 'AI built into processes; hybrid human-AI workflows.', '50-80%'],
          ],
        },
        {
          type: 'callout',
          title: 'Read those percentages with care',
          text: 'The ranges are the lesson’s own rough illustration, not measured results. The lesson also cites a 2023 marketing survey and a 2022 consulting report that adoption of AI in companies had stalled around 50-60%, and explains the gap this way: many people use AI to produce more, but few organizations rethink their workflows or train teams at scale.',
        },
        {
          type: 'p',
          text: 'Quick self-check from the lesson: do you systematically spot automatable tasks, keep a library of reusable prompts, use AI to prepare meetings, run hybrid workflows and train colleagues? The more yes answers, the higher your level.',
        },
      ],
    },
    {
      kicker: 'The framework',
      title: 'IMPACT: six steps to make AI part of the process',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'I: Identify', text: 'Map where AI could help.' },
            { title: 'M: Model', text: 'Break your expert process into steps.' },
            { title: 'P: Prompt', text: 'Create specialized assistants (personas).' },
            { title: 'A: Automate', text: 'Design hybrid human-AI workflows.' },
            { title: 'C: Capitalize', text: 'Store what works in a library.' },
            { title: 'T: Transmit', text: 'Spread it through the team.' },
          ],
        },
        {
          type: 'callout',
          title: 'Not to be confused with CLEAR',
          text: 'CLEAR (Chapter 3) shapes one **prompt**. IMPACT organizes a whole **way of working**. The TP Masterclass uses both.',
        },
      ],
    },
    {
      kicker: 'I: Identify',
      title: 'Audit a week of work',
      blocks: [
        {
          type: 'p',
          text: 'For one week, log your tasks with four columns: **time**, **frequency**, **added value** and **AI potential**.',
        },
        {
          type: 'table',
          head: ['Task', 'Time', 'Frequency', 'Added value', 'AI potential'],
          rows: [
            ['Standard e-mail replies', '15 min', '10 times a day', 'Low', 'Very high'],
            ['Competitor analysis', '2 h', 'weekly', 'High', 'High'],
            ['Facilitating team meetings', '1 h', '2 times a week', 'High', 'Low'],
            ['Monthly report', '4 h', 'monthly', 'Medium', 'Very high'],
          ],
        },
        {
          type: 'table',
          head: ['Signal', 'AI potential'],
          rows: [
            ['Repetitive tasks with a recognizable pattern', 'Highest'],
            ['Processing large volumes of information', 'High'],
            ['Content with a recurring structure', 'Medium'],
            ['Tasks needing occasional expertise', 'Lower'],
            ['Highly relational or purely creative tasks', 'Lowest'],
          ],
        },
      ],
    },
    {
      kicker: 'M: Model',
      title: 'The “expert shadow” technique',
      blocks: [
        {
          type: 'p',
          text: 'Watch yourself as if you were your own consultant, and write down how you really do the task.',
        },
        {
          type: 'steps',
          items: [
            '**Sequential breakdown:** list each micro-step.',
            '**Inputs:** which information do you use?',
            '**Decision points:** where do you apply judgment?',
            '**Output:** what form does the result take?',
          ],
        },
        {
          type: 'callout',
          title: 'Example: preparing a client meeting',
          text: 'Input: the brief, client history and meeting goal. Process: analyze context (15 min), predict likely issues (10), prepare key arguments (20), anticipate objections (15), structure the agenda (10). Output: agenda, argumentation and objection handling. Each step can now be given to AI, kept human or shared.',
        },
      ],
    },
    {
      kicker: 'P: Prompt',
      title: 'A persona template you can reuse',
      blocks: [
        {
          type: 'p',
          text: 'Create a virtual specialist per major area of work. The template has five parts:',
        },
        {
          type: 'table',
          head: ['Part', 'What goes in'],
          rows: [
            ['Role and expertise', '“You are my experienced [specialty] assistant. You excel at [skills] and understand [business context].”'],
            ['My context', 'My role, sector, work style and recurring constraints.'],
            ['Typical missions', 'Three recurring jobs, each with the expected format.'],
            ['Collaboration style', 'Tone, answer structure, technical level, theory versus practice.'],
            ['Quality reference', '“Match the quality of [an expert or well-run organization] while adapting to my context.”'],
          ],
        },
        {
          type: 'callout',
          title: 'Activation line',
          text: '“Confirm you have taken in this profile and ask me for the first mission.”',
        },
      ],
    },
    {
      kicker: 'A: Automate',
      title: 'Four productive patterns',
      blocks: [
        {
          type: 'table',
          head: ['Pattern', 'Flow', 'Example'],
          rows: [
            ['Preparer', 'AI prepares; you finalize and personalize.', 'AI analyzes a client request and drafts a proposal; you adjust; AI polishes the document.'],
            ['Accelerator', 'You set direction (about 20%); AI develops (about 60%); you validate and adjust (about 20%).', 'You define the strategy; AI writes detailed plans; you produce the operational version.'],
            ['Analyzer', 'AI processes data; you decide.', 'AI analyzes metrics; you interpret context; AI proposes actions; you prioritize.'],
            ['Multiplier', 'AI spreads your expertise across several outputs.', 'You write the master framework; AI adapts it to contexts; you check consistency.'],
          ],
        },
        {
          type: 'p',
          text: 'The same four patterns appear in the TP Masterclass, where they structure the sales and training workflows.',
        },
      ],
    },
    {
      kicker: 'C and T',
      title: 'Capitalize, then transmit',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Capitalize: a productivity library', text: '**Validated prompts** sorted by domain, format and situation. **Tested workflows** with templates, variants and results. **AI personas** with configurations, histories and updates. Every use enriches the system.' },
            { title: 'Transmit: spread it', text: '**Show results before explaining methods.** Teach through the other person’s real problems. Help each person build their own assistants. Share the best discoveries so one person’s gains become a team advantage.' },
          ],
        },
        {
          type: 'steps',
          items: [
            'Try IMPACT on one real recurring task in 30 minutes: describe it, break it into steps, build the assistant, define the hybrid workflow, document it, and name who else could use it.',
          ],
        },
      ],
    },
    {
      kicker: 'Domain 1',
      title: 'Communication assistants',
      blocks: [
        {
          type: 'p',
          text: 'We communicate more than ever, but often less effectively. Two sample assistants:',
        },
        {
          type: 'columns',
          items: [
            { title: 'EmailPro', text: 'Drafts e-mails with templates: negotiation (position, justification, opening), request (context, mutual benefit, call to action), crisis (acknowledgment, explanation, solution, commitment) and follow-up (value reminder, new hook, easy next step). Activation: give the context and goal, and get three versions: diplomatic, direct and creative.' },
            { title: 'MeetingMaster', text: 'Prepares agendas with clear goals and timing, facilitation techniques, handling of personalities, and actionable minutes listing decisions, actions, owners and deadlines.' },
          ],
        },
        {
          type: 'callout',
          title: 'Situational communication grid',
          text: 'Recipient, relationship, stake, context and objective lead to the best tone, level of detail and psychological approach. In training, use pseudonyms and fictional names so no real personal data goes into the tool.',
        },
      ],
    },
    {
      kicker: 'Domain 2',
      title: 'Content creation: atomic content',
      blocks: [
        {
          type: 'p',
          text: 'The **ContentGenius** assistant turns your expertise into posts, articles, presentations and newsletters, but you bring the real experience and it brings structure.',
        },
        {
          type: 'flow',
          items: [
            { title: '1. Master content', text: 'Your raw expertise, written once.' },
            { title: '2. Repurpose', text: 'Post, thread, slides, article, newsletter.' },
            { title: '3. Adapt', text: 'Beginner, expert, business and technical versions.' },
            { title: '4. Spread over time', text: 'Series, training, webinar, white paper.' },
          ],
        },
        {
          type: 'callout',
          title: 'Example',
          text: 'One experience (“how I reduced my team’s turnover”) becomes a story post with three lessons, a short thread, a manager method deck, a detailed article and a newsletter case study, each tuned to HR, managers, executives or start-ups.',
        },
      ],
    },
    {
      kicker: 'Domain 3',
      title: 'Analysis and synthesis',
      blocks: [
        {
          type: 'p',
          text: 'The **AnalysisEngine** assistant turns piles of information into insights. It names preferred methods (pyramid principle, SCAMPER, Porter’s five forces, jobs-to-be-done) and a deliverable format.',
        },
        {
          type: 'table',
          head: ['Layer', 'Time', 'Question'],
          rows: [
            ['1. Radar', '5 min', 'What changed? Any warning signals?'],
            ['2. Diagnostic', '15 min', 'Why did it change? Root causes?'],
            ['3. Strategic', '30 min', 'What does it mean for us? Opportunities and threats?'],
            ['4. Operational', '45 min', 'What concrete actions and what plan?'],
          ],
        },
        {
          type: 'p',
          text: 'Layered analysis lets you stop at the layer your decision needs. The sample prompt asks for the three biggest changes, likely causes, impact on positioning, and five actions to start within 30 days. Chapter 7 develops this into the INSIGHT framework.',
        },
      ],
    },
    {
      kicker: 'Measure',
      title: 'Value is more than hours saved',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Quantitative', text: 'Hours saved per week, number of automated tasks, how often the assistant is used, preparation versus execution time.' },
            { title: 'Qualitative', text: 'Perceived quality (1-10), stress on recurring tasks, overall satisfaction, sense of control and mastery.' },
            { title: 'Business impact', text: 'Goals achieved versus forecast, opportunities found and seized, better relationships with clients and team, innovations introduced.' },
          ],
        },
        {
          type: 'callout',
          title: 'Expanded ROI',
          text: 'Classic ROI = (gains - investment) / investment. The lesson’s enhanced version adds quality, opportunities and well-being: ROI_AI = [(time saved × hourly value) + (improved quality × business impact) + (opportunities created × potential value) + (reduced stress × well-being cost)] ÷ (learning time + tool costs).',
        },
      ],
    },
    {
      kicker: 'Improve',
      title: 'PDCA and A/B testing of prompts',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Plan:** choose the next task to optimize from your metrics.',
            '**Do:** put the assistant or workflow in place.',
            '**Check:** compare actual to expected impact.',
            '**Act:** adjust prompts and processes, or drop the idea.',
          ],
        },
        {
          type: 'table',
          head: ['Week', 'A/B test routine'],
          rows: [
            ['1', 'Use version A of the prompt. Record quality, time and ease.'],
            ['2', 'Use version B, changing **one** variable. Record the same things.'],
            ['3', 'Compare and keep the winner as your new standard.'],
            ['4', 'Test version C and keep improving.'],
          ],
        },
      ],
    },
    {
      kicker: 'Balance',
      title: 'Three pitfalls and the 80/20 rule',
      blocks: [
        {
          type: 'table',
          head: ['Pitfall', 'Symptom', 'Remedy'],
          rows: [
            ['Intellectual laziness', 'Delegating without understanding; accepting without checking.', 'Keep about 20% of tasks fully manual to maintain skills.'],
            ['Loss of creativity', 'Everything converges on standard solutions.', 'Regularly make the AI explore unconventional ideas.'],
            ['Professional isolation', 'Less human contact in favor of efficiency.', 'Use AI to enrich interactions, not replace them.'],
          ],
        },
        {
          type: 'callout',
          title: 'The augmented 80/20 rule',
          text: '**With AI (about 80%):** repetitive tasks, data analysis, structured content. **Without AI (about 20%):** complex relationships, pure creativity, sensitive strategic decisions.',
        },
        {
          type: 'p',
          text: 'Productivity means doing better what you already do. Creativity means discovering what you could do differently, which is Chapter 6.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'IMPACT', def: 'The lesson’s productivity framework: Identify, Model, Prompt, Automate, Capitalize, Transmit.' },
    { term: 'Productivity audit', def: 'A week-long log of tasks with time, frequency, added value and AI potential, used to find where AI could help.' },
    { term: 'Expert shadow technique', def: 'Observing and writing down your own process step by step, with inputs, decision points and outputs.' },
    { term: 'Decision mapping', def: 'Marking the points in a process where human judgment is applied.' },
    { term: 'Persona template', def: 'A reusable structure for configuring an assistant: role, context, missions, collaboration style and quality reference.' },
    { term: 'Activation prompt', def: 'The closing line of a persona setup that asks the AI to confirm it understood and request the first mission.' },
    { term: 'Preparer', def: 'AI prepares and the human finalizes and personalizes.' },
    { term: 'Accelerator', def: 'The human sets direction, AI develops quickly, the human validates.' },
    { term: 'Analyzer', def: 'AI processes data; the human interprets and decides.' },
    { term: 'Multiplier', def: 'One master piece of expertise is expanded by AI into several versions.' },
    { term: 'Productivity library', def: 'A saved collection of validated prompts, tested workflows and configured personas.' },
    { term: 'Atomic content', def: 'Create once, repurpose many times: one master piece turned into multiple formats, audiences and moments.' },
    { term: 'Situational communication', def: 'Adapting tone and detail to the recipient, relationship, stakes, context and objective.' },
    { term: 'Layered analysis', def: 'Analyzing in four steps of increasing depth: radar, diagnostic, strategic, operational.' },
    { term: 'Expanded ROI (ROI_AI)', def: 'A return measure that adds quality, opportunities and well-being to time saved, divided by learning time and tool cost.' },
    { term: 'PDCA', def: 'Plan, Do, Check, Act: a cycle for continuous improvement.' },
    { term: 'A/B testing (prompts)', def: 'Comparing two prompt versions that differ in one variable, using the same criteria.' },
    { term: 'Augmented 80/20 rule', def: 'Use AI for about 80% of suitable tasks and keep about 20% fully human to maintain skills and judgment.' },
  ],
  cards: [
    { front: 'IMPACT in order', back: 'Identify, Model, Prompt, Automate, Capitalize, Transmit.' },
    { front: 'Three levels of integration', back: 'Occasional user, systematic user, augmented professional.' },
    { front: 'Four columns of the productivity audit', back: 'Time, frequency, added value, AI potential.' },
    { front: 'Best AI-opportunity tasks', back: 'Repetitive tasks with identifiable patterns, then high-volume information processing.' },
    { front: 'Four things the expert shadow records', back: 'Steps, inputs, decision points, output format.' },
    { front: 'Five parts of a persona template', back: 'Role and expertise, my context, typical missions, collaboration style, quality reference.' },
    { front: 'Four automation patterns', back: 'Preparer, Accelerator, Analyzer, Multiplier.' },
    { front: 'What goes in a productivity library?', back: 'Validated prompts, tested workflows and AI personas.' },
    { front: 'Transmit: where do you start?', back: 'Show results before explaining methods, using the other person’s real problems.' },
    { front: 'Atomic content', back: 'Create once, repurpose into many formats, audiences and moments.' },
    { front: 'Four layers of analysis', back: 'Radar, diagnostic, strategic, operational.' },
    { front: 'Three families of metrics', back: 'Quantitative, qualitative, business impact.' },
    { front: 'PDCA-IA steps', back: 'Plan, Do, Check, Act.' },
    { front: 'How to A/B test a prompt', back: 'Change one variable, compare on the same criteria over a set period, keep the winner.' },
    { front: 'The augmented 80/20 rule', back: '80% of tasks with AI help; 20% fully human to keep skills and judgment.' },
    { front: 'Productivity vs creativity', back: 'Productivity: do better what you already do. Creativity: discover what you could do differently.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real study: AI help for 5,179 customer-support agents',
    note: 'Brynjolfsson, Li and Raymond, “Generative AI at Work”, NBER Working Paper 31161 (April 2023, revised November 2023), later published in The Quarterly Journal of Economics (2025). Figures are from the NBER abstract.',
    slides: [
      {
        kicker: 'The study',
        title: 'What happened when a generative AI assistant was rolled out',
        blocks: [
          {
            type: 'p',
            text: 'Researchers studied **5,179 customer-support agents** as a generative AI conversational assistant was introduced in stages. Productivity was measured as **issues resolved per hour**.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Average productivity gain', value: '+14%', note: 'Issues resolved per hour' },
              { label: 'Novice / low-skilled workers', value: '+34%', note: 'Biggest improvement' },
              { label: 'Experienced / high-skilled', value: 'Minimal', note: 'Little change' },
            ],
          },
          {
            type: 'p',
            text: 'The authors also found better customer sentiment and higher employee retention, and suggested the tool spread the practices of more capable workers and helped newer staff gain experience faster.',
          },
        ],
      },
      {
        kicker: 'Compare with the chapter',
        title: 'Real gains, but not the lesson’s large ranges',
        blocks: [
          {
            type: 'table',
            head: ['Chapter 5 claim', 'What the study suggests'],
            rows: [
              ['Level 3 users gain 50-80%.', 'The measured average was about 14% in a real support center. The lesson’s ranges are illustrative.'],
              ['Measure beyond time saved.', 'The study also looked at customer sentiment and retention, not only speed.'],
              ['Capitalize and transmit.', 'The AI spread the habits of top agents to newer ones, a kind of built-in “transmit”.'],
              ['Keep humans sharp.', 'Experienced workers gained little, which fits the idea that AI helps most where know-how is thin and tasks are repetitive.'],
            ],
          },
          {
            type: 'callout',
            title: 'Use evidence, not hype',
            text: 'Where possible, cite measured results when you argue for AI at work. Real numbers are smaller than slogans, but they are credible.',
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
                title: 'Generative AI at Work',
                url: 'https://www.nber.org/papers/w31161',
                note: 'Brynjolfsson, Li and Raymond, NBER Working Paper 31161. Field study of AI assistance for customer-support agents.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: IMPACT on match-day operations',
    universe: 'beacon',
    slides: [
      {
        kicker: 'Identify and Model',
        title: 'Find the repetitive work, then write it down',
        blocks: [
          {
            type: 'p',
            text: 'The match-day coordinator, Sam, logs one week. Illustrative figures for the fictional club:',
          },
          {
            type: 'table',
            head: ['Task', 'Time', 'Frequency', 'Value', 'AI potential'],
            rows: [
              ['Weekly stewarding briefing document', '90 min', 'Weekly', 'Medium', 'High'],
              ['Answering supplier e-mails', '15 min', '8 a day', 'Low', 'Very high'],
              ['Post-match incident summary', '60 min', 'Per home game', 'Medium', 'High'],
              ['Calming a tense situation at a gate', 'n/a', 'Rare', 'High', 'Low (human)'],
            ],
          },
          {
            type: 'p',
            text: 'Sam models the briefing: inputs (fixture list, last match’s notes, safety rules), steps (draft, check, adapt for the away-fan section), decision points (capacity, special guests) and output (a two-page document).',
          },
        ],
      },
      {
        kicker: 'Prompt and Automate',
        title: 'An assistant and a Preparer workflow',
        blocks: [
          {
            type: 'columns',
            items: [
              { title: 'Persona: BriefBuddy', text: 'Role: match-day operations assistant. Context: mid-sized club, 12,000 capacity, strict safety rules. Missions: briefing drafts, incident summaries, supplier replies. Style: plain, short bullets. Limit: never invents safety facts; flags anything it was not told.' },
              { title: 'Workflow: Preparer', text: 'AI drafts the briefing from Sam’s notes; Sam checks safety items and adds special arrangements; the safety officer signs off.' },
            ],
          },
          {
            type: 'callout',
            title: 'Safety stays human',
            text: 'Crowd-safety decisions fall in the 20% that remains fully human. The AI drafts, but a qualified person approves.',
          },
        ],
      },
      {
        kicker: 'Capitalize and Transmit',
        title: 'Make it last',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Library:** Sam stores the best briefing prompt, a checklist for verifying it and the BriefBuddy setup in a shared folder.',
              '**Transmit:** at the next staff meeting Sam shows the finished briefing first, then explains how it was made, then helps the ticketing lead build a similar assistant.',
              '**Measure:** briefing time, number of corrections needed, steward satisfaction (1-10), and incidents reported late (business impact).',
              '**A/B test:** two prompt versions are compared over two matches, changing one variable.',
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
      q: 'What best describes the “augmented professional” (level 3) in the chapter?',
      options: [
        'Someone who uses AI for a few one-off tasks.',
        'Someone who has integrated AI into business processes and runs hybrid human-AI workflows.',
        'Someone who avoids AI.',
        'Someone who only reads about AI.',
      ],
      answer: 1,
      explanation: 'Level 3 means AI is built into processes, not just used occasionally or with reusable prompts only.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What does IMPACT stand for?',
      options: [
        'Identify, Model, Prompt, Automate, Capitalize, Transmit',
        'Imagine, Make, Publish, Analyze, Copy, Test',
        'Input, Method, Process, Action, Control, Track',
        'Inspect, Modify, Plan, Apply, Check, Teach',
      ],
      answer: 0,
      explanation: 'IMPACT organizes a whole way of working with AI, from finding opportunities to spreading them through the team.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which task has the highest AI opportunity signal?',
      options: [
        'A highly relational negotiation.',
        'A repetitive task with an identifiable pattern, such as standard e-mail replies.',
        'A purely creative brainstorm.',
        'A rare occasion requiring unique human judgment.',
      ],
      answer: 1,
      explanation: 'Repetitive tasks with recognizable patterns are the best candidates. Highly relational or purely creative tasks have the lowest AI potential.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'In the “expert shadow” technique, which is NOT something you record?',
      options: ['The steps', 'The inputs', 'Where you apply judgment', 'Your favorite color'],
      answer: 3,
      explanation: 'You record the sequence of micro-steps, inputs, decision points and the output format.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which of these is part of the professional AI persona template?',
      options: [
        'Role and expertise, my context, typical missions, collaboration style and a quality reference.',
        'Name, address, password and birthday.',
        'Only a title.',
        'A list of competitors’ secrets.',
      ],
      answer: 0,
      explanation: 'The template has five parts, plus an activation prompt asking the AI to confirm and request the first mission.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'AI analyzes the metrics, you interpret the context, AI proposes actions and you prioritize. Which pattern is this?',
      options: ['Preparer', 'Accelerator', 'Analyzer', 'Multiplier'],
      answer: 2,
      explanation: 'In the Analyzer pattern AI handles data and insight generation while the human interprets and decides.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'What is the lesson’s advice on the order to transmit your methods to colleagues?',
      options: [
        'Explain the theory first, then show results.',
        'Show results before explaining the methods, starting with their concrete problems.',
        'Send a long email.',
        'Keep the methods secret.',
      ],
      answer: 1,
      explanation: 'Demonstration by example comes first, followed by training on real use cases and personalized help.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Why does the lesson recommend using pseudonyms and fictitious names in its communication-adaptation grid?',
      options: [
        'To make the grid longer.',
        'To avoid confidentiality problems by keeping real personal data out of the AI tool.',
        'Because the AI cannot read real names.',
        'Because names are tokens.',
      ],
      answer: 1,
      explanation: 'It applies the consultant rule from Chapter 2: do not enter real personal or confidential data.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'What is “atomic content”?',
      options: [
        'Very small images.',
        'Creating one master piece and repurposing it into multiple formats, audiences and moments.',
        'Content that is only one sentence.',
        'Content copied from others.',
      ],
      answer: 1,
      explanation: 'Create once, repurpose many times. The master experience becomes posts, threads, slides, articles and newsletters.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'Which is the correct order of the four layers of analysis?',
      options: [
        'Operational, strategic, diagnostic, radar',
        'Radar, diagnostic, strategic, operational',
        'Strategic, radar, operational, diagnostic',
        'Diagnostic, radar, operational, strategic',
      ],
      answer: 1,
      explanation: 'First notice what changed (radar), then why (diagnostic), what it means (strategic) and what to do (operational).',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'Why does the lesson call time saved an insufficient measure of AI value?',
      options: [
        'Because AI never saves time.',
        'Because quality, new opportunities and reduced stress also matter and are part of an expanded ROI.',
        'Because time cannot be measured.',
        'Because only costs matter.',
      ],
      answer: 1,
      explanation: 'Value shows up as better quality, created opportunities and freed energy as well as hours.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'In a prompt A/B test, how many variables should you change between version A and version B?',
      options: ['All of them', 'One', 'None', 'At least five'],
      answer: 1,
      explanation: 'Changing a single variable lets you see what caused any difference. Record the same criteria for both versions.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q13',
      type: 'mcq',
      q: 'What is the “augmented 80/20 rule”?',
      options: [
        'Use AI for 80% of suitable tasks and keep about 20% fully human to maintain skills and judgment.',
        'Spend 80% of the time on prompts.',
        'Accept 80% of AI answers without checking.',
        'Use AI only 20% of the time, always.',
      ],
      answer: 0,
      explanation: 'It protects against intellectual laziness. Complex relationships, pure creativity and sensitive strategic decisions stay mostly human.',
      review: { section: 'plain', slide: 12 },
    },
    {
      id: 'q14',
      type: 'mcq',
      q: 'In the Brynjolfsson, Li and Raymond study, which group gained the most from the AI assistant?',
      options: [
        'The most experienced agents.',
        'Novice and low-skilled agents (about 34% more productive).',
        'No one gained anything.',
        'Managers only.',
      ],
      answer: 1,
      explanation: 'Average productivity rose about 14%, with novice and low-skilled workers improving about 34% and experienced workers seeing minimal impact.',
      review: { section: 'real', slide: 0 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'Choose one recurring task in a sports organization (for example preparing a weekly sponsor report). Apply all six steps of the IMPACT framework to it, in order, with one or two sentences per step.',
      answer: [
        'Identify: the weekly sponsor report takes about 3 hours, is repeated every week, has medium added value and a repetitive structure, so AI potential is high. Model: break it into inputs (attendance, media mentions, social metrics, campaign notes), steps (collect, summarize, compare with last week, draft commentary, format), decision points (which highlights to emphasize, anything sensitive) and output (a two-page report).',
        'Prompt: create a specialized assistant with role (sponsorship reporting assistant), context (club and sponsor types), missions (draft the summary, compare to last week, propose three highlights), style (plain, factual) and limits (never invent numbers; flag missing data), with an activation line. Automate: use the Preparer or Accelerator pattern: the manager gathers verified data; AI drafts; the manager checks every figure and adds relationship notes; AI polishes; the manager approves and sends.',
        'Capitalize: save the validated prompt, the checklist and the persona configuration in a shared library. Transmit: demonstrate the finished report to colleagues first, then show how it was made and help them build their own versions. Measure time, accuracy corrections and sponsor satisfaction.',
      ],
      marking: [
        'Identify with time/frequency/value/AI potential (2)',
        'Model with inputs, steps, decisions, output (2)',
        'Prompt: a persona with role, context, missions, style, limits (2)',
        'Automate: a named pattern with human and AI roles (2)',
        'Capitalize (1)',
        'Transmit (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A manager reports: “Our AI assistant saves us 10 hours a week, so it is a success.” Explain why this is an incomplete evaluation, propose a metric set across the three families and describe how to compare two prompt versions fairly.',
      answer: [
        'Time saved is only one dimension. The chapter argues that impact also shows in better quality, opportunities created and reduced stress, and the expanded ROI includes them while dividing by learning time and tool costs. Ten hours saved says nothing about whether the output was good, whether errors increased or whether people are comfortable with it.',
        'Metrics: quantitative (hours saved, number of automated tasks, frequency of use, preparation versus execution time), qualitative (perceived quality 1-10, stress on recurring tasks, satisfaction, sense of control) and business impact (goals achieved versus forecast, opportunities seized, client or team relationship quality, process improvements introduced).',
        'To compare two prompt versions, use an A/B test: run version A for a period and record quality, time and ease of use; run version B changing one variable only, recording the same criteria; compare and keep the better one as the new standard, then test a new variant. Changing one variable means any difference can be attributed to it.',
      ],
      marking: [
        'Explains why time saved is incomplete (2)',
        'Quantitative, qualitative and business metrics all present (3)',
        'Mentions expanded ROI or learning/tool costs (1)',
        'Describes a fair A/B test (change one variable, same criteria) (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Describe three pitfalls of over-dependence on AI at work and explain the “augmented 80/20 rule” as a safeguard.',
      answer: [
        'Intellectual laziness: delegating without understanding and accepting outputs without checking, which erodes skill and lets errors through. Loss of creativity: convergence on standard, similar solutions because the AI tends toward the typical, so people should push it to explore unconventional approaches. Professional isolation: reducing human interaction in favor of efficiency, when AI should enrich interactions rather than replace them.',
        'The augmented 80/20 rule suggests that about 80% of suitable tasks (repetitive tasks, data analysis, structured content) benefit from AI assistance, while about 20% remain fully human (complex relationships, pure creativity, sensitive strategic decisions). Keeping a manual share maintains skills, judgment and a ability to challenge the AI, and keeps accountability with the person.',
      ],
      marking: [
        'Names and explains three pitfalls (3)',
        'States the 80/20 rule correctly (1)',
        'Links it to maintaining skills, judgment and accountability (2)',
      ],
    },
  ],

  videos: [],
};
