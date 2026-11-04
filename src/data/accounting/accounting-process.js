// Accounting & Forecasting, Sessions 2-3: the bookkeeping process and adjusting entries.
// Built from the course slides for Chapters 3 and 4. All explanations are written fresh.
// Real-example figures: Manchester United plc, quarter ended 30 September 2025 (see sources slide).

export const accountingProcessTopic = {
  id: 'accounting-process',
  course: 'accounting',
  title: 'The bookkeeping process and adjusting entries',
  sessions: 'Sessions 2–3',
  reading: 'Course slides: Chapters 3 and 4',
  minutes: 40,
  summary:
    'How a transaction becomes a journal entry, a ledger balance and a trial balance, and why the books need adjusting at period end.',
  formulas: [
    { name: 'Straight-line depreciation (per period)', formula: 'Cost ÷ Estimated useful life' },
    { name: 'Book value', formula: 'Cost − Accumulated depreciation' },
    { name: 'Interest', formula: 'Principal × Annual rate × Time (in years)' },
    { name: 'Prepaid cost used up per month', formula: 'Amount paid ÷ Months covered' },
  ],

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big picture',
      title: 'The accounting cycle',
      blocks: [
        { type: 'big', text: 'Eight steps take a business from a **single sale** to **finished statements**.' },
        {
          type: 'steps',
          items: [
            '**Journalize** each transaction.',
            '**Post** the journal entries to the ledger accounts.',
            '**Trial balance:** check debits equal credits.',
            '**Adjust** the books at period end.',
            '**Adjusted trial balance.**',
            '**Prepare the financial statements.**',
            '**Close** the temporary accounts.',
            '**After-closing trial balance.**',
          ],
        },
        { type: 'p', text: 'This topic covers the first five steps. Steps 6 to 8 come in the next topic.' },
      ],
    },
    {
      kicker: 'Accounts',
      title: 'Accounts and the T account',
      blocks: [
        {
          type: 'p',
          text: 'An **account** is a record of increases and decreases in one item, such as Cash. The whole set of accounts is the **ledger**. Each account has a title, a left side (**debit**) and a right side (**credit**).',
        },
        {
          type: 'table',
          caption: 'A T account for Cash: money in on the left, money out on the right',
          head: ['Cash: left (debit)', 'Cash: right (credit)'],
          rows: [
            ['Owners invest 80,000', 'Land purchased 52,000'],
            ['Customer pays 2,200', 'Wages paid 1,200'],
          ],
        },
        {
          type: 'callout',
          title: 'Debit and credit are just left and right',
          text: 'They do **not** mean good or bad. Whether a debit raises or lowers an account depends on the type of account.',
        },
      ],
    },
    {
      kicker: 'The rules',
      title: 'Debit and credit rules',
      blocks: [
        {
          type: 'table',
          head: ['Account type', 'Increase with', 'Decrease with', 'Normal balance'],
          rows: [
            ['Asset', 'Debit', 'Credit', 'Debit'],
            ['Liability', 'Credit', 'Debit', 'Credit'],
            ['Owners’ equity (capital stock, retained earnings)', 'Credit', 'Debit', 'Credit'],
            ['Revenue (raises equity)', 'Credit', 'Debit', 'Credit'],
            ['Expense (lowers equity)', 'Debit', 'Credit', 'Debit'],
            ['Dividends (lowers equity)', 'Debit', 'Credit', 'Debit'],
          ],
        },
        {
          type: 'p',
          text: 'In **double-entry** accounting every transaction has equal debits and credits. That is why the books always balance.',
        },
      ],
    },
    {
      kicker: 'Recording',
      title: 'Journal, then ledger',
      blocks: [
        {
          type: 'p',
          text: 'The **journal** is a day-by-day record of transactions. **Posting** copies each entry into the ledger accounts, which then feed the financial statements.',
        },
        {
          type: 'table',
          caption: 'Overnight Auto Service, general journal',
          head: ['Date', 'Account', 'Debit', 'Credit'],
          rows: [
            ['Jan 20', 'Cash', '80,000', ''],
            ['', '  Capital Stock', '', '80,000'],
            ['', 'Owners invest cash in the business', '', ''],
          ],
        },
        {
          type: 'bullets',
          items: [
            'The **debited** account is written first.',
            'The **credited** account is indented below it.',
            'A short description follows.',
          ],
        },
      ],
    },
    {
      kicker: 'Checking',
      title: 'The trial balance, and what it cannot prove',
      blocks: [
        {
          type: 'p',
          text: 'A **trial balance** lists every ledger balance in debit and credit columns. If the totals match, the ledger is internally balanced.',
        },
        {
          type: 'p',
          text: 'Overnight’s trial balance at 28 February: debits **$133,050** = credits **$133,050**.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Balanced does not mean correct',
          text: 'A trial balance will not catch an entry posted to the **wrong account** or one that was left out entirely. Typical errors that **do** show up: a debit posted as a credit, a miscalculated balance, a copying slip, or a bad addition.',
        },
      ],
    },
    {
      kicker: 'Measuring profit',
      title: 'Accrual accounting versus cash',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Accrual basis',
              text: 'Revenue counts when it is **earned**. Expenses count when they are **incurred**. This gives a truer picture of profit.',
            },
            {
              title: 'Cash basis',
              text: 'Revenue counts when cash **comes in**. Expenses count when cash **goes out**. Simple, but a poor measure of profit.',
            },
          ],
        },
        {
          type: 'bullets',
          items: [
            '**Realization principle:** record revenue when the goods are sold or the service done, and the amount can be measured objectively.',
            '**Matching principle:** put expenses in the same period as the revenue they helped earn.',
            '**Time period principle:** measure profit for regular, equal periods such as a month or a year.',
            '**Dividends** are a share-out of profit to owners. They are **not** an expense.',
          ],
        },
      ],
    },
    {
      kicker: 'Why adjust?',
      title: 'Four kinds of adjusting entry',
      blocks: [
        {
          type: 'p',
          text: 'Some events touch more than one period. At period end the books are adjusted so the right revenue and expense land in the right period. Every adjusting entry affects **one income-statement account and one balance-sheet account**.',
        },
        {
          type: 'table',
          head: ['Type', 'In plain words', 'Entry'],
          rows: [
            ['Deferred expense', '“I paid, but have not used it up yet.”', 'Debit expense, credit asset'],
            ['Deferred revenue', '“I got paid, but have not done the work yet.”', 'Debit liability, credit revenue'],
            ['Accrued expense', '“I used it, but have not paid yet.”', 'Debit expense, credit liability'],
            ['Accrued revenue', '“I did the work, but have not been paid yet.”', 'Debit asset (receivable), credit revenue'],
          ],
        },
      ],
    },
    {
      kicker: 'Type 1',
      title: 'Paid first, used later: deferred expenses',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Supplies.** The shop supplies account shows $1,800, but about $1,200 is left. Roughly **$600** was used. Debit Supplies Expense $600, credit Shop Supplies $600.',
            '**Insurance.** A 12-month policy costs $18,000, paid on 1 March. It starts as an asset (Prepaid Insurance). Each month **$18,000 ÷ 12 = $1,500** moves to Insurance Expense.',
            '**Depreciation.** A building bought for $36,000 with a 20-year (240-month) life gives **$36,000 ÷ 240 = $150** a month. Debit Depreciation Expense, credit Accumulated Depreciation.',
          ],
        },
        {
          type: 'callout',
          title: 'Depreciation is an estimate and it uses no cash',
          text: 'Book value = cost − accumulated depreciation. After 11 months on the building: $36,000 − $1,650 = **$34,350**. Book value is an accounting number, not a market price. Depreciation lowers profit without any cash leaving, and is often the biggest gap between profit and operating cash flow.',
        },
      ],
    },
    {
      kicker: 'Type 2',
      title: 'Paid first, earned later: deferred revenue',
      blocks: [
        {
          type: 'p',
          text: 'When a customer pays in advance, the business owes them a service. So the cash is **not revenue yet**. It is recorded as a liability, **Unearned Revenue**.',
        },
        {
          type: 'p',
          text: 'Example: a cab company pays **$9,000** on 1 December for three months of storage space. Debit Cash $9,000, credit Unearned Rent Revenue $9,000. At each month-end, **$3,000** moves out of the liability and into Rent Revenue.',
        },
      ],
    },
    {
      kicker: 'Types 3 and 4',
      title: 'Accruals: expenses and revenue before the cash',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Accrued expense',
              text: 'Wages earned by staff but not yet paid: debit Wages Expense $1,950, credit Wages Payable $1,950. Interest on a $4,000, 9% loan for one month: $4,000 × 9% × 1/12 = **$30**. Debit Interest Expense, credit Interest Payable.',
            },
            {
              title: 'Accrued revenue',
              text: 'Repair work done in the last half of December, billed in January: debit Accounts Receivable $750, credit Repair Service Revenue $750. The revenue belongs to December even though the cash arrives in January.',
            },
          ],
        },
      ],
    },
    {
      kicker: 'Judgment',
      title: 'Materiality keeps it practical',
      blocks: [
        {
          type: 'p',
          text: 'An item is **material** if knowing about it could change a reader’s decisions. Tiny items can be handled the easy way: low-cost items such as light bulbs can simply be expensed, and immaterial accruals may be skipped.',
        },
        {
          type: 'callout',
          title: 'It depends on size',
          text: 'A $1,000 item can matter to a small business and be trivial to a giant one. Many accountants treat amounts under about 2 to 3 percent of net income as immaterial, unless other factors apply.',
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
            'Treating **unearned revenue** as revenue. It is a **liability** until the work is done.',
            'Thinking **debit** always means “increase”. It depends on the account type.',
            'Forgetting that **dividends are not an expense**.',
            'Believing a balanced trial balance proves the books are right.',
            'Forgetting that **depreciation** is a cost allocation, not a cash payment.',
          ],
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'The cycle as a loop',
      blocks: [
        { type: 'p', text: 'The eight steps repeat every period, so they form a loop. Here they are grouped into six stages.' },
        {
          type: 'cycle',
          center: 'One accounting period',
          items: [
            { title: 'Record', text: 'Journalize each transaction' },
            { title: 'Post', text: 'Copy entries to the ledger' },
            { title: 'Check', text: 'Trial balance: debits equal credits' },
            { title: 'Adjust', text: 'Adjusting entries, then the adjusted trial balance' },
            { title: 'Report', text: 'Prepare the financial statements' },
            { title: 'Close', text: 'Closing entries, then the after-closing trial balance' },
          ],
        },
        {
          type: 'figure',
          src: 'acc-process-t-account.png',
          alt: 'A T account with debits on the left and credits on the right and a running balance',
          caption: 'A T account: left side debit, right side credit.',
          need: 'A clean T-account diagram for Cash with a few debit entries on the left, credit entries on the right and the balance underneath.',
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'A liability that turns into revenue',
      blocks: [
        { type: 'p', text: 'The Ironhawks sold $82M of season tickets before game one. Each home game moves $2M from the liability to revenue.' },
        {
          type: 'bars',
          title: 'Unearned Ticket Revenue still owed ($M)',
          items: [
            { label: 'Before game 1', value: 82 },
            { label: 'After 10 games', value: 62 },
            { label: 'After 25 games', value: 32 },
            { label: 'After 41 games', value: 0 },
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Account', def: 'The record of increases and decreases in one financial statement item, such as Cash or Accounts Payable.' },
    { term: 'Ledger', def: 'The complete group of a business’s accounts.' },
    { term: 'Debit and credit', def: 'The left and right sides of an account. Whether each increases or decreases an account depends on the account type.' },
    { term: 'Double-entry accounting', def: 'Every transaction is recorded with equal total debits and credits.' },
    { term: 'Journal', def: 'The chronological, day-by-day record where transactions are first recorded.' },
    { term: 'Posting', def: 'Copying journal entries into the ledger accounts.' },
    { term: 'Trial balance', def: 'A list of all ledger balances showing that total debits equal total credits.' },
    { term: 'Accrual basis', def: 'Revenue is recorded when earned and expenses when incurred, whatever the timing of cash.' },
    { term: 'Realization principle', def: 'Recognize revenue when the goods are sold or the service is performed and the amount can be measured objectively.' },
    { term: 'Matching principle', def: 'Offset revenue with the expenses incurred to earn it, in the same period.' },
    { term: 'Adjusting entry', def: 'An end-of-period entry that puts revenue and expenses in the correct period. It affects one income-statement account and one balance-sheet account.' },
    { term: 'Deferred expense (prepaid)', def: 'Cash paid before the cost is used up. Held as an asset, then moved to expense over time.' },
    { term: 'Deferred (unearned) revenue', def: 'Cash received before the work is done. A liability until the revenue is earned.' },
    { term: 'Accrued expense', def: 'An expense incurred but not yet paid. Recorded with a liability such as Wages Payable.' },
    { term: 'Accrued revenue', def: 'Revenue earned but not yet billed or collected. Recorded with a receivable.' },
    { term: 'Accumulated depreciation', def: 'A contra-asset account holding the total depreciation recorded so far on an asset.' },
    { term: 'Book value', def: 'Cost minus accumulated depreciation. An accounting figure, not a market price.' },
    { term: 'Materiality', def: 'An item is material if knowing about it could reasonably influence users’ decisions.' },
  ],
  cards: [
    { front: 'Normal balances', back: 'Assets, expenses and dividends: debit. Liabilities, equity and revenue: credit.' },
    { front: 'Which adjusting entry: “I used it, but have not paid”?', back: 'Accrued expense. Debit expense, credit liability.' },
    { front: 'Which adjusting entry: “I got paid, but have not done the work”?', back: 'Deferred (unearned) revenue. Debit the liability, credit revenue as the work is done.' },
    { front: 'Does a balanced trial balance prove the books are correct?', back: 'No. It cannot catch an entry posted to the wrong account or omitted entirely.' },
    { front: 'Is a dividend an expense?', back: 'No. It is a distribution of profit to owners and reduces retained earnings directly.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Manchester United: paid first, delivered later',
    note: 'A football club often collects cash before the football is played. Figures are from its report for the quarter ended 30 September 2025.',
    slides: [
      {
        kicker: 'Real example',
        title: 'A liability that is not a loan',
        blocks: [
          {
            type: 'p',
            text: 'Manchester United plc’s balance sheet at 30 September 2025 includes **deferred revenue**. It is the same idea as unearned revenue: cash received for something the club has not yet delivered.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Deferred revenue, due within a year', value: '£218.7M', note: 'current liability' },
              { label: 'Deferred revenue, longer term', value: '£6.3M', note: 'non-current' },
              { label: 'Revenue for the quarter', value: '£140.3M', note: 'first quarter of fiscal 2026' },
            ],
          },
        ],
      },
      {
        kicker: 'The accounting idea',
        title: 'Why the cash is not yet revenue',
        blocks: [
          {
            type: 'p',
            text: 'The published figures do not break down what is inside deferred revenue. But the logic is the one from this topic. If a customer pays before the club delivers the match, the product, or the sponsorship benefit, then the club owes something, and the cash is recorded as a liability.',
          },
          {
            type: 'steps',
            items: [
              '**On receipt:** debit Cash, credit Deferred (unearned) revenue.',
              '**As the club delivers:** debit Deferred revenue, credit Revenue.',
              '**Result:** revenue lands in the period when the service is actually provided, which is the realization and matching idea.',
            ],
          },
          {
            type: 'p',
            text: 'The balance owed at the quarter-end, £218.7M current, is larger than the whole quarter’s revenue of £140.3M (about 1.6 times). It shows how much of a club’s cash can arrive ahead of the football.',
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
                note: 'Business Wire, 11 December 2025. Deferred revenue (current and non-current) and quarterly revenue at 30 September 2025. The “about 1.6 times” comparison is our own division of the two published figures.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Ironhawks close the books',
    universe: 'ironhawks',
    slides: [
      {
        kicker: 'Setting the scene',
        title: 'Four adjusting entries at year end',
        blocks: [
          {
            type: 'p',
            text: 'It is the end of the Ironhawks’ year. The ledger is up to date for day-to-day transactions, but four things need adjusting. One of each type.',
          },
          {
            type: 'table',
            head: ['Item', 'Type', 'The question'],
            rows: [
              ['Arena and practice facility', 'Deferred expense', 'How much of the cost was used up?'],
              ['Season tickets sold in advance', 'Deferred revenue', 'How many games have been played?'],
              ['Wages for the final days of the year', 'Accrued expense', 'What is owed but unpaid?'],
              ['Concert promoter rental, billed next month', 'Accrued revenue', 'What was earned but not billed?'],
            ],
          },
        ],
      },
      {
        kicker: 'Deferred expense',
        title: 'Depreciating the buildings',
        blocks: [
          {
            type: 'steps',
            items: [
              '**Arena:** $560M ÷ 40 years = **$14M a year**, about $1.17M a month.',
              '**Practice facility:** $70M ÷ 25 years = **$2.8M a year**, about $233,000 a month.',
              '**Entry for the year:** debit Depreciation Expense $16.8M, credit Accumulated Depreciation $16.8M.',
            ],
          },
          {
            type: 'p',
            text: 'After year one the arena’s book value is $560M − $14M = **$546M**. No cash left the bank when this entry was made. The cash was spent when the arena was built.',
          },
        ],
      },
      {
        kicker: 'Deferred revenue',
        title: 'Season tickets sold in advance',
        blocks: [
          {
            type: 'p',
            text: 'Fans paid **$82M** for the season before a single game was played. That money starts as the liability **Unearned Ticket Revenue**. There are 41 home games, so each game earns **$82M ÷ 41 = $2M**.',
          },
          {
            type: 'table',
            head: ['Moment', 'Unearned Ticket Revenue', 'Ticket Revenue earned'],
            rows: [
              ['Before game 1', '$82M', '$0'],
              ['After 10 home games', '$62M', '$20M'],
              ['After all 41 games', '$0', '$82M'],
            ],
          },
          {
            type: 'p',
            text: 'The adjusting entry after 10 games: debit Unearned Ticket Revenue $20M, credit Ticket Revenue $20M.',
          },
        ],
      },
      {
        kicker: 'Accruals',
        title: 'Wages owed and rent not yet billed',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Accrued expense',
                text: 'Suppose $6M of wages were earned in the final days of the year and will be paid next month. Debit Wages Expense $6M, credit Wages Payable $6M. Without it, expenses would be too low.',
              },
              {
                title: 'Accrued revenue',
                text: 'A concert promoter used the arena in the last week and will be billed next month: $1.2M. Debit Accounts Receivable $1.2M, credit Rental Revenue $1.2M.',
              },
            ],
          },
          {
            type: 'p',
            text: 'Each fixes a timing difference: the cost or the revenue belongs to this year, even though the cash moves next year.',
          },
        ],
      },
      {
        kicker: 'Interest',
        title: 'Interest that has built up',
        blocks: [
          {
            type: 'p',
            text: 'Suppose the club borrowed **$30M** for a locker-room renovation at **6% a year**, and **four months** of interest have built up unpaid at year end.',
          },
          {
            type: 'steps',
            items: [
              '**Interest = principal × rate × time:** $30M × 6% × 4/12 = **$0.6M**.',
              '**Entry:** debit Interest Expense $0.6M, credit Interest Payable $0.6M.',
              'Only the interest built up to the balance-sheet date is a liability. Future interest is not.',
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
      q: 'The Ironhawks receive $8 million in cash from a sponsor for a two-year deal. What is the correct entry?',
      options: [
        'Debit Cash, credit Unearned Sponsorship Revenue',
        'Debit Cash, credit Sponsorship Revenue',
        'Debit Sponsorship Revenue, credit Cash',
        'Debit Unearned Sponsorship Revenue, credit Cash',
      ],
      answer: 0,
      explanation:
        'Cash (an asset) increases, so it is debited. The club has not yet delivered the sponsorship benefits, so it owes a service: a liability, which increases with a credit. Revenue is recognized later as the deal is delivered.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'A trial balance shows debits and credits equal. What does that prove?',
      options: [
        'The ledger is internally balanced, but entries could still be in the wrong accounts or missing',
        'Every transaction has been recorded correctly',
        'No adjusting entries are needed',
        'The financial statements will be accurate',
      ],
      answer: 0,
      explanation:
        'Equal totals show the debits and credits and the addition are consistent. They do not show that each transaction was analyzed correctly, or that none was left out.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'The shop-supplies account shows $1,800 before adjustment. A count finds about $1,200 left. What is the adjusting entry?',
      options: [
        'Debit Supplies Expense $600, credit Shop Supplies $600',
        'Debit Shop Supplies $600, credit Supplies Expense $600',
        'Debit Supplies Expense $1,200, credit Shop Supplies $1,200',
        'Debit Cash $600, credit Shop Supplies $600',
      ],
      answer: 0,
      explanation:
        'Supplies worth $1,800 − $1,200 = $600 were used up. A used-up asset becomes an expense: debit the expense, credit the asset.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'The Ironhawks’ practice facility cost $70M and has a 25-year life. What is annual straight-line depreciation (no residual value)?',
      options: ['$2.8M', '$2.0M', '$3.5M', '$14M'],
      answer: 0,
      explanation: '$70M ÷ 25 = $2.8M a year. The $14M figure is the arena’s depreciation ($560M ÷ 40).',
      review: { section: 'sports', slide: 1 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A company borrows $4,000 at 9% a year for three months. How much interest expense has accrued after one month?',
      options: ['$30', '$90', '$360', '$3'],
      answer: 0,
      explanation: '$4,000 × 9% × 1/12 = $30. The full three-month interest is $90, but only one month has built up.',
      review: { section: 'plain', slide: 9 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. The Ironhawks sold $82M of season tickets in advance for 41 home games. (a) How much revenue is earned per home game? (b) After 25 games, how much ticket revenue should be recognized and how much remains as a liability? (c) Give the adjusting entry.',
      answer: [
        '**(a)** $82M ÷ 41 = **$2M** per game.',
        '**(b)** 25 × $2M = **$50M** earned. $82M − $50M = **$32M** still Unearned Ticket Revenue.',
        '**(c)** Debit Unearned Ticket Revenue $50M, credit Ticket Revenue $50M (the total to date, assuming nothing was recognized earlier).',
      ],
      review: { section: 'sports', slide: 2 },
    },
  ],

  // ------------------------------------------------------------------ exam-level questions
  exam: [
    {
      id: 'e1',
      marks: 12,
      q: 'At year end the Ironhawks make these adjusting entries. (a) Depreciate the arena ($560M, 40-year life) and the practice facility ($70M, 25-year life), straight line, no residual value, and give the entry. (b) Season tickets of $82M were sold in advance for 41 home games and 10 have been played: how much revenue is earned, how much liability remains, and what is the entry? (c) Wages of $6M were earned in the last days of the year and will be paid next month: give the entry. (d) A concert promoter used the arena and owes $1.2M, not yet billed: give the entry. (e) By how much do the four adjustments change net income?',
      answer: [
        '**(a)** Arena: $560M ÷ 40 = **$14M**. Practice facility: $70M ÷ 25 = **$2.8M**. Entry: debit Depreciation Expense $16.8M, credit Accumulated Depreciation $16.8M.',
        '**(b)** $82M ÷ 41 = $2M per game, so 10 games earn **$20M** and **$62M** remains as Unearned Ticket Revenue. Entry: debit Unearned Ticket Revenue $20M, credit Ticket Revenue $20M.',
        '**(c)** Debit Wages Expense $6M, credit Wages Payable $6M.',
        '**(d)** Debit Accounts Receivable $1.2M, credit Rental Revenue $1.2M.',
        '**(e)** Revenue rises $20M + $1.2M = $21.2M. Expenses rise $16.8M + $6M = $22.8M. Net income changes by $21.2M − $22.8M = **−$1.6M** (it falls).',
      ],
      marking: [
        'Arena $14M and practice facility $2.8M (2)',
        'Depreciation entry, $16.8M, debit and credit correct (2)',
        'Revenue per game $2M, earned $20M, remaining liability $62M (2)',
        'Ticket-revenue entry correct (2)',
        'Wages entry correct (1)',
        'Rental entry correct (1)',
        'Net effect on net income of −$1.6M (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'On 1 July the Ironhawks receive $8M in cash for a two-year sponsorship that starts that day. (a) Give the entry on 1 July. (b) How much sponsorship revenue is earned by 31 December of the same year, and what is the adjusting entry? (c) What balance remains in Unearned Sponsorship Revenue after that entry?',
      answer: [
        '**(a)** Debit Cash $8M, credit Unearned Sponsorship Revenue $8M. The club owes the sponsor two years of benefits, so it is a liability.',
        '**(b)** $8M ÷ 2 years = $4M a year. Six months is **$2M**. Debit Unearned Sponsorship Revenue $2M, credit Sponsorship Revenue $2M.',
        '**(c)** $8M − $2M = **$6M**.',
      ],
      marking: [
        'Debit Cash and credit a liability, $8M (2)',
        'Revenue of $2M calculated (2)',
        'Adjusting entry with the correct accounts (2)',
        'Remaining balance of $6M (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'A trial balance has equal debits and credits. (a) What does that show? (b) Give two kinds of error it would not reveal. (c) Give one Ironhawks example each of an accrued expense and a deferred expense.',
      answer: [
        '**(a)** The ledger is internally consistent: total debits equal total credits.',
        '**(b)** Any two of: a transaction left out entirely; an amount posted to the wrong account; the same wrong amount posted on both sides.',
        '**(c)** Accrued expense: $6M of wages earned but unpaid at year end. Deferred expense: the arena, paid for long ago and charged to expense through depreciation over its life.',
      ],
      marking: [
        'Debits equal credits, nothing more (2)',
        'Two valid undetected errors, one mark each (2)',
        'A valid accrued expense example (1)',
        'A valid deferred expense example (1)',
      ],
    },
  ],

  videos: [],
};
