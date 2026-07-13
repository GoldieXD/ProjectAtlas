import AssistantClient from "./ui";

export default function AssistantPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">AI Assistant</p>
          <h1>Ask with portfolio context.</h1>
          <p className="muted">The MVP assistant distinguishes facts, context, and education while avoiding recommendations.</p>
        </div>
      </header>
      <AssistantClient />
    </>
  );
}
