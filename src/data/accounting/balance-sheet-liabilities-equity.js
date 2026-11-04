// Accounting & Forecasting, Sessions 8-9: the balance sheet, liabilities and equity.
// Built from the course slides for Chapter 10, with owners' equity basics from Chapters 2, 3 and 5.
// The Chapter 11 slides were not in the course folder, so deeper equity topics are not covered yet.
// The leasing slide at the end of the Chapter 10 file is left out: the file is named "nolease".
// Real-example figures: Manchester United plc, 30 September 2025 (see sources slide).

export const balanceSheetLiabilitiesEquityTopic = {
  id: 'balance-sheet-liabilities-equity',
  course: 'accounting',
  title: 'The balance sheet: liabilities and equity',
  sessions: 'Sessions 8–9',
  reading: 'Course slides: Chapter 10 (plus equity basics from Chapters 2, 3 and 5)',
  minutes: 35,
  partial:
    'This topic is built from the Chapter 10 slides, with equity basics taken from earlier chapters. The Chapter 11 slides were not in the course folder, so more detailed equity material (such as issuing shares) is not covered yet.',
  summary:
    'What the business owes and what the owners hold: how debts are sorted by timing, how uncertain obligations are handled, and what equity is made of.',
  formulas: [
    { name: 'Interest on a note', formula: 'Principal × Annual rate × Time (in years)' },
    { name: 'Owners’ equity', formula: 'Assets − Liabilities' },
    { name: 'Ending retained earnings', formula: 'Beginning + Net income − Dividends' },
  ],

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'Two sources of money',
      title: 'Debt or equity',
      blocks: [
        { type: 'big', text: 'A business funds itself from **creditors** or from **owners**.' },
        {
          type: 'columns',
          items: [
            {
              title: 'Liabilities',
              text: 'Debts from past events that must be settled in the future. They **mature**: they come due and must be paid. Providers are **creditors**, not owners.',
            },
            {
              title: 'Owners’ equity',
              text: 'Original investments by owners plus profit kept in the business. It **does not mature**. Owners get what is left over.',
            },
          ],
        },
      ],
    },
    {
      kicker: 'Who gets paid first',
      title: 'Creditors’ claims',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Creditors have **legal priority** over owners. If the business closes and sells up, creditors are paid in full before owners receive anything.',
            'Some debts are **general credit obligations**: not tied to any specific asset.',
            'A borrower may pledge **collateral**. If it defaults, the creditor can take those assets. Pledged assets are disclosed in the notes.',
            'Only interest that has **built up to the balance-sheet date** is a liability. Interest for future periods may be disclosed in the notes but is not yet a liability.',
          ],
        },
      ],
    },
    {
      kicker: 'Timing',
      title: 'Current or long-term?',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'Current liabilities',
              text: 'Expected to be settled within **one year or the operating cycle**, whichever is longer. Paid from current assets or by delivering a service.',
              examples: ['Accounts payable', 'Short-term notes payable', 'Current portion of long-term debt', 'Accrued liabilities (interest, income taxes, payroll)', 'Unearned revenue'],
            },
            {
              title: 'Long-term liabilities',
              text: 'Everything that is **not current**. Fewer transactions, but usually large amounts. Debt financing may become a permanent part of the business’s funding.',
              examples: ['Mortgage payable', 'Long-term notes payable', 'Bonds payable'],
            },
          ],
        },
        {
          type: 'p',
          text: 'A long-term loan repaid in installments is split: the principal due within a year is a **current** liability, the rest stays long-term.',
        },
      ],
    },
    {
      kicker: 'Everyday liabilities',
      title: 'Payables, notes and accruals',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Accounts payable:** trade payables (suppliers of merchandise) and other payables (other goods and services).',
            '**Notes payable:** usually from bank loans, but also from buying real estate, costly equipment or merchandise, or swapping an overdue payable for a note. They normally carry interest, shown separately from principal.',
            '**Accrued liabilities (accrued expenses):** an expense recognized now with payment later. Interest payable, income taxes payable, payroll liabilities.',
            '**Unearned revenue:** a customer paid in advance. Debit Cash, credit Unearned Revenue. As the service is done, reduce the liability and increase revenue.',
          ],
        },
      ],
    },
    {
      kicker: 'A worked note',
      title: 'Borrowing $10,000 for six months',
      blocks: [
        {
          type: 'p',
          text: 'Porter Company borrows **$10,000** on 1 November at **6%** a year for six months. It must repay $10,000 plus $10,000 × 6% × 6/12 = **$300** of interest on 1 May.',
        },
        {
          type: 'steps',
          items: [
            '**1 November:** debit Cash $10,000, credit Notes Payable $10,000. At this date the liability is only the principal.',
            '**31 December (adjusting entry):** two months of interest have built up. $10,000 × 6% × 2/12 = **$100**. Debit Interest Expense $100, credit Interest Payable $100.',
            '**1 May:** debit Notes Payable $10,000, Interest Payable $100 and Interest Expense $200; credit Cash $10,300.',
          ],
        },
      ],
    },
    {
      kicker: 'Estimates',
      title: 'Known to exist, amount unknown',
      blocks: [
        {
          type: 'p',
          text: 'Some liabilities certainly exist, but the exact amount is not known yet. They are recorded at an **estimated** amount if the uncertainty is small enough to estimate reasonably.',
        },
        {
          type: 'callout',
          title: 'Example: warranties',
          text: 'A carmaker promises to fix defects for several years. Each sale creates a liability for future repairs. The exact cost is unknown at the time of sale, so it is **estimated** and recorded.',
        },
      ],
    },
    {
      kicker: 'Uncertain obligations',
      title: 'Loss contingencies',
      blocks: [
        {
          type: 'p',
          text: 'A **loss contingency** is a possible loss from a past event, to be resolved in the future. The classic example is a **lawsuit**. Unlike an estimated liability, it may be uncertain whether any loss exists at all.',
        },
        {
          type: 'table',
          caption: 'Record, disclose, or ignore',
          head: ['', 'Probable', 'Reasonably possible', 'Remote'],
          rows: [
            ['Amount can be reasonably estimated', 'Record a liability', 'Disclose in the notes', 'Not required'],
            ['Amount cannot be reasonably estimated', 'Disclose in the notes', 'Disclose in the notes', 'Not required'],
          ],
        },
        {
          type: 'p',
          text: 'Record it only when a loss is **probable** and can be **reasonably estimated**. For example, a probable $240,000 loss from a lawsuit: debit Loss from Lawsuit, credit Litigation Liability.',
        },
        {
          type: 'p',
          text: 'Otherwise, if a material loss is reasonably possible, describe it in a note. Example wording: the company was named a defendant in a $250 million patent infringement suit, denies the charges, and cannot yet say what the outcome will be.',
        },
      ],
    },
    {
      kicker: 'Big borrowing',
      title: 'Bonds payable',
      blocks: [
        {
          type: 'p',
          text: 'When a company needs very large long-term funds, 50, 100 or 500 million dollars, no single lender may be enough. It can sell more shares or issue **bonds payable**.',
        },
        {
          type: 'p',
          text: 'An **underwriter**, an investment bank, usually handles the issue. This makes sure the whole issue is sold without delay and the money arrives on a set date.',
        },
      ],
    },
    {
      kicker: 'The owners’ side',
      title: 'What owners’ equity is made of',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'It goes up with…',
              text: 'Investments by owners (capital stock) and **profit** (net income).',
            },
            {
              title: 'It goes down with…',
              text: 'Payments to owners (**dividends**) and **losses**.',
            },
          ],
        },
        {
          type: 'bullets',
          items: [
            'In a corporation the equity section has **capital stock** (what owners paid in) and **retained earnings** (profit kept).',
            'Retained earnings = beginning + net income − dividends.',
            'Equity is always assets minus liabilities. It is the **residual**.',
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
            'Treating **all** future interest as a liability. Only the interest built up so far is.',
            'Calling the whole loan current when only the **next 12 months’ principal** is.',
            'Treating a **possible** lawsuit loss as a recorded liability. It must be **probable** and estimable.',
            'Treating **unearned revenue** as revenue, or as an asset.',
            'Mixing up **dividends** (a distribution of profit) with an expense.',
          ],
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'Who is paid first',
      blocks: [
        { type: 'p', text: 'If a business stops operating and sells its assets, the order is fixed by law: creditors before owners.' },
        {
          type: 'flow',
          items: [
            { title: 'Assets are sold', text: 'Everything the business owns' },
            { title: 'Creditors are paid in full', text: 'Secured creditors from their collateral, then general credit obligations' },
            { title: 'Owners get what is left', text: 'The residual claim' },
          ],
        },
        {
          type: 'figure',
          src: 'acc-liabilities-balance-sheet.png',
          alt: 'The liabilities and equity side of a classified balance sheet with current and long-term liabilities',
          caption: 'The liabilities and equity side of a real balance sheet.',
          need: 'A crop of the liabilities and equity side of a real company’s balance sheet (current liabilities, long-term debt, equity) from a public annual report, with the matching debt note beside it if possible.',
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'The Ironhawks’ liabilities',
      blocks: [
        { type: 'p', text: 'The same $300M arena loan appears twice: $10M as a current liability and $290M as long-term. Together with the other items, total liabilities are $373M, of which $83M is current.' },
        {
          type: 'bars',
          title: 'Liabilities by item ($M)',
          items: [
            { label: 'Arena loan, long-term part', value: 290 },
            { label: 'Unearned ticket revenue', value: 62 },
            { label: 'Arena loan, current part', value: 10 },
            { label: 'Wages payable', value: 6 },
            { label: 'Accounts payable', value: 5 },
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Liability', def: 'A debt or obligation from a past event that requires settlement in the future.' },
    { term: 'Creditor', def: 'A person or organization the business owes money to. Creditors have priority over owners.' },
    { term: 'Collateral', def: 'Specific assets a borrower pledges as security. The creditor can take them if the borrower defaults.' },
    { term: 'Current liability', def: 'A debt expected to be settled within one year or the operating cycle, whichever is longer.' },
    { term: 'Long-term liability', def: 'An obligation that does not meet the test for current, such as a mortgage or bonds payable.' },
    { term: 'Current portion of long-term debt', def: 'The principal of a long-term debt that is due within the next year, shown as a current liability.' },
    { term: 'Accounts payable', def: 'Amounts owed to suppliers for goods and services bought on credit.' },
    { term: 'Note payable', def: 'A written promise to repay a borrowed amount by a given date, usually with interest.' },
    { term: 'Accrued liability', def: 'An expense recognized before it is paid, such as interest payable or payroll liabilities.' },
    { term: 'Unearned revenue', def: 'A liability created when a customer pays in advance. It becomes revenue as the service is delivered.' },
    { term: 'Estimated liability', def: 'A liability known to exist whose exact amount must be estimated, such as warranty obligations.' },
    { term: 'Loss contingency', def: 'A possible loss from a past event that will be resolved in the future, such as a pending lawsuit.' },
    { term: 'Bonds payable', def: 'Long-term debt sold to many lenders to raise very large sums, usually through an underwriter.' },
    { term: 'Capital stock', def: 'The amount owners have paid in for their shares.' },
    { term: 'Retained earnings', def: 'Profit kept in the business: total net income over its life less dividends.' },
  ],
  cards: [
    { front: 'Debt vs equity', back: 'Debt matures and must be repaid, and creditors are paid first. Equity does not mature and owners receive what is left.' },
    { front: 'When is a loss contingency recorded?', back: 'When a loss is probable AND the amount can be reasonably estimated. Otherwise disclose it in the notes if a material loss is reasonably possible.' },
    { front: 'How is a long-term loan with installments classified?', back: 'The principal due within a year is a current liability. The rest is long-term.' },
    { front: 'Interest on a note payable', back: 'Principal × annual rate × time in years. Only interest built up to the balance-sheet date is a liability.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Manchester United: the same debt, split by timing',
    note: 'A real club’s borrowings, split into the part due soon and the part due later. Figures are from its report for the quarter ended 30 September 2025.',
    slides: [
      {
        kicker: 'Real example',
        title: 'Borrowings on the balance sheet',
        blocks: [
          {
            type: 'p',
            text: 'At 30 September 2025, Manchester United reported borrowings in **two places** on its balance sheet. The split between current and non-current is exactly the classification from this topic.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Current borrowings', value: '£268.0M', note: 'includes accrued interest' },
              { label: 'Non-current borrowings', value: '£481.2M', note: 'on $650.0M contractual principal' },
              { label: 'Deferred revenue, current', value: '£218.7M', note: 'also a current liability' },
            ],
          },
        ],
      },
      {
        kicker: 'Reading it',
        title: 'What the split tells a reader',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Most of the current borrowings, **£265.0M**, was a revolving credit facility outstanding at the quarter-end. It is shown as current, so it is treated as due within a year.',
              'The current figure **includes accrued interest**: interest that had built up but was not yet paid, which is the Porter Company idea from earlier.',
              'The non-current borrowings relate to debt with a contractual principal in **US dollars**, reported here in sterling.',
              '**Deferred revenue** of £218.7M is also current. It is not debt, but it is something the club owes: delivery of what has been paid for.',
            ],
          },
          {
            type: 'p',
            text: 'The sum of the two borrowing lines is £749.2M, our addition of the published figures. A lender or an investor would compare it with cash and revenue to judge how comfortable the position is. Figures as at 30 September 2025.',
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
                note: 'Business Wire, 11 December 2025. Current and non-current borrowings, the revolving facility, and deferred revenue at 30 September 2025.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'What the Ironhawks owe, and who owns the rest',
    universe: 'ironhawks',
    slides: [
      {
        kicker: 'Sorting the debts',
        title: 'The Ironhawks’ liabilities',
        blocks: [
          {
            type: 'table',
            head: ['Item', 'Amount', 'Classification'],
            rows: [
              ['Accounts payable (training equipment)', '$5M', 'Current'],
              ['Wages earned but unpaid', '$6M', 'Current (accrued liability)'],
              ['Season tickets paid in advance, after 10 home games', '$62M', 'Current (unearned revenue)'],
              ['Arena loan: principal due in the next 12 months', '$10M', 'Current portion of long-term debt'],
              ['Arena loan: the rest of the $300M', '$290M', 'Long-term'],
            ],
          },
          {
            type: 'p',
            text: 'The $10M due next year is an illustrative figure. The same $300M loan appears in two places on the balance sheet.',
          },
        ],
      },
      {
        kicker: 'A note payable',
        title: 'The renovation loan',
        blocks: [
          {
            type: 'p',
            text: 'The club borrows **$30M** at **6%** for a locker-room renovation. At year end, **four months** of interest have built up.',
          },
          {
            type: 'steps',
            items: [
              '**Interest built up:** $30M × 6% × 4/12 = **$0.6M**.',
              '**Entry:** debit Interest Expense $0.6M, credit Interest Payable $0.6M.',
              'The interest for the months after year end is **not** a liability at this date.',
            ],
          },
        ],
      },
      {
        kicker: 'Uncertainty',
        title: 'A lawsuit by a former sponsor',
        blocks: [
          {
            type: 'p',
            text: 'A former sponsor sues the Ironhawks for **$12M**. What happens in the books depends on what the lawyers think.',
          },
          {
            type: 'table',
            head: ['Lawyers’ view', 'Treatment'],
            rows: [
              ['Loss is probable; best estimate is $8M', 'Record: debit Loss from Lawsuit $8M, credit Litigation Liability $8M'],
              ['Loss is probable; amount cannot be estimated', 'Do not record. Describe it in a note'],
              ['Loss is reasonably possible', 'Describe it in a note'],
              ['Loss is remote', 'No entry and no disclosure needed'],
            ],
          },
        ],
      },
      {
        kicker: 'The owners’ side',
        title: 'Who owns the rest?',
        blocks: [
          {
            type: 'p',
            text: 'The owners put in **$300M** for their shares (capital stock). After a $40M profit year and a $5M dividend, retained earnings are $35M.',
          },
          {
            type: 'table',
            head: ['Owners’ equity', '$M'],
            rows: [
              ['Capital stock', '300'],
              ['Retained earnings', '35'],
              ['Total owners’ equity', '335'],
            ],
          },
          {
            type: 'callout',
            title: 'Priority',
            text: 'If the club ever shut down, the bank and other creditors would be paid in full before the owners received anything from selling the arena.',
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
      q: 'Porter Company borrows $10,000 on 1 November at 6% a year for six months. How much interest expense should be accrued at 31 December?',
      options: ['$100', '$300', '$50', '$600'],
      answer: 0,
      explanation: 'Two months have passed: $10,000 × 6% × 2/12 = $100. The full six months would be $300, but only the interest built up so far is recorded.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The Ironhawks owe $300M on a long-term loan, of which $10M is due in the next 12 months. How is it reported?',
      options: [
        '$10M as a current liability and $290M as long-term',
        'All $300M as long-term',
        'All $300M as current',
        '$10M as an expense',
      ],
      answer: 0,
      explanation: 'The principal due within a year is the current portion of long-term debt. The remainder is long-term.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Which of these is best described as an estimated liability?',
      options: [
        'Warranty obligations on products already sold',
        'A $5M invoice from a supplier',
        'Wages that are due on Friday',
        'A fixed-rate note with a stated amount',
      ],
      answer: 0,
      explanation: 'A warranty obligation certainly exists, but its exact cost is unknown at the time of sale. Invoices, wages and notes are definite amounts.',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'A lawsuit loss is probable and can be reasonably estimated at $240,000. What is the correct treatment?',
      options: [
        'Record a loss and a litigation liability of $240,000',
        'Disclose only in the notes',
        'No action until the court rules',
        'Record the loss only when cash is paid',
      ],
      answer: 0,
      explanation: 'Both conditions are met: probable and reasonably estimable. So the loss is recorded now with a liability.',
      review: { section: 'plain', slide: 6 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A business is closed and its assets are sold. Who is paid first?',
      options: ['Creditors', 'Owners', 'Both equally', 'Whoever invested first'],
      answer: 0,
      explanation: 'Creditors have legal priority. Owners are entitled only to the residual after creditors are paid in full.',
      review: { section: 'plain', slide: 1 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. The Ironhawks are sued for $12M. Their lawyers say a loss is probable and put the best estimate at $8M. (a) What is the entry? (b) What if the lawyers instead said a loss was only reasonably possible? (c) Name two other current liabilities on their balance sheet.',
      answer: [
        '**(a)** Debit Loss from Lawsuit $8M, credit Litigation Liability $8M. It is probable and can be reasonably estimated.',
        '**(b)** No entry. Describe the lawsuit in a note, since a material loss is reasonably possible.',
        '**(c)** Any two of: accounts payable, accrued wages, unearned ticket revenue, interest payable, the current portion of the arena loan.',
      ],
      review: { section: 'sports', slide: 2 },
    },
  ],

  // ------------------------------------------------------------------ exam-level questions
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'The Ironhawks owe: accounts payable $5M; wages earned but unpaid $6M; season tickets paid in advance, $62M still unearned; $10M of the arena loan due next year; and the other $290M of that loan. (a) Classify each as current or long-term and find current liabilities, long-term liabilities and total liabilities. (b) The club also borrowed $30M at 6% a year for a renovation, and four months of interest have built up. Calculate the interest and give the entry.',
      answer: [
        '**(a)** Current: accounts payable $5M, accrued wages $6M, unearned ticket revenue $62M and the current portion of the loan $10M, so current liabilities = **$83M**. Long-term: the rest of the loan, **$290M**. Total liabilities = 83 + 290 = **$373M**.',
        '**(b)** Interest = principal × rate × time = $30M × 6% × 4/12 = **$0.6M**. Entry: debit Interest Expense $0.6M, credit Interest Payable $0.6M. Interest for months after year end is not yet a liability.',
      ],
      marking: [
        'Four items classified as current and the loan remainder as long-term (2)',
        'Current liabilities of $83M (2)',
        'Long-term of $290M and total of $373M (2)',
        'Interest of $0.6M with the formula (2)',
        'Entry with the correct accounts (2)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A former sponsor sues the Ironhawks for $12M. Explain what the club does in its books and notes in each case: (a) a loss is probable and the best estimate is $8M; (b) a loss is probable but the amount cannot be estimated; (c) a loss is reasonably possible; (d) a loss is remote.',
      answer: [
        '**(a)** Record it: debit Loss from Lawsuit $8M, credit Litigation Liability $8M. Both conditions are met: probable and reasonably estimable.',
        '**(b)** Do not record it. Describe the lawsuit in a note.',
        '**(c)** Do not record it. Describe the lawsuit in a note, since a material loss is reasonably possible.',
        '**(d)** No entry and no note is needed.',
      ],
      marking: [
        'Recorded at $8M with the correct entry (2)',
        'Not recorded, note only, because it cannot be estimated (2)',
        'Note only for reasonably possible (2)',
        'Nothing needed for remote (2)',
      ],
    },
    {
      id: 'e3',
      marks: 6,
      q: 'After its first full year the Ironhawks have capital stock of $300M, no beginning retained earnings, net income of $40M and dividends of $5M. (a) Find ending retained earnings and total owners’ equity. (b) Give three differences between liabilities and owners’ equity, including what collateral does.',
      answer: [
        '**(a)** Retained earnings = 0 + 40 − 5 = **$35M**. Owners’ equity = 300 + 35 = **$335M**.',
        '**(b)** Liabilities mature and must be repaid; owners’ equity does not mature. On liquidation, creditors are paid in full before owners receive anything. Creditors are lenders, not owners. Collateral is a specific asset pledged against a loan: if the borrower defaults, the creditor may foreclose on it, and pledged assets are disclosed in the notes.',
      ],
      marking: [
        'Retained earnings of $35M (1)',
        'Owners’ equity of $335M (1)',
        'Liabilities mature, equity does not (1)',
        'Creditors are paid before owners (1)',
        'Creditors are not owners (1)',
        'Collateral and foreclosure explained (1)',
      ],
    },
  ],

  videos: [],
};
