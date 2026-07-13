import { describe, expect, it } from "vitest";
import { demoEvents, demoHoldings, demoUser, demoWatchlist } from "../data/demo-store";
import { scoreMarketEvent } from "./decision-engine";

describe("Atlas Decision Engine", () => {
  it("prioritizes portfolio-relevant events over unrelated events", () => {
    const portfolioEvent = demoEvents.find((event) => event.symbol === "AAPL")!;
    const macroEvent = demoEvents.find((event) => event.symbol === null)!;

    const portfolioScore = scoreMarketEvent({ event: portfolioEvent, holdings: demoHoldings, watchlist: demoWatchlist, user: demoUser });
    const macroScore = scoreMarketEvent({ event: macroEvent, holdings: demoHoldings, watchlist: demoWatchlist, user: demoUser });

    expect(portfolioScore.importanceScore).toBeGreaterThan(macroScore.importanceScore);
    expect(portfolioScore.includeInBrief).toBe(true);
  });

  it("marks very important holding events as alert eligible", () => {
    const event = { ...demoEvents[2], category: "RISK" as const, marketImpact: 0.98 };

    const score = scoreMarketEvent({ event, holdings: demoHoldings, watchlist: demoWatchlist, user: demoUser });

    expect(score.visibility).toBe("ALERT");
    expect(score.alertEligible).toBe(true);
  });
});
