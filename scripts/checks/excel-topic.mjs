import { excelBasicsTopic as t } from '../../src/data/accounting/excel-basics.js';
import { computeSheet } from '../../src/lib/sheet.js';

// Every task in the Excel lessons must be solvable: put the hinted formula in, get the expected answer.
export default function ({ eq, ok_, near }) {
  const blocks = [...t.plain, ...t.real.slides, ...t.sports.slides].flatMap((s) => s.blocks).filter((b) => b.type === 'sheet');
  ok_(blocks.length >= 6, 'excel topic has interactive sheets');
  for (const b of blocks) {
    // put every hinted formula in at once (some tasks build on each other), then check each answer
    const hints = Object.fromEntries((b.tasks || []).filter((t) => t.hint).map((t) => [t.cell, t.hint]));
    const solved = computeSheet({ ...b.cells, ...hints });
    for (const task of b.tasks || []) {
      ok_((b.editable || []).includes(task.cell), `task cell ${task.cell} is editable`);
      ok_(Boolean(task.hint), `task ${task.cell} has a hint that solves it`);
      const got = solved.get(task.cell).v;
      if (typeof task.expect === 'string') eq(got, task.expect, `hint solves ${task.cell}`);
      else near(got, task.expect, `hint solves ${task.cell}`, task.tol ?? 1e-6);
    }
  }
  // every sheet starts without errors
  for (const b of blocks) {
    const all = computeSheet(b.cells).all;
    ok_(Object.values(all).every((c) => !c.e), 'starting sheet has no errors');
  }
  // what-if figures quoted in the Ironhawks slide
  eq(450_000 * 60 - 24_000_000, 3_000_000, 'what-if: 450,000 tickets gives $3M');
  eq(24_000_000 / (80 - 30), 480_000, 'what-if: $80 price breaks even at 480,000');
  eq(30_000_000 / 60, 500_000, 'what-if: $30M fixed costs break even at 500,000');
  eq(500_000 * 60 - 24_000_000, 6_000_000, 'exercise: profit at 500,000 tickets is $6M');
  near(994 * 0.54, 536.76, 'wage bill', 1e-9);
  near(-17 / 994, -0.0171, 'net margin about -1.7%', 5e-4);
  near(90 / 559, 0.161, 'debt fell about 16%', 5e-4);
}
