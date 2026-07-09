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

