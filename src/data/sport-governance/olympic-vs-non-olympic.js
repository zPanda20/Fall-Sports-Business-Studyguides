// International Sports Governance, Session 3: Olympic and non-Olympic sports, US and private leagues.
// Built from the Session 3 class slides (as written up in the course transcript).
// Real examples: how the IOC counts what it distributes (its own 90% claim and an outside reading),
// and the IOC's new "Fit for the Future" way of choosing sports for the Games.

export const olympicVsNonOlympicTopic = {
  id: 'olympic-vs-non-olympic',
  course: 'sport-governance',
  title: 'Olympic and non-Olympic sports, US and private leagues',
  sessions: 'Session 3',
  reading: 'Session 3 slides',
  minutes: 30,
  summary:
    'How money and recognition flow through the Olympic Movement, how a sport gets recognized or joins the Games, and how private leagues are governed differently.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Not every sport sits in the same place',
      blocks: [
        { type: 'big', text: 'In the Olympic Movement, a sport can be **on the Games program**, **recognized but not on the program**, or **outside the movement**. Each position brings different money, rights and duties.' },
        {
          type: 'flow',
          items: [
            { title: 'Outside', text: 'No IOC recognition. The federation governs itself.' },
            { title: 'Recognized', text: 'The IOC recognizes its international federation. It gets rights and must meet rules.' },
            { title: 'On the program', text: 'Its sport (or discipline) is in the Games and shares the IOC’s money.' },
          ],
        },
        { type: 'p', text: 'The slides also contrast all this with **sports leagues**, which are built very differently.' },
      ],
    },
    {
      kicker: 'Money',
      title: 'Where the IOC’s money goes',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Commercial revenue 2021 to 2024', value: '$7.7bn', note: 'as reported' },
            { label: 'The IOC’s claim', value: '90%', note: 'distributed to the movement' },
            { label: 'One outside reading', value: '~74%', note: 'of total revenue, as shown on the slides' },
          ],
        },
        {
          type: 'p',
          text: 'The slides ask who receives the money in 2021 to 2024: **31 Summer Olympic federations, 8 Winter Olympic federations, 36 other IOC-recognized federations** and **5 recognized associations of federations** (ASOIF, ARISF, WOF, AIMS and SportAccord), plus national Olympic committees and organizing committees.',
        },
        {
          type: 'callout',
          title: 'Why 90% and 74% can both be “true”',
          text: 'They answer different questions. The first is the IOC’s own measure of what it spends for the movement. The second divides what reached listed recipients by total revenue, including broadcast income deferred from an earlier cycle. When you see two percentages, ask: what is counted in the top and the bottom?',
        },
      ],
    },
    {
      kicker: 'A question to carry',
      title: 'What’s missing from the distribution?',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'National Olympic committees' },
            { title: 'International federations' },
            { title: 'Organizing committees' },
            { title: 'Athletes?', text: 'The slide asks whether athletes are visible in the flow.' },
          ],
        },
        {
          type: 'p',
          text: 'The money goes mainly to institutions. Athletes benefit indirectly, and the slides also raise the history of **amateurism** at the Games. The governance question is how much say and how much direct money athletes get.',
        },
      ],
    },
    {
      kicker: 'Getting recognized',
      title: 'IOC recognition: process and criteria',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: '1. General', text: 'The basic fit: an international body governing a sport worldwide.' },
            { title: '2. Legitimacy', text: 'It is the real, accepted world body for its sport, and compatible with other recognized bodies.' },
            { title: '3. Sport governance', text: 'It meets the good-governance standards (the same criteria as legitimacy for compatibility with umbrella groups).' },
          ],
        },
        {
          type: 'callout',
          title: 'The key rule',
          text: 'The statutes, practices and activities of IFs “must be in conformity with the Olympic Charter”, including the **WADA Code** and the **Olympic Movement Code on the Prevention of the Manipulation of Competitions**. Subject to that, each IF keeps its independence and autonomy.',
        },
        {
          type: 'table',
          head: ['Rights', 'Obligations'],
          rows: [
            ['Recognition by the national Olympic committees', 'Comply with the criteria'],
            ['Annual funding', 'Send the IOC an annual report'],
            ['A link with the IOC’s integrity mechanism', 'Protect the Olympic rings (not misuse the symbols)'],
          ],
        },
      ],
    },
    {
      kicker: 'Getting on the program',
      title: 'Joining the Games: Rule 45 and the caps',
      blocks: [
        {
          type: 'bullets',
          items: [
            'The program is set under **Rule 45** of the Olympic Charter by a dedicated commission, the IOC Executive Board and the IOC Session.',
            'Slide figures: **32 sports** in Summer for Paris 2024 and **8** for Winter (from 7 federations).',
            'Adding a sport weighs the popularity of the Games, cost and complexity, youth appeal, institutional matters and the business model.',
            '**Removing** a sport is entirely at the discretion of the IOC Session.',
            'An organizing committee can propose extra events, if they follow the Olympic Charter, the WADA Code and the Code on manipulation.',
          ],
        },
        {
          type: 'kpis',
          items: [
            { label: 'Summer cap', value: '10,500', note: 'athletes, up to 310 events' },
            { label: 'Winter cap', value: '2,900', note: 'athletes, up to 100 events' },
          ],
        },
        { type: 'p', text: 'Caps make the program a **limited resource**. If a sport comes in, another may have to leave.' },
      ],
    },
    {
      kicker: 'A new rulebook',
      title: '“Fit for the Future”: choosing disciplines',
      blocks: [
        {
          type: 'p',
          text: 'The slides describe a new method applied from Brisbane 2032. It works at the level of **disciplines**:',
        },
        {
          type: 'flow',
          items: [
            { title: 'Sport', text: 'For example athletics. Governed by a recognized IF.' },
            { title: 'Discipline', text: 'For example track events. Needs its own field of play or a big change to a shared one.' },
            { title: 'Event', text: 'For example the men’s 100 m. Gives a ranking and medals.' },
          ],
        },
        {
          type: 'steps',
          items: [
            '**Initial screening:** governance, integrity, anti-doping compliance and athlete safeguarding.',
            '**Core criteria:** global appeal, cost and operational complexity, and athlete representation.',
            '**Final comparison:** strong candidate disciplines against weaker disciplines already in the Games.',
          ],
        },
        { type: 'p', text: 'Notice that **governance is stage one**. A sport that fails the screening is not even compared on popularity.' },
      ],
    },
    {
      kicker: 'A different model',
      title: 'Sports leagues',
      blocks: [
        {
          type: 'p',
          text: 'A **league** is a competition organized by a company or association that often owns the commercial rights. The slides compare two designs:',
        },
        {
          type: 'table',
          head: ['', 'Team-based (NFL)', 'Individual (WTA, NASCAR)'],
          rows: [
            ['Who owns it', 'A private company equally owned by its 32 clubs', 'WTA: a board with player, tournament and federation seats. NASCAR: a company that negotiates league-level deals'],
            ['Who leads', 'A Commissioner elected by the clubs, acting as CEO', 'WTA: a CEO appointed by the other 7 board members'],
            ['Money', 'League sells rights and shares revenue among clubs', 'WTA collects rights revenue and pays tournaments and players. NASCAR keeps 10%, tracks receive 65%, drivers 25%'],
            ['International body', 'The slides name the International Federation of American Football, based in France', 'The WTA supervises women’s professional tournaments worldwide'],
          ],
        },
        {
          type: 'callout',
          title: 'Governance contrast',
          text: 'In the Olympic model a federation recognized by the IOC must meet outside criteria. In a private league the owners write the rules and are the main audience for them.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Recognition (IOC)', def: 'Formal acceptance of an international federation by the IOC, which brings rights and duties.' },
    { term: 'Olympic program', def: 'The list of sports, disciplines and events at a Games, set under Rule 45 of the Olympic Charter.' },
    { term: 'Rule 45', def: 'The Olympic Charter rule that governs the program of the Games.' },
    { term: 'Sport, discipline, event', def: 'Three layers: a sport (athletics) contains disciplines (track events) which contain events (men’s 100 m).' },
    { term: 'Fit for the Future', def: 'The IOC’s new method for choosing disciplines for the Games, starting with a governance and integrity screening.' },
    { term: 'ASOIF', def: 'The association of summer Olympic international federations.' },
    { term: 'ARISF', def: 'The association of IOC-recognized international sports federations that are not on the Games program.' },
    { term: 'League', def: 'A competition run by a company or association that usually owns the commercial rights and shares the income.' },
    { term: 'Commissioner', def: 'The chief executive of a team league, chosen by the member clubs.' },
    { term: 'Amateurism', def: 'The old rule that athletes at the Games should not be paid for sport. It has largely disappeared from the rules.' },
  ],
  cards: [
    { front: 'The three positions of a sport in the Olympic Movement', back: 'On the Games program, recognized but not on the program, or outside the movement.' },
    { front: 'What does an IF promise to keep IOC recognition?', back: 'That its statutes, practice and activities conform with the Olympic Charter, including the WADA Code and the Code on manipulation of competitions.' },
    { front: 'First stage of Fit for the Future', back: 'Screening on governance, integrity, anti-doping compliance and athlete safeguarding.' },
    { front: 'Who owns the NFL, according to the slides?', back: 'A private company equally owned by its 32 clubs. Clubs elect the Commissioner.' },
    { front: 'NASCAR revenue split on the slides', back: '10% to the league, 65% to tracks and 25% to drivers.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'What counts as “distributed”? The IOC’s 90% and how sports reach the Games',
    note: 'Two real questions from this session: how to read an organization’s distribution claim, and how the IOC says it will choose sports in future. Figures as reported in March 2025 and June 2026.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Two ways to read the IOC’s revenue',
        blocks: [
          {
            type: 'bullets',
            items: [
              'The IOC reported commercial revenues of **$7.7 billion** between 2021 and 2024 and says it distributes **90%** of its income to global sport. The other 10% is spent on running the organization.',
              'Recipients listed include athletes, international federations, national Olympic committees, organizing committees and recognized organizations. The report page does not split the 90% among them.',
              'An independent sports business site that read the IOC annual report worked out that about **73.9%** of total 2021 to 2024 revenue reached the listed recipients, or 64.9% if deferred Tokyo broadcast income is left out. It said the IOC’s 90% claim is “not quite” accurate.',
            ],
          },
          {
            type: 'callout',
            title: 'Neutral reading',
            text: 'The two numbers use different bases, and the site’s own table adds up oddly in places, so its figures need checking against the IOC’s report. For the group assignment: always name the base of a percentage, and ask who produced it and why.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: '“Fit for the Future”: a proposal for choosing disciplines',
        blocks: [
          {
            type: 'bullets',
            items: [
              'On 10 June 2026 the IOC announced a new method for determining the Olympic program and a stronger host selection process, to go to the 146th IOC Session on 24 and 25 June 2026. The class slides record the method as decided in June 2026.',
              'It would apply from Brisbane 2032 and has two pathways: disciplines already in the Games and candidate disciplines.',
              'Stage 1 screens all disciplines on governance, anti-doping compliance, integrity measures and athlete safety and safeguarding. Stage 2 assesses worldwide draw, cost and operational difficulty and athlete participation. Stage 3 compares stronger candidates with weaker incumbents.',
              'The IOC Session decides the discipline program.',
            ],
          },
          {
            type: 'p',
            text: 'The press release describes a proposal. Check the IOC’s later announcements for the final approved text before quoting it as the rule.',
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
                title: 'IOC highlights strong financials ahead of presidential election',
                url: 'https://www.sportcal.com/news/ioc-highlights-strong-financials-ahead-of-presidential-election/',
                note: 'Sportcal, 20 March 2025. The $7.7 billion commercial revenue for 2021 to 2024 and the IOC’s 90% distribution claim.',
              },
              {
                title: 'IOC annual report shows IOC distributed almost 74% of its revenues from 2021-24',
                url: 'https://www.thesportsexaminer.com/intl-olympic-committee-annual-report-shows-ioc-distributed-almost-74-of-its-revenues-from-2021-24-and-has-4-9-billion-in-the-bank/',
                note: 'The Sports Examiner. The 73.9% and 64.9% readings of the IOC annual report. The page does not show a clear publication date and its numbers should be checked against the IOC’s own report.',
              },
              {
                title: '“Fit for the Future”: new methodology for determining Olympic programme and strengthened host selection process proposed',
                url: 'https://olympics.com/ioc/news/fit-for-the-future-new-methodology-for-determining-olympic-programme-and-strengthened-host-selection-process-proposed',
                note: 'IOC, 10 June 2026. The proposal, the three stages and the Brisbane 2032 start.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Northern Cup Federation: counting what is distributed',
    universe: 'northern',
    slides: [
      {
        kicker: 'The claim',
        title: '“We distribute 90% of our income”',
        blocks: [
          {
            type: 'p',
            text: 'In one four-year cycle the Northern Cup Federation (NCF) earns 600 million units from broadcast and sponsorship. Its annual report says it distributes 90%, which is 540 million.',
          },
          {
            type: 'bars',
            title: 'Where the 540 million goes (million units)',
            items: [
              { label: 'Host organizing committee', value: 180 },
              { label: 'NCF event operations', value: 120 },
              { label: 'Grants to 150 members', value: 150 },
              { label: 'Development fund', value: 60 },
              { label: 'Athlete prize pool', value: 30 },
            ],
          },
        ],
      },
      {
        kicker: 'A critical reading',
        title: 'What actually reaches members and athletes?',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Grants to members, the development fund and the prize pool add up to 240 million, which is **40%** of the 600 million.',
              'The 120 million of “event operations” is spent inside the NCF, and the 180 million to the host committee pays for the event itself.',
              'Both measures are honest if explained. The problem is calling the first one “distribution to the sport” without saying what is counted.',
            ],
          },
          {
            type: 'callout',
            title: 'A good-governance fix',
            text: 'Publish the breakdown and the definition, have the accounts audited by an outside firm, and report the share that reaches athletes and members as a separate line.',
          },
        ],
      },
      {
        kicker: 'Recognition',
        title: 'A new sport applies to the NCF',
        blocks: [
          {
            type: 'p',
            text: 'Kite Racing wants NCF recognition. Use the three criteria:',
          },
          {
            type: 'table',
            head: ['Criterion', 'Question for Kite Racing’s federation'],
            rows: [
              ['General', 'Is it an international body, active in several regions?'],
              ['Legitimacy', 'Is it the accepted world body, or are two federations competing for the sport?'],
              ['Governance', 'Does it publish accounts, hold elections, have term limits and an athletes’ commission, and apply the anti-doping code?'],
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
      q: 'What must an international federation’s statutes, practice and activities conform with to be recognized by the IOC?',
      options: [
        'The Olympic Charter, including the WADA Code and the Code on the prevention of manipulation of competitions',
        'The rules of the host city only',
        'The constitution of the largest national federation',
        'The league rules of the NFL',
      ],
      answer: 0,
      explanation: 'The slide quotes the criterion: IFs must be in conformity with the Olympic Charter, including the WADA Code and the Code on manipulation. Subject to that, they keep independence in governing their sport.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Under the “Fit for the Future” method described on the slides, which comes first?',
      options: [
        'A screening on governance, integrity, anti-doping and athlete safeguarding',
        'A vote by fans',
        'A comparison of television ratings',
        'A decision on the host city’s budget',
      ],
      answer: 0,
      explanation: 'Stage one is an initial screening. Popularity (global appeal) is assessed only at stage two.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'The IOC says it distributes 90% of its revenue. A critic calculates about 74%. What is the best explanation?',
      options: [
        'They use different definitions of what is counted in the top and bottom of the calculation',
        'One of them is simply lying',
        'The IOC does not report any revenue',
        'The percentages measure two unrelated organizations',
      ],
      answer: 0,
      explanation: 'The IOC measures what it spends for the movement. The outside reading divides what reached listed recipients by total revenue, including deferred broadcast income. Always ask what is counted.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'According to the slides, who elects the Commissioner of a team league such as the NFL?',
      options: [
        'The member clubs, who also own the league',
        'The national government',
        'The players’ union',
        'The IOC',
      ],
      answer: 0,
      explanation: 'The league is a private company equally owned by its clubs, and the clubs elect the Commissioner, who acts as CEO.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'On the slides, how does NASCAR split league revenue?',
      options: [
        '10% to the league, 65% to tracks, 25% to drivers',
        '65% to the league, 25% to tracks, 10% to drivers',
        'One third each to league, tracks and drivers',
        '50% to the league and 50% to drivers',
      ],
      answer: 0,
      explanation: 'NASCAR negotiates the main contracts at league level, keeps 10%, and tracks and drivers receive 65% and 25%. Tracks and drivers also have their own sponsorship income.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'The NCF says it distributes 90% of its 600 million income (540 million), but only 240 million reaches members, development and prizes. What is the best governance recommendation?',
      options: [
        'Publish the definition and breakdown, and have the accounts audited by an outside firm',
        'Stop reporting any distribution figure',
        'Raise the figure to 95% without explaining it',
        'Let the President decide privately how it is counted',
      ],
      answer: 0,
      explanation: 'Transparency and independent audit are the standard fixes: they show what is counted and let outsiders check it.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise (observation, integration, critique). A federation says it gives “90% of income to the sport”. (a) Observation: what facts would you collect? (b) Integration: which governance principle does the claim relate to? (c) Critique: what could make a true 90% claim still misleading?',
      answer: [
        '**(a) Observation.** The audited accounts, the list of recipients with amounts, the definition of “distributed”, and what share goes to athletes and members.',
        '**(b) Integration.** Transparency and accountability: published, audited reporting. Possibly also conflict of interest if recipients vote for the leadership.',
        '**(c) Critique.** The 90% can include the federation’s own events and staff costs, or can be a share of a smaller base. Spending inside the organization is not the same as reaching the sport.',
        'Strong answers separate the claim from its evidence and name the base of the percentage.',
      ],
      review: { section: 'plain', slide: 1 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain how an international federation gains IOC recognition and what it must do to keep it. Then explain why governance is part of the screening for joining the Games program.',
      answer: [
        'A federation seeks recognition under criteria on general fit, legitimacy and sport governance. It must be the accepted world body for its sport.',
        'To keep recognition it must conform with the Olympic Charter, including the WADA Code and the Code on the prevention of manipulation of competitions. It must comply with the criteria and send the IOC an annual report. In return it gets recognition by national Olympic committees, annual funding and a link with the IOC’s integrity mechanism.',
        'Under the new method, governance, integrity, anti-doping compliance and athlete safeguarding come first as a screening, before popularity and cost are assessed. A sport that fails the screening is not compared further.',
        'The reason is that the Games’ reputation depends on every federation on the program. One scandal in a sport damages the whole event.',
      ],
      marking: [
        '2 marks: the recognition criteria described.',
        '3 marks: the duties and rights that come with recognition.',
        '2 marks: governance as the first stage of screening.',
        '1 mark: a reason, such as reputation or integrity.',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Compare the governance of the Olympic Movement with that of a private team league such as the NFL. Which is better placed to be accountable to outsiders, and why?',
      answer: [
        'The Olympic Movement is a network of independent bodies. International federations are recognized by the IOC only if they meet outside criteria, the Olympic Charter and codes. Money flows through the IOC to recognized bodies.',
        'A private team league is a company owned by its clubs. The clubs elect the Commissioner, the league sells the rights and shares revenue, and the owners write the rules.',
        'The Olympic system has more formal outside criteria, but the IOC sets and judges them. The league is accountable to its owners and to public law such as competition law, but has fewer outside standards on how it is governed.',
        'Neither is fully accountable to the public. A balanced answer notes that each has a different audience for accountability: members and the IOC on one side, owners on the other.',
      ],
      marking: [
        '3 marks: accurate description of both models.',
        '3 marks: a clear comparison on ownership, control and money flow.',
        '2 marks: a reasoned conclusion that acknowledges limits on both sides.',
      ],
    },
  ],

  videos: [],
};
