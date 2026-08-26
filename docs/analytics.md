# Analytics

The homepage preserves TOPR’s existing Google Tag Manager container:
`GTM-MPX2FBZ`.

The container loads after the window load event and uses `requestIdleCallback`
when available to reduce competition with initial page rendering. The standard
no-script fallback is also present.

Do not replace this with the CDL website or Student Success Hub container.
Adding trackers or changing container ownership requires team approval. Validate
the container and expected page-view behavior in the production hostname before
cutover.
