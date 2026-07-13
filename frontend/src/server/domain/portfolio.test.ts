import { describe, expect, it } from "vitest";
import { demoHoldings } from "../data/demo-store";
import { calculatePortfolioSummary } from "./portfolio";

describe("portfolio calculations", () => {
  it("calculates market value, gain/loss, and sector allocation", () => {
    const summary = calculatePortfolioSummary(demoHoldings);

    expect(summary.totalMarketValue).toBeGreaterThan(summary.totalCostBasis);
    expect(summary.unrealizedGainLossPercent).toBeGreaterThan(0);
    expect(summary.sectorAllocation.reduce((sum, sector) => sum + sector.weight, 0)).toBeCloseTo(1);
  });
});
