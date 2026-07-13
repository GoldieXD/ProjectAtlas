import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Bell, Bot, BriefcaseBusiness, Newspaper, Search } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas",
  description: "AI-powered investment operating system for market understanding."
};

const navItems = [
  { href: "/", label: "Dashboard", icon: BarChart3 },
  { href: "/portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "/insights", label: "Insights", icon: Newspaper },
  { href: "/assistant", label: "Assistant", icon: Bot },
  { href: "/search", label: "Search", icon: Search }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <aside className="sidebar" aria-label="Primary navigation">
            <div className="brand">
              <span className="brand-mark">A</span>
              <span>Atlas</span>
            </div>
            <nav className="nav">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href} aria-current={index === 0 ? "page" : undefined}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="panel" style={{ marginTop: 28 }}>
              <div className="row">
                <Bell size={18} aria-hidden="true" />
                <span className="badge">Alpha</span>
              </div>
              <p className="muted" style={{ margin: "12px 0 0" }}>
                Demo adapters are active until Supabase, market data, and OpenAI credentials are configured.
              </p>
            </div>
          </aside>
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
