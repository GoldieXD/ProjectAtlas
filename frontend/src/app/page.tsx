import { Clock, ExternalLink, ShieldAlert, TrendingUp } from "lucide-react";
import { getCurrentUser } from "@/server/application/context";
import { getDashboard } from "@/server/application/dashboard-service";
import { formatCurrency, formatPercent } from "@/server/domain/portfolio";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    return <p>Sign in to view Atlas.</p>;
  }

  const dashboard = await getDashboard(user);
  const gainClass = dashboard.portfolio.unrealizedGainLoss >= 0 ? "good" : "danger";

  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Morning Brief</p>
          <h1>Know what matters today.</h1>
          <p className="muted">{dashboard.morningBrief.marketSummary}</p>
        </div>
        <a className="button secondary" href="/api/health">
          <Clock size={18} aria-hidden="true" />
          System health
        </a>
      </header>

      <section className="grid" aria-label="Atlas dashboard">
        <article className="panel span-4">
          <h2>Portfolio Value</h2>
          <p className="metric">{formatCurrency(dashboard.portfolio.totalMarketValue)}</p>
          <p className={gainClass}>
            {formatCurrency(dashboard.portfolio.unrealizedGainLoss)} ({formatPercent(dashboard.portfolio.unrealizedGainLossPercent)})
          </p>
        </article>

        <article className="panel span-4">
          <h2>Top Insight Score</h2>
          <p className="metric">{dashboard.insights[0]?.importanceScore ?? 0}</p>
          <p className="muted">Every event is routed through the Atlas Decision Engine.</p>
        </article>

        <article className="panel span-4">
          <h2>Brief Read Time</h2>
          <p className="metric">{dashboard.morningBrief.readTimeMinutes} min</p>
          <p className="muted">Designed to stay under the SDS five-minute target.</p>
        </article>

        <article className="panel span-7">
          <div className="row">
            <h2>Highest Priority Insights</h2>
            <span className="badge">AIE Output</span>
          </div>
          <ul className="list">
            {dashboard.insights.map((insight) => (
              <li className="list-item" key={insight.id}>
                <div className="row">
                  <strong>{insight.title}</strong>
                  <span className="score">{insight.importanceScore}</span>
                </div>
                <p className="muted">{insight.summary}</p>
                <p>{insight.explanation}</p>
                <a className="badge" href={insight.sources[0]?.url} target="_blank" rel="noreferrer">
                  <ExternalLink size={14} aria-hidden="true" />
                  {insight.sources[0]?.provider}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <aside className="panel span-5">
          <div className="row">
            <h2>Risk Monitor</h2>
            <ShieldAlert size={18} aria-hidden="true" />
          </div>
          <div className="stack">
            {dashboard.morningBrief.risks.map((risk) => (
              <p key={risk}>{risk}</p>
            ))}
            <h2>Sector Allocation</h2>
            {dashboard.portfolio.sectorAllocation.map((sector) => (
              <div className="row" key={sector.sector}>
                <span>{sector.sector}</span>
                <strong>{formatPercent(sector.weight)}</strong>
              </div>
            ))}
          </div>
        </aside>

        <article className="panel span-12">
          <div className="row">
            <h2>Learning Moment</h2>
            <TrendingUp size={18} aria-hidden="true" />
          </div>
          <p>{dashboard.morningBrief.learningMoment}</p>
        </article>
      </section>
    </>
  );
}
