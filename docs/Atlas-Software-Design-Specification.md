# Atlas Software Design Specification (SDS)

Version: 1.0.0
Status: Draft
Project Codename: Atlas
Owner: Goldie
Technical Architect: OpenAI ChatGPT
Created: July 5, 2026

---

# Confidentiality and Authority

This document defines the architecture, product vision, engineering standards, and implementation boundaries for Project Atlas. It is the primary source of truth for design, development, testing, and future product decisions.

When implementation and documentation conflict, update this SDS or create an approved Architectural Decision Record (ADR) before changing code. All AI coding agents and human contributors must read this document before implementing features.

---

# Revision History

| Version | Date | Author | Notes |
| --- | --- | --- | --- |
| 1.0.0 | July 5, 2026 | Goldie | Initial draft |

---

# Table of Contents

1. Executive Summary
2. Problem Statement
3. Product Vision
4. Product Principles
5. Success Metrics
6. User Experience Philosophy
7. Target Users
8. User Personas
9. Atlas Decision Engine
10. Cognitive Architecture
11. Investor Lifecycle
12. Domain Model
13. Core User Flows
14. Functional Requirements
15. Non-Functional Requirements
16. System Context
17. High-Level System Architecture
18. Architectural Decision Records
19. Minimum Viable Product Scope
20. Technology Stack
21. Development Roadmap
22. Implementation Guide

---

# 1. Executive Summary

Atlas is an AI-powered Investment Operating System that helps investors understand financial markets quickly, confidently, and efficiently.

Modern investors face constant information overload from news, analyst reports, earnings releases, economic data, social media, market moves, newsletters, and portfolio updates. Most tools deliver more information but do not explain what matters, why it matters, or whether it affects the individual user.

Atlas solves this by gathering market information, filtering noise, ranking importance, and generating personalized insights based on each user's portfolio, watchlist, goals, risk preferences, experience level, and learning history.

Atlas is not another stock tracker, news feed, or chatbot. Its central product question is:

> What do I need to know right now?

Atlas should become the first application investors open every market day.

---

# 2. Problem Statement

The investing workflow is fragmented. A typical investor may use market data platforms, financial news sites, economic calendars, portfolio trackers, analyst reports, social media, AI chatbots, email newsletters, and brokerage tools just to understand what changed.

This creates:

- Information overload
- Duplicate news
- Weak personalization
- Lost time gathering context
- Difficulty understanding why events matter
- Confusion between facts, opinions, and AI-generated explanations

Most financial applications deliver information. Atlas exists to deliver understanding.

---

# 3. Product Vision

Atlas will become the AI operating system for investors. It augments human decision-making by organizing information, identifying important events, explaining context, reducing time-to-understanding, and helping users learn over time.

Atlas does not replace investor judgment. It supports judgment with personalized, explainable intelligence.

North Star:

> Know what matters.

---

# 4. Product Principles

| Principle | Meaning | Design Standard |
| --- | --- | --- |
| Understanding over information | Atlas helps users understand markets, not consume more content. | Every feature should answer what changed, why it matters, or whether it affects the user. |
| Personalization first | No two users should have the same Atlas experience. | Prioritize portfolio, watchlist, goals, risk profile, experience, and behavior. |
| AI is an analyst, not a fortune teller | Atlas explains facts, summarizes information, and provides context. | Do not guarantee performance or present speculation as certainty. |
| Time is the most valuable asset | Atlas should reduce the time needed to understand markets. | Prefer concise, prioritized, high-signal experiences. |
| Clarity over complexity | Financial information should be understandable to beginners. | Explain technical terms in plain English. |
| Trust is earned | Users must know where information came from. | Distinguish live data, news, AI summary, opinion, and education. |
| Atlas Doctrine | Atlas answers the right questions at the right time. | Do not build features that add complexity without increasing clarity. |
| Platform over application | Atlas should be designed as durable financial intelligence infrastructure. | Build modular systems that can support future products and interfaces. |

---

# 5. Success Metrics

Atlas succeeds when users consistently return because it saves time and improves understanding.

Primary metrics:

- Daily active usage during market days
- Morning Brief completion rate
- Time required to understand top portfolio-relevant events
- Insight engagement rate
- User retention after first week and first month
- AI assistant question resolution rate
- Notification open rate for high-priority insights
- User confidence and comprehension feedback

Product quality metrics:

- Percentage of insights with cited sources
- Percentage of high-priority events correctly routed to dashboard, brief, or alert
- Reduction in duplicate or low-value news shown to users
- User-reported clarity of explanations
- Low rate of AI uncertainty or hallucination defects

---

# 6. User Experience Philosophy

Atlas should feel calm, intelligent, trustworthy, and fast. It should not feel like a noisy trading terminal or a hype-driven finance app.

UX standards:

- Prioritize the most important information first.
- Explain why each insight appears.
- Keep the Morning Brief readable in under five minutes.
- Make dashboards scannable.
- Use plain language before technical detail.
- Show confidence, sources, and uncertainty where appropriate.
- Avoid unnecessary charts, alerts, and notifications.
- Support both beginner and advanced investors without overwhelming either group.

---

# 7. Target Users

Atlas serves investors who want better market understanding without manually assembling context across many tools.

Primary users:

- Retail investors with individual stock or ETF portfolios
- Long-term investors who follow market-moving events
- Beginner investors who need explanations
- Intermediate investors who want faster daily context
- Busy professionals who cannot monitor markets all day

Secondary users:

- Finance students
- Research-oriented investors
- Newsletter readers who want personalization
- Users tracking watchlists before investing

Atlas is not initially designed for high-frequency traders, options execution, automated investing, copy trading, crypto wallet management, or institutional portfolio management.

---

# 8. User Personas

| Persona | Needs | Atlas Value |
| --- | --- | --- |
| Beginner Investor | Plain-English explanations, learning support, confidence. | Explains concepts, avoids jargon, recommends learning moments. |
| Busy Professional | Fast daily summary and relevant alerts. | Morning Brief, prioritized insights, low-noise notifications. |
| Portfolio Tracker | Understands holdings, sector exposure, earnings, dividends, and major news. | Personalized dashboard and risk monitoring. |
| Watchlist Researcher | Follows companies before buying. | Watchlist intelligence and company/event context. |
| Learning-Oriented Investor | Wants to become more knowledgeable over time. | Learning Engine, concept tracking, adaptive explanations. |

---

# 9. Atlas Decision Engine (ADE)

The Atlas Decision Engine is responsible for deciding what deserves the user's attention. No user-facing market intelligence should bypass the Decision Engine.

Every incoming Market Event receives an Importance Score. That score determines:

- Dashboard visibility
- Ranking priority
- Morning Brief inclusion
- Notification eligibility
- Alert urgency
- AI assistant context inclusion

Scoring inputs:

- Portfolio relevance
- Watchlist relevance
- Market impact
- Recency
- Event category
- User preferences
- Risk profile
- Educational value
- Historical relevance
- Confidence and source quality

The ADE does not predict the future. It prioritizes attention.

---

# 10. Cognitive Architecture

Atlas uses a cognitive architecture instead of a simple CRUD application architecture. Raw data enters Atlas, then specialized subsystems filter, contextualize, personalize, and communicate it.

Core subsystems:

| Subsystem | Mission | Responsibilities | Inputs | Outputs |
| --- | --- | --- | --- | --- |
| Atlas Intelligence Engine (AIE) | Orchestrate all intelligence workflows. | Normalize events, coordinate engines, generate final insights. | Market data, news, user context, AI responses. | Insights, briefs, alerts, assistant context. |
| Atlas Decision Engine (ADE) | Determine what deserves attention. | Score, rank, filter, prioritize, select brief and alert candidates. | News, market data, events, portfolio, watchlist. | Importance score, visibility level, alert eligibility. |
| Atlas Context Engine (ACE) | Explain why information matters. | Add history, define terms, compare similar events, translate complex language. | Events selected by ADE. | Explanations, historical comparisons, plain-language summaries. |
| Atlas Personalization Engine (APE) | Decide relevance for each investor. | Interpret portfolio, goals, style, experience, notification settings, reading habits. | User profile, holdings, watchlists, behavior. | Personalized relevance and presentation guidance. |
| Atlas Risk Engine (ARE) | Monitor portfolio and event risk. | Evaluate concentration, sector exposure, earnings, macro events, volatility, dividend changes, unusual conditions. | Portfolio, holdings, market events, economic calendar. | Risk levels, warnings, monitoring suggestions, explanations. |
| Atlas Learning Engine (ALE) | Help users become better investors. | Track learned concepts, recommend education, detect gaps, adjust explanation depth. | Questions, reading behavior, learning records. | Learning moments, recommended lessons, explanation complexity. |
| Atlas Memory Graph (AMG) | Store persistent investor understanding. | Persist preferences, goals, sectors, ignored topics, risk tolerance, explanation style, behavior. | User actions, settings, conversations, usage. | Long-term personalization context. |
| Atlas Reasoning Engine (ARgE) | Decide how to communicate intelligence. | Combine ADE, ACE, APE, ARE, ALE, and AMG outputs into clear user-facing language. | Engine outputs. | Final message, tone, depth, and structure. |

Example: if Apple announces a buyback, Atlas should not merely repeat the headline. It should explain the size, why buybacks matter, historical context, relevance to the user's holdings or watchlist, confidence, and whether action is needed.

---

# 11. Investor Lifecycle

Atlas should support the investor from onboarding through daily use and long-term learning.

| Stage | User Goal | Atlas Responsibility |
| --- | --- | --- |
| Onboarding | Create account and define investing context. | Capture profile, preferences, risk tolerance, experience, portfolio, watchlist. |
| Portfolio setup | Add holdings and cost basis. | Store holdings, calculate allocation, gains/losses, exposure, and relevance. |
| Daily awareness | Understand what changed today. | Generate Morning Brief and dashboard insights. |
| Event response | Understand urgent or important events. | Prioritize alerts and explain relevance. |
| Research | Learn about companies, sectors, and concepts. | Provide AI assistant, company pages, source-backed explanations. |
| Learning | Become a better investor over time. | Track concepts, adjust explanations, suggest learning moments. |
| Retention | Make Atlas a daily habit. | Keep the experience useful, concise, trustworthy, and personalized. |

---

# 12. Domain Model

Atlas should revolve around a small set of durable entities rather than many disconnected objects.

| Entity | Represents | Owns or Contains |
| --- | --- | --- |
| User | An individual investor using Atlas. | Authentication, preferences, subscription, settings, profile. |
| Portfolio | A user's investment accounts or manually tracked holdings. | Holdings, performance, allocation, risk metrics, cash balance, history. |
| Holding | Ownership of a single asset such as AAPL, NVDA, SPY. | Ticker, quantity, average cost, market value, gain/loss, sector, asset type. |
| Watchlist | Securities the user follows without necessarily owning. | Symbols, ordering, performance, related insights. |
| Market Event | Something that happened in markets. | Earnings, Fed meeting, analyst action, dividend, SEC filing, economic report, breaking news, merger, product launch. |
| Insight | A personalized explanation generated from one or more Market Events. | Title, summary, explanation, importance, confidence, sources, related holdings, category, timestamp. |
| Alert | A notification sent because an Insight crossed a priority threshold. | Event, priority, message, channel, delivery status. |
| Morning Brief | Daily package of the highest-priority intelligence. | Portfolio summary, market summary, top events, risks, opportunities, learning moment. |
| Learning Record | User knowledge and concept progression. | Concepts, confidence score, last reviewed, next lesson. |
| Memory Node | Persistent personalization data. | Favorite sectors, ignored topics, risk preferences, reading habits, learning style, notification behavior. |
| Source | Evidence behind a Market Event or Insight. | URL, provider, timestamp, credibility metadata. |
| Notification Preference | User control over alerts. | Categories, channels, quiet hours, thresholds. |

Primary flow:

Market Event -> AIE -> Insight -> Morning Brief/Dashboard/Alert -> User feedback -> Memory Graph/Learning Record

---

# 13. Core User Flows

Every feature should support a documented user outcome.

## Flow 1: Onboard a User

1. User creates an account.
2. User verifies email.
3. User selects experience level, goals, risk tolerance, and notification preferences.
4. User adds portfolio holdings or starts with a watchlist.
5. Atlas creates an initial Memory Graph and Learning Profile.

## Flow 2: Manage Portfolio

1. User adds, edits, or removes holdings.
2. Atlas stores quantity, average cost, sector, asset type, and market value.
3. Atlas calculates allocation, gain/loss, performance, and risk signals.
4. Portfolio context becomes available to ADE, APE, ARE, ALE, and ARgE.

## Flow 3: Manage Watchlist

1. User searches for securities.
2. User adds or removes securities from watchlist.
3. Atlas tracks watchlist events and performance.
4. Watchlist relevance influences insights, brief content, and assistant answers.

## Flow 4: Generate Insights

1. Atlas ingests Market Events from external providers.
2. AIE normalizes events.
3. ADE scores event importance.
4. APE evaluates user relevance.
5. ACE adds context and explanations.
6. ARE adds risk interpretation where needed.
7. ARgE creates the final user-facing Insight.
8. Atlas stores and displays the Insight.

## Flow 5: Morning Brief

1. Atlas gathers the highest-priority overnight and premarket events.
2. ADE selects brief candidates.
3. APE personalizes ordering and emphasis.
4. ACE and ALE add explanation and learning content.
5. ARgE composes a brief that can be consumed in under five minutes.
6. User reads, saves, opens, or dismisses items.

## Flow 6: AI Assistant

1. User asks a question.
2. Application Layer validates request and retrieves safe user context.
3. AIE selects relevant portfolio, watchlist, insight, and learning context.
4. AI provider generates language under Atlas orchestration.
5. Response distinguishes fact, inference, opinion, and uncertainty.
6. Learning and Memory systems update if appropriate.

---

# 14. Functional Requirements

Priority levels:

- MUST: required for MVP.
- SHOULD: important but not required for first release.
- COULD: potential future enhancement.
- VISION: long-term direction.

| ID | Priority | Requirement |
| --- | --- | --- |
| FR-001 | MUST | User authentication: register, login, logout, password reset, email verification. Future support for OAuth providers such as Google, Apple, and Microsoft. |
| FR-002 | MUST | Portfolio management: add, edit, remove holdings; track quantity and average purchase price; view performance, allocation, and unrealized gain/loss. Future broker synchronization. |
| FR-003 | MUST | Watchlists: create watchlists, add/remove/reorder securities, search securities, view watchlist performance. Future multiple and shared watchlists. |
| FR-004 | MUST | Market intelligence: collect events, process through AIE, generate personalized insights, rank and store insights, display them on the dashboard. Raw event streams shall not be shown by default. |
| FR-005 | MUST | Morning Brief: generate one personalized brief per trading day with portfolio summary, top events, highest-priority insights, upcoming economic events, upcoming earnings, risks, opportunities, and a learning moment. Target read time is under five minutes. |
| FR-006 | MUST | AI Assistant: answer questions, explain concepts, explain market events and portfolio changes, reference holdings, provide educational responses, distinguish facts from opinions, and communicate uncertainty. |
| FR-007 | MUST | Decision Engine: score every Market Event using portfolio relevance, watchlist relevance, market impact, recency, category, preferences, and educational value; determine visibility, brief inclusion, notification eligibility, and priority. |
| FR-008 | MUST | Insight generation: create personalized Insights containing title, summary, explanation, importance score, confidence score, sources, related holdings, timestamp, and category. |
| FR-009 | SHOULD | Notifications: notify users about high-priority insights, major holding events, approaching economic events, and elevated risk. Notifications must be configurable and disableable by category. |
| FR-010 | SHOULD | Learning system: track learned concepts, frequently asked questions, knowledge progression, and preferred explanation complexity. |

## Out of Scope for MVP

Version 1.0 excludes broker trading, automated investing, buy/sell recommendations, social networking, copy trading, options execution, crypto wallets, tax reporting, algorithmic trading, automatic rebalancing, voice assistant, native desktop app, and native mobile app.

---

# 15. Non-Functional Requirements

| ID | Priority | Requirement |
| --- | --- | --- |
| NFR-001 | MUST | Performance: dashboard initial load should target under 2 seconds in normal conditions; Morning Brief should render within 3 seconds after required data is collected; long operations need progress states; avoid unnecessary network requests; run expensive work on backend services where practical. |
| NFR-002 | MUST | Reliability: non-critical service failures must not crash unrelated functionality; retry temporary external API failures when appropriate; communicate missing data clearly; never show raw exceptions to users. |
| NFR-003 | MUST | Security: never store plaintext passwords; never place secrets in frontend source; use secure environment variables, HTTPS, secure sessions, least privilege, and authorization checks for portfolio data. |
| NFR-004 | MUST | Privacy: users own their data; collect only necessary information; secure AI conversations that contain portfolio data; allow account and portfolio deletion; distinguish user data from AI-generated content. |
| NFR-005 | MUST | Explainability: explain why important insights appear, cite supporting evidence when practical, separate facts from inference/opinion/education, and communicate uncertainty. |
| NFR-006 | SHOULD | Scalability: support user growth without architectural redesign; keep subsystems modular; make providers replaceable; keep business logic independent of UI; support horizontal scaling where practical. |
| NFR-007 | MUST | Maintainability: keep code modular; separate business and presentation logic; prefer single-responsibility functions and reusable components; keep documentation synchronized; track technical debt. |
| NFR-008 | SHOULD | Accessibility: support keyboard navigation, accessible labels, readable typography, dark and light mode, and avoid using color as the only indicator. |
| NFR-009 | SHOULD | Observability: log important backend events; capture diagnostic errors; measure performance; detect critical failures; distinguish app errors from provider failures. |
| NFR-010 | MUST | AI behavior: never fabricate market data; distinguish facts from generated explanations; acknowledge uncertainty; avoid speculation as certainty; never imply access to unavailable information; provide educational explanations when useful. |
| NFR-011 | MUST | Engineering standards: every feature must trace to documented requirements; PRs should reference relevant requirement IDs; breaking architectural changes require SDS or ADR updates. |

---

# 16. System Context

Atlas is the boundary between investors and external financial, AI, authentication, notification, email, and analytics providers. External integrations must remain replaceable and loosely coupled.

| External Actor | Responsibilities | Atlas Rule |
| --- | --- | --- |
| Investor | Create account, manage portfolio/watchlist, read insights, ask AI questions, manage preferences. | Atlas protects data, personalizes intelligence, explains clearly, and adapts over time. |
| Market Data Provider | Provide prices, history, company metadata, market status, calendars, volume, index information. | Provider-specific logic must stay behind adapters. |
| Financial News Provider | Provide breaking news, company news, economic news, press releases, metadata. | News enters Atlas as raw events and must pass through AIE before user display. |
| AI Provider | Generate language, summarize, answer questions, explain concepts, create educational content. | Atlas owns orchestration and business logic; AI providers are replaceable. |
| Authentication Provider | Support registration, identity verification, authentication, sessions. | Authentication remains isolated from business logic. |
| Notification Provider | Deliver push, email, and system alerts. | Delivery providers never decide priority; ADE does. |
| Email Provider | Send verification, password reset, weekly summaries, account notices. | Templates are version controlled; business logic does not live in templates. |
| Analytics Provider | Collect anonymous usage metrics, health, and adoption signals. | Analytics must not expose personally identifiable investment information and must respect privacy preferences. |

System flow:

Investor -> Presentation Layer -> Application Layer -> Intelligence Layer -> Data/Integration Layers -> Providers

All user-facing intelligence flows through Atlas. The frontend does not talk directly to news providers, the notification system does not decide importance, and AI providers do not own core market logic.

---

# 17. High-Level System Architecture

Atlas uses a layered architecture to preserve maintainability, scalability, modularity, and testability.

| Layer | Purpose | Responsibilities |
| --- | --- | --- |
| Presentation Layer | User interface. | Display dashboards, Morning Briefs, insights, portfolio data, AI conversations, notifications; collect input; contain no business logic. |
| Application Layer | Workflow coordination. | Receive requests, validate input, manage sessions, coordinate services, invoke intelligence workflows, return responses. |
| Intelligence Layer | Core product logic. | AIE, ADE, ACE, APE, ARE, ALE, AMG, ARgE; rank events, generate insights, evaluate relevance/risk, create briefs, support AI conversations. |
| Data Layer | Persistence. | Store users, portfolios, holdings, insights, briefs, learning records, memory graph, notifications, preferences; enforce integrity. |
| Integration Layer | External communication. | Retrieve market data/news, communicate with AI/auth/email/notification/analytics providers, normalize data, shield internal logic from vendor details. |
| Infrastructure Layer | Runtime operations. | Hosting, deployment, monitoring, logging, scaling, secrets, backups, disaster recovery. |

Architectural constraints:

- Business logic belongs in Atlas, especially the Intelligence Layer.
- Presentation logic must not contain financial reasoning.
- External providers must be accessed through adapters.
- Insights are the primary product output.
- Morning Briefs, dashboards, alerts, and AI conversations should consume Insights rather than raw events.
- Provider replacement should not require rewriting core product logic.

---

# 18. Architectural Decision Records

ADRs record significant technical decisions, including context, decision, rationale, and consequences. Existing ADRs should remain historically stable; if a decision changes, create a new ADR that supersedes the old one.

## ADR-001: Atlas shall use a layered architecture

Status: Accepted

Context: Atlas will include intelligence systems, integrations, and user-facing applications. Without boundaries, business logic could couple to UI or infrastructure.

Decision: Atlas separates responsibilities into Presentation, Application, Intelligence, Data, Integration, and Infrastructure layers.

Rationale: Improves maintainability, scalability, testing, and future flexibility.

Consequences: Clearer responsibilities and better testability, with some added architectural complexity.

## ADR-002: All user-facing intelligence shall originate from the Atlas Intelligence Engine

Status: Accepted

Context: Atlas reduces information overload by filtering and explaining raw information.

Decision: Every Market Event must pass through AIE before reaching users. No user-facing intelligence bypasses AIE.

Rationale: Enables consistency, personalization, explainability, and noise reduction.

Consequences: Requires additional processing and implementation complexity, but creates stronger differentiation.

## ADR-003: External providers shall remain replaceable

Status: Accepted

Context: Atlas depends on AI, market data, authentication, notification, email, and analytics providers that may change.

Decision: Providers communicate through adapter interfaces. Core logic must not depend directly on provider implementations.

Rationale: Reduces vendor lock-in and migration cost.

Consequences: Adds abstraction but improves maintainability.

## ADR-004: Insights are the primary product output

Status: Accepted

Context: Atlas exists to transform information into understanding.

Decision: Personalized Insights are the primary output. Briefs, dashboards, alerts, and AI conversations consume Insights instead of raw events.

Rationale: Separates facts from interpretation, improves consistency, and supports AI enhancements.

Consequences: Requires an Insight pipeline while simplifying downstream experiences.

## ADR-005: AI is an implementation capability, not the product itself

Status: Accepted

Context: LLM providers and models evolve rapidly.

Decision: Atlas owns business logic. AI providers generate language and reasoning only under Atlas orchestration.

Rationale: Protects independence, explainability, and stability.

Consequences: More engineering effort, less vendor dependency.

## ADR-006: Atlas prioritizes explainability over opaque outputs

Status: Accepted

Context: Investors trust outputs they can understand.

Decision: Atlas explains why an Insight exists, why it matters, why it was shown, and what evidence supports it whenever practical.

Rationale: Builds trust, supports learning, and improves decision quality.

Consequences: Requires more implementation effort but creates greater confidence.

## ADR-007: Users retain ownership and control of their data

Status: Accepted

Context: Atlas processes sensitive financial information.

Decision: Users can export and delete personal data. Atlas minimizes unnecessary data collection.

Rationale: Builds trust and aligns with modern privacy expectations.

Consequences: Requires export/deletion workflows and stronger data governance.

## ADR-008: Documentation is a core product asset

Status: Accepted

Context: Atlas will evolve over years with multiple contributors and AI coding agents.

Decision: The SDS remains the authoritative reference for architecture and behavior. Architectural changes must be documented before or alongside implementation.

Rationale: Reduces onboarding time, preserves intent, and limits architectural drift.

Consequences: Adds documentation effort but improves long-term velocity and consistency.

---

# 19. Minimum Viable Product Scope

The MVP validates this hypothesis:

> Investors will consistently use Atlas if it transforms financial information into personalized intelligence.

Version 1.0 must allow a user to:

- Create an account.
- Build a portfolio.
- Build a watchlist.
- Receive personalized Insights.
- Receive a Morning Brief.
- Ask AI questions about markets and their portfolio.
- Understand why important events matter.
- Return to Atlas daily.

## Included MVP Features

| Feature | Priority | Required Capabilities |
| --- | --- | --- |
| Authentication | MUST | Registration, login, logout, password reset, email verification. |
| Portfolio | MUST | Add/edit/delete holdings, performance, gain/loss, allocation overview. |
| Watchlist | MUST | Add/remove/search securities and view watchlist. |
| Dashboard | MUST | Portfolio summary, today's Morning Brief, top insights, upcoming earnings, upcoming economic events, recent alerts. |
| Morning Brief | MUST | Daily summary, portfolio update, top events, highest-priority insights, risks, opportunities, learning moment. |
| Insights | MUST | Personalized, ranked, explainable, source-linked, related holdings, confidence score. |
| AI Assistant | MUST | Context-aware questions, portfolio references, market explanations, educational responses. |
| Decision Engine | MUST | Event scoring, ranking, visibility, brief inclusion, alert eligibility. |
| Search | MUST | Search companies and securities. |
| Company Page | MUST | Show company overview, related holdings/watchlist state, recent events, relevant insights. |

## Excluded from Version 1.0

Excluded items remain potential future work but must not be implemented in MVP unless the SDS or an ADR changes: broker trading, automated investing, buy/sell recommendations, social networking, copy trading, options execution, crypto wallets, tax reporting, algorithmic trading, automatic rebalancing, voice assistant, native desktop app, native mobile app, advanced broker sync, complex subscription tiers, and institutional tooling.

## MVP Success Criteria

The MVP is successful if:

- Users can complete onboarding without developer assistance.
- Portfolio and watchlist data influence insights.
- Morning Briefs are generated reliably on trading days.
- Insights are personalized, explainable, and source-backed.
- The AI assistant uses Atlas context safely.
- The app remains fast, understandable, and stable.
- Users can return daily and immediately see what matters.

## Deferred Engineering

Deferred work includes broker integrations, mobile clients, advanced analytics, automated portfolio actions, social/community features, enterprise compliance tooling, and large-scale provider redundancy.

---

# 20. Technology Stack

Technology choices prioritize developer productivity, maintainability, ecosystem maturity, and AI-assisted development compatibility. Future changes require an ADR.

| Area | Selection |
| --- | --- |
| Frontend/Application | Next.js |
| Backend | Next.js Route Handlers for initial implementation |
| Language | TypeScript |
| ORM | Prisma |
| Validation | Zod |
| Authentication | Clerk or Supabase Auth |
| Background Jobs | Trigger.dev or equivalent |
| API Style | REST for MVP |
| Database | PostgreSQL hosted by Supabase |
| AI Provider | OpenAI |
| Prompt Management | Version controlled |
| Structured Outputs | JSON where practical |
| Market Data Provider | To be selected during implementation |
| Market Data Requirements | US equities, company metadata, historical prices, market status, economic calendar, news access or paired provider |
| Hosting | Vercel |
| Repository | GitHub |
| CI/CD | GitHub Actions |

Development principles:

- Type safety first.
- Small pull requests.
- Test critical logic.
- Document architectural changes.
- Never bypass the Atlas Intelligence Engine.
- Maintain a clean Git history.
- Prefer readability over cleverness.

---

# 21. Development Roadmap

Atlas shall be built incrementally. Each milestone must produce a working, testable application and must not depend on unfinished future functionality.

| Milestone | Scope |
| --- | --- |
| 1 | Project initialization, GitHub repo, Next.js, TypeScript, Tailwind, shadcn/ui, Prisma, Supabase connection, authentication, basic layout, deployment pipeline. |
| 2 | Portfolio CRUD, watchlist CRUD, database models, dashboard widgets, portfolio calculations, company search. |
| 3 | Market event ingestion, news ingestion, basic Decision Engine, insight generation, insight storage, dashboard integration. |
| 4 | Morning Brief generation, dashboard integration, daily summaries, economic calendar, earnings integration. |
| 5 | AI assistant, context-aware prompts, portfolio awareness, insight explanations, educational responses. |
| 6 | Bug fixing, performance improvements, UI polish, accessibility review, testing, private alpha release, feedback collection. |

---

# 22. Implementation Guide

The SDS is authoritative for Atlas Version 1.0. Implementation follows this document unless an accepted ADR supersedes it.

## Guiding Principles

1. Build one milestone at a time.
2. Keep the application functional after every milestone.
3. Do not implement future milestones early.
4. Prefer simple, maintainable solutions over clever implementations.
5. Optimize for readability before optimization.
6. Ensure every implementation decision supports the Atlas Doctrine.
7. Treat this SDS as the source of truth.

## AI Coding Assistant Instructions

AI coding assistants must:

- Read the SDS before beginning work.
- Avoid undocumented features and scope expansion.
- Ask for clarification when requirements are ambiguous.
- Complete one milestone before starting another.
- Generate maintainable, production-quality code.
- Avoid unnecessary abstraction and premature optimization.
- Follow existing project conventions.
- Preserve SDS-defined architectural boundaries.

## Engineering Standards

Every pull request should:

- Reference the milestone or requirement being implemented.
- Stay focused on one objective.
- Compile successfully.
- Avoid unrelated refactoring.
- Update documentation when behavior or architecture changes.
- Leave the project in a working state.

Code should be readable, predictable, modular, type-safe, and documented where necessary. Business logic should remain isolated from presentation logic. Avoid magic numbers and unexplained constants. Prefer single-responsibility functions where practical.

## Testing

Critical business logic must be tested, especially:

- Decision Engine scoring
- Portfolio calculations
- Insight generation
- Morning Brief generation
- Authentication flows

Add regression tests for defects when practical. UI tests should focus on user behavior rather than implementation details.

## Git Workflow

| Item | Standard |
| --- | --- |
| Primary branch | main |
| Development branch | develop |
| Feature branches | feature/<short-description> |
| Bug fix branches | fix/<short-description> |
| Commit messages | Concise, descriptive messages such as `feat: add portfolio dashboard`, `fix: correct gain calculation`, `refactor: simplify insight ranking`, `docs: update SDS`. |

## Definition of Done

A task is complete when:

- It satisfies the documented requirement.
- The application builds successfully.
- Relevant tests pass.
- Documentation is updated if required.
- No known critical defects remain.
- The feature integrates cleanly with existing architecture.

## Engineering Philosophy

Atlas should remain understandable. Future contributors should be able to understand a subsystem without reading the entire codebase. Each subsystem should have a clear responsibility. Complexity should appear only when justified by measurable value. The codebase should become easier to understand after each milestone.

## Closing Statement

Atlas is built on the belief that clarity creates confidence.

Every architectural decision, feature, and engineering choice should help investors understand what matters. The goal is not to present more information; the goal is to transform information into understanding.

Future evolution should build on these principles while remaining open to user feedback, new evidence, and better ideas.
