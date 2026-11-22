# PersonalSite — Agent Guide

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
- `npm run lint` — ESLint on all JS/JSX (no Prettier, no typecheck)

## Repo facts
- **Pure JSX**, no TypeScript. `@/` alias → `src/*` (configured in both Vite & jsconfig).
- **No tests** — no test framework is installed.
- **i18n**: i18next with 4 locales (`pt-BR` fallback, `en-US`, `es`, `cs`). Translations are JS module exports, not JSON files. Add new locale in `src/i18n/locales/` and register in `locales/index.js`.
- **Netlify SPA**: `public/_redirects` rewrites all paths to `/index.html`.
- **Google Analytics** GA4 ID `G-MB7WLDBX2T` hardcoded in `index.html`.
- **Custom font** "Anthropic Serif" (woff2) preloaded in `index.html`, defined in `index.css` via `@font-face`.
- **Medium RSS feed** fetched via `api.rss2json.com` on homepage load (axios).
- **`/app` route** redirects to `https://nullacademy.com.br/`.
- **Resumes** in `resumes/` dir (PDFs per locale), linked from the bio Card.

## Architecture
- Entry: `src/main.jsx` → `<BrowserRouter><App/></BrowserRouter>` (StrictMode)
- `App.jsx` renders `<Content/>` only (Footer is inside ContentHome)
- `Content.jsx` routes: `/` → `ContentHome`, `/app` → `Redirect`
- `ContentHome.jsx` is the full-page SPA (NavBar, hero, about, timeline, tech, projects, contacts, Footer)
- Loop animation: `src/components/v1/skiper62/useLoop.js` — simple `setInterval` hook consumed by `src/components/Loop.jsx` (framer-motion)
- No state management beyond React hooks; no Context API

## Other docs (likely stale)
- `ARCHITECTURE.md` and `COMPONENTS.md` exist but may be out of date with current code.
- Several docs about the LoopAnimationHook (`LoopAnimationHook.md`, `FINAL_LOOP_IMPLEMENTATION.md`, `IMPLEMENTED_LOOP.md`, `LOOPANIMATIONHOOK.md`) are historical/duplicative.
