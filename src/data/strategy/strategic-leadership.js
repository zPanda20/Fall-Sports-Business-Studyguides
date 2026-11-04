// Business Strategy, Session 2: Strategic leadership and the strategy process.
// Built from the Session 2 lecture slides. All explanations are written fresh.
// Real-example facts: Wimbledon (AELTC) pandemic insurance, as described by Brodies LLP (see sources slide).

export const strategicLeadershipTopic = {
  id: 'strategic-leadership',
  course: 'strategy',
  title: 'Strategic leadership',
  sessions: 'Session 2',
  reading: 'Session 2 slides and the Meta case on Boostcamp',
  minutes: 30,
  summary:
    'What strategic leaders do, how vision and mission differ, three ways of making strategy, and the thinking traps that lead leaders astray.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Leaders use power to point the organization at its goals',
      blocks: [
        {
          type: 'big',
          text: '**Strategic leadership** is top management using power and influence to direct others toward the organization’s goals.',
        },
        {
          type: 'bullets',
          items: [
            'Its job is to enable **competitive advantage**.',
            '**Power** is the ability to get others to do things.',
            'It comes from **formal authority** (your position) and **informal authority** (your ability to persuade).',
          ],
        },
      ],
    },
    {
      kicker: 'The process',
      title: 'Formulation, implementation and three levels',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Formulation', text: 'The choice of strategy: **where and how** to compete.' },
            { title: 'Implementation', text: 'Organizing, coordinating and integrating: **how the work gets done**.' },
          ],
        },
        {
          type: 'table',
          head: ['Level', 'Key question'],
          rows: [
            ['Corporate', 'Where to compete?'],
            ['Business', 'How to compete?'],
            ['Functional', 'How to implement the chosen strategy?'],
          ],
        },
      ],
    },
    {
      kicker: 'Direction',
      title: 'Vision, mission and values',
      blocks: [
        {
          type: 'table',
          head: ['', 'Question it answers', 'What it does'],
          rows: [
            ['Vision', 'What do we ultimately want to accomplish?', 'Captures aspiration and long-term objectives. Forward-looking and inspiring.'],
            ['Mission', 'How do we accomplish it?', 'What the organization actually does: products and services, and the markets it competes in.'],
            ['Values', 'What commitments and safeguards do we have?', 'Ethical standards and norms that govern behavior and keep strategy stable.'],
          ],
        },
        {
          type: 'flow',
          items: [
            { title: 'Vision', text: 'Where do we want to end up?' },
            { title: 'Mission', text: 'What do we do to get there?' },
            { title: 'Values', text: 'What do we stand for on the way?' },
          ],
        },
        {
          type: 'callout',
          title: 'Example from class: adidas',
          text: '**Vision:** through sport we have the power to change lives. **Mission:** to be the best sports brand in the world. The vision says why the firm exists. The mission says what it will do.',
        },
        {
          type: 'p',
          text: 'Values help employees understand the culture, handle complexity and resolve conflicts, and keep the firm acting legally and ethically as it pursues its vision and mission.',
        },
      ],
    },
    {
      kicker: 'Does a vision matter?',
      title: 'Customer-oriented versus product-oriented',
      blocks: [
        {
          type: 'p',
          text: 'Research links vision statements to firm performance. The link is strongest when the vision is **customer-oriented**, internal stakeholders help shape it, and the organization’s structure lines up with it.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Customer-oriented',
              text: 'Focuses on solving the customer’s problem. Lets the company **adapt** as the environment changes.',
            },
            {
              title: 'Product-oriented',
              text: 'Focuses on improving existing products and services.',
            },
          ],
        },
      ],
    },
    {
      kicker: 'Making strategy',
      title: 'Three approaches',
      blocks: [
        {
          type: 'table',
          head: ['Approach', 'How it works', 'Works best when…'],
          rows: [
            ['Strategic planning', 'Formal and top-down. Management analyzes prices, costs, margins, demand and performance, then decides.', 'The environment is stable and predictable'],
            ['Scenario planning', 'Formal and top-down. Management imagines several futures and prepares a strategy for each.', 'The future is uncertain'],
            ['Planned emergence', 'Starts with a plan but is less formal. Ideas also come up from below and are evaluated by management.', 'Front-line insight matters'],
          ],
        },
        {
          type: 'callout',
          title: 'Weaknesses of strategic planning',
          items: [
            'Formulation is separated from implementation.',
            'Information flows one way.',
            'The leaders’ vision of the future can simply be wrong.',
          ],
        },
      ],
    },
    {
      kicker: 'What if?',
      title: 'Scenario planning',
      blocks: [
        {
          type: 'p',
          text: 'Management asks “what if?” questions and prepares for **optimistic and pessimistic futures**. For each scenario it asks:',
        },
        {
          type: 'steps',
          items: [
            'What **resources and capabilities** do we need to compete in this future?',
            'What **strategic initiatives** should we put in place to respond?',
            'How can we **shape** the future environment?',
          ],
        },
        {
          type: 'p',
          text: 'Good practice: get input from different levels and functions (R&D, manufacturing, marketing), decide how to compete in each situation, and attach **probabilities** to the future states.',
        },
      ],
    },
    {
      kicker: 'From below',
      title: 'Planned emergence',
      blocks: [
        {
          type: 'p',
          text: 'Strategy emerges from **top-down and bottom-up** together. It uses data and also personal experience, domain expertise and front-line insight.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Autonomous actions', text: 'Strategic initiatives taken by employees, often in response to unexpected situations.' },
            { title: 'Serendipity', text: 'Surprises and coincidences. Example from class: Post-it Notes.' },
            { title: 'Resource allocation process', text: 'How the firm allocates resources according to its set policies.' },
          ],
        },
        {
          type: 'cycle',
          center: 'Planned emergence',
          items: [
            { title: 'A starting plan', text: 'Top management sets direction from data.' },
            { title: 'Initiatives', text: 'Employees act, and luck helps.' },
            { title: 'Evaluate', text: 'Management reviews and coordinates.' },
            { title: 'Back what works', text: 'Resources flow to the winners.' },
          ],
        },
      ],
    },
    {
      kicker: 'Human limits',
      title: 'How leaders actually decide',
      blocks: [
        {
          type: 'p',
          text: 'Our minds are limited, so we often choose a “good enough” option rather than the best one. Frameworks help us make sense of uncertain information, and AI can **augment** decisions.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'System 1',
              text: 'The brain’s default. Familiar, automatic, efficient, low effort. Prone to biases.',
            },
            {
              title: 'System 2',
              text: 'Logical, analytical and deliberate. Slower and takes more energy.',
            },
          ],
        },
      ],
    },
    {
      kicker: 'Thinking traps',
      title: 'Six cognitive biases',
      blocks: [
        {
          type: 'table',
          head: ['Bias', 'What it is'],
          rows: [
            ['Illusion of control', 'Overestimating how much we can control events'],
            ['Escalating commitment', 'Backing a project even as signs of failure appear'],
            ['Confirmation bias', 'Looking for information that supports what we already believe'],
            ['Reasoning by analogy', 'Using simple analogies to make sense of complex problems'],
            ['Representativeness', 'Drawing conclusions from small samples or anecdotes'],
            ['Groupthink', 'Opinions gather around a leader without anyone challenging them'],
          ],
        },
      ],
    },
    {
      kicker: 'Fixes',
      title: 'Tools to make decisions better',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Devil’s advocacy',
              text: 'Someone is assigned to argue **against** a proposal, to expose its weak points before the decision is made.',
            },
            {
              title: 'Dialectic inquiry',
              text: 'Two groups build **opposing** proposals and debate them. Management ends up with a stronger, combined view.',
            },
          ],
        },
        {
          type: 'figure',
          src: 'bs-leadership-devils-advocacy-dialectic.png',
          alt: 'Two side-by-side diagrams comparing devil’s advocacy and dialectic inquiry',
          caption: 'Devil’s advocacy attacks one plan. Dialectic inquiry sets two plans against each other.',
          need: 'Two small flow diagrams side by side. Devil’s advocacy: proposal, then a critic argues against it, then a decision. Dialectic inquiry: plan and counter-plan, then a debate, then a combined plan. Redraw the two diagrams from the Session 2 slides.',
        },
        {
          type: 'p',
          text: 'Both force a leader’s assumptions to be tested instead of just applauded.',
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
            'Mixing up **vision** (aspiration) with **mission** (what we do).',
            'Mixing up the levels: **corporate** is about where, **business** is about how.',
            'Treating planning, scenarios and emergence as the same thing.',
            'Assuming bias only affects other people.',
            'Forgetting that **implementation** is part of strategy.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Strategic leadership', def: 'Top management’s use of power and influence to direct the activities of others in pursuit of the organization’s goals.' },
    { term: 'Corporate-level strategy', def: 'Decides where to compete: which businesses and markets the firm is in.' },
    { term: 'Business-level strategy', def: 'Decides how to compete within a business.' },
    { term: 'Functional-level strategy', def: 'Decides how to implement the chosen strategy in a function such as marketing or operations.' },
    { term: 'Vision', def: 'The organization’s aspiration: what it ultimately wants to accomplish.' },
    { term: 'Mission', def: 'What the organization actually does: its products and services and the markets in which it competes.' },
    { term: 'Values', def: 'Core ethical standards and norms that govern behavior and give stability to strategy.' },
    { term: 'Strategic planning', def: 'A formal, top-down, data-driven approach in which management formulates strategy. Suits stable environments.' },
    { term: 'Scenario planning', def: 'A formal, top-down approach that prepares strategies for several possible futures.' },
    { term: 'Planned emergence', def: 'Starts from a plan but lets strategic initiatives emerge from below, evaluated and coordinated by management.' },
    { term: 'Autonomous actions', def: 'Strategic initiatives taken by employees, often in response to unexpected situations.' },
    { term: 'Serendipity', def: 'Surprises and coincidences that lead to strategic opportunities.' },
    { term: 'System 1 / System 2', def: 'System 1 is the fast, automatic, bias-prone mode of thinking. System 2 is the slow, analytical, deliberate mode.' },
    { term: 'Escalating commitment', def: 'Continuing to back a project even though it shows signs of failing.' },
    { term: 'Groupthink', def: 'When opinions coalesce around a leader without individuals critically evaluating the leader’s assumptions.' },
    { term: 'Devil’s advocacy', def: 'Assigning someone to argue against a proposal to expose weaknesses.' },
    { term: 'Dialectic inquiry', def: 'Two groups build opposing plans and debate them to arrive at a stronger one.' },
  ],
  cards: [
    { front: 'Corporate, business, functional: key questions', back: 'Corporate: where to compete? Business: how to compete? Functional: how to implement?' },
    { front: 'Vision vs mission vs values', back: 'Vision: what we ultimately want. Mission: what we do and where. Values: the commitments and ethical norms that guide us.' },
    { front: 'Three approaches to strategy', back: 'Strategic planning (formal, top-down), scenario planning (several futures), planned emergence (top-down and bottom-up).' },
    { front: 'Name the six biases from class', back: 'Illusion of control, escalating commitment, confirmation bias, reasoning by analogy, representativeness, groupthink.' },
    { front: 'Vision vs mission', back: 'Vision: where we want to end up. Mission: what we actually do to get there. Values: the commitments we keep on the way.' },
    { front: 'Planned emergence in four words', back: 'Plan, try, evaluate, back winners. Top-down and bottom-up together.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Wimbledon: planning for a future nobody wanted',
    note: 'The All England Lawn Tennis Club insured against a pandemic for 17 years. Facts are as described by the law firm Brodies LLP.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The tournament that was cancelled',
        blocks: [
          {
            type: 'p',
            text: 'In 2020 Wimbledon was cancelled at the start of April because of the pandemic. Unlike most event organizers, the All England Lawn Tennis Club (AELTC) had **insurance against exactly that**.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Years of pandemic cover', value: '17', note: 'bought every year since the 2003 SARS outbreak' },
              { label: 'Premiums over that period', value: '≈ £25.5M', note: 'roughly, as reported' },
              { label: 'Payout expected', value: '£114M', note: 'from its insurer' },
            ],
          },
        ],
      },
      {
        kicker: 'Why it matters',
        title: 'A scenario-planning story',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Scenario planning prepares for **pessimistic futures**, not just the expected one. A cancelled tournament was a pessimistic scenario with a tiny probability each year.',
              'The leadership choice was to **pay a cost every year** for protection against an event that almost never happens.',
              'The £114M expected payout is about 4.5 times the roughly £25.5M of premiums (our division of the two reported figures).',
              'The source estimates the payout would recoup almost half of the losses.',
            ],
          },
          {
            type: 'callout',
            title: 'The follow-up',
            text: 'For 2021, the club confirmed its pandemic insurance would **not** cover the event. Once a scenario has happened, insurers reassess it. Strategy is never finished.',
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
                title: 'Game, set, cheque: Wimbledon’s pandemic payout (Brodies LLP)',
                url: 'https://brodies.com/insights/insurance-and-risk/game-set-cheque-wimbledons-pandemic-payout/',
                note: 'The 17 years of cover, premiums of roughly £25.5M, the expected £114M payout, the 2020 cancellation and no cover for 2021. The 4.5 times comparison is our own division.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Leading Kestrel Racing',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'Direction',
        title: 'Kestrel’s vision, mission and values',
        blocks: [
          {
            type: 'table',
            head: ['', 'Kestrel Racing'],
            rows: [
              ['Vision (customer-oriented)', 'To give sponsors and fans the most engaging racing experience in the Series.'],
              ['A product-oriented alternative', 'To build the fastest car on the grid.'],
              ['Mission', 'Race competitively in the Continental Open-Wheel Series, and create digital content and partnerships around every race.'],
              ['Values', 'Safety first. Honest dealings with sponsors. Respect for the crew.'],
            ],
          },
          {
            type: 'p',
            text: 'The customer-oriented vision lets Kestrel adapt if the sport’s rules or audience change. A pure “fastest car” vision would not.',
          },
        ],
      },
      {
        kicker: 'Three levels',
        title: 'Corporate, business, functional',
        blocks: [
          {
            type: 'table',
            head: ['Level', 'Kestrel question'],
            rows: [
              ['Corporate', 'Should we also launch a sim-racing league, or stay in the main series only?'],
              ['Business', 'How do we win sponsors against Sparrow: with cost, or with a unique audience?'],
              ['Functional', 'How does the marketing team deliver the content plan? How does engineering plan its upgrades?'],
            ],
          },
        ],
      },
      {
        kicker: 'Scenario planning',
        title: 'Three possible futures',
        blocks: [
          {
            type: 'table',
            head: ['Scenario', 'Probability', 'Kestrel’s preparation'],
            rows: [
              ['New engine rules reset the grid', '30%', 'Keep engineers flexible; budget for a late upgrade package'],
              ['The main sponsor cuts its budget', '20%', 'Diversify to three or four mid-size sponsors'],
              ['A rich new team joins', '10%', 'Lock in drivers and key staff on long contracts'],
            ],
          },
          {
            type: 'p',
            text: 'Probabilities are illustrative. The leadership team assigns them, and it asks of each scenario what resources, initiatives and influence it needs.',
          },
        ],
      },
      {
        kicker: 'Biases',
        title: 'Where Kestrel’s leaders could go wrong',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Escalating commitment.** Kestrel has already spent heavily on a new aerodynamic package that is not working. Leaders keep funding it because they have already invested so much.',
              '**Confirmation bias.** The team principal only reads reports saying the package is “almost there”.',
              '**Groupthink.** Nobody on a close-knit leadership team dares to challenge the principal’s favorite plan.',
            ],
          },
          {
            type: 'callout',
            title: 'The fix',
            text: 'Name a **devil’s advocate** to argue for scrapping the package, or run a **dialectic inquiry** with one group making the case to continue and another making the case to stop.',
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
      q: 'Kestrel’s leadership asks “Should we also launch a sim-racing league?” Which level of strategy is this?',
      options: ['Corporate', 'Business', 'Functional', 'Operational only'],
      answer: 0,
      explanation: 'Deciding which businesses and markets to be in is the corporate-level question: where to compete.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: '“To give fans and sponsors the most engaging racing experience” is best described as…',
      options: [
        'A customer-oriented vision',
        'A product-oriented vision',
        'A value statement',
        'A functional strategy',
      ],
      answer: 0,
      explanation: 'It focuses on solving the customer’s need rather than improving a product. Customer-oriented visions let a firm adapt as the environment changes.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'The environment is highly uncertain. Management prepares different strategies for optimistic and pessimistic futures. Which approach is this?',
      options: ['Scenario planning', 'Strategic planning', 'Planned emergence', 'Groupthink'],
      answer: 0,
      explanation: 'Preparing strategies for several imagined futures, with probabilities attached, is scenario planning.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Leaders keep funding a failing project because of the money they have already sunk into it. Which bias is this?',
      options: ['Escalating commitment', 'Confirmation bias', 'Representativeness', 'Illusion of control'],
      answer: 0,
      explanation: 'Continuing to support a project despite signs it may not succeed is escalating commitment.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A team assigns one person to argue against the principal’s plan before the final decision. What is this tool called?',
      options: ['Devil’s advocacy', 'Dialectic inquiry', 'Scenario planning', 'Autonomous action'],
      answer: 0,
      explanation: 'Devil’s advocacy has one person critique a proposal. Dialectic inquiry uses two groups with opposing plans.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. A mechanic at Kestrel notices a way to cut pit-stop time and tries it in practice without asking anyone. Management later adopts it for races. (a) Which approach to strategy does this illustrate? (b) What is the mechanic’s action called? (c) Why might pure top-down planning have missed it?',
      answer: [
        '**(a)** **Planned emergence**: an initiative from below, evaluated and adopted by management.',
        '**(b)** An **autonomous action**, a strategic initiative taken by an employee in response to the situation in front of them.',
        '**(c)** Top-down planning separates formulation from implementation and sends information one way. Leaders rarely see what front-line staff see, so they could have missed the idea.',
      ],
      review: { section: 'plain', slide: 6 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Compare strategic planning, scenario planning and strategy as planned emergence. For each, say what it is and one limitation or condition where it works best.',
      answer: [
        '**Strategic planning** is a formal, top-down, data-driven process. Top management sets the strategy from analysis of prices, costs, margins and demand. It works best in **stable, predictable** environments. Its shortcomings: formulation is separate from implementation, information flows one way, and the leaders’ view of the future can be wrong.',
        '**Scenario planning** is also formal and top-down, but based on **“what if” questions**. Management imagines several futures, optimistic and pessimistic, and prepares a strategy for each, often giving them probabilities. It helps in uncertain settings but still depends on the planners.',
        '**Planned emergence** starts with a plan but is **less formal**. Strategy comes from top-down and bottom-up together: employee initiatives, autonomous actions and even luck are evaluated and coordinated by management, with resources following what works.',
      ],
      marking: [
        'Strategic planning: formal, top-down, data-driven, suits stable settings (2)',
        'A limitation of strategic planning, for example one-way information or a wrong view of the future (1)',
        'Scenario planning: “what if” questions, several futures, preparing strategies for each (2)',
        'Planned emergence: begins with a plan, less formal, top-down and bottom-up (2)',
        'Mentions autonomous actions, serendipity or the resource allocation process (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Explain vision, mission and values. Why is a customer-oriented vision more useful than a product-oriented one?',
      answer: [
        'The **vision** captures the organization’s aspiration and long-term objectives. It is forward-looking and inspiring and gives employees meaning.',
        'The **mission** says what the organization actually does: the products and services it provides and the markets it competes in. It explains how the vision will be achieved.',
        '**Values** are the ethical standards and norms that govern behavior and give the strategy stability.',
        'A **customer-oriented** vision focuses on solving the customer’s problem, so the firm can adapt as the environment changes. A **product-oriented** vision focuses on improving existing products, which can leave the firm stuck if the market moves on. Research links vision to performance most strongly when the vision is customer-oriented, internal stakeholders help shape it and the structure aligns with it.',
      ],
      marking: [
        'Defines vision as long-term aspiration (2)',
        'Defines mission as what the firm does and where it competes (2)',
        'Defines values as ethical standards and norms (1)',
        'Explains the customer-oriented versus product-oriented difference (2)',
        'Links the customer focus to adaptability or performance (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Describe System 1 and System 2 thinking. Name two biases that can harm strategic decisions and one tool that helps overcome them.',
      answer: [
        '**System 1** is the brain’s default mode: automatic, fast, familiar and low-effort, but prone to bias. **System 2** is logical, analytical and deliberate, but slower and more demanding.',
        'Two biases: **confirmation bias** (looking only for information that supports existing beliefs) and **escalating commitment** (continuing to back a project that is showing signs of failing). Others are illusion of control, reasoning by analogy, representativeness and groupthink.',
        'A helpful tool: **devil’s advocacy**, where someone is assigned to argue against a proposal, or **dialectic inquiry**, where two groups build opposing proposals and debate them.',
      ],
      marking: [
        'System 1 described correctly (1)',
        'System 2 described correctly (1)',
        'Two biases named and explained (2)',
        'One tool named and explained (2)',
      ],
    },
  ],

  videos: [],
};
