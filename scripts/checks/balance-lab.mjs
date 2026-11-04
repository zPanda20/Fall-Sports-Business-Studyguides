import { ironhawksBalanceLab as lab } from '../../src/data/accounting/balance-lab.js';
import { balanceAt } from '../../src/lib/balance.js';

// After every event, assets must equal liabilities plus equity, and no line may go negative
// (except retained earnings, which can fall below zero in a loss).
export default function ({ eq, ok_ }) {
  const sum = (v, names) => names.reduce((s, n) => s + v[n], 0);
  for (let i = 0; i <= lab.steps.length; i++) {
    const v = balanceAt(lab, i);
    eq(sum(v, lab.lines.assets), sum(v, lab.lines.liabilities) + sum(v, lab.lines.equity), `balance lab after event ${i}: assets = liabilities + equity`);
    for (const [name, val] of Object.entries(v)) ok_(name === 'Retained earnings' || val >= 0, `balance lab after event ${i}: ${name} is not negative`);
  }
  const end = balanceAt(lab, 5);
  eq(end.Cash + end.Arena + end.Equipment, 600, 'balance lab: $600M of assets after the supplier is paid (matches the Accounting topic)');
  const last = balanceAt(lab, lab.steps.length);
  eq(last.Cash, 43, 'balance lab: cash ends at $43M');
  eq(last['Retained earnings'], 8, 'balance lab: retained earnings end at $8M');
}
