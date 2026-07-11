import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { answerAssistantQuestion } from "@/lib/application/assistant-service";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const response = await answerAssistantQuestion(payload);
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Question must be between 3 and 500 characters." }, { status: 400 });
    }

    return NextResponse.json({ error: "Atlas could not answer that question yet." }, { status: 500 });
  }
}
