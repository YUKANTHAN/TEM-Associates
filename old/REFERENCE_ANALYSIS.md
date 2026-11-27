# TEM Associates — Reference Site Design Analysis

Analyzed sites from `References/Reference Sites.txt` (7 construction/architecture/industrial theme previews).

## Sites Analyzed

| # | URL | Source | Status |
|---|-----|--------|--------|
| 1 | `preview.colorlib.com/#buildcraft` | Colorlib | JS shell — content not fetchable |
| 2 | `jevelin.shufflehound.com/architect/` | Jevelin (Shufflehound) | Full content extracted |
| 3 | `jevelin.shufflehound.com/construction/` | Jevelin (Shufflehound) | Full content extracted |
| 4 | `preview.themeforest.net/...bauer...23904858` | Themeforest | Minimal buy page only |
| 5 | `preview.colorlib.com/#braxit` | Colorlib | JS shell — content not fetchable |
| 6 | `preview.colorlib.com/#pivot` | Colorlib | JS shell — content not fetchable |
| 7 | `preview.colorlib.com/#sparsh` | Colorlib | JS shell — content not fetchable |

**Limitation:** Colorlib previews (#1, #5, #6, #7) render a framework selector (Tailwind/Astro/Bootstrap) via JavaScript and did not expose theme content through static fetch. Themeforest (#4) shows only a purchase/overlay page. Full design analysis below is based on the two fully-extracted Jevelin demos plus standard patterns from these well-known construction themes.

---

## 2. Jevelin — Architect Demo (`jevelin.shufflehound.com/architect/`)

### Design approach
Luxury architecture studio aesthetic. Editorial, image-led, spacious. High-end residential/commercial architecture focus.

### Layout & structure
- Sticky header with logo left, nav right (Home / Projects / News / Contact), mobile toggle menu.
- Hero: large hero image + headline "Delivering high quality, effective, and inspiring architecture" + subheading + CTA "Latest Projects".
- Services grid: 3 cards (Architecture / Interior design / Exterior design), each with lorem text + "Learn more" link.
- Project showcase: featured projects with image, title, category tag, "View Project" link.
- Testimonials: pull-quote style with circular avatar (Ellipse-43/44) + name + role.
- Team section: headshot grid (6 members), name + role below each.
- Stats counter: 30 Years experience / 600 Finished projects / 120 Awards / 70 Employees.
- Footer: logo, secondary nav, social icons, copyright.

### Visual language
- Serif or clean sans-serif display headlines, generous whitespace, muted editorial palette.
- Images are real architectural photography (Unsplash-sourced), full-width hero, project thumbnails 420x660 portrait crops.
- Circular avatar frames for testimonials.
- Category tags below portfolio items (Offices / Shopping / Resident / Apartments).

### Unique features
1. **"Latest Projects" primary CTA** — hero leads with project browsing, not contact.
2. **Category-filtered portfolio** — each project tagged (Offices, Shopping, Resident, Apartments) with filter links.
3. **Stats counter strip** — years/projects/awards/employees as large numbers near footer.
4. **Testimonial with circular avatar + pull quote** — quote attribution styled with ellipse image frame.
5. **Team headshot grid** — individual member cards with photo, name, role.
6. **Dual project types** — "Shopping district" and "private house" show commercial + residential range.

---

## 3. Jevelin — Construction Demo (`jevelin.shufflehound.com/construction/`)

### Design approach
Industrial/contractor aesthetic. Utility-first, info-dense, contact-conversion oriented. Built for general construction business.

### Layout & structure
- Top contact bar: phone (+123 456 678 890), email (Cloudflare-protected), working hours (Mon–Fri 11AM–19PM).
- Sticky nav: Home / Services / Gallery / Testimonials / Contacts + social icons.
- Hero: full-width image slider (Revolution Slider) with two CTAs — "Build with Jevelin premium template" (browse) and "Are you ready?" (convert).
- Introduction block: 4 icon features (Clean design / Powerful builder / Customizable / Beautiful design) with icon + heading + lorem.
- About section: accordion-style collapsible blocks (History / Quality / Future).
- Gallery: "Recent Work" masonry grid (6 items) with "Load More" button; each item: image + title + category tag (Commercial / Project / Design / Industrial / People).
- Client logos strip: 5 grayscale logo placeholders.
- Testimonials: 2-column quote block with named attribution.
- Feature tabs: 6 tabbed feature blocks (Responsive / Customizable / No coding / Revolution Slider / Contact Form 7 / Beautiful Design).
- Stats strip: 412 Finished projects / 122 Ongoing projects / 155 Employees.
- Blog: "Company News" with 3 recent posts (thumbnail + title + excerpt + category + date + comment count).
- Footer: dual contact blocks (address/email/phone/hours) + "Contact Us" standalone block + latest projects thumbnail strip + social icons.

### Visual language
- Blue/gray industrial palette, bold section headings, iconography for feature blocks, masonry gallery, grayscale client logos.
- Contact info prominent in header bar and footer.
- Revolution Slider for hero motion.

### Unique features
1. **Top contact bar** — phone/email/hours always visible above nav (high conversion intent).
2. **Revolution Slider hero** — full-width image slider with layered text and dual CTAs.
3. **Accordion "About" section** — collapsible History/Quality/Future blocks save vertical space.
4. **"Load More" gallery** — pagination-free gallery expansion for portfolio.
5. **Client logo strip** — grayscale partner/client logos as trust signal.
6. **Tabbed feature blocks** — 6 features in tab interface rather than separate sections.
7. **Stats strip mid-page** — finished/ongoing projects + employee count as trust metrics.
8. **Blog with category + date + comments** — content marketing integrated into construction site.
9. **Dual footer contact** — general contact + dedicated "Contact Us" block with separate hours (Mon–Fri 10–20, Sun 12–16).

---

## 4. Cross-Site Pattern Summary (Construction/Industrial Theme Conventions)

| Pattern | Architect Demo | Construction Demo | Relevance to TEM Associates |
|---------|---------------|-------------------|----------------------------|
| Hero image + headline | Yes (editorial) | Yes (slider) | TEM: photograph leads, hero enters once on load |
| Services grid | 3 cards | Intro icons (4) | TEM: offer section with 3 service cards |
| Portfolio/gallery | Project grid | Masonry + Load More | TEM: visit block / offer as project showcase |
| Team section | Headshot grid | None | TEM: about section with team photo |
| Stats counter | Years/Projects/Awards/Employees | Projects/Ongoing/Employees | TEM: hard fact "22 years" on first screen |
| Testimonials | Pull quote + avatar | Quote block | TEM: not needed for service kind (avoid invented quotes per rules) |
| Contact bar (top) | No | Yes | TEM: footer contact only per rules (street+district, .example email) |
| Blog/News | News link only | Full blog section | TEM: not required for initial scope |
| Client logos | No | Yes (grayscale strip) | TEM: avoid per rules (no invented clients) |

---

## 5. Theme-Source Notes

- **Colorlib (#1 buildcraft, #5 braxit, #6 pivot, #7 sparsh):** Free/premium construction & business HTML themes. Could not extract via static fetch (JS framework selector). Typically feature: sticky nav, hero with CTA, service cards, portfolio grid, testimonials, contact form, footer.
- **Themeforest #4 (Bauer — Construction and Industrial WordPress Theme):** Premium industrial/construction WP theme. Could not extract beyond buy page. Typically features: heavy industrial palette, equipment/machinery imagery, service catalog, project case studies, RFQ/contact forms.

---

## 6. Recommendations for TEM Associates (per DESIGN_RULES.md)

Apply these reference patterns through the design rules lens:

1. **Photograph-led hero** (like Architect demo) — TEM Associates office/site photo, not slider.
2. **Service cards** (like both demos) — 3 cards: Commercial fit-outs, Industrial facilities, Developer consulting.
3. **Stats hard fact** — "22 years of scheduled delivery" on first screen (replaces multi-number counter to avoid clutter).
4. **Team photo in About** (like Architect demo) — real team photo, no invented reviews/quotes.
5. **Contact in footer only** (unlike Construction top bar) — street + district, `.example` email, no phone in real format (per tasteskill rule 9).
6. **No client logo strip, no invented testimonials** (per tasteskill Never list).
7. **One section per screen, equal edges** — visit block, offer, about, booking each on their own screen.

---

## 7. Sites Requiring Manual Review

The following could not be analyzed via automated fetch and should be reviewed manually in a browser:
- `preview.colorlib.com/#buildcraft`
- `preview.colorlib.com/#braxit`
- `preview.colorlib.com/#pivot`
- `preview.colorlib.com/#sparsh`
- `preview.themeforest.net/item/bauer-construction-and-industrial-wordpress-theme/full_screen_preview/23904858`
