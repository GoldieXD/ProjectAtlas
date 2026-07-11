import { Check, Clock, Target, UserRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export default function OnboardingPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-4xl px-5 py-8">
        <p className="text-sm font-medium text-atlas-signal">MVP onboarding</p>
        <h1 className="mt-2 text-3xl font-semibold text-atlas-ink md:text-4xl">Set the context Atlas needs first.</h1>
        <form className="mt-6 grid gap-5 rounded border border-atlas-line bg-white p-5 shadow-sm">
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-medium text-atlas-ink">
              <Target size={16} /> Investing goal
            </span>
            <input className="rounded border border-atlas-line px-3 py-2 text-atlas-ink" defaultValue="Build long-term wealth" name="goal" />
          </label>
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-medium text-atlas-ink">
              <UserRound size={16} /> Experience level
            </span>
            <select className="rounded border border-atlas-line px-3 py-2 text-atlas-ink" defaultValue="intermediate" name="experience">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-medium text-atlas-ink">
              <Clock size={16} /> Daily time commitment
            </span>
            <input className="rounded border border-atlas-line px-3 py-2 text-atlas-ink" defaultValue="5" min="1" name="minutes" type="number" />
          </label>
          <button className="inline-flex h-10 w-fit items-center gap-2 rounded bg-atlas-ink px-4 text-sm font-semibold text-white hover:bg-black" type="button">
            <Check size={16} /> Save profile
          </button>
        </form>
      </section>
    </AppShell>
  );
}
