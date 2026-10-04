# Portfolio — Enzo Rabossi

Personal portfolio of a junior full stack developer based in Copenhagen, Denmark. Audience:
recruiters and hiring developers. Content lives in English.

Visual design is a from-scratch rebuild inspired by matthieugivelet.com — see
`docs/design-reference.md` for the full extraction (fonts, colors, type scale, grid, spacing,
every animation with trigger/technique/duration/easing). No code, assets, or copy from that site
were copied; everything here is our own implementation of the same design language.

The previous static HTML/CSS/JS version of this site lives in `legacy/` until the rebuild is
approved and complete, then gets deleted.

## Stack

Matched to `enzorabossi`'s bootcamp final project (Distrito Cerveza ecommerce frontend,
`Project Break III`), with substitutions noted below.

- **React 19 + Vite**, JavaScript only (no TypeScript).
- **React Router v7** via `createBrowserRouter` + `<RouterProvider>` (data router, nested routes
  through a `Layout`/`Outlet`) — *not* a plain `<BrowserRouter>`.
- **CSS Modules** (`Component.module.css`) per component, plus one global `src/styles/index.css`
  (reset/base) and `src/styles/tokens.css` (custom properties) — *not* plain unscoped global CSS.
- **ESLint only**, flat config (`eslint.config.js`): `@eslint/js` recommended +
  `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`. **No Prettier, no `.editorconfig`**
  — the reference project has neither.
- **Vitest + React Testing Library + jsdom.** The reference frontend has no tests, but its sibling
  backend (`Project Break II`) uses Jest; Vitest's API is Jest-compatible and is the natural fit
  with Vite, so it stays consistent with that convention. No snapshot tests.
- **No Redux, no Axios.** The ecommerce needs them for cart/auth/API state; this portfolio has no
  shared mutable state tree and no backend beyond a single `fetch` call for the contact form —
  plain React state/hooks cover everything (tabs, form, nav menu, scroll reveals).
- **GitHub Pages via GitHub Actions** (the reference deploys to Netlify; this was an explicit,
  separate decision, not inherited from the reference). Workflow: `npm ci` → lint → test → build
  with `VITE_BASE` → `upload-pages-artifact` → `deploy-pages`.

## Conventions

- English for code, comments, commit messages and site copy. Conventional commits
  (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `style:`, `refactor:`).
- Named exports only — `export function ComponentName()`, never `export default` — matching the
  reference project.
- One folder per component: `src/components/ComponentName/ComponentName.jsx` +
  `ComponentName.module.css`. Same pattern for pages under `src/pages/`.
- Icons are inline SVG, written by us — never copied from the reference site's assets.
- All site content (copy, project data, timeline, skills, cheatsheets, resources) lives in
  `src/data/` as plain JS data files. Don't change copy unless asked. Don't invent features,
  copy, or project claims — ask first.
- No new dependencies without asking first.
- One commit per build step (see the sprint plan in the working conversation / PR description),
  lint + test + build must pass before moving to the next step.

## Design system

Full detail, including the complete animation catalogue, is in `docs/design-reference.md`. Summary:

**Fonts:** General Sans (Fontshare) as the default pick — a free neo-grotesk substitute for the
reference site's commercial "GT Standard". Self-hosted or loaded with `font-display: swap` and a
real fallback stack (`sans-serif`). Single weight (400, Regular) — headings are large but never
bold.

**Colors:** monochrome UI — white background, black text, all color comes from project images.

```css
--color-bg: #FFFFFF;
--color-text: #000000;
--color-text-secondary: #6B6B6B; /* AA-safe vs. the reference's raw 40%-opacity black */
--color-border: rgba(0,0,0,.1);
--color-border-strong: rgba(0,0,0,.38);
```

**Type scale** (clamped, with accessible minimums — micro-labels never below 12px, body never
below 16px):

```css
--font-size-micro: clamp(12px, .8vw, 14px);   /* nav counts, index numbers, meta */
--font-size-xs:    clamp(13px, 1vw, 16px);
--font-size-body:  clamp(16px, 1.25vw, 18px); /* body default */
--font-size-m:     clamp(17px, 1.55vw, 22px); /* paragraphs, project titles, archive rows */
--font-size-l:     clamp(20px, 2vw, 28px);
--font-size-heading-sm: clamp(28px, 3vw, 48px);   /* About block titles (Frontend/Backend/...) */
--font-size-heading-md: clamp(36px, 3.6vw, 64px); /* "Selected work" section titles */
--font-size-heading-lg: clamp(48px, 8vw, 140px);  /* Work/Archive/Notes hero titles */
--font-size-display:    clamp(56px, 11vw, 180px); /* giant "Enzo Rabossi" on Home */
```

**Grid & spacing:** page gutter `clamp(16px, 2.5vw, 48px)`. A real 12-column grid as the page
scaffold (the reference uses purpose-built 2-column grids per component, not a literal 12-col
grid — we build the more reusable primitive and place components as spans within it). Border
radius `3px` (pills, photo corners) / `4px` (image cards). Hairlines: `1px solid var(--color-border)`.

**Signature details to reproduce** (see design-reference.md for exact markup patterns):
first-line text-indent on paragraphs, explicit index numbers ("01", "02") as sibling markup (not
CSS-generated), bracketed micro-labels (`[ Work ]`, `[ Open ]`, etc. — literal text), nav link
counts as small parenthesized numbers next to the label, hairline dividers that draw in on
scroll, "©Enzo Rabossi" as the logo, inline-SVG arrow + text for every CTA ("Get in touch" etc.).

**Animation language:** CSS transitions/keyframes + vanilla JS only (`IntersectionObserver` for
scroll-reveals, a throttled `scroll`/`rAF` listener for the archive hover tracker and the About
photo scroll-scale). No animation library. Primary easings:
`cubic-bezier(.18,.66,.18,1)` (reveals, hairlines, hover sweeps — "settle" feel),
`cubic-bezier(.76,0,.47,.95)` (page-transition panel — "snap" feel),
`cubic-bezier(.21,.83,.27,1.01)` (hover scale/arrow — quick ease-out).
Reveal durations ~1.2–1.7s, hovers ~0.7–1s, staggers 0.05–0.1s per item. Every animation is gated
behind `@media (prefers-reduced-motion: no-preference)`; the reduced-motion state is the fully
revealed, static end-result, not a different animation.

**Explicitly excluded** (per the task brief, confirmed present on the reference and left out):
the percentage-counter loading screen, interactive/cycling images inside the home name or inside
headings, per-letter SVGs. The giant name and all headings are pure typography — a real `h1`
(or appropriate heading) holding the accessible text; if letters/words are split into spans for
the reveal animation, that visual layer is `aria-hidden` and the heading keeps the real text node.

**Theme:** light only. No dark/light toggle (the legacy site had one via `localStorage`; it's
intentionally dropped to match the reference's monochrome-only system).

## Accessibility rules (non-negotiable, even where the reference differs)

- Contrast AA or better everywhere (hence the `#6B6B6B` secondary-text color above, not the
  reference's lower-contrast grey).
- Minimum text size: 12px for micro-labels/meta, 16px for body copy — never let a `vw`/`clamp()`
  value go below that.
- Bracketed micro-labels and index numbers that duplicate a heading's meaning are `aria-hidden`.
  Nav link counts get a real `aria-label` (e.g. `aria-label="Work, 4 projects"`), not just a
  visual `(4)`.
- Skip link to `#main`. Visible `:focus-visible` styles everywhere, including grid images and
  table rows.
- Semantic landmarks throughout. Archive/notes-index tables use a real `<table>` (reference uses
  styled `<div>`s — we deliberately don't copy that part).
- External links use `rel="noopener noreferrer"`.
- Fully usable by keyboard; nothing depends on hover only (the archive row's floating hover image
  is decorative — `aria-hidden`, `pointer-events: none`, disabled on touch — the row's information
  itself must be reachable and readable without it).

## Content notes

- The craft-beer background (co-founding and running Distrito Cerveza in Argentina) is a
  **narrative thread in the copy only** — never a visual theme (no beer colors, no beer iconography).
- A `null` repo/demo link means **no link** — never render a `href="#"` placeholder.
- Don't add a project without a repo or demo unless explicitly asked to.
- Projects need an `image` field; use a neutral typographic placeholder (project title + index
  number on a flat tint, 3:2 ratio — see design-reference.md) until a real screenshot is provided.
