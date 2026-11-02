import { contributionMargin, unitsForProfit, seasonCapacity, revenueAt, num, money, moneyM } from '../lib/cvp.js';

// Simple break-even chart drawn from the same model as the written example.
export default function BreakEvenChart({ model }) {
  const W = 480;
  const H = 340;
  const L = 44;
  const R = 12;
  const T = 14;
  const B = 44;
  const maxX = seasonCapacity(model);
  const maxY = revenueAt(model, maxX);
  const be = unitsForProfit(model);
  const beY = revenueAt(model, be);

  const sx = (x) => L + (x / maxX) * (W - L - R);
  const sy = (y) => H - B - (y / maxY) * (H - T - B);
  const totalCostAt = (x) => model.fixed + model.variable * x;

  const xTicks = [0, 200_000, 400_000, 600_000];
  const yTicks = [0, 20_000_000, 40_000_000, 60_000_000];

  const desc = `Break-even chart. Revenue starts at zero and rises with tickets sold. Total costs start at ${moneyM(
    model.fixed,
  )} and rise more slowly. The lines cross at ${num(be)} tickets, the break-even point. To the left of that is a loss; to the right is a profit.`;

  return (
    <figure className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={desc}>
        {/* grid + axes */}
        {yTicks.map((y) => (
          <g key={y}>
            <line className="chart-grid" x1={L} x2={W - R} y1={sy(y)} y2={sy(y)} />
            <text className="chart-tick" x={L - 6} y={sy(y) + 4} textAnchor="end">
              {y / 1_000_000}
            </text>
          </g>
        ))}
        {xTicks.map((x) => (
          <text key={x} className="chart-tick" x={sx(x)} y={H - B + 18} textAnchor="middle">
            {x / 1000}
          </text>
        ))}
        <line className="chart-axis" x1={L} x2={W - R} y1={H - B} y2={H - B} />
        <line className="chart-axis" x1={L} x2={L} y1={T} y2={H - B} />
        <text className="chart-axis-title" x={(L + W - R) / 2} y={H - 8} textAnchor="middle">
          Tickets sold (thousands)
        </text>
        <text className="chart-axis-title" x={L} y={T - 2} textAnchor="start">
          $ millions
        </text>

        {/* lines */}
        <line className="chart-fixed" x1={sx(0)} y1={sy(model.fixed)} x2={sx(maxX)} y2={sy(model.fixed)} />
        <line className="chart-cost" x1={sx(0)} y1={sy(totalCostAt(0))} x2={sx(maxX)} y2={sy(totalCostAt(maxX))} />
        <line className="chart-rev" x1={sx(0)} y1={sy(0)} x2={sx(maxX)} y2={sy(maxY)} />

        {/* break-even marker */}
        <line className="chart-drop" x1={sx(be)} x2={sx(be)} y1={sy(beY)} y2={H - B} />
        <circle className="chart-point" cx={sx(be)} cy={sy(beY)} r="6" />
        <text className="chart-label strong" x={sx(be) - 12} y={sy(beY) - 14} textAnchor="end">
          Break-even
        </text>

        {/* direct labels */}
        <text className="chart-label rev" x={sx(600_000) - 8} y={sy(revenueAt(model, 600_000)) - 8} textAnchor="end">
          Revenue
        </text>
        <text className="chart-label cost" x={sx(610_000)} y={sy(totalCostAt(610_000)) + 24} textAnchor="middle">
          Total costs
        </text>
        <text className="chart-label fixed" x={sx(0) + 8} y={sy(model.fixed) + 16}>
          Fixed costs
        </text>
        <text className="chart-zone" x={sx(100_000)} y={sy(15_000_000)} textAnchor="middle">
          Loss
        </text>
        <text className="chart-zone" x={sx(650_000)} y={sy(51_000_000)} textAnchor="middle">
          Profit
        </text>
      </svg>
      <figcaption>
        Revenue and total costs for the Ironhawks. Where the two lines cross, profit is zero (
        {num(be)} tickets, {moneyM(beY)} of revenue). Each ticket adds {money(contributionMargin(model))} of
        contribution margin, which is the gap between the revenue and total-cost lines growing wider.
      </figcaption>
    </figure>
  );
}
