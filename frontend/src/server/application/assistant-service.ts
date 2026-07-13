import { getDashboard } from "./dashboard-service";
import type { UserContext } from "../domain/types";

export async function answerQuestion(user: UserContext, question: string) {
  const dashboard = await getDashboard(user);
  const topInsight = dashboard.insights[0];

  return {
    answer: [
      `Fact: Atlas is using your tracked holdings (${dashboard.holdings.map((holding) => holding.symbol).join(", ")}) and watchlist (${dashboard.watchlist.map((item) => item.symbol).join(", ")}).`,
      topInsight
        ? `Relevant context: ${topInsight.title}. ${topInsight.summary}`
        : "Relevant context: no high-priority insight is available in the demo feed.",
      `Educational note: This is an explanation, not a recommendation. Your question was: "${question}".`
    ].join("\n\n"),
    citations: topInsight?.sources ?? [],
    usedLiveAi: false
  };
}
