import { demoCompanies } from "@/server/data/demo-store";

export default function SearchPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Search</p>
          <h1>Companies and securities</h1>
          <p className="muted">Provider adapters will replace demo metadata without changing UI or intelligence logic.</p>
        </div>
      </header>
      <section className="panel">
        <ul className="list">
          {demoCompanies.map((company) => (
            <li className="list-item row" key={company.symbol}>
              <div>
                <strong>{company.symbol}</strong>
                <p className="muted" style={{ marginBottom: 0 }}>
                  {company.name}
                </p>
              </div>
              <span className="badge">{company.exchange}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
