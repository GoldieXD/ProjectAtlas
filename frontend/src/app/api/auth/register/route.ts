import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { registerUser } from "@/lib/application/auth-service";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    return NextResponse.json(await registerUser(payload), { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Enter a valid email, name, and password of at least 8 characters." }, { status: 400 });
    }

    return NextResponse.json({ error: "Atlas could not create the account." }, { status: 500 });
  }
}
