// Accounting & Forecasting, Session 1: What is accounting? Concepts and principles.
// Built from the course slides for Chapters 1 and 2. All explanations are written fresh.
// Real-example figures: Manchester United plc, quarter ended 30 September 2025 (see sources slide).

export const accountingBasicsTopic = {
  id: 'accounting-basics',
  course: 'accounting',
  title: 'What is accounting? Concepts and principles',
  sessions: 'Session 1',
  reading: 'Course slides: Chapters 1 and 2',
  minutes: 30,
  summary:
    'Why businesses keep score, who reads the scoreboard, and the basic rules for building a balance sheet.',
  formulas: [
    { name: 'The accounting equation', formula: 'Assets = Liabilities + Owners’ equity' },
    { name: 'Owners’ equity', formula: 'Assets − Liabilities' },
    { name: 'Net income', formula: 'Revenues − Expenses' },
    { name: 'Change in cash', formula: 'Operating + Investing + Financing cash flows' },
  ],

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big idea',
      title: 'Accounting is for decisions',
      blocks: [
        { type: 'big', text: 'Accounting turns what happens in a business into numbers people can **decide with**.' },
        {
          type: 'steps',
          items: [
            '**Something happens.** A ticket is sold, a player is paid, a loan is taken.',
            '**Accounting records it** and sorts it into a system.',
            '**Reports come out.** Useful, summarized information.',
            '**People act.** They lend, invest, price tickets, cut costs or sign a player.',
          ],
        },
      ],
    },
    {
      kicker: 'Who is it for?',
      title: 'Three lenses on the same business',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Financial accounting',
              text: 'Reports to **outsiders**: investors, banks, regulators. Everyone gets the same general-purpose reports.',
            },
            {
              title: 'Management accounting',
              text: 'Information for **insiders**. It is tailored to a decision, such as a budget or a pricing choice.',
            },
            {
              title: 'Tax accounting',
              text: 'Figures prepared for **tax authorities**, following the tax rules.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Outsiders cannot ask for custom reports, so financial reports have to work for many readers at once.',
        },
      ],
    },
    {
      kicker: 'How it works',
      title: 'Record, classify, summarize',
      blocks: [
        {
          type: 'p',
          text: 'An **accounting system** is people, procedures, technology and records working together. It does three jobs.',
        },
        {
          type: 'columns',
          items: [
            { title: '1. Record', text: 'Capture the effect of each transaction.' },
            { title: '2. Classify', text: 'Group similar items so totals can be compared. All ticket sales go under one heading.' },
            { title: '3. Summarize', text: 'Turn the totals into reports a decision-maker can read.' },
          ],
        },
      ],
    },
    {
      kicker: 'Trust',
      title: 'Controls make the numbers believable',
      blocks: [
        {
          type: 'p',
          text: '**Internal control** gives **reasonable** assurance, not a guarantee, that reports are reliable, rules are followed and operations run well. It has five parts that work together.',
        },
        {
          type: 'bullets',
          items: [
            '**Control environment.** The culture and who is accountable. If leaders shrug at errors, everyone will.',
            '**Risk assessment.** Spot threats, judge them, decide how to respond.',
            '**Control activities.** The actual rules and checks.',
            '**Information and communication.** The right facts reach the right people in time.',
            '**Monitoring.** Keep checking and fix what is found.',
          ],
        },
        {
          type: 'columns',
          items: [
            { title: 'Preventive controls', text: 'Stop a problem before it happens.', examples: ['Approvals', 'Limits on who can access what', 'Splitting duties between people'] },
            { title: 'Detective controls', text: 'Catch a problem after it happens.', examples: ['Reconciliations', 'Reviews', 'Exception reports'] },
          ],
        },
      ],
    },
    {
      kicker: 'The readers',
      title: 'Who reads financial reports, and why',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Creditors** want to know the business can repay interest and principal.',
            '**Investors** want to judge value, returns and dividends.',
            '**Others too:** trading partners, employees, regulators and the public.',
          ],
        },
        {
          type: 'callout',
          title: 'Limits to remember',
          items: [
            'The reports are **historical**. They describe a finished period.',
            'They are **general purpose**, not built for one reader.',
            'They rely on **estimates and judgment**.',
            '**Notes and explanations** matter. The number alone does not tell you what changed or why.',
          ],
        },
      ],
    },
    {
      kicker: 'The three statements',
      title: 'Three statements, three questions',
      blocks: [
        {
          type: 'table',
          head: ['Statement', 'Time focus', 'Question it answers'],
          rows: [
            ['Balance sheet', 'At a date', 'What does the business have and owe?'],
            ['Income statement', 'Over a period', 'Did operations make a profit or a loss?'],
            ['Cash-flow statement', 'Over a period', 'How and why did cash change?'],
          ],
        },
        {
          type: 'p',
          text: 'Together they show **position**, **performance** and **cash movement**. Financial **reporting** is wider than the statements: it also includes notes and management explanations.',
        },
      ],
    },
    {
      kicker: 'Balance sheet',
      title: 'The accounting equation',
      blocks: [
        { type: 'big', text: 'What the business **has** = what it **owes** + what the **owners** have left.' },
        {
          type: 'formulas',
          items: [{ name: 'Accounting equation', formula: 'Assets = Liabilities + Owners’ equity' }],
        },
        {
          type: 'columns',
          items: [
            { title: 'Assets', text: 'Economic resources the business **owns** and expects to benefit from later, usually as cash.' },
            { title: 'Liabilities', text: 'What the business **owes** to creditors. Future cash going out.' },
            { title: 'Owners’ equity', text: 'The owners’ claim on what is left after creditors. Creditors are paid first.' },
          ],
        },
        {
          type: 'p',
          text: 'Equity grows when owners put money in or the business earns profit. It shrinks when owners take money out or the business makes a loss.',
        },
      ],
    },
    {
      kicker: 'Measuring',
      title: 'How assets get their value on the balance sheet',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Cost principle',
              text: 'Most long-lived assets are recorded at what the business **paid**, and they stay at that cost basis.',
            },
            {
              title: 'Going concern',
              text: 'We assume the business **keeps operating**. A building is there to be used, not sold next week, so its changing market price is not tracked.',
            },
            {
              title: 'Objectivity',
              text: 'Use figures that are **factual and verifiable**. An auditor can check what was paid.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'A balance sheet is not a price tag',
          text: 'It does **not** show what the business is worth today. Some very liquid assets, such as receivables and investments, are shown at their current value instead of cost. Unstable money (inflation) is a known weakness of cost-based figures.',
        },
      ],
    },
    {
      kicker: 'Watch it balance',
      title: 'Every transaction keeps the equation balanced',
      blocks: [
        {
          type: 'p',
          text: 'The course follows a small car-repair business, Overnight Auto Service, through its first events. After each one, assets still equal liabilities plus equity.',
        },
        {
          type: 'table',
          head: ['Event', 'Assets', 'Liabilities', 'Equity'],
          rows: [
            ['Owners invest $80,000 cash', '+ Cash 80,000', '–', '+ Capital stock 80,000'],
            ['Buy land for $52,000 cash', '+ Land 52,000, − Cash 52,000', '–', '–'],
            ['Buy building $36,000: $6,000 cash, $30,000 note', '+ Building 36,000, − Cash 6,000', '+ Note payable 30,000', '–'],
            ['Buy tools $13,800 on account', '+ Tools 13,800', '+ Accounts payable 13,800', '–'],
          ],
        },
        {
          type: 'p',
          text: 'After the fourth event: assets $123,800 = liabilities $43,800 + equity $80,000.',
        },
      ],
    },
    {
      kicker: 'Profit and cash',
      title: 'Profit is not cash',
      blocks: [
        {
          type: 'p',
          text: '**Net income = revenues − expenses.** Revenues bring resources in from the business’s main activity. Expenses use resources up in earning them.',
        },
        {
          type: 'p',
          text: 'The cash-flow statement splits cash movement into three groups:',
        },
        {
          type: 'columns',
          items: [
            { title: 'Operating (CFO)', text: 'Day-to-day business: cash from customers, cash paid for expenses.' },
            { title: 'Investing (CFI)', text: 'Buying or selling long-term assets such as land and buildings.' },
            { title: 'Financing (CFF)', text: 'Owners putting money in or taking it out, borrowing and repaying.' },
          ],
        },
        {
          type: 'p',
          text: 'Overnight’s first period: CFO **$800** + CFI **−$64,200** + CFF **$80,000** = a **$16,600** increase in cash. A positive operating figure can still go with falling cash if investing and financing outflows are bigger.',
        },
        {
          type: 'p',
          text: 'The statements **connect**: net income adds to retained earnings on the balance sheet, and the cash-flow statement explains the change in balance-sheet cash.',
        },
      ],
    },
    {
      kicker: 'Who owns the business?',
      title: 'Forms of business',
      blocks: [
        {
          type: 'table',
          head: ['Form', 'Owners', 'Personal liability'],
          rows: [
            ['Sole proprietorship', 'One person', 'Owner is personally liable for business debts'],
            ['General partnership', 'Two or more partners', 'Partners are generally personally liable'],
            ['Corporation', 'Shareholders, with shares that can be transferred', 'Separate legal entity. Shareholders generally risk only what they invested'],
          ],
        },
        {
          type: 'p',
          text: 'Whatever the form, the **business entity** idea applies: the business’s records stay separate from the owners’ personal affairs.',
        },
      ],
    },
    {
      kicker: 'Watch out',
      title: 'GenAI helps, but you stay accountable',
      blocks: [
        {
          type: 'p',
          text: 'Generative AI can draft, summarize and explore accounting work. It does not remove your responsibility for it.',
        },
        {
          type: 'bullets',
          items: [
            'Check the reasoning and the data before relying on an AI draft.',
            'Mind confidentiality: do not paste private company data into a public tool.',
            'The person who signs off owns the result.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Accounting system', def: 'The people, procedures, technology and records a business uses to capture transactions and turn them into reports.' },
    { term: 'Financial accounting', def: 'Reporting to outside users, such as investors and lenders, using general-purpose reports.' },
    { term: 'Management accounting', def: 'Information prepared for people inside the business, tailored to planning, control and decisions.' },
    { term: 'Internal control', def: 'The policies and procedures that give reasonable assurance of reliable reporting, rule-following and efficient operations.' },
    { term: 'Preventive vs detective control', def: 'Preventive controls stop a problem before it happens (approvals). Detective controls find it afterwards (reconciliations).' },
    { term: 'Balance sheet', def: 'A statement of what a business owns, owes and what is left for the owners, at one date.' },
    { term: 'Asset', def: 'An economic resource the business owns that is expected to benefit future operations, usually through cash.' },
    { term: 'Liability', def: 'A debt or obligation to someone outside the business. The person owed is a creditor.' },
    { term: 'Owners’ equity', def: 'The owners’ residual claim: assets minus liabilities. It comes from owner investment and retained profit.' },
    { term: 'Business entity concept', def: 'The business’s activities are recorded separately from its owners’ personal activities.' },
    { term: 'Cost principle (historical cost)', def: 'Record an asset at the amount paid to acquire it. Most long-term assets stay at that basis.' },
    { term: 'Going-concern assumption', def: 'We assume the business will continue operating, so its assets are held for use, not for quick sale.' },
    { term: 'Objectivity', def: 'Prefer figures that are factual and verifiable, such as the price actually paid.' },
    { term: 'Net income', def: 'Revenues minus expenses for a period.' },
    { term: 'Operating, investing, financing cash flows', def: 'The three groups on the cash-flow statement: day-to-day activity; long-term assets; owner money and borrowing.' },
    { term: 'Corporation', def: 'A business legally separate from its owners, with shares that can be transferred. Shareholders generally risk only their investment.' },
  ],
  cards: [
    { front: 'The accounting equation', back: 'Assets = Liabilities + Owners’ equity. Every transaction keeps it in balance.' },
    { front: 'Three statements and what each answers', back: 'Balance sheet: what exists at a date. Income statement: profit or loss over a period. Cash-flow statement: how cash moved over a period.' },
    { front: 'Why is a balance sheet not “what the business is worth”?', back: 'Many assets are kept at original cost, not today’s market price, and some valuable things are not recorded at all.' },
    { front: 'Reasonable assurance', back: 'What internal controls aim for. Controls reduce risk but cannot guarantee that nothing goes wrong.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Manchester United: one quarterly report, three kinds of reader',
    note: 'A listed football club publishes its numbers for outsiders. Figures are from its report for the quarter ended 30 September 2025.',
    slides: [
      {
        kicker: 'Real example',
        title: 'A club that reports to outsiders',
        blocks: [
          {
            type: 'p',
            text: 'Manchester United plc files its reports with the US Securities and Exchange Commission, so it publishes results regularly for investors and lenders. This is **financial accounting** in practice: the same general-purpose report for everyone.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Revenue, quarter', value: '£140.3M', note: 'first quarter of fiscal 2026' },
              { label: 'Matchday revenue', value: '£26.2M', note: 'about 19% of revenue' },
              { label: 'Borrowings', value: '£749.2M', note: '£481.2M non-current + £268.0M current' },
            ],
          },
        ],
      },
      {
        kicker: 'Reading it',
        title: 'What each reader looks for',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'A lender',
                text: 'Looks at the **borrowings**. Part is due within a year (£268.0M, including interest owed and a £265.0M revolving credit facility). The rest is longer-term. Can the club repay?',
              },
              {
                title: 'An investor',
                text: 'Looks at **revenue** and where it comes from. Matchday is nearly a fifth of the quarter’s revenue, so the rest comes from elsewhere.',
              },
              {
                title: 'The club’s managers',
                text: 'Would not rely on this report alone. They need **management accounting**: detail by competition, by match, by cost line.',
              },
            ],
          },
        ],
      },
      {
        kicker: 'The equation again',
        title: 'The same report on the accounting equation',
        blocks: [
          {
            type: 'p',
            text: 'The report’s balance sheet shows the equation in action. Among the **liabilities** are the borrowings above and **deferred revenue** of £225.0M (£218.7M due within a year plus £6.3M longer term): cash the club has been paid for things it has not yet delivered. Among the **assets** are intangible assets of £1,052.7M, of which £624.1M is the registrations of players.',
          },
          {
            type: 'callout',
            title: 'Why this matters',
            text: 'Reading a report means asking what it is for and who it is for. The same figures answer different questions for a lender, an investor and a manager. Figures are as at 30 September 2025.',
          },
        ],
      },
      {
        kicker: 'Sources',
        title: 'Where these figures come from',
        blocks: [
          {
            type: 'sources',
            items: [
              {
                title: 'Manchester United PLC Reports First Quarter Fiscal 2026 Results',
                url: 'https://www.businesswire.com/news/home/20251211068624/en/Manchester-United-PLC-Reports-First-Quarter-Fiscal-2026-Results/',
                note: 'Business Wire, 11 December 2025. Revenue, matchday revenue, borrowings, deferred revenue and intangibles at 30 September 2025. The deferred-revenue total and the £749.2M borrowings total are our sums of the two published lines.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Ironhawks start up',
    universe: 'ironhawks',
    slides: [
      {
        kicker: 'Meet the team',
        title: 'Day one: owners invest',
        blocks: [
          {
            type: 'p',
            text: 'The Ironhawks are a full professional basketball franchise: payroll around $180M a year and revenue around $420M. Let us watch the very start of the business.',
          },
          {
            type: 'p',
            text: 'Day one, the owners put **$300 million** in cash into the new corporation, in exchange for shares.',
          },
          {
            type: 'table',
            head: ['Assets', '$M', 'Liabilities and equity', '$M'],
            rows: [
              ['Cash', '300', 'Capital stock', '300'],
              ['Total assets', '300', 'Total liabilities and equity', '300'],
            ],
          },
        ],
      },
      {
        kicker: 'Next event',
        title: 'Day two: the arena',
        blocks: [
          {
            type: 'p',
            text: 'The club pays **$560 million** for its arena, with **$260 million** in cash and a **$300 million** loan.',
          },
          {
            type: 'table',
            head: ['Assets', '$M', 'Liabilities and equity', '$M'],
            rows: [
              ['Cash', '40', 'Loan payable', '300'],
              ['Arena', '560', 'Capital stock', '300'],
              ['Total assets', '600', 'Total liabilities and equity', '600'],
            ],
          },
          {
            type: 'callout',
            title: 'Check',
            text: 'Cash fell $260M, the arena asset rose $560M, the loan liability rose $300M. Assets $600M = liabilities $300M + equity $300M.',
          },
        ],
      },
      {
        kicker: 'Day three',
        title: 'Equipment on account',
        blocks: [
          {
            type: 'p',
            text: 'The club buys **$5 million** of training equipment and promises to pay the supplier in 30 days. Nothing leaves the bank yet.',
          },
          {
            type: 'bullets',
            items: [
              'Assets rise $5M (equipment). Total assets are now **$605M**.',
              'Liabilities rise $5M (accounts payable). Total liabilities are now **$305M**.',
              'Equity is still **$300M**. The equation holds: 605 = 305 + 300.',
            ],
          },
        ],
      },
      {
        kicker: 'Cost principle',
        title: 'The arena stays at its cost',
        blocks: [
          {
            type: 'p',
            text: 'Suppose the arena becomes more valuable over the years. The balance sheet still carries it at what was **paid**, $560M, less the depreciation recorded so far. Why?',
          },
          {
            type: 'bullets',
            items: [
              '**Cost principle.** Start from what was paid.',
              '**Going concern.** The Ironhawks will keep playing there. The arena is for use, not sale.',
              '**Objectivity.** An auditor can check the $560M against the contract. A buyer’s opinion of its price is harder to verify.',
            ],
          },
        ],
      },
      {
        kicker: 'Which lens?',
        title: 'Same club, three readers',
        blocks: [
          {
            type: 'table',
            head: ['Who', 'What they want', 'Lens'],
            rows: [
              ['The bank that lent $300M', 'Can the club repay? How much cash will it generate?', 'Financial'],
              ['The general manager', 'A breakdown of scouting spend by month, to decide on a hire', 'Management'],
              ['The tax authority', 'Taxable income computed under the tax rules', 'Tax'],
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
      q: 'A bank is deciding whether to lend to the Ironhawks. Which kind of accounting information does it mostly rely on?',
      options: [
        'Financial accounting reports prepared for outside users',
        'A budget the general manager built for internal use only',
        'The tax return alone',
        'Whatever the bank’s own staff estimate',
      ],
      answer: 0,
      explanation:
        'Lenders are external users. They rely on general-purpose financial reports because they cannot ask for custom ones. Management accounting is for insiders and the tax return serves tax authorities.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Two employees must both sign before the club can wire more than $1 million. What kind of control is this?',
      options: ['Preventive', 'Detective', 'Monitoring only', 'Not a control'],
      answer: 0,
      explanation:
        'A second approval stops an improper payment before it leaves the bank. A detective control, such as a reconciliation, would find the problem after the fact.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Overnight Auto Service has assets of $123,800 and liabilities of $43,800. How much are owners’ equity?',
      options: ['$80,000', '$43,800', '$123,800', '$167,600'],
      answer: 0,
      explanation: 'Equity = assets − liabilities = $123,800 − $43,800 = $80,000. That matches the capital stock the owners invested.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'The Ironhawks’ arena cost $560M and is now worth much more on the open market. At what amount does the balance sheet start from?',
      options: [
        '$560M, the cost, less depreciation recorded so far',
        'Whatever a buyer would pay today',
        'The arena’s insured value',
        'Zero, because it is not for sale',
      ],
      answer: 0,
      explanation:
        'The cost principle records the asset at what was paid. Going concern means the arena is held for use, and objectivity favors the verifiable purchase price.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'Overnight’s operating cash flow is +$800, investing is −$64,200 and financing is +$80,000. What is the change in cash?',
      options: ['+$16,600', '+$800', '+$80,800', '−$64,200'],
      answer: 0,
      explanation: '$800 − $64,200 + $80,000 = $16,600. Profit-type cash flow is small here because most of the cash went into land and a building.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. The Ironhawks, with assets of $605M, liabilities of $305M and equity of $300M, pay the supplier $5M in cash. (a) What happens to total assets? (b) To liabilities? (c) Does the equation still balance?',
      answer: [
        '**(a)** Cash falls $5M, so total assets fall to **$600M**. The equipment stays on the books.',
        '**(b)** Accounts payable falls by $5M, so liabilities fall to **$300M**.',
        '**(c)** Yes: $600M = $300M + $300M. Paying a bill swaps a cash asset for a smaller liability and leaves equity untouched.',
      ],
      review: { section: 'sports', slide: 2 },
    },
  ],

  videos: [],
};
