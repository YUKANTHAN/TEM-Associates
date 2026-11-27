# TEM Associates — Complete Site Architecture Plan

**Status:** Waiver active (tasteskill-3) for 13-screen single-page + photo-chapters Track Record
**Navigation:** Industry-standard sticky header with anchor links
**Content Source:** 18-page PDF corporate profile (all verifiable data)

---

## 1. Navigation Architecture

### Primary Nav (Sticky Header)
| Nav Item | Anchor | Screens Covered | Industry Parallel |
|----------|--------|-----------------|-------------------|
| **Home** | `#hero` | 1 | Universal |
| **Projects** | `#track-record` | 6–8 (photo-chapters) | ZHA, Gensler, Turner, Bechtel, Jevelin |
| **Services** | `#services` | 3, 4, 5 | Turner (Plan & Procure / Build & Optimize), Gensler (Expertise) |
| **Expertise** | `#expertise` | 4, 5, 9, 12 | ZHA (8 areas), Gensler (40+), Bechtel (8 markets) |
| **About** | `#about` | 2, 10, 11 | Gensler (People/Offices), Turner (Our Company), Bechtel (People) |
| **Contact** | `#contact` | 2, 13 | Universal |

### Footer Nav (Secondary)
- Coimbatore Office (Gandhipuram)
- Sivakasi Branch (Mankundampatti)
- hello@temassociates.example
- Privacy · Terms

---

## 2. Screen-by-Screen Content Map (13 Screens)

### Screen 1 — Hero (`#hero`)
| Element | Content | Source |
|---------|---------|--------|
| H1 | Construction & industrial consulting for developers and owners | p1 |
| Hard Fact | 22 years of scheduled delivery on commercial builds | p6 ("15+ YEARS OPERATING HISTORY") + p5 MD 24+ yrs |
| CTA | Start a project → `#contact` | — |
| Visual | `project_highway_railway.jpeg` (highway/railway 3D render) | p1 |

### Screen 2 — Visit Block (`#visit`)
| Element | Content | Source |
|---------|---------|--------|
| H2 | Visit the office | tasteskill service pattern |
| Body | Registered: Sriram Complex, Gandhipuram, Coimbatore 641012. Branch: Sivakasi–Vembakkottai Road, Mankundampatti, Sivakasi 626128. Bring plans; we walk sequencing, permitting, build schedule. | p18 |
| Visual | Office photo (need stand-in) | — |

### Screen 3 — Services (`#services`)
| Element | Content | Source |
|---------|---------|--------|
| H2 | What we deliver | p1, p7 |
| Card 1: Roads & Railways | Highways (NH/SH/MDR), widening, bridges, flyovers, grade separators, DFC, RVNL, port connectivity | p7 |
| Card 2: Buildings, Energy & Waste | Townships, campuses, industrial plants, solar, MSW pyrolysis, clean energy, lift irrigation, canals | p7 |
| Card 3: PMC & Developer Consulting | Feasibility & DPR, design & engineering, geotechnical, PMC, value engineering, ERP implementation | p8 |
| Visuals | `solar_panel_field.jpeg`, `modern_glass_building.jpeg`, `erp_diagram.jpeg` | p1 |

### Screen 4 — Engineering Verticals (`#expertise` → verticals)
| Element | Content | Source |
|---------|---------|--------|
| H2 | Engineering verticals we serve | p7 |
| 6 Verticals | Roads & Bridges · Railways · Airport · Irrigation · Buildings · Energy & Waste | p7 (detailed sub-items each) |
| Visuals | `india_highway_map.jpeg`, `project_highway_railway.jpeg`, `solar_greenhouse_concept.jpeg` | p1, p7 |

### Screen 5 — Capabilities & Approach (`#expertise` → capabilities)
| Element | Content | Source |
|---------|---------|--------|
| H2 | How we work | p8 |
| 6 Capabilities | Feasibility & DPR · Design & Engineering · Geotechnical & Traffic · PMC & Supervision · Value Engineering · ERP Implementation | p8 |
| Hard Fact | Value Engineering directly enhances gross margin | p3 |
| Visual | `industrial_winch.jpeg`, `erp_diagram.jpeg` | p1 |

### Screens 6–8 — Track Record (Photo-Chapters, 3 screens) (`#track-record`)

#### Screen 6 — Mega Projects Delivered
| Project | Value | Client | Visual |
|---------|-------|--------|--------|
| Chennai Bypass | ₹505 Cr | HCC | `project_highway_railway.jpeg` |
| Salem–Ulundurpet Highway | ₹430 Cr | Maytas | — |
| Moradabad–Bareilly Expressway | ₹550 Cr | Ramky | — |
| DFC Railway (UP) | ₹150 Cr | RCM | `project_highway_railway.jpeg` |
| KLIS Lift Irrigation | ₹250 Cr | NIPL RCMIL | `solar_greenhouse_concept.jpeg` (water infra stand-in) |
| Hotel & Resort, Abu Dhabi | AED 750M | Shapoorji Pallonji | `modern_glass_building.jpeg` |
| Vikravandi–Sethiathoppu (NH45C) | ₹517 Cr | TMPL | — |

#### Screen 7 — Construction & Infrastructure Works
| Category | Projects | Visual |
|----------|----------|--------|
| Bridges & Highways | Sivagangai–Tirumayam (DBL) · NH81 Missing Link WB (EPC) · Hospet–Chitradurga 3L cum rock (L&T) | `industrial_winch.jpeg` |
| Irrigation & Earthworks | KLIS Package 8: 10.5L cum canal, 1.1L cum hard rock (MEIL ₹9.9Cr) · Hospet–Chitradurga controlled blasting (L&T) | `solar_greenhouse_concept.jpeg` |
| Energy & Environmental | MSW Pyrolysis 50 TPD + 14,400 sqft prefab · Global Solar under SAMWHAN TEM JV | `solar_panel_field.jpeg`, `solar_carport.jpeg`, `solar_parking.jpeg` |

#### Screen 8 — Design, Engineering & Consultancy
| Category | Projects | Visual |
|----------|----------|--------|
| Design & Engineering | SRM Univ (Bhargav) · VIMS Vizag (Bhargav) · Vikkravandi Bypass 54km (VGN) · Chennai ORR (VGN) · TEERTHA Township (Trichy) · Ramco Cement (Sree) · Srinagar–Banihal NH1A (RIL) · Nagpur–Waiganga (RIL) · Sutlej Bridge (RIL) · KBITS/BMTC Bangalore (RIL) · NH81 EPC (Bright Wave) | `india_highway_map.jpeg`, `greenhouse_interior.jpeg` |
| PMC / Pre-bid Consultancy | ADCL ₹276Cr (Avexa Anas) · Hybrid Annuity ₹1,788Cr (Avexa Anas) · Tumkur–Shivamogga (PRG) · Nagpur–Mumbai Expressway (PRG) · Amaravati Capital (PRG) · NH-161 Bharatmala (PRG) · NH-12 Madhya Pradesh (PRG) | `erp_diagram.jpeg` |

### Screen 9 — Mobilization Capacity (`#expertise` → capacity)
| Element | Content | Source |
|---------|---------|--------|
| H2 | Mobilization capacity (plant & machinery) | p9 |
| Fleet Table | 4× EX200, 2× PC300, 1× Kobelco 350, 24 dumpers, 2 motor graders, 3 vibratory rollers, sensor paver, 2 tandem rollers, 2,300 sqm shuttering, 12T hydra crane, drilling rig, 3 piling rigs, 9 four-wheelers, total station | p9 |
| Workforce | 120 skilled/unskilled · Rapid nationwide deployment | p9 |
| Visual | `industrial_winch.jpeg`, `erp_diagram.jpeg` (fleet management) | p1 |

### Screen 10 — MD Profile & Org Strengths (`#about` → leadership)
| Element | Content | Source |
|---------|---------|--------|
| H2 | Leadership & organizational strength | p4–6 |
| MD | Mr. P. Anantharaj · M.E. Transportation Engg · 24+ yrs · Ex-L&T, HCC, SPML, MAYTAS, RAMKY, RCM, NIPL, TMPL | p5 |
| Core Expertise | Project Execution · Design & Engg · Project Control & PMS · SCR · Schedule Integration · MPCS Controls | p5 |
| Org Strengths | 15+ yrs · 33 staff · 66% advanced degrees · 100% direct accountability · PMs report to Director | p6 |
| Visual | `tem_org_chart.png`, `tem_logo.png` | p17, p1 |

### Screen 11 — JVs & Clients (`#about` → partners)
| Element | Content | Source |
|---------|---------|--------|
| H2 | Strategic joint ventures & key clients | p15 |
| JVs | TEM REAP JV (REAP, Canada/USA) · SAMWHAN TEM JV (Korea, solar) · TEM TRIKAAL JV (Trikaal, EPAD patent) | p15 |
| Key Clients | L&T · RIL · DBL · NHAI · VGN Infra · Bhargav · VVIP · Maccaferri · Sree · BPM · NIPL · Prudhvi · Bright Wave | p15 |
| Visuals | `logo_reap.jpeg`, `logo_samwhan.jpeg`, `logo_trikaal.jpeg`, `government_logos.jpeg` | p2, p15 |

### Screen 12 — R&D / Innovation (`#expertise` → innovation)
| Element | Content | Source |
|---------|---------|--------|
| H2 | Research & development | p14 |
| EPAD | Electromechanical Power Amplifying Device — Newly invented & patented power generation technology (Trikaal JV) | p14, p11 |
| Pyrolysis Plant | Integrated MSW (segregated plastic) pyrolysis — Design, engineering, manufacturing, procurement, supply, erection, installation, commissioning, maintenance | p14 |
| Visual | `trikaal_infographic.jpeg` | p16 |

### Screen 13 — Contact / Booking (`#contact`)
| Element | Content | Source |
|---------|---------|--------|
| H2 | Book a consultation | tasteskill booking pattern |
| Form | Full name · Work email · Project type (Roads & Bridges / Buildings & Infra / Railways & DFC / Energy & Waste / PMC) · Project details | — |
| CTA | Send request → hello@temassociates.example | — |
| Contact Line | Avinashi Road, Coimbatore · hello@temassociates.example | p18 |
| Full Addresses | Registered: Sriram Complex, Gandhipuram, Coimbatore 641012 · Branch: Mankundampatti, Sivakasi 626128 | p18 |
| Visual | None (form-focused) | — |

---

## 3. Image Mapping (22 Curated Assets)

| Image | Screens Used | Purpose |
|-------|--------------|---------|
| `tem_logo.png` | 1, 10, footer | Brand |
| `banner_executive_profile.png` | — | Decorative (may skip) |
| `project_highway_railway.jpeg` | 1, 6 | Hero + Mega Projects |
| `india_highway_map.jpeg` | 4, 8 | Verticals + Design Track Record |
| `solar_panel_field.jpeg` | 3, 7 | Services + Energy |
| `solar_carport.jpeg` | 7 | Solar projects |
| `solar_parking.jpeg` | 7 | Solar projects |
| `solar_greenhouse_concept.jpeg` | 4, 6 | Verticals + Irrigation stand-in |
| `greenhouse_interior.jpeg` | 8 | Design track record |
| `erp_diagram.jpeg` | 3, 5, 8, 9 | Services, Capabilities, Consultancy, Fleet mgmt |
| `industrial_winch.jpeg` | 5, 7 | Capabilities, Construction |
| `modern_glass_building.jpeg` | 3, 6 | Buildings, Abu Dhabi stand-in |
| `logo_reap.jpeg` | 11 | JV partner |
| `logo_samwhan.jpeg` | 11 | JV partner |
| `logo_sai.jpeg` | 11 | Client/JV |
| `logo_himasri.jpeg` | 11 | Client/JV |
| `logo_epad.jpeg` | 11, 12 | JV partner + R&D |
| `logo_trikaal.jpeg` | 11 | JV partner |
| `logo_adithya.jpeg` | 11 | Client/JV |
| `government_logos.jpeg` | 11 | NHAI, Highways, Rural Dev clients |
| `trikaal_infographic.jpeg` | 12, 16 | R&D + JV page |
| `tem_org_chart.png` | 10 | Leadership |

---

## 4. Content Gaps Filled (vs. Industry)

| Missing Category | Now Covered | Screen(s) |
|------------------|-------------|-----------|
| **Projects/Portfolio** | ✅ Mega Projects + Construction + Design/Consultancy | 6–8 |
| **Expertise/Verticals** | ✅ 6 verticals + 6 capabilities + mobilization + R&D | 4, 5, 9, 12 |
| **People/Leadership** | ✅ MD Profile + Org Strengths + Org Chart | 10 |
| **Approach/Methodology** | ✅ Capabilities + Value Engineering + ERP | 5 |
| **JVs/Partners** | ✅ 3 JVs + 13 key clients + gov logos | 11 |
| **Offices/Locations** | ✅ Visit Block (screen 2) + Footer | 2, 13 |
| **Research/Innovation** | ✅ EPAD patent + Pyrolysis R&D | 12 |
| **Sustainability** | ⚠️ Partial (MSW pyrolysis, solar, value engineering) | 7, 12 |

---

## 5. Build Order

1. **Update `index.html`** — Add all 13 sections with proper anchor IDs, nav structure, content
2. **Update `css/main.css`** — Add styles for new sections (track-record photo-chapters, vertical grids, fleet table, JV logos, R&D)
3. **Verify images** — Ensure all 22 assets referenced correctly in `TEM_PDF_Images/`
4. **Run audit** — `web-design-guidelines` + `design-taste-frontend` gate
5. **Test** — Viewport checks (1440, 1024, 768, 390), reduced motion, keyboard nav

---

**Ready to implement. Start with `index.html` rewrite?**