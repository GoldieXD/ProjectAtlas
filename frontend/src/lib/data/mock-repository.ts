import type { Holding, MarketEvent, UserProfile, WatchlistItem } from "@/lib/domain/types";

const profile: UserProfile = {
  id: "demo-user",
  name: "Goldie",
  investingGoal: "Build long-term wealth while understanding what drives portfolio changes.",
  experienceLevel: "intermediate",
  dailyTimeCommitmentMinutes: 5
};

const holdings: Holding[] = [
  {
    ticker: "AAPL",
    name: "Apple",
    quantity: 12,
    averageCost: 178.4,
    currentPrice: 213.2,
    sector: "Technology",
    assetType: "stock"
  },
  {
    ticker: "MSFT",
    name: "Microsoft",
    quantity: 8,
    averageCost: 390.1,
    currentPrice: 468.3,
    sector: "Technology",
    assetType: "stock"
  },
  {
    ticker: "VTI",
    name: "Vanguard Total Stock Market ETF",
    quantity: 18,
    averageCost: 246.5,
    currentPrice: 286.4,
    sector: "Broad Market",
    assetType: "etf"
  }
];

const watchlist: WatchlistItem[] = [
  { ticker: "NVDA", name: "Nvidia", sector: "Technology", latestPrice: 164.1 },
  { ticker: "JPM", name: "JPMorgan Chase", sector: "Financials", latestPrice: 281.5 },
  { ticker: "UNH", name: "UnitedHealth Group", sector: "Healthcare", latestPrice: 335.8 }
];

const events: MarketEvent[] = [
  {
    id: "evt-earnings-msft",
    title: "Microsoft earnings are due after market close",
    summary: "Cloud growth and AI infrastructure spending are expected to be the main focus.",
    type: "earnings",
    tickers: ["MSFT"],
    sector: "Technology",
    sourceName: "Atlas demo market calendar",
    publishedAt: new Date().toISOString(),
    marketImportance: 82
  },
  {
    id: "evt-cpi",
    title: "Inflation report lands before the open",
    summary: "Investors are watching whether price pressure is cooling enough to support rate cuts.",
    type: "economic",
    tickers: [],
    sourceName: "Atlas demo economic calendar",
    publishedAt: new Date().toISOString(),
    marketImportance: 88
  },
  {
    id: "evt-aapl-services",
    title: "Apple services growth remains a key sentiment driver",
    summary: "Analysts are focusing on services revenue as hardware upgrade cycles normalize.",
    type: "analyst",
    tickers: ["AAPL"],
    sector: "Technology",
    sourceName: "Atlas demo analyst digest",
    publishedAt: new Date().toISOString(),
    marketImportance: 66
  },
  {
    id: "evt-jpm-credit",
    title: "Bank investors watch consumer credit trends",
    summary: "Credit card delinquencies and loan growth may shape expectations for large banks.",
    type: "news",
    tickers: ["JPM"],
    sector: "Financials",
    sourceName: "Atlas demo news feed",
    publishedAt: new Date().toISOString(),
    marketImportance: 58
  }
];

export async function getCurrentUserProfile() {
  return profile;
}

export async function getPortfolioHoldings() {
  return holdings;
}

export async function getWatchlist() {
  return watchlist;
}

export async function getMarketEvents() {
  return events;
}
