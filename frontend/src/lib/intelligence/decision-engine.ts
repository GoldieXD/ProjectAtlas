import type { Holding, MarketEvent, UserProfile, WatchlistItem } from "@/lib/domain/types";

export type RankedEvent = MarketEvent & {
  priorityScore: number;
  reasonShown: string;
};

export function rankMarketEvents(input: {
  events: MarketEvent[];
  holdings: Holding[];
  watchlist: WatchlistItem[];
  profile: UserProfile;
}): RankedEvent[] {
  const holdingTickers = new Set(input.holdings.map((holding) => holding.ticker));
  const watchlistTickers = new Set(input.watchlist.map((item) => item.ticker));
  const portfolioSectors = new Set(input.holdings.map((holding) => holding.sector));

  return input.events
    .map((event) => {
      const holdingMatches = event.tickers.filter((ticker) => holdingTickers.has(ticker));
      const watchlistMatches = event.tickers.filter((ticker) => watchlistTickers.has(ticker));
      const sectorMatch = event.sector ? portfolioSectors.has(event.sector) : false;
      const experienceAdjustment = input.profile.experienceLevel === "beginner" ? 4 : 0;

      const priorityScore = Math.min(
        100,
        event.marketImportance +
          holdingMatches.length * 14 +
          watchlistMatches.length * 8 +
          (sectorMatch ? 6 : 0) +
          experienceAdjustment
      );

      const reasonShown =
        holdingMatches.length > 0
          ? `Shown because it relates to ${holdingMatches.join(", ")} in your portfolio.`
          : watchlistMatches.length > 0
            ? `Shown because ${watchlistMatches.join(", ")} is on your watchlist.`
            : sectorMatch
              ? `Shown because it affects a sector represented in your portfolio.`
              : "Shown because Atlas ranked it as a broad market event.";

      return {
        ...event,
        priorityScore,
        reasonShown
      };
    })
    .filter((event) => event.priorityScore >= 60)
    .sort((a, b) => b.priorityScore - a.priorityScore);
}
