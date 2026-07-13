import { NextResponse } from "next/server";
import { demoCompanies } from "@/server/data/demo-store";
import { searchSchema } from "@/server/validation/schemas";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parsed = searchSchema.safeParse({ q: url.searchParams.get("q") ?? "" });
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid search query" }, { status: 422 });
  }

  const q = parsed.data.q.toLowerCase();
  const results = demoCompanies.filter((company) => company.symbol.toLowerCase().includes(q) || company.name.toLowerCase().includes(q));
  return NextResponse.json({ results });
}
