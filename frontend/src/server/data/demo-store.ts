import type { Holding, MarketEvent, UserContext, WatchlistItem } from "../domain/types";

export const demoUser: UserContext = {
  id: "demo-user",
  email: "founder@atlas.local",
  experienceLevel: "INTERMEDIATE",
  riskTolerance: "MODERATE",
  goals: ["Understand portfolio-relevant market events", "Build a daily investing habit"],
  preferredExplanationDepth: "BALANCED"
};

export const demoHoldings: Holding[] = [
  {
    id: "holding_aapl",
    symbol: "AAPL",
    companyName: "Apple Inc.",
    quantity: 18,
    averageCost: 164.2,
    currentPrice: 212.4,
    sector: "Technology",
    assetType: "STOCK"
  },
  {
    id: "holding_nvda",
    symbol: "NVDA",
    companyName: "NVIDIA Corporation",
    quantity: 10,
    averageCost: 91.1,
    currentPrice: 126.7,
    sector: "Semiconductors",
    assetType: "STOCK"
  },
  {
    id: "holding_spy",
    symbol: "SPY",
    companyName: "SPDR S&P 500 ETF Trust",
    quantity: 12,
    averageCost: 495,
    currentPrice: 552.3,
    sector: "Broad Market",
    assetType: "ETF"
  }
];

export const demoWatchlist: WatchlistItem[] = [
  { id: "watch_msft", symbol: "MSFT", companyName: "Microsoft Corporation", currentPrice: 448.1, dayChangePercent: 0.006 },
  { id: "watch_tsm", symbol: "TSM", companyName: "Taiwan Semiconductor Manufacturing", currentPrice: 171.3, dayChangePercent: -0.004 }
];

export const demoEvents: MarketEvent[] = [
  {
    id: "event_aapl_buyback",
    symbol: "AAPL",
    category: "SEC_FILING",
    headline: "Apple expands capital return program",
    summary: "Apple disclosed a larger share repurchase authorization, which can affect per-share metrics and investor sentiment.",
    sourceProvider: "Atlas Demo News",
    sourceUrl: "https://example.com/apple-capital-return",
    occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
    marketImpact: 0.72,
    confidence: 0.88
  },
  {
    id: "event_macro_cpi",
    symbol: null,
    category: "MACRO",
    headline: "Inflation report keeps rate expectations in focus",
    summary: "A softer inflation reading may influence bond yields and valuation-sensitive growth stocks.",
    sourceProvider: "Atlas Demo Macro",
    sourceUrl: "https://example.com/inflation-report",
    occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 7),
    marketImpact: 0.84,
    confidence: 0.82
  },
  {
    id: "event_nvda_supply",
    symbol: "NVDA",
    category: "NEWS",
    headline: "NVIDIA supplier commentary points to continued AI demand",
    summary: "Supplier commentary suggests AI accelerator demand remains elevated, though supply-chain statements are indirect evidence.",
    sourceProvider: "Atlas Demo News",
    sourceUrl: "https://example.com/nvidia-supply",
    occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    marketImpact: 0.78,
    confidence: 0.74
  }
];

export const demoCompanies = [
  { symbol: "AAPL", name: "Apple Inc.", sector: "Technology", exchange: "NASDAQ" },
  { symbol: "NVDA", name: "NVIDIA Corporation", sector: "Semiconductors", exchange: "NASDAQ" },
  { symbol: "SPY", name: "SPDR S&P 500 ETF Trust", sector: "Broad Market", exchange: "NYSEARCA" },
  { symbol: "MSFT", name: "Microsoft Corporation", sector: "Technology", exchange: "NASDAQ" },
  { symbol: "TSM", name: "Taiwan Semiconductor Manufacturing", sector: "Semiconductors", exchange: "NYSE" }
];
