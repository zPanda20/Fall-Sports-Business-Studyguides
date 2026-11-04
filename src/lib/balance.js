// The numbers behind the animated balance sheet: line values after the first `step` events.
export function balanceAt(block, step) {
  const all = [...block.lines.assets, ...block.lines.liabilities, ...block.lines.equity];
  const values = Object.fromEntries(all.map((n) => [n, 0]));
  for (let i = 0; i < step; i++) for (const [k, d] of Object.entries(block.steps[i].effects)) values[k] += d;
  return values;
}
