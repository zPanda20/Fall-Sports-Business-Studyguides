// Foundations of Sport Management, Lecture 7 (second half): sponsorship of teams.
// Built from the "Sponsorship of Teams" slides: what team sponsorship gives each side, cash and in-kind support, the assets a
// team can offer, shirt-advertising limits and disparity between teams.
// The outline also lists leagues and the Guinness and Six Nations case, which are not in the slides received so far. Activation is covered in the next topic (Lecture 8).
// Real example: the top shirt sponsorship deals of 2025/26 (Finance Football). The Summit numbers are made up.

export const sportsSponsorshipTopic = {
  id: 'sports-sponsorship',
  course: 'sport-management',
  title: 'Sponsorship of teams',
  sessions: 'Session 8',
  reading: 'Lecture 7 slides (sponsorship of teams)',
  minutes: 30,
  summary:
    'What a team gets from its sponsors, what a sponsor gets back, the assets a team can sell, and why some teams earn far more than others. Activation is in the next topic. Leagues and the Guinness case are not in the slides yet.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'A team sponsor is a partner, not just a payer',
      blocks: [
        {
          type: 'big',
          text: 'Team sponsorship is a **mutual partnership**: the sponsor’s brand gains from the team, and the team gains from the sponsor’s money, reach and audience.',
        },
        {
          type: 'bullets',
          items: [
            'Sponsors **advertise their link** to the team (or should), which raises the team’s exposure to wider audiences.',
            'A sponsor’s brand can **raise a team’s profile** and professionalism.',
            'The team gets access to the sponsor’s **marketing reach**.',
          ],
        },
      ],
    },
    {
      kicker: 'What the team gets',
      title: 'Financial stability and room to compete',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Sponsorship is a **core funding source**, so the team relies less on other areas such as ticket sales.',
            'Teams have **large operating costs**. Sponsorship helps cover them.',
            'It enables teams to **compete, grow and thrive** on and off the field by providing funding, exposure, credibility and long-term sustainability.',
            'With that base, teams can **focus on performance and fan engagement**.',
          ],
        },
      ],
    },
    {
      kicker: 'How sponsors pay',
      title: 'Mostly cash, sometimes products and services',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Cash', text: 'Support from main sponsors is **mainly cash** to the team.' },
            { title: 'In kind', text: 'It may also include **products or services** such as team logistics, travel and insurance.' },
          ],
        },
        {
          type: 'callout',
          title: 'Why in-kind support counts',
          text: 'A flight or a fleet of vehicles saves the team real money even though no cash changes hands. When you compare deals, ask how much is cash and how much is in kind.',
        },
      ],
    },
    {
      kicker: 'What a team can sell',
      title: 'The assets on offer',
      blocks: [
        {
          type: 'p',
          text: 'A team must **understand what assets it has** to offer sponsors in return for their support. The lecture lists these:',
        },
        {
          type: 'table',
          head: ['Asset', 'What the sponsor gets'],
          rows: [
            ['In-stadium identification', 'Perimeter signage and other signage'],
            ['Brand visibility on uniforms', 'The logo on the team’s shirts'],
            ['Tickets', 'Seats for staff, clients or competitions'],
            ['Hospitality', 'A way to host clients and guests'],
            ['Right to sell team merchandise', 'For example team jerseys'],
            ['Access to team members', 'Players and staff for events and content'],
            ['Association with the team', 'The ability to tell their story through the team'],
            ['Right to activate', 'Permission to run campaigns around the sponsorship'],
          ],
        },
      ],
    },
    {
      kicker: 'A rule to know',
      title: 'Where shirt advertising is not allowed',
      blocks: [
        {
          type: 'callout',
          tone: 'warn',
          title: 'Uniform advertising is prohibited in some places',
          text: 'The lecture notes that advertising on team or athlete uniforms is **prohibited at the Olympic Games, at some international federation (IF) events and in some American professional sports**. A team’s shirt asset is not worth the same everywhere.',
        },
        {
          type: 'p',
          text: 'That is why the lecture lists several assets. If one is limited, the team can sell the others, such as signage, hospitality or access.',
        },
      ],
    },
    {
      kicker: 'Not all teams are equal',
      title: 'Disparity between teams',
      blocks: [
        {
          type: 'p',
          text: 'The lecture points out a **disparity** in sponsorship revenue between teams, leagues and sports. Big teams with big audiences and global reach attract more money. Smaller teams must work harder for less.',
        },
        {
          type: 'bullets',
          items: [
            'Value follows **audience size, reach and success**, the same drivers as media rights.',
            'The gap can grow: more money buys better players and more exposure, which attracts more money.',
          ],
        },
      ],
    },
    {
      kicker: 'What is not covered yet',
      title: 'Leagues and the Guinness case',
      blocks: [
        {
          type: 'p',
          text: 'The slides received so far cover **team sponsorship** only. The outline for this session also lists two topics that depend on slides not yet available, and a third that is now covered.',
        },
        {
          type: 'table',
          head: ['Listed in the outline', 'Status'],
          rows: [
            ['Sponsorship of leagues', 'Awaiting slides'],
            ['Why activation is critical to sponsorship goals', 'Covered in the next topic, from the Lecture 8 slides'],
            ['Case study: Guinness and the Six Nations', 'Awaiting slides'],
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Team sponsorship', def: 'A company gives a team money or other support in return for rights and association.' },
    { term: 'Mutual partnership', def: 'Both sides gain: the sponsor from the team’s audience, the team from the sponsor’s money and reach.' },
    { term: 'In-kind support', def: 'Products or services, such as travel, logistics or insurance, given instead of cash.' },
    { term: 'Core funding', def: 'A main, regular source of income that a team relies on.' },
    { term: 'Perimeter signage', def: 'Advertising boards around the field, court or rink.' },
    { term: 'Brand visibility', def: 'How often and how prominently a sponsor’s brand is seen, for example on a shirt.' },
    { term: 'Hospitality', def: 'Premium seats and services used to host clients and guests at events.' },
    { term: 'Disparity', def: 'A large gap between how much different teams earn from sponsors.' },
    { term: 'Front-of-shirt sponsor', def: 'The main sponsor whose logo appears on the front of a team’s shirt.' },
  ],
  cards: [
    { front: 'Why is team sponsorship a mutual partnership?', back: 'The sponsor’s brand benefits from the team, and the team gets funding plus access to the sponsor’s reach and audience.' },
    { front: 'What kinds of support can sponsors give besides cash?', back: 'Products or services such as logistics, travel and insurance.' },
    { front: 'Name five assets a team can offer', back: 'In-stadium identification, shirt visibility, tickets, hospitality, merchandise rights, access to team members, association with the team, the right to activate (any five).' },
    { front: 'Where is shirt advertising prohibited?', back: 'At the Olympic Games, at some international federation events and in some American professional sports.' },
    { front: 'Why does sponsorship help a team?', back: 'It gives financial stability, covers operating costs and lets the team focus on performance and fan engagement.' },
    { front: 'What is sponsorship disparity?', back: 'Teams, leagues and sports earn very different amounts from sponsors.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The biggest shirt deals of 2025/26',
    note: 'A real picture of disparity. Figures are from Finance Football’s own ranking of main front-of-shirt sponsorship deals, dated 4 September 2025. They are annual values in euros as stated by that article, which does not describe how the figures were verified.',
    slides: [
      {
        kicker: 'The top ten',
        title: 'Ten shirt deals, from €70 million to €45 million',
        blocks: [
          {
            type: 'bars',
            title: 'Annual value of main shirt sponsorship, 2025/26 (Finance Football)',
            unit: '€M',
            items: [
              { label: 'Real Madrid (Fly Emirates)', value: 70 },
              { label: 'Barcelona (Spotify)', value: 70 },
              { label: 'Manchester United (Snapdragon)', value: 70 },
              { label: 'PSG (Qatar Airways)', value: 70 },
              { label: 'Juventus (Jeep)', value: 69 },
              { label: 'Manchester City (Etihad Airways)', value: 65 },
              { label: 'Bayern Munich (T-Mobile)', value: 65 },
              { label: 'Liverpool (Standard Chartered)', value: 58.5 },
              { label: 'Arsenal (Fly Emirates)', value: 58.5 },
              { label: 'Tottenham Hotspur (AIA)', value: 45 },
            ],
          },
          {
            type: 'bullets',
            items: [
              'Added together, the ten deals come to **€641 million** a year, an average of about €64 million.',
              'Industries on the list include airlines, music streaming, technology chips, banking, insurance and a car maker, matching the lecture’s lists of sponsoring industries.',
            ],
          },
        ],
      },
      {
        kicker: 'Reading it',
        title: 'What the list shows about disparity',
        blocks: [
          {
            type: 'table',
            head: ['Lecture idea', 'In the ranking'],
            rows: [
              ['Disparity', 'The top deal (€70M) is about 1.6 times the tenth (€45M), and the tenth is still a large club'],
              ['Brand visibility on uniforms', 'Every row is a shirt deal, the most visible team asset'],
              ['Mutual partnership', 'The sponsors are global brands that want a global audience'],
              ['Shirt rules', 'This list covers club football, where shirt advertising is allowed'],
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            title: 'The list also hides some teams',
            text: 'The same article notes that **Chelsea had no shirt sponsor** at the time and was negotiating with Riyadh Air for up to €75 million a year. That figure is not in the ranking. The list covers only the main front-of-shirt sponsor, not all sponsorship income.',
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
                title: 'Top 10 Biggest Shirt Sponsorship Deals 2025-2026 (Finance Football)',
                url: 'https://financefootball.com/en/2025/09/04/top-10-biggest-shirt-sponsorship-deals-2025-2026',
                note: 'Finance Football, 4 September 2025. Main front-of-shirt sponsor, annual value in euros, ten deals from €70M to €45M. Juventus’s deal runs to 2028. Chelsea had no shirt sponsor at the time.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Summit’s sponsorship assets',
    universe: 'summit',
    slides: [
      {
        kicker: 'What Summit sells',
        title: 'Four assets, $22 million',
        blocks: [
          {
            type: 'bars',
            title: 'Summit sponsorship income by asset',
            unit: '$M a year',
            items: [
              { label: 'Jersey front', value: 8 },
              { label: 'Arena naming', value: 6 },
              { label: 'Other partners', value: 5 },
              { label: 'Hospitality and digital', value: 3 },
            ],
          },
          {
            type: 'steps',
            items: [
              '8 + 6 + 5 + 3 = **$22 million**, the same $22M seen in the last unit by industry (7 + 6 + 5 + 4).',
              'Jersey front is the lecture’s **brand visibility on uniforms**. Arena naming is **in-stadium identification**.',
              'Other partners cover signage, tickets and access. Hospitality and digital covers **hospitality** and the **right to activate**.',
            ],
          },
        ],
      },
      {
        kicker: 'Cash and in kind',
        title: 'Summit’s automotive sponsor',
        blocks: [
          {
            type: 'p',
            text: 'The automotive sponsor’s **$4 million** is not all cash. It is **$3 million cash** plus **$1 million of vehicles and travel** for the team.',
          },
          {
            type: 'table',
            head: ['Part', 'Amount', 'Share of $4M'],
            rows: [
              ['Cash', '$3.0M', '75%'],
              ['In-kind vehicles and travel', '$1.0M', '25%'],
              ['**Total**', '**$4.0M**', '**100%**'],
            ],
          },
          { type: 'callout', title: 'Why it matters', text: 'The $1M of in-kind support lowers Summit’s costs, but it cannot pay a player’s salary. Summit’s finance team tracks the cash share separately.' },
        ],
      },
      {
        kicker: 'Risk',
        title: 'What if the jersey sponsor leaves?',
        blocks: [
          {
            type: 'table',
            head: ['', 'Before', 'After', 'Change'],
            rows: [
              ['Sponsorship income', '$22M', '$14M', '−36%'],
              ['Total revenue', '$76M', '$68M', '−10.5%'],
            ],
          },
          {
            type: 'steps',
            items: [
              'Losing the $8M jersey deal leaves 22 − 8 = **$14M** of sponsorship.',
              '8 ÷ 22 is about **36%** of sponsorship income, and 8 ÷ 76 is about **10.5%** of all revenue.',
              'One sponsor on one asset carries a lot of weight. That is why Summit also sells arena naming and smaller partner packages.',
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
      q: 'Which is a benefit of sponsorship to a team?',
      options: [
        'Financial stability, so the team relies less on ticket sales',
        'Free players',
        'It removes all operating costs',
        'It guarantees a league title',
      ],
      answer: 0,
      explanation: 'Sponsorship is a core funding source that helps cover large operating costs and lets teams focus on performance and fan engagement. It does not remove all costs.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Besides cash, what else might a main sponsor give a team?',
      options: [
        'Products or services such as travel, logistics and insurance',
        'Ownership of the league',
        'The referees',
        'Control over the squad',
      ],
      answer: 0,
      explanation: 'Support from main sponsors is mainly cash, but may include other forms such as products and services, for example team logistics, travel and insurance.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Where is advertising on team or athlete uniforms prohibited, according to the lecture?',
      options: [
        'The Olympic Games, some IF events and some American professional sports',
        'Every professional football league',
        'No events at all',
        'Only school sport',
      ],
      answer: 0,
      explanation: 'The lecture notes that uniform advertising is prohibited at the Olympic Games, some international federation events and some American professional sports.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which is NOT one of the assets a team can offer a sponsor in the lecture?',
      options: [
        'Choosing the match officials',
        'Perimeter signage',
        'Hospitality',
        'The right to activate the sponsorship',
      ],
      answer: 0,
      explanation: 'The assets are in-stadium identification, shirt visibility, tickets, hospitality, merchandise rights, access to team members, association with the team and the right to activate. Teams do not sell the choice of match officials.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Summit’s sponsorship assets are the jersey front ($8M), arena naming ($6M), other partners ($5M) and hospitality and digital ($3M). What is the total?',
      options: ['$22M', '$19M', '$24M', '$16M'],
      answer: 0,
      explanation: 'Add the four assets: 8 + 6 + 5 + 3 = 22 million dollars.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'The automotive sponsor’s $4M is $3M cash and $1M in-kind. What share is cash?',
      options: ['75%', '25%', '33%', '60%'],
      answer: 0,
      explanation: 'Cash is 3 of the 4 million dollars: 3 ÷ 4 = 0.75, or 75%.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Summit loses its $8M jersey sponsor. Total revenue was $76M. What share of revenue is lost, to one decimal place?',
      options: ['10.5%', '8.0%', '36.4%', '14.0%'],
      answer: 0,
      explanation: '8 ÷ 76 = 0.105, about 10.5%. The 36.4% option is the loss as a share of sponsorship income (8 ÷ 22), not of total revenue.',
      review: { section: 'sports', slide: 2 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'In Finance Football’s ranking, four clubs have deals worth €70M and Tottenham’s is €45M. About how many times larger is €70M than €45M?',
      options: ['1.6 times', '2.5 times', '0.6 times', '25 times'],
      answer: 0,
      explanation: '70 ÷ 45 is about 1.56, so roughly 1.6 times.',
      review: { section: 'real', slide: 1 },
    },
    {
      id: 'c1',
      type: 'mcq',
      q: 'Which phrase best describes the relationship between a team and its sponsor?',
      options: [
        'A one-way payment',
        'A loan',
        'A legal dispute',
        'A mutual partnership',
      ],
      answer: 3,
      explanation: 'The sponsor’s brand gains from the team, and the team gains money, reach and audience from the sponsor.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'c2',
      type: 'mcq',
      q: 'In what form does support from a team’s main sponsors mainly come?',
      options: [
        'Products',
        'Cash',
        'Services',
        'Tickets',
      ],
      answer: 1,
      explanation: 'Support is mainly cash. It may also include in-kind products or services such as logistics, travel and insurance.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'c3',
      type: 'mcq',
      q: 'A sponsor provides free flights and a fleet of vehicles for a team. What kind of support is this?',
      options: [
        'Cash support',
        'A media right',
        'A ticketing deal',
        'In-kind support',
      ],
      answer: 3,
      explanation: 'It saves the team real money even though no cash changes hands.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'c4',
      type: 'mcq',
      q: 'Which factors drive how much a team earns from sponsors?',
      options: [
        'League rules only',
        'Audience size, reach and success',
        'The color of the kit',
        'The number of coaches',
      ],
      answer: 1,
      explanation: 'These are the same drivers as media rights. Big teams with big audiences and global reach attract more money.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'c5',
      type: 'mcq',
      q: 'Why can the sponsorship gap between big and small teams grow?',
      options: [
        'Small teams refuse sponsors',
        'Leagues ban small sponsors',
        'Big teams pay sponsors',
        'More money buys better players and more exposure, which attracts more money',
      ],
      answer: 3,
      explanation: 'The lecture points out disparity between teams, leagues and sports, and that the gap can feed on itself.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'c6',
      type: 'mcq',
      q: 'Shirt advertising is not allowed at an event. What can a team still do?',
      options: [
        'Cancel all sponsorship',
        'Sell other assets such as signage, hospitality and access',
        'Sell the shirt anyway',
        'Ask fans to pay more',
      ],
      answer: 1,
      explanation: 'A team has several assets. If one is limited, it can sell the others.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q9',
      type: 'open',
      q: 'Exercise. List the assets a small amateur club could offer a local business, and say which one you would sell first and why.',
      answer: [
        'Assets from the lecture list could include signage at the ground, a logo on the team’s shirts, tickets, hospitality such as a clubhouse event, merchandise rights, access to players and the right to run a promotion.',
        'A strong answer picks one asset and justifies it with the sponsor’s goals, for example shirt visibility for a local brand that wants awareness.',
        'It also checks any rules that limit the asset, such as shirt advertising restrictions.',
      ],
      review: { section: 'plain', slide: 3 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain why team sponsorship is described as a mutual partnership.',
      answer: [
        'The sponsor’s brand benefits from being associated with the team, and the team gains access to the sponsor’s marketing reach and audience.',
        'Teams gain financial stability: sponsorship is core funding that covers large operating costs and reduces reliance on ticket sales. It also gives credibility and long-term sustainability.',
        'Sponsors usually advertise their link to the team, which increases the team’s exposure, and a strong sponsor brand can raise the team’s profile and professionalism.',
        'Support is mainly cash but can include products and services such as travel, logistics and insurance.',
      ],
      marking: [
        'Benefits to the sponsor (2)',
        'Benefits to the team (3)',
        'Cash versus in-kind support (1)',
        'Uses an example or figure (2)',
      ],
    },
    {
      id: 'e2',
      marks: 6,
      q: 'List and explain four assets a team can offer a sponsor. Explain one limit on one of them.',
      answer: [
        'Any four of: in-stadium identification (signage), brand visibility on uniforms, tickets, hospitality, right to sell team merchandise, access to team members, association with the team, right to activate. Each should say what the sponsor gets.',
        'Limit: advertising on uniforms is prohibited at the Olympic Games, at some international federation events and in some American professional sports, so a team must rely on its other assets there.',
      ],
      marking: [
        'Four assets named (2)',
        'What the sponsor gets from each (2)',
        'A correct limit explained (2)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'A team gets 40% of its sponsorship income from one shirt sponsor. Discuss the risks and what the team could do about them.',
      answer: [
        'Risks: if the sponsor leaves, a large share of income disappears at once, which hurts budgets for players, staff and operations. A sponsor with that much power may also be able to push for more rights or lower prices.',
        'Spreading income across several assets, such as arena naming, signage, hospitality and other partners, lowers the risk. In-kind support helps costs but cannot replace cash.',
        'Disparity matters too: smaller teams have fewer high-value assets to sell, so dependence on one deal is more likely.',
        'A strong answer uses numbers, for example losing an $8M jersey deal from $22M of sponsorship cuts sponsorship by about 36% and total revenue of $76M by about 10.5%.',
      ],
      marking: [
        'Explains the risk of dependence (3)',
        'Suggests sensible actions (3)',
        'Uses an example or numbers (2)',
      ],
    },
    {
      id: 'e4',
      marks: 4,
      q: 'Explain two ways that sponsorship helps a team compete on and off the field.',
      answer: [
        'It is a core funding source, so the team relies less on ticket sales and can cover large operating costs.',
        'It provides funding, exposure, credibility and long-term sustainability, so the team can focus on performance and fan engagement.',
        'Sponsors also give access to their marketing reach and can raise the team’s profile.',
      ],
      marking: [
        'First way identified and explained (2)',
        'Second way identified and explained (2)',
      ],
    },
  ],

  videos: [],
};
