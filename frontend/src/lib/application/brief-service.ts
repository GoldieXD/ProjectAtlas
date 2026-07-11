import type { MorningBrief } from "@/lib/domain/types";
import { getDashboard } from "./dashboard-service";

export async function generateMorningBrief(): Promise<MorningBrief> {
  const dashboard = await getDashboard();
  const topSector = dashboard.portfolio.allocation[0];
  const gainDirection = dashboard.portfolio.gainLoss >= 0 ? "up" : "down";

  return {
    generatedAt: new Date().toISOString(),
    portfolioUpdate: `Your tracked portfolio is ${gainDirection} ${Math.abs(
      dashboard.portfolio.gainLossPercent
    ).toFixed(1)}% versus cost basis. ${topSector?.sector ?? "Your largest"} exposure is the main driver to watch today.`,
    topInsights: dashboard.insights.slice(0, 3),
    risks: topSector && topSector.percent > 45 ? [`${topSector.sector} is ${topSector.percent.toFixed(0)}% of the portfolio, so sector news may have outsized impact.`] : [],
    opportunities: ["Use the highest-priority insights first; lower-priority headlines can wait."],
    upcomingEvents: dashboard.upcomingEvents.slice(0, 3),
    learningMoment: "A cost basis is what you paid for an investment. Comparing market value to cost basis helps separate price movement from new contributions."
  };
}
