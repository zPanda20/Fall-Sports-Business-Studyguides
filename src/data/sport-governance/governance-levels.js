// International Sports Governance, Session 1: what governance is and the three levels.
// Built from the Session 1 class slides (via Julie's transcript of the course) and the syllabus outline.
// Real example: the IOC's good-governance rules and the wrestling episode of 2013.
// Facts about wrestling come from United World Wrestling's own account; the IOC rule text is from Olympic Agenda 2020+5.

export const governanceLevelsTopic = {
  id: 'governance-levels',
  course: 'sport-governance',
  title: 'What is international sports governance? The three levels',
  sessions: 'Session 1',
  reading: 'Session 1 slides',
  minutes: 25,
  summary:
    'What “governance” means, why sports bodies behave like small states, and the three levels (systemic, organizational, political) we use to analyze any case.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Governance is who decides, who checks, who answers',
      blocks: [
        { type: 'big', text: '**Governance** is the system of rules and relationships that decides **who has power**, **who checks it** and **who must explain it**.' },
        {
          type: 'table',
          head: ['', 'Governance', 'Management'],
          rows: [
            ['Main question', 'Are we doing the right things, and is someone watching?', 'Are we doing things right, today?'],
            ['Who', 'Board, general assembly, committees', 'CEO and staff'],
            ['Time', 'Long term, direction and oversight', 'Day to day, delivery'],
          ],
        },
        { type: 'p', text: 'A federation can be well managed and badly governed. Good staff do not fix a board with no checks on it.' },
      ],
    },
    {
      kicker: 'Why sport is special',
      title: 'Sports bodies act like small states',
      blocks: [
        {
          type: 'p',
          text: 'The course slides call sports governing bodies **state-like organizations**. They write rules, run their own courts and can punish members, and for decades they did it with little outside supervision.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Like a company', text: 'They earn money from broadcast and sponsorship deals, and they are run by boards and executives.' },
            { title: 'Like a democracy', text: 'They hold elections, have members who vote, and make rules that affect millions of people.' },
          ],
        },
        {
          type: 'callout',
          title: 'The uncomfortable question',
          text: 'The slides quote three authors (Pillay, Maduro and Weiler, 2017) who said international sport’s governance is not open to public participation or effective scrutiny, so “who regulates the regulators?” stays unanswered.',
        },
      ],
    },
    {
      kicker: 'The core framework',
      title: 'Three levels of governance',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Systemic', text: 'The whole network: who the stakeholders are and how they relate.' },
            { title: 'Organizational', text: 'Inside one body: board, rules, ethics, control.' },
            { title: 'Political', text: 'How governments and public law steer or limit sport.' },
          ],
        },
        {
          type: 'p',
          text: 'The whole course follows these levels: **systemic** in Sessions 2 and 3, **organizational** in Session 4 and **political** in Session 5. For any case, ask at which level the failure sits. Often it sits at more than one.',
        },
      ],
    },
    {
      kicker: 'Level 1 in action',
      title: 'Power in a network is shared, so you negotiate',
      blocks: [
        {
          type: 'p',
          text: 'In a network of clubs, athletes, national bodies, sponsors and governments, no one can simply give orders. The slides draw three consequences:',
        },
        {
          type: 'bullets',
          items: [
            'Big policy changes happen through **negotiation and trade-offs** between parties.',
            'Governing bodies control their sport by **negotiating outcomes**, not by dictating them.',
            'The skills needed are **negotiation and mutual adjustment** more than neat planning and control.',
          ],
        },
      ],
    },
    {
      kicker: 'Where good governance entered the rulebook',
      title: 'A short history inside the Olympic Movement',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '2004', text: '“Governance” first appears in the Olympic Charter.' },
            { title: '2009', text: 'The IOC adopts the Basic Universal Principles of Good Governance.' },
            { title: '2011', text: 'Governance joins the first IOC mission statement.' },
            { title: '2012', text: 'The principles are first partly used to assess sports on the Games program.' },
          ],
        },
        {
          type: 'p',
          text: 'In Olympic Agenda 2020+5, Recommendation 14 updates the principles and makes compliance a condition for being recognized and for staying on the Olympic program.',
        },
      ],
    },
    {
      kicker: 'Two kinds of integrity at stake',
      title: 'Why this matters: integrity',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Athletes’ integrity', text: 'Doping, abuse, age cheating and pressure on individuals.' },
            { title: 'Competitions’ integrity', text: 'Match-fixing, bribery in bidding, manipulation of results.' },
          ],
        },
        {
          type: 'p',
          text: 'Session 6 will name three dimensions (competition, individual and institutional). Here the point is that most integrity failures start as **governance** failures: nobody had the power, the duty or the independence to stop them.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Governance', def: 'The rules and relationships that decide who has power in an organization, who checks that power and who must explain it.' },
    { term: 'Management', def: 'Running the organization day to day: planning, staffing and delivering. Governance sets direction and oversight; management delivers.' },
    { term: 'Sports governing body (SGB)', def: 'An organization that writes and enforces the rules of a sport, such as an international federation.' },
    { term: 'State-like organization', def: 'A body that makes rules, settles disputes and punishes members, much like a small government, but is usually private.' },
    { term: 'Autonomy of sport', def: 'The claim that sports bodies should run their own affairs without outside interference. Session 5 shows it is conditional.' },
    { term: 'Systemic governance', def: 'The level that looks at the whole network of stakeholders and how power is shared among them.' },
    { term: 'Organizational governance', def: 'The level that looks at one body: its board, rules, ethics and control mechanisms.' },
    { term: 'Political governance', def: 'The level that looks at how governments, courts and public law steer or limit sport.' },
    { term: 'Basic Universal Principles of Good Governance', def: 'The IOC’s list of governance standards (2009) for the Olympic Movement, updated under Olympic Agenda 2020+5.' },
  ],
  cards: [
    { front: 'Governance vs management in one line', back: 'Governance decides direction and checks power. Management runs things day to day.' },
    { front: 'Name the three levels', back: 'Systemic, organizational, political.' },
    { front: 'Why are sports bodies called state-like?', back: 'They make rules, run courts and punish members, often with little outside oversight.' },
    { front: 'When did “governance” first appear in the Olympic Charter?', back: '2004. The Basic Universal Principles came in 2009.' },
    { front: 'The question from Pillay, Maduro and Weiler', back: '“Who regulates the regulators?” They said it remained unanswered in 2017.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The IOC makes good governance a condition: the wrestling episode',
    note: 'How a rule on paper became real in 2013, and what it asks of sports today. Wrestling facts as reported by its own federation; rule text from the IOC. Facts as of November 2026.',
    slides: [
      {
        kicker: 'Real example',
        title: 'What happened to wrestling',
        blocks: [
          {
            type: 'bullets',
            items: [
              'In 2013 wrestling was provisionally left out of the Olympic program. The class slides link this to the first partial use of the good-governance principles, citing the lack of women in decision-making bodies and no athletes’ commission.',
              'United World Wrestling (UWW, then called FILA) says it responded with reforms: women’s wrestling grew to six weight categories, rules were simplified, the referee body was separated from the federation’s bureau, women gained more leadership roles and anti-doping work increased.',
              'UWW says these changes were made to meet IOC requests for good governance and greater gender equity.',
              'On 8 September 2013 the IOC Session voted wrestling back onto the program for 2020 and beyond. UWW reports 49 votes in the first ballot.',
            ],
          },
          {
            type: 'callout',
            title: 'Read with care',
            text: 'This is the federation’s own account, and the same article does not separate the removal and reinstatement votes clearly. For the group assignment, check dates against a second source.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'What the IOC now asks of every federation',
        blocks: [
          {
            type: 'p',
            text: 'Recommendation 14 of Olympic Agenda 2020+5 (“Strengthen the Olympic Movement through good governance”) includes these steps:',
          },
          {
            type: 'bullets',
            items: [
              'Update the “Basic Universal Principles of Good Governance” to the latest standards.',
              'Make compliance **conditional for recognition, inclusion in the Olympic program and patronage**.',
              'Start self-assessments by recognized federations and widen the auditing of national Olympic committees.',
              'Urge federations to be transparent about budgets and accounts, including support for athletes.',
            ],
          },
          {
            type: 'p',
            text: 'The IOC’s reason: governance problems in one organization damage the credibility of the whole sports movement in the public’s eyes.',
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
                title: 'Wrestling Fights its Way Back onto Olympic Programme',
                url: 'https://uww.org/article/wrestling-fights-its-way-back-olympic-programme',
                note: 'United World Wrestling. The reforms, the IOC Session vote of 8 September 2013 and the 49 first-ballot votes. The federation’s own account.',
              },
              {
                title: 'Olympic Agenda 2020+5: 15 recommendations',
                url: 'https://stillmed.olympics.com/media/Document%20Library/OlympicOrg/IOC/What-We-Do/Olympic-agenda/Olympic-Agenda-2020-5-15-recommendations.pdf',
                note: 'IOC. The text of Recommendation 14 on good governance, pages 33 and 34. Read in November 2026.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The three levels at the Northern Cup Federation',
    universe: 'northern',
    slides: [
      {
        kicker: 'Meet the body',
        title: 'The Northern Cup Federation (NCF)',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Member associations', value: '150', note: 'each with one vote' },
              { label: 'Council', value: '12', note: 'elected by the members' },
              { label: 'Flagship', value: 'Northern Cup', note: 'every four years' },
            ],
          },
          {
            type: 'p',
            text: 'The NCF is a fictional federation. The President chairs the Council and hires a Secretary General to manage staff. Most of its income comes from the Northern Cup.',
          },
        ],
      },
      {
        kicker: 'Sorting a story',
        title: 'One news story, three levels',
        blocks: [
          {
            type: 'p',
            text: 'A newspaper reports that the NCF President personally picked the host of the next Northern Cup, after the host’s sports ministry promised to fund an NCF training center. Sort what you see:',
          },
          {
            type: 'table',
            head: ['Level', 'What it shows here'],
            rows: [
              ['Systemic', 'Hosts, sponsors, members and broadcasters all want something from the decision. Who in the network has a say?'],
              ['Organizational', 'The President decided alone. Did the Council vote? Was there a conflict-of-interest rule? Who audits?'],
              ['Political', 'A government is using funding to win an event. Does the law allow it? Should it be policed?'],
            ],
          },
        ],
      },
      {
        kicker: 'Governance or management?',
        title: 'A clean test',
        blocks: [
          {
            type: 'bullets',
            items: [
              '“The Secretary General cut hotel costs for the Northern Cup by 8%.” That is **management**.',
              '“Who may decide the host and who checks it?” That is **governance**.',
              'A good federation has both. A failing one often has efficient managers and no real checks on the top.',
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
      q: 'Which description fits governance, as opposed to management?',
      options: [
        'Deciding who has power, who checks it and who must explain it',
        'Booking hotels and buses for a tournament',
        'Writing the daily social media posts',
        'Negotiating a printing contract',
      ],
      answer: 0,
      explanation: 'Governance sets direction and oversight. The other options are day-to-day tasks that management carries out.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The course calls sports governing bodies “state-like organizations”. Why?',
      options: [
        'They make rules, settle disputes and punish members, often with little outside supervision',
        'They are always owned by governments',
        'They pay taxes like a country',
        'They have an army of referees',
      ],
      answer: 0,
      explanation: 'Many are private associations, but they act like small states: they legislate, adjudicate and sanction.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which list gives the three levels of governance used in this course?',
      options: [
        'Systemic, organizational, political',
        'Local, regional, global',
        'Legal, financial, sporting',
        'Board, staff, members',
      ],
      answer: 0,
      explanation: 'The three levels are systemic (the network), organizational (inside one body) and political (governments and public law).',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'In a network of many stakeholders, which skill matters most to a governing body, according to the slides?',
      options: [
        'Negotiation and mutual adjustment',
        'Giving clear orders and expecting them to be followed',
        'Avoiding all contact with governments',
        'Strict step-by-step planning with no changes',
      ],
      answer: 0,
      explanation: 'Because power is spread across the network, change comes from trade-offs between parties rather than from dictating outcomes.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Under Recommendation 14 of Olympic Agenda 2020+5, compliance with the Basic Universal Principles of Good Governance becomes…',
      options: [
        'A condition for recognition and for inclusion in the Olympic program',
        'Optional advice with no consequences',
        'A rule that applies only to national Olympic committees',
        'A rule that applies only to the IOC itself',
      ],
      answer: 0,
      explanation: 'The recommendation asks the IOC to make compliance conditional for recognition, inclusion in the program and patronage, and it applies to federations and other recognized bodies.',
      review: { section: 'real', slide: 1 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'At the Northern Cup Federation, the President alone chooses the next host after a government promises funding. At which levels can this be analyzed?',
      options: [
        'All three: systemic, organizational and political',
        'Only organizational',
        'Only political',
        'None, because the NCF is fictional',
      ],
      answer: 0,
      explanation: 'Many parties are affected (systemic), one person decided without checks (organizational) and a government used funding to win an event (political).',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise for the group assignment (observation, integration, critique). Take a federation case you know. (a) Observation: state in two sentences what happened. (b) Integration: name one of the three levels and one idea from this session that applies. (c) Critique: say what the idea does not explain.',
      answer: [
        '**(a) Observation.** Facts only: who did what, when, with what result. No opinions yet.',
        '**(b) Integration.** For example: “The failure sits at the organizational level, because one person held decisive power with no check. Governance, not management, is the problem.”',
        '**(c) Critique.** For example: “The levels show where to look, but they do not explain why the members tolerated it. That needs the political and systemic levels too.”',
        'A strong answer names a specific level, uses the course word correctly and admits one limit of the framework.',
      ],
      review: { section: 'plain', slide: 2 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain the difference between governance and management in a sports federation, and explain why the three-level view (systemic, organizational, political) helps analyze a governance failure.',
      answer: [
        'Governance is about who has power, who checks it and who must account for it. Management is about delivering the work day to day.',
        'A federation can be run efficiently by its managers and still be badly governed if the top of the organization has no checks.',
        'The systemic level looks at the whole network of stakeholders and how they negotiate. The organizational level looks inside one body: board, rules, ethics and control. The political level looks at how governments and public law steer or limit sport.',
        'The three levels help because a failure usually has causes at more than one level, such as a concentrated board (organizational) that no member can challenge (systemic) while the government looks away or interferes (political).',
      ],
      marking: [
        '2 marks: a correct definition of governance and of management.',
        '1 mark: the point that good management does not fix poor governance.',
        '3 marks: the three levels named and each described correctly.',
        '2 marks: a clear explanation of why using several levels gives a fuller diagnosis, ideally with a short example.',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Using the IOC’s Recommendation 14 or the wrestling episode, discuss whether making good governance a condition of recognition is an effective way to improve sports governance. Give one strength and one limit.',
      answer: [
        'Recommendation 14 makes compliance with the Basic Universal Principles conditional for recognition, inclusion in the Olympic program and patronage. This gives the principles real consequences.',
        'Strength: federations care a great deal about Olympic status, so the threat of losing a place on the program creates a strong incentive to reform. United World Wrestling reports it changed leadership representation, referee structures and anti-doping work to meet IOC requests in 2013.',
        'Limit: the IOC is itself a sports body, so it is judging federations in its own movement. Critics ask who checks the checker. Reforms can also be made on paper to keep a place without changing real power.',
        'Conclusion: the conditions help, but they work best with outside scrutiny and published, measurable standards.',
      ],
      marking: [
        '2 marks: accurate description of the condition (recognition and program place).',
        '2 marks: a well-explained strength with evidence.',
        '2 marks: a well-explained limit (for example, the IOC judges its own movement, or paper reform).',
        '2 marks: a clear, balanced conclusion.',
      ],
    },
  ],

  videos: [],
};
