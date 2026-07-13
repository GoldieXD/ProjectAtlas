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

- Frontend: Next.js, React, accessible CSS foundation
- Backend: Next.js Route Handlers, Supabase/PostgreSQL-ready Prisma schema
- AI: OpenAI API
- Deployment: Vercel

## Current MVP Implementation

The deployable app lives in `frontend/`. It implements the SDS layered architecture with presentation, application, intelligence, domain, data, and validation boundaries.

### Run locally

```powershell
pnpm install
pnpm --filter @atlas/frontend run dev
```

### Verify

```powershell
pnpm --filter @atlas/frontend run typecheck
pnpm --filter @atlas/frontend run test
pnpm --filter @atlas/frontend run build
```

### Architecture Handoff

Read `docs/architecture.md` for the system architecture, file structure, database schema summary, API endpoints, UI architecture, and milestone coverage.

The app currently uses demo adapters for auth context, market data, news, and AI responses. Production provider work should replace adapters without moving business logic into UI or provider-specific modules.
