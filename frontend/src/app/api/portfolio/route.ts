import { NextResponse } from "next/server";
import { getCurrentUser } from "@/server/application/context";
import { demoHoldings } from "@/server/data/demo-store";
import { holdingInputSchema } from "@/server/validation/schemas";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ holdings: demoHoldings });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = holdingInputSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid holding", issues: parsed.error.flatten() }, { status: 422 });
  }

  return NextResponse.json(
    {
      holding: {
        id: `holding_${parsed.data.symbol.toLowerCase()}`,
        currentPrice: parsed.data.averageCost,
        ...parsed.data
      }
    },
    { status: 201 }
  );
}
