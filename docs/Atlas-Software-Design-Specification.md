# Atlas Software Design Specification

Version: 1.0.1
Status: Draft
Project Codename: Atlas
Owner: Goldie
Created: July 5, 2026
Last Updated: July 11, 2026

## Purpose

This Software Design Specification (SDS) is the source of truth for Project Atlas. It defines the product vision, core requirements, architecture, MVP scope, engineering standards, and major architectural decisions.

When implementation and documentation disagree, update this SDS or add an Architectural Decision Record (ADR) before changing the system design.

AI coding assistants and human contributors should read this document before implementing features.

## Revision History

| Version | Date | Author | Notes |
| --- | --- | --- | --- |
| 1.0.0 | July 5, 2026 | Goldie | Initial draft |
| 1.0.1 | July 11, 2026 | Codex | Condensed and reorganized for readability |

## Table of Contents

1. Product Overview
2. Product Principles
3. Success Metrics
4. Target Users and Personas
5. Investor Lifecycle
6. Atlas Intelligence Architecture
7. Domain Model
8. Core User Flows
9. Functional Requirements
10. Non-Functional Requirements
11. System Context
12. High-Level Architecture
13. Architectural Decision Records
14. MVP Scope
15. Technology Stack
16. Development Roadmap
17. Implementation Guide

## 1. Product Overview

Atlas is an AI-powered investment operating system that helps investors understand financial markets quickly, confidently, and efficiently.

Modern investors are overwhelmed by market data, financial news, economic releases, analyst commentary, earnings announcements, social posts, and portfolio movements. Most tools deliver more information. Atlas exists to deliver understanding.

Atlas continuously gathers relevant market information, filters noise, ranks importance, and produces personalized insights based on each user's portfolio, watchlist, goals, risk profile, and knowledge level.

The central user question is:

> What do I need to know right now?

Atlas should become the first application investors open every market day.

### Problem Statement

Investor workflows are fragmented across market data platforms, news sites, portfolio trackers, analyst reports, economic calendars, newsletters, social media, and AI chatbots.

This causes:

- Information overload
- Duplicate news
- Lack of personalization
- Time wasted gathering context
- Difficulty understanding why events matter
- Low confidence in what deserves attention

Atlas bridges this gap by transforming scattered information into personalized intelligence.

### Mission

Help investors know what matters in under five minutes.

### Product Vision

Atlas will become the AI operating system for investors. It will not replace human decision-making. It will organize information, identify important events, explain why they matter, and reduce the time needed to stay informed.

### Atlas Doctrine

Atlas does not try to answer every financial question. Atlas answers the right questions at the right time.

Every feature must support the north star:

> Know what matters.

Features that increase complexity without increasing clarity should not be built.

## 2. Product Principles

### 2.1 Understanding Over Information

Atlas helps users understand markets instead of simply consuming more information.

Every feature should answer at least one of these questions:

- What changed?
- Why does it matter?
- Does it affect me?

### 2.2 Personalization First

No two users should have the same Atlas experience. Atlas personalizes content using:

- Portfolio
- Watchlist
- Investment goals
- Risk preferences
- Experience level
- Reading history
- Notification behavior
- Learning progress

### 2.3 AI Is an Analyst, Not a Fortune Teller

Atlas explains facts, summarizes information, and provides context. It must not guarantee future performance, make unsupported claims, or present speculation as certainty.

When uncertainty exists, Atlas communicates it clearly.

### 2.4 Time Is the Most Valuable Asset

Every feature should reduce the time required to understand the market. Atlas should save attention, not consume it.

### 2.5 Clarity Over Complexity

Financial information should be understandable to new investors. When Atlas uses technical language, it should explain the term in plain English.

### 2.6 Trust Is Earned

Every AI-generated insight should be traceable to reliable data or source material.

Users should always be able to identify whether information is:

- Live market data
- News
- AI-generated summary
- Educational explanation
- Opinion or interpretation

### 2.7 Platform, Not Single Application

Atlas is designed as a platform with clearly separated subsystems and contracts. Features should communicate through defined interfaces instead of directly coupling every part of the system.

This improves maintainability, testability, scalability, and future expansion.

## 3. Success Metrics

Atlas succeeds when users:

- Open the app most market mornings
- Understand the market in less than five minutes
- Feel more confident about what changed
- Learn investing concepts over time
- Return to Atlas as part of their routine

Key product metrics:

- Daily active users
- Weekly retention
- Morning Brief completion rate
- Average session length
- AI conversation count
- User satisfaction
- Premium conversion rate

## 4. Target Users and Personas

Atlas serves investors who value understanding over raw information. It is not only for professional traders. It should adapt to users across experience levels.

Primary user groups:

- Beginner investors
- Long-term investors
- Swing traders
- Active traders
- Financial learners

### Alex: Beginner Investor

- Age: 23
- Portfolio: $2,300
- Goal: Learn investing while growing long-term wealth
- Problems: Does not know which news matters, does not understand financial terms, gets overwhelmed
- Atlas goal: Teach Alex without making them feel lost or talked down to

### Sarah: Intermediate Investor

- Age: 36
- Portfolio: $84,000
- Goal: Stay informed in under ten minutes
- Problems: Too many news sources, limited time, misses important events
- Atlas goal: Replace several tools with one personalized briefing

### David: Advanced Investor

- Age: 48
- Portfolio: $650,000
- Goal: Receive concise intelligent summaries
- Problems: Information overload, duplicate articles, wants fast analysis
- Atlas goal: Act like an AI research analyst

## 5. Investor Lifecycle

Atlas should evolve as the user becomes more experienced.

### Stage 1: Explorer

The user is new to investing. Atlas should avoid overwhelming them with charts and jargon.

Onboarding should collect only essential context:

- Investing goal
- Experience level
- Preferred daily time commitment
- Initial interests or holdings

Atlas should adapt over time instead of forcing the user through excessive settings.

### Stage 2: Builder

The user owns a few stocks or funds. Atlas becomes more personalized:

- Morning Brief references holdings and watchlist
- Educational tips become more relevant
- AI questions begin shaping the user's profile
- Memory Graph begins learning preferences

### Stage 3: Confident Investor

The user asks more advanced questions. Atlas quietly increases the sophistication of explanations without requiring a manual setting.

### Stage 4: Advanced Investor

Atlas becomes less educational and more analytical. The experience emphasizes signal, risk, and concise context.

### Stage 5: Expert

Atlas becomes minimal. Expert users should receive concise risks, opportunities, and priority insights without unnecessary explanation.

## 6. Atlas Intelligence Architecture

Atlas uses a cognitive architecture. Raw information should not flow directly to the user. Market events, news, economic data, and portfolio information are processed through intelligence systems before becoming user-facing insights.

### Core Systems

| System | Abbreviation | Mission |
| --- | --- | --- |
| Atlas Intelligence Engine | AIE | Coordinate all intelligence workflows |
| Atlas Decision Engine | ADE | Determine what deserves attention |
| Atlas Context Engine | ACE | Explain why information matters |
| Atlas Personalization Engine | APE | Determine relevance for each user |
| Atlas Risk Engine | ARE | Evaluate portfolio and market risk conditions |
| Atlas Learning Engine | ALE | Help users become better investors over time |
| Atlas Memory Graph | AMG | Store long-term user preferences and learning signals |
| Atlas Reasoning Engine | ARgE | Decide how to communicate final insights |

### Atlas Intelligence Engine (AIE)

The AIE is the central intelligence coordinator. User-facing intelligence must originate from the AIE or from systems orchestrated by it.

Responsibilities:

- Receive normalized market events
- Coordinate decision, context, personalization, risk, learning, and reasoning systems
- Produce user-facing insights
- Maintain explainability
- Prevent raw unranked information from bypassing the intelligence pipeline

### Atlas Decision Engine (ADE)

Mission: Determine what deserves the user's attention.

Responsibilities:

- Score incoming events
- Filter low-value information
- Rank important events
- Determine notification priority
- Select Morning Brief content
- Select dashboard content

Inputs:

- News
- Market data
- Economic events
- Earnings events
- Portfolio holdings
- Watchlists

Outputs:

- Priority score
- Visibility level
- Alert eligibility
- Morning Brief eligibility

### Atlas Context Engine (ACE)

Mission: Explain why information matters.

Responsibilities:

- Add historical context
- Explain financial terminology
- Compare similar historical events
- Translate complex financial language into plain English

Example:

Raw news: Apple announced a stock buyback.

Atlas context: Apple announced a $90B stock buyback. Buybacks generally reduce shares outstanding and are often viewed as a sign that management believes the company is undervalued.

### Atlas Personalization Engine (APE)

Mission: Determine relevance for each individual investor.

APE considers:

- Portfolio
- Watchlist
- Goals
- Investment style
- Experience level
- Risk profile
- Reading history
- Notification settings
- Learning progress

The same market event may have a different importance score for different users.

### Atlas Risk Engine (ARE)

Mission: Continuously evaluate portfolio risk and upcoming risk events.

Responsibilities:

- Detect portfolio concentration
- Evaluate sector exposure
- Monitor upcoming earnings
- Monitor economic risk
- Flag dividend changes
- Identify unusual market conditions
- Explain risk without making trade recommendations

Example output:

> Your portfolio is 52% technology stocks. That is higher than your typical allocation, so upcoming technology earnings may have a larger impact on your account.

### Atlas Learning Engine (ALE)

Mission: Help users become better investors over time.

Responsibilities:

- Track concepts the user has asked about
- Detect knowledge gaps
- Recommend short lessons
- Adjust explanation difficulty
- Measure learning progress

### Atlas Memory Graph (AMG)

Mission: Maintain long-term understanding of each investor.

Stored signals may include:

- Preferred sectors
- Investment goals
- Learning progress
- Favorite companies
- Ignored topics
- Preferred explanation style
- Frequently asked questions
- Notification behavior
- Dashboard usage
- Risk tolerance
- Morning Brief completion history

AMG should store durable preferences and learning signals, not unnecessary conversational noise.

### Atlas Reasoning Engine (ARgE)

Mission: Decide how to communicate outputs from the other engines.

ARgE acts like an editor-in-chief. It combines event priority, context, personalization, risk, and learning signals into clear user-facing language.

## 7. Domain Model

Atlas should revolve around a focused set of core entities.

### User

Represents an individual investor.

Owns:

- Portfolio
- Watchlists
- Memory Graph
- Learning Profile
- Notifications
- Insights
- Preferences
- Subscription

### Portfolio

Represents a user's investment accounts and holdings.

Contains:

- Holdings
- Performance
- Allocation
- Risk metrics
- Cash balance
- Historical performance

### Holding

Represents ownership of a financial asset.

Contains:

- Ticker
- Quantity
- Average cost
- Market value
- Gain or loss
- Sector
- Asset type

### Watchlist

Represents securities the user wants to monitor without owning.

Contains:

- Securities
- User-defined groups
- Price and event monitoring settings

### Security

Represents a tradable or trackable financial instrument.

Contains:

- Ticker
- Name
- Exchange
- Asset type
- Sector
- Industry
- Company metadata

### Market Event

Represents something that happened in the market.

Examples:

- Earnings
- Fed meeting
- Analyst upgrade or downgrade
- Dividend event
- SEC filing
- Economic report
- Breaking news
- Merger or acquisition
- Product launch

### Insight

The primary user-facing output of Atlas.

Contains:

- Title
- Summary
- Explanation
- Importance score
- Confidence level
- Sources
- Related holdings
- Related watchlist items
- Generated time
- Reason shown

### Morning Brief

A daily personalized summary of the user's market context.

Contains:

- Portfolio update
- Top market events
- Highest-priority insights
- Risks
- Opportunities
- Upcoming events
- Learning moment

### Alert

A notification delivered because an insight exceeded a priority threshold.

Contains:

- User
- Insight
- Priority
- Channel
- Delivery status
- Timestamp

### Learning Profile

Represents the user's investing knowledge and learning journey.

Contains:

- Known concepts
- Concepts in progress
- Explanation level
- Learning history
- Suggested lessons

### Source

Represents external evidence used to produce an insight.

Contains:

- Provider
- URL or reference ID
- Published time
- Retrieved time
- Source type
- Credibility metadata

## 8. Core User Flows

### 8.1 Onboarding

1. User creates an account.
2. Atlas asks for investing goal, experience level, and preferred daily time commitment.
3. User adds holdings or watchlist items.
4. Atlas creates an initial profile.
5. Atlas generates the first dashboard and Morning Brief when enough data exists.

### 8.2 Daily Morning Brief

1. Market data, news, earnings, and economic events are ingested.
2. AIE coordinates scoring and context generation.
3. ADE ranks relevant events.
4. APE personalizes relevance.
5. ARE checks portfolio risk conditions.
6. ARgE creates a concise user-facing brief.
7. User reads the brief and can open related insights.

### 8.3 Insight Generation

1. A market event enters the system.
2. The event is normalized.
3. ADE scores importance.
4. APE determines user relevance.
5. ACE adds context and plain-English explanation.
6. ARE adds risk context when appropriate.
7. ARgE produces a final insight.
8. The insight is stored and displayed.

### 8.4 AI Assistant Question

1. User asks a market, portfolio, or concept question.
2. Atlas retrieves relevant portfolio, watchlist, insight, and source context.
3. AIE coordinates a grounded response.
4. The answer cites or references supporting data where practical.
5. ALE updates learning signals when relevant.

### 8.5 Alert Delivery

1. An insight exceeds a configured priority threshold.
2. Atlas checks user notification settings.
3. Atlas verifies the event is timely and relevant.
4. Atlas sends the alert through the selected channel.
5. Delivery status is stored.

## 9. Functional Requirements

### FR-001: User Authentication

Atlas shall allow users to:

- Register
- Log in
- Log out
- Reset password
- Verify email
- Manage account settings

### FR-002: Portfolio Management

Atlas shall allow users to:

- Add holdings
- Edit holdings
- Delete holdings
- View portfolio value
- View gain or loss
- View allocation
- View related insights

### FR-003: Watchlists

Atlas shall allow users to:

- Add securities to a watchlist
- Remove securities from a watchlist
- Search securities
- View watchlist performance and relevant events

### FR-004: Market Intelligence

Atlas shall ingest and process:

- Market prices
- Company metadata
- Financial news
- Earnings events
- Economic calendar events
- Analyst events where available

### FR-005: Morning Brief

Atlas shall generate a personalized Morning Brief containing:

- Portfolio update
- Top market events
- Highest-priority insights
- Risks
- Opportunities
- Upcoming earnings
- Upcoming economic events
- Learning moment

### FR-006: AI Assistant

Atlas shall provide an AI assistant that can:

- Explain news
- Explain holdings
- Explain market events
- Explain investing concepts
- Answer portfolio-aware questions
- Reference available sources and user context

The assistant shall not provide unsupported buy, sell, or hold instructions.

### FR-007: Atlas Decision Engine

Atlas shall score and rank events based on:

- Market importance
- Portfolio relevance
- Watchlist relevance
- Timeliness
- User preferences
- Risk conditions
- Source reliability

### FR-008: Insight Generation

Atlas shall create insights that are:

- Personalized
- Ranked
- Explainable
- Linked to source material when available
- Related to holdings or watchlist items when relevant
- Assigned confidence or uncertainty metadata

### FR-009: Notifications

Atlas shall notify users only when relevant events exceed priority thresholds and the user's notification settings allow delivery.

### FR-010: Learning System

Atlas shall adapt explanations and recommend learning content based on user knowledge signals.

### FR-011: Search

Atlas shall allow users to search companies and tickers, then open company pages.

### FR-012: Company Page

Atlas shall provide company pages with:

- Current price
- Company overview
- Recent news
- Related insights
- AI-generated summary

## 10. Non-Functional Requirements

### NFR-001: Performance

- Core dashboard pages should load quickly under normal conditions.
- Morning Brief generation should complete within the scheduled delivery window.
- AI responses should stream or otherwise provide timely feedback.

### NFR-002: Reliability

- Atlas should handle provider failures gracefully.
- Failed background jobs should be retryable.
- Users should not see broken pages when external data is temporarily unavailable.

### NFR-003: Security

- Authentication is required for private user data.
- Sensitive data must not be exposed across users.
- Secrets must be stored in managed environment configuration.
- Server-side authorization checks are required for protected operations.

### NFR-004: Privacy

- Atlas should minimize unnecessary data collection.
- Users should be able to delete personal data.
- Users should be able to export personal data when practical.
- AI providers must not become the source of truth for user state.

### NFR-005: Explainability

Atlas should explain:

- Why an insight exists
- Why it matters
- Why it was shown to the user
- What evidence supports it
- What uncertainty remains

### NFR-006: Scalability

The MVP may use a simple architecture, but subsystem boundaries should allow future scaling.

### NFR-007: Maintainability

- Business logic should not live in UI components.
- Provider integrations should use adapter interfaces.
- Core logic should be testable without external services.
- Documentation should be updated when architectural behavior changes.

### NFR-008: Accessibility

Atlas should follow accessible design practices:

- Semantic HTML
- Keyboard navigation
- Sufficient contrast
- Clear focus states
- Screen-reader-friendly labels

### NFR-009: Observability

Atlas should log important system events, failed jobs, ingestion failures, and AI pipeline errors without exposing sensitive user data.

### NFR-010: AI Behavior

AI outputs should be:

- Grounded in available context
- Clearly uncertain when evidence is limited
- Plain-English by default
- Appropriate to user experience level
- Free of unsupported financial guarantees

## 11. System Context

### External Actors

| Actor | Role |
| --- | --- |
| Investor | Uses Atlas to understand markets, portfolio, and watchlist |
| Market Data Provider | Supplies prices, company metadata, and market status |
| Financial News Provider | Supplies financial news and market events |
| AI Provider | Generates language, summaries, and reasoning support |
| Authentication Provider | Manages identity and sessions |
| Notification Provider | Sends push, in-app, or other notifications |
| Email Provider | Sends account and product emails |
| Analytics Provider | Tracks product usage and reliability metrics |

### System Context Diagram

```text
Investor
   |
   v
Atlas Application
   |
   +--> Authentication Provider
   +--> Market Data Provider
   +--> Financial News Provider
   +--> AI Provider
   +--> Notification Provider
   +--> Email Provider
   +--> Analytics Provider
```

## 12. High-Level Architecture

Atlas uses a layered architecture.

```text
Presentation Layer
       |
Application Layer
       |
Intelligence Layer
       |
Data Layer
       |
Integration Layer
       |
Infrastructure Layer
```

### 12.1 Presentation Layer

Responsibilities:

- Render UI
- Manage interaction state
- Display dashboard, portfolio, watchlists, insights, and assistant
- Call application APIs

Constraints:

- Must not directly query external providers
- Must not contain business logic
- Must not bypass the Intelligence Layer for user-facing intelligence

### 12.2 Application Layer

Responsibilities:

- Expose route handlers and APIs
- Enforce authorization
- Coordinate use cases
- Validate input
- Call domain services and intelligence workflows

### 12.3 Intelligence Layer

Responsibilities:

- Rank market events
- Generate insights
- Personalize content
- Add context
- Evaluate risk
- Coordinate AI outputs

All user-facing intelligence must originate here.

### 12.4 Data Layer

Responsibilities:

- Store users, portfolios, holdings, watchlists, insights, alerts, sources, and learning profiles
- Provide persistence APIs
- Protect data integrity

### 12.5 Integration Layer

Responsibilities:

- Connect to external providers
- Normalize provider responses
- Handle retries and provider errors
- Keep provider details out of business logic

### 12.6 Infrastructure Layer

Responsibilities:

- Hosting
- Database hosting
- Background jobs
- Environment configuration
- CI/CD
- Monitoring

### Architectural Constraints

- Presentation components shall never directly query external providers.
- Business logic shall never execute inside UI components.
- The Intelligence Layer shall remain independent of UI technologies.
- External providers shall be replaceable.
- Subsystems shall communicate through defined interfaces.
- Persistent data shall be stored through the Data Layer.
- AI providers shall never become the source of truth for application state.
- All user-facing intelligence shall originate from the Atlas Intelligence Engine.

## 13. Architectural Decision Records

ADRs document significant decisions. Existing ADRs should not be rewritten when decisions change. Instead, create a new ADR that supersedes the old one.

Each ADR should include:

- Unique identifier
- Title
- Status
- Context
- Decision
- Rationale
- Consequences

### ADR-001: Atlas Shall Use a Layered Architecture

Status: Accepted

Context: Atlas will include multiple intelligence systems, external integrations, and user-facing applications. Without architectural boundaries, business logic can become tightly coupled to presentation and infrastructure concerns.

Decision: Atlas separates responsibilities into Presentation, Application, Intelligence, Data, Integration, and Infrastructure layers.

Rationale: Layered architecture improves maintainability, scalability, testing, and long-term flexibility.

Consequences: Clearer separation of responsibilities and better testability, with some additional architectural complexity.

### ADR-002: User-Facing Intelligence Shall Originate From AIE

Status: Accepted

Context: Atlas exists to reduce information overload through filtering, ranking, explanation, and personalization.

Decision: Every market event must pass through the Atlas Intelligence Engine before becoming user-facing intelligence.

Rationale: This creates a consistent, explainable, personalized experience.

Consequences: Additional processing complexity, but stronger product differentiation.

### ADR-003: External Providers Shall Remain Replaceable

Status: Accepted

Context: Atlas depends on external services for AI, market data, authentication, notifications, and email.

Decision: External providers communicate through adapter interfaces. Core business logic must not depend directly on provider implementations.

Rationale: This reduces vendor lock-in and simplifies migrations.

Consequences: Additional abstraction, lower long-term migration cost.

### ADR-004: Insights Are the Primary Product Output

Status: Accepted

Context: Financial applications often present raw data, charts, or news articles. Atlas transforms information into understanding.

Decision: Personalized Insights are the primary product output. Morning Briefs, dashboards, alerts, and AI conversations consume insights instead of raw events wherever practical.

Rationale: This separates facts from interpretation and creates architectural consistency.

Consequences: Requires an insight generation pipeline, but simplifies downstream experiences.

### ADR-005: AI Is a Capability, Not the Product Itself

Status: Accepted

Context: LLMs and providers change quickly. Atlas should remain valuable regardless of future models.

Decision: Business logic remains inside Atlas. AI providers generate language and reasoning support only when requested by Atlas.

Rationale: Protects long-term independence and explainability.

Consequences: More engineering effort, stronger architectural stability.

### ADR-006: Atlas Prioritizes Explainability

Status: Accepted

Context: Users are more likely to trust insights they can understand.

Decision: Atlas should explain why an insight exists, why it matters, why it was shown, and what evidence supports it.

Rationale: Builds trust and supports learning.

Consequences: Additional implementation effort, greater user confidence.

### ADR-007: Users Own and Control Their Data

Status: Accepted

Context: Atlas processes sensitive financial information.

Decision: Users should be able to export and delete personal data. Atlas should minimize unnecessary collection.

Rationale: Supports trust, privacy, and modern data protection expectations.

Consequences: Additional engineering effort for export and deletion workflows.

### ADR-008: Documentation Is a Core Product Asset

Status: Accepted

Context: Atlas will evolve with multiple contributors and AI coding assistants.

Decision: The SDS remains the authoritative reference for architecture and system behavior.

Rationale: Reduces onboarding time, preserves intent, and limits architectural drift.

Consequences: Requires documentation discipline, but improves long-term velocity.

## 14. MVP Scope

The MVP validates this hypothesis:

> Investors will consistently use Atlas if it transforms financial information into personalized intelligence.

### MVP Goals

Version 1.0 must allow a user to:

- Create an account
- Build a portfolio
- Build a watchlist
- Receive personalized insights
- Receive a Morning Brief
- Ask AI questions about the market and portfolio
- Understand why important events matter
- Return to Atlas daily

### Included Features

Authentication:

- Account registration
- Login
- Logout
- Password reset
- Email verification

Portfolio:

- Add holdings
- Edit holdings
- Delete holdings
- Portfolio performance
- Gain or loss
- Allocation overview

Watchlist:

- Add securities
- Remove securities
- Search securities
- View watchlist

Dashboard:

- Portfolio summary
- Today's Morning Brief
- Top insights
- Upcoming earnings
- Upcoming economic events
- Recent alerts

Morning Brief:

- Daily summary
- Portfolio update
- Top market events
- Highest-priority insights
- Risks
- Opportunities
- Learning moment

Insights:

- Personalized
- Ranked
- Explainable
- Linked to sources
- Related to holdings
- Confidence score

AI Assistant:

- Explain news
- Explain holdings
- Explain concepts
- Explain market events
- Answer questions
- Reference portfolio context

Decision Engine:

- Event ranking
- Priority scoring
- Portfolio relevance
- Watchlist relevance
- Dashboard selection
- Morning Brief selection

Search and Company Pages:

- Search companies and tickers
- Open company pages
- View price, company overview, recent news, related insights, and AI summary

### Excluded From MVP

The following are intentionally out of scope for Version 1.0:

- Broker integration
- Automatic trade import
- Trading
- Buy or sell recommendations
- Social features
- Copy trading
- Community discussions
- Paper trading
- Crypto wallets
- Desktop application
- Native mobile applications
- Advanced Learning Engine
- Atlas Memory Graph beyond basic profile signals
- Advanced Risk Engine
- Voice conversations
- Autonomous AI agents
- Plugin system
- Custom automations
- Options analytics
- Tax reporting

### MVP Success Criteria

The MVP is successful if users:

- Understand the product within five minutes
- Return multiple times per week
- Read the Morning Brief
- Ask AI questions
- Receive value from personalized insights
- Report that Atlas reduces information overload

### Deferred Engineering

The MVP prioritizes validation over optimization. These can wait until after validation:

- Microservice decomposition
- Advanced caching
- Horizontal scaling
- Complex event processing
- Provider redundancy
- High-availability deployment
- Enterprise monitoring
- Performance optimization beyond MVP targets

## 15. Technology Stack

Technology choices prioritize developer productivity, maintainability, ecosystem maturity, and AI-assisted development compatibility.

### Application

- Frontend: Next.js, React, TypeScript
- Styling: Tailwind CSS
- UI components: shadcn/ui or equivalent
- API style: REST for MVP

### Backend

- Initial backend: Next.js Route Handlers
- Language: TypeScript
- ORM: Prisma
- Validation: Zod
- Background jobs: Trigger.dev or equivalent

### Data

- Database: PostgreSQL
- Hosted database: Supabase

### Authentication

- Clerk or Supabase Auth

### AI

- Primary provider: OpenAI
- Prompt management: version controlled
- Structured outputs: JSON where practical
- Reasoning: controlled by Atlas Intelligence Engine

### Market Data

Primary provider is not yet selected.

Provider requirements:

- US equities
- Company metadata
- Historical prices
- Market status
- Economic calendar
- News access or compatibility with paired news provider

### Hosting and Delivery

- Hosting: Vercel
- Repository: GitHub
- CI/CD: GitHub Actions

## 16. Development Roadmap

Atlas should be built incrementally. Each milestone must produce a working, testable application.

### Milestone 1: Project Foundation

- Project initialization
- GitHub repository
- Next.js project
- TypeScript configuration
- Tailwind setup
- shadcn/ui installation
- Prisma configuration
- Supabase connection
- Authentication
- Basic layout
- Deployment pipeline

### Milestone 2: Portfolio and Watchlist

- Portfolio CRUD
- Watchlist CRUD
- Database models
- Dashboard widgets
- Portfolio calculations
- Company search

### Milestone 3: Market Intelligence

- Market event ingestion
- News ingestion
- Basic Decision Engine
- Insight generation
- Insight storage
- Dashboard integration

### Milestone 4: Morning Brief

- Morning Brief generation
- Daily summaries
- Portfolio updates
- Economic calendar integration
- Earnings integration

### Milestone 5: AI Assistant

- Context-aware prompts
- Portfolio-aware responses
- Insight explanations
- Educational responses
- Source-aware answers where practical

### Milestone 6: Alpha Polish

- Bug fixing
- Performance improvements
- UI polish
- Accessibility review
- Testing
- Private alpha release
- Feedback collection

## 17. Implementation Guide

### Guiding Principles

1. Build one milestone at a time.
2. Keep the application functional after every milestone.
3. Do not implement future milestones early.
4. Prefer simple, maintainable solutions over clever abstractions.
5. Optimize for readability before optimization.
6. Every implementation decision should support the Atlas Doctrine.
7. Treat the SDS as the source of truth.

### AI Coding Assistant Instructions

When implementing Atlas:

- Read the SDS before beginning work.
- Do not invent undocumented features.
- Do not expand project scope without approval.
- Ask for clarification when requirements are ambiguous.
- Complete one milestone before beginning another.
- Generate maintainable production-quality code.
- Avoid unnecessary abstraction.
- Avoid premature optimization.
- Follow existing project conventions.
- Preserve architectural boundaries.

### Engineering Standards

Every pull request should:

- Reference the milestone being implemented.
- Remain focused on a single objective.
- Compile successfully.
- Avoid unrelated refactoring.
- Update documentation when architectural behavior changes.
- Leave the project in a working state.

### Code Quality

Code should be:

- Readable
- Predictable
- Modular
- Type-safe
- Consistent with existing architecture
- Documented where necessary

Business logic should remain isolated from presentation logic. Magic numbers and unexplained constants should be avoided. Functions should have a single responsibility whenever practical.

### Testing

Critical business logic shall be tested, including:

- Decision Engine scoring
- Portfolio calculations
- Insight generation
- Morning Brief generation
- Authentication flows

Regression tests should be added for resolved defects when practical. Tests should focus on behavior rather than implementation details.

### Git Workflow

- Primary branch: `main`
- Development branch: `develop`
- Feature branch naming: `feature/<short-description>`
- Bug fix branch naming: `fix/<short-description>`
- Commit messages: concise and descriptive

Example commit messages:

- `feat: add portfolio dashboard`
- `fix: correct gain calculation`
- `refactor: simplify insight ranking`
- `docs: update SDS`

### Definition of Done

A task is complete when:

- The implementation satisfies the documented requirement.
- The application builds successfully.
- Relevant tests pass.
- Documentation is updated if required.
- No known critical defects remain.
- The feature integrates cleanly with the existing architecture.

## Closing Statement

Atlas is built on the belief that clarity creates confidence.

The goal is not to present more information. The goal is to transform information into understanding.

Future evolution of Atlas should build on these principles while remaining open to new evidence, user feedback, and better ideas.
