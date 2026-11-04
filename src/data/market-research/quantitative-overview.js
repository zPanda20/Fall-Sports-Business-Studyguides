// Market Research, Session 6: Quantitative research, research ethics, secondary data and competitor analysis.
// Built from the Lesson 6 lecture slides (independent and dependent variables, primary vs secondary data,
// ethics, evaluating secondary data, competitor analysis, comparability pitfalls, and the two class activities).
// Real examples: the Facebook News Feed experiment (Kramer, Guillory and Hancock, PNAS, 2014) and Walmart's
// 2006 exit from Germany (GlobeSt, July 28, 2006).

export const quantitativeOverviewTopic = {
  id: 'quantitative-overview',
  course: 'market-research',
  title: 'Quantitative research, ethics, secondary data and competitor analysis',
  sessions: 'Session 6',
  reading: 'Session 6 slides (Lesson 6)',
  minutes: 30,
  summary:
    'What quantitative research can answer, how independent and dependent variables work, how to treat participants ethically, how to judge secondary data, and how to compare competitors fairly.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Quantitative research measures with numbers',
      blocks: [
        {
          type: 'big',
          text: 'Quantitative research measures variables **numerically** so we can describe patterns, compare groups and test relationships.',
        },
        {
          type: 'columns',
          items: [
            { title: 'How many?', text: 'Market size, penetration, market share.' },
            { title: 'How often?', text: 'Usage frequency, purchase rate.' },
            { title: 'How different?', text: 'Comparing countries, segments or competitors.' },
            { title: 'How related?', text: 'Price, satisfaction, intention, loyalty.' },
          ],
        },
      ],
    },
    {
      kicker: 'Variables with roles',
      title: 'Independent and dependent variables',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Independent variable', text: 'the predictor. Expected to influence another variable. In an experiment, the researcher changes it.' },
            { title: 'Dependent variable', text: 'the outcome. What you measure to see the result. Its value may depend on the other.' },
          ],
        },
        {
          type: 'table',
          head: ['Independent variable', 'Dependent variable'],
          rows: [
            ['Advertising spending', 'Product sales'],
            ['Exposure to a sports sponsorship', 'Brand awareness'],
          ],
        },
        {
          type: 'callout',
          title: 'From question to hypothesis',
          text: 'RQ: Does exposure to a sports sponsorship influence consumers’ brand awareness? H1: Exposure to sports sponsorship positively influences brand awareness among sports fans.',
        },
      ],
    },
    {
      kicker: 'Where the data comes from',
      title: 'Primary and secondary data',
      blocks: [
        {
          type: 'table',
          head: ['', 'Meaning', 'Examples'],
          rows: [
            ['Primary data', 'You collect it for this specific question.', 'Survey, experiment, observation, interview'],
            ['Secondary data', 'Someone else already collected it.', 'Official statistics, company reports, industry data'],
          ],
        },
        {
          type: 'p',
          text: 'A strong project often starts with **secondary** evidence and collects **primary** data only where a decision-critical gap remains. It is cheaper and faster, and it tells you what you still need to ask.',
        },
      ],
    },
    {
      kicker: 'A disciplined workflow',
      title: 'Start from the decision, not from the data',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Decision', text: 'what choice must the manager make?' },
            { title: '2. Measure', text: 'which numbers would reduce uncertainty?' },
            { title: '3. Source', text: 'where can those numbers come from?' },
            { title: '4. Check', text: 'comparable, current, credible?' },
            { title: '5. Interpret', text: 'what can we conclude and what remains unknown?' },
          ],
        },
        {
          type: 'p',
          text: 'This prevents “data first” research, where you collect whatever is easy and then try to find a question for it.',
        },
      ],
    },
    {
      kicker: 'Ethics',
      title: 'Four questions before the dataset',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Purpose', text: 'Why do we need this information?' },
            { title: 'Permission', text: 'Did participants understand and agree?' },
            { title: 'Protection', text: 'Who can see the data, and for how long?' },
            { title: 'Fairness', text: 'Could the design exclude or disadvantage a group?' },
          ],
        },
        {
          type: 'callout',
          title: 'Ethics is part of quality',
          text: 'A dataset can be technically huge and still be inappropriate to use.',
        },
      ],
    },
    {
      kicker: 'Ethics',
      title: 'Four practical rules',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Collect less.** Ask only for information the study needs.',
            '**Explain clearly.** Use plain language about purpose, use and how to withdraw.',
            '**Protect identities.** Separate identifying data from research responses where possible.',
            '**Report honestly.** Do not hide missing data, weak measures or groups that cannot be compared.',
          ],
        },
        {
          type: 'p',
          text: 'The lecture’s answer to the Facebook case (next section) adds four design practices: clear disclosure, risk screening before launch, independent review, and a debrief with a real chance to opt out.',
        },
      ],
    },
    {
      kicker: 'Secondary data',
      title: 'Where to look',
      blocks: [
        {
          type: 'table',
          head: ['Source group', 'Examples'],
          rows: [
            ['Official', 'National statistics offices, ministries, central banks'],
            ['International', 'World Bank, OECD, Eurostat, UN agencies'],
            ['Industry', 'Trade associations, specialist reports, retail panels'],
            ['Company', 'Annual reports, investor presentations, store locators'],
            ['Digital', 'App rankings, search trends, marketplace data'],
          ],
        },
        {
          type: 'p',
          text: 'Start with official and company sources. Commercial datasets are useful, but inspect their method and coverage first.',
        },
        {
          type: 'figure',
          src: 'mr-quant-statistics-portal.png',
          alt: 'An official statistics portal showing a table with its definitions and notes',
          caption: 'Always open the notes: definitions, units and time period decide whether numbers can be compared.',
          need: 'A screenshot from Eurostat or a national statistics office showing a data table with its metadata or definition panel visible (for example population or household spending by country).',
        },
      ],
    },
    {
      kicker: 'Secondary data',
      title: 'Evaluate before you use',
      blocks: [
        {
          type: 'cycle',
          center: 'Check every number',
          items: [
            { title: 'Relevance', text: 'does it answer your exact question?' },
            { title: 'Comparability', text: 'same definitions and units across countries?' },
            { title: 'Currency', text: 'does the time period fit the decision?' },
            { title: 'Credibility', text: 'who collected it and how?' },
            { title: 'Coverage', text: 'which people, channels or firms are missing?' },
          ],
        },
        {
          type: 'p',
          text: 'Never treat a number as self-explanatory. Check its **definition, denominator, sample and publication context**.',
        },
      ],
    },
    {
      kicker: 'Competitor analysis',
      title: 'A simple structure for comparing rivals',
      blocks: [
        {
          type: 'table',
          head: ['Question', 'Metric', 'Possible source', 'Decision use'],
          rows: [
            ['How large is each rival?', 'Stores, users, revenue', 'Annual reports, store locator', 'Identify market leaders'],
            ['What do they offer?', 'Assortment, service, content', 'Websites, apps, catalogues', 'Spot gaps and differentiation'],
            ['How do they compete?', 'Price, promotion, channel', 'Websites, ads, marketplaces', 'Anticipate responses'],
            ['Where are they strong?', 'Country or city coverage', 'Locations, public disclosures', 'Choose priority markets'],
          ],
        },
        {
          type: 'callout',
          title: 'One rule',
          text: 'Use the **same measure** for every company. A comparison fails when one firm’s data is broader, older or defined differently.',
        },
      ],
    },
    {
      kicker: 'Competitor analysis',
      title: 'Comparability pitfalls',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Time period', text: 'A monthly price, annual revenue and catalogue size may refer to different dates.' },
            { title: 'Product scope', text: 'One platform plan may include features that rivals sell separately.' },
            { title: 'Market scope', text: 'Country, city, online and physical coverage answer different questions.' },
            { title: 'Metric definition', text: 'Users, subscribers, visits and sales measure different forms of demand.' },
          ],
        },
        {
          type: 'p',
          text: '**Flag the mismatch** rather than forcing a false comparison. That honesty makes the analysis more credible.',
        },
      ],
    },
    {
      kicker: 'From data to advice',
      title: 'Turning evidence into a management claim',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: 'Decision', text: 'name the choice and the criterion' },
            { title: 'Evidence', text: 'comparable data that relates to the criterion' },
            { title: 'Claim', text: 'a conclusion with the right level of confidence' },
            { title: 'Limit', text: 'what is missing, dated or not comparable' },
          ],
        },
        {
          type: 'p',
          text: 'A careful recommendation shows its evidence trail **and** the uncertainty that remains.',
        },
      ],
    },
    {
      kicker: 'Practice cases from class',
      title: 'How to approach the two group activities',
      blocks: [
        {
          type: 'table',
          head: ['Activity', 'Management question', 'What a strong answer includes'],
          rows: [
            [
              'NFL market choice',
              'Which market should the NFL prioritize for its next major investment in regular-season games and fan activities: Germany or Spain?',
              'Four quantitative sources, a quality rating (relevance, comparability, currency, credibility), a recommendation, a data limit, and one gap that needs primary research',
            ],
            [
              'Grand Prix benchmark',
              'Which rival Grand Prix is the most relevant benchmark for Monaco, and what could improve Monaco’s position?',
              'Three comparable indicators with source and period for each, flagged comparability issues, a benchmark choice, recommendations, one uncertainty and one primary-data question',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Both ask for two slides and a 90-second explanation. The skill being tested is the same as above: decision, comparable evidence, claim, limit.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Quantitative research', def: 'Research that measures variables with numbers to describe patterns, compare groups and test relationships.' },
    { term: 'Independent variable', def: 'The predictor or explanatory variable, expected to influence another. In an experiment, the researcher manipulates it.' },
    { term: 'Dependent variable', def: 'The outcome or response variable that is measured. Its value may depend on the independent variable.' },
    { term: 'Hypothesis', def: 'A testable statement about a relationship between variables, for example that more sponsorship exposure raises brand awareness.' },
    { term: 'Random assignment', def: 'Placing participants into experimental conditions by chance so the groups are comparable.' },
    { term: 'Primary data', def: 'Data you collect yourself for the specific question, such as a survey or an experiment.' },
    { term: 'Secondary data', def: 'Data someone else has already collected, such as official statistics or company reports.' },
    { term: 'Informed consent', def: 'Participants understand what the research involves and agree to take part.' },
    { term: 'Debrief', def: 'Explaining the purpose and findings of a study to participants after they have taken part.' },
    { term: 'Comparability', def: 'Whether numbers use the same definitions, units, scope and period, so they can be placed side by side fairly.' },
    { term: 'Benchmarking', def: 'Comparing your organization or event with chosen competitors on the same measures.' },
    { term: 'Competitor analysis', def: 'A structured comparison of rivals’ size, offer, competitive behavior and strengths.' },
    { term: 'Denominator', def: 'The number a figure is divided by, such as per person or per household. It changes what the figure means.' },
  ],
  cards: [
    { front: 'Independent vs dependent variable', back: 'Independent: the predictor you expect to influence something. Dependent: the outcome you measure.' },
    { front: 'The five-step quantitative workflow', back: 'Decision, measure, source, check, interpret.' },
    { front: 'Four ethics questions', back: 'Purpose, permission, protection, fairness.' },
    { front: 'Five checks on secondary data', back: 'Relevance, comparability, currency, credibility, coverage.' },
    { front: 'Primary vs secondary data', back: 'Primary: collected by you for this question. Secondary: collected by someone else earlier.' },
    { front: 'What must be the same in a competitor comparison?', back: 'The metric, its definition and the time period.' },
    { front: 'What to do when competitor data cannot be matched', back: 'Flag the mismatch instead of forcing a false comparison.' },
    { front: 'The four parts of a management claim', back: 'Decision, evidence, claim, limit.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Two real cases: a huge experiment, and a market that was not studied closely enough',
    note: 'The Facebook News Feed study (published in 2014) and Walmart’s 2006 exit from Germany. Figures are as stated in the sources listed on the last slide.',
    slides: [
      {
        kicker: 'Case 1',
        title: 'Facebook’s News Feed experiment',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Participants', value: '689,003', note: 'Facebook users' },
              { label: 'Length', value: '1 week', note: 'January 11–18, 2012' },
              { label: 'Published', value: '2014', note: 'PNAS' },
            ],
          },
          {
            type: 'bullets',
            items: [
              '**Independent variable:** how much positive or negative emotional content appeared in a user’s News Feed. In two parallel experiments, posts were left out of feeds, each with a chance between 10% and 90%. Control groups had posts left out at random.',
              '**Dependent variable:** the percentage of positive or negative words in the user’s own posts.',
              '**Result:** the effects were very small. For example, when positive content was reduced, positive words in users’ own posts fell by about 0.1% of all words. The authors argued such effects still matter at Facebook’s scale.',
            ],
          },
        ],
      },
      {
        kicker: 'Case 1: the ethics question',
        title: 'Was agreement enough?',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'The authors’ position',
                text: 'Users agreed to Facebook’s Data Use Policy before creating an account, which the authors say counted as informed consent for the research.',
              },
              {
                title: 'The concern raised in class',
                text: 'Participants were not explicitly told they were part of an experiment. Agreeing to general terms is not the same as understanding a specific study.',
              },
            ],
          },
          {
            type: 'p',
            text: 'The lecture’s resolution: large experiments can give useful evidence, but ethical research needs **clear disclosure, risk screening, independent review, and a debrief with real opt-out choices**.',
          },
        ],
      },
      {
        kicker: 'Case 2',
        title: 'Walmart leaves Germany',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Stores sold', value: '85', note: 'to Metro AG' },
              { label: 'Date reported', value: 'July 28, 2006', note: 'GlobeSt' },
              { label: 'German sales', value: '≈ $2.55bn', note: 'in 2005' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'The report describes the sale as the end of a roughly 10-year effort to break into the German market.',
              'Walmart’s vice chairman said Germany’s economic conditions made it hard to reach the scale and results the company wanted.',
              'Neither company disclosed the sale price in the report we read.',
              'The lecture’s lesson: market size alone does not justify entry. Competitor, regulatory and operating data should test whether a credible advantage exists **before** committing.',
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
                title: 'Experimental evidence of massive-scale emotional contagion through social networks',
                url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4066473/',
                note: 'Kramer, Guillory and Hancock, PNAS, 2014. Number of users, one-week period, design, outcome measure, consent statement and effect sizes.',
              },
              {
                title: 'Wal-Mart exits Germany, sells stores to Metro',
                url: 'https://www.globest.com/2006/07/28/wal-mart-exits-germany-sells-stores-to-metro',
                note: 'GlobeSt, July 28, 2006. Stores sold, buyer, 2005 sales, the vice chairman’s reason. The link to market research is from the lecture.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Harbor City Rovers benchmark their stadium against two rivals',
    universe: 'harbor',
    slides: [
      {
        kicker: 'The decision',
        title: 'Should the Rovers cut ticket prices?',
        blocks: [
          {
            type: 'p',
            text: 'The Rovers’ board wonders whether lower prices would fill more seats. The team starts from the **decision**, then picks numbers and sources.',
          },
          {
            type: 'table',
            head: ['Step', 'The Rovers’ choice'],
            rows: [
              ['Decision', 'Cut ticket prices or keep them?'],
              ['Independent variable', 'Ticket price'],
              ['Dependent variable', 'Average attendance'],
              ['Measure', 'Stadium occupancy: average attendance divided by capacity'],
              ['Sources', 'Each club’s published season report (secondary data)'],
            ],
          },
        ],
      },
      {
        kicker: 'The comparison',
        title: 'Occupancy at three clubs',
        blocks: [
          {
            type: 'table',
            head: ['Club', 'Capacity', 'Average attendance', 'Occupancy'],
            rows: [
              ['Northgate United', '45,000', '40,500', '90%'],
              ['Harbor City Rovers', '30,000', '24,000', '80%'],
              ['Eastvale Town', '20,000', '13,000', '65%'],
            ],
          },
          {
            type: 'bars',
            title: 'Stadium occupancy (percent of capacity filled)',
            unit: '%',
            items: [
              { label: 'Northgate United', value: 90 },
              { label: 'Harbor City Rovers', value: 80 },
              { label: 'Eastvale Town', value: 65 },
            ],
          },
          {
            type: 'p',
            text: 'Occupancy: 40,500 ÷ 45,000 = 90%. 24,000 ÷ 30,000 = 80%. 13,000 ÷ 20,000 = 65%. Using a percentage keeps a small stadium and a big one comparable.',
          },
        ],
      },
      {
        kicker: 'The check',
        title: 'Spotting a comparability problem',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Time period',
                text: 'Eastvale’s figure comes from the 2024–25 season. The others are 2025–26. **Flag it.**',
              },
              {
                title: 'Metric definition',
                text: 'Northgate reports **tickets sold**, the Rovers report **people through the gate**. Those can differ, so treat the 10-point gap with care.',
              },
            ],
          },
          {
            type: 'callout',
            title: 'The management claim',
            text: 'Evidence: the Rovers sit between two rivals. Claim: with a mid-table occupancy, a price cut is not clearly the answer. Limit: the data does not show price at all. Next step: a short fan survey (primary data) on what stops people from attending.',
          },
        ],
      },
      {
        kicker: 'Ethics in the follow-up survey',
        title: 'Collect less, explain clearly',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Purpose:** the survey asks only about attendance barriers, not about income or address.',
              '**Permission:** the first screen says in plain words what the data is for and that people can stop at any time.',
              '**Protection:** names are stored separately from answers and deleted after the report.',
              '**Fairness:** the survey is offered in two languages and by phone, so older fans are not left out.',
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
      q: 'A club wants to know whether higher spending on social media advertising increases ticket sales. In this question, ticket sales are the…',
      options: [
        'Dependent variable',
        'Independent variable',
        'Hypothesis',
        'Latent construct that cannot be measured',
      ],
      answer: 0,
      explanation: 'Ticket sales are the outcome being measured, so they are the dependent variable. Advertising spending is the independent variable.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which is an example of secondary quantitative data?',
      options: [
        'A government dataset on household spending',
        'New interviews with season-ticket holders',
        'A focus group with sponsors',
        'An observation diary kept at the stadium',
      ],
      answer: 0,
      explanation: 'Secondary data was collected by someone else earlier. The other three are collected by you for your own question, so they are primary (and the first two are not even quantitative by nature).',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which check matters most when comparing statistics across two countries?',
      options: [
        'Comparable definitions and units',
        'A colorful chart',
        'A large number of variables',
        'A long report',
      ],
      answer: 0,
      explanation: 'If one country defines “household” or “income” differently, the numbers cannot be placed side by side.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which is an ethical research practice?',
      options: [
        'Explaining in plain language how the data will be used',
        'Collecting every possible detail “just in case”',
        'Sharing raw data widely',
        'Removing limitations from the final report',
      ],
      answer: 0,
      explanation: 'Ethics means collecting less, explaining clearly, protecting identities and reporting honestly.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A competitor analysis should compare…',
      options: [
        'The same metric over the same period for every firm',
        'A different metric for each firm',
        'Only the market leader',
        'Only customer opinions',
      ],
      answer: 0,
      explanation: 'A comparison fails when one firm’s data is broader, older or defined differently.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'What is the first step in the quantitative workflow?',
      options: [
        'Name the decision the manager must make',
        'Download every available dataset',
        'Write the final recommendation',
        'Choose a chart type',
      ],
      answer: 0,
      explanation: 'The workflow starts with the decision, then picks measures and sources. This prevents “data first” research.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'In the Facebook News Feed experiment, the share of emotional words in users’ own posts was the…',
      options: [
        'Dependent variable',
        'Independent variable',
        'Control group',
        'Primary source of consent',
      ],
      answer: 0,
      explanation: 'The independent variable was the emotional content shown in the feed. The words users then wrote were the outcome, so the dependent variable.',
      review: { section: 'real', slide: 0 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which ethics question asks “Who can see the data, and for how long?”',
      options: ['Protection', 'Purpose', 'Permission', 'Fairness'],
      answer: 0,
      explanation: 'Protection is about access to the data and how long it is kept. Purpose is why you need it, permission is agreement, and fairness is about groups being left out.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'A researcher finds two competitors’ prices, but one is a monthly price and the other is annual. What should she do?',
      options: [
        'Flag the mismatch and convert or explain it instead of forcing a false comparison',
        'Compare the numbers directly',
        'Delete the competitor with the higher number',
        'Average the two prices',
      ],
      answer: 0,
      explanation: 'Different time periods are a classic comparability pitfall. Being open about it makes the analysis more credible.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q10',
      type: 'open',
      q: 'Exercise. A league wants to decide between two cities for a new fan festival and has only public data. (a) State the management decision. (b) Give three quantitative indicators. (c) Name the five checks you would run on each source. (d) Name one gap that would need primary research.',
      answer: [
        '**(a)** For example: which of City A or City B should host the first fan festival?',
        '**(b)** For example: population in the target age group, average household spending on leisure, and stadium or venue capacity. Each must use the same definition and year for both cities.',
        '**(c)** Relevance, comparability, currency, credibility and coverage.',
        '**(d)** For example: how many local residents would actually attend, or what fans want from a festival. A short survey would answer that.',
      ],
      review: { section: 'plain', slide: 7 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'A technology company runs a large online experiment in which one group of users sees more positive posts and another sees fewer, and then measures the emotional content of their own posts. Identify the independent and dependent variables and the role of random assignment. Discuss the ethical issues and the safeguards that should have been in place.',
      answer: [
        'The independent variable is the emotional content shown (the proportion of positive or negative posts). The dependent variable is the emotional language in the users’ later posts. Random assignment places users into the conditions by chance, so the groups are comparable and differences can be attributed to the manipulation.',
        'The ethical issues are consent and harm. Agreeing to general terms of use is not the same as understanding that you are in an experiment, so the participants were not clearly informed. Changing what people see could affect their mood, and the participants had no chance to refuse. The work also benefits the company, so independence matters.',
        'Safeguards: clear disclosure when an experiment meaningfully changes the user experience; risk screening for psychological and social harm before launch; independent ethics review separate from commercial interests; and a debrief afterwards with meaningful opt-out choices. In general, collect less, explain clearly, protect identities and report honestly.',
      ],
      marking: [
        'Correct independent variable (1)',
        'Correct dependent variable (1)',
        'Explains random assignment and why it matters (2)',
        'Identifies at least two ethical issues (2)',
        'Gives at least three safeguards (3)',
        'Links to purpose, permission, protection or fairness (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A sports organization wants to use secondary data from several countries to choose a market for a new event. Explain five criteria for judging whether the data can be used, and describe one problem that would make a cross-country comparison unreliable.',
      answer: [
        'The five criteria are: relevance (does the data answer the exact question), comparability (are definitions and units consistent across countries), currency (does the time period fit the decision), credibility (who collected the data and how), and coverage (which populations, channels or firms are missing).',
        'A number is never self-explanatory: its definition, denominator, sample and publication context must be checked. A typical problem is that one country measures “households” or “spending” differently, or reports a different year, so the figures look comparable but are not. The honest response is to flag the mismatch rather than force the comparison, to state the limit, and to say where primary research is needed.',
      ],
      marking: [
        'Five criteria named correctly (5, one mark each)',
        'Explains at least two of them in context (1)',
        'Describes a realistic comparability problem (1)',
        'Says what to do about it, such as flagging it or collecting primary data (1)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'Design a competitor benchmark for a sports event that wants to compare itself with two rival events. State the decision it supports, three metrics, the source for each, and two comparability pitfalls you would check for. Finish with how you would present your conclusion.',
      answer: [
        'Decision: for example, whether the event should raise or lower its premium hospitality prices. Metrics could be ticket categories and prices, hospitality package prices, and engagement offerings. Sources would be each event’s official website and published price lists, with the date each was captured.',
        'Pitfalls to check: time period (prices for different years or sales phases), product scope (a package that includes extras the rival sells separately), market scope (online versus physical coverage), and metric definition (tickets sold versus attendance). Use the same measure and period for every event and flag mismatches.',
        'Conclusion: follow decision, evidence, claim, limit. Show a comparison table with source and period for every metric, state the claim with the right level of confidence, name the limitation, and propose a primary-data question for the gap that remains.',
      ],
      marking: [
        'A clear decision the benchmark supports (1)',
        'Three suitable, comparable metrics (2)',
        'A source and period for each metric (1)',
        'Two comparability pitfalls (2)',
        'Presents evidence, claim and limit, and a primary-data next step (2)',
      ],
    },
  ],

  videos: [],
};
