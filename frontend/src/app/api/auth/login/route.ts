import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { loginUser } from "@/lib/application/auth-service";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    return NextResponse.json(await loginUser(payload));
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Enter a valid email and password." }, { status: 400 });
    }

    return NextResponse.json({ error: "Atlas could not log in." }, { status: 500 });
  }
}
