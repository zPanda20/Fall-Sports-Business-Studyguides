// Foundations of Sport Management, Lecture 3 (28 September): stakeholder and fan engagement in sport.
// Built from the Lecture 3 slides. Real example: pickleball participation (see the sources slide).
// The Summit numbers are made up and live in summit.js.

export const stakeholderFanEngagementTopic = {
  id: 'stakeholder-fan-engagement',
  course: 'sport-management',
  title: 'Stakeholder and fan engagement in sport',
  sessions: 'Session 3',
  reading: 'Lecture 3 slides',
  minutes: 30,
  summary:
    'The platforms that connect fans to sport, how athletes drive engagement, why attention is split, and how niche and emerging sports win fans.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Three families of engagement platforms',
      blocks: [
        { type: 'big', text: 'Fans connect with sport through **many platforms at once**, and the best organizations connect them into one system.' },
        {
          type: 'columns',
          items: [
            { title: 'Core sports ecosystem', text: 'The sport on the field of play, teams and clubs, athletes and coaches, events, venues, and sponsors.' },
            { title: 'Media and distribution', text: 'Print, broadcast, streaming, social media, and online content websites and apps.' },
            { title: 'Fan engagement and interactive experiences', text: 'Electronic games, sports betting, fantasy sports, esports, and digital assets.' },
          ],
        },
        {
          type: 'figure',
          alt: 'A simple map of the three families of engagement platforms',
          caption: 'The three families of platforms.',
          need: 'Draw a one-page map with three columns (core ecosystem, media and distribution, interactive experiences) and the platforms from this slide under each. Save it as fsm-engagement-platforms.png.',
          src: 'fsm-engagement-platforms.png',
        },
      ],
    },
    {
      kicker: 'Core ecosystem',
      title: 'How the core platforms build engagement',
      blocks: [
        {
          type: 'table',
          head: ['Platform', 'How it builds engagement'],
          rows: [
            ['Sport on the field of play', 'Leagues make sport more entertaining with rule changes, more teams and competitive balance. Results feed engagement on every other platform.'],
            ['Teams and clubs', 'They act as brands, communities and content creators. A distinct identity gives fans a sense of belonging, shown in merchandise, global fan bases and fan chats.'],
            ['Athletes and coaches', 'They fuel engagement beyond the field through digital communication, celebrity status and personal stories.'],
            ['Events and mega-events', 'Must-see viewing for avid and casual fans. Mega-events such as the Olympic Games reach the world and trigger strong emotional and national feelings.'],
            ['Sporting venues', 'The in-stadium experience is a key driver of emotional engagement. Fans who post from the stadium become organic brand ambassadors.'],
            ['Sponsors', 'They connect with customers through fan zones, giveaways and extra digital content such as player cams, replays and behind-the-scenes access.'],
          ],
        },
      ],
    },
    {
      kicker: 'Media and distribution',
      title: 'How content reaches fans',
      blocks: [
        {
          type: 'table',
          head: ['Platform', 'What it does for engagement'],
          rows: [
            ['Print media', 'Falling but not gone. It still carries credibility, context and tradition, and bridges generations of fans.'],
            ['Broadcast media', 'TV and radio make sport accessible worldwide. Commentary and production, such as extra cameras and microphones in F1, shape how fans understand the game.'],
            ['Streaming platforms', 'Flexible, personalized and interactive. Fans get on-demand access on any device and can use real-time chats, reactions and votes.'],
            ['Social media', 'Immediate, interactive and global. Fans become creators, critics and ambassadors, and athletes talk to fans directly and unfiltered.'],
            ['Online content websites and apps', 'Live scores, exclusive content, news, fantasy play, ticketing and e-commerce. Used all year, with peaks in the playing season.'],
          ],
        },
      ],
    },
    {
      kicker: 'Interactive experiences',
      title: 'From watching to playing along',
      blocks: [
        {
          type: 'table',
          head: ['Platform', 'Why it deepens engagement'],
          rows: [
            ['Electronic games', 'Blend sport and gaming, teach rules and strategy, work year-round and connect fans worldwide.'],
            ['Sports betting', 'Raises interest in the outcome, so people watch even when their team is not playing. Betters dig into stats and form. Control varies by sport owners and governments.'],
            ['Fantasy sports', 'Turn spectators into active players with a season-long interest. Fans follow individual athletes more, which boosts athlete engagement.'],
            ['Esports', 'New formats and communities that reach younger audiences who are hard to reach. Viewers learn game mechanics and strategy.'],
            ['Digital assets', 'Podcasts, online series and fan tokens that give fans a small say, such as votes, and access to exclusive rewards.'],
          ],
        },
      ],
    },
    {
      kicker: 'Stars',
      title: 'Athletes drive engagement',
      blocks: [
        {
          type: 'p',
          text: 'Many athletes are global celebrities with hundreds of millions of followers. Two things matter as much as being a star on the field: being **authentic** and **posting regularly**.',
        },
        {
          type: 'bullets',
          items: [
            'Football has the most athletes on the most-followed list, which reflects football’s global size and its players’ active use of social media.',
            'The lecture lists Cristiano Ronaldo (over one billion followers across platforms), Lionel Messi, Neymar, David Beckham, Virat Kohli, LeBron James and Kylian Mbappé among the most followed.',
            'Athletes humanize the sport, tell stories and build direct links with fans on several platforms.',
          ],
        },
        { type: 'callout', title: 'A caution', text: 'Follower numbers change quickly. Treat any list as a snapshot and check the date.' },
      ],
    },
    {
      kicker: 'Attention',
      title: 'Live time is small. Attention is split.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Sports a young fan follows', value: '6.3', note: 'on average (Nielsen)' },
            { label: 'Fans who use a second screen during live sport', value: '87%', note: 'Sport Business Institute' },
          ],
        },
        {
          type: 'bullets',
          items: [
            'Event time is only a small share of all the hours in a year, so most engagement happens **beyond live event time**.',
            'With attention fragmented, many stakeholders invest heavily in deeper engagement.',
            'New technology gives sports brands new tools, but it also changes how fans behave, so informed choices about where to spend matter.',
          ],
        },
        { type: 'p', text: 'Modern organizations integrate several platforms into one connected ecosystem instead of relying on a single channel.' },
      ],
    },
    {
      kicker: 'Small but growing',
      title: 'Niche and emerging sports',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Niche sport', text: 'A relatively small but passionate following. It may stay small.' },
            { title: 'Emerging sport', text: 'In the early stages of gaining wider popularity, with potential to reach the mainstream.' },
          ],
        },
        {
          type: 'p',
          text: 'Both usually lack big budgets, large leagues and mainstream coverage, so they rely on **innovation, authenticity and accessibility**.',
        },
        {
          type: 'table',
          head: ['Sport (2025, per the lecture)', 'Why it is growing'],
          rows: [
            ['Ultimate (frisbee)', 'Played in over 80 countries and well organized. Fast-paced, self-officiated, and athletes post travel and training content.'],
            ['Teqball', 'Backed by football stars and growing in over 100 countries. Curved-table rallies suit short video.'],
            ['Drone racing', 'Backed by media and tech investors, with a video game and simulator. Real-time data and first-person camera views.'],
            ['Sport climbing', 'An Olympic sport since 2021. Strong with youth and outdoor communities, and big on social media.'],
            ['Pickleball', 'The fastest-growing sport in North America, with pro leagues and sponsors. Easy to learn and social. A niche sport that is now emerging.'],
          ],
        },
      ],
    },
    {
      kicker: 'The playbook',
      title: 'How small sports win fans',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Social media and viral clips.** Short videos, behind-the-scenes content and humor.',
            '**Community events and easy access.** Local tournaments and low-cost entry bring word of mouth.',
            '**Streaming and digital access.** YouTube and Twitch skip TV deals, with live chat and global reach.',
            '**Authenticity and culture.** Strong identities and values, and a community feel.',
            '**Gamification and technology.** Real-time data, AR, fantasy leagues and micro-betting.',
            '**Niche appeal with global reach.** Serve underserved markets and local traditions that fans love to discover.',
            '**Athlete access and personal brands.** Athletes talk to fans directly and become micro-influencers.',
          ],
        },
        {
          type: 'callout',
          title: 'Link to the group assignment',
          text: 'The Nielsen report names pickleball as an emerging sport and describes social-first brand campaigns. When you evaluate a trend, ask which of these platforms supports it and what evidence you have.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Engagement platform', def: 'A channel or activity through which fans connect with sport, from the field of play to social media to esports.' },
    { term: 'Live event time', def: 'The short window when an event is happening. Most fan engagement happens outside it.' },
    { term: 'Beyond live event time', def: 'All other time, when fans engage through media, apps, games and social platforms.' },
    { term: 'Organic brand ambassador', def: 'A fan who promotes a team or sponsor by posting about it, without being paid.' },
    { term: 'Second screen', def: 'Using a phone, tablet or laptop while watching sport on another screen.' },
    { term: 'Fantasy sports', def: 'Games where fans build teams of real athletes and score points from real performances.' },
    { term: 'Esports', def: 'Organized competitive video gaming, watched live and online.' },
    { term: 'Fan token', def: 'A digital item that gives fans small decision rights, such as votes, and access to rewards.' },
    { term: 'Niche sport', def: 'A sport with a small but passionate following that may stay small.' },
    { term: 'Emerging sport', def: 'A sport in the early stages of growing toward mainstream popularity.' },
  ],
  cards: [
    { front: 'The three families of engagement platforms', back: 'Core sports ecosystem, media and distribution, and fan engagement and interactive experiences.' },
    { front: 'Two traits of an athlete who drives engagement', back: 'Authenticity and a regular pattern of posting, as well as being a star on the field.' },
    { front: 'Niche vs emerging', back: 'A niche sport has a small, passionate following and may stay small. An emerging sport is growing toward the mainstream.' },
    { front: 'Why is “beyond live time” so important?', back: 'Live event time is a small share of the year, so most engagement happens through other platforms.' },
    { front: 'Why do sports betting and fantasy sports raise engagement?', back: 'People care about outcomes and individual athletes even when their own team is not playing.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Pickleball: from niche to emerging in the United States',
    note: 'Figures are from the Sports & Fitness Industry Association’s 2025 Topline Participation Report, as reported on 18 March 2025. They show US players only.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Nearly 20 million players',
        blocks: [
          {
            type: 'bars',
            title: 'US pickleball players',
            unit: 'million',
            items: [
              { label: '2023', value: 13.58 },
              { label: '2024', value: 19.81 },
            ],
          },
          { type: 'p', text: 'That is growth of about 46% in one year. The lecture calls pickleball perhaps the best example of a sport that started niche and is now emerging.' },
        ],
      },
      {
        kicker: 'Why it grows',
        title: 'Matching the playbook',
        blocks: [
          {
            type: 'table',
            head: ['Playbook idea', 'Pickleball'],
            rows: [
              ['Easy to join', 'Easy to learn, low barriers to start, and social to play'],
              ['Community', 'Local play and clubs bring word of mouth'],
              ['Pro structure', 'Professional leagues and major sponsorships have followed'],
              ['Social-first brands', 'Nielsen’s 2025 report points to a brand campaign built for social media, #ProPickle by Nature Made'],
            ],
          },
          { type: 'callout', title: 'Read it carefully', text: 'Participation numbers count people who played at least once in the year. They do not say how many are fans or how much they spend.' },
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
                title: 'Report: Pickleball participation surges to nearly 20 million in 2024',
                url: 'https://www.thedinkpickleball.com/report-pickleball-participation-surges-to-nearly-20-million-in-2024/',
                note: 'The Dink, 18 March 2025, reporting the SFIA 2025 Topline Participation Report: 19.8 million US players in 2024, 13.58 million in 2023, growth of 45.8%. A trade site reporting the SFIA figures.',
              },
              {
                title: 'The future of sport: Nielsen’s 2025 report reveals growth drivers',
                url: 'https://www.nielsen.com/news-center/2025/the-future-of-sport-nielsens-2025-report-reveals-growth-drivers/',
                note: 'Nielsen, 12 June 2025. Pickleball described as emerging, and the #ProPickle social-first campaign by Nature Made.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Summit’s engagement plan',
    universe: 'summit',
    slides: [
      {
        kicker: 'Live time',
        title: 'How small is game time?',
        blocks: [
          {
            type: 'steps',
            items: [
              'Summit plays **40 home games**. Each takes about **2.5 hours**.',
              'That is 40 × 2.5 = **100 hours** of live home games a year.',
              'A year has 365 × 24 = **8,760 hours**.',
              'So live home games fill about **1.1%** of the year (100 ÷ 8,760).',
            ],
          },
          { type: 'callout', title: 'The point', text: 'If Summit only talked to fans during games, it would be silent for 99% of the year. Engagement has to run all the time.' },
        ],
      },
      {
        kicker: 'The plan',
        title: 'One platform from each family',
        blocks: [
          {
            type: 'table',
            head: ['Family', 'Platform', 'Summit action'],
            rows: [
              ['Core ecosystem', 'Venue', 'Fan zone and a pre-game show at Summit Arena'],
              ['Core ecosystem', 'Athletes', 'Players post training clips and stories from their own accounts'],
              ['Media and distribution', 'Streaming', 'Summit Media streams every game with live chat'],
              ['Media and distribution', 'Social media', 'Short highlight clips within minutes of each goal'],
              ['Interactive', 'Fantasy sports', 'A free season-long fantasy game inside the Summit app'],
            ],
          },
        ],
      },
      {
        kicker: 'Reading the result',
        title: 'How many fans play along?',
        blocks: [
          {
            type: 'steps',
            items: [
              'The Summit app has **40,000** monthly users.',
              'A quarter of them, **25%**, play the fantasy game.',
              '40,000 × 25% = **10,000** fantasy players.',
              'That is the same number as the arena’s 10,000 seats, so fantasy reaches as many fans as a sold-out game, every day of the season.',
            ],
          },
          { type: 'p', text: 'These numbers are invented to show the method. A real manager would also ask how much those fantasy players spend.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ practice
  questions: [
    {
      id: 'q1',
      type: 'mcq',
      q: 'Which of these belongs to the “fan engagement and interactive experiences” family of platforms?',
      options: ['Fantasy sports', 'Print media', 'Sporting venues', 'Sponsors and advertisers'],
      answer: 0,
      explanation: 'Fantasy sports, electronic games, sports betting, esports and digital assets are the interactive family. Print media is media and distribution. Venues and sponsors are core ecosystem.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Why is a fan who posts from the stadium called an organic brand ambassador?',
      options: [
        'They promote the team or sponsors online without being paid',
        'They are employed by the team’s marketing department',
        'They hold a season ticket',
        'They own the team’s fan token',
      ],
      answer: 0,
      explanation: 'Fans who post from the stadium spread the team’s brand and the sponsors’ messages for free, which boosts engagement online.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which statement best separates a niche sport from an emerging sport?',
      options: [
        'A niche sport may stay small, while an emerging sport is growing toward the mainstream',
        'A niche sport is always professional, while an emerging sport is always amateur',
        'A niche sport is only played in one country, while an emerging sport is global',
        'There is no difference',
      ],
      answer: 0,
      explanation: 'A niche sport has a small but passionate following and may remain small. An emerging sport is gaining ground with potential for mainstream acceptance.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Summit plays 40 home games of 2.5 hours. What share of the 8,760 hours in a year is live home-game time?',
      options: ['About 1.1%', 'About 11%', 'About 0.1%', 'About 25%'],
      answer: 0,
      explanation: '40 × 2.5 = 100 hours. 100 ÷ 8,760 is about 0.0114, or 1.1%.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'The Summit app has 40,000 monthly users and 25% play the fantasy game. How many fantasy players is that?',
      options: ['10,000', '1,000', '25,000', '16,000'],
      answer: 0,
      explanation: '40,000 × 0.25 = 10,000.',
      review: { section: 'sports', slide: 2 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'SFIA reported US pickleball players rising from 13.58 million in 2023 to 19.81 million in 2024. About what was the growth?',
      options: ['46%', '6%', '25%', '100%'],
      answer: 0,
      explanation: '19.81 ÷ 13.58 is about 1.46, so growth was about 46%. The source reports 45.8%.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise. Choose a niche or emerging sport you know. Name three engagement platforms it uses and explain how each one builds a connection with fans.',
      answer: [
        'A strong answer picks a real sport and three different platforms, such as short social video, live streaming with chat, and local community events.',
        'Each platform is tied to a mechanism from the lecture, for example short clips going viral, streaming bypassing TV deals, or low-cost events spreading by word of mouth.',
        'It notes that small sports combine platforms instead of relying on one.',
      ],
      review: { section: 'plain', slide: 7 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain how modern sports organizations build fan engagement across more than one platform. Use examples from at least two of the three families of platforms.',
      answer: [
        'Names the three families: core sports ecosystem, media and distribution, and fan engagement and interactive experiences.',
        'Explains a core example, such as a venue experience that fans post about, or athletes who talk directly to fans.',
        'Explains a media example, such as streaming with live chat or social media highlights.',
        'Explains an interactive example, such as fantasy sports keeping fans interested all season.',
        'Concludes that platforms work best integrated into one connected ecosystem, because attention is split and live event time is short.',
      ],
      marking: [
        'Identifies the families (2)',
        'Explains at least two platforms with a mechanism for engagement (4)',
        'Explains why integration matters (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Evaluate the importance of athletes as drivers of fan engagement. Include one risk or limit.',
      answer: [
        'Athletes are global celebrities with huge social followings, so they extend engagement beyond the field of play.',
        'Authenticity and a regular posting pattern matter as much as performance, because they build direct, personal links.',
        'Athletes humanize the sport and tell stories, which also helps teams and sponsors.',
        'Fantasy sports and betting also focus fans on individual athletes.',
        'Limits: performance is not controlled, follower counts change quickly, and engagement that depends on one star is fragile.',
      ],
      marking: [
        'Explains why athletes drive engagement (3)',
        'Mentions authenticity and regular posting (2)',
        'Gives a valid risk or limit (2)',
        'Reaches a judgment (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'A small emerging sport has almost no TV coverage and a limited budget. Recommend three engagement approaches and explain why each suits its situation.',
      answer: [
        'Short-form social video: cheap to make, easy to share and shows skill and personality.',
        'Direct streaming on YouTube or Twitch: avoids TV deals and offers live chat and global reach.',
        'Low-cost community events and athlete access: low barriers to join, word of mouth and personal links with fans.',
        'Each approach is tied to the sport’s limits: small budget, no mainstream coverage and a need for authenticity.',
      ],
      marking: [
        'Three suitable approaches (3)',
        'Reasons linked to the sport’s situation (3)',
      ],
    },
  ],

  videos: [],
};
