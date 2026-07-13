import { NextResponse } from "next/server";
import { answerQuestion } from "@/server/application/assistant-service";
import { getCurrentUser } from "@/server/application/context";
import { assistantQuestionSchema } from "@/server/validation/schemas";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = assistantQuestionSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid question", issues: parsed.error.flatten() }, { status: 422 });
  }

  return NextResponse.json(await answerQuestion(user, parsed.data.question));
}
