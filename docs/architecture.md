# Atlas MVP Architecture

This implementation follows the SDS layered architecture and keeps user-facing intelligence behind the Atlas Intelligence Engine.

## System Architecture

Investor -> Next.js Presentation Layer -> Route Handlers/Application Services -> Intelligence Layer -> Data/Integration Adapters -> Providers.

- Presentation: `frontend/src/app`
- Application: `frontend/src/server/application`
- Intelligence: `frontend/src/server/intelligence`
- Domain: `frontend/src/server/domain`
- Data: `frontend/src/server/data`
- Validation: `frontend/src/server/validation`
- Persistence schema: `frontend/prisma/schema.prisma`

Provider-dependent functionality uses demo adapters until Supabase/Auth, market data, news, and OpenAI credentials are configured.

## Database Schema

The Prisma schema includes SDS entities: users, portfolios, holdings, watchlists, market events, insights, sources, morning briefs, learning records, memory nodes, and notification preferences. Postgres is the production database target.

## API Endpoints

- `GET /api/health`
- `GET /api/dashboard`
- `GET /api/portfolio`
- `POST /api/portfolio`
- `GET /api/watchlist`
- `GET /api/insights`
- `GET /api/morning-brief`
- `POST /api/assistant`
- `GET /api/search?q=AAPL`

## UI Architecture

The MVP is dashboard-first. Pages are server-rendered by default and call application services directly when possible. Client interactivity is isolated to the assistant UI.

## Milestone Coverage

- Milestone 1: Next.js, TypeScript, Prisma, validation, layout, health endpoint.
- Milestone 2: Portfolio/watchlist models, calculations, dashboard and portfolio views.
- Milestone 3: Demo market events, Decision Engine, insight generation.
- Milestone 4: Morning Brief generation.
- Milestone 5: Context-aware assistant endpoint with safe non-recommendation behavior.

Next production steps are replacing demo adapters with Supabase Auth, persistent repositories, market/news adapters, OpenAI orchestration, and scheduled background jobs.
