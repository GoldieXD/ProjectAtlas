import { AlertTriangle, ArrowUpRight, CalendarClock, LineChart, MessageSquareText, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { generateMorningBrief } from "@/lib/application/brief-service";
import { getDashboard } from "@/lib/application/dashboard-service";
import { formatCurrency, formatPercent } from "@/lib/utils/format";

export default async function DashboardPage() {
  const [dashboard, brief] = await Promise.all([getDashboard(), generateMorningBrief()]);

  return (
    <AppShell>
      <section className="border-b border-atlas-line bg-white/72">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-sm font-medium text-atlas-signal">Morning Brief</p>
            <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-normal text-atlas-ink md:text-5xl">
              {dashboard.profile.name}, here is what needs attention today.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-atlas-muted">{brief.portfolioUpdate}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <Metric label="Portfolio value" value={formatCurrency(dashboard.portfolio.totalValue)} icon={<LineChart size={18} />} />
            <Metric label="Gain/loss" value={formatPercent(dashboard.portfolio.gainLossPercent)} icon={<ArrowUpRight size={18} />} />
            <Metric label="Top exposure" value={dashboard.portfolio.allocation[0]?.sector ?? "None"} icon={<ShieldCheck size={18} />} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-7 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-atlas-ink">Top insights</h2>
            <span className="text-xs font-medium text-atlas-muted">Ranked by Atlas Decision Engine</span>
          </div>
          <div className="grid gap-3">
            {dashboard.insights.map((insight) => (
              <article key={insight.id} className="rounded border border-atlas-line bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-atlas-ink">{insight.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-atlas-muted">{insight.summary}</p>
                  </div>
                  <span className="rounded bg-atlas-signal px-2.5 py-1 text-xs font-semibold text-white">
                    {insight.importanceScore}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-atlas-ink">{insight.explanation}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-atlas-muted">
                  <span>{insight.reasonShown}</span>
                  <span>Source: {insight.sourceName}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="grid content-start gap-6">
          <section className="rounded border border-atlas-line bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle size={18} className="text-atlas-caution" />
              <h2 className="text-lg font-semibold text-atlas-ink">Risks</h2>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-atlas-muted">
              {(brief.risks.length > 0 ? brief.risks : ["No concentration risk crossed the MVP threshold."]).map((risk) => (
                <li key={risk}>{risk}</li>
              ))}
            </ul>
          </section>

          <section className="rounded border border-atlas-line bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <CalendarClock size={18} className="text-atlas-accent" />
              <h2 className="text-lg font-semibold text-atlas-ink">Upcoming events</h2>
            </div>
            <div className="space-y-3">
              {brief.upcomingEvents.map((event) => (
                <div key={event.id} className="border-t border-atlas-line pt-3 first:border-t-0 first:pt-0">
                  <p className="text-sm font-medium text-atlas-ink">{event.title}</p>
                  <p className="mt-1 text-sm leading-6 text-atlas-muted">{event.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded border border-atlas-line bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <MessageSquareText size={18} className="text-atlas-signal" />
              <h2 className="text-lg font-semibold text-atlas-ink">AI assistant</h2>
            </div>
            <p className="text-sm leading-6 text-atlas-muted">
              API route ready at <code className="rounded bg-atlas-panel px-1.5 py-0.5">/api/assistant</code> for grounded portfolio-aware answers.
            </p>
          </section>
        </aside>
      </section>
    </AppShell>
  );
}

function Metric({ label, value, icon }: Readonly<{ label: string; value: string; icon: React.ReactNode }>) {
  return (
    <div className="rounded border border-atlas-line bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase text-atlas-muted">{label}</span>
        <span className="text-atlas-signal">{icon}</span>
      </div>
      <p className="mt-3 text-xl font-semibold text-atlas-ink">{value}</p>
    </div>
  );
}
