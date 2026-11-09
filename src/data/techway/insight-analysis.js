// Techway, Chapter 7: AI-assisted information analysis and synthesis (the INSIGHT framework).
// Built from Chapter 7 of the Techway lesson document: Investigate, Neaten, Structure, Interpret, Generate,
// Hierarchize, Transmit; competitive intelligence; customer analysis (jobs to be done); bias audit; the five layers
// of organizational intelligence; mastery indicators.
// Real example: Deloitte Australia partly refunding a government report with AI-generated errors (Fortune, 7 October 2025).

export const insightAnalysisTopic = {
  id: 'insight-analysis',
  course: 'techway',
  title: 'AI-assisted analysis: the INSIGHT framework',
  sessions: 'Chapter 7',
  reading: 'Techway lesson, Chapter 7',
  minutes: 45,
  summary:
    'Turn information overload into a decision. Seven steps (Investigate, Neaten, Structure, Interpret, Generate, Hierarchize, Transmit), with prompt templates for sources, angles, bias checks, frameworks, implications, insights, prioritization, narrative, competitors and customers.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The problem',
      title: 'Too much information, too little clarity',
      blocks: [
        {
          type: 'big',
          text: 'The challenge is no longer finding information. It is **processing it into a decision**.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Traditional approach', text: 'Passive collection, manual step-by-step reading, a synthesis that is subjective and often partial.' },
            { title: 'AI-assisted approach', text: 'Targeted search, many sources processed in parallel, help structuring and summarizing, so decisions rest on a broader, better-organized base.' },
          ],
        },
        {
          type: 'callout',
          title: 'The chapter thread: your decision',
          text: 'The lesson asks you to pick ONE real decision (for example “Should we launch a new AI consulting service for SME clients?”) and apply every technique to it. A concrete decision keeps the analysis focused.',
        },
        {
          type: 'flow',
          items: [
            { title: 'I Investigate', text: 'Find and weigh sources.' },
            { title: 'N Neaten', text: 'Clean: spot bias.' },
            { title: 'S Structure', text: 'Organize with a framework.' },
            { title: 'I Interpret', text: 'Find the implications.' },
            { title: 'G Generate', text: 'Create new insights.' },
            { title: 'H Hierarchize', text: 'Prioritize.' },
            { title: 'T Transmit', text: 'Communicate to persuade.' },
          ],
        },
      ],
    },
    {
      kicker: 'I: Investigate',
      title: 'Gather smartly: sources and angles',
      blocks: [
        {
          type: 'p',
          text: 'Use an AI with internet access (such as ChatGPT with browsing, Perplexity or Gemini) so sources are current. Two prompt techniques:',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Technique 1: Source mapping',
              text: 'Role: research assistant. Give the decision, the precise subject and the depth wanted. Ask for types of sources with a description, concrete examples, and the pros and cons of each (reliability, timeliness, bias), then a strategy for which to read first. Categories: market reports, academic papers, specialist press, annual reports, forums, public data, patents.',
            },
            {
              title: 'Technique 2: Multi-angle investigation',
              text: 'Role: strategic analyst. Examine the topic from three angles: **time** (past trends, now, next 1-2 years), **stakeholders** (interests, fears, influence of clients, competitors, regulators…) and **comparison** (other industries or regions: best practices and mistakes to avoid).',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Do not stop at the AI’s list',
          text: 'The learner reads the answer, judges relevance, and picks 3 to 5 sources to read. AI-suggested source names must be checked. It can invent plausible-sounding ones.',
        },
      ],
    },
    {
      kicker: 'N: Neaten',
      title: 'Clean the information: hunt for bias',
      blocks: [
        {
          type: 'p',
          text: '**Technique 3: the AI as critical assistant.** Role: critical analyst. Paste the text and ask the AI to examine the source and then the content, and to rate reliability.',
        },
        {
          type: 'table',
          head: ['Bias to look for', 'Question to ask', 'Sign'],
          rows: [
            ['Author or source bias', 'Who wrote it and what do they gain?', 'A vendor praising its own product.'],
            ['Temporal bias', 'Is it outdated?', 'Old figures presented as current.'],
            ['Framing bias', 'Is the language neutral or emotional?', '“Unavoidable revolution”, “matter of survival”.'],
            ['Selection or omission bias', 'What is left out?', 'No costs, failures or alternatives.'],
            ['Hasty generalization', 'Are anecdotes treated as universal?', '“Every SME must…”'],
            ['Confirmation bias', 'Does it just confirm a popular belief?', 'Plays on fear of missing out.'],
          ],
        },
        {
          type: 'callout',
          title: 'The lesson’s example',
          text: 'A blog by the CEO of an AI-solutions startup claims “300% ROI in 6 months” and “those who don’t invest now will disappear”. The AI rated its reliability **low** (a sales pitch) and suggested checking independent market analyses, verifiable testimonials and critical views.',
        },
        {
          type: 'p',
          text: 'The AI can also introduce bias. Always add your own judgment and cross-check.',
        },
      ],
    },
    {
      kicker: 'S and I',
      title: 'Structure and interpret',
      blocks: [
        {
          type: 'p',
          text: '**Technique 4: apply an analytical framework.** Ask which classic framework fits your goal (SWOT, PESTEL, Porter’s Five Forces, BCG matrix, Business Model Canvas, Jobs to Be Done…), why, then have the AI organize your information in it and list first insights and open questions.',
        },
        {
          type: 'p',
          text: '**Technique 5: multi-level interpretation.** Ask what the structured information means at three levels:',
        },
        {
          type: 'table',
          head: ['Level', 'Horizon', 'Question'],
          rows: [
            ['Operational', 'Next 1-3 months', 'What should we do now (for example, run a pilot)?'],
            ['Tactical', '6-12 months', 'How should we adapt offers, teams or partnerships?'],
            ['Strategic', '1 year and beyond', 'What does this mean for our direction and long-term advantage?'],
          ],
        },
        {
          type: 'callout',
          title: 'Human judgment',
          text: 'The learner checks that the framework suits the decision and that the categories are correct. An elegant SWOT filled with wrong facts is still wrong.',
        },
      ],
    },
    {
      kicker: 'G and H',
      title: 'Generate insights, then prioritize',
      blocks: [
        {
          type: 'p',
          text: '**Technique 6: cross-referencing.** Give the AI two or more sets of information (for example client feedback and your internal strengths). Summarize each, then cross them and write 1-2 **new, actionable insights**: something that was not obvious from either set alone.',
        },
        {
          type: 'callout',
          title: 'Lesson example',
          text: 'Client feedback: “no time to train, we want turnkey solutions”. Internal strength: strong in algorithms. Cross-reference insight: position as an “intelligent integrator” who selects and fits existing AI tools for SMEs rather than building custom ones.',
        },
        {
          type: 'p',
          text: '**Technique 7: prioritization matrix.** Score each insight from 1 to 5 on four criteria, average, rank, and propose a first action for the top ones.',
        },
        {
          type: 'kpis',
          items: [
            { label: 'Potential impact', value: '1-5', note: 'How much could it change the decision?' },
            { label: 'Urgency', value: '1-5', note: 'Must we act quickly?' },
            { label: 'Feasibility', value: '1-5', note: 'Do we have the time, budget, skills?' },
            { label: 'Confidence', value: '1-5', note: 'How sure are we it is valid?' },
          ],
        },
        {
          type: 'p',
          text: 'In the lesson’s example the three insights averaged 4.5, 4.25 and 3.75, so the most urgent one (rising competition) ranked first. Scores are the AI’s justified guesses: adjust them with your knowledge.',
        },
      ],
    },
    {
      kicker: 'T: Transmit',
      title: 'Tell the story so people act',
      blocks: [
        {
          type: 'p',
          text: '**Technique 8: narrative architecture.** Insights only matter if people act. Ask the AI to build a multi-act argument, such as **Situation, Complication, Resolution**, for a specific audience (for example, a management committee), highlighting the key insights and ending with a clear call to action.',
        },
        {
          type: 'steps',
          items: [
            '**Situation:** what everyone agrees on today.',
            '**Complication:** what has changed or what the risk is.',
            '**Resolution:** what you recommend, with the evidence.',
            '**Call to action:** the decision you need and by when.',
          ],
        },
        {
          type: 'callout',
          title: 'Check',
          text: 'Does the narrative highlight your key insights, fit the audience, and avoid claims the data does not support?',
        },
      ],
    },
    {
      kicker: 'Applications',
      title: 'Competitors and customers',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Competitive intelligence',
              text: 'Give the AI observed signals (a partnership, a white paper, job ads) over a period. Ask it to read them as **strategic signals** (direction), **operational signals** (what they are building) and **anticipation** (likely next moves). Example: hiring CRM-integration specialists suggests a bundled CRM and AI offer.',
            },
            {
              title: 'Customer analysis',
              text: 'Give anonymized customer comments and ask for **Jobs to Be Done** (the real job the customer hires the product for), motivations and frustrations, and actionable insights. Example: a project manager who “wastes time redoing reports in PowerPoint” has a reporting job the tool does not fully serve.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Mind the data',
          text: 'Customer comments can contain personal data. Anonymize excerpts before pasting them into an AI tool (see the GDPR chapter).',
        },
      ],
    },
    {
      kicker: 'Mastery',
      title: 'Pitfalls and the organization’s “brain”',
      blocks: [
        {
          type: 'p',
          text: '**Technique 9: bias audit on yourself.** Experts have blind spots: **expertise bias** (overweighting your own field), **consistency bias** (forcing a neat story out of messy data) and **confirmation bias** (collecting sources that agree with you). The worst case is when they combine. Being aware of a bias is not enough to neutralize it, so build checks into the process: ask for contrary evidence, and have someone else review.',
        },
        {
          type: 'p',
          text: '**Technique 10: organizational intelligence architecture.** At company level, build five layers that turn raw signals into learning:',
        },
        {
          type: 'table',
          head: ['Layer', 'Role', 'Example'],
          rows: [
            ['Sensors', 'Capture information', 'Alerts, CRM, social media feeds.'],
            ['Processing', 'Analyze it', 'AI reads customer e-mails: “85% frustrated by delivery delay”.'],
            ['Insights', 'Find patterns and predict', '“Delay leads to 30% churn within two weeks.”'],
            ['Dissemination', 'Send the right view to the right person', 'CEO sees impact; logistics sees urgent actions.'],
            ['Learning', 'Remember what worked', 'Alert, action, churn avoided: keep it as a template.'],
          ],
        },
        {
          type: 'callout',
          title: 'Illustrative figures',
          text: 'The percentages in the lesson’s example are illustrations, not research results.',
        },
        {
          type: 'bullets',
          items: [
            '**Indicators of mastery:** analytical depth (finding non-obvious insights, spotting bias), decision impact (how many recommendations are implemented, KPI changes), and influence (others adopt your methods).',
            '**Key takeaway:** INSIGHT gives a full method, but vigilance about bias and human oversight stay essential.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ key terms
  terms: [
    { term: 'INSIGHT framework', def: 'Investigate, Neaten, Structure, Interpret, Generate, Hierarchize, Transmit: the chapter’s seven-step analysis method.' },
    { term: 'Information overload', def: 'Having so much information that decisions get harder, not easier.' },
    { term: 'Source mapping', def: 'Asking the AI which types of sources exist for a topic, with pros, cons and a reading order.' },
    { term: 'Multi-angle investigation', def: 'Examining a topic across time, stakeholders and comparisons.' },
    { term: 'Source bias', def: 'Distortion because the author or organization has an interest in the conclusion.' },
    { term: 'Framing bias', def: 'Distortion through emotionally charged or slanted wording.' },
    { term: 'Confirmation bias', def: 'Favoring information that confirms what you already believe.' },
    { term: 'Analytical framework', def: 'A standard structure such as SWOT, PESTEL or Porter’s Five Forces for organizing information.' },
    { term: 'Operational / tactical / strategic', def: 'Implications for the short term (1-3 months), medium term (6-12 months) and long term.' },
    { term: 'Insight', def: 'A new, non-obvious and actionable understanding that appears when information is combined.' },
    { term: 'Prioritization matrix', def: 'Scoring insights on impact, urgency, feasibility and confidence to rank them.' },
    { term: 'Narrative architecture', def: 'A story structure, such as Situation-Complication-Resolution, that carries insights to a decision.' },
    { term: 'Jobs to Be Done (JTBD)', def: 'The real task a customer is trying to get done when they use a product.' },
    { term: 'Competitive intelligence', def: 'Reading a rival’s public signals to understand and anticipate its strategy.' },
    { term: 'Organizational intelligence architecture', def: 'Five connected layers (sensors, processing, insights, dissemination, learning) that turn signals into collective learning.' },
  ],
  cards: [
    { front: 'What does INSIGHT stand for?', back: 'Investigate, Neaten, Structure, Interpret, Generate, Hierarchize, Transmit.' },
    { front: 'Three angles of multi-angle investigation', back: 'Temporal, stakeholder, comparative (benchmark).' },
    { front: 'Why check AI-suggested sources?', back: 'They may be outdated, biased, or even invented.' },
    { front: 'Name four biases from Technique 3', back: 'Source, temporal, framing, selection/omission, hasty generalization, confirmation.' },
    { front: 'Three levels of interpretation', back: 'Operational (1-3 months), tactical (6-12 months), strategic (1 year+).' },
    { front: 'What makes a good insight?', back: 'New, non-obvious, and actionable, produced by crossing information sets.' },
    { front: 'Four prioritization criteria', back: 'Potential impact, urgency, feasibility, confidence.' },
    { front: 'A narrative structure for decision-makers', back: 'Situation, Complication, Resolution, then a call to action.' },
    { front: 'Competitive intelligence dimensions', back: 'Strategic signals, operational signals, anticipation.' },
    { front: 'What is a Job to Be Done?', back: 'The real outcome a customer is trying to achieve, beyond product features.' },
    { front: 'Is awareness of a bias enough?', back: 'No. Build checks such as contrary evidence and independent review.' },
    { front: 'Five layers of organizational intelligence', back: 'Sensors, processing, insights, dissemination, learning.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A real case: Deloitte Australia and the AI-flawed report',
    note: 'Reported by Fortune on 7 October 2025 and by other outlets. The facts below are from those reports.',
    slides: [
      {
        kicker: 'What happened',
        title: 'A government report with fake references',
        blocks: [
          {
            type: 'p',
            text: 'Deloitte’s Australian arm produced an assurance review of a welfare compliance program for Australia’s Department of Employment and Workplace Relations, published in July 2025. A university researcher noticed citations that did not exist, and the Australian Financial Review reported the problem in late August.',
          },
          {
            type: 'bullets',
            items: [
              'References to **academic papers that do not exist**.',
              'A **fabricated quote** attributed to a federal court judgment.',
              'A book wrongly credited to a real professor.',
              'A revised version removed the false references and added a disclosure that a generative AI system had been used. In early October, Deloitte agreed to repay part of its fee (reports give the contract as roughly A$440,000, about US$290,000).',
            ],
          },
        ],
      },
      {
        kicker: 'Lesson',
        title: 'Which INSIGHT steps failed?',
        blocks: [
          {
            type: 'table',
            head: ['Step', 'What should have happened'],
            rows: [
              ['Investigate', 'Check every source the AI names: it must exist and say what is claimed.'],
              ['Neaten', 'Treat AI text as a draft with possible errors. Run a bias and accuracy check.'],
              ['Transmit', 'Be open about AI use and verify before sending to a client.'],
            ],
          },
          {
            type: 'callout',
            title: 'Takeaway',
            text: 'An expert team still published AI-made fake citations. The chapter’s message fits: use AI for speed, keep human verification for truth.',
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
                title: 'Deloitte to partially refund the Australian government over a report with AI-generated errors',
                url: 'https://fortune.com/2025/10/07/deloitte-ai-australia-government-report-hallucinations-technology-290000-refund/',
                note: 'Fortune, 7 October 2025. The report, the fabricated references and the partial refund. Contract value is reported differently by outlets.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example
  sports: {
    title: 'Beacon Athletic: should we launch a family season ticket?',
    universe: 'beacon',
    slides: [
      {
        kicker: 'Decision',
        title: 'The thread decision, with INSIGHT',
        blocks: [
          {
            type: 'p',
            text: 'Dana, Beacon’s ticketing manager, must decide whether to launch a new **family season ticket** next season. She applies INSIGHT with an AI that has internet access.',
          },
          {
            type: 'table',
            head: ['Step', 'What Dana does'],
            rows: [
              ['Investigate', 'Source mapping: league attendance reports, supporter surveys, sports-business press, rival clubs’ family offers. Multi-angle: past trends, stakeholders (parents, children, sponsors, the stadium safety team), benchmarks from other clubs and from theme parks.'],
              ['Neaten', 'A blog by a ticketing-software vendor claims family packs “raise revenue 40%”. The AI flags vendor interest and missing method: low reliability.'],
              ['Structure', 'SWOT: strengths (family zone, local ties), weaknesses (limited seats), opportunities (new fans), threats (rival discounts).'],
            ],
          },
        ],
      },
      {
        kicker: 'Insight and priority',
        title: 'Crossing the data and ranking the actions',
        blocks: [
          {
            type: 'p',
            text: 'Survey comments say families “come to only a few games and don’t want to commit to a full season”. Beacon’s data shows many empty seats at midweek matches. **Cross-reference insight:** a flexible family pack (6 chosen games) fills quiet fixtures without discounting the big ones.',
          },
          {
            type: 'table',
            head: ['Insight', 'Impact', 'Urgency', 'Feasibility', 'Confidence', 'Average'],
            rows: [
              ['A: Flexible 6-game family pack', '5', '4', '4', '4', '4.25'],
              ['B: Add a kids’ activity zone', '4', '2', '3', '3', '3.0'],
              ['C: Match a rival’s discount', '3', '4', '5', '2', '3.5'],
            ],
          },
          {
            type: 'p',
            text: 'The scores are made up for this fictional club. Insight A ranks first, with a pilot on three midweek matches as the first action.',
          },
        ],
      },
      {
        kicker: 'Transmit',
        title: 'Presenting to the board',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Situation:** midweek matches have many empty seats; families like the club.',
              '**Complication:** full-season packages do not fit families’ habits, and a rival has launched a discount.',
              '**Resolution:** a flexible 6-game pack, piloted on three midweek games.',
              '**Call to action:** approve a three-match pilot and review results in six weeks.',
            ],
          },
          {
            type: 'callout',
            title: 'Dana’s checks',
            text: 'Every number is checked against Beacon’s own ticketing data. Survey comments are anonymized before pasting, and the AI’s sources are confirmed to exist.',
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
      q: 'What is the main idea behind the INSIGHT framework?',
      options: [
        'Collect as much information as possible.',
        'Move step by step from raw information to a clear, communicated decision, using AI at each stage with human oversight.',
        'Let the AI make the decision.',
        'Avoid frameworks like SWOT.',
      ],
      answer: 1,
      explanation: 'INSIGHT is a seven-step method from investigating to transmitting insights, with humans checking each step.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'In INSIGHT, what does the “N” stand for and what is it about?',
      options: [
        'Notify: telling stakeholders',
        'Neaten (clean): identifying and reducing bias in information',
        'Narrate: writing a story',
        'Normalize: scaling numbers',
      ],
      answer: 1,
      explanation: 'Neaten (also called Clean) deals with bias detection and validating sources.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which three angles does the multi-angle investigation technique use?',
      options: [
        'Cost, price, value',
        'Temporal, stakeholder and comparative',
        'Legal, ethical, technical',
        'Short, medium, long',
      ],
      answer: 1,
      explanation: 'Past/present/future, the stakeholders and their interests, and comparisons with other contexts.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A blog by a software vendor says “our tool guarantees 300% ROI in 6 months; ignore it and you will disappear.” Which biases are most visible?',
      options: [
        'Source (interest) bias and emotional framing',
        'Only temporal bias',
        'No bias: it is data',
        'Only confirmation bias in the reader',
      ],
      answer: 0,
      explanation: 'The author sells the product (interest) and uses fear-based wording. The ROI claim has no method.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'You have organized your information in a SWOT. Which technique comes next in the chapter to draw out meaning?',
      options: [
        'Multi-level interpretation: operational, tactical and strategic implications',
        'Deleting the SWOT',
        'Asking for a new source map',
        'Writing a press release',
      ],
      answer: 0,
      explanation: 'Interpret turns structured information into implications over three time horizons.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'What makes something an “insight” according to the chapter?',
      options: [
        'Any summary of a document',
        'A new, non-obvious and actionable understanding that emerges from combining information',
        'A statistic',
        'A long list of facts',
      ],
      answer: 1,
      explanation: 'Insights appear from cross-referencing sets of information and are useful only if they can lead to action.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Which are the four criteria in the insight prioritization matrix?',
      options: [
        'Cost, time, quality, scope',
        'Potential impact, urgency, feasibility, confidence',
        'Strengths, weaknesses, opportunities, threats',
        'Who, what, when, where',
      ],
      answer: 1,
      explanation: 'Each insight is scored 1 to 5 on these four criteria and the scores are averaged for ranking.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which structure does the chapter suggest for presenting insights to decision-makers?',
      options: [
        'A random list of bullets',
        'Situation, Complication, Resolution (a multi-act narrative) with a clear call to action',
        'A single chart without text',
        'Only raw data tables',
      ],
      answer: 1,
      explanation: 'A narrative arc keeps the argument logical and ends with the decision you want.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'In customer analysis, what is a “Job to Be Done”?',
      options: [
        'A staff task list',
        'The real outcome a customer is trying to achieve when using a product',
        'A product feature',
        'A competitor’s job ad',
      ],
      answer: 1,
      explanation: 'JTBD looks beyond features to the underlying goal, such as getting a client report done quickly.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'According to the bias-audit technique, is simply being aware of your cognitive biases enough to neutralize them?',
      options: [
        'Yes, awareness is enough.',
        'No: you need processes such as seeking contrary evidence and independent review.',
        'Yes, but only for experts.',
        'No, biases cannot be reduced at all.',
      ],
      answer: 1,
      explanation: 'The chapter treats awareness as a start. Checks and outside review are needed.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'The Deloitte Australia case is a warning about which INSIGHT step in particular?',
      options: [
        'Hierarchize',
        'Investigate and Neaten: AI-supplied sources must be verified',
        'Transmit only',
        'Structure',
      ],
      answer: 1,
      explanation: 'The report contained references that did not exist. AI outputs and sources must be verified before use.',
      review: { section: 'real', slide: 1 },
    },
  ],

  // ------------------------------------------------------------------ exam-style
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A club must decide whether to open a fan store in a nearby city. Using the INSIGHT framework, describe what you would ask an AI to do at each of the seven steps and where you would apply human judgment.',
      answer: [
        'Investigate: ask a connected AI to map source types (retail and sports-merchandise market reports, local demographics, competitor stores, surveys), with pros and cons, and run a time, stakeholder and benchmark analysis. Human check: confirm that the named sources exist.',
        'Neaten: paste a promotional article or a vendor report and ask for source, framing, selection and confirmation bias and a reliability rating; cross-check independently.',
        'Structure: choose a framework (for example SWOT or PESTEL) and organize findings. Interpret: ask for operational (next 3 months), tactical (6-12 months) and strategic implications.',
        'Generate: cross-reference fan survey data with sales data to find non-obvious insights. Hierarchize: score each insight on impact, urgency, feasibility and confidence and rank them. Transmit: build a Situation-Complication-Resolution story with a call to action for the board.',
        'Human judgment throughout: verify facts and sources, adjust scores, spot biases of my own, and decide.',
      ],
      marking: [
        'All seven steps covered, each with a concrete AI task (7)',
        'Human judgment and verification discussed (2)',
        'Relevant to the case (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Describe the multi-level prioritization approach (Technique 7) and apply it to three invented insights for a club. Show scores and the resulting ranking, and say what the first action would be for the top insight.',
      answer: [
        'Technique 7 scores each insight 1-5 on potential impact, urgency of action, feasibility and confidence, with a short justification, averages the scores, ranks the insights and proposes a concrete first action for the top ones.',
        'Example: Insight A (flexible family pack) 5, 4, 4, 4, average 4.25; Insight B (kids’ zone) 4, 2, 3, 3, average 3.0; Insight C (match rival discount) 3, 4, 5, 2, average 3.5. Ranking: A, C, B.',
        'First action for A: pilot the pack on three midweek matches and review results after six weeks.',
        'The scores are judgments, so a human should adjust them using real data.',
      ],
      marking: [
        'Four criteria named (2)',
        'Method (scoring, average, rank, action) (2)',
        'Consistent invented example with correct averages (3)',
        'Notes human adjustment (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'List four biases that can affect AI-assisted analysis (in sources, in the AI or in yourself) and give a way to reduce each.',
      answer: [
        'Source or interest bias: a vendor promoting its product. Reduce by checking who benefits and finding independent sources.',
        'Framing bias: emotional or exaggerated language. Reduce by asking the AI to restate neutrally and looking for the underlying data.',
        'Confirmation bias: gathering only sources that agree with me. Reduce by asking the AI for contrary evidence and counterarguments.',
        'Expertise or consistency bias: trusting my own field too much or forcing a neat story. Reduce by an independent review and by tolerating ambiguity. Awareness alone is not enough.',
      ],
      marking: [
        'Four biases named (2)',
        'A suitable remedy for each (4)',
      ],
    },
  ],

  videos: [],
};
