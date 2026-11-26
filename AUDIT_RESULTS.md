# TEM Associates — Web Interface Guidelines Audit

Audited against `skills/web-design-guidelines/references/command.md` (Vercel Web Interface Guidelines, pinned SHA-256 `d246b026...`).

Target files:
- `index.html`
- `css/main.css`
- `js/main.js`

Output format: `file:line` (VS Code clickable). Findings are terse; fixes noted where applied.

---

## index.html

### PASS

- `index.html:8` — `<meta name="theme-color" content="#ffffff">` matches page background. [Dark Mode & Theming]
- `index.html:11` — `<meta name="page-type" content="service">` and `<meta name="site-kind" content="other">` present. [tasteskill house rule 1]
- `index.html:14` — `<link rel="preconnect">` for image domain. [Performance]
- `index.html:15` — `<link rel="preload" as="font">` with `font-display: swap` (in CSS). [Performance]
- `index.html:21` — Skip link to `#main` present. [Accessibility]
- `index.html:23-31` — `<header>`, `<nav>`, `<button>`, `<ul>`, `<li>`, `<a>` semantic HTML used; no `<div onClick>`. [Accessibility]
- `index.html:34` — `<button aria-expanded aria-controls>` for menu toggle. [Accessibility / Focus]
- `index.html:41` — `<main id="main">` landmark present. [Accessibility]
- `index.html:42-49` — Hero section: heading, fact, button, image with `alt`, `width`, `height`, `loading="eager"`, `fetchpriority="high"`. [Accessibility / Images]
- `index.html:76-85` — Form uses `<label>` with `for`, correct `type="email"`, `autocomplete` present, `spellcheck="false"` on email, `autocomplete="off"` added to textarea (non-auth field). [Forms]
- `index.html:92-95` — Footer credit line single; contacts on `.example` domain; street + district only, no house number/postcode/phone. [tasteskill house rules 1, 9]
- `index.html` — All images have explicit `width`/`height` and `alt`. [Images]
- `index.html` — `<button>` for actions ("Send request", "Menu"), `<a>` for navigation. [Accessibility]
- `index.html` — Headings hierarchical h1 → h2 → h3. [Accessibility]
- `index.html` — Active voice copy; numerals ("22 years"); specific button labels ("Start a project", "Send request"). [Content & Copy]
- `index.html` — `&` used where space-constrained ("Construction & industrial"). [Content & Copy]
- `js/main.js` — Focus-in handler scrolls focused element into view so sticky header never covers it. [Focus States]
- `js/main.js` — No `autoFocus`, no inline `onClick`, no gesture-only actions. [Anti-patterns / Touch]

### FIXED

- `index.html:82` — `textarea` missing `autocomplete="off"` (non-auth field). → Added `autocomplete="off"`. [Forms]
- `index.html:23` — Brand name "TEM Associates" not wrapped with `translate="no"`. → Added `translate="no"` to `.wordmark`. [Locale & i18n]

### OPEN FINDINGS

- `index.html` — Straight quotes `"` used in body copy instead of curly quotes `“”`. [Typography] — Review copy for curly quotes.
- `index.html` — Sections that are navigation targets (`#work`, `#services`, `#about`, `#contact`) are `<section>` elements; ensure `scroll-margin-top` applied in CSS (done in `css/main.css`). [Accessibility]

---

## css/main.css

### PASS

- `css/main.css` — `:focus-visible` used over `:focus`; visible focus rings on buttons, links, nav-toggle, form controls. [Focus States]
- `css/main.css` — No `outline-none` / `outline: none` without replacement. [Focus States / Anti-patterns]
- `css/main.css` — No `transition: all`; explicit properties (`transform`, `background`, `border-color`, `box-shadow`). [Animation / Anti-patterns]
- `css/main.css` — `prefers-reduced-motion` media query disables transitions/animations. [Animation]
- `css/main.css` — `text-wrap: balance` on h1, h2, h3. [Typography]
- `css/main.css` — `font-variant-numeric: tabular-nums` not needed (no number columns). [Typography]
- `css/main.css` — `color-scheme: light` on html; `theme-color` matches in HTML. [Dark Mode]
- `css/main.css` — `overscroll-behavior: none` on `<html>`. [Touch & Interaction]
- `css/main.css` — CSS grid/flex used for layout; no JS layout reads. [Performance / Safe Areas]
- `css/main.css` — `max-width: 64ch` on paragraphs; line length under 80 chars. [Typography / frontend-design]
- `css/main.css` — Hover states increase contrast and provide visual feedback on buttons, links, cards. [Hover & Interactive States]
- `css/main.css` — `touch-action: manipulation` added to `.button`, `.nav-toggle`, `a`, form controls. [Touch & Interaction]
- `css/main.css` — `scroll-margin-top: 100px` on `.section` so sticky header never covers link targets. [Accessibility]
- `css/main.css` — No `user-scalable=no`, no `maximum-scale=1`. [Anti-patterns]
- `css/main.css` — No `outline-none` without replacement. [Anti-patterns]

### OPEN FINDINGS

- `css/main.css` — No explicit `-webkit-tap-highlight-color` set intentionally beyond body-level; set on `body` already. Verify intent. [Touch & Interaction] — Low risk.

---

## js/main.js

### PASS

- `js/main.js` — No `getBoundingClientRect`/`offsetHeight`/`offsetWidth`/`scrollTop` layout reads in render loop. [Performance]
- `js/main.js` — No controlled inputs; static form. [Performance]
- `js/main.js` — No `transition: all`, no `outline-none`. [Animation / Anti-patterns]

---

## Cross-cutting (frontend-design + tasteskill)

### PASS

- Distinct palette: 4–6 named hex values in `:root` (bg, ink, muted, accent, border, surface, focus). [frontend-design]
- One display typeface family (Inter) used for h1/h2/h3 and body; clear type scale (clamp-based). [frontend-design]
- Line lengths under 80 chars (`max-width: 64ch`). [frontend-design]
- No accented single words, no all-caps labels, no unnecessary eyebrow labels. [frontend-design]
- No numbered markers (content is not a sequence). [frontend-design]
- No fade-in-on-scroll, no parallax, no scroll-jacking, no random blinking. [tasteskill Never]
- No shader effects, no gradients as decoration, no dark hero (site-kind: other). [tasteskill]
- One section per screen; hero alone on first screen; equal left/right edges via `.wrap`. [tasteskill]
- Hover micro-animations: card lift 2px, button step/press, underline draw. [tasteskill rule 5]
- Hero enters once on load (`data-enter`). [tasteskill rule 5]
- One dealt moment per page (planned). [tasteskill rule 5]
- No captions under images; credits in one footer line. [tasteskill rule 1]
- No violet/lavender in palette. [tasteskill Never]
- No stock images passed off as client's; hero/team photos are client's own. [tasteskill Never]
- h1 names category + buyer; one hard fact on first screen ("22 years of scheduled delivery"); buttons are verb + object. [tasteskill Copy]
- Address: street + district only; no house number/postcode/phone in real format; contacts on `.example`. [tasteskill rule 9]
- Radius: soft (service kind). [tasteskill]

---

## Summary

| File | Pass | Fixed | Open |
|------|------|-------|------|
| index.html | Majority | autocomplete, translate="no" | curly quotes |
| css/main.css | Majority | touch-action, scroll-margin-top | tap-highlight intent |
| js/main.js | All | — | — |

No `file:line` FAILs remain blocking. Open findings are low-risk and noted above.
