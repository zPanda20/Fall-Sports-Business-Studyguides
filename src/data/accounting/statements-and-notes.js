// Accounting & Forecasting, Session 4: financial statements and explanatory notes.
// Built from the course slides for Chapter 5. All explanations are written fresh.
// Real-example figures: FC Barcelona 2024-25 as reported by Inside World Football (see sources slide).

export const statementsAndNotesTopic = {
  id: 'statements-and-notes',
  course: 'accounting',
  title: 'Financial statements and explanatory notes',
  sessions: 'Session 4',
  reading: 'Course slides: Chapter 5',
  minutes: 30,
  partial:
    'This topic is built from the Chapter 5 slides. The Chapter 6 slides were not in the course folder, so anything that only appears there is not covered yet.',
  summary:
    'How the adjusted numbers become three statements, how the books are closed for the next year, and why the notes matter.',
  formulas: [
    { name: 'Net income', formula: 'Revenues − Expenses (including income tax)' },
    { name: 'Ending retained earnings', formula: 'Beginning retained earnings + Net income − Dividends' },
    { name: 'Accounting equation', formula: 'Assets = Liabilities + Owners’ equity' },
  ],

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'From numbers to statements',
      title: 'Start from the adjusted trial balance',
      blocks: [
        { type: 'big', text: 'Once the books are adjusted, **every statement** can be built from one list.' },
        {
          type: 'p',
          text: 'The adjusted trial balance feeds three statements. The order matters because each one needs a number from the one before.',
        },
        {
          type: 'steps',
          items: [
            '**Income statement.** It gives net income.',
            '**Statement of retained earnings.** It uses net income to update retained earnings.',
            '**Balance sheet.** It uses the ending retained earnings.',
          ],
        },
        {
          type: 'p',
          text: 'The cash-flow statement is built separately and is covered in its own topic.',
        },
      ],
    },
    {
      kicker: 'Statement 1',
      title: 'The income statement',
      blocks: [
        {
          type: 'p',
          text: 'It matches the revenue **earned** in the period against the expenses **incurred** to earn it. It is also called the earnings statement, the statement of operations, or the profit and loss statement (P&L).',
        },
        {
          type: 'table',
          caption: 'Overnight Auto Service, year ended 31 December 2028',
          head: ['Line', 'Amount'],
          rows: [
            ['Repair service revenue', '$172,000'],
            ['Rent revenue earned', '$3,000'],
            ['Total revenue', '$175,000'],
            ['Total expenses (advertising, wages, supplies, depreciation, utilities, insurance, interest)', '$108,430'],
            ['Income before income taxes', '$66,570'],
            ['Income taxes', '$26,628'],
            ['Net income', '$39,942'],
          ],
        },
        {
          type: 'callout',
          title: 'Limits',
          text: 'It rests on **estimates and assumptions** (depreciation, for example), and it only reports events that actually happened as transactions.',
        },
      ],
    },
    {
      kicker: 'Statement 2',
      title: 'The statement of retained earnings',
      blocks: [
        {
          type: 'p',
          text: '**Retained earnings** is the part of owners’ equity created by earning profit and keeping it in the business.',
        },
        {
          type: 'formulas',
          items: [
            { name: 'Beginning retained earnings', formula: 'what was left at the start' },
            { name: 'Plus: net income', formula: 'profit for the period' },
            { name: 'Less: dividends', formula: 'profit paid out to owners' },
            { name: 'Ending retained earnings', formula: 'what carries to the balance sheet' },
          ],
        },
        {
          type: 'p',
          text: 'A loss would reduce it too. Dividends are shared-out profit, not an expense.',
        },
      ],
    },
    {
      kicker: 'Statement 3',
      title: 'The balance sheet, sorted into current and non-current',
      blocks: [
        {
          type: 'p',
          text: 'A **classified balance sheet** gives separate subtotals for items that are close to cash and items that are not. Current usually means within one year (or the business’s operating cycle).',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Assets',
              text: '**Current:** cash, things that turn into cash soon, and prepaid expenses. **Non-current:** plant and equipment (land, buildings, equipment), other assets, and **intangibles** such as patents, copyrights, trademarks, franchises and goodwill.',
            },
            {
              title: 'Liabilities',
              text: '**Current:** debts to be settled soon with current assets, plus unearned revenue. **Non-current (long-term):** obligations beyond a year, such as a mortgage, long-term notes and bonds payable.',
            },
          ],
        },
      ],
    },
    {
      kicker: 'How they connect',
      title: 'The statements feed each other',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Net income** from the income statement goes into the statement of retained earnings.',
            '**Ending retained earnings** goes into the equity section of the balance sheet.',
            'That is why the order of preparation matters.',
          ],
        },
      ],
    },
    {
      kicker: 'Resetting the books',
      title: 'Temporary and permanent accounts',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Temporary (nominal) accounts',
              text: 'Collect one period only. They are revenue, expense and dividend accounts. They must start the next period at **zero**.',
            },
            {
              title: 'Permanent (real) accounts',
              text: 'Carry their balance forward. They are asset, liability and equity accounts.',
            },
          ],
        },
        {
          type: 'p',
          text: 'The year’s profit has to end up in the permanent account Retained Earnings. The **closing process** moves it there.',
        },
      ],
    },
    {
      kicker: 'Closing',
      title: 'Four closing entries',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Close revenue** to Income Summary. Debit each revenue account, credit Income Summary. For Overnight: $175,000.',
            '**Close expenses** to Income Summary. Credit each expense account, debit Income Summary. For Overnight: $135,058 (the $108,430 of expenses plus $26,628 of income tax).',
            '**Close Income Summary** to Retained Earnings. Its balance is net income: $175,000 − $135,058 = **$39,942**.',
            '**Close Dividends** straight to Retained Earnings. Dividends are not an expense, so they skip Income Summary.',
          ],
        },
        {
          type: 'p',
          text: 'Overnight’s Retained Earnings then ends the year at **$25,942**. An **after-closing trial balance** confirms the ledger still balances, with only permanent accounts left.',
        },
      ],
    },
    {
      kicker: 'The notes',
      title: 'Numbers need explanations',
      blocks: [
        {
          type: 'p',
          text: 'The principle of **adequate disclosure** says statements must come with whatever information readers need to interpret them properly. Most of that sits in the **notes** after the statements.',
        },
        {
          type: 'bullets',
          items: [
            'Notes explain the methods and estimates behind the numbers, such as how long assets are depreciated.',
            'Writing good notes is hard. It needs a deep understanding of the business, of accounting principles, and of how readers interpret the numbers.',
            'A reader should look at the statements **and** the notes together.',
          ],
        },
      ],
    },
    {
      kicker: 'Watch out',
      title: 'Common traps',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Preparing the balance sheet **before** you know net income.',
            'Closing Dividends to Income Summary. It goes **directly** to Retained Earnings.',
            'Forgetting that income tax is an expense in the income statement.',
            'Thinking closing entries change profit. They only move balances.',
            'Treating unearned revenue as an asset. It is a (usually current) **liability**.',
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Adjusted trial balance', def: 'The trial balance after adjusting entries. The amounts used to prepare the financial statements.' },
    { term: 'Income statement', def: 'A summary of revenues and expenses for a period, ending in net income or loss. Also called P&L or statement of operations.' },
    { term: 'Statement of retained earnings', def: 'Shows how retained earnings changed: beginning balance, plus net income, less dividends.' },
    { term: 'Retained earnings', def: 'The part of equity created by earning profit and keeping it in the business: total profit over its life, less dividends.' },
    { term: 'Classified balance sheet', def: 'A balance sheet with separate subtotals for current and non-current assets and liabilities.' },
    { term: 'Current assets', def: 'Cash, assets expected to become cash within about a year, and prepaid expenses to be used up soon.' },
    { term: 'Intangible asset', def: 'A long-term asset with no physical form, such as a patent, copyright, trademark, franchise or goodwill.' },
    { term: 'Current liabilities', def: 'Debts expected to be settled within a year (or operating cycle), including unearned revenue.' },
    { term: 'Temporary (nominal) account', def: 'Revenue, expense and dividend accounts. They collect one period and are reset to zero by closing.' },
    { term: 'Permanent (real) account', def: 'Asset, liability and equity accounts. Balances carry into the next period.' },
    { term: 'Income Summary', def: 'A temporary account that collects revenues and expenses during closing. Its balance equals net income or loss.' },
    { term: 'Closing entries', def: 'Entries that reset temporary accounts to zero and move the profit and dividends into Retained Earnings.' },
    { term: 'After-closing trial balance', def: 'A final check that the ledger balances after closing. It lists permanent accounts only.' },
    { term: 'Adequate disclosure', def: 'The principle that statements must be accompanied by the information readers need to interpret them. Mostly provided in the notes.' },
  ],
  cards: [
    { front: 'Which statement do you prepare first, and why?', back: 'The income statement, because its net income is needed for retained earnings, which is needed for the balance sheet.' },
    { front: 'Retained earnings roll-forward', back: 'Beginning balance + net income − dividends = ending balance.' },
    { front: 'The four closing steps', back: 'Revenues to Income Summary; expenses to Income Summary; Income Summary to Retained Earnings; Dividends to Retained Earnings.' },
    { front: 'Which accounts get closed?', back: 'Only temporary accounts: revenues, expenses and dividends. Assets, liabilities and equity stay open.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'FC Barcelona: revenue up, still a loss',
    note: 'A real club’s 2024–25 results, as reported in October 2025. They show why one line of the income statement never tells the whole story.',
    slides: [
      {
        kicker: 'Real example',
        title: 'A record year with a loss',
        blocks: [
          {
            type: 'p',
            text: 'FC Barcelona reported its 2024–25 accounts in October 2025. Revenue rose, yet the club still ended the year with a **post-tax loss**.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Revenue', value: '€994M', note: 'up €100M on the year before' },
              { label: 'Post-tax loss', value: '€17M', note: 'down from €91M in 2023–24' },
              { label: 'Debt', value: '€469M', note: '€90M less than a year earlier' },
            ],
          },
        ],
      },
      {
        kicker: 'Reading the income statement',
        title: 'What sits between revenue and the loss',
        blocks: [
          {
            type: 'p',
            text: 'Net income is revenue minus **all** expenses, including wages. For Barcelona, wages accounted for **54% of revenue**, which leaves less room for profit.',
          },
          {
            type: 'columns',
            items: [
              {
                title: 'Revenue side',
                text: 'Sponsorship hit an all-time high of €259M. Merchandising rose 55% to €170M.',
              },
              {
                title: 'Cost and one-off side',
                text: 'The report also mentions a €15M fine for breaking UEFA financial fair play rules, which was settled.',
              },
            ],
          },
        ],
      },
      {
        kicker: 'Why the notes matter',
        title: 'The numbers are the start, not the end',
        blocks: [
          {
            type: 'bullets',
            items: [
              'A reader sees the loss in the income statement. The **notes and commentary** explain the big moving parts: a new kit deal, stadium works, and settled fines.',
              'The club was still **not playing at its own stadium** during the period, with the rebuilt Camp Nou expected to add to later accounts. That is context the reader needs for next year’s numbers.',
              'The **debt** of €469M sits on the balance sheet. How much falls due soon (current) versus later (non-current) is exactly what the classification is for.',
            ],
          },
          {
            type: 'callout',
            title: 'Take-away',
            text: 'A statement tells you what happened. The notes tell you why, and what may change next. Figures as reported in October 2025 for the 2024–25 year.',
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
                title: 'Barça post losses again, but talk of financial crisis looks over as revenues near €1bn',
                url: 'https://www.insideworldfootball.com/2025/10/08/barca-post-losses-talk-financial-crisis-looks-revenues-near-e1bn/',
                note: 'Inside World Football, 8 October 2025. Revenue, post-tax loss, wage ratio, debt, sponsorship, merchandising and the settled UEFA fine, as reported by the publication.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Ironhawks’ year in three statements',
    universe: 'ironhawks',
    slides: [
      {
        kicker: 'Statement 1',
        title: 'The Ironhawks’ income statement',
        blocks: [
          {
            type: 'p',
            text: 'An illustrative season, built from the club’s known figures: revenue about $420M and payroll about $180M. The other lines are made up to complete the picture.',
          },
          {
            type: 'table',
            head: ['Line', '$M'],
            rows: [
              ['Revenue (tickets, media, sponsorship, merchandise)', '420.0'],
              ['Player wages', '(180.0)'],
              ['Other operating costs', '(155.2)'],
              ['Depreciation (arena 14.0 + practice facility 2.8)', '(16.8)'],
              ['Interest on the $300M loan, assumed 6%', '(18.0)'],
              ['Income before income taxes', '50.0'],
              ['Income taxes, assumed 20%', '(10.0)'],
              ['Net income', '40.0'],
            ],
          },
        ],
      },
      {
        kicker: 'Statement 2',
        title: 'Retained earnings',
        blocks: [
          {
            type: 'p',
            text: 'In its first full year the club starts with no retained earnings. It earns $40M and pays the owners a $5M dividend.',
          },
          {
            type: 'table',
            head: ['Line', '$M'],
            rows: [
              ['Beginning retained earnings', '0'],
              ['Add: net income', '40'],
              ['Less: dividends', '(5)'],
              ['Ending retained earnings', '35'],
            ],
          },
          {
            type: 'p',
            text: 'In the equity section of the balance sheet: capital stock **$300M** + retained earnings **$35M** = **$335M** of owners’ equity.',
          },
        ],
      },
      {
        kicker: 'Statement 3',
        title: 'Sorting the balance sheet',
        blocks: [
          {
            type: 'table',
            head: ['Item', 'Where it goes'],
            rows: [
              ['Cash', 'Current asset'],
              ['Sponsor payments owed to the club', 'Current asset (receivable)'],
              ['The arena and practice facility', 'Non-current asset (plant), shown at cost less accumulated depreciation'],
              ['A trademark the club bought', 'Non-current asset (intangible)'],
              ['Season tickets paid in advance', 'Current liability (unearned revenue)'],
              ['Amount owed to suppliers', 'Current liability (accounts payable)'],
              ['Loan principal due in the next 12 months', 'Current liability (current portion of long-term debt)'],
              ['Rest of the $300M arena loan', 'Non-current liability'],
            ],
          },
        ],
      },
      {
        kicker: 'Closing',
        title: 'Closing the Ironhawks’ books',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Revenue:** debit revenue accounts $420M, credit Income Summary $420M.',
              '**Expenses:** credit expense accounts $380M (the $370M of costs plus $10M of tax), debit Income Summary $380M.',
              '**Income Summary:** its credit balance is $420M − $380M = **$40M**. Debit Income Summary, credit Retained Earnings $40M.',
              '**Dividends:** debit Retained Earnings $5M, credit Dividends $5M.',
            ],
          },
          {
            type: 'p',
            text: 'Retained Earnings ends at $35M. Revenue, expense, and dividend accounts are all back at zero, ready for next season.',
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
      q: 'Which statement is prepared first when building statements from an adjusted trial balance?',
      options: ['Income statement', 'Balance sheet', 'Statement of retained earnings', 'It does not matter'],
      answer: 0,
      explanation:
        'Net income from the income statement is needed for the statement of retained earnings, whose ending balance is needed for the balance sheet.',
      review: { section: 'plain', slide: 0 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The Ironhawks start the year with $0 of retained earnings, earn $40M, and pay a $5M dividend. What is ending retained earnings?',
      options: ['$35M', '$45M', '$40M', '$5M'],
      answer: 0,
      explanation: 'Beginning $0 + net income $40M − dividends $5M = $35M.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which of these accounts is closed at the end of the year?',
      options: ['Ticket Revenue', 'Cash', 'Accounts Payable', 'Capital Stock'],
      answer: 0,
      explanation:
        'Only temporary accounts are closed: revenue, expense and dividend accounts. Cash, Accounts Payable and Capital Stock are permanent and carry forward.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'Where does the Dividends account get closed to?',
      options: [
        'Directly to Retained Earnings',
        'To Income Summary',
        'To Cash',
        'It is not closed',
      ],
      answer: 0,
      explanation:
        'Dividends are a distribution of profit, not an expense, so they do not go through Income Summary. They are closed straight to Retained Earnings.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'On a classified balance sheet, where does the Ironhawks’ “season tickets paid in advance” sit?',
      options: [
        'Current liabilities (unearned revenue)',
        'Current assets',
        'Non-current assets',
        'Owners’ equity',
      ],
      answer: 0,
      explanation:
        'The club owes the fans games it has not yet played, and will do so within the year. That is a current liability.',
      review: { section: 'sports', slide: 2 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. Overnight’s year-end ledger shows total revenue of $175,000, total expenses of $108,430 and income taxes of $26,628. (a) What balance does Income Summary hold after the revenue and expense closing entries? (b) Is it a credit or debit, and what does it mean? (c) Where does it go next?',
      answer: [
        '**(a)** Credits $175,000 less debits ($108,430 + $26,628 = $135,058) = **$39,942**.',
        '**(b)** A **credit** balance. Revenues exceeded expenses, so it represents net income.',
        '**(c)** It is closed to Retained Earnings: debit Income Summary $39,942, credit Retained Earnings $39,942.',
      ],
      review: { section: 'plain', slide: 6 },
    },
  ],

  videos: [],
};
