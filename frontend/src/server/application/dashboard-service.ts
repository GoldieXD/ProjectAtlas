import { demoEvents, demoHoldings, demoWatchlist } from "../data/demo-store";
import { calculatePortfolioSummary } from "../domain/portfolio";
import type { UserContext } from "../domain/types";
import { generateInsights, generateMorningBrief } from "../intelligence/atlas-intelligence-engine";

export async function getDashboard(user: UserContext) {
  const holdings = demoHoldings;
  const watchlist = demoWatchlist;
  const insights = generateInsights({ user, holdings, watchlist, events: demoEvents });
  const morningBrief = generateMorningBrief({ user, holdings, watchlist, insights });

  return {
    user,
    holdings,
    watchlist,
    portfolio: calculatePortfolioSummary(holdings),
    insights,
    morningBrief
  };
}
