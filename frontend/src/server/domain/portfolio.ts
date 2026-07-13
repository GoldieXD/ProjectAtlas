import type { Holding, PortfolioSummary } from "./types";

export function calculatePortfolioSummary(holdings: Holding[]): PortfolioSummary {
  const totalMarketValue = holdings.reduce((sum, holding) => sum + holding.quantity * holding.currentPrice, 0);
  const totalCostBasis = holdings.reduce((sum, holding) => sum + holding.quantity * holding.averageCost, 0);
  const unrealizedGainLoss = totalMarketValue - totalCostBasis;
  const unrealizedGainLossPercent = totalCostBasis === 0 ? 0 : unrealizedGainLoss / totalCostBasis;

  const sectorMap = new Map<string, number>();
  for (const holding of holdings) {
    const marketValue = holding.quantity * holding.currentPrice;
    sectorMap.set(holding.sector, (sectorMap.get(holding.sector) ?? 0) + marketValue);
  }

  return {
    totalMarketValue,
    totalCostBasis,
    unrealizedGainLoss,
    unrealizedGainLossPercent,
    sectorAllocation: [...sectorMap.entries()]
      .map(([sector, marketValue]) => ({
        sector,
        marketValue,
        weight: totalMarketValue === 0 ? 0 : marketValue / totalMarketValue
      }))
      .sort((a, b) => b.marketValue - a.marketValue)
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function formatPercent(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 1 }).format(value);
}
