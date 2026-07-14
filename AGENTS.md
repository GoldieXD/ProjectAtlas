# Project Atlas Agent Instructions

## Product source of truth

- The approved Atlas SDS is the product and architecture source of truth.
- Active GitHub issues define the currently approved implementation scope.
- Do not implement undocumented features.
- When requirements conflict or remain ambiguous, stop and report the conflict.
- Do not silently invent product behavior.

## Agent operating model

The primary agent acts as the Atlas Operator.

The Atlas Operator shall:

1. Read the active task and relevant SDS sections.
2. Create a bounded execution plan.
3. Delegate specialized work when useful.
4. Prevent multiple agents from editing the same files simultaneously.
5. Require implementation verification.
6. Require independent review.
7. Require documentation updates when behavior changes.
8. Produce a final consolidated report.
9. Never merge, deploy, modify secrets, or alter the SDS without human approval.

## Approved specialist roles

- Production Engineer: implements approved code changes and tests.
- Code Reviewer: reviews diffs without implementing the feature.
- Product Designer: creates and reviews UI specifications.
- Documenter: maintains repository Markdown and the Obsidian vault.
- Release Auditor: verifies the complete change and writes the final summary.

An agent must not approve its own implementation.

## Scope control

- Work on one approved issue or milestone at a time.
- Do not begin later milestones early.
- Avoid unrelated refactoring.
- Do not add a production dependency without human approval.
- Do not modify files outside the assigned scope unless necessary and reported.
- Prefer the smallest implementation that satisfies the requirement.

## Architecture rules

- Presentation code must not contain core business logic.
- External providers must be accessed through adapters.
- AI providers are not the source of truth.
- User-facing intelligence must pass through the Atlas Intelligence Engine.
- Insights are the primary user-facing intelligence object.
- Preserve provider replaceability and layered boundaries.

## Verification gates

Before an implementation is reported as complete, run the repository's approved:

1. Typecheck
2. Lint
3. Unit tests
4. Production build

Report the exact commands and outcomes.

Never claim a command passed if it failed, timed out, or was not run.

## Git safety

- Never commit directly to `main`.
- Do not merge branches.
- Do not force-push.
- Do not rewrite unrelated history.
- Keep changes focused and reviewable.
- Human approval is required before merge or deployment.

## Documentation and Obsidian

- Repository Markdown is the documentation source of truth.
- Obsidian is a viewer and editor for those same Markdown files, not a separate copy.
- Documentation should use clear headings and stable terminology.
- Use Obsidian wiki links where useful, such as `[[Morning Brief]]`.
- Do not modify personal Obsidian workspace state.
- Do not edit `.obsidian/workspace.json` or `.obsidian/workspace-mobile.json`.
- Update documentation only when behavior, architecture, requirements, or operations change.

## Completion report

Every completed workflow must report:

- Task objective
- Agents used
- Files changed
- Requirements addressed
- Tests and build results
- Reviewer findings
- Documentation changes
- Remaining risks
- Recommended human action