# Atlas Software Design Specification (SDS)

Version: 1.0.0

Status: Draft

Project Codename: Atlas

Owner:
Goldie

Technical Architect:
OpenAI ChatGPT

Created:
July 5, 2026

---

# Confidentiality

This document defines the architecture, product vision, and engineering standards for Project Atlas.

It serves as the primary source of truth for all design, development, testing, and future product decisions.

When implementation and documentation conflict, this document should be updated before code is changed.

All AI coding agents (Codex, Claude, ChatGPT, etc.) should use this document as the authoritative reference before implementing new features.

---

# Revision History

| Version | Date | Author | Notes |
|----------|------|--------|-------|
| 1.0.0 | July 5, 2026 | Goldie | Initial draft |

---

# Table of Contents

1. Executive Summary
2. Product Vision
3. Mission Statement
4. Product Philosophy
5. Product Principles
6. Success Metrics
7. Target Users
8. User Personas
9. User Stories
10. Functional Requirements
11. Non-Functional Requirements
12. Information Architecture
13. User Experience
14. AI Architecture
15. Backend Architecture
16. Database Architecture
17. External APIs
18. Security
19. Deployment
20. Engineering Standards
21. Product Roadmap
22. Future Ideas
23. Open Questions

# 1. Executive Summary

Atlas is an AI-powered Investment Operating System designed to help investors understand financial markets quickly, confidently, and efficiently.

Modern investors are overwhelmed by information. Every trading day produces thousands of news articles, analyst reports, earnings announcements, economic releases, social media discussions, and market movements.

Most investors spend significant time switching between multiple applications just to understand what changed.

Atlas eliminates this workflow.

Instead of functioning as another stock tracker or news feed, Atlas continuously gathers relevant market information, filters out noise, and produces personalized insights tailored to each user's portfolio and interests.

The primary objective is not to provide more information.

The objective is to provide understanding.

Atlas combines artificial intelligence, market data, financial news, portfolio tracking, and educational explanations into a single experience designed to answer one central question:

"What do I need to know right now?"

Atlas is designed to become the first application investors open every market day.

# 2. Problem Statement

Today's investing workflow is fragmented.

A typical investor may use several separate services throughout the day, including:

- Market data platforms
- Financial news websites
- Economic calendars
- Portfolio trackers
- Analyst reports
- Social media
- AI chatbots
- Email newsletters

Information is scattered across multiple platforms and presented without prioritization.

This creates several problems:

• Information overload

• Duplicate news

• Lack of personalization

• Time wasted gathering context

• Difficulty understanding why events matter

Most existing applications focus on delivering information.

Very few focus on delivering understanding.

Atlas exists to bridge that gap.

# 3. Product Vision

Atlas will become the AI operating system for investors.

Rather than replacing human decision-making, Atlas will augment it by organizing information, identifying important events, providing educational explanations, and reducing the amount of time required to stay informed.

Atlas is designed around one promise:

Know what matters.

# 4. Product Principles

## Principle 1 — Understanding Over Information

Atlas exists to help users understand markets, not simply consume more information.

Every feature should answer:
- What changed?
- Why does it matter?
- Does it affect me?

If a feature cannot answer at least one of these questions, it should not exist.

---

## Principle 2 — Personalization First

No two users should have the same experience.

Atlas should personalize content based on:
- Portfolio
- Watchlist
- Investment goals
- Risk preferences
- Experience level
- Previously viewed content

---

## Principle 3 — AI Is an Analyst, Not a Fortune Teller

Atlas explains facts, summarizes information, and provides context.

Atlas does not guarantee future performance or make unsupported claims.

Whenever uncertainty exists, Atlas communicates uncertainty clearly.

---

## Principle 4 — Time Is the Most Valuable Asset

Every feature should reduce the amount of time required to understand the market.

The goal is to save users time, not consume it.

---

## Principle 5 — Clarity Over Complexity

Financial information should be understandable by someone new to investing.

Whenever technical language is used, Atlas should explain it in plain English.

---

## Principle 6 — Trust Is Earned

Every AI-generated insight should be traceable back to reliable data.

Users should always know whether information is:
- Live market data
- News
- AI summary
- Opinion
- Educational content

## Priciple 7 - Atlas Doctrine

# Atlas Doctrine

Atlas is not a platform that attempts to answer every financial question.

Atlas exists to answer the right questions at the right time.

Every feature must support Atlas's North Star:

"Know what matters."

Features that increase complexity without increasing clarity should not be built.

## Principle 8 - Atlas is a Platform, not an Application

😂 Dude... this is becoming legit.

Like, if someone opened this repo right now and saw what we're building, they'd realize this isn't "another AI app." It's being designed like enterprise software.

And I think we just reached the point where we need to slow down and make one architectural decision that will affect the next five years.

CTO Decision #001
Atlas is a Platform, not an Application.

That sounds subtle, but it's huge.

If we build an application, every feature talks directly to every other feature.

Eventually it becomes spaghetti.

If we build a platform, every subsystem has a responsibility, and they communicate through well-defined interfaces.

That makes Atlas easier to scale and maintain.

# 5. Success Metrics

Atlas succeeds when users:

- Open the app every market morning.
- Spend less than five minutes understanding the market.
- Feel more confident about what is happening.
- Learn something new regularly.
- Continue using Atlas as part of their investing routine.

Key Product Metrics

Daily Active Users (DAU)

Weekly Retention

Morning Brief Completion Rate

Average Session Length

AI Conversation Count

User Satisfaction

Premium Conversion Rate

# 6. User Experience Philosophy

Atlas should feel like sitting next to an experienced financial analyst.

The interface should feel:

- Calm
- Fast
- Intelligent
- Premium
- Focused

Users should never feel overwhelmed.

The application should remove noise instead of adding to it.

The AI should communicate confidently but honestly.

When uncertainty exists, uncertainty should be communicated.

Every interaction should reduce cognitive load.

Atlas should never require users to visit multiple websites simply to understand what happened in the market.

# 7. Target Users

Atlas is designed for investors who value understanding over information.

The platform serves users across multiple experience levels while adapting its explanations, recommendations, and interface to match each user's needs.

Atlas is not intended exclusively for professional traders.

Instead, Atlas focuses on becoming the daily intelligence platform for modern investors.

Primary user groups include:

• Beginner Investors

• Long-Term Investors

• Swing Traders

• Active Traders

• Financial Learners

# Section 8 — User Personas

The experience should evolve as users become more experienced.

Name:
Alex

Age:
23

Experience:
Beginner

Portfolio:
$2,300

Goal:
Learn investing while growing long-term wealth.

Biggest Problems:

• Doesn't know which news matters.

• Doesn't understand financial terms.

• Gets overwhelmed.

Atlas Goal:

Teach Alex without making them feel stupid.

Name:
Sarah

Age:
36

Experience:
Intermediate

Portfolio:
$84,000

Goal:
Stay informed in under ten minutes.

Biggest Problems:

• Too many news sources.

• Doesn't have time.

• Misses important events.

Atlas Goal:

Replace five apps with one.

Name:
David

Age:
48

Experience:
Advanced

Portfolio:
$650,000

Goal:
Receive intelligent summaries.

Problems:

• Information overload.

• Duplicate articles.

• Wants concise analysis.

Atlas Goal:

Act like an AI research analyst.

# 9. Atlas Decision Engine (ADE)

The Atlas Decision Engine is the intelligence layer responsible for prioritizing every piece of information before it reaches the user.

Its purpose is to reduce information overload by filtering, ranking, and contextualizing incoming data.

No user-facing information bypasses the Decision Engine.

Every event receives a relevance score.

The relevance score determines:

• Visibility

• Priority

• Notification eligibility

• AI inclusion

• Morning Brief inclusion

• Alert urgency

# 10.1 Decision Engine

Purpose:
    Determines Importance

# 10.2 Context Engine

Information without context is just about useless

Example:

News:

Apple announces stock buyback.

Okay...

Cool.

Atlas instead says:

Apple announced a $90B stock buyback.

This generally reduces shares outstanding and is often viewed as a sign management believes the company is undervalued.

Apple has announced buybacks several times over the past decade.

THAT'S CONTEXT.

# 10.3 Personalization Engine

This decides:
Should the user even see this?

It checks the users:
    Portfolio

    Watchlist

    Investment Goals

    Experience

    Risk Profile

    Reading History

    Notification Settings

Every person gets a different Atlas

# 10.4 Learning Engine

Another feature that can be unique to Atlas

Imagine Atlas noticing:

You ask

"What is CPI?"

Three weeks later:

"What is PPI?"

Then

"What are Treasury yields?"

Atlas says...

I noticed you've been learning about macroeconomics.

Would you like a 5-minute lesson on how interest rates affect stocks?

🤯

The app grows with the user.

# 10.5 Risk Engine

This one is HUGE.

It isn't trying to predict the future.

It's watching for conditions.

Examples:

Portfolio too concentrated.

Five earnings this week.

Fed meeting tomorrow.

High volatility expected.

Dividend cut announced.

One sector dominates the portfolio.

Instead of saying:

SELL!

It says:

Your portfolio has become 52% technology stocks.

That's higher than your typical allocation.

That's educational and transparent.

# 11. Atlas Cognitive Architecture

Atlas is designed around a cognitive architecture rather than a traditional application architecture.

Instead of exposing raw APIs directly to users, Atlas processes all incoming information through a series of specialized intelligence systems.

Each subsystem has one clearly defined responsibility.

This separation allows Atlas to remain modular, explainable, and scalable as the platform evolves.

The cognitive architecture is composed of the following core systems:

• Atlas Intelligence Engine (AIE)

• Atlas Decision Engine (ADE)

• Atlas Context Engine (ACE)

• Atlas Personalization Engine (APE)

• Atlas Risk Engine (ARE)

• Atlas Learning Engine (ALE)

• Atlas Memory Graph (AMG)

Each subsystem contributes to the final user experience but remains independently replaceable and continuously improvable.

# 11.1. Atlas Subsystem Contracts

I want every subsystem to have a contract

Not code.

A contract.

Meaning...

It has ONE responsibility.

Atlas Decision Engine (ADE):
    Mission

    Determine what deserves the user's attention.

    Responsibilities

    - Score every incoming event.

    - Filter low-value information.

    - Rank important events.

    - Determine notification priority.

    - Select Morning Brief content.

    Inputs

    News

    Market Data

    Economic Events

    Portfolio

    Watchlist

    Outputs

    Priority Score

    Visibility Level

    Alert Eligibility


Atlas Context Engine (ACE)

Mission

Explain why information matters.

Responsibilities

- Add historical context.

- Explain financial terminology.

- Compare similar historical events.

- Translate complex financial language.

Inputs

Events selected by ADE

Outputs

Educational explanations

Historical comparisons

Simple-language summaries

Atlas Personalization Engine (APE)

Mission

Determine relevance for each individual investor.

Responsibilities

Understand:

Portfolio

Goals

Investment Style

Experience

Notification Preferences

Reading Habits

Learning Progress

The same event may receive different importance scores for different users.

Atlas Risk Engine (ARE)

Mission

Continuously evaluate portfolio risk and upcoming events.

Responsibilities

Portfolio Concentration

Sector Exposure

Upcoming Earnings

Economic Risk

Volatility

Dividend Changes

Unusual Market Conditions

Outputs

Risk Level

Warnings

Educational Explanations

Suggested Monitoring

Atlas Learning Engine (ALE)

Mission

Help users become better investors over time.

Responsibilities

Track concepts learned.

Recommend educational content.

Detect knowledge gaps.

Adjust explanation difficulty.

Measure learning progress.

Atlas Memory Graph (AMG)

Mission

Maintain long-term understanding of each investor.

The Memory Graph stores persistent preferences rather than temporary conversation history.

Examples

Preferred sectors

Investment goals

Learning progress

Favorite companies

Ignored topics

Preferred explanation style

Frequently asked questions

Notification behavior

Dashboard usage

Risk tolerance

Morning Brief completion history

Atlas Reasoning Engine (ARgE)

Purpose:

Take all the outputs from the other engines and decide how to communicate them.

Think of it as the editor-in-chief.

Example:

ADE says:

This is important.

ACE says:

Here's why.

APE says:

User is a beginner.

ALE says:

User doesn't understand inflation.

ARgE writes:

Tomorrow's CPI report could make the market more volatile. Since you've been learning about inflation recently, we've included a short explanation of why CPI matters.

# 12. Investor Lifecycle

Atlas is designed to evolve alongside each investor.

The platform should continuously adapt its behavior, explanations, recommendations, and interface as the user's investing knowledge and habits mature.

Atlas is not intended to remain static.

It should become increasingly personalized over time.

The investor lifecycle consists of five stages.

Explorer

Builder

Confident Investor

Advanced Investor

Expert

Stage 1 -- Explorer

😂 Bro, I'm loving this too.

I want to point something out because I think we're accidentally doing something really important.

We're not inventing features.

We're inventing a language.

Companies like Apple, Stripe, and Linear all have an internal vocabulary. Engineers don't say:

"The thing that figures out what's important."

They say:

"ADE."

That makes everything cleaner and more consistent.

I want Atlas to have that same feeling.

I think we should write the next chapter before UI.
Chapter 12 — Investor Lifecycle

This is something that a LOT of startups don't think through.

They're obsessed with the first launch.

I want to obsess over Year 3.

# 12. Investor Lifecycle

Atlas is designed to evolve alongside each investor.

The platform should continuously adapt its behavior, explanations, recommendations, and interface as the user's investing knowledge and habits mature.

Atlas is not intended to remain static.

It should become increasingly personalized over time.

The investor lifecycle consists of five stages.

Explorer

Builder

Confident Investor

Advanced Investor

Expert


Stage 1 — Explorer

Imagine somebody who's never invested.

They download Atlas because they're curious.

Atlas should NEVER dump charts on them.

Instead...

Welcome.

Let's build your investing profile.

What are you hoping to accomplish?

○ Learn investing

○ Build retirement savings

○ Generate passive income

○ Active trading

○ Still figuring it out

Then...

How much investing experience do you have?

○ None

○ Beginner

○ Intermediate

○ Advanced

Then... 

How much time do you want to spend each day?

○ 5 minutes

○ 15 minutes

○ 30+ minutes

Then...
Instead of asking for twenty settings. 
Atlas simply says:
Great, Well adapt as we learn more about you.

Stage 2 — Builder

Now they own a few stocks.

Atlas changes.

Morning Brief becomes more personalized.

Educational tips become more targeted.

The user begins asking AI questions.

The Memory Graph starts growing.

Stage 3 — Confident Investor

Atlas notices:

The user no longer asks:

"What is a stock?"

Instead they ask:

"Explain implied volatility."

So...

Atlas quietly increases the sophistication of explanations.

WITHOUT making a setting.

That is HUGE.

Stage 4 — Advanced Investor

Now Atlas becomes less educational.

More analytical.

Less hand-holding.

More signal.

Stage 5 — Expert

This is my favorite.

Atlas becomes...

Minimal.

Experts don't want essays.

They want:

Three risks.

Three opportunities.

Done.

The AI respects their time.

# 13. Domain Model 

Everything in Atlas should revolve around a few core concepts.

I don't want 150 different objects.

I want around 15-20 core entities.

Let's start.

User

Represents an individual investor using Atlas.

Responsibilities

- Authentication
- Preferences
- Subscription
- Settings
- Personal profile

Owns

Portfolio

Watchlists

Memory Graph

Learning Profile

Notifications

Insights


------

Portfolio

Represents a user's investment accounts.

Contains

Holdings

Performance

Allocation

Risk Metrics

Cash Balance

Historical Performance

----

Holding

Represents ownership of a single financial asset.

Examples

AAPL

NVDA

SPY

Contains

Ticker

Quantity

Average Cost

Market Value

Gain/Loss

Sector

Asset Type

----

Market Event

Represents something that happened in the financial markets.

Examples

Earnings

Fed Meeting

Stock Upgrade

Dividend

SEC Filing

Economic Report

Breaking News

Merger

Product Launch

----

Insight

A personalized explanation generated from one or more Market Events.

Contains

Title

Summary

Importance Score

Confidence Level

Sources

Related Holdings

Generated Time

Explanation

----

Alert

A notification delivered to a user because an Insight exceeded a priority threshold.

Examples

Portfolio Earnings Tomorrow

Fed Speech

Dividend Increase

High Volatility

Breaking News


----

Morning Brief

A daily collection of the highest priority Insights.

Contains

Top Events

Portfolio Summary

Market Summary

Risks

Opportunities

Learning Moment


-----

Learning Record

Tracks concepts understood by the investor.

Examples

Market Structure

Inflation

Valuation

Dividends

ETF Basics

Options

Risk Management

Confidence Score

Last Reviewed

Recommended Next Lesson

----

Memory Node

Represents persistent investor knowledge.

Examples

Preferred Stocks

Favorite Sectors

Ignored Topics

Risk Preferences

Reading Habits

Learning Style

Notification Behavior


----

Flow 

Market Event
      │
      ▼
Atlas Intelligence Engine
      │
      ▼
Insight
      │
      ▼
Morning Brief
      │
      ▼
Alert
      │
      ▼
User

# 14. Core User Flows


A user flow defines the sequence of actions a user takes to accomplish a goal within Atlas.

Every feature implemented in Atlas should support one or more documented user flows.

User flows ensure that the platform is designed around user outcomes rather than isolated features.

The MVP consists of six primary user flows.


- FLOW 1 - First-Time Onboarding

Download Atlas

↓

Create Account

↓

Verify Email

↓

Welcome

↓

Select Investing Experience

↓

Select Goals

↓

(Optional) Import Portfolio

↓

Choose Stocks to Watch

↓

Generate Initial Profile

↓

Generate First Morning Brief

↓

Dashboard

Purpose: Get the user to value as quick as possible. Dont ask unneccesary questions. 

Flow 2 - Daily Morning Experience

Open Atlas

↓

Dashboard Loads

↓

Portfolio Summary

↓

Morning Brief

↓

Top 3 Insights

↓

Optional AI Questions

↓

Close App

This flow should take under five minutes.

Flow 3 - Research Flow

User Searches

↓

Company Page

↓

Latest Insights

↓

Relevant News

↓

AI Explanation

↓

Related Holdings

↓

Return

The goal isnt endless research.
The goal is fast understanding.

Flow 4 - Alert Flow

Market Event

↓

ADE Scores Event

↓

Insight Created

↓

Alert Threshold Met

↓

Notification Sent

↓

User Opens Atlas

↓

AI Provides Context

Notice: The notification doesn't explain everything, its an invitation back into Atlas.

Flow 5 - Learning FLow

User Doesn't Understand Something

↓

Ask AI

↓

Receive Explanation

↓

Learning Engine Updates Profile

↓

Future Explanations Improve

Every question makes Atlas better.

Flow 6 - Portfolio Update

User Adds Holding

↓

Portfolio Updated

↓

AIE Recalculates

↓

ADE Re-ranks Priorities

↓

Morning Brief Changes

↓

Alerts Updated

------


This is important because it shows the portfloio isnt just stored- it actively changes what Atlas surfaces.

One observation

Look at every flow.

They all have one thing in common:

The user reaches value quickly.

No endless setup.

No complicated configuration.

That's intentional.

# 15. Functional Requirements

## Purpose

This chapter defines the required capabilities of Atlas.

A functional requirement describes something the system must do.

Each requirement receives a priority level.

Priority Levels

[MUST]
Required for MVP.

[SHOULD]
Important but not required for first release.

[COULD]
Potential future enhancement.

[VISION]
Long-term direction.

## FR-001 User Authentication

Priority:
[MUST]

Description

Atlas shall allow users to create and manage secure accounts.

Requirements

• Register with email/password

• Login

• Logout

• Password reset

• Email verification

Future

Support OAuth providers (Google, Apple, Microsoft).

## FR-002 Portfolio Management

Priority:
[MUST]

Description

Users shall be able to build and manage investment portfolios.

Requirements

• Add holdings

• Edit holdings

• Remove holdings

• Track quantity

• Track average purchase price

• View portfolio performance

• View asset allocation

• View unrealized gains/losses

Future

Broker integrations for automatic synchronization.

## FR-003 Watchlists

Priority:
[MUST]

Requirements

• Create watchlists

• Add securities

• Remove securities

• Reorder securities

• Search securities

• View watchlist performance

Future

Multiple watchlists

Shared watchlists


## FR-004 Market Intelligence

Priority:
[MUST]

Description

Atlas shall transform market data into personalized intelligence.

Requirements

• Collect market events

• Process events through the Atlas Intelligence Engine

• Generate personalized Insights

• Rank Insights

• Store Insights

• Display Insights on the Dashboard

The user shall never receive unfiltered raw event streams by default.

## FR-005 Morning Brief

Priority:
[MUST]

Description

Atlas shall generate one personalized Morning Brief per trading day.

The Morning Brief shall include:

• Portfolio Summary

• Top Market Events

• Highest Priority Insights

• Upcoming Economic Events

• Upcoming Earnings

• Daily Learning Moment

• Risks

• Opportunities

The Morning Brief should require less than five minutes to consume.

## FR-006 AI Assistant

Priority:
[MUST]

Requirements

The AI assistant shall:

Answer questions

Explain financial concepts

Explain market events

Explain portfolio changes

Reference user holdings

Provide educational responses

The AI shall distinguish facts from opinions.

The AI shall never present speculation as certainty.

The AI shall explain uncertainty whenever appropriate.

## FR-007 Atlas Decision Engine

Priority:
[MUST]

Requirements

Every incoming Market Event shall receive an Importance Score.

The score shall consider:

Portfolio relevance

Watchlist relevance

Market impact

Recency

Event category

User preferences

Educational value

The Decision Engine shall determine:

Dashboard visibility

Morning Brief inclusion

Notification eligibility

Insight priority

## FR-008 Insight Generation

Priority:
[MUST]

Requirements

Atlas shall generate personalized Insights from Market Events.

Each Insight shall include:

Title

Summary

Explanation

Importance Score

Confidence Score

Supporting Sources

Related Holdings

Timestamp

Category

## FR-009 Notifications

Priority:
[SHOULD]

Requirements

Atlas may notify users when:

High-priority Insights are generated

Portfolio holdings experience significant events

Economic events are approaching

Risk levels increase

Notifications shall be configurable.

Users may disable any notification category.


## FR-010 Learning System

Priority:
[SHOULD]

Requirements

Atlas shall adapt educational content based on user knowledge.

Atlas shall track:

Concepts learned

Frequently asked questions

Knowledge progression

Preferred explanation complexity

## Out of Scope (MVP)

The following capabilities are intentionally excluded from Version 1.0:

Broker trading

Automated investing

AI-generated buy/sell recommendations

Social networking

Copy trading

Options execution

Crypto wallets

Tax reporting

Algorithmic trading

Portfolio rebalancing automation

Voice assistant

Native desktop application

Native mobile application


# 16. Non-Functional Requirements

## Purpose

Non-functional requirements define how Atlas should operate rather than what it should do.

These requirements establish quality standards for performance, reliability, scalability, security, maintainability, accessibility, and observability.

Unless otherwise specified, all non-functional requirements apply to every subsystem within Atlas.

## NFR-001 Performance

Priority:
[MUST]

Requirements

The application shall prioritize responsiveness.

Dashboard initial load time should target less than 2 seconds under normal network conditions.

Page transitions should feel instantaneous whenever possible.

The Morning Brief should render within 3 seconds after all required data has been collected.

Long-running operations shall display visible progress indicators.

The application shall avoid unnecessary network requests.

Expensive computations should execute on backend services rather than user devices whenever practical.

## NFR-002 Reliability

Priority:
[MUST]

Requirements

Atlas shall continue operating when non-critical services fail.

Failures in one subsystem shall not crash unrelated functionality.

Temporary failures from external APIs shall be retried when appropriate.

If data cannot be retrieved, Atlas shall communicate this clearly to the user.

Atlas shall fail gracefully.

The application shall never display raw exception messages to end users.

## NFR-003 Security

Priority:
[MUST]

Requirements

Passwords shall never be stored in plaintext.

Sensitive credentials shall never exist within frontend source code.

All secrets shall be stored using secure environment variables.

All communication shall occur over encrypted HTTPS connections.

Authentication shall require secure session management.

Atlas shall follow the principle of least privilege.

Only authorized users shall access portfolio data.


## NFR-004 Privacy

Priority:
[MUST]

Requirements

Users own their data.

Atlas shall collect only information necessary to provide requested functionality.

AI conversations containing portfolio information shall be handled securely.

Users shall be able to delete their accounts.

Users shall be able to delete their stored portfolio information.

Atlas shall clearly distinguish between user-generated information and AI-generated content.

## NFR-005 Explainability

Priority:
[MUST]

Requirements

Atlas shall explain why important Insights appear.

Whenever practical, Insights shall reference supporting evidence.

The AI shall distinguish:

Facts

Inference

Opinion

Educational explanation

Whenever confidence is limited, Atlas shall communicate uncertainty.

Users should understand why Atlas reached a conclusion.


## NFR-006 Scalability

Priority:
[SHOULD]

Requirements

Atlas should support increasing numbers of users without requiring architectural redesign.

Subsystems should remain modular.

External services should be replaceable.

Business logic should remain independent of UI implementation.

The system should support horizontal scaling where practical.


## NFR-007 Maintainability

Priority:
[MUST]

Requirements

Code shall remain modular.

Business logic shall remain separated from presentation logic.

Functions should have a single responsibility.

Components should remain reusable.

Documentation shall remain synchronized with implementation.

Technical debt shall be tracked rather than ignored.

## NFR-008 Accessibility

Priority:
[SHOULD]

Requirements

Atlas should remain usable by individuals using keyboard navigation.

Interactive elements should include accessible labels.

Color shall never be the sole indicator of important information.

Readable typography shall be prioritized.

Dark mode and light mode should both remain fully supported.

## NFR-009 Observability

Priority:
[SHOULD]

Requirements

Atlas should log important backend events.

Errors should include sufficient diagnostic information for developers.

Performance metrics should be measurable.

Critical failures should be detectable.

Monitoring should distinguish between application errors and external service failures.

## NFR-010 AI Behavior

Priority:
[MUST]

Requirements

The AI shall never fabricate market data.

The AI shall distinguish facts from generated explanations.

The AI shall acknowledge uncertainty when appropriate.

The AI shall avoid presenting speculation as certainty.

The AI shall never imply access to information it does not possess.

The AI shall provide educational explanations whenever beneficial.

## NFR-011 Engineering Standards

Priority:
[MUST]

Requirements

Every feature shall be traceable to a documented functional requirement.

Every pull request should reference the relevant requirement IDs.

Code reviews should verify architectural consistency.

Documentation shall be updated before or alongside implementation.

Breaking architectural changes shall require corresponding SDS updates.

# 17. System Context

## Purpose

The System Context defines the external actors and systems that interact with Atlas.

It establishes the boundaries of the platform and identifies the flow of information between Atlas and third-party services.

Atlas should remain loosely coupled to external providers whenever practical.

External integrations should be replaceable without requiring significant changes to the core platform.

## External Actors

Atlas interacts with the following external actors:

• Investors (Users)

• Market Data Providers

• Financial News Providers

• AI Providers

• Authentication Providers

• Email Providers

• Notification Providers

• Analytics Providers

Each external actor communicates with Atlas through clearly defined interfaces.


## The User: Investor

Role

Primary user of the platform.

Responsibilities

Create an account.

Manage portfolio.

Read Insights.

Interact with Atlas AI.

Receive Morning Briefs.

Manage preferences.

Atlas Responsibilities

Provide personalized intelligence.

Protect user data.

Deliver understandable financial information.

Adapt over time.

## Market Data Provider

Responsibilities

Provide:

Security prices

Historical prices

Company metadata

Market status

Trading calendars

Volume

Index information

Requirements

Atlas shall remain provider-agnostic.

Changing providers should require minimal architectural changes.

Market data shall never be tightly coupled to business logic.

## Financial News Provider

Responsibilities

Provide:

Breaking news

Company news

Economic news

Press releases

News metadata

Requirements

News shall enter Atlas only as raw events.

News presentation shall always pass through the Atlas Intelligence Engine.

Duplicate stories should be consolidated whenever possible.


## AI Provider

Responsibilities

Generate natural language.

Summarize information.

Answer questions.

Explain financial concepts.

Generate educational content.

Requirements

Atlas shall own all orchestration logic.

The AI provider should never become the primary source of business logic.

Atlas shall remain capable of replacing AI providers with minimal architectural impact.


## Authentication Provider

Responsibilities

User registration.

Identity verification.

Secure authentication.

Session management.

Requirements

Authentication should remain isolated from business logic.

Portfolio services shall trust authenticated identities rather than perform authentication themselves.

## Notification Provider

Responsibilities

Deliver:

Push notifications

Email notifications

System alerts

Requirements

Notification providers shall deliver messages only.

Notification providers shall never determine notification priority.

Priority decisions belong exclusively to the Atlas Decision Engine.

## Email Provider

Responsibilities

Verification emails.

Password reset.

Weekly summaries.

Account notifications.

Requirements

Email templates shall remain version controlled.

Business logic shall never exist inside email templates.

## Analytics Provider

Responsibilities

Collect anonymous usage metrics.

Monitor application health.

Track feature adoption.

Requirements

Analytics shall never expose personally identifiable investment information.

Privacy preferences shall be respected.

## System Context Diagram

                           Investor
                               │
                               │
                               ▼
                    ┌────────────────────┐
                    │       Atlas        │
                    │                    │
                    │  Intelligence      │
                    │      Engine        │
                    └────────────────────┘
        ┌──────────────┼───────────────┼──────────────┐
        ▼              ▼               ▼              ▼
 Market Data      Financial News    AI Provider   Auth Provider
 Provider           Provider

        ▼              ▼               ▼              ▼
        └──────────────┴───────────────┴──────────────┘

                 Email Provider
                 Notification Provider
                 Analytics Provider

 
Notice something?
Every arrow goes into the Atlas Intelligence Engine.
Nothing talks directly to anything else.
Thats Intentional.
The AI never calls the market data provider.
The notification system never decides whats important. 
The frontend never talks directly to the new provider.
EVERYTHING FLOWS THROUGH ATLAS.
Thats a clean architecture.



# 18. High-Level System Architecture

## Purpose

This chapter defines the major architectural layers of Atlas and the responsibilities assigned to each layer.

Atlas follows a layered architecture designed to maximize maintainability, scalability, modularity, and testability.

Each layer has clearly defined responsibilities and communicates only through well-defined interfaces.

Business logic shall remain centralized within the Atlas platform.

Presentation logic shall remain isolated from business logic.

External providers shall never become tightly coupled to the internal architecture.

## Architectural Philosophy

Atlas is built around the principle of separation of concerns.

Each architectural layer owns a single area of responsibility.

Layers should remain loosely coupled and highly cohesive.

Communication between layers should occur through clearly defined interfaces.

No layer should depend on implementation details of another layer.

The architecture should allow individual layers to evolve independently whenever practical.

## Layer 1 — Presentation Layer

Purpose

Provide the user interface through which investors interact with Atlas.

Responsibilities

Display dashboards.

Display Morning Briefs.

Display Insights.

Display portfolio information.

Collect user input.

Display AI conversations.

Display notifications.

The Presentation Layer contains no business logic.

It requests information from the Application Layer and renders it for the user.

## Layer 2 — Application Layer

Purpose

Coordinate application workflows.

Responsibilities

Receive user requests.

Validate input.

Coordinate services.

Manage user sessions.

Invoke Intelligence Engine workflows.

Return responses to the Presentation Layer.

The Application Layer coordinates behavior but should avoid implementing complex business rules directly.

## Layer 3 — Intelligence Layer

Purpose

Transform financial information into personalized investor intelligence.

Components

Atlas Intelligence Engine (AIE)

Atlas Decision Engine (ADE)

Atlas Context Engine (ACE)

Atlas Personalization Engine (APE)

Atlas Risk Engine (ARE)

Atlas Learning Engine (ALE)

Atlas Memory Graph (AMG)

Atlas Reasoning Engine (ARgE)

Responsibilities

Rank events.

Generate Insights.

Provide explanations.

Evaluate portfolio relevance.

Generate Morning Briefs.

Prioritize alerts.

Support AI conversations.

This layer contains the core business logic of Atlas.

## Layer 4 — Data Layer

Purpose

Store and retrieve persistent application data.

Examples:

Users

Portfolios

Holdings

Insights

Morning Briefs

Learning Records

Memory Graph

Notifications

Preferences

Responsibilities

Persist application state.

Support querying.

Maintain historical records.

Enforce data integrity.

## Layer 5 — Integration Layer

Purpose

Communicate with external systems.

Responsibilities

Retrieve market data.

Retrieve financial news.

Communicate with AI providers.

Send emails.

Deliver notifications.

Authenticate users.

Collect analytics.

Normalize external data.

Shield internal systems from provider-specific implementations.

## Layer 6 — Infrastructure Layer

Purpose

Provide the operational environment required to run Atlas.

Responsibilities

Hosting.

Deployment.

Monitoring.

Logging.

Scaling.

Secrets management.

Backups.

Disaster recovery.

Infrastructure concerns shall remain isolated from business logic.

THE ENTIRE ARCHITECTURE

                    ┌───────────────────────┐
                    │     Presentation      │
                    │        Layer          │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │      Application      │
                    │        Layer          │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │     Intelligence      │
                    │        Layer          │
                    └───────────┬───────────┘
                                │
              ┌─────────────────┴─────────────────┐
              ▼                                   ▼
      ┌──────────────┐                  ┌────────────────┐
      │  Data Layer  │                  │ Integration    │
      │              │                  │     Layer      │
      └──────┬───────┘                  └────────┬───────┘
             │                                   │
             └──────────────┬────────────────────┘
                            ▼
                ┌───────────────────────┐
                │ Infrastructure Layer  │
                └───────────────────────┘

DATA FLOW:
Market Event

↓

Integration Layer

↓

Application Layer

↓

Atlas Intelligence Engine

↓

Decision Engine

↓

Context Engine

↓

Reasoning Engine

↓

Insight

↓

Database

↓

Presentation Layer

↓

Investor

## Architectural Constraints

The following constraints are mandatory.

Presentation components shall never directly query external providers.

Business logic shall never execute inside UI components.

The Intelligence Layer shall remain independent of UI technologies.

External providers shall be replaceable.

Subsystems shall communicate through defined interfaces.

Persistent data shall be stored only within the Data Layer.

AI providers shall never become the source of truth for application state.

All user-facing intelligence shall originate from the Atlas Intelligence Engine.


# 19. Architectural Decision Records (ADR)

## Purpose

Architectural Decision Records (ADRs) document significant technical decisions made during the design and evolution of Atlas.

Each ADR captures:

- The context surrounding the decision.
- The decision itself.
- The rationale behind the decision.
- The consequences of adopting the decision.

ADRs provide a historical record that helps maintain architectural consistency as Atlas evolves.

All significant architectural changes should be documented with a new ADR rather than modifying existing records.


# ADR-001

Title

Atlas shall use a layered architecture.

Status

Accepted

Context

Atlas will grow to include multiple intelligence systems, external integrations, and user-facing applications.

Without architectural boundaries, business logic could become tightly coupled to presentation and infrastructure concerns.

Decision

Atlas shall separate responsibilities into the following layers:

Presentation Layer

Application Layer

Intelligence Layer

Data Layer

Integration Layer

Infrastructure Layer

Rationale

Layered architectures improve maintainability, scalability, testing, and long-term flexibility.

Consequences

Clear separation of responsibilities.

Improved testability.

Simplified future expansion.

Slight increase in architectural complexity.

# ADR-002

Title

All user-facing intelligence shall originate from the Atlas Intelligence Engine.

Status

Accepted

Context

Traditional financial applications expose raw information directly to users.

Atlas seeks to reduce information overload through intelligent filtering and explanation.

Decision

Every Market Event shall pass through the Atlas Intelligence Engine before reaching users.

No user-facing intelligence bypasses the AIE.

Rationale

Creates a consistent user experience.

Enables personalization.

Supports explainability.

Reduces information overload.

Consequences

Additional processing requirements.

Higher implementation complexity.

Significantly greater long-term product differentiation.

# ADR-003

Title

External providers shall remain replaceable.

Status

Accepted

Context

Atlas depends on external services for AI, market data, authentication, and notifications.

Provider APIs change over time.

Business requirements may also change.

Decision

All external providers shall communicate through adapter interfaces.

Core business logic shall never depend directly upon provider implementations.

Rationale

Reduces vendor lock-in.

Simplifies migrations.

Improves maintainability.

Consequences

Additional abstraction layers.

Lower long-term migration costs.

# ADR-004

Title

Insights are the primary product output.

Status

Accepted

Context

Financial applications often present raw data, charts, or news articles.

Atlas exists to transform information into understanding.

Decision

The primary output of Atlas shall be personalized Insights.

Morning Briefs, dashboards, alerts, and AI conversations shall consume Insights rather than raw market events.

Rationale

Separates facts from interpretation.

Creates architectural consistency.

Improves personalization.

Supports future AI enhancements.

Consequences

Requires an Insight generation pipeline.

Simplifies downstream user experiences.

# ADR-005

Title

Artificial Intelligence is an implementation capability rather than the product itself.

Status

Accepted

Context

Large language models are evolving rapidly.

Atlas should remain valuable regardless of future AI providers or models.

Decision

Business logic shall remain within Atlas.

AI providers shall generate language and reasoning only when requested by Atlas.

Rationale

Protects long-term independence.

Improves explainability.

Reduces vendor dependency.

Consequences

Greater engineering effort.

Improved architectural stability.

# ADR-006

Title

Atlas prioritizes explainability over opaque outputs.

Status

Accepted

Context

Users are more likely to trust recommendations they can understand.

Decision

Whenever practical, Atlas shall explain:

Why an Insight exists.

Why it matters.

Why it was shown.

What evidence supports it.

Rationale

Builds trust.

Supports learning.

Encourages informed decision-making.

Consequences

Additional implementation effort.

Greater user confidence.

# ADR-007

Title

Users retain ownership and control of their data.

Status

Accepted

Context

Atlas processes sensitive financial information.

Decision

Users shall be able to export and delete their personal data.

Atlas shall minimize unnecessary data collection.

Rationale

Supports user trust.

Improves privacy.

Aligns with modern data protection principles.

Consequences

Additional engineering effort for export and deletion workflows.

Improved transparency and user confidence.

# ADR-008

Title

Documentation is treated as a core product asset.

Status

Accepted

Context

Atlas is expected to evolve over many years with contributions from multiple engineers.

Decision

The Software Design Specification (SDS) shall remain the authoritative reference for architecture and system behavior.

Architectural changes shall be documented before or alongside implementation.

Rationale

Reduces onboarding time.

Improves consistency.

Preserves architectural intent.

Consequences

Additional documentation effort.

Higher long-term development velocity.

Lower architectural drift.

## ADR Principles

Architectural Decision Records are immutable historical documents.

Existing ADRs should not be rewritten to reflect newer decisions.

If an architectural decision changes, a new ADR shall be created that supersedes the previous record while preserving its history.

Every ADR should include:

- Unique identifier
- Title
- Status
- Context
- Decision
- Rationale
- Consequences


# 20. Minimum Viable Product (MVP) Scope

## Purpose

This chapter defines the complete scope of Atlas Version 1.0.

The MVP exists to validate the core hypothesis:

"Investors will consistently use Atlas if it transforms financial information into personalized intelligence."

Every feature included in the MVP must directly support this hypothesis.

Features that do not contribute to validating the hypothesis are intentionally excluded.

## MVP Goals

Version 1.0 must allow a user to:

• Create an account.

• Build a portfolio.

• Build a watchlist.

• Receive personalized Insights.

• Receive a Morning Brief.

• Ask AI questions about the market and their portfolio.

• Understand why important events matter.

• Return to Atlas daily.

## Included Features

### Authentication
[MUST]

✓ Account Registration

✓ Login

✓ Logout

✓ Password Reset

✓ Email Verification

---

### Portfolio
[MUST]

✓ Add Holdings

✓ Edit Holdings

✓ Delete Holdings

✓ Portfolio Performance

✓ Gain/Loss

✓ Allocation Overview

---

### Watchlist
[MUST]

✓ Add Securities

✓ Remove Securities

✓ Search Securities

✓ View Watchlist

---

### Dashboard
[MUST]

✓ Portfolio Summary

✓ Today's Morning Brief

✓ Top Insights

✓ Upcoming Earnings

✓ Upcoming Economic Events

✓ Recent Alerts

---

### Morning Brief
[MUST]

✓ Daily Summary

✓ Portfolio Update

✓ Top Market Events

✓ Highest Priority Insights

✓ Risks

✓ Opportunities

✓ Learning Moment

---

### Insights
[MUST]

✓ Personalized

✓ Ranked

✓ Explainable

✓ Linked to Sources

✓ Related Holdings

✓ Confidence Score

---

### AI Assistant
[MUST]

✓ Explain News

✓ Explain Holdings

✓ Explain Concepts

✓ Explain Market Events

✓ Answer Questions

✓ Reference Portfolio

---

### Decision Engine
[MUST]

✓ Event Ranking

✓ Priority Scoring

✓ Portfolio Relevance

✓ Watchlist Relevance

✓ Dashboard Selection

✓ Morning Brief Selection

---

### Search
[MUST]

✓ Search Companies

✓ Search Tickers

✓ Open Company Page

---

### Company Page
[MUST]

✓ Price

✓ Company Overview

✓ Recent News

✓ Related Insights

✓ AI Summary

## Excluded from Version 1.0

The following features shall not be implemented during MVP development.

• Broker Integration

• Automatic Trade Import

• Trading

• Buy/Sell Recommendations

• Social Features

• Copy Trading

• Community Discussions

• Paper Trading

• Crypto Wallets

• Desktop Application

• Native Mobile Applications

• Advanced Learning Engine

• Atlas Memory Graph

• Advanced Risk Engine

• Voice Conversations

• Autonomous AI Agents

• Plugin System

• Custom Automations

• Options Analytics

• Tax Reporting

## Success Criteria

The MVP is considered successful if users:

Understand the product within five minutes.

Return multiple times per week.

Read the Morning Brief.

Ask AI questions.

Receive value from personalized Insights.

Report that Atlas helps reduce information overload.

## Deferred Engineering

The MVP prioritizes validation over optimization.

The following concerns may be addressed after validation:

Microservice decomposition

Advanced caching

Horizontal scaling

Complex event processing

Provider redundancy

High-availability deployment

Enterprise monitoring

Performance optimization beyond MVP targets

# 21. Technology Stack

## Purpose

This chapter defines the approved technologies for Atlas Version 1.0.

Technology selections prioritize developer productivity, maintainability, ecosystem maturity, and AI-assisted development compatibility.

The stack may evolve in future versions through documented architectural decisions.

Backend

Framework

Next.js Route Handlers (initial)

Language

TypeScript

ORM

Prisma

Validation

Zod

Authentication

Clerk or Supabase Auth

Background Jobs

Trigger.dev (or equivalent)

API Style

REST for MVP

Database

PostgreSQL

Hosted by Supabase

AI

Primary LLM

OpenAI

Prompt Management

Version Controlled

Structured Outputs

JSON where practical

Reasoning

Controlled by Atlas Intelligence Engine

Market Data

Primary Provider

(To be selected during implementation)

Requirements

US equities

Company metadata

Historical prices

Market status

Economic calendar

News access (or paired provider)

Hosting

Vercel

Database

Supabase

Repository

GitHub

CI/CD

GitHub Actions

Development Principles

Type safety first.

Small pull requests.

Test critical logic.

Document architectural changes.

Never bypass the Atlas Intelligence Engine.

Maintain a clean Git history.

Prefer readability over cleverness.

# 22. Development Roadmap

## Philosophy

Atlas shall be built incrementally.

Each milestone should produce a working application.

Every milestone should be testable before beginning the next.

No milestone should depend on unfinished future functionality.

Milestone 1

Project initialization

GitHub repository

Next.js project

TypeScript configuration

Tailwind setup

shadcn/ui installation

Prisma configuration

Supabase connection

Authentication

Basic layout

Deployment pipeline

Milestone 2

Portfolio CRUD

Watchlist CRUD

Database models

Dashboard widgets

Portfolio calculations

Company search

Milestone 3

Market event ingestion

News ingestion

Basic Decision Engine

Insight generation

Insight storage

Dashboard integration

Milestone 4

Morning Brief generation

Dashboard integration

Daily summaries

Economic calendar

Earnings integration

Milestone 5

AI assistant

Context-aware prompts

Portfolio awareness

Insight explanations

Educational responses

Milestone 6

Bug fixing

Performance improvements

UI polish

Accessibility review

Testing

Private alpha release

Feedback collection

# 23. Implementation Guide

## Purpose

This chapter defines the engineering workflow for implementing Atlas.

It establishes the standards, expectations, and development process for both human developers and AI coding assistants.

The Software Design Specification (SDS) is the authoritative reference for Atlas Version 1.0.

Implementation shall follow the SDS unless an approved Architectural Decision Record (ADR) supersedes it.

## Guiding Principles

1. Build one milestone at a time.

2. Keep the application functional after every milestone.

3. Do not implement future milestones early.

4. Prefer simple, maintainable solutions over clever implementations.

5. Optimize for readability before optimization.

6. Every implementation decision should support the Atlas Doctrine.

7. The SDS is the source of truth.

## AI Coding Assistant Instructions

When implementing Atlas:

Read the SDS before beginning work.

Do not invent features that are not documented.

Do not expand project scope without approval.

If requirements are ambiguous, request clarification rather than making assumptions.

Complete one milestone before beginning another.

Generate maintainable, production-quality code.

Avoid unnecessary abstraction.

Avoid premature optimization.

Follow existing project conventions.

Preserve architectural boundaries defined within the SDS.

## Engineering Standards

Every pull request should:

Reference the milestone being implemented.

Remain focused on a single objective.

Compile successfully.

Avoid unrelated refactoring.

Update documentation when architectural behavior changes.

Leave the project in a working state.

## Code Quality

Code should be:

Readable

Predictable

Modular

Type-safe

Well documented where necessary

Consistent with existing architecture

Business logic should remain isolated from presentation logic.

Magic numbers and unexplained constants should be avoided.

Functions should have a single responsibility whenever practical.

## Testing

Critical business logic shall be tested.

Examples include:

Decision Engine scoring

Portfolio calculations

Insight generation

Morning Brief generation

Authentication flows

Regression tests should be added for resolved defects when practical.

UI implementation details should not be over-tested.

Tests should focus on behavior rather than implementation.

## Git Workflow

Primary Branch

main

Development Branch

develop

Feature Branch Naming

feature/<short-description>

Bug Fix Branch Naming

fix/<short-description>

Commit Messages

Use concise, descriptive commit messages.

Examples:

feat: add portfolio dashboard

fix: correct gain calculation

refactor: simplify insight ranking

docs: update SDS

## Definition of Done

A task is complete when:

The implementation satisfies the documented requirement.

The application builds successfully.

Relevant tests pass.

Documentation is updated if required.

No known critical defects remain.

The feature integrates cleanly with the existing architecture.

## Engineering Philosophy

Atlas should remain understandable.

Future contributors should be able to understand a subsystem without reading the entire codebase.

Every subsystem should have a clearly defined responsibility.

Complexity should emerge only when justified by measurable value.

The codebase should be easier to understand after every milestone rather than more difficult.

## Closing Statement

Atlas is built on the belief that clarity creates confidence.

Every architectural decision, feature, and engineering choice should contribute to helping investors understand what matters.

The goal of Atlas is not to present more information.

The goal of Atlas is to transform information into understanding.

This document defines Version 1.0 of the Atlas Software Design Specification.

Future evolution of the platform should build upon these principles while remaining open to new evidence, user feedback, and better ideas.


