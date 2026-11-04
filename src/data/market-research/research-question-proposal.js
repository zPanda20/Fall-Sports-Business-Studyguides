// Market Research, Session 3: the research objective, the research question and the research proposal.
// Built from the Session 3 slides (objective and question examples, FINER, two weak-question examples).
// The slides do not cover the proposal in detail, so the proposal slide is a general outline tied to the research
// journey (Session 1) and the measurement lesson (Session 5, "your proposal must state what you will measure...").
// Real-example facts were read on 4 November 2026 (see the sources slide).

export const researchQuestionProposalTopic = {
  id: 'research-question-proposal',
  course: 'market-research',
  title: 'The research objective, question and proposal',
  sessions: 'Session 3',
  reading: 'Session 3 slides',
  minutes: 25,
  summary:
    'How to turn a business problem into a clear objective and sharp research questions, how to test a question with FINER, and what a research proposal needs to say.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'From a problem to a question',
      blocks: [
        {
          type: 'big',
          text: 'Start with the **problem or opportunity**. Restate it as a **research question**. Answering that question becomes the aim of the whole study.',
        },
        {
          type: 'flow',
          items: [
            { title: 'Problem or opportunity', text: 'what is going on?' },
            { title: 'Research objective', text: 'the clear goal' },
            { title: 'Research questions', text: 'what you will answer' },
            { title: 'Design', text: 'methods, sample, plan' },
          ],
        },
        {
          type: 'p',
          text: 'The question guides **every later step**: what you read, who you ask, what you measure and how you analyze.',
        },
      ],
    },
    {
      kicker: 'Objective and question',
      title: 'Two different things',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Research objective',
              text: 'The goal of the project, in a sentence. It starts with a verb such as **understand**, **investigate** or **examine**.',
            },
            {
              title: 'Research question',
              text: 'A question that, once answered, achieves the objective. It starts with a question word: **what, how, why, when, to what extent, which**.',
            },
          ],
        },
        {
          type: 'p',
          text: 'One objective usually has **one to three** research questions, often written RQ1, RQ2 and RQ3.',
        },
      ],
    },
    {
      kicker: 'Worked examples (1)',
      title: 'Sportswear and energy drinks',
      blocks: [
        {
          type: 'table',
          head: ['', 'Objective', 'Research questions'],
          rows: [
            ['Sustainable sportswear', 'Understand the motivations and barriers behind consumers’ adoption of sustainable sportswear.', 'RQ1: What are the key motivations behind sustainable sportswear purchases? RQ2: What barriers reduce willingness to buy it?'],
            ['Energy drink packaging', 'Investigate how packaging design influences consumer perceptions and purchase decisions.', 'RQ1: How do consumers perceive eco-friendly vs traditional packaging? RQ2: Does packaging color, shape or labeling affect purchase intention?'],
          ],
        },
      ],
    },
    {
      kicker: 'Worked examples (2)',
      title: 'Sustainable events and social media',
      blocks: [
        {
          type: 'table',
          head: ['', 'Objective', 'Research questions'],
          rows: [
            ['Sustainability at global events', 'Understand how young fans see sustainability efforts by major international sports events.', 'RQ1: Which sustainability aspects do Gen Z fans value most? RQ2: How do these efforts affect their intention to attend and support events?'],
            ['Social media and fans', 'Examine how social media content influences fan engagement and perceptions of teams.', 'RQ1: How do fans perceive a team’s brand image given its social media presence? RQ2: How far does social media activity affect loyalty? RQ3: Does interactive content lead to more engagement than purely informational content?'],
          ],
        },
        {
          type: 'p',
          text: 'Notice the pattern: each question names **who** (consumers, Gen Z fans), **what** (motivations, perceptions, intention) and **in what context** (sportswear, events, social media).',
        },
      ],
    },
    {
      kicker: 'FINER',
      title: 'Five tests for a good question',
      blocks: [
        {
          type: 'table',
          head: ['Letter', 'Test', 'Ask yourself'],
          rows: [
            ['F', 'Feasible', 'Can a real study answer this?'],
            ['I', 'Interesting', 'Does it spark curiosity and enthusiasm?'],
            ['N', 'Novel', 'Does it bring something new, in an area not yet studied?'],
            ['E', 'Ethical', 'Does it do no harm to participants and respect ethical standards?'],
            ['R', 'Relevant', 'Does the answer matter? Always ask: “So what?”'],
          ],
        },
        {
          type: 'callout',
          title: 'The “So what?” test',
          text: 'If the answer would not change a decision or add knowledge, the question is trivial, even if it can be answered.',
        },
      ],
    },
    {
      kicker: 'A weak question (1)',
      title: '“Do people like sustainable products?”',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Too vague.** Which people? In what context?',
            '**Not novel.** Many studies already show general attitudes toward sustainability.',
            '**Not feasible.** You cannot measure it without a product category, market and time frame.',
            '**Fails “So what?”.** Even if the answer is “yes”, it adds nothing useful.',
          ],
        },
      ],
    },
    {
      kicker: 'A weak question (2)',
      title: '“How can a sports brand succeed in international markets?”',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Too broad.** It treats all international markets as one block.',
            '**Ignores cultural differences.** Consumer behavior and management vary between countries.',
            '**Unclear term.** What is “succeed”: sales, awareness, other customer measures?',
            '**Not feasible.** No single study can answer for all brands in all markets.',
            '**Low value.** The answer would be trivial, like “know your consumers”.',
            '**No context.** Online, offline or omnichannel markets need different designs.',
          ],
        },
      ],
    },
    {
      kicker: 'Fixing a question',
      title: 'Narrow it down',
      blocks: [
        {
          type: 'table',
          head: ['Weak question', 'What is wrong', 'A sharper version (ours)'],
          rows: [
            ['Do people like sustainable products?', 'No group, product or setting', 'How do Gen Z football fans in Germany perceive the sustainability claims of club merchandise?'],
            ['How can a sports brand succeed internationally?', 'Too broad, “succeed” undefined', 'Which factors explain differences in online sales of a sportswear brand between France and Japan?'],
            ['What is the best way to manage employees worldwide?', 'No context, “best” undefined', 'How do managers in two international federations describe the challenges of managing staff across cultures?'],
          ],
        },
        {
          type: 'p',
          text: 'The sharper versions are our own examples. Each names a **group**, a **concept** and a **setting**, which also hints at a method.',
        },
      ],
    },
    {
      kicker: 'Is it valid?',
      title: 'A checklist you can run in your head',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Who exactly?** Name the group.',
            '**What exactly?** Define each key word so it can be measured or explored.',
            '**Where and when?** Give a context.',
            '**Can it be answered** with data you could really get?',
            '**Is it ethical** to ask?',
            '**So what?** Who would use the answer?',
          ],
        },
        {
          type: 'callout',
          title: 'Warning signs',
          text: 'Words like “best”, “all”, “always”, “completely” or “inevitably” usually mean the question is too broad or already assumes the answer.',
        },
      ],
    },
    {
      kicker: 'The research proposal',
      title: 'What a proposal says',
      blocks: [
        {
          type: 'p',
          text: 'A proposal is a short plan, written **before** the study, that shows the question is worth asking and can be answered. It follows the research journey.',
        },
        {
          type: 'table',
          head: ['Part', 'It should say'],
          rows: [
            ['Problem and objective', 'What the business issue is and what the study aims to achieve'],
            ['Research questions', 'The one to three questions that will be answered'],
            ['Literature', 'What is already known, and the gap you fill'],
            ['Design and methods', 'Qualitative, quantitative or mixed, and the tools you will use'],
            ['What you will measure', 'The key concepts and how you will measure them, and why those measures are credible'],
            ['Sample and data collection', 'Who you will ask or observe, how many, and how'],
            ['Ethics and timeline', 'How participants are protected, and when each step happens'],
          ],
        },
        {
          type: 'callout',
          title: 'Check your brief',
          text: 'The Session 3 slides give the course reading on writing a research proposal but do not set out a template. Follow the exact format in your project instructions.',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Research problem', def: 'The business issue or opportunity that makes a study worth doing.' },
    { term: 'Research objective', def: 'A clear goal for the project, stated with a verb such as understand, investigate or examine.' },
    { term: 'Research question (RQ)', def: 'A question whose answer achieves the objective. Often written RQ1, RQ2.' },
    { term: 'FINER', def: 'A checklist for a good research question: Feasible, Interesting, Novel, Ethical, Relevant.' },
    { term: '“So what?” test', def: 'Asking whether the answer would matter or change anything. If not, the question is trivial.' },
    { term: 'Hypothesis', def: 'A testable statement about a relationship, used mainly in quantitative research and set before data are collected.' },
    { term: 'Research proposal', def: 'A short plan written before a study: problem, objective, questions, literature, design, sample, ethics and timeline.' },
    { term: 'Construct', def: 'An abstract idea a study wants to understand, such as fan loyalty or brand trust. Questions must define theirs clearly.' },
  ],
  cards: [
    { front: 'List the question words for a research question', back: 'What, how, why, when, to what extent, which.' },
    { front: 'What does FINER stand for?', back: 'Feasible, Interesting, Novel, Ethical, Relevant.' },
    { front: 'What is the “So what?” test?', back: 'Ask whether the answer matters. If it changes nothing, the question is trivial.' },
    { front: 'Objective vs research question', back: 'The objective is the goal. The questions are what you answer to reach it.' },
    { front: 'Why is “How can a sports brand succeed internationally?” weak?', back: 'Too broad, “succeed” is undefined, ignores cultural differences and context, and cannot be answered in one study.' },
    { front: 'How many research questions for one objective?', back: 'Usually one to three, written RQ1, RQ2, RQ3.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'From an aim to testable statements: a football fan study',
    note: 'A real peer-reviewed study read on 4 November 2026. It shows an aim that is narrow enough to design a study around.',
    slides: [
      {
        kicker: 'Real example',
        title: 'A study on football fans and social media',
        blocks: [
          {
            type: 'p',
            text: 'The study “Like, Share or Comment ‘Till We Die” appeared in the journal Sport i Turystyka in March 2024. Football clubs now talk to fans on social media, so the authors asked how fans’ engagement, team identity and loyalty fit together there.',
          },
          {
            type: 'flow',
            items: [
              { title: 'Aim', text: 'a model of how engagement, identity and loyalty connect on social media' },
              { title: 'Seven hypotheses', text: 'testable statements' },
              { title: 'Online survey', text: '264 avid fans of three Turkish Super League clubs' },
              { title: 'Result', text: 'four of seven hypotheses supported' },
            ],
          },
        ],
      },
      {
        kicker: 'What to notice',
        title: 'Why this aim works',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**It names who:** avid fans, from three named clubs in one league.',
              '**It names the concepts:** engagement (split into consumption, contribution and creation), team identity and loyalty.',
              '**It names the context:** social media, in football.',
              '**It points to a method.** Testing seven relationships between measured concepts leads to a survey and statistics, which is what the authors used.',
              '**Not every hypothesis was supported.** A good question is one where the answer could have gone either way.',
            ],
          },
          {
            type: 'callout',
            title: 'A detail',
            text: 'The listing we read states an aim and hypotheses rather than numbered research questions. Both do the same job: they turn an aim into something the data can answer.',
          },
          {
            type: 'p',
            text: 'The labels in this slide are our reading of the published abstract. The facts about sample size, method and results come from the journal listing.',
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
                title: 'Like, Share or Comment ‘Till We Die: Analyzing Football Fans’ Engagements, Identity and Loyalty on Social Media',
                url: 'https://doaj.org/article/eab4b7612851494d8487e7da2ee84fdb',
                note: 'Sport i Turystyka, March 2024, as listed in the Directory of Open Access Journals. Aim, method (online survey), sample of 264 avid fans of three Turkish Super League clubs, seven hypotheses, four supported. The listing did not show the authors. Read 4 November 2026.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'Harbor City Rovers: sharpening a question',
    universe: 'harbor',
    slides: [
      {
        kicker: 'The problem',
        title: 'The board says: “improve the fan experience”',
        blocks: [
          {
            type: 'p',
            text: 'Rovers’ average crowd was 14,200 in a 20,000-seat stadium. The board wants a study. The first draft question is: “**Do fans like coming to Rovers games?**”',
          },
          {
            type: 'table',
            head: ['FINER test', 'Verdict on the draft'],
            rows: [
              ['Feasible', 'Hard to say: “like” is not defined and “fans” is everyone'],
              ['Interesting', 'Mildly'],
              ['Novel', 'No. Every club already assumes some fans like it'],
              ['Ethical', 'Yes'],
              ['Relevant', 'Fails “So what?”. A yes or no changes no decision'],
            ],
          },
        ],
      },
      {
        kicker: 'The fix',
        title: 'Problem, objective, questions',
        blocks: [
          {
            type: 'flow',
            items: [
              { title: 'Problem', text: 'The crowd averages 71% of capacity and many fans leave early.' },
              { title: 'Objective', text: 'Understand why fans leave before the final whistle.' },
              { title: 'RQ1', text: 'What reasons do supporters aged 18 to 40 give for leaving before full time?' },
              { title: 'RQ2', text: 'To what extent does queue time at half-time relate to leaving early?' },
            ],
          },
          {
            type: 'p',
            text: 'RQ1 is **exploratory** and suits interviews. RQ2 asks “to what extent”, which suits a survey with a measure of queue time. The questions already point to a mixed design.',
          },
        ],
      },
      {
        kicker: 'Test the new questions',
        title: 'Do they pass FINER?',
        blocks: [
          {
            type: 'table',
            head: ['FINER test', 'RQ1 and RQ2'],
            rows: [
              ['Feasible', 'Yes: one league, four home games, a defined age group'],
              ['Interesting', 'Yes: it ties to a visible problem'],
              ['Novel', 'Yes for this club: nobody has asked its fans this'],
              ['Ethical', 'Yes: voluntary, no names, consent at the gate'],
              ['Relevant', 'Yes: the answer could change queue staffing and kick-off plans'],
            ],
          },
        ],
      },
      {
        kicker: 'Proposal',
        title: 'The one-page proposal',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Problem and objective:** as above.',
              '**Questions:** RQ1 and RQ2.',
              '**Literature:** read what is known about fan experience and queueing at sports venues.',
              '**Design:** gate interviews first, then a short survey, over four home games.',
              '**Measures:** reasons given (interviews) and queue minutes (survey), with a note on why each is credible.',
              '**Sample and ethics:** fans aged 18 to 40, voluntary, no names, consent at the gate.',
              '**Timeline:** two weeks planning, four match days, two weeks analysis.',
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
      q: 'What is the relationship between a research objective and research questions?',
      options: [
        'The objective is a goal, and the questions are what you answer to reach it',
        'They are the same thing written twice',
        'The questions are chosen after the data are collected',
        'The objective is a hypothesis',
      ],
      answer: 0,
      explanation: 'The objective states what you want to achieve. Answering the research questions achieves it, and the questions guide every later step.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Which letter of FINER asks “So what?”',
      options: ['Feasible', 'Novel', 'Ethical', 'Relevant'],
      answer: 3,
      explanation: 'Relevant means the answer matters and is not trivial. “So what?” is the test for it.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which research question is best formulated?',
      options: [
        'Why is marketing important for business success?',
        'How does social media affect people’s mental health?',
        'To what extent does athlete credibility affect fan trust in sports brands?',
        'What is the best social media strategy for all sports?',
      ],
      answer: 2,
      explanation: 'It names the concepts (credibility, trust), the group (fans) and the context (sports brands), and “to what extent” can be measured. The others are too broad or too vague.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: '“Do people like sustainable products?” fails mainly because it is…',
      options: [
        'Unethical',
        'Too vague, not novel and fails the “So what?” test',
        'Too specific',
        'Written in the wrong tense',
      ],
      answer: 1,
      explanation: '“People” and “sustainable products” are undefined, many studies already show general attitudes, and a yes or no changes nothing.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Why is “How can a sports brand succeed in international markets?” a weak question?',
      options: [
        'It is too narrow',
        'It uses a question word',
        'It treats all markets as one, leaves “succeed” undefined and cannot be answered in one study',
        'It is about sports',
      ],
      answer: 2,
      explanation: 'Markets differ culturally, “succeed” could mean sales or awareness, and no single study could cover all brands in all markets.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'Which word in a question is most often a warning sign?',
      options: ['“Which”', '“To what extent”', '“How”', '“Always” or “best”'],
      answer: 3,
      explanation: 'Words like “best”, “always” or “completely” usually make a question too broad or assume the answer in advance.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'Which draft question is best for a study of Rovers’ early leavers?',
      options: [
        'Do fans like coming to games?',
        'What is the best way to run a football club?',
        'What reasons do supporters aged 18 to 40 give for leaving before full time?',
        'How can Rovers beat every rival?',
      ],
      answer: 2,
      explanation: 'It names the group, the behavior and the context, it can be answered with interviews, and the answer could change a decision.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q8',
      type: 'mcq',
      q: 'Which statement about a research proposal is correct?',
      options: [
        'It is written after the data are analyzed',
        'It is a plan, written before the study, covering the question, design, measures, sample and ethics',
        'It only needs the research question',
        'It replaces the literature review',
      ],
      answer: 1,
      explanation: 'A proposal sets out what you will do and why it is credible, before you do it.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q9',
      type: 'open',
      q: 'Exercise. Pick a topic in the sports industry that interests you (fan engagement, sponsorship, women’s sport, esports, ticketing…). Write one research question that works and one that does not. For each, explain why using FINER.',
      answer: [
        '**A question that works** names a group, concepts and a context, and passes FINER. Example: “How do female football fans describe their experiences of attending professional matches?” It is feasible (one group, interviews), novel enough, ethical with consent, and relevant because clubs can act on it.',
        '**A question that does not work** is vague, broad or assumes its answer. Example: “Do social media completely determine sports fans’ purchase decisions?” “Completely” assumes an extreme answer, “social media” and “purchase decisions” are undefined, and it is not feasible to measure.',
        'Whichever you choose, say which FINER letters it passes or fails, and finish with the “So what?” test.',
      ],
      review: { section: 'plain', slide: 4 },
    },
  ],

  // ------------------------------------------------------------------ exam-level written questions
  exam: [
    {
      id: 'e1',
      marks: 8,
      q: 'Explain the difference between a research objective and a research question. Use the FINER criteria to evaluate this question and rewrite it: “How can a sports brand succeed in international markets?”',
      answer: [
        'A research objective is the overall goal of a project, for example to understand something. Research questions are specific questions whose answers achieve that objective. They guide every later step of design and planning.',
        'FINER stands for Feasible, Interesting, Novel, Ethical, Relevant. The question is not feasible, because no single study can answer how all brands succeed across all markets. It is too broad, because it treats international markets as one block and ignores cultural differences. “Succeed” is undefined (sales? awareness?), there is no context (online or offline), and the likely answer (“know your consumers”) fails the “So what?” test.',
        'A rewrite: “Which factors explain differences in online sales of one sportswear brand between France and Japan?” It names a group, a concept and a setting, so it can be answered.',
      ],
      marking: [
        'Distinguishes objective (goal) from questions (what is answered) (2)',
        'States what FINER stands for (1)',
        'Applies at least three FINER criteria to the question with reasons (3)',
        'Gives an improved question that names group, concept and context (2)',
      ],
    },
    {
      id: 'e2',
      marks: 10,
      q: 'A professional club wants to know why fans stop attending matches. Write a research objective and two research questions. Show that they pass FINER and say which method each question suggests.',
      answer: [
        'Objective: understand why lapsed season-ticket holders stop attending matches.',
        'RQ1: What reasons do lapsed season-ticket holders give for not renewing? This suggests a qualitative method such as in-depth interviews, because the reasons are not yet known.',
        'RQ2: To what extent does the clash of kick-off times with working hours relate to non-renewal? This suggests a quantitative survey with a measured variable, because it asks “to what extent”.',
        'FINER: both are feasible (a defined group and a club list), interesting to the club, novel for this club, ethical if participation is voluntary and anonymous, and relevant because the answers could change ticket pricing or scheduling.',
        'The “So what?” test is passed because the club can act on the answer.',
      ],
      marking: [
        'A clear objective with a verb and a defined group (2)',
        'Two questions that use proper question words and name a group and concept (3)',
        'Links each question to a suitable method with a reason (3)',
        'Applies FINER, including “So what?” (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'List what a research proposal should contain and explain why it is written before the study starts.',
      answer: [
        'A proposal should contain the problem and objective, the research questions, a short literature review, the design and methods, what will be measured and why the measures are credible, the sample and data collection, and the ethics and timeline.',
        'It is written first because it shows the question is worth asking and can be answered, forces the researcher to plan sample, measures and ethics, and lets others judge and improve the plan before time and money are spent.',
      ],
      marking: [
        'Lists at least five parts of a proposal (3)',
        'Mentions measures, sample and ethics (1)',
        'Explains why it is done before the study (2)',
      ],
    },
  ],

  videos: [],
};
