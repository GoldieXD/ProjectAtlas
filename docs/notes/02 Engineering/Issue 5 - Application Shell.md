# Issue 5 - Application Shell

## Summary

GitHub Issue #5 creates the responsive application shell for
[[00-Atlas-Home|Project Atlas]].
Its purpose is to give later MVP work a reusable presentation frame: shared
navigation, a common page header and main-content region, responsive design
tokens, accessible interaction patterns, loading feedback, and an honest
not-found experience.

The Code Reviewer returned **APPROVE** for the implementation supplied to the
documentation stage. The implementation is currently on
`feature/005-application-shell`; it still requires the remaining release audit
and human review before merge.

## Implemented Routes

The shell links to six valid placeholder routes:

| Route | Label | Current implemented state |
| --- | --- | --- |
| `/dashboard` | Dashboard | Placeholder only; portfolio summaries, [[Morning Brief]], and prioritized Insights are unavailable. |
| `/watchlist` | Watchlist | Placeholder only; management and market data are unavailable. |
| `/brief` | Morning Brief | Placeholder only; personalized daily summary generation is unavailable. |
| `/insights` | Insights | Placeholder only; personalized ranking and explanations are unavailable. |
| `/assistant` | Assistant | Placeholder only; AI questions and explanations are unavailable. |
| `/settings` | Settings | Placeholder only; account and preference controls are unavailable. |

These routes establish navigation destinations only. They do not implement the
product capabilities named by the pages.

## Shared Shell and Responsive Behavior

- Below 768px, the sidebar is hidden and the shared page header presents a
  labelled **Menu** disclosure button. The button toggles the primary navigation;
  choosing a route closes it, and route changes reset it to closed.
- Pressing Escape while the mobile menu is open closes it and restores keyboard
  focus to the Menu button.
- From 768px through 1023px, a sticky 208px sidebar supplies the shared primary
  navigation.
- At 1024px and wider, the sidebar expands to 248px.
- The content region can shrink and wrap long content to prevent horizontal
  overflow. Shell styling defines shared spacing, typography, border, surface,
  focus, and breakpoint behavior, including light and dark color-scheme values.
- Every routed placeholder uses the same header, title treatment, main landmark,
  and unavailable-state presentation.

## Accessibility and Honest States

The application route group includes a skip link to `#main-content`. Navigation
uses semantic `nav` landmarks with accessible names, the desktop container is an
appropriately labelled `aside`, and the active route exposes its semantic state
with `aria-current="page"`. Its visual state uses a 3px leading border and bold
weight as non-color cues, in addition to active colors. Navigation links and
the Menu button meet the shell's 44px target sizing and receive visible
keyboard focus.

Each route has a loading state that retains the page heading and exposes
`aria-busy`, a polite live region, and `role="status"`. The application-level
not-found page has a labelled main landmark, says that the requested page does
not exist, and offers a keyboard-focusable return to `/dashboard`. Placeholder
copy consistently says **Coming later** or identifies unavailable behavior, so
the UI does not imply that unfinished financial or AI functionality exists.

## Architecture and Major File Locations

Issue #5 changes only the SDS Presentation Layer described in Section 18. It adds no
core business logic and does not change the Application, Intelligence, Data,
Integration, or Infrastructure layers.

- `frontend/app/(application)/layout.tsx` owns the shared shell boundary and skip
  link; its route folders contain the six pages and their loading states.
- `frontend/components/application-sidebar.tsx`,
  `mobile-navigation.tsx`, `navigation-links.tsx`, and `application-page.tsx`
  provide reusable presentation components.
- `frontend/lib/application-pages.ts` is shared presentation configuration for
  route names, labels, ordering, and exact placeholder copy. It is not product
  or financial business logic.
- `frontend/app/globals.css` contains shell tokens, responsive widths, focus
  treatment, surfaces, spacing, and overflow behavior.
- `frontend/app/not-found.tsx` contains the honest application-level not-found
  experience.
- `frontend/app/api/health/route.ts` remains unchanged and available.

No production dependency was added for the shell.

## Requirement Traceability

- **NFR-007 Maintainability:** shared route configuration and reusable
  presentation components keep the shell modular and separate from business
  logic.
- **NFR-008 Accessibility:** the shell adds keyboard navigation, accessible
  names, semantic landmarks, and focus treatment. `aria-current` supplies the
  semantic active state, while the 3px leading border and bold font weight
  provide non-color visual cues. The shell also supports light/dark schemes.
- **NFR-011 Engineering Standards:** Issue #5 supplies the approved scope and
  this documentation synchronizes implementation status without changing the
  SDS.
- **SDS Section 18 Presentation Layer:** the shell supplies UI framing and navigation
  only; it does not move business logic into presentation code.

FR-003 Watchlists, FR-004 Market Intelligence, FR-005 Morning Brief, FR-006 AI
Assistant, FR-008 Insight Generation, and the SDS Dashboard capabilities are
related to route names but are **not fulfilled by this issue**. ADR-004 remains
unchanged: no Insight generation pipeline or Insight-consuming product behavior
was implemented.

## Verification Record

The approved implementation handoff records these commands as completed from
`frontend/`:

```bash
npm ci
npm run typecheck
npm run lint
npm run test
npm run build
```

Typecheck, lint, all **6 tests**, and the production build passed. The six tests
cover the preserved health response, shared navigation order, route-model
consistency, exact placeholder copy, and page semantics. The unit render test
specifically verifies the loading heading, `aria-busy`, polite live region, and
`role="status"` semantics.

Browser verification covered widths of **320px, 375px, 768px, and 1440px**,
including layout, absence of horizontal overflow, navigation, active state,
keyboard focus, mobile Menu toggling, Escape closing with focus restoration,
not-found presentation, and the `/api/health` response.
The health endpoint returned its expected successful Atlas payload.

Repository checks `git diff --check` and `git status --short` were also used to
inspect patch hygiene and the exact working-tree scope. The independent Code
Reviewer verdict was **APPROVE**.

## Deferred Scope and Known Limitations

Issue #5 explicitly defers:

- authentication;
- Supabase, Prisma, and all database work;
- market-data integration;
- portfolio behavior and calculations;
- watchlist behavior;
- [[Morning Brief]] generation;
- Insight generation, ranking, storage, and [[Atlas Decision Engine]] behavior;
- AI or Assistant functionality;
- settings functionality; and
- deployment.

Interactive behavior is browser-verified but is not covered by automated browser
or end-to-end tests. Existing unit tests verify static rendering and route
configuration; they do not automate Menu clicks, Escape focus restoration,
responsive layout, overflow, or full navigation in a browser.

## Recommended Human Action

Have the Release Auditor compare Issue #5, the approved implementation diff,
this documentation, and the recorded verification evidence. If the audit is
ready, a human should review the responsive shell and approve or reject the
merge. Any later product work should be authorized by its own active issue; this
note does not presume which issue comes next.

## Links

- [GitHub Issue #5](https://github.com/GoldieXD/ProjectAtlas/issues/5)
- [Project status](../../00-Atlas-Home.md)
- [Roadmap](../../roadmap.md)
- [[Morning Brief]]
- [[Atlas Decision Engine]]
