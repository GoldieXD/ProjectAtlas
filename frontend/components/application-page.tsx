import type { ApplicationPageModel } from "../lib/application-pages";
import { MobileNavigation } from "./mobile-navigation";

const PAGE_HEADING_ID = "application-page-heading";

type ApplicationPageProps = {
  model: ApplicationPageModel;
};

export function ApplicationPage({ model }: ApplicationPageProps) {
  return (
    <>
      <header className="application-header">
        <MobileNavigation />
        <div className="application-heading">
          <p className="application-eyebrow">Atlas workspace</p>
          <h1 id={PAGE_HEADING_ID}>{model.title}</h1>
        </div>
      </header>
      <main
        aria-labelledby={PAGE_HEADING_ID}
        className="application-main"
        id="main-content"
      >
        <section className="placeholder-panel">
          <p className="placeholder-status">Coming later.</p>
          <p className="placeholder-message">{model.message}</p>
        </section>
      </main>
    </>
  );
}

export function ApplicationLoadingPage({ model }: ApplicationPageProps) {
  return (
    <>
      <header className="application-header">
        <MobileNavigation />
        <div className="application-heading">
          <p className="application-eyebrow">Atlas workspace</p>
          <h1 id={PAGE_HEADING_ID}>{model.title}</h1>
        </div>
      </header>
      <main
        aria-busy="true"
        aria-labelledby={PAGE_HEADING_ID}
        className="application-main"
        id="main-content"
      >
        <p aria-live="polite" className="loading-status" role="status">
          Loading Atlas page…
        </p>
      </main>
    </>
  );
}
