import { z } from "zod";
import { getDashboard } from "./dashboard-service";

export const assistantQuestionSchema = z.object({
  question: z.string().trim().min(3).max(500)
});

export async function answerAssistantQuestion(rawInput: unknown) {
  const input = assistantQuestionSchema.parse(rawInput);
  const dashboard = await getDashboard();
  const topInsight = dashboard.insights[0];

  return {
    answer: `Based on your Atlas context, the first thing to understand is: ${topInsight.summary} ${topInsight.explanation} This is not a buy or sell recommendation; it is the current highest-priority explanation Atlas can ground in your portfolio and watchlist context.`,
    referencedInsightId: topInsight.id,
    question: input.question
  };
}
