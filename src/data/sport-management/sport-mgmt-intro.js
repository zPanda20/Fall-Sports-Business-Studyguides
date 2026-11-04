// Foundations of Sport Management, Lecture 1 (15 September): course introduction.
// Built from the Lecture 1 slides and the group assignment brief. The Nielsen figures in the real example
// come from Nielsen's own news release (see the sources slide). The Summit numbers are made up.

export const sportMgmtIntroTopic = {
  id: 'sport-mgmt-intro',
  course: 'sport-management',
  title: 'Introduction to Foundations of Sport Management',
  sessions: 'Session 1',
  reading: 'Lecture 1 slides and the group assignment brief',
  minutes: 20,
  summary:
    'Why sport is a serious global industry, the range of jobs inside it, how the course is built, and what the group assignment asks.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Sport is bigger than the game',
      blocks: [
        { type: 'big', text: 'Sport is part of daily life, and it matters **economically, socially, politically and technologically**.' },
        {
          type: 'bullets',
          items: [
            '**Economically:** it creates jobs, trade, tourism and whole industries around the match.',
            '**Socially:** it builds communities, health and shared identity.',
            '**Politically:** governments use it for hosting, influence and national pride.',
            '**Technologically:** it is a testing ground for new ways of filming, measuring and streaming.',
          ],
        },
      ],
    },
    {
      kicker: 'Scale',
      title: 'From the playground to the Olympic stage',
      blocks: [
        {
          type: 'table',
          head: ['Way to look at sport', 'The range'],
          rows: [
            ['Level', 'International, regional, national, local and recreational'],
            ['Standard', 'Grassroots up to elite, amateur and professional'],
            ['Format', 'A single sport or many sports together (multi-sport)'],
            ['Style', 'Team sports and individual sports'],
            ['Length', 'A one-day event up to a year-round championship'],
            ['The wider show', 'Sport often sits inside entertainment: culture, arts and music'],
          ],
        },
        { type: 'p', text: 'A sport manager has to know which part of this range they are working in, because the money, the fans and the rules change from one to the next.' },
      ],
    },
    {
      kicker: 'Vocabulary',
      title: 'The sport alphabet',
      blocks: [
        {
          type: 'table',
          head: ['Letters', 'Stands for', 'What it means'],
          rows: [
            ['OG', 'Olympic Games', 'The multi-sport event held every four years (summer and winter).'],
            ['IOC', 'International Olympic Committee', 'The body that leads the Olympic Movement.'],
            ['IF', 'International Federation', 'The worldwide governing body for one sport.'],
            ['LOC', 'Local Organizing Committee', 'The team that runs one event in its host city.'],
            ['FIFA', 'International football federation', 'The IF for football.'],
            ['F1', 'Formula 1', 'The top motor racing championship.'],
            ['NFL', 'National Football League', 'The main professional American football league.'],
            ['OTT', 'Over-the-top', 'Video sent over the internet instead of through cable or satellite.'],
          ],
        },
        { type: 'callout', title: 'Keep this table open', text: 'These letters appear in almost every lecture. Learning them now saves time later.' },
      ],
    },
    {
      kicker: 'Careers',
      title: 'Where the jobs are',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Commercial', text: 'Sports marketing (agencies, advertising, market research), sponsorship, brand management for brands, equipment makers and retailers, and merchandising.' },
            { title: 'Events and venues', text: 'Event management, venue management and sport tourism.' },
            { title: 'Organizations and rules', text: 'Sports administration in federations, teams and leagues, governance, and sports law.' },
            { title: 'People and content', text: 'Athlete representation and management, media rights, sports broadcast and sports journalism.' },
            { title: 'Wider sport', text: 'Sports betting, community relations, sustainability, fitness and health.' },
          ],
        },
      ],
    },
    {
      kicker: 'The course path',
      title: 'How the course fits together',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'The industry', text: 'Who is in sport and how money moves' },
            { title: 'Fans', text: 'How people connect with sport' },
            { title: 'Marketing', text: 'Promoting sport, and using sport to promote' },
            { title: 'Media rights', text: 'Who pays to show it' },
            { title: 'Sponsorship', text: 'Why brands pay to be linked' },
            { title: 'Athletes and data', text: 'Pay, endorsements and analytics' },
          ],
        },
        { type: 'p', text: 'Each step builds on the last. Fans create the audience, the audience creates the value, and media and sponsors pay to reach it.' },
      ],
    },
    {
      kicker: 'Assessment',
      title: 'How the course is graded',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Participation', value: '24%', note: 'of the course grade' },
            { label: 'Group assignment', value: '36%', note: 'of the course grade' },
            { label: 'Final exam', value: '40%', note: '10 to 19 December' },
          ],
        },
        {
          type: 'bullets',
          items: [
            'There are 12 lectures of 2 hours each.',
            'Class starts with a summary of the last lecture and readings, given by students.',
            'The final exam is in the exam period, with multiple-choice and essay questions. It is closed book and AI is not allowed.',
          ],
        },
      ],
    },
    {
      kicker: 'The group assignment',
      title: 'What the assignment asks',
      blocks: [
        {
          type: 'callout',
          title: 'The task',
          text: 'Use the Nielsen Sports 2025 Global Sports Report as a starting point and build your group’s own **evidence-based forecast of the global sports industry in 2035**. The task is not to summarize or criticize the report. It is to evaluate its predictions against evidence, apply ideas from this course, and reach your own view.',
        },
        {
          type: 'table',
          head: ['Section', 'Weight', 'What it needs'],
          rows: [
            ['1. Introduction', '10%', 'Purpose, why forecasting matters, how the report is used as a starting point'],
            ['2. Key trends', '20%', '3 or 4 major trends or predictions from the report, and why they matter'],
            ['3. Evaluating the evidence', '30%', 'For each trend: the prediction, academic research, other reputable sources, support and conflict, assumptions'],
            ['4. Your 2035 forecast', '30%', 'Which predictions are likely or unlikely, what is missing, what could reshape the industry, how organizations should prepare'],
            ['5. Conclusion', '10%', 'Overall forecast, biggest opportunities and challenges'],
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Format:** group work, 4,000 to 5,000 words, single spaced, 12 point font (about 8 to 10 pages).',
            '**Due:** 13 November, 17:00, on the course platform.',
            '**AI use:** be open about it, show your own judgment, check what the AI gives you, and use it ethically.',
          ],
        },
        { type: 'p', text: 'This guide explains the ideas the assignment uses. The forecast itself has to be your group’s own work.' },
      ],
    },
    {
      kicker: 'Careers advice',
      title: 'Keys to success: go fishing',
      blocks: [
        {
          type: 'steps',
          items: [
            '**F**oot in the door. Take the first chance to get inside the industry.',
            '**I**nitiative. Start things, do not wait to be asked.',
            '**S**elf-confidence. Believe you belong in the room.',
            '**H**ard work. “The harder I work, the luckier I get.”',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Grassroots sport', def: 'Sport played by ordinary people in local clubs, schools and communities, at the base of the pyramid.' },
    { term: 'Elite sport', def: 'Sport at the highest level of performance, whether amateur or professional.' },
    { term: 'Amateur', def: 'An athlete or event where taking part is not mainly a paid job.' },
    { term: 'Professional', def: 'An athlete or event where sport is a paid job and a business.' },
    { term: 'International Federation (IF)', def: 'The worldwide governing body for one sport. It sets the rules and runs the sport’s top events.' },
    { term: 'International Olympic Committee (IOC)', def: 'The organization that leads the Olympic Movement and owns the Olympic Games.' },
    { term: 'Local Organizing Committee (LOC)', def: 'The group that plans and runs one event in its host city.' },
    { term: 'OTT (over-the-top)', def: 'Video delivered over the internet, bypassing cable, broadcast and satellite.' },
    { term: 'Forecast', def: 'A reasoned estimate of what will happen, built on evidence and stated assumptions.' },
  ],
  cards: [
    { front: 'Four ways sport matters globally', back: 'Economically, socially, politically and technologically.' },
    { front: 'IF or LOC: who runs one event in one city?', back: 'The LOC. An IF governs a whole sport worldwide.' },
    { front: 'How is the grade split?', back: 'Participation 24%, group assignment 36%, final exam 40%.' },
    { front: 'What is the assignment’s starting point?', back: 'The Nielsen Sports 2025 Global Sports Report, which you evaluate. You do not just summarize it.' },
    { front: 'What does FISH stand for?', back: 'Foot in the door, Initiative, Self-confidence, Hard work.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Nielsen’s 2025 Global Sports Report: the assignment’s starting point',
    note: 'Figures are as published in Nielsen’s news release of 12 June 2025. Read the full report for the assignment. This is only a first look.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Three headline numbers',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Football fandom worldwide', value: '51%', note: 'of fans follow football' },
              { label: 'Sponsorships in football', value: '41%', note: 'of all sports sponsorships' },
              { label: 'Interest in women’s sport', value: '50%', note: 'of the global population, 2024' },
            ],
          },
          { type: 'p', text: 'Nielsen names three growth drivers: football’s global reach, the surge in women’s sport, and a changing sports media landscape.' },
        ],
      },
      {
        kicker: 'A trend in numbers',
        title: 'Interest in women’s sport is rising',
        blocks: [
          {
            type: 'bars',
            title: 'Share of the global general population interested in women’s sport',
            unit: '%',
            items: [
              { label: '2022', value: 45 },
              { label: '2024', value: 50 },
            ],
          },
          {
            type: 'bullets',
            items: [
              'Women make up 47% of women’s sports fans and 42% of men’s sports fans, up from 45% and 40% in 2022.',
              'The report links this to a growing media audience and growing sponsor interest.',
            ],
          },
        ],
      },
      {
        kicker: 'Using it well',
        title: 'How a student should treat a report like this',
        blocks: [
          {
            type: 'bullets',
            items: [
              'A report from a measurement company is a **starting point**, not proof. Ask what evidence sits behind each prediction.',
              'Look for other sources that **support** and **conflict** with it.',
              'Say which **assumptions** the prediction needs.',
              'Notice what the report leaves out. The assignment asks for that too.',
            ],
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
                title: 'The future of sport: Nielsen’s 2025 report reveals growth drivers',
                url: 'https://www.nielsen.com/news-center/2025/the-future-of-sport-nielsens-2025-report-reveals-growth-drivers/',
                note: 'Nielsen, 12 June 2025. Football fandom (51%), football’s share of sponsorships (41%), interest in women’s sport (50% in 2024, 45% in 2022) and the three growth drivers.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Meet Summit Sports Group',
    universe: 'summit',
    slides: [
      {
        kicker: 'The company',
        title: 'Three businesses under one name',
        blocks: [
          {
            type: 'columns',
            items: [
              { title: 'Summit Peaks', text: 'A professional hockey club. It plays 40 home games a season.' },
              { title: 'Summit Arena', text: 'The home venue, with 10,000 seats. It also hosts concerts and other sports.' },
              { title: 'Summit Media', text: 'The media arm. It streams Peaks games and sells the broadcast rights.' },
            ],
          },
          { type: 'p', text: 'Summit is made up. Its numbers are invented so every topic in this course can use one consistent company.' },
        ],
      },
      {
        kicker: 'Careers',
        title: 'One company, many jobs',
        blocks: [
          {
            type: 'table',
            head: ['Job', 'Where at Summit', 'Area of the industry'],
            rows: [
              ['Sponsorship manager', 'Peaks commercial team', 'Sponsorship'],
              ['Event manager', 'Summit Arena', 'Event and venue management'],
              ['Media rights manager', 'Summit Media', 'Media rights'],
              ['Community officer', 'Peaks youth program', 'Community relations'],
              ['Ticket sales lead', 'Peaks business office', 'Sports administration'],
            ],
          },
        ],
      },
      {
        kicker: 'Why it matters',
        title: 'The four areas of impact, Summit style',
        blocks: [
          {
            type: 'table',
            head: ['Area', 'Summit example'],
            rows: [
              ['Economic', 'Jobs at the arena, and visitors who spend in nearby restaurants and hotels on game nights'],
              ['Social', 'Youth hockey sessions and a shared identity for the city'],
              ['Political', 'The city council backs the arena and uses it to promote the region'],
              ['Technological', 'Games are streamed live and tracked with player data'],
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
      q: 'Which four areas does the first lecture give for the global importance of the sporting industry?',
      options: [
        'Economic, social, political and technological',
        'Economic, legal, medical and cultural',
        'Social, financial, military and educational',
        'Political, historical, scientific and artistic',
      ],
      answer: 0,
      explanation: 'The lecture says the industry is important economically, socially, politically and technologically.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What is an IF in the sporting world?',
      options: [
        'The worldwide governing body for one sport',
        'The group that runs one event in its host city',
        'A video service sent over the internet',
        'The committee that leads the Olympic Movement',
      ],
      answer: 0,
      explanation: 'An International Federation governs a single sport worldwide. The LOC runs one event, OTT is internet video, and the IOC leads the Olympic Movement.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Summit Media streams Peaks games and sells their broadcast rights. Which career area is that?',
      options: ['Media rights', 'Sports law', 'Venue management', 'Community relations'],
      answer: 0,
      explanation: 'Selling the right to show games is media rights work. Venue management belongs to the arena, and community relations to the youth program.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'What should a group do with the Nielsen 2025 Global Sports Report in the assignment?',
      options: [
        'Use it as a starting point and evaluate its predictions against other evidence',
        'Summarize it section by section',
        'Write a critique of how Nielsen made it',
        'Copy its predictions as the group’s forecast',
      ],
      answer: 0,
      explanation: 'The brief says the task is not to summarize or critique the report. It is to evaluate its predictions, use course concepts, and build an evidence-based forecast.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which two sections of the group assignment carry the most weight, 30% each?',
      options: [
        'Evaluating the evidence, and Your 2035 forecast',
        'Introduction, and Conclusion',
        'Key trends, and Introduction',
        'Key trends, and Conclusion',
      ],
      answer: 0,
      explanation: 'Evaluating the evidence and the 2035 forecast are 30% each. Key trends is 20%, and the introduction and conclusion are 10% each.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'In the Nielsen report, interest in women’s sport reached what share of the global population in 2024?',
      options: ['50%', '41%', '51%', '45%'],
      answer: 0,
      explanation: 'Nielsen reports 50% in 2024, up from 45% in 2022. The 51% is football fandom and 41% is football’s share of sponsorships.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise. Pick three jobs in sport that interest you. For each, name the area of the industry it belongs to and one skill from your own background that would help you get in.',
      answer: [
        'There is no single right answer. A strong response names real roles, such as sponsorship manager, event manager or media rights manager.',
        'Each role is matched to an area from the lecture list, for example sponsorship, event management or media rights.',
        'Each skill is specific and honest, such as languages, data skills, or experience running events.',
        'It links back to the “keys to success”: initiative and a foot in the door.',
      ],
      review: { section: 'plain', slide: 3 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 6,
      q: 'Explain why the sporting industry is important on a global scale. Refer to at least three areas.',
      answer: [
        'Sport matters **economically**: it creates jobs, trade, tourism and many linked industries such as media, apparel and sponsorship.',
        'It matters **socially**: it builds communities, supports health and gives people a shared identity.',
        'It matters **politically**: governments use it for hosting, influence and national pride.',
        'It matters **technologically**: sport drives new ways of broadcasting, measuring performance and engaging fans.',
        'A good answer adds a short example, such as a mega-event hosted by a country.',
      ],
      marking: [
        'Names at least three of the four areas (1 mark each, up to 3)',
        'Explains each named area, not just lists it (1 mark each, up to 3)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Sport covers a wide range, from grassroots to elite and from one-day events to year-round championships. Describe this range and explain why a sport manager needs to understand it.',
      answer: [
        'Describes the range: international to local, grassroots to elite, amateur to professional, single sport to multi-sport, team to individual, and short events to year-round championships.',
        'Notes that sport often sits inside wider entertainment such as culture, arts and music.',
        'Explains that money, audiences and rules differ across the range, so each part needs a different management approach.',
        'Gives an example, such as a local youth league compared with a professional club with media rights.',
        'Concludes that a manager who knows where their organization sits can set realistic goals and choose the right partners.',
      ],
      marking: [
        'Describes at least four dimensions of the range (up to 4)',
        'Explains why differences matter for management (up to 3)',
        'Uses a relevant example (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'The group assignment treats a report such as Nielsen’s as a starting point, not as proof. Explain what that means for how a group should build its forecast.',
      answer: [
        'A report gives predictions, but they rest on data and assumptions that need checking.',
        'The group should compare each prediction with academic research and other reputable sources.',
        'It should show where evidence supports and where it conflicts, and state the assumptions and uncertainties.',
        'It should then give its own forecast, including trends the report misses, with reasons.',
      ],
      marking: [
        'Explains that predictions need checking against other evidence (2)',
        'Mentions support, conflict and assumptions (2)',
        'Says the group must reach its own reasoned view (2)',
      ],
    },
  ],

  videos: [],
};
