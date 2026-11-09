// Foundations of Sport Management, Lecture 4 (30 September): social responsibility and fan engagement,
// and an introduction to sports marketing. Built from the Lecture 4 slides.
// Real example: FC Barcelona and UNICEF (see the sources slide). The Summit numbers are made up.

export const socialResponsibilityMarketingIntroTopic = {
  id: 'social-responsibility-marketing-intro',
  course: 'sport-management',
  title: 'Social responsibility, sport engagement and an introduction to sports marketing',
  sessions: 'Session 4',
  reading: 'Lecture 4 slides',
  minutes: 35,
  summary:
    'Why fans expect sport to stand for something, how that builds loyalty, and the core marketing ideas: three sectors, exchange, STP, the four Ps and the communication mix.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Fans expect more than winning',
      blocks: [
        {
          type: 'big',
          text: 'Today’s fans expect teams, athletes and leagues to **stand for something bigger than winning**, and to back their values with action.',
        },
        {
          type: 'p',
          text: '**Social responsibility in sport** means how clubs, athletes and organizations use their platforms to address social, environmental and community issues. Done authentically, it strengthens loyalty, builds trust and attracts new audiences.',
        },
        {
          type: 'bullets',
          items: [
            'Diversity, equity and inclusion',
            'Mental health awareness',
            'Environmental sustainability',
            'Anti-racism and anti-discrimination',
            'Support for local communities',
            'Charity and fundraising',
          ],
        },
      ],
    },
    {
      kicker: 'Purpose',
      title: 'Purpose-driven marketing',
      blocks: [
        {
          type: 'p',
          text: '**Purpose-driven marketing** puts a core mission or cause at the center of a brand’s marketing. The purpose becomes part of the brand’s identity and shows up consistently in campaigns, messages and experiences.',
        },
        {
          type: 'bullets',
          items: [
            'It goes beyond surface claims and tells stories that people connect with.',
            'It is more than good public relations. It is essential for **credibility**.',
            'Brands that act on real environmental, social and governance (ESG) goals build loyalty that lasts beyond the field.',
          ],
        },
      ],
    },
    {
      kicker: 'Why it works',
      title: 'Six ways it drives engagement',
      blocks: [
        {
          type: 'table',
          head: ['Mechanism', 'What happens'],
          rows: [
            ['Emotional connection and loyalty', 'Fans feel closer to teams and athletes who reflect their values. Supporting causes builds authenticity, pride and loyalty.'],
            ['Community engagement', 'Teams that back local causes, such as youth sport or food banks, earn grassroots support. Those fans attend, buy and stay engaged year-round.'],
            ['Campaigns that go viral', 'Hashtags, video stories and fundraising challenges become shareable content and fan touchpoints.'],
            ['Inclusive representation', 'Anti-racism and gender equality efforts diversify the fan base. More people feel welcome and valued.'],
            ['Athlete activism', 'Athletes who speak on climate, equality or justice can move fans to donate, take part and join public debate.'],
            ['Youth engagement and education', 'Partnerships with schools teach life skills, health and teamwork, and create lifelong fans.'],
          ],
        },
      ],
    },
    {
      kicker: 'The loop',
      title: 'A virtuous circle',
      blocks: [
        {
          type: 'cycle',
          center: 'Real action, real loyalty',
          items: [
            { title: 'The team runs a real program', text: 'It improves it over time' },
            { title: 'The team does good', text: 'People see the result' },
            { title: 'Fans feel proud', text: 'They identify more with the club' },
            { title: 'Fans engage more', text: 'Attend, buy, share' },
            { title: 'Fans give feedback', text: 'And the team listens' },
          ],
        },
        { type: 'p', text: 'The loop only works if step 1 is real. If the program is for show, the loop breaks.' },
      ],
    },
    {
      kicker: 'The risk',
      title: 'When it backfires',
      blocks: [
        {
          type: 'callout',
          tone: 'warn',
          title: 'Performative efforts get punished',
          text: 'If a campaign looks like a public relations exercise, it can backfire. Fans quickly spot a gap between words and actions.',
          items: [
            'Example from the lecture: a team that promotes environmental awareness but flies private jets excessively may face backlash.',
            'The safeguard is consistency: say what you do, and do what you say.',
          ],
        },
        { type: 'p', text: 'Social responsibility is no longer optional. Authentic support for causes builds deeper, longer-lasting relationships with fans.' },
      ],
    },
    {
      kicker: 'Introducing sports marketing',
      title: 'Two directions in one idea',
      blocks: [
        {
          type: 'p',
          text: 'Sports marketing is a branch of marketing with no single agreed definition. The lecture offers several, and they point in two directions.',
        },
        {
          type: 'columns',
          items: [
            { title: 'The business of sport', text: 'Promoting sports events, teams and athletes themselves.' },
            { title: 'Sport as a marketing tool', text: 'Using sport to sell or promote other goods and services, related to sport or not.' },
          ],
        },
        { type: 'p', text: 'It is also a way to connect with customers through a shared love of sport.' },
      ],
    },
    {
      kicker: 'The appeal',
      title: 'Why marketers love sport',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Winning matters at elite level. Taking part matters for amateurs.',
            'Live sport is **must-see** programming.',
            'It is **unscripted**: uncertainty of outcome is central.',
            'Athletes are celebrities who attract huge media attention.',
            'Sport creates strong emotions and loyalty that other industries rarely match.',
            'National teams carry a country’s hopes.',
            'Fans and participants are highly engaged and spend a lot of money and time on their passion.',
          ],
        },
      ],
    },
    {
      kicker: 'Three sectors',
      title: 'Marketing of, through and in sport',
      blocks: [
        {
          type: 'table',
          head: ['Sector', 'What it is', 'Who invests', 'Typical tools'],
          rows: [
            ['1. Marketing of sport', 'Promoting sports, events, facilities, athletes, teams and associations', 'The sports property itself', 'Brand building, advertising, merchandising, ticketing, hospitality, game-day marketing'],
            ['2. Marketing through sport', 'Using sport to promote goods or services, related to sport or not. Also called sport sponsorship', 'A body other than the property owner, usually a brand', 'Branding, sponsorship, advertising, merchandising, hospitality'],
            ['3. Participation in sport', 'Promoting sport to the public to increase participation', 'The property, or someone else such as government, clubs and communities', 'Grassroots campaigns, community programs'],
          ],
        },
        { type: 'p', text: 'Agencies often play central roles in the first two. Ticketing and consumer analytics companies help rights holders too.' },
      ],
    },
    {
      kicker: 'Marketing basics',
      title: 'Exchange, STP and the four Ps',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Exchange:** each side gets something worth more than what it gives, such as a fan paying for a ticket and getting an experience.',
            '**Relationship:** a fan who is loyal keeps coming back, creating repeated exchanges.',
          ],
        },
        {
          type: 'flow',
          items: [
            { title: 'Segmentation', text: 'Split a mass market into smaller, identifiable groups' },
            { title: 'Targeting', text: 'Choose which groups to spend resources on' },
            { title: 'Positioning', text: 'Shape the message so the offer is more attractive than the alternatives' },
          ],
        },
        {
          type: 'table',
          head: ['The four Ps', 'In sport'],
          rows: [
            ['Product', 'The sport or event, or the package offered to those who buy a relationship with the property'],
            ['Price', 'What is charged. Price and willingness to pay shape perceived value'],
            ['Place', 'Where and how the product is provided'],
            ['Promotion', 'The tools used to communicate the product to different segments'],
          ],
        },
      ],
    },
    {
      kicker: 'Reaching people',
      title: 'The communication and activation mix',
      blocks: [
        {
          type: 'p',
          text: 'The mix is the set of channels and methods used to reach audiences. Typical tools include event activations, athlete ambassadors, sponsor activations, fan campaigns, social media, influencers, apps, experiences with AR and VR, merchandise collaborations, sampling, hospitality and community programs.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Paid media', text: 'Advertising you pay for.' },
            { title: 'Owned media', text: 'Your own websites, apps and social channels.' },
            { title: 'Earned media', text: 'Public relations and news coverage.' },
            { title: 'Shared media', text: 'Fan-made content and social interaction.' },
          ],
        },
        {
          type: 'callout',
          title: 'Why integrate',
          text: 'A campaign that combines several tools reaches fans in more places, keeps the message consistent, builds loyalty, improves sponsor visibility and return on investment, and drives ticket, merchandise and digital activity.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Social responsibility (in sport)', def: 'How clubs, athletes and organizations use their platforms to address social, environmental and community issues.' },
    { term: 'Purpose-driven marketing', def: 'Marketing built around a core mission or cause that reflects the brand’s values and shows up consistently in everything it does.' },
    { term: 'ESG', def: 'Environmental, social and governance goals that organizations commit to and report on.' },
    { term: 'Performative (campaign)', def: 'A cause campaign that looks like public relations only, with no real action behind it. It can backfire.' },
    { term: 'Sports marketing', def: 'A branch of marketing that uses sport in any form to help sell goods and services, and also promotes sport itself.' },
    { term: 'Marketing of sport', def: 'Promoting sports, events, venues, athletes and teams. The sports property invests.' },
    { term: 'Marketing through sport', def: 'Using sport to promote other products or services, also known as sport sponsorship. A brand invests.' },
    { term: 'Participation in sport', def: 'Promoting sport to the public to increase the number of people taking part.' },
    { term: 'Exchange', def: 'A trade in which each party receives something worth more to it than what it gives.' },
    { term: 'STP', def: 'Segmentation, targeting and positioning: choosing and shaping the audience for a marketing effort.' },
    { term: 'The four Ps', def: 'Product, price, place and promotion: the core elements of a marketing strategy.' },
    { term: 'Communication or activation mix', def: 'The set of channels and methods used to reach audiences and bring a campaign to life.' },
    { term: 'Paid, owned, earned and shared media', def: 'Advertising you buy, channels you run, coverage you earn, and content fans create and pass on.' },
  ],
  cards: [
    { front: 'Why can social responsibility campaigns backfire?', back: 'If they look performative. Fans quickly spot gaps between words and actions.' },
    { front: 'The three sectors of sports marketing', back: 'Marketing of sport, marketing through sport, and participation in sport.' },
    { front: 'Who invests in marketing through sport?', back: 'A body other than the sports property owner, usually a brand. It is also called sponsorship.' },
    { front: 'What does STP stand for?', back: 'Segmentation, targeting, positioning.' },
    { front: 'The four Ps', back: 'Product, price, place, promotion.' },
    { front: 'Four kinds of media in an integrated campaign', back: 'Paid, owned, earned and shared.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'FC Barcelona and UNICEF: a club that put a cause on its shirt',
    note: 'This is the 2006 agreement as reported by UEFA on 7 September 2006. The lecture uses it as its case study. Later changes to the club’s shirt sponsors are not covered here.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The 2006 deal',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Signed', value: '2006', note: 'for the 2006/07 season' },
              { label: 'Donation', value: '€1.5M+', note: 'a year to UNICEF' },
              { label: 'Length', value: '5 years', note: 'first deal' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The club wore the UNICEF logo on its shirts. It was the club’s **first-ever shirt sponsor**.',
              'It paid for UNICEF programs for children worldwide. The first beneficiaries were children affected by HIV/AIDS in Swaziland.',
              'The lecture links it to the club’s motto “Més que un club” (more than a club).',
            ],
          },
        ],
      },
      {
        kicker: 'Reading the case',
        title: 'Why it counts as purpose-driven marketing',
        blocks: [
          {
            type: 'table',
            head: ['Idea from the lecture', 'How the case fits'],
            rows: [
              ['A core mission in the brand’s identity', 'The club’s identity as “more than a club” matched a children’s rights cause'],
              ['Goes beyond selling', 'The shirt front, which could earn commercial money, carried a charity logo'],
              ['Consistency over time', 'A multi-year agreement, not a one-off campaign'],
              ['Used the club’s reach for good', 'Global visibility for child-focused causes'],
            ],
          },
          {
            type: 'callout',
            title: 'Be careful with claims',
            text: 'The lecture says the case strengthened loyalty and differentiated the club. Those are interpretations. For an essay, look for evidence such as surveys or sponsorship data, not just the story.',
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
                title: 'Barça shirts to support UNICEF (UEFA.com)',
                url: 'https://www.uefa.com/uefachampionsleague/news/01b9-0e6da50ef6db-7965620d0980-1000--barca-shirts-to-support-unicef',
                note: 'UEFA, 7 September 2006. The 2006 agreement, the logo on the shirt, at least €1.5 million a year, five years, and the first beneficiaries.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Summit’s Peaks Play program',
    universe: 'summit',
    slides: [
      {
        kicker: 'A real program',
        title: 'Fifty cents a ticket',
        blocks: [
          {
            type: 'steps',
            items: [
              'Summit gives **$0.50 from every ticket** to Peaks Play, a free youth hockey program.',
              'A sell-out season is 10,000 × 40 = **400,000 tickets**.',
              '400,000 × $0.50 = **$200,000** for youth coaching and equipment.',
              'Summit publishes the total and shows photos from the sessions, so fans can see the result.',
            ],
          },
          { type: 'callout', title: 'Why this is not performative', text: 'The money is fixed, public and tied to every ticket. That is the consistency the lecture asks for.' },
        ],
      },
      {
        kicker: 'STP',
        title: 'Choosing who to talk to',
        blocks: [
          {
            type: 'table',
            head: ['Step', 'Summit’s decision'],
            rows: [
              ['Segmentation', 'Families with children, university students, and business groups'],
              ['Targeting', 'Families first, because Peaks Play connects to them and they fill weekend games'],
              ['Positioning', '“The team that grows the next generation of hockey players”, more attractive than a generic family outing'],
            ],
          },
        ],
      },
      {
        kicker: 'Four Ps',
        title: 'Family Night',
        blocks: [
          {
            type: 'table',
            head: ['P', 'Family Night'],
            rows: [
              ['Product', 'A weekend game with a kids’ skills clinic before it'],
              ['Price', '$20 per family ticket in a block of 1,500 seats'],
              ['Place', 'Summit Arena, plus tickets sold in the Summit app'],
              ['Promotion', 'School newsletters, the Peaks social channels and Peaks Play coaches (owned, earned and shared media)'],
            ],
          },
          {
            type: 'steps',
            items: [
              '1,500 tickets × $20 = **$30,000** per Family Night.',
              'Five Family Nights in a season = **$150,000**.',
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
      q: 'What is purpose-driven marketing?',
      options: [
        'Marketing built around a core mission or cause that reflects the brand’s values',
        'Marketing that only sells tickets on match days',
        'Marketing that uses only paid advertising',
        'Marketing aimed at investors',
      ],
      answer: 0,
      explanation: 'It puts a mission at the heart of the brand and communicates it consistently. It goes beyond selling products and is meant to build credibility and long-term loyalty.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'A team promotes environmental awareness but is seen flying private jets constantly. What is the main risk?',
      options: [
        'The campaign looks performative and fans may react with backlash',
        'The team will have to pay a fine',
        'Sponsors will take over the campaign',
        'The campaign will become paid media',
      ],
      answer: 0,
      explanation: 'Fans quickly spot gaps between words and actions. A campaign that looks like public relations can backfire.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'A drinks brand pays to put its logo on a club’s shirts. Which sector of sports marketing is this?',
      options: ['Marketing through sport', 'Marketing of sport', 'Participation in sport', 'Earned media'],
      answer: 0,
      explanation: 'The brand is using sport to promote its own products, which is marketing through sport, also called sponsorship. The investor is a body other than the property owner.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A city runs a campaign to get more adults to join local running clubs. Which sector is this?',
      options: ['Participation in sport', 'Marketing through sport', 'Marketing of sport', 'Paid media'],
      answer: 0,
      explanation: 'Promoting sport to the public to increase the number of people taking part is participation in sport. Governments and communities often fund it.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Summit decides to spend most of its marketing budget on families with children. Which STP step is this?',
      options: ['Targeting', 'Segmentation', 'Positioning', 'Exchange'],
      answer: 0,
      explanation: 'Splitting the market into groups is segmentation. Choosing which groups to commit resources to is targeting. Positioning shapes the message for the chosen group.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Summit gives $0.50 from each of 400,000 tickets to youth hockey. How much is that?',
      options: ['$200,000', '$20,000', '$400,000', '$2,000,000'],
      answer: 0,
      explanation: '400,000 × $0.50 = $200,000.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A team’s own mobile app and website are examples of which kind of media?',
      options: ['Owned media', 'Paid media', 'Earned media', 'Shared media'],
      answer: 0,
      explanation: 'Owned media are the channels the organization controls, such as its app, website and social accounts. Paid is advertising, earned is coverage, and shared is fan content.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'c1',
      type: 'mcq',
      q: 'A club spends its own money promoting its tickets and merchandise. Which sector of sports marketing is this?',
      options: [
        'Marketing through sport',
        'Participation in sport',
        'Sponsorship',
        'Marketing of sport',
      ],
      answer: 3,
      explanation: 'When the property itself invests to promote itself, that is marketing of sport. Marketing through sport is done by another body, usually a brand.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'c2',
      type: 'mcq',
      q: 'Sports marketing “points in two directions”. Which pair is correct?',
      options: [
        'Local sport and international sport',
        'The business of sport, and sport as a tool to promote other products',
        'Team sport and individual sport',
        'Free sport and paid sport',
      ],
      answer: 1,
      explanation: 'One direction promotes sport itself. The other uses sport to sell or promote goods and services, related to sport or not.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'c3',
      type: 'mcq',
      q: 'In the virtuous circle of social responsibility, what must be true for the loop to work?',
      options: [
        'The program must be expensive',
        'The program must be secret',
        'It must only run on social media',
        'The team’s program must be real',
      ],
      answer: 3,
      explanation: 'The loop only works if step one is real. If the program is for show, the loop breaks.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'c4',
      type: 'mcq',
      q: 'News coverage that a team wins through public relations is which kind of media?',
      options: [
        'Paid media',
        'Earned media',
        'Owned media',
        'Shared media',
      ],
      answer: 1,
      explanation: 'Paid is advertising, owned is the team’s own channels, earned is public relations and news, and shared is fan-made content.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'c5',
      type: 'mcq',
      q: 'Which of these is NOT given as a reason marketers love sport?',
      options: [
        'Live sport is must-see programming',
        'It is unscripted',
        'It creates strong emotion and loyalty',
        'The results are guaranteed in advance',
      ],
      answer: 3,
      explanation: 'Uncertainty of outcome is central to sport. It is unscripted, so results cannot be guaranteed.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'c6',
      type: 'mcq',
      q: 'Which STP step shapes the message so the offer looks more attractive than the alternatives?',
      options: [
        'Segmentation',
        'Positioning',
        'Targeting',
        'Pricing',
      ],
      answer: 1,
      explanation: 'Segmentation splits the market, targeting chooses the groups, and positioning shapes the message.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q8',
      type: 'open',
      q: 'Exercise. Name a sports organization you know that supports a cause. Say whether it looks authentic or performative, and give two pieces of evidence for your view.',
      answer: [
        'A strong answer names a real organization and cause, and takes a clear position.',
        'Evidence for authentic: long-term commitment, money or action that can be checked, consistency with the brand’s identity, results that are reported.',
        'Evidence for performative: a one-off campaign, no follow-up, a gap between actions elsewhere and the message, or a cause that appears only at convenient moments.',
        'It links back to the lecture’s test: do the words and actions match?',
      ],
      review: { section: 'plain', slide: 4 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'Discuss how social responsibility can strengthen fan engagement in sport, and explain the main risk.',
      answer: [
        'Defines social responsibility as using a platform to address social, environmental and community issues, such as inclusion, mental health, sustainability or local communities.',
        'Explains at least three mechanisms: emotional connection and loyalty, community-based engagement, viral campaigns, inclusive representation, athlete activism, youth education.',
        'Shows the virtuous circle: real action makes fans proud, they engage more, and their feedback improves the program.',
        'Names the risk: performative efforts backfire when fans spot a gap between words and actions.',
        'Gives an example, such as FC Barcelona and UNICEF in 2006, and concludes that authenticity and consistency decide the result.',
      ],
      marking: [
        'Defines social responsibility and purpose-driven marketing (2)',
        'Explains at least three mechanisms with reasons (4)',
        'Explains the risk and how to avoid it (2)',
        'Uses a relevant example (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Distinguish the three sectors of sports marketing. For each, give an example and say who invests.',
      answer: [
        '**Marketing of sport:** promoting sports, events, venues, athletes and teams. Example: a club selling season tickets and merchandise. The sports property invests.',
        '**Marketing through sport:** using sport to promote other goods or services, also called sponsorship. Example: a bank on a team’s shirt. A body other than the property owner, usually a brand, invests.',
        '**Participation in sport:** promoting sport to the public to increase participation. Example: a community running campaign. The property, government, clubs or communities may invest.',
        'Notes that agencies are often central in the first two sectors.',
      ],
      marking: [
        'Defines each sector correctly (3)',
        'Gives a suitable example for each (3)',
        'Identifies who invests in each (2)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'A club wants to launch a new family ticket. Show how you would apply segmentation, targeting, positioning and the four Ps.',
      answer: [
        '**Segmentation:** divide fans into groups, such as families, students and business fans.',
        '**Targeting:** choose families as the priority and commit budget there.',
        '**Positioning:** craft a message that makes the offer more attractive than alternatives, for example a safe, fun and good-value weekend outing.',
        '**Product:** the game plus extras such as a kids’ clinic. **Price:** an affordable bundle price. **Place:** the arena and the club’s app. **Promotion:** schools, social channels and owned media.',
        'Adds a measure of success, such as tickets sold or repeat attendance.',
      ],
      marking: [
        'Explains STP steps with application (4)',
        'Applies the four Ps (3)',
        'Mentions how success would be measured (1)',
      ],
    },
    {
      id: 'e4',
      marks: 4,
      q: 'Define purpose-driven marketing and explain why it must be authentic.',
      answer: [
        'Purpose-driven marketing puts a core mission or cause at the center of a brand’s marketing, and the purpose shows up consistently in campaigns, messages and experiences.',
        'It must be authentic because fans quickly spot a gap between words and actions, and a campaign that looks like public relations can backfire. Credibility is what builds lasting loyalty.',
      ],
      marking: [
        'Defines purpose-driven marketing (2)',
        'Explains why authenticity matters, with the backfire risk (2)',
      ],
    },
  ],

  videos: [],
};
