// Accounting & Forecasting, Sessions 5-7: the balance sheet, assets.
// Built from the course slides for Chapters 7, 8 and 9. All explanations are written fresh.
// Left out on purpose, because the slides mark them "not for exam": aging of receivables and the
// income-statement approach, recoveries of written-off accounts, the direct write-off method,
// goodwill acquisition examples, and natural resources / depletion.
// Real-example figures: Manchester United plc, 30 September 2025 (see sources slide).

export const balanceSheetAssetsTopic = {
  id: 'balance-sheet-assets',
  course: 'accounting',
  title: 'The balance sheet: assets',
  sessions: 'Sessions 5–7',
  reading: 'Course slides: Chapters 7, 8 and 9',
  minutes: 55,
  summary:
    'How each kind of asset, from cash to stadiums to trademarks, is measured, and how its cost is turned into expense.',
  formulas: [
    { name: 'Interest', formula: 'Principal × Annual rate × Time (in years)' },
    { name: 'Net realizable value of receivables', formula: 'Accounts receivable − Allowance for doubtful accounts' },
    { name: 'Cost of goods sold (periodic)', formula: 'Beginning inventory + Purchases − Ending inventory' },
    { name: 'Straight-line depreciation', formula: '(Cost − Residual value) ÷ Years of useful life' },
    { name: 'Book value', formula: 'Cost − Accumulated depreciation' },
    { name: 'Gain or loss on disposal', formula: 'Cash received − Book value' },
  ],

  // ------------------------------------------------------------------ plain words
  plain: [
    {
      kicker: 'The big picture',
      title: 'Assets, from closest to cash to furthest',
      blocks: [
        { type: 'big', text: 'The balance sheet lists assets by how **quickly they turn into cash**.' },
        {
          type: 'steps',
          items: [
            '**Cash and cash equivalents.** Already cash.',
            '**Marketable securities.** Can be sold quickly at a quoted price.',
            '**Receivables.** Cash owed by customers, usually collected in 30 to 60 days.',
            '**Inventory.** One step further: it must be sold first.',
            '**Plant assets.** Land, buildings, equipment. Used for years, not sold.',
            '**Intangibles.** Patents, trademarks and similar rights with no physical form.',
          ],
        },
        { type: 'p', text: 'Each group has its own way of being measured. That is the thread through this topic.' },
      ],
    },
    {
      kicker: 'Financial assets',
      title: 'Three ways to value the liquid assets',
      blocks: [
        {
          type: 'p',
          text: 'Cash, short-term investments and receivables are **financial assets**: easily turned into known amounts of cash. They are shown at what they are worth in cash terms, not simply at cost.',
        },
        {
          type: 'table',
          head: ['Asset', 'Shown at'],
          rows: [
            ['Cash and cash equivalents', 'Face amount'],
            ['Short-term investments (marketable securities)', 'Fair market value (an exception to the cost principle)'],
            ['Receivables', 'Net realizable value: the amount expected to be collected'],
          ],
        },
      ],
    },
    {
      kicker: 'Cash',
      title: 'Cash and cash equivalents',
      blocks: [
        {
          type: 'p',
          text: '**Cash** is money on deposit at banks and anything a bank will accept for deposit: coins, notes, checks, money orders and bank-card sales.',
        },
        {
          type: 'p',
          text: 'A **cash equivalent** is an investment that is very safe, has a very stable market value and **matures within 90 days of acquisition**. Examples: money market funds, Treasury bills, high-grade commercial paper.',
        },
        {
          type: 'callout',
          title: 'Lines of credit',
          text: 'A bank agrees in advance to lend up to a limit. Unused, it is not an asset and creates no liability, but it adds liquidity, so it is disclosed in the notes. A liability appears as soon as part is used.',
        },
      ],
    },
    {
      kicker: 'Short-term investments',
      title: 'Marketable securities',
      blocks: [
        {
          type: 'p',
          text: 'Bonds and stocks of public companies that can be bought and sold quickly at quoted prices. A worked example: Foster Corporation buys **4,000 shares** at $49.50 plus a $2,000 commission.',
        },
        {
          type: 'steps',
          items: [
            '**Buy:** cost = 4,000 × $49.50 + $2,000 = **$200,000** ($50 a share).',
            '**Dividend** of $0.30 a share: 4,000 × $0.30 = **$1,200** dividend revenue.',
            '**Sell 500 shares** at $52 less $200 commission: proceeds $25,800 versus cost $25,000, a **$800 gain**.',
            '**Sell 600 shares** at $48 less $250: proceeds $28,550 versus cost $30,000, a **$1,450 loss**.',
            '**Year end:** 2,900 shares remain, cost $145,000, market value 2,900 × $47 = $136,300. Write down by **$8,700** (an unrealized holding loss).',
          ],
        },
      ],
    },
    {
      kicker: 'Receivables',
      title: 'Accounts receivable and the allowance',
      blocks: [
        {
          type: 'p',
          text: 'Customers who buy on credit may not all pay. The business estimates the loss and reports receivables at **net realizable value**. The estimate sits in a contra account, the **Allowance for Doubtful Accounts**.',
        },
        {
          type: 'table',
          caption: 'World Famous Toy Co.',
          head: ['', 'Before write-off', 'After writing off a $4,000 account'],
          rows: [
            ['Accounts receivable', '$250,000', '$246,000'],
            ['Less: allowance', '$10,000', '$6,000'],
            ['Net realizable value', '$240,000', '$240,000'],
          ],
        },
        {
          type: 'p',
          text: 'The estimate ($10,000) is expensed when it is made. Writing off a specific account later just shrinks receivables **and** the allowance by the same amount, so net realizable value and profit do not change.',
        },
      ],
    },
    {
      kicker: 'Notes receivable',
      title: 'Notes and interest',
      blocks: [
        {
          type: 'p',
          text: 'A promissory note is a written promise to pay a definite sum on demand or at a future date. The **maker** signs it and the **payee** is paid. Interest is the charge for using money.',
        },
        {
          type: 'formulas',
          items: [{ name: 'Interest', formula: 'Principal × Rate × Time' }],
        },
        {
          type: 'steps',
          items: [
            '$200,000 at 6% for one year: $200,000 × 6% × 1 = **$12,000**. For four months: × 4/12 = **$4,000**.',
            'A customer owing $60,000 gives a 3-month, 6% note on 1 December. By 31 December, **$300** of interest has accrued ($60,000 × 6% × 1/12).',
            'At maturity: total interest = $900, cash received = **$60,900**. $300 was already recorded, so $600 is revenue in the new year.',
          ],
        },
      ],
    },
    {
      kicker: 'Inventory',
      title: 'Perpetual versus periodic',
      blocks: [
        {
          type: 'p',
          text: '**Inventory** is goods owned and held for sale. It sits after receivables on the balance sheet, because it is one step further from cash.',
        },
        {
          type: 'columns',
          items: [
            {
              title: 'Perpetual system',
              text: 'Update inventory and cost of goods sold **with every sale**. You always know what is on hand. Think: continuous tracking.',
            },
            {
              title: 'Periodic system',
              text: 'Count the stock at period end, then work out the cost of goods sold: beginning inventory + purchases − ending inventory. Think: wait, then count.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Example (periodic): beginning $10,000 + purchases $80,000 = $90,000 available. A count shows $7,000 left, so cost of goods sold is **$83,000**.',
        },
      ],
    },
    {
      kicker: 'Which cost?',
      title: 'Which units did we sell?',
      blocks: [
        {
          type: 'p',
          text: 'Identical units are often bought at different prices. Which price moves to cost of goods sold? There are four answers.',
        },
        {
          type: 'columns',
          items: [
            { title: 'Specific identification', text: 'Track each unit’s actual cost. Only practical for unique, high-priced items.' },
            { title: 'Average cost', text: 'Use one average cost per unit.' },
            { title: 'FIFO', text: 'First in, first out. The oldest costs go to cost of goods sold. Inventory is left at recent prices.' },
            { title: 'LIFO', text: 'Last in, first out. The newest costs go to cost of goods sold. Inventory is left at old prices.' },
          ],
        },
        {
          type: 'p',
          text: 'Mead Electric holds 2 generators at $1,000 and buys 3 more at $1,200 (average **$1,120**). Selling one costs **$1,000** under FIFO, **$1,200** under LIFO, **$1,120** on average. Selling four costs $4,400 under FIFO and $4,600 under LIFO.',
        },
      ],
    },
    {
      kicker: 'Same goods, different profit',
      title: 'Four methods on one set of numbers',
      blocks: [
        {
          type: 'p',
          text: 'The Kitchen Counter has 30 units available at a total cost of $3,000, sells 18 and has 12 left. Prices rose through the year ($80 up to $130).',
        },
        {
          type: 'table',
          head: ['Method', 'Ending inventory', 'Cost of goods sold'],
          rows: [
            ['Specific identification (units identified)', '$1,240', '$1,760'],
            ['Average cost ($3,000 ÷ 30 = $100 a unit)', '$1,200', '$1,800'],
            ['FIFO', '$1,450', '$1,550'],
            ['LIFO', '$980', '$2,020'],
          ],
        },
        {
          type: 'p',
          text: 'In a period of **rising prices**, FIFO shows the lowest cost of goods sold, so the **highest profit** (and higher tax). LIFO shows the highest cost of goods sold, so the lowest profit and tax.',
        },
      ],
    },
    {
      kicker: 'Rules of the game',
      title: 'Pros, cons and consistency',
      blocks: [
        {
          type: 'bullets',
          items: [
            '**Specific identification** matches the physical flow, but is impractical for identical items and can invite profit manipulation.',
            '**Average cost** is simple and hard to manipulate, but reacts slowly to price changes.',
            '**FIFO** puts recent prices on the balance sheet, but can mismatch old costs with new revenue.',
            '**LIFO** matches current costs with current revenue, but leaves old prices on the balance sheet.',
            '**Consistency:** once a method is chosen, keep using it. A change must be explained and its effects disclosed.',
            '**IFRS bans LIFO** because it produces outdated inventory numbers. FIFO is accepted nearly everywhere.',
          ],
        },
      ],
    },
    {
      kicker: 'Plant assets',
      title: 'What goes into an asset’s cost',
      blocks: [
        {
          type: 'p',
          text: 'Plant assets are long-term prepaid services. The cost is **everything reasonable and necessary to get the asset to your door and ready to use**. Anything after that is an expense.',
        },
        {
          type: 'table',
          caption: 'A machine on installment',
          head: ['Part', 'Amount'],
          rows: [
            ['List price', '$10,000'],
            ['Sales taxes', '$600'],
            ['Transportation', '$1,350'],
            ['Installation and set-up', '$500'],
            ['Cost to record', '$12,450'],
          ],
        },
        {
          type: 'bullets',
          items: [
            'The $2,000 of interest on the installment plan is **interest expense**, not cost. If a company builds an asset itself, interest during construction **is** added to cost.',
            'Repairing damage caused by dropping the machine while unloading is an **expense**: it was not necessary.',
            '**Land** is never depreciated. Land improvements (fences, parking lots, landscaping) are a separate account because they wear out.',
            'A lump-sum purchase is split by **appraised value**: an $800,000 fitness center appraised at land $250,000, improvements $50,000, building $430,000, equipment $270,000 (total $1,000,000) is booked at 25%, 5%, 43% and 27% of $800,000: $200,000, $40,000, $344,000 and $216,000.',
            '**Capital expenditures** (buying or expanding assets) go on the balance sheet. **Revenue expenditures** (repairs, fuel) are expensed.',
          ],
        },
      ],
    },
    {
      kicker: 'Depreciation',
      title: 'Spreading cost over time',
      blocks: [
        {
          type: 'p',
          text: 'Depreciation allocates an asset’s cost to expense over the periods it helps earn revenue. It happens because of **wear** and **obsolescence**. Repairs do not remove the need for it.',
        },
        {
          type: 'table',
          caption: 'Straight line: truck costing $17,000, residual value $2,000, 5-year life',
          head: ['Year', 'Depreciation', 'Accumulated', 'Book value'],
          rows: [
            ['Start', '', '', '$17,000'],
            ['1', '$3,000', '$3,000', '$14,000'],
            ['2', '$3,000', '$6,000', '$11,000'],
            ['5', '$3,000', '$15,000', '$2,000'],
          ],
        },
        {
          type: 'bullets',
          items: [
            'Annual depreciation = ($17,000 − $2,000) ÷ 5 = **$3,000**.',
            'Part-year assets: round to the nearest whole month, or use the **half-year convention** (half a year’s depreciation in the first year).',
            'If the estimated life changes, spread the **remaining book value** over the **remaining life**. A $10,000 asset, 5-year life, re-estimated after 3 years to last 4 more: ($10,000 − $6,000) ÷ 4 = **$1,000** a year.',
            'Disclose the methods used. Apply them consistently.',
          ],
        },
      ],
    },
    {
      kicker: 'Disposal',
      title: 'Selling, scrapping and impairment',
      blocks: [
        {
          type: 'p',
          text: 'Depreciate up to the date of disposal, then remove the asset’s **cost** and its **accumulated depreciation**. The difference between cash and book value is a gain or loss.',
        },
        {
          type: 'table',
          caption: 'A machine costing $10,000 with $8,000 accumulated depreciation (book value $2,000)',
          head: ['Sold for', 'Compare with book value', 'Result'],
          rows: [
            ['$3,000', '$3,000 − $2,000', 'Gain of $1,000'],
            ['$1,200', '$1,200 − $2,000', 'Loss of $800'],
          ],
        },
        {
          type: 'callout',
          title: 'Impairment',
          text: 'If an asset’s carrying amount cannot be recovered through future use or sale, write it down to fair value and record an impairment loss. Example: machinery carried at $100,000 with a recoverable amount of $72,000 gives a **$28,000** impairment loss.',
        },
      ],
    },
    {
      kicker: 'Intangibles',
      title: 'Assets you cannot touch',
      blocks: [
        {
          type: 'p',
          text: 'Intangible assets have no physical form but help earn income: patents, copyrights, trademarks and franchises (and goodwill, which arises only when one company buys another). They are recorded at **cost** and written off by **amortization**, normally straight-line.',
        },
        {
          type: 'bullets',
          items: [
            '**Patent** bought for $100,000 with 15 years of legal life left but only 8 years of likely usefulness: amortize over 8 years = **$12,500** a year. The legal maximum is 20 years.',
            '**Trademark or brand name:** if bought, capitalize and amortize. If built through advertising, the cost is **expensed** as incurred.',
            '**Internally developed patents:** only registration and legal costs are capitalized.',
            '**Research and development** is generally expensed when incurred.',
            'If the future benefit is too uncertain (staff training, reorganization costs), the cost is an **expense**, not an asset.',
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
            'Writing off a specific bad debt and recording **a new expense**. The expense was already booked when the allowance was set.',
            'Putting **interest** on installment purchases into the asset’s cost.',
            'Depreciating **land**.',
            'Using full cost instead of **cost − residual value** in the straight-line formula.',
            'Calling any inventory method “the real cost”. They are assumptions; the physical flow need not match.',
            'Confusing **book value** with market value.',
          ],
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'Assets in order, closest to cash first',
      blocks: [
        { type: 'p', text: 'The balance sheet lists assets from the most liquid to the least. Each one is measured in its own way.' },
        {
          type: 'flow',
          items: [
            { title: 'Cash', text: 'Face amount' },
            { title: 'Short-term investments', text: 'Market value' },
            { title: 'Receivables', text: 'Net realizable value' },
            { title: 'Inventory', text: 'Cost, by the method chosen' },
            { title: 'Plant assets', text: 'Cost less accumulated depreciation' },
            { title: 'Intangibles', text: 'Cost less amortization' },
          ],
        },
        {
          type: 'figure',
          src: 'acc-assets-classified-balance-sheet.png',
          alt: 'The asset side of a classified balance sheet showing current and non-current assets',
          caption: 'The asset side of a real balance sheet, from current to non-current.',
          need: 'A crop of the asset side of a real company’s balance sheet (current assets, then property and equipment, then intangibles) from a public annual report. Note the company and year for the caption.',
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'Same jerseys, three profits',
      blocks: [
        { type: 'p', text: 'The team shop sells 1,200 jerseys for $108,000. Only the cost-flow assumption changes. Prices rose, so FIFO shows the highest profit.' },
        {
          type: 'bars',
          title: 'Gross profit by method ($)',
          items: [
            { label: 'FIFO', value: 58000 },
            { label: 'Average cost', value: 54000 },
            { label: 'LIFO', value: 50000 },
          ],
        },
      ],
    },
    {
      kicker: 'Picture it',
      title: 'Straight-line depreciation, year by year',
      blocks: [
        { type: 'p', text: 'The $10M of training equipment loses $1.8M of book value every year, until only the $1M residual value is left.' },
        {
          type: 'bars',
          title: 'Book value at the end of each year ($M)',
          items: [
            { label: 'Purchase', value: 10 },
            { label: 'Year 1', value: 8.2 },
            { label: 'Year 2', value: 6.4 },
            { label: 'Year 3', value: 4.6 },
            { label: 'Year 4', value: 2.8 },
            { label: 'Year 5', value: 1 },
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------------------ terms
  terms: [
    { term: 'Financial assets', def: 'Cash and assets easily turned into known amounts of cash: cash equivalents, marketable securities and receivables.' },
    { term: 'Cash equivalent', def: 'A very safe, stable-value investment that matures within 90 days of acquisition, such as a Treasury bill.' },
    { term: 'Marketable securities', def: 'Bonds and stocks that can be bought and sold quickly at quoted market prices. Reported at fair market value.' },
    { term: 'Net realizable value', def: 'The amount of receivables management expects to collect: gross receivables less the allowance.' },
    { term: 'Allowance for doubtful accounts', def: 'A contra-asset account holding the estimated uncollectible part of receivables.' },
    { term: 'Promissory note', def: 'A written, unconditional promise to pay a definite sum on demand or on a future date. The maker pays the payee.' },
    { term: 'Perpetual inventory system', def: 'Inventory and cost of goods sold are updated continuously, with every sale.' },
    { term: 'Periodic inventory system', def: 'Cost of goods sold is worked out at period end from a physical count: beginning inventory + purchases − ending inventory.' },
    { term: 'FIFO', def: 'First in, first out. Assumes the oldest costs are sold first, leaving the newest costs in inventory.' },
    { term: 'LIFO', def: 'Last in, first out. Assumes the newest costs are sold first. Banned under IFRS.' },
    { term: 'Principle of consistency', def: 'Once a method is chosen it is applied from year to year. A change must be explained and its effect disclosed.' },
    { term: 'Capital expenditure', def: 'Spending that creates or extends an asset benefiting several periods. Recorded as an asset.' },
    { term: 'Revenue expenditure', def: 'Ordinary repairs, maintenance and fuel. Recorded as an expense.' },
    { term: 'Residual (salvage) value', def: 'The estimated value of an asset at the end of its useful life. Not depreciated.' },
    { term: 'Accumulated depreciation', def: 'A contra-asset holding total depreciation recorded so far. Cost minus this is book value.' },
    { term: 'Impairment', def: 'Writing an asset down to fair value when its carrying amount cannot be recovered.' },
    { term: 'Intangible asset', def: 'A long-term asset with no physical form, such as a patent, trademark, copyright or franchise.' },
    { term: 'Amortization', def: 'The systematic write-off of an intangible asset’s cost over its useful life. The intangible equivalent of depreciation.' },
  ],
  cards: [
    { front: 'How is each liquid asset valued?', back: 'Cash: face amount. Marketable securities: fair market value. Receivables: net realizable value.' },
    { front: 'Rising prices: FIFO vs LIFO profit', back: 'FIFO gives lower cost of goods sold and higher profit. LIFO gives higher cost of goods sold and lower profit and tax.' },
    { front: 'Straight-line depreciation formula', back: '(Cost − residual value) ÷ useful life in years.' },
    { front: 'Gain or loss on selling a plant asset', back: 'Cash received minus book value. Positive: gain. Negative: loss.' },
    { front: 'Does writing off a bad debt reduce profit?', back: 'No. The expense was recorded when the allowance was set. The write-off reduces receivables and the allowance equally.' },
  ],

  // ------------------------------------------------------------------ real example
  real: {
    title: 'Manchester United: players as intangible assets',
    note: 'A football club’s biggest asset is often not a building. Figures are from its report for the quarter ended 30 September 2025.',
    slides: [
      {
        kicker: 'Real example',
        title: 'The asset you cannot see',
        blocks: [
          {
            type: 'p',
            text: 'Manchester United’s balance sheet at 30 September 2025 shows **intangible assets of £1,052.7M**. The main part is the **registrations of players**: the club’s rights to their contracts. The report calls it the unamortized balance of registrations.',
          },
          {
            type: 'kpis',
            items: [
              { label: 'Intangible assets', value: '£1,052.7M', note: 'total on the balance sheet' },
              { label: 'Player registrations', value: '£624.1M', note: 'unamortized balance' },
              { label: 'Amortization, quarter', value: '£54.1M', note: 'player registrations' },
            ],
          },
        ],
      },
      {
        kicker: 'The accounting idea',
        title: 'Cost goes on the balance sheet, then into expense',
        blocks: [
          {
            type: 'steps',
            items: [
              'A right with no physical form that is **bought** is an **intangible asset**, recorded at cost.',
              'It is not kept at full cost forever. The cost is written off by **amortization**, the intangible version of depreciation.',
              'In the quarter to 30 September 2025, the club recorded **£54.1M** of amortization. That reduced profit without any cash leaving that quarter.',
            ],
          },
          {
            type: 'p',
            text: 'If the same pace held for four quarters, amortization would be around £216M a year (£54.1M × 4). That is only our rough guide, not a published figure.',
          },
          {
            type: 'callout',
            title: 'Why it matters',
            text: 'Players are not assets that sit on a shelf. Their value depends on form and fitness, which accounting cannot predict. The balance sheet shows cost less amortization, not what the players could be sold for.',
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
                note: 'Business Wire, 11 December 2025. Total intangible assets, unamortized balance of player registrations and amortization for the quarter ended 30 September 2025.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ sports example (fictional)
  sports: {
    title: 'The Ironhawks’ assets',
    universe: 'ironhawks',
    slides: [
      {
        kicker: 'Liquid assets',
        title: 'Cash equivalents and sponsor receivables',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Cash equivalents',
                text: 'The club parks $20M in 60-day Treasury bills. They mature within 90 days of purchase, so they count as **cash equivalents**. A one-year deposit would not.',
              },
              {
                title: 'Sponsor receivables',
                text: 'Sponsors owe the club $30M. The finance team expects 4% to go unpaid: allowance **$1.2M**. Net realizable value is **$28.8M**.',
              },
            ],
          },
          {
            type: 'p',
            text: 'A $0.5M sponsor goes bust. Write-off: receivables $29.5M, allowance $0.7M, net realizable value still **$28.8M**. Profit does not move.',
          },
        ],
      },
      {
        kicker: 'Inventory',
        title: 'Jerseys: FIFO versus LIFO',
        blocks: [
          {
            type: 'p',
            text: 'The team shop holds 1,000 jerseys that cost $40 each. A new batch of 1,000 arrives at $50 each. During the season it sells **1,200 jerseys at $90**, so revenue is $108,000. Total cost available: $40,000 + $50,000 = $90,000.',
          },
          {
            type: 'table',
            head: ['Method', 'Cost of goods sold', 'Gross profit', 'Ending inventory (800 jerseys)'],
            rows: [
              ['FIFO', '$50,000', '$58,000', '$40,000'],
              ['LIFO', '$58,000', '$50,000', '$32,000'],
              ['Average cost ($45 each)', '$54,000', '$54,000', '$36,000'],
            ],
          },
          {
            type: 'p',
            text: 'Same jerseys, same sales: profit differs by **$8,000** just from the cost-flow assumption. Because prices rose, FIFO gives the higher profit.',
          },
        ],
      },
      {
        kicker: 'Plant assets',
        title: 'What goes into the cost',
        blocks: [
          {
            type: 'table',
            caption: 'New practice-court equipment',
            head: ['Part', 'Amount'],
            rows: [
              ['List price', '$1,000,000'],
              ['Sales tax', '$60,000'],
              ['Delivery', '$25,000'],
              ['Installation', '$15,000'],
              ['Cost to record', '$1,100,000'],
            ],
          },
          {
            type: 'p',
            text: 'If a forklift drops a crate during unloading and the repair costs $8,000, that is an **expense**, not part of the cost.',
          },
        ],
      },
      {
        kicker: 'Depreciation and disposal',
        title: 'Training equipment',
        blocks: [
          {
            type: 'p',
            text: 'The club buys **$10M** of training equipment: 5-year life, **$1M** residual value.',
          },
          {
            type: 'steps',
            items: [
              '**Annual depreciation:** ($10M − $1M) ÷ 5 = **$1.8M**.',
              '**After 3 years:** accumulated depreciation $5.4M, book value **$4.6M**.',
              '**Sold for $5.5M:** gain of $0.9M. **Sold for $4.0M:** loss of $0.6M.',
            ],
          },
          {
            type: 'p',
            text: 'For comparison: the arena ($560M, 40 years) depreciates $14M a year and the practice facility ($70M, 25 years) depreciates $2.8M a year.',
          },
        ],
      },
      {
        kicker: 'Intangibles',
        title: 'A trademark',
        blocks: [
          {
            type: 'p',
            text: 'The club **buys** a well-known logo and trademark for **$12M** and expects to use it for 10 years. Straight-line amortization: $12M ÷ 10 = **$1.2M a year**.',
          },
          {
            type: 'callout',
            title: 'Bought versus built',
            text: 'Had the club instead built its brand through advertising campaigns, those costs would be expensed as they happen. No asset appears for a brand that was built, only for one that was bought.',
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
      q: 'At what amount are accounts receivable reported on the balance sheet?',
      options: [
        'Net realizable value: the amount expected to be collected',
        'Original sales price of every invoice',
        'Cost to the seller of the goods',
        'Fair market value of the customer’s business',
      ],
      answer: 0,
      explanation:
        'Receivables are shown net of the allowance for doubtful accounts, which gives the amount management expects to collect.',
      review: { section: 'plain', slide: 4 },
    },
    {
      id: 'q2',
      type: 'mcq',
      q: 'The Ironhawks’ receivables are $30M with a $1.2M allowance. A $0.5M customer is written off. What is net realizable value afterwards?',
      options: ['$28.8M', '$28.3M', '$29.3M', '$29.5M'],
      answer: 0,
      explanation:
        'Receivables fall to $29.5M and the allowance to $0.7M. $29.5M − $0.7M = $28.8M. A write-off does not change net realizable value.',
      review: { section: 'sports', slide: 0 },
    },
    {
      id: 'q3',
      type: 'mcq',
      q: 'Prices are rising. Compared with LIFO, FIFO will report…',
      options: [
        'Lower cost of goods sold and higher profit',
        'Higher cost of goods sold and lower profit',
        'The same profit',
        'Higher cost of goods sold and higher profit',
      ],
      answer: 0,
      explanation:
        'FIFO sends the older, cheaper costs to cost of goods sold. That means a lower expense and a higher profit (and more tax) than LIFO.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q4',
      type: 'mcq',
      q: 'The Kitchen Counter has 30 units available at a total cost of $3,000, sells 18 and holds 12. Under periodic average cost, what is cost of goods sold?',
      options: ['$1,800', '$1,200', '$1,550', '$3,000'],
      answer: 0,
      explanation: 'Average cost = $3,000 ÷ 30 = $100 a unit. Cost of goods sold = 18 × $100 = $1,800. The other 12 units × $100 = $1,200 remain in inventory.',
      review: { section: 'plain', slide: 8 },
    },
    {
      id: 'q5',
      type: 'mcq',
      q: 'A truck costs $17,000, has a residual value of $2,000 and a 5-year life. What is annual straight-line depreciation?',
      options: ['$3,000', '$3,400', '$2,000', '$15,000'],
      answer: 0,
      explanation: '($17,000 − $2,000) ÷ 5 = $3,000. Using the full $17,000 would give $3,400, which ignores the residual value.',
      review: { section: 'plain', slide: 11 },
    },
    {
      id: 'q6',
      type: 'open',
      q: 'Exercise. The Ironhawks’ training equipment cost $10M, has a $1M residual value and a 5-year life. After 3 years they sell it for $4.0M. (a) Annual depreciation? (b) Book value at sale? (c) Gain or loss, and how much?',
      answer: [
        '**(a)** ($10M − $1M) ÷ 5 = **$1.8M** a year.',
        '**(b)** Accumulated depreciation = 3 × $1.8M = $5.4M. Book value = $10M − $5.4M = **$4.6M**.',
        '**(c)** Cash $4.0M − book value $4.6M = a **loss of $0.6M**.',
      ],
      review: { section: 'sports', slide: 3 },
    },
  ],

  // ------------------------------------------------------------------ exam-level questions
  exam: [
    {
      id: 'e1',
      marks: 10,
      q: 'The Ironhawks buy practice-court equipment: list price $1,000,000, sales tax $60,000, delivery $25,000 and installation $15,000. During unloading a crate is dropped and the repair costs $8,000. Separately, the club buys $10M of training equipment with a 5-year life and a $1M residual value. (a) What cost is recorded for the practice-court equipment? (b) How is the $8,000 treated and why? (c) Find annual straight-line depreciation on the training equipment. (d) Find accumulated depreciation and book value after 3 years. (e) Is there a gain or a loss if it is then sold for $5.5M? For $4.0M?',
      answer: [
        '**(a)** $1,000,000 + $60,000 + $25,000 + $15,000 = **$1,100,000**. Cost includes every reasonable and necessary expenditure to get the asset ready for use.',
        '**(b)** An **expense** (a revenue expenditure). The damage was not needed to get the asset ready, so it is not part of the cost.',
        '**(c)** ($10M − $1M) ÷ 5 = **$1.8M** a year.',
        '**(d)** Accumulated depreciation = 3 × $1.8M = **$5.4M**. Book value = $10M − $5.4M = **$4.6M**.',
        '**(e)** Sold for $5.5M: $5.5M − $4.6M = **$0.9M gain**. Sold for $4.0M: $4.0M − $4.6M = **$0.6M loss**.',
      ],
      marking: [
        'Cost of $1,100,000 with all four items included (2)',
        'The $8,000 is an expense, with a reason (1)',
        'Annual depreciation of $1.8M with the formula (2)',
        'Accumulated depreciation of $5.4M (1)',
        'Book value of $4.6M (1)',
        'Gain of $0.9M at $5.5M (1)',
        'Loss of $0.6M at $4.0M (1)',
        'Separates capital from revenue expenditure (1)',
      ],
    },
    {
      id: 'e2',
      marks: 10,
      q: 'The team shop starts with 1,000 jerseys that cost $40 each and buys 1,000 more at $50 each. It sells 1,200 jerseys at $90. For FIFO, LIFO and average cost, calculate cost of goods sold, gross profit and ending inventory. Which method gives the highest profit, and why?',
      answer: [
        'Revenue = 1,200 × $90 = $108,000. Goods available = $40,000 + $50,000 = $90,000.',
        '**FIFO:** cost of goods sold = 1,000 × $40 + 200 × $50 = **$50,000**. Gross profit **$58,000**. Ending inventory 800 × $50 = **$40,000**.',
        '**LIFO:** cost of goods sold = 1,000 × $50 + 200 × $40 = **$58,000**. Gross profit **$50,000**. Ending inventory 800 × $40 = **$32,000**.',
        '**Average:** $90,000 ÷ 2,000 = $45 a jersey. Cost of goods sold = 1,200 × $45 = **$54,000**. Gross profit **$54,000**. Ending inventory 800 × $45 = **$36,000**.',
        '**FIFO** gives the highest profit, $8,000 more than LIFO, because prices rose: the cheaper old units are matched against the sales.',
      ],
      marking: [
        'FIFO: cost of goods sold, gross profit and ending inventory (3)',
        'LIFO: cost of goods sold, gross profit and ending inventory (3)',
        'Average: unit cost of $45, then cost of goods sold, gross profit and ending inventory (3)',
        'FIFO is highest because prices rose (1)',
      ],
    },
    {
      id: 'e3',
      marks: 8,
      q: 'The Ironhawks put $20M into 60-day Treasury bills. (a) Is that a cash equivalent? Would a one-year deposit be? Sponsors owe the club $30M and the finance team expects 4% to go unpaid. (b) Find the allowance and net realizable value. A sponsor owing $0.5M then goes bust and is written off: give receivables, the allowance and net realizable value afterwards. (c) The club buys a trademark for $12M and expects to use it for 10 years: find yearly amortization and the book value after 4 years.',
      answer: [
        '**(a)** Yes: it is very safe, stable in value and matures within 90 days of purchase. A one-year deposit is not, because it matures after more than 90 days.',
        '**(b)** Allowance = 4% × $30M = **$1.2M**. Net realizable value = $30M − $1.2M = **$28.8M**. After the write-off: receivables **$29.5M**, allowance **$0.7M**, net realizable value still **$28.8M**. A write-off does not change profit or net realizable value.',
        '**(c)** $12M ÷ 10 = **$1.2M** a year. After 4 years: amortization $4.8M, book value **$7.2M**.',
      ],
      marking: [
        'Treasury bills qualify, with the 90-day test (1)',
        'A one-year deposit does not qualify (1)',
        'Allowance of $1.2M and net realizable value of $28.8M (2)',
        'After the write-off: $29.5M, $0.7M and $28.8M (2)',
        'Yearly amortization of $1.2M (1)',
        'Book value of $7.2M after 4 years (1)',
      ],
    },
  ],

  videos: [],
};
