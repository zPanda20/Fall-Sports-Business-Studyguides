// Market Research, Session 5: Measuring and collecting quantitative data (objectivity, validity, reliability).
// Built from the Lesson 5 lecture slides (construct, variable, measure, operationalization, levels of
// measurement, scales, survey items, measurement error, objectivity, validity, reliability).
// Real example: the 1985 "New Coke" launch, as reported by HISTORY.com.

export const measurementValidityTopic = {
  id: 'measurement-validity',
  course: 'market-research',
  title: 'Measuring and collecting data: objectivity, validity and reliability',
  sessions: 'Session 5',
  reading: 'Session 5 slides (Lesson 5)',
  minutes: 30,
  summary:
    'How to turn an abstract idea like “loyalty” into numbers you can trust: constructs, variables and measures, levels of measurement, good survey items, and the tests of objectivity, validity and reliability.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'From a question to data you can trust',
      blocks: [
        {
          type: 'big',
          text: 'Measuring something **accurately** is not the same as measuring the **right thing**.',
        },
        {
          type: 'flow',
          items: [
            { title: 'Research question', text: 'what do we need to know?' },
            { title: 'Construct', text: 'which abstract idea matters?' },
            { title: 'Operational definition', text: 'how do we define it here?' },
            { title: 'Measure', text: 'which item or record captures it?' },
            { title: 'Data', text: 'which values do we record?' },
          ],
        },
        {
          type: 'p',
          text: 'Your proposal has to say what you will measure, how you will collect it and why the measures are credible. This topic gives you the vocabulary to do that.',
        },
      ],
    },
    {
      kicker: 'Core words',
      title: 'Construct, variable, measure, indicator',
      blocks: [
        {
          type: 'table',
          head: ['Word', 'Meaning', 'Example'],
          rows: [
            ['Construct', 'An abstract idea you want to study. It cannot be seen in one reading.', 'Fan loyalty, brand trust'],
            ['Variable', 'A characteristic that takes different values across people, products or time.', 'Each fan’s loyalty score'],
            ['Measure', 'The item, scale, rule or data field that records the variable.', 'Four items on a 1–7 scale'],
            ['Indicator', 'A specific observed item, behavior or record used as evidence of a construct.', 'Intention to renew a season ticket'],
            ['Operational definition', 'The exact rule that turns the construct into a measure.', 'Average of the four items'],
          ],
        },
        {
          type: 'p',
          text: 'Variables are the building blocks of quantitative research. They let you describe things numerically, compare groups, look at relationships and test hypotheses from theory.',
        },
      ],
    },
    {
      kicker: 'Two kinds of variable',
      title: 'Manifest and latent variables',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Manifest (observed)',
              text: 'Directly measurable. You simply record it.',
              examples: ['Age of fans', 'Tickets bought in a season', 'Minutes on the club website', 'Country of residence'],
            },
            {
              title: 'Latent (hidden)',
              text: 'An underlying idea you cannot observe directly. You infer it from several manifest variables.',
              examples: ['Brand love', 'Fan loyalty', 'Satisfaction', 'Purchase intention'],
            },
          ],
        },
        {
          type: 'p',
          text: 'You cannot measure “loyalty” with a ruler. You measure **related, observable things** (renewals, attendance, ratings of statements) and treat them together as evidence of the hidden idea.',
        },
        {
          type: 'figure',
          src: 'mr-measurement-latent-manifest.png',
          alt: 'Diagram of one latent variable connected to four observed indicators',
          caption: 'One hidden idea, several observable indicators.',
          need: 'A simple diagram: one oval labeled “Fan loyalty” (latent) with arrows to four rectangles (observed items), such as attachment, intention to attend, recommendation, continued support.',
        },
      ],
    },
    {
      kicker: 'Proxies',
      title: 'When behavior stands in for the real thing',
      blocks: [
        {
          type: 'p',
          text: 'A **proxy measure** is an indirect stand-in for something you cannot observe directly. The lecture’s second case reports that Target combined customers’ purchase patterns into a “pregnancy prediction score.”',
        },
        {
          type: 'table',
          head: ['Part', 'In that case'],
          rows: [
            ['Concept of interest', 'Pregnancy'],
            ['Observable variables', 'Customer purchasing patterns'],
            ['Proxy measure', 'A prediction score built from those purchases'],
          ],
        },
        {
          type: 'columns',
          items: [
            { title: 'Validity question', text: 'Do the chosen purchase patterns really stand for the concept you want to infer?' },
            { title: 'Ethics question', text: 'Even a correct prediction can cause harm if people did not expect or agree to this use of their data.' },
          ],
        },
        {
          type: 'p',
          text: 'For your own project, state whether each measure is **direct, self-reported, behavioral or a proxy**, and explain the risk of misclassifying people.',
        },
      ],
    },
    {
      kicker: 'Operationalization',
      title: 'Making “loyalty” measurable',
      blocks: [
        {
          type: 'p',
          text: '**Operationalization** is the rule that turns a construct into a variable, and then into a measure. The lecture’s fan-loyalty example:',
        },
        {
          type: 'table',
          head: ['Step', 'Fan loyalty example'],
          rows: [
            ['Construct', 'Fan loyalty'],
            ['Operational definition', 'The average of four fan ratings: team attachment, intention to attend future games, willingness to recommend the team, and intention to keep supporting the team'],
            ['Response format', '1 = strongly disagree to 7 = strongly agree'],
            ['Recorded variable', 'A Fan Loyalty Score: the average of the four answers (1 to 7) for each participant'],
          ],
        },
        {
          type: 'callout',
          title: 'The test of a good operational definition',
          text: 'Another group could apply it **exactly** and get comparable data.',
        },
      ],
    },
    {
      kicker: 'Levels of measurement',
      title: 'What kind of numbers do you have?',
      blocks: [
        {
          type: 'table',
          head: ['Level', 'What you can do', 'Example'],
          rows: [
            ['Nominal', 'Classify into categories (no order)', 'Country of residence, favorite sport'],
            ['Ordinal', 'Classify and rank (gaps unknown or unequal)', 'Satisfaction: low, medium, high'],
            ['Interval', 'Classify, rank and compare differences (no true zero)', 'Temperature in °C'],
            ['Ratio', 'All of the above, plus compare ratios (true zero)', 'Games attended, monthly spending in €'],
          ],
        },
        {
          type: 'callout',
          title: 'Likert items',
          text: 'A single Likert item (“I feel emotionally attached to my favorite team”, 1–7) is generally treated as **ordinal**. A 7 shows stronger agreement than a 6, but we cannot assume the gap from 5 to 6 equals the gap from 6 to 7.',
        },
      ],
    },
    {
      kicker: 'Scales',
      title: 'Choosing a response format',
      blocks: [
        {
          type: 'table',
          head: ['Format', 'How it works', 'Watch out for'],
          rows: [
            ['Binary', 'Two exclusive options, e.g. Yes or No', 'Loses detail'],
            ['Multiple choice', 'A list of categories', 'Options should be mutually exclusive and, where possible, collectively exhaustive'],
            ['Rating scale (Likert)', 'Ordered points such as 1–7, strongly disagree to strongly agree', 'Wording and endpoints shape answers'],
            ['Ranking', 'Put options in order', 'Hard to complete with long lists'],
            ['Constant sum', 'Split a fixed total, e.g. 100 points, across options', 'Shows relative weight, but takes effort'],
          ],
        },
        {
          type: 'p',
          text: 'The wording, the endpoints and the format all shape the data you receive, so choose them on purpose.',
        },
      ],
    },
    {
      kicker: 'Survey items',
      title: 'Writing better questions',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Use simple language** that people in every relevant market can understand.',
            '**Ask one idea per question.** “The stadium is modern and welcoming” is double-barreled: a fan may agree with only half.',
            '**Name the object and the time period.** “During your last home match” beats “usually.”',
            '**Avoid leading wording.** “How satisfied were you?” is neutral. “How excellent was the service?” pushes people upward.',
            '**Match options to the question** and offer “not applicable” where it is needed.',
          ],
        },
      ],
    },
    {
      kicker: 'Measurement error',
      title: 'Why recorded data can be wrong',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Systematic error',
              text: 'A **consistent** distortion in one direction. Example: a leading question pushes every rating upward. It threatens **validity**.',
            },
            {
              title: 'Random error',
              text: 'Unpredictable, scattered variation. Example: a respondent misreads one item while distracted. It weakens **reliability**.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Good design reduces both **before** any data is collected.',
        },
      ],
    },
    {
      kicker: 'Three quality tests',
      title: 'Objectivity: let the rule decide, not the researcher',
      blocks: [
        {
          type: 'p',
          text: 'The lecture calls objectivity “a worthy but unreachable goal.” You cannot remove the researcher completely, but you can limit their influence with clear rules.',
        },
        {
          type: 'table',
          head: ['More objective', 'Less objective'],
          rows: [
            ['“Number of bookings completed in the last 30 days”, extracted with the same rule for every customer', '“Customer looks highly engaged”, judged informally by different observers with no coding guide'],
          ],
        },
        {
          type: 'p',
          text: 'Objectivity rises when you standardize instructions, coding rules, data extraction and the treatment of missing values.',
        },
      ],
    },
    {
      kicker: 'Three quality tests',
      title: 'Validity: are we measuring the right thing?',
      blocks: [
        {
          type: 'big',
          text: '**Validity** asks: does the measure capture the concept it claims to capture?',
        },
        {
          type: 'columns',
          items: [
            { title: 'Face validity', text: 'On the surface, does the measure look like it fits the construct?' },
            { title: 'Content validity', text: 'Do the items cover the important parts of the construct?' },
            { title: 'Criterion validity', text: 'Does the measure relate to a relevant outside outcome or benchmark?' },
            { title: 'Construct validity', text: 'Do its relationships with other measures fit what theory predicts?' },
          ],
        },
      ],
    },
    {
      kicker: 'Three quality tests',
      title: 'Reliability: would we get the same result again?',
      blocks: [
        {
          type: 'big',
          text: '**Reliability** asks: if we repeat the measurement under comparable conditions, do we get similar results?',
        },
        {
          type: 'columns',
          items: [
            { title: 'Test–retest', text: 'The same measure gives similar results when the construct has not changed.' },
            { title: 'Internal consistency', text: 'Items meant to measure the same construct answer in a coherent pattern.' },
            { title: 'Inter-rater', text: 'Different trained coders reach similar judgments on the same material.' },
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Reliable is necessary, but not enough',
          text: 'A scale can be very consistent and still measure the wrong concept.',
        },
      ],
    },
    {
      kicker: 'Putting it together',
      title: 'Reliable and valid are different questions',
      blocks: [
        {
          type: 'table',
          head: ['', 'Valid', 'Not valid'],
          rows: [
            ['Reliable', 'Consistent and measures the right thing. The goal.', 'Consistent, but measures something else.'],
            ['Not reliable', 'Right target, scattered results.', 'Neither consistent nor right.'],
          ],
        },
        {
          type: 'p',
          text: '**Practical rule:** first ask whether the measure fits the construct. Then ask whether it would give a similar result if repeated.',
        },
      ],
    },
    {
      kicker: 'Your project',
      title: 'A measurement plan and a quality check',
      blocks: [
        {
          type: 'table',
          head: ['Part of the plan', 'The question to answer'],
          rows: [
            ['Research question', 'What decision-relevant question are you answering?'],
            ['Constructs and variables', 'Which concepts must you measure? Which variable is the outcome?'],
            ['Operational definitions', 'Which exact items, indicators or records will you use?'],
            ['Method and sample', 'How will you collect data, from whom, and by which access route?'],
            ['Quality checks', 'How do you protect objectivity, validity and reliability?'],
          ],
        },
        {
          type: 'bullets',
          items: [
            'Define the construct **before** you choose the item.',
            'Check validity **before** you interpret a clean-looking dataset.',
            'Ask of any plan: could wording or coding add systematic bias? Would another trained researcher get the same result with the same rules? Can participants understand what happens to their data?',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Construct', def: 'An abstract idea a researcher wants to study, such as brand trust or fan loyalty.' },
    { term: 'Variable', def: 'A characteristic that can take different values across people, products, markets or time.' },
    { term: 'Measure', def: 'The item, scale, observation rule or data field used to record a variable.' },
    { term: 'Indicator', def: 'A specific observed item, response, behavior or record used as evidence about a construct.' },
    { term: 'Operationalization', def: 'The explicit rule that turns a construct into a variable and then into a measure.' },
    { term: 'Manifest variable', def: 'A variable that can be observed and recorded directly, such as age or tickets bought.' },
    { term: 'Latent variable', def: 'A hidden concept, such as loyalty or satisfaction, that is inferred from several observed variables.' },
    { term: 'Proxy measure', def: 'An indirect stand-in for a concept that cannot be observed directly.' },
    { term: 'Nominal, ordinal, interval, ratio', def: 'The four levels of measurement. They run from categories only, to ranked, to equal gaps, to equal gaps with a true zero.' },
    { term: 'Likert scale', def: 'A rating scale asking how strongly people agree or disagree with a statement, for example from 1 to 7.' },
    { term: 'Double-barreled question', def: 'A question that asks about two things at once, so one answer cannot be interpreted.' },
    { term: 'Leading question', def: 'A question worded in a way that pushes people toward a particular answer.' },
    { term: 'Systematic error', def: 'A consistent distortion in one direction. It threatens validity.' },
    { term: 'Random error', def: 'Unpredictable variation in answers, such as a slip of attention. It weakens reliability.' },
    { term: 'Objectivity', def: 'The extent to which a result comes from explicit rules rather than the researcher’s feelings.' },
    { term: 'Validity', def: 'Whether a measure captures the concept it is meant to capture. Types include face, content, criterion and construct validity.' },
    { term: 'Reliability', def: 'Whether repeating the measurement gives consistent results. Forms include test–retest, internal consistency and inter-rater.' },
  ],
  cards: [
    { front: 'Which question does validity answer?', back: 'Are we measuring what we intend to measure?' },
    { front: 'Which question does reliability answer?', back: 'Would we get consistent results if we repeated the measurement?' },
    { front: 'Reliable but not valid: what does it mean?', back: 'The measure is consistent, but it measures something other than the intended construct.' },
    { front: 'Give a manifest and a latent variable', back: 'Manifest: tickets bought in a season. Latent: fan loyalty.' },
    { front: 'What is a single Likert item treated as?', back: 'Ordinal. The order is meaningful, but the gaps between points are not necessarily equal.' },
    { front: 'Systematic vs random error', back: 'Systematic: consistent bias, hurts validity. Random: scattered noise, hurts reliability.' },
    { front: 'Why is “The stadium is modern and welcoming” a bad item?', back: 'It is double-barreled: it asks two things in one question.' },
    { front: 'The chain from question to data', back: 'Research question, construct, operational definition, measure, data.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'New Coke: accurate taste tests, wrong measure',
    note: 'The 1985 launch and reversal of New Coke, as reported by HISTORY.com. Figures are as given there. The measurement reading is ours.',
    slides: [
      {
        kicker: 'What happened',
        title: 'A product test that answered the wrong question',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Announced', value: 'April 23, 1985', note: 'first formula change in 99 years' },
              { label: 'Original returns', value: 'July 11, 1985', note: 'as Coca-Cola Classic' },
              { label: 'Time on the market', value: '79 days', note: 'from launch to reversal' },
            ],
          },
          {
            type: 'bullets',
            items: [
              'In blind taste tests, consumers generally preferred the new formula to both the original Coke and Pepsi.',
              'After launch, the company was reported to receive up to 8,000 calls a day and about 40,000 complaint letters.',
              'Consumers had a strong emotional attachment to the original formula and reacted badly to losing it.',
            ],
          },
        ],
      },
      {
        kicker: 'The measurement lesson',
        title: 'Right measure, wrong construct',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'The construct Coca-Cola needed',
                text: 'Consumers’ willingness to accept a permanent change to Coca-Cola, including what the brand means to them.',
              },
              {
                title: 'The indicator it measured',
                text: 'Preference in a blind sip test. It captured immediate taste and missed brand attachment and the meaning of replacing the original.',
              },
            ],
          },
          {
            type: 'callout',
            title: 'Reliable but not valid',
            text: 'The tests could have been repeated and probably given the same answer. They were consistent. They just did not measure acceptance of a replacement.',
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
                title: 'New Coke debuts, one of the biggest product flops in history',
                url: 'https://www.history.com/this-day-in-history/april-23/new-coke-debuts-one-of-the-biggest-product-flops-in-history',
                note: 'HISTORY.com. Launch date, return date, 79 days, taste-test result, calls and letters. The link to construct, indicator and validity is ours.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Measuring fan loyalty at Harbor City Rovers',
    universe: 'harbor',
    slides: [
      {
        kicker: 'The question',
        title: 'Do the fan events increase loyalty?',
        blocks: [
          {
            type: 'p',
            text: 'The Rovers run family days and fan forums. The club wants to know whether they raise **fan loyalty**. First the team has to say what loyalty **means** and how to measure it.',
          },
          {
            type: 'table',
            head: ['Step', 'Rovers’ choice'],
            rows: [
              ['Construct', 'Fan loyalty'],
              ['Operational definition', 'Average of four 1–7 ratings: attachment, intention to attend, recommend to friends, keep supporting'],
              ['Recorded variable', 'Fan Loyalty Score from 1 to 7'],
            ],
          },
        ],
      },
      {
        kicker: 'Calculating the score',
        title: 'Two fans, two scores',
        blocks: [
          {
            type: 'table',
            head: ['Item', 'Fan A', 'Fan B'],
            rows: [
              ['Attachment to the Rovers', '6', '3'],
              ['Intend to attend next season', '7', '4'],
              ['Would recommend the Rovers', '5', '2'],
              ['Will keep supporting the Rovers', '6', '3'],
              ['Fan Loyalty Score (average)', '6.0', '3.0'],
            ],
          },
          {
            type: 'p',
            text: 'Fan A: (6 + 7 + 5 + 6) ÷ 4 = 6.0. Fan B: (3 + 4 + 2 + 3) ÷ 4 = 3.0. Because the items are Likert ratings, the team reports the scores consistently with the course guidance on ordered scales.',
          },
        ],
      },
      {
        kicker: 'Two indicators',
        title: 'Survey scale or behavior?',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Indicator 1: the four-item scale',
                text: 'Self-reported attitudes. **Validity risk:** people may say what sounds loyal, or answer after a big win.',
              },
              {
                title: 'Indicator 2: seasons with a ticket',
                text: 'Recorded behavior. **Validity risk:** a fan may keep a ticket because it is cheap or close, not because they are loyal.',
              },
            ],
          },
          {
            type: 'callout',
            tone: 'good',
            title: 'The team’s decision',
            text: 'Use the scale as the main measure and check it against ticket records (criterion validity). If high scores go with long ticket history, confidence in the scale grows.',
          },
        ],
      },
      {
        kicker: 'Quality checks',
        title: 'Reliability, and what the team labeled',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Test–retest:** ask 40 fans to answer again after two weeks with no event in between. Similar scores suggest reliability.',
              '**Internal consistency:** the four items should move together. A fan who rates attachment very low should not rate “keep supporting” very high.',
              '**Systematic error:** a question such as “How excellent was the family day?” would lead people, so it is reworded as “How satisfied were you with the family day?”',
            ],
          },
          {
            type: 'table',
            head: ['Rovers variable', 'Level of measurement'],
            rows: [
              ['Country of residence', 'Nominal'],
              ['Satisfaction: low, medium, high', 'Ordinal'],
              ['Games attended this season', 'Ratio'],
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
      q: 'What best describes operationalization?',
      options: [
        'Turning an abstract construct into observable, measurable indicators',
        'Collecting as much data as possible before choosing a question',
        'Choosing variables only because data already exists',
        'Replacing abstract concepts with the researcher’s opinion',
      ],
      answer: 0,
      explanation: 'Operationalization is the explicit rule that links a construct to a variable and then to a measure.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which is a latent variable?',
      options: [
        'The emotional attachment a fan feels toward a club',
        'The number of tickets a fan bought in a season',
        'The minutes a fan spent on the club website',
        'The amount a fan spent on merchandise',
      ],
      answer: 0,
      explanation: 'Attachment cannot be observed directly. It is inferred from other measures. The other three are directly recorded, so they are manifest.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'A club uses the same questionnaire every month and always gets very similar results, but the questions do not capture what it wants to know. The measure is…',
      options: [
        'Reliable but not valid',
        'Valid but not reliable',
        'Both valid and reliable',
        'Neither valid nor reliable',
      ],
      answer: 0,
      explanation: 'Consistency is reliability. Not capturing the intended concept is a failure of validity.',
      review: { section: 'plain', slide: 12 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Which of these is NOT an ordinal variable?',
      options: [
        'Country of residence of Formula 1 fans',
        'Satisfaction rated low, medium or high',
        'Service quality rated from 1 (very poor) to 5 (excellent)',
        'Agreement on a 7-point Likert scale',
      ],
      answer: 0,
      explanation: 'Country has categories with no order, so it is nominal. The other three are ordered.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which is an example of random measurement error?',
      options: [
        'A respondent misreads one question because they are distracted',
        'A leading question pushes all answers upward',
        'A coder always applies the wrong coding rule',
        'A questionnaire leaves out all negative options',
      ],
      answer: 0,
      explanation: 'Random error is unpredictable noise. The other options are consistent distortions, which are systematic.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which survey item is double-barreled?',
      options: [
        '“The stadium is modern and welcoming.”',
        '“How satisfied were you with your last home match?”',
        '“I intend to attend next season.”',
        '“Have you used the club app in the past month?”',
      ],
      answer: 0,
      explanation: 'A fan could agree that it is modern but not welcoming, so one answer cannot be interpreted.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A scale for “brand trust” includes only items about price and none about honesty or reliability. Which problem is this?',
      options: [
        'Weak content validity: the items do not cover the important parts of the construct',
        'Poor test–retest reliability',
        'A nominal level of measurement',
        'Inter-rater unreliability',
      ],
      answer: 0,
      explanation: 'Content validity asks whether the items cover the important parts of the construct.',
      review: { section: 'plain', slide: 10 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'In the New Coke case, the blind sip test was best described as…',
      options: [
        'An indicator that missed part of the construct',
        'A manifest variable with perfect validity',
        'A source of random error only',
        'A fully objective measure of brand acceptance',
      ],
      answer: 0,
      explanation: 'It captured immediate taste but missed brand attachment and the meaning of replacing the original.',
      review: { section: 'real', slide: 1 },
    },
    {
      id: 'q9',
      type: 'mcq',
      q: 'Which step improves objectivity the most?',
      options: [
        'Writing explicit coding rules that every researcher applies the same way',
        'Letting each interviewer decide who “looks engaged”',
        'Dropping missing answers without saying so',
        'Choosing the item before defining the construct',
      ],
      answer: 0,
      explanation: 'Objectivity grows when instructions, coding rules, extraction and missing-value treatment are standardized.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q10',
      type: 'open',
      q: 'Exercise. A football club wants to know whether its mobile app raises fans’ intention to attend matches. (a) Write a one-sentence operational definition for “intention to attend.” (b) Draft two survey items. (c) Name one threat to validity and one step that improves reliability.',
      answer: [
        '**(a)** For example: intention to attend is the average of two 1–7 ratings on how likely a fan is to attend home matches next season.',
        '**(b)** For example: “How likely are you to attend a home match next season?” (1 = very unlikely, 7 = very likely). “How likely are you to buy a ticket for the next home match?” (1–7). Each asks one idea and names the time period.',
        '**(c)** Validity threat: people may report intentions that are not matched by actual behavior, or a leading item may push ratings up. Reliability step: use the same wording and scale for everyone, or repeat the survey with the same people later and compare.',
      ],
      review: { section: 'plain', slide: 4 },
    },
  ],

  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'Define validity and reliability and explain how they differ. Use an example of a measure that is reliable but not valid, and name two types of each concept.',
      answer: [
        'Validity is the accuracy of measurement: the extent to which a measure captures the concept it is meant to capture. It asks whether we are measuring what we intend to measure. Reliability is the consistency of measurement: whether a procedure gives similar results when repeated under comparable conditions.',
        'They are different questions. A measure can be consistent and still measure the wrong thing, so reliability is necessary but not sufficient. In the New Coke case, blind taste tests may well have given consistent results (taste preference), but they did not capture consumers’ willingness to accept a permanent replacement of the original. They were reliable but not valid for that construct.',
        'Types of validity include face, content, criterion and construct validity. Types of reliability include test–retest, internal consistency and inter-rater reliability.',
      ],
      marking: [
        'Correct definition of validity (2)',
        'Correct definition of reliability (2)',
        'States that they differ and that reliability alone is not enough (2)',
        'A suitable reliable-but-not-valid example explained (2)',
        'Two types of each concept (2, half a mark each)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Using an example from sports marketing, explain how a researcher moves from a construct to a measure. Name each step and show how the final variable is calculated.',
      answer: [
        'The chain is: research question, construct, operational definition, measure, data. Take the construct fan loyalty. It is abstract (latent), so it cannot be observed directly.',
        'The operational definition says exactly how it will be represented, for example the average of four ratings on team attachment, intention to attend, willingness to recommend the team and intention to keep supporting it. The measure is a set of four items answered on a 1 to 7 scale from strongly disagree to strongly agree. The recorded variable is a Fan Loyalty Score: the average of the four answers for each participant. A fan answering 6, 7, 5 and 6 scores (6 + 7 + 5 + 6) ÷ 4 = 6.0.',
        'The definition is good if another group could apply it exactly and obtain comparable data.',
      ],
      marking: [
        'Names the chain of steps in the right order (2)',
        'Identifies the construct and says it is abstract or latent (1)',
        'Gives a clear operational definition (2)',
        'Describes the measure and response format (1)',
        'Shows how the variable is calculated (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Distinguish systematic error from random error. For each, give an example in a fan survey and say which quality it threatens. Suggest one design step that reduces each.',
      answer: [
        'Systematic error is a consistent distortion in one direction. In a fan survey, a leading question such as “How excellent was the service?” pushes ratings upward for everyone. It threatens validity. Neutral wording (“How satisfied were you?”) and testing the questionnaire reduce it.',
        'Random error is unpredictable variation. For example, a distracted respondent misreads one item. It weakens reliability. Clear, simple items, one idea per question and, where suitable, several items for the same construct reduce its effect.',
      ],
      marking: [
        'Defines systematic error and gives an example (1.5)',
        'Defines random error and gives an example (1.5)',
        'Links systematic error to validity and random error to reliability (1)',
        'A reasonable design step for each (2)',
      ],
    },
  ],

  videos: [],
};
