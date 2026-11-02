// Business Strategy, Session 1: What is strategy? What is competitive advantage?
// Built from the Session 1 lecture slides. All explanations are written fresh.
// Real-example figures: Oakland Athletics 2002 as reported by Statology (see sources slide).

export const whatIsStrategyTopic = {
  id: 'what-is-strategy',
  course: 'strategy',
  title: 'What is strategy?',
  sessions: 'Session 1',
  reading: 'Session 1 slides and the Tesla case on Boostcamp',
  minutes: 30,
  summary:
    'What a strategy is, how to tell whether a firm has an advantage over its rivals, and why stakeholders belong in the picture.',
  formulas: [
    { name: 'Economic value created', formula: 'Willingness to pay (WTP) − Willingness to sell (WTS)' },
    { name: 'Total return to shareholders', formula: 'Stock price appreciation + Dividends' },
  ],

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Strategy is about beating the competition',
      blocks: [
        {
          type: 'big',
          text: 'A strategy is a set of **goal-directed actions** to gain and keep **better performance than rivals**.',
        },
        {
          type: 'p',
          text: 'The aim is a **competitive advantage**. A good strategy has three parts, and together they are called the **AFI framework**.',
        },
      ],
    },
    {
      kicker: 'The framework',
      title: 'Analysis, Formulation, Implementation',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Analysis.** Work out the competitive challenge: what is happening around the firm and inside it?',
            '**Formulation.** Choose a strategy that answers that challenge.',
            '**Implementation.** Carry out a set of coherent actions to reach the strategic goals.',
          ],
        },
        {
          type: 'p',
          text: 'The framework helps explain why some firms perform better than others, and helps managers design a strategy that can deliver superior performance.',
        },
      ],
    },
    {
      kicker: 'Competitive advantage',
      title: 'It is always relative',
      blocks: [
        {
          type: 'p',
          text: 'A firm has a **competitive advantage** when it performs better than competitors in the same industry, or better than the industry average. Always compare against rivals, never in isolation.',
        },
        {
          type: 'table',
          head: ['Position', 'What it means'],
          rows: [
            ['Competitive advantage', 'More economic value than rivals'],
            ['Competitive parity', 'The same economic value as rivals'],
            ['Competitive disadvantage', 'Less economic value than rivals'],
          ],
        },
        {
          type: 'p',
          text: 'Each of these can be **temporary** or **sustained**. A sustained advantage lasts a long time. The lecture’s example: Apple’s lead in smartphones has lasted for almost two decades.',
        },
      ],
    },
    {
      kicker: 'Measuring it',
      title: 'Three ways to measure advantage',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Accounting performance',
              text: 'Ratios such as return on invested capital, equity, assets and revenue (ROIC, ROE, ROA, ROR), compared with rivals or the industry average.',
            },
            {
              title: 'Shareholder value',
              text: 'The return on investors’ risk capital: **stock price appreciation + dividends**. Risk capital is money paid for shares that cannot be recovered if the firm goes bankrupt.',
            },
            {
              title: 'Economic value',
              text: 'The gap between what buyers are **willing to pay** and what it costs the firm to **sell** (its willingness to sell).',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Each has weaknesses',
          items: [
            '**Accounting data** are historical (“driving by looking in the rear-view mirror”), miss off-balance-sheet items such as pension obligations and operating leases, and under-count intangibles like innovation and customer experience.',
            '**Stock prices** are volatile and move with the economy and investor mood, so they are hard to read for short-term performance.',
          ],
        },
      ],
    },
    {
      kicker: 'Economic value',
      title: 'Willingness to pay and willingness to sell',
      blocks: [
        {
          type: 'big',
          text: 'Value created = what buyers would pay **minus** what it costs you to sell.',
        },
        {
          type: 'bullets',
          items: [
            '**WTP (willingness to pay):** the most a buyer will pay for the product.',
            '**WTS (willingness to sell):** the cost of producing it, the least the firm would accept.',
            'The **price** sits somewhere between the two.',
            'You have a competitive advantage if **your** (WTP − WTS) is larger than your competitor’s.',
            'You can get there by raising WTP (a WTP advantage) or lowering cost (a WTS advantage).',
          ],
        },
      ],
    },
    {
      kicker: 'Two routes',
      title: 'Differentiation or cost leadership',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Differentiation',
              text: 'Offer goods or services buyers **value more** than rivals’ offerings, so they will pay more.',
            },
            {
              title: 'Cost leadership',
              text: 'Offer something **similar** to rivals’ products, but at **lower cost**.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Either way, the goal is to give customers **superior value**.',
        },
      ],
    },
    {
      kicker: 'Beyond shareholders',
      title: 'Stakeholders',
      blocks: [
        {
          type: 'p',
          text: '**Stakeholders** are the groups and individuals that can affect, or are affected by, what a firm does.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Internal', text: 'Stockholders, employees and board members.' },
            { title: 'External', text: 'Customers, suppliers, alliance partners, creditors, unions, communities, media and governments.' },
          ],
        },
        {
          type: 'p',
          text: 'A **stakeholder strategy** manages them together to gain advantage. The payoff: cooperative stakeholders share useful information, trust cuts transaction costs, the firm adapts more easily, returns become steadier, and reputation improves.',
        },
      ],
    },
    {
      kicker: 'A decision tool',
      title: 'Stakeholder impact analysis',
      blocks: [
        {
          type: 'p',
          text: 'To decide which stakeholders to focus on, score each on three attributes.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Power', text: 'Can the stakeholder get the firm to do something it otherwise would not?' },
            { title: 'Legitimacy', text: 'Is their claim seen as legally valid or otherwise appropriate?' },
            { title: 'Urgency', text: 'Does the claim need the firm’s immediate attention?' },
          ],
        },
        {
          type: 'p',
          text: 'A stakeholder with all three needs the most attention.',
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
            'Calling any profitable firm “advantaged”. Advantage means doing **better than rivals**.',
            'Mixing up **temporary** and **sustained** advantage.',
            'Treating one measure, such as stock price, as the whole story.',
            'Forgetting that strategy needs **implementation**, not just an idea.',
            'Ignoring stakeholders who are not shareholders.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Strategy', def: 'A set of goal-directed actions a firm takes to gain and sustain superior performance relative to competitors.' },
    { term: 'AFI framework', def: 'Analysis, Formulation, Implementation: the three parts of the strategic management process.' },
    { term: 'Competitive advantage', def: 'Superior performance relative to competitors in the same industry, or to the industry average.' },
    { term: 'Competitive parity', def: 'Two or more firms performing at the same level.' },
    { term: 'Competitive disadvantage', def: 'Inferior performance relative to competitors or the industry average.' },
    { term: 'Sustained competitive advantage', def: 'The ability to outperform rivals or the industry average over a prolonged period.' },
    { term: 'Risk capital', def: 'Money invested in shares that cannot be recovered if the firm goes bankrupt.' },
    { term: 'Total return to shareholders', def: 'Stock price appreciation plus dividends.' },
    { term: 'Willingness to pay (WTP)', def: 'The most a buyer will pay for a product or service.' },
    { term: 'Willingness to sell (WTS)', def: 'The firm’s cost of producing the product or service.' },
    { term: 'Differentiation', def: 'Offering goods or services that buyers value more than competitors’ offerings.' },
    { term: 'Cost leadership', def: 'Offering similar goods or services to competitors, at lower cost.' },
    { term: 'Stakeholder', def: 'Any organization, group or individual that can affect or is affected by a firm’s actions.' },
    { term: 'Stakeholder strategy', def: 'An integrative approach to managing a diverse set of stakeholders to gain and sustain competitive advantage.' },
    { term: 'Stakeholder impact analysis', def: 'A tool that rates stakeholders on power, legitimacy and urgency to prioritize them.' },
  ],
  cards: [
    { front: 'Define strategy', back: 'A set of goal-directed actions to gain and sustain superior performance relative to competitors.' },
    { front: 'The AFI framework', back: 'Analysis (identify the challenge), Formulation (choose the strategy), Implementation (coherent actions).' },
    { front: 'Economic value created', back: 'WTP − WTS: what buyers would pay minus the firm’s cost.' },
    { front: 'Two ways to build advantage', back: 'Differentiation (higher value) or cost leadership (similar value at lower cost).' },
    { front: 'Three stakeholder attributes', back: 'Power, legitimacy, urgency.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The Oakland A’s: winning on a third of the payroll',
    note: 'Baseball’s “Moneyball” season, 2002. Figures are as reported by the source on the last slide.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Fewer dollars, more wins',
        blocks: [
          {
            type: 'p',
            text: 'In 2002 the Oakland Athletics, a Major League Baseball team, spent far less on players than the New York Yankees, yet won 103 games and reached the playoffs.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Athletics payroll', value: '$41M', note: '2002' },
              { label: 'Yankees payroll', value: '$125M', note: 'the Athletics’ was under a third' },
              { label: 'Athletics wins', value: '103', note: 'and a playoff place' },
            ],
          },
        ],
      },
      {
        kicker: 'The strategy',
        title: 'Buy what the market undervalues',
        blocks: [
          {
            type: 'p',
            text: 'General manager Billy Beane and assistant GM Paul DePodesta worked with a small payroll. They looked for **statistics that were crucial to winning but undervalued by the market**.',
          },
          {
            type: 'bullets',
            items: [
              'On-base percentage came first on their list.',
              'They valued a player’s ability to get on base “by any means necessary” over batting average.',
              'The same budget bought more of what actually produced wins.',
            ],
          },
        ],
      },
      {
        kicker: 'The strategy lens',
        title: 'What it shows about advantage',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Analysis',
                text: 'The Athletics’ challenge: a small payroll against much richer rivals. They analyzed which player skills the market under-priced.',
              },
              {
                title: 'Formulation and implementation',
                text: 'They built a strategy around those skills and ran the team that way.',
              },
              {
                title: 'Performance',
                text: 'Measured against rivals, 103 wins on a $41M payroll was a strong result. Advantage is **relative**.',
              },
            ],
          },
          {
            type: 'callout',
            title: 'A question to think about',
            text: 'Once rivals understand and copy the idea, does the advantage last? Use the lecture’s distinction between temporary and sustained advantage.',
          },
        ],
      },
      {
        kicker: 'Sources',
        title: 'Where these figures come from',
        blocks: [
          {
            type: 'sources',
            items: [
              {
                title: 'The Birth of Moneyball: How Data Changed Baseball Forever (Statology)',
                url: 'https://www.statology.org/the-birth-of-moneyball-how-data-changed-baseball-forever/',
                note: '2002 payrolls (Athletics $41M, Yankees $125M), 103 wins, the focus on undervalued statistics such as on-base percentage, and the roles of Beane and DePodesta.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Kestrel Racing builds an advantage',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'AFI',
        title: 'Kestrel’s strategy in three parts',
        blocks: [
          {
            type: 'p',
            text: 'Kestrel Racing is a mid-budget team in the made-up Continental Open-Wheel Series. Its sponsors want more than a logo on a car.',
          },
          {
            type: 'steps',
            items: [
              '**Analysis.** Rich teams outspend Kestrel on the car, so winning on pure budget is unrealistic. Sponsors increasingly want digital reach.',
              '**Formulation.** Differentiate: become the team with the best digital content and the most engaged online audience.',
              '**Implementation.** Hire a content and data team, put cameras and data in the garage, and build sponsor packages around the audience.',
            ],
          },
        ],
      },
      {
        kicker: 'Economic value',
        title: 'Who creates more value?',
        blocks: [
          {
            type: 'p',
            text: 'A title sponsor compares Kestrel with a rival team, Sparrow.',
          },
          {
            type: 'table',
            head: ['', 'Kestrel', 'Sparrow'],
            rows: [
              ['Sponsor willingness to pay (WTP)', '$20M', '$18M'],
              ['Cost to deliver the package (WTS)', '$14M', '$15M'],
              ['Value created (WTP − WTS)', '$6M', '$3M'],
            ],
          },
          {
            type: 'p',
            text: 'Kestrel’s advantage is **$3M**: $2M comes from a higher WTP (differentiation) and $1M from a lower cost.',
          },
        ],
      },
      {
        kicker: 'Which route?',
        title: 'Differentiation, not cost leadership',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Why differentiation fits',
                text: 'Sponsors will pay more for a unique audience. Kestrel cannot be the cheapest, since engines and tyres come from a few suppliers at set prices.',
              },
              {
                title: 'What could go wrong',
                text: 'If rivals copy the digital approach, the WTP advantage shrinks. The advantage may be temporary rather than sustained.',
              },
            ],
          },
        ],
      },
      {
        kicker: 'Stakeholders',
        title: 'Who matters most to Kestrel?',
        blocks: [
          {
            type: 'table',
            head: ['Stakeholder', 'Power', 'Legitimacy', 'Urgency', 'Priority'],
            rows: [
              ['Title sponsor, threatening to leave', 'High', 'High', 'High', 'Top'],
              ['Engine supplier', 'High', 'High', 'Low', 'High'],
              ['Local council (race-day road closures)', 'Medium', 'High', 'Medium', 'Medium'],
              ['A fan blogger', 'Low', 'Low', 'Low', 'Monitor'],
            ],
          },
          {
            type: 'p',
            text: 'The ratings are illustrative. A stakeholder with power, legitimacy and urgency all high needs attention first.',
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
      q: 'Kestrel earns a 10% return on assets. The series average is 14%. How should this be described?',
      options: [
        'A competitive disadvantage relative to the industry average',
        'A competitive advantage because it is profitable',
        'Competitive parity',
        'A sustained competitive advantage',
      ],
      answer: 0,
      explanation: 'Competitive advantage is relative. A profitable firm that earns less than the industry average has a competitive disadvantage.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which part of the AFI framework is “carrying out a set of coherent actions to achieve strategic goals”?',
      options: ['Implementation', 'Analysis', 'Formulation', 'Benchmarking'],
      answer: 0,
      explanation: 'Analysis identifies the challenge, formulation chooses the strategy, and implementation executes it with coherent actions.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'A sponsor would pay Kestrel $20M. Delivering the package costs Kestrel $14M. How much economic value does Kestrel create?',
      options: ['$6M', '$14M', '$20M', '$34M'],
      answer: 0,
      explanation: 'Economic value = WTP − WTS = $20M − $14M = $6M.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which is a limitation of using accounting ratios such as ROA to judge advantage?',
      options: [
        'They are backward-looking and under-count intangible assets',
        'They cannot be compared with competitors',
        'They ignore profit entirely',
        'They only measure stock price',
      ],
      answer: 0,
      explanation: 'Accounting data describe the past and focus on tangible assets, so they miss things like innovation and customer experience.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A stakeholder has high power, a legitimate claim, and a demand that needs a response now. What does stakeholder impact analysis suggest?',
      options: [
        'Give it the highest priority',
        'Ignore it until the situation settles',
        'Monitor it only',
        'Treat it like any other stakeholder',
      ],
      answer: 0,
      explanation: 'A stakeholder with power, legitimacy and urgency all present demands the firm’s attention first.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. Sparrow’s sponsors would pay $18M and its cost is $15M. Kestrel’s figures are $20M and $14M. (a) Which team has the competitive advantage, and by how much? (b) How much of it comes from the buyer side and how much from the cost side? (c) Is this differentiation or cost leadership?',
      answer: [
        '**(a)** Kestrel: $20M − $14M = $6M. Sparrow: $18M − $15M = $3M. Kestrel has the advantage, by **$3M**.',
        '**(b)** The buyer side (WTP) contributes $20M − $18M = **$2M**. The cost side (WTS) contributes $15M − $14M = **$1M**.',
        '**(c)** Mostly **differentiation**: most of the gap comes from sponsors valuing Kestrel more.',
      ],
      review: { section: 'sports', slide: 1 },
    },
  ],

  videos: [],
};
