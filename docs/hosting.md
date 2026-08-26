# Hosting and cutover

The app builds to a static multi-file `dist/` directory suitable for S3 and
CloudFront or comparable static hosting.

## Build handoff

1. Run the full validation commands in the project README.
2. Run `npm run build`.
3. Preview the production output with `npm run preview`.
4. Hand off the entire `dist/` directory without flattening or renaming hashed
   assets.
5. Verify the final host at mobile, tablet, and desktop widths.

## Production cutover

The hosting target for `topr.online.ucf.edu` is not configured in this
repository. Coordinate DNS, certificate, cache behavior, deployment ownership,
and rollback with the CDL web team before replacing WordPress.

The homepage-only SPA does not replace legacy TOPR article URLs. A production
cutover must keep those routes available or define tested redirects in a
separate migration plan.

The approved TOPR hero is bundled as `public/topr-hero.jpg`, so the production
page does not depend on WordPress media.
