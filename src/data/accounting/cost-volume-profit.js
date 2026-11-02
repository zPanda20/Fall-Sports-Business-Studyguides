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

// ---- All figures are computed, never typed by hand ----
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

export const cvpTopic = {
  id: 'cost-volume-profit',
  course: 'accounting',
  title: 'Cost behavior, break-even & CVP analysis',
  sessions: 'Sessions 14–15',
  reading: 'Syllabus reading: Ch. 16 and Ch. 20',
  minutes: 25,
  summary:
    'How costs change with activity, and how to find the sales level where a team stops losing money.',

  simple: [
    'Some costs stay put no matter how many fans show up. Others rise with every fan. **Cost-volume-profit (CVP) analysis** uses that split to answer one practical question: how much do we need to sell before we make money?',
    '**Fixed costs** do not change with volume in the short run: arena rent, player salaries, the coaching staff. **Variable costs** move in step with volume: payment fees on each ticket, the ingredients in each hot dog, staff paid per event. A third type, **mixed costs**, has both parts, like a phone plan with a base fee plus usage.',
    'Every ticket sold leaves some money behind after its own variable costs are paid. That leftover is the **contribution margin**. It contributes first to covering fixed costs and, once those are covered, to profit.',
    'The **break-even point** is where total revenue equals total costs, so profit is exactly zero. Past it, every extra ticket adds its full contribution margin to profit.',
  ],

  formulas: [
    {
      name: 'Contribution margin per unit',
      formula: 'Selling price − Variable cost per unit',
    },
    {
      name: 'Contribution margin ratio',
      formula: 'Contribution margin ÷ Selling price',
    },
    {
      name: 'Break-even units',
      formula: 'Fixed costs ÷ Contribution margin per unit',
    },
    {
      name: 'Break-even revenue',
      formula: 'Fixed costs ÷ Contribution margin ratio',
    },
    {
      name: 'Units for a target profit',
      formula: '(Fixed costs + Target profit) ÷ Contribution margin per unit',
    },
    {
      name: 'Margin of safety',
      formula: '(Actual sales − Break-even sales) ÷ Actual sales',
    },
  ],

  pitfalls: [
    'Dividing fixed costs by the **price** instead of the **contribution margin**. Price ignores the variable cost each unit carries.',
    'Mixing totals and per-unit figures. Fixed costs are a season total; price and variable cost are per ticket.',
    'Forgetting to round **up**. If the answer is 400,000.2 tickets, you need 400,001 to actually break even.',
    'Forgetting the assumptions: constant price, constant variable cost per unit, and fixed costs that stay fixed only within a **relevant range** of activity.',
  ],

  terms: [
    {
      term: 'Fixed cost',
      def: 'A cost that stays the same in total as activity changes (within the relevant range). Example: arena lease.',
    },
    {
      term: 'Variable cost',
      def: 'A cost that changes in total in proportion to activity. The cost per unit stays the same. Example: payment fee per ticket.',
    },
    {
      term: 'Mixed cost',
      def: 'A cost with a fixed part and a variable part. Example: a stadium electricity bill with a base charge plus usage.',
    },
    {
      term: 'Contribution margin',
      def: 'Selling price per unit minus variable cost per unit. The amount each unit contributes toward fixed costs and profit.',
    },
    {
      term: 'Contribution margin ratio',
      def: 'Contribution margin divided by selling price, shown as a percentage. The share of each sales dollar left after variable costs.',
    },
    {
      term: 'Break-even point',
      def: 'The sales level where total revenue equals total costs and profit is zero.',
    },
    {
      term: 'Margin of safety',
      def: 'How far actual (or expected) sales are above break-even. It shows how much sales can fall before a loss appears.',
    },
    {
      term: 'Relevant range',
      def: 'The band of activity over which cost assumptions (fixed stays fixed, variable per unit stays constant) hold.',
    },
  ],

  cards: [
    {
      front: 'Formula: break-even units',
      back: 'Fixed costs ÷ contribution margin per unit.',
    },
    {
      front: 'Formula: units needed for a target profit',
      back: '(Fixed costs + target profit) ÷ contribution margin per unit.',
    },
    {
      front: 'Formula: margin of safety (%)',
      back: '(Actual sales − break-even sales) ÷ actual sales.',
    },
  ],

  example: {
    title: 'The Ironhawks, a fictional basketball team',
    universe: 'ironhawks',
    blocks: [
      {
        type: 'p',
        text: `The **Ironhawks** are a fictional professional basketball team. Their arena seats ${num(base.capacity)} and they play ${base.homeGames} home games, so the season has room for ${num(capacity)} tickets. To keep things clean, we only look at ticket sales. Real teams also earn from sponsors, merchandise and broadcast deals, which a fuller analysis would add.`,
      },
      {
        type: 'table',
        caption: 'Ironhawks inputs',
        head: ['Item', 'Amount'],
        rows: [
          ['Average revenue per ticket', money(base.price)],
          ['Variable cost per ticket (payment fees, concession costs, game-day staff)', money(base.variable)],
          ['Contribution margin per ticket', money(cm)],
          ['Contribution margin ratio', pct(cmr)],
          ['Fixed costs per season (arena lease, salaries, staff)', money(base.fixed)],
        ],
      },
      {
        type: 'steps',
        title: 'Working it out',
        items: [
          `**Break-even tickets.** ${money(base.fixed)} ÷ ${money(cm)} = **${num(beUnits)} tickets**.`,
          `**Break-even revenue.** ${num(beUnits)} × ${money(base.price)} = **${money(beRevenue)}**. Check: ${money(base.fixed)} ÷ ${pct(cmr)} gives the same figure.`,
          `**In plain terms.** ${num(beUnits)} tickets over ${base.homeGames} games is about **${num(perGame)} fans per game**, or ${pct(beShareOfSeats)} of all seats. The team has to fill a bit more than half the arena just to cover its costs.`,
          `**Target profit of ${moneyM(6_000_000)}.** (${money(base.fixed)} + ${money(6_000_000)}) ÷ ${money(cm)} = **${num(target6)} tickets**.`,
          `**Margin of safety.** If the Ironhawks sell ${num(sold600)} tickets, profit is ${num(sold600)} × ${money(cm)} − ${money(base.fixed)} = **${money(profit600)}**. That is ${num(mos600.units)} tickets above break-even, a margin of safety of **${pct(mos600.pct)}**. Sales could fall by a third before the team loses money.`,
        ],
      },
      { type: 'chart', model: base },
      {
        type: 'table',
        caption: 'What-if: how break-even moves',
        head: ['Scenario', 'Contribution margin', 'Break-even tickets'],
        rows: [
          ['Base case', money(cm), num(beUnits)],
          [
            `Arena rent rises by ${moneyM(3_000_000)}`,
            money(contributionMargin(rentUp)),
            num(unitsForProfit(rentUp)),
          ],
          [
            'Average ticket price drops to $80',
            money(contributionMargin(priceDown)),
            num(unitsForProfit(priceDown)),
          ],
          [
            'Variable cost per ticket rises by $5',
            money(contributionMargin(costUp)),
            num(unitsForProfit(costUp)),
          ],
        ],
      },
      {
        type: 'callout',
        title: 'The pattern to remember',
        text: 'Higher fixed costs raise break-even without changing the contribution margin. A lower price or higher variable cost shrinks the contribution margin, so each ticket does less work and break-even rises too.',
      },
    ],
  },

  questions: [
    {
      id: 'q1',
      type: 'mcq',
      q: 'Which of these is most clearly a variable cost for the Ironhawks?',
      options: [
        'Arena lease',
        'Head coach salary',
        'Payment-processing fee on each ticket sold',
        'Annual arena insurance premium',
      ],
      answer: 2,
      explanation:
        'A payment fee is charged per ticket, so the total rises with every ticket sold. The lease, salary and insurance stay the same however many fans attend (within the relevant range).',
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The Ironhawks sell tickets at $90 with $30 of variable cost per ticket. What is the contribution margin per ticket?',
      options: [money(cm), money(base.price), money(base.variable), money(base.price + base.variable)],
      answer: 0,
      explanation: `Contribution margin = price − variable cost = ${money(base.price)} − ${money(base.variable)} = ${money(cm)}.`,
    },
    {
      id: 'q3',
      type: 'mcq',
      q: `Fixed costs are ${money(base.fixed)} for the season. How many tickets must the Ironhawks sell to break even?`,
      options: [
        num(beUnits),
        num(Math.round(base.fixed / base.price)),
        num(base.fixed / base.variable),
        num(capacity),
      ],
      answer: 0,
      explanation: `Break-even = ${money(base.fixed)} ÷ ${money(cm)} = ${num(beUnits)}. Dividing by the price (${num(Math.round(base.fixed / base.price))}) ignores variable costs, and dividing by the variable cost alone (${num(base.fixed / base.variable)}) uses the wrong figure. ${num(capacity)} is simply the arena's season capacity.`,
    },
    {
      id: 'q4',
      type: 'mcq',
      q: `Arena rent rises by ${moneyM(3_000_000)}, taking fixed costs to ${money(rentUp.fixed)}. Prices and variable costs stay the same. What is the new break-even in tickets?`,
      options: [
        num(unitsForProfit(rentUp)),
        num(beUnits),
        num(Math.round(rentUp.fixed / rentUp.price)),
        num(rentUp.fixed / rentUp.variable),
      ],
      answer: 0,
      explanation: `${money(rentUp.fixed)} ÷ ${money(cm)} = ${num(unitsForProfit(rentUp))}. The contribution margin is unchanged, so break-even rises in proportion to fixed costs.`,
    },
    {
      id: 'q5',
      type: 'mcq',
      q: `The Ironhawks sell ${num(sold600)} tickets. Break-even is ${num(beUnits)}. What is the margin of safety as a percentage of sales?`,
      options: [pct(mos600.pct), pct(beUnits / sold600), '40.0%', '20.0%'],
      answer: 0,
      explanation: `(${num(sold600)} − ${num(beUnits)}) ÷ ${num(sold600)} = ${pct(mos600.pct)}. The ${pct(beUnits / sold600)} option is break-even as a share of sales, which is the part that is not "safety".`,
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
      title:
        'Contribution margin, contribution margin %, break-even point in units, & break-even point in sales $',
      channel: 'Accounting Instruction, Help, & How To',
      url: 'https://www.youtube.com/watch?v=c32eG9dmnxc',
      note: 'Worked examples for each of the main formulas.',
    },
  ],
  videoSearch: 'cost volume profit analysis break-even contribution margin',
};
