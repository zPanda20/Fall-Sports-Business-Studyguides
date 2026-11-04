// Foundations of Sport Management, Lecture 2 (21 September): the sporting industry and the sport business ecosystem.
// Built from the Lecture 2 slides. Real example: Manchester United's fiscal 2025 results (see the sources slide).
// The Summit numbers are made up and live in summit.js.

export const sportIndustryEcosystemTopic = {
  id: 'sport-industry-ecosystem',
  course: 'sport-management',
  title: 'The sporting industry and the sport business ecosystem',
  sessions: 'Session 2',
  reading: 'Lecture 2 slides',
  minutes: 30,
  summary:
    'How big the sports industry is, how it became a business, what sport management is, and who the stakeholders are, with fans at the center.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Sport is a business',
      blocks: [
        { type: 'big', text: 'The global sporting industry is worth somewhere between **$500 billion and $2.3 trillion**, depending on what you count.' },
        {
          type: 'columns',
          items: [
            {
              title: 'Core sports industry: about $500 billion',
              text: 'Professional leagues, events, media rights, sponsorship, ticketing, merchandising, sporting goods and related services.',
            },
            {
              title: 'Broader sports economy: about $2.3 trillion',
              text: 'The core plus sports apparel, fitness, health and wellness, sports tourism, betting, wearables, streaming and other nearby sectors.',
            },
          ],
        },
        { type: 'p', text: 'The industry is a constantly changing mix of organizations. A good manager understands sport in an international marketplace and how globalization shapes it.' },
      ],
    },
    {
      kicker: 'How it got here',
      title: 'Two value explosions',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Live sport draws big audiences', text: 'Television companies notice' },
            { title: 'Broadcasters pay for rights', text: 'Fees rise sharply from the 1980s' },
            { title: 'Money flows through sport', text: 'More sponsors and ads, more fans, higher salaries, higher club values' },
          ],
        },
        {
          type: 'columns',
          items: [
            {
              title: '1. Media revenue (1980s to 2000s)',
              text: 'Television companies paid more and more for exclusive rights. The 1984 Summer Olympics was a turning point.',
            },
            {
              title: '2. Digital media and technology (2010s to now)',
              text: 'Streaming, social media, data and artificial intelligence let sport reach fans directly, with new subscriptions, online advertising and merchandise sales.',
            },
          ],
        },
        { type: 'p', text: 'Together they turned sport from mainly an entertainment activity into a global industry with many revenue streams and many jobs.' },
      ],
    },
    {
      kicker: 'The map',
      title: 'The sectors of the industry',
      blocks: [
        {
          type: 'table',
          head: ['Sector', 'What is in it'],
          rows: [
            ['Professional sports', 'Teams and leagues, athlete salaries, tournaments and championships'],
            ['Sportswear and equipment', 'Apparel brands, equipment, retail and e-commerce'],
            ['Esports and virtual sports', 'Professional gaming leagues, streaming platforms, game developers'],
            ['Media and broadcasting', 'TV rights and OTT streaming, social media and digital content, advertising'],
            ['Grassroots and amateur sport', 'Youth and community leagues, school and college sport, government and NGO support'],
            ['Tourism and hospitality', 'Event travel, stadium experiences, fan zones and VIP services'],
            ['Sponsorship and marketing', 'Brand partnerships, naming rights, merchandising and licensing'],
            ['Fitness and recreation', 'Gyms, wearables and apps, adventure and lifestyle sports'],
            ['Infrastructure and governance', 'Stadium building, smart technology, governing bodies such as the IOC and FIFA'],
          ],
        },
      ],
    },
    {
      kicker: 'The job',
      title: 'What sport management is',
      blocks: [
        {
          type: 'big',
          text: 'Sport management is running the **business side** of sport and recreation: planning, organizing, directing, controlling, budgeting, leading and evaluating.',
        },
        {
          type: 'bullets',
          items: [
            'It is **multidisciplinary**: it mixes business, marketing and knowledge of the sport itself.',
            'It covers every business operation that supports sport and recreation.',
            'Its goals can be financial, organizational, economic, marketing, technical or sporting.',
            'Typical aims: improve the fan experience, grow revenue and run successful events.',
          ],
        },
      ],
    },
    {
      kicker: 'Popularity and rules',
      title: 'Which sport is biggest, and who runs it?',
      blocks: [
        {
          type: 'p',
          text: 'There is no single ranking. Different lists use different measures: fan base and audience, TV deals, social media, number of leagues, sponsorship, athlete pay, countries where it is popular, gender equality, year-round relevance and access for the public. On most lists football, cricket and basketball are near the top.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Wide appeal', text: 'Football and basketball are popular in many countries.' },
            { title: 'Deep appeal in fewer places', text: 'Cricket and American football have intense followings in a smaller number of countries.' },
          ],
        },
        {
          type: 'callout',
          title: 'Who owns the rules?',
          text: 'Usually one recognized international governing body (an IF in the Olympic Movement) controls a sport’s rules and development, with one recognized body in each country. Some events sit outside the Olympic structure, such as the NBA, but still follow rules based on the IF’s.',
        },
      ],
    },
    {
      kicker: 'The ecosystem',
      title: 'The stakeholders around sport',
      blocks: [
        {
          type: 'p',
          text: 'Picture sport in the middle, with **fans and participants** at its heart and these groups around it. Each one earns, spends or gains something from the others.',
        },
        {
          type: 'table',
          head: ['Stakeholder', 'Role', 'Example from the lecture'],
          rows: [
            ['Leagues, federations, associations', 'Run professional and amateur sport', 'FIFA, FIBA, NBA, Premier League'],
            ['Clubs and teams', 'The engine of fan engagement', 'Chelsea, Red Bull Racing, NY Yankees'],
            ['Players, coaches, agents', 'Draw media attention. Salaries are the biggest cost for most pro teams', ''],
            ['Events', 'Large rights fees and high engagement', 'Olympic Games, FIFA World Cup'],
            ['Facilities, arenas, stadiums', 'Homes for clubs, event hosts, community recreation', 'Stade Louis II, Wembley'],
            ['Media content and distribution', 'A major revenue source that boosts engagement', ''],
            ['Ticketing', 'Starts most commercial contact with an event and holds valuable fan data', 'Ticketmaster, StubHub'],
            ['Government, NGOs, regulators', 'Key funders of sport: health, hosting, facilities', ''],
            ['Sports advisory and services', 'Venue, athlete and sponsorship expertise', 'CAA, IMG, Wasserman'],
            ['Branding, marketing, sponsorship', 'Use sport to promote brands and lift sales', ''],
            ['Apparel and equipment', 'Supply and sponsor teams and athletes', 'Nike, Callaway, Wilson'],
            ['Health and medicine bodies', 'Care for athletes from elite pros to weekend runners', ''],
          ],
        },
        {
          type: 'figure',
          alt: 'A wheel diagram of the sport business ecosystem with fans and participants at the center',
          caption: 'The ecosystem wheel. Fans and participants sit at the center.',
          need: 'Draw your own simple wheel: “Sport” in the center, “Fans” and “Participants” beside it, and the 12 stakeholder groups from the table around the edge. Save it as fsm-ecosystem-wheel.png.',
          src: 'fsm-ecosystem-wheel.png',
        },
      ],
    },
    {
      kicker: 'Fans',
      title: 'Not all fans are the same',
      blocks: [
        {
          type: 'table',
          head: ['Type of fan', 'What they are like'],
          rows: [
            ['Overall sport diehard', 'Follows all sports, in person and across many media'],
            ['Local sport diehard', 'Follows everything in the home market and holds season tickets'],
            ['Single-sport diehard', 'Deep love of one sport, travels for big games, buys TV or streaming packages'],
            ['General sport and entertainment fan', 'Wants a good experience and compares sport with non-sport options. Follows mega-events and the national team. The largest group'],
            ['Business fan', 'Buys premium tickets and suites to entertain clients. Often loves data'],
            ['Social fan', 'Enjoys the social atmosphere around sport'],
            ['Occasional and fringe fan', 'Interested now and then. Easily influenced, often a bandwagon or star-struck follower'],
          ],
        },
        {
          type: 'callout',
          title: 'Fans move',
          text: 'Fans can switch category at any time, and can fit more than one at once. Sports businesses try to move fans up to higher levels of fandom, because the more passionate the fan, the more they spend across the many parts of sport.',
        },
      ],
    },
    {
      kicker: 'Engagement',
      title: 'Live time and everything around it',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Live event time',
              text: 'A short window. You can take part as a **participant** (pro, amateur or recreational) or watch as an **observer** (in the stadium, or on TV and public screens). The venue and the team’s performance affect how engaged people are.',
            },
            {
              title: 'Beyond live event time',
              text: 'The rest of the year. In the 1990s fans watched on TV, read the paper and bought merchandise. Now they can engage globally, 24/7, through streaming, social media, websites, apps, e-stores and fan zones.',
            },
          ],
        },
        {
          type: 'p',
          text: 'The goal of fan engagement marketing is to build an emotional relationship between a sports brand and its fans, and that relationship leads to money: tickets, merchandise, sponsor products and participation.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Sport industry', def: 'All the businesses and organizations that produce, promote or organize sport-related goods, services, people, places or ideas.' },
    { term: 'Core sports industry', def: 'Professional leagues, events, media rights, sponsorship, ticketing, merchandising and sporting goods. About $500 billion.' },
    { term: 'Broader sports economy', def: 'The core industry plus apparel, fitness, tourism, betting, wearables, streaming and other nearby sectors. About $2.3 trillion.' },
    { term: 'Sport management', def: 'Running the business side of sport and recreation: planning, organizing, directing, controlling, budgeting, leading and evaluating.' },
    { term: 'Stakeholder', def: 'Any person or group that affects or is affected by a sports organization.' },
    { term: 'Sport business ecosystem', def: 'The connected web of stakeholders around sport, with fans and participants at the center.' },
    { term: 'Diehard fan', def: 'A fan who regularly consumes sport and backs a team financially and emotionally.' },
    { term: 'General sport and entertainment fan', def: 'A fan who seeks entertaining experiences, sport or not, and supports mega-events and national teams. The largest group.' },
    { term: 'Business fan', def: 'A fan who uses premium tickets and suites to entertain clients and build partnerships.' },
    { term: 'Fan engagement', def: 'Building relationships and emotional connections between sports brands and fans, with the aim of generating revenue.' },
    { term: 'Live event time', def: 'The short window when a sporting event is actually taking place.' },
  ],
  cards: [
    { front: 'The two numbers for the sports industry', back: 'Core sports industry about $500 billion. Broader sports economy about $2.3 trillion.' },
    { front: 'The two value explosions', back: 'Media revenue growth (1980s to 2000s), and digital media and technology (2010s to now).' },
    { front: 'Who sits at the center of the ecosystem?', back: 'Fans, and participants.' },
    { front: 'Largest group of fans', back: 'The general sport and entertainment fan.' },
    { front: 'Why try to move fans to higher levels?', back: 'The more passionate the fan, the more they spend across sport’s many revenue outlets.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Manchester United: where one club’s money comes from',
    note: 'Fiscal 2025 means the year to 30 June 2025. Figures are from the club’s results release of 17 September 2025, which says they are unaudited and preliminary.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Three sources, £666.5 million',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Commercial', value: '£333.3M', note: 'up 10.0%' },
              { label: 'Broadcasting', value: '£172.9M', note: 'down 22.0%' },
              { label: 'Matchday', value: '£160.3M', note: 'up 16.9%' },
            ],
          },
          {
            type: 'bars',
            title: 'Revenue by source, fiscal 2025',
            unit: '£M',
            items: [
              { label: 'Commercial', value: 333.3 },
              { label: 'Broadcasting', value: 172.9 },
              { label: 'Matchday', value: 160.3 },
            ],
          },
          { type: 'p', text: 'Total revenue was £666.5 million, up 0.7%. The three streams add up exactly to that total.' },
        ],
      },
      {
        kicker: 'Reading it',
        title: 'Which stakeholders are paying?',
        blocks: [
          {
            type: 'table',
            head: ['Revenue stream', 'Who pays', 'Ecosystem link'],
            rows: [
              ['Commercial', 'Sponsors, brand partners and merchandise buyers', 'Branding, marketing, apparel and equipment, fans'],
              ['Broadcasting', 'Broadcasters and streaming services, through league and competition deals', 'Media content and distribution, leagues'],
              ['Matchday', 'Fans who buy tickets and hospitality', 'Facilities and stadiums, ticketing, fans'],
            ],
          },
          {
            type: 'callout',
            title: 'What to notice',
            text: 'About half of the club’s revenue came from commercial partners. Broadcasting fell 22% in the year. The club’s release says this was primarily because the men’s first team played in the UEFA Europa League instead of the Champions League. Growth in commercial and matchday income helped offset the drop.',
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
                title: 'Manchester United plc, fourth quarter and full year fiscal 2025 results (Exhibit 99.1)',
                url: 'https://www.sec.gov/Archives/edgar/data/0001549107/000110465925090580/tm2526230d1_ex99-1.htm',
                note: 'Filed with the US SEC, 17 September 2025. Revenue by stream, the year-on-year changes, and the stated reason for the broadcasting fall.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Where Summit’s $76 million comes from',
    universe: 'summit',
    slides: [
      {
        kicker: 'Summit’s revenue',
        title: 'Four streams, four groups of stakeholders',
        blocks: [
          {
            type: 'bars',
            title: 'Summit Sports Group revenue, one season',
            unit: '$M',
            items: [
              { label: 'Media rights', value: 30 },
              { label: 'Commercial', value: 22 },
              { label: 'Matchday', value: 18 },
              { label: 'Merchandise', value: 6 },
            ],
          },
          {
            type: 'p',
            text: 'The total is **$76 million**. Media rights are the biggest slice, at about 39% of revenue. Commercial is about 29%, matchday about 24% and merchandise about 8%.',
          },
        ],
      },
      {
        kicker: 'The matchday number',
        title: 'How the $18 million is built',
        blocks: [
          {
            type: 'steps',
            items: [
              'The arena has **10,000 seats**.',
              'There are **40 home games** a season, so 400,000 seats are on sale.',
              'The average ticket costs **$45**.',
              'If every seat sold: 10,000 × 40 × $45 = **$18 million**. Summit’s matchday figure assumes a sell-out.',
            ],
          },
          {
            type: 'callout',
            title: 'Why that matters',
            text: 'A manager who knows the formula can see what each empty seat costs: one empty seat for a season is 40 × $45 = $1,800.',
          },
        ],
      },
      {
        kicker: 'The fans',
        title: 'Four Summit fans',
        blocks: [
          {
            type: 'table',
            head: ['Fan', 'Type', 'What Summit should offer'],
            rows: [
              ['Ana holds a season ticket and goes to every home game', 'Local diehard', 'Priority renewals, member events, loyalty perks'],
              ['Ben books a suite to host clients', 'Business fan', 'Hospitality packages and data-rich presentations'],
              ['Cleo goes with friends for the atmosphere', 'Social fan', 'Group tickets, fan zones, pre-game events'],
              ['Dev watches the finals and big national games', 'General sport and entertainment fan', 'Special event nights and easy streaming'],
            ],
          },
          { type: 'p', text: 'Summit’s goal is to move fans up: from Dev to Cleo, and from Cleo toward Ana.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ practice
  questions: [
    {
      id: 'q1',
      type: 'mcq',
      q: 'The lecture puts the core sports industry at about $500 billion and the broader sports economy at about $2.3 trillion. What is the difference?',
      options: [
        'The broader economy adds apparel, fitness, tourism, betting, wearables, streaming and more',
        'The core industry only counts professional athletes’ salaries',
        'The broader economy only counts the United States',
        'The core industry counts amateur sport, the broader one counts professional sport',
      ],
      answer: 0,
      explanation: 'The core industry is leagues, events, media rights, sponsorship, ticketing, merchandising and goods. The broader economy adds nearby sectors such as apparel, fitness, tourism, betting, wearables and streaming.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which pair are the “two value explosions” that turned sport into a global business?',
      options: [
        'Growth of media revenues, and digital media and technology',
        'Growth of ticket prices, and growth of stadium building',
        'Growth of athlete salaries, and growth of betting',
        'Growth of the Olympics, and growth of the World Cup',
      ],
      answer: 0,
      explanation: 'The lecture names media revenue growth from the 1980s to the 2000s, and digital media and technology from the 2010s onward.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which fan type is the largest group and tends to follow mega-events and the national team?',
      options: [
        'General sport and entertainment fan',
        'Single-sport diehard',
        'Business fan',
        'Local sport diehard',
      ],
      answer: 0,
      explanation: 'The general sport and entertainment fan weighs sport against other entertainment and follows mega-events such as the Olympics and World Cup. It is the largest group.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Manchester United’s fiscal 2025 revenue was £666.5 million. Roughly what share came from commercial income of £333.3 million?',
      options: ['About half', 'About a quarter', 'About two thirds', 'About a tenth'],
      answer: 0,
      explanation: '333.3 ÷ 666.5 is about 0.50, so commercial income was roughly half of revenue.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Summit Arena has 10,000 seats, 40 home games and a $45 average ticket. What is matchday revenue if every seat sells?',
      options: ['$18 million', '$1.8 million', '$4.5 million', '$45 million'],
      answer: 0,
      explanation: '10,000 × 40 = 400,000 tickets. 400,000 × $45 = $18,000,000.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'A manager books a suite to entertain clients and loves reading the match statistics. Which fan type is this?',
      options: ['Business fan', 'Social fan', 'Occasional fan', 'Overall sport diehard'],
      answer: 0,
      explanation: 'Business fans buy premium tickets and suites to entertain clients and build partnerships, and are often analytical and fond of data.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise. Pick one professional club you know. List four of its stakeholders from the ecosystem table, say what each one gives to the club or gets from it, and name its most valuable fan type.',
      answer: [
        'A strong answer picks four different groups, for example a league, sponsors, a broadcaster and a stadium owner.',
        'Each stakeholder has a two-way link: what it gives (money, rights, facilities) and what it gets (exposure, audience, income).',
        'The fan type is named with a reason, such as local diehards for steady ticket and merchandise spending.',
        'It shows that stakeholders depend on each other, not just on the club.',
      ],
      review: { section: 'plain', slide: 5 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain how the two “value explosions” transformed sport into a global industry.',
      answer: [
        '**First explosion (1980s to 2000s): media revenue.** Television companies saw that live sport attracts large audiences and paid more for exclusive rights, with the 1984 Summer Olympics a turning point.',
        'That money raised broadcasting income for leagues and clubs, attracted sponsors and advertisers, expanded fan bases, pushed up athlete salaries and transfer values, and raised franchise values.',
        '**Second explosion (2010s to now): digital media and technology.** Streaming, social media, data and AI let organizations reach fans directly.',
        'New income followed: streaming subscriptions, digital advertising and online merchandise, plus data used to improve marketing and ticket sales.',
        'The result is many revenue streams, higher club valuations, more investment, new jobs, and more exposure for women’s and emerging sports.',
      ],
      marking: [
        'Identifies both explosions correctly (2)',
        'Explains the cause for each, such as TV rights fees and direct digital reach (2)',
        'Describes at least three effects on the industry (3)',
        'Uses an example or date (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Describe the sport business ecosystem and explain why fans are at its center.',
      answer: [
        'The ecosystem is the connected web of stakeholders around sport: leagues and federations, clubs, players and agents, events, venues, media, ticketing, government and regulators, advisers, sponsors, apparel makers and health bodies.',
        'Each group earns, spends or gains something from the others, for example media pay for rights, sponsors pay for association and fans pay for tickets.',
        'Fans are central because most other stakeholders target them: marketers, sponsors, clubs, ticketing companies, venues and media all depend on fans for engagement and spending.',
        'Fans are not all alike, from diehards to occasional fans, and they can switch category, so understanding them lets organizations move them to higher levels of fandom.',
      ],
      marking: [
        'Defines the ecosystem and names at least five stakeholders (3)',
        'Shows how stakeholders depend on each other, with an example (2)',
        'Explains why fans are central (2)',
        'Mentions fan types or movement between them (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'A club says its revenue comes from three sources: commercial, broadcasting and matchday. Using one real or fictional example, explain what a fall in one source tells a manager and how the club could respond.',
      answer: [
        'Names the source that fell and the size of the change, for example Manchester United’s broadcasting revenue falling 22% in fiscal 2025.',
        'Explains that revenue depends on outside stakeholders, such as broadcasters or competition organizers, whose payments the club does not control.',
        'Suggests a response: grow commercial income through sponsors, raise matchday income through experience and hospitality, and improve performance to qualify for bigger competitions.',
      ],
      marking: [
        'Identifies the fall with a figure (2)',
        'Links the change to a stakeholder or cause (2)',
        'Gives a sensible response (2)',
      ],
    },
  ],

  videos: [],
};
