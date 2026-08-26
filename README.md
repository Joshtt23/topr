# TOPR Homepage

Standalone homepage for the Teaching Online Pedagogical Repository (TOPR).
The app presents TOPR’s refreshed introduction, STARS search, popular topics,
and submission pathways. Article discovery, submissions, and publishing remain
on [STARS](https://stars.library.ucf.edu/topr/).

## Technology

- React and TypeScript
- Vite multi-file static build
- SCSS with UCF division-theme styling
- Vitest, Testing Library, ESLint, Stylelint, and Prettier

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The development server runs at <http://localhost:3006/>.

## Validation

```bash
npm run format
npm run lint
npm run lint:styles
npm run typecheck
npm run test
npm run build
npm run preview
```

With the production preview running, `npm run qa:viewports` checks the page at
375px, 768px, and 1280px for horizontal overflow, missing landmarks, duplicate
primary headings, and browser console errors. Set `CHROME_PATH` if Google Chrome
is installed outside its standard macOS location.

## Build and handoff

`npm run build` writes the deployable site to `dist/`. Hand off the complete
directory; hashed scripts and styles must remain beside `index.html`. Production
hosting and the `topr.online.ucf.edu` cutover require coordination with the CDL
web team. Do not replace the live WordPress homepage without review and a
rollback plan.

See [product and content scope](docs/overview.md),
[hosting guidance](docs/hosting.md), and [analytics](docs/analytics.md).
