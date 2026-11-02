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
      'Understand how firms win and keep an advantage: analyse the environment, choose a strategy, and put it into action.',
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
function slideText(slides = []) {
  const out = [];
  const walk = (v) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => k !== 'model' && k !== 'url' && walk(x));
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
