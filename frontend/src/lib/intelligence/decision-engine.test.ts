import { describe, expect, it } from "vitest";
import { rankMarketEvents } from "./decision-engine";

describe("rankMarketEvents", () => {
  it("prioritizes portfolio-relevant events above general events", () => {
    const ranked = rankMarketEvents({
      profile: {
        id: "user",
        name: "User",
        investingGoal: "Learn",
        experienceLevel: "intermediate",
        dailyTimeCommitmentMinutes: 5
      },
      holdings: [
        {
          ticker: "MSFT",
          name: "Microsoft",
          quantity: 1,
          averageCost: 100,
          currentPrice: 110,
          sector: "Technology",
          assetType: "stock"
        }
      ],
      watchlist: [],
      events: [
        {
          id: "general",
          title: "General market event",
          summary: "Broad market context",
          type: "economic",
          tickers: [],
          sourceName: "Demo",
          publishedAt: new Date().toISOString(),
          marketImportance: 70
        },
        {
          id: "portfolio",
          title: "Microsoft event",
          summary: "Portfolio context",
          type: "earnings",
          tickers: ["MSFT"],
          sector: "Technology",
          sourceName: "Demo",
          publishedAt: new Date().toISOString(),
          marketImportance: 70
        }
      ]
    });

    expect(ranked[0].id).toBe("portfolio");
    expect(ranked[0].reasonShown).toContain("portfolio");
  });
});
