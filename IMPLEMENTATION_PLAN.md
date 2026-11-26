# Implementation Plan — TEM Associates Website (Full Content Included)

Source of truth: `TEM_PDF_Comprehensive_Report.txt` (18-page PDF, all copy extracted below).
Design rules: `DESIGN_RULES.md` (no gradients, no dark heroes, no loops, soft radius, no violet/lavender, hero enters once via `data-enter`, h1 = category+buyer, buttons verb+object, `.example` email, no invented testimonials/logos, no captions under images).
Reference research: `NEW_SITE_RESEARCH.md` (23 sites, patterns adopted).

---

## ⚠️ Architecture Decision Note

**Single-page vs multi-page was my assumption, not your instruction.** You never specified whether TEM should be a single-page site (`index.html` with anchor sections) or multi-page (`index.html`, `about.html`, `projects.html`, etc.). I chose single-page when drafting this plan and building the code — that was **my mistake**. If you prefer multi-page, the site can be split into separate files at any time.

Current build: **single-page** (`index.html` with all sections, nav anchors to `#hero`, `#projects`, `#services`, `#expertise`, `#about`, `#contact`).

---

## Nav Structure (6 items)

`Home | Projects | Services | Expertise | About | Contact`

---

## SCREEN 1 — HERO (Home)

**Source:** PDF Page 1
**Pattern borrowed:** Turner Construction ("What do you want to build?" interactive popup), Bouygues (rotating verb phrases)

**Copy:**
- Logo: TEM Associates Projects India Pvt Ltd
- h1: `Pioneering Design, EPC Execution & Comprehensive Project Management Consultancy in Infrastructure`
- Sub: `Roads & Bridges • Buildings & Infra • Railways & DFC • Energy & Waste • Software Development (PMC)`
- Interactive hero phrase: `What do you need to build?` → opens popup with 3 paths:
  1. **Plan a Project** → scroll to Services
  2. **Explore Our Work** → scroll to Projects (Track Record)
  3. **Talk to Us** → scroll to Contact
- Stats bar (under hero): `15+ Years` | `33 Engineering Staff` | `66% Advanced Degrees` | `100% Direct Leadership Accountability` [Jacobs/WSP stat-bar pattern]
- Hero image: `TEM_PDF_Images/project_highway_railway.jpeg` (full-bleed, `data-enter` once)
- Phone visible in hero area: `+91 8220075006`

**Elements:** `<section id="hero">` with hero image, h1, sub, 3-path popup trigger, stats grid, phone chip

---

## SCREEN 2 — VISIT (Home, below hero)

**Source:** PDF Page 18 (contact block)
**Pattern borrowed:** RV Construction (phone repeated, WhatsApp), HOCHTIEF (named contacts)

**Copy:**
- h2: `Visit Us`
- Registered Office: `TEM Associates Projects India Pvt Ltd, Sriram Complex, 1st Street, 1st Floor, 562-B, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India.`
- Branch Office: `TEM Associates Projects India Pvt Ltd, 5/311-1-1, Sivakasi – Vembakkottai Road, Mankundampatti, Sivakasi - 626128 Virudhunagar Dist., Tamilnadu, India`
- Email: `temprojects.example@gmail.com` [rule: .example email]
- Phone: `+91 8220075006`
- WhatsApp CTA: `WhatsApp +91 8220075006` [RV Construction pattern]

**Elements:** Two-column office cards, contact chips (phone/email/whatsapp), map placeholder

---

## SCREEN 3 — SERVICES (Services)

**Source:** PDF Page 8 ("OUR COMPREHENSIVE ACTIVITIES & SERVICES")
**Pattern borrowed:** Fluor capability cards (image + label, no body copy on cards)

**Copy:**
- h2: `Our Services`
- Intro: `General Construction Contractor — turnkey execution for Infrastructure Projects in Buildings, Roads, Railways, Energy, Waste Management, and Irrigation.`

**Service cards (6):**
1. **Feasibility & DPR** — Detailed Project Reports, technical feasibility, and financial modeling.
2. **Detailed Design & Engg** — Pre-engineering, structural analysis, and quantity estimation.
3. **Geotechnical & Traffic** — Sub-soil investigation, traffic surveys, capacity & load analysis.
4. **PMC & Supervision** — Full Project Management Consultancy, site supervision & quality control.
5. **Value Engineering** — Cost optimization, process streamlining & sustainable solutions.
6. **ERP Implementation** — Custom ERP development for real-time project tracking & management.

**Elements:** 6 capability cards (image + title + one-line description)

---

## SCREEN 4 — VERTICALS (Services, below Services)

**Source:** PDF Page 7 ("ENGINEERING VERTICALS WE SERVE")
**Pattern borrowed:** DPR market cards, Bouygues key solutions carousel

**Copy:**
- h2: `Engineering Verticals We Serve`

**Vertical cards (6):**
1. **Roads & Bridges** — Highways (National, State & MDR), Widening & Strengthening existing roads, Major Bridges, Flyovers & Grade Separators.
2. **Railways Infrastructure** — Dedicated Freight Corridors (DFC), Zonal Railway Execution (RVNL), Port Connectivity Railway Lines.
3. **Airport Engineering** — Feasibility & Master Planning, Runways, Taxiways & Aprons, Terminal Building Design & Construction.
4. **Irrigation Infrastructure** — Gravity Canals, Lift Irrigation Schemes (LIS), pump stations, and major earthworks in rock & soil.
5. **Buildings & Structures** — Integrated Townships, Institutional Campuses, Industrial Plants, and Prefabricated Factories.
6. **Energy & Waste Management** — Solar Power Plants globally, Municipal Solid Waste (MSW) Pyrolysis Processing Plants, and Clean Energy.

**Elements:** 6 vertical cards with image + title + one-line blurb

---

## SCREEN 5 — CAPABILITIES (Expertise)

**Source:** PDF Page 5 ("CORE TECHNICAL EXPERTISE") + Page 6 ("TEM'S KEY ORGANIZATIONAL STRENGTHS")
**Pattern borrowed:** RV Construction stage-based listing (01-07)

**Copy:**
- h2: `Our Capabilities`

**Left column — Core Technical Expertise:**
1. Project Execution
2. System Compliance Reports (SCR)
3. Design & Engineering
4. Schedule Integration
5. Project Control & PMS (Performance Measuring System)
6. MPCS Controls (Management Planning and Controlling Schedules)

**Right column — Organizational Strengths:**
- Leadership & Workforce: Strong, experienced and dedicated management team and skilled work force. Project managers reporting to Director / Regional Head are responsible for the quality and timely completion of their projects.
- Governance & QA/QC: 100% Direct Leadership Accountability on Quality & Schedule.
- Stat counters: `15+ Years` operating history | `33` engineering staff | `66%` managers holding advanced engineering degrees | `100%` direct leadership accountability.

**Elements:** Two-column layout: expertise list (stage-numbered 01-06) + strengths cards + stat counters

---

## SCREEN 6 — TRACK RECORD: MEGA PROJECTS (Projects, chapter 1 of 3)

**Source:** PDF Page 5 ("TRACK RECORD OF KEY MEGA PROJECTS MANAGED")
**Pattern borrowed:** HCC news list (₹ values), L&T project cards

**Copy:**
- h2: `Track Record: Key Mega Projects Managed`
- MD credit: `Mr. P. Anantharaj — M.E (Master in Transportation Engineering & Management) — 24+ Years of Leadership Experience across Roads, Bridges, Railways, Irrigation, Buildings, Energy & Waste Management.`

**Project cards (each with project name + value + client):**
1. Hiriyur – Bellary Road Project — ₹269 Cr (L&T)
2. Tumkur – Sira Road Project — ₹153 Cr (L&T)
3. Chennai Bypass Project — ₹505 Cr (HCC)
4. Hotel & Resort (Abu Dhabi, UAE) — AED 750 Million (Shapoorji Pallonji)
5. ASPOCOMP Factory (Sriperumbudur) — ₹50 Cr (ETA)
6. Salem – Ulundurpet Highway Project — ₹430 Cr (Maytas)
7. Pondicherry – Tindivanam Tollway — ₹220 Cr (Maytas)
8. Moradabad – Bareilly Expressway — ₹550 Cr (Ramky)
9. Dedicated Freight Corridor Railway (UP) — ₹150 Cr (RCM)
10. Lift Irrigation Projects (KLIS10 & MLIS) — ₹250 Cr (NIPL RCMIL)
11. Vikravandi Sethiathoppu Road (NH45 C) — ₹517 Cr (TMPL)
12. Solapur – MH/KA Border NH9 4-Laning — ₹119 Cr (TMPL)

**Elements:** Project grid cards: project name (bold) + value + client in small text. Video gallery link at bottom.

---

## SCREEN 7 — TRACK RECORD: DESIGN & ENGINEERING (Projects, chapter 2 of 3)

**Source:** PDF Page 10 ("TRACK RECORD: DESIGN & ENGINEERING PROJECTS")
**Pattern borrowed:** HCC project list format

**Copy:**
- h2: `Track Record: Design & Engineering Projects`

**Project list:**
1. SRM University, Haryana (Sonipat) — Design & Detailed Engineering for internal road network (Bhargav Associates, Chennai)
2. VIMS Medical College, VIZAG — Design and Detailed Engineering for road networks (Bhargav Associates, Chennai)
3. Vikkravandi to Vadalur Bypass (NH45C) — Pre-engineering works for 4-Laning (0+000 to 54+560) in TN (VGN Infra, Chennai)
4. Chennai Outer Ring Road — Pre-engineering works for 4-Laning in Tamil Nadu (VGN Infra, Chennai)
5. TEERTHA Integrated Township, Trichy — Design, Detailed Engineering, PMC & Construction Contractor
6. Ramco Cement Plant, Trichy — Design & Detailed Engineering for internal roads (Sree Infratech, Trichy)
7. Srinagar to Banihal Stretch (NH1A) — Design and Detailed Engineering works (RIL, Hyderabad)
8. Nagpur to Waiganga Stretch — Pre-engineering works (RIL, Hyderabad)
9. Sutlej River High Level Bridge — 4-Lane Bridge across River Sutlej at Ropa Bye-Pass (RIL, Hyderabad)
10. KBITS & BMTC Bangalore — Pre-Engineering works (RIL, Hyderabad)

**Elements:** Simple project list with name + description + client

---

## SCREEN 8 — TRACK RECORD: CONSTRUCTION & INFRASTRUCTURE (Projects, chapter 3 of 3)

**Source:** PDF Page 11 ("TRACK RECORD: CONSTRUCTION & INFRASTRUCTURE WORKS")
**Pattern borrowed:** HCC project list format

**Copy:**
- h2: `Track Record: Construction & Infrastructure Works`

**Project list:**
1. Sivagangai to Tirumayam Road — Construction of Bridges and Culverts in Tamil Nadu (DBL, Bhopal)
2. NH81 Missing Link (Malda, WB) — Construction & Pre-Engineering of new road from Km 46.550 to 59.697 on EPC mode
3. Hospet to Chitradurga Road — Hard Rock Excavation (3 Lakh cum) and Embankment/Subgrade (4.5 Lakh cum) for L&T
4. Pagi to Vikarabad Road Project — Widening and Strengthening from Double lane to four lane road in Telangana (18.025 km)
5. Kaleshwaram Lift Irrigation (Package 8) — Gravity canal excavation via M/s Battula Bramaiah (Subsidiary). Total 10.5 Lakh cum excavation including 1.1 Lakh cum hard rock (MEIL, ₹9.9 Cr)
6. Hospet Chitradurga Highway — Controlled blasting for hard rock excavation along alignment (L&T, Karnataka)
7. Integrated Municipal Solid Waste (MSW) Plant — Fabrication & Erection of Pyrolysis Processing Plant (50 TPD Capacity, 60 MT Weight) including civil foundation and 14,400 sq.ft prefabricated factory building
8. Global Solar Power Plants — Turnkey execution and civil/structural engineering for various Solar Power Plants across the world under SAMWHAN TEM JV

**R&D note:** `EPAD (Electromechanical Power Amplifying Device)` — Newly Invented and Patented Technology for Power Generation.

**Elements:** Project list + EPAD patent callout card

---

## SCREEN 9 — TRACK RECORD: CONSULTANCY PROJECTS (Projects, bonus chapter)

**Source:** PDF Pages 12-13 ("TRACK RECORD: Consultancy Project")
**Pattern borrowed:** HCC consultancy list

**Copy:**
- h2: `Track Record: Consultancy Projects`

**Project list:**
1. Risk Analysis for Investigation, Design, Sustainable Development and Construction of Roads, Cross Drainage Works, Bridges, Storm water Drains, Culverts, Water Supply, Sewerage Network, Utility Ducts for Power & ICT, Reuse Network, Pedestrian Tracks, Cycle tracks, Avenue Plantation & Street Furniture etc., ADCL, Package IX(N4,N9, N14), Avexa Anas JV, Project Value: INR 276 Crores.
2. Pre-bid Engineering services for Hybrid Annuity Projects Various Road Packages (PN27, PN28, PN29, PN30, PN32, P33, P34, NAG143) in Maharashtra, Avexa Anas JV, Bid Project Cost: INR 1788 Crores.
3. Pre-bid Engineering services for Four Laning of Tumkur to Shivamogga Section of NH206 in Karnataka on Hybrid Annuity Mode (Package I), PRG Buildcon, Hyderabad.
4. Pre-bid Engineering services for Access Controlled Nagpur-Mumbai Super Communication Expressway - Maharashtra Prosperity Corridor Km 296+000 to 347+190 (Length - 51.190 Km) Package VII, PRG Buildcon, Hyderabad.
5. Pre-bid Engineering services for Investigation, Design and Construction of Roads, Bridges, Storm water Drains, Culverts, Water Supply, Sewerage Network, Utility Ducts for Power & ICT, Reuse Network, Pedestrian Tracks, Cycle tracks, Avenue Plantation & Street Furniture etc. in Amaravati Capital City, Andhra Pradesh on Design, Build, Item Rate (Lump sum) basis, PRG Buildcon, Hyderabad.
6. Four laning of NH-161 from Kandi to Ramsanpalle (Design Length = 39.980 Km) in Telangana under Bharatmala Pariyojna on EPC Mode, PRG Buildcon, Hyderabad.
7. Executive Summary For Identification Of Project Risks, Material Leads And Execution Strategy Based On Site Investigation for Rehabilitation and Up-gradation of Sindoor River to Start of Bareli bypass section of NH-12 from existing km 130/10 to km 193/0 to four lane with paved shoulders in Madhya Pradesh on EPC Mode under NHDP-III, PRG Buildcon, Hyderabad.
8. Design Detailed engineering works for internal road development, SRM University, Haryana, Sonipet, Bhargav Associates, Chennai
9. Design and detailed Engineering works for Road networks, VIMS Medical College, VIZAG, Bhargav Associates, Chennai
10. Pre-engineering works for Four Laning of Vikkravandi to Vadalur Bypass of NH45C in Tamil Nadu, VGN Infra, Chennai
11. Pre-engineering works for Four Laning of Chennai Outer Ring Road in Tamil Nadu, VGN Infra, Chennai
12. Design, Detailed Engineering and Project Management works for TEERTHA integrated township, Trichy, Tamil Nadu
13. Construction of Bridges and Culverts for the road project from Sivagangai to Tirumayam in Tamil Nadu, DBL, Bhopal
14. Infrastructure development work for manufacturing unit of two wheeler component of Hero Groups in Tamil Nadu, Cheyyar, Chennai
15. Design and Detailed Engineering works for Srinagar to Banihal stretch (NH1A), RIL, Hyderabad
16. Pre-engineering works for Nagpur to Waiganga, RIL, Hyderabad
17. Pre-Engineering works for Jaipur Ring Road, RIL, Hyderabad
18. Pre-engineering works for Construction of 4 Lane High Level Bridge across river Sutlej crossing Ropa Bye-Pass (Phase-II) in District Rupnagar & SBS Nagar, RIL, Hyderabad
19. Pre-Engineering works for KBITS and BMTC, Bangalore, RIL, Hyderabad
20. Pre-Engineering Works construction of new road at the missing link portion of NH81 along the approved alignment between Harish Chandrapur & eastern approach of Kalindri Bridge from km 46.550 to km 59.697 in Malda, West Bengal on EPC mode for Bright Wave Constructions
21. Wonderland Integrated self Sustainable Smart community project at Villicheri, Kovilpatti Town, Tuticorin District, Tamil Nadu

**Elements:** Simple project list (21 items), grouped by client

---

## SCREEN 10 — MOBILIZATION CAPACITY (Projects)

**Source:** PDF Page 9 ("MOBILIZATION CAPACITY (PLANT & MACHINERY)")
**Pattern borrowed:** RV Construction behind-the-scenes/site imagery

**Copy:**
- h2: `Mobilization Capacity`
- Sub: `All plant and heavy machinery are owned/hired and ready for immediate deployment across project sites nationwide.`
- Stat: `120` skilled & unskilled labour workforce

**Plant & Machinery table (14 items):**
| # | Equipment | Available Fleet | Unit |
|---|---|---|---|
| 1 | Hydraulic Excavator (EX 200) | 4 | Nos |
| 2 | Hydraulic Excavator (PC 300) | 2 | Nos |
| 3 | Hydraulic Excavator (Kobelco 350) | 1 | Nos |
| 4 | Dumpers (10 Tyre Heavy Fleet) | 24 | Nos |
| 5 | Motor Grader (9m Width) | 2 | Nos |
| 6 | Vibratory Roller (10 Tonne) | 3 | Nos |
| 7 | Sensor Paver (9m Width) | 1 | Nos |
| 8 | Tandem Roller (10 Tonne) | 2 | Nos |
| 9 | Shuttering Plates (1x1 & 1.2x1.2 Size) | 2300 | Sqm |
| 10 | Hydra Mobile Crane (12 Tonne) | 1 | Nos |
| 11 | Crawler Mounted Drilling Rig | 1 | Nos |
| 12 | Rotary Piling Rig (Tripod & Winch) | 3 | Nos |
| 13 | Four Wheelers | 9 | Nos |
| 14 | Total Station | 1 | Nos |

**Elements:** Equipment table + workforce stat + site imagery

---

## SCREEN 11 — MD / ORG (About)

**Source:** PDF Page 5 (MD profile) + Page 6 (org strengths)
**Pattern borrowed:** Arup employee portraits + quotes

**Copy:**
- h2: `Leadership & Organization`
- h3: `Managing Director`
- `Mr. P. Anantharaj — M.E (Master in Transportation Engineering & Management)`
- `24+ Years of Leadership Experience across Roads, Bridges, Railways, Irrigation, Buildings, Energy & Waste Management.`
- Previous employer experience: `L&T, HCC, SPML, MAYTAS, RAMKY, RCM, NIPL & TMPL`
- Core values (as pillars): `Trust • Teamwork • Customer Satisfaction • Commitment • Creativity` [page 4]

**Vision:** `To build a unique, highly diversified business unit capable of understanding the Global Market as our customer.` [page 4]

**Org chart image:** `TEM_PDF_Images/tem_org_chart.png`

**Elements:** MD photo + bio + previous employers list + values chips + org chart image

---

## SCREEN 12 — CORE VALUES (About, below MD/Org)

**Source:** PDF Page 4 ("CORPORATE VISION, MISSION & VALUES")
**Pattern borrowed:** DPR values-as-full-sections

**Copy:**
- h2: `Core Operating Values`
- Vision: `To build a unique, highly diversified business unit capable of understanding the Global Market as our customer. Express the Creativity involved in sourcing Unique Solutions Worldwide that has undisputed level of competence in Customer understanding and ensuring that unconditional Quality is delivered at all phases of business.`

**Five value cards:**
1. **Trust**
2. **Teamwork**
3. **Customer Satisfaction**
4. **Commitment**
5. **Creativity**

**Elements:** 5 value cards with title only (no invented descriptions per rules)

---

## SCREEN 13 — JVs / CLIENTS (About)

**Source:** PDF Page 15 ("OUR CLIENTS & STRATEGIC JOINT VENTURES")
**Pattern borrowed:** L&T sector cards, SP companies list

**Copy:**
- h2: `Strategic Joint Ventures & Clients`

**JV cards (3):**
1. **TEM REAP JV** — REAP Infrastructure Management Pvt Ltd (Delhi). RJAG Mogan Associates and their consortium Executed Several Projects in Canada and USA.
2. **SAMWHAN TEM JV** — SAMWHAN Power Co. Ltd (South Korea).
3. **TEM TRIKAAL JV** — Trikaal Tech Enterprises Pvt Ltd (Chennai).

**Clients list (14):**
`• L&T, Karnataka • RIL, Hyderabad • DBL, Madhya Pradesh • VGN Infra, Chennai • Bhargav Associates • VVIP Infra Homes • Maccaferri Environmental • Sree Infratech, Trichy • BPM Projects • NIPL RCMIL, Hyd • Prudhvi Infra Projects • Bright Wave Const.`

**NHAI client card:** `National Highways Authority of India`

**Elements:** 3 JV cards + client name list + NHAI highlight

---

## SCREEN 14 — R&D / TRIKAAL (Expertise)

**Source:** PDF Page 14 ("TRACK RECORD: Research and Development ( R&D) Projects")
**Pattern borrowed:** WSP sector cards

**Copy:**
- h2: `Research & Development`
- `EPAD (Electromechanical Power Amplifying Device)` — A System and Method for Power Amplification (EPAD device manufacturing and sales). Newly Invented and Patented technology for Power Generation.
- `Integrated Pyrolysis Waste Processing Plant` — Design, Engineering, Manufacturing / Procurement, Supply, Erection, Installation, Commissioning and Maintenance of Integrated Pyrolysis Waste (Segregate Plastic) Processing Plant.

**Elements:** 2 R&D cards (EPAD + Pyrolysis) + patent note

---

## SCREEN 15 — CONTACT (Contact)

**Source:** PDF Page 18
**Pattern borrowed:** HOCHTIEF named contacts, RV Construction WhatsApp

**Copy:**
- h2: `Contact Us`
- Registered Office: `TEM Associates Projects India Pvt Ltd, Sriram Complex, 1st Street, 1st Floor, 562-B, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India.`
- Branch Office: `TEM Associates Projects India Pvt Ltd, 5/311-1-1, Sivakasi – Vembakkottai Road, Mankundampatti, Sivakasi - 626128 Virudhunagar Dist., Tamilnadu, India`
- Email: `temprojects.example@gmail.com` [rule: .example]
- Phone: `+91 8220075006`
- WhatsApp: `WhatsApp +91 8220075006`

**Contact form fields:** Name, Email, Phone, Message, Submit (verb+object: "Send Enquiry")

**Elements:** Two office address cards + contact chips + form

---

## Footer (all screens)

- Logo: TEM Associates Projects India Pvt Ltd
- Nav repeat: Home | Projects | Services | Expertise | About | Contact
- Address: Sriram Complex, Gandhipuram, Coimbatore - 641012, Tamil Nadu, India
- Phone: +91 8220075006
- Email: temprojects.example@gmail.com
- Legal: Copyright notice (no invented year range)

---

## Image-to-Screen Mapping (22 curated images)

| Image | Screen | Purpose |
|---|---|---|
| `tem_logo.png` | Header + Footer | Brand |
| `project_highway_railway.jpeg` | Hero | Full-bleed hero image (`data-enter`) |
| `tem_office_coimbatore.jpeg` | Visit / Contact | Registered office |
| `tem_office_sivakasi.jpeg` | Visit / Contact | Branch office |
| `tem_md_portrait.jpeg` | MD/Org | MD photo |
| `tem_org_chart.png` | MD/Org | Organization chart |
| `tem_project_highway.jpeg` | Track Record Mega | Road/highway project |
| `tem_project_railway.jpeg` | Track Record Mega | Railway/DFC project |
| `tem_project_building.jpeg` | Track Record Mega | Building/infra project |
| `tem_project_energy.jpeg` | Verticals | Energy sector |
| `tem_project_airport.jpeg` | Verticals | Airport sector |
| `tem_project_irrigation.jpeg` | Verticals | Irrigation sector |
| `tem_site_excavation.jpeg` | Mobilization | Behind-the-scenes site |
| `tem_site_equipment.jpeg` | Mobilization | Machinery fleet |
| `tem_epad_infographic.jpeg` | R&D | EPAD patent visual |
| `tem_pyrolysis_plant.jpeg` | R&D | Waste processing plant |
| `tem_jv_reap.jpeg` | JVs/Clients | REAP JV |
| `tem_jv_samwhan.jpeg` | JVs/Clients | SAMWHAN JV |
| `tem_jv_trikaal.jpeg` | JVs/Clients | TRIKAAL JV |
| `tem_client_logos.jpeg` | JVs/Clients | Client group (real logos only) |
| `tem_values_graphic.png` | Core Values | Values backdrop |
| `tem_footer_bg.jpg` | Footer | Footer accent |

*(Image filenames are suggested; actual filenames in `TEM_PDF_Images/` must be matched during build.)*

---

## Build Order

**Phase 1 — index.html rewrite**
- Shell: `<!DOCTYPE html>`, `<html lang="en">`, `<head>` with charset, viewport, title, favicon, CSS link
- Header: logo (left), nav (right), phone chip
- 13 `<section>` blocks in order: Hero, Visit, Services, Verticals, Capabilities, Track Record ×4 (Mega/Design/Construction/Consultancy), Mobilization, MD/Org, Core Values, JVs/Clients, R&D, Contact
- Footer
- Modal/popup markup for hero 3-path trigger
- Video embed container for Track Record (HCC pattern)

**Phase 2 — css/main.css**
- CSS custom properties: `--color-primary`, `--color-text`, `--bg-body`, `--radius`, `--spacing-unit`, `--max-width`
- Reset, typography scale (h1–h6, body, small)
- Layout: container, grid, flex utilities
- Section template: padding, heading style, divider
- Component styles: stat-card, capability-card, vertical-card, project-card, value-card, jv-card, table, form, modal
- Breakpoints: 1440 (desktop), 1024 (tablet), 768 (mobile large), 390 (mobile small)
- No gradients, no dark heroes, soft radius, no violet/lavender

**Phase 3 — js/main.js**
- Smooth scroll for nav anchors
- Hero 3-path popup open/close
- Mobile menu toggle
- Accordion for Core Values / organizational strengths (optional)
- Video lightbox for Track Record

**Phase 4 — Content fill + image wiring**
- Paste all copy above into HTML sections
- Wire 22 images with `loading="lazy"`, `alt` text (descriptive, no captions)
- Verify `.example` email used, no invented testimonials

---

## QA Checklist

- [ ] Web Interface Guidelines audit (per `AUDIT_RESULTS.md`)
- [ ] Tasteskill gate: rule 3 waived (13 screens OK per `waivers.json`), rule 6 (no violet/lavender), no gradients, no dark heroes
- [ ] Viewport tests: 1440 / 1024 / 768 / 390
- [ ] All copy sourced from PDF report (no invented content)
- [ ] No testimonials or logo walls invented
- [ ] No captions under images
- [ ] h1 = category + buyer on hero
- [ ] Buttons = verb + object
- [ ] Email = `.example` only
- [ ] Phone visible in hero + contact
- [ ] Hero enters once (`data-enter`)
