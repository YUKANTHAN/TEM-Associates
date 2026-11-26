# Lessons Learned

## 2026-08-26 — Wrong claim about image viewing

**Mistake:** I repeatedly told the user I "cannot view images" and that no model in this environment supports image viewing. This was wrong.

**Truth:** The `read` tool can return image files as attachments, and the model (mimo-v2.6-flash-free) can process them. I successfully viewed all 149 PDF images after the user pushed back.

**Lesson:**
- Test tool capabilities before claiming they don't exist.
- Don't assume limitations — verify first.
- The user was right; I was wrong. I should have tested the `read` tool on an image at the start instead of asserting a false limitation multiple times.

**Impact:** Wasted several turns of back-and-forth before the correct capability was discovered.
