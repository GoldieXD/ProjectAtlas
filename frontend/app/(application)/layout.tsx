import { ApplicationSidebar } from "../../components/application-sidebar";

export default function ApplicationLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="application-shell">
        <ApplicationSidebar />
        <div className="application-content">{children}</div>
      </div>
    </>
  );
}
