# Issue 1 - Project Foundation

## Summary

Issue #1 created the initial `frontend/` application foundation for [[Project Atlas]]. The committed implementation adds a Next.js App Router runtime with TypeScript, ESLint, npm lockfile support, a basic landing page, a health endpoint, and a minimal automated test.

## What Changed

- Added the initial frontend runtime under `frontend/`.
- Added `GET /api/health` returning a successful Atlas health payload.
- Added frontend verification scripts for typecheck, lint, test, and production build.
- Added `frontend/.env.example` with placeholders only.
- Added `frontend/.nvmrc` for the expected Node.js major version.
- Updated setup documentation in `README.md` and project status documentation in `docs/00-Atlas-Home.md`.

## Scope Boundaries

Issue #1 did not add Supabase, Prisma, authentication, portfolio features, watchlist features, market-data integrations, AI features, dashboard features, deployment, or separate backend/AI runtimes.

The approved SDS remains unchanged. Broader Milestone 1 items remain future work unless covered by later active GitHub issues.

## Verification

The Issue #1 implementation was verified from `frontend/` with:

- `npm ci`
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

Repository-level checks were also run:

- `git diff --check`
- `git status --short`

## Known Follow-Ups

- Review the npm 11 pending install-script approval warnings for `sharp@0.34.5` and `unrs-resolver@1.12.2` before CI/deployment hardening.
- Consider aligning `@types/node` with the Node.js version documented in `frontend/.nvmrc`.

## Links

- [[Atlas Decision Engine]]
- [[Morning Brief]]
- [Project status](../../00-Atlas-Home.md)
