import { describe, expect, it } from "vitest";
import { calculatePortfolioSummary } from "./portfolio";

describe("calculatePortfolioSummary", () => {
  it("calculates value, gain, and sector allocation", () => {
    const summary = calculatePortfolioSummary([
      {
        ticker: "AAA",
        name: "Alpha",
        quantity: 2,
        averageCost: 10,
        currentPrice: 15,
        sector: "Technology",
        assetType: "stock"
      },
      {
        ticker: "BBB",
        name: "Beta",
        quantity: 1,
        averageCost: 20,
        currentPrice: 30,
        sector: "Healthcare",
        assetType: "stock"
      }
    ]);

    expect(summary.totalValue).toBe(60);
    expect(summary.gainLoss).toBe(20);
    expect(summary.gainLossPercent).toBe(50);
    expect(summary.allocation).toEqual([
      { sector: "Technology", value: 30, percent: 50 },
      { sector: "Healthcare", value: 30, percent: 50 }
    ]);
  });
});
