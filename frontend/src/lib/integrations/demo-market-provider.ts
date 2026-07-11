import { getMarketEvents, getWatchlist } from "@/lib/data/mock-repository";
import type { MarketDataProvider } from "./provider-contracts";

export const demoMarketProvider: MarketDataProvider = {
  async searchSecurities(query) {
    const normalizedQuery = query.trim().toLowerCase();
    const watchlist = await getWatchlist();
    return watchlist.filter((item) => {
      return item.ticker.toLowerCase().includes(normalizedQuery) || item.name.toLowerCase().includes(normalizedQuery);
    });
  },
  async getLatestMarketEvents() {
    return getMarketEvents();
  }
};
