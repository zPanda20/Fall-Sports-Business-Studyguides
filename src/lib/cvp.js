// Cost-volume-profit maths for the fictional Ironhawks.
// Every number shown in the Accounting sample topic comes from here,
// so the text, tables, chart and quiz answers cannot drift apart.
// `npm run verify` checks these against hand-calculated values.

export const ironhawks = {
  price: 90, // average revenue per ticket sold
  variable: 30, // variable cost per ticket (fees, concessions cost, game-day staff)
  fixed: 24_000_000, // fixed costs per season
  homeGames: 41,
  capacity: 18_000,
};

export const contributionMargin = (m) => m.price - m.variable;
export const contributionMarginRatio = (m) => contributionMargin(m) / m.price;

// Units needed to earn `targetProfit` (0 = break-even). Rounded up: you cannot sell part of a ticket.
export const unitsForProfit = (m, targetProfit = 0) =>
  Math.ceil((m.fixed + targetProfit) / contributionMargin(m));

export const profitAt = (m, units) => units * contributionMargin(m) - m.fixed;
export const revenueAt = (m, units) => units * m.price;
export const seasonCapacity = (m) => m.homeGames * m.capacity;

export function marginOfSafety(m, actualUnits) {
  const be = unitsForProfit(m);
  return { units: actualUnits - be, pct: (actualUnits - be) / actualUnits };
}

// ---- formatting helpers ----
export const money = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
export const moneyM = (n) => {
  const v = n / 1_000_000;
  return `$${Number.isInteger(v) ? v : v.toFixed(1)}M`;
};
export const num = (n) => Math.round(n).toLocaleString('en-US');
export const pct = (x, d = 1) => `${(x * 100).toFixed(d)}%`;
