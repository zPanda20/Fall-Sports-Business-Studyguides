// Accounting skills: Excel basics. Written from scratch for this guide. The lessons use a small
// spreadsheet engine (src/lib/sheet.js) so every example can be tried on the page.
// Real-example figures: FC Barcelona 2024-25 as reported by Inside World Football (same source as the SWOT topic).
// Ironhawks figures: price $90, variable cost $30, fixed costs $24M, as in the cost-volume-profit topic.

export const excelBasicsTopic = {
  id: 'excel-basics',
  course: 'accounting',
  title: 'Excel basics for accounting',
  sessions: 'Skills',
  reading: 'Built for this guide',
  minutes: 35,
  summary:
    'The spreadsheet skills an accounting course expects: formulas, references, the handful of functions that matter, clear formatting and checks that catch mistakes.',

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'Why Excel',
      title: 'Where the numbers actually live',
      blocks: [
        { type: 'big', text: 'Statements, budgets and break-even sums are all built in **spreadsheets**. Let the sheet calculate, and keep your attention on what the numbers mean.' },
        {
          type: 'flow',
          items: [
            { title: 'Inputs', text: 'The facts you type once: prices, costs, balances.' },
            { title: 'Formulas', text: 'Calculations that point at the inputs.' },
            { title: 'Outputs', text: 'Totals, ratios and profit.' },
            { title: 'Checks', text: 'Cells that tell you if something is off.' },
          ],
        },
        { type: 'p', text: 'Change an input and every output updates. That is the whole point: no re-typing, fewer mistakes, quick “what if” answers.' },
      ],
    },
    {
      kicker: 'The grid',
      title: 'Cells, ranges and the formula bar',
      blocks: [
        {
          type: 'bullets',
          items: [
            'A **cell** is one box. Its name is its column letter and row number, like **B3**.',
            'A **range** is a block of cells, written with a colon: **B2:B6** is B2 down to B6.',
            'The **formula bar** shows what is really inside the selected cell. A cell can show **48,700** while holding **=SUM(B2:B4)**.',
          ],
        },
        {
          type: 'sheet',
          title: 'Try it. Tap B5, type =SUM(B2:B4) in the bar and press Enter. Then do the average in B6.',
          cells: { A1: 'Home game', B1: 'Tickets sold', A2: 'Game 1', B2: 15000, A3: 'Game 2', B3: 16500, A4: 'Game 3', B4: 17200, A5: 'Total', A6: 'Average' },
          heads: ['A1', 'B1'],
          editable: ['B5', 'B6', 'B2', 'B3', 'B4'],
          cellFormats: { B2: 'int', B3: 'int', B4: 'int', B5: 'int', B6: 'dec1' },
          tasks: [
            { prompt: 'Make **B5** the total of the three games with **SUM**.', cell: 'B5', expect: 48700, hint: '=SUM(B2:B4)' },
            { prompt: 'Make **B6** the average with **AVERAGE**.', cell: 'B6', expect: 48700 / 3, hint: '=AVERAGE(B2:B4)' },
          ],
        },
      ],
    },
    {
      kicker: 'Formulas',
      title: 'Start with =, then point at cells',
      blocks: [
        { type: 'p', text: 'A formula always begins with **=**. Type **B1*B2**, with no equals sign, and Excel just treats it as text.' },
        {
          type: 'table',
          head: ['Symbol', 'Means', 'Example'],
          rows: [
            ['+  −', 'Add, subtract', '=B3−B5'],
            ['*  /', 'Multiply, divide', '=B1*B2'],
            ['^', 'Power', '=B1^2'],
            ['%', 'Percent', '=B1*5%'],
            ['( )', 'Do this first', '=(B1+B2)*B3'],
          ],
        },
        { type: 'callout', title: 'Order of work', text: 'Brackets first, then powers, then multiply and divide, then add and subtract. When in doubt, add brackets.' },
        {
          type: 'sheet',
          title: 'Revenue, variable costs and contribution for the Ironhawks. Fill in the three blue-outlined cells.',
          cells: { A1: 'Tickets sold', B1: 18000, A2: 'Price per ticket', B2: 90, A3: 'Revenue', A4: 'Variable cost per ticket', B4: 30, A5: 'Variable costs', A6: 'Contribution' },
          editable: ['B3', 'B5', 'B6'],
          cellFormats: { B1: 'int', B2: 'money', B3: 'money', B4: 'money', B5: 'money', B6: 'money' },
          tasks: [
            { prompt: 'Revenue in **B3** is tickets times price.', cell: 'B3', expect: 1_620_000, hint: '=B1*B2' },
            { prompt: 'Variable costs in **B5**.', cell: 'B5', expect: 540_000, hint: '=B1*B4' },
            { prompt: 'Contribution in **B6** is revenue minus variable costs.', cell: 'B6', expect: 1_080_000, hint: '=B3-B5' },
          ],
        },
      ],
    },
    {
      kicker: 'The one idea to master',
      title: 'Relative and absolute references',
      blocks: [
        { type: 'p', text: 'When you copy a formula down a column, Excel shifts the cell names for you. That is **relative**. A **$** in front of a letter or number freezes it, which is **absolute**.' },
        {
          type: 'table',
          head: ['You write', 'Copy it down and…'],
          rows: [
            ['B1', 'The row changes: B2, B3, B4'],
            ['$B1', 'The column is frozen, the row changes'],
            ['B$1', 'The row is frozen, the column changes'],
            ['$B$1', 'Nothing changes: always B1'],
          ],
        },
        { type: 'p', text: 'Use **$B$1** when every line should divide by the **same** cell, such as total revenue. Press **F4** while the cursor is on a reference to add the dollar signs.' },
        {
          type: 'sheet',
          title: 'Each cost as a share of revenue. Revenue is in B1 and the formulas in C3:C6 should all point at it.',
          cells: { A1: 'Revenue ($M)', B1: 150, A2: 'Cost', B2: 'Amount', C2: '% of revenue', A3: 'Wages', B3: 60, A4: 'Arena', B4: 30, A5: 'Marketing', B5: 15, A6: 'Other', B6: 9, C3: '=B3/$B$1' },
          heads: ['A2', 'B2', 'C2'],
          editable: ['C3', 'C4', 'C5', 'C6'],
          cellFormats: { B1: 'int', C3: 'pct0', C4: 'pct0', C5: 'pct0', C6: 'pct0' },
          tasks: [
            { prompt: 'Arena share in **C4**.', cell: 'C4', expect: 0.2, hint: '=B4/$B$1' },
            { prompt: 'Marketing share in **C5**.', cell: 'C5', expect: 0.1, hint: '=B5/$B$1' },
            { prompt: 'Other share in **C6**.', cell: 'C6', expect: 0.06, hint: '=B6/$B$1' },
          ],
        },
      ],
    },
    {
      kicker: 'Functions',
      title: 'Six you will use every week',
      blocks: [
        {
          type: 'table',
          head: ['Function', 'What it does', 'Accounting use'],
          rows: [
            ['SUM(B2:B9)', 'Adds a range', 'Totals of assets, costs, revenue'],
            ['AVERAGE(B2:B9)', 'The mean', 'Average cost per game'],
            ['MIN / MAX', 'Smallest / largest', 'Best and worst month'],
            ['COUNT(B2:B9)', 'How many numbers', 'Number of transactions'],
            ['ROUND(B2,0)', 'Rounds to a set number of decimals', 'Show whole dollars'],
            ['ABS(B2)', 'Removes a minus sign', 'Size of a difference'],
          ],
        },
        { type: 'callout', title: 'Round at the end', text: 'ROUND changes the value itself. Use number formatting to change only how it looks, and keep full precision in the calculations.' },
      ],
    },
    {
      kicker: 'Decisions',
      title: 'IF and SUMIF',
      blocks: [
        { type: 'p', text: '**IF(test, if true, if false)** lets a cell choose. **SUMIF(range, what to match, numbers to add)** adds only the lines that match, which is how you total a ledger by category.' },
        {
          type: 'sheet',
          title: 'Total each category with SUMIF. Use $ on the ranges so the formula can be copied down.',
          cells: {
            A1: 'Category', B1: 'Amount ($M)', D1: 'Category', E1: 'Total',
            A2: 'Tickets', B2: 12, A3: 'Wages', B3: 9, A4: 'Tickets', B4: 8, A5: 'Merchandise', B5: 5, A6: 'Wages', B6: 7, A7: 'Tickets', B7: 6,
            D2: 'Tickets', D3: 'Wages', D4: 'Merchandise',
          },
          heads: ['A1', 'B1', 'D1', 'E1'],
          editable: ['E2', 'E3', 'E4'],
          tasks: [
            { prompt: 'Tickets total in **E2**.', cell: 'E2', expect: 26, hint: '=SUMIF($A$2:$A$7,D2,$B$2:$B$7)' },
            { prompt: 'Wages total in **E3**.', cell: 'E3', expect: 16, hint: '=SUMIF($A$2:$A$7,D3,$B$2:$B$7)' },
            { prompt: 'Merchandise total in **E4**.', cell: 'E4', expect: 5, hint: '=SUMIF($A$2:$A$7,D4,$B$2:$B$7)' },
          ],
        },
        {
          type: 'sheet',
          title: 'Change the net income in B1 and watch the IF in B2 decide.',
          cells: { A1: 'Net income ($M)', B1: -4, A2: 'Result', B2: '=IF(B1>=0,"Profit","Loss")' },
          editable: ['B1'],
        },
      ],
    },
    {
      kicker: 'Lookups',
      title: 'Find a value by its code',
      blocks: [
        { type: 'p', text: 'A lookup finds a row by its key and returns something from that row. In accounting it turns an **account code** into an **account name**, or a **team** into its **budget**. **XLOOKUP** is the newer version. **VLOOKUP** is older and still everywhere.' },
        {
          type: 'table',
          head: ['Function', 'Shape'],
          rows: [
            ['VLOOKUP', '=VLOOKUP(what to find, table, column number, FALSE)'],
            ['XLOOKUP', '=XLOOKUP(what to find, where to look, what to return)'],
          ],
        },
        {
          type: 'sheet',
          title: 'Look up the name for the code in D2.',
          cells: { A1: 'Code', B1: 'Account', A2: 1000, B2: 'Cash', A3: 1100, B3: 'Accounts receivable', A4: 2000, B4: 'Accounts payable', A5: 3000, B5: 'Capital stock', D1: 'Code to find', E1: 'Account', D2: 1100 },
          heads: ['A1', 'B1', 'D1', 'E1'],
          editable: ['E2', 'D2'],
          tasks: [{ prompt: 'Put the account name in **E2**. Then change D2 to 2000.', cell: 'E2', expect: 'Accounts receivable', hint: '=VLOOKUP(D2,A2:B5,2,FALSE)' }],
        },
        { type: 'p', text: 'Always ask for an **exact match** (FALSE in VLOOKUP). The default can quietly return the wrong row.' },
      ],
    },
    {
      kicker: 'Formatting',
      title: 'Make numbers readable',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Thousands separators:** 1,620,000, not 1620000.',
            '**Currency signs** on the first and total rows, and the unit in the heading ($M, €M).',
            '**Negatives in brackets:** ($4,000) is the accounting habit.',
            '**Percentages** as percentages (33.3%), and the same decimals down a column.',
            'Open the formatting window with **Ctrl+1**.',
          ],
        },
        {
          type: 'table',
          head: ['Value', 'Raw', 'Shown as'],
          rows: [
            ['Revenue', '1620000', '$1,620,000'],
            ['Loss', '−4000', '($4,000)'],
            ['Margin', '0.3333', '33.3%'],
          ],
        },
        { type: 'p', text: 'Formatting changes how a number **looks**. It never changes what is stored.' },
      ],
    },
    {
      kicker: 'Trust',
      title: 'Check cells catch mistakes',
      blocks: [
        { type: 'p', text: 'A model you cannot check is a model you cannot trust. Build a cell whose job is to be **zero** when everything is fine.' },
        {
          type: 'sheet',
          title: 'Does the balance sheet balance? Build the check in B4, then change the equity in B3 and watch it react.',
          cells: { A1: 'Assets', B1: 605, A2: 'Liabilities', B2: 305, A3: 'Equity', B3: 300, A4: 'Check (should be 0)' },
          editable: ['B3', 'B4'],
          cellFormats: { B1: 'int', B2: 'int', B3: 'int', B4: 'int' },
          tasks: [{ prompt: 'In **B4**, subtract liabilities and equity from assets.', cell: 'B4', expect: 0, hint: '=B1-(B2+B3)' }],
        },
        {
          type: 'bullets',
          items: [
            'Does the balance sheet balance?',
            'Do the parts add up to the total you were given?',
            'Is the answer the right size? A club’s wage bill of $5 is a typo, not a finding.',
          ],
        },
      ],
    },
    {
      kicker: 'Habits',
      title: 'How good models are built',
      blocks: [
        {
          type: 'steps',
          items: [
            '**Inputs in one place.** Keep prices, rates and balances in clearly labeled cells.',
            '**No numbers buried in formulas.** Write **=B1*B2**, not **=18000*90**. Then one change flows everywhere.',
            '**One formula per column.** Write it once and copy it down. If one row differs, it is probably a mistake.',
            '**Label units.** $, $M, tickets, %.',
            '**Avoid merged cells.** They break sorting, copying and formulas.',
            '**Add a checks area.** Totals that must match, and a balance check.',
          ],
        },
      ],
    },
    {
      kicker: 'Speed',
      title: 'Shortcuts worth learning',
      blocks: [
        {
          type: 'table',
          head: ['Keys (Windows)', 'What it does'],
          rows: [
            ['F2', 'Edit the cell'],
            ['F4', 'Cycle $ on a reference'],
            ['Alt + =', 'AutoSum the range above or beside'],
            ['Ctrl + D', 'Copy the formula from the cell above'],
            ['Ctrl + `', 'Show every formula in the sheet'],
            ['Ctrl + 1', 'Format cells'],
            ['Ctrl + Arrow', 'Jump to the edge of the data'],
          ],
        },
        { type: 'p', text: 'On a Mac most Ctrl shortcuts become Cmd. Check Excel’s Help for the few that differ.' },
      ],
    },
    {
      kicker: 'What comes next',
      title: 'Beyond the basics',
      blocks: [
        {
          type: 'columns',
          items: [
            { title: 'Pivot tables', text: 'Summarize thousands of transactions by team, month or category in a few clicks.' },
            { title: 'Charts', text: 'Turn a table into a picture: trends over time, comparisons, shares.' },
            { title: 'Tables (Ctrl+T)', text: 'Give a block of data a name and let formulas grow with it.' },
            { title: 'Data validation', text: 'Limit what can be typed in an input cell, so bad data cannot get in.' },
          ],
        },
        { type: 'p', text: 'You do not need these to follow the course, but they are what a finance team uses day to day.' },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Cell', def: 'One box in the grid, named by its column letter and row number, such as B3.' },
    { term: 'Range', def: 'A block of cells written with a colon, such as B2:B6.' },
    { term: 'Formula', def: 'A cell that calculates. It starts with = and can point at other cells.' },
    { term: 'Function', def: 'A built-in calculation with a name, such as SUM or IF.' },
    { term: 'Relative reference', def: 'A cell name that shifts when the formula is copied, such as B2.' },
    { term: 'Absolute reference', def: 'A cell name locked with dollar signs, such as $B$1, so it never shifts.' },
    { term: 'Fill down', def: 'Copying a formula into the cells below it (Ctrl+D or dragging the corner).' },
    { term: 'SUMIF', def: 'Adds only the numbers whose label matches a condition.' },
    { term: 'Lookup', def: 'Finds a row by a key and returns a value from it, such as VLOOKUP or XLOOKUP.' },
    { term: 'Check cell', def: 'A cell built to equal zero (or TRUE) when the model is consistent.' },
    { term: 'Number format', def: 'How a stored number is displayed (currency, percent, decimals). It never changes the value.' },
  ],
  cards: [
    { front: 'What must every formula start with?', back: 'An equals sign (=).' },
    { front: 'What does $B$1 do when copied?', back: 'Nothing changes. It always points at B1.' },
    { front: 'Which key adds the $ signs to a reference?', back: 'F4.' },
    { front: 'Write a formula that totals B2 to B9.', back: '=SUM(B2:B9)' },
    { front: 'What is a check cell for?', back: 'To show zero (or TRUE) when the model is consistent, for example assets minus liabilities and equity.' },
    { front: 'Does number formatting change the stored value?', back: 'No. It changes only how the value is displayed. ROUND changes the value.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'FC Barcelona’s year, rebuilt in a sheet',
    note: 'A real club’s published 2024–25 figures, as reported in October 2025, turned into the ratios an analyst would compute.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The reported figures',
        blocks: [
          {
            type: 'kpis',
            items: [
              { label: 'Revenue', value: '€994M', note: 'up €100M' },
              { label: 'Loss after tax', value: '€17M', note: '' },
              { label: 'Wages', value: '54%', note: 'of revenue' },
            ],
          },
          { type: 'p', text: 'The report also gave debt of **€469M** (€90M lower than a year earlier) and sponsorship income of **€259M**.' },
        ],
      },
      {
        kicker: 'Your turn',
        title: 'Four ratios an analyst would want',
        blocks: [
          {
            type: 'sheet',
            title: 'Fill the blue-outlined cells. Figures in €M.',
            cells: {
              A1: 'Item', B1: '€M',
              A2: 'Revenue', B2: 994, A3: 'Loss after tax', B3: -17, A4: 'Wages as share of revenue', B4: 0.54,
              A5: 'Debt now', B5: 469, A6: 'Debt reduction in the year', B6: 90, A7: 'Sponsorship income', B7: 259,
              A9: 'Wage bill', A10: 'Net margin', A11: 'Debt a year earlier', A12: 'Sponsorship share of revenue',
            },
            heads: ['A1', 'B1'],
            editable: ['B9', 'B10', 'B11', 'B12'],
            cellFormats: { B2: 'int', B3: 'int', B4: 'pct0', B5: 'int', B6: 'int', B7: 'int', B9: 'dec1', B10: 'pct', B11: 'int', B12: 'pct' },
            tasks: [
              { prompt: 'Wage bill in **B9**: revenue times the wage share.', cell: 'B9', expect: 994 * 0.54, hint: '=B2*B4' },
              { prompt: 'Net margin in **B10**: loss divided by revenue.', cell: 'B10', expect: -17 / 994, hint: '=B3/B2' },
              { prompt: 'Debt a year earlier in **B11**.', cell: 'B11', expect: 559, hint: '=B5+B6' },
              { prompt: 'Sponsorship share in **B12**.', cell: 'B12', expect: 259 / 994, hint: '=B7/B2' },
            ],
          },
          { type: 'p', text: 'These are our own calculations from the published figures. The wage bill is approximate because the report gave the share as a rounded 54%.' },
        ],
      },
      {
        kicker: 'Reading the result',
        title: 'What the sheet shows',
        blocks: [
          {
            type: 'bullets',
            items: [
              'A margin of about **−1.7%** is a small loss on a very large revenue base.',
              'The wage bill of roughly **€537M** is over half of all revenue, which leaves little room for a bad year.',
              'Debt fell about **16%** in a year (€90M of €559M).',
            ],
          },
          { type: 'callout', title: 'Why the sheet beats a calculator', text: 'If a later report changes revenue, you type one number and all four ratios update.' },
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
                note: 'Inside World Football, 8 October 2025. Revenue, loss, wage ratio, debt and sponsorship income. The ratios are our own calculations.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Ironhawks’ break-even model',
    universe: 'ironhawks',
    slides: [
      {
        kicker: 'The set-up',
        title: 'One input block, three answers',
        blocks: [
          {
            type: 'p',
            text: 'The Ironhawks charge an average of **$90** a ticket. Each ticket brings **$30** of variable cost. The club carries **$24M** of fixed costs a season and expects to sell **600,000** tickets.',
          },
          {
            type: 'formulas',
            items: [
              { name: 'Contribution margin', formula: 'Price − variable cost' },
              { name: 'Break-even tickets', formula: 'Fixed costs ÷ contribution margin' },
              { name: 'Profit', formula: 'Tickets × contribution margin − fixed costs' },
            ],
          },
        ],
      },
      {
        kicker: 'Build it',
        title: 'Four formulas that point at the inputs',
        blocks: [
          {
            type: 'sheet',
            title: 'Fill B7 to B10. Then change B5 and see what happens to profit.',
            cells: {
              A1: 'Input', B1: 'Value',
              A2: 'Ticket price', B2: 90, A3: 'Variable cost per ticket', B3: 30, A4: 'Fixed costs per season', B4: 24_000_000, A5: 'Tickets sold', B5: 600_000,
              A7: 'Contribution margin per ticket', A8: 'Break-even tickets', A9: 'Profit at tickets sold', A10: 'Margin of safety',
            },
            heads: ['A1', 'B1'],
            editable: ['B5', 'B7', 'B8', 'B9', 'B10'],
            cellFormats: { B2: 'money', B3: 'money', B4: 'money', B5: 'int', B7: 'money', B8: 'int', B9: 'money', B10: 'pct' },
            tasks: [
              { prompt: 'Contribution margin in **B7**.', cell: 'B7', expect: 60, hint: '=B2-B3' },
              { prompt: 'Break-even tickets in **B8**.', cell: 'B8', expect: 400_000, hint: '=B4/B7' },
              { prompt: 'Profit in **B9**.', cell: 'B9', expect: 12_000_000, hint: '=B5*B7-B4' },
              { prompt: 'Margin of safety in **B10**: how far sales are above break-even, as a share of sales.', cell: 'B10', expect: 1 / 3, tol: 1e-9, hint: '=(B5-B8)/B5' },
            ],
          },
        ],
      },
      {
        kicker: 'What if?',
        title: 'Let the sheet do the experiments',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Sell only **450,000** tickets: profit is 450,000 × $60 − $24M = **$3M**.',
              'Cut the price to **$80**: the margin drops to $50 and break-even rises to **480,000** tickets.',
              'Fixed costs rise to **$30M**: break-even rises to **500,000** tickets.',
            ],
          },
          { type: 'p', text: 'Each of those is one typed number in your sheet. That is the payoff of formulas that point at inputs.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ practice
  questions: [
    {
      id: 'q1',
      type: 'mcq',
      q: 'Which reference keeps pointing at cell B1 however far the formula is copied?',
      options: ['$B$1', 'B1', 'B$1 only', '$B1 only'],
      answer: 0,
      explanation: 'The dollar signs freeze both the column and the row. B$1 freezes only the row and $B1 only the column.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'Cells B2 to B5 hold 10, 20, 30 and 40. What does =SUM(B2:B5) show?',
      options: ['100', '60', '25', '10'],
      answer: 0,
      explanation: 'SUM adds every cell in the range: 10 + 20 + 30 + 40 = 100. The average would be 25.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'B1 holds the number of tickets and B2 the price. What is the best way to get revenue?',
      options: ['=B1*B2', 'B1*B2', '=600000*90', '=B1+B2'],
      answer: 0,
      explanation: 'A formula starts with =, and pointing at the cells means it updates when an input changes. Without the equals sign Excel treats it as text. Typing the numbers in hides them inside the formula.',
      review: { section: 'plain', slide: 2 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'B1 holds −5. What does =IF(B1>=0,"Profit","Loss") show?',
      options: ['Loss', 'Profit', '−5', 'An error'],
      answer: 0,
      explanation: 'The test B1>=0 is false for −5, so IF returns the third part: "Loss".',
      review: { section: 'plain', slide: 5 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A model has assets of 605, liabilities of 305 and equity of 300. What should the check =Assets−(Liabilities+Equity) show?',
      options: ['0', '300', '605', '−300'],
      answer: 0,
      explanation: '605 − (305 + 300) = 0. A check cell is built to be zero when the balance sheet balances.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q6',
      type: 'mcq',
      q: 'C2 holds =B2/B$1 and is copied down to C3. What does C3 hold?',
      options: ['=B3/B$1', '=B3/B1', '=B2/B$1', '=B3/B$2'],
      answer: 0,
      explanation: 'The B2 part is relative, so it becomes B3. The row in B$1 is frozen, so it stays B$1.',
      review: { section: 'plain', slide: 3 },
    },
    {
      id: 'q7',
      type: 'mcq',
      q: 'You format a cell holding 0.3333 as a percentage. What changes?',
      options: ['Only how it looks: it shows 33.3%', 'The stored value becomes 33.33', 'The cell turns into text', 'Nothing, formatting cannot show percentages'],
      answer: 0,
      explanation: 'Number formats change the display only. The stored value stays 0.3333.',
      review: { section: 'plain', slide: 7 },
    },
    {
      id: 'q8',
      type: 'open',
      q: 'Exercise. The Ironhawks’ inputs sit in B2 (price $90), B3 (variable cost $30), B4 (fixed costs $24,000,000) and B5 (tickets sold 500,000). Write the formulas for (a) contribution margin per ticket, (b) break-even tickets and (c) profit.',
      answer: [
        '**(a)** =B2−B3, which gives **$60**.',
        '**(b)** =B4/(B2−B3), which gives **400,000** tickets.',
        '**(c)** =B5*(B2−B3)−B4, which gives 500,000 × $60 − $24M = **$6,000,000**.',
        'All three point at the inputs, so changing a price or a cost updates them.',
      ],
      review: { section: 'sports', slide: 1 },
    },
  ],

  // ------------------------------------------------------------------ exam-level questions
  exam: [
    {
      id: 'e1',
      marks: 6,
      q: 'Explain the difference between a relative and an absolute cell reference. Use an example from a financial statement to show why the difference matters when you copy a formula down a column.',
      answer: [
        'A **relative** reference (such as B2) shifts when a formula is copied: copied one row down it becomes B3. An **absolute** reference (such as $B$1) is locked with dollar signs and always points at the same cell.',
        'Example: to show each cost as a percentage of revenue held in B1, the formula in C3 is **=B3/$B$1**. Copied down, the cost reference moves (B4, B5…) as it should, while the revenue reference stays on B1.',
        'Without the dollar signs, copying would move the divisor to B2, B3… and every ratio below the first row would be wrong, often without any error message.',
      ],
      marking: [
        'Defines relative reference: it shifts when copied (1)',
        'Defines absolute reference: locked with $ (1)',
        'Gives a correct formula example with a $ reference (2)',
        'Shows or says what goes wrong without the $ (1)',
        'Links it to a financial-statement ratio such as costs as a share of revenue (1)',
      ],
    },
    {
      id: 'e2',
      marks: 8,
      q: 'A colleague sends you a spreadsheet model of a club’s season budget and asks you to make it reliable. Describe four practices you would apply and say what error each one prevents.',
      answer: [
        '**Keep inputs in one labeled place and point formulas at them.** This prevents numbers buried inside formulas, which are easy to miss when assumptions change.',
        '**Use one consistent formula down each column** (with absolute references where needed). This prevents an inconsistent row, such as one cell that was typed over.',
        '**Add check cells**, such as a balance check or a total that must match another total. These catch errors that otherwise go unseen.',
        '**Format numbers clearly and label units** ($ or $M, percentages, brackets for negatives). This prevents misreading a figure by a factor of a thousand.',
        'Also acceptable: avoiding merged cells, using ROUND only for display, and reviewing formulas with Show Formulas.',
      ],
      marking: [
        'Practice 1 named (inputs separate / no hard-coded numbers) and the error it prevents (2)',
        'Practice 2 named (consistent formulas) and the error it prevents (2)',
        'Practice 3 named (checks) and the error it prevents (2)',
        'Practice 4 named (formatting and units, or another valid one) and the error it prevents (2)',
      ],
    },
  ],

  videos: [],
};
