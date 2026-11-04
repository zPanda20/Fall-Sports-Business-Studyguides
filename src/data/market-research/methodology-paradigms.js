// Market Research, Session 2: methodology, methods and research paradigms; qualitative vs quantitative; mixed methods.
// Built from the Session 2 slides. The class handout repeats the slide text. The comparison table on the slides credits
// Creswell (2009), Mahoney & Goertz (2006) and Kreis et al. (2021); the wording below is our own.
// Real-example facts were read on 4 November 2026 (see the sources slide).

export const methodologyParadigmsTopic = {
  id: 'methodology-paradigms',
  course: 'market-research',
  title: 'Methodology, methods and research paradigms',
  sessions: 'Session 2',
  reading: 'Session 2 slides',
  minutes: 25,
  summary:
    'Why you study something a certain way (methodology) versus how you do it (methods), the beliefs behind that choice, and how qualitative, quantitative and mixed approaches differ.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Why versus how',
      blocks: [
        {
          type: 'big',
          text: '**Methodology** explains **why** a study is done a certain way. **Methods** are **how** it is actually done.',
        },
        {
          type: 'flow',
          items: [
            { title: 'Paradigm', text: 'the worldview' },
            { title: 'Ontology', text: 'what is real?' },
            { title: 'Epistemology', text: 'how can we know?' },
            { title: 'Methodology', text: 'why this approach' },
            { title: 'Methods', text: 'the tools' },
          ],
        },
        {
          type: 'p',
          text: 'Read it left to right: your beliefs about reality and knowledge shape the approach you justify, and the approach decides the tools you use.',
        },
      ],
    },
    {
      kicker: 'Methodology',
      title: 'The reasoning behind the study',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**What it is:** the overall theoretical framework that guides and justifies the choice of methods.',
            '**The question it answers:** why is the research done in this particular way?',
            '**What it makes explicit:** the assumptions about reality and knowledge behind the study, such as positivism or interpretivism.',
          ],
        },
        {
          type: 'callout',
          title: 'In an exam',
          text: 'If you are asked to **justify** a choice, you are being asked a methodology question. Say why the approach fits the research question.',
        },
      ],
    },
    {
      kicker: 'Ontology',
      title: 'What is the reality we study?',
      blocks: [
        {
          type: 'p',
          text: 'Ontology asks what the nature of the world or social reality is. The slides contrast two stances.',
        },
        {
          type: 'table',
          head: ['Stance', 'Main idea', 'Example in research'],
          rows: [
            ['Realism', 'There is an objective reality “out there”, independent of what people think.', 'Measuring consumer attitudes with a standardized scale'],
            ['Relativism / constructivism', 'Reality is created through social processes and perceptions.', 'Exploring how consumers interpret a brand’s identity through interviews'],
          ],
        },
      ],
    },
    {
      kicker: 'Epistemology',
      title: 'How can we know it?',
      blocks: [
        {
          type: 'p',
          text: 'Epistemology asks how knowledge about reality can be obtained and justified. The slides give three stances.',
        },
        {
          type: 'table',
          head: ['Stance', 'Main idea', 'Example in research'],
          rows: [
            ['Positivism', 'Knowledge comes from observable, measurable facts.', 'A survey that tests hypotheses statistically'],
            ['Interpretivism', 'Knowledge is co-created by interpreting meanings.', 'In-depth interviews to understand experiences'],
            ['Critical realism', 'Knowledge reflects both real structures and human interpretation.', 'Combining qualitative and quantitative approaches to uncover mechanisms'],
          ],
        },
      ],
    },
    {
      kicker: 'Putting them together',
      title: 'Two questions to ask yourself',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Ontology',
              text: 'Am I studying **objective facts** or **social meanings**? Performance numbers such as speed or goals are facts. Team identity or fair play are meanings.',
            },
            {
              title: 'Epistemology',
              text: 'Do I need to **measure** it or **understand it in depth**? GPS data and surveys measure. Interviews and observation interpret.',
            },
          ],
        },
        {
          type: 'figure',
          src: 'mr-methodology-ontology-epistemology.png',
          alt: 'Two-panel infographic: ontology with realism and constructivism, epistemology with positivism and interpretivism, using sport scenes',
          caption: 'The “Ontology and Epistemology” sport infographic from the Session 2 slides.',
          need: 'The two-panel infographic on slide 18 of the Session 2 slides (ontology on the left, epistemology on the right, with sport scenes). Ask your instructor if you may use it, or redraw your own version.',
        },
        {
          type: 'p',
          text: 'The slides’ own takeaway: these ideas are not abstract theory. They help you ask the right questions and choose methods that give useful findings.',
        },
      ],
    },
    {
      kicker: 'Research paradigm',
      title: 'The philosophical lens',
      blocks: [
        {
          type: 'big',
          text: 'A **research paradigm** is a worldview that defines how research should be done: your assumptions about reality, knowledge and how to find out.',
        },
        {
          type: 'bullets',
          items: [
            'It is **shared and recognized** by a community of scholars in a field.',
            'It **builds on earlier achievements** in that field.',
            'It covers **ontology, epistemology, methodology and methods**.',
          ],
        },
        {
          type: 'p',
          text: 'In short: it is the lens you look through when you decide what to study and how.',
        },
      ],
    },
    {
      kicker: 'Methods',
      title: 'The tools of the trade',
      blocks: [
        {
          type: 'p',
          text: 'A **method** is a practical procedure used to gather, process and interpret data. It answers: how is the research done in practice?',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Collecting data',
              text: 'Survey, experiment, interview, observation, content analysis.',
            },
            {
              title: 'Analyzing data',
              text: 'Regression analysis, ANOVA, grounded theory, thematic analysis.',
            },
          ],
        },
        {
          type: 'table',
          head: ['Often more qualitative', 'Often more quantitative'],
          rows: [
            ['Netnography', 'Survey'],
            ['Ethnography', 'Experiments'],
            ['Focus group', 'Secondary data'],
            ['Case study', 'Big data analytics'],
            ['Content analysis', 'Regression analysis'],
            ['In-depth interviews', 'Quasi-experiments'],
          ],
        },
      ],
    },
    {
      kicker: 'Qualitative or quantitative?',
      title: 'Side by side',
      blocks: [
        {
          type: 'table',
          head: ['Criterion', 'Qualitative', 'Quantitative'],
          rows: [
            ['Typical aim', 'Develop concepts and discover relationships', 'Test hypotheses and build up knowledge'],
            ['Generalizability', 'Rather low and less important', 'High generalizability is the aim'],
            ['Plan fixed in advance?', 'Low to medium. Earlier results shape what comes next', 'Largely fixed from hypotheses set beforehand'],
            ['Number of cases', 'Small (single digits to dozens)', 'Large (two to four digits, from dozens up to thousands)'],
            ['Choosing cases', 'Focus on “interesting” cases', 'Ideally random sampling; all cases analyzed'],
            ['What is collected', 'Facts and opinions in their context', 'Values of predefined variables'],
            ['How', 'Open forms: interviews, observation', 'Standardized, validated tools such as questionnaires'],
            ['Analysis', 'Detailed texts with description and interpretation', 'Statistical methods'],
          ],
        },
      ],
    },
    {
      kicker: 'Mixed methods and triangulation',
      title: 'Using more than one approach',
      blocks: [
        {
          type: 'p',
          text: '**Mixed methods** combine qualitative and quantitative approaches. You get rich insight **and** evidence you can generalize, and the findings are more credible.',
        },
        {
          type: 'p',
          text: '**Triangulation** means studying the same thing with more than one method or source. It raises validity, reliability and completeness. There are four types:',
        },
        {
          type: 'columns',
          items: [
            { title: 'Data', text: 'Different data sources.' },
            { title: 'Methodological', text: 'Different methods.' },
            { title: 'Investigator', text: 'Different researchers.' },
            { title: 'Theory', text: 'Different perspectives or theories.' },
          ],
        },
      ],
    },
    {
      kicker: 'Watch out',
      title: 'Common slips',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Mixing up **methodology** (why) with **methods** (how).',
            'Thinking qualitative means “worse” and quantitative means “better”. They answer different kinds of questions.',
            'Calling a study mixed methods when it only uses two quantitative tools. Mixed means **qualitative and quantitative**.',
            'Forgetting that a method follows from the question, not the other way round.',
            'Assuming a small qualitative sample can be generalized to all fans.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Methodology', def: 'The theoretical framework that guides and justifies the choice of methods. It answers why the research is done this way.' },
    { term: 'Method', def: 'A practical procedure for gathering, processing or interpreting data. It answers how the research is done.' },
    { term: 'Research paradigm', def: 'A shared worldview in a field that sets assumptions about reality, knowledge and how to research. The “philosophical lens”.' },
    { term: 'Ontology', def: 'The study of what the world or social reality is like. Is there an objective reality, or is it socially constructed?' },
    { term: 'Epistemology', def: 'The study of how knowledge about reality can be obtained and justified.' },
    { term: 'Realism', def: 'The ontological view that reality exists independently of human perception.' },
    { term: 'Constructivism', def: 'The ontological view that reality is created through social processes, meanings and interactions. Also called relativism.' },
    { term: 'Positivism', def: 'The epistemological view that knowledge comes from objective observation and measurement.' },
    { term: 'Interpretivism', def: 'The epistemological view that understanding comes from interpreting subjective meanings.' },
    { term: 'Critical realism', def: 'The view that knowledge reflects both real structures and human interpretation.' },
    { term: 'Qualitative research', def: 'Research that explores meanings, opinions and experiences in depth, usually with words and a small number of cases.' },
    { term: 'Quantitative research', def: 'Research that measures predefined variables and uses statistics, usually with large samples, to test hypotheses.' },
    { term: 'Mixed methods', def: 'Combining qualitative and quantitative approaches to get depth and generalizable evidence.' },
    { term: 'Triangulation', def: 'Studying the same phenomenon with several methods, sources, researchers or theories to improve validity and completeness.' },
  ],
  cards: [
    { front: 'Methodology: which question does it answer?', back: 'Why is the research done in this particular way?' },
    { front: 'Method: which question does it answer?', back: 'How is the research done in practice?' },
    { front: 'Realism vs constructivism', back: 'Realism: reality exists independently. Constructivism: reality is created through social meanings.' },
    { front: 'Positivism vs interpretivism', back: 'Positivism: knowledge from objective measurement. Interpretivism: knowledge from interpreting meanings.' },
    { front: 'Name the four types of triangulation', back: 'Data, methodological, investigator and theory.' },
    { front: 'Which approach aims for high generalizability?', back: 'Quantitative research, with large samples and statistical analysis.' },
    { front: 'Why use mixed methods?', back: 'To combine rich insight with generalizable evidence and make findings more credible.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Scotland’s women’s national team fan study',
    note: 'A real fan study read on 4 November 2026. It shows what a methods section looks like, and how a study states who it covers.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Who did the study, and how',
        blocks: [
          {
            type: 'p',
            text: 'Researchers at the University of Edinburgh, working with the Scottish FA, studied supporters of the **Scottish Women’s National Team** (SWNT). The summary report is dated 26 July 2023.',
          },
          {
            type: 'flow',
            items: [
              { title: 'Consult', text: 'talks on the remit and existing data' },
              { title: 'Pilot', text: 'test and refine the questions' },
              { title: 'Survey', text: 'online, open for 2 months' },
              { title: 'Social media', text: 'sentiment analysis around selected 2022 matches' },
              { title: 'Analyze', text: 'clean the data, descriptive analysis, report' },
            ],
          },
          {
            type: 'kpis',
            items: [
              { label: 'Survey replies', value: '994' },
              { label: 'Core supporters (population)', value: 'about 4,000', note: 'fans who repeatedly buy tickets at Hampden' },
              { label: 'Share who replied', value: 'close to 24%' },
            ],
          },
        ],
      },
      {
        kicker: 'What they found',
        title: 'Selected survey results',
        blocks: [
          {
            type: 'bars',
            title: 'Share of respondents agreeing (%)',
            unit: '%',
            items: [
              { label: 'A positive stadium atmosphere is very or extremely important', value: 80 },
              { label: 'The national team plays an important role in the community', value: 79 },
              { label: 'The team is very or extremely important to them', value: 73 },
              { label: 'Strongly agree nothing beats the match experience', value: 61 },
            ],
          },
          {
            type: 'p',
            text: 'Other results in the report: 51% of respondents were male and 48% female, 75% held a degree, and 62% travel to matches by car.',
          },
        ],
      },
      {
        kicker: 'Reading it with today’s vocabulary',
        title: 'Methodology, methods and triangulation',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Methods:** an online survey for data collection and descriptive analysis for the results, plus sentiment analysis of social media.',
              '**Two data sources.** Asking fans directly and reading what they post is close to **data triangulation**, though the report does not use that word.',
              '**The population is defined.** About 4,000 core supporters. The survey reached about a quarter, so a reader asks how those 994 differ from the rest.',
              '**What is missing.** The summary mentions no interviews or focus groups, so it tells you what fans say and how many, with less depth on why.',
            ],
          },
          {
            type: 'callout',
            title: 'Our reading',
            text: 'The labels in this slide are our reading of the published summary, offered as practice. The figures and method details are the authors’.',
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
                title: 'Hampden Nights: Short Executive Summary, 2022-2023 SWNT Fan Engagement Report',
                url: 'https://edwebcontent.ed.ac.uk/sites/default/files/atoms/files/final_summary_2672023swnt_fan_engagement_report_.pdf',
                note: 'University of Edinburgh Academy of Sport (Jarvie, Widdop, Barrett), 26 July 2023. Population, survey and sentiment-analysis methods, 994 replies, and the results shown. Read 4 November 2026.',
              },
              {
                title: 'The 2022 Scottish Women’s National Team Football Fan Survey',
                url: 'https://blogs.ed.ac.uk/sport-matters/?p=1060',
                note: 'Sport Matters blog, University of Edinburgh, 15 May 2023. Same survey, with result percentages. Read 4 November 2026.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Why do Rovers’ season-ticket holders leave?',
    universe: 'harbor',
    slides: [
      {
        kicker: 'The problem',
        title: 'One in four did not renew',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Season-ticket holders last year', value: '6,000' },
              { label: 'Did not renew', value: '1,500', note: '25%' },
              { label: 'Lapsed holders surveyed', value: '1,500', note: '420 replied' },
            ],
          },
          {
            type: 'p',
            text: 'The club does not know **why**. It could run a survey, hold interviews, or do both. The choice is a methodology decision.',
          },
        ],
      },
      {
        kicker: 'Two approaches',
        title: 'Qualitative first, quantitative second',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Qualitative: interviews',
                text: 'Twelve lapsed holders talk for 30 minutes each. The aim is to **discover reasons** the club has not thought of. A constructivist and interpretivist stance fits: it is about what the matchday means to them.',
              },
              {
                title: 'Quantitative: survey',
                text: 'A questionnaire to all 1,500 lapsed holders. The aim is to **measure how common** each reason is. A realist and positivist stance fits: count and compare.',
              },
            ],
          },
          {
            type: 'flow',
            items: [
              { title: 'Interviews', text: 'find the reasons' },
              { title: 'Survey', text: 'measure how common' },
              { title: 'Ticket records', text: 'check against behavior' },
            ],
          },
        ],
      },
      {
        kicker: 'The survey result',
        title: 'What 420 lapsed holders said',
        blocks: [
          {
            type: 'bars',
            title: 'Main reason for not renewing (number of replies, 420 in total)',
            unit: 'replies',
            items: [
              { label: 'Kick-off times clash with work', value: 168 },
              { label: 'Price', value: 126 },
              { label: 'Atmosphere felt flat', value: 84 },
              { label: 'Other', value: 42 },
            ],
          },
          {
            type: 'p',
            text: 'In percentages: **40%**, **30%**, **20%** and **10%**. The interviews found the “kick-off times” reason. The survey shows it is the biggest one. Neither method alone would have shown both.',
          },
        ],
      },
      {
        kicker: 'Triangulation',
        title: 'All four types at Rovers',
        blocks: [
          {
            type: 'table',
            head: ['Type', 'Rovers’ version'],
            rows: [
              ['Data', 'Survey answers plus the ticket office’s renewal records'],
              ['Methodological', 'Interviews plus a survey'],
              ['Investigator', 'Two analysts code the interviews separately and compare'],
              ['Theory', 'Read the results through fan identity and also through price sensitivity'],
            ],
          },
          {
            type: 'callout',
            title: 'A note on numbers',
            text: 'The survey is quantitative. Counting how many interviewees gave a reason is not the point of interviews, which is why the club used the survey to measure.',
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
      q: 'Which question does methodology answer?',
      options: [
        'How many people should I survey?',
        'Why is the research conducted in this particular way?',
        'Which software should I use for the analysis?',
        'What did the results show?',
      ],
      answer: 1,
      explanation: 'Methodology is the reasoning that justifies the approach. Methods answer how the work is done in practice.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'A researcher believes reality exists independently of what people think about it. This is a…',
      options: [
        'Constructivist ontology',
        'Interpretivist epistemology',
        'Realist ontology',
        'Mixed-methods design',
      ],
      answer: 2,
      explanation: 'Ontology concerns what reality is. Realism says reality exists “out there”. Constructivism says it is created through meanings and interactions.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which statement best reflects a positivist view?',
      options: [
        'Knowledge is socially constructed and depends on context',
        'Reality is objective and can be measured through observation and empirical testing',
        'The researcher’s values are part of the research process',
        'Knowledge comes only from interpreting how people create meaning',
      ],
      answer: 1,
      explanation: 'Positivism holds that knowledge comes from observable, measurable facts. The other three options describe constructivist or interpretivist views.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'The best description of the interpretivist approach is that it…',
      options: [
        'Looks for universal laws of behavior using numbers',
        'Assumes truths exist independently of human perception',
        'Rejects interviews as a source of data',
        'Focuses on how people create meaning in social settings',
      ],
      answer: 3,
      explanation: 'Interpretivism is about understanding meanings. In-depth interviews are a typical method, so it does not reject them.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Which pair lists one typically qualitative and one typically quantitative method?',
      options: [
        'Survey and experiment',
        'Focus group and in-depth interview',
        'Netnography and survey',
        'Regression analysis and big data analytics',
      ],
      answer: 2,
      explanation: 'Netnography (studying online communities) is qualitative. A survey is typically quantitative. The other pairs are both qualitative or both quantitative.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which description fits quantitative research?',
      options: [
        'Small numbers of “interesting” cases studied in their context',
        'Standardized, validated tools and statistical analysis, aiming for generalizable results',
        'Open interviews analyzed as texts',
        'A plan that changes freely as earlier results come in',
      ],
      answer: 1,
      explanation: 'Quantitative research measures predefined variables in large samples and uses statistics. The other options describe qualitative research.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Two analysts code the same interviews separately and compare their results. This is…',
      options: [
        'Data triangulation',
        'Investigator triangulation',
        'Theory triangulation',
        'Methodological triangulation',
      ],
      answer: 1,
      explanation: 'Using different researchers to study the same phenomenon is investigator triangulation. It checks that the findings do not depend on one person’s view.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Why might a club choose mixed methods to study why season-ticket holders leave?',
      options: [
        'Because quantitative research is always inferior',
        'Because it removes the need for a research question',
        'To combine rich insight from interviews with generalizable evidence from a survey',
        'To avoid having to define the population',
      ],
      answer: 2,
      explanation: 'Mixed methods combine the depth of qualitative work with the breadth of quantitative work, which makes the findings more credible.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q9',
      type: 'open',
      q: 'Exercise. A club wants to know how fans feel about a new stadium chant policy. (a) Choose a qualitative or quantitative approach, or both, and justify it as a methodology choice. (b) Name two methods you would use. (c) Name one type of triangulation you could add and say how.',
      answer: [
        '**(a)** A strong answer links the choice to the question. “How fans feel” invites interviews or focus groups to understand meanings (qualitative). “How many fans” invites a survey (quantitative). Using both gives depth and generalizable evidence (mixed methods).',
        '**(b)** For example a focus group and a survey, or in-depth interviews and a survey.',
        '**(c)** For example methodological triangulation (focus group plus survey) or data triangulation (survey plus social media comments).',
      ],
      review: { section: 'plain', slide: 1 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Define ontology, epistemology, methodology and method. Show how they relate, using one example from sports business.',
      answer: [
        'Ontology is about the nature of reality: realism says reality exists independently of perception, while constructivism says it is created through social meanings. Epistemology is about how knowledge can be obtained and justified: positivism uses objective measurement, interpretivism interprets subjective meanings.',
        'Methodology is the overall reasoning that justifies the approach, and answers why the research is done in this way. Methods are the practical procedures for gathering and analyzing data, and answer how it is done.',
        'They connect in a chain. Example: a researcher who treats fan satisfaction as a measurable fact (realist ontology, positivist epistemology) justifies a quantitative approach (methodology) and uses a questionnaire and regression analysis (methods). A researcher who wants to understand what the matchday means to fans (constructivist, interpretivist) justifies a qualitative approach and uses in-depth interviews.',
      ],
      marking: [
        'Defines ontology with realism and constructivism (2)',
        'Defines epistemology with positivism and interpretivism (2)',
        'Distinguishes methodology (why) from methods (how) (2)',
        'Shows the link between them with a sports-business example (2)',
      ],
    },
    {
      id: 'e2',
      marks: 10,
      q: 'Compare qualitative and quantitative research on at least four criteria. Name two typical methods of each. Explain when a mixed-methods design is a good choice.',
      answer: [
        'Aim: qualitative research develops concepts and discovers relationships. Quantitative research tests hypotheses and builds up knowledge.',
        'Generalizability: low and less important in qualitative work, high and intended in quantitative work.',
        'Number and selection of cases: qualitative uses a small number of “interesting” cases. Quantitative uses many cases, ideally randomly selected.',
        'Data and analysis: qualitative collects facts and opinions in context through open forms, and analyzes texts with interpretation. Quantitative collects values of predefined variables with standardized tools and uses statistics.',
        'Typical methods: qualitative, for example focus groups and netnography. Quantitative, for example surveys and experiments.',
        'Mixed methods is a good choice when the question needs both depth and breadth, for example finding why fans leave through interviews and then measuring how common each reason is through a survey. It makes findings richer and more credible.',
      ],
      marking: [
        'Compares on four criteria with accurate statements (4)',
        'Names two qualitative and two quantitative methods correctly (2)',
        'Explains that mixed methods combines depth and generalizable evidence (2)',
        'Gives an example of when it is a good choice (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'What is triangulation? Name its four types and give an example of two of them from a study of fan satisfaction at a football club.',
      answer: [
        'Triangulation means studying the same phenomenon with multiple methods or data sources to improve validity, reliability and completeness.',
        'The four types are data, methodological, investigator and theory triangulation.',
        'Example of data triangulation: combine survey answers with ticket-office renewal records. Example of methodological triangulation: run a survey and also interviews with the same fan group.',
      ],
      marking: [
        'Defines triangulation and its purpose (2)',
        'Names all four types (2)',
        'Gives two correct examples (2)',
      ],
    },
  ],

  videos: [],
};
