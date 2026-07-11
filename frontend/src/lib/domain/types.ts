export type ExperienceLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type Holding = {
  ticker: string;
  name: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  sector: string;
  assetType: "stock" | "etf" | "fund";
};

export type WatchlistItem = {
  ticker: string;
  name: string;
  sector: string;
  latestPrice: number;
};

export type UserProfile = {
  id: string;
  name: string;
  investingGoal: string;
  experienceLevel: ExperienceLevel;
  dailyTimeCommitmentMinutes: number;
};

export type MarketEvent = {
  id: string;
  title: string;
  summary: string;
  type: "earnings" | "economic" | "news" | "analyst" | "dividend";
  tickers: string[];
  sector?: string;
  sourceName: string;
  sourceUrl?: string;
  publishedAt: string;
  marketImportance: number;
};

export type Insight = {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  importanceScore: number;
  confidence: "low" | "medium" | "high";
  reasonShown: string;
  relatedTickers: string[];
  sourceName: string;
  sourceUrl?: string;
  generatedAt: string;
};

export type PortfolioSummary = {
  totalValue: number;
  totalCost: number;
  gainLoss: number;
  gainLossPercent: number;
  allocation: Array<{
    sector: string;
    value: number;
    percent: number;
  }>;
};

export type MorningBrief = {
  generatedAt: string;
  portfolioUpdate: string;
  topInsights: Insight[];
  risks: string[];
  opportunities: string[];
  upcomingEvents: MarketEvent[];
  learningMoment: string;
};
