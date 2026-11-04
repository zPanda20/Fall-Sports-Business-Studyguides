// Market Research, Session 1: why research matters, the fundamental concepts and the research process.
// Built from the Session 1 slides (the research journey, the key concepts and the AI table). The class handout
// repeats the slide text, so nothing here comes from outside the slides except the real examples, which are sourced.
// Real-example facts were read on 4 November 2026 (see the sources slide).

export const whyMarketResearchTopic = {
  id: 'why-market-research',
  course: 'market-research',
  title: 'Why market research matters and the research process',
  sessions: 'Session 1',
  reading: 'Session 1 slides',
  minutes: 25,
  summary:
    'What market research is, why decisions need evidence instead of opinion, four ideas every researcher must get right, and the seven steps of the research journey.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Evidence beats opinion',
      blocks: [
        {
          type: 'big',
          text: '**Market research** is a planned way of collecting, analyzing and interpreting data, so decisions rest on evidence.',
        },
        {
          type: 'p',
          text: 'It does three jobs: it **supports decisions**, it **solves business problems**, and it **creates new knowledge**.',
        },
        {
          type: 'callout',
          title: 'A line to remember',
          text: '“Without data, you are just another person with an opinion.” (W. Edwards Deming, quoted on the slides)',
        },
      ],
    },
    {
      kicker: 'What makes it research',
      title: 'Five features',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Systematic and planned.** You decide how before you start.',
            '**Data-driven and evidence-based.** Claims are backed by data.',
            '**Objective and unbiased.** The result should not depend on what you hoped to find.',
            '**Ethical and transparent.** People are treated fairly and the method is open to inspection.',
            '**Aimed at real business challenges.** It helps lower the risk of a real decision.',
          ],
        },
      ],
    },
    {
      kicker: 'Research or opinion?',
      title: 'Why a gut feeling is not enough',
      blocks: [
        {
          type: 'table',
          head: ['', 'Market research', 'Opinion'],
          rows: [
            ['Time frame', 'Long-term and rigorous', 'Short-term and unreliable'],
            ['Basis', 'Theory and data', 'Personal experience'],
            ['Method', 'A scientific approach with set methods', 'May rely on personal judgment'],
            ['Result', 'Insights that can be generalized', 'Insights that cannot be generalized'],
          ],
        },
        {
          type: 'p',
          text: 'Experience still matters. The point is that a manager who decides **only** on opinion cannot show anyone why the decision is a good one.',
        },
      ],
    },
    {
      kicker: 'Why it matters',
      title: 'What rigorous research gives a business',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Lower risk',
              text: 'It reduces uncertainty and helps spot **opportunities and threats** before money is spent.',
            },
            {
              title: 'Better choices',
              text: 'It improves the quality of strategic choices and tells you whether **investments and strategies** worked.',
            },
            {
              title: 'Knowing the market',
              text: 'It shows how **markets, consumers and competitors** behave, and it guides innovation and problem-solving.',
            },
          ],
        },
        {
          type: 'p',
          text: 'It also closes the **feedback loop**: implement, monitor, evaluate, adjust. Without data, the loop has nothing to run on.',
        },
      ],
    },
    {
      kicker: 'Four ideas to get right (1)',
      title: 'Representativeness and significance',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Representativeness',
              text: 'How well a **sample** reflects the **population** it stands for. If it does, you can generalize from the sample to everyone.',
            },
            {
              title: 'Significance',
              text: 'Whether a result is probably a **real effect** and not luck. A significant difference is one that is unlikely to have happened by accident.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Quick test',
          text: 'You ask only the fans who answer an email. Are they the same as all fans? If not, the sample is not representative.',
        },
      ],
    },
    {
      kicker: 'Four ideas to get right (2)',
      title: 'Correlation is not causality',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Correlation',
              text: 'Two variables **move together**. It does **not** mean one causes the other.',
            },
            {
              title: 'Causality',
              text: 'A change in one variable **directly causes** a change in the other.',
            },
          ],
        },
        {
          type: 'steps',
          items: [
            'The cause comes **before** the effect.',
            'The two variables are **correlated**.',
            'Other explanations can be **ruled out**.',
          ],
        },
        {
          type: 'p',
          text: 'All three must hold before you can claim causality. A correlation alone is only the second.',
        },
      ],
    },
    {
      kicker: 'Spurious relationships',
      title: 'When two things match by accident',
      blocks: [
        {
          type: 'p',
          text: 'The slides give funny examples: ice cream sales and shark attacks, foot size and income, eating breakfast and heart attack risk. Two reasons these happen:',
        },
        {
          type: 'bullets',
          items: [
            '**A hidden third factor** drives both. Summer heat raises ice cream sales and also puts more people in the sea.',
            '**Pure coincidence.** Compare thousands of random variables and some will match by chance alone.',
          ],
        },
        {
          type: 'figure',
          src: 'mr-why-spurious-chart.png',
          alt: 'Two lines rising together through the year: ice cream sales and shark attacks',
          caption: 'Two lines that rise together are not proof that one drives the other.',
          need: 'A simple chart of two lines (ice cream sales and shark attacks) rising together through the months, with "summer heat" marked as the hidden third factor. Draw it yourself or use one you have rights to.',
        },
      ],
    },
    {
      kicker: 'The research journey',
      title: 'Seven steps, one learning cycle',
      blocks: [
        {
          type: 'flow',
          items: [
            { title: '1. Identify the problem' },
            { title: '2. Review the literature' },
            { title: '3. Design the research' },
            { title: '4. Collect data' },
            { title: '5. Analyze data' },
            { title: '6. Draw conclusions' },
            { title: '7. Report and present' },
          ],
        },
        {
          type: 'p',
          text: 'The slides draw this as a **circle**, not a line. Each step builds on the one before, and the answers raise new questions that start the next round.',
        },
      ],
    },
    {
      kicker: 'Steps 1 to 3',
      title: 'Plan before you collect',
      blocks: [
        {
          type: 'table',
          head: ['Step', 'The goal', 'In practice'],
          rows: [
            ['1. Identify the problem', 'A clear business issue or research question', 'Understand the context, say what the study is about, tie it to a real challenge'],
            ['2. Review the literature', 'Know what is already known', 'Read academic articles, market reports and earlier studies; spot gaps and contradictions'],
            ['3. Design the research', 'Plan how to answer the question', 'Choose qualitative, quantitative or mixed; pick methods (survey, focus group, interviews, experiment); set the sample, timeline and ethics'],
          ],
        },
      ],
    },
    {
      kicker: 'Steps 4 to 7',
      title: 'From data to a decision',
      blocks: [
        {
          type: 'table',
          head: ['Step', 'The goal', 'In practice'],
          rows: [
            ['4. Collect data', 'Gather relevant, accurate data', '**Primary** data (surveys, interviews, observation) or **secondary** data (reports, databases, analytics), with systematic procedures'],
            ['5. Analyze data', 'Turn data into insight', 'Organize and clean the data, apply suitable techniques, interpret results critically'],
            ['6. Draw conclusions', 'Make sense of the results', 'Link back to the question, state implications and limits. Give answers, not just results'],
            ['7. Report and present', 'Communicate clearly', 'Clear structure (intro, method, results, discussion), helpful visuals, short and persuasive'],
          ],
        },
      ],
    },
    {
      kicker: 'AI in research',
      title: 'Where AI can help',
      blocks: [
        {
          type: 'p',
          text: 'The slides match an AI help to each step. The tool names are examples, not a recommendation.',
        },
        {
          type: 'table',
          head: ['Step', 'How AI can help'],
          rows: [
            ['1. Problem', 'Find gaps and emerging themes'],
            ['2. Literature', 'Find and summarize papers, map how studies connect'],
            ['3. Design', 'Draft questions, hypotheses and a study plan'],
            ['4. Collect', 'Build surveys, extract web data, transcribe interviews'],
            ['5. Analyze', 'Run analysis, find patterns, make visuals'],
            ['6. Conclude', 'Summarize findings and explain results in plain language'],
            ['7. Report', 'Polish writing, build slides and visuals'],
          ],
        },
      ],
    },
    {
      kicker: 'AI in research',
      title: 'Seven risks to watch',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Bias.** AI can repeat the biases in its data.',
            '**Black box.** You may not be able to explain how it reached a result.',
            '**Over-reliance.** Accepting AI output without thinking weakens rigor.',
            '**Plagiarism and ownership.** Output may copy protected work.',
            '**Hallucination.** Confident statements that are false, such as invented references.',
            '**Privacy.** Uploading sensitive data to a cloud tool can break rules.',
            '**Method mismatch.** Using AI with no sound method reasoning hurts validity.',
          ],
        },
        {
          type: 'callout',
          title: 'The safe habit',
          text: 'Use AI to help you work, then **check everything it gives you** against real sources and your own judgment.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Market research', def: 'A systematic, organized process of collecting, analyzing and interpreting data to support decisions, solve business problems and generate new knowledge.' },
    { term: 'Population', def: 'The whole group a study is about, for example all season-ticket holders of a club.' },
    { term: 'Sample', def: 'The smaller group of that population that you actually study.' },
    { term: 'Representativeness', def: 'How well a sample reflects the characteristics of its population, so findings can be generalized.' },
    { term: 'Significance', def: 'Whether an observed result is likely a genuine effect and unlikely to be due to chance.' },
    { term: 'Correlation', def: 'A statistical relationship in which changes in one variable go with changes in another. It does not show cause.' },
    { term: 'Causality', def: 'A change in one variable directly causes a change in another. It needs the cause first, a correlation, and other explanations ruled out.' },
    { term: 'Spurious relationship', def: 'Two variables that seem linked but are not, because of a hidden third factor or pure coincidence.' },
    { term: 'Primary data', def: 'Data you collect yourself for your question, such as survey answers or interviews.' },
    { term: 'Secondary data', def: 'Data that already exists, such as reports, databases and analytics.' },
    { term: 'Literature review', def: 'A study of what is already known on your topic: concepts, models, debates and gaps.' },
    { term: 'Hallucination', def: 'When an AI tool states something false with confidence, such as a reference that does not exist.' },
  ],
  cards: [
    { front: 'The three conditions for causality', back: 'The cause comes first. The variables are correlated. Alternative explanations are ruled out.' },
    { front: 'Research vs opinion: time frame', back: 'Research is long-term and rigorous. Opinion is short-term and unreliable.' },
    { front: 'Name the seven steps of the research journey', back: 'Identify the problem, review the literature, design the research, collect data, analyze data, draw conclusions, report and present.' },
    { front: 'Why is the research process drawn as a circle?', back: 'It is a continuous learning cycle. Each decision feeds new questions and new data.' },
    { front: 'What does a hidden third factor do?', back: 'It drives both variables, so they seem linked when neither causes the other (summer heat, ice cream and shark attacks).' },
    { front: 'Why can a non-representative sample mislead?', back: 'You cannot generalize to the population if the people studied differ from it.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'A big fan survey, and a famous sampling failure',
    note: 'Two real cases read on 4 November 2026. The first shows a modern sports survey and how it states who it covers. The second shows why a huge sample is not the same as a representative one.',
    slides: [
      {
        kicker: 'Real example 1',
        title: 'The L.E.K. Sports Survey (published June 2025)',
        blocks: [
          {
            type: 'p',
            text: 'A consulting firm runs a yearly survey of U.S. sports fandom. The January 2025 round asked **4,520 U.S. adults** who are the main media buyers in their households to rate more than 20 pro and college leagues on more than 50 measures.',
          },
          {
            type: 'bars',
            title: 'Share of respondents who are avid fans of each league (%)',
            unit: '%',
            items: [
              { label: 'NFL', value: 32 },
              { label: 'MLB', value: 17 },
              { label: 'College football', value: 16 },
              { label: 'NBA', value: 14 },
            ],
          },
          {
            type: 'kpis',
            items: [
              { label: 'Call themselves sports fans', value: '47%', note: '28% avid + 19% casual' },
              { label: 'WNBA avid-fan growth', value: '+65%', note: 'year over year' },
              { label: 'Live share of viewing', value: '25% vs 60%', note: 'fans 18 to 29 vs over 60' },
            ],
          },
        ],
      },
      {
        kicker: 'What to notice',
        title: 'Reading it like a researcher',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**The population is named:** U.S. adults who decide on household media purchases. Results speak for them, not for everyone, and not for other countries.',
              '**The sample is large:** 4,520 people, which makes the percentages steadier.',
              '**A survey shows what people report, not why.** It shows that younger fans watch less live sport, but not the reasons.',
              '**The date matters.** The data were collected in January 2025. A reader in 2026 should ask whether habits have moved.',
            ],
          },
          {
            type: 'callout',
            title: 'Our reading',
            text: 'The points above are our reading of the published summary, offered as a model for judging any survey. The figures are the firm’s.',
          },
        ],
      },
      {
        kicker: 'Real example 2',
        title: 'The poll with 2.4 million answers that got it wrong',
        blocks: [
          {
            type: 'p',
            text: 'In 1936 a magazine, the Literary Digest, mailed about **10 million** ballots to predict the U.S. presidential election. About **2.4 million** came back.',
          },
          {
            type: 'table',
            head: ['', 'Landon', 'Roosevelt'],
            rows: [
              ['The poll predicted', '57%', '43%'],
              ['The actual result', '37%', '62%'],
            ],
          },
          {
            type: 'p',
            text: 'The mailing list came from **phone numbers, car registrations and country club memberships**. In the Depression those were more common among wealthier people, whose views differed from the rest of voters.',
          },
          {
            type: 'callout',
            title: 'The lesson',
            text: 'A huge sample cannot fix a **sample that does not represent the population**. Who you ask matters more than how many.',
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
                title: 'How is sports fandom evolving? Insights from L.E.K.’s annual Sports Survey',
                url: 'https://www.lek.com/insights/tmt/us/ei/how-sports-fandom-evolving-2025-insights-leks-annual-sports-survey',
                note: 'L.E.K. Consulting, published 24 June 2025. Sample, fielding date, league fan shares, WNBA growth, live-viewing gap. Read 4 November 2026.',
              },
              {
                title: 'Famous Statistical Blunders in History',
                url: 'https://mathcenter.oxford.emory.edu/site/math117/historicalBlunders/',
                note: 'Emory University (Oxford College) math course page. The 1936 Literary Digest poll: ballots mailed and returned, prediction vs result, and the lists used. Read 4 November 2026.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Harbor City Rovers: fixing the matchday experience',
    universe: 'harbor',
    slides: [
      {
        kicker: 'The situation',
        title: 'A club with a worry',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Stadium seats', value: '20,000' },
              { label: 'Average crowd last season', value: '14,200', note: '71% full' },
              { label: 'Season-ticket holders', value: '6,000' },
            ],
          },
          {
            type: 'p',
            text: 'The manager says: “Fans are leaving early and the stadium feels flat. I think the food is the problem.” That is an **opinion**. The club needs to turn it into a research question.',
          },
        ],
      },
      {
        kicker: 'The pitch',
        title: 'Answering the four questions from the slides',
        blocks: [
          {
            type: 'table',
            head: ['Question', 'Rovers’ answer'],
            rows: [
              ['What is the business problem?', 'Crowds average 71% of capacity and many fans leave before the final whistle.'],
              ['Why is research important?', 'Fixing the wrong thing, such as food, would waste money. Evidence shows what fans actually find wrong.'],
              ['What data would we collect?', 'A fan survey, short interviews at the gate, ticket-scan exit times and food sales by half.'],
              ['What is the risk of opinion only?', 'The manager’s view may not match fans’ views, and no one can check it.'],
            ],
          },
        ],
      },
      {
        kicker: 'Representativeness',
        title: 'The survey that over-asked the young',
        blocks: [
          {
            type: 'p',
            text: 'The club emails its fan app list and gets **600 replies**. Then it checks who answered against who sat in the stadium.',
          },
          {
            type: 'bars',
            title: 'Share of fans aged under 35 (%)',
            unit: '%',
            items: [
              { label: 'In the stadium (14,200)', value: 40 },
              { label: 'Survey replies (600)', value: 80 },
            ],
          },
          {
            type: 'p',
            text: 'The stadium has **5,680** fans under 35 (40% of 14,200). The survey has **480** (80% of 600). Young app users are over-represented, so the survey is **not representative** of the crowd. A fix is to also ask people at the gate.',
          },
        ],
      },
      {
        kicker: 'Correlation or causality',
        title: 'Ice cream and attendance',
        blocks: [
          {
            type: 'p',
            text: 'The club notices that on days when more ice cream is sold, more fans attend. Does selling ice cream bring fans in?',
          },
          {
            type: 'cycle',
            center: 'Sunny match day',
            items: [
              { title: 'Warm weather', text: 'the hidden third factor' },
              { title: 'More fans attend', text: 'crowd goes up' },
              { title: 'More ice cream sold', text: 'sales go up' },
            ],
          },
          {
            type: 'p',
            text: 'The two rise together because **weather drives both**. Ice cream and attendance are correlated, but ice cream does not cause the crowd. To test a cause, the club would need to rule out the weather.',
          },
        ],
      },
      {
        kicker: 'The research journey',
        title: 'Rovers walk the seven steps',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Identify:** why do fans leave early?',
              '**Literature:** read fan-experience studies and league reports.',
              '**Design:** a short survey plus gate interviews, with consent and no names.',
              '**Collect:** gather answers over four home games.',
              '**Analyze:** clean the data and compare age groups.',
              '**Conclude:** link back to the question and state limits.',
              '**Report:** a short summary with two charts for the board.',
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
      q: 'Why is market research important to an organization?',
      options: [
        'It lets managers decide using systematically collected and analyzed data',
        'It predicts the future with certainty',
        'It guarantees that a decision will succeed',
        'It replaces managers’ experience',
      ],
      answer: 0,
      explanation: 'Research supports informed decisions and lowers risk. It cannot predict with certainty, guarantee success, or replace judgment.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which is the correct order of the research process?',
      options: [
        'Collect data, design the research, identify the problem, draw conclusions',
        'Identify the problem, review the literature, design the research, collect data, analyze and interpret',
        'Design the research, collect data, review the literature, identify the problem',
        'Review the literature, collect data, ask the question, analyze data',
      ],
      answer: 1,
      explanation: 'The journey starts with a clear problem, then reads what is known, then designs the study, then collects and analyzes the data.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'What does “representativeness” mean for a sample?',
      options: [
        'How many people the sample contains',
        'How accurately each answer was measured',
        'How well the sample reflects the characteristics of the population',
        'How likely the result is to be statistically significant',
      ],
      answer: 2,
      explanation: 'A representative sample mirrors its population, so findings can be generalized. Size and accurate measurement are different ideas.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'In research, “significance” mainly tells you…',
      options: [
        'How important the topic is to managers',
        'How large the sample was',
        'How much the study adds to theory',
        'Whether a result is likely a genuine effect rather than chance',
      ],
      answer: 3,
      explanation: 'Statistical significance means the observed difference or link is unlikely to have happened by accident.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'What is the difference between correlation and causality?',
      options: [
        'Correlation means two variables are linked. Causality means a change in one produces a change in the other.',
        'They mean the same thing',
        'Correlation proves one variable causes another, while causality only shows a link',
        'Causality is shown whenever two results are significant',
      ],
      answer: 0,
      explanation: 'Correlation is an association only. Causality also needs the cause to come first and other explanations to be ruled out.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Rovers sell more ice cream on days with bigger crowds. The best explanation is…',
      options: [
        'Ice cream draws fans to the stadium',
        'A hidden third factor, warm weather, raises both',
        'Ice cream prices are too low',
        'The crowd is not representative',
      ],
      answer: 1,
      explanation: 'This is a spurious relationship. Warm weather drives both attendance and ice cream sales, so neither causes the other.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'A club surveys only fans who use its app and gets 600 replies. What is the main risk?',
      options: [
        'The sample is too large to analyze',
        'The questions are unethical',
        'The sample may not represent all fans, so the results cannot be generalized',
        'The survey is automatically significant',
      ],
      answer: 2,
      explanation: 'People who use the app may differ from those who do not. A large sample does not fix a sample that misses part of the population.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which is a real risk of using AI in research, according to the slides?',
      options: [
        'AI always gives biased results, so it must never be used',
        'AI can make up convincing but false information, so outputs must be checked',
        'AI removes the need for a research method',
        'AI results are always more reliable than human work',
      ],
      answer: 1,
      explanation: 'Hallucination is one of seven listed risks. The safe habit is to verify AI output against real sources and use it inside a sound method.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q9',
      type: 'open',
      q: 'Exercise. You manage a club and want to improve the fan experience at the stadium. Write a short pitch that answers: (a) What is the business problem? (b) Why is market research important here? (c) What data would you collect? (d) What are the risks of relying only on personal opinion?',
      answer: [
        '**(a)** State a specific problem with a figure if you can, such as an average crowd at 71% of capacity or fans leaving early.',
        '**(b)** Research shows what fans actually experience, lowers the risk of spending on the wrong fix, and lets you check later whether the fix worked.',
        '**(c)** Primary data such as a fan survey and short interviews, plus secondary data such as ticket scans and food sales. Mention who you would ask so the sample is representative.',
        '**(d)** Opinions are short-term, based on personal experience and cannot be generalized, so you may fix the wrong thing and cannot show why your choice is right.',
      ],
      review: { section: 'plain', slide: 2 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain the difference between correlation and causality. Describe the three conditions needed to claim causality and give one sports-business example of a spurious relationship.',
      answer: [
        'Correlation is a statistical relationship in which changes in one variable go with changes in another. It does not mean that one variable causes the other.',
        'Causality means a change in one variable directly causes a change in the other. Three conditions are needed: the cause comes before the effect, the variables are correlated, and alternative explanations can be ruled out.',
        'A spurious relationship looks like a link but is not. Example: a club sells more ice cream on days with bigger crowds. Warm weather, a hidden third factor, drives both, so ice cream does not cause attendance.',
      ],
      marking: [
        'Defines correlation as an association only (1)',
        'Defines causality as a change in one variable producing a change in the other (1)',
        'States the three conditions: time order, correlation, ruling out alternatives (3)',
        'Gives a sports-business example of a spurious relationship (1)',
        'Names the hidden third factor or coincidence that explains it (2)',
      ],
    },
    {
      id: 'e2',
      marks: 10,
      q: 'Describe the seven steps of the research process and explain why it is called a learning cycle. For two of the steps, say how AI could help and name one risk of using it.',
      answer: [
        'The steps are: identify the problem, review the literature, design the research, collect data, analyze data, draw conclusions, and report and present. Each step builds on the one before. The goal is to move from a clear problem to a decision supported by evidence.',
        'It is a learning cycle because the conclusions and the decisions made from them raise new questions and call for new data, so the process starts again rather than ending.',
        'AI example: in the literature review it can find and summarize papers and map how studies connect. In data collection it can help build surveys or transcribe interviews.',
        'A risk is hallucination: AI may invent references or state false facts with confidence, so everything must be checked against real sources. Other risks are bias, privacy and over-reliance.',
      ],
      marking: [
        'Lists all seven steps in the right order (3)',
        'States the goal or idea of at least two steps (2)',
        'Explains the learning cycle idea (new questions, new data) (2)',
        'Gives AI help for two steps (2)',
        'Names a risk of using AI and a safeguard (1)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'A club emails a survey to the 30,000 people on its fan app list. Of 600 replies, 80% are from people under 35, but only 40% of the crowd is under 35. Discuss what this means for the study and suggest one improvement.',
      answer: [
        'The sample is not representative of the crowd, because young app users are over-represented. Representativeness means the sample reflects its population, and only then can results be generalized.',
        'The results may describe young app users well but may mislead about older fans, who may want different things. Having 600 replies does not fix this, because the problem is who answered, not how many.',
        'One improvement: also collect data at the gate or by phone so older fans are included, or compare results by age group and report them separately.',
      ],
      marking: [
        'Identifies that the sample is not representative (2)',
        'Defines representativeness or explains generalization (1)',
        'Explains that size does not fix the bias (1)',
        'Suggests a sensible improvement (2)',
      ],
    },
  ],

  videos: [],
};
