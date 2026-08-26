# Product and content scope

TOPR is an open, peer-reviewed collection of online and blended teaching
strategies. This repository contains only the public homepage SPA.

## Included

- UCF/TOPR branded page shell and responsive hero
- Refreshed TOPR introduction and annual review timeline
- STARS keyword search using TOPR context `14960553`
- Curated popular-topic searches
- Browse, author-guide, submission-guideline, and mailing-list pathways

## Not included

- Legacy TOPR article routes or redirects
- Article content from the TOPR STARS migration package
- Submission processing or user data collection
- A content management system

Homepage links and labels are maintained in `src/data/homepage.ts`. Existing
entries remain at their current destinations until a separately reviewed
migration or redirect plan is approved.

## Accessibility target

The page targets WCAG 2.2 Level AA. It uses semantic landmarks, one primary
heading, labeled search controls, visible keyboard focus, 44px minimum controls,
responsive reflow, and reduced-motion handling. Production review should include
keyboard navigation, 200% zoom, and assistive-technology spot checks.
