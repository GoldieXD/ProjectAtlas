import type { MarketEvent } from "@/lib/domain/types";

export function explainMarketEvent(event: MarketEvent): string {
  if (event.type === "earnings") {
    return "Earnings reports can reset expectations because they show whether a company is growing, protecting margins, and guiding confidently.";
  }

  if (event.type === "economic") {
    return "Economic reports matter because they can change interest-rate expectations, which often affects stock valuations across the market.";
  }

  if (event.type === "analyst") {
    return "Analyst commentary does not determine a company's value, but it can influence short-term sentiment when it changes expectations.";
  }

  if (event.type === "dividend") {
    return "Dividend changes can signal how management views cash flow strength and shareholder returns.";
  }

  return "This event may affect investor expectations, so Atlas is translating the headline into portfolio context.";
}
