"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function AssistantClient() {
  const [question, setQuestion] = useState("Why is Apple showing up in my brief?");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAssistant() {
    setLoading(true);
    setAnswer("");
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });
    const body = await response.json();
    setAnswer(body.answer ?? body.error ?? "Atlas could not answer that question.");
    setLoading(false);
  }

  return (
    <section className="panel stack">
      <div className="field">
        <label htmlFor="question">Question</label>
        <textarea id="question" value={question} onChange={(event) => setQuestion(event.target.value)} />
      </div>
      <button className="button" type="button" onClick={askAssistant} disabled={loading}>
        <Send size={18} aria-hidden="true" />
        {loading ? "Thinking" : "Ask Atlas"}
      </button>
      {answer ? <pre className="panel" style={{ whiteSpace: "pre-wrap", margin: 0 }}>{answer}</pre> : null}
    </section>
  );
}
