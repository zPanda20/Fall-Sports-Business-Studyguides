import { computeSheet, formatValue, colToNum, numToCol } from '../../src/lib/sheet.js';

// The spreadsheet engine behind the Excel lessons must give the answers Excel gives.
export default function ({ eq, ok_, near }) {
  const get = (raw, a) => computeSheet(raw).get(a);
  const val = (raw, a) => get(raw, a).v;
  const err = (raw, a) => get(raw, a).e;

  eq(colToNum('A'), 1, 'column A is 1');
  eq(colToNum('AA'), 27, 'column AA is 27');
  eq(numToCol(28), 'AB', 'column 28 is AB');

  const t = { A1: 10, A2: 20, A3: 30, A4: '=SUM(A1:A3)', A5: '=AVERAGE(A1:A3)', A6: '=A1+A2*A3', A7: '=(A1+A2)*A3', A8: '=A3/A1^2', A9: '=-A1^2', A10: '=A1*50%' };
  eq(val(t, 'A4'), 60, 'SUM');
  eq(val(t, 'A5'), 20, 'AVERAGE');
  eq(val(t, 'A6'), 610, 'multiplication before addition');
  eq(val(t, 'A7'), 900, 'brackets first');
  near(val(t, 'A8'), 0.3, 'power before division', 1e-12);
  eq(val(t, 'A9'), 100, 'unary minus before ^, as in Excel');
  eq(val(t, 'A10'), 5, 'percent literal');

  eq(err({ A1: 1, A2: '=A1/0' }, 'A2'), '#DIV/0!', 'divide by zero');
  eq(err({ A1: '=A1+1' }, 'A1'), '#CIRC!', 'circular reference');
  eq(err({ A1: '=FOO(1)' }, 'A1'), '#NAME?', 'unknown function');
  eq(err({ A1: '=1+' }, 'A1'), '#VALUE!', 'broken formula');
  eq(val({ A1: '=IFERROR(1/0,"n/a")' }, 'A1'), 'n/a', 'IFERROR');

  const ifs = { A1: 120, A2: '=IF(A1>100,"high","low")', A3: '=IF(AND(A1>100,A1<200),1,0)', A4: '=IF(OR(A1<0,A1=120),"yes","no")' };
  eq(val(ifs, 'A2'), 'high', 'IF true');
  eq(val(ifs, 'A3'), 1, 'AND');
  eq(val(ifs, 'A4'), 'yes', 'OR');

  const ledger = { A1: 'Tickets', B1: 100, A2: 'Wages', B2: 40, A3: 'Tickets', B3: 50, A4: 'Rent', B4: 10, C1: '=SUMIF(A1:A4,"Tickets",B1:B4)', C2: '=SUMIF(B1:B4,">45")', C3: '=COUNTIF(A1:A4,"Tickets")', C4: '=COUNT(B1:B4)', C5: '=MAX(B1:B4)-MIN(B1:B4)' };
  eq(val(ledger, 'C1'), 150, 'SUMIF with text');
  eq(val(ledger, 'C2'), 150, 'SUMIF with operator');
  eq(val(ledger, 'C3'), 2, 'COUNTIF');
  eq(val(ledger, 'C4'), 4, 'COUNT');
  eq(val(ledger, 'C5'), 90, 'MAX minus MIN');

  eq(val({ A1: 5, A2: 7, B1: '=$A$1*A$2+$A2', B2: '=SUM($A$1:A2)' }, 'B1'), 42, 'dollar references find their cells');
  eq(val({ A1: 5, A2: 7, B2: '=SUM($A$1:A2)' }, 'B2'), 12, 'dollar signs inside a range');

  const lk = { A1: 1000, B1: 'Cash', A2: 2000, B2: 'Receivables', C1: '=VLOOKUP(2000,A1:B2,2,FALSE)', C2: '=XLOOKUP(1000,A1:A2,B1:B2)', C3: '=VLOOKUP(5,A1:B2,2,FALSE)' };
  eq(val(lk, 'C1'), 'Receivables', 'VLOOKUP');
  eq(val(lk, 'C2'), 'Cash', 'XLOOKUP');
  eq(err(lk, 'C3'), '#N/A', 'lookup that finds nothing');

  eq(val({ A1: 2.675, A2: '=ROUND(A1,2)', A3: '=ROUND(-2.5,0)', A4: '=ROUND(1234.5678,-2)' }, 'A2'), 2.68, 'ROUND half up');
  eq(val({ A3: '=ROUND(-2.5,0)' }, 'A3'), -3, 'ROUND half away from zero');
  eq(val({ A4: '=ROUND(1234.5678,-2)' }, 'A4'), 1200, 'ROUND to hundreds');
  eq(val({ A1: 'a', A2: 'b', A3: '=A1&" "&A2' }, 'A3'), 'a b', 'text join');
  eq(val({ A1: '$1,200' }, 'A1'), 1200, 'typed money is a number');

  // Ironhawks break-even in a sheet: price 90, variable 30, fixed 24,000,000
  const bk = { B1: 90, B2: 30, B3: 24000000, B4: '=B1-B2', B5: '=B3/B4', B6: '=B4/B1', B7: '=600000*B4-B3' };
  eq(val(bk, 'B4'), 60, 'sheet: contribution margin');
  eq(val(bk, 'B5'), 400000, 'sheet: break-even tickets');
  near(val(bk, 'B6'), 2 / 3, 'sheet: contribution margin ratio', 1e-12);
  eq(val(bk, 'B7'), 12000000, 'sheet: profit at 600,000 tickets');

  eq(formatValue(1234.5, 'money'), '$1,235', 'format money');
  eq(formatValue(-1234, 'money'), '($1,234)', 'format negative money in brackets');
  eq(formatValue(0.1234, 'pct'), '12.3%', 'format percent');
  ok_(formatValue(null) === '', 'empty cells show nothing');
}
