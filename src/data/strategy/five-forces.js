export const fiveForcesTopic = {
  id: 'five-forces',
  course: 'strategy',
  title: "Porter's Five Forces & industry analysis",
  sessions: 'Session 3',
  reading: 'Readings are posted on Boostcamp',
  minutes: 30,
  summary: 'A checklist for judging how much profit an industry lets its companies keep, and where the pressure comes from.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big question',
      title: 'Is this a good place to compete?',
      blocks: [
        { type: 'big', text: 'Before choosing a strategy, ask: is this a **good industry** to be in?' },
        {
          type: 'p',
          text: "**Porter's Five Forces** is a checklist for answering that. It looks at five pressures that squeeze, or protect, the profits of every company in an industry.",
        },
      ],
    },
    {
      kicker: 'Key idea',
      title: 'The industry, not the firm',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Strong team, tough industry', text: 'Profits get squeezed from every side, so even a great team struggles.' },
            { title: 'Average team, friendly industry', text: 'The playing field protects profits, so even an average team can do well.' },
          ],
        },
        { type: 'p', text: 'The model judges the **playing field**, not one company.' },
      ],
    },
    {
      kicker: 'The framework',
      title: 'The five forces',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**New entrants.** Can newcomers join easily?',
            '**Supplier power.** Can the firms that sell you inputs raise their prices?',
            '**Buyer power.** Can your customers push your prices down?',
            '**Substitutes.** Can customers meet the same need another way?',
            '**Rivalry.** How hard do current competitors fight each other?',
          ],
        },
        {
          type: 'p',
          text: 'Some textbooks add a sixth, **complements**. Check which version your instructor uses.',
        },
      ],
    },
    {
      kicker: 'Using it',
      title: 'Reading the ratings',
      blocks: [
        { type: 'big', text: 'A **high** force means more pressure on profits.' },
        {
          type: 'table',
          head: ['Force', 'Strong when…'],
          rows: [
            ['New entrants', 'Entry is cheap and barriers are low'],
            ['Suppliers', 'Few suppliers, no alternatives, switching is costly'],
            ['Buyers', 'Few big buyers with many alternatives'],
            ['Substitutes', 'Different products meet the same need cheaply'],
            ['Rivalry', 'Many equal rivals, slow growth, high fixed costs'],
          ],
        },
      ],
    },
    {
      kicker: 'Force 1 in depth',
      title: 'What keeps newcomers out',
      blocks: [
        {
          type: 'p',
          text: 'Newcomers lower industry profits and push incumbents to spend more. Incumbents defend themselves with **entry barriers**.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Economies of scale', text: 'Big output spreads costs, so large firms have lower unit costs.' },
            { title: 'Network effects', text: 'The product is worth more as more people use it.' },
            { title: 'Switching costs', text: 'Customers face extra cost or hassle to change provider.' },
            { title: 'Capital requirements', text: 'High upfront investment in plants, R&D or marketing.' },
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Advantages independent of size:** brand, patents, exclusive resources, location, accumulated expertise.',
            '**Government policy:** laws, licenses and rules that favor incumbents.',
            '**Credible threat of retaliation:** incumbents can cut prices or fight hard to scare entrants off.',
          ],
        },
      ],
    },
    {
      kicker: 'Forces 2 and 3 in depth',
      title: 'Suppliers and buyers',
      blocks: [
        {
          type: 'p',
          text: '**Suppliers** hurt profits when they raise prices or capture part of the value the industry creates. **Buyers** hurt profits when they win discounts (lower revenue) or demand better quality (higher cost).',
        },
        {
          type: 'callout',
          title: 'Buyer power is higher when…',
          items: [
            'There are **few buyers**, and each buys a large quantity.',
            'The product is **standardized**, like a commodity.',
            '**Switching costs** are low or nonexistent.',
            'Buyers can **integrate backward** and make the product themselves.',
          ],
        },
      ],
    },
    {
      kicker: 'Forces 4 and 5 in depth',
      title: 'Substitutes and rivalry',
      blocks: [
        {
          type: 'p',
          text: 'A **substitute** comes from outside the industry yet comes close to meeting the same need. Examples from class: energy drinks versus coffee, videoconferencing versus business travel, SMS versus messaging apps.',
        },
        {
          type: 'p',
          text: '**Rivalry** is how hard existing competitors fight for share and profit. Its intensity depends mainly on four things.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Industry structure', text: 'How many rivals, who sets prices, commodity or differentiated, how easy entry is.' },
            { title: 'Industry growth', text: 'Fast growth eases price fights. Slow or negative growth means rivals can only gain at each other’s expense.' },
            { title: 'Strategic commitments', text: 'Costly, long-term, hard-to-reverse bets such as a new factory.' },
            { title: 'Exit barriers', text: 'Economic and social obstacles to leaving, which keep firms fighting on.' },
          ],
        },
      ],
    },
    {
      kicker: 'A sixth force',
      title: 'Complements and co-opetition',
      blocks: [
        {
          type: 'p',
          text: 'A **complement** is a product, service or skill that adds value when used with the original product. It raises demand and can lift profit potential for the industry and the firm.',
        },
        {
          type: 'callout',
          title: 'Co-opetition',
          text: 'Cooperation between competitors to reach a shared goal. Rivals can still work together where they gain from each other’s complements.',
        },
      ],
    },
    {
      kicker: 'Beyond the snapshot',
      title: 'Industry dynamics and strategic groups',
      blocks: [
        {
          type: 'p',
          text: 'Five Forces is a **snapshot** in time. In practice, keep asking: what is changing in the industry structure, how fast, and how quickly are products innovating?',
        },
        {
          type: 'p',
          text: 'Firms within an industry can also be clustered into **strategic groups**: sets of companies that follow a similar strategy.',
        },
        {
          type: 'steps',
          items: [
            'Pick the important strategic dimensions (price and quality, distribution channels, product range).',
            'Choose **two** that are **not correlated**.',
            'Plot each firm. Bubble size shows market share.',
          ],
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
            'Analyzing one company instead of the **industry**.',
            'Treating "high" as good. A high force is bad news for firms already in the industry.',
            'Listing the forces without rating them. The point is to judge how strong each one is, and why.',
            'Stopping at the diagram. The useful part is what the result means for strategy.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Industry', def: 'A group of firms that offer similar products or services and compete for the same customers.' },
    { term: 'Industry attractiveness', def: 'How much profit the average firm in an industry can expect to keep. The Five Forces judge this.' },
    { term: 'Barrier to entry', def: 'Anything that makes it hard or expensive for a newcomer to join an industry: capital, licenses, brand loyalty, scarce access.' },
    { term: 'Supplier power', def: 'The ability of input providers to raise prices or lower quality, taking profit from the firms that buy from them.' },
    { term: 'Buyer power', def: 'The ability of customers to push prices down or demand more value, taking profit from the firms that sell to them.' },
    { term: 'Substitute', def: 'A product from a different industry that meets the same customer need.' },
    { term: 'Rivalry', def: 'The intensity of competition among the firms already in the industry.' },
    { term: 'Switching costs', def: 'The money, time or effort it costs a buyer (or a firm) to change to a different provider.' },
    { term: 'Complement', def: 'A product or service that makes another one more valuable when used together. Added as a sixth force in some textbooks.' },
    { term: 'Economies of scale', def: 'Lower cost per unit because costs are spread over a large output. A common entry barrier.' },
    { term: 'Network effects', def: 'A product becomes more valuable as more people use it.' },
    { term: 'Co-opetition', def: 'Cooperation among competitors to achieve a shared strategic objective.' },
    { term: 'Exit barriers', def: 'Economic or social obstacles that make it hard for a firm to leave an industry, which keeps rivalry high.' },
    { term: 'Strategic group', def: 'A set of firms in the same industry pursuing a similar strategy.' },
    { term: 'Industry dynamics', def: 'Changes over time in an industry’s structure, and the speed of those changes and of innovation.' },
  ],
  cards: [
    { front: 'List the five forces', back: 'New entrants, supplier power, buyer power, substitutes, rivalry among existing competitors.' },
    { front: 'What does a HIGH rating mean for a force?', back: 'Strong pressure on profits. It is bad news for the firms in the industry.' },
    { front: 'What does Five Forces analyze: the firm or the industry?', back: 'The industry. It judges how attractive the industry is, not how good one company is.' },
    { front: 'Name four entry barriers', back: 'Economies of scale, network effects, customer switching costs, capital requirements. Also brand and patents, government policy, and a credible threat of retaliation.' },
    { front: 'When is buyer power high?', back: 'Few buyers each buying a lot, standardized products, low switching costs, or buyers able to integrate backward.' },
    { front: 'What decides how intense rivalry is?', back: 'Industry structure, industry growth, strategic commitments and exit barriers.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Cadillac joins Formula 1: the price of entry',
    note: 'A real case from 2024 and 2025. Figures are as reported by the news sources listed on the last slide.',
    slides: [
      {
        kicker: 'Real example',
        title: 'A new team joins the grid',
        blocks: [
          {
            type: 'big',
            text: 'In 2024 Formula 1 accepted a bid from General Motors to enter as the **11th team**.',
          },
          {
            type: 'bullets',
            items: [
              'The team races under the **Cadillac** brand, in partnership with TWG.',
              'F1 officially confirmed the entry on **March 7, 2025**.',
              'It joins for the **2026 season**, the first 11-team grid since 2016.',
            ],
          },
        ],
      },
      {
        kicker: 'Barrier to entry',
        title: 'The price of entry',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Anti-dilution fee (reported)', value: '$450M', note: 'paid by the newcomer' },
              { label: 'Fee set by the rules', value: '$200M', note: 'so more than double' },
              { label: 'Who receives it', value: 'The 10 teams', note: 'already on the grid' },
            ],
          },
          {
            type: 'p',
            text: 'The fee compensates existing teams for the prize money they lose when the pot is shared with one more team.',
          },
        ],
      },
      {
        kicker: 'Incumbents react',
        title: 'The existing teams push back',
        blocks: [
          {
            type: 'bullets',
            items: [
              'An earlier bid, **Andretti-Cadillac**, was rejected.',
              'Existing teams worried a new team would **dilute the prize money** they share.',
              'Toto Wolff, Mercedes team boss, argued in January 2025 that the fee **did not make up** for the income teams would lose.',
            ],
          },
        ],
      },
      {
        kicker: 'The Five Forces lens',
        title: 'What it shows',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Threat of new entrants',
                text: 'A very large fee plus approval from the sport’s gatekeepers made entry slow and costly.',
              },
              {
                title: 'Rivalry',
                text: 'Prize money is a shared pot, so every new team shrinks everyone else’s slice. That is why incumbents resisted.',
              },
            ],
          },
          {
            type: 'callout',
            title: 'One more reading',
            text: 'The barriers were high, but a major carmaker still chose to pay. Willingness to pay $450M suggests the industry looked attractive.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'Sources',
        blocks: [
          {
            type: 'sources',
            items: [
              {
                title: 'GM approved for F1 entry in 2026 under Cadillac brand (Sportcal)',
                url: 'https://www.sportcal.com/news/gm-approved-for-f1-entry-in-2026-under-cadillac-brand',
                note: 'November 2024: the approval, the reported $450M fee and the $200M rule.',
              },
              {
                title: 'After Years of Drama, Cadillac Will Definitely Race in F1 in 2026 (The Drive)',
                url: 'https://www.thedrive.com/news/after-years-of-drama-cadillac-will-definitely-race-in-f1-in-2026',
                note: 'March 2025: official confirmation, the earlier rejection and the teams’ objections.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Kestrel Racing, a fictional motorsport team',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'Meet the team',
        title: 'Kestrel Racing and its series',
        blocks: [
          {
            type: 'p',
            text: '**Kestrel Racing** is a fictional team in the **Continental Open-Wheel Series**, a made-up championship.',
          },
          {
            type: 'bullets',
            items: [
              'Exactly **10 teams** compete.',
              'Engines come from one of **two manufacturers**; tyres from a **single supplier**.',
              'TV rights are sold as one package, and prize money is **shared by finishing position**.',
              'A new team must pay a **$200M** entry fee.',
            ],
          },
        ],
      },
      {
        kicker: 'Forces 1 and 2',
        title: 'Entrants and suppliers',
        blocks: [
          {
            type: 'forces',
            items: [
              {
                name: 'Threat of new entrants',
                rating: 'Low',
                why: 'Only 10 slots exist, joining costs $200M, and building a factory and expertise takes years. Kestrel is well protected.',
              },
              {
                name: 'Supplier power',
                rating: 'High',
                why: 'Two engine makers and one tyre supplier serve the whole Series. Teams cannot walk away, so suppliers can raise prices.',
              },
            ],
          },
        ],
      },
      {
        kicker: 'Forces 3 and 4',
        title: 'Buyers and substitutes',
        blocks: [
          {
            type: 'forces',
            items: [
              {
                name: 'Buyer power',
                rating: 'Medium',
                why: 'A handful of global brands fund most sponsorship and can choose between 10 teams or spend elsewhere. But only 10 teams offer this audience, which keeps some power with the teams.',
              },
              {
                name: 'Threat of substitutes',
                rating: 'Medium',
                why: 'Sponsors and fans can shift budgets and attention to other sports, sim racing and creator content. Racing has a loyal base, but younger audiences split their time.',
              },
            ],
          },
        ],
      },
      {
        kicker: 'Force 5 and the verdict',
        title: 'Rivalry, and what it means',
        blocks: [
          {
            type: 'forces',
            items: [
              {
                name: 'Rivalry',
                rating: 'High',
                why: "Ten teams chase the same sponsors, drivers and prize money, and it is split by results, so one team's gain is another's loss.",
              },
            ],
          },
          {
            type: 'callout',
            title: 'Reading the result',
            text: 'A mixed picture: strong entry barriers, but powerful suppliers and fierce rivalry squeeze profits. Kestrel should work on the two forces it can influence: lock in a long-term supplier deal, and stand out to sponsors with a unique digital audience.',
          },
        ],
      },
      {
        kicker: 'Strategic groups',
        title: 'Who really competes with Kestrel?',
        blocks: [
          {
            type: 'p',
            text: 'Not all ten teams follow the same strategy. Plot them on two dimensions that are not linked: **annual budget** and **where the car is built**.',
          },
          {
            type: 'table',
            head: ['Group', 'Budget', 'Car development', 'Teams'],
            rows: [
              ['Works giants', 'High', 'In-house', '3 teams'],
              ['Lean innovators (Kestrel)', 'Medium', 'In-house, small staff', '3 teams'],
              ['Customer teams', 'Low', 'Bought from a bigger team', '4 teams'],
            ],
          },
          {
            type: 'p',
            text: 'Kestrel’s closest rivals are the other lean innovators. Rivalry is strongest **inside** a strategic group.',
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
      q: 'A racing series allows only 10 teams and charges a very large entry fee. Which force does this mainly weaken?',
      options: ['Threat of new entrants', 'Supplier power', 'Buyer power', 'Threat of substitutes'],
      answer: 0,
      explanation: 'Limited slots and a large entry fee are barriers to entry, so newcomers find it hard to join. That keeps the threat of new entrants low.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Every team must buy engines from one of two manufacturers, who set the price. Which force is strong?',
      options: ['Rivalry', 'Supplier power', 'Buyer power', 'Threat of new entrants'],
      answer: 1,
      explanation: 'Few suppliers, no real alternatives and costly switching add up to strong supplier power. The suppliers can take a share of team profits through higher prices.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Fans increasingly spend free evenings on video games and short-form video instead of watching races. Which force does this describe?',
      options: ['Threat of substitutes', 'Rivalry among existing competitors', 'Supplier power', 'Barriers to entry'],
      answer: 0,
      explanation: 'Video games and short-form video come from different industries but meet a similar need, entertainment. That is the threat of substitutes.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: "A single title sponsor provides 60% of a team's budget and says it may move to a rival team. Which force is at work?",
      options: ['Buyer power', 'Supplier power', 'Threat of substitutes', 'Barriers to entry'],
      answer: 0,
      explanation: 'The sponsor is a customer of the team, and it is large and can walk away. A big buyer with alternatives has strong bargaining power.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which statement about the Five Forces is correct?',
      options: [
        'It tells a firm exactly which strategy to choose.',
        'It judges the profit potential of an industry, not one company.',
        'A high rating on a force is good news for firms already in the industry.',
        "It measures a firm's internal resources and capabilities.",
      ],
      answer: 1,
      explanation: 'Five Forces is an industry-level tool. It informs strategy but does not choose it. A high force means more pressure on profits, and internal resources are the focus of tools like VRIO.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q6',
      type: 'open',
      q: "Exercise. Kestrel's sponsorship revenue falls 15% after a major sponsor leaves for a rival team. Using the Five Forces, explain two forces that make keeping sponsors difficult and suggest one strategic move.",
      answer: [
        '**Buyer power.** Sponsors are few and large, and they can choose between 10 teams. This gives them leverage over price and terms.',
        '**Rivalry.** Teams compete directly for the same sponsors, and the sponsor that left chose a competitor. Rivals can win deals by discounting or offering more exposure.',
        '**Possible move.** Sign multi-year agreements with performance-linked terms, and offer sponsors something rivals cannot easily copy, such as exclusive digital content and a growing online audience. This makes Kestrel harder to replace and eases the pressure from both forces.',
      ],
      review: { section: 'sports', slide: 2 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A video-calling app becomes more valuable to each user as more of their contacts join it. Which entry barrier is this?',
      options: ['Network effects', 'Economies of scale', 'Government policy', 'Credible threat of retaliation'],
      answer: 0,
      explanation: 'When a product is worth more as more people use it, newcomers find it hard to attract users. That is a network effect.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which of these makes rivalry in an industry more intense?',
      options: [
        'Slow industry growth and high exit barriers',
        'Fast industry growth and differentiated products',
        'Few competitors and high switching costs',
        'Low capital requirements for suppliers',
      ],
      answer: 0,
      explanation: 'When growth is slow, firms can only gain share at each other’s expense. High exit barriers keep unprofitable firms in the market, so the fight goes on.',
      review: { section: 'plain', slide: 6 },
    },
  ],

  videos: [
    {
      title: 'The Five Competitive Forces That Shape Strategy',
      channel: 'Harvard Business Review',
      url: 'https://www.youtube.com/watch?v=mYF2_FBCvXw',
      note: 'The original framework, explained by the people who publish it.',
    },
  ],
  videoSearch: "porter's five forces explained",
};
