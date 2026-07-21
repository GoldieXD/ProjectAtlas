# Issue 3 - CI Foundation

## Summary

Issue #3 adds automated frontend verification for [[Project Atlas]] through GitHub Actions.

The workflow is `.github/workflows/frontend-ci.yml`. It runs on pull requests targeting `rebuild/mvp` and on pushes to `rebuild/mvp`.

## What CI Runs

CI uses the Node.js version from `frontend/.nvmrc`, installs with npm, and runs all checks from `frontend/`:

```bash
npm ci
npm run typecheck
npm run lint
npm run test
npm run build
```

npm dependency caching is configured through `actions/setup-node` using `frontend/package-lock.json`.

## Security and Scope

The workflow uses explicit read-only repository permissions, requires no secrets, and performs no deployment.

Issue #3 does not add Vercel integration, Supabase, Prisma, authentication, browser end-to-end tests, code coverage enforcement, release automation, or product behavior changes.

## Local Reproduction

Run the CI commands locally from `frontend/`:

```bash
npm ci
npm run typecheck
npm run lint
npm run test
npm run build
```

Then run repository checks from the project root:

```bash
git diff --check
git status --short
```

## Current Status

The project now has a repeatable frontend verification gate for future work targeting `rebuild/mvp`. Milestone 1 remains partially complete; CI is foundation work and does not indicate that deployment or product features are implemented.

## Links

- [Project status](../../00-Atlas-Home.md)
- [[Morning Brief]]
- [[Atlas Decision Engine]]
