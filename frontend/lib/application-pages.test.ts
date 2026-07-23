import { describe, expect, it } from "vitest";
import { APPLICATION_NAV_ITEMS, APPLICATION_PAGES } from "./application-pages";

describe("application page configuration", () => {
  it("defines the shared navigation in the approved order", () => {
    expect(APPLICATION_NAV_ITEMS).toEqual([
      { href: "/dashboard", label: "Dashboard" },
      { href: "/watchlist", label: "Watchlist" },
      { href: "/brief", label: "Morning Brief" },
      { href: "/insights", label: "Insights" },
      { href: "/assistant", label: "Assistant" },
      { href: "/settings", label: "Settings" }
    ]);
  });

  it("keeps every navigation item consistent with its route page model", () => {
    for (const item of APPLICATION_NAV_ITEMS) {
      expect(APPLICATION_PAGES[item.href]).toMatchObject({
        route: item.href,
        title: item.label
      });
    }
  });

  it("uses the approved placeholder copy for every route", () => {
    expect(APPLICATION_PAGES).toEqual({
      "/dashboard": {
        route: "/dashboard",
        title: "Dashboard",
        message:
          "Dashboard is not available yet. Portfolio summaries, Morning Briefs, and prioritized Insights will be added in later issues."
      },
      "/watchlist": {
        route: "/watchlist",
        title: "Watchlist",
        message:
          "Watchlist is not available yet. Watchlist management and market data have not been implemented."
      },
      "/brief": {
        route: "/brief",
        title: "Morning Brief",
        message:
          "Morning Brief is not available yet. Personalized daily summaries have not been implemented."
      },
      "/insights": {
        route: "/insights",
        title: "Insights",
        message:
          "Insights are not available yet. Personalized, ranked explanations will be added after the required intelligence systems are implemented."
      },
      "/assistant": {
        route: "/assistant",
        title: "Assistant",
        message:
          "Assistant is not available yet. AI questions and explanations have not been implemented."
      },
      "/settings": {
        route: "/settings",
        title: "Settings",
        message:
          "Settings are not available yet. Account and preference controls have not been implemented."
      }
    });
  });
});
