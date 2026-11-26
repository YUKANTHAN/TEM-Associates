# TEM Associates — 20+ Site Reference Synthesis

Consolidated from: Reference Sites (7), Top Construction/Architecture (5), Top Company Design Systems (84+ from awesome-design.md), filtered through DESIGN_RULES.md constraints.

---

## 1. Construction & Architecture Firms (7 Analyzed)

| Company | Hero | Nav Structure | Content Sections | Visual Language | Unique Patterns |
|---------|------|---------------|------------------|-----------------|-----------------|
| **Skanska** | Safety-gear worker + country gateway | Country selector → Group site | Decentralized by country | Corporate, safety-first, PPE imagery | Country gateway pre-nav; heritage "135+ years" |
| **ZHA** | Video "WATCH NOW" hero | Projects / News / Expertise / About / Research / Sustainability / Contact | News stream (16 cards) + Expertise grid (8) + About (500 people) | Editorial, credited photography, renders | Every image credited; JSON-LD; video hero gated |
| **Gensler** | Research/article cards | Research / Expertise / Projects / People / Offices / About / Careers / Contact | Research Institute (7 topics) + 40+ Expertise + Projects by Topic/Office + 58 Offices | Research-led, modular article cards, extensive taxonomy | Research Institute as brand; Design Forecast annual; GPS sustainability |
| **Turner** | "What do you want to build?" 4-path hero | Our Company / Our Services / Our Projects / Insights / Careers / Contact | Services: Plan&Procure / Build&Optimize + 6 Commitment pillars + ESG + Local community pages | Utility-first, conversion-oriented, numbered pillars | Self-segmenting hero; #1 Green Builder 19yrs; reCAPTCHA form |
| **Bechtel** | Heritage/Scale statement | People / Projects / Approach / Careers / Suppliers / Media / Impact Report / History / Contact | Projects by Market×Region (33 countries) + History timeline (1930s–2020s) + Approach: Dream/Design/Deliver | Heritage-led, megaproject proof points, virtual museum | Decadal timeline; WaaTeeKaa museum; Market×Region matrix; 80% US nuclear |
| **Jevelin Architect** | Large hero image + "Latest Projects" CTA | Home / Projects / News / Contact | Services (3) + Portfolio (tagged) + Testimonials + Team + Stats counter | Luxury editorial, serif headlines, generous whitespace | Category-filtered portfolio; circular avatar testimonials; stats strip |
| **Jevelin Construction** | Revolution Slider (2 CTAs) + Top contact bar | Home / Services / Gallery / Testimonials / Contacts | Intro icons (4) + Accordion About + Masonry Gallery + Client logos + Feature tabs + Blog | Industrial blue/gray, iconography, masonry | Top contact bar; Revolution Slider; accordion About; client logo strip |

---

## 2. Design System References (Top Company Patterns from 84+ Sites)

### Color Strategies (Applicable to TEM — service/other, no gradients, no dark hero)

| Pattern | Companies | TEM Application |
|---------|-----------|-----------------|
| **Single reserved accent** | Stripe (purple), Sanity (coral-red), Oracle (red wordmark only), Ferrari (red sparingly) | **Earth-tone accent (#8a6d3b)** — use sparingly on primary CTA only |
| **Warm minimalism** | Notion, Starbucks, Mastercard | Cream/soft surfaces (#f7f5f2), earth tones — construction-appropriate |
| **Photography-driven** | Airbnb, Nike, Meta, Tesla, Apple | Full-bleed construction photos lead; no stock |
| **Monochrome + massive display** | Nike, SpaceX, Tesla | Not for TEM (service/other) — avoid |

### Typography Strategies

| Pattern | Companies | TEM Application |
|---------|-----------|-----------------|
| **Serif display + sans body** | Notion, WIRED, The Verge, Oura, WIRED | **Serif for h1/h2** (editorial), clean sans (Inter) for body |
| **Massive display + tight body** | Nike (Futura), Tesla (Universal Sans), Vodafone | **Clamp-based scale** (2.25–4rem h1), line-length <80ch |
| **Monospace/technical eyebrows** | Sanity (IBM Plex Mono), Ollama, Warp | Not primary — maybe for project codes/metrics |

### Layout Strategies

| Pattern | Companies | TEM Application |
|---------|-----------|-----------------|
| **Full-bleed cinematic hero** | Tesla, SpaceX, Apple, Runway, Airbnb | **Yes** — construction photo, enters once (`data-enter`) |
| **One section per screen** | Premium sites + tasteskill rule 3 | **Yes** — with waiver for Track Record photo-chapters (3 screens) |
| **Equal left/right edges** | tasteskill rule 4 | **Yes** — `.wrap` max-width 960px, symmetric padding |
| **Three-surface channel** | PlayStation | Not applicable |
| **Radical subtraction** | Tesla | Not for TEM — need content density for track record |

### Component Strategies

| Pattern | Companies | TEM Application |
|---------|-----------|-----------------|
| **Pill/soft buttons** | Jobright, Runway, Mastercard, NerdWallet | **Yes** — soft radius (10px), solid fill, hover lift 2px |
| **Dark hero + light reading band** | Runway | **No** — dark heroes are tech-only (tasteskill) |
| **Gradient accents** | Stripe, Cohere, Renault, Revolut | **No** — gradients are tech-only |
| **Stats counter strip** | Jevelin, Turner, Bechtel | **Single hard fact** on hero ("22 years"), not multi-number strip |

---

## 3. UI Element Placement & Visual Hierarchy (Synthesized)

### Header / Navigation

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **Logo/Wordmark** | Top-left | `translate="no"`, semantic `<header>` | `tem_logo.png` + "TEM Associates" wordmark |
| **Primary Nav** | Top-right (desktop), hamburger (mobile) | Sticky, semantic `<nav>`, `<button>` toggle | 6 items: Home, Projects, Services, Expertise, About, Contact |
| **Contact/CTA in Header** | Jevelin Construction: top bar | **No** — tasteskill: footer only, `.example` email | Skip header contact |
| **Search** | Gensler, ZHA | Not needed for TEM scale | Skip |

### Hero (Screen 1)

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **H1** | Left or center, above fold | Category + buyer, `text-wrap: balance` | "Construction & industrial consulting for developers and owners" |
| **Hard Fact** | Below H1, distinct style | One verifiable number | "22 years of scheduled delivery on commercial builds" |
| **Primary CTA** | Inside hero, right or below fact | Verb + object, pill button | "Start a project" → `#contact` |
| **Hero Visual** | Right (desktop) / below (mobile) | Full-bleed photo, `loading="eager"`, `fetchpriority="high"` | `project_highway_railway.jpeg` |
| **Scroll Indicator** | Bottom center | Subtle, optional | Omit (clean) |

### Section Structure (Per Screen)

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **Section Top Border** | Consistent 1px | `border-top: 1px solid var(--color-border)` | Yes, all sections |
| **H2** | Top of section, left-aligned | `text-wrap: balance`, serif display | Per screen H2 |
| **Content Grid** | 1-col mobile, 2-col ≥768px | CSS Grid, equal edges via `.wrap` | Services: 2-col cards; Place: image + text |
| **Cards** | Uniform height, soft radius | Hover lift 2px, shadow, `transition: transform` | Services, Verticals, Capabilities, Projects |
| **Images** | Inside cards or full-width | `border-radius: var(--radius-soft)`, explicit w/h | All project photos, team, equipment |

### Track Record / Portfolio (Photo-Chapters — 3 Screens)

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **Category Tabs/Anchors** | Top of section | Sticky or smooth-scroll | Mega Projects / Construction / Design & Consultancy |
| **Project Cards** | Grid (2-col ≥768px) | Image + title + value + client | Mega: 7 cards; Construction: 3 categories; Design: 2 categories |
| **Project Detail** | Click → modal or anchor | Tasteskill: photo-chapters allow depth | Each category = one screen (photo-chapters exception) |
| **Image Credit** | Footer line only | Tasteskill rule 1: no captions under images | "Photography by TEM Associates. No stock images used." |

### About / Leadership

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **Team Photo** | Left (desktop) / top (mobile) | Real photo, credited | `tem_org_chart.png` or team photo |
| **MD Profile** | Right / below | Name, title, credentials, tenure | Mr. Anantharaj, 24+ yrs, ex-L&T/HCC/RAMKY |
| **Org Strengths** | Bullet list or stat cards | Verifiable metrics | 15+ yrs, 33 staff, 66% advanced degrees, 100% accountability |

### JVs / Partners / Clients

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **Partner Logos** | Horizontal strip, grayscale → color on hover | Jevelin Construction, Bechtel | 7 logos: REAP, SAMWHAN, TRIKAAL, SAI, HIMASRI, EPAD, ADITHYA |
| **Client List** | Text list or logo strip | No invented logos (tasteskill) | Text list: L&T, RIL, DBL, NHAI, VGN, etc. |
| **Government Logos** | Separate line | Credibility signal | NHAI, Highways, Rural Dev (from `government_logos.jpeg`) |

### Contact / Booking

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **Form** | Centered, single column | Label + input, `autocomplete`, `spellcheck="false"` on email | Name, Email, Project Type (select), Details (textarea) |
| **CTA** | Bottom of form | Verb + object, pill button | "Send request" |
| **Contact Info** | Below form or side | Street + district only, `.example` email | Avinashi Road, Coimbatore · hello@temassociates.example |
| **Full Addresses** | Footer | Registered + Branch | Both from p18 |

### Footer

| Element | Placement | Best Practice | TEM Implementation |
|---------|-----------|---------------|-------------------|
| **Photo Credit** | First line | Tasteskill rule 1: one line | "Photography by TEM Associates. No stock images used." |
| **Contact** | Second line | `.example` email, street + district | hello@temassociates.example · Avinashi Road, Coimbatore |
| **Copyright** | Last line | Standard | © 2026 TEM Associates. All rights reserved. |

---

## 4. Visual Hierarchy Rules (Enforced)

### Type Scale (CSS Custom Properties)
```css
--scale-h1: clamp(2.25rem, 5vw + 1rem, 4rem);    /* Hero title */
--scale-h2: clamp(1.75rem, 4vw + 1rem, 2.75rem);  /* Section headers */
--scale-h3: clamp(1.25rem, 3vw + 0.75rem, 1.75rem); /* Card titles */
--scale-body: clamp(1rem, 1.5vw + 0.5rem, 1.125rem); /* Body copy */
--scale-small: 0.875rem;                           /* Footer, captions */
```

### Color Tokens (Service/Other — No Gradients, No Violet)
```css
--color-bg: #ffffff;           /* Pure white */
--color-ink: #111818;          /* Near-black text */
--color-muted: #556060;        /* Secondary text */
--color-accent: #8a6d3b;       /* Earth-tone accent (single reserved) */
--color-accent-hover: #6f552e; /* Hover state */
--color-border: #d8d8d8;       /* Borders, dividers */
--color-surface: #f7f5f2;      /* Card backgrounds */
--color-focus: #8a6d3b;        /* Focus rings */
```

### Spacing System
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
```

### Radius Scale (Soft — Service Kind)
```css
--radius: 8px;       /* Buttons, inputs */
--radius-soft: 10px; /* Cards, images, hero visual */
```

### Motion (Tasteskill Rule 5)
| Element | Motion | Duration | Reduced Motion |
|---------|--------|----------|----------------|
| Hero entrance | Fade + slide up once | 600ms | Disabled |
| Card hover | Lift 2px + shadow | 200ms | Disabled |
| Button hover | Lift 2px | 150ms | Disabled |
| Button press | Depress to 0 | 50ms | Disabled |
| Nav link underline | Draw from center | 200ms | Disabled |
| Focus ring | Fade in | 150ms | Always visible |

---

## 5. What TEM Does NOT Do (Tasteskill Never List)

| Prohibited | Industry Example | TEM Compliance |
|------------|------------------|----------------|
| Violet/lavender accent | Mistral, Linear, Kraken | ✅ Earth-tone only |
| Gradient decoration | Stripe, Renault, Revolut | ✅ Flat color only |
| Dark hero | Vercel, Linear, Sentry | ✅ Light hero only |
| Auto-play loops | Jevelin Construction slider | ✅ Hero enters once |
| Fade-in on scroll | Generic AI default | ✅ No scroll animations |
| Captions under images | Standard portfolio sites | ✅ Footer credit only |
| Invented testimonials | Jevelin Construction | ✅ No testimonials |
| Invented client logos | Jevelin Construction | ✅ Real partner logos only |
| Numbered markers (non-sequence) | Turner commitments | ✅ Only if true sequence |
| Stock photos as own | Generic sites | ✅ TEM's own photography |

---

## 6. Responsive Breakpoints (Tasteskill: 1440, 1024, 768, 390)

| Breakpoint | Layout Changes |
|------------|----------------|
| **1440px** | Full 2-col grids, hero side-by-side, nav horizontal |
| **1024px** | 2-col maintained, padding adjusted |
| **768px** | Nav → hamburger, grids → 1-col, hero stacks (visual below content) |
| **390px** | Compact padding, smaller type scale, full-width buttons |

---

## 7. Implementation Checklist (Per Screen)

| Screen | HTML Structure | CSS Grid/Flex | Images | Motion | Accessibility |
|--------|----------------|---------------|--------|--------|---------------|
| 1 Hero | `<section id="hero" data-enter>` | Grid 1fr/1fr ≥768px | 1 hero img (eager) | Entrance once | H1, fact, CTA, alt |
| 2 Visit | `<section id="visit">` | 1-col | Office photo (lazy) | None | Address format |
| 3 Services | `<section id="services">` | Grid 1fr/1fr/1fr ≥768px | 3 card images | Card lift | 3 cards, H2+H3 |
| 4 Verticals | `<section id="expertise">` | Grid 2-col ≥768px | 3-6 icons/photos | Card lift | 6 verticals |
| 5 Capabilities | `<section id="capabilities">` | Grid 2-col ≥768px | 2-3 icons | Card lift | 6 capabilities |
| 6–8 Track Record | `<section id="track-record">` | Photo-chapters (3 screens) | 10+ project photos | Card lift | Categories, credits |
| 9 Mobilization | `<section id="capacity">` | Table + 1-col | Equipment photo | None | Fleet table |
| 10 Leadership | `<section id="about">` | Grid 1fr/1fr ≥768px | Org chart + logo | None | MD profile |
| 11 JVs/Clients | `<section id="partners">` | Logo strip + list | 7 partner logos | Hover color | Real logos only |
| 12 R&D | `<section id="innovation">` | 1-col | Trikaal infographic | None | Patent mention |
| 13 Contact | `<section id="contact">` | 1-col form | None | Button press | Form labels, autocomplete |

---

## 8. Next Steps

1. **Rewrite `index.html`** — All 13 sections with semantic HTML, anchor IDs, nav
2. **Extend `css/main.css`** — Add Track Record photo-chapters styles, vertical grids, fleet table, logo strip, R&D
3. **Verify images** — All 22 assets in `TEM_PDF_Images/` referenced correctly
4. **Run audits** — Web Interface Guidelines + tasteskill gate
5. **Test viewports** — 1440, 1024, 768, 390 + reduced motion + keyboard

---

*This synthesis covers 7 construction/architecture sites + 84+ design system patterns from awesome-design.md, filtered through DESIGN_RULES.md (service kind, site-kind other, tasteskill 2.5).*