// The Ironhawks, event by event. Used by the animated balance sheet (the "balance" block).
// Every event keeps Assets = Liabilities + Equity. scripts/checks/balance-lab.mjs proves it.
export const ironhawksBalanceLab = {
  type: 'balance',
  unit: '$M',
  lines: {
    assets: ['Cash', 'Arena', 'Equipment'],
    liabilities: ['Loan payable', 'Accounts payable'],
    equity: ['Capital stock', 'Retained earnings'],
  },
  steps: [
    {
      event: 'The owners invest **$300M** cash in the club.',
      effects: { Cash: 300, 'Capital stock': 300 },
      note: 'An asset (cash) and the owners’ claim (equity) both rise by the same amount.',
    },
    {
      event: 'The club borrows **$300M** from a bank.',
      effects: { Cash: 300, 'Loan payable': 300 },
      note: 'Cash rises, and so does what the club owes. Equity is untouched.',
    },
    {
      event: 'The club builds its arena and pays **$560M** in cash.',
      effects: { Arena: 560, Cash: -560 },
      note: 'One asset swaps for another. Total assets do not change.',
    },
    {
      event: 'The club buys **$5M** of equipment on account (it will pay later).',
      effects: { Equipment: 5, 'Accounts payable': 5 },
      note: 'Assets and liabilities both rise by $5M.',
    },
    {
      event: 'The club pays the equipment supplier **$5M** in cash.',
      effects: { Cash: -5, 'Accounts payable': -5 },
      note: 'Assets and liabilities both fall by $5M. Equipment stays on the books.',
    },
    {
      event: 'Season-ticket sales bring in **$20M** in cash.',
      effects: { Cash: 20, 'Retained earnings': 20 },
      note: 'Earning revenue raises equity (through retained earnings) and cash together.',
    },
    {
      event: 'The club pays **$12M** in wages.',
      effects: { Cash: -12, 'Retained earnings': -12 },
      note: 'An expense lowers equity, and cash falls with it.',
    },
  ],
};
