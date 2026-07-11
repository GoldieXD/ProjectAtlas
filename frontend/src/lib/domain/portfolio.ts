import type { Holding, PortfolioSummary } from "./types";

export function calculatePortfolioSummary(holdings: Holding[]): PortfolioSummary {
  const totalValue = holdings.reduce((sum, holding) => {
    return sum + holding.quantity * holding.currentPrice;
  }, 0);

  const totalCost = holdings.reduce((sum, holding) => {
    return sum + holding.quantity * holding.averageCost;
  }, 0);

  const sectorTotals = holdings.reduce<Record<string, number>>((totals, holding) => {
    const value = holding.quantity * holding.currentPrice;
    totals[holding.sector] = (totals[holding.sector] ?? 0) + value;
    return totals;
  }, {});

  const gainLoss = totalValue - totalCost;

  return {
    totalValue,
    totalCost,
    gainLoss,
    gainLossPercent: totalCost === 0 ? 0 : (gainLoss / totalCost) * 100,
    allocation: Object.entries(sectorTotals)
      .map(([sector, value]) => ({
        sector,
        value,
        percent: totalValue === 0 ? 0 : (value / totalValue) * 100
      }))
      .sort((a, b) => b.value - a.value)
  };
}
