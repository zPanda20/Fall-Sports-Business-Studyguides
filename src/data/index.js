import { cvpTopic } from './accounting/cost-volume-profit.js';
import { accountingBasicsTopic } from './accounting/accounting-basics.js';
import { accountingProcessTopic } from './accounting/accounting-process.js';
import { statementsAndNotesTopic } from './accounting/statements-and-notes.js';
import { balanceSheetAssetsTopic } from './accounting/balance-sheet-assets.js';
import { balanceSheetLiabilitiesEquityTopic } from './accounting/balance-sheet-liabilities-equity.js';
import { whatIsStrategyTopic } from './strategy/what-is-strategy.js';
import { strategicLeadershipTopic } from './strategy/strategic-leadership.js';
import { pestelTopic } from './strategy/pestel.js';
import { fiveForcesTopic } from './strategy/five-forces.js';
import { internalAnalysisTopic } from './strategy/internal-analysis.js';
import { swotTopic } from './strategy/swot.js';
import { performanceBusinessModelsTopic } from './strategy/performance-business-models.js';

// ---------------------------------------------------------------------------
// To add a topic: write a content file like the two samples, import it here,
// and add it to `topics`. Its `id` must match a unit id in the outline below.
// Units without a matching topic show up as "coming soon".
// ---------------------------------------------------------------------------

export const topics = [
  accountingBasicsTopic,
  accountingProcessTopic,
  statementsAndNotesTopic,
  balanceSheetAssetsTopic,
  balanceSheetLiabilitiesEquityTopic,
  cvpTopic,
  whatIsStrategyTopic,
  strategicLeadershipTopic,
  pestelTopic,
  fiveForcesTopic,
  internalAnalysisTopic,
  swotTopic,
  performanceBusinessModelsTopic,
];

export const universes = {
  ironhawks: {
    name: 'The Ironhawks',
    blurb:
      'A fictional professional basketball team. One consistent club whose numbers carry through every Accounting topic.',
  },
  kestrel: {
    name: 'Kestrel Racing',
    blurb:
      'A fictional motorsport team in a made-up 10-team championship. One consistent industry for every Strategy topic.',
  },
};

export const courses = [
  {
    id: 'accounting',
    title: 'Accounting & Forecasting',
    short: 'Accounting',
    blurb:
      'Read financial statements, understand how the numbers are built, and use them to plan and decide.',
    universe: 'ironhawks',
    blocks: [
      {
        title: 'Foundations',
        units: [
          { id: 'accounting-basics', title: 'What is accounting? Concepts and principles', sessions: 'Session 1' },
          { id: 'accounting-process', title: 'The bookkeeping process and adjusting entries', sessions: 'Sessions 2–3' },
          { id: 'statements-and-notes', title: 'Financial statements and explanatory notes', sessions: 'Session 4' },
        ],
      },
      {
        title: 'The three statements',
        units: [
          { id: 'balance-sheet-assets', title: 'The balance sheet: assets', sessions: 'Sessions 5–7' },
          { id: 'balance-sheet-liabilities-equity', title: 'The balance sheet: liabilities and equity', sessions: 'Sessions 8–9' },
          { id: 'income-statement', title: 'The income statement', sessions: 'Session 10' },
          { id: 'cash-flow-statement', title: 'The cash flow statement', sessions: 'Session 11' },
        ],
      },
      {
        title: 'Analysis',
        units: [
          { id: 'statement-analysis', title: 'Financial statement analysis and ratios', sessions: 'Sessions 12–13' },
        ],
      },
      {
        title: 'Managerial accounting and planning',
        units: [
          { id: 'cost-volume-profit', title: 'Cost behavior, break-even and CVP analysis', sessions: 'Sessions 14–15' },
          { id: 'budgeting', title: 'Budgets: concepts and preparation', sessions: 'Sessions 16–17' },
          { id: 'accounting-wrap-up', title: 'Course wrap-up and exam preparation', sessions: 'Session 18' },
        ],
      },
    ],
  },
  {
    id: 'strategy',
    title: 'Business Strategy',
    short: 'Strategy',
    blurb:
      'Understand how firms win and keep an advantage: analyze the environment, choose a strategy, and put it into action.',
    universe: 'kestrel',
    blocks: [
      {
        title: 'Analysis',
        units: [
          { id: 'what-is-strategy', title: 'What is strategy?', sessions: 'Session 1' },
          { id: 'strategic-leadership', title: 'Strategic leadership', sessions: 'Session 2' },
          { id: 'pestel', title: 'The wider environment: PESTEL', sessions: 'Session 3' },
          { id: 'five-forces', title: "Porter's Five Forces & industry analysis", sessions: 'Session 3' },
          { id: 'internal-analysis', title: 'Internal analysis: resources, VRIO and dynamic capabilities', sessions: 'Session 4' },
          { id: 'swot', title: 'SWOT analysis', sessions: 'Session 4' },
          { id: 'genai-decisions', title: 'Using generative AI in strategic decisions', sessions: 'Session 5 (async)' },
        ],
      },
      {
        title: 'Formulation',
        units: [
          { id: 'performance-business-models', title: 'Competitive advantage, firm performance and business models', sessions: 'Session 6' },
          { id: 'vertical-integration-diversification', title: 'Corporate strategy: vertical integration and diversification', sessions: 'Session 7' },
          { id: 'alliances-mergers', title: 'Corporate strategy: alliances, mergers and acquisitions', sessions: 'Session 8' },
          { id: 'global-strategy', title: 'Global strategy: competing around the world', sessions: 'Session 9' },
          { id: 'case-studies', title: 'Case studies: the F1 cases', sessions: 'Session 10 (async)' },
        ],
      },
      {
        title: 'Implementation',
        units: [
          { id: 'organizational-design', title: 'Organizational design: structure, culture and control', sessions: 'Session 11' },
          { id: 'governance-ethics', title: 'Corporate governance, business ethics and business models', sessions: 'Session 12' },
        ],
      },
      {
        title: 'Strategy and AI, and the group project',
        units: [
          { id: 'strategy-age-of-ai', title: 'Strategy in the age of AI', sessions: 'Session 13' },
          { id: 'group-project', title: 'Group project: putting the frameworks together', sessions: 'Session 14' },
        ],
      },
    ],
  },
  {
    id: 'market-research',
    tag: 'Coming soon',
    syllabusDate: '15 September 2026',
    title: 'Market Research',
    short: 'Market Research',
    blurb:
      'Turn a business question into evidence: choose between qualitative and quantitative methods, collect and analyze data, and explain what it means for decisions.',
    overview: [
      { label: 'Format', text: '12 in-class sessions (24 hours) plus 2 asynchronous activities (6 hours).' },
      { label: 'Continuous assessment (60%)', text: 'Class participation and engagement (40%) and a group project (60%). The group picks one option: a quantitative project built in Qualtrics and analyzed statistically, or a qualitative project using interviews, AI-generated data and coding in Taguette.' },
      { label: 'Final exam (40%)', text: 'Individual, in the official exam week. Closed book, no AI. Multiple-choice and open-ended questions.' },
      { label: 'Tools you will meet', text: 'Zotero, Qualtrics, Jamovi and Taguette.' },
    ],
    blocks: [
      {
        title: 'Foundations of research',
        units: [
          {
            id: 'why-market-research',
            title: 'Why market research matters and the research process',
            sessions: 'Session 1',
            covers: [
              'General introduction and why market research matters',
              'Fundamental concepts: representativeness, significance, correlation and causality',
              'The research process',
            ],
          },
          {
            id: 'methodology-paradigms',
            title: 'Methodology, methods and research paradigms',
            sessions: 'Session 2',
            covers: [
              'Methodology, method and research paradigm',
              'Qualitative vs quantitative research',
              'Mixed methods',
            ],
          },
          {
            id: 'research-question-proposal',
            title: 'The research objective, question and proposal',
            sessions: 'Session 3',
            covers: ['The research objective', 'The research question', 'The research proposal'],
          },
          {
            id: 'literature-review',
            title: 'Finding literature and writing a literature review',
            sessions: 'Session 4',
            covers: [
              'Finding literature and conducting a literature review',
              'Using Zotero',
              'Reviewing literature with the help of AI',
            ],
          },
          {
            id: 'measurement-validity',
            title: 'Measuring and collecting data: objectivity, validity and reliability',
            sessions: 'Session 5',
            covers: ['Measuring and collecting data', 'Objectivity, validity and reliability'],
          },
        ],
      },
      {
        title: 'Quantitative research',
        units: [
          {
            id: 'quantitative-overview',
            title: 'Quantitative research, ethics, secondary data and competitor analysis',
            sessions: 'Session 6',
            covers: [
              'Quantitative research: an overview',
              'Ethical considerations',
              'Secondary quantitative data',
              'Competitor analysis',
            ],
          },
          {
            id: 'sampling',
            title: 'Sampling: techniques, criteria, size and recruitment',
            sessions: 'Session 7',
            covers: [
              'Sampling fundamentals',
              'Sampling techniques, criteria and size considerations',
              'Recruitment channels',
            ],
          },
          {
            id: 'applied-quantitative',
            title: 'Applied quantitative market research',
            sessions: 'Async A (before Session 8 starts)',
            covers: [
              'Turning a business question into measurable variables and survey items',
              'Synthetic data and basic descriptive evidence',
              'Using quantitative findings for managerial decisions',
              'Judging whether the quantitative project path suits you',
            ],
          },
          {
            id: 'questionnaire-design',
            title: 'Questionnaire design and online surveys',
            sessions: 'Session 8',
            covers: [
              'Principles of questionnaire design',
              'Unbiased question formulation',
              'Types of questions and measurement scales',
              'Online survey tools, with an introduction to Qualtrics',
            ],
          },
          {
            id: 'data-cleaning-descriptives',
            title: 'Data cleaning and descriptive statistics',
            sessions: 'Session 9',
            covers: [
              'Data export and cleaning procedures',
              'Descriptive statistics',
              'Jamovi for quantitative data analysis',
            ],
          },
          {
            id: 'significance-anova-regression',
            title: 'Tests of significance, ANOVA and regression',
            sessions: 'Session 10',
            covers: ['Tests of significance', 'Analysis of variance (ANOVA)', 'Regression', 'Practice in Jamovi'],
          },
        ],
      },
      {
        title: 'Qualitative research',
        units: [
          {
            id: 'qualitative-overview',
            title: 'Qualitative research: focus groups, projective techniques, ethnography and netnography',
            sessions: 'Session 11',
            covers: [
              'Qualitative research: an overview',
              'Focus groups',
              'Projective techniques',
              'Ethnography and netnography',
              'Introduction to Taguette',
            ],
          },
          {
            id: 'interviews-coding',
            title: 'Semi-structured interviews and coding with AI support',
            sessions: 'Session 12',
            covers: ['Semi-structured interviews', 'Coding with the support of AI', 'Practice in Taguette'],
          },
          {
            id: 'applied-qualitative',
            title: 'Applied qualitative market research',
            sessions: 'Async B (10 days after Session 12)',
            covers: [
              'Investigating meanings, experiences, perceptions and stakeholder views',
              'Qualitative instruments and synthetic data',
              'Basic coding and theme identification',
              'Turning qualitative evidence into managerial insights',
              'Judging whether the qualitative project path suits you',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sport-governance',
    tag: 'Coming soon',
    title: 'International Sports Governance',
    short: 'Sport Governance',
    syllabusDate: '5 September 2026',
    blurb:
      'Understand how international sport is governed: who holds power, how integrity is protected, and how to reason through ethical dilemmas.',
    overview: [
      { label: 'Format', text: '12 in-class sessions (24 hours) plus 6 asynchronous hours, including 2 asynchronous activities.' },
      { label: 'Two parts', text: 'Sessions 1 to 8 cover governance structures, politics and integrity. Sessions 9 to 12, from a second instructor, cover morality and ethical dilemmas.' },
      { label: 'Continuous assessment (60%)', text: 'Class participation and engagement (40%) and an evaluation (60%), averaged across both instructors. Part 1: from session 2, each class has a governance question researched beforehand with an AI tool. At least 5 students per session are drawn at random to present, graded on research, verification, use of course frameworks and critical reflection, with a one-page write-up. Part 2: multiple-choice questions on Boostcamp after each of the second instructor\u2019s 5 sessions.' },
      { label: 'Final assessment (40%)', text: 'A group reflective journal (max 5 pages) on a major governance failure in recent sport: the main threats to integrity (competition, individual, institutional), why it was a governance failure, and which good-governance measures would have prevented it. Written together in one Word file with track changes. AI may be used for research and drafting if prompts are logged in an appendix and every factual claim can be checked against a named source. Send your topic by email for validation first.' },
      { label: 'Key document', text: 'The Olympic Charter (linked in the syllabus).' },
    ],
    blocks: [
      {
        title: 'How sport is governed (sessions 1 to 4)',
        units: [
          {
            id: 'governance-levels',
            title: 'What is international sports governance? The three levels',
            sessions: 'Session 1',
            covers: ['International sports governance: a definition', 'The three levels of governance', 'The need to improve the regulation of international sport'],
          },
          {
            id: 'systemic-governance-stakeholders',
            title: 'Systemic governance: stakeholders, roles and responsibilities',
            sessions: 'Session 2',
            covers: [
              'Systemic governance',
              'Stakeholders\u2019 roles and responsibilities',
              'AI exercise: Russian and Belarusian athletes and the Olympic Charter, double standards between countries, and political neutrality',
            ],
          },
          {
            id: 'olympic-vs-non-olympic',
            title: 'Olympic and non-Olympic sports, US and private leagues',
            sessions: 'Session 3',
            covers: [
              'Olympic sports vs. non-Olympic sports',
              'The specificities of US and private leagues',
              'AI exercise: a player-association lawsuit against the tennis governing bodies, or the Club World Cup calendar lawsuit',
            ],
          },
          {
            id: 'organizational-governance',
            title: 'Organizational governance: standards, the board and ethics',
            sessions: 'Session 4',
            covers: [
              'Organizational governance',
              'Regulatory standards',
              'The board\u2019s activity',
              'Ethical standards',
              'AI exercise: an independent review of a sports federation',
            ],
          },
          {
            id: 'fifa-reforms',
            title: 'Governance reforms at FIFA after FIFAGate',
            sessions: 'Async 1 (after Session 4)',
            covers: [
              'Governance reforms at FIFA after FIFAGate: actual reforms or a PR exercise?',
              'Reading articles and answering questions on the forum',
            ],
          },
        ],
      },
      {
        title: 'Politics, integrity and people (sessions 5 to 8)',
        units: [
          {
            id: 'political-governance-autonomy',
            title: 'Political governance and the autonomy of sport',
            sessions: 'Session 5',
            covers: [
              'Political governance',
              'The concept of sports\u2019 autonomy',
              'AI exercise: political neutrality, government intervention in a federation, and whether autonomy should depend on good governance',
            ],
          },
          {
            id: 'competitive-balance-integrity',
            title: 'Competitive balance and the three dimensions of integrity',
            sessions: 'Session 6',
            covers: [
              'Competitive balance',
              'The three dimensions of integrity in sports',
              'AI exercise: tanking and the reverse draft, Champions League revenue distribution, or transfer of allegiance in rugby and athletics',
            ],
          },
          {
            id: 'athletes-rights-safeguarding',
            title: 'Athletes\u2019 human rights and safeguarding in sport',
            sessions: 'Session 7',
            covers: [
              'Athletes\u2019 human rights',
              'Safeguarding in sport',
              'AI exercise: sanctions for political displays compared across cases, against Fundamental Principle 4',
            ],
          },
          {
            id: 'governance-review',
            title: 'Course review and exam preparation',
            sessions: 'Session 8',
            covers: ['Review of Sessions 1 to 7', 'Preparing questions for the group work and final assessment'],
          },
        ],
      },
      {
        title: 'Ethics in sport (sessions 9 to 12)',
        units: [
          {
            id: 'ethics-morality-sport',
            title: 'What are morality and ethics in sport?',
            sessions: 'Session 9',
            covers: ['Morality and ethics in sport', 'Reading, with questions on Boostcamp: ethics, integrity and well-being in elite sport'],
          },
          {
            id: 'ethical-decision-models',
            title: 'Major models of ethical decision making',
            sessions: 'Session 10',
            covers: ['Major models of ethical decision making', 'Reading, with questions on Boostcamp: legal and moral pluralism in a Nordic sports model'],
          },
          {
            id: 'sustainability-ethics',
            title: 'Sustainability and ethics in sport',
            sessions: 'Session 11',
            covers: ['Sustainability and ethics in sport', 'Reading, with questions on Boostcamp: environmental sustainability and sport management education'],
          },
          {
            id: 'hoop-dreams',
            title: 'Youth sport, inequality and ethics: the film Hoop Dreams',
            sessions: 'Async 2 (before Session 12)',
            covers: [
              'Are talented young athletes exploited, or is it a fair price for scholarships and education?',
              'How race and socioeconomic status affect opportunities in sport',
              'Pressure to perform and young athletes\u2019 mental health',
              'Ethical responsibilities of coaches, schools and families',
              'Young athletes as commodities or as individuals with long-term potential',
            ],
          },
          {
            id: 'ethics-in-practice',
            title: 'Moral and ethics in practice: case studies',
            sessions: 'Session 12',
            covers: ['Moral and ethics in practice', 'Case studies discussion', 'Reading: the case studies available on Boostcamp'],
          },
        ],
      },
      {
        title: 'Final assessment',
        units: [
          {
            id: 'governance-failure-assessment',
            title: 'Governance failure and threats to sport\u2019s integrity',
            sessions: 'Final assessment (group work)',
            covers: [
              'Choosing one example of a governance failure in recent sports history',
              'Identifying the main threats to integrity: competition, individual and institutional',
              'Explaining why it was a failure of governance',
              'Suggesting measures based on the principles of good governance',
              'Observations, integration of theory and ideas, and critique',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sport-management',
    tag: 'Coming soon',
    title: 'Foundations of Sport Management',
    short: 'Sport Management',
    syllabusDate: '24 August 2026',
    blurb:
      'See sport as an industry: its ecosystem and stakeholders, fan engagement, marketing, media rights, sponsorship, athlete income and analytics.',
    overview: [
      { label: 'Format', text: '12 in-class sessions (24 hours) plus 6 asynchronous activities: readings and videos to complete after class.' },
      { label: 'Continuous assessment (60%)', text: 'Class participation and engagement (40%), including your contribution to the group work, and a group assignment (60%): a 4,000 to 5,000 word report that builds an evidence-based forecast of the global sports industry in 2035, using the Nielsen Sports 2025 Global Sports Report as the baseline. Due 13 November by 17:00. AI is used to propose new ideas on the future of fan engagement and sport marketing, with your own reasoning.' },
      { label: 'Final exam (40%)', text: 'A 2-hour sitting exam in the week of 10 to 19 December. Multiple-choice and essay questions. Closed book, no AI.' },
    ],
    blocks: [
      {
        title: 'The industry and its fans',
        units: [
          {
            id: 'sport-mgmt-intro',
            title: 'Introduction to Foundations of Sport Management',
            sessions: 'Session 1',
            covers: ['Course overview', 'The global significance of sport', 'Career opportunities in the sporting industry'],
          },
          {
            id: 'sport-industry-ecosystem',
            title: 'The sporting industry and the sport business ecosystem',
            sessions: 'Session 2',
            covers: [
              'Sport as a business and the scope of the sporting industry',
              'Sport management and its role across the industry',
              'The sport business ecosystem and key stakeholders',
              'Sport fandom and how it drives the ecosystem',
            ],
          },
          {
            id: 'stakeholder-fan-engagement',
            title: 'Stakeholder and fan engagement in sport',
            sessions: 'Session 3',
            covers: [
              'The many areas and rich landscape of sports engagement',
              'How athletes drive sport engagement',
              'Immersive fan engagement',
              'Niche and emerging sports',
              'Async activity 1: review the engagement platforms studied and prepare a discussion on the future of fan engagement',
            ],
          },
        ],
      },
      {
        title: 'Responsibility and marketing',
        units: [
          {
            id: 'social-responsibility-marketing-intro',
            title: 'Social responsibility, sport engagement and an introduction to sports marketing',
            sessions: 'Session 4',
            covers: [
              'How social responsibility is affecting sport engagement',
              'An introduction to sports marketing: key marketing concepts and their application to sport',
            ],
          },
          {
            id: 'sports-marketing',
            title: 'Sports marketing and digital fan engagement',
            sessions: 'Session 5',
            covers: [
              'The promotion of sports teams, leagues and associations',
              'How digital marketing is affecting fan engagement',
              'Sports marketing trends',
              'Async activity 2: watch \u201cCelebrating 10 Years of This Girl Can!\u201d and research other sport participation campaigns',
            ],
          },
        ],
      },
      {
        title: 'Media rights and sponsorship',
        units: [
          {
            id: 'sports-media-rights',
            title: 'Sports media, broadcast rights and consumption',
            sessions: 'Session 6',
            covers: [
              'An introduction to sports media rights and content distribution',
              'Distribution and consumption of sport content, with a focus on new media',
              'Async activity 3: review sports media rights and look for practical examples during the Sportel experience',
            ],
          },
          {
            id: 'media-and-sponsorship-intro',
            title: 'Sports media (continued) and an introduction to sponsorship',
            sessions: 'Session 7',
            covers: [
              'Guest speaker on media rights',
              'The scope of sports sponsorship',
              'Async activity 4: read about sponsorship and sports marketing in Formula 1 and MotoGP',
            ],
          },
          {
            id: 'sports-sponsorship',
            title: 'Sponsorship of teams and leagues, and activation',
            sessions: 'Session 8',
            covers: [
              'Sponsorship of teams and leagues',
              'Why activation is critical to achieving sponsorship goals',
              'Case study: the Guinness sponsorship of the Six Nations',
            ],
          },
          {
            id: 'athlete-sponsorship-endorsement',
            title: 'Sponsorship of athletes and endorsements',
            sessions: 'Session 9',
            covers: [
              'How athletes help drive the value of a brand while earning significant income',
              'Athlete endorsements',
              'Case studies: Oracle and Red Bull, and Arsenal and Emirates',
            ],
          },
          {
            id: 'sponsorship-trends',
            title: 'Trends in sports sponsorship',
            sessions: 'Session 10',
            covers: [
              'Current trends in sport sponsorship',
              'The rise of women\u2019s sport and its growing appeal to marketers',
              'The rapid increase in cryptocurrency and AI sponsorships and their impact',
              'The role of luxury goods in sport',
              'Async activity 5: read about the world\u2019s highest-paid athletes and prepare for a debate on male and female prize money',
            ],
          },
        ],
      },
      {
        title: 'Athletes, analytics and review',
        units: [
          {
            id: 'athlete-income',
            title: 'Sources of athlete income and the male vs female gap',
            sessions: 'Session 11',
            covers: [
              'Sources of athlete income, from prize money and contracts to government funding',
              'Discrepancies in earnings between male and female athletes',
              'Ways in which the gap may be bridged',
              'The gender pay gap in sports',
            ],
          },
          {
            id: 'sport-analytics-review',
            title: 'Introduction to sport analytics and review of the semester',
            sessions: 'Session 12',
            covers: [
              'Off-field business analytics and their use in sport',
              'Review of the semester and preparation for the final exam',
              'Async activity 6: watch \u201cThe Rise of Sports Data Analytics\u201d',
            ],
          },
        ],
      },
    ],
  },
];

// ---- helpers ----
export const getCourse = (id) => courses.find((c) => c.id === id);
export const getTopic = (id) => topics.find((t) => t.id === id);
export const topicsForCourse = (courseId) => topics.filter((t) => t.course === courseId);

export function allUnits(course) {
  return course.blocks.flatMap((b) => b.units.map((u) => ({ ...u, block: b.title, course: course.id })));
}

export function cardsForCourse(courseId, topicId) {
  const list = [];
  for (const t of topicsForCourse(courseId)) {
    if (topicId && t.id !== topicId) continue;
    t.terms.forEach((term, i) =>
      list.push({ id: `${t.id}:term:${i}`, topicId: t.id, topicTitle: t.title, front: term.term, back: term.def, kind: 'Term' }),
    );
    (t.cards || []).forEach((c, i) =>
      list.push({ id: `${t.id}:card:${i}`, topicId: t.id, topicTitle: t.title, front: c.front, back: c.back, kind: 'Card' }),
    );
  }
  return list;
}

// Pull plain text out of slides so search can find words used in the explanations.
export function slideText(slides = []) {
  const out = [];
  const walk = (v) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => !['model', 'url', 'type', 'tone'].includes(k) && walk(x));
  };
  walk(slides);
  return out.join(' ').replace(/\*\*/g, '');
}

// Flat list used by search. Includes planned units so students can see what is on the way.
export function searchIndex() {
  const items = [];
  for (const course of courses) {
    for (const unit of allUnits(course)) {
      const topic = getTopic(unit.id);
      items.push({
        id: unit.id,
        course: course.id,
        courseShort: course.short,
        title: topic ? topic.title : unit.title,
        sessions: unit.sessions,
        available: Boolean(topic),
        text: [
          topic?.title ?? unit.title,
          ...(unit.covers ?? []),
          topic?.summary ?? '',
          ...(topic?.terms ?? []).flatMap((t) => [t.term, t.def]),
          ...(topic?.formulas ?? []).flatMap((f) => [f.name, f.formula]),
          slideText(topic?.plain),
          topic?.real ? `${topic.real.title} ${slideText(topic.real.slides)}` : '',
          topic?.sports ? `${topic.sports.title} ${slideText(topic.sports.slides)}` : '',
        ]
          .join(' ')
          .toLowerCase(),
        summary: topic?.summary ?? '',
        termNames: (topic?.terms ?? []).map((t) => t.term),
      });
    }
  }
  return items;
}
