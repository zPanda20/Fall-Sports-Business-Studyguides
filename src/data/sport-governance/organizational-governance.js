// International Sports Governance, Session 4: organizational governance, regulatory standards,
// the board and ethical standards. Built from the Session 4 class slides (as written up in the course transcript).
// Real example: an academic assessment of the FIA's governance (October 2025) and a senior resignation (April 2025).
// Allegations are described as allegations. Figures in the cases table are as given on the class slides, unless noted.

export const organizationalGovernanceTopic = {
  id: 'organizational-governance',
  course: 'sport-governance',
  title: 'Organizational governance: standards, the board and ethics',
  sessions: 'Session 4',
  reading: 'Session 4 slides',
  minutes: 35,
  summary:
    'How one sports body should be run: the board, the checks on it, the standards used to judge it, and the patterns behind famous failures.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Organizational governance: inside one body',
      blocks: [
        {
          type: 'big',
          text: '“Good governance does not guarantee success. However, poor governance almost certainly guarantees failure.” (class slide)',
        },
        {
          type: 'p',
          text: 'Most sports federations are not-for-profit associations. They usually follow this chain:',
        },
        {
          type: 'flow',
          items: [
            { title: 'Members', text: 'Regional or national members vote at the annual general assembly.' },
            { title: 'Board', text: 'Elected for a term: president, vice-presidents, general secretary, treasurer. Board seats are largely unpaid.' },
            { title: 'CEO', text: 'Hired by the president to run daily work and report to the board.' },
          ],
        },
        { type: 'p', text: 'This mix of unpaid leaders and paid managers is where many problems start: who controls whom?' },
      ],
    },
    {
      kicker: 'Why it matters now',
      title: 'Growth plus money plus attention',
      blocks: [
        {
          type: 'steps',
          items: [
            'Sport has **expanded rapidly**.',
            'Values have **shifted from amateur to commercial**.',
            'The media pay more **attention**, which exposes abuse, scandal, corruption and unethical behavior.',
          ],
        },
        {
          type: 'p',
          text: 'To protect public trust, a body needs a **vision**, **strategic objectives**, **resources** and **clear policies and control procedures**. Together they ensure legality, effective accountability and transparency.',
        },
        {
          type: 'callout',
          title: 'Symptoms of weak governance (class slide)',
          items: [
            'Lack of integrity',
            'Conflicts of interest',
            'Nepotism',
            'Weak democratic structures',
            'Missing or ineffective control mechanisms',
            'Missing or opaque financial reporting',
          ],
        },
      ],
    },
    {
      kicker: 'Four famous failures',
      title: 'What went wrong, in short',
      blocks: [
        {
          type: 'table',
          head: ['Case', 'What the slides say', 'What followed'],
          rows: [
            ['Salt Lake City 1999', 'Bribes in cash, travel, gifts and scholarships worth about 1.3 million USD around the bid.', 'IOC investigation; bid process overhauled; 6 members expelled, 3 resigned, 10 warned; Ethics Commission and Code of Ethics created. US prosecutors brought 15 counts against 2 organizers, with no convictions.'],
            ['ISL 2001', 'A sports marketing firm founded in 1982 whose bribery scheme paid about CHF 156 million over 1989 to 2001, spreading from TV rights to elections, hosting and commercial rights.', 'FIFA filed a complaint in Switzerland. Bodies named include FIFA, IOC, UEFA, IAAF, CAF, FIBA and OCA.'],
            ['FIFA 2015', 'Arrests in Zurich and US indictments over hosting, sponsorship and media rights across 24 years.', 'See the next topic on reforms.'],
            ['IAAF 2015', 'Two WADA commission reports found doping cases covered up for money, embezzlement and bribery over hosting rights.', 'Reform of athletics’ governance and anti-doping set-up.'],
          ],
        },
        { type: 'p', text: 'Common thread: money and power concentrated in a few hands, with nobody independent checking them.' },
      ],
    },
    {
      kicker: 'How good is the sector?',
      title: 'Evidence from outside assessments',
      blocks: [
        {
          type: 'p',
          text: 'The slides give early rankings. In 2015 a Danish research institute ranked 35 international federations on transparency, democracy and accountability. In the same year Transparency International looked at football associations.',
        },
        {
          type: 'kpis',
          items: [
            { label: 'IFs publishing per diems and bonuses', value: '0 of 35' },
            { label: 'IFs with a background check for senior executives', value: '4 of 35', note: 'about 11%' },
            { label: 'Football associations with no public financial records', value: '81%' },
          ],
        },
        {
          type: 'bullets',
          items: [
            'Fewer than one third of the IFs published externally audited annual financial reports.',
            'Among football associations, 21% had no website and 85% published no accounts of their activities.',
            'Codes of good practice in company governance appeared in the 1990s. Sport began assessing its own governance about 25 years later.',
            'There is **no universal code** for sport, unlike the WADA Code for doping. Recommendations multiplied, are based on corporate governance, stress control mechanisms such as audit and risk management, and are **non-binding**.',
          ],
        },
      ],
    },
    {
      kicker: 'The toolbox',
      title: 'Four families of good-governance standards',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Transparency', text: 'Publish statutes, org chart, elected officials, vision and strategy, annual report, allowances and benefits, audited accounts, assembly documents and summaries of decisions.' },
            { title: 'Integrity', text: 'A code of ethics, anti-doping and match-manipulation codes, a whistleblower system, integrity education and investigations, publication of disciplinary decisions, balanced diversity, safeguarding.' },
            { title: 'Democracy', text: 'Elections with clear rules and eligibility, term limits, stakeholder representation, a conflict-of-interest policy, regular assemblies and equal chances to take part.' },
            { title: 'Control mechanisms', text: 'Audit, compliance and risk management that do not depend on the person being checked.' },
          ],
        },
        {
          type: 'p',
          text: 'Two frameworks on the slides use these ideas: a 2016 assessment by the association of summer Olympic federations with six sections (guiding codes, transparency, integrity, democracy, sports development and solidarity, control mechanisms) and the 2020 SIGA universal standards with independent rating and verification.',
        },
      ],
    },
    {
      kicker: 'Five reviews, one pattern',
      title: 'What independent reviews found',
      blocks: [
        {
          type: 'p',
          text: 'The AI exercise for this session asked you to check five reviews: the UCI Independent Reform Commission (2015), the IBU External Review Commission (2021), the USA Gymnastics review by Ropes & Gray, the Independent Review of Integrity in Tennis (2018) and the Wood review with Sport Integrity Australia.',
        },
        {
          type: 'steps',
          items: [
            '**Power was concentrated in a president**, with weak checks (UCI, IBU).',
            '**Promoting vs policing conflict:** the UCI shielded its biggest star, and tennis earned income from the betting data that fed corruption.',
            '**Integrity units were under-resourced** and depended on the body they policed.',
            '**Accountability fell between institutions:** the US Olympic committee deferred to USA Gymnastics, and nobody owned athlete safety.',
            '**A culture that put results ahead of athlete welfare.**',
          ],
        },
        {
          type: 'callout',
          title: 'Who commissions the review shapes the review',
          text: 'Four of the five were commissioned by the sports bodies themselves. Only the Wood review came from a government. A self-commissioned review can be independent in method, but the body under scrutiny sets scope, access to evidence and whether it is published. Two reviews were launched by new leaders investigating predecessors, which separates the institution from past failures but can limit how far the review questions today’s structure.',
        },
      ],
    },
    {
      kicker: 'The standard fix',
      title: 'Move integrity outside, then ask what kind of independence',
      blocks: [
        {
          type: 'p',
          text: 'The usual response is to separate the function that **investigates** from the body that **organizes and earns**: the International Testing Agency, the Biathlon Integrity Unit, the ITIA in tennis, SafeSport in the US and Sport Integrity Australia.',
        },
        {
          type: 'table',
          head: ['Type of independence', 'Question', 'Example from the slides'],
          rows: [
            ['Operational', 'Can it investigate without orders?', 'The Biathlon Integrity Unit is operationally independent.'],
            ['Financial', 'Who pays?', 'It is funded by the IBU. The ITIA is funded by the governing bodies of tennis.'],
            ['Institutional', 'Who appoints and can remove it?', 'Check statutes: independence on paper is not the same as in structure.'],
          ],
        },
        {
          type: 'callout',
          title: 'When self-regulation fails, the state steps in',
          text: 'In the United States, Congress legislated oversight of the Olympic system. In Australia, the government created a national integrity agency and tribunal. The slides conclude that the autonomy of sport is conditional: it lasts as long as federations show they can govern themselves.',
        },
      ],
    },
    {
      kicker: 'Practice spotting red flags',
      title: 'Two worked cases and what to look for',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Case 1: a 2 billion surplus',
              text: 'The president wants to give part of it to members worldwide. Red flags: **he decides alone** (concentration of power); the **receiving members elect him** (conflict of interest, like buying votes); **no criteria** (transparency); **no purpose or follow-up** (accountability); **timing near an election**.',
            },
            {
              title: 'Case 2: an ethics commission',
              text: 'The president wants to set it up and supplies a list of founding members, some “permanent”. Red flags: **he picks the members** (no independence); **permanent seats** (no renewal, capture risk); **a pre-set list** (nepotism or loyalty); **no open process**; **no declared conflicts**.',
            },
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Money is power:** distribution should be controlled by independent bodies, with measurable impact and reporting.',
            '**Independence is key:** look at the process before the people. Whoever benefits should not decide, and whoever decides should not control. Publish everything. Set time limits.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Organizational governance', def: 'How one organization is directed and controlled: its board, rules, ethics and control mechanisms.' },
    { term: 'Board', def: 'The elected group of leaders who set direction and oversee management. In sport, often unpaid.' },
    { term: 'General assembly', def: 'The meeting of members that elects the board and votes on key decisions.' },
    { term: 'Conflict of interest', def: 'A situation where a person’s own interest could influence a decision they are supposed to make for the organization.' },
    { term: 'Nepotism', def: 'Giving jobs or power to friends and family instead of choosing on merit.' },
    { term: 'Concentration of power', def: 'Too much decision power held by one person or small group, with weak checks.' },
    { term: 'Term limit', def: 'A rule that limits how long a person may hold an elected role.' },
    { term: 'Whistleblower system', def: 'A safe, trusted way for people to report wrongdoing without punishment.' },
    { term: 'Control mechanism', def: 'A check such as audit, compliance or risk management that does not depend on the person being checked.' },
    { term: 'Operational vs financial independence', def: 'Operational: can act without orders. Financial: not funded by the body it polices. Both are needed.' },
    { term: 'SIGA', def: 'A set of universal standards for sport governance with an independent rating and verification system (2020).' },
  ],
  cards: [
    { front: 'Quote: good vs poor governance', back: 'Good governance does not guarantee success; poor governance almost certainly guarantees failure.' },
    { front: 'Four families of good-governance standards', back: 'Transparency, integrity, democracy and control mechanisms.' },
    { front: 'Common pattern in the five reviews', back: 'Concentrated power, promoting vs policing conflict, weak integrity units, accountability gaps and a results-first culture.' },
    { front: 'Why is “operationally independent” not enough?', back: 'The unit may still be funded or appointed by the body it polices. Check financial and institutional independence too.' },
    { front: 'When self-regulation fails…', back: 'The state steps in (for example US Congress, or Australia’s national integrity agency).' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'The FIA: a governance assessment and a resignation',
    note: 'A recent real case to practice the checklist on. The assessment is one academic report, and the facts about individuals are allegations or statements by named people. Facts as of November 2026.',
    slides: [
      {
        kicker: 'Real example',
        title: 'What the assessment found',
        blocks: [
          {
            type: 'bullets',
            items: [
              'In October 2025 Dr. Arnout Geeraert of Utrecht University’s School of Governance published “Power without brakes: An evaluation of FIA governance and the road to reform”.',
              'The report scores the FIA 45% on the Sports Governance Observer index, which places it among federations with formal governance structures but weak safeguards.',
              'It concludes that the FIA’s governance “structurally concentrates power in the office of the President”, that its ethics and audit committees depend on FIA leadership for nominations and reporting, and that elections are regular but not genuinely competitive.',
              'It also says stakeholders such as drivers “lack a meaningful voice in decision-making”.',
            ],
          },
          {
            type: 'p',
            text: 'We did not retrieve an FIA reply to this report. When you use it in an assignment, look for the FIA’s own statement and report both views.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'A deputy president resigns',
        blocks: [
          {
            type: 'bullets',
            items: [
              'On 10 April 2025 the FIA’s deputy president for sport, Robert Reid, resigned and said in a statement that the organization’s governance had broken down: “Over time, those principles have increasingly been set aside.”',
              'The class slides also list other departures: the CEO leaving after 18 months and a compliance officer let go in November 2024 after investigating allegations involving the president. We have not independently checked those two points.',
            ],
          },
          {
            type: 'columns',
            items: [
              { title: 'Which standards are in question?', text: 'Democracy (competitive elections), integrity (independent ethics and audit), transparency and participation of stakeholders.' },
              { title: 'Questions to ask', text: 'Who appoints the ethics and audit bodies? Who can remove them? How are complaints about the president handled?' },
            ],
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
                title: 'Power without brakes: An evaluation of FIA governance and the road to reform',
                url: 'https://www.uu.nl/sites/default/files/Report%20on%20FIA%202025.pdf',
                note: 'Dr. Arnout Geeraert, Utrecht School of Governance, October 2025. The 45% score and the findings on concentration of power, oversight and participation. We read the first part of the report.',
              },
              {
                title: 'Breaking: FIA deputy president resigns over breakdown in governance',
                url: 'https://capeargus.co.za/motoring/f1-grand-prix/2025-04-10-breaking-fia-deputy-president-resigns-over-breakdown-in-governance/',
                note: 'Cape Argus, 10 April 2025. Robert Reid’s resignation and his statement. The page includes no FIA response.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Red flags at the Northern Cup Federation',
    universe: 'northern',
    slides: [
      {
        kicker: 'Case A',
        title: 'The pre-election bonus',
        blocks: [
          {
            type: 'p',
            text: 'The Northern Cup Federation (NCF) has a surplus of 90 million units. Three months before its Congress, the President announces “solidarity bonuses” of 1 million units each for 40 member associations that he names himself.',
          },
          {
            type: 'table',
            head: ['Red flag', 'Standard it breaks'],
            rows: [
              ['One person proposes and decides', 'Concentration of power; checks and balances'],
              ['Recipients vote in the election', 'Conflict of interest; democracy'],
              ['No criteria for who gets what', 'Transparency; fairness'],
              ['No purpose or reporting', 'Accountability'],
              ['Three months before an election', 'Timing risk'],
            ],
          },
          {
            type: 'callout',
            title: 'Better',
            text: 'The Council adopts open criteria (for example need and results), an independent panel approves grants, recipients report how they used the money, and decisions are published. Nothing is paid in the election period.',
          },
        ],
      },
      {
        kicker: 'Case B',
        title: 'The integrity unit funded by the NCF',
        blocks: [
          {
            type: 'p',
            text: 'After a scandal, the NCF creates a “fully independent” Integrity Unit. It has its own staff and investigates without taking orders. But its budget is set each year by the Council, and the President appoints its head.',
          },
          {
            type: 'bullets',
            items: [
              '**Operational independence:** yes, on paper.',
              '**Financial independence:** no. The body it polices decides the money.',
              '**Institutional independence:** weak. The President appoints the head, and can effectively remove the person by cutting the budget.',
              'A stronger design: multi-year funding set in the statutes, a head appointed by a panel with outside members for a fixed term, and published annual reports.',
            ],
          },
        ],
      },
      {
        kicker: 'Case C',
        title: 'The numbers test',
        blocks: [
          {
            type: 'p',
            text: 'An outside group reviews 20 international federations, including the NCF. Seven publish audited accounts. How does that compare with the class evidence (fewer than one third of 35)?',
          },
          {
            type: 'bars',
            title: 'Share of federations publishing audited accounts',
            unit: '%',
            items: [
              { label: 'Class evidence (under one third)', value: 33 },
              { label: 'This review (7 of 20)', value: 35 },
            ],
          },
          {
            type: 'p',
            text: '7 of 20 is 35%, so slightly above one third. It is still low. The right move is to ask which seven, and whether the NCF is one of them.',
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
      q: 'In a typical sports federation, who hires the CEO?',
      options: [
        'The president, who then oversees the CEO as part of the board',
        'The general assembly in a public vote',
        'The national government',
        'The sponsors',
      ],
      answer: 0,
      explanation: 'According to the slides, the board is elected at the general assembly and the president then hires a CEO to run daily activities, reporting to the board.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which of these is a typical symptom of weak governance, according to the slides?',
      options: [
        'Missing or opaque financial reporting',
        'Published and audited accounts',
        'Term limits for officials',
        'An independent whistleblower system',
      ],
      answer: 0,
      explanation: 'The slide lists lack of integrity, conflicts of interest, nepotism, weak democratic structures, weak control mechanisms and opaque financial reporting. The other options are signs of good governance.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'What do the five independent reviews suggest about who commissions a review?',
      options: [
        'It shapes what the review can find, because the body under scrutiny often sets scope, access and publication',
        'It makes no difference to the findings',
        'Reviews are always commissioned by governments',
        'A review commissioned by a body is always more critical',
      ],
      answer: 0,
      explanation: 'Four of the five were commissioned by the sports bodies themselves. Even if the method is independent, the body can influence what is examined and published.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'An integrity unit is “operationally independent” but its budget is set by the federation it investigates. What is the best description?',
      options: [
        'It lacks financial independence, so its independence is incomplete',
        'It is fully independent',
        'It is financially independent but not operationally independent',
        'It no longer needs oversight',
      ],
      answer: 0,
      explanation: 'Operational independence is not the same as financial or institutional independence. Funding by the body it polices is a standard weakness.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A president wants to set up an ethics commission and hands you a list of founding members, some “permanent”. Which is the main red flag?',
      options: [
        'The body meant to oversee him is chosen by him, with no renewal or open process',
        'The commission is too large',
        'The commission will meet too often',
        'The commission’s name is unclear',
      ],
      answer: 0,
      explanation: 'If the president picks the members, the commission lacks independence. Permanent seats remove renewal and increase the risk of capture. Process matters more than the names.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'The NCF President announces grants for 40 member associations he names, three months before the election. Which two standards are most directly broken?',
      options: [
        'Conflict of interest and accountability',
        'Safeguarding and sustainability',
        'Diversity and climate policy',
        'Broadcast rights and ticketing',
      ],
      answer: 0,
      explanation: 'Recipients vote in the election (conflict of interest) and there is no stated purpose or reporting on use (accountability). Concentration of power and lack of criteria also apply.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise for the group assignment (observation, integration, critique). Pick a federation scandal you know. (a) Observation: what happened in three facts? (b) Integration: which of the four families of standards (transparency, integrity, democracy, control mechanisms) were weakest, and which pattern from the five reviews fits? (c) Critique: what would a reformer have to change, and what could still go wrong after the change?',
      answer: [
        '**(a) Observation.** Three dated facts with a named source, such as who held which role and what was alleged or found.',
        '**(b) Integration.** For example: “Democracy and control mechanisms were weakest: no term limits and a compliance function that depended on the president. This fits the pattern of power concentrated in a president.”',
        '**(c) Critique.** For example: “Create an independent integrity body with multi-year funding and outside appointments. Even so, the body may be only operationally independent unless its budget and appointments are protected, and members may still re-elect the same leadership.”',
        'A strong answer ties the specific failure to a named standard, uses the course pattern accurately, and shows why the fix could be incomplete.',
      ],
      review: { section: 'plain', slide: 4 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A federation’s president proposes to distribute surplus income to member associations and says he will choose the recipients. Identify four governance red flags and recommend a better process.',
      answer: [
        'Concentration of power: the proposal and the decision come from one person, not from a body with a mandate.',
        'Conflict of interest: the members receiving the money are the same ones who elect the president, so grants can look like buying votes.',
        'No criteria: it is unclear who gets how much and why, so the process is discretionary and possibly discriminatory (transparency).',
        'No purpose or follow-up: nothing says what the money is for or how it will be checked (accountability). The timing near an election makes the risk worse.',
        'Better process: the board or council adopts written criteria, an independent panel approves grants, recipients report on use and decisions are published. Large distributions are avoided in the election period.',
      ],
      marking: [
        '4 marks: one for each of four correct red flags, each linked to a principle.',
        '4 marks: a better process with at least three elements (criteria, independent approval, reporting, publication).',
        '2 marks: clear reasoning, using terms such as independence, transparency and accountability correctly.',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Explain why “moving integrity outside the federation” is a common response to scandals, and discuss one limit of this approach.',
      answer: [
        'When a federation both earns money from its sport and polices it, conflicts of interest arise. Separating investigation from organization is meant to protect independence. Examples on the slides include the International Testing Agency, the Biathlon Integrity Unit, the ITIA, SafeSport and Sport Integrity Australia.',
        'A limit is that independence has several forms. A unit may be operationally independent but funded by the body it polices, as with the Biathlon Integrity Unit, or set up and funded by the governing bodies, as with the ITIA. That leaves doubt about its financial and institutional independence.',
        'A further limit is that reviews are often commissioned by the body under scrutiny, so scope and publication can be controlled. When self-regulation fails, governments may step in.',
      ],
      marking: [
        '3 marks: the conflict between earning and policing, and the logic of separation.',
        '2 marks: examples.',
        '3 marks: a limit explained with the types of independence and a supporting example.',
      ],
    },
  ],

  videos: [],
};
