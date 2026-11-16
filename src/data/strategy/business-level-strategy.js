// Business Strategy, Session 6: business-level strategy (differentiation, cost leadership and blue oceans).
// Built from the Session 6 lecture slides ("Differentiation, Cost Leadership and Blue Oceans").
// Real-example figures: Decathlon Group 2025 results, from the company's press release (see sources slide).
// The Kestrel Racing numbers are made up and live only in this file.

export const businessLevelStrategyTopic = {
  id: 'business-level-strategy',
  course: 'strategy',
  title: 'Business-level strategy: differentiation, cost leadership and blue oceans',
  sessions: 'Session 6',
  reading: 'Session 6 slides',
  minutes: 35,
  summary:
    'How a firm chooses its strategic position: charge more for more value, charge less with lower costs, or escape the trade-off with a blue ocean.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Business-level strategy answers “How should we compete?”',
      blocks: [
        {
          type: 'big',
          text: '**Business-level strategy** is the set of goal-directed actions a firm takes to win an advantage in a **single product market**.',
        },
        {
          type: 'bullets',
          items: [
            '**Who** are the customer segments we will serve?',
            '**What** needs, wishes and desires will we satisfy?',
            '**Why** do we want to satisfy them?',
            '**How** will we satisfy them?',
          ],
        },
        {
          type: 'callout',
          title: 'Levels, from Session 2',
          text: '**Corporate** strategy asks where to compete. **Business** strategy asks how to compete. **Functional** strategy asks how to carry it out.',
        },
      ],
    },
    {
      kicker: 'Strategic position',
      title: 'A trade-off between value and cost',
      blocks: [
        {
          type: 'p',
          text: 'A firm’s **strategic position** is its profile on two things: the **value** it gives customers and the **cost** of doing so. The aim is to give customers as much value as possible while keeping costs in check.',
        },
        {
          type: 'flow',
          items: [
            { title: 'Value', text: 'What customers are willing to pay' },
            { title: 'Minus cost', text: 'What it costs the firm to provide' },
            { title: 'Economic value created', text: 'Value − Cost' },
          ],
        },
        {
          type: 'p',
          text: 'This is the same idea as willingness to pay minus willingness to sell from Session 1.',
        },
      ],
    },
    {
      kicker: 'The two generic strategies',
      title: 'Differentiation or cost leadership',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Differentiation', text: 'Create **higher value** than competitors. Offer unique features. Charge **higher prices**.' },
            { title: 'Cost leadership', text: 'Create **similar value** to competitors. Charge **lower prices**, which is only possible because costs are lower.' },
          ],
        },
        {
          type: 'p',
          text: 'Both aim for the same result: **Value − Cost** larger than your competitors’. They just get there by different routes.',
        },
      ],
    },
    {
      kicker: 'Scope',
      title: 'Broad or narrow',
      blocks: [
        {
          type: 'p',
          text: '**Competitive scope** is the size of the market in which a firm chooses to compete: **broad** (many customer groups) or **narrow** (a focused segment).',
        },
        {
          type: 'table',
          head: ['', 'Broad scope', 'Narrow scope'],
          rows: [
            ['Differentiation', 'Unique value for a wide market', 'Unique value for one segment'],
            ['Cost leadership', 'Low cost for a wide market', 'Low cost for one segment'],
          ],
        },
        {
          type: 'p',
          text: 'The lecture’s point is that **both** strategies can be used at **either** scope. Position and scope together give four choices.',
        },
      ],
    },
    {
      kicker: 'Differentiation',
      title: 'Unique value that buyers pay extra for',
      blocks: [
        {
          type: 'p',
          text: 'The goal is to use **unique features** that raise value so much that customers pay a **higher price**. The most important **value drivers** are:',
        },
        {
          type: 'bullets',
          items: [
            '**Unique product features**',
            '**Service**',
            '**New product launches**',
            '**Marketing and promotion**',
          ],
        },
        {
          type: 'callout',
          title: 'Costs still matter',
          text: 'Differentiation works only if **Value − Cost** beats the competition. Even with premium pricing, costs must be controlled. **Economies of scope** help: savings from producing two or more outputs at less cost than producing each separately, using the same resources and technology.',
        },
      ],
    },
    {
      kicker: 'Example from class',
      title: 'How Apple raises perceived value',
      blocks: [
        {
          type: 'table',
          head: ['Driver', 'Apple example'],
          rows: [
            ['Product features', 'Sleek design, premium materials and state of the art technology'],
            ['Customer service', 'The Genius Bar, in-store and online, plus strong warranty and after-sales support. It builds trust and a premium experience.'],
            ['Complements', 'The App Store with millions of apps, and the wider Apple ecosystem'],
          ],
        },
      ],
    },
    {
      kicker: 'Cost leadership',
      title: 'Lower costs, similar value, lower prices',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Reduce cost** below competitors.',
            'Offer **adequate value**, not necessarily the best.',
            '**Reduce prices** for customers.',
            '**Optimize the value chain** to lower costs.',
          ],
        },
        {
          type: 'p',
          text: 'The advantage is the same test: **Value − Cost** larger than competitors’. The four drivers that keep costs low are:',
        },
        {
          type: 'columns',
          items: [
            { title: 'Cost of input factors', text: 'Raw materials, capital, labor and IT services' },
            { title: 'Economies of scale', text: 'Cost per unit falls as output rises' },
            { title: 'Learning-curve effects', text: 'Less time to produce as a firm gains experience' },
            { title: 'Experience-curve effects', text: 'Improvements in technology and production processes' },
          ],
        },
      ],
    },
    {
      kicker: 'Scale and curves',
      title: 'Why bigger is cheaper, until it is not',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Economies of scale',
              text: 'Fixed costs are **spread over a larger output**. Specialized systems and equipment. Some physical properties help. The firm moves down the learning curve.',
            },
            {
              title: 'Diseconomies of scale',
              text: 'The firm becomes **too big**. Too much coordination. It turns **inflexible and slow**.',
            },
          ],
        },
        {
          type: 'table',
          head: ['Curve', 'What it describes'],
          rows: [
            ['Learning curve', 'Firms become more efficient with practice. The more they repeat something, the faster, cheaper or better they get.'],
            ['Experience curve', 'A broader idea. It also counts process innovation and technological change.'],
          ],
        },
        {
          type: 'p',
          text: 'The lecture used **Tesla’s learning curve** on the Model S as its example.',
        },
      ],
    },
    {
      kicker: 'Choosing',
      title: 'There is no single correct strategy',
      blocks: [
        {
          type: 'bullets',
          items: [
            'A successful strategy **leverages strengths**, **mitigates weaknesses**, **exploits opportunities** and **avoids threats**. This is the SWOT from Session 4 in action.',
            'There is **no single correct** business strategy for an industry.',
            'Choose a strategy that gives a **strong position** to maximize economic value creation, and that is **effectively implemented**.',
          ],
        },
        {
          type: 'callout',
          title: 'The risks follow from the formula',
          text: 'A differentiator risks costs that rise faster than the extra value buyers will pay for. A cost leader risks cutting so deeply that value drops below “adequate”. These risks are our own reading of the formula. Check the slide for any others the lecturer listed.',
        },
      ],
    },
    {
      kicker: 'Blue ocean',
      title: 'Escaping the trade-off',
      blocks: [
        {
          type: 'big',
          text: 'A **blue ocean strategy** combines differentiation and cost leadership: a differentiated offer at **low cost**.',
        },
        {
          type: 'bullets',
          items: [
            'It uses **value innovation** to reconcile the trade-off between value and cost.',
            'Blue oceans are **untapped market space**, with **additional demand** and room for highly profitable growth.',
            'The lecture’s example: **Cirque du Soleil**.',
            'It is **difficult** to succeed at value innovation.',
          ],
        },
      ],
    },
    {
      kicker: 'The grid',
      title: 'Eliminate, reduce, raise, create',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Eliminate', text: 'Which factors should go?' },
            { title: 'Reduce', text: 'Which should be cut well below the norm?' },
            { title: 'Raise', text: 'Which should rise well above the norm?' },
            { title: 'Create', text: 'Which new factors should we add?' },
          ],
        },
        {
          type: 'columns',
          items: [
            { title: 'Eliminate and reduce', text: 'These lower **costs**.' },
            { title: 'Raise and create', text: 'These increase **perceived buyer benefits**.' },
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Stuck in the middle',
          text: 'A firm that tries to be both differentiated and low cost, but achieves neither, is **stuck in the middle**. Value innovation is the real thing. Being stuck in the middle is the failed version.',
        },
      ],
    },
    {
      kicker: 'Mistakes to avoid',
      title: 'Common traps',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Thinking cost leadership means **poor quality**. It means **adequate** value at the lowest cost, so lower prices still leave a margin.',
            'Thinking differentiation means **ignoring costs**.',
            'Mixing up **scope** (broad or narrow market) with **position** (differentiation or cost).',
            'Mixing up **learning curve** (practice) with **experience curve** (practice plus process and technology change).',
            'Calling any cheap firm a **blue ocean**. A blue ocean is differentiated **and** low cost, and it creates new demand.',
          ],
        },
      ],
    },
    {
      kicker: 'Class discussion',
      title: 'Questions on Decathlon',
      blocks: [
        {
          type: 'p',
          text: 'The lecture closed with a Decathlon case discussion. These are the questions. There is no single right answer. A strong answer picks a side, uses one fact and names the strategy terms.',
        },
        {
          type: 'bullets',
          items: [
            'Is Decathlon today a **cost leader**, a **differentiator** or a **blue ocean** player? Defend it with one fact from the case.',
            'Which activities in its **value chain** create its cost advantage? Which would be hardest for Shein or Amazon to copy?',
            'Apply the **eliminate, reduce, raise, create** grid to Decathlon against a traditional multi-brand sports retailer such as Intersport.',
            'Would you buy a €10,000 Van Rysel bike? What does the answer say about the **limits of differentiation**?',
            'A pro cycling team costs about €40 million a year. A smart investment in differentiation, or a distraction from the cost engine?',
            '**Who pays for low prices?** Can Decathlon keep its cost advantage while answering the supply-chain criticism?',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Business-level strategy', def: 'Goal-directed actions to gain an advantage in a single product market. It answers “How should we compete?”' },
    { term: 'Strategic position', def: 'A firm’s profile of value offered and cost incurred. The aim is to create as much economic value as possible.' },
    { term: 'Economic value created', def: 'Value minus cost. The same as willingness to pay minus willingness to sell.' },
    { term: 'Differentiation strategy', def: 'Offering higher value than rivals through unique features, so buyers pay a higher price. Costs must still be controlled.' },
    { term: 'Cost leadership strategy', def: 'Offering value similar to rivals’ at a lower cost, and so a lower price.' },
    { term: 'Competitive scope', def: 'How broad or narrow the market is in which a firm competes. Either strategy can be used at either scope.' },
    { term: 'Economies of scope', def: 'Savings from producing two or more outputs with the same resources and technology at less cost than producing each separately.' },
    { term: 'Economies of scale', def: 'Unit costs fall as output rises, because fixed costs are spread over more units.' },
    { term: 'Diseconomies of scale', def: 'Unit costs rise because the firm has grown too big: too much coordination and too little flexibility.' },
    { term: 'Learning curve', def: 'The gain in efficiency from repeating a task. Experience makes it faster, cheaper or better.' },
    { term: 'Experience curve', def: 'A broader curve that also counts process innovation and technological change.' },
    { term: 'Blue ocean strategy', def: 'Combining differentiation and low cost through value innovation, to open untapped market space.' },
    { term: 'Value innovation', def: 'Raising buyer value and cutting cost at the same time, using the eliminate, reduce, raise and create grid.' },
    { term: 'Stuck in the middle', def: 'Trying to be both differentiated and low cost without achieving either.' },
  ],
  cards: [
    { front: 'Economic value created', back: 'Value − Cost.' },
    { front: 'Differentiation in one line', back: 'Higher value, higher price, costs still controlled.' },
    { front: 'Cost leadership in one line', back: 'Similar value, lower costs, lower price.' },
    { front: 'The four differentiation value drivers', back: 'Unique product features, service, new product launches, marketing and promotion.' },
    { front: 'The four cost drivers', back: 'Cost of input factors, economies of scale, learning-curve effects, experience-curve effects.' },
    { front: 'Learning curve versus experience curve', back: 'Learning is efficiency from practice. Experience also counts process innovation and technological change.' },
    { front: 'Why diseconomies of scale?', back: 'The firm is too big: too much coordination, and it is inflexible and slow.' },
    { front: 'Blue ocean in one line', back: 'Differentiated product at low cost, through value innovation, in untapped market space.' },
    { front: 'The four-action grid', back: 'Eliminate, reduce, raise, create.' },
    { front: 'Which actions lower cost?', back: 'Eliminate and reduce. Raise and create increase perceived benefits.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Decathlon: value for money at scale',
    note: 'Decathlon’s 2025 results, as published by the company on 2 April 2026, read against the lecture’s ideas.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The scale of the business',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Net sales, 2025', value: '€16.8bn', note: 'press release figure' },
              { label: 'Net result, 2025', value: '€910M', note: 'up 16%' },
              { label: 'Stores', value: '1,902', note: 'in 82 countries and regions' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The company reports **gross merchandise volume** of €20.7bn, a wider measure than net sales.',
              'It has **102,913** team members, as listed in its key figures.',
              'It describes itself as delivering **best value for money at scale**.',
              'It also owns a professional cycling team, called Decathlon CMA CGM.',
            ],
          },
          {
            type: 'p',
            text: 'The press release gives two different growth rates for net sales (5.6% in local currency in one place and 4.0% in another) and does not reconcile them, so this guide does not quote one.',
          },
        ],
      },
      {
        kicker: 'Applying the lecture',
        title: 'Reading Decathlon with the formula',
        blocks: [
          {
            type: 'table',
            head: ['Observation', 'What it suggests'],
            rows: [
              ['Net result about 5.4% of net sales', 'Profit comes from volume and cost control, not from a high margin on each sale'],
              ['“Best value for money at scale”', 'The firm’s own phrase points to **cost leadership**: adequate value at a low price, using scale'],
              ['A pro cycling team and premium bikes', 'Some **differentiation**, which the class asked about: it is the part that can distract from the cost engine'],
              ['1,902 stores in 82 countries and regions', 'Broad **scope**, and the scale needed for **economies of scale**'],
            ],
          },
          {
            type: 'callout',
            title: 'A model answer to the vote',
            text: 'A fair answer is **mainly a cost leader**, with a differentiated edge at the top end. A defender of “blue ocean” would need evidence that it combines unusual differentiation with low cost and has created new demand. Either answer is fine if one fact backs it.',
          },
          {
            type: 'p',
            text: 'The 5.4% is our own calculation (€910M ÷ €16.8bn). The reading in the right-hand column is also ours.',
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
                title: 'Decathlon Group global annual results 2025 (press release)',
                url: 'https://www.decathlon-united.media/shared/pressfiles/modules/fichiers/decathlon-group_global-annual-results-2025_press-release.pdf',
                note: 'Decathlon, 2 April 2026. Net sales, gross merchandise volume, net result, store and country counts, team members and the cycling team. The strategy reading is ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Kestrel Racing chooses how to compete in fan passes',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'The choice',
        title: 'Two passes, two positions',
        blocks: [
          {
            type: 'p',
            text: 'Kestrel Racing sells digital fan passes. Fans will pay up to the amounts below, and these are the costs of serving one fan for a season. All numbers are made up.',
          },
          {
            type: 'table',
            head: ['Pass', 'Value (WTP)', 'Cost', 'Value created'],
            rows: [
              ['Paddock Pass (differentiated)', '€120', '€70', '€50'],
              ['Basic Pass (low cost)', '€70', '€35', '€35'],
              ['A rival’s similar pass', '€100', '€60', '€40'],
            ],
          },
          {
            type: 'p',
            text: 'Both Kestrel passes beat the rival’s €40. The Paddock Pass wins by €10 through **higher value**. The Basic Pass loses by €5 even though its cost is lower, because its value is also lower.',
          },
        ],
      },
      {
        kicker: 'The trade-off',
        title: 'Why lower cost alone is not enough',
        blocks: [
          {
            type: 'bars',
            title: 'Value created per fan (made-up euros)',
            unit: '€',
            items: [
              { label: 'Paddock Pass', value: 50 },
              { label: 'Rival’s pass', value: 40 },
              { label: 'Basic Pass', value: 35 },
            ],
          },
          {
            type: 'p',
            text: 'Cost leadership only wins if the **cost saving is bigger than the value given up**. The Basic Pass gives up €30 of value against the rival (€70 against €100) but saves only €25 of cost (€35 against €60), so it creates €5 less. The Paddock Pass adds €20 of value (€120 against €100) for €10 more cost (€70 against €60), so it creates €10 more.',
          },
        ],
      },
      {
        kicker: 'Blue ocean',
        title: 'Kestrel’s four actions',
        blocks: [
          {
            type: 'columns',
            items: [
              { title: 'Eliminate', text: 'Printed race programs and call-center ticket sales' },
              { title: 'Reduce', text: 'Costly trackside hospitality for casual fans' },
              { title: 'Raise', text: 'Live telemetry and radio access' },
              { title: 'Create', text: 'A shared “strategy desk” game where fans make pit calls' },
            ],
          },
          {
            type: 'p',
            text: 'The first two actions cut cost. The last two raise perceived benefit. If the new offer also draws in fans who never bought a pass before, that is the **new demand** that marks a blue ocean.',
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
      q: 'How does the lecture define economic value created?',
      options: ['Value minus cost', 'Price minus cost', 'Revenue minus expenses', 'Value divided by cost'],
      answer: 0,
      explanation: 'Economic value created is the value customers get minus the cost to the firm. It is the same as willingness to pay minus willingness to sell.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'A firm offers value similar to its rivals’ but at a lower price, because its costs are lower. Which strategy is this?',
      options: ['Cost leadership', 'Differentiation', 'Blue ocean', 'Stuck in the middle'],
      answer: 0,
      explanation: 'Cost leadership means similar value to competitors at lower cost, and so a lower price.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which is one of the four most important value drivers of a differentiation strategy in the lecture?',
      options: ['Marketing and promotion', 'Learning-curve effects', 'Economies of scale', 'Cost of input factors'],
      answer: 0,
      explanation: 'The differentiation drivers are unique product features, service, new product launches, and marketing and promotion. The other three options drive cost.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which of these is a driver that keeps costs low in a cost-leadership strategy?',
      options: ['Learning-curve effects', 'New product launches', 'Customer service', 'Unique product features'],
      answer: 0,
      explanation: 'The cost drivers are the cost of input factors, economies of scale, learning-curve effects and experience-curve effects.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'What does competitive scope describe?',
      options: [
        'How broad or narrow the market is in which a firm competes',
        'How many products a firm sells',
        'How large the firm’s profit is',
        'How far away the firm’s suppliers are',
      ],
      answer: 0,
      explanation: 'Scope is the size, narrow or broad, of the target market. The lecture says both generic strategies can be used at either scope.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which statement about economies of scope is correct?',
      options: [
        'They are savings from producing two or more outputs with the same resources and technology',
        'They are savings from spreading fixed costs over one very large output',
        'They are savings from people repeating a task',
        'They are the extra cost of a firm growing too large',
      ],
      answer: 0,
      explanation: 'Economies of scope come from sharing resources across several outputs. Spreading fixed costs is economies of scale, repetition is the learning curve, and being too large is diseconomies of scale.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'What is the difference between the learning curve and the experience curve?',
      options: [
        'The experience curve is broader: it also counts process innovation and technological change',
        'The learning curve is broader than the experience curve',
        'They are two names for the same thing',
        'The learning curve applies only to services',
      ],
      answer: 0,
      explanation: 'The learning curve is about efficiency gained through practice. The experience curve adds process innovation and technological change.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which pair of actions in the blue ocean grid lowers cost?',
      options: ['Eliminate and reduce', 'Raise and create', 'Eliminate and raise', 'Reduce and create'],
      answer: 0,
      explanation: 'Eliminating and reducing factors lowers cost. Raising and creating factors increases perceived buyer benefits.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'A firm tries to be both low cost and differentiated but achieves neither. The lecture calls this…',
      options: ['Stuck in the middle', 'A blue ocean', 'Value innovation', 'Economies of scope'],
      answer: 0,
      explanation: 'Value innovation succeeds at both. A firm that tries and fails at both is stuck in the middle.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'Which example did the lecture use for a blue ocean strategy?',
      options: ['Cirque du Soleil', 'Apple', 'Tesla', 'Ryanair'],
      answer: 0,
      explanation: 'Cirque du Soleil offered a differentiated show at a cost that reconciled the usual trade-off. Apple was the differentiation example and Tesla the learning-curve example.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'At Kestrel Racing, the Basic Pass has value €70 and cost €35. A rival’s pass has value €100 and cost €60. What is the result?',
      options: [
        'Kestrel creates €5 less value than the rival, despite lower costs',
        'Kestrel creates €5 more value than the rival',
        'Both create the same value',
        'Kestrel creates €25 more value than the rival',
      ],
      answer: 0,
      explanation: 'Kestrel creates 70 − 35 = €35. The rival creates 100 − 60 = €40. A lower cost does not help if value drops by more.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'In the Decathlon example, what is the net result as a share of net sales (€910M on €16.8bn)?',
      options: ['About 5.4%', 'About 18%', 'About 54%', 'About 0.5%'],
      answer: 0,
      explanation: '910 ÷ 16,800 is about 0.054, or 5.4%. A modest margin on a very large volume fits a cost-leadership reading.',
      review: { section: 'real', slide: 1 },
    },
    {
      id: 'q13',
      type: 'open',
      q: 'Exercise. Name two value drivers of differentiation and two cost drivers of cost leadership, and say which strategy a low-fare airline most likely follows.',
      answer: [
        'Differentiation drivers: **unique product features**, **service**, **new product launches**, **marketing and promotion** (any two).',
        'Cost drivers: **cost of input factors**, **economies of scale**, **learning-curve effects**, **experience-curve effects** (any two).',
        'A low-fare airline most likely follows **cost leadership**: similar basic value to rivals (a seat from A to B) at a lower price, made possible by lower costs.',
      ],
      review: { section: 'plain', slide: 2 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain the difference between a differentiation strategy and a cost-leadership strategy. For each, name two drivers and say how the firm wins an advantage.',
      answer: [
        '**Differentiation:** higher value than rivals through unique features, so buyers pay a higher price. Drivers: unique product features, service, new product launches, marketing and promotion.',
        '**Cost leadership:** value similar to rivals at lower cost, so the firm can charge less. Drivers: input costs, economies of scale, learning-curve and experience-curve effects.',
        '**Advantage in both cases:** value minus cost is larger than the competitors’. The routes differ: raise the value, or lower the cost.',
      ],
      marking: [
        'Describes differentiation and cost leadership correctly (2)',
        'Two correct drivers for differentiation (2)',
        'Two correct drivers for cost leadership (2)',
        'Links both to value minus cost beating rivals (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Describe a blue ocean strategy and explain how the eliminate, reduce, raise, create grid is used. Why is it hard to do well?',
      answer: [
        'A **blue ocean strategy** combines differentiation and low cost, using **value innovation** to reconcile the trade-off. It opens untapped market space and creates additional demand.',
        'The grid asks four questions. **Eliminate** and **reduce** factors to lower cost. **Raise** and **create** factors to increase perceived buyer benefits.',
        'It is hard because it needs a new way of thinking about the market. A firm that tries and fails is **stuck in the middle**, neither cheaper nor clearly better.',
      ],
      marking: [
        'Defines blue ocean as differentiation plus low cost through value innovation (2)',
        'Explains the four actions (3)',
        'Says eliminate and reduce lower cost, raise and create raise benefits (1)',
        'Explains the difficulty or the stuck-in-the-middle risk (2)',
      ],
    },
  ],

  videos: [],
};
