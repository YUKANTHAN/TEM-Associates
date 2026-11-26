# TEM Associates — Design & Build Rules

Consolidated operating rules for all frontend/website design work on the TEM Associates project. Framed from the three skills installed via skills.sh (https://skills.sh):

- `frontend-design` (anthropics/skills) — distinctive, intentional visual design
- `web-design-guidelines` (vercel-labs/agent-skills) — Vercel Web Interface Guidelines compliance
- `design-taste-frontend` (leonxlnx/taste-skill) — tasteskill 2.5 anti-slop frontend build standard

---

## 1. Mindset & Design Philosophy (frontend-design)

Approach every page as the design lead at a studio known for giving each client a distinct visual identity that is not mistaken for anyone else's. The client has rejected proposals that felt cliché or templated. Make deliberate, opinionated choices about palette, typography, and layout specific to this brief. Take aesthetic risk if justified.

### Ground designs in the subject matter
- Identify the concrete subject, audience, and primary job of the page before designing; confirm with the client.
- Let the subject's industry, materials, and vernacular drive visual choices.
- Build with the brief's real content and subject matter throughout.
- TEM Associates is a construction/industrial associates firm (reference themes: buildcraft, architect, construction, bauer). Design for that trade.

### Hero
- Open with the most characteristic thing in the subject's world: headline, image, animation, live demo, or interactive moment.
- Be deliberate. A big number with a small label, supporting stats, and a gradient accent is the default treatment — use only if truly the best option.
- The hero fills the first screen alone at every width; its main button sits inside it.

### Typography
- Typography carries the personality of the page. Use one typeface family, or two clearly distinct ones. Never default families reached for on every project.
- Set a clear type scale following The Elements of Typographic Style with intentional weights, widths, and spacing.
- Use type treatment as an active part of the design, not a neutral delivery vehicle.
- Default line length: less than 80 characters. Serif body text: slightly more line-height than sans-serif.
- Avoid these generated-page tells:
  - Accenting a single word/phrase in a headline (italic/bold/different color)
  - All-caps labels
  - Unnecessary typographic labels above content
- Heading scale: one scale, its faces loaded. `text-wrap: balance` or `text-pretty` on headings (prevents widows).
- `…` not `...`; curly quotes `“”` not straight `"`; non-breaking spaces for `10&nbsp;MB`, `⌘&nbsp;K`, brand names.
- `font-variant-numeric: tabular-nums` for number columns/comparisons.

### Visual structure
- Structural devices (outlines, borders, numbering, eyebrows, dividers, labels) encode useful information, not decoration.
- Numbered markers (01/02/03) only if the content is a sequence (stepped process/timeline).
- One section per screen; every section exactly one or two screens tall at 1440x900; no second section heading peeking in.

### Motion
- Non-user-triggered motion sparingly and deliberately, only to draw attention.
- One orchestrated moment (one page-load sequence or one reveal) lands better than scattered effects.
- Fade-and-slide-up on each section and hover transitions on every card are the generic AI default — avoid.
- Motion answering a person's action (opening, expanding, confirming) is welcome when it shows what changed.
- Honor `prefers-reduced-motion`; under reduced motion everything rests and nothing stays hidden.
- Animate `transform`/`opacity` only (compositor-friendly). Never `transition: all` — list properties explicitly.
- Autoplay motion >5s needs pause/stop/hide controls.

### Writing in design
- Words are design content, not decoration. Bring the same intentionality to copywriting as to spacing and color.
- Write from the end user's perspective. Name things by what users understand in simple language.
- Use active voice as default. A CTA says exactly what happens: "Save changes," not "Submit."
- Keep tone conversational: plain verbs, sentence case, no filler, tone matched to brand and audience.
- Each written element does exactly one job.
- Error messages include fix/next step, not just the problem. Errors don't apologize and are never vague.
- Empty screen is an invitation to act.

### Process: plan, review, build, critique
1. Brainstorm a short design plan: compact token system (color 4–6 named hex values, type faces/roles, layout concept, principles).
2. Review the plan against the brief before building. Revise any part that reads like a generic default.
3. Only after confirming uniqueness, write code following the revised plan.
4. Critique your own work as you build.

### CSS selector care
- Structure CSS selector specificities carefully; avoid classes that cancel each other out (e.g., `.section` vs `.cta`).

### Restraint & self-critique
- Spend boldness in one place. Let one element be memorable; keep everything around it quiet and disciplined.
- Cut any decoration that does not serve the brief.
- Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected, visually accessible, harmonious color palettes.
- Chanel's rule: before leaving the house, remove one accessory.

---

## 2. Web Interface Guidelines Compliance (web-design-guidelines)

Audit every file against these rules. Output findings in `file:line` format.

### Accessibility
- Icon-only buttons need `aria-label`
- Form controls need `<label>` or `aria-label`
- Interactive elements need keyboard handlers (`onKeyDown`/`onKeyUp`)
- `<button>` for actions, `<a>`/`<Link>` for navigation (not `<div onClick>`)
- Images need `alt` (or `alt=""` if decorative)
- Decorative icons need `aria-hidden="true"`
- Async updates (toasts, validation) need `aria-live="polite"`
- Semantic HTML (`<button>`, `<a>`, `<label>`, `<table>`) before ARIA
- Headings hierarchical `<h1>`–`<h6>`; include skip link for main content
- `scroll-margin-top` on heading anchors
- Meaningful media needs captions, transcripts, or descriptions as applicable
- Media controls need keyboard support; decorative media needs assistive-tech hiding

### Focus States
- Interactive elements need visible focus: `focus-visible:ring-*` or equivalent
- Never `outline-none` / `outline: none` without focus replacement
- Use `:focus-visible` over `:focus` (avoid focus ring on click)
- Group focus with `:focus-within` for compound controls
- Sticky headers/footers/overlays must not cover the focused element

### Forms
- Inputs need `autocomplete` and meaningful `name`
- Use correct `type` (`email`, `tel`, `url`, `number`) and `inputmode`
- Never block paste (`onPaste` + `preventDefault`)
- Labels clickable (`htmlFor` or wrapping control)
- Disable spellcheck on emails, codes, usernames (`spellCheck={false}`)
- Checkboxes/radios: label + control share single hit target (no dead zones)
- Submit button stays enabled until request starts; spinner during request
- Errors inline next to fields; focus first error on submit
- Placeholders end with `…` and show example pattern
- `autocomplete="off"` on non-auth fields to avoid password manager triggers
- Warn before navigation with unsaved changes (`beforeunload` or router guard)

### Animation
- Honor `prefers-reduced-motion` (provide reduced variant or disable)
- Animate `transform`/`opacity` only (compositor-friendly)
- Never `transition: all`—list properties explicitly
- Set correct `transform-origin`
- SVG: transforms on `<g>` wrapper with `transform-box: fill-box; transform-origin: center`
- Animations interruptible—respond to user input mid-animation
- Autoplay motion >5 seconds alongside other content needs pause, stop, or hide controls
- Muted decorative loops must stop under `prefers-reduced-motion`

### Typography
- `…` not `...`
- Curly quotes `“` `”` not straight `"`
- Non-breaking spaces: `10&nbsp;MB`, `⌘&nbsp;K`, brand names
- Loading states end with `…`: `"Loading…"`, `"Saving…"`
- `font-variant-numeric: tabular-nums` for number columns/comparisons
- Use `text-wrap: balance` or `text-pretty` on headings (prevents widows)

### Content Handling
- Text containers handle long content: `truncate`, `line-clamp-*`, or `break-words`
- Flex children need `min-w-0` to allow text truncation
- Handle empty states—don't render broken UI for empty strings/arrays
- User-generated content: anticipate short, average, and very long inputs

### Images
- `` needs explicit `width` and `height` (prevents CLS)
- Below-fold images: `loading="lazy"`
- Above-fold critical images: `priority` or `fetchpriority="high"`

### Performance
- Large lists (>50 items): virtualize (`virtua`, `content-visibility: auto`)
- No layout reads in render (`getBoundingClientRect`, `offsetHeight`, `offsetWidth`, `scrollTop`)
- Batch DOM reads/writes; avoid interleaving
- Prefer uncontrolled inputs; controlled inputs must be cheap per keystroke
- Add `<link rel="preconnect">` for CDN/asset domains
- Critical fonts: `<link rel="preload" as="font">` with `font-display: swap`
- Prefer `<video autoplay muted loop playsinline>` over animated GIF; provide a still alternative
- Short non-essential loops: Safari H.264 MP4 `<picture>` source, `prefers-reduced-motion` media condition, and still fallback

### Navigation & State
- URL reflects state—filters, tabs, pagination, expanded panels in query params
- Links use `<a>`/`<Link>` (Cmd/Ctrl+click, middle-click support)
- Deep-link all stateful UI (if uses `useState`, consider URL sync via nuqs or similar)
- Destructive actions need confirmation modal or undo window—never immediate

### Touch & Interaction
- `touch-action: manipulation` (prevents double-tap zoom delay)
- `-webkit-tap-highlight-color` set intentionally
- `overscroll-behavior: contain` in modals/drawers/sheets
- Page rubber-band suppression: `overscroll-behavior: none` on `<html>` inside `@media (pointer: fine)`; keep coarse-pointer page defaults for pull-to-refresh
- During drag: disable text selection, `inert` on dragged elements
- Drag/swipe/pinch/path gestures need tap/click and keyboard alternatives unless essential
- `autoFocus` sparingly—desktop only, single primary input; avoid on mobile

### Safe Areas & Layout
- Full-bleed layouts need `env(safe-area-inset-*)` for notches
- Avoid unwanted scrollbars: `overflow-x-hidden` on containers, fix content overflow
- Flex/grid over JS measurement for layout

### Dark Mode & Theming
- `color-scheme: dark` on `<html>` for dark themes (fixes scrollbar, inputs)
- `<meta name="theme-color">` matches page background
- Native `<select>`: explicit `background-color` and `color` (Windows dark mode)

### Locale & i18n
- Dates/times: use `Intl.DateTimeFormat` not hardcoded formats
- Numbers/currency: use `Intl.NumberFormat` not hardcoded formats
- Detect language via `Accept-Language` / `navigator.languages`, not IP
- Brand names, code tokens, identifiers: wrap with `translate="no"` to prevent garbled auto-translation

### Hydration Safety
- Inputs with `value` need `onChange` (or use `defaultValue` for uncontrolled)
- Date/time rendering: guard against hydration mismatch (server vs client)
- `suppressHydrationWarning` only where truly needed

### Hover & Interactive States
- Buttons/links need `hover:` state (visual feedback)
- Interactive states increase contrast: hover/active/focus more prominent than rest

### Content & Copy
- Active voice: "Install the CLI" not "The CLI will be installed"
- Title Case for headings/buttons (Chicago style)
- Numerals for counts: "8 deployments" not "eight"
- Specific button labels: "Save API Key" not "Continue"
- Error messages include fix/next step, not just problem
- Second person; avoid first person
- `&` over "and" where space-constrained

### Anti-patterns (flag these)
- `user-scalable=no` or `maximum-scale=1` disabling zoom
- `onPaste` with `preventDefault`
- `transition: all`
- `outline-none` without focus-visible replacement
- Inline `onClick` navigation without `<a>`
- `<div>` or `<span>` with click handlers (should be `<button>`)
- Images without dimensions
- Large arrays `.map()` without virtualization
- Form inputs without labels
- Icon buttons without `aria-label`
- Hardcoded date/number formats
- `autoFocus` without clear justification
- Animated GIF when compressed video is suitable
- Gesture-only action without tap/click and keyboard alternative

### Output Format
- Group by file. Use `file:line` format (VS Code clickable). Terse findings.
- State issue + location. Skip explanation unless fix non-obvious. No preamble.

---

## 3. tasteskill 2.5 House Rules (design-taste-frontend)

These nine rules win over everything else.

1. **No caption or description under any image, render or visual.** Licence credits go in one footer line.
2. **Every visual renders, never an empty ground,** at 1440, 1024, 768 and 390.
3. **One section per screen:** the hero alone on the first screen, every section exactly one or two screens tall at 1440x900, no second section heading peeking in. The one exception is a live `photo-chapters` section, three or four screens, set by the moment.
4. **Equal left and right content edges.**
5. **Hover micro-animations:** a linked card lifts 2px, a photo zooms 1.02-1.03 inside its frame, buttons step on hover and press on click, underlines draw, card loops cycle in 2.5-4 s, repeat and restart on hover. The motion layer does it; never strip or override it. No tilt, carousels or timed tabs. Every hero enters once on load (`data-enter`), and every page carries one dealt moment, two on a long page.
6. **More and better real photographs where they fit;** nicer backgrounds; better heroes, layouts and fonts.
7. **Real full-colour icons** (a known product's real icon, never a drawn one); small diagram visuals in cards (a hub with branches; one input, a main processor, three parallel lanes; pulses running along the lines).
8. **The big award-site scenes and creative moments are part of the skill:** every page deals its moments (photo- and type-led off tech), but shader effects and scenes only where the trade has a technical subject (tech, AI, developer tools, gaming, fintech, hardware), never on a local cafe, bakery, guesthouse or shop: those get photographs.
9. **Addresses:** street and district only (no street given: the district), no house number, postcode or coordinates; no register or VAT numbers; no phone in a real format; contacts on `.example`.

### Page kind (declared on `<html data-type>` and `<meta name="page-type">`, plus `<meta name="site-kind">`)
| Brief | page type | site-kind | kind |
|-------|-----------|-----------|------|
| App, SaaS, AI, developer tool | software | software | software |
| A game | software | gaming | gaming |
| Hardware or a tech device | product | tech | tech |
| Any other physical product or brand | product | other | product |
| People are hired: clinic, law firm, agency, creative studio, trade | service | other | service |
| People come to it: cafe, bar, bakery, restaurant, guesthouse, small hotel, shop | place | other | place |

TEM Associates: construction/industrial associates → **service** (people are hired). site-kind: **other**. kind: **service**.

### "Tech" vs "other"
- Tech = site-kind software/gaming/tech. Effects, scenes, loops, CSS grounds, dark pages and dark heroes are tech only.
- Other (TEM Associates): photographs, flat colour, type, real icons, the hero's entrance, its dealt moment (photo- or type-led), and the hover layer. **No shader effect, print, grain, gradient, scene, or loop.** WebGL only for a product render the brief asks for.

### Copy rules
- h1 names the category and the buyer or the place
- One hard fact on the first screen
- A noun in every heading
- Buttons as a verb and an object
- Nothing is invented but a coined brand name (searched first, kept in `names.json`)
- On a place: plausible hours and prices marked `data-assumed`
- 60 to 80 words a screen outside UI mocks

### Contacts
- Street and district only; no house number, postcode, coordinates
- Get directions only with a street; "See the area" with a district; no map link with town only

### Accessibility (tasteskill)
- Every control named, alt on pictures, labels you can see, headings one level at a time, no tabindex above 0
- Tab reaches the skip link first, its ring shows at once and never under the header; the menu button says its state
- lang, title, description and share tags present

### One system
- One button pair, one card style, one radius scale, one link look
- Two boxes deep at most (nesting)
- One heading scale, its faces loaded

### Motion (tasteskill)
- Every button, link, linked card and linked photograph visibly answers the pointer; nothing tilts
- The hero enters once on load; one or two dealt moments
- Card loops cycle in 2.5-4 s; nothing moves because the page scrolled except a dealt moment inside its own section or the big scene (tech)
- Anything moving past 5 s has a pause button
- Under reduced motion everything rests and nothing stays hidden

### Never (tasteskill)
- A card, row or tile that fades in on scroll; a fade-in on every section; parallax on text; scroll-jacking; random blinking
- Stock photographs passed off as the client's product, people or place; a product page that never shows the product
- A drawn look-alike of a real logo; invented reviews, quotes, customers or figures
- Violet or lavender in the page's own design: accent, ground, gradient, effect colour or tint
- Copying a reference site's code, copy, pictures or signature effect
- Deleting or editing the kit's own files (`assets/`, `scripts/`) to clear a check

---

## 4. TEM Associates Project-Specific Rules

- **Subject:** construction / industrial associates firm.
- **Kind:** service; site-kind: other. → No shader effects, no gradients as decoration, no dark heroes, no loops. Photographs lead.
- **Palette:** deal three palettes made for the trade; take the first. Never violet/lavender. Keep the `:root` block as printed.
- **Radius:** `soft` by default (service → soft).
- **Hero:** a photograph whenever a frame fits. Hero enters once on load.
- **Photographs:** real photographs where they fit; none twice; stand-ins listed in the report.
- **Sections:** visit block on screen two; the offer; the place; orders or booking.
- **One section per screen; equal edges; no captions under images.**
- **One dealt moment** (photo- or type-led) on the page.
- **Copy:** h1 names category + buyer; one hard fact on first screen; buttons verb + object; 60–80 words per screen.

---

## 5. How These Rules Are Enforced

- Every build runs the `design-taste-frontend` finish gate (`gate.mjs`) until `GATE: PASS` or `GATE: OPEN` (max 3 rounds).
- Every file is audited with `web-design-guidelines` before commit; findings output in `file:line` format.
- `frontend-design` review occurs at plan stage and before code is written.
- No rule may be waived except via `.taste-skill/waivers.json` with a reason; the brief is the reason for client-copy words.

---

## 6. Active Waivers (`.taste-skill/waivers.json`)

| Rule | Description | Reason |
|------|-------------|--------|
| tasteskill-3 | One section per screen | Client requires inclusion of extensive verifiable project track record from 18-page corporate profile. Using photo-chapters exception for Track Record (3–4 screens) + additional screens for Services, Engineering Verticals, Capabilities, JVs. |

*See `.taste-skill/waivers.json` for full waiver details.*

---

*Generated from skills.sh ecosystem. Skills: frontend-design, web-design-guidelines, design-taste-frontend.*
