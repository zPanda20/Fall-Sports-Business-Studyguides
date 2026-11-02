// Business Strategy, Session 4 (first part): internal analysis.
// Built from the Session 4 lecture slides. All explanations are written fresh.
// Real-example figures: Ferrari 2025 results as reported by GPFans, plus facts from the Session 4 case slides.

export const internalAnalysisTopic = {
  id: 'internal-analysis',
  course: 'strategy',
  title: 'Internal analysis: resources, VRIO and dynamic capabilities',
  sessions: 'Session 4',
  reading: 'Session 4 slides and the Ferrari case on Boostcamp',
  minutes: 30,
  summary:
    'How to look inside a firm to find what gives it an edge, test whether that edge can last, and keep it from turning into a trap.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'From looking outside to looking inside',
      blocks: [
        { type: 'big', text: 'An advantage comes from combining **resources** and **capabilities** into **core competencies**.' },
        {
          type: 'p',
          text: 'The outside analysis (PESTEL, Five Forces, strategic groups) says what the environment rewards. The inside analysis asks what **this firm** has that fits.',
        },
      ],
    },
    {
      kicker: 'Building blocks',
      title: 'Resources, capabilities and activities',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Resources',
              text: 'Any assets the firm can draw on when crafting and executing strategy.',
              examples: ['Cash', 'Buildings', 'Machinery', 'Intellectual property'],
            },
            {
              title: 'Capabilities',
              text: 'The organizational and managerial skills needed to **use** resources.',
              examples: ['Structure', 'Routines', 'Culture'],
            },
            {
              title: 'Activities',
              text: 'Distinct, fine-grained business processes.',
              examples: ['Order-taking', 'Invoicing'],
            },
          ],
        },
      ],
    },
    {
      kicker: 'The prize',
      title: 'Core competencies',
      blocks: [
        {
          type: 'p',
          text: 'A **core competency** is a unique strength built into the firm, formed by **recombining** its resources and capabilities. It lets the firm stand apart from rivals and either create more value for the customer or offer products at a lower cost.',
        },
        {
          type: 'table',
          head: ['Firm', 'Core competency in class'],
          rows: [
            ['Five Guys', 'Top-quality ingredients and free toppings, with no drive-throughs and no sprawling menu'],
            ['Apple', 'Superior industrial design, integrating hardware and software'],
            ['Netflix', 'A best-in-class personalized recommendation algorithm built with AI'],
          ],
        },
      ],
    },
    {
      kicker: 'The lens',
      title: 'The resource-based view',
      blocks: [
        {
          type: 'p',
          text: 'The **resource-based view (RBV)** says resources are the key to superior performance. They come in two kinds.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Tangible', text: 'Physical and visible.' },
            { title: 'Intangible', text: 'No physical form and invisible, such as reputation, know-how or brand.' },
          ],
        },
        {
          type: 'p',
          text: 'It rests on two assumptions. **Heterogeneity:** every firm has a different bundle. **Immobility:** resources are “sticky”. They do not move easily between firms, are hard to copy and can last a long time.',
        },
      ],
    },
    {
      kicker: 'The test',
      title: 'VRIO: four questions about a resource',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Valuable?** Does it help the firm exploit an opportunity or offset a threat?',
            '**Rare?** Do only one or a few firms have it?',
            '**Costly to imitate?** Can competitors not develop or buy it at a reasonable price, or substitute for it?',
            '**Organized?** Is the firm structured and coordinated to capture the value?',
          ],
        },
        {
          type: 'table',
          caption: 'A common way to read the answers',
          head: ['Valuable', 'Rare', 'Costly to imitate', 'Organized', 'Result'],
          rows: [
            ['No', '–', '–', '–', 'Competitive disadvantage'],
            ['Yes', 'No', '–', '–', 'Competitive parity'],
            ['Yes', 'Yes', 'No', '–', 'Temporary advantage'],
            ['Yes', 'Yes', 'Yes', 'No', 'Advantage not fully captured'],
            ['Yes', 'Yes', 'Yes', 'Yes', 'Sustained advantage'],
          ],
        },
      ],
    },
    {
      kicker: 'Keeping it',
      title: 'Isolating mechanisms',
      blocks: [
        {
          type: 'p',
          text: '**Isolating mechanisms** protect an advantage by stopping rivals from taking it away.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Better expectations', text: 'The firm sees the future value of a resource more clearly than others.' },
            { title: 'Path dependence', text: 'Past decisions limit what is possible now, so a rival cannot just jump to the same place.' },
            { title: 'Causal ambiguity', text: 'Cause and effect are unclear, so rivals cannot tell what to copy.' },
            { title: 'IP protection', text: 'Patents, copyrights and trademarks.' },
          ],
        },
      ],
    },
    {
      kicker: 'The danger',
      title: 'Core rigidity',
      blocks: [
        {
          type: 'p',
          text: '**Core rigidity** is a former core competency that has become a liability. The environment changed, the competency no longer fits, and the asset turns into a handicap.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Why it matters',
          text: 'It causes loss of competitive advantage, and the firm may even go out of business.',
        },
      ],
    },
    {
      kicker: 'Staying fit',
      title: 'Dynamic capabilities',
      blocks: [
        {
          type: 'p',
          text: '**Dynamic capabilities** are a firm’s ability to **adapt its resources over time**, to keep a long-term advantage and a strategic fit with a changing environment. Markets turn dynamic because of technological change, deregulation, globalization and demographic shifts.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Resource stock',
              text: 'The firm’s **current level** of an intangible resource, such as engineering expertise.',
            },
            {
              title: 'Resource flow',
              text: 'The firm’s **investment** to maintain or build that resource.',
            },
          ],
        },
        {
          type: 'p',
          text: 'The bathtub picture: the water level is the stock, the tap pouring in is the flow of investment, and the drain is what leaks away if you stop investing.',
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
            'Listing everything the firm owns instead of what is **valuable, rare and hard to copy**.',
            'Confusing a **resource** (what you have) with a **capability** (what you can do with it).',
            'Forgetting the **O** in VRIO: a firm must be organized to capture the value.',
            'Assuming an advantage lasts forever. Competencies can become **rigidities**.',
            'Judging a resource in isolation instead of against **rivals’** resources.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Resource', def: 'Any asset a firm can draw on when crafting and executing strategy, such as cash, buildings, machinery or intellectual property.' },
    { term: 'Capability', def: 'The organizational and managerial skills a firm needs to leverage its resources: structure, routines and culture.' },
    { term: 'Activity', def: 'A distinct, fine-grained business process, such as order-taking or invoicing.' },
    { term: 'Core competency', def: 'A unique strength embedded in a firm, built from a recombination of resources and capabilities, which lets it differentiate from rivals.' },
    { term: 'Resource-based view (RBV)', def: 'The idea that resources are the key to superior firm performance.' },
    { term: 'Tangible and intangible resources', def: 'Tangible resources are physical and visible. Intangible resources have no physical form and are invisible.' },
    { term: 'Resource heterogeneity', def: 'Every firm has a unique bundle of resources, capabilities and competencies.' },
    { term: 'Resource immobility', def: 'Resources are “sticky”: they do not move easily between firms and are hard to replicate.' },
    { term: 'VRIO', def: 'Valuable, Rare, Costly to Imitate, Organized: a test for whether a resource can be the basis of competitive advantage.' },
    { term: 'Isolating mechanism', def: 'Something that stops rivals from taking away an advantage: better expectations, path dependence, causal ambiguity or IP protection.' },
    { term: 'Path dependence', def: 'Past decisions limit current options.' },
    { term: 'Causal ambiguity', def: 'The relationship between cause and effect is unclear, which makes a resource hard to imitate.' },
    { term: 'Core rigidity', def: 'A former core competency that has become a liability because the environment changed.' },
    { term: 'Dynamic capabilities', def: 'A firm’s ability to adapt its resources over time to build a long-term advantage in a changing environment.' },
    { term: 'Resource stock and flow', def: 'Stock is the current level of an intangible resource. Flow is the investment made to maintain or build it.' },
  ],
  cards: [
    { front: 'What does VRIO stand for?', back: 'Valuable, Rare, Costly to imitate, Organized to capture value.' },
    { front: 'Resource vs capability', back: 'Resources are assets the firm has. Capabilities are the skills used to leverage them.' },
    { front: 'Four isolating mechanisms', back: 'Better expectations of future value, path dependence, causal ambiguity, IP protection.' },
    { front: 'What is core rigidity?', back: 'A former core competency that turns into a liability when the environment changes.' },
    { front: 'Bathtub metaphor', back: 'Stock is the water level. Flow is the tap (investment) that keeps it filled.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Ferrari: a brand that earns beyond the cars',
    note: 'Ferrari’s 2025 results, as reported in the sports press, together with facts from the course case.',
    slides: [
      {
        kicker: 'Real example',
        title: 'A small carmaker with a giant brand',
        blocks: [
          {
            type: 'p',
            text: 'Ferrari sells fewer than 15,000 cars a year, yet in 2025 its market value of about $90 billion was double Porsche’s $45 billion, and far above makers that sell millions of cars. (Both figures are from the course case slides.) What lets it do that?',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Revenue, 2025', value: '> €7.1bn', note: 'up 7%' },
              { label: 'EBIT margin, 2025', value: '29.5%', note: 'up 120 basis points' },
              { label: 'Sponsorship, commercial and brand revenue', value: '> €800M', note: 'up 22%' },
            ],
          },
        ],
      },
      {
        kicker: 'VRIO',
        title: 'Testing the Ferrari brand',
        blocks: [
          {
            type: 'table',
            head: ['Test', 'Ferrari brand: evidence'],
            rows: [
              ['Valuable?', 'Its sponsorship, commercial and brand revenue passed €800M in 2025, on top of car sales.'],
              ['Rare?', 'Few makers sell so little yet are valued so highly. Porsche, which tried to copy Ferrari, is valued at half of Ferrari.'],
              ['Costly to imitate?', 'The case points to intangibles built over time, including racing heritage and selecting who may buy the most exclusive models. That is path dependence.'],
              ['Organized?', 'The case highlights knowledge flowing from Formula 1 into road cars, and a deliberate approach to who can buy.'],
            ],
          },
        ],
      },
      {
        kicker: 'The lesson',
        title: 'Intangible resources and the risk of copying',
        blocks: [
          {
            type: 'bullets',
            items: [
              'The advantage sits mainly in **intangible** resources: brand, reputation, racing know-how.',
              'Porsche tried to imitate Ferrari. After its 2022 listing its price fell by nearly a third, according to the case. Imitation of a brand built over decades is **costly**.',
              'The case also asks what threats could disrupt Ferrari. A brand built on exclusivity can become a **core rigidity** if its customers or the technology change.',
            ],
          },
          {
            type: 'callout',
            title: 'A note on sources',
            text: 'The 2025 results come from a press report on Ferrari’s results. The market-value and Porsche facts come from the course case slides.',
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
                title: 'Ferrari: Hamilton year one and revenue growth (GPFans)',
                url: 'https://www.gpfans.com/en/f1-news/1076820/f1-lewis-hamilton-ferrari-year-one-revenue-growth/',
                note: 'Ferrari’s 2025 revenue above €7.1bn, EBIT margin of 29.5%, and sponsorship, commercial and brand revenue above €800M, up 22%, as quoted from Ferrari’s results.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'What gives Kestrel Racing an edge?',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'Inventory',
        title: 'Kestrel’s resources and capabilities',
        blocks: [
          {
            type: 'table',
            head: ['Item', 'Kind'],
            rows: [
              ['Wind tunnel and factory', 'Tangible resource'],
              ['The Kestrel brand and fan community', 'Intangible resource'],
              ['A library of five seasons of car data', 'Intangible resource'],
              ['A culture where engineers and data analysts work in one room', 'Capability'],
              ['Booking a race-weekend hospitality suite', 'Activity'],
            ],
          },
        ],
      },
      {
        kicker: 'VRIO',
        title: 'Which resources can give an advantage?',
        blocks: [
          {
            type: 'table',
            head: ['Resource', 'V', 'R', 'I', 'O', 'Result'],
            rows: [
              ['Wind tunnel', 'Yes', 'No', '–', '–', 'Parity: most teams have one'],
              ['Fan community', 'Yes', 'Yes', 'No', 'Yes', 'Temporary advantage: rivals can build one'],
              ['Data and analyst culture', 'Yes', 'Yes', 'Yes', 'Yes', 'Sustained advantage'],
            ],
          },
          {
            type: 'p',
            text: 'The data culture is costly to imitate because of **causal ambiguity**: rivals cannot tell which part of Kestrel’s routines produces the results. It is also **path dependent**, built over five seasons.',
          },
        ],
      },
      {
        kicker: 'Danger',
        title: 'When a strength becomes a rigidity',
        blocks: [
          {
            type: 'p',
            text: 'For years Kestrel won by building more wind-tunnel models than anyone. Now the Series bans most tunnel testing and moves to computer simulation.',
          },
          {
            type: 'callout',
            tone: 'warn',
            title: 'Core rigidity',
            text: 'The routines, staff and capital built around the wind tunnel no longer fit the environment. A former core competency is now a liability.',
          },
        ],
      },
      {
        kicker: 'Adapting',
        title: 'Stock and flow of simulation skill',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Stock today:** 6 simulation engineers.',
              '**Flow:** hire 4 more each year and fund training. The stock grows toward the level the new rules demand.',
              '**Dynamic capability:** the ability to reconfigure the resource base as the rules change, not only to hold what it has.',
            ],
          },
          {
            type: 'p',
            text: 'The numbers here are illustrative.',
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
      q: 'Which of these is a capability rather than a resource?',
      options: [
        'A culture where engineers and analysts work together',
        'A wind tunnel',
        'Five seasons of car data',
        'A patent',
      ],
      answer: 0,
      explanation: 'Capabilities are the organizational skills, routines and culture used to leverage resources. The other options are assets the firm has.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'A resource is valuable and rare, but competitors can easily copy it. According to VRIO, it provides…',
      options: ['A temporary competitive advantage', 'A sustained competitive advantage', 'A competitive disadvantage', 'Nothing, because it is not valuable'],
      answer: 0,
      explanation: 'Valuable and rare gives an edge, but if it is not costly to imitate, rivals will catch up, so the advantage is temporary.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Rivals cannot work out which of Kestrel’s routines creates its results. This isolating mechanism is…',
      options: ['Causal ambiguity', 'Path dependence', 'IP protection', 'Core rigidity'],
      answer: 0,
      explanation: 'When cause and effect are unclear, rivals do not know what to copy. That is causal ambiguity.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A firm’s long-standing strength no longer fits a changed environment and now holds it back. This is…',
      options: ['Core rigidity', 'A dynamic capability', 'Competitive parity', 'Heterogeneity'],
      answer: 0,
      explanation: 'A former core competency that has become a liability because of environmental change is a core rigidity.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'In the bathtub metaphor, what does the tap pouring water in represent?',
      options: ['The resource flow: investment to build the resource', 'The resource stock', 'Core rigidity', 'Isolating mechanisms'],
      answer: 0,
      explanation: 'The water level is the stock of a resource. The tap is the flow of investment that builds or maintains it.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. Kestrel’s fan community is valuable and rare, and the firm is organized to use it. A rival could build a similar community in about two seasons. (a) Run the VRIO test. (b) What kind of advantage is it? (c) Suggest one thing Kestrel could do to protect it.',
      answer: [
        '**(a)** Valuable: yes. Rare: yes. Costly to imitate: **no**, because a rival can copy it in two seasons. Organized: yes.',
        '**(b)** A **temporary** competitive advantage.',
        '**(c)** Use isolating mechanisms. For example, protect the brand with trademarks, make switching hard with membership benefits, or build something that rivals cannot easily see or copy, such as unique fan data and routines. Keep investing, as with a resource flow, so the stock keeps growing.',
      ],
      review: { section: 'sports', slide: 1 },
    },
  ],

  videos: [],
};
