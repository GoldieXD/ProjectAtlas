import type { DecisionScore, Holding, MarketEvent, UserContext, WatchlistItem } from "../domain/types";

const CATEGORY_WEIGHTS: Record<MarketEvent["category"], number> = {
  EARNINGS: 0.86,
  MACRO: 0.82,
  ANALYST_ACTION: 0.64,
  DIVIDEND: 0.58,
  SEC_FILING: 0.74,
  NEWS: 0.55,
  PRODUCT: 0.5,
  MERGER: 0.88,
  RISK: 0.92
};

export function scoreMarketEvent(input: {
  event: MarketEvent;
  holdings: Holding[];
  watchlist: WatchlistItem[];
  user: UserContext;
  now?: Date;
}): DecisionScore {
  const { event, holdings, watchlist, user, now = new Date() } = input;
  const holdingSymbols = new Set(holdings.map((holding) => holding.symbol));
  const watchlistSymbols = new Set(watchlist.map((item) => item.symbol));
  const symbol = event.symbol ?? "";

  const portfolioRelevance = holdingSymbols.has(symbol) ? 1 : 0;
  const watchlistRelevance = watchlistSymbols.has(symbol) ? 0.72 : 0;
  const ageHours = Math.max(0, (now.getTime() - event.occurredAt.getTime()) / 3_600_000);
  const recencyScore = Math.max(0.15, 1 - ageHours / 72);
  const educationalValue = user.experienceLevel === "BEGINNER" && ["EARNINGS", "MACRO", "DIVIDEND"].includes(event.category) ? 0.78 : 0.42;

  const score =
    event.marketImpact * 0.28 +
    portfolioRelevance * 0.26 +
    watchlistRelevance * 0.14 +
    recencyScore * 0.13 +
    CATEGORY_WEIGHTS[event.category] * 0.12 +
    educationalValue * 0.07;

  const importanceScore = Math.round(Math.min(score, 1) * 100);
  const visibility = importanceScore >= 80 ? "ALERT" : importanceScore >= 65 ? "BRIEF" : importanceScore >= 45 ? "DASHBOARD" : "HIDDEN";

  const rationale = [
    portfolioRelevance ? "It directly affects a current holding." : null,
    watchlistRelevance ? "It matches a watchlist company." : null,
    event.marketImpact > 0.75 ? "The event has broad market impact." : null,
    recencyScore > 0.75 ? "The event is recent enough to influence today's brief." : null,
    educationalValue > 0.7 ? "It is useful for investor learning based on the user's profile." : null
  ].filter(Boolean) as string[];

  return {
    importanceScore,
    portfolioRelevance,
    watchlistRelevance,
    educationalValue,
    recencyScore,
    visibility,
    includeInBrief: visibility === "BRIEF" || visibility === "ALERT",
    alertEligible: visibility === "ALERT",
    rationale: rationale.length ? rationale : ["It is relevant enough for dashboard review."]
  };
}
