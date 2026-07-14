# Atlas Home

Project Atlas is an AI-powered investment operating system. Its purpose is to help investors turn fragmented market data, financial news, portfolio context, and economic events into personalized, explainable intelligence.

The approved product and architecture source of truth is the [[Atlas-Software-Design-Specification|Atlas Software Design Specification]]. This homepage is a navigation and status summary only; it does not replace the SDS.

## Current Repository Status

Atlas is currently in documentation and foundation setup. The repository contains the SDS, README, roadmap, feature summary, vision summary, documentation folders, and the initial Next.js frontend foundation.

Current implementation directories:

- `frontend/` contains the initial Next.js App Router runtime, TypeScript configuration, health endpoint, and verification scripts for Issue #1.
- `ai/`
- `backend/`
- `tests/`

No implemented application features are documented here as complete.

## SDS Roadmap Milestone

The first milestone defined by the SDS roadmap is Milestone 1: Project setup, authentication, and deployment foundation.
Implementation should begin only after the active task or GitHub issue explicitly authorizes it.

Milestone 1 covers project initialization, repository setup, Next.js and TypeScript foundation, Tailwind and UI setup, Supabase connection and authentication, basic layout, and deployment pipeline.

Do not begin later milestone work unless it is explicitly authorized by the active task and consistent with the SDS roadmap.

## Navigation

- [[Atlas-Software-Design-Specification|SDS]]
- [README](../README.md)
- [[roadmap|Roadmap]]
- [[features|Features]]
- [[vision|Vision]]
- [Architecture](Atlas-Software-Design-Specification.md#18-high-level-system-architecture) - architecture currently lives inside the SDS; no standalone architecture page exists yet.
- [Agent Reports](agent-reports/) - folder exists, but no report files exist yet.

## Development Workflow

Atlas should be built incrementally, one approved milestone at a time. Each milestone should leave the application working, testable, and aligned with the SDS.

Before implementation work:

- Read the active task and relevant SDS sections.
- Confirm the work is authorized by the active task or GitHub issue and aligns with the SDS roadmap.
- Avoid undocumented features and unrelated refactoring.
- Preserve layered architecture boundaries.
- Keep external providers behind adapters.
- Keep user-facing intelligence flowing through the Atlas Intelligence Engine.

Before reporting implementation complete, run the repository's approved verification gates when available:

- Typecheck
- Lint
- Unit tests
- Production build

Issue #1 establishes the initial frontend verification commands under `frontend/`. Later milestone commands should be added only when the active task introduces them.

## Atlas Agent Workflow

Atlas agent work follows the operator model defined in `AGENTS.md`.

The Atlas Operator coordinates bounded work, reads the SDS, delegates specialist roles when useful, prevents file-edit conflicts, requires verification, requires independent review, and produces a consolidated completion report.

Approved specialist roles include:

- Production Engineer
- Code Reviewer
- Product Designer
- Documenter
- Release Auditor

Agents must not approve their own implementation, merge, deploy, modify secrets, alter the SDS, or change scope without human approval.

## Current Implementation Status

The repository now contains the initial `frontend/` application source, package configuration, test runner, and build tooling created for Issue #1.

Milestone 1 remains partially complete only. Authentication, Supabase integration, Tailwind or UI library setup, deployment pipeline work, and product features are not documented as implemented here.

Current documented MVP areas include [[features#Authentication|Authentication]], [[features#Portfolio|Portfolio]], [[features#Watchlist|Watchlist]], [[features#Dashboard|Dashboard]], [[features#Morning Brief|Morning Brief]], [[features#Insights|Insights]], [[features#AI Assistant|AI Assistant]], and [[features#Search and Company Pages|Search and Company Pages]].

These are approved product areas, not implemented features.

## Upcoming Milestone

After Milestone 1 is completed and approved, the next milestone is **Milestone 2: Portfolio and watchlist management**.

Milestone 2 includes portfolio CRUD, watchlist CRUD, database models, dashboard widgets, portfolio calculations, and company search.

## Documentation Notes

Repository Markdown is the documentation source of truth. Obsidian should be treated as a viewer and editor for these same Markdown files, not a separate documentation copy.

Known navigation gaps:

- No standalone architecture page exists; use the SDS architecture section.
- No agent report files exist yet under `docs/agent-reports/`.
- `docs/prompts.md` exists but is currently empty.
