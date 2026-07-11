import Link from "next/link";
import { LogIn } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export default function LoginPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-md px-5 py-8">
        <h1 className="text-3xl font-semibold text-atlas-ink">Log in</h1>
        <form className="mt-6 grid gap-4 rounded border border-atlas-line bg-white p-5 shadow-sm">
          <label className="grid gap-2 text-sm font-medium text-atlas-ink">
            Email
            <input className="rounded border border-atlas-line px-3 py-2" name="email" type="email" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-atlas-ink">
            Password
            <input className="rounded border border-atlas-line px-3 py-2" name="password" type="password" />
          </label>
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded bg-atlas-ink px-4 text-sm font-semibold text-white" type="button">
            <LogIn size={16} /> Log in
          </button>
          <Link className="text-sm font-medium text-atlas-signal" href="/auth/register">
            Create an account
          </Link>
        </form>
      </section>
    </AppShell>
  );
}
