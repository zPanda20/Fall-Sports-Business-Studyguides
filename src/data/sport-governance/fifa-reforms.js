// International Sports Governance, Asynchronous Activity 1 (debriefed in Session 5):
// governance reforms at FIFA after FIFAGate: actual reforms or a PR exercise?
// Built from the debrief slides in the course transcript. Real example facts: the US Department of Justice press releases
// (27 May 2015 and 24 August 2021) and a report of the FIFA Congress vote of 26 February 2016.

export const fifaReformsTopic = {
  id: 'fifa-reforms',
  course: 'sport-governance',
  title: 'Governance reforms at FIFA after FIFAGate',
  sessions: 'Async 1 (after Session 4)',
  reading: 'Async 1 articles and the Session 5 debrief slides',
  minutes: 25,
  summary:
    'How to judge whether reforms after a scandal change real power or only the image, using FIFA’s reforms and the money recovered in the US case.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The question',
      title: 'Actual reforms or a PR exercise?',
      blocks: [
        { type: 'big', text: 'After a scandal, a body usually announces reforms. The skill is telling **changes in real power** from **changes in image**.' },
        {
          type: 'columns',
          items: [
            { title: 'Looks like real reform when…', text: 'Power is spread out, an independent body can check the leadership, rules are binding and enforced, and results can be measured.' },
            { title: 'Looks like PR when…', text: 'Rules are announced but not enforced, the same people control the checkers, or limits start counting from zero.' },
          ],
        },
        { type: 'p', text: 'This topic uses FIFA as a worked case. It also prepares you for any “reform or PR?” question in your group assignment.' },
      ],
    },
    {
      kicker: 'What was wrong',
      title: 'The problems critics named',
      blocks: [
        {
          type: 'p',
          text: 'The first article for the activity described a body that, by its own account, had revenue of about 5.7 billion USD from 2011 to 2014, yet critics pointed to:',
        },
        {
          type: 'table',
          head: ['Criticism', 'Governance principle'],
          rows: [
            ['No transparency on executive salaries and how resources were allocated', 'Transparency'],
            ['Policy decisions taken without debate or explanation', 'Democracy'],
            ['A small executive committee with outsized power', 'Distribution of power'],
            ['Little oversight and weak answerability', 'Accountability'],
          ],
        },
      ],
    },
    {
      kicker: 'The timeline',
      title: 'From arrests to a reform vote',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '27 May 2015', text: 'US prosecutors unseal charges against 14 people. Swiss authorities arrest officials in Zurich.' },
            { title: '2015', text: 'A reform committee proposes principles for change.' },
            { title: '26 Feb 2016', text: 'FIFA’s Congress approves a reform package by 179 votes to 22.' },
            { title: '24 Aug 2021', text: 'The US awards forfeited funds to the “victim” organizations through a new fund.' },
          ],
        },
      ],
    },
    {
      kicker: 'The reform package',
      title: 'What changed on paper',
      blocks: [
        {
          type: 'p',
          text: 'The reform committee’s recommendations, as listed on the debrief slides, covered:',
        },
        {
          type: 'bullets',
          items: [
            '**Separating political and management functions.**',
            '**Financial transparency and control.**',
            '**Term limits.**',
            '**Transparency of compensation.**',
            '**Universal principles** that all member associations must apply.',
          ],
        },
        {
          type: 'p',
          text: 'The Congress vote of February 2016 replaced the Executive Committee with a **FIFA Council**, cut standing committees from 26 to 9, set **three four-year terms** (12 years) as the maximum for the president and council members, and committed to disclose the pay of senior figures.',
        },
        {
          type: 'kpis',
          items: [
            { label: 'Congress vote', value: '179 to 22' },
            { label: 'Maximum time in office', value: '12 yrs', note: 'three four-year terms' },
            { label: 'Standing committees', value: '26 → 9' },
          ],
        },
      ],
    },
    {
      kicker: 'Follow the money',
      title: 'Victim status and the remission fund',
      blocks: [
        {
          type: 'p',
          text: 'The US Department of Justice treated FIFA, two regional confederations and some national associations as **victims** of the executives who took bribes. In 2021 it approved remission of more than **201 million USD**, with a first distribution of 32.3 million.',
        },
        {
          type: 'steps',
          items: [
            'The money was **not** simply paid to FIFA. It was to go “to and through” a **newly created World Football Remission Fund**, set up under the FIFA Foundation.',
            'The fund’s terms were described as providing for **oversight and independent audit** so the money is spent properly.',
            'The aim: return money for football projects, with a particular focus on youth and community programs.',
          ],
        },
        {
          type: 'callout',
          title: 'Why this matters for governance',
          text: 'Money that comes back to an organization after a scandal is also a governance test: who decides how it is spent, and who checks? Special funds with independent audit are one answer.',
        },
      ],
    },
    {
      kicker: 'A method',
      title: 'Five tests for “real reform”',
      blocks: [
        {
          type: 'table',
          head: ['Test', 'The question', 'Warning sign'],
          rows: [
            ['Power', 'Is power now shared among more people or bodies?', 'The same small group, new names'],
            ['Independence', 'Can someone outside the leadership check it?', 'The checkers are chosen by the people they check'],
            ['Limits', 'Are there real term and spending limits?', 'Limits that count from zero, or with exceptions'],
            ['Openness', 'Are pay, accounts and decisions published?', 'Summaries only, with no detail'],
            ['Enforcement', 'Does anyone apply the rules to the powerful?', 'Rules are used on others, not on insiders'],
          ],
        },
        { type: 'p', text: 'Score each test with evidence. A fair answer to “reform or PR?” is often “partly both”, and says which tests are met and which are not.' },
      ],
    },
    {
      kicker: 'Writing it up',
      title: 'How to answer a forum question well',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Claim:** give your position in one sentence.',
            '**Evidence:** use facts with dates and named sources, not impressions.',
            '**Counter-evidence:** show the best point against your view.',
            '**Judgment:** say which tests are met, which are not, and what you would check next.',
          ],
        },
        {
          type: 'callout',
          title: 'Check what you read',
          text: 'The debrief questions asked for exact details, such as the three sets of reform principles, specific recommendation numbers and how many panels a proposed rule change would require. Look these up in the reform committee’s report and FIFA’s statutes. This guide does not repeat them from memory.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'FIFAGate', def: 'The 2015 corruption scandal around FIFA and football officials, which led to arrests in Zurich and US indictments.' },
    { term: 'Executive Committee (ExCo)', def: 'FIFA’s former top decision body. In 2016 it was replaced by the FIFA Council.' },
    { term: 'FIFA Council', def: 'The body that replaced the ExCo after the 2016 reforms.' },
    { term: 'Separation of powers', def: 'Splitting political leadership from management, so one group does not control both.' },
    { term: 'Term limit', def: 'A maximum time in an elected role. FIFA’s is three four-year terms.' },
    { term: 'Remission', def: 'In US law, giving forfeited money back to victims of a crime.' },
    { term: 'World Football Remission Fund', def: 'The fund created to receive and distribute the recovered money, under the FIFA Foundation.' },
    { term: 'Window-dressing / PR reform', def: 'A reform that improves the image without changing who holds power.' },
  ],
  cards: [
    { front: 'Five tests for real reform', back: 'Power, independence, limits, openness, enforcement.' },
    { front: 'FIFA’s Congress vote on reforms', back: '26 February 2016, 179 to 22.' },
    { front: 'What replaced the Executive Committee?', back: 'The FIFA Council.' },
    { front: 'Maximum time in office after 2016', back: 'Three four-year terms (12 years).' },
    { front: 'Where did the recovered 201 million go?', back: 'To and through a newly created World Football Remission Fund, with oversight and independent audit measures.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'FIFA 2015 to 2021: charges, reforms and recovered money',
    note: 'The facts behind the activity, with dates, from US government and press sources. Allegations are not findings. Facts as of November 2026.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The charges of 27 May 2015',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Defendants', value: '14', note: '9 FIFA officials and 5 corporate executives' },
              { label: 'Counts', value: '47', note: 'racketeering, wire fraud, money laundering and more' },
              { label: 'Alleged scheme', value: '24 yrs', note: '“between 1991 and the present”' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The US Justice Department said the scheme centered on bribes and kickbacks for media and marketing rights, “well over $150 million” in total.',
              'Other alleged schemes concerned the choice of the host country for the 2010 World Cup and sponsorship of the Brazilian federation.',
              'The department stressed that the charges are allegations and the defendants are presumed innocent unless proven guilty.',
            ],
          },
          {
            type: 'p',
            text: 'The class slide counts the 14 as 9 elected officials and 5 staff members. The Justice Department’s own release counts 9 FIFA officials and 5 corporate executives (4 sports marketing executives and 1 broadcasting intermediary). Use the primary source in your work.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'The reforms of February 2016',
        blocks: [
          {
            type: 'bullets',
            items: [
              'At an extraordinary Congress in Zurich on 26 February 2016, member associations approved a reform package by **179 votes to 22**.',
              'The **FIFA Council** replaced the Executive Committee and standing committees were reduced from 26 to 9.',
              'The president and council members may serve **three four-year terms**, a maximum of 12 years.',
              'Compensation for senior figures is to be disclosed, and FIFA committed to improve women’s representation in decision-making.',
            ],
          },
          {
            type: 'callout',
            title: 'Apply the five tests',
            text: 'Power (a Council replaces the ExCo), limits (12 years), openness (pay disclosure) are structural. Independence and enforcement depend on how later rules are applied, so check what came after 2016 before you decide.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'The remission fund of August 2021',
        blocks: [
          {
            type: 'bullets',
            items: [
              'On 24 August 2021 the Justice Department said it had granted remission of more than 201 million USD in losses to FIFA, CONCACAF, CONMEBOL and several national associations, with an initial 32.3 million approved for distribution.',
              'The organizations committed to distribute the money to and through a newly created **World Football Remission Fund** under the FIFA Foundation, whose terms provide for oversight and independent audit.',
              'The department’s legal reasoning: forfeited proceeds can go to crime victims, including the soccer organizations that employed and were defrauded by the corrupt executives.',
            ],
          },
          {
            type: 'p',
            text: 'Different observers weigh this differently: some see a proper use of victim rules with audit conditions, others question whether bodies led by the accused should be paid as victims. Present both views and the evidence for each.',
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
                title: 'Nine FIFA Officials and Five Corporate Executives Indicted for Racketeering Conspiracy and Corruption',
                url: 'https://www.justice.gov/archives/opa/pr/nine-fifa-officials-and-five-corporate-executives-indicted-racketeering-conspiracy-and',
                note: 'US Department of Justice, 27 May 2015. The 14 defendants, 47 counts, the period alleged and the headline schemes.',
              },
              {
                title: 'FIFA passes massive reform package',
                url: 'https://www.si.com/soccer/2016/02/26/fifa-reform-term-limits-council-women',
                note: 'Sports Illustrated, 26 February 2016. The 179 to 22 vote, the Council, committees cut from 26 to 9, term limits and pay disclosure.',
              },
              {
                title: 'Justice Department Approves Remission of Over $32 Million in Forfeited Funds to Victims in the FIFA Corruption Case',
                url: 'https://www.justice.gov/archives/opa/pr/justice-department-approves-remission-over-32-million-forfeited-funds-victims-fifa-corruption',
                note: 'US Department of Justice, 24 August 2021. The more than 201 million USD in approved losses, the World Football Remission Fund and its oversight and audit terms.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Northern Cup Federation’s “Renewal Package”',
    universe: 'northern',
    slides: [
      {
        kicker: 'The package',
        title: 'What the NCF announces',
        blocks: [
          {
            type: 'p',
            text: 'After a bribery scandal, the Northern Cup Federation (NCF) President resigns and the new leadership announces a Renewal Package:',
          },
          {
            type: 'bullets',
            items: [
              'The 12-member Council is replaced by a 9-member Board.',
              'Presidents are limited to three four-year terms, counted from the date the new statutes take effect.',
              'An Ethics Commission is created. The Board appoints its five members.',
              'Pay for the top five officials is published as one combined total.',
              'Rules apply to all members. The NCF will “review” any complaints about its own officials.',
            ],
          },
        ],
      },
      {
        kicker: 'Scoring',
        title: 'The five tests',
        blocks: [
          {
            type: 'table',
            head: ['Test', 'Evidence', 'Score (0, 1 or 2)'],
            rows: [
              ['Power', 'A smaller Board, but the same Congress electorate and many of the same people', '1'],
              ['Independence', 'The Board appoints the Ethics Commission and the NCF reviews complaints about itself', '0'],
              ['Limits', 'Three terms, but counting from zero lets the current president serve 12 more years', '1'],
              ['Openness', 'One combined figure, not individual pay', '1'],
              ['Enforcement', 'No named independent body applies the rules to officials', '1'],
            ],
          },
          {
            type: 'p',
            text: 'The total is 4 out of 10: weak. The package is closer to PR than to real reform, though the new term limit is a start.',
          },
        ],
      },
      {
        kicker: 'Fixes',
        title: 'Turn PR into reform',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Independence:** members of the Ethics Commission are chosen by a panel with outside members, for single fixed terms.',
              '**Limits:** count past years served, or apply the limit to the current president too.',
              '**Openness:** publish individual pay and any bonuses.',
              '**Enforcement:** let an outside body handle complaints against officials, funded through the statutes rather than yearly by the Board.',
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
      q: 'Which pair correctly matches a criticism of FIFA with the principle it concerns?',
      options: [
        'Decisions taken without debate or explanation: democracy',
        'No data on executive salaries: democracy',
        'A small committee with outsized power: transparency',
        'Weak oversight: term limits',
      ],
      answer: 0,
      explanation: 'Decisions without debate are a democracy problem. Missing salary data is transparency. A small committee with outsized power is about distribution of power, and weak oversight is accountability.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What did FIFA’s member associations approve on 26 February 2016?',
      options: [
        'A reform package including a FIFA Council to replace the Executive Committee and term limits',
        'A ban on all sponsorship deals',
        'The creation of the Court of Arbitration for Sport',
        'The sale of the World Cup to a single broadcaster',
      ],
      answer: 0,
      explanation: 'The Congress approved the package by 179 votes to 22, creating a Council, reducing standing committees from 26 to 9 and setting a 12-year limit.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'How did the US Justice Department say the recovered funds should reach football?',
      options: [
        'To and through a newly created World Football Remission Fund with oversight and independent audit measures',
        'Straight into FIFA’s general budget with no conditions',
        'To the defendants’ families',
        'To national governments',
      ],
      answer: 0,
      explanation: 'The 2021 release says the organizations committed to distribute funds to and through the new fund, whose terms provide for oversight and independent audit.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which of these is the strongest sign that a reform is mostly PR?',
      options: [
        'The people who will be checked appoint the body that checks them',
        'The rules are published online',
        'Pay is disclosed for named individuals',
        'A term limit is added',
      ],
      answer: 0,
      explanation: 'If the checked choose the checkers, independence is missing. The other options are signs of real change.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'How many defendants did the US Justice Department charge on 27 May 2015, and how did it describe them?',
      options: [
        '14: 9 FIFA officials and 5 corporate executives',
        '7: all FIFA presidents',
        '24: all national federation staff',
        '3: the owners of a broadcaster',
      ],
      answer: 0,
      explanation: 'The department’s release names 9 FIFA officials, 4 sports marketing executives and 1 broadcasting intermediary: 14 in total. The class slide uses a different split, so use the primary source.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'The NCF’s new three-term limit counts only from the date the new statutes take effect, and the current president has already served 12 years. What is the best description?',
      options: [
        'A weak limit: it allows another 12 years',
        'A strong limit that ends his tenure at once',
        'Irrelevant to governance',
        'A guarantee of good governance',
      ],
      answer: 0,
      explanation: 'A limit that restarts the count lets the current leader stay for another full period, which is a classic PR-style feature.',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise (observation, integration, critique). “FIFA’s reforms were actual reform, not PR.” (a) Observation: list three facts with dates. (b) Integration: apply the five tests. (c) Critique: what evidence would change your mind?',
      answer: [
        '**(a) Observation.** For example: 27 May 2015 charges against 14 defendants; 26 February 2016 reform vote of 179 to 22; 24 August 2021 remission fund approved.',
        '**(b) Integration.** Power: a Council replaced the ExCo. Limits: 12 years maximum. Openness: pay disclosure promised. Independence and enforcement: judged by how later rules and bodies work, so look at who appoints and funds them.',
        '**(c) Critique.** Evidence that rules were later changed to weaken the checks, or that the independent bodies were funded or removed by the leadership, would support the PR view. Evidence of enforced sanctions against senior officials would support real reform.',
        'A strong answer reaches a reasoned “partly” or a clear verdict, shows both sides and names what it did not verify.',
      ],
      review: { section: 'plain', slide: 5 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Using the FIFA case, explain how you would decide whether post-scandal reforms are real or mainly public relations. Refer to at least three criteria.',
      answer: [
        'A reform is real if it changes who holds power and who can check them. Useful tests are: is power shared more widely, can an independent body check the leadership, are there real limits, are pay and accounts published, and are rules enforced on insiders.',
        'At FIFA the 2016 reforms replaced the Executive Committee with a Council, cut standing committees from 26 to 9, set a three-term (12-year) limit and promised to disclose pay. These are structural changes.',
        'Whether they are real depends on independence and enforcement: who appoints the integrity bodies, and whether later rule changes weaken or keep the checks.',
        'A balanced answer says the reforms contain real structural elements while the key test is how they are applied over time.',
      ],
      marking: [
        '3 marks: three criteria clearly explained.',
        '3 marks: accurate FIFA evidence tied to the criteria.',
        '2 marks: a reasoned, balanced conclusion naming what remains to be checked.',
      ],
    },
    {
      id: 'e2',
      marks: 6,
      q: 'Explain why the way recovered money is distributed after a scandal is a governance issue, using the World Football Remission Fund as an example.',
      answer: [
        'Money returned to an organization after a scandal can be misused again if the same people control it. Who decides and who checks are governance questions.',
        'The US Justice Department said the money would go to and through a new World Football Remission Fund under the FIFA Foundation, with terms providing for oversight and independent audit.',
        'This is an attempt at control mechanisms: a separate vehicle, a stated purpose (football projects with a focus on youth and community programs) and independent audit.',
        'Some observers question whether organizations whose officials were charged should be treated as victims, which shows why transparency about the fund’s use matters.',
      ],
      marking: [
        '2 marks: the link between money and governance (decision-making and checks).',
        '2 marks: accurate description of the fund and its conditions.',
        '2 marks: a balanced comment on strengths and doubts.',
      ],
    },
  ],

  videos: [],
};
