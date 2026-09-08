# Course Review Improvement Plan — Token Economy for Vibe Coding

**Date:** 2026-09-04
**Source:** 8 parallel Reviewer subagent reviews

---

## Goal
Fix cross-module contradictions, broken references, unsupported claims, and metadata defects to produce a consistent, trustworthy course.

---

## Affected Files

| File | Severity |
|---|---|
| `en/index.mdx` | MAJOR — "Six things" claim wrong |
| `en/01-hidden-tax.mdx` | MAJOR — pricing/pie chart, GPU detour |
| `en/02-context-model.mdx` | MAJOR — overgeneralized context claims, cache vs forget |
| `en/03-quick-wins.mdx` | CRITICAL — missing Quick Win #6, missing Key Takeaways |
| `en/04-cheaper-prompts.mdx` | CRITICAL — broken ref to Quick Win #6, $30 math error |
| `en/05-project-setup.mdx` | MAJOR — AGENTS.md contradiction, 600-token budget impossible, bash script |
| `en/06-agents-mcp.mdx` | MAJOR — tool loading contradicts Module 8, duplicate footer |
| `en/07-vibe-coding-guardrails.mdx` | MAJOR — AGENTS.md contradiction, duplicate footer, uncited stats |
| `en/08-under-the-hood.mdx` | MAJOR — duplicate footer, uncited claims, tool search contradicts Module 6 |
| `sv/*` (all 8) | MINOR — need parity check after EN fixes |

---

## Steps

### Step 1 — Fix "Quick Win #6" cross-reference (CRITICAL)
**Files:** `en/03-quick-wins.mdx`, `en/04-cheaper-prompts.mdx`, `en/index.mdx`
- **Option A (recommended):** Add a real 6th quick win — "Use unified diffs for output" with the caveman execution prompt as the mechanism. This matches what Module 4 references.
- **Option B:** Change index to "Five things" and remove all references to Quick Win #6 in Module 4.
- Update `sv/` equivalents.

### Step 2 — Reconcile AGENTS.md guidance (Module 5 vs Module 7)
**Files:** `en/05-project-setup.mdx`, `en/07-vibe-coding-guardrails.mdx`
- Module 5 says: AGENTS.md = ~80 token lean contract, no architecture.
- Module 7 says: put specs, architecture, conventions, and known issues in AGENTS.md.
- **Fix:** Add a clear distinction in both modules:
  - `AGENTS.md` → always-loaded behavioral contract (mode, scope, output format)
  - `.prompt.md` files or `docs/` → architecture specs, known issues (loaded on demand via `#file:`)
- Reword Module 7 to say "Store recurring specs as `.prompt.md` files, reference with `#file:`" instead of putting them in AGENTS.md.

### Step 3 — Reconcile MCP tool loading (Module 6 vs Module 8)
**Files:** `en/06-agents-mcp.mdx`, `en/08-under-the-hood.mdx`
- Module 6 says: tool schemas reloaded every step, costs ~200 tokens/tool/step.
- Module 8 says: Tool Search loads schemas on demand, unused tools stay out of context.
- **Fix:** Add a version note in Module 6: "Before mid-2025 Tool Search, all schemas loaded every step. With Tool Search (covered in Module 8), only needed tools load. But the tool registry (names + short descriptions) is still always-present, and every tool used incurs full schema cost."
- Module 8: add a note that this is the current behavior and Module 6's cost model represents the pre-optimization baseline.

### Step 4 — Fix history/reset advice conflict (Module 3 vs Module 8)
**Files:** `en/03-quick-wins.mdx`, `en/02-context-model.mdx`
- Module 3: "always start fresh" when switching tasks, use `/clear` habitually.
- Module 8: stay in long sessions for caching benefit.
- **Fix:** Add a decision rule in both modules: "Reset when task changes. Stay in session for multi-turn work on the same task. Compact-and-continue for long sessions where history is still relevant."

### Step 5 — Fix duplicate/broken footers (Modules 6, 7, 8)
**Files:** `en/06-agents-mcp.mdx`, `en/07-vibe-coding-guardrails.mdx`, `en/08-under-the-hood.mdx`
- Module 6: Remove duplicate "Topics covered" and "Estimated reading time: 8 minutes" at end. Keep the 10-minute estimate.
- Module 7: Remove duplicate metadata at end. Keep one reading time.
- Module 8: Remove duplicate reading times (12 min + 8 min). Keep one. Remove duplicate "Topics covered."

### Step 6 — Add missing Key Takeaways to Module 3
**File:** `en/03-quick-wins.mdx`
- All other modules have a "Key Takeaways" section. Module 3 doesn't. Add one summarizing the quick wins with savings estimates.

### Step 7 — Fix the $30 math error in Module 4
**File:** `en/04-cheaper-prompts.mdx`
- "30,000 tokens worth ~$30/month at Haiku output rates" is wrong. At $5/M output, 30K tokens = $0.15. Recalculate or remove the dollar figure.

### Step 8 — Fix uncited/overstated claims across all modules
**Files:** All 8 modules
- Add "~" prefix to all percentage estimates, or add footnotes with methodology.
- The "30–41% technical debt increase", "48% code duplication rise", "60% refactoring drop" in Module 7 need citations.
- The "94% cache hit rate" and "28% reduction" in Module 8 need a source or "illustrative" label.
- The WIRED "nearly 2,000 applications" claim needs a citation or removal.

### Step 9 — Fix the 600-token budget contradiction (Module 5)
**File:** `en/05-project-setup.mdx`
- The budget says 500 (system) + ≤100 (instructions) = 600, leaving zero for context. Rephrase as aspirational heuristic: "Aim for ≤100 tokens in custom instructions, so the always-on baseline stays near 600 tokens before context."

### Step 10 — Replace bash script with PowerShell/Node.js (Module 5)
**File:** `en/05-project-setup.mdx`
- The `count-tokens.sh` is bash. VS Code users on Windows need PowerShell or a Node.js one-liner. Add both.

### Step 11 — Move GPU/serverless digression out of Module 1
**File:** `en/01-hidden-tax.mdx`
- The H200/serverless cost comparison is detailed and off-topic for an intro module. Move to Module 8 ("Under the Hood") or an appendix.

### Step 12 — Trim the "On the horizon" section (Module 8)
**File:** `en/08-under-the-hood.mdx`
- JoyAI-LLM Flash, Token Cleaning, Sub-50B MoE are research-stage and irrelevant to Copilot users. Move to a collapsible `<details>` or a separate "Future Research" appendix.

### Step 13 — Sync SV translations
**Files:** `sv/*.mdx` (all 8)
- After all EN fixes, apply the same structural fixes to Swedish translations. Check for content parity (Module 4 SV is noted as missing unified-diff material).

---

## Risks
- **Scope creep:** Some "uncited claim" fixes could balloon into research tasks. Prioritize the ones reviewers flagged as MAJOR.
- **Translation lag:** SV files will fall behind EN during edits. Acceptable if EN is fixed first and SV follows in a batch.
- **AGENTS.md reconciliation is opinionated:** The Module 5 vs 7 split needs a clear philosophy decision before editing either.

---

## Test Strategy
1. After each fix: `npm run build` in `token-economy-course/` — verify no MDX or Astro errors.
2. After Step 1: verify all cross-references resolve correctly.
3. After Step 3: read Modules 6 + 8 back-to-back to confirm no contradiction remains.
4. After Step 5: each module should have exactly one "Estimated reading time" and one "Key Takeaways" section.
5. Final: full `npm run build && npm run preview`, click through all 8 modules + index.