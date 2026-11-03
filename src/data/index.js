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
