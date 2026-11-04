// International Sports Governance, Session 5: political governance and the autonomy of sport.
// Built from the Session 5 slides (timeline of autonomy, the AI-exercise options, the key takeaways).
// Real example: facts checked against press reports of June and July 2026 and the Council of Europe / CJEU / ECtHR texts.

export const politicalGovernanceAutonomyTopic = {
  id: 'political-governance-autonomy',
  course: 'sport-governance',
  title: 'Political governance and the autonomy of sport',
  sessions: 'Session 5',
  reading: 'Session 5 slides; PACE Resolution 2199 (2018)',
  minutes: 30,
  summary:
    'Why sport claims the right to run itself, where that claim comes from, how courts and governments have narrowed it, and why it is now treated as something sport must earn.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The idea',
      title: 'Political governance: how governments steer sport',
      blocks: [
        { type: 'big', text: 'Governments never stand fully outside sport. They fund it, pass laws about it, host the events and sometimes try to control it.' },
        {
          type: 'p',
          text: 'The Session 5 slides describe national sports governance as a **spectrum that tends to shrink**: at one end the state runs sport directly, at the other sport runs itself. Over time the middle ground has narrowed, with more rules and more oversight from public authorities.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Sport wants', text: 'Freedom to write its own rules, pick its own leaders and settle its own disputes, free of political pressure.' },
            { title: 'Governments want', text: 'Sport that follows the law, protects people, spends public money well and reflects the public interest.' },
          ],
        },
        { type: 'p', text: 'The tension between those two wants is the topic of this session.' },
      ],
    },
    {
      kicker: 'The concept',
      title: 'What “autonomy of sport” means',
      blocks: [
        {
          type: 'p',
          text: '**Autonomy** is the claim that sport organizations can make their own rules and decisions without outside interference, while staying within the law.',
        },
        {
          type: 'steps',
          items: [
            '**Rule-making:** federations write the rules of the game and of their own organization.',
            '**Self-organization:** they choose their own leaders and structures.',
            '**Dispute settlement:** disputes go to sport’s own bodies, such as the Court of Arbitration for Sport.',
          ],
        },
        {
          type: 'callout',
          title: 'Where does the right come from?',
          text: 'No treaty creates it. It rests on private association law (people may form clubs and run them), on declarations by the sports movement itself, and on non-binding political support. So autonomy is **recognized, not granted**.',
        },
      ],
    },
    {
      kicker: 'A timeline',
      title: 'Seven milestones from the slides',
      blocks: [
        {
          type: 'table',
          head: ['Year', 'Milestone', 'What it signals'],
          rows: [
            ['1949', 'Autonomy provision enters the Olympic Charter', 'Sport claims independence in its own affairs'],
            ['1992', 'European Sports Charter', 'Voluntary sports organizations may set up autonomous decision-making, “within the law”'],
            ['1995', 'Bosman ruling', 'Ended nationality quotas for EU players: sport rules meet EU law'],
            ['2004', 'Revised Olympic Charter', 'Reaffirms the autonomy of National Olympic Committees'],
            ['2006', 'Meca-Medina case', 'Sporting rules are not outside EU law when they have economic effects'],
            ['2007', 'EU White Paper on Sport', 'Governance is mainly for sports bodies, with some role for states and social partners'],
            ['2009', 'IOC Universal Principles of Good Governance', 'Sport answers the pressure by writing its own governance code'],
          ],
        },
        { type: 'p', text: 'Read the list as a story: sport asserts autonomy, courts and politicians set limits, and sport replies with its own standards.' },
      ],
    },
    {
      kicker: 'The courts',
      title: 'Courts keep qualifying autonomy',
      blocks: [
        {
          type: 'p',
          text: 'The slides list a run of European court cases, from Bosman in 1995 to the most recent rulings. The direction is steady: each one narrows the space in which sport can say “this is our business”.',
        },
        {
          type: 'table',
          head: ['Case', 'Core point'],
          rows: [
            ['Superleague (Court of Justice, 21 Dec 2023)', 'Rules that give FIFA and UEFA control over new competitions need criteria that are transparent, objective, non-discriminatory and proportionate'],
            ['Diarra (2024)', 'Transfer rules of FIFA tested against EU law (named on the slides; read the judgment before you quote it)'],
            ['Seraing (2025)', 'Arbitration awards must be open to real review by EU courts (named on the slides; read the judgment before you quote it)'],
            ['Semenya v Switzerland (ECtHR Grand Chamber, 10 Jul 2025)', 'The right to a fair hearing (Article 6) was violated; the court looked at how closely the Swiss court reviewed a CAS award'],
          ],
        },
        {
          type: 'callout',
          title: 'Read the rulings, not the headlines',
          text: 'Each ruling decides a narrow question. The Superleague judgment, for example, did not rule on the Super League project itself. For your assignment, read the official summary of any case you cite.',
        },
      ],
    },
    {
      kicker: 'The condition',
      title: 'Autonomy only where there is good governance',
      blocks: [
        {
          type: 'p',
          text: 'In January 2018 the Parliamentary Assembly of the Council of Europe adopted Resolution 2199, “Towards a framework for modern sports governance”. Its message, in paragraph 2: autonomy implies responsibility and **should be granted only where there is good governance in practice**. A follow-up from the Committee of Ministers, Recommendation CM/Rec(2018)12, covers good governance in sport.',
        },
        {
          type: 'flow',
          items: [
            { title: 'Old view', text: 'Autonomy is presumed. Outsiders must prove a reason to step in.' },
            { title: 'PACE view', text: 'Autonomy is earned. Sport must show good governance in practice.' },
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Who decides what counts as good governance?** The Council of Europe cannot enforce anything.',
            'In practice the condition is applied by **courts** (the EU Court of Justice, the European Court of Human Rights) and **legislators**, and the IOC accepts the link in principle.',
            '**The risk:** if autonomy is conditional, governments can use “bad governance” as an excuse to take control.',
          ],
        },
      ],
    },
    {
      kicker: 'Neutrality',
      title: 'Non-interference and political neutrality',
      blocks: [
        {
          type: 'p',
          text: 'The Olympic Charter and the FIFA Statutes require national bodies to be free of government control, and both organizations can **suspend** members when a government interferes. Sport also expects its own decision-makers to be **politically neutral**, in appearance as well as in procedure.',
        },
        {
          type: 'table',
          head: ['Case', 'Who pressed whom', 'Response'],
          rows: [
            ['India, Dec 2012', 'Government sports code versus the Olympic Charter in the national Olympic committee’s elections', 'IOC suspended the Indian Olympic Association'],
            ['Nepal, Jun 2026', 'National Sports Council versus the football federation over its election', 'FIFA suspended the federation for “third-party interference”'],
            ['Balogun, Jul 2026', 'A head of state asked the head of FIFA to review a suspension', 'FIFA suspended the ban on probation; critics asked about neutrality'],
          ],
        },
        { type: 'p', text: 'The details of the last two are in the real example. The question to carry from this table: is the rule applied the same way whoever applies the pressure?' },
      ],
    },
    {
      kicker: 'Weighing it',
      title: 'Two risks, not one',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Risk 1: unaccountable federations', text: 'Without outside checks, bodies may protect insiders, ignore athletes and hide failures. Examples: FIFAGate, weak integrity units.' },
            { title: 'Risk 2: politicised states', text: 'If governments can step in whenever they like, federations can be captured by ministers or ruling parties.' },
          ],
        },
        {
          type: 'p',
          text: 'A strong answer weighs both. It also asks **who pays**: a suspension keeps national teams and clubs out of international competition, so athletes who had no part in the dispute carry the cost.',
        },
        {
          type: 'callout',
          title: 'A useful test for any intervention',
          items: [
            'Is there a **governance failure** that justifies stepping in?',
            'Is the response **proportionate** and aimed at the failure, not at the leaders?',
            'Is it applied **equally** to strong and weak actors?',
            'Do the **affected people** (athletes, clubs) have a voice and a remedy?',
          ],
        },
      ],
    },
    {
      kicker: 'Takeaways',
      title: 'Six points to remember',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Autonomy is recognized, not granted.** It rests on association law, the movement’s declarations and non-binding political support.',
            '**It is conditional and has been narrowed again and again** by courts, from Bosman to the recent cases.',
            '**Good governance is the price of autonomy.** The Council of Europe says so, courts apply it, the IOC accepts it in principle.',
            '**Neutrality and non-interference are applied unevenly.** They are used strictly against small actors and less strictly when the pressure comes from the powerful.',
            '**Legal is not the same as legitimate.** A decision can have a formal basis and still harm the integrity of a competition.',
            '**Autonomy protects institutions, not necessarily athletes.** Suspensions and closed arbitration can leave those most affected without a voice.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Autonomy of sport', def: 'The claim that sport organizations may make their own rules and decisions, within the law.' },
    { term: 'Political governance', def: 'The way public authorities steer, fund and regulate sport.' },
    { term: 'Third-party interference', def: 'FIFA’s phrase for outside bodies, such as a government agency, interfering with a national federation’s affairs.' },
    { term: 'Political neutrality', def: 'The expectation that sport bodies and their decision-makers act without favor to political actors.' },
    { term: 'PACE Resolution 2199 (2018)', def: 'Council of Europe text saying autonomy implies responsibility and should be granted only where there is good governance in practice.' },
    { term: 'Legality vs. legitimacy', def: 'Legal: allowed by a rule. Legitimate: accepted as fair and properly decided.' },
    { term: 'State capture', def: 'When a government or ruling group takes effective control of an organization that should be independent.' },
    { term: 'Probation (suspended sanction)', def: 'A penalty that does not take effect unless the person offends again within a set period.' },
  ],
  cards: [
    { front: 'Where does autonomy of sport come from?', back: 'Private association law, the sports movement’s own declarations and non-binding political support. No treaty creates it.' },
    { front: 'PACE Resolution 2199 (2018), in one line', back: 'Autonomy implies responsibility and should be granted only where there is good governance in practice.' },
    { front: 'What did the IOC do in December 2012 over India?', back: 'It suspended the Indian Olympic Association over government interference in its elections.' },
    { front: 'The two risks when weighing autonomy', back: 'Unaccountable federations versus politicised states.' },
    { front: 'Legal vs. legitimate', back: 'A decision can have a formal legal basis and still be seen as unfair or damaging to integrity.' },
    { front: 'Who pays when a federation is suspended?', back: 'Athletes and clubs who had no part in the dispute.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Nepal and Balogun, June and July 2026: one rule, two kinds of pressure',
    note: 'The two cases set side by side on the Session 5 slides. Facts as reported in the press as of November 2026; the interpretations belong to the people quoted.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Nepal: FIFA suspends a federation',
        blocks: [
          {
            type: 'bullets',
            items: [
              'On **24 June 2026** the Bureau of the FIFA Council suspended the All Nepal Football Association (ANFA) for “third-party interference”, reported on 25 June.',
              'The dispute: Nepal’s National Sports Council had first suspended ANFA for three months, later reversed that, and refused to recognize ANFA’s proposed election, so the vote was postponed. The executive committee’s term had expired.',
              'Effect: Nepal’s national teams and clubs cannot play in FIFA or AFC competitions, and ANFA loses access to FIFA and AFC funding and programs until the suspension ends.',
            ],
          },
          {
            type: 'callout',
            title: 'Governance reading (from the slides)',
            text: 'The response looks at form, not substance: it punishes the interference, not the failure to hold elections. The cost falls on players who had no part in the dispute.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'Balogun: a head of state calls FIFA',
        blocks: [
          {
            type: 'bullets',
            items: [
              'On **1 July 2026**, in a World Cup Round of 32 match against Bosnia and Herzegovina, US striker Folarin Balogun was sent off, which triggered an automatic one-match ban.',
              'Donald Trump called FIFA president Gianni Infantino and asked for a review. On **5 July** FIFA suspended the ban under Article 27 of its disciplinary rules, which allows probation. UEFA described the probation as one year. The ban would have kept Balogun out of the Round of 16 against Belgium.',
              'The Belgian federation said FIFA broke its own rules and challenged the decision. FIFA treated its request as an appeal and rejected it as inadmissible.',
              'UEFA called the decision “unprecedented, incomprehensible and unjustifiable” and said FIFA had “crossed a red line”. Infantino said reviews are handled by independent bodies and that he did not interfere in them.',
            ],
          },
          {
            type: 'p',
            text: 'The class slides add that a comparable red card for South Africa’s Themba Zwane in the same tournament brought a three-match ban with no probation, and a reported fine of 40,000 USD for the US federation. These are from the slides and press reports; check them before you use them in graded work.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'Side by side: apply the test',
        blocks: [
          {
            type: 'table',
            head: ['Test', 'Nepal', 'Balogun'],
            rows: [
              ['Failure that justifies action?', 'A federation past its election date', 'A disputed red card'],
              ['Proportionate?', 'Total suspension of national teams and clubs', 'Ban suspended, with probation'],
              ['Equal treatment?', 'Strict application of the interference rule', 'Critics point to a different outcome for a comparable card'],
              ['Affected people have a voice?', 'Players have none in the dispute', 'The opposing federation was told its challenge was inadmissible'],
            ],
          },
          {
            type: 'p',
            text: 'The class reading: the rule on political interference is applied firmly against small actors and more softly when the pressure comes from the powerful or favors the governing body. FIFA’s own view is that its judicial bodies are independent. Report both, then judge.',
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
                title: 'Why FIFA’s Balogun red card suspension after Trump call is so controversial',
                url: 'https://www.aljazeera.com/sports/2026/7/6/why-fifas-balogun-red-card-suspension-after-trump-call-is-so-controversial',
                note: 'Al Jazeera, 6 July 2026. The red card, the call, Article 27 probation, Belgium’s challenge, UEFA’s statement and Infantino’s reply.',
              },
              {
                title: 'FIFA suspends ANFA over third-party interference',
                url: 'https://kathmandupost.com/sports/2026/06/25/fifa-suspends-anfa-over-third-party-interference',
                note: 'The Kathmandu Post, 25 June 2026. The suspension, the National Sports Council dispute and the consequences.',
              },
              {
                title: 'IOC suspends Indian Olympic Association',
                url: 'https://www.business-standard.com/amp/article/international/ioc-suspends-indian-olympic-association-112120400699_1.html',
                note: 'Business Standard, 4 December 2012. The IOC suspension over government interference in the association’s elections.',
              },
              {
                title: 'Towards a framework for modern sports governance (Resolution 2199, 2018)',
                url: 'https://pace.coe.int/en/files/24443/html',
                note: 'Parliamentary Assembly of the Council of Europe, 24 January 2018. Paragraph 2 on autonomy and good governance.',
              },
              {
                title: 'Court of Justice press release on the Superleague, ISU and Royal Antwerp judgments',
                url: 'https://curia.europa.eu/jcms/jcms/p1_4229705/en',
                note: 'Court of Justice of the EU, 21 December 2023. Case C-333/21: criteria must be transparent, objective, non-discriminatory and proportionate.',
              },
              {
                title: 'Semenya’s right to a fair hearing violated, European Court of Human Rights rules',
                url: 'https://www.dailymaverick.co.za/article/2025-07-10-semenyas-right-to-a-fair-hearing-violated-european-court-of-human-rights-rules',
                note: 'Daily Maverick, 10 July 2025. The Grand Chamber’s Article 6 finding and what it did not decide.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Northern Cup Federation and the Minister’s decree',
    universe: 'northern',
    slides: [
      {
        kicker: 'The situation',
        title: 'A minister steps in',
        blocks: [
          {
            type: 'p',
            text: 'The Northern Cup Federation (NCF) has postponed its presidential election twice. The president, in office for 16 years, says the delay is “for stability”. Members complain of unpublished accounts.',
          },
          {
            type: 'p',
            text: 'The Minister of Sport issues a decree: the federation’s board is dissolved, a ministry committee will run the NCF for six months, and a new election will follow under rules written by the ministry.',
          },
          {
            type: 'callout',
            title: 'The federation’s reply',
            text: 'The NCF president writes to the world governing body: this is state interference, please suspend the Ministry’s plan and protect our autonomy.',
          },
        ],
      },
      {
        kicker: 'Analysis',
        title: 'Run the four-question test',
        blocks: [
          {
            type: 'table',
            head: ['Question', 'Finding'],
            rows: [
              ['Governance failure that justifies action?', 'Yes: two postponed elections and unpublished accounts'],
              ['Proportionate and aimed at the failure?', 'No: dissolving the board and writing the election rules gives the ministry control of the outcome'],
              ['Applied equally?', 'Unknown: ask whether other federations with late elections faced the same'],
              ['Do athletes and clubs have a voice?', 'No: no consultation is described'],
            ],
          },
          {
            type: 'p',
            text: 'Both sides are partly right. The president’s autonomy argument is weak because the failure is real. The minister’s response goes further than needed.',
          },
        ],
      },
      {
        kicker: 'A better path',
        title: 'What each side could do',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Federation:** set a firm election date, publish audited accounts, and invite an independent election observer.',
              '**Ministry:** require those steps as a condition of continued funding, not take over the board.',
              '**World body:** ask both sides for a timetable and offer a monitoring mission instead of a suspension that would punish the players.',
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
      q: 'Where does the autonomy of sport come from, according to the Session 5 takeaways?',
      options: [
        'Private association law, the sports movement’s own declarations and non-binding political support',
        'A binding United Nations treaty',
        'A clause in every national constitution',
        'A ruling of the Court of Arbitration for Sport',
      ],
      answer: 0,
      explanation: 'No treaty creates autonomy. It is recognized rather than granted.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'What does paragraph 2 of PACE Resolution 2199 (2018) say about autonomy?',
      options: [
        'Autonomy implies responsibility and should be granted only where there is good governance in practice',
        'Autonomy is an absolute right of all sports bodies',
        'Autonomy should be abolished',
        'Autonomy belongs to governments, who lend it to sport',
      ],
      answer: 0,
      explanation: 'The Assembly reverses the burden of proof: autonomy has to be earned through good governance.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'On 21 December 2023 the Court of Justice said that a dominant body’s power over the entry of new competitions must meet which criteria?',
      options: [
        'Transparent, objective, non-discriminatory and proportionate',
        'Approved in advance by a national government',
        'Free of charge and open to all clubs',
        'Agreed unanimously by all national associations',
      ],
      answer: 0,
      explanation: 'The Court found FIFA’s and UEFA’s rules lacked such criteria. It did not rule on the Super League project itself.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Why can making autonomy conditional on good governance be risky?',
      options: [
        'Governments could use “bad governance” as a reason to take control, which is state capture',
        'It would stop federations from writing rules',
        'It would make athletes pay all costs',
        'It removes the need for courts',
      ],
      answer: 0,
      explanation: 'A strong answer weighs both risks: unaccountable federations and politicised states.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Why did FIFA suspend Nepal’s football federation on 24 June 2026?',
      options: [
        'For third-party interference in the federation’s affairs, linked to a dispute with the National Sports Council',
        'For failing to qualify for the World Cup',
        'For a doping case',
        'For not paying its membership fee',
      ],
      answer: 0,
      explanation: 'FIFA cited third-party interference. The effect was that national teams and clubs could not play in FIFA or AFC competitions.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which statement best captures the “legal versus legitimate” point?',
      options: [
        'A decision can have a formal legal basis and still damage the integrity or fairness of a competition',
        'Anything legal is automatically legitimate',
        'Anything illegitimate is automatically illegal',
        'Legitimacy only matters in court',
      ],
      answer: 0,
      explanation: 'FIFA’s rules allow sanctions to be suspended, so the Balogun decision had a formal basis. Critics asked whether it was applied fairly and neutrally.',
      review: { section: 'real', slide: 2 },
    },
    {
      id: 'q7',
      type: 'open',
      q: 'Exercise (observation, integration, critique). Choose one: (a) the Balogun red-card decision against political neutrality, (b) government intervention in a national federation, or (c) whether autonomy should be granted only where there is good governance. Write a short answer that states your position, gives dated evidence, and weighs the strongest argument against it.',
      answer: [
        '**Position.** For (c): autonomy should be conditional, but the condition must be applied by independent bodies, not by governments acting alone.',
        '**Evidence.** PACE Resolution 2199 (24 January 2018) says autonomy implies responsibility. The Court of Justice (21 December 2023) required criteria that are transparent, objective, non-discriminatory and proportionate. The IOC suspended India in December 2012 over election interference, and FIFA suspended Nepal in June 2026.',
        '**Strongest counter-argument.** Conditional autonomy invites state capture: governments can label a federation badly governed to take control, and the suspension rule can be used selectively.',
        '**Judgment.** Autonomy is best seen as earned and reviewable: independent courts and clear tests decide when intervention is justified, and athletes get a voice.',
        'A strong answer names what it did not check, and does not treat an AI answer as evidence without verifying the rules.',
      ],
      review: { section: 'plain', slide: 7 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain what is meant by the “autonomy of sport”, where it comes from, and why it is now described as conditional. Use at least two examples.',
      answer: [
        'Autonomy is the claim that sport bodies can make rules, choose leaders and settle disputes without outside interference, within the law.',
        'It is recognized, not granted: it rests on private association law, the movement’s own declarations (such as the Olympic Charter provision of 1949) and non-binding political support. No treaty creates it.',
        'It has been narrowed by courts, for example Bosman (1995), the Superleague judgment (21 December 2023) and Semenya v Switzerland (10 July 2025), and by PACE Resolution 2199 (2018), which says autonomy should be granted only where there is good governance in practice.',
        'The conclusion: autonomy is the price of good governance, and the open question is who decides when the condition is met.',
      ],
      marking: [
        '2 marks: accurate definition.',
        '2 marks: origin explained (association law, declarations, no treaty).',
        '2 marks: two dated examples of narrowing.',
        '2 marks: the conditional idea and the risk of state capture.',
      ],
    },
    {
      id: 'e2',
      marks: 6,
      q: 'Compare the response to government interference in Nepal (June 2026) with the response to the request to review the Balogun suspension (July 2026). What does the comparison show about political neutrality?',
      answer: [
        'In Nepal, FIFA suspended the federation on 24 June 2026 for third-party interference after the National Sports Council refused to recognize the federation’s election. National teams and clubs lost access to competitions.',
        'In the Balogun case a head of state asked FIFA’s president to review a ban, and FIFA suspended the ban on probation under its disciplinary rules. UEFA said FIFA had crossed a red line. Infantino said reviews are handled by independent bodies.',
        'The comparison suggests the interference rule may be applied firmly against smaller actors while pressure on the governing body itself is treated more softly, which raises concerns about appearance of neutrality.',
        'A balanced answer notes FIFA’s own view and that legality and legitimacy are different questions.',
      ],
      marking: [
        '2 marks: accurate summary of both cases.',
        '2 marks: a clear comparison on the same criteria.',
        '2 marks: a balanced conclusion on neutrality that includes FIFA’s position.',
      ],
    },
  ],

  videos: [],
};
