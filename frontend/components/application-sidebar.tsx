import { NavigationLinks } from "./navigation-links";

export function ApplicationSidebar() {
  return (
    <aside className="application-sidebar" aria-label="Atlas application">
      <span className="atlas-identity">Atlas</span>
      <nav aria-label="Primary navigation">
        <NavigationLinks />
      </nav>
    </aside>
  );
}
