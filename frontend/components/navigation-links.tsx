"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APPLICATION_NAV_ITEMS } from "../lib/application-pages";

type NavigationLinksProps = {
  onNavigate?: () => void;
};

export function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="application-nav-list">
      {APPLICATION_NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              aria-current={isActive ? "page" : undefined}
              className="application-nav-link"
              href={item.href}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
