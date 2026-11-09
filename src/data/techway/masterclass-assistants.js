// Techway, TP Masterclass 2: Prompt engineering for productivity (assistants, workflows, metrics, deployment).
// Built from the "TP Masterclass 2" brief and its correction in the Techway lesson document (diagnostic prompts,
// specialized assistants DealMaker / TeamTrainer / SolutionPro, the Accelerator and Multiplier workflows, the metrics
// dashboard, the "Concentric Allies" deployment plan and the failure-analysis bonus).
// Real example: the December 2023 Chevrolet of Watsonville chatbot that was talked into "selling" a Tahoe for $1
// (AI Incident Database, entry for Chevrolet of Watsonville).

export const masterclassAssistantsTopic = {
  id: 'masterclass-assistants',
  course: 'techway',
  title: 'TP Masterclass 2: diagnosing, building assistants, workflows and deployment',
  sessions: 'TP Masterclass 2',
  reading: 'Techway lesson, TP Masterclass 2 and its correction',
  minutes: 40,
  summary:
    'A full worked project in four phases: diagnose before you build, design specialized assistants with a personality, organize human-AI workflows (Accelerator, Multiplier, Preparer, Analyzer), measure impact beyond time saved and deploy through people, not just tools.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The mission',
      title: 'Turning a small company into an AI-assisted one',
      blocks: [
        {
          type: 'big',
          text: 'You are the digital transformation manager of **TechFlow Solutions**, a 45-person company that builds web apps for small businesses. Your goal: build a system of AI assistants for three departments, **prove** it works and **prepare** to scale it.',
        },
        {
          type: 'columns',
          items: [
            { title: 'The departments', text: 'Sales (5 people), Development (15) and Customer Support (8).' },
            { title: 'The constraints', text: 'Little training budget (2 days per department), teams new to AI, results needed within a month, very different work cultures.' },
          ],
        },
        {
          type: 'flow',
          items: [
            { title: 'Phase 1', text: 'Diagnose and map (30 min)' },
            { title: 'Phase 2', text: 'Design assistants (45 min)' },
            { title: 'Phase 3', text: 'Integrate workflows (30 min)' },
            { title: 'Phase 4', text: 'Measure and deploy (25 min)' },
            { title: 'Bonus', text: 'Learn from failures (10 min)' },
          ],
        },
        {
          type: 'p',
          text: 'The work is judged on five criteria: **prompt precision**, **realism**, **justification of choices**, **overall vision** (does the system fit together?) and **change management** (did you think about people?). Answers are written as: Response, then Justification.',
        },
      ],
    },
    {
      kicker: 'Phase 1',
      title: 'Diagnose before you build',
      blocks: [
        {
          type: 'p',
          text: 'A doctor diagnoses before prescribing. “Analyze my processes” gives a vague answer. A **diagnostic prompt** is built with CLEAR so the answer is data you can act on.',
        },
        {
          type: 'table',
          head: ['Part of the sales diagnostic prompt', 'Why it works'],
          rows: [
            ['“Act as a digital-transformation consultant specializing in B2B sales processes.”', 'The expert role sets vocabulary and method.'],
            ['Context: 5-person sales team in a tech SME, using a basic CRM, Excel and e-mail.', 'Real details let the advice fit your reality.'],
            ['Mission: find the 5 most time-consuming, repetitive tasks that AI could help with.', 'A precise, countable goal.'],
            ['Response format: task, time per week, repetitiveness (1-5), AI potential (1-5), business impact, complexity.', 'A fixed table gives comparable, usable data.'],
            ['Constraint: measurable gains within 30 days with accessible tools.', 'A creative constraint keeps the answer practical.'],
          ],
        },
        {
          type: 'callout',
          title: 'The output of phase 1 feeds phase 2',
          text: 'The quantified list of tasks tells you what each assistant should be good at.',
        },
      ],
    },
    {
      kicker: 'Phase 1, continued',
      title: 'One method, three different prompts',
      blocks: [
        {
          type: 'table',
          head: ['Department', 'How the prompt is adapted', 'Special criterion'],
          rows: [
            ['Sales', 'Business language and a ranked list of tasks.', 'AI automation potential and business impact.'],
            ['Development', 'Developer vocabulary (velocity, time-to-market, stack). Three angles: repetitive tasks, bottlenecks, quality versus speed.', '**Team frustration** (1-5), because technical motivation matters.'],
            ['Customer support', 'A balanced tone, efficiency plus empathy. Grid: volume, complexity, time, escalation, customer frustration.', '**Escalation** (when juniors need seniors) and recurring pain points.'],
          ],
        },
        {
          type: 'p',
          text: 'The lesson’s point: adapt the structure and vocabulary to the department’s way of thinking. Developers think in systems, so they get three complementary angles instead of a single list.',
        },
      ],
    },
    {
      kicker: 'Phase 2',
      title: 'AI personas: a colleague with a personality',
      blocks: [
        {
          type: 'p',
          text: 'A **persona** is an assistant set up with a name, a role, a style and precise missions. The clearer its identity, the more relevant its replies.',
        },
        {
          type: 'steps',
          items: [
            '**Clear identity:** a name, an expert role and a specialty (“You are DealMaker, a senior sales assistant for B2B tech”).',
            '**Personal context:** how *you* work (“my style is consultative and value-led”).',
            '**Defined missions:** three or four specific task types, not “help with everything”.',
            '**Consistent style:** tone, format and cultural references that suit the profession.',
          ],
        },
        {
          type: 'callout',
          title: 'Do not forget the hand-shake',
          text: 'End the setup with “Confirm you understand this profile and ask me for the first task.” It checks understanding before real work starts.',
        },
      ],
    },
    {
      kicker: 'Phase 2, continued',
      title: 'Three assistants side by side',
      blocks: [
        {
          type: 'table',
          head: ['', 'DealMaker', 'TeamTrainer', 'SolutionPro'],
          rows: [
            ['Department', 'Sales', 'Sales training', 'Customer support'],
            ['Job', 'Personalized proposals, follow-ups, meeting prep, competitive positioning.', 'Turn technical features into clear business benefits for the team and for prospects.', 'Resolve tickets fast while keeping the relationship warm.'],
            ['Style', 'Professional but warm; consultative.', 'Pedagogical for the team; simple, benefit-led for prospects.', 'Empathy, efficiency (3 questions max), pedagogy, commitment.'],
            ['Output formats', 'Structured proposal with call to action.', 'Feature sheet, sales argument, explanation guide.', 'Greeting, questions, immediate fix, timeline.'],
            ['Test case', 'A 20-person green-tech start-up, €50k budget, decision in 2 weeks.', 'Explain “real-time synchronization”.', '“My app crashes since the update; I lost 2 hours of work!”'],
          ],
        },
        {
          type: 'callout',
          title: 'What makes a test prompt good',
          text: 'A realistic case with real constraints, precise instructions that guide without over-restricting, and a result you can measure (for example, did SolutionPro start with empathy and ask no more than 3 questions?).',
        },
      ],
    },
    {
      kicker: 'Phase 3',
      title: 'Four ways humans and AI work together',
      blocks: [
        {
          type: 'p',
          text: 'Assistants must fit into real work. Give humans what they do best (relationships, context, decisions) and AI what it does best (speed, structure, variation).',
        },
        {
          type: 'table',
          head: ['Pattern', 'How it flows', 'Example'],
          rows: [
            ['Preparer', 'AI prepares the work; human customizes and decides.', 'AI drafts a meeting brief; the salesperson tailors it.'],
            ['Accelerator', 'Human guides (about 20% of the time), AI develops fast (about 60%), human finalizes (about 20%).', 'Express commercial proposal.'],
            ['Analyzer', 'AI processes data; human interprets and decides.', 'AI clusters support tickets; the manager chooses priorities.'],
            ['Multiplier', 'One human effort becomes several AI-made outputs.', 'One technical spec becomes three sales assets.'],
          ],
        },
      ],
    },
    {
      kicker: 'Phase 3: Accelerator',
      title: 'The “Express Proposal” workflow',
      blocks: [
        {
          type: 'p',
          text: 'Goal: cut proposal time from about 2 hours to 45 minutes with more personalization, and always a human check before sending.',
        },
        {
          type: 'steps',
          items: [
            '**1. Human collection (10 min).** The salesperson talks to the prospect and captures facts and feelings. Humans read relationships.',
            '**2. AI generation.** DealMaker turns the full brief into a structured, sector-specific proposal using the template.',
            '**3. Human enrichment.** Add past exchanges, the prospect’s preferences, tone for this decision-maker, and check alignment with their strategy.',
            '**4. AI finalization.** Improve transitions, sharpen calls to action, check coherence.',
            '**5. Human validation.** Final review, adjustments and sending. The salesperson carries final responsibility.',
          ],
        },
        {
          type: 'kpis',
          items: [
            { label: 'Time per proposal', value: '2 h → 45 min', note: 'Target' },
            { label: 'Human steps', value: '3 of 5', note: 'Start, enrich, validate' },
            { label: 'Human sign-off', value: 'Always', note: 'Before sending' },
          ],
        },
      ],
    },
    {
      kicker: 'Phase 3: Multiplier',
      title: 'The “Product Training” workflow',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Master source', text: 'Developers write structured specs: feature, benefit, use-case example.' },
            { title: '2. AI expansion', text: 'TeamTrainer makes three assets: internal argument, prospect pitch, objections FAQ.' },
            { title: '3. Commercial check', text: 'The sales manager enriches and validates (about 20 min).' },
            { title: '4. Distribution', text: 'Each asset goes to the right place: knowledge base, sales kit, pre-sales support.' },
          ],
        },
        {
          type: 'callout',
          title: 'Why it pays off',
          text: 'About 40 minutes of human effort replaces roughly 3 hours of manual writing, and the three assets stay **in sync** whenever a feature changes, which removes the classic gap between technical and sales documents.',
        },
      ],
    },
    {
      kicker: 'Phase 4',
      title: 'Measure more than time saved',
      blocks: [
        {
          type: 'p',
          text: 'Management is convinced by evidence. For each department define **3 quantitative**, **2 qualitative** and **1 business-impact** metric, all measurable before and after.',
        },
        {
          type: 'table',
          head: ['Type', 'Sales example'],
          rows: [
            ['Quantitative (easy to count)', 'Proposal time 2 h → 45 min; proposals per salesperson per week 3 → 5; personalization elements per proposal 2 → 6.'],
            ['Qualitative (human effect)', 'Client rating of how tailored the proposal felt (1-10); the team’s confidence that AI makes them more effective (monthly anonymous survey).'],
            ['Business (money)', 'Prospect-to-client conversion rate, at least maintained, with a target of +15%.'],
          ],
        },
        {
          type: 'callout',
          title: 'Expanded ROI',
          text: 'ROI = (time saved × hourly value) + (improved quality × business impact) + (reduced stress × well-being cost). Each audience cares about a different layer: leadership wants business figures, managers want efficiency, teams want well-being.',
        },
      ],
    },
    {
      kicker: 'Phase 4',
      title: 'Deployment fails on people, not technology',
      blocks: [
        {
          type: 'table',
          head: ['Resistance profile', 'Their fear', 'Message and action'],
          rows: [
            ['Threatened experts', 'AI will devalue my expertise.', '“AI amplifies your expertise.” Make them validators of AI outputs.'],
            ['Chronically overwhelmed', 'I have no time to learn.', '“15 minutes of learning saves hours.” Micro-learning on their own tasks.'],
            ['Rational skeptics', 'I have seen ten revolutions fail.', 'Show pilot data and benchmarks; offer a no-commitment trial.'],
            ['Technology-anxious', 'It is moving too fast.', '“We learn together.” Beginner group, one-to-one mentoring, a simple interface.'],
          ],
        },
        {
          type: 'p',
          text: 'The deployment prompt gives the AI a credible expert role, all real constraints (45 people, 3 months, 2 training days, keep performance steady), the four profiles and a mandated method.',
        },
      ],
    },
    {
      kicker: 'Phase 4',
      title: '“Concentric Allies”: three circles of adoption',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Circle 1, Champions (about 15%, weeks 1-2).** Recruit volunteers, train them intensively, give them time and a small experiment budget, and get one visible success each.',
            '**Circle 2, Social proof (about 60%, weeks 3-8).** Champions demo results, hold a weekly informal chat, offer on-demand training and share internal success stories. Success: most teams have tried it at least once.',
            '**Circle 3, Generalization (about 25%, weeks 9-12).** Short role-specific training, a mentor from the champions, a “grace period” with no impact on evaluations, and an internal helpline. Success: most people use AI weekly.',
          ],
        },
        {
          type: 'callout',
          title: 'Include contingencies',
          text: 'A good plan lists weekly actions, one strategy per resistance profile, a backup if things go wrong and the metrics that show whether it is working.',
        },
      ],
    },
    {
      kicker: 'Bonus',
      title: 'Turn failures into upgrades',
      blocks: [
        {
          type: 'p',
          text: 'When an assistant produces a bad result (say, a rejected proposal), do not just rerun it. Analyze it on four levels.',
        },
        {
          type: 'table',
          head: ['Level', 'Question', 'Output'],
          rows: [
            ['1. Symptoms', 'What went wrong?', 'The three most likely causes (poor needs understanding, weak arguments, price or timing).'],
            ['2. Root cause', 'Why did the prompt fail?', 'Missing information, vague instructions, no examples.'],
            ['3. Immediate fix', 'How do we repair this prompt?', 'A corrected prompt with the missing context and safeguards.'],
            ['4. Prevention', 'How do we stop it recurring?', 'One new qualification question and one new pre-send check for the assistant.'],
          ],
        },
        {
          type: 'p',
          text: 'Repeated over months, this loop makes the assistant steadily better.',
        },
      ],
    },
    {
      kicker: 'Synthesis',
      title: 'The big picture and mistakes avoided',
      blocks: [
        {
          type: 'table',
          head: ['Beginner mistake', 'Better practice'],
          rows: [
            ['Generic prompt (“Help with my work”)', 'Situation + objective + format + constraints.'],
            ['One assistant for everything', 'One specialty per assistant.'],
            ['Using AI occasionally', 'AI built into the daily process.'],
            ['Deploying a tool', 'Deploying new ways of working: adoption and support.'],
          ],
        },
        {
          type: 'p',
          text: 'The project also follows the **IMPACT** method of Chapter 5: Identify (phase 1), Model and Prompt (phase 2), Automate (phase 3), Capitalize and Transmit (phase 4).',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'Diagnostic prompt', def: 'A prompt built to analyze a situation (for example, which tasks could AI help with) and return structured, comparable data.' },
    { term: 'AI persona', def: 'An assistant configured with a name, expert role, working context, specific missions and a consistent style.' },
    { term: 'Specialized assistant', def: 'An assistant built for one area of expertise instead of a do-everything generalist.' },
    { term: 'Test prompt', def: 'A realistic scenario used to check whether an assistant behaves as designed.' },
    { term: 'Hybrid workflow', def: 'A process that deliberately divides steps between humans and AI according to their strengths.' },
    { term: 'Preparer pattern', def: 'AI prepares the work and the human customizes and decides.' },
    { term: 'Accelerator pattern', def: 'The human sets direction, the AI develops quickly, and the human validates and adjusts.' },
    { term: 'Analyzer pattern', def: 'AI processes data and the human interprets and decides.' },
    { term: 'Multiplier pattern', def: 'One human effort is turned by AI into several tailored outputs.' },
    { term: 'Human-in-the-loop validation', def: 'A required human review before an AI-assisted output is sent or acted on.' },
    { term: 'Quantitative metric', def: 'A count or measure that is easy to compare before and after, such as time per proposal.' },
    { term: 'Qualitative metric', def: 'A human-impact measure, such as customer rating or team confidence.' },
    { term: 'Business metric', def: 'A result that matters to management, such as conversion rate or revenue.' },
    { term: 'Expanded ROI', def: 'Return that counts time saved, quality gains and well-being, not just hours saved.' },
    { term: 'Change management', def: 'Planning for the human side of introducing something new: training, communication, resistance and support.' },
    { term: 'Concentric Allies', def: 'The lesson’s three-circle rollout: about 15% early adopters, 60% pragmatists won by proof, 25% late adopters won by support.' },
    { term: 'Grace period', def: 'A set time in which learning to use a new tool will not affect performance evaluations.' },
    { term: 'Failure analysis prompt', def: 'A prompt that examines why an assistant failed on four levels and proposes a fix and a permanent improvement.' },
  ],
  cards: [
    { front: 'The four phases of the masterclass', back: 'Diagnose and map; design assistants; integrate workflows; measure and deploy. Bonus: learn from failures.' },
    { front: 'Why diagnose first?', back: 'A vague prompt gives vague answers. A structured diagnostic gives data to decide what to build.' },
    { front: 'The four steps to build a persona', back: 'Clear identity; personal context; defined missions; consistent style.' },
    { front: 'DealMaker', back: 'Sales assistant for personalized proposals, follow-ups, meeting prep and competitive positioning.' },
    { front: 'TeamTrainer', back: 'Assistant that simplifies technical features into business benefits for sales teams and prospects.' },
    { front: 'SolutionPro', back: 'Support assistant balancing empathy, efficiency (3 questions max), pedagogy and commitment.' },
    { front: 'Four human-AI patterns', back: 'Preparer, Accelerator, Analyzer, Multiplier.' },
    { front: 'Accelerator time split', back: 'Human guides about 20%, AI develops about 60%, human finalizes about 20%.' },
    { front: 'What do humans do best?', back: 'Relationships, context and decisions. AI does speed, structuring and variation.' },
    { front: 'Multiplier benefit', back: 'One human effort produces several consistent outputs, and they stay in sync when updated.' },
    { front: 'The metric mix per department', back: '3 quantitative, 2 qualitative, 1 business-impact.' },
    { front: 'Expanded ROI', back: 'Time saved x hourly value + improved quality x business impact + reduced stress x well-being cost.' },
    { front: 'Four resistance profiles', back: 'Threatened experts, chronically overwhelmed, rational skeptics, technology-anxious.' },
    { front: 'Concentric Allies', back: 'Champions (~15%), social proof for pragmatists (~60%), supported late adopters (~25%).' },
    { front: 'The four levels of failure analysis', back: 'Symptoms, root cause, immediate fix, permanent prevention.' },
    { front: 'Why does AI deployment usually fail?', back: 'Human factors (fear, time, skepticism), more than technical ones.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: the chatbot that “sold” a Chevy Tahoe for $1',
    note: 'Reported in the AI Incident Database (entry for Chevrolet of Watsonville), December 2023. It is a cautionary tale about assistants set up without clear limits. The page does not describe any legal outcome, so none is claimed here.',
    slides: [
      {
        kicker: 'What happened',
        title: 'A dealership assistant was talked out of its job',
        blocks: [
          {
            type: 'p',
            text: 'In December 2023, a Chevrolet dealership’s website chatbot, powered by ChatGPT, was manipulated by a user. The user wrote a prompt that changed the bot’s objective so that it should **agree with anything the customer said**. The bot then agreed to sell a 2024 Chevy Tahoe for **$1**, adding that this was “a legally binding offer”.',
          },
          {
            type: 'callout',
            title: 'The lesson',
            text: 'The assistant had a friendly personality but no hard limits and no human sign-off on commitments. Anyone could rewrite its goals just by asking.',
          },
        ],
      },
      {
        kicker: 'Mapping to the masterclass',
        title: 'Which design steps were missing?',
        blocks: [
          {
            type: 'table',
            head: ['Masterclass idea', 'What it would have looked like'],
            rows: [
              ['Defined missions (not “help with everything”)', 'Answer product questions and book test drives only. No pricing commitments.'],
              ['Constraints in the persona', '“Never state a final price or make a binding offer. Refer pricing to a salesperson.”'],
              ['Human validation before commitments', 'Offers and contracts go through a sales representative.'],
              ['Test prompts', 'Try to break the assistant before launch: ask it to change its rules, agree to anything, ignore instructions.'],
              ['Failure analysis loop', 'Review odd conversations regularly and tighten the configuration.'],
            ],
          },
        ],
      },
      {
        kicker: 'Why it matters',
        title: 'A persona is not a security system',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Instructions written in a prompt can be **overridden by another prompt**. This is often called prompt injection.',
              'So important limits should also live **outside** the prompt, for example in the software that actually accepts orders.',
              'Anything that creates a promise, a payment or a legal commitment needs a **human in the loop**.',
              'This is the same logic as “mandatory human validation before sending” in the Express Proposal workflow.',
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
                title: 'Chevrolet of Watsonville (entity page)',
                url: 'https://incidentdatabase.ai/entities/chevrolet-of-watsonville',
                note: 'AI Incident Database. Reports on the dealership chatbot that agreed to sell a vehicle for $1 in December 2023.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: three assistants for the commercial office',
    universe: 'beacon',
    slides: [
      {
        kicker: 'Diagnose',
        title: 'Phase 1 at the club',
        blocks: [
          {
            type: 'p',
            text: 'Beacon Athletic’s commercial office has four people: ticketing, sponsorship, hospitality and fan services. Before building anything, the manager asks an AI (with no real contracts or customer data) to rank repetitive tasks.',
          },
          {
            type: 'table',
            head: ['Task (illustrative)', 'Hours/week', 'AI potential (1-5)', 'Complexity'],
            rows: [
              ['Answering common ticket questions', '9', '5', 'Low'],
              ['Drafting sponsor update e-mails', '4', '4', 'Low'],
              ['Writing hospitality package descriptions', '3', '4', 'Low'],
              ['Matching fan complaints to the right owner', '5', '3', 'Medium'],
            ],
          },
          {
            type: 'p',
            text: 'The table is invented for the exercise. The point is the format: comparable columns that let the manager choose where to start.',
          },
        ],
      },
      {
        kicker: 'Build',
        title: 'Phase 2: three personas',
        blocks: [
          {
            type: 'columns',
            items: [
              { title: 'FanDesk', text: 'Answers ticket and stadium questions in a friendly tone; max 3 clarifying questions; never promises refunds; hands over to a person for complaints.' },
              { title: 'PartnerPen', text: 'Drafts sponsor updates from facts the sponsorship manager supplies; formal but warm; must flag any number it was not given.' },
              { title: 'MatchMenu', text: 'Writes hospitality package descriptions from a fact sheet; luxurious tone; cannot invent menus or prices.' },
            ],
          },
          {
            type: 'callout',
            title: 'Hard limits in the setup',
            text: 'Each assistant gets “never”: never confirm a price, a refund or a contract. Those go to a person. The Chevy case shows why.',
          },
        ],
      },
      {
        kicker: 'Workflow',
        title: 'Phase 3: Accelerator for the sponsor update',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Human:** the sponsorship manager collects verified numbers (attendance, impressions from the club’s own data) and notes the sponsor’s current priorities.',
              '**AI (PartnerPen):** drafts the update.',
              '**Human:** adds personal touches and checks every figure.',
              '**AI:** tightens wording and calls to action.',
              '**Human:** approves and sends.',
            ],
          },
        ],
      },
      {
        kicker: 'Deploy',
        title: 'Phase 4: bring people along',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Champion:** one enthusiastic ticketing agent pilots FanDesk for two weeks and shares what saved time.',
              '**Metrics:** average reply time (quantitative), agent confidence (qualitative), repeat-ticket-buyer rate (business).',
              '**Resistance:** a veteran who worries about being replaced is invited to act as validator of FanDesk’s answers.',
              '**Failure loop:** every angry fan reply is reviewed monthly and the setup is improved.',
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
      q: 'Why does the masterclass start with a diagnostic phase before building any assistant?',
      options: [
        'Because it is required by law.',
        'Because a structured diagnosis gives concrete data about what to build, whereas a vague “analyze my processes” gives a vague answer.',
        'Because assistants cannot be built without a diagnosis tool.',
        'Because diagnosis is the cheapest phase.',
      ],
      answer: 1,
      explanation: 'Like a doctor, you diagnose before prescribing. A well-structured diagnostic prompt produces actionable, comparable data.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The development diagnostic prompt includes a “team frustration” criterion. Why?',
      options: [
        'To make the answer longer.',
        'Because in technical teams motivation and frustration reveal the tasks worth automating.',
        'Because frustration is a CLEAR element.',
        'Because sales teams never feel frustrated.',
      ],
      answer: 1,
      explanation: 'Each department’s prompt is adapted to how it thinks. For developers, technical motivation is crucial, so frustration is a useful signal.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which of the following is NOT one of the four steps for building an AI persona?',
      options: [
        'Clear identity',
        'Personal context',
        'Maximum number of tokens',
        'Consistent style',
      ],
      answer: 2,
      explanation: 'The four steps are clear identity, personal context, defined missions and consistent style.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which assistant is designed to turn technical features into business benefits for the sales team?',
      options: ['DealMaker', 'TeamTrainer', 'SolutionPro', 'None of them'],
      answer: 1,
      explanation: 'TeamTrainer simplifies technical concepts for sales staff and prospects. DealMaker writes proposals; SolutionPro handles support tickets.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'SolutionPro’s configuration limits diagnostic questions to three. What is the stated reason?',
      options: [
        'The AI can only count to three.',
        'Too many questions would worsen the frustration of a hurried customer.',
        'The company has only three support agents.',
        'It reduces token use.',
      ],
      answer: 1,
      explanation: 'Framed efficiency: a long interrogation increases frustration. Empathy first, then a quick diagnosis.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'In the Accelerator pattern, who does what?',
      options: [
        'AI guides, human develops, AI finalizes.',
        'Human guides (about 20%), AI develops quickly (about 60%), human validates and adjusts (about 20%).',
        'Human does everything.',
        'AI does everything.',
      ],
      answer: 1,
      explanation: 'Humans set direction and take final responsibility; AI does the heavy drafting in the middle.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'One technical specification becomes an internal argument, a prospect pitch and an FAQ. Which pattern is this?',
      options: ['Preparer', 'Accelerator', 'Analyzer', 'Multiplier'],
      answer: 3,
      explanation: 'The Multiplier turns one human effort into several tailored outputs, and keeps them synchronized.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'In the Express Proposal workflow, which step must always stay with a human?',
      options: [
        'Generating the first draft.',
        'The final validation and sending.',
        'Spell-checking.',
        'Choosing the font.',
      ],
      answer: 1,
      explanation: 'The brief calls for mandatory human validation before sending. The salesperson carries final responsibility.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'Which metric set does the masterclass ask for each department?',
      options: [
        '1 quantitative, 1 qualitative, 3 business',
        '3 quantitative, 2 qualitative, 1 business-impact',
        '5 quantitative only',
        '2 quantitative, 2 qualitative, 2 business',
      ],
      answer: 1,
      explanation: 'Three easy-to-measure numbers, two measures of human impact and one result that matters to management.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'Which statement best describes the “expanded ROI” idea?',
      options: [
        'Only count the hours saved.',
        'Count time saved, quality improvement and reduced stress or well-being.',
        'Count only the licence cost.',
        'Ignore the employees’ opinions.',
      ],
      answer: 1,
      explanation: 'Time saved is only one component. Better quality and well-being matter too, and each audience cares about a different layer.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'A senior employee fears AI will make their expertise worthless. What strategy does the lesson suggest?',
      options: [
        'Ignore the concern.',
        'Make them a validator of AI outputs and stress that AI amplifies expertise.',
        'Force them to retire.',
        'Skip their training.',
      ],
      answer: 1,
      explanation: 'The “threatened expert” gets a valued role as validator, and the message that AI amplifies, not replaces, their expertise.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'In the “Concentric Allies” plan, who is recruited first?',
      options: [
        'The most resistant 25%.',
        'About 15% voluntary early adopters (champions).',
        'Everyone at once.',
        'Only the managers.',
      ],
      answer: 1,
      explanation: 'Start with willing champions, build visible success, then win the pragmatic majority with evidence, then support the late adopters.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q13',
      type: 'mcq',
      q: 'A rejected proposal made by DealMaker is analyzed. Which level asks “why did the prompt fail?”',
      options: ['Level 1: symptoms', 'Level 2: root cause', 'Level 3: immediate fix', 'Level 4: prevention'],
      answer: 1,
      explanation: 'Level 1 identifies what went wrong, level 2 the prompt cause, level 3 the repair and level 4 the permanent change.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q14',
      type: 'mcq',
      q: 'What went wrong with the Chevrolet dealership chatbot in December 2023?',
      options: [
        'It refused to talk to customers.',
        'A user rewrote its goal so it agreed to anything, and it “agreed” to sell a Tahoe for $1 with no human check.',
        'It translated badly.',
        'It crashed during a sale.',
      ],
      answer: 1,
      explanation: 'The assistant had no firm limits and no human validation of commitments, so a crafted prompt changed its behavior.',
      review: { section: 'real', slide: 0 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A sports club wants an AI assistant for its ticket office. (a) Write the configuration prompt (identity, context, missions, style, limits) for the assistant. (b) Write a realistic test prompt. (c) Justify your choices using the four steps for building a persona.',
      answer: [
        'Configuration: “You are FanDesk, the ticket-office assistant of a mid-sized football club. You answer questions about tickets, memberships, seating and match-day access. My context: I work in the ticket office; my style is friendly, plain and quick. Missions: 1) answer common ticket questions, 2) explain membership options, 3) draft replies to fans for me to review, 4) prepare a list of open questions for a human agent. Style: short sentences, warm, no jargon. Limits: ask at most three clarifying questions; never promise refunds, prices or exceptions; hand complaints to a human. Confirm you understand and ask for my first task.”',
        'Test prompt: “A fan writes: ‘I paid for two seats but the gate scanned only one ticket and my daughter was refused entry. I want my money back.’ The fan is very upset (9/10) and not technical. Follow your process: start with empathy, ask at most three questions, propose an immediate step, say what happens next and flag that a refund decision belongs to a human.”',
        'Justification: clear identity (name, role, specialty); personal context (my team and style); defined missions (four specific tasks, not “help with everything”); consistent style with explicit limits. The test is realistic, has measurable criteria (empathy first, max three questions, no refund promise) and checks that the limits hold.',
      ],
      marking: [
        'Clear identity and role (1)',
        'Context and 3-4 defined missions (2)',
        'Style and format guidance (1)',
        'Explicit limits and human hand-off (2)',
        'Realistic test prompt with checkable criteria (2)',
        'Justification linked to the persona steps (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Name the four human-AI collaboration patterns. Choose the best pattern for (i) turning one technical specification into several documents, and (ii) analyzing 2,000 support tickets to decide priorities. Justify each choice and say what the human keeps.',
      answer: [
        'The four patterns are Preparer (AI prepares, human customizes and decides), Accelerator (human guides, AI develops quickly, human finalizes), Analyzer (AI processes data, human interprets and decides) and Multiplier (one human effort becomes several AI outputs).',
        '(i) Multiplier: one structured specification written by the developers is expanded by AI into several tailored outputs (for example an internal argument, a prospect pitch and an FAQ), and updating the source keeps them all consistent. The human keeps the source writing and the final commercial validation.',
        '(ii) Analyzer: AI is good at clustering and summarizing large volumes of tickets, but a human must interpret the patterns in the light of business priorities and customer relationships and make the final prioritization decision.',
      ],
      marking: [
        'Names the four patterns with correct definitions (3)',
        'Multiplier chosen and justified (2)',
        'Analyzer chosen and justified (2)',
        'States what the human keeps in each case (1)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'You have run a successful one-month pilot of AI assistants with a small team and management wants a company-wide rollout in three months. Describe a deployment plan using the three-circle approach, name two resistance profiles with a tailored response for each, and give a metric set that goes beyond time saved.',
      answer: [
        'Three circles: Circle 1 (about 15%), recruit voluntary champions, train them intensively and give them time and a small budget to produce one visible success. Circle 2 (about 60%), spread through social proof: demos in team meetings, an informal weekly session, on-demand training and internal success stories. Circle 3 (about 25%), generalize with short role-specific training, mentors from the champions, a grace period with no effect on evaluations and an internal helpline. Include weekly actions, contingency plans and success indicators.',
        'Profiles: threatened experts are given the role of validators of AI outputs with the message that AI amplifies their expertise; the chronically overwhelmed get micro-learning on their own tasks showing time saved; rational skeptics receive pilot data and a no-commitment trial; the technology-anxious get a beginner group and one-to-one mentoring.',
        'Metrics: quantitative (time per task, volume handled, number of personalization elements), qualitative (customer satisfaction, team confidence) and one business metric (for example conversion rate or resolution rate). This reflects expanded ROI: time saved, quality and well-being.',
      ],
      marking: [
        'Three circles with sensible proportions and timing (3)',
        'Two resistance profiles with tailored responses (2)',
        'Contingency or success indicators mentioned (1)',
        'Metrics include quantitative, qualitative and business (2)',
      ],
    },
  ],

  videos: [],
};
