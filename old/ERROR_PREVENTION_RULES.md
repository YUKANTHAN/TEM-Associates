# Error Prevention & Handling Rules

Rules to avoid repeating the mistakes documented in `LESSONS_LEARNED.md`, and how to handle them if they occur anyway.

---

## Rule 1: Verify Tool Capabilities Before Claiming Them

**Mistake avoided:** Claiming image viewing is impossible when `read` tool can return images.

**Prevention:**
- Before stating "I cannot do X" or "Tool Y does not support Z," test it once with a minimal example.
- If unsure, say: "I need to verify this capability before confirming."

**If it happens:**
- Stop immediately when corrected.
- Test the capability.
- Apologize briefly, correct the record, and proceed.
- Document in `LESSONS_LEARNED.md`.

---

## Rule 2: Never Assume Structural Decisions Without User Confirmation

**Mistakes avoided:** Single-page vs multi-page, nav order, folder structure, page count.

**Prevention:**
- Before making any structural decision (single-page vs multi-page, nav order, file count, section count), ask: "Did the user specify this?"
- If not specified, ask: "Would you like me to choose, or do you have a preference?"
- Document the decision and who made it in the plan file.

**If it happens:**
- Revert the assumption.
- Ask the user for their preference.
- Document the mistake in `LESSONS_LEARNED.md`.

---

## Rule 3: Check Industry Norms Before Finalizing Structural Choices

**Mistake avoided:** Placing nav item "About" second-to-last when construction/EPC firms place it early.

**Prevention:**
- Before finalizing nav order, section order, or any structural layout, research 3-5 direct competitors.
- Document what competitors do in your notes.
- Match industry convention unless the user explicitly wants something different.

**If it happens:**
- Reorder to match industry norm.
- Document the mistake and the competitor comparison in `LESSONS_LEARNED.md`.

---

## Rule 4: Keep Personal Mistakes Out of Project Documentation

**Mistake avoided:** Putting personal mistake notes in `IMPLEMENTATION_PLAN.md` instead of `LESSONS_LEARNED.md`.

**Prevention:**
- Project files (`index.html`, `css/main.css`, `IMPLEMENTATION_PLAN.md`, `SITE_ARCHITECTURE_PLAN.md`) contain only project content.
- Personal mistakes, lessons learned, and process notes go ONLY in `LESSONS_LEARNED.md`.
- If unsure where something belongs, ask: "Is this about the project, or about my process?" Project = project file. Process = lessons file.

**If it happens:**
- Remove the note from the project file.
- Add it to `LESSONS_LEARNED.md`.
- Notify the user.

---

## Rule 5: Be Honest About Tool Limitations

**Mistake avoided:** Claiming CSS/JS code analysis when `webfetch` only returns rendered text.

**Prevention:**
- Know what each tool returns: `webfetch` = text/markdown (no raw CSS/JS), `read` = local files (including images), `bash` = local command execution.
- If a tool cannot do something, say: "I cannot do X with [tool name] because it returns [format], not raw code."
- If you need something a tool cannot do, ask the user or find an alternative method.

**If it happens:**
- Correct the claim immediately.
- Find an alternative (e.g., PowerShell `Invoke-WebRequest` to fetch CSS files).
- Document the limitation.

---

## Rule 6: Break Large File Writes into Small Chunks

**Mistake avoided:** Writing 800+ line CSS or 400+ line HTML in a single response and getting truncated.

**Prevention:**
- Split files into chunks of under ~200 lines each.
- Write one chunk, confirm it was received, then write the next.
- Use multiple `write` tool calls if needed, or append with `edit`.
- Do not attempt to write a complete large file in one response.

**If it happens:**
- Acknowledge the truncation immediately.
- Ask: "Shall I continue from line X?"
- Continue from where it stopped, not from the beginning.

---

## Rule 7: Include Full Content in Plans, Not Just Outlines

**Mistake avoided:** Writing an implementation plan with section titles but no actual copy.

**Prevention:**
- When creating a plan with content screens, include the full copy for each section.
- Do not use placeholders like "[content goes here]" expecting the user to fill them.
- If source material exists (PDF, document), extract and include the relevant text in the plan.

**If it happens:**
- Rewrite the plan with full content.
- Ask the user to review the filled-in content.

---

## Quick Reference: What to Do When You Make a Mistake

| Step | Action |
|------|--------|
| 1 | Stop immediately |
| 2 | Acknowledge the mistake plainly |
| 3 | Fix it (revert, rewrite, reorder) |
| 4 | Document in `LESSONS_LEARNED.md` |
| 5 | Tell the user what changed and why |

---

## Files Referenced

- `C:\Mini project\TEM Associates\LESSONS_LEARNED.md` — All mistakes and lessons
- `C:\Mini project\TEM Associates\IMPLEMENTATION_PLAN.md` — Project plan (no personal notes)
- `C:\Mini project\TEM Associates\DESIGN_RULES.md` — Design rules (no personal notes)
- `C:\Mini project\TEM Associates\SITE_ARCHITECTURE_PLAN.md` — Site architecture (no personal notes)
