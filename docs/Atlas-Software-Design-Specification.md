# Atlas Software Design Specification (SDS)

Version: 1.0.0  
Status: Draft  
Project Codename: Atlas  
Owner: Goldie  
Technical Architect: OpenAI ChatGPT  
Created: July 5, 2026

---

# Confidentiality

This document defines the architecture, product vision, and engineering standards for Project Atlas. It is the source of truth for design, development, testing, and future product decisions. When implementation and documentation conflict, update this SDS before changing code. AI coding agents, including Codex, Claude, and ChatGPT, must read this document before implementing features.

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
9. Atlas Decision Engine (ADE)
10. Atlas Core Engines
11. Atlas Cognitive Architecture
12. Investor Lifecycle
13. Domain Model
14. Core User Flows
15. Functional Requirements
16. Non-Functional Requirements
17. System Context
18. High-Level System Architecture
19. Architectural Decision Records (ADR)
20. Minimum Viable Product (MVP) Scope
21. Technology Stack
22. Development Roadmap
23. Implementation Guide

# 1. Executive Summary

Atlas is an AI-powered Investment Operating System that helps investors understand financial markets quickly, confidently, and efficiently.

Modern investors face thousands of daily news articles, analyst reports, earnings announcements, economic releases, social discussions, and market movements. They often switch between market data platforms, news sites, calendars, portfolio trackers, analyst reports, newsletters, social media, and generic AI chatbots just to understand what changed.

Atlas eliminates that fragmented workflow. It continuously gathers relevant market information, filters noise, and generates personalized insights based on each user's portfolio, watchlist, interests, goals, risk preferences, experience level, and prior behavior.

Atlas is not another stock tracker or news feed. Its objective is not more information; its objective is understanding. Atlas combines AI, market data, financial news, portfolio tracking, and educational explanations into one experience centered on the question: "What do I need to know right now?"

Atlas should become the first application investors open every market day.

# 2. Problem Statement

Today's investing workflow is fragmented and poorly prioritized. Investors must combine market data, financial news, economic calendars, portfolio trackers, analyst reports, social media, AI chatbots, and email newsletters by themselves.

This creates information overload, duplicate news, low personalization, wasted time, and difficulty understanding why events matter. Most financial products deliver information; few deliver understanding. Atlas exists to bridge that gap.

# 3. Product Vision

Atlas will become the AI operating system for investors. It augments, rather than replaces, human decision-making by organizing information, identifying important events, explaining financial context, and reducing the time required to stay informed.

Atlas is designed around one promise: **Know what matters.**

# 4. Product Principles

## Principle 1 - Understanding Over Information

Atlas helps users understand markets instead of consuming more raw information. Every feature should answer at least one of these questions:

- What changed?
- Why does it matter?
- Does it affect me?

If a feature answers none of these, it should not exist.

## Principle 2 - Personalization First

No two users should have the same Atlas experience. Atlas personalizes content using portfolio, watchlist, investment goals, risk preferences, experience level, reading history, notification settings, and previously viewed content.

## Principle 3 - AI Is an Analyst, Not a Fortune Teller

Atlas explains facts, summarizes information, provides context, and communicates uncertainty. It does not guarantee future performance, present speculation as certainty, or make unsupported claims.

## Principle 4 - Time Is the Most Valuable Asset

Every feature should reduce the time required to understand the market. Atlas should save time, not consume it.

## Principle 5 - Clarity Over Complexity

Financial information should be understandable to new investors. Technical language should be explained in plain English.

## Principle 6 - Trust Is Earned

AI-generated insight must be traceable to reliable data. Users should always know whether content is live market data, news, an AI summary, opinion, or educational material.

## Principle 7 - Atlas Doctrine

Atlas does not answer every financial question. It answers the right questions at the right time. Every feature must support the North Star: **Know what matters.** Features that increase complexity without increasing clarity should not be built.

## Principle 8 - Atlas Is a Platform, Not an Application

CTO Decision #001: Atlas is a platform, not a single tightly coupled application. If every feature talks directly to every other feature, the system becomes difficult to scale and maintain. Atlas subsystems must have clear responsibilities and communicate through defined interfaces.

Atlas should also develop a consistent internal vocabulary. Engineers should refer to the "ADE" rather than "the thing that figures out what is important." This shared language improves clarity, consistency, and long-term maintainability.

# 5. Success Metrics

Atlas succeeds when users open it every market morning, understand the market in under five minutes, feel more confident about current events, learn regularly, and keep Atlas in their investing routine.

Key product metrics:

- Daily Active Users (DAU)
- Weekly retention
- Morning Brief completion rate
- Average session length
- AI conversation count
- User satisfaction
- Premium conversion rate

# 6. User Experience Philosophy

Atlas should feel like sitting next to an experienced financial analyst: calm, fast, intelligent, premium, focused, confident, and honest. Users should never feel overwhelmed. The application should remove noise, reduce cognitive load, and avoid forcing users to visit multiple websites just to understand market activity. When uncertainty exists, Atlas must say so clearly.

# 7. Target Users

Atlas is designed for investors who value understanding over information. It is not exclusively for professional traders; it adapts explanations, recommendations, and interface behavior across experience levels.

Primary user groups:

- Beginner investors
- Long-term investors
- Swing traders
- Active traders
- Financial learners

# 8. User Personas

Atlas should evolve as users become more experienced.

| Persona | Age | Experience | Portfolio | Goal | Problems | Atlas Goal |
| --- | ---: | --- | ---: | --- | --- | --- |
| Alex | 23 | Beginner | $2,300 | Learn investing while growing long-term wealth | Does not know which news matters, does not understand financial terms, gets overwhelmed | Teach Alex without making them feel stupid |
| Sarah | 36 | Intermediate | $84,000 | Stay informed in under ten minutes | Too many news sources, limited time, misses important events | Replace five apps with one |
| David | 48 | Advanced | $650,000 | Receive intelligent summaries | Information overload, duplicate articles, wants concise analysis | Act like an AI research analyst |

# 9. Atlas Decision Engine (ADE)

The Atlas Decision Engine is the intelligence layer that prioritizes every piece of information before it reaches the user. Its purpose is to reduce information overload by filtering, ranking, and contextualizing incoming data. No user-facing information bypasses the Decision Engine.

Every event receives a relevance score. The score determines visibility, priority, notification eligibility, AI inclusion, Morning Brief inclusion, and alert urgency.

# 10. Atlas Core Engines

## 10.1 Decision Engine

Purpose: determine importance.

## 10.2 Context Engine

Information without context is low value. Example: "Apple announces stock buyback" is raw news. Atlas should explain: "Apple announced a $90B stock buyback. This generally reduces shares outstanding and is often viewed as a sign management believes the company is undervalued. Apple has announced buybacks several times over the past decade." That is context.

## 10.3 Personalization Engine

Purpose: decide whether the user should see an event. It checks portfolio, watchlist, investment goals, experience, risk profile, reading history, and notification settings. Every person gets a different Atlas.

## 10.4 Learning Engine

Purpose: help the app grow with the user. If a user asks "What is CPI?", later asks "What is PPI?", then asks "What are Treasury yields?", Atlas may infer macroeconomics interest and offer a short lesson on how interest rates affect stocks.

## 10.5 Risk Engine

Purpose: watch for conditions, not predict the future. Examples include portfolio concentration, five earnings events in one week, a Fed meeting tomorrow, expected high volatility, a dividend cut, or one sector dominating the portfolio. Atlas should not say "sell"; it should explain, for example: "Your portfolio has become 52% technology stocks. That is higher than your typical allocation."

# 11. Atlas Cognitive Architecture

Atlas uses a cognitive architecture instead of exposing raw APIs directly to users. Incoming information passes through specialized intelligence systems with clear responsibilities. This keeps Atlas modular, explainable, scalable, replaceable, and continuously improvable.

Core systems:

- Atlas Intelligence Engine (AIE)
- Atlas Decision Engine (ADE)
- Atlas Context Engine (ACE)
- Atlas Personalization Engine (APE)
- Atlas Risk Engine (ARE)
- Atlas Learning Engine (ALE)
- Atlas Memory Graph (AMG)
- Atlas Reasoning Engine (ARgE)

## 11.1 Atlas Subsystem Contracts

Every subsystem has a contract: one responsibility, defined inputs, and defined outputs.

| Subsystem | Mission | Responsibilities | Inputs | Outputs |
| --- | --- | --- | --- | --- |
| ADE | Determine what deserves the user's attention | Score events, filter low-value information, rank events, determine notification priority, select Morning Brief content | News, market data, economic events, portfolio, watchlist | Priority score, visibility level, alert eligibility |
| ACE | Explain why information matters | Add historical context, explain terminology, compare similar historical events, translate complex financial language | Events selected by ADE | Educational explanations, historical comparisons, simple-language summaries |
| APE | Determine relevance for each investor | Understand portfolio, goals, investment style, experience, notification preferences, reading habits, learning progress | User profile, behavior, portfolio, event data | Personalized relevance and importance adjustments |
| ARE | Continuously evaluate portfolio risk and upcoming events | Monitor portfolio concentration, sector exposure, upcoming earnings, economic risk, volatility, dividend changes, unusual market conditions | Portfolio, market events, economic events | Risk level, warnings, educational explanations, suggested monitoring |
| ALE | Help users become better investors over time | Track concepts learned, recommend educational content, detect knowledge gaps, adjust explanation difficulty, measure learning progress | Questions, reading behavior, completed learning | Learning profile updates and content recommendations |
| AMG | Maintain long-term understanding of each investor | Store persistent preferences rather than temporary conversation history | User behavior and preferences | Preferred sectors, goals, learning progress, favorite companies, ignored topics, explanation style, FAQs, notification behavior, dashboard usage, risk tolerance, Morning Brief history |
| ARgE | Decide how to communicate combined engine outputs | Act as the editor-in-chief across engine results | ADE, ACE, APE, ALE, ARE outputs | Final user-facing language, insight framing, conversation responses |

Example ARgE behavior: if ADE marks CPI as important, ACE explains why, APE identifies a beginner user, and ALE knows the user is learning inflation, ARgE may write: "Tomorrow's CPI report could make the market more volatile. Since you have been learning about inflation recently, we included a short explanation of why CPI matters."

# 12. Investor Lifecycle

Atlas is designed to evolve alongside each investor over years, not only at launch. The platform continuously adapts behavior, explanations, recommendations, and interface complexity as the user's knowledge and habits mature. The lifecycle has five stages:

| Stage | User State | Atlas Behavior |
| --- | --- | --- |
| Explorer | New or curious investor | Avoid chart overload. Build an investing profile with a small set of questions: goals, experience, and desired daily time commitment. Example goals: learn investing, build retirement savings, generate passive income, active trading, still figuring it out. Example experience: none, beginner, intermediate, advanced. Example time: 5 minutes, 15 minutes, 30+ minutes. Atlas then says it will adapt over time instead of asking for excessive settings. |
| Builder | Owns a few stocks | Personalize the Morning Brief, target educational tips, support early AI questions, and begin growing the Memory Graph. |
| Confident Investor | Understands basics and asks more advanced questions | Quietly increase explanation sophistication without forcing a manual setting. Example: shift from "What is a stock?" to "Explain implied volatility." |
| Advanced Investor | Wants more analysis and less education | Reduce hand-holding, increase signal, and provide more analytical summaries. |
| Expert | Wants minimal, high-density output | Respect time with concise outputs such as three risks and three opportunities. |

# 13. Domain Model

Atlas should revolve around roughly 15-20 core entities, not a sprawling object model.

| Entity | Meaning | Key Data / Responsibilities |
| --- | --- | --- |
| User | Individual investor using Atlas | Authentication, preferences, subscription, settings, personal profile; owns portfolio, watchlists, Memory Graph, learning profile, notifications, insights |
| Portfolio | User investment accounts | Holdings, performance, allocation, risk metrics, cash balance, historical performance |
| Holding | Ownership of a financial asset such as AAPL, NVDA, or SPY | Ticker, quantity, average cost, market value, gain/loss, sector, asset type |
| Market Event | Something that happened in financial markets | Earnings, Fed meeting, stock upgrade, dividend, SEC filing, economic report, breaking news, merger, product launch |
| Insight | Personalized explanation generated from one or more Market Events | Title, summary, importance score, confidence level, sources, related holdings, generated time, explanation |
| Alert | Notification sent because an Insight exceeded a priority threshold | Portfolio earnings tomorrow, Fed speech, dividend increase, high volatility, breaking news |
| Morning Brief | Daily collection of highest-priority Insights | Top events, portfolio summary, market summary, risks, opportunities, learning moment |
| Learning Record | Concepts understood by the investor | Market structure, inflation, valuation, dividends, ETF basics, options, risk management, confidence score, last reviewed, recommended next lesson |
| Memory Node | Persistent investor knowledge | Preferred stocks, favorite sectors, ignored topics, risk preferences, reading habits, learning style, notification behavior |

Core flow: Market Event -> Atlas Intelligence Engine -> Insight -> Morning Brief -> Alert -> User.

# 14. Core User Flows

User flows describe how Atlas delivers outcomes rather than isolated features. MVP flows:

| Flow | Sequence | Purpose / Notes |
| --- | --- | --- |
| 1. First-Time Onboarding | Download Atlas -> Create Account -> Verify Email -> Welcome -> Select Investing Experience -> Select Goals -> Optional Import Portfolio -> Choose Stocks to Watch -> Generate Initial Profile -> Generate First Morning Brief -> Dashboard | Get users to value quickly. Do not ask unnecessary questions. |
| 2. Daily Morning Experience | Open Atlas -> Dashboard Loads -> Portfolio Summary -> Morning Brief -> Top 3 Insights -> Optional AI Questions -> Close App | Should take under five minutes. |
| 3. Research Flow | User Searches -> Company Page -> Latest Insights -> Relevant News -> AI Explanation -> Related Holdings -> Return | Goal is fast understanding, not endless research. |
| 4. Alert Flow | Market Event -> ADE Scores Event -> Insight Created -> Alert Threshold Met -> Notification Sent -> User Opens Atlas -> AI Provides Context | Notification invites the user back into Atlas; it does not explain everything. |
| 5. Learning Flow | User Does Not Understand Something -> Ask AI -> Receive Explanation -> Learning Engine Updates Profile -> Future Explanations Improve | Every question makes Atlas better. |
| 6. Portfolio Update | User Adds Holding -> Portfolio Updated -> AIE Recalculates -> ADE Re-ranks Priorities -> Morning Brief Changes -> Alerts Updated | The portfolio is not just stored; it actively changes what Atlas surfaces. |

All flows prioritize quick value, minimal setup, and low configuration burden.

# 15. Functional Requirements

## Purpose

Functional requirements define what Atlas must do. Priority levels:

- [MUST]: required for MVP
- [SHOULD]: important but not required for first release
- [COULD]: possible future enhancement
- [VISION]: long-term direction

## FR-001 User Authentication

Priority: [MUST]  
Description: Atlas shall allow users to create and manage secure accounts.  
Requirements: register with email/password, login, logout, password reset, email verification.  
Future: OAuth providers such as Google, Apple, and Microsoft.

## FR-002 Portfolio Management

Priority: [MUST]  
Description: Users shall be able to build and manage investment portfolios.  
Requirements: add holdings, edit holdings, remove holdings, track quantity, track average purchase price, view portfolio performance, view asset allocation, view unrealized gains/losses.  
Future: broker integrations for automatic synchronization.

## FR-003 Watchlists

Priority: [MUST]  
Requirements: create watchlists, add securities, remove securities, reorder securities, search securities, view watchlist performance.  
Future: multiple watchlists, shared watchlists.

## FR-004 Market Intelligence

Priority: [MUST]  
Description: Atlas shall transform market data into personalized intelligence.  
Requirements: collect market events, process events through the Atlas Intelligence Engine, generate personalized Insights, rank Insights, store Insights, display Insights on the Dashboard. Users shall not receive unfiltered raw event streams by default.

## FR-005 Morning Brief

Priority: [MUST]  
Description: Atlas shall generate one personalized Morning Brief per trading day.  
Includes: portfolio summary, top market events, highest-priority Insights, upcoming economic events, upcoming earnings, daily learning moment, risks, opportunities.  
Consumption target: under five minutes.

## FR-006 AI Assistant

Priority: [MUST]  
Requirements: answer questions, explain financial concepts, explain market events, explain portfolio changes, reference user holdings, provide educational responses. The AI shall distinguish facts from opinions, never present speculation as certainty, and explain uncertainty when appropriate.

## FR-007 Atlas Decision Engine

Priority: [MUST]  
Requirements: every incoming Market Event receives an Importance Score. The score considers portfolio relevance, watchlist relevance, market impact, recency, event category, user preferences, and educational value. ADE determines Dashboard visibility, Morning Brief inclusion, notification eligibility, and Insight priority.

## FR-008 Insight Generation

Priority: [MUST]  
Requirements: Atlas shall generate personalized Insights from Market Events. Each Insight includes title, summary, explanation, importance score, confidence score, supporting sources, related holdings, timestamp, and category.

## FR-009 Notifications

Priority: [SHOULD]  
Requirements: Atlas may notify users when high-priority Insights are generated, portfolio holdings experience significant events, economic events approach, or risk levels increase. Notifications shall be configurable, and users may disable any category.

## FR-010 Learning System

Priority: [SHOULD]  
Requirements: Atlas shall adapt educational content based on user knowledge. It shall track concepts learned, frequently asked questions, knowledge progression, and preferred explanation complexity.

## Out of Scope (MVP)

Version 1.0 excludes broker trading, automated investing, AI-generated buy/sell recommendations, social networking, copy trading, options execution, crypto wallets, tax reporting, algorithmic trading, portfolio rebalancing automation, voice assistant, native desktop application, and native mobile application.

# 16. Non-Functional Requirements

## Purpose

Non-functional requirements define how Atlas operates across performance, reliability, scalability, security, maintainability, accessibility, observability, and AI behavior. Unless specified, they apply to every subsystem.

| ID | Priority | Area | Requirements |
| --- | --- | --- | --- |
| NFR-001 | [MUST] | Performance | Prioritize responsiveness. Dashboard initial load should target less than 2 seconds under normal network conditions. Page transitions should feel instantaneous where possible. Morning Brief should render within 3 seconds after required data is collected. Long operations need progress indicators. Avoid unnecessary network requests. Expensive computation should run on backend services where practical. |
| NFR-002 | [MUST] | Reliability | Continue operating when non-critical services fail. Failures in one subsystem shall not crash unrelated functionality. Retry temporary external API failures when appropriate. Clearly communicate unavailable data. Fail gracefully and never show raw exception messages to end users. |
| NFR-003 | [MUST] | Security | Never store plaintext passwords. Never place sensitive credentials in frontend source code. Store secrets in secure environment variables. Use encrypted HTTPS communication. Require secure session management. Follow least privilege. Only authorized users may access portfolio data. |
| NFR-004 | [MUST] | Privacy | Users own their data. Collect only data needed for requested functionality. Handle AI conversations containing portfolio information securely. Users can delete accounts and stored portfolio information. Distinguish user-generated information from AI-generated content. |
| NFR-005 | [MUST] | Explainability | Explain why important Insights appear. Reference supporting evidence where practical. Distinguish fact, inference, opinion, and educational explanation. Communicate limited confidence. Users should understand why Atlas reached a conclusion. |
| NFR-006 | [SHOULD] | Scalability | Support user growth without architectural redesign. Keep subsystems modular. Keep external services replaceable. Keep business logic independent of UI implementation. Support horizontal scaling where practical. |
| NFR-007 | [MUST] | Maintainability | Keep code modular. Separate business logic from presentation logic. Prefer single-responsibility functions. Keep components reusable. Synchronize documentation with implementation. Track technical debt. |
| NFR-008 | [SHOULD] | Accessibility | Support keyboard navigation. Include accessible labels for interactive elements. Never use color as the only indicator of important information. Prioritize readable typography. Support dark and light mode. |
| NFR-009 | [SHOULD] | Observability | Log important backend events. Include diagnostic information for developers. Make performance metrics measurable. Detect critical failures. Distinguish application errors from external service failures. |
| NFR-010 | [MUST] | AI Behavior | Never fabricate market data. Distinguish facts from generated explanations. Acknowledge uncertainty. Avoid speculation as certainty. Never imply access to unavailable information. Provide educational explanations when beneficial. |
| NFR-011 | [MUST] | Engineering Standards | Every feature shall trace to a functional requirement. Pull requests should reference requirement IDs. Code reviews should verify architectural consistency. Documentation shall be updated before or alongside implementation. Breaking architectural changes require SDS updates. |

# 17. System Context

## Purpose

The System Context defines Atlas boundaries, external actors, and third-party information flows. Atlas should remain loosely coupled to replaceable external providers through clear interfaces.

## External Actors

| Actor | Responsibilities | Requirements |
| --- | --- | --- |
| Investor | Create account, manage portfolio, read Insights, interact with Atlas AI, receive Morning Briefs, manage preferences | Atlas must provide personalized intelligence, protect user data, deliver understandable financial information, and adapt over time |
| Market Data Provider | Security prices, historical prices, company metadata, market status, trading calendars, volume, index information | Provider-agnostic; changes should require minimal architecture changes; market data must not be tightly coupled to business logic |
| Financial News Provider | Breaking news, company news, economic news, press releases, news metadata | News enters Atlas only as raw events; presentation always passes through AIE; duplicate stories should be consolidated |
| AI Provider | Generate natural language, summarize information, answer questions, explain concepts, generate education | Atlas owns orchestration and business logic; AI provider must be replaceable |
| Authentication Provider | User registration, identity verification, secure authentication, session management | Authentication isolated from business logic; portfolio services trust authenticated identities |
| Notification Provider | Push notifications, email notifications, system alerts | Providers deliver messages only; ADE owns notification priority |
| Email Provider | Verification emails, password reset, weekly summaries, account notifications | Templates are version controlled; business logic shall not exist inside templates |
| Analytics Provider | Anonymous usage metrics, health monitoring, feature adoption | Never expose personally identifiable investment information; respect privacy preferences |

## System Context Diagram

```text
Investor
  |
  v
Atlas / Atlas Intelligence Engine
  |---- Market Data Provider
  |---- Financial News Provider
  |---- AI Provider
  |---- Auth Provider
  |---- Email Provider
  |---- Notification Provider
  |---- Analytics Provider
```

Architectural intent: every arrow flows through Atlas. The AI never directly calls the market data provider. The notification system never decides what is important. The frontend never directly talks to the news provider. Everything flows through Atlas.

# 18. High-Level System Architecture

## Purpose

Atlas follows a layered architecture to maximize maintainability, scalability, modularity, and testability. Each layer has clear responsibilities and communicates through defined interfaces. Business logic remains centralized inside Atlas. Presentation logic remains isolated. External providers must not become tightly coupled to internal architecture.

## Architectural Philosophy

Atlas uses separation of concerns. Each layer owns one area of responsibility, remains loosely coupled and cohesive, avoids depending on another layer's implementation details, and can evolve independently when practical.

## Layers

| Layer | Purpose | Responsibilities |
| --- | --- | --- |
| 1. Presentation Layer | User interface for investors | Display dashboards, Morning Briefs, Insights, portfolio information, AI conversations, and notifications; collect user input; contain no business logic; request data from Application Layer |
| 2. Application Layer | Coordinate workflows | Receive user requests, validate input, coordinate services, manage sessions, invoke Intelligence workflows, return responses to Presentation Layer; avoid complex business rules |
| 3. Intelligence Layer | Transform financial information into personalized investor intelligence | Includes AIE, ADE, ACE, APE, ARE, ALE, AMG, ARgE; ranks events, generates Insights, explains context, evaluates portfolio relevance, generates Morning Briefs, prioritizes alerts, supports AI conversations; owns core business logic |
| 4. Data Layer | Store and retrieve persistent data | Users, portfolios, holdings, Insights, Morning Briefs, Learning Records, Memory Graph, notifications, preferences; persist state, support querying, maintain history, enforce integrity |
| 5. Integration Layer | Communicate with external systems | Retrieve market data and news, communicate with AI providers, send emails, deliver notifications, authenticate users, collect analytics, normalize external data, shield Atlas from provider-specific implementations |
| 6. Infrastructure Layer | Operational environment | Hosting, deployment, monitoring, logging, scaling, secrets management, backups, disaster recovery; keep infrastructure concerns isolated from business logic |

## Architecture Diagram

```text
Presentation Layer
        |
Application Layer
        |
Intelligence Layer
     /     \
Data Layer  Integration Layer
     \     /
Infrastructure Layer
```

## Data Flow

Market Event -> Integration Layer -> Application Layer -> Atlas Intelligence Engine -> Decision Engine -> Context Engine -> Reasoning Engine -> Insight -> Database -> Presentation Layer -> Investor.

## Architectural Constraints

- Presentation components shall never directly query external providers.
- Business logic shall never execute inside UI components.
- The Intelligence Layer shall remain independent of UI technologies.
- External providers shall be replaceable.
- Subsystems shall communicate through defined interfaces.
- Persistent data shall be stored only within the Data Layer.
- AI providers shall never become the source of truth for application state.
- All user-facing intelligence shall originate from the Atlas Intelligence Engine.

# 19. Architectural Decision Records (ADR)

## Purpose

Architectural Decision Records document significant technical decisions. Each ADR captures context, decision, rationale, and consequences. ADRs preserve architectural consistency as Atlas evolves. Significant architectural changes should create a new ADR rather than rewriting existing historical records.

## ADR-001 - Atlas Shall Use a Layered Architecture

Status: Accepted  
Context: Atlas will include multiple intelligence systems, external integrations, and user-facing applications. Without boundaries, business logic could become tightly coupled to presentation and infrastructure.  
Decision: Separate responsibilities into Presentation, Application, Intelligence, Data, Integration, and Infrastructure layers.  
Rationale: Improves maintainability, scalability, testing, and flexibility.  
Consequences: Clearer responsibilities, better testability, simpler expansion, and slight architectural complexity.

## ADR-002 - All User-Facing Intelligence Shall Originate From AIE

Status: Accepted  
Context: Traditional financial apps expose raw information directly, while Atlas reduces overload through filtering and explanation.  
Decision: Every Market Event passes through the Atlas Intelligence Engine before reaching users. No user-facing intelligence bypasses AIE.  
Rationale: Creates consistent UX, personalization, explainability, and reduced overload.  
Consequences: Additional processing and complexity; stronger long-term differentiation.

## ADR-003 - External Providers Shall Remain Replaceable

Status: Accepted  
Context: Atlas depends on AI, market data, authentication, and notification providers whose APIs and business fit may change.  
Decision: External providers communicate through adapter interfaces. Core logic never depends directly on provider implementations.  
Rationale: Reduces vendor lock-in and simplifies migrations.  
Consequences: More abstraction; lower long-term migration cost.

## ADR-004 - Insights Are the Primary Product Output

Status: Accepted  
Context: Financial applications often present raw data, charts, or news. Atlas transforms information into understanding.  
Decision: Personalized Insights are the primary output. Morning Briefs, dashboards, alerts, and AI conversations consume Insights rather than raw market events.  
Rationale: Separates facts from interpretation, creates consistency, improves personalization, and supports future AI enhancements.  
Consequences: Requires an Insight generation pipeline; simplifies downstream experiences.

## ADR-005 - AI Is an Implementation Capability, Not the Product

Status: Accepted  
Context: LLMs evolve rapidly. Atlas should remain valuable regardless of provider or model changes.  
Decision: Atlas owns business logic. AI providers generate language and reasoning only when requested by Atlas.  
Rationale: Protects independence, explainability, and provider flexibility.  
Consequences: More engineering effort; greater architectural stability.

## ADR-006 - Atlas Prioritizes Explainability Over Opaque Outputs

Status: Accepted  
Context: Users trust recommendations they understand.  
Decision: When practical, Atlas explains why an Insight exists, why it matters, why it was shown, and what evidence supports it.  
Rationale: Builds trust, supports learning, and encourages informed decisions.  
Consequences: Additional implementation effort; greater user confidence.

## ADR-007 - Users Retain Ownership and Control of Their Data

Status: Accepted  
Context: Atlas processes sensitive financial information.  
Decision: Users can export and delete personal data. Atlas minimizes unnecessary collection.  
Rationale: Supports trust, privacy, and modern data protection principles.  
Consequences: Export/deletion workflows require engineering effort; transparency improves.

## ADR-008 - Documentation Is a Core Product Asset

Status: Accepted  
Context: Atlas is expected to evolve for years with multiple contributors.  
Decision: The SDS remains the authoritative reference for architecture and behavior. Architectural changes are documented before or alongside implementation.  
Rationale: Reduces onboarding time, improves consistency, and preserves intent.  
Consequences: More documentation effort; higher long-term velocity and less architectural drift.

## ADR Principles

ADRs are immutable historical documents. Existing ADRs should not be rewritten to reflect newer decisions. If a decision changes, create a new ADR that supersedes the previous record while preserving history. Every ADR should include a unique identifier, title, status, context, decision, rationale, and consequences.

# 20. Minimum Viable Product (MVP) Scope

## Purpose

This chapter defines Atlas Version 1.0 scope. MVP hypothesis: "Investors will consistently use Atlas if it transforms financial information into personalized intelligence." Every included feature must support this hypothesis; unrelated features are excluded.

## MVP Goals

Version 1.0 must let a user create an account, build a portfolio, build a watchlist, receive personalized Insights, receive a Morning Brief, ask AI questions about the market and portfolio, understand why important events matter, and return daily.

## Included Features

| Area | Priority | Included |
| --- | --- | --- |
| Authentication | [MUST] | Account registration, login, logout, password reset, email verification |
| Portfolio | [MUST] | Add holdings, edit holdings, delete holdings, portfolio performance, gain/loss, allocation overview |
| Watchlist | [MUST] | Add securities, remove securities, search securities, view watchlist |
| Dashboard | [MUST] | Portfolio summary, today's Morning Brief, top Insights, upcoming earnings, upcoming economic events, recent alerts |
| Morning Brief | [MUST] | Daily summary, portfolio update, top market events, highest-priority Insights, risks, opportunities, learning moment |
| Insights | [MUST] | Personalized, ranked, explainable, linked to sources, related holdings, confidence score |
| AI Assistant | [MUST] | Explain news, holdings, concepts, and market events; answer questions; reference portfolio |
| Decision Engine | [MUST] | Event ranking, priority scoring, portfolio relevance, watchlist relevance, Dashboard selection, Morning Brief selection |
| Search | [MUST] | Search companies, search tickers, open company page |
| Company Page | [MUST] | Price, company overview, recent news, related Insights, AI summary |

## Excluded from Version 1.0

Do not implement during MVP: broker integration, automatic trade import, trading, buy/sell recommendations, social features, copy trading, community discussions, paper trading, crypto wallets, desktop application, native mobile applications, advanced Learning Engine, Atlas Memory Graph, advanced Risk Engine, voice conversations, autonomous AI agents, plugin system, custom automations, options analytics, tax reporting.

## Success Criteria

The MVP succeeds if users understand the product within five minutes, return multiple times per week, read the Morning Brief, ask AI questions, receive value from personalized Insights, and report that Atlas reduces information overload.

## Deferred Engineering

The MVP prioritizes validation over optimization. Defer microservice decomposition, advanced caching, horizontal scaling, complex event processing, provider redundancy, high-availability deployment, enterprise monitoring, and performance optimization beyond MVP targets.

# 21. Technology Stack

## Purpose

This chapter defines approved technologies for Atlas Version 1.0. Choices prioritize developer productivity, maintainability, ecosystem maturity, and AI-assisted development compatibility. Future stack changes require documented architectural decisions.

| Area | Selection |
| --- | --- |
| Backend framework | Next.js Route Handlers initially |
| Language | TypeScript |
| ORM | Prisma |
| Validation | Zod |
| Authentication | Clerk or Supabase Auth |
| Background jobs | Trigger.dev or equivalent |
| API style | REST for MVP |
| Database | PostgreSQL hosted by Supabase |
| Primary LLM | OpenAI |
| Prompt management | Version controlled |
| Structured outputs | JSON where practical |
| Reasoning | Controlled by Atlas Intelligence Engine |
| Market data provider | To be selected during implementation |
| Market data requirements | US equities, company metadata, historical prices, market status, economic calendar, news access or paired provider |
| Hosting | Vercel |
| Repository | GitHub |
| CI/CD | GitHub Actions |

Development principles: type safety first, small pull requests, test critical logic, document architectural changes, never bypass the Atlas Intelligence Engine, maintain a clean Git history, and prefer readability over cleverness.

# 22. Development Roadmap

## Philosophy

Atlas shall be built incrementally. Each milestone should produce a working, testable application before the next milestone begins. No milestone should depend on unfinished future functionality.

| Milestone | Scope |
| --- | --- |
| 1 | Project initialization, GitHub repository, Next.js project, TypeScript configuration, Tailwind setup, shadcn/ui installation, Prisma configuration, Supabase connection, authentication, basic layout, deployment pipeline |
| 2 | Portfolio CRUD, Watchlist CRUD, database models, Dashboard widgets, portfolio calculations, company search |
| 3 | Market event ingestion, news ingestion, basic Decision Engine, Insight generation, Insight storage, Dashboard integration |
| 4 | Morning Brief generation, Dashboard integration, daily summaries, economic calendar, earnings integration |
| 5 | AI assistant, context-aware prompts, portfolio awareness, Insight explanations, educational responses |
| 6 | Bug fixing, performance improvements, UI polish, accessibility review, testing, private alpha release, feedback collection |

# 23. Implementation Guide

## Purpose

This chapter defines the engineering workflow for human developers and AI coding assistants. The SDS is the authoritative reference for Atlas Version 1.0. Implementation shall follow the SDS unless an approved ADR supersedes it.

## Guiding Principles

1. Build one milestone at a time.
2. Keep the application functional after every milestone.
3. Do not implement future milestones early.
4. Prefer simple, maintainable solutions over clever implementations.
5. Optimize for readability before optimization.
6. Every implementation decision should support the Atlas Doctrine.
7. The SDS is the source of truth.

## AI Coding Assistant Instructions

When implementing Atlas, read the SDS before work begins. Do not invent undocumented features, expand scope without approval, or bypass architectural boundaries. If requirements are ambiguous, request clarification. Complete one milestone before beginning another. Generate maintainable, production-quality code; avoid unnecessary abstraction and premature optimization; follow existing conventions.

## Engineering Standards

Every pull request should reference the milestone being implemented, remain focused on one objective, compile successfully, avoid unrelated refactoring, update documentation when architectural behavior changes, and leave the project working.

## Code Quality

Code should be readable, predictable, modular, type-safe, documented where necessary, and consistent with architecture. Business logic must stay isolated from presentation logic. Avoid magic numbers and unexplained constants. Functions should have a single responsibility when practical.

## Testing

Test critical business logic, including Decision Engine scoring, portfolio calculations, Insight generation, Morning Brief generation, and authentication flows. Add regression tests for resolved defects when practical. Avoid over-testing UI implementation details; focus tests on behavior.

## Git Workflow

Primary branch: `main`  
Development branch: `develop`  
Feature branches: `feature/<short-description>`  
Bug fix branches: `fix/<short-description>`  
Commit messages: concise and descriptive, such as `feat: add portfolio dashboard`, `fix: correct gain calculation`, `refactor: simplify insight ranking`, and `docs: update SDS`.

## Definition of Done

A task is complete when it satisfies the documented requirement, builds successfully, passes relevant tests, updates documentation when required, has no known critical defects, and integrates cleanly with the architecture.

## Engineering Philosophy

Atlas should remain understandable. Future contributors should understand a subsystem without reading the entire codebase. Every subsystem must have a clear responsibility. Complexity should appear only when justified by measurable value. The codebase should become easier to understand after each milestone.

## Closing Statement

Atlas is built on the belief that clarity creates confidence. Every architectural decision, feature, and engineering choice should help investors understand what matters. Atlas does not present more information for its own sake; it transforms information into understanding.

This document defines Version 1.0 of the Atlas Software Design Specification. Future evolution should build on these principles while remaining open to new evidence, user feedback, and better ideas.
