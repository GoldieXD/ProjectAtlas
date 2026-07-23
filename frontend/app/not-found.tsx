import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main
        aria-labelledby="not-found-heading"
        className="not-found-page"
        id="main-content"
      >
        <p className="not-found-identity">Atlas</p>
        <h1 id="not-found-heading">Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link className="not-found-link" href="/dashboard">
          Go to dashboard
        </Link>
      </main>
    </>
  );
}
