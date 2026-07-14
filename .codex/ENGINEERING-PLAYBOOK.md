# Atlas Engineering Playbook

Version: 1.0
Status: Active
Owner: Atlas Engineering

---

# Purpose

This document defines how Project Atlas is engineered.

It is NOT a product specification.

The SDS defines what Atlas is.

The Engineering Playbook defines how Atlas is built.

All engineers, human and AI, must follow this document.

---

# Engineering Philosophy

Atlas is built around five principles.

1. Build one milestone at a time.
2. Keep every milestone deployable.
3. Keep architecture ahead of features.
4. Optimize for maintainability over speed.
5. Never sacrifice correctness for velocity.
6. When in doubt, prefer the simpler implementation that satisfies the SDS. Do not introduce complexity solely for anticipated future needs.

---

# Source of Truth

Priority order:

1. Active GitHub Issue
2. Approved SDS
3. ADRs
4. Engineering Playbook
5. README

If documentation conflicts:

STOP.

Do not guess.

Escalate to the Atlas Operator.

---

# Repository Structure

ProjectAtlas/

docs/
frontend/
backend/
ai/
tests/

.codex/
AGENTS.md
ENGINEERING-PLAYBOOK.md
README.md

---

# Branch Strategy

main

Production-ready code only.

rebuild/mvp

Current development branch.

feature/<issue-number>-description

Normal implementation.

hotfix/<description>

Emergency fixes only.

---

# Issue Lifecycle

Issue Created

↓

Atlas Operator Planning

↓

Designer (if UI)

↓

Production Engineer

↓

Code Review

↓

Engineer Revision

↓

Review Approval

↓

Documentation Update

↓

Release Audit

↓

Human Approval

↓

Merge

---

# Agent Responsibilities

Atlas Operator

Coordinates work.

Never writes production code unless explicitly required.

Production Engineer

Implements approved work.

Never approves own implementation.

Code Reviewer

Reviews implementation.

Never expands scope.

Never merges.

Product Designer

Defines UI.

Does not implement backend logic.

Documenter

Maintains documentation.

Repository Markdown is the source of truth.

Release Auditor

Final verification only.

Never implements fixes.

---

# Definition of Ready

A task is ready when:

✓ Requirements exist
✓ Acceptance criteria exist
✓ Scope is bounded
✓ Dependencies identified
✓ Human approval received

---

# Definition of Done

A task is done only when:

✓ Implementation complete
✓ Review approved
✓ Documentation updated
✓ Verification passed
✓ Release audit completed
✓ Human approval received

---

# Verification Gates

Required:

Typecheck

Lint

Unit Tests

Production Build

Additional verification may be added depending on milestone.

No agent may claim success when a required verification failed or was skipped.

---

# Documentation Rules

Repository Markdown is the documentation source of truth.

Obsidian is a viewer/editor only.

Documentation must reflect implementation.

Documentation must never describe planned work as implemented.

---

# Architecture Rules

Business logic stays outside UI.

External providers use adapters.

Presentation contains presentation only.

Atlas Intelligence Engine owns user-facing intelligence.

Decision Engine owns prioritization.

---

# Git Rules

Never commit directly to main.

Never force push.

Never rewrite shared history.

Keep commits focused.

One issue per branch.

---

# Security Rules

Never commit secrets.

Only .env.example belongs in Git.

Service role keys remain server-side.

No credentials inside source code.

---

# Dependency Rules

No dependency without justification.

Prefer battle-tested libraries.

Remove unused dependencies.

Document why a dependency exists.

---

# Code Review Standards

Reviewers evaluate:

Correctness

Architecture

Security

Maintainability

Performance

Accessibility

Tests

Documentation

Scope

---

# Release Criteria

The Release Auditor verifies:

Requested work completed

Tests passed

Documentation updated

No blockers remain

Recommendation matches evidence

---

# Emergency Changes

Hotfixes bypass normal milestone planning.

They still require:

Review

Verification

Release Audit

Human Approval

---

# Commit Convention

feat:

fix:

docs:

refactor:

test:

chore:

ci:

perf:

---

# Engineering Principles

Small pull requests.

Small milestones.

Small commits.

Small reviews.

Small risk.

Atlas grows through many correct decisions rather than a few large ones.