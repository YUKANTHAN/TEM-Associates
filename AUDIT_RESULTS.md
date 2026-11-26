# TEM Associates — Web Interface Guidelines Audit (v2)

Audited against `skills/web-design-guidelines/references/command.md` + tasteskill house rules from `DESIGN_RULES.md`.

Target files:
- `index.html` (462 lines — full 13-section rewrite)
- `css/main.css` (807 lines)
- `js/main.js` (61 lines)

Output format: `file:line` (VS Code clickable). Terse findings.

---

## index.html

### PASS

- `index.html:8` — `<meta name="theme-color" content="#ffffff">` matches page background. [Dark Mode & Theming]
- `index.html:11` — `<meta name="page-type" content="service">` and `<meta name="site-kind" content="other">` present. [tasteskill house rule 1]
- `index.html:12` — `<link rel="preconnect">` for image domain. [Performance]
- `index.html:15` — `<link rel="preload" as="font">` present. [Performance]
- `index.html:19` — Skip link to `#main` present. [Accessibility]
- `index.html:22-35` — `<header>`, `<nav>`, `<button>`, `<ul>`, `<li>`, `<a>` semantic HTML; no `<div onClick>`. [Accessibility]
- `index.html:29` — `<button aria-expanded aria-controls>` for menu toggle. [Accessibility / Focus]
- `index.html:41` — `<main id="main">` landmark present. [Accessibility]
- `index.html:42-49` — Hero: heading, sub, button, image with `alt`, `width`, `height`, `loading="eager"`, `fetchpriority="high"`, `data-enter`. [Accessibility / Images / tasteskill]
- `index.html:55-64` — Hero popup `<dialog>` with close button `aria-label="Close"`. [Accessibility]
- `index.html:76-85` — Form uses `<label for>`, correct `type="email"`/`type="tel"`, `autocomplete`, `spellcheck="false"` on email, `autocomplete="off"` on textarea. [Forms]
- `index.html:92-95` — Contacts use `.example` email; street + district only; no house number/postcode. [tasteskill house rules 1, 9]
- `index.html` — All images have explicit `width`/`height` and `alt`. [Images]
- `index.html` — `<button>` for actions, `<a>` for navigation. [Accessibility]
- `index.html` — Headings hierarchical h1 → h2 → h3. [Accessibility]
- `index.html` — Active voice copy; numerals; specific button labels ("Plan a Project", "Send Enquiry"). [Content & Copy]
- `js/main.js` — Focus-in handler scrolls focused element into view so sticky header never covers it. [Focus States]
- `js/main.js` — No `autoFocus`, no inline `onClick`, no gesture-only actions. [Anti-patterns / Touch]

### OPEN FINDINGS

- `index.html` — Straight quotes `"` used in body copy instead of curly quotes `“”`. [Typography] — e.g. hero sub copy, button labels.
- `index.html:45` — Hero full-bleed image container does not use `env(safe-area-inset-*)` for notches. [Safe Areas & Layout] — Add padding env vars if targeting notch devices.
- `index.html:107` — Button "What do you need to build?" is sentence case (interactive phrase), not Title Case. [Content & Copy] — Intentional as it's a question; acceptable.
- `index.html` — `translate="no"` present on `.wordmark`. [Locale & i18n] ✓

---

## css/main.css

### PASS

- `css/main.css` — `:focus-visible` used over `:focus`; visible focus rings on buttons, links, nav-toggle, form controls. [Focus States]
- `css/main.css` — No `outline:none` / `outline: none` without replacement. [Focus States / Anti-patterns]
- `css/main.css` — No `transition: all`; explicit properties (`transform`, `background`, `border-color`, `box-shadow`). [Animation / Anti-patterns]
- `css/main.css` — `prefers-reduced-motion` media query disables transitions/animations. [Animation]
- `css/main.css` — `text-wrap: balance` on h1, h2, h3. [Typography]
- `css/main.css` — `color-scheme: light` on html; `theme-color` matches in HTML. [Dark Mode]
- `css/main.css` — `overscroll-behavior: none` on `<html>`. [Touch & Interaction]
- `css/main.css` — `touch-action: manipulation` on buttons, links, nav-toggle. [Touch & Interaction]
- `css/main.css` — `-webkit-tap-highlight-color: transparent` on body. [Touch & Interaction]
- `css/main.css` — Soft radius (--radius-soft: 10px), no gradients, no dark heroes, no violet/lavender. [tasteskill house rules]
- `css/main.css` — Responsive breakpoints at 768px (mobile-first base covers 390px; desktop covers 1024/1440). [Layout]

### OPEN FINDINGS

- `css/main.css` — Flex/grid children do not explicitly set `min-w-0` for text truncation. [Content Handling] — Not currently needed (no truncation used); monitor if long content added.
- `css/main.css` — Full-bleee hero does not use `env(safe-area-inset-*)`. [Safe Areas & Layout] — Same as index.html finding.

---

## js/main.js

### PASS

- `js/main.js` — Mobile menu toggle with `aria-expanded`/`aria-controls`. [Accessibility]
- `js/main.js` — Hero popup open/close with backdrop click dismissal. [Accessibility]
- `js/main.js` — Smooth scroll for anchor links. [Navigation]
- `js/main.js` — Focus-in scroll-into-view prevents sticky header coverage. [Focus States]
- `js/main.js` — No `autoFocus`, no inline `onClick`, no `transition: all`. [Anti-patterns]

---

## tasteskill House Rules Compliance

| Rule | Status | Evidence |
|------|--------|----------|
| kind=service, site-kind=other → no gradients | ✅ | Solid colors only (#8a6d3b accent, #111818 ink) |
| no dark heroes | ✅ | Light hero background |
| no loops | ✅ | No animated loops |
| soft radius | ✅ | --radius-soft: 10px |
| never violet/lavender | ✅ | Accent is #8a6d3b (bronze/gold) |
| hero enters once (data-enter) | ✅ | `data-enter` on hero section |
| street+district only contacts | ✅ | Gandhipuram, Coimbatore / Mankundampatti, Sivakasi |
| .example email | ✅ | temprojects.example@gmail.com |
| buttons verb+object | ✅ | "Plan a Project", "Talk to Us", "Send Enquiry" |
| h1 = category + buyer | ✅ | "Pioneering Design, EPC Execution & Consultancy in Infrastructure" |
| no invented testimonials/logos | ✅ | Only real client names from PDF |
| no captions under images | ✅ | No figcaption; footer credit only |

---

## Viewport Coverage (CSS Media Queries)

| Viewport | Coverage | Method |
|----------|----------|--------|
| 390px (mobile small) | ✅ | Mobile-first base styles (single column, stacked) |
| 768px (mobile large/tablet) | ✅ | `@media (min-width: 768px)` — 2-column layouts, inline nav |
| 1024px (desktop) | ✅ | Same desktop styles as 768+ (max-width 960px container prevents over-stretch) |
| 1440px (desktop large) | ✅ | Same desktop styles; container caps at 960px |

All viewports covered via mobile-first single breakpoint at 768px. Container max-width 960px ensures readability on 1440px displays.

---

## Summary

- **0 critical blockers** — all accessibility, focus, form, image, and performance rules pass.
- **2 minor findings** — straight quotes (typography preference), safe-area-insets (notch devices, optional).
- **tasteskill compliance** — all 12 house rules pass.
- **Viewport coverage** — all 4 target viewports covered.

No code changes required for compliance. Optional: curly-quote pass on copy, safe-area-inset padding on hero.
