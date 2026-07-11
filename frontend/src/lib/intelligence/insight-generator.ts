import type { Insight } from "@/lib/domain/types";
import type { RankedEvent } from "./decision-engine";
import { explainMarketEvent } from "./context-engine";

export function createInsightsFromRankedEvents(events: RankedEvent[]): Insight[] {
  return events.map((event) => ({
    id: `insight-${event.id}`,
    title: event.title,
    summary: event.summary,
    explanation: explainMarketEvent(event),
    importanceScore: event.priorityScore,
    confidence: event.priorityScore >= 85 ? "high" : "medium",
    reasonShown: event.reasonShown,
    relatedTickers: event.tickers,
    sourceName: event.sourceName,
    sourceUrl: event.sourceUrl,
    generatedAt: new Date().toISOString()
  }));
}
