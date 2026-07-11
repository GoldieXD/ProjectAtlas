# Atlas MVP

This folder contains the SDS-aligned MVP foundation for Atlas.

## What is included

- Next.js App Router application
- TypeScript and Tailwind configuration
- Prisma schema for users, holdings, watchlists, market events, insights, and morning briefs
- Layered MVP structure:
  - `src/app`: presentation and route handlers
  - `src/lib/application`: use-case orchestration
  - `src/lib/domain`: domain types and calculations
  - `src/lib/intelligence`: Decision, Context, and Insight generation logic
  - `src/lib/integrations`: provider contracts and demo adapter
  - `src/lib/data`: temporary demo repository
- API routes for insights, Morning Brief, and assistant answers
- Demo authentication routes and screens ready for Clerk or Supabase Auth
- Focused tests for portfolio calculations and decision ranking

## Run locally

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Optional checks:

```bash
npm run typecheck
npm test
npm run build
```

## Notes

The current implementation uses demo data so the app can be exercised before Supabase, authentication, market data, news, and AI provider keys are configured.
