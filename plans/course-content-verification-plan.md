# Course Content Verification & Remediation Plan

**Created:** 2026-09-07  
**Status:** ✅ Complete (all 4 phases executed 2026-09-07)  
**Scope:** All 9 modules (EN + SV) + research document

---

## Executive Summary

Four Explorer agents verified ~45 claims across all course modules against live documentation, academic papers, and independent benchmarks. **~25 claims confirmed**, **~6 partially correct**, **~5 false/unsubstantiated**, and several claims lack references. The course's core pricing and GitHub-sourced data is accurate. The main issues are: (a) exaggerated or misattributed statistics, (b) an unsubstantiated OpenAI claim, (c) imprecise language around research citations, and (d) missing references for many savings estimates.

---

## Verified Claims Summary

### ✅ Fully Confirmed (Safe)

| # | Module | Claim | Source Verified |
|---|--------|-------|----------------|
| 1 | M1 | UBB transition June 1, 2026 | GitHub Blog Apr 27, 2026 |
| 2 | M1 | $0.01/credit overage | GitHub Docs |
| 3 | M1 | Business: 1,900 credits/license (standard) | GitHub Docs |
| 4 | M1 | Enterprise: 3,900 credits/license (standard) | GitHub Docs |
| 5 | M1 | Enterprise credits pooled | GitHub Docs |
| 6 | M1 | Pro: 1,500; Pro+: 7,000; Max: 20,000 | GitHub Docs |
| 7 | M1 | Flex allotment / base credits concept | GitHub Docs |
| 8 | M1 | Claude Haiku 4.5: $1.00/$5.00 | GitHub Docs |
| 9 | M1 | Claude Sonnet 4.6: $3.00/$15.00 | GitHub Docs |
| 10 | M1 | Claude Opus 4.8: $5.00/$25.00 | GitHub Docs |
| 11 | M1 | Claude Fable 5: $10.00/$50.00 | GitHub Docs |
| 12 | M1 | ET formula: `m × (1.0×I + 0.1×C + 4.0×O)` | GitHub Blog May 7, 2026 |
| 13 | M1 | 62% ET reduction, 109 cycles, auto-issue-triage | GitHub Blog May 7, 2026 |
| 14 | M1 | ET savings range: 19%–62% across workflows | GitHub Blog May 7, 2026 |
| 15 | M2 | Anthropic cache breakpoints | Anthropic Docs |
| 16 | M2 | Cache hits ~90% cheaper | Anthropic Docs |
| 17 | M2 | Anthropic TTL changed to 5 min March 6, 2026 | Multiple sources + April 23 postmortem |
| 18 | M2 | OpenAI automatic prefix caching | OpenAI Docs |
| 19 | M5 | JetBrains caveman 8.5% savings, 82 paired tasks | JetBrains Blog Jul 6, 2026 |
| 20 | M5 | RTK +7.6% more expensive, 80 paired tasks | JetBrains Blog Jul 20, 2026 |
| 21 | M6 | Chakrabarti arXiv:2608.11095 exists | arXiv Aug 11, 2026 |
| 22 | M6 | +226% instruction growth | Chakrabarti paper |
| 23 | M6 | Prompt comments reduce excess growth by 99.3% | Chakrabarti paper |
| 24 | M8 | WIRED "nearly 2,000" vibe-coded apps exposed data | WIRED May 7, 2026 |
| 25 | M8 | Karpathy coined "vibe coding" Feb 2, 2025 | X/twitter + Wikipedia |
| 26 | M8 | GitClear refactoring drop ~60% | GitClear 2025 report |

---

### ⚠️ Partially Correct / Needs Refinement

| # | Module | Current Text | Issue | Fix |
|---|--------|-------------|-------|-----|
| 27 | M6 | "200-line ceiling" for instruction files | NOT in Chakrabarti paper. Extrapolated from Daniel Vaughan's blog. Paper reports median 39 instructions, 90th pctl 131. | Attribute to Vaughan's practical advice, not the research paper. |
| 28 | M5 | "Swedish tokenizes ~1.7x less efficiently than English" | Approx. correct but imprecise. Real range: 1.36–1.99× depending on tokenizer. GPT-5 o200k likely ~1.4–1.5× for Swedish (German measured at 1.46×). | Either cite specific tokenizer ranges or soften to "~1.4–1.7×" with note that it varies by tokenizer. |
| 29 | M8 | "Technical debt can increase 30–41% after AI coding tool adoption" | CMU study measured +30% static analysis warnings and +41% code complexity — NOT a direct "technical debt" metric. Framing is a secondary interpretation. | Rephrase as "static analysis warnings increase 30% and code complexity 41%" with link to CMU arXiv:2511.04427. |
| 30 | M8 | "Code duplication can rise 48%" | From GitClear 2025. Superseded by GitClear June 2026 report showing **+81%** block duplication. | Update to 81% or cite both with dates. |
| 31 | M9 | WebSocket "reduces idle latency by 19%" | VS Code blog measured TTFT (Time to First Token) p50 at -19.46%. Never used phrase "idle latency." | Rephrase to "reduces time-to-first-token by ~19%" and cite VS Code blog Jun 17, 2026. |
| 32 | M9 | Output compression reduces output tokens "8–12%" | VS Code blog: output compression specifically = **5.5%**. **Tool search** (deferring tool schemas) = 8.97–10.92%. | Fix attribution: output compression = 5.5%; tool search = ~9–11%. |

---

### ❌ False / Unsubstantiated / Needs Removal

| # | Module | Claim | Problem | Action |
|---|--------|-------|---------|--------|
| 33 | M2 | OpenAI `prompt_cache_retention: "24h"` with "+919% hit-rate improvement after 40–60 minute gaps" and "+338% after 30–40 minute gaps" | **NO evidence found.** Searched across multiple engines. Zero results for "919%" with OpenAI caching. Effloow Lab (June 29, 2026) tested GPT-5.5 and found: small prompts (~1,300 tokens) never engaged cache; large prompts (~3,700 tokens) had ~25% miss rate on warm calls; GPT-5.6 removed 24h cache entirely. | **Remove the +919%/+338% claims entirely.** Replace with: "OpenAI offers configurable cache retention for GPT-5.x models (24h for non-ZDR orgs). Cache is best-effort, not guaranteed. GPT-5.6+ removed 24h cache in favor of explicit controls." |
| 34 | M8 | "92% of US developers use AI tools daily" (from research doc) | Underlying data says **92.6% use AI at least once a month**, NOT daily. No survey shows 92% daily. | Change to "92% use AI tools at least monthly" with citation. |
| 35 | M8 + research doc | "41% of all global code generated by AI" (from research doc) | Survey-based self-report, NOT empirical measurement. Best empirical study (4.2M developers, Nov 2025–Feb 2026) found **26.9%** of merged commits. | Change to "~27% of production code is AI-authored (empirical measurement)" or note it's survey-based. |

---

### 🔗 Missing References (Savings Estimates)

These claims are presented as facts but lack external citations. They appear to be the author's estimates based on reasoning about token mechanics. They should either be cited or marked as estimates:

| Module | Claim | Recommended Action |
|--------|-------|-------------------|
| M4 | Code-only instruction: 50–70% output token reduction | Mark as "Author estimate based on token mechanics" or find supporting data |
| M4 | Clear chat thread: 40–60% input token reduction | Same |
| M4 | Close unnecessary tabs: 20–40% input token reduction | Same |
| M4 | .copilotignore: 20–40% input token reduction | Same |
| M4 | Lightweight models: 5–15x cost reduction | Derive from model pricing table (already cited), mark as "calculated from pricing" |
| M4 | Unified diff: 70–80% output token reduction | Same |
| M2 | "Cached tokens ~50% on OpenAI" | Could not verify exact number. OpenAI docs describe automatic prefix caching but don't publish a discount percentage |
| M2 | Context window sizes: "128K–200K tokens depending on model" | Verify against current model specs |
| M7 | "Agent mode costs 10x more tokens than Edit mode" | Mark as estimate or find source |
| M7 | "60–70% of requests simple enough for cheaper model" | Could not verify independently; appears to be Copilot team's internal data |

---

### 📝 Additional Notes

1. **Promotional credit period**: Business/Enterprise plans have promotional boost June–August 2026 (Business: 3,000 instead of 1,900; Enterprise: 7,000 instead of 3,900). Course doesn't mention this — acceptable since it uses standard rates.

2. **Anthropic cache write costs**: Course omits that Anthropic charges **1.25x** for cache writes. Minor detail but relevant for completeness.

3. **Course research doc** (`docs/Token-research-01.md`): Contains the same "41% AI-generated code" and "92% daily" claims that need fixing. Also contains the Swedish tokenizer analysis from the same flawed sources.

4. **SV translations**: All 9 Swedish modules mirror the English content. Any fixes to EN must be replicated in SV.

---

## Phased Remediation Plan

### Phase 1: Critical Fixes (Must Fix — False/Unsubstantiated Claims)

**Acceptance criteria:** All ❌ claims removed or corrected. No false information remains.

| Step | File(s) | Change |
|------|---------|--------|
| 1.1 | `en/02-context-model.mdx`, `sv/02-context-model.mdx` | Remove "+919% hit-rate improvement" and "+338%" claims. Replace with accurate OpenAI caching description. |
| 1.2 | `en/08-vibe-coding-guardrails.mdx`, `sv/08-vibe-coding-guardrails.mdx` | Fix "92% daily" → "92% monthly". Fix "41% code AI-generated" → "~27% empirical". |
| 1.3 | `docs/Token-research-01.md` | Fix "92% daily" and "41% AI-generated code" claims. |

### Phase 2: Precision Improvements (Should Fix — Partially Correct Claims)

**Acceptance criteria:** All ⚠️ claims refined with accurate language and proper attribution.

| Step | File(s) | Change |
|------|---------|--------|
| 2.1 | `en/06-project-setup.mdx`, `sv/06-project-setup.mdx` | Attribute "200-line ceiling" to Vaughan's blog, not Chakrabarti paper. |
| 2.2 | `en/05-cheaper-prompts.mdx`, `sv/05-cheaper-prompts.mdx` | Soften "1.7x less efficient" → "1.4–1.7× range depending on tokenizer" with explanation. |
| 2.3 | `en/08-vibe-coding-guardrails.mdx`, `sv/08-vibe-coding-guardrails.mdx` | Rephrase "technical debt 30–41%" → "static analysis warnings +30%, code complexity +41% (CMU 2025)". |
| 2.4 | `en/08-vibe-coding-guardrails.mdx`, `sv/08-vibe-coding-guardrails.mdx` | Update "code duplication +48%" → "+81% (GitClear 2026)" or cite both. |
| 2.5 | `en/09-under-the-hood.mdx`, `sv/09-under-the-hood.mdx` | Fix "output compression 8–12%" → "output compression 5.5%, tool search ~9–11%". |
| 2.6 | `en/09-under-the-hood.mdx`, `sv/09-under-the-hood.mdx` | Fix "idle latency 19%" → "time-to-first-token reduced ~19%". |

### Phase 3: Reference Additions (Nice to Have — Missing Sources)

**Acceptance criteria:** All savings estimates are either cited or explicitly marked as author estimates.

| Step | File(s) | Change |
|------|---------|--------|
| 3.1 | `en/04-quick-wins.mdx`, `sv/04-quick-wins.mdx` | Add a note clarifying savings estimates are "author calculations based on token mechanics" where no external source exists. |
| 3.2 | `en/02-context-model.mdx`, `sv/02-context-model.mdx` | Verify and cite OpenAI caching discount percentage or mark as estimate. |
| 3.3 | `en/07-agents-mcp.mdx`, `sv/07-agents-mcp.mdx` | Mark "10x more tokens" and "60-70% simple requests" as estimates. |
| 3.4 | `en/01-hidden-tax.mdx`, `sv/01-hidden-tax.mdx` | Add footnote about cache write costs for Anthropic models. |

### Phase 4: Consistency & Cross-Reference (Polish)

**Acceptance criteria:** EN and SV modules in sync. All cross-references valid.

| Step | File(s) | Change |
|------|---------|--------|
| 4.1 | All SV files | Replicate all Phase 1–3 fixes in Swedish translations. |
| 4.2 | `docs/Token-research-01.md` | Update any statistics changed in Phase 1–2. |
| 4.3 | All files | Review all `[^n]` footnote references for link validity. |

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| GitHub Docs change between verification and fix | Low | Low | All core pricing verified against live docs Sep 7, 2026 |
| Model prices change frequently | Medium | Low | Course already warns "check live model rates"; no structural change needed |
| Swedish translations diverge from English fixes | Medium | Medium | Explicit Phase 4 step to sync; review both language versions |
| Some savings estimates cannot be externally verified | High | Low | Mark as author estimates — honest about uncertainty |

---

## Files Affected

**Modify:**
- `token-economy-course/src/content/docs/en/01-hidden-tax.mdx`
- `token-economy-course/src/content/docs/en/02-context-model.mdx`
- `token-economy-course/src/content/docs/en/04-quick-wins.mdx`
- `token-economy-course/src/content/docs/en/05-cheaper-prompts.mdx`
- `token-economy-course/src/content/docs/en/06-project-setup.mdx`
- `token-economy-course/src/content/docs/en/07-agents-mcp.mdx`
- `token-economy-course/src/content/docs/en/08-vibe-coding-guardrails.mdx`
- `token-economy-course/src/content/docs/en/09-under-the-hood.mdx`
- `token-economy-course/src/content/docs/sv/01-hidden-tax.mdx`
- `token-economy-course/src/content/docs/sv/02-context-model.mdx`
- `token-economy-course/src/content/docs/sv/04-quick-wins.mdx`
- `token-economy-course/src/content/docs/sv/05-cheaper-prompts.mdx`
- `token-economy-course/src/content/docs/sv/06-project-setup.mdx`
- `token-economy-course/src/content/docs/sv/07-agents-mcp.mdx`
- `token-economy-course/src/content/docs/sv/08-vibe-coding-guardrails.mdx`
- `token-economy-course/src/content/docs/sv/09-under-the-hood.mdx`
- `docs/Token-research-01.md`

**No new files needed.**

---

## Test Strategy

**Per phase:**
1. **Phase 1:** Verify each false claim is removed. Run `grep` for "+919%" and "92%" to confirm removal.
2. **Phase 2:** Read each changed section for accuracy. Verify footnotes point to correct sources.
3. **Phase 3:** Confirm every savings estimate either has a footnote or an "Author estimate" label.
4. **Phase 4:** Diff EN vs SV files to confirm identical fixes in both languages. Run `npm run build` (Astro) to catch broken links or syntax errors.

**Final validation:** Run the Astro dev server and spot-check each module visually.