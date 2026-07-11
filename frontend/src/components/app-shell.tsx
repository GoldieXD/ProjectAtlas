import Link from "next/link";
import { Bell, BriefcaseBusiness, Newspaper, Search, Sparkles } from "lucide-react";

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-atlas-line bg-white/88 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid h-9 w-9 place-items-center rounded bg-atlas-ink text-sm font-semibold text-white">
              A
            </span>
            <span>
              <span className="block text-sm font-semibold leading-4 text-atlas-ink">Atlas</span>
              <span className="block text-xs text-atlas-muted">Know what matters</span>
            </span>
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
            <Link className="rounded px-3 py-2 text-sm font-medium text-atlas-ink hover:bg-atlas-panel" href="/">
              Brief
            </Link>
            <Link className="rounded px-3 py-2 text-sm font-medium text-atlas-ink hover:bg-atlas-panel" href="/onboarding">
              Onboarding
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Search companies" className="grid h-9 w-9 place-items-center rounded border border-atlas-line bg-white hover:bg-atlas-panel">
              <Search size={18} />
            </button>
            <button aria-label="Notifications" className="grid h-9 w-9 place-items-center rounded border border-atlas-line bg-white hover:bg-atlas-panel">
              <Bell size={18} />
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-atlas-line bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 text-xs text-atlas-muted md:grid-cols-3">
          <span className="inline-flex items-center gap-2">
            <Sparkles size={14} /> Intelligence starts in AIE
          </span>
          <span className="inline-flex items-center gap-2">
            <BriefcaseBusiness size={14} /> Portfolio-aware by design
          </span>
          <span className="inline-flex items-center gap-2">
            <Newspaper size={14} /> Sources remain visible
          </span>
        </div>
      </footer>
    </div>
  );
}
