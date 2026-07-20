const foundationItems = [
  "Next.js App Router",
  "TypeScript",
  "Health check API",
  "Automated verification"
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Project Atlas</p>
        <h1 id="hero-title">Know what matters.</h1>
        <p className="lede">
          Atlas is being built as an AI investment operating system for turning
          fragmented market information into clear, personalized understanding.
        </p>
      </section>

      <section className="foundation" aria-labelledby="foundation-title">
        <h2 id="foundation-title">Foundation</h2>
        <ul>
          {foundationItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
