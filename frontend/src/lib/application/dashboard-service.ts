import { getCurrentUserProfile, getMarketEvents, getPortfolioHoldings, getWatchlist } from "@/lib/data/mock-repository";
import { calculatePortfolioSummary } from "@/lib/domain/portfolio";
import { rankMarketEvents } from "@/lib/intelligence/decision-engine";
import { createInsightsFromRankedEvents } from "@/lib/intelligence/insight-generator";

export async function getDashboard() {
  const [profile, holdings, watchlist, events] = await Promise.all([
    getCurrentUserProfile(),
    getPortfolioHoldings(),
    getWatchlist(),
    getMarketEvents()
  ]);

  const portfolio = calculatePortfolioSummary(holdings);
  const rankedEvents = rankMarketEvents({ events, holdings, watchlist, profile });
  const insights = createInsightsFromRankedEvents(rankedEvents);

  return {
    profile,
    holdings,
    watchlist,
    portfolio,
    insights,
    upcomingEvents: rankedEvents.filter((event) => event.type === "earnings" || event.type === "economic")
  };
}
