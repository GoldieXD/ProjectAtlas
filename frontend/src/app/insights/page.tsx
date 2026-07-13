import { getCurrentUser } from "@/server/application/context";
import { getDashboard } from "@/server/application/dashboard-service";

export default async function InsightsPage() {
  const user = await getCurrentUser();
  if (!user) return <p>Sign in to view insights.</p>;
  const dashboard = await getDashboard(user);

  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Insights</p>
          <h1>Personalized intelligence</h1>
          <p className="muted">Insights are source-backed AIE outputs, not raw news feed items.</p>
        </div>
      </header>
      <section className="stack">
        {dashboard.insights.map((insight) => (
          <article className="panel" key={insight.id}>
            <div className="row">
              <span className="badge">{insight.category}</span>
              <strong className="score">{insight.importanceScore}</strong>
            </div>
            <h2>{insight.title}</h2>
            <p>{insight.explanation}</p>
            <p className="muted">Why shown: {insight.rationale.join(" ")}</p>
          </article>
        ))}
      </section>
    </>
  );
}
