# Atlas Engineering Workflows

## Purpose

This document defines the approved development workflow for Project Atlas.

It explains how work moves from an idea or GitHub issue through planning, implementation, review, documentation, audit, and human approval.

The SDS defines what Atlas is.

The Engineering Playbook defines engineering standards.

This document defines how work moves through the system.

---

# 1. Source of Truth

Priority order:

1. Active GitHub issue
2. Approved Atlas SDS
3. Accepted ADRs
4. Engineering Playbook
5. Repository README

If these sources conflict:

- Stop work
- Do not guess
- Escalate to the Atlas Operator
- Request human clarification

---

# 2. Branch Workflow

Atlas uses the following branch structure:

```text
main
└── rebuild/mvp
    ├── feature/<issue-number>-<short-description>
    ├── fix/<issue-number>-<short-description>
    └── docs/<issue-number>-<short-description>

3. Issue Workflow

Every implementation task should begin with a GitHub issue.

The issue must include:

Objective
Background
In-scope work
Out-of-scope work
Acceptance criteria
Dependencies
Allowed files or directories
Required verification commands
Relevant SDS requirement IDs

A task is not ready for implementation until these are clear.

4. Agent Workflow

The Atlas Operator coordinates all specialist agents.

Human creates or approves issue
        ↓
Atlas Operator reviews scope
        ↓
Product Designer, when UI is affected
        ↓
Production Engineer implements
        ↓
Code Reviewer reviews
        ↓
Production Engineer fixes findings
        ↓
Code Reviewer approves
        ↓
Documenter updates required docs
        ↓
Release Auditor verifies final package
        ↓
Atlas Operator produces final report
        ↓
Human approves merge

Atlas Operator responsibilities

The Atlas Operator must:

Read the active issue
Read relevant SDS sections
Record initial Git status
Confirm the current branch
Define file boundaries
Delegate only required roles
Prevent overlapping edits
Stop scope expansion
Require verification
Require independent review
Require a documentation assessment for every workflow
Require final release audit
Request human approval before merge or deployment

The Atlas Operator should not begin by writing code.

5. Product Design Workflow

The Product Designer is required when a task changes:

Page layout
Navigation
Forms
User flows
Component behavior
Responsive behavior
Loading, empty, error, or success states
Accessibility behavior

The Product Designer produces:

User goal
Information hierarchy
Screen regions
Components
Interaction rules
Responsive behavior
Accessibility requirements
Acceptance criteria
Explicit exclusions

The Product Designer does not implement production code unless separately authorized.

6. Implementation Workflow

The Production Engineer must:

Work only within the approved scope
Follow the issue and SDS
Use existing architecture patterns
Avoid unrelated refactoring
Add or update meaningful tests
Run required verification commands
Report exact files changed
Report assumptions and remaining risks

The Production Engineer must not:

Expand scope
Modify the SDS
Merge or deploy
Modify secrets
Add dependencies without approval
Approve its own work
Claim success when verification failed or was skipped

7. Code Review Workflow

The Code Reviewer independently reviews the task-created diff.

The reviewer evaluates:

Correctness
SDS compliance
Architecture
Security
Privacy
Type safety
Error handling
Test quality
Accessibility
Maintainability
Scope control
Documentation impact

The reviewer must distinguish:

Task-created changes
Pre-existing repository risks

Pre-existing issues should be reported separately unless they make the assigned task unsafe, inaccurate, or impossible to verify.

Valid verdicts:

APPROVE
REQUEST_CHANGES
BLOCK

If the verdict is REQUEST_CHANGES, the Atlas Operator returns the findings to the Production Engineer and repeats the review loop.

8. Documentation Workflow

The Documenter runs after implementation is approved.

Documentation updates are required when a task changes:

Setup instructions
Architecture
Public behavior
Requirements status
Environment variables
Deployment
Operations
Development workflow
Accepted decisions

Repository Markdown is the source of truth.

Obsidian is a viewer and editor for those same Markdown files.

The Documenter must not:

Edit production behavior
Claim unfinished features are implemented
Rewrite accepted ADR history
Duplicate authoritative documents
Edit personal Obsidian workspace state

## Obsidian Documentation Workflow

After code review approval, the Documenter must determine whether the task changes:

- code behavior
- architecture
- development workflow
- setup
- project status
- risks
- accepted decisions

When applicable, the Documenter must update both:

1. Authoritative repository documentation
2. Human-readable Obsidian notes under `docs/notes/`

The Documenter must not edit `docs/notes/.obsidian/`.

A task is not documentation-complete when meaningful implementation changes occurred but the Obsidian vault contains no updated human-readable summary.

9. Release Audit Workflow

The Release Auditor performs the final independent check.

The auditor reviews:

Original issue
Acceptance criteria
Final diff
Reviewer verdict
Verification output
Documentation changes
Known limitations
Scope boundaries

Valid recommendations:

READY_FOR_HUMAN_REVIEW
NOT_READY
BLOCKED

The Release Auditor does not implement fixes.

10. Verification Workflow

The standard verification order is:

npm ci
npm run typecheck
npm run lint
npm run test
npm run build

Additional checks may be required by the issue.

Examples:

npx prisma validate
git diff --check

Rules:

Never report a command as passed if it failed
Never report a command as passed if it timed out
Never report a command as passed if it was not run
Record exact command output or a concise verified summary
Run commands from the correct working directory

For the MVP frontend, the working directory is:

frontend/

11. Dependency Workflow

Before adding a dependency:

Explain why it is required
Confirm existing tools cannot solve the problem
Confirm it is used immediately
Confirm it fits the SDS stack
Obtain human approval
Update the lockfile
Document operational impact when relevant

Atlas uses npm exclusively.

Do not create:

pnpm-lock.yaml
yarn.lock

The authoritative lockfile is:

frontend/package-lock.json

12. Database Workflow

Prisma migrations are authoritative for Atlas-owned application tables.

Rules:

Do not edit production database schemas manually
Do not change Supabase-managed auth schemas through Prisma
Review every migration before applying it
Never apply production migrations without human approval
Commit schema and migration files together
Validate migrations locally or in a development environment first

13. Environment and Secret Workflow

Only placeholder environment templates may be committed.

Allowed:

.env.example

Never commit:

.env
.env.local
.env.production

Rules:

Browser-safe variables may use NEXT_PUBLIC_
Database URLs remain server-only
Service-role keys remain server-only
Secrets must not appear in logs, screenshots, prompts, or documentation
Deployment secrets belong in approved hosting-provider settings

14. Pull Request Workflow

A pull request should include:

Issue reference
Objective
Summary of changes
Files changed
Requirements addressed
Verification commands and results
Screenshots for UI changes
Reviewer verdict
Documentation updates
Known risks
Release Auditor recommendation

The PR should target:

rebuild/mvp

unless explicitly approved otherwise.

15. Merge Workflow

Human approval is always required before merge.

Before merging, confirm:

Code Reviewer returned APPROVE
Release Auditor returned READY_FOR_HUMAN_REVIEW
Required checks passed
Documentation is accurate
No unresolved blocker remains
Branch is up to date with rebuild/mvp

Agents must not merge automatically.

16. Deployment Workflow

GitHub Actions performs continuous integration.

Vercel Git integration performs preview deployments.

For the MVP:

Vercel Root Directory: frontend
Preview deployment required before release approval
Production deployment requires human approval
Environment variables must be configured outside Git
Deployment success does not equal product readiness

17. Hotfix Workflow

Hotfix branches use:

hotfix/<short-description>

Hotfixes may skip normal milestone planning only when urgent.

They still require:

Bounded scope
Production Engineer implementation
Independent review
Verification
Documentation update when needed
Release audit
Human approval
18. Definition of Ready

A task is ready when:

A GitHub issue exists
Scope is bounded
Acceptance criteria are testable
Dependencies are identified
Relevant SDS sections are known
Required design work is complete
Human approvals are recorded
Branch destination is known

19. Definition of Done

A task is done when:

Implementation matches the issue
Acceptance criteria are satisfied
Typecheck passes
Lint passes
Tests pass
Production build passes
Code Reviewer approves
Documentation is updated when required
Release Auditor recommends human review
Human approves the merge
20. Completion Report

The Atlas Operator must provide:

Task objective
Branch
Agents used
Files changed
Requirements addressed
Verification results
Reviewer verdict
Documentation changes
Release Auditor recommendation
Remaining risks
Recommended human action

One adjustment: use either `workflows.md` under `docs/` or fold this into `ENGINEERING-PLAYBOOK.md`. Keeping both with overlapping rules can cause drift. My recommendation is:

```text
docs/workflows.md

for the detailed process above, while ENGINEERING-PLAYBOOK.md stays the shorter high-level policy document.

