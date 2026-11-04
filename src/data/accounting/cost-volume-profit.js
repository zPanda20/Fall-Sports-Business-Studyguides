import {
  ironhawks as base,
  contributionMargin,
  contributionMarginRatio,
  unitsForProfit,
  profitAt,
  revenueAt,
  seasonCapacity,
  marginOfSafety,
  money,
  moneyM,
  num,
  pct,
} from '../../lib/cvp.js';

// ---- Ironhawks figures: computed, never typed by hand ----
const cm = contributionMargin(base); // 60
const cmr = contributionMarginRatio(base); // 66.7%
const beUnits = unitsForProfit(base); // 400,000
const beRevenue = revenueAt(base, beUnits); // $36,000,000
const capacity = seasonCapacity(base); // 738,000
const perGame = Math.ceil(beUnits / base.homeGames); // 9,757
const beShareOfSeats = beUnits / capacity; // 54.2%

const target6 = unitsForProfit(base, 6_000_000); // 500,000
const sold600 = 600_000;
const profit600 = profitAt(base, sold600); // $12,000,000
const mos600 = marginOfSafety(base, sold600); // 200,000 tickets, 33.3%

const target9 = unitsForProfit(base, 9_000_000); // 550,000
const target9Revenue = revenueAt(base, target9);
const target9Share = target9 / capacity;
const target9PerGame = Math.ceil(target9 / base.homeGames);

const rentUp = { ...base, fixed: base.fixed + 3_000_000 };
const priceDown = { ...base, price: 80 };
const costUp = { ...base, variable: base.variable + 5 };

// ---- Real example: Green Bay Packers, fiscal year ended 31 March 2025 ----
// Figures as reported by the team on 23 July 2025 (see the sources slide).
// The article gives changes, not totals, so only those are used.
export const packers = {
  profit: 83.7, // operating profit, $M
  profitPrev: 60.1,
  profitChange: 23.6,
  profitChangePct: 39.3,
  revenueChange: 64.9,
  revenueChangePct: 9.9,
  expenseChange: 41.3,
  expenseChangePct: 7.0,
  localChange: 34.6,
  localChangePct: 13.7,
  nationalChange: 30.3,
  nationalChangePct: 7.5,
};
const incremental = packers.profitChange / packers.revenueChange; // 36.4%

export const cvpFormulas = [
  { name: 'Contribution margin per unit', formula: 'Selling price − Variable cost per unit' },
  { name: 'Contribution margin ratio', formula: 'Contribution margin ÷ Selling price' },
  { name: 'Break-even units', formula: 'Fixed costs ÷ Contribution margin per unit' },
  { name: 'Break-even revenue', formula: 'Fixed costs ÷ Contribution margin ratio' },
  { name: 'Units for a target profit', formula: '(Fixed costs + Target profit) ÷ Contribution margin per unit' },
  { name: 'Margin of safety', formula: '(Actual sales − Break-even sales) ÷ Actual sales' },
];

export const cvpTopic = {
  id: 'cost-volume-profit',
  course: 'accounting',
  title: 'Cost behavior, break-even & CVP analysis',
  sessions: 'Sessions 14–15',
  reading: 'Syllabus reading: Ch. 16 and Ch. 20',
  minutes: 25,
  summary: 'How costs change with activity, and how to find the sales level where a team stops losing money.',
  formulas: cvpFormulas,

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big question',
      title: 'Break-even starts with one question',
      blocks: [
        { type: 'big', text: 'How many tickets do we have to sell before we **make money**?' },
        {
          type: 'p',
          text: '**Cost-volume-profit (CVP) analysis** answers that. It starts by sorting every cost into one of two kinds.',
        },
      ],
    },
    {
      kicker: 'Cost behavior',
      title: 'Two kinds of cost',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Fixed costs',
              text: 'Stay the same however many fans show up (within the normal range).',
              examples: ['Arena lease', 'Coaching staff', 'Insurance'],
            },
            {
              title: 'Variable costs',
              text: 'Rise with every ticket sold.',
              examples: ['Payment fee per ticket', 'Concession ingredients', 'Staff paid per event'],
            },
          ],
        },
        {
          type: 'p',
          text: '**Mixed costs** have both parts, like a phone plan: a base fee plus usage.',
        },
      ],
    },
    {
      kicker: 'The key number',
      title: 'Contribution margin',
      blocks: [
        { type: 'big', text: 'Each ticket **contributes** what is left after its own costs.' },
        {
          type: 'p',
          text: `A ${money(base.price)} ticket with ${money(base.variable)} of variable cost leaves **${money(cm)}**. That is its contribution margin.`,
        },
        {
          type: 'p',
          text: 'The first dollars pay the fixed costs. Once those are covered, the rest is profit.',
        },
      ],
    },
    {
      kicker: 'The target',
      title: 'The break-even point',
      blocks: [
        { type: 'big', text: 'Break-even is where **revenue equals total costs**. Profit is exactly zero.' },
        {
          type: 'callout',
          title: 'Break-even units',
          text: 'Fixed costs ÷ contribution margin per unit',
        },
        {
          type: 'p',
          text: 'Past that point, every extra ticket adds its full contribution margin to profit.',
        },
      ],
    },
    {
      kicker: 'Exam toolkit',
      title: 'Formulas to know',
      blocks: [{ type: 'formulas', items: cvpFormulas }],
    },
    {
      kicker: 'Watch out',
      title: 'Common traps',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Dividing fixed costs by the **price**. Use the **contribution margin**.',
            'Mixing totals and per-unit figures. Fixed costs are a season total; price and variable cost are per ticket.',
            'Rounding down. Always round break-even **up** to a whole unit.',
            'Forgetting the assumptions: constant price and variable cost per unit, and fixed costs that stay fixed only within the **relevant range**.',
          ],
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'Three shapes of cost',
      blocks: [
        { type: 'p', text: 'Plot total cost against activity and each type of cost has its own shape.' },
        {
          type: 'figure',
          src: 'acc-cvp-cost-behavior.png',
          alt: 'Three small graphs: a flat line for fixed cost, a rising line from zero for variable cost, and a rising line starting above zero for mixed cost',
          caption: 'Fixed, variable and mixed cost behavior.',
          need: 'Three small side-by-side graphs of total cost against activity: fixed (flat line), variable (straight line from zero) and mixed (straight line that starts above zero).',
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Fixed cost', def: 'A cost that stays the same in total as activity changes (within the relevant range). Example: arena lease.' },
    { term: 'Variable cost', def: 'A cost that changes in total in proportion to activity. The cost per unit stays the same. Example: payment fee per ticket.' },
    { term: 'Mixed cost', def: 'A cost with a fixed part and a variable part. Example: a stadium electricity bill with a base charge plus usage.' },
    { term: 'Contribution margin', def: 'Selling price per unit minus variable cost per unit. The amount each unit contributes toward fixed costs and profit.' },
    { term: 'Contribution margin ratio', def: 'Contribution margin divided by selling price, shown as a percentage. The share of each sales dollar left after variable costs.' },
    { term: 'Break-even point', def: 'The sales level where total revenue equals total costs and profit is zero.' },
    { term: 'Margin of safety', def: 'How far actual (or expected) sales are above break-even. It shows how much sales can fall before a loss appears.' },
    { term: 'Relevant range', def: 'The band of activity over which cost assumptions (fixed stays fixed, variable per unit stays constant) hold.' },
  ],
  cards: [
    { front: 'Formula: break-even units', back: 'Fixed costs ÷ contribution margin per unit.' },
    { front: 'Formula: units needed for a target profit', back: '(Fixed costs + target profit) ÷ contribution margin per unit.' },
    { front: 'Formula: margin of safety (%)', back: '(Actual sales − break-even sales) ÷ actual sales.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Green Bay Packers: when revenue grows and costs stay put',
    note: 'A real case with public numbers, as reported by the team for the year ended March 31, 2025.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The Packers, 2024–25',
        blocks: [
          {
            type: 'p',
            text: 'The Green Bay Packers, an NFL team, report their finances each year. In the year ended March 31, 2025, their **operating profit** (profit from running the team, before investment gains) jumped.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Operating profit', value: `$${packers.profit}M`, note: `up ${packers.profitChangePct}% from $${packers.profitPrev}M` },
              { label: 'Revenue', value: `+$${packers.revenueChange}M`, note: `up ${packers.revenueChangePct}%` },
              { label: 'Expenses', value: `+$${packers.expenseChange}M`, note: `up ${packers.expenseChangePct}%` },
            ],
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'What moved',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: `Local revenue +$${packers.localChange}M`,
                text: `Up ${packers.localChangePct}%, largely because the team hosted a ninth regular-season home game.`,
              },
              {
                title: `National revenue +$${packers.nationalChange}M`,
                text: `Up ${packers.nationalChangePct}%, tied to NFL broadcast contracts and streaming offerings.`,
              },
              {
                title: `Expenses +$${packers.expenseChange}M`,
                text: 'Driven mainly by team travel and depreciation from recent facility investments.',
              },
            ],
          },
        ],
      },
      {
        kicker: 'The CVP lens',
        title: 'Why profit grew faster than revenue',
        blocks: [
          {
            type: 'big',
            text: `Of the extra $${packers.revenueChange}M of revenue, **$${packers.profitChange}M reached profit**.`,
          },
          {
            type: 'p',
            text: `That is about **${Math.round(incremental * 100)} cents of every extra dollar** ($${packers.profitChange}M ÷ $${packers.revenueChange}M = ${pct(incremental)}). Costs rose, but not one-for-one, because much of a team's cost base (a stadium, its depreciation) does not grow with each extra game.`,
          },
          {
            type: 'callout',
            tone: 'warn',
            title: 'A fair warning',
            text: 'An illustration, not a textbook break-even calculation: the team publishes no fixed/variable split, and revenue covers more than tickets.',
          },
        ],
      },
      {
        kicker: 'Real example',
        title: 'Sources',
        blocks: [
          {
            type: 'sources',
            items: [
              {
                title: "Packers' finances staying in good shape (packers.com)",
                url: 'https://www.packers.com/news/packers-finances-staying-in-good-shape-2025',
                note: 'The team’s own report, published July 23, 2025. All figures on these slides come from it.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Ironhawks, a fictional basketball team',
    universe: 'ironhawks',
    slides: [
      {
        kicker: 'Meet the team',
        title: 'The Ironhawks and their numbers',
        blocks: [
          {
            type: 'p',
            text: `A fictional pro basketball team. The arena seats ${num(base.capacity)} and there are ${base.homeGames} home games, so the season has room for ${num(capacity)} tickets. We only look at tickets, to keep it clean. This is the ticket-only slice of a club with roughly $420M of total revenue, so these figures are far smaller than the full income statement in other topics.`,
          },
          {
            type: 'table',
            head: ['Item', 'Amount'],
            rows: [
              ['Revenue per ticket', money(base.price)],
              ['Variable cost per ticket', money(base.variable)],
              ['Contribution margin per ticket', `${money(cm)} (${pct(cmr)})`],
              ['Fixed costs per season', money(base.fixed)],
            ],
          },
        ],
      },
      {
        kicker: 'Step by step',
        title: 'Finding break-even',
        blocks: [
          {
            type: 'steps',
            items: [
              `**Tickets.** ${money(base.fixed)} ÷ ${money(cm)} = **${num(beUnits)} tickets**.`,
              `**Revenue.** ${num(beUnits)} × ${money(base.price)} = **${money(beRevenue)}**. Check: ${money(base.fixed)} ÷ ${pct(cmr)} gives the same.`,
              `**In plain terms.** About **${num(perGame)} fans per game**, or ${pct(beShareOfSeats)} of all seats. The arena must be just over half full to cover costs.`,
            ],
          },
        ],
      },
      {
        kicker: 'See it',
        title: 'The break-even chart',
        blocks: [{ type: 'chart', model: base }],
      },
      {
        kicker: 'Going further',
        title: 'Target profit and margin of safety',
        blocks: [
          {
            type: 'steps',
            items: [
              `**Target profit of ${moneyM(6_000_000)}.** (${money(base.fixed)} + ${money(6_000_000)}) ÷ ${money(cm)} = **${num(target6)} tickets**.`,
              `**Margin of safety.** Sell ${num(sold600)} tickets and profit is ${num(sold600)} × ${money(cm)} − ${money(base.fixed)} = **${money(profit600)}**. That is ${num(mos600.units)} tickets above break-even: **${pct(mos600.pct)}**. Sales could fall by a third before a loss.`,
            ],
          },
        ],
      },
      {
        kicker: 'What if',
        title: 'How break-even moves',
        blocks: [
          {
            type: 'table',
            head: ['Scenario', 'Margin', 'Break-even'],
            rows: [
              ['Base case', money(cm), num(beUnits)],
              [`Rent up ${moneyM(3_000_000)}`, money(contributionMargin(rentUp)), num(unitsForProfit(rentUp))],
              ['Price down to $80', money(contributionMargin(priceDown)), num(unitsForProfit(priceDown))],
              ['Variable cost up $5', money(contributionMargin(costUp)), num(unitsForProfit(costUp))],
            ],
          },
          {
            type: 'callout',
            title: 'The pattern',
            text: 'Higher fixed costs raise break-even without changing the margin. A lower price or higher variable cost shrinks the margin, so each ticket does less work.',
          },
          {
            type: 'bars',
            title: 'Break-even tickets by scenario',
            items: [
              { label: 'Price down to $80', value: unitsForProfit(priceDown) },
              { label: 'Rent up $3M', value: unitsForProfit(rentUp) },
              { label: 'Variable cost up $5', value: unitsForProfit(costUp) },
              { label: 'Base case', value: beUnits },
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
      q: 'Which of these is most clearly a variable cost for the Ironhawks?',
      options: ['Arena lease', 'Head coach salary', 'Payment-processing fee on each ticket sold', 'Annual arena insurance premium'],
      answer: 2,
      explanation:
        'A payment fee is charged per ticket, so the total rises with every ticket sold. The lease, salary and insurance stay the same however many fans attend (within the relevant range).',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The Ironhawks sell tickets at $90 with $30 of variable cost per ticket. What is the contribution margin per ticket?',
      options: [money(cm), money(base.price), money(base.variable), money(base.price + base.variable)],
      answer: 0,
      explanation: `Contribution margin = price − variable cost = ${money(base.price)} − ${money(base.variable)} = ${money(cm)}.`,
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: `Fixed costs are ${money(base.fixed)} for the season. How many tickets must the Ironhawks sell to break even?`,
      options: [num(beUnits), num(Math.round(base.fixed / base.price)), num(base.fixed / base.variable), num(capacity)],
      answer: 0,
      explanation: `Break-even = ${money(base.fixed)} ÷ ${money(cm)} = ${num(beUnits)}. Dividing by the price (${num(Math.round(base.fixed / base.price))}) ignores variable costs, and dividing by the variable cost alone (${num(base.fixed / base.variable)}) uses the wrong figure. ${num(capacity)} is simply the arena's season capacity.`,
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: `Arena rent rises by ${moneyM(3_000_000)}, taking fixed costs to ${money(rentUp.fixed)}. Prices and variable costs stay the same. What is the new break-even in tickets?`,
      options: [num(unitsForProfit(rentUp)), num(beUnits), num(Math.round(rentUp.fixed / rentUp.price)), num(rentUp.fixed / rentUp.variable)],
      answer: 0,
      explanation: `${money(rentUp.fixed)} ÷ ${money(cm)} = ${num(unitsForProfit(rentUp))}. The contribution margin is unchanged, so break-even rises in proportion to fixed costs.`,
      review: { section: 'sports', slide: 4 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: `The Ironhawks sell ${num(sold600)} tickets. Break-even is ${num(beUnits)}. What is the margin of safety as a percentage of sales?`,
      options: [pct(mos600.pct), pct(beUnits / sold600), '40.0%', '20.0%'],
      answer: 0,
      explanation: `(${num(sold600)} − ${num(beUnits)}) ÷ ${num(sold600)} = ${pct(mos600.pct)}. The ${pct(beUnits / sold600)} option is break-even as a share of sales, which is the part that is not "safety".`,
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q6',
      type: 'open',
      q: `Exercise. The Ironhawks want a ${moneyM(9_000_000)} profit next season with the same price and costs. (a) How many tickets must they sell? (b) What ticket revenue is that? (c) Is it realistic given a season capacity of ${num(capacity)}?`,
      answer: [
        `**(a)** (${money(base.fixed)} + ${money(9_000_000)}) ÷ ${money(cm)} = **${num(target9)} tickets**.`,
        `**(b)** ${num(target9)} × ${money(base.price)} = **${money(target9Revenue)}**.`,
        `**(c)** ${num(target9)} ÷ ${num(capacity)} = **${pct(target9Share)}** of capacity, about ${num(target9PerGame)} fans per game. Realistic for a team that already fills most of the arena, but it leaves little room if attendance dips.`,
      ],
      review: { section: 'sports', slide: 3 },
    },
  ],

  // ------------------------------------------------------------------ exam-level questions
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: `The Ironhawks’ ticket business: price ${money(base.price)} per ticket, variable cost ${money(base.variable)} per ticket, fixed costs ${money(base.fixed)} a season. (a) Find the contribution margin per ticket and the contribution margin ratio. (b) Find break-even in tickets and in revenue. (c) How many tickets give a ${moneyM(6_000_000)} profit? (d) If ${num(sold600)} tickets are sold, find the profit and the margin of safety as a percentage of sales.`,
      answer: [
        `**(a)** ${money(base.price)} − ${money(base.variable)} = **${money(cm)}** per ticket. Ratio = ${money(cm)} ÷ ${money(base.price)} = **${pct(cmr)}**.`,
        `**(b)** ${money(base.fixed)} ÷ ${money(cm)} = **${num(beUnits)} tickets**. Revenue = ${num(beUnits)} × ${money(base.price)} = **${money(beRevenue)}**.`,
        `**(c)** (${money(base.fixed)} + ${money(6_000_000)}) ÷ ${money(cm)} = **${num(target6)} tickets**.`,
        `**(d)** Profit = ${num(sold600)} × ${money(cm)} − ${money(base.fixed)} = **${money(profit600)}**. Margin of safety = (${num(sold600)} − ${num(beUnits)}) ÷ ${num(sold600)} = **${pct(mos600.pct)}**.`,
      ],
      marking: [
        `Contribution margin of ${money(cm)} (1)`,
        `Contribution margin ratio of ${pct(cmr)} (1)`,
        `Break-even of ${num(beUnits)} tickets with the formula (2)`,
        `Break-even revenue of ${money(beRevenue)} (1)`,
        `Target-profit tickets of ${num(target6)} (2)`,
        `Profit of ${money(profit600)} at ${num(sold600)} tickets (1)`,
        `Margin of safety of ${pct(mos600.pct)} (2)`,
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'Start from the base case in the previous question. Find the new break-even in tickets if (a) arena rent rises by $3M, (b) the ticket price falls to $80, (c) variable cost rises by $5 per ticket. (d) Which change pushes break-even up the most, and why?',
      answer: [
        `**(a)** Fixed costs become ${money(rentUp.fixed)}. Margin stays ${money(cm)}. Break-even = ${money(rentUp.fixed)} ÷ ${money(cm)} = **${num(unitsForProfit(rentUp))}**.`,
        `**(b)** Margin becomes $80 − ${money(base.variable)} = ${money(contributionMargin(priceDown))}. Break-even = ${money(base.fixed)} ÷ ${money(contributionMargin(priceDown))} = **${num(unitsForProfit(priceDown))}**.`,
        `**(c)** Margin becomes ${money(base.price)} − ${money(costUp.variable)} = ${money(contributionMargin(costUp))}. Break-even = ${money(base.fixed)} ÷ ${money(contributionMargin(costUp))} = ${(base.fixed / contributionMargin(costUp)).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}, rounded up to **${num(unitsForProfit(costUp))}** because you cannot sell part of a ticket.`,
        `**(d)** The **price cut** (${num(unitsForProfit(priceDown))}). It shrinks the margin on every ticket, from ${money(cm)} to ${money(contributionMargin(priceDown))}, while a rent rise only spreads a bigger fixed cost over the same margin.`,
      ],
      marking: [
        `Rent scenario: ${num(unitsForProfit(rentUp))} (2)`,
        `Price scenario: ${num(unitsForProfit(priceDown))} (2)`,
        `Variable-cost scenario: ${num(unitsForProfit(costUp))}, rounded up (2)`,
        'Identifies the price cut and explains the lower margin per ticket (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'Classify each Ironhawks cost as fixed, variable or mixed: (i) the arena lease, (ii) a payment-processing fee on each ticket sold, (iii) the head coach’s salary, (iv) arena electricity with a monthly base charge plus a charge for usage. Then explain in one or two sentences what the relevant range is and why it matters.',
      answer: [
        '**(i)** Fixed. **(ii)** Variable. **(iii)** Fixed. **(iv)** Mixed: part fixed (the base charge) and part variable (usage).',
        'The **relevant range** is the span of activity over which the assumed cost behavior holds. Outside it, fixed costs can step up (for example a second arena) and unit costs can change, so break-even results are only reliable within the range.',
      ],
      marking: [
        'Each of the four costs classified correctly, one mark each (4)',
        'Defines the relevant range (1)',
        'Explains why results are only reliable inside it (1)',
      ],
    },
  ],

  videos: [
    {
      title: 'Break-even Analysis Explained with Charts in 9 minutes',
      channel: 'Leaders Talk – ThinkEduca',
      url: 'https://www.youtube.com/watch?v=YprkwmZFaIw',
      length: '9:23',
      note: 'A visual walk-through of how the break-even chart is built.',
    },
    {
      title: 'Contribution margin, contribution margin %, break-even point in units, & break-even point in sales $',
      channel: 'Accounting Instruction, Help, & How To',
      url: 'https://www.youtube.com/watch?v=c32eG9dmnxc',
      note: 'Worked examples for each of the main formulas.',
    },
  ],
  videoSearch: 'cost volume profit analysis break-even contribution margin',
};
