// Business Strategy, Session 7: innovation, the industry life cycle and the platform business model.
// Built from the Session 7 lecture slides ("Innovation and Platform Business Model") and the course case study
// "WHOOP: Can a Subscription Strap Become a Health Platform?" (course material, not linked here).
// Real-example figures: WHOOP's funding announcement of 31 March 2026 (see sources slide), plus the case study.
// The Kestrel Racing numbers are made up and live only in this file.

export const innovationPlatformsTopic = {
  id: 'innovation-platforms',
  course: 'strategy',
  title: 'Innovation, industry life cycle and platform business models',
  sessions: 'Session 7',
  reading: 'Session 7 slides and the WHOOP case',
  minutes: 40,
  summary:
    'How innovation creates and destroys advantage, how industries age through five stages, the four types of innovation, crossing the chasm, and why platforms scale differently from pipelines.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Innovation is a competitive weapon',
      blocks: [
        {
          type: 'big',
          text: 'Innovation can **create** value and it can **destroy** it. It usually arrives in **waves**.',
        },
        {
          type: 'bullets',
          items: [
            'Many firms dominated an early wave and were then **challenged by the next one**.',
            'Technological change keeps **accelerating**, so advantages from one wave can fade fast.',
          ],
        },
        {
          type: 'flow',
          items: [
            { title: 'Idea', text: 'Abstract concepts or research findings' },
            { title: 'Invention', text: 'Turning an idea into a product, or changing or recombining existing products' },
            { title: 'Innovation', text: 'Commercializing an invention' },
            { title: 'Imitation', text: 'Copying a successful innovation' },
          ],
        },
        {
          type: 'p',
          text: 'These are **the four I’s**. An invention is not yet an innovation: it must reach the market.',
        },
      ],
    },
    {
      kicker: 'Industry life cycle',
      title: 'Industries age through five stages',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Introduction', text: 'A new product category appears' },
            { title: 'Growth', text: 'Demand rises rapidly' },
            { title: 'Shakeout', text: 'Growth slows and weaker firms exit' },
            { title: 'Maturity', text: 'A few large firms, no growth' },
            { title: 'Decline', text: 'Demand falls' },
          ],
        },
        {
          type: 'bullets',
          items: [
            'The **number and size** of competitors change.',
            '**Different consumers** enter the market.',
            'The **supply and demand sides** change.',
            '**Different competencies** are needed to perform well.',
          ],
        },
      ],
    },
    {
      kicker: 'Early stages',
      title: 'Introduction and growth',
      blocks: [
        {
          type: 'table',
          head: ['Stage', 'What happens'],
          rows: [
            [
              'Introduction',
              'Core competency is **research and development**, which can be very capital-intensive. **Barriers to entry are high.** Strategic objective: **market acceptance and future growth**.',
            ],
            [
              'Growth',
              '**Demand rises rapidly** as first-time buyers rush in and the **proof of concept** is shown. **Standards emerge**. **Product innovation** (new or recombined features) and **process innovation** (new ways to produce) both appear.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Examples shown in the lecture: **introduction** with quantum computers, brain-computer interfaces, sustainable aviation fuel and the 1X NEO home robot. **Growth** with artificial intelligence and EVs and batteries.',
        },
      ],
    },
    {
      kicker: 'Middle stages',
      title: 'Shakeout and maturity',
      blocks: [
        {
          type: 'table',
          head: ['Stage', 'What happens'],
          rows: [
            [
              'Shakeout',
              'Growth **declines**. Firms compete intensely, **weaker firms are forced out**, the industry **consolidates** and only the strongest survive. **Price** becomes an important weapon.',
            ],
            [
              'Maturity',
              '**Only a few large firms remain** with **economies of scale**. **Process innovation has reached a maximum.** Demand is replacement or repeat purchases. The market is at maximum size, and **growth is zero or negative**.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Examples shown: **shakeout** with micromobility and crypto exchanges. **Maturity** with smartphones and insurance.',
        },
      ],
    },
    {
      kicker: 'Decline',
      title: 'Four ways to respond when demand falls',
      blocks: [
        {
          type: 'p',
          text: 'In **decline**, demand falls rapidly, innovation is close to zero and prices come under strong pressure. A breakthrough can start a new industry or reset the cycle. The examples shown were print newspapers and magazines and point-and-shoot cameras.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Exit', text: 'Bankruptcy or liquidation' },
            { title: 'Harvest', text: 'Reduce further investment' },
            { title: 'Maintain', text: 'Support at the given level' },
            { title: 'Consolidate', text: 'Buy competitors' },
          ],
        },
      ],
    },
    {
      kicker: 'Over the cycle',
      title: 'Where each kind of innovation peaks',
      blocks: [
        {
          type: 'table',
          head: ['Stage', 'Innovation pattern'],
          rows: [
            ['Introduction', 'Research and development builds the product category'],
            ['Growth', 'Product innovation and process innovation both appear'],
            ['Maturity', 'Process innovation has reached its maximum'],
            ['Decline', 'Innovation close to zero, unless a breakthrough resets the cycle'],
          ],
        },
        {
          type: 'callout',
          title: 'Why this matters',
          text: 'The competency that wins in one stage may not win in the next. Early on it is research and development. Later it is scale and cost.',
        },
      ],
    },
    {
      kicker: 'Four types',
      title: 'Combining markets and technologies',
      blocks: [
        {
          type: 'table',
          head: ['Type', 'What it is', 'Example'],
          rows: [
            ['Incremental', 'Builds on established knowledge through steady improvement', 'New iPhone generations'],
            ['Radical', 'Novel methods and materials, new markets and new technology', 'mRNA vaccines for infectious diseases'],
            ['Architectural', 'Existing technology brought to **new markets**', 'Smart home systems'],
            ['Disruptive', 'New technology in **existing markets**', 'Ride-hailing against traditional taxis'],
          ],
        },
        {
          type: 'callout',
          title: 'A quick test',
          text: 'Ask two questions: is the **technology** new or existing, and is the **market** new or existing? New and new is radical. Existing and existing is incremental. Existing technology in a new market is architectural. New technology in an existing market is disruptive.',
        },
      ],
    },
    {
      kicker: 'Adoption',
      title: 'Crossing the chasm',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Enthusiasts** want early access to cutting-edge technology and tolerate flaws.',
            '**Early adopters** want transformational gains and accept risk for a potential benefit.',
            '**Early majority** want finalized, practical products.',
            '**Late majority** are skeptical and usually price-sensitive.',
            '**Laggards** adopt a new product only if necessary.',
          ],
        },
        {
          type: 'p',
          text: 'The **chasm** is the gap between the early adopters and the early majority. Many products win the first two groups and then fail to convince the practical majority. Crossing it means turning a clever product into a finished, practical one.',
        },
      ],
    },
    {
      kicker: 'Two kinds of business',
      title: 'Pipeline or platform',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Pipeline business',
              text: 'A **linear** transformation through the value chain: research and development, then design, then manufacture, then sell.',
            },
            {
              title: 'Platform business',
              text: 'Enables **interaction between producers and consumers**. Its purpose is to **enable matches** among users. It provides the **infrastructure** and sets the **governance conditions**.',
            },
          ],
        },
        {
          type: 'p',
          text: 'A pipeline makes and sells. A platform connects the two sides and lets them make and sell to each other.',
        },
      ],
    },
    {
      kicker: 'Why platforms win',
      title: 'Advantages and network effects',
      blocks: [
        {
          type: 'bullets',
          items: [
            'They **scale more efficiently** than pipelines by eliminating gatekeepers.',
            'They **unlock new sources of value creation and supply**.',
            'They **benefit from community feedback**.',
          ],
        },
        {
          type: 'callout',
          title: 'Network effects',
          text: 'The platform becomes **more valuable as more people use it**. More buyers attract more sellers, and more sellers attract more buyers.',
        },
        {
          type: 'table',
          head: ['Kind of platform', 'Examples from the lecture'],
          rows: [
            ['Marketplaces', 'Amazon, eBay, AliExpress'],
            ['Social networks', 'Facebook, Instagram, LinkedIn'],
            ['Payment networks', 'PayPal, Venmo, Visa'],
            ['Communication', 'WhatsApp, Telegram'],
            ['Sharing economy', 'Uber, Lyft, Upwork'],
            ['In sport', 'Strava, Steam, Twitch'],
          ],
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
            'Mixing up **invention** (a new product) with **innovation** (a commercialized one).',
            'Calling every new product **disruptive**. Disruptive means new technology in an **existing** market.',
            'Mixing up **architectural** (existing technology, new market) with **disruptive** (new technology, existing market).',
            'Thinking **decline** always means exit. There are four options.',
            'Calling a **subscription** a platform. A platform needs **two or more sides** that interact. A subscription may just be a pricing model.',
            'Saying a firm has **network effects** when it only has data or switching costs.',
          ],
        },
      ],
    },
    {
      kicker: 'Class discussion',
      title: 'The WHOOP case questions',
      blocks: [
        {
          type: 'p',
          text: 'Session 7 ended with the WHOOP case. There are no single right answers. A strong answer picks a side, applies a named framework from this session and says what could make the choice fail.',
        },
        {
          type: 'bullets',
          items: [
            '**Strap or subscription?** Was the real innovation the band or the 2018 switch to free hardware plus membership? Incremental, radical, architectural or disruptive?',
            '**Has WHOOP crossed the chasm?** Is the athlete image a bridge to the mainstream or a ceiling?',
            '**Platform or pipeline?** Who are the sides? Real network effects, or only data and switching costs?',
            '**Disruption from below?** Look-alike bands from Garmin, Google and Polar cost $99 to $199 with no subscription.',
            '**Two ways to make money:** Oura sells a ring and charges a monthly fee. WHOOP includes the band and charges a yearly fee. Which creates more value? Which captures more?',
            '**Two blunders:** the upgrade-fee backlash and the fight with the FDA. What do they show about the risks of a subscription model, and of moving from fitness into health?',
            '**Your call:** performance brand, health platform, or change the model?',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Invention', def: 'Turning an idea into a product, or changing or recombining existing products.' },
    { term: 'Innovation', def: 'The commercialization of an invention.' },
    { term: 'Imitation', def: 'Copying a successful innovation.' },
    { term: 'Industry life cycle', def: 'The five stages an industry passes through: introduction, growth, shakeout, maturity and decline.' },
    { term: 'Shakeout', def: 'The stage when growth slows, price competition rises, weaker firms leave and the industry consolidates.' },
    { term: 'Product innovation', def: 'New or recombined aspects of a product.' },
    { term: 'Process innovation', def: 'New ways to produce a product.' },
    { term: 'Incremental innovation', def: 'Steady improvement on established knowledge.' },
    { term: 'Radical innovation', def: 'Novel methods and materials aimed at new markets, with new technology.' },
    { term: 'Architectural innovation', def: 'Bringing existing technology to new markets.' },
    { term: 'Disruptive innovation', def: 'Using new technology in existing markets.' },
    { term: 'Chasm', def: 'The gap between early adopters and the early majority, which many new products fail to cross.' },
    { term: 'Pipeline business', def: 'A business that moves a product linearly through a value chain, from research to sale.' },
    { term: 'Platform business', def: 'A business that enables interaction and matches between producers and consumers, and provides the infrastructure and governance.' },
    { term: 'Network effect', def: 'The platform becomes more valuable to each user as more people use it.' },
  ],
  cards: [
    { front: 'The four I’s', back: 'Idea, invention, innovation, imitation.' },
    { front: 'The five stages of the industry life cycle', back: 'Introduction, growth, shakeout, maturity, decline.' },
    { front: 'The four decline-stage options', back: 'Exit, harvest, maintain, consolidate.' },
    { front: 'Core competency in the introduction stage', back: 'Research and development. Barriers to entry are high.' },
    { front: 'What happens in shakeout?', back: 'Growth slows, price becomes a weapon, weaker firms exit, the industry consolidates.' },
    { front: 'Incremental or radical?', back: 'Incremental: steady improvement. Radical: new technology and new markets.' },
    { front: 'Architectural versus disruptive', back: 'Architectural: existing technology, new market. Disruptive: new technology, existing market.' },
    { front: 'The five adopter groups', back: 'Enthusiasts, early adopters, early majority, late majority, laggards.' },
    { front: 'Pipeline versus platform', back: 'A pipeline makes and sells in a line. A platform enables matches between producers and consumers.' },
    { front: 'What is a network effect?', back: 'The platform becomes more valuable as more people use it.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'WHOOP: a strap, a subscription, or a platform?',
    note: 'WHOOP’s funding announcement of 31 March 2026 and the course case study, read through this session’s frameworks.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The numbers behind the model',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Series G funding', value: '$575M', note: 'at a $10.1bn valuation, March 2026' },
              { label: 'Bookings growth, 2025', value: '+103%', note: 'ended the year at a $1.1bn run rate' },
              { label: 'Members', value: '2.5M+', note: 'in March 2026. The case reports more than 3M by October' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'WHOOP’s band has **no screen**. Customers do not buy it. They pay a **membership** and the hardware is included. Since May 2025 the membership is billed yearly at **$199, $239 or $359**.',
              'In **2018** the company stopped selling the band and moved to a membership. That, not the strap, is the move the class discussed.',
              'The 2026 funding round included **Abbott** and **Mayo Clinic**, a sign of the push from fitness into health.',
              'Rivals now sell look-alike screenless bands for **$99 to $199** with no subscription. Oura sells a ring and a monthly plan.',
            ],
          },
        ],
      },
      {
        kicker: 'Applying the lecture',
        title: 'The class questions, with a model answer',
        blocks: [
          {
            type: 'table',
            head: ['Question', 'A defensible reading'],
            rows: [
              ['What type of innovation?', 'The **business model change** is the real innovation. As a technology move it sits closest to **architectural** (existing sensors in a new, athlete-first market). It is not radical, and only arguably disruptive.'],
              ['Crossed the chasm?', 'Elite athletes were the **early adopters**. More than 3M members suggests it has reached beyond them, but the athlete image could also be a **ceiling** for mainstream buyers.'],
              ['Platform or pipeline?', 'Mostly a **pipeline with a subscription**: WHOOP makes the product and serves members. It does not yet match two sides. Blood tests and partners such as Quest hint at a platform.'],
              ['Disruption from below?', 'Cheap look-alike bands could pull away casual users, which fits a **low-end threat**. WHOOP’s defence is algorithms, coaching, research and data.'],
            ],
          },
          {
            type: 'p',
            text: 'These readings are ours. Other answers are fine if they pick a side and use the frameworks.',
          },
        ],
      },
      {
        kicker: 'Two business models',
        title: 'What three years costs a customer',
        blocks: [
          {
            type: 'bars',
            title: 'Three-year cost to a customer (US dollars, from the case)',
            unit: '$',
            items: [
              { label: 'Garmin CIRQA (buy once)', value: 199 },
              { label: 'Oura Ring, low end', value: 566 },
              { label: 'Oura Ring, high end', value: 716 },
              { label: 'WHOOP Peak (3 × $239)', value: 717 },
            ],
          },
          {
            type: 'p',
            text: 'Oura: $350 to $500 for the ring plus about $6 a month for 36 months ($216) gives $566 to $716. WHOOP Peak: $239 a year for three years gives $717. A look-alike band bought once for $199 costs about **$518 less** than three years of WHOOP Peak. The numbers come from the case, and the totals are our own sums.',
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
                title: 'WHOOP Raises $575 Million at $10.1 Billion Valuation to Advance Global Health Platform',
                url: 'https://www.businesswire.com/news/home/20260331399622/en/WHOOP-Raises-$575-Million-at-$10.1-Billion-Valuation-to-Advance-Global-Health-Platform',
                note: 'WHOOP press release on Business Wire, 31 March 2026. Funding, valuation, investors, member count and 2025 bookings. Prices, rivals and the three paths come from the course case study, which is not linked. The framework readings are ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Kestrel Racing: innovation types and a fan platform',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'Innovation types',
        title: 'Four Kestrel launches, four types',
        blocks: [
          {
            type: 'table',
            head: ['Launch', 'Type', 'Why'],
            rows: [
              ['A slightly lighter wing each season', 'Incremental', 'Steady improvement on a known design'],
              ['A fan app using the same sensors the team already uses', 'Architectural', 'Existing technology in a new market (fans)'],
              ['A cheap streaming service that pulls viewers from pay TV', 'Disruptive', 'New technology in an existing market'],
              ['A new energy-recovery system for racing engines', 'Radical', 'New technology and a new market']
            ],
          },
        ],
      },
      {
        kicker: 'Platform',
        title: 'From selling tickets to matching fans and creators',
        blocks: [
          {
            type: 'columns',
            items: [
              { title: 'Pipeline today', text: 'Kestrel makes races and sells tickets and passes to fans. One direction.' },
              { title: 'Platform idea', text: 'Kestrel opens a marketplace where fans, creators and sponsors find each other and where Kestrel sets the rules.' },
            ],
          },
          {
            type: 'p',
            text: 'The **sides** are fans, creators and sponsors. A **network effect** appears if more creators attract more fans, which attracts more sponsors, which pays more creators. Without that loop it is a store, not a platform.',
          },
        ],
      },
      {
        kicker: 'Life cycle',
        title: 'Where is the Series?',
        blocks: [
          {
            type: 'p',
            text: 'The made-up Series has ten teams, a rich new team is about to join and fan growth has started to slow. That points to the **shakeout** stage. Price pressure rises, and the weaker teams may leave or merge.',
          },
          {
            type: 'bullets',
            items: [
              '**Harvest** would mean cutting investment at a weak team.',
              '**Consolidate** would mean a strong team buying a struggling one.',
              'Kestrel’s best move depends on whether its **data and analyst culture** still wins in the next stage.',
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
      q: 'In the four I’s, what is innovation?',
      options: [
        'The commercialization of an invention',
        'The transformation of an idea into a product',
        'Copying a successful product',
        'An abstract concept or research finding',
      ],
      answer: 0,
      explanation: 'Idea is the abstract concept. Invention turns it into a product. Innovation commercializes it. Imitation copies it.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which sequence lists the industry life-cycle stages in order?',
      options: [
        'Introduction, growth, shakeout, maturity, decline',
        'Introduction, shakeout, growth, maturity, decline',
        'Growth, introduction, maturity, shakeout, decline',
        'Introduction, growth, maturity, shakeout, decline',
      ],
      answer: 0,
      explanation: 'Shakeout comes after growth, when growth slows and weaker firms are forced out. Maturity follows.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which stage is described by high barriers to entry, capital-intensive research and development, and a goal of market acceptance?',
      options: ['Introduction', 'Growth', 'Maturity', 'Decline'],
      answer: 0,
      explanation: 'In the introduction stage the core competency is research and development and the objective is market acceptance and future growth.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'In which stage are weaker firms forced out, the industry consolidates and price becomes an important competitive weapon?',
      options: ['Shakeout', 'Introduction', 'Growth', 'Maturity'],
      answer: 0,
      explanation: 'That is the shakeout stage: growth declines and competition intensifies.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which is one of the four strategic options in the decline stage?',
      options: ['Harvest', 'Differentiate', 'Pivot', 'Franchise'],
      answer: 0,
      explanation: 'The four options are exit, harvest, maintain and consolidate.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Ride-hailing against traditional taxis is an example of which type of innovation?',
      options: ['Disruptive', 'Architectural', 'Incremental', 'Radical'],
      answer: 0,
      explanation: 'Disruptive innovation uses new technology in an existing market. The taxi market already existed.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Smart home systems are given as an example of which type of innovation?',
      options: ['Architectural', 'Disruptive', 'Incremental', 'Radical'],
      answer: 0,
      explanation: 'Architectural innovation brings existing technology to new markets.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which adopter group wants transformational gains and accepts risk for a potential benefit?',
      options: ['Early adopters', 'Early majority', 'Late majority', 'Laggards'],
      answer: 0,
      explanation: 'Early adopters accept risk for potential gains. The early majority wants finalized, practical products.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'What is the main purpose of a platform business?',
      options: [
        'To enable matches and interaction among users',
        'To move a product linearly through the value chain',
        'To lower costs through scale alone',
        'To sell a product at the highest possible price',
      ],
      answer: 0,
      explanation: 'A platform enables interaction between producers and consumers, and provides infrastructure and governance. A linear value chain describes a pipeline.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q10',
      type: 'mcq',
      q: 'Which of these did the lecture give as a sports-context platform?',
      options: ['Twitch', 'Gillette', 'Tesla', 'Decathlon'],
      answer: 0,
      explanation: 'The lecture named Strava, Steam and Twitch. The others are pipeline businesses.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q11',
      type: 'mcq',
      q: 'Three years of WHOOP Peak at $239 a year costs $717. A look-alike band bought once for $199 costs about how much less?',
      options: ['$518', '$239', '$199', '$717'],
      answer: 0,
      explanation: 'Three years of WHOOP Peak is 3 × $239 = $717. Subtract the $199 one-off band: 717 − 199 = $518.',
      review: { section: 'real', slide: 2 },
    },
    {
      id: 'q12',
      type: 'mcq',
      q: 'Kestrel launches a fan app using sensors it already uses on its cars. Which type of innovation is this?',
      options: ['Architectural', 'Radical', 'Disruptive', 'Incremental'],
      answer: 0,
      explanation: 'It is existing technology brought to a new market (fans), which is architectural innovation.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q13',
      type: 'open',
      q: 'Exercise. Classify each as incremental, radical, architectural or disruptive: (a) a new phone generation with a better camera, (b) mRNA vaccines, (c) a streaming service that takes viewers from cable, (d) smart home systems built from existing sensors.',
      answer: [
        '**(a) Incremental.** Steady improvement of established knowledge.',
        '**(b) Radical.** Novel methods and materials, new markets and new technology.',
        '**(c) Disruptive.** New technology in an existing market.',
        '**(d) Architectural.** Existing technology brought to new markets.',
      ],
      review: { section: 'plain', slide: 6 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Describe the five stages of the industry life cycle. For each, say what is happening to growth and competition.',
      answer: [
        '**Introduction:** a new product category. Research and development matters, barriers to entry are high, and the aim is market acceptance.',
        '**Growth:** demand rises rapidly, standards emerge, and product and process innovation appear.',
        '**Shakeout:** growth declines, rivalry intensifies, price becomes a weapon, weaker firms exit and the industry consolidates.',
        '**Maturity:** a few large firms with economies of scale, process innovation at its maximum, and zero or negative growth.',
        '**Decline:** demand falls, innovation is close to zero and prices come under pressure. Options: exit, harvest, maintain, consolidate.',
      ],
      marking: [
        'Five stages named in order (2)',
        'Introduction and growth described correctly (2)',
        'Shakeout and maturity described correctly (2)',
        'Decline described with its options (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Explain the difference between a pipeline business and a platform business. Why can platforms scale more efficiently, and what are network effects?',
      answer: [
        'A **pipeline** moves a product linearly through the value chain: research and development, design, manufacture, sale.',
        'A **platform** enables interaction between producers and consumers. It matches users and provides the infrastructure and governance.',
        'Platforms scale more efficiently because they **eliminate gatekeepers**, unlock new sources of supply and value, and benefit from community feedback.',
        '**Network effects:** the platform becomes more valuable as more users join, which attracts further users.',
      ],
      marking: [
        'Describes a pipeline (2)',
        'Describes a platform (2)',
        'Gives reasons platforms scale well (2)',
        'Explains network effects (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Classify four innovations by type using the technology and market grid, and give an example of each.',
      answer: [
        '**Incremental:** existing technology, existing market, steady improvement. Example: new iPhone generations.',
        '**Radical:** new technology and new markets. Example: mRNA vaccines.',
        '**Architectural:** existing technology, new markets. Example: smart home systems.',
        '**Disruptive:** new technology, existing markets. Example: ride-hailing against taxis.',
      ],
      marking: [
        'Incremental correctly defined and exemplified (1)',
        'Radical correctly defined and exemplified (2)',
        'Architectural correctly defined and exemplified (1)',
        'Disruptive correctly defined and exemplified (2)',
      ],
    },
  ],

  videos: [],
};
