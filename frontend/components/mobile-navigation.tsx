"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "./navigation-links";

const MOBILE_NAVIGATION_ID = "atlas-mobile-navigation";

function MobileNavigationDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function closeNavigation() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      closeNavigation();
      triggerRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="mobile-navigation">
      <div className="mobile-navigation-bar">
        <span className="atlas-identity">Atlas</span>
        <button
          aria-controls={MOBILE_NAVIGATION_ID}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-navigation-trigger"
          onClick={() => setIsOpen((current) => !current)}
          ref={triggerRef}
          type="button"
        >
          Menu
        </button>
      </div>
      <nav
        aria-label="Primary navigation"
        className="mobile-navigation-panel"
        hidden={!isOpen}
        id={MOBILE_NAVIGATION_ID}
      >
        <NavigationLinks onNavigate={closeNavigation} />
      </nav>
    </div>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();

  return <MobileNavigationDisclosure key={pathname} />;
}
