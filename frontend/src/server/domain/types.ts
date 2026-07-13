export type ExperienceLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type RiskTolerance = "LOW" | "MODERATE" | "HIGH";
export type AssetType = "STOCK" | "ETF" | "FUND" | "CRYPTO" | "OTHER";
export type EventCategory =
  | "EARNINGS"
  | "MACRO"
  | "ANALYST_ACTION"
  | "DIVIDEND"
  | "SEC_FILING"
  | "NEWS"
  | "PRODUCT"
  | "MERGER"
  | "RISK";

export interface UserContext {
  id: string;
  email: string;
  experienceLevel: ExperienceLevel;
  riskTolerance: RiskTolerance;
  goals: string[];
  preferredExplanationDepth: "PLAIN" | "BALANCED" | "TECHNICAL";
}

export interface Holding {
  id: string;
  symbol: string;
  companyName: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  sector: string;
  assetType: AssetType;
}

export interface WatchlistItem {
  id: string;
  symbol: string;
  companyName: string;
  currentPrice: number;
  dayChangePercent: number;
}

export interface MarketEvent {
  id: string;
  symbol: string | null;
  category: EventCategory;
  headline: string;
  summary: string;
  sourceProvider: string;
  sourceUrl: string;
  occurredAt: Date;
  marketImpact: number;
  confidence: number;
}

export interface DecisionScore {
  importanceScore: number;
  portfolioRelevance: number;
  watchlistRelevance: number;
  educationalValue: number;
  recencyScore: number;
  visibility: "HIDDEN" | "DASHBOARD" | "BRIEF" | "ALERT";
  includeInBrief: boolean;
  alertEligible: boolean;
  rationale: string[];
}

export interface Insight {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  category: EventCategory;
  importanceScore: number;
  confidenceScore: number;
  relatedSymbols: string[];
  sources: Array<{ provider: string; url: string; title: string }>;
  rationale: string[];
  createdAt: Date;
}

export interface PortfolioSummary {
  totalMarketValue: number;
  totalCostBasis: number;
  unrealizedGainLoss: number;
  unrealizedGainLossPercent: number;
  sectorAllocation: Array<{ sector: string; marketValue: number; weight: number }>;
}

export interface MorningBrief {
  id: string;
  briefDate: string;
  readTimeMinutes: number;
  marketSummary: string;
  portfolioSummary: string;
  risks: string[];
  opportunities: string[];
  learningMoment: string;
  insights: Insight[];
}
