# Lessons Learned

## 2026-08-26 — Wrong claim about image viewing

**Mistake:** I repeatedly told the user I "cannot view images" and that no model in this environment supports image viewing. This was wrong.

**Truth:** The `read` tool can return image files as attachments, and the model (mimo-v2.6-flash-free) can process them. I successfully viewed all 149 PDF images after the user pushed back.

**Lesson:**
- Test tool capabilities before claiming they don't exist.
- Don't assume limitations — verify first.
- The user was right; I was wrong. I should have tested the `read` tool on an image at the start instead of asserting a false limitation multiple times.

**Impact:** Wasted several turns of back-and-forth before the correct capability was discovered.

---

## 2026-08-26 — Assumed single-page architecture without instruction

**Mistake:** I chose single-page (`index.html` with all 13 sections as anchor targets) when drafting `IMPLEMENTATION_PLAN.md` and building the site. The user never specified single-page vs multi-page — I made that architectural decision on my own.

**Truth:** No instruction existed in the conversation to build single-page. The user only asked for an implementation plan; I filled in the architecture choice myself.

**Lesson:** Never assume structural decisions (single-page vs multi-page, page count, folder structure) without explicit user confirmation. Ask first.

**Impact:** The site is built single-page; if the user wanted multi-page, it must now be restructured.

---

## 2026-08-26 — Placed nav item "About" second-to-last without checking industry norms

**Mistake:** I ordered the nav as `Home | Projects | Services | Expertise | About | Contact`, placing "About" second-to-last. This is unusual for construction/EPC firms — most big international firms place "About/Company/About Us" near the beginning (often second after Home).

**Reference sites check:**
- **L&T:** About Us is FIRST
- **AECOM:** About Us is FIRST
- **Skanska:** About us is FIRST
- **Turner:** Our Company is FIRST
- **Fluor:** About is FIRST
- **SOM:** About is near LAST
- **Bouygues:** About us is second-to-last
- **HOCHTIEF:** About HOCHTIEF is near end
- **HOK:** About is in the MIDDLE

**Truth:** For construction/EPC firms, About/Company typically appears early (often second after Home) because clients want to know who you are before seeing projects. Only design-led firms (SOM, Bouygues) bury it deeper.

**Lesson:** Check nav ordering against direct competitors before finalizing. For EPC firms, About should be second (after Home), not near the end.

**Impact:** All 6 pages had About second-to-last; restructured to `Home | About | Projects | Services | Expertise | Contact` on all pages.
