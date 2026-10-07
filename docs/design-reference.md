# Design reference — matthieugivelet.com

Extracted directly from the live source on 2026-10-04: `/`, `/work`, `/archive`, `/about` (all four
routes serve the same HTML shell — it's a client-side-routed single page app), plus `/main.css`,
`/main.js`, `/data/project.json`, `/data/archive.json`.

**Stack confirmation:** plain HTML + one `main.css` + one `main.js` module. No framework, no GSAP,
no WebGL. Routing is hand-rolled (`pushState` + show/hide `<section>`s). Animations are 100% CSS
keyframes/transitions driven by JS toggling classes, plus `IntersectionObserver` for scroll-reveals
and `requestAnimationFrame` for the archive hover tracker and the about-page scroll scale. This
matches the brief's assumption — nothing here requires a JS animation library.

The screenshots named in the task (`docs/reference/about.png`, `docs/reference/work-archive.png`)
are not present in this repo, so this document is built entirely from the live HTML/CSS/JS/JSON,
which is the authoritative source anyway per the task's own "verify from the source" instruction.

## Fonts

```css
--font-primary: "GT Standard", sans-serif;
```

```css
@font-face {
    font-family: "GT Standard";
    src: url("../assets/font/GT-Standard-L-Standard-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
```

Only one weight is loaded (400, Regular) — headings are large but **not bold**, matching what the
brief observed. "GT Standard" is a commercial Grilli Type release — not Neue Montreal, and not
licensed for our use. **Needs a free substitute** — see the Font decision section below.

## Colors

```css
--color-background: #FFFFFF;
--color-text:        #000000;
--color-border:       #0000001A;   /* black @ 10% — hairlines */
--color-overlay:      #000000;
```

Other opacities used ad hoc in the CSS (not tokenized on the source site, but worth tokenizing in
ours):
- `#0000003B` — black @ 23%, page-transition overlay backdrop
- `#00000022` — black @ 13%, mobile burger-menu overlay
- `#00000061` — black @ 38%, archive row hover underline
- `.o-40` utility class — `opacity: 0.4`, used for the About page's secondary info (Based in,
  Credit, Social) — this is the "light grey for secondary info" the brief described; it's not a
  separate color, it's full black at 40% opacity over white.

Confirms the brief: **the UI is strictly monochrome** (pure white bg, pure black text, black-alpha
for borders/secondary text). All color in the live site comes from project photography.

## Type scale

Fully viewport-relative (`vw`), with a `clamp()`-based fallback on mobile — not a fixed rem scale:

```css
:root {
    --font-size-xxs: .8vw;   /* micro-labels: nav counts, index numbers "01", meta */
    --font-size-xs:  1vw;    /* small meta/labels */
    --font-size-s:   1.25vw; /* body default (set on <body>) */
    --font-size-m:   1.55vw; /* paragraph text, project titles, archive rows */
    --font-size-l:   2vw;    /* (defined, not directly used in the markup seen) */
}

@media (max-width: 768px) {
    :root {
        --font-size-xxs: 2vw;
        --font-size-xs:  3.3vw;
        --font-size-s:   clamp(.8rem, 3.7vw, 1.5rem);
        --font-size-m:   clamp(.8rem, 3.7vw, 1.5rem);
        --font-size-l:   5vw;
    }
}
```

Headings are sized individually, also in `vw`, uncapped on desktop:
| Element | Desktop | Mobile |
|---|---|---|
| Home name (giant letters) | height `11vw` | `14vw` |
| Home subtitle ("Front-end developer…") | `3.6vw` | `7vw` |
| "Selected works" (home section title) | `3.6vw` | `6vw` |
| Work/Archive hero title | `8vw` | `11–12vw` |
| About first paragraph | `2.5vw` | `5vw` |
| About block title (Design/Development/…) | `3vw` | `7vw` |
| Project detail page title | `4vw` | `10vw` |

None of these are capped with `clamp()` on desktop — on a very wide monitor the giant name would
keep growing. **Recommendation for our tokens:** reproduce the same ratios but wrap every one in
`clamp(min, Nvw, max)` so desktop doesn't blow up at ultra-wide widths — the brief already
anticipated this ("the type scale (including clamp/vw values)").

Line-height: `100%` on the giant name/hero titles, `110–130%` on body/paragraph text, `90%` on the
archive hero title.

## Grid & spacing

- Page gutters: `2.5vw` desktop, `4vw` mobile (header uses `1.7vw/1.8vw` and `4vw` respectively).
- Section-intro row (`.infos-box`): `display: grid; grid-template-columns: 1fr 1fr` — label left,
  paragraph+date right. This is the exact "[ Label ] / 01 + paragraph / date range" row the brief
  described, confirmed as a true 2-column (not 12-column) grid at this component level.
- Work grid (`.work-grid`, `.home-work-grid`): `grid-template-columns: 1fr 1fr; gap: 3px` — full
  bleed, 3px seam, not a true 0 gap.
- Archive rows: `grid-template-columns: 2fr 1fr 1fr` (Name gets double width vs. Detail/Date).
- About / project detail page: `grid-template-columns: 43vw 1fr` — photo/images column is a fixed
  `43vw`, text column flexes.
- Footer: `grid-template-columns: 1fr 1fr` (© year | the two footer boxes).
- No literal "12-column grid" exists in the CSS — the brief's "12-column grid" read is a visual
  impression of the whitespace rhythm, not a real `grid-template-columns: repeat(12, 1fr)`
  anywhere. **We should decide deliberately** whether to build a true 12-col grid (more flexible
  for our own layouts) or mirror these exact 2-column component grids. My recommendation: build a
  12-column grid as the page-level scaffold (nice for our own content needs) and place these
  components (section-intro, work grid, archive table, footer) as explicit column-span patterns
  within it — same visual rhythm, more reusable primitive.
- Border radius tokens: `--radius-xs: 3px` (nav pills, photo/image corners), `--radius-s: 4px`
  (project card images, archive hover image).
- Hairlines: `1px solid`, color `var(--color-border)` (`#0000001A`), animated in via `scaleX`.

## Signature details — markup patterns

- **Text-indent on first line of a paragraph**, via a wrapper + utility class, not CSS
  `text-indent` on the `<p>` directly in most cases — actually it *is* literally
  `text-indent: 4vw` (desktop) / `10vw` (mobile) via `.text-indent`, applied to the *first*
  `<span class="scroll-in">` line inside a multi-line paragraph built from stacked
  `<span class="text-box"><span class="scroll-in">...</span></span>` lines (one span pair per
  visual line — this is also how the line-by-line reveal animation works, see Animations below).
- **Index numbers ("01")**: two patterns —
  1. `.text-numb::before { content: '01'; position: absolute; left: -4vw; font-size: xxs }` —
     auto-generated, pinned to the first indented line of a section-intro paragraph.
  2. A literal `<span class="text-box about-numb"><span class="scroll-in">01</span></span>`
     sibling before the paragraph (About page design/development blocks, project detail numbers).
  We should pick the explicit-markup version (2) since ours vary (not always "01").
- **Bracketed micro-labels**: just literal text `[ Work ]`, `[ Archive ]`, `[ Open ]`, `[ Contact ]`,
  `[ Queensland ]`, `[ Navigation ]` — not a CSS-generated bracket, plain content.
- **Superscript nav counts**: `<span class="nav-link-count">(8)</span>` — parenthesized, not
  actually superscript (`vertical-align`/`font-size: xxs` only), sits next to the link text with
  `align-items: flex-start` on the parent so it sits slightly high. The brief's "Work⁽⁸⁾" read is
  visually accurate but the real implementation is parens + small size, no `<sup>`.
- **Hairline dividers**: `<div class="border">` — absolutely positioned 1px bar, animated in with
  `scaleX` (see Animations).
- **"© Name" as logo**: literal text `©MatthieuGivelet`, no `&copy;` entity, no space.
- **"→ Get in touch"**: not a `→` glyph — it's `<img src=".../arrow-right.svg">` + text, with
  `.cta-text { display:flex; gap }`. We'll rebuild this as an inline SVG arrow (per the "don't copy
  their SVGs" rule) + text, same flex pattern.

## Header

`position: sticky; top: 0`, `z-index: 1000`. Logo left, nav absolutely centered
(`left:50%; translateX(-50%)`) independent of logo/button width so it stays dead-center regardless
of how long "Get in touch" is, button right. Nav links, logo and button each sit on their own
`background: var(--color-background)` pill (`border-radius: 3px`) so they stay legible over
whatever scrolls underneath — relevant since this is monochrome-on-white and the hero sits right
under the header.

## Footer

Three pieces, `grid-template-columns: 1fr 1fr` then the right cell splits again
(`.footer-right { display:flex; justify-content: space-between }`):
1. `©2026`
2. `[ Open ]` + indented availability paragraph, last line ending in two separate inline links
   ("say" / "hello.") that together read as "say hello." underlined via `.text-link` (static
   underline, not a hover effect — different from `.link-line` used elsewhere).
3. `[ Contact ]` + `Email :` / address, `Whatsapp :` / number.

Confirms the brief's "three columns" read, with the caveat that it's visually 1 (year) : 2 (Open) :
2 (Contact) via a nested flex, not three equal grid tracks.

## Work page

- Centered hero title built from separate words as separate reveal spans: "Ideas" / [inline GIF
  image, excluded per our brief] / "made" / "real".
- `.work-grid { grid-template-columns: 1fr 1fr; gap: 3px }`, full-bleed project cover images,
  no rounding on the grid images themselves beyond `--radius-s`.
- Caption: `<span class="project-card-title-number">01</span> <span
  class="project-card-title">Title</span>` + an arrow icon that fades/slides in on card hover
  (`opacity 0→1`, `translateX(-.3vw)→0`). Image itself scales `1→1.02` on hover
  (`transition: transform 1s cubic-bezier(.21,.83,.27,1.01)`).
- Project order: data array reversed before render, so index `01` is always the most recent.

## Archive page

- `archive-list-header` + repeated `.archive-list-el`, `grid-template-columns: 2fr 1fr 1fr` for
  Name / Detail / Date — confirmed real 3-column text table, no table element, `<div>`-based.
- Row hover: tracked globally via `mousemove`/`scroll` + `document.elementFromPoint` (not per-row
  `mouseenter`, because the floating image needs to track the cursor position smoothly even while
  scrolling) batched through `requestAnimationFrame`. On hover: bottom-border `::after` fades in
  (`opacity 0→1`), and a fixed-position image box (`left: 18.7vw`, vertically centered on viewport)
  fades + grows in (`opacity 0→1`, `height 20vw→23vw`, image itself `scale(1.1)→scale(1)`), all on
  `.7s cubic-bezier(.18,.66,.18,1)`. On mobile this collapses to a 2-column image grid with no
  table and no hover tracking (`matchMedia` gate skips attaching the hover listener entirely on
  mobile).

## About page

- `grid-template-columns: 43vw 1fr`. Photo column is `position: sticky; top: 5.6vw`, so it stays
  pinned while the text column scrolls past it — not literally "overlapping the white page" as a
  z-index trick, it's a sticky column with normal document flow; the overlap look comes from the
  photo sitting flush against the header's padding with no card/frame around it.
- Photo has a **scroll-driven zoom-out**: plain `scroll` listener (not IntersectionObserver) maps
  page-scroll progress `0→1` to `transform: scale(1.3 → 1.0)`, read every scroll tick, no
  rAF-throttle on this one (the brief's animation-language ask should note this is the one
  continuous/scroll-linked effect; everything else is either a one-shot reveal or a discrete hover
  state).
- Two intro paragraphs, first line of each indented (`text-indent: 7vw` / `2vw` via
  `.alinea-1`/`.alinea-2` — i.e. two different indent depths depending on paragraph position, not
  one fixed value).
- Design / Development blocks: heading + explicit `01`/`02` index span + indented paragraph.
- Based in / Credit / Social blocks: heading + `opacity: .4` secondary text (this is the "light
  grey" from the brief — confirmed to be alpha, not a separate hex).
- Ends with the same `arrow-icon + "Get in touch"` CTA pattern as the footer/nav.

## Animation catalogue (trigger → technique → duration/easing → stagger)

All of these are CSS `transition`/`@keyframes` triggered by a JS class toggle; the only runtime
math is in the stagger-delay assignment, the archive hover tracker, and the about-photo scroll
scale.

| # | Name | Trigger | Technique | Duration / easing | Stagger |
|---|---|---|---|---|---|
| 1 | Loader exit | all critical `<img>`s decoded (`Promise.all` of `decode()`/load/error) | 3 synced class-driven CSS animations: counter slides up, black backdrop fades in, white "door" panel slides down from `translateY(100%)→0` | `1s cubic-bezier(.76,0,.47,.95)` (counter + block), `1s ease-in-out` (backdrop) | — (excluded per our brief anyway) |
| 2 | Nav items in | on every page load/nav | `.nav-in`: `translateY(105%)→0`, opacity implicit via overflow clip on parent | `1.2s cubic-bezier(.18,.66,.18,1)` | `0.05s` per item, via `--stagger-delay` custom property set in JS |
| 3 | Home giant-name letters in | home page load/nav-back | same `translateY(105%)→0` keyframe (`.home-title-letter`) | `1.2s cubic-bezier(.18,.66,.18,1)` | `0.05s` per letter, `0.2s` start delay |
| 4 | Generic text-line reveal (`.text-in`) | page load, used for hero subtitles/titles | `translateY(105%)→0` | `1.2s cubic-bezier(.18,.66,.18,1)` | `0.08s` per line, `0.4s` start delay on home, `0s` on work/archive |
| 5 | Scroll-triggered line reveal (`.scroll-in` inside `.scroll-in-group`) | `IntersectionObserver` (`threshold: 0`) on the group wrapper | same `translateY(105%)→0` keyframe, class `is-visible` added once, then `unobserve`d (reveal plays once, not on every scroll back into view) | `1.2s cubic-bezier(.18,.66,.18,1)` | `0.08–0.1s` per line depending on page (archive `.08`, project detail `.05`, default `.1`), delay computed from DOM index at intersection time |
| 6 | Hairline border draw-in (`.border`) | same `IntersectionObserver` | `scaleX(0)→1`, `transform-origin: left` | `1.7s cubic-bezier(.18,.66,.18,1)` | — |
| 7 | Project-card / project-image fade (`.project-card`, `.project-image`) | same `IntersectionObserver` | `opacity 0→1` | `1.7s cubic-bezier(.18,.66,.18,1)` | — |
| 8 | Generic rise-and-fade (`.el-in`) | applied at render time (not observer-gated in current markup) | `opacity 0→1` + `translateY(1rem→0)` (`7vw` on mobile) | `1.7s cubic-bezier(.18,.66,.18,1)` | — |
| 9 | Page transition (route change) | `click` on an internal `a.anchor`, or `popstate` | overlay added (`visibility: hidden→visible`), a black backdrop fades in while a white panel slides up to cover the viewport (`translateY(102%)→0`), content swapped underneath (`display` toggle) while covered, then overlay removed and reveal animations replayed | `1s cubic-bezier(.76,0,.47,.95)` (panel), `1s ease-in-out` (backdrop) | content swap happens at the `1s` mark via `setTimeout`, i.e. the cut is hidden entirely behind the panel |
| 10 | Home title entrance (per-page, extra layer on top of #3) | `setTimeout` chained after nav/load, home only | two boxes (first/last name halves) slide in from `translateX(±8.3vw)→0`; an image box between them scales+rotates in 3D (`scale(1.1) rotateY(90deg) opacity:0` → `scale(1) rotateY(0) opacity:1`) | `1.5s cubic-bezier(.66,0,.23,1)` (boxes), `1.5s cubic-bezier(.28,.54,.39,1)` + `opacity .9s ease .1s` (image box) | boxes at `700ms`, image box at `1100ms` after trigger |
| 11 | Home title inline image cycle | after entrance, home only | 4 images cross-fade/scale in an infinite loop (`opacity`, `scale 1.2→1→1(hold)→0`) | `6s cubic-bezier(0,.57,1,.44) infinite`, each image offset `1.5s` from the last | **excluded per our brief** (images inside the name) |
| 12 | Work-card hover | `:hover` | image `scale(1→1.02)`; arrow icon `opacity 0→1` + `translateX(-.3vw→0)` | `1s cubic-bezier(.21,.83,.27,1.01)` | — |
| 13 | Link underline sweep (`.link-line`) | `:hover` | pseudo-element bar `scaleX(0)→1`, `transform-origin` flips bottom-right→bottom-left so it sweeps left-to-right in; on mobile it's just always-on (`scaleX(1)` permanently, no hover) | `.7s cubic-bezier(.18,.83,.27,1)` | — |
| 14 | Archive row hover | `mousemove`/`scroll` (rAF-throttled) + `elementFromPoint` | row underline fades in, floating thumbnail fades/grows in (`opacity`, `height 20vw→23vw`), thumbnail image settles from `scale(1.1)→1` | `.7s cubic-bezier(.18,.66,.18,1)` | — (disabled entirely on touch/mobile via `matchMedia`) |
| 15 | About photo scroll scale | `scroll` (unthrottled) | `transform: scale(1.3 − 0.3·progress)` where `progress` = scroll fraction of the page | continuous, driven by scroll position, no transition/easing (direct 1:1 mapping) | — |
| 16 | Burger button entrance | mobile nav mount | `opacity 0→1` + `scale(.8→1)` | `1s cubic-bezier(.18,.66,.18,1)` | — |
| 17 | Burger menu open/close | tap | panel slides in `translateX(101%→0)`; overlay backdrop fades; menu-text swaps via internal `translateY(-100%)` flip; links + CTA reveal `opacity 0 / translateY(102%) → opacity 1 / translateY(0)` | `.7s` (panel/backdrop/text-flip) / `.9s` (overlay opacity) / `.8s` (links+CTA), all `cubic-bezier(.18,.66,.18,1)` | links staggered `0.2s + 0.08s×index`, CTA fixed at `.6s` |

**Reduced motion:** the live site has no `prefers-reduced-motion` handling at all — everything
plays regardless. The brief's accessibility rules for our build (§6 of the task) are stricter than
the reference and we should follow the brief, not the source: every animation above gated behind
`@media (prefers-reduced-motion: no-preference)`, with the reduced-motion fallback being the fully
revealed, static end-state.

## Exclusions already confirmed present on the source (to leave out per the brief)

- Loader with percentage counter (animation #1).
- Interactive/cycling images inside the home letters (animation #11), and the per-letter SVGs
  (`assets/letters/*.svg`) themselves.
- Inline image inside the Work page heading ("Ideas [gif] made real").

Our headings and the giant name will be pure typography, built from our own markup (stacked
`<span>` lines for the reveal animation, no per-letter SVGs).

## Open questions this raises for phase 1 sign-off

1. **Font**: GT Standard is commercial and unlicensed for us — see font options below.
2. **12-column grid vs. the source's literal 2-column component grids** — recommendation above
   (build a real 12-col scaffold, place these components as spans within it).
3. **Scroll-linked photo zoom (About page)** — straightforward with a scroll listener + CSS
   variable, no library needed; confirming this is in scope for "CSS + vanilla JS" animations.
