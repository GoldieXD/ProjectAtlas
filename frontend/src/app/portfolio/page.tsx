import { getCurrentUser } from "@/server/application/context";
import { getDashboard } from "@/server/application/dashboard-service";
import { formatCurrency, formatPercent } from "@/server/domain/portfolio";

export default async function PortfolioPage() {
  const user = await getCurrentUser();
  if (!user) return <p>Sign in to manage your portfolio.</p>;
  const dashboard = await getDashboard(user);

  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>Tracked holdings</h1>
          <p className="muted">Portfolio data feeds personalization, risk scoring, and insight ranking.</p>
        </div>
      </header>
      <section className="panel">
        <ul className="list">
          {dashboard.holdings.map((holding) => {
            const marketValue = holding.quantity * holding.currentPrice;
            const gain = marketValue - holding.quantity * holding.averageCost;
            return (
              <li className="list-item" key={holding.id}>
                <div className="row">
                  <div>
                    <strong>{holding.symbol}</strong>
                    <p className="muted" style={{ marginBottom: 0 }}>
                      {holding.companyName}
                    </p>
                  </div>
                  <strong>{formatCurrency(marketValue)}</strong>
                </div>
                <div className="row">
                  <span>{holding.quantity} shares</span>
                  <span className={gain >= 0 ? "good" : "danger"}>{formatCurrency(gain)}</span>
                  <span>{formatPercent(marketValue / dashboard.portfolio.totalMarketValue)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
