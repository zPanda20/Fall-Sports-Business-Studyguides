export const fiveForcesTopic = {
  id: 'five-forces',
  course: 'strategy',
  title: "Porter's Five Forces & industry analysis",
  sessions: 'Session 3',
  reading: 'Readings are posted on Boostcamp',
  minutes: 20,
  summary:
    'A checklist for judging how much profit an industry lets its companies keep, and where the pressure comes from.',

  simple: [
    'Before choosing a strategy, ask a bigger question: **is this a good industry to be in?** Porter\'s Five Forces is a way to answer it. It looks at five pressures that squeeze, or protect, the profits of every company in an industry.',
    'It analyses the **industry**, not one firm. A strong team in a brutal industry still struggles, while an average team in a friendly one can do well. The model tells you how attractive the playing field is and where the pressure is coming from.',
    'The stronger a force is, the harder it pushes profits down. So you rate each force **high, medium or low**, and "high" is bad news for the firms already in the industry.',
    'The five forces are: the threat of **new entrants**, the bargaining power of **suppliers**, the bargaining power of **buyers**, the threat of **substitutes**, and **rivalry** among existing competitors. Some textbooks add a sixth, **complements** (products that make yours more valuable). Check which version your instructor uses.',
  ],

  forces: [
    {
      name: 'Threat of new entrants',
      question: 'How easily can newcomers join and compete for the same money?',
      strongWhen:
        'Entry is cheap and there are few barriers: little capital needed, no licences or limited slots, no strong brand loyalty to overcome.',
      sports:
        'Barriers in sport include franchise fees, a capped number of league slots, stadium access and fan loyalty built over decades.',
    },
    {
      name: 'Bargaining power of suppliers',
      question: 'Can the companies that sell you inputs push up their prices?',
      strongWhen:
        'There are few suppliers, no good alternatives to their input, and switching away is costly.',
      sports:
        'Examples: a sole tyre or engine supplier, a league that controls the talent pipeline, a stadium owner with no rival venue.',
    },
    {
      name: 'Bargaining power of buyers',
      question: 'Can your customers push your prices down or demand more for the same money?',
      strongWhen:
        'There are few, large buyers, many alternative sellers to choose from, and the buyers are sensitive to price.',
      sports:
        'Examples: broadcasters bidding for rights, a title sponsor funding a big share of a budget, fans choosing between several teams.',
    },
    {
      name: 'Threat of substitutes',
      question: 'Can customers get the same benefit from a different kind of product?',
      strongWhen:
        'Alternatives are cheap, easy to switch to and meet the same need, even if they look nothing like your product.',
      sports:
        'Examples: other sports, streaming shows, video games and short-form video all compete for the same free evening.',
    },
    {
      name: 'Rivalry among existing competitors',
      question: 'How hard do the current players fight each other?',
      strongWhen:
        'There are many or equally matched rivals, slow growth, high fixed costs and little difference between products.',
      sports:
        'Teams fight on the field and also off it for sponsors, talent and fans. When prize money is shared by results, one team\'s gain is another\'s loss.',
    },
  ],

  pitfalls: [
    'Analysing one company instead of the **industry**. Five Forces asks about the whole playing field.',
    'Treating "high" as good. A high force means more pressure on profits.',
    'Listing forces without rating them. The point is to judge how strong each one is, and why.',
    'Stopping at the diagram. The useful part is what the result means for the firm\'s strategy.',
  ],

  terms: [
    {
      term: 'Industry',
      def: 'A group of firms that offer similar products or services and compete for the same customers.',
    },
    {
      term: 'Industry attractiveness',
      def: 'How much profit the average firm in an industry can expect to keep. The Five Forces judge this.',
    },
    {
      term: 'Barrier to entry',
      def: 'Anything that makes it hard or expensive for a newcomer to join an industry: capital, licences, brand loyalty, scarce access.',
    },
    {
      term: 'Supplier power',
      def: 'The ability of input providers to raise prices or lower quality, taking profit from the firms that buy from them.',
    },
    {
      term: 'Buyer power',
      def: 'The ability of customers to push prices down or demand more value, taking profit from the firms that sell to them.',
    },
    {
      term: 'Substitute',
      def: 'A product from a different industry that meets the same customer need.',
    },
    {
      term: 'Rivalry',
      def: 'The intensity of competition among the firms already in the industry.',
    },
    {
      term: 'Switching costs',
      def: 'The money, time or effort it costs a buyer (or a firm) to change to a different provider.',
    },
    {
      term: 'Complement',
      def: 'A product or service that makes another one more valuable when used together. Added as a sixth force in some textbooks.',
    },
  ],

  cards: [
    {
      front: 'List the five forces',
      back: 'New entrants, supplier power, buyer power, substitutes, rivalry among existing competitors.',
    },
    {
      front: 'What does a HIGH rating mean for a force?',
      back: 'Strong pressure on profits. It is bad news for the firms in the industry.',
    },
    {
      front: 'What does Five Forces analyse: the firm or the industry?',
      back: 'The industry. It judges how attractive the industry is, not how good one company is.',
    },
  ],

  example: {
    title: 'Kestrel Racing, a fictional motorsport team',
    universe: 'kestrel',
    blocks: [
      {
        type: 'p',
        text: '**Kestrel Racing** is a fictional team in the **Continental Open-Wheel Series**, a made-up championship with exactly 10 teams. Every team buys its engines from one of two manufacturers and its tyres from a single supplier. The Series sells the TV rights as one package and shares prize money according to finishing position. A new team must pay a $200M entry fee to join. Here is how the industry looks to Kestrel.',
      },
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
            why: 'Two engine makers and one tyre supplier serve the whole Series. Teams cannot walk away, so suppliers can raise prices and Kestrel has little choice but to pay.',
          },
          {
            name: 'Buyer power',
            rating: 'Medium',
            why: 'A handful of global brands fund most of the sponsorship. They can choose between 10 teams, and they can spend elsewhere. But only 10 teams offer this audience, which keeps some bargaining power with the teams.',
          },
          {
            name: 'Threat of substitutes',
            rating: 'Medium',
            why: 'Sponsors and fans can shift budgets and attention to other sports, sim racing and creator content. Racing has a loyal base, but younger audiences split their time.',
          },
          {
            name: 'Rivalry',
            rating: 'High',
            why: 'Ten teams chase the same sponsors, drivers and prize money. Prize money is split by results, so one team\'s gain is another team\'s loss.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Reading the result',
        text: 'The industry is a mixed picture. Strong entry barriers protect existing teams, but powerful suppliers and fierce rivalry squeeze profits. Kestrel\'s strategy should focus on the two forces it can influence: reduce its dependence on suppliers (for example with a long-term deal), and stand out to sponsors (for example with a unique digital audience) so rivalry and buyer power matter less.',
      },
    ],
  },

  questions: [
    {
      id: 'q1',
      type: 'mcq',
      q: 'A racing series allows only 10 teams and charges a very large entry fee. Which force does this mainly weaken?',
      options: [
        'Threat of new entrants',
        'Supplier power',
        'Buyer power',
        'Threat of substitutes',
      ],
      answer: 0,
      explanation:
        'Limited slots and a large entry fee are barriers to entry, so newcomers find it hard to join. That keeps the threat of new entrants low.',
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Every team must buy engines from one of two manufacturers, who set the price. Which force is strong?',
      options: ['Rivalry', 'Supplier power', 'Buyer power', 'Threat of new entrants'],
      answer: 1,
      explanation:
        'Few suppliers, no real alternatives and costly switching add up to strong supplier power. The suppliers can take a share of team profits through higher prices.',
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Fans increasingly spend free evenings on video games and short-form video instead of watching races. Which force does this describe?',
      options: [
        'Threat of substitutes',
        'Rivalry among existing competitors',
        'Supplier power',
        'Barriers to entry',
      ],
      answer: 0,
      explanation:
        'Video games and short-form video come from different industries but meet a similar need, entertainment. That is the threat of substitutes.',
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A single title sponsor provides 60% of a team\'s budget and says it may move to a rival team. Which force is at work?',
      options: ['Buyer power', 'Supplier power', 'Threat of substitutes', 'Barriers to entry'],
      answer: 0,
      explanation:
        'The sponsor is a customer of the team, and it is large and can walk away. A big buyer with alternatives has strong bargaining power.',
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which statement about the Five Forces is correct?',
      options: [
        'It tells a firm exactly which strategy to choose.',
        'It judges the profit potential of an industry, not one company.',
        'A high rating on a force is good news for firms already in the industry.',
        'It measures a firm\'s internal resources and capabilities.',
      ],
      answer: 1,
      explanation:
        'Five Forces is an industry-level tool. It informs strategy but does not choose it. A high force means more pressure on profits, and internal resources are the focus of tools like VRIO.',
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. Kestrel\'s sponsorship revenue falls 15% after a major sponsor leaves for a rival team. Using the Five Forces, explain two forces that make keeping sponsors difficult and suggest one strategic move.',
      answer: [
        '**Buyer power.** Sponsors are few and large, and they can choose between 10 teams. This gives them leverage over price and terms.',
        '**Rivalry.** Teams compete directly for the same sponsors, and the sponsor that left chose a competitor. Rivals can win deals by discounting or offering more exposure.',
        '**Possible move.** Sign multi-year agreements with performance-linked terms, and offer sponsors something rivals cannot easily copy, such as exclusive digital content and a growing online audience. This makes Kestrel harder to replace and eases the pressure from both forces.',
      ],
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
