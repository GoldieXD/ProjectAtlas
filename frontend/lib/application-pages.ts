export const APPLICATION_NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/brief", label: "Morning Brief" },
  { href: "/insights", label: "Insights" },
  { href: "/assistant", label: "Assistant" },
  { href: "/settings", label: "Settings" }
] as const;

export type ApplicationRoute = (typeof APPLICATION_NAV_ITEMS)[number]["href"];

export type ApplicationPageModel = {
  route: ApplicationRoute;
  title: (typeof APPLICATION_NAV_ITEMS)[number]["label"];
  message: string;
};

export const APPLICATION_PAGES: Record<ApplicationRoute, ApplicationPageModel> = {
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
};
