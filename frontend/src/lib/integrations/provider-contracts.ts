import type { MarketEvent, WatchlistItem } from "@/lib/domain/types";

export interface MarketDataProvider {
  searchSecurities(query: string): Promise<WatchlistItem[]>;
  getLatestMarketEvents(): Promise<MarketEvent[]>;
}

export interface AiLanguageProvider {
  summarizeInsight(input: {
    title: string;
    context: string;
    experienceLevel: string;
  }): Promise<string>;
}
