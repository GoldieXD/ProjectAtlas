import { NextResponse } from "next/server";
import { getCurrentUser } from "@/server/application/context";
import { getDashboard } from "@/server/application/dashboard-service";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const dashboard = await getDashboard(user);
  return NextResponse.json({ insights: dashboard.insights });
}
