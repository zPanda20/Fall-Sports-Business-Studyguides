// Business Strategy, Session 6: competitive advantage, firm performance and business models.
// Built from the lecture slides titled "Shared Value, Competitive Advantage and Business Models".
// Company statistics in the first two plain-word slides are the figures given on those slides.
// Real-example facts: NFL Sunday Ticket moving to YouTube TV, as reported by NBC News (see sources slide).

export const performanceBusinessModelsTopic = {
  id: 'performance-business-models',
  course: 'strategy',
  title: 'Competitive advantage, firm performance and business models',
  sessions: 'Session 6',
  reading: 'Session 6 slides (file titled “Session 5 - Business Models and Shared Value”)',
  minutes: 35,
  summary:
    'How a firm can earn profit while doing good, how to measure performance beyond profit, and how a business model turns strategy into action.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Creating shared value (CSV)',
      blocks: [
        {
          type: 'big',
          text: 'Policies that make the firm **more competitive** while **improving society**, built into core strategy.',
        },
        {
          type: 'bullets',
          items: [
            'It is **not philanthropy**. It sits in the core business.',
            'It serves **both shareholders and society**.',
            'It builds advantage: more **differentiation** (higher willingness to pay), better **cost efficiency** (less waste), stronger **intangibles** (brand, reputation, trust), and **new markets** that rivals ignore.',
          ],
        },
      ],
    },
    {
      kicker: 'Two examples',
      title: 'Too Good To Go and Back Market',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Too Good To Go',
              text: 'An app where shops sell unsold food as “Surprise Bags” at about a third of the price. Shops earn from food they would have binned. The company takes a fee per bag plus a yearly partner fee. The slide cites 500+ million meals saved and 120 million users in 19 countries.',
            },
            {
              title: 'Back Market',
              text: 'A Paris-based marketplace for refurbished phones and laptops with a one-year warranty. It takes about 10% commission. The slide cites 17 million customers, over €3bn of sales in 2025, and a company estimate of 2+ billion kg of CO2 avoided.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Both turn what others treat as **waste** into a new market.',
        },
      ],
    },
    {
      kicker: 'CSV or CSR?',
      title: 'Why these are shared value, not CSR',
      blocks: [
        {
          type: 'bullets',
          items: [
            'The social benefit **is the business**: every bag or device sold creates value for society and profit for the firm.',
            'They do **not** depend on a CSR budget or on PR.',
            'A CSR version would look different, for example a supermarket donating a share of profit to a food bank.',
          ],
        },
        {
          type: 'callout',
          title: 'A question to think about',
          text: 'Can these firms sustain their advantage as rivals copy them? Use VRIO and the idea of sustained advantage.',
        },
      ],
    },
    {
      kicker: 'Measuring performance',
      title: 'The balanced scorecard',
      blocks: [
        {
          type: 'p',
          text: 'The scorecard helps managers reach strategic objectives using **financial and non-financial** measures, internal and external. It asks four questions.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Financial', text: 'How do we generate more profit for shareholders?' },
            { title: 'Customer', text: 'How do customers see us?' },
            { title: 'Internal processes', text: 'What must we excel at?' },
            { title: 'Learning and growth', text: 'Can we continue to improve and create value?' },
          ],
        },
      ],
    },
    {
      kicker: 'Measuring performance',
      title: 'The triple bottom line',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Profits', text: 'The economic dimension.' },
            { title: 'People', text: 'The social dimension.' },
            { title: 'Planet', text: 'The ecological dimension.' },
          ],
        },
        {
          type: 'p',
          text: 'Judge performance on all three, not profit alone.',
        },
      ],
    },
    {
      kicker: 'Strategy into action',
      title: 'What is a business model?',
      blocks: [
        {
          type: 'p',
          text: 'A **business model** details the tactics and initiatives the firm uses to deliver value: its target market, customer needs, and how its offering meets them. Simply put, **how the firm intends to make money**. Getting it right is critical to gaining and sustaining advantage.',
        },
        {
          type: 'table',
          caption: 'The four questions of the business model framework',
          head: ['Question', 'What it asks'],
          rows: [
            ['Why?', 'Why does the model create value? (the revenue and cost models)'],
            ['What?', 'What activities must be performed to create and deliver the offering?'],
            ['Who?', 'Who are the main stakeholders performing the activities?'],
            ['How?', 'How are the offerings created? (the linking of activities)'],
          ],
        },
      ],
    },
    {
      kicker: 'One company, four answers',
      title: 'Microsoft’s pivot to subscriptions',
      blocks: [
        {
          type: 'table',
          head: ['', 'Microsoft'],
          rows: [
            ['Why', 'A move from one-time software licenses to cloud-first, AI-first subscriptions (Microsoft 365): customers always have the latest version and Microsoft earns steady recurring revenue.'],
            ['What', 'Software rewritten for the cloud, Office opened to iOS, Android and Linux, Azure at the core, and $10bn+ invested in OpenAI.'],
            ['Who', 'Individual consumers and more profitable business clients.'],
            ['How', 'R&D and support moved to the cloud and AI, dedicated AI and cloud divisions, a global data-center network, and agile development.'],
          ],
        },
        {
          type: 'p',
          text: 'The result: revenue lines up with costs, less piracy, and a better customer experience.',
        },
      ],
    },
    {
      kicker: 'A menu of models',
      title: 'Eight popular business models',
      blocks: [
        {
          type: 'table',
          head: ['Model', 'How it works', 'Example from class'],
          rows: [
            ['Razor–razor blades', 'Sell the main product cheaply; profit on the repeat purchase', 'Gillette razors and cartridges; HP printers and ink'],
            ['Subscription', 'Customers pay for access over a period, used or not. Key metric: churn', 'Netflix, Microsoft 365, gyms'],
            ['Pay-as-you-go', 'Pay only for what you use', 'Utilities, car rental, cloud computing'],
            ['Freemium', 'Basic version free, premium paid. Works when serving one more user costs almost nothing', 'News paywalls, video games'],
            ['Ultra-low cost', 'Basic service at a very low price, extras sold at a premium', 'Ryanair, AirAsia, Spirit'],
            ['Wholesale', 'Producer sells at a fixed price to retailers, who set the shelf price', 'Traditional book publishing'],
            ['Agency', 'An agent sells for a commission; the producer often sets the price', 'Talent agents, Apple App Store (Apple keeps 30%)'],
            ['Bundling', 'Sell products with negatively correlated demand together at a discount', 'Microsoft Office suite'],
          ],
        },
      ],
    },
    {
      kicker: 'Innovation',
      title: 'Business model innovation',
      blocks: [
        {
          type: 'p',
          text: '**Business model innovation** is a novel, practical way to deliver value to customers. It complements product innovation, makes imitation harder, and so extends competitive advantage. Examples: Airbnb, Amazon, Apple, Netflix, Tinder, Uber.',
        },
        {
          type: 'table',
          caption: 'Dollar Shave Club versus Gillette',
          head: ['', 'Gillette', 'Dollar Shave Club'],
          rows: [
            ['Model', 'Razor–razor blades, with incremental innovation from one blade to six', 'Online subscription by mail order'],
            ['Start', 'Established incumbent', '$8,000 start-up budget; a razor and five cartridges for $1 a month'],
            ['Outcome', 'Launched its own shave club and cut prices by up to 20%; market share fell by about half (2022)', 'Bought by Unilever for $1bn (2016)'],
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
            'Calling any charitable program shared value. CSV is part of **core strategy** and creates business value.',
            'Using profit as the only measure of performance.',
            'Mixing up a business model (**how the firm makes money**) with the strategy (**how it wins**).',
            'Mixing up **freemium** (core product free) and **ultra-low cost** (core product cheap).',
            'Assuming a new model lasts forever. Rivals copy it.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Creating shared value (CSV)', def: 'Policies and practices that enhance a firm’s competitiveness while advancing societal conditions, built into core strategy.' },
    { term: 'CSR', def: 'Corporate social responsibility, usually a separate budget or program. Different from CSV, where the social benefit is part of the business itself.' },
    { term: 'Balanced scorecard', def: 'A tool that tracks financial, customer, internal-process, and learning-and-growth measures to reach strategic objectives.' },
    { term: 'Triple bottom line', def: 'Performance measured on three dimensions: profits (economic), people (social) and planet (ecological).' },
    { term: 'Business model', def: 'How a firm turns strategy into action to deliver value to customers and make money.' },
    { term: 'Business model framework', def: 'Four questions: Why (does the model create value), What (activities), Who (stakeholders) and How (how offerings are created).' },
    { term: 'Razor–razor blades', def: 'Sell the initial product cheaply or at a loss and earn on the complementary replacement product.' },
    { term: 'Subscription', def: 'Customers pay for access over a period whether or not they use it. Churn is the key metric.' },
    { term: 'Pay-as-you-go', def: 'Customers pay only for the services they use.' },
    { term: 'Freemium', def: 'Basic features are free and premium features are paid.' },
    { term: 'Ultra-low cost', def: 'A basic service at a very low price, with extras sold at a premium.' },
    { term: 'Wholesale', def: 'A producer sells to retailers at a fixed price and the retailers set the shelf price.' },
    { term: 'Agency', def: 'An agent sells the product for a predetermined commission, and the producer often controls the retail price.' },
    { term: 'Bundling', def: 'Selling products with negatively correlated demand together at a discount.' },
    { term: 'Business model innovation', def: 'A novel and practical way to deliver value to customers, which raises barriers to imitation.' },
  ],
  cards: [
    { front: 'CSV vs CSR', back: 'CSV: the social benefit is part of the core business and creates profit. CSR: usually a separate budget or PR effort.' },
    { front: 'The four balanced scorecard perspectives', back: 'Financial, customer, internal processes, learning and growth.' },
    { front: 'The three Ps of the triple bottom line', back: 'Profits, People, Planet.' },
    { front: 'The business model framework', back: 'Why, What, Who, How.' },
    { front: 'Freemium vs ultra-low cost', back: 'Freemium: the core product is free, premium is paid. Ultra-low cost: the core product is cheap and extras cost more.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'NFL Sunday Ticket: a subscription changes hands',
    note: 'In December 2022 the NFL moved its Sunday Ticket package to YouTube TV. Facts are as reported by NBC News at the time.',
    slides: [
      {
        kicker: 'Real example',
        title: 'A new home for Sunday Ticket',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Previous holder', value: 'DirecTV', note: 'since the package began in 1994' },
              { label: 'DirecTV paid', value: '$1.5bn a year', note: 'since the 2014 renewal' },
              { label: 'YouTube deal', value: '≈ $2bn a year', note: 'reported, from the 2023–24 season' },
            ],
          },
          {
            type: 'p',
            text: 'In December 2022 the NFL announced that Sunday Ticket would move from DirecTV, which did not bid to keep it, to YouTube TV.',
          },
        ],
      },
      {
        kicker: 'The business model lens',
        title: 'Four questions about the model',
        blocks: [
          {
            type: 'table',
            head: ['Question', 'What the report supports'],
            rows: [
              ['Why', 'A **subscription**: revenue from fans who pay for the package. The distributor pays the league for the rights, reported at roughly $2bn a year.'],
              ['What', 'The Sunday Ticket package, delivered over the internet.'],
              ['Who', 'The league (rights holder), the distributor (YouTube) and subscribers.'],
              ['How', 'Sold as an add-on to YouTube TV, or as a standalone choice on YouTube Primetime Channels.'],
            ],
          },
          {
            type: 'p',
            text: 'When the deal was announced, pricing had not been set and commercial rights were still being worked out.',
          },
        ],
      },
      {
        kicker: 'Take-away',
        title: 'What this shows',
        blocks: [
          {
            type: 'bullets',
            items: [
              'The **same product** (a package of games) can be sold through different **distributors**. The business model, not just the content, shapes the value.',
              'Moving from satellite to streaming is a change in the **How**: how the offering reaches the customer.',
              'A sports-rights deal is a **business model decision**: who sells, to whom, and at what price.',
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            title: 'Dated figures',
            text: 'These figures are from December 2022. Prices and terms have since changed, so check a current source before relying on them.',
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
                title: 'NFL Sunday Ticket goes to YouTube in $2 billion annual deal (NBC News)',
                url: 'https://www.nbcnews.com/business/business-news/nfl-sunday-ticket-available-youtube-in-2-billion-annual-deal-rcna62939',
                note: 'December 2022. The move from DirecTV, the reported roughly $2bn annual value, DirecTV’s $1.5bn a year, and how the package is sold. The business model reading is ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Kestrel Racing’s business model',
    universe: 'kestrel',
    slides: [
      {
        kicker: 'Shared value',
        title: 'Retired parts, a new market',
        blocks: [
          {
            type: 'p',
            text: 'Kestrel retires carbon-fiber parts long before they are worn out. It starts selling them to grassroots teams at about a third of the new price.',
          },
          {
            type: 'columns',
            items: [
              { title: 'Value for society', text: 'Young drivers get affordable parts. Less composite waste.' },
              { title: 'Value for the business', text: 'Revenue from parts that were costs to dispose of, and goodwill among future fans and drivers.' },
            ],
          },
          {
            type: 'p',
            text: 'The benefit **is the business**, so this is shared value, not a donation.',
          },
        ],
      },
      {
        kicker: 'Performance',
        title: 'Kestrel’s balanced scorecard',
        blocks: [
          {
            type: 'table',
            head: ['Perspective', 'Question', 'Measure'],
            rows: [
              ['Financial', 'Are we profitable?', 'Operating margin, sponsorship income'],
              ['Customer', 'How do sponsors and fans see us?', 'Sponsor renewal rate, online audience'],
              ['Internal processes', 'What must we excel at?', 'Pit-stop time, upgrade lead time'],
              ['Learning and growth', 'Can we keep improving?', 'Simulation engineers hired, training hours'],
            ],
          },
          {
            type: 'p',
            text: 'Adding a triple-bottom-line view: people (crew safety, young-driver program) and planet (freight emissions).',
          },
        ],
      },
      {
        kicker: 'Business model',
        title: 'A fan membership',
        blocks: [
          {
            type: 'p',
            text: 'Kestrel launches **Kestrel Pass**: **$8 a month** for live race data, behind-the-scenes video and early merchandise access. Highlight clips stay free (a **freemium** layer).',
          },
          {
            type: 'table',
            head: ['Question', 'Kestrel Pass'],
            rows: [
              ['Why', 'Recurring revenue. At 20,000 members, $8 × 20,000 × 12 = $1.92M a year.'],
              ['What', 'Live data, exclusive video, early merchandise access.'],
              ['Who', 'The data team, the content studio, drivers, and members.'],
              ['How', 'A streaming platform fed directly by garage sensors.'],
            ],
          },
          {
            type: 'p',
            text: 'The key number to watch is **churn**: how many members cancel each month.',
          },
        ],
      },
      {
        kicker: 'Other models',
        title: 'Which model is which?',
        blocks: [
          {
            type: 'table',
            head: ['Kestrel idea', 'Model'],
            rows: [
              ['Sell a cheap starter fan kit, earn on replacement parts and upgrades', 'Razor–razor blades'],
              ['Free highlight clips, paid live data', 'Freemium'],
              ['Sell a sponsorship package that includes logo, content and data together at a discount', 'Bundling'],
              ['Pay per downloaded race dataset', 'Pay-as-you-go'],
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
      q: 'A supermarket donates 1% of profit to a local food bank. A different company runs an app that sells restaurants’ unsold food at a third of the price. Which is creating shared value?',
      options: [
        'The app: the social benefit is the business itself',
        'The supermarket: donating always counts as shared value',
        'Both, because both help society',
        'Neither',
      ],
      answer: 0,
      explanation: 'Shared value is built into the core business, so every sale creates both social and business value. A donation from profit is closer to CSR.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which balanced scorecard perspective asks “Can we continue to improve and create value?”',
      options: ['Learning and growth', 'Financial', 'Customer', 'Internal processes'],
      answer: 0,
      explanation: 'Learning and growth covers the ability to keep improving and innovating. The financial view asks about profit for shareholders.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Microsoft moved from one-time software licenses to Microsoft 365 subscriptions. Which business model is this?',
      options: ['Subscription', 'Razor–razor blades', 'Wholesale', 'Agency'],
      answer: 0,
      explanation: 'Customers pay a recurring fee for access instead of buying a license once. The key metric for such a model is churn.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A budget airline sells a very cheap seat and charges extra for bags, seats and upgrades. This is…',
      options: ['Ultra-low cost', 'Freemium', 'Bundling', 'Agency'],
      answer: 0,
      explanation: 'The core product is cheap rather than free and extras are sold at a premium. In freemium the core product is free.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'In the business model framework, “Who are the main stakeholders performing the activities?” is which question?',
      options: ['Who', 'Why', 'What', 'How'],
      answer: 0,
      explanation: 'Why is the value creation (revenue and cost), What is the activities, Who is the stakeholders performing them, and How is how the offerings are created.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. Kestrel Pass costs $8 a month and has 20,000 members. (a) What is the annual revenue? (b) What happens to revenue if churn means 2,000 members leave and none join? (c) Which business model does this follow, and what is its key metric?',
      answer: [
        '**(a)** $8 × 20,000 × 12 = **$1,920,000** a year.',
        '**(b)** 18,000 members × $8 × 12 = **$1,728,000**, which is $192,000 lower.',
        '**(c)** A **subscription** model. The key metric is **churn**.',
      ],
      review: { section: 'sports', slide: 2 },
    },
  ],

  videos: [],
};
