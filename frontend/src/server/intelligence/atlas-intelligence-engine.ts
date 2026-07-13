import type { Holding, Insight, MarketEvent, MorningBrief, UserContext, WatchlistItem } from "../domain/types";
import { calculatePortfolioSummary, formatCurrency, formatPercent } from "../domain/portfolio";
import { scoreMarketEvent } from "./decision-engine";

export function generateInsights(input: {
  user: UserContext;
  holdings: Holding[];
  watchlist: WatchlistItem[];
  events: MarketEvent[];
  now?: Date;
}): Insight[] {
  return input.events
    .map((event) => {
      const decision = scoreMarketEvent({ ...input, event });
      return {
        id: `insight_${event.id}`,
        title: event.headline,
        summary: event.summary,
        explanation: buildExplanation(event, decision.rationale, input.user),
        category: event.category,
        importanceScore: decision.importanceScore,
        confidenceScore: Math.round(event.confidence * 100),
        relatedSymbols: event.symbol ? [event.symbol] : [],
        sources: [{ provider: event.sourceProvider, url: event.sourceUrl, title: event.headline }],
        rationale: decision.rationale,
        createdAt: input.now ?? new Date()
      } satisfies Insight;
    })
    .filter((insight) => insight.importanceScore >= 45)
    .sort((a, b) => b.importanceScore - a.importanceScore);
}

export function generateMorningBrief(input: {
  user: UserContext;
  holdings: Holding[];
  watchlist: WatchlistItem[];
  insights: Insight[];
  date?: Date;
}): MorningBrief {
  const summary = calculatePortfolioSummary(input.holdings);
  const topInsights = input.insights.slice(0, 5);
  const largestSector = summary.sectorAllocation[0];

  return {
    id: `brief_${input.user.id}_${toDateKey(input.date ?? new Date())}`,
    briefDate: toDateKey(input.date ?? new Date()),
    readTimeMinutes: Math.max(2, Math.min(5, Math.ceil(topInsights.length * 0.7 + 1))),
    marketSummary:
      topInsights.length > 0
        ? `${topInsights[0].title} is the highest-priority item in your Atlas feed today.`
        : "No high-priority market events are available yet today.",
    portfolioSummary: `Your tracked portfolio is worth ${formatCurrency(summary.totalMarketValue)}, with unrealized performance of ${formatCurrency(summary.unrealizedGainLoss)} (${formatPercent(summary.unrealizedGainLossPercent)}).`,
    risks: largestSector
      ? [`${largestSector.sector} is your largest tracked exposure at ${formatPercent(largestSector.weight)} of portfolio value.`]
      : ["Add holdings to unlock portfolio-specific risk monitoring."],
    opportunities: input.watchlist.length
      ? [`${input.watchlist[0].symbol} is on your watchlist and will influence future insight ranking.`]
      : ["Create a watchlist to let Atlas monitor companies before you own them."],
    learningMoment:
      input.user.experienceLevel === "BEGINNER"
        ? "An insight score ranks attention priority; it is not a buy, sell, or performance prediction."
        : "Atlas separates event importance from investment action so judgment stays with the investor.",
    insights: topInsights
  };
}

function buildExplanation(event: MarketEvent, rationale: string[], user: UserContext): string {
  const depth = user.preferredExplanationDepth === "TECHNICAL" ? "The signal is ranked using event impact, recency, source confidence, and portfolio context." : "Atlas ranked this because it may change what you need to pay attention to today.";
  return `${depth} ${event.summary} ${rationale.join(" ")}`;
}

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}
