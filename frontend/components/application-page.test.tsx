import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { APPLICATION_PAGES } from "../lib/application-pages";
import { ApplicationLoadingPage, ApplicationPage } from "./application-page";

const { usePathname } = vi.hoisted(() => ({
  usePathname: vi.fn()
}));

vi.mock("next/navigation", () => ({ usePathname }));

describe("ApplicationPage", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/dashboard");
  });

  it("renders the route heading, exact placeholder copy, and labelled main region", () => {
    const markup = renderToStaticMarkup(
      <ApplicationPage model={APPLICATION_PAGES["/dashboard"]} />
    );

    expect(markup).toContain(
      '<h1 id="application-page-heading">Dashboard</h1>'
    );
    expect(markup).toContain(
      '<main aria-labelledby="application-page-heading" class="application-main" id="main-content">'
    );
    expect(markup).toContain("Coming later.");
    expect(markup).toContain(APPLICATION_PAGES["/dashboard"].message);
    expect(markup.match(/<h1/g)).toHaveLength(1);
  });

  it("renders the exact accessible loading state while retaining the heading", () => {
    const markup = renderToStaticMarkup(
      <ApplicationLoadingPage model={APPLICATION_PAGES["/brief"]} />
    );

    expect(markup).toContain(
      '<h1 id="application-page-heading">Morning Brief</h1>'
    );
    expect(markup).toContain('aria-busy="true"');
    expect(markup).toContain('aria-live="polite"');
    expect(markup).toContain('role="status"');
    expect(markup).toContain("Loading Atlas page…");
  });
});
