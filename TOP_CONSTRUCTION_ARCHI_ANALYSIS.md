# TEM Associates — Top Construction & Architecture Company UI Analysis

Analyzed live websites of top global construction and architecture firms. Source: direct web fetch of each company homepage.

| # | Company | URL | Sector | Status |
|---|---------|-----|--------|--------|
| 1 | Skanska | skanska.com | Construction / project development | Full content |
| 2 | Foster + Partners | fosterandpartners.com | Architecture | 404 — not analyzed |
| 3 | Zaha Hadid Architects | zaha-hadid.com | Architecture / design studio | Full content |
| 4 | Gensler | gensler.com | Architecture / design / planning | Full content |
| 5 | Turner Construction | turnerconstruction.com | Construction services | Full content |
| 6 | Bechtel | bechtel.com | Engineering / construction / PM | Full content |

---

## 1. Skanska (skanska.com)

### Positioning
"A world leading project development and construction company, 135+ years in the making."

### Structure
- **Country selection gateway** — Europe vs North America, with 11 country subsites listed (Czech Republic, Denmark, Finland, Hungary, Norway, Poland, Romania, Slovakia, Sweden, UK, United States) + Group site.
- Hero: headline + "Choose country" / "Go to Group site" CTAs.
- Hero image: person in safety gear (orange high-visibility jacket, helmet) — safety-first visual language.

### Design approach
- Corporate, decentralized (country-localized) structure.
- Safety imagery leads (PPE, high-vis).
- Heritage lead ("135+ years").

### Unique features
1. **Country/region gateway** — user selects locale before seeing content; implies decentralized operations.
2. **Safety-gear hero** — worker in PPE as the opening visual, signaling safety culture immediately.

### Applicability to TEM Associates
- Heritage framing ("22 years of scheduled delivery") — compatible with DESIGN_RULES (one hard fact on first screen).
- Safety-first imagery — TEM is a service consultancy, so hard-hat imagery is optional; avoid cliché per frontend-design rules.

---

## 2. Zaha Hadid Architects (zaha-hadid.com)

### Positioning
"Forever Advancing Architecture. Over 40 years designing, building, innovating. From London to Beijing, Rome to Rabat, Miami to the Metaverse."

### Structure
- **Hero**: WATCH NOW video hero (projects-video-screenshot).
- **News stream**: 16 news cards with dates (e.g., 20/11/2026, 02/16), each with photograph credit (Hufton + Crow, Virgile Simon Bertrand, etc.) or render credit (Devisual, X-Universe, Negativ, etc.).
- **Expertise**: 8 sections — Architecture, Interior Architecture, Masterplans, Virtual Spaces, Workplace Consultancy, Products, Exhibitions, Installations + Pavilions. Each: image + "View More" CTA + photographer/render credit.
- **About Us**: "architects, designers, coders. Thinkers, creators, innovators. 500 people from 55 nations across 5 global offices."
- **Research & Technology**: research-led culture, experimenting/testing/refining.
- **Sustainability**: Low Carbon Strategy Handbook, AI-assisted climate modelling.
- JSON-LD structured data (Organization, WebSite, WebPage).

### Design approach
- Editorial, research-led, globally oriented.
- Heavy use of credited photography and renders (never anonymous stock).
- News-first homepage (firm as cultural producer, not just service provider).
- Video hero ("WATCH NOW") rather than static image.

### Unique features
1. **Every visual credited** — photographer or render studio named under each image (compliant with tasteskill rule 1: credits in one line / no captions under images, but attribution present).
2. **News-driven homepage** — dated news stream positions the firm as an active cultural voice.
3. **"WATCH NOW" video hero** — motion leads, but gated behind a click (not autoplay loop).
4. **Expertise grid** — 8 service areas with distinct imagery, each linking to depth pages.
5. **Global scale statement** — cities listed (London to Beijing, Rome to Rabat, Miami to the Metaverse).
6. **Structured data** — JSON-LD for SEO/entity clarity.

### Applicability to TEM Associates
- Credited photography — TEM should credit its own photography in one footer line (compatible).
- Research/sustainability section — TEM could have a sustainability/approach page (service kind allows).
- Avoid: video hero autoplay (tasteskill: no loops/motion on "other" kind); news stream (too much for initial scope).

---

## 3. Gensler (gensler.com)

### Positioning
"Creating a Better World Through the Power of Design." Global architecture, design, and planning firm with 58 locations and 6,000+ professionals across Americas, Europe, Greater China, APME.

### Structure
- **Top nav**: Gensler / Research & Insights (Gensler Research Institute) / Expertise / Projects / People / Offices / About / Careers / Contact.
- **Research & Insights**: Gensler Research Institute with featured topics (Office to Residential Conversions, Work & The Workplace, Future of Cities, Sustainability & Resilience, Future of Healthcare, Design for Equity, Lifestyle Experiences). IN FOCUS: dialogue Blog, Design Forecast, Resilience by Design, Research Library, Workplace Surveys, Webinars.
- **Expertise**: 40+ categories (Aviation, Brand Design, Healthcare, Hospitality, Industrial & Logistics, Sports, Technology, Wellness, etc.).
- **Projects**: Featured / All / By Topic / By Office.
- **Offices**: organized by region (North America 30+ cities, Latin America, Europe, Middle East, Greater China, Asia Pacific).
- **Homepage content blocks**: research articles (Sports Urbanism, Resilient Cities, City Pulse, Pittsburgh Airport), Fast Company Most Innovative Company award, Design Forecast 2026 (6 trends), GPS (Gensler Product Sustainability Standards), dialogue Now newsletter.
- **Spotlight**: "How the Workplace Is Becoming More Human, Not Less" with article links.
- **Featured projects**: Confidential Education Campus (Singapore), UC Berkeley Gateway Building, Convergence Hall (Utah).
- Social: LinkedIn, YouTube, Instagram, X, Facebook, WeChat.

### Design approach
- Research- and content-led. Firm positions itself as a thought leader, not just a service provider.
- Modular content blocks (article cards with LEARN MORE CTAs).
- Extensive internal linking and topic taxonomies.
- Regional office directory with city-level granularity.

### Unique features
1. **Gensler Research Institute** — proprietary research brand as a marketing asset.
2. **Design Forecast annual publication** — recurring thought-leadership product.
3. **GPS (Product Sustainability Standards)** — proprietary sustainability standard as a differentiator.
4. **40+ expertise categories** — granular service taxonomy with dedicated pages.
5. **dialogue Now newsletter** — owned media channel.
6. **Regional office directory** — city-by-city office pages.

### Applicability to TEM Associates
- Research/approach section — compatible with service kind.
- Service taxonomy — TEM's 3 services (Commercial fit-outs, Industrial facilities, Developer consulting) fit this model.
- Office/location directory — TEM is a single-location consultancy; skip or keep minimal.
- Avoid: newsletter signup, 40+ expertise categories (too much for initial scope), WeChat/social overload.

---

## 4. Turner Construction (turnerconstruction.com)

### Positioning
"Making a Difference. What do you want to build?" North America-based, international construction services company; leading builder in diverse market segments.

### Structure
- **Top nav**: Our Company / Our Services / Our Projects / Insights / Careers / Contact.
- **Hero**: "What do you want to build?" with four paths — A Project / A Career / A Better Future / News & Insights (each with arrow CTA).
- **About Us**: About, Leadership, Network, Market Sectors, Turner Foundation, Turner International, Locations, Turner City.
- **Our Culture**: ESG Strategy, Community & Citizenship, DE&I, Environmental Sustainability & Resiliency, Ethics & Compliance, Innovation, Safety & Wellness.
- **Resources**: General Inquiries, Cost Index, Turner University, Policies.
- **Services**: Integrated services — Plan & Procure (Project Management, Preconstruction, Risk Management, Supply Chain, Engineering, Technical Services) / Build & Optimize (Construction, Offsite Manufacturing, Self-Perform, VDC/BIM, Energy Transition, Insurance & Surety, Accelerated Payment). Featured Service: Energy.
- **News & Insights**: project completions (e.g., $462M Adams Neurosciences Center at Yale New Haven Hospital), awards (DBIA Awards), #1 Green Builder for 19th consecutive year.
- **Commitments**: 6 numbered pillars — 01 Safety, 02 Innovation, 03 Environmental, 04 Community, 05 DE&I, 06 ESG Strategy.
- **Local community**: India example page ("Our Work In Your Local Community").
- **Contact**: headquarters address (66 Hudson Boulevard East, New York, NY 10001), phone (212) 229-6000, email turner@tcco.com, ethics hotline (888) 738-1924, contact form with reCAPTCHA.
- **Social**: Facebook, Instagram, LinkedIn, YouTube.

### Design approach
- Utility-first, conversion-oriented, ESG-commitment heavy.
- Numbered commitment pillars (01-06).
- Dual CTA structure (project path vs career path).
- Local community pages per geography.

### Unique features
1. **"What do you want to build?" hero** — user self-segmentation (project / career / better future / insights).
2. **Numbered commitment pillars** — 01 Safety through 06 ESG Strategy, each with Learn More and thumbnail.
3. **Integrated services model** — Plan & Procure vs Build & Optimize split.
4. **#1 Green Builder for 19th consecutive year** — specific, verifiable claim (hard fact style).
5. **Local community pages** — geography-specific community impact.
6. **reCAPTCHA contact form** — security on inquiry.

### Applicability to TEM Associates
- Numbered commitments — compatible (but tasteskill: no numbered markers unless content is a sequence; TEM should avoid unless it's a real process).
- Specific hard fact — "22 years of scheduled delivery" fits this pattern.
- Integrated services — TEM's 3 services map well.
- Avoid: career recruitment heavy homepage (TEM is small consultancy), reCAPTCHA complexity (keep form simple), numbered pillars (avoid per tasteskill unless sequence).

---

## 5. Bechtel (bechtel.com)

### Positioning
"We Live for a Challenge." 128+ years, 160 countries, 25,000 projects. Engineering, construction, procurement & project management (EPC).

### Structure
- **Top nav**: People / Projects / Approach / Careers / Suppliers / Media / Impact Report / History / Contact.
- **People**: Extraordinary Teams, Vision Values & Commitments, Leadership, bechtel.org (impact infrastructure arm), Latest Posts (blog + press releases).
- **Projects**: Building History; markets (Energy, Environmental Cleanup, Manufacturing & Technology, Mining & Critical Minerals, National Defense & Security, Nuclear Power, Infrastructure, Renewables); regions (US, UK, Canada, Middle East, Australia, Asia, Latin America, Europe, Africa — 33+ countries).
- **Approach**: Dream, Design, Deliver; Engineering, Procurement, Construction, Project Management; Safety, Quality, Ethics, Sustainability, Communities.
- **Featured projects**: Riyadh Metro, Vogtle Units 3&4 (nuclear), Western Sydney International Airport, Pennsylvania Chemicals (Shell Polymers), Quebrada Blanca Phase 2 (copper mine), Port Arthur LNG, Crossrail Elizabeth Line, Cutlass Solar, Hanford Waste Treatment Plant.
- **History**: 1930s–2020s timeline (Hoover Dam, BART, NASA Moonshot, Jubail Industrial City, Channel Tunnel, Chernobyl New Safe Confinement, Tacoma Narrows Bridge, Curtis Island LNG, Blue Grass Chemical Plant). WaaTeeKaa virtual museum.
- **Media**: Blog, Press Releases, Events.
- **Contact**: +1 571-392-6300, email-protected, LinkedIn/Facebook/X/YouTube.
- Heritage: "America Dreams. Bechtel Builds." First megaproject Hoover Dam; 80% of US nuclear plants.

### Design approach
- Heritage- and scale-led. Massive project portfolio as the primary proof point.
- Timeline-based history (decadal).
- Market + region matrix for project browsing.
- Virtual museum (WaaTeeKaa) for brand storytelling.

### Unique features
1. **Decadal history timeline** — 1930s to 2020s with iconic projects per decade.
2. **Virtual museum (WaaTeeKaa)** — proprietary brand-history experience.
3. **Market × Region matrix** — browse projects by industry or geography.
4. **Specific scale claims** — "80% of nuclear plants in the US," "30% of global LNG capacity," "128 years."
5. **bechtel.org** — separate impact infrastructure arm.
6. **Named megaprojects** — Hoover Dam, Channel Tunnel, Chernobyl NSC as proof points.

### Applicability to TEM Associates
- Heritage framing — TEM's "22 years" is a smaller-scale version of Bechtel's "128 years."
- Specific scale claims — TEM should use one verifiable hard fact, not a laundry list.
- Market/region structure — TEM is single-location; skip.
- Avoid: virtual museum (too much), 128-year heritage (TEM doesn't have it), nuclear/defense markets (not TEM's trade).

---

## 6. Cross-Company Pattern Library

| Pattern | Skanska | ZHA | Gensler | Turner | Bechtel | Relevance to TEM |
|---------|---------|-----|---------|--------|---------|------------------|
| Heritage / years in business | 135+ years | 40+ years | — | — | 128+ years | TEM: "22 years" hard fact |
| Safety-first imagery | PPE hero | — | — | Safety pillar #1 | Safety value | TEM: optional, avoid cliché |
| Video hero | — | WATCH NOW | — | — | — | TEM: avoid (no loops on "other" kind) |
| News / research stream | — | 16 dated news cards | Research Institute + blog | News & Insights | Blog + Press Releases | TEM: skip for initial scope |
| Service taxonomy | — | 8 expertise areas | 40+ expertise categories | Plan & Procure / Build & Optimize | Markets (8) + Regions | TEM: 3 services fit |
| Numbered commitments | — | — | — | 01–06 pillars | Dream/Design/Deliver | TEM: avoid numbered markers |
| Specific hard fact | — | — | — | #1 Green Builder 19th year | 80% of US nuclear plants | TEM: "22 years of scheduled delivery" |
| Regional office directory | Country gateway | 5 global offices, 55 nations | 58 locations, city-level | Locations + India local page | 33+ countries | TEM: single location, skip |
| Credited photography | — | Every image credited | — | — | — | TEM: credit in footer line |
| Contact: address + phone + email | — | — | — | NY HQ + phone + email + ethics hotline | +1 phone + email-protected | TEM: street+district, .example email |
| Social media | — | — | 6 channels | 4 channels | 4 channels | TEM: skip or minimal |

---

## 7. Recommendations for TEM Associates (filtered through DESIGN_RULES.md)

TEM Associates constraints: service kind, site-kind other → **no shader effects, no gradients as decoration, no dark heroes, no loops. Photographs lead. Radius: soft. Never violet/lavender. One section per screen. Equal edges. No captions under images. One dealt moment. Street + district only; .example email.**

### Adopt (compatible with rules)

| Pattern | Source | TEM application |
|---------|--------|-----------------|
| Photograph-led hero | ZHA, Tesla, Apple (top-company analysis) | Real TEM office/site photograph, enters once on load |
| Heritage hard fact | Skanska, Bechtel, Turner | "22 years of scheduled delivery" on first screen |
| Service cards/taxonomy | Gensler, Turner, ZHA | 3 cards: Commercial fit-outs, Industrial facilities, Developer consulting |
| Team/about photography | ZHA, Jevelin Architect | Real team photo in About section |
| Credited photography | ZHA | One footer credit line for TEM's own photography |
| Commitments/approach | Turner, Bechtel | Simple approach text (no numbered pillars unless sequence) |
| Specific verifiable claim | Turner (#1 Green Builder), Bechtel (80% nuclear) | One verifiable fact, not a list |
| Address: street + district | Bechtel/Turner contact style | Street + district only, .example email, no phone in real format |

### Avoid (conflict with rules)

| Pattern | Source | Conflict |
|---------|--------|----------|
| Dark hero / dark theme | Many dev/AI sites (top-company analysis) | tasteskill: dark heroes are tech-only; TEM is "other" |
| Gradients as decoration | Stripe, Renault, Revolut | tasteskill: no gradients on "other" kind |
| Violet/lavender accent | Mistral, Linear, Kraken | tasteskill Never: no violet/lavender |
| Video autoplay hero | ZHA (WATCH NOW), many sites | tasteskill: hero enters once (`data-enter`), no loops |
| Numbered markers | Turner commitments, Bechtel approach | tasteskill: only if content is a sequence |
| Client logo strip | Jevelin Construction | tasteskill Never: no invented clients |
| Invented testimonials | Jevelin Construction | tasteskill Never: no invented quotes |
| Country/region gateway | Skanska | TEM: single location, unnecessary |
| News stream homepage | ZHA, Gensler | Too much for initial scope |
| reCAPTCHA contact form | Turner | Keep form simple; reCAPTCHA adds friction |

---

## 8. Recommended Design Direction for TEM Associates

Synthesizing top construction/architecture firm patterns with DESIGN_RULES.md and tasteskill constraints:

- **Atmosphere**: Warm minimalism + editorial construction photography (Apple + Tesla + ZHA editorial).
- **Palette**: Cream/soft surfaces with earth-tone accent (terracotta/brown like Claude), never violet.
- **Typography**: Serif display headings (WIRED/The Verge) + clean sans body, `text-wrap: balance`, line length < 80 chars.
- **Hero**: Full-width construction photograph, enters once on load, main button inside hero.
- **Sections**: Hero → Visit block → Offer (3 service cards) → About (team photo) → Booking (form), one per screen.
- **Buttons**: Soft pill, solid fill, hover step 2px (tasteskill rule 5).
- **Accent**: Single reserved accent color, used sparingly (Ferrari red / Sanity coral model).
- **Hard fact**: "22 years of scheduled delivery" on first screen.
- **Credits**: One footer line for TEM's own photography.
- **Contact**: Street + district, hello@temassociates.example, no phone in real format.

---

*Sources: skanska.com, zaha-hadid.com, gensler.com, turnerconstruction.com, bechtel.com (fetched live). Foster + Partners (fosterandpartners.com) returned 404 and was not analyzed. Cross-referenced with DESIGN_RULES.md (skills.sh: frontend-design, web-design-guidelines, design-taste-frontend).*
