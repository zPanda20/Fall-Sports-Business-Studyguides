// Business Strategy, Session 3 (first part): the wider environment, PESTEL.
// Built from the Session 3 lecture slides. All explanations are written fresh.
// Real-example facts: Formula 1's 2026 rule changes, as published by formula1.com (see sources slide).

export const pestelTopic = {
  id: 'pestel',
  course: 'strategy',
  title: 'The wider environment: PESTEL',
  sessions: 'Session 3',
  reading: 'Session 3 slides and the Shein case on Boostcamp',
  minutes: 20,
  summary:
    'A six-part checklist for scanning the world outside the firm: politics, economy, society, technology, nature and law.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Strategy starts outside the firm',
      blocks: [
        { type: 'big', text: 'Before choosing a strategy, look at the **world the firm operates in**.' },
        {
          type: 'columns',
          items: [
            {
              title: 'General environment',
              text: 'Strategic leaders have **little control**. Examples: interest rates, exchange rates.',
            },
            {
              title: 'Task environment',
              text: 'Leaders have **some influence**. It includes the structure of the industry and which strategic group a firm sits in.',
            },
          ],
        },
        {
          type: 'p',
          text: 'PESTEL covers the general environment. Five Forces and strategic groups cover the task environment.',
        },
      ],
    },
    {
      kicker: 'The framework',
      title: 'Six segments',
      blocks: [
        {
          type: 'p',
          text: '**PESTEL** is a tool to scan, monitor and evaluate the firm’s external environment. It groups outside factors into six segments.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Political', text: 'Pressure from governments, NGOs and social movements.' },
            { title: 'Economic', text: 'Economy-wide forces such as growth, jobs, interest rates, prices and exchange rates.' },
            { title: 'Sociocultural', text: 'Society’s norms, values and demographics.' },
            { title: 'Technological', text: 'New processes and products created by innovation.' },
            { title: 'Ecological', text: 'The natural environment, climate and sustainable growth.' },
            { title: 'Legal', text: 'Laws, mandates, regulations and court decisions.' },
          ],
        },
      ],
    },
    {
      kicker: 'Two close cousins',
      title: 'Political and legal',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Political',
              text: 'The **pressure** that governments, NGOs and social movements put on firms. Firms respond by **lobbying**, public relations, contributions and litigation. Pressure often ends in new laws.',
            },
            {
              title: 'Legal',
              text: 'The **official outcomes** of that political process: laws, mandates, regulations, court decisions. Many industries have been **deregulated**, including airlines, telecom, energy and trucking.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'How to tell them apart',
          text: 'Political is the push. Legal is the rule that results from it.',
        },
      ],
    },
    {
      kicker: 'Economy and society',
      title: 'Economic and sociocultural',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Economic',
              text: 'Mostly macro-level: **growth rates, employment, interest rates, price stability** (inflation or deflation) and **exchange rates**.',
            },
            {
              title: 'Sociocultural',
              text: 'Cultures, norms and values that are **always changing** and differ across groups. Leaders must watch **demographic trends**: age, gender, family size, ethnicity, sexual orientation, religion and socioeconomic class.',
            },
          ],
        },
      ],
    },
    {
      kicker: 'Technology and nature',
      title: 'Technological and ecological',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Technological',
              text: 'Innovation in **processes** (lean manufacturing, genetic engineering, AI, blockchain) and in **products** (drones, wearables, electric cars).',
            },
            {
              title: 'Ecological',
              text: 'Broad environmental issues: the natural environment, climate change and sustainable growth. The relationship can be **adversarial** or can create **business opportunities**.',
            },
          ],
        },
      ],
    },
    {
      kicker: 'Putting it to work',
      title: 'From a list to a judgment',
      blocks: [
        {
          type: 'steps',
          items: [
            '**List** the important trends in each of the six segments.',
            '**Judge** whether each is an opportunity or a threat for this firm, and how big.',
            '**Pick** the few that matter most and decide what to do about them.',
          ],
        },
        {
          type: 'callout',
          title: 'Where it leads',
          text: 'In class, PESTEL and Five Forces are used to find the **opportunities and threats** in a SWOT analysis.',
        },
      ],
    },
    {
      kicker: 'Watch out',
      title: 'Common traps',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Writing a long list of facts without saying what they **mean for this firm**.',
            'Filing the same factor under two segments. Choose the best fit and say why.',
            'Mixing up **political** pressure with **legal** rules.',
            'Treating the general environment as something the firm can easily change.',
            'Forgetting the same trend can be an **opportunity** for one firm and a **threat** for another.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'General environment', def: 'External factors, such as interest and exchange rates, over which strategic leaders have little control.' },
    { term: 'Task environment', def: 'Parts of the environment, like industry structure and strategic groups, that leaders can influence somewhat.' },
    { term: 'PESTEL', def: 'A framework that groups external factors into Political, Economic, Sociocultural, Technological, Ecological and Legal segments.' },
    { term: 'Political factors', def: 'Pressure that governments, NGOs and social movements exert on firms.' },
    { term: 'Lobbying', def: 'Trying to influence lawmakers. One of the ways firms respond to political pressure.' },
    { term: 'Economic factors', def: 'Macroeconomic conditions: growth, employment, interest rates, price stability and exchange rates.' },
    { term: 'Sociocultural factors', def: 'Society’s changing cultures, norms, values and demographics.' },
    { term: 'Technological factors', def: 'New processes and products that come from innovation.' },
    { term: 'Ecological factors', def: 'Environmental issues such as the natural environment, climate change and sustainable growth.' },
    { term: 'Legal factors', def: 'Laws, mandates, regulations and court decisions that result from political processes.' },
    { term: 'Deregulation', def: 'Removing or loosening regulation of an industry. Airlines, telecom, energy and trucking are examples.' },
  ],
  cards: [
    { front: 'What do the letters in PESTEL stand for?', back: 'Political, Economic, Sociocultural, Technological, Ecological, Legal.' },
    { front: 'General vs task environment', back: 'General: little control (interest rates). Task: some influence (industry structure, strategic groups).' },
    { front: 'Political vs legal', back: 'Political is the pressure from governments, NGOs and movements. Legal is the resulting laws, regulations and court decisions.' },
    { front: 'How do firms respond to political pressure?', back: 'Lobbying, public relations, contributions and litigation.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Formula 1 in 2026: a new set of rules, six ways to read it',
    note: 'The sport’s new rules for 2026, as published by Formula 1 itself.',
    slides: [
      {
        kicker: 'Real example',
        title: 'What changed for 2026',
        blocks: [
          {
            type: 'p',
            text: 'For 2026, Formula 1 rewrote its rules for cars, engines and costs. These are published, checkable numbers.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Team cost cap', value: '$215M', note: 'up from $135M' },
              { label: 'Power unit cost cap', value: '$130M', note: 'up from $95M' },
              { label: 'Minimum car weight', value: '768 kg', note: 'down from 800 kg' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'Engines move to a roughly **50–50 split** between combustion and electrical power.',
              'The grid grows to **22 cars**, with Cadillac as the 11th team.',
            ],
          },
        ],
      },
      {
        kicker: 'PESTEL',
        title: 'Reading the changes through the six segments',
        blocks: [
          {
            type: 'table',
            head: ['Segment', 'What it looks like in F1 2026'],
            rows: [
              ['Legal', 'The rulebook itself: new car size and weight, new engine rules and a revised cost cap. These are regulations that every team must follow.'],
              ['Economic', 'The cost cap rises from $135M to $215M, and the power unit cap from $95M to $130M. They change what teams can spend.'],
              ['Technological', 'Engines lose one component and put out about 350kW of electrical power, up from 120kW. Cars use active aerodynamics in place of the old drag-reduction system.'],
              ['Ecological', 'Teams switch to an Advanced Sustainable Fuel, made from advanced sustainable feedstock instead of fossil sources. It must work as a drop-in fuel.'],
              ['Political / Sociocultural', 'Not covered by this source. A good exercise: what would you look for here?'],
            ],
          },
        ],
      },
      {
        kicker: 'So what?',
        title: 'The same rules, different effects',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'An opportunity for…',
                text: 'A manufacturer that already has strong electric and sustainable-fuel capabilities, or a new entrant that sees a reset in the rules.',
              },
              {
                title: 'A threat for…',
                text: 'A team whose edge came from old engine know-how, or a team that must rebuild its whole car at once.',
              },
            ],
          },
          {
            type: 'callout',
            title: 'The lesson',
            text: 'The facts are the same for everyone. Whether they are an opportunity or a threat depends on the firm. That judgment is the point of PESTEL.',
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
                title: 'From smaller cars to a bigger budget cap: 12 rule changes you need to know in 2026 (formula1.com)',
                url: 'https://www.formula1.com/en/latest/article/from-smaller-cars-to-a-bigger-budget-cap-12-rule-changes-you-need-to-know-in.56uUTFhB0z5j3iZfhC0rGP',
                note: 'The cost cap and power unit cap figures, weight and size changes, the power split, the sustainable fuel, active aerodynamics and the 22-car grid. The PESTEL labels are ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'A PESTEL scan for Kestrel Racing',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'The scan',
        title: 'Six factors for the Series',
        blocks: [
          {
            type: 'p',
            text: 'Kestrel’s leaders scan the world around the Continental Open-Wheel Series. These are made-up trends, one per segment.',
          },
          {
            type: 'table',
            head: ['Segment', 'Trend', 'For Kestrel'],
            rows: [
              ['Political', 'A host country threatens to tax foreign-owned racing events', 'Threat'],
              ['Economic', 'Inflation is raising freight and travel costs for the race calendar', 'Threat'],
              ['Sociocultural', 'Younger fans watch clips and highlights rather than whole races', 'Opportunity (digital content)'],
              ['Technological', 'Cheaper sensors and data tools make real-time fan content possible', 'Opportunity'],
              ['Ecological', 'Sponsors want lower-carbon logistics', 'Threat now, opportunity if Kestrel leads'],
              ['Legal', 'The Series announces new engine rules from next season', 'Mixed'],
            ],
          },
        ],
      },
      {
        kicker: 'General or task?',
        title: 'What can Kestrel influence?',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'General environment: little control',
                text: 'Inflation and freight costs. Kestrel can only react, for example by negotiating freight contracts early.',
              },
              {
                title: 'Task environment: some influence',
                text: 'The Series rules, through the teams’ association, and which strategic group Kestrel belongs to.',
              },
            ],
          },
        ],
      },
      {
        kicker: 'Responding',
        title: 'Turning the scan into action',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Political:** work with other teams to lobby the host country about the proposed tax.',
              '**Sociocultural and technological:** build a short-clip content studio. This is the biggest opportunity.',
              '**Ecological:** audit freight and publish a plan to cut carbon, to reassure sponsors.',
            ],
          },
          {
            type: 'p',
            text: 'Not every factor deserves action. The scan is used to **pick the few that matter**.',
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
      q: 'A rise in interest rates would be classed in PESTEL as…',
      options: ['Economic', 'Political', 'Legal', 'Sociocultural'],
      answer: 0,
      explanation: 'Interest rates are a macroeconomic factor. They also belong to the general environment, which leaders cannot control.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The Series announces new engine rules that every team must follow. Which PESTEL segment is this?',
      options: ['Legal', 'Technological only', 'Economic', 'Sociocultural'],
      answer: 0,
      explanation: 'Rules and regulations are legal factors. They are the official outcome of a political process.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Kestrel joins other teams to persuade a host country to drop a planned tax. This is a response to which factor, and what is the activity called?',
      options: [
        'Political pressure; lobbying',
        'Economic pressure; benchmarking',
        'Legal rules; litigation only',
        'Technological change; innovation',
      ],
      answer: 0,
      explanation: 'The pressure comes from government. Trying to influence it is lobbying, one of the standard responses to political factors.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which of these is part of the task environment rather than the general environment?',
      options: [
        'The structure of the industry',
        'Exchange rates',
        'Climate change',
        'Inflation',
      ],
      answer: 0,
      explanation: 'Industry structure and strategic groups can be influenced by firms. Exchange rates, climate change and inflation are largely beyond their control.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which statement about using PESTEL is correct?',
      options: [
        'The same trend can be an opportunity for one firm and a threat for another',
        'A trend is either good or bad for every firm',
        'PESTEL analyzes the industry’s profit potential',
        'PESTEL only covers factors a firm controls',
      ],
      answer: 0,
      explanation: 'Whether a trend helps or hurts depends on the firm’s own resources. Industry profit potential is the job of Five Forces.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. Place each trend into a PESTEL segment: (a) a shift to electric vehicles by road-car makers, (b) a government grant for green fuels, (c) a rise in the cost of living for fans, (d) a new data-protection law. Then say which one you would put first for Kestrel.',
      answer: [
        '**(a)** Technological, since it is a product innovation. It could also be ecological if the motive is climate change.',
        '**(b)** Political (government support). If you read it as a formal rule, legal.',
        '**(c)** Economic. It is a macro factor: prices and household incomes.',
        '**(d)** Legal. It is a regulation resulting from a political process.',
        '**Priority.** Any is defensible if you explain it. A strong answer picks the one with the biggest effect on Kestrel and says why, such as (c) if fan spending on tickets and merchandise drives its revenue.',
      ],
      review: { section: 'plain', slide: 1 },
    },
  ],

  videos: [],
};
