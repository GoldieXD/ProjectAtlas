import { NextResponse } from "next/server";
import { generateMorningBrief } from "@/lib/application/brief-service";

export async function GET() {
  const brief = await generateMorningBrief();
  return NextResponse.json({ brief });
}
