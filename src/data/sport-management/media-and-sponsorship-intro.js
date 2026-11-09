// Foundations of Sport Management, Lecture 7 and the guest speaker's media rights session (Session 7):
// the history and pricing of media rights, streamers entering live sport, and the start of sports sponsorship.
// Built from the guest speaker's slides (history, viewer ranges, price factors, Amazon and Netflix, current topics) and the
// first half of the Lecture 7 sponsorship slides (definition, scope, who sponsors, why brands sponsor).
// Guest-slide facts are labeled as such. Real examples: Netflix and WWE, and the FIFA World Cup 2026. The Summit numbers are made up.

export const mediaAndSponsorshipIntroTopic = {
  id: 'media-and-sponsorship-intro',
  course: 'sport-management',
  title: 'Sports media (continued) and an introduction to sponsorship',
  sessions: 'Session 7',
  reading: 'Guest speaker slides on media rights; Lecture 7 slides (sports sponsorship)',
  minutes: 40,
  summary:
    'How media rights grew from one film in 1896 to streaming giants, what sets their price, and the first half of sponsorship: what it is, how big it is, who sponsors and why.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'A short history',
      title: 'Sport has always followed the technology',
      blocks: [
        {
          type: 'p',
          text: 'The guest speaker walked through the history. Each new technology changed **who pays**, **who watches** and **which events get shown**. (Dates and details below are as shown in the guest slides.)',
        },
        {
          type: 'table',
          head: ['Year', 'Step', 'Why it matters'],
          rows: [
            ['1896', 'First sports film: a horse race, one camera', 'Sport meets moving pictures'],
            ['1921', 'First live radio report of a boxing match', 'Live audio makes events a shared moment'],
            ['1929 to 1930', 'First license fee: BBC pays 100 pounds for the FA Cup final', 'The first time a broadcaster pays for access'],
            ['1936', 'Berlin Olympics: 28 TV rooms and about 150,000 viewers', 'TV starts to become a mass medium'],
            ['1958', 'First commercial breaks in NFL games. CBS paid $4.5M a season in 1962', 'Advertising pays for the rights'],
            ['1964', 'First satellite broadcast, from the Tokyo Olympics', 'Events reach a worldwide audience'],
            ['1965', 'First paid TV: Ali against Cooper', 'Fans start paying directly'],
            ['1972', 'First color TV at the Munich Olympics. HBO begins pay TV in the US', 'New formats, new revenue'],
            ['2000', 'First live sport video on a mobile phone', 'Sport moves to the screen in your pocket'],
            ['2006', 'HD TV for football', 'Quality drives value'],
          ],
        },
        {
          type: 'callout',
          title: 'A useful story: pay TV in 1972',
          text: 'In November 1972, **365 people** watched an HBO hockey game, and a survey on willingness to pay for pay TV said **no** (99%). Within a few years a title fight drew **100,000 subscribers**. Early demand does not predict later demand.',
        },
      ],
    },
    {
      kicker: 'What sets the price',
      title: 'Why one right costs more than another',
      blocks: [
        {
          type: 'p',
          text: 'The guest speaker listed the factors that influence the price of media rights. The lecture review names seven of them.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Demand side', text: '**Audience numbers**, **advertising bookings**, **refinancing options** (can the buyer earn the money back?), **economic power** of buyers.' },
            { title: 'Event side', text: '**Tradition**, **national heroes**, **time** (when it airs) and **program strategies**.' },
            { title: 'Market side', text: '**Competitive situation** (how many buyers), the **previous price** and any **commercial restrictions**.' },
          ],
        },
        {
          type: 'bars',
          title: 'Wimbledon German TV fee, as shown in the guest slides',
          unit: '€M',
          items: [
            { label: '2008 (DSF)', value: 0.2 },
            { label: '2011 (Sky)', value: 0.5 },
            { label: '2014 to 2018 (IMG and Sky)', value: 0.75 },
            { label: 'Latest line (Amazon)', value: 2.0 },
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Read the Wimbledon table with care',
          text: 'The guest slide labels the Amazon line 2022. Independent reporting says Amazon Prime Video won Wimbledon in Germany and Austria in December 2023, for four years from 2024, and does not state a fee. Use the table to see the **trend** (about ten times higher than 2008), not the exact year or amount.',
        },
      ],
    },
    {
      kicker: 'The biggest audiences',
      title: 'Event audiences in the guest slides',
      blocks: [
        {
          type: 'bars',
          title: 'Global audience for major events (guest slides)',
          unit: 'million viewers',
          items: [
            { label: 'Olympic opening, Beijing 2008', value: 1120 },
            { label: 'World Cup final, Brazil 2014', value: 1100 },
            { label: 'Euro final, Ukraine 2012', value: 299 },
            { label: 'Champions League final, Berlin 2015', value: 199 },
            { label: 'Super Bowl, Phoenix 2015', value: 160 },
            { label: 'Cricket World Cup final, Mumbai 2011', value: 150 },
          ],
        },
        {
          type: 'bullets',
          items: [
            'The Super Bowl’s 160 million included about **115 million in the USA**, so roughly 72% of the audience is domestic.',
            'The cricket final’s 150 million included about **135 million in India**, about 90% domestic.',
            'The lesson: some properties are **global**, others depend on one **home market**. That shapes how rights are sold.',
          ],
        },
      ],
    },
    {
      kicker: 'New buyers',
      title: 'The streamers: Amazon and Netflix',
      blocks: [
        {
          type: 'p',
          text: 'The guest speaker described OTT as starting with the Netflix revolution and now attracting “the giants”. Two examples from the slides:',
        },
        {
          type: 'table',
          head: ['Buyer', 'What happened (guest slides)'],
          rows: [
            ['Amazon Prime Video', 'Paid about $75M a year for a non-exclusive NFL contract, then took Thursday Night Football exclusively: 15 games a season at about $1 billion a season, “the biggest commitment in the sports rights space”'],
            ['Netflix', 'Live NFL games on Christmas Day 2024, a Jake Paul and Mike Tyson fight (over 60 million households), WWE Raw in a deal reported at about $5 billion, and US rights to the next two FIFA Women’s World Cups'],
          ],
        },
        {
          type: 'callout',
          title: 'Check the jump',
          text: '$1 billion against $75 million is about **13 times** more. A streamer wants live events because they bring subscribers and keep them.',
        },
      ],
    },
    {
      kicker: 'Current topics',
      title: 'More matches, less money per match',
      blocks: [
        {
          type: 'p',
          text: 'The guest speaker showed the **FIFA World Cup 2026**: a bigger tournament with a bigger media deal, but each match is worth less.',
        },
        {
          type: 'table',
          head: ['Measure', '2022', '2026'],
          rows: [
            ['Teams', '32', '48'],
            ['Matches', '64', '104'],
            ['Forecast total revenue', '$5.8B', '$8.9B (+54%)'],
            ['Media rights', 'Base year', '+32% (about +$1B)'],
            ['Rights value per match', 'Base year', '−19%'],
          ],
        },
        {
          type: 'steps',
          items: [
            'Matches rose from 64 to 104: 104 ÷ 64 = **1.625** times as many.',
            'Rights income rose 1.32 times.',
            'Per match: 1.32 ÷ 1.625 = **0.81**, so each match is worth about **19% less**.',
          ],
        },
        {
          type: 'p',
          text: 'The guest slides add two audience numbers: the **Super Bowl 2025** reached 14.5 million viewers across Tubi, Telemundo and the NFL’s digital offerings (13.6 million on Tubi alone), and **NBCUniversal averaged 23.5 million viewers** for the Milano Cortina Winter Games, up 96%.',
        },
      ],
    },
    {
      kicker: 'Sponsorship',
      title: 'What sponsorship is',
      blocks: [
        {
          type: 'big',
          text: '**Sports sponsorship** is the provision of funds or other forms of support to an athlete, team, association, venue or event, in return for rights and associations for commercial return.',
        },
        {
          type: 'bullets',
          items: [
            'It is **marketing through sport**, the second of the three sectors of sports marketing.',
            'The promotional tools are the **athletes, teams, leagues or events**. The investor is a body **other than the property owner**.',
            'Third-party agencies are often central to the strategy and execution.',
            'For a sports property it is a major revenue source. For a company it is a marketing tool to reach a target audience.',
            'Sponsorship is one promotional tool within a brand’s **integrated marketing** strategy.',
          ],
        },
      ],
    },
    {
      kicker: 'How big it is',
      title: 'The scope of sports sponsorship',
      blocks: [
        {
          type: 'bars',
          title: 'Global sport sponsorship spend',
          unit: '$B',
          items: [
            { label: '2025 (Statista, per the lecture)', value: 100 },
            { label: '2030 forecast (Brandessence, per the lecture)', value: 190 },
          ],
        },
        {
          type: 'table',
          head: ['Property', 'Sponsorship figure in the lecture'],
          rows: [
            ['Olympic Games TOP program, 2021 to 2024', '$3 billion (IOC)'],
            ['NFL, 2024 season', '$2.4 billion (Sportspromedia)'],
            ['NBA, 2024/25 season', '$1.6 billion (Sportspromedia)'],
            ['Top 5 European football leagues, 2024', '$5.4 billion (KPMG)'],
            ['Formula 1, 2024', '22 sponsors worth over $2 billion (Sportcal)'],
            ['Top 50 athlete endorsement deals, 2024', 'Over $1 billion (Forbes)'],
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Forecasts are not facts',
          text: '$100B to $190B in five years means about **14% growth a year**. That is one research firm’s forecast, so treat it as a claim to question. Also note that the figures above cover different periods (one season, four years), so do not add them up.',
        },
      ],
    },
    {
      kicker: 'Who sponsors, and why',
      title: 'Eight reasons brands sponsor sport',
      blocks: [
        {
          type: 'p',
          text: 'Top sponsoring industries in the lecture: **financial**, **beverages**, **automotive**, **sports apparel**, **telecommunications**, **technology and consumer electronics**, **cryptocurrency** and **sports betting**.',
        },
        {
          type: 'table',
          head: ['Reason', 'What the brand wants'],
          rows: [
            ['1 Increase sales', 'Launch products, add markets and consumers'],
            ['2 Brand awareness', 'Visibility and exposure through positive association, with global reach'],
            ['3 Brand or corporate image', 'Link to the values and excellence of the team, athlete or event'],
            ['4 Activation', 'Extensive rights to run campaigns and tell stories'],
            ['5 Customer relations', 'Hospitality to meet and do business with clients'],
            ['6 Employee relations', 'Pride, loyalty and motivation'],
            ['7 Community relations', 'Show the company cares about its community'],
            ['8 Competitive threats', 'Meet or block rivals'],
          ],
        },
        {
          type: 'callout',
          title: 'What good looks like',
          text: 'Effective sponsorship enhances the **finances, brand or stature** of the sponsor in a **cost-effective** way by reaching its target through the sponsorship’s activities. The lecture adds that **81% of consumers** see sports sponsorship as one of the most trusted channels of advertising (Nielsen).',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Sports sponsorship', def: 'Funds or other support given to an athlete, team, association, venue or event in return for rights and associations for commercial return.' },
    { term: 'Marketing through sport', def: 'Using sport to promote products or services, whether or not they relate to sport. Also called sport sponsorship.' },
    { term: 'Refinancing', def: 'How a media buyer earns back what it paid for the rights, usually through advertising and subscriptions.' },
    { term: 'Competitive situation', def: 'How many serious bidders there are for a right. More bidders usually means a higher price.' },
    { term: 'Per-match value', def: 'Total rights income divided by the number of matches.' },
    { term: 'OTT streamer', def: 'A service that delivers content over the internet, such as Netflix or Amazon Prime Video.' },
    { term: 'Integrated marketing', def: 'Using several promotional tools together, with sponsorship as one of them.' },
    { term: 'ROI', def: 'Return on investment: the gain from an investment compared with its cost.' },
    { term: 'Activation', def: 'Campaigns and activities a sponsor runs to make use of its sponsorship rights.' },
  ],
  cards: [
    { front: 'Name four factors that affect the price of media rights', back: 'Tradition, audience numbers, economic power, refinancing options, national heroes, competitive situation, time (any four).' },
    { front: 'Why did World Cup 2026 per-match value fall 19%?', back: 'Matches rose from 64 to 104 (1.625 times), but rights income rose only 1.32 times. 1.32 ÷ 1.625 is about 0.81.' },
    { front: 'Definition of sports sponsorship', back: 'Funds or other support given to an athlete, team, association, venue or event in return for rights and associations for commercial return.' },
    { front: 'Which sport marketing sector is sponsorship?', back: 'Marketing through sport.' },
    { front: 'Top sponsoring industries', back: 'Financial, beverages, automotive, sports apparel, telecommunications, technology, crypto and sports betting.' },
    { front: 'Eight reasons brands sponsor sport', back: 'Sales, awareness, image, activation, customer relations, employee relations, community relations, meeting competitive threats.' },
    { front: 'What makes sponsorship effective?', back: 'It enhances the sponsor’s finances, brand or stature in a cost-effective way by reaching its target through the sponsorship’s activities.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Netflix and WWE, and the 2026 World Cup',
    note: 'Two real cases of the new media economy. Netflix and WWE: CBS News, 23 January 2024, citing Bloomberg. World Cup 2026: Caretta Research forecast reported by SVG Europe, 11 June 2026. Wimbledon: BroadbandTVNews, 15 December 2023.',
    slides: [
      {
        kicker: 'A streamer buys a weekly show',
        title: 'Netflix pays about $5 billion for WWE Raw',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Reported value', value: '$5B', note: 'paid over 10 years, per Bloomberg as reported by CBS News' },
              { label: 'Per year', value: '$500M', note: '$5B ÷ 10 years' },
              { label: 'Starts', value: 'January 2025', note: 'Raw begins airing on Netflix' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'Netflix gets **Raw**, WWE specials such as SmackDown and NXT, and premium live events such as WrestleMania and Royal Rumble. Subscribers pay nothing extra for the premium events.',
              'The article names North America and other international markets, and does not say the rights are exclusive.',
              'WWE’s contract with Comcast was nearing expiration.',
              'The TKO president called it “weekly live appointment viewing” coming to Netflix.',
            ],
          },
        ],
      },
      {
        kicker: 'Reading it',
        title: 'What the deal shows',
        blocks: [
          {
            type: 'table',
            head: ['Lecture idea', 'In the Netflix and WWE deal'],
            rows: [
              ['New buyers (OTT)', 'A streamer, not a TV network, buys a weekly live show'],
              ['Value drivers', 'Strong weekly audience, a loyal fan base and tradition'],
              ['Refinancing', 'Netflix earns it back through subscribers, not ad breaks'],
              ['Competitive situation', 'A buyer with deep pockets raises the price for everyone'],
              ['Streaming benefits', 'Direct customer relationship and viewer data'],
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            title: 'A reported number',
            text: 'The $5 billion is a press report of a private contract, not a figure either company published. Treat it as an estimate.',
          },
        ],
      },
      {
        kicker: 'More matches, lower value each',
        title: 'FIFA World Cup 2026',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Forecast revenue', value: '$8.9B', note: 'up 54% on $5.8B in 2022' },
              { label: 'Media rights', value: '+32%', note: 'about +$1B on 2022' },
              { label: 'Value per match', value: '−19%', note: '104 matches against 64' },
            ],
          },
          {
            type: 'p',
            text: 'The same research says the tournament grew from 32 to 48 teams. More matches means more rights to sell, but each one is worth less, which is why the guest speaker asked: **who gains most when rights are worth more but each match is worth less?**',
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
                title: 'Netflix to stream WWE Raw (CBS News)',
                url: 'https://www.cbsnews.com/news/netflix-wwe-raw-partnership-live-sports-streaming',
                note: 'CBS News, 23 January 2024. A $5 billion deal over 10 years per Bloomberg, Raw plus other WWE content, starting January 2025.',
              },
              {
                title: 'FIFA World Cup 2026: record revenue masks 19% per-game rights value fall and 11% broadcast deal volume drop',
                url: 'https://www.svgeurope.org/blog/headlines/fifa-world-cup-2026-record-revenue-masks-19-per-game-rights-value-fall-and-11-broadcast-deal-volume-drop/',
                note: 'SVG Europe, 11 June 2026, reporting Caretta Research. $8.9bn forecast revenue (+54% from $5.8bn), media rights +32%, rights value per game down 19%, 104 matches against 64.',
              },
              {
                title: 'Amazon secures Wimbledon German exclusive',
                url: 'https://www.broadbandtvnews.com/2023/12/15/amazon-secures-wimbledon-german-exclusive/',
                note: 'BroadbandTVNews, 15 December 2023. Exclusive Wimbledon rights in Germany and Austria for four years from 2024, previously with Sky. No fee given.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Summit and its sponsors',
    universe: 'summit',
    slides: [
      {
        kicker: 'Who pays Summit',
        title: 'Sponsor income by industry: $22 million',
        blocks: [
          {
            type: 'bars',
            title: 'Summit sponsorship income by sponsor industry',
            unit: '$M a year',
            items: [
              { label: 'Financial', value: 7 },
              { label: 'Telecommunications', value: 6 },
              { label: 'Beverage', value: 5 },
              { label: 'Automotive', value: 4 },
            ],
          },
          {
            type: 'steps',
            items: [
              '7 + 6 + 5 + 4 = **$22 million** a year.',
              'That is Summit’s whole commercial line of $22M: 22 ÷ 76 is about **29%** of revenue.',
              'Financial is the largest sponsor industry at 7 ÷ 22, about **32%**. Compare the lecture’s list: financial comes first.',
            ],
          },
        ],
      },
      {
        kicker: 'The sponsor’s side',
        title: 'Would the telecom sponsor say yes again?',
        blocks: [
          {
            type: 'p',
            text: 'A good sponsor asks for a **quantifiable return**. Summit’s telecom sponsor pays **$6 million** a year and wants new customers.',
          },
          {
            type: 'steps',
            items: [
              'Summit’s app reaches **600,000** fans. **1.5%** sign up for the sponsor’s plan: 600,000 × 0.015 = **9,000** customers.',
              'Each customer is worth **$800** over the contract: 9,000 × $800 = **$7.2 million**.',
              'Return on the $6M: ($7.2M − $6M) ÷ $6M = **20%**.',
            ],
          },
          { type: 'callout', title: 'Why this matters', text: 'If the return were below zero, the sponsor would walk. Summit’s job is to give each sponsor numbers it can defend, and the lecture’s reason 4 (activation) is how the return is created.' },
        ],
      },
      {
        kicker: 'Matching reasons to sponsors',
        title: 'Why each Summit sponsor is here',
        blocks: [
          {
            type: 'table',
            head: ['Sponsor industry', 'Main reason from the lecture'],
            rows: [
              ['Financial', 'Customer relations: hospitality to meet clients'],
              ['Telecommunications', 'Increase sales: new subscribers through the app'],
              ['Beverage', 'Brand awareness: visibility in the arena and on streams'],
              ['Automotive', 'Brand image: link to performance and local pride'],
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
      q: 'Which of these did the guest speaker list as a factor that influences the price of media rights?',
      options: [
        'The competitive situation among bidders',
        'The color of the team logo',
        'The weather on match day',
        'The number of seats in the stadium only',
      ],
      answer: 0,
      explanation: 'The factors include tradition, audience numbers, economic power, refinancing options, national heroes, competitive situation and time. More bidders usually means a higher price.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'World Cup 2026 has 104 matches against 64 in 2022, and media rights income rises 32%. What happens to the rights value per match?',
      options: ['It falls about 19%', 'It rises 32%', 'It stays the same', 'It rises 62.5%'],
      answer: 0,
      explanation: '104 ÷ 64 = 1.625. Income rose 1.32 times. 1.32 ÷ 1.625 = 0.81, so each match is worth about 19% less.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Amazon paid about $75 million a year for a non-exclusive NFL deal and then about $1 billion a season for exclusive Thursday Night Football. Roughly how many times larger is the second figure?',
      options: ['13 times', '3 times', '75 times', '1.3 times'],
      answer: 0,
      explanation: '$1,000M ÷ $75M is about 13.3.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Netflix reportedly pays $5 billion over 10 years for WWE Raw and related content. What is that per year?',
      options: ['$500 million', '$50 million', '$5 million', '$1.5 billion'],
      answer: 0,
      explanation: '$5 billion ÷ 10 = $0.5 billion a year, or $500 million.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which sector of sports marketing is sponsorship?',
      options: ['Marketing through sport', 'Marketing of sport', 'Participation in sport', 'Marketing yourself'],
      answer: 0,
      explanation: 'Marketing through sport uses sport to promote goods or services, and is also known as sport sponsorship. The investor is a body other than the property owner.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Summit’s sponsors pay $7M (financial), $6M (telecom), $5M (beverage) and $4M (automotive). What is the total sponsorship income?',
      options: ['$22M', '$18M', '$24M', '$20M'],
      answer: 0,
      explanation: 'Add the four industries: 7 + 6 + 5 + 4 = 22 million dollars.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Summit’s telecom sponsor pays $6M and gains 9,000 customers worth $800 each. What is its return on the $6M?',
      options: ['20%', '120%', '2%', '1.2%'],
      answer: 0,
      explanation: '9,000 × $800 = $7.2M. ($7.2M − $6M) ÷ $6M = 0.20, or 20%.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which is NOT one of the main reasons brands sponsor sport listed in the lecture?',
      options: [
        'To avoid paying any other marketing costs',
        'To increase sales',
        'To improve employee relations',
        'To meet competitive threats',
      ],
      answer: 0,
      explanation: 'The eight reasons are sales, brand awareness, brand image, activation, customer relations, employee relations, community relations and competitive threats.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'c1',
      type: 'mcq',
      q: 'In the guest speaker’s list of event audiences, which two events passed one billion viewers?',
      options: [
        'The Super Bowl and the Euro final',
        'The Champions League final and the cricket World Cup final',
        'The Super Bowl and the cricket World Cup final',
        'The Olympic opening ceremony and the football World Cup final',
      ],
      answer: 3,
      explanation: 'The Olympic opening ceremony (Beijing 2008) and the World Cup final (Brazil 2014) were each over a billion. The other events were a few hundred million or fewer.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'c2',
      type: 'mcq',
      q: 'Which event’s audience depended most on one home market?',
      options: [
        'The Olympic opening ceremony',
        'The cricket World Cup final (mostly India)',
        'The World Cup final',
        'The Champions League final',
      ],
      answer: 1,
      explanation: 'About 135 of the cricket final’s 150 million viewers were in India. The Super Bowl was about 72% domestic. Some properties are global, others depend on a home market.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'c3',
      type: 'mcq',
      q: 'What does the 1972 HBO example, where 99% of surveyed people said no to pay TV, teach?',
      options: [
        'Fans never pay for sport',
        'Surveys are always right',
        'Pay TV is a failure',
        'Early demand does not predict later demand',
      ],
      answer: 3,
      explanation: 'Within a few years a title fight drew 100,000 subscribers. Early reactions to a new way of paying can be wrong.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'c4',
      type: 'mcq',
      q: 'What does the guest speaker’s Wimbledon rights table show about the price trend in Germany?',
      options: [
        'Prices stayed flat',
        'Prices rose strongly over time, with streamers paying the most',
        'Prices fell every cycle',
        'The rights were always free',
      ],
      answer: 1,
      explanation: 'The fee rose from about 200,000 euros in 2008 to the latest, highest line for Amazon. Read the trend, not the exact year or amount.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'c5',
      type: 'mcq',
      q: 'Which streaming deal does the guest speaker call “the biggest commitment in the sports rights space”?',
      options: [
        'Netflix’s Christmas Day NFL games',
        'YouTube’s highlights',
        'Tubi’s Super Bowl stream',
        'Amazon’s exclusive NFL Thursday Night Football package',
      ],
      answer: 3,
      explanation: 'Amazon moved from a non-exclusive NFL deal to exclusive Thursday Night Football at about $1 billion a season.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'c6',
      type: 'mcq',
      q: 'Which best describes the lecture’s forecast for global sports sponsorship spend between 2025 and 2030?',
      options: [
        'It falls by half',
        'It almost doubles',
        'It stays flat',
        'It disappears into media rights',
      ],
      answer: 1,
      explanation: 'The figures are about $100B in 2025 and a forecast of about $190B by 2030. Treat one firm’s forecast as a claim to question.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'c7',
      type: 'mcq',
      q: 'Of the two North American leagues in the lecture’s sponsorship figures, which earns more from sponsors?',
      options: [
        'The NBA',
        'They are equal',
        'Neither has sponsors',
        'The NFL',
      ],
      answer: 3,
      explanation: 'The NFL’s 2024 season sponsorship was larger than the NBA’s 2024/25 season. The slides give both in billions of dollars.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'c8',
      type: 'mcq',
      q: 'What does the lecture say consumers think of sports sponsorship as a form of advertising?',
      options: [
        'It is the least trusted channel',
        'It is one of the most trusted advertising channels',
        'It is ignored by most consumers',
        'It is trusted only in Europe',
      ],
      answer: 1,
      explanation: 'The lecture quotes Nielsen: 81% of consumers see sports sponsorship as one of the most trusted channels of advertising.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q9',
      type: 'open',
      q: 'Exercise. A streamer offers a league much more money than its current free-to-air broadcaster for exclusive rights. List two benefits and two risks for the league.',
      answer: [
        'Benefits: a higher fee, simple rights management, and a streamer’s data and subscriber marketing.',
        'Risks: reach limited to one subscription service, fewer casual or younger viewers on free-to-air, and sponsors may value the smaller audience less.',
        'A strong answer ties each point to the lecture’s balance between revenue and viewers.',
      ],
      review: { section: 'plain', slide: 3 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain why brands sponsor sport. Use at least three reasons and an example of each.',
      answer: [
        'Sponsorship is part of an integrated marketing strategy, and sponsors look for properties that add value to the brand and a quantifiable return.',
        'Increase sales: launch products or reach new markets, for example a telecom sponsor gaining customers through a team app.',
        'Brand awareness: visibility and positive association with large engaged audiences, including global exposure.',
        'Brand image: link to the values and excellence of a team, athlete or event.',
        'Others: activation, customer relations through hospitality, employee relations, community relations and meeting competitive threats.',
      ],
      marking: [
        'Defines sponsorship and its marketing role (2)',
        'Three clear reasons (3)',
        'An example for each reason (3)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Discuss the factors that influence the price of media rights, using one example from the course.',
      answer: [
        'Factors include tradition, audience numbers, economic power of buyers, refinancing options, national heroes, the competitive situation, time, advertising bookings, program strategies and the previous price.',
        'More bidders and bigger audiences raise the price, because buyers can earn it back through advertising or subscriptions.',
        'Example: Premier League or Netflix and WWE, where a new type of buyer raises competition. Or the World Cup 2026, where more matches lower the value per match even as total rights income rises.',
        'A strong answer also notes that figures reported in the press are estimates.',
      ],
      marking: [
        'Names at least four factors (3)',
        'Explains how factors change price (3)',
        'Uses an example with a sensible figure (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Evaluate the effect of streamers such as Amazon and Netflix on sports media rights.',
      answer: [
        'Positives: new bidders raise competition and fees, streaming offers direct customer relationships, viewer data and global reach, and younger fans already stream.',
        'Negatives: exclusive deals can limit free access and reach, and fans may need several subscriptions.',
        'Examples: Amazon’s move from a non-exclusive deal at about $75M a year to about $1B a season for Thursday Night Football, and Netflix’s reported $5B WWE deal.',
        'A balanced conclusion says the best approach mixes streaming with linear TV and social media.',
      ],
      marking: [
        'Two clear benefits (2)',
        'Two clear drawbacks (2)',
        'Uses an example and reaches a judgment (2)',
      ],
    },
    {
      id: 'e4',
      marks: 4,
      q: 'State four factors that influence the price of a media right and explain one of them.',
      answer: [
        'Factors in the lecture review include audience numbers, advertising bookings, refinancing options, the economic power of buyers, tradition, national heroes, time, program strategies, the competitive situation, the previous price and commercial restrictions.',
        'Example explanation: the competitive situation matters because more bidders push the price up, which is why streamers joining the bidding raised fees.',
      ],
      marking: [
        'Names four correct factors (up to 3)',
        'Explains one factor clearly (1)',
      ],
    },
  ],

  videos: [],
};
