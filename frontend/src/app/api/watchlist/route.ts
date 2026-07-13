import { NextResponse } from "next/server";
import { getCurrentUser } from "@/server/application/context";
import { demoWatchlist } from "@/server/data/demo-store";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ watchlist: demoWatchlist });
}
