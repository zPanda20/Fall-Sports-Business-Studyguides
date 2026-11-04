// Foundations of Sport Management, Lectures 5 and 6: sports media rights and media consumption.
// Built from the Lecture 5 slides (definition, packaging, value, fees, delivery, objectives) and the Lecture 6 slides
// (fifteen trends in media consumption). Figures are as stated in the lecture unless the real example slide says otherwise.
// Real example: the Premier League UK rights deal from 2025/26. The Summit numbers are made up.

export const sportsMediaRightsTopic = {
  id: 'sports-media-rights',
  course: 'sport-management',
  title: 'Sports media, broadcast rights and consumption',
  sessions: 'Session 6',
  reading: 'Lecture 5 and Lecture 6 slides',
  minutes: 40,
  summary:
    'What media rights are, why sport is worth so much to broadcasters and streamers, how rights are packaged and priced, and how fans now watch.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Media rights are the right to show the game',
      blocks: [
        {
          type: 'big',
          text: 'A **media right** is a contract that says who may record, broadcast, stream or otherwise show a sporting event.',
        },
        {
          type: 'bullets',
          items: [
            'The event owner sells the right. A broadcaster or streamer buys it and sells **advertising** or **subscriptions** to earn the money back.',
            'For most rights holders, media rights are the **biggest source of revenue**. The money pays for athlete salaries, venues and production.',
            'Rights are sold by a **tender** (a formal invitation to bid), a bidding process, or direct negotiation.',
          ],
        },
        {
          type: 'callout',
          title: 'Distribution versus rights',
          text: 'The **right** is the permission. **Distribution** is the way the audience actually receives the content: television, streaming, social media or radio.',
        },
      ],
    },
    {
      kicker: 'Why sport sells',
      title: 'Five things media companies love about sport',
      blocks: [
        {
          type: 'table',
          head: ['Trait', 'What it means'],
          rows: [
            ['Live', 'Fans want to watch as it happens, so they do not wait for a replay'],
            ['Scarce', 'There are only so many games, tournaments and championships'],
            ['Predictable', 'A season gives a schedule of programming'],
            ['Engaging', 'Fans have strong emotional and commercial ties to teams and athletes'],
            ['Social', 'Big events create conversation across traditional and digital media'],
          ],
        },
        {
          type: 'kpis',
          items: [
            { label: 'Super Bowl audience', value: '125M+', note: 'viewers, per the lecture' },
            { label: 'FIFA World Cup, 2022 final', value: '~1.4B', note: 'viewers, per the lecture' },
            { label: 'World Cup 2026 expected', value: '6B+', note: 'total viewers, per the lecture' },
          ],
        },
      ],
    },
    {
      kicker: 'Slicing the rights',
      title: 'Rights can be divided in five ways',
      blocks: [
        {
          type: 'table',
          head: ['Way to divide', 'Examples'],
          rows: [
            ['Territory', 'France, the UK, international'],
            ['Time period', 'One match, one season, one event'],
            ['Platform', 'TV, streaming, mobile, radio'],
            ['Content', 'Live games, highlights, replays, documentaries'],
            ['Exclusivity', 'Exclusive or non-exclusive'],
          ],
        },
        {
          type: 'p',
          text: 'Four main **types** of right: **domestic** (inside a country), **international** (other countries), **digital** (internet and mobile, such as Netflix, DAZN and YouTube) and **radio** (live audio commentary).',
        },
        {
          type: 'columns',
          items: [
            { title: 'Exclusive', text: 'One distributor gets the package. Benefits: higher fee and simple management. Challenge: fans need a specific service and reach is limited to it.' },
            { title: 'Non-exclusive', text: 'Several distributors carry it. Benefits: wider reach and more distribution. Challenge: buyers are less willing to pay and invest.' },
          ],
        },
      ],
    },
    {
      kicker: 'Packaging',
      title: 'The NFL model: sell it in pieces',
      blocks: [
        {
          type: 'p',
          text: 'A sport owner does not have to sell everything to one company. It can split the rights into **packages** (rights fragmentation) and sell them separately.',
        },
        {
          type: 'table',
          head: ['NFL package', 'Typical games', 'Rights holder (per the lecture)'],
          rows: [
            ['Sunday afternoon, AFC', 'Sunday 1:00, 4:05 and 4:25 games', 'CBS and Paramount+'],
            ['Sunday afternoon, NFC', 'Sunday 1:00, 4:05 and 4:25 games', 'FOX'],
            ['Sunday Night Football', 'Sunday 8:20 games', 'NBC and Peacock'],
            ['Monday Night Football', 'Monday 8:15 games', 'ESPN and ABC'],
            ['Thursday Night Football', 'Thursday 8:15 games', 'Amazon Prime Video'],
            ['NFL Sunday Ticket', 'Out-of-market Sunday afternoon games', 'YouTube TV'],
            ['NFL Network', 'Selected games, some international', 'NFL Network'],
            ['Special and event games', 'Christmas, international and so on', 'Various partners'],
          ],
        },
        {
          type: 'callout',
          title: 'Why split it up?',
          text: 'Separate packages create **competition between media companies**. That lets the NFL ask for very large rights fees.',
        },
      ],
    },
    {
      kicker: 'What it is worth',
      title: 'What drives the value, and where it is going',
      blocks: [
        {
          type: 'bars',
          title: 'Global sports media rights value',
          unit: '$B',
          items: [
            { label: '2025 (lecture)', value: 58 },
            { label: '2026 (guest slides)', value: 66 },
            { label: '2030 forecast (lecture)', value: 78 },
          ],
        },
        {
          type: 'bullets',
          items: [
            'Value is driven by the **attractiveness** to key stakeholders, the **size of the fan base**, **star athletes**, **time zones**, **local competition**, the **buyers’ purchasing power** and the **advertising market**.',
            'Highly rated content can demand higher payments.',
            'Growth to 2030 is expected from streaming platforms, demand for live premium sport, growth in cricket and women’s sport, and renewals of major contracts in North America and Asia.',
            'High viewership means advertising and subscription revenue for the buyer.',
          ],
        },
        {
          type: 'callout',
          title: 'Check the growth',
          text: '$58B to $78B is a rise of about 34.5%, which is roughly **6% a year** for five years. The 2025 and 2030 numbers are from the lecture. The 2026 number is from the guest speaker’s slides, which cite SportBusiness.',
        },
      ],
    },
    {
      kicker: 'Where the money sits',
      title: 'Which sports and which markets',
      blocks: [
        {
          type: 'bars',
          title: 'Top 5 sports by media rights value, 2024 (SportBusiness, shown in the lecture)',
          unit: '$M',
          items: [
            { label: 'Football (soccer)', value: 21452 },
            { label: 'American football', value: 12627 },
            { label: 'Basketball', value: 4641 },
            { label: 'US college sports', value: 4013 },
            { label: 'Baseball', value: 3854 },
          ],
        },
        {
          type: 'bars',
          title: 'Top 5 markets by media rights value, 2024 (SportBusiness, shown in the lecture)',
          unit: '$M',
          items: [
            { label: 'United States', value: 29526 },
            { label: 'United Kingdom', value: 4965 },
            { label: 'Germany', value: 2526 },
            { label: 'Indian subcontinent', value: 2508 },
            { label: 'Spain', value: 2144 },
          ],
        },
        {
          type: 'p',
          text: 'Two takeaways from the lecture: **football** has the highest total value worldwide, and the **United States** contributes the most money. The NFL alone is the largest single property, and about 97% of its value comes from the USA.',
        },
      ],
    },
    {
      kicker: 'What it costs',
      title: 'Rights fees in the lecture',
      blocks: [
        {
          type: 'table',
          head: ['Property', 'Fee (as stated in the lecture)'],
          rows: [
            ['NFL season plus Super Bowl', 'About $109B over 11 years, quoted as $9.7B a year'],
            ['English Premier League (UK)', '£6.7B over four years from 2025/26'],
            ['Champions League', '$12.8B over four years, 2022 to 2025'],
            ['IPL cricket', 'About $6.2B over five years, 2023 to 2027'],
            ['NBC and the Olympic Games', '$7.65B for six Games, 2022 to 2032'],
            ['FIFA World Cup 2026', 'Around $3.9B in media rights for FIFA'],
            ['World Athletics', '$55M a year'],
          ],
        },
        {
          type: 'bars',
          title: 'Formula 1 media rights income (SportBusiness, per the lecture)',
          unit: '$M',
          items: [
            { label: '2020', value: 627 },
            { label: '2022', value: 936 },
            { label: '2024', value: 1180 },
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Do the arithmetic before you quote it',
          text: '$109B ÷ 11 years is about **$9.9B** a year, not $9.7B, so quote the lecture’s figure as approximate. F1 rose about 88% from 2020 to 2024 ($1,180M ÷ $627M).',
        },
      ],
    },
    {
      kicker: 'Getting it to fans',
      title: 'Linear, OTT and social: how sport is delivered',
      blocks: [
        {
          type: 'table',
          head: ['Route', 'What it is'],
          rows: [
            ['Traditional broadcast', 'Free-to-air TV, pay TV (cable) and radio'],
            ['OTT streaming', 'Over the top: a service delivered by internet that bypasses cable, broadcast and satellite'],
            ['Social media', 'YouTube, TikTok, Instagram and others, mainly for short highlights and clips'],
          ],
        },
        {
          type: 'bullets',
          items: [
            'Linear TV viewing of live sport has **declined** over the years, while streaming has grown. **74% of Millennials** and **71% of Gen Z** sports fans say they stream sport online (Nielsen, per the lecture).',
            'Streaming gives direct customer relationships, subscriber revenue, **viewer data**, global reach, flexible viewing and digital advertising.',
            'Some leagues, such as the NFL and NHL, **own their own networks**. That gives tighter control over scheduling, advertising and licensing, but can push more games behind a paywall.',
            'Mobile-first viewing and the **second screen** (watching while using another device) keep growing.',
            'TV is not dead: it still produces huge cumulative audiences, so rights holders mix linear and digital.',
          ],
        },
      ],
    },
    {
      kicker: 'Rights holders’ goals',
      title: 'Eight things a rights holder wants',
      blocks: [
        {
          type: 'table',
          head: ['Objective', 'How media helps'],
          rows: [
            ['Maximize revenue', 'Sell on several platforms and regions, exclusively or not, directly or through a partner'],
            ['Reach and engagement', 'Broadest audience through different platforms at home and abroad'],
            ['Grow the sport and fan base', 'Storytelling and live and non-live content'],
            ['Protect intellectual property', 'Keep legal control over distribution and monetize content'],
            ['Build strategic partnerships', 'Broadcasters, sponsors and technology platforms that add value and visibility'],
            ['Control brand image', 'Doing the broadcast yourself lets you shape production quality and storytelling'],
            ['Collect and use data', 'Learn who watches, what, and when they stop, to improve ads, sponsorship and future rights'],
            ['Stay competitive', 'Innovate in distribution and adopt new technology'],
          ],
        },
        {
          type: 'p',
          text: 'The mix depends on the sport’s type, size and market, the supply and demand for rights, and what fans want. The rights holder needs a **balance between revenue and viewers**.',
        },
      ],
    },
    {
      kicker: 'How fans watch now',
      title: 'Fifteen trends in media consumption',
      blocks: [
        {
          type: 'table',
          head: ['Theme', 'Trends (numbers are from the lecture list)'],
          rows: [
            ['Platform and timing', '1 Younger fans stream first or only. 2 On-demand viewing. 3 Short-form clips and social media. 4 Growth in video, including non-live.'],
            ['Behavior', '5 Several screens at once. 6 Games, gambling, esports and fantasy sport compete for time.'],
            ['Content', '7 Storytelling about athletes. 8 Audio and podcasts. 9 Niche sports gain exposure. 10 Women’s sport viewing grows.'],
            ['Technology', '11 Data-driven content. 12 Personalized, immersive and interactive experiences. 14 Personalized feeds and alerts.'],
            ['Who controls the message', '13 Athlete-owned media. 15 Globalization of audiences, so a multi-faceted approach is needed.'],
          ],
        },
        {
          type: 'callout',
          title: 'One sentence to remember',
          text: 'The sports media ecosystem is becoming more **fragmented, digital, data-driven, global and consumer focused**.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Media rights', def: 'The contractual right to record, broadcast, stream or otherwise distribute a sporting event. Also called broadcasting rights.' },
    { term: 'Tender', def: 'A formal invitation for buyers to submit bids for a package of rights.' },
    { term: 'Rights fragmentation', def: 'Splitting rights into packages that can be sold separately.' },
    { term: 'Exclusive rights', def: 'One distributor gets a package. Usually a higher fee, but reach is limited.' },
    { term: 'Non-exclusive rights', def: 'Several distributors can carry the content. Wider reach, usually lower fees.' },
    { term: 'Domestic rights', def: 'The right to show content inside a specific country.' },
    { term: 'International rights', def: 'The right to show content in other countries.' },
    { term: 'Linear TV', def: 'Scheduled television, either free-to-air or pay TV.' },
    { term: 'OTT', def: 'Over the top: streaming delivered by internet that bypasses cable, broadcast and satellite.' },
    { term: 'Second screen', def: 'Using another device, such as a phone, while watching sport.' },
    { term: 'Rights holder', def: 'The owner of the event or content who sells the media rights.' },
  ],
  cards: [
    { front: 'Five traits that make sport attractive to media', back: 'Live, scarce, predictable, engaging and social.' },
    { front: 'Five ways to divide media rights', back: 'Territory, time period, platform, content and exclusivity.' },
    { front: 'Why does the NFL sell rights in packages?', back: 'Separate packages create competition between media companies and raise the fees.' },
    { front: 'Global sports media rights value', back: 'About $58B in 2025, forecast to reach about $78B by 2030 (lecture).' },
    { front: 'What does OTT mean?', back: 'Over the top: streaming by internet that bypasses cable, broadcast and satellite distributors.' },
    { front: 'How do broadcasters earn the fee back?', back: 'By selling advertising and subscriptions.' },
    { front: 'Name four objectives of a rights holder', back: 'Maximize revenue, reach and engagement, grow the fan base, protect intellectual property, partnerships, control brand image, collect data, stay competitive (any four).' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The Premier League’s UK rights deal',
    note: 'A real case of packaging. Packages and the £6.7 billion total are from SVG Europe’s report on the Premier League announcement of December 2023, covering the four seasons from 2025/26. Dollar conversions move with the exchange rate, so the study guide keeps pounds.',
    slides: [
      {
        kicker: 'The deal',
        title: 'Five packages, three buyers, £6.7 billion',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Total over four seasons', value: '£6.7B', note: 'Premier League, announced December 2023' },
              { label: 'Live matches a season', value: 'Up to 270', note: 'across the UK packages' },
              { label: 'Buyers of live rights', value: 'Sky Sports and TNT Sports', note: 'BBC Sport holds highlights' },
            ],
          },
          {
            type: 'p',
            text: 'The league did not sell “the Premier League” as one lump. It cut the season into five live packages and invited bids for each.',
          },
        ],
      },
      {
        kicker: 'Packages',
        title: 'How the 270 matches were split',
        blocks: [
          {
            type: 'bars',
            title: 'Live matches per season by package',
            unit: 'matches',
            items: [
              { label: 'A (TNT Sports)', value: 52 },
              { label: 'B (Sky Sports)', value: 50 },
              { label: 'C (Sky Sports)', value: 66 },
              { label: 'D (Sky Sports)', value: 44 },
              { label: 'E (Sky Sports)', value: 58 },
            ],
          },
          {
            type: 'bullets',
            items: [
              '52 + 50 + 66 + 44 + 58 = **270** matches.',
              'Two buyers, not one: **competition between buyers** is the point of packaging, as in the NFL model.',
            ],
          },
        ],
      },
      {
        kicker: 'Reading it',
        title: 'What the case teaches',
        blocks: [
          {
            type: 'table',
            head: ['Lecture idea', 'In the Premier League deal'],
            rows: [
              ['Territory', 'These are the UK rights. International rights are sold separately'],
              ['Time period', 'Four seasons from 2025/26'],
              ['Content', 'Live matches go to Sky and TNT. Highlights go to BBC Sport'],
              ['Rights fragmentation', 'Five packages bid for separately'],
              ['International over domestic', 'The lecture says international rights now exceed domestic, at about £2.1B a year against £1.675B a year here (£6.7B ÷ 4)'],
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            title: 'What this case does not show',
            text: 'It does not tell you what each package cost. The £6.7B is the total. The £2.1B international figure and the £1.675B average are the study guide’s arithmetic on the lecture’s numbers, not figures the league published per package.',
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
                title: 'Premier League seals £6.7 billion UK rights deal with Sky Sports, TNT Sports and BBC Sport',
                url: 'https://www.svgeurope.org/blog/headlines/premier-league-seals-6-7-billion-uk-rights-deal-with-sky-sports-tnt-sports-and-bbc-sport-for-2025-26-season-onwards/?print=1',
                note: 'SVG Europe. Five live packages (A 52, B 50, C 66, D 44, E 58) and “up to 270” live games a season. The league’s statement says £6.7 billion across the four-year period.',
              },
              {
                title: 'Record-breaking £6.7 billion TV deal guarantees more live Premier League matches than ever before',
                url: 'https://www.fourfourtwo.com/news/record-breaking-pound67-billion-tv-deal-guarantees-more-live-premier-league-matches-than-ever-before',
                note: 'FourFourTwo. A second report of the same announcement.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Summit sells its media rights',
    universe: 'summit',
    slides: [
      {
        kicker: 'The packages',
        title: 'Four packages worth $30 million a year',
        blocks: [
          {
            type: 'bars',
            title: 'Summit media rights income by package',
            unit: '$M a year',
            items: [
              { label: 'Linear TV', value: 12 },
              { label: 'Streaming', value: 9 },
              { label: 'International', value: 6 },
              { label: 'Highlights', value: 3 },
            ],
          },
          {
            type: 'steps',
            items: [
              '12 + 9 + 6 + 3 = **$30 million** a year.',
              'That is the biggest line in Summit’s $76 million revenue: 30 ÷ 76 is about **39.5%**.',
              'Matches the lecture: for most rights holders, media rights are the biggest source of revenue.',
            ],
          },
        ],
      },
      {
        kicker: 'Competition',
        title: 'What happens when a streamer joins the bidding',
        blocks: [
          {
            type: 'p',
            text: 'Next cycle, a streaming service enters the tender. The linear broadcaster, which now has competition for viewers’ attention, offers less. The streamer bids more.',
          },
          {
            type: 'table',
            head: ['Package', 'Before', 'After', 'Change'],
            rows: [
              ['Linear TV', '$12.0M', '$10.8M', '−10%'],
              ['Streaming', '$9.0M', '$10.8M', '+20%'],
              ['International', '$6.0M', '$6.0M', 'No change'],
              ['Highlights', '$3.0M', '$3.0M', 'No change'],
              ['**Total**', '**$30.0M**', '**$30.6M**', '**+2%**'],
            ],
          },
          {
            type: 'callout',
            title: 'What to notice',
            text: 'The total barely moves, but the mix shifts from linear to streaming. Fewer fans on free-to-air TV is the cost, and Summit needs a plan to keep reaching them, such as highlights on social media.',
          },
        ],
      },
      {
        kicker: 'Objectives',
        title: 'Summit’s trade-off in one table',
        blocks: [
          {
            type: 'table',
            head: ['Rights holder objective', 'Summit’s decision'],
            rows: [
              ['Maximize revenue', 'Sell four separate packages instead of one'],
              ['Broadest reach', 'Keep highlights free on social media'],
              ['Grow the fan base', 'Season-long storytelling content'],
              ['Collect data', 'Streaming partner shares viewer data'],
              ['Control brand image', 'Summit produces its own highlights'],
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
      q: 'Which of these is NOT one of the five traits that make sport attractive to media companies in the lecture?',
      options: ['Free to produce', 'Live', 'Scarce', 'Predictable'],
      answer: 0,
      explanation: 'The five traits are live, scarce, predictable, engaging and social. Sport is not free to produce.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Why do rights holders split their rights into packages?',
      options: [
        'It creates competition between media companies and raises fees',
        'It lets fans watch for free',
        'It avoids the need for a contract',
        'It reduces the number of matches',
      ],
      answer: 0,
      explanation: 'The NFL model shows that separate packages create competition between buyers, which lets the owner ask for large fees.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'What does OTT mean?',
      options: [
        'A streaming service delivered by internet that bypasses cable, broadcast and satellite',
        'Only television',
        'Official ticket terms',
        'On-the-table tender',
      ],
      answer: 0,
      explanation: 'OTT means over the top: content is delivered through the internet rather than through traditional distributors.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which is a potential benefit of non-exclusive rights?',
      options: [
        'Greater audience reach',
        'A guaranteed higher fee',
        'Simple rights management',
        'Fans need only one subscription',
      ],
      answer: 0,
      explanation: 'Non-exclusive rights allow multiple distributors to carry the content. The downside is buyers are less willing to pay and invest.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Summit sells four packages: linear $12M, streaming $9M, international $6M and highlights $3M. What is the total?',
      options: ['$30M', '$24M', '$36M', '$27M'],
      answer: 0,
      explanation: 'Add the four packages: 12 + 9 + 6 + 3 = 30 million dollars.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Summit’s linear package falls 10% from $12M and streaming rises 20% from $9M. The other two do not change. What is the new total?',
      options: ['$30.6M', '$30.0M', '$31.2M', '$29.4M'],
      answer: 0,
      explanation: 'Linear: 12 × 0.9 = 10.8. Streaming: 9 × 1.2 = 10.8. Total: 10.8 + 10.8 + 6 + 3 = 30.6.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'The five Premier League UK packages carry 52, 50, 66, 44 and 58 live matches. How many matches is that in total?',
      options: ['270', '250', '280', '260'],
      answer: 0,
      explanation: '52 + 50 + 66 + 44 + 58 = 270.',
      review: { section: 'real', slide: 1 },
    },
    {
      id: 'q8',
      type: 'open',
      q: 'Exercise. A league currently sells all its rights to one free-to-air broadcaster. List three reasons it might split them into packages and two risks of doing so.',
      answer: [
        'Reasons: competition between buyers raises fees, different platforms reach different fans, and separate territories and content (live, highlights, international) can each earn their own money.',
        'Risks: fans must find games across several services, reach on free-to-air may fall, and managing many contracts is harder.',
        'A strong answer links each point to revenue, reach or control of the brand.',
      ],
      review: { section: 'plain', slide: 3 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain why media rights are so valuable to sports organizations and what affects their value.',
      answer: [
        'For most rights holders, media rights are the biggest source of revenue. They fund athlete salaries, venues and production.',
        'Sport is live, scarce, predictable, engaging and social, so it draws large audiences that broadcasters can sell to advertisers or subscribers.',
        'Value is shaped by attractiveness to stakeholders, the size of the fan base, star athletes, time zones, local competition, buyers’ purchasing power and the advertising market.',
        'Global value was about $58B in 2025 and is forecast to reach about $78B by 2030, driven by streaming, premium live sport, cricket, women’s sport and renewals.',
      ],
      marking: [
        'Explains why rights are a major revenue source (2)',
        'Links sport traits to buyer demand (2)',
        'Names at least three value drivers (3)',
        'Uses a figure or example (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Compare linear television and OTT streaming as ways of delivering sport. What does each mean for a rights holder?',
      answer: [
        'Linear TV (free-to-air or pay TV) gives mass reach and large cumulative audiences, but live viewing of sport on linear has declined and many deals are shrinking.',
        'OTT streaming delivers over the internet, bypassing cable, broadcast and satellite. It offers direct customer relationships, subscriber revenue, viewer data, global reach and flexible viewing. Younger fans stream first (74% of Millennials and 71% of Gen Z).',
        'For a rights holder, linear protects reach, while streaming brings data and new bidders. Most holders therefore mix both, and use social media for highlights to reach younger fans.',
      ],
      marking: [
        'Defines both routes accurately (2)',
        'Gives at least two points for each route (4)',
        'Explains the implication for the rights holder (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'A league is deciding whether to sell its next rights cycle exclusively to one streamer or in several non-exclusive packages. Recommend an approach and justify it using lecture ideas.',
      answer: [
        'Exclusive: one distributor, a higher fee and simple management, but fans need one specific service and reach is limited.',
        'Non-exclusive packages: wider reach and more distribution, and separate packages create competition, but buyers may pay and invest less.',
        'A strong answer chooses an approach and ties it to the league’s objectives, for example maximizing revenue versus growing the fan base, and notes that the rights holder needs a balance between revenue and viewers.',
      ],
      marking: [
        'Explains exclusive versus non-exclusive (2)',
        'Makes a clear recommendation (2)',
        'Links it to objectives and the revenue and reach balance (2)',
      ],
    },
  ],

  videos: [],
};
