import { NextResponse } from "next/server";
import { getDashboard } from "@/lib/application/dashboard-service";

export async function GET() {
  const dashboard = await getDashboard();
  return NextResponse.json({ insights: dashboard.insights });
}
