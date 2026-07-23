# Project Atlas

> AI Investment Operating System

## Mission

Atlas is an AI-powered investment operating system designed to help investors understand financial markets quickly, confidently, and efficiently.

Instead of forcing users to search across multiple websites and apps, Atlas gathers market data, financial news, portfolio information, and economic events into one personalized experience that explains what matters now.

## Core Goals

- Save investors time
- Explain market events in plain English
- Personalize insights based on each user's portfolio and interests
- Become the first app investors open every morning

## MVP Focus

Atlas V1 is built to validate the core hypothesis that investors will consistently use the product if it transforms fragmented financial information into personalized intelligence.

### Included features

- Account creation and authentication
- Portfolio and watchlist management
- Dashboard with Morning Brief and top insights
- Personalized insights with explainable reasoning
- AI assistant for market and portfolio questions
- Company search and company pages

## Delivery Roadmap

- Milestone 1: Project setup, auth, and deployment foundation
- Milestone 2: Portfolio and watchlist management
- Milestone 3: Market event ingestion and decision engine
- Milestone 4: Morning Brief and daily summaries
- Milestone 5: AI assistant with portfolio-aware explanations
- Milestone 6: Polish, accessibility, and performance improvements

## Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: Next.js Route Handlers, Supabase, PostgreSQL
- AI: OpenAI API
- Deployment: Vercel

## Local Frontend Setup

The initial Atlas application runtime lives in `frontend/`.

Prerequisites:

- Node.js 20, matching `frontend/.nvmrc`
- npm

Install and run locally:

```bash
cd frontend
npm ci
npm run dev
```

Then open `http://localhost:3000`.

Health check:

```bash
curl http://localhost:3000/api/health
```

Expected JSON:

```json
{
  "status": "ok",
  "service": "atlas-frontend"
}
```

## Application Shell Status

Issue #5 adds the presentation-only application shell used to frame future Atlas
features. The implementation is on `feature/005-application-shell` and remains
subject to human review and merge. It does not provide working investment
features.

The shell provides shared navigation and honest placeholder pages at:

- `/dashboard`
- `/watchlist`
- `/brief` for the future Morning Brief
- `/insights`
- `/assistant`
- `/settings`

On viewports below 768px, a labelled **Menu** button opens and closes the primary
navigation. At 768px through 1023px, the shell uses a 208px sidebar. At 1024px
and above, the sidebar is 248px wide. The shell also includes a shared page
header and main-content region, an application-level not-found page, route
loading states, a skip link, semantic landmarks, active-link `aria-current`,
visible keyboard focus, and Escape-key menu closing with focus restored to the
Menu button.

The routes deliberately say that their content is unavailable or coming later.
Authentication, database work, Supabase, Prisma, market data, portfolio and
watchlist behavior, Morning Brief generation, Insights, AI behavior, settings
functionality, and deployment remain deferred. See
[`docs/notes/02 Engineering/Issue 5 - Application Shell.md`](docs/notes/02%20Engineering/Issue%205%20-%20Application%20Shell.md)
for implementation structure, verification evidence, and limitations.

## Verification Commands

Run from `frontend/`:

```bash
npm ci
npm run typecheck
npm run lint
npm run test
npm run build
```

Run from the repository root:

```bash
git diff --check
git status --short
```

## Continuous Integration

GitHub Actions runs the frontend verification workflow on pull requests targeting
`rebuild/mvp` and on pushes to `rebuild/mvp`.

The workflow lives at `.github/workflows/frontend-ci.yml`. It uses the Node.js
version from `frontend/.nvmrc`, installs dependencies with `npm ci`, caches npm
dependencies using `frontend/package-lock.json`, and runs the same verification
commands listed above from `frontend/`.

The workflow requires no secrets, performs no deployment, and uses explicit
read-only repository permissions.
