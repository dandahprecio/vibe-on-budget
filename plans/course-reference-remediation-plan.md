# Course-Wide Reference Remediation & Team Alpha Removal Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add verifiable external references to ALL factual claims across all 9 course modules (EN+SV), and remove the entirely fictional Team Alpha case study from every module.

**Architecture:** Two cross-cutting phases (Team Alpha removal, footnote format standardization), then module-by-module reference addition in priority order (Critical → High → Medium → Low). Each module task delegates to an Implementer agent who reads the file, identifies uncited claims, searches online for authoritative sources, and adds footnotes.

**Tech Stack:** MDX files with Starlight footnote syntax (`[^tag]` + `[^tag]: URL`), Astro build for validation.

**Scope:** 18 files (9 EN + 9 SV), ~350 uncited claims to resolve, 1 fictional case study to remove.

---

## Reference Audit Baseline (from prior Explorer audit)

| Module | Current Footnotes | Uncited Claims | Priority |
|--------|------------------|---------------|----------|
| M1 — Hidden Tax | 5 (`[^1]`–`[^5]`) | ~25 | LOW |
| M2 — Context Model | 1 (`[^1]`) | ~35 | HIGH |
| M3 — Measure | 0 | ~25 | MEDIUM |
| M4 — Quick Wins | 0 | ~45 | CRITICAL |
| M5 — Cheaper Prompts | 0 | ~42 | MEDIUM |
| M6 — Project Setup | 0 | ~65 | HIGH |
| M7 — Agents & MCP | 0 | ~44 | HIGH |
| M8 — Vibe Coding | 0 | ~40 | MEDIUM |
| M9 — Under the Hood | 0 | ~49 | CRITICAL |

---

## Footnote Format Standard

All modules will use this consistent pattern:

```markdown
Some factual claim.[^mX-n]

[^mX-n]: [Source Title](https://verified-url) — Publisher/Author, Date.
```

Where `mX` = module number, `n` = sequential counter per module. Existing M1 footnotes `[^1]`–`[^5]` will be renamed to `[^m1-1]`–`[^m1-5]`.

---

## Phase 0: Cross-Cutting — Team Alpha Removal (ALL MODULES)

**Acceptance criteria:** Zero mentions of "Team Alpha" remain in any course file. The fictional case study is replaced with generic illustrative examples or removed entirely.

### Task 0.1: Remove Team Alpha from EN modules 1-9

**Files:** All 9 EN modules
**Agent:** Implementer

**Instructions for Implementer:**
- Read each EN module file
- Find and REMOVE every `:::note[Case Study: Team Alpha]` block
- Find and REMOVE every "After Module N" line in the Team Alpha journey table (M9)
- Find and REMOVE every reference to "Team Alpha" in running text (e.g., "Team Alpha discovered...", "Team Alpha applied...")
- The credit reduction numbers (14,200 → 12,500 → ... → 5,900) are ALL fictional — remove them
- Replace the M9 journey table with a generic summary or remove it entirely
- Do NOT modify any other content
- After editing, verify with `grep -i "team alpha"` that zero matches remain

### Task 0.2: Remove Team Alpha from SV modules 1-9

**Files:** All 9 SV modules
**Agent:** Implementer

**Instructions for Implementer:**
- Same as Task 0.1, but for Swedish files
- The Swedish text may say "Team Alpha" or "teamet" — remove all case study blocks
- Verify with `grep -i "team alpha"` and `grep -i "case study"` that zero matches remain

---

## Phase 1: CRITICAL — M9 Under the Hood + M4 Quick Wins

### Task 1.1: Add references to M9 (EN) — 0 current sources, ~49 claims

**File:** `token-economy-course/src/content/docs/en/09-under-the-hood.mdx`
**Agent:** Implementer
**Priority:** CRITICAL

**Instructions for Implementer:**

**Step A — Research phase (use web search for EACH claim):**

1. **Output compression claims** — Search for: "VS Code Copilot output compression token savings 5.5% June 2026"
   - Find the VS Code blog post by Ryan Caldwell & Bhavya U (June 17, 2026)
   - URL: `https://code.visualstudio.com/blogs/2026/06/17/improving-token-efficiency-in-github-copilot`
   - Also search for GitHub blog: "how we make AI coding more cost efficient without sacrificing task quality" Sep 2, 2026

2. **Tool search claims** — Search for: "GitHub Copilot tool search reduces token consumption 9-11%"
   - Same VS Code blog as above should cover this

3. **WebSocket/connection claims** — Search for: "VS Code Copilot WebSocket persistent connections TTFT reduction 19% 2026"
   - Find the specific TTFT measurement data
   - The claim is "reduces time-to-first-token by ~19% (median TTFT)" — find the source

4. **Background batching claims** — Search for: "VS Code Copilot background work batching token efficiency"
   - Find source for batching optimization claims

5. **A/B experiment culture claims** — Search for: "GitHub Copilot A/B experiment output compression task success rate"
   - Find source for the A/B validation process claims
   - The illustrative experiment table needs to be marked as illustrative

6. **Infrastructure economics claims** — Search for: "GPU cost per million tokens serverless vs dedicated H200 $3.44 per hour Llama 3.3 70b"
   - Find source for GPU pricing and break-even calculations
   - The formula, table, and specific dollar amounts all need sources

7. **Research-stage technologies** — Search for: "context pruning sparse mixture of experts multi-token prediction LLM efficiency 2026"
   - Find sources for the claims about Context Pruning, Sparse MoE, Multi-Token Prediction

**Step B — Add footnotes:**
- Add `[^m9-1]` through `[^m9-N]` for every factual claim
- Format: `[^m9-N]: [Title](URL) — Source, Date.`
- Mark author estimates explicitly with `(author estimate)` where no source exists

**Step C — Mark the pie chart as illustrative:**
- The pie chart at "## Putting It Together: The Full Stack" shows percentages — add a note that these are illustrative

### Task 1.2: Add references to M4 (EN) — 1 inline link, ~45 claims

**File:** `token-economy-course/src/content/docs/en/04-quick-wins.mdx`
**Agent:** Implementer
**Priority:** CRITICAL

**Instructions for Implementer:**

**Step A — Research phase:**

1. **Savings percentages (50-70%, 40-60%, 20-40%, 70-80%)** — These are author estimates. Search for any external benchmarks that support similar savings from code-only output, tab management, .copilotignore, unified diffs. If no source exists, mark each as `(author estimate based on token mechanics)`.

2. **Output tokens cost 5x input** — Reference M1 pricing table footnote.

3. **Model pricing (Opus $75/M output)** — Search for: "Claude Opus pricing per million tokens 2026". Find current pricing page.

4. **Community tools (Tokalator, Token-Track, Copilot Token Monitor)** — Search for each tool to verify they exist. Add links to their VS Code Marketplace or GitHub pages.

5. **VS Code settings claims** — Search for: "VS Code github.copilot.chat.agentDebugLog.fileLogging.enabled" in VS Code docs. Add link.

6. **.copilotignore behavior** — Search for: "VS Code .copilotignore documentation". Add link.

7. **Auto model selection claims** — Reference GitHub Copilot docs. Search for: "GitHub Copilot auto model selection documentation".

**Step B — Add footnotes:**
- Add `[^m4-1]` through `[^m4-N]`
- Mark ALL savings percentages as `(author estimate)` unless a verifiable source is found

### Task 1.3: Replicate M9 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/09-under-the-hood.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 1.1 changes to the Swedish file. Footnotes use same tags. Translate any new explanatory text to Swedish.

### Task 1.4: Replicate M4 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/04-quick-wins.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 1.2 changes to the Swedish file.

---

## Phase 2: HIGH — M2 Context Model + M6 Project Setup + M7 Agents & MCP

### Task 2.1: Add references to M2 (EN) — 1 footnote, ~35 claims

**File:** `token-economy-course/src/content/docs/en/02-context-model.mdx`
**Agent:** Implementer
**Priority:** HIGH

**Instructions for Implementer:**

**Research each claim category:**

1. **Provider caching table** (OpenAI, Anthropic, DeepSeek, Google rows):
   - Anthropic: Already has `[^1]` → rename to `[^m2-1]`. Verify https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
   - OpenAI: Search for "OpenAI prompt caching documentation automatic prefix caching" → add footnote
   - DeepSeek V4 Pro disk-based caching: Search for "DeepSeek V4 Pro caching mechanism" → add footnote
   - Google Gemini 3.5 context caching: Search for "Google Gemini context caching documentation" → add footnote

2. **Context window sizes (128K-200K tokens)**: Search for each model's documented context window. Add footnotes per model.

3. **Cache invalidation claims** (timestamps, model switching, tool changes, JSON key ordering, non-deterministic ordering):
   - These are technical explanations. Add a general footnote referencing Anthropic/OpenAI caching docs.
   - Mark as `(author technical analysis)` where no direct source exists.

4. **OpenAI GPT-5.x 24h retention claim**: Already fixed in previous pass. Verify and add footnote linking to OpenAI docs.

5. **Anthropic TTL controversy (March 2026)**: Search for "Anthropic cache TTL changed 5 minutes March 2026 postmortem". Add footnotes to the Particula Tech article and Anthropic's April 23 postmortem.

6. **VS Code debug logging setting**: Add link to VS Code docs for `github.copilot.chat.agentDebugLog.fileLogging.enabled`.

7. **Fork conversation**: Already has inline link — add footnote too.

8. **Semantic search / #codebase**: Add link to VS Code semantic search docs.

9. **40-60% context reduction claim**: Mark as `(author estimate)` unless source found.

10. **Cache economics (10K tokens with 60% cache hits cheaper than 5K with 0%)**: Mark as `(illustrative example)`.

### Task 2.2: Add references to M6 (EN) — 0 footnotes, ~65 claims

**File:** `token-economy-course/src/content/docs/en/06-project-setup.mdx`
**Agent:** Implementer
**Priority:** HIGH

**Instructions for Implementer:**

**Research each claim category:**

1. **Always-on file loading behavior** — Search for: "GitHub Copilot copilot-instructions.md loaded every request documentation". Add footnote.

2. **AGENTS.md behavior** — Search for: "GitHub Copilot AGENTS.md agent mode documentation". Add footnote.

3. **Token cost estimates for files** (50-2000+ tokens, etc.) — Mark as `(author estimate)`.

4. **Chakrabarti arXiv:2608.11095** — Already named inline. Add proper footnote with URL: `https://arxiv.org/abs/2608.11095`.

5. **Daniel Vaughan blog (200-line ceiling)** — Search for: "Daniel Vaughan CLAUDE.md codex 200 line ceiling August 2026". Add footer with URL.

6. **99.3% reduction from prompt comments** — Verify in Chakrabarti paper. Add footnote.

7. **HTML comments stripped before injection (Claude Code, Codex CLI)** — Search for verification. Add footnote or mark as `(author observation)`.

8. **.prompt.md lazy-loading behavior** — Mark as `(author workflow pattern)` unless VS Code docs describe this pattern.

9. **.copilotignore behavior** — Add link to VS Code docs.

10. **VS Code settings** (autoOpenTabs.max, defaultModel, maxRequests, maxToolCallsPerStep) — Add links to VS Code docs.

11. **600-token budget model** — Mark as `(author heuristic)`.

12. **Token counting scripts** — Mark as `(author utility)`.

13. **37x reduction calculation (9.4M → 250K)** — Mark as `(illustrative calculation)`.

14. **Token cost table (.gitignore, .copilotignore, files.exclude, search.exclude effects)** — Search for VS Code docs on workspace context exclusion. Add footnote.

### Task 2.3: Add references to M7 (EN) — 3 inline links, ~44 claims

**File:** `token-economy-course/src/content/docs/en/07-agents-mcp.mdx`
**Agent:** Implementer
**Priority:** HIGH

**Instructions for Implementer:**

**Research each claim category:**

1. **Agent mode costs 10x more than Edit mode** — Mark as `(author estimate)`.

2. **Agent loop costs 5-50K tokens per task** — Mark as `(author estimate based on typical agent loop depth)`.

3. **Mode token costs (Ask ~500, Edit ~1-2K, Agent ~5-50K)** — Mark as `(illustrative estimates)`.

4. **MCP server math (tools × ~200 tokens per tool)** — Search for: "MCP tool definition token size ~200". Add footnote or mark as estimate.

5. **Tool Search 60-75% reduction** — Search for: "GitHub Copilot tool search reduces context window overhead". Add footnote from VS Code blog.

6. **Tool Search internals (registry, embedding vectors, BM25)** — Search for VS Code docs on tool search. Add footnote.

7. **$0.30 per heavy 10-step agent task at $3/M input** — Mark as `(illustrative calculation)`.

8. **Model router strategy ($15/day → $4/day, 73% savings)** — Search for source. Mark as `(illustrative example)` if not found.

9. **Auto model selection (60-70% requests are simple)** — Already marked as `(Copilot team internal estimate)`.

10. **Five sub-agent patterns (Anthropic research)** — Search for: "Anthropic building effective agents five patterns". Add footnote with URL.

11. **80/20 rule of model selection** — Mark as `(author estimate)`.

12. **Review loop converges in 2-3 cycles** — Mark as `(author estimate)`.

13. **2K vs 50K token remediation** — Mark as `(illustrative calculation)`.

14. **5,000-10,000 token savings from custom agent profiles** — Mark as `(author estimate)`.

15. **Cache rebuild costs more than savings from model switch** — Mark as `(author estimate based on cache mechanics in M2)`.

### Task 2.4: Replicate M2 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/02-context-model.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 2.1 changes. Footnotes use same tags.

### Task 2.5: Replicate M6 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/06-project-setup.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 2.2 changes. Translate explanatory text.

### Task 2.6: Replicate M7 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/07-agents-mcp.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 2.3 changes. Translate explanatory text.

---

## Phase 3: MEDIUM — M3 Measure + M5 Cheaper Prompts + M8 Vibe Coding

### Task 3.1: Add references to M3 (EN) — 3 inline links, ~25 claims

**File:** `token-economy-course/src/content/docs/en/03-measure-before-you-cut.mdx`
**Agent:** Implementer
**Priority:** MEDIUM

**Instructions for Implementer:**

**Research each claim category:**

1. **Credit hover behavior** — Search for: "VS Code Copilot chat response hover credit consumption". Add footnote link to VS Code docs.

2. **Context window control** — Search for: "VS Code Copilot chat context window control session usage". Add footnote.

3. **Copilot status dashboard** — Search for: "VS Code Copilot status dashboard monthly usage". Add footnote.

4. **Chronicle cost-tips** — Already has inline link. Add footnote too.

5. **Agent Debug Logs Summary view** — Add footnote to VS Code docs.

6. **Cache Explorer** — Already has inline link. Add footnote.

7. **Screenshot URLs** — Verify the VS Code asset URLs still resolve. Add `(accessed Sep 2026)`.

8. **Optimization loop methodology** — Mark as `(author methodology)`.

### Task 3.2: Add references to M5 (EN) — 0 footnotes, ~42 claims

**File:** `token-economy-course/src/content/docs/en/05-cheaper-prompts.mdx`
**Agent:** Implementer
**Priority:** MEDIUM

**Instructions for Implementer:**

**Research each claim category:**

1. **Output costs 5x input** — Cross-reference M1.

2. **JetBrains caveman benchmark (8.5%, 82 tasks)** — Search for: "JetBrains blog caveman speak token savings July 2026 Denis Shiryaev". Add footnote with URL: `https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/`.

3. **RTK benchmark (+7.6%, 80 tasks)** — Search for: "JetBrains blog RTK token killer July 2026". Add footnote with URL: `https://blog.jetbrains.com/ai/2026/07/rtk-claude-code-token-savings/`.

4. **RTK GitHub repo (~77k stars)** — Search for: "github rtk-ai/rtk". Add footnote.

5. **Caveman tool by Julius Brussee (~70k stars)** — Search for: "github JuliusBrussee/caveman". Add footnote.

6. **Swedish tokenization (1.4-1.7x)** — Search for: "Occiglot tokenizer fertility Swedish English". Add footnote. Also search for "Zenodo hidden cost of tokenization German 1.5x".

7. **English vs Swedish example token counts** (7 vs 12 tokens) — Mark as `(illustrative example using GPT-5 o200k tokenizer)`.

8. **10,000 prompts/month savings calculation (~30,000 tokens, $0.15)** — Mark as `(illustrative calculation)`.

9. **70% input reduction, 90% output reduction (vague vs specific prompt example)** — Mark as `(illustrative example)`.

10. **38 → 18 tokens, 2,000 saved over 100 prompts** — Mark as `(illustrative calculation)`.

11. **"Cheap beats clever" / "cheapest LLM call is the one you don't make"** — This is an aphorism. Mark as `(author principle)`.

### Task 3.3: Add references to M8 (EN) — 0 footnotes (1 arXiv mention), ~40 claims

**File:** `token-economy-course/src/content/docs/en/08-vibe-coding-guardrails.mdx`
**Agent:** Implementer
**Priority:** MEDIUM

**Instructions for Implementer:**

**Research each claim category:**

1. **CMU study (arXiv:2511.04427)** — Add proper footnote with URL: `https://arxiv.org/abs/2511.04427`.

2. **GitClear 2026 report (81% duplication)** — Search for: "GitClear AI code quality maintainability gap 2026". Add footnote.

3. **GitClear 2025 report (60% refactoring drop)** — Add footnote: `https://www.gitclear.com/ai_assistant_code_quality_2025_research`.

4. **WIRED investigation (nearly 2000 apps)** — Search for: "WIRED thousands vibe coded apps expose data May 2026 Andy Greenberg". Add footnote.

5. **Karpathy coining "vibe coding"** — Add footnote to original tweet: `https://x.com/karpathy/status/1886192184808149383` or Wikipedia.

6. **"Reports indicate" / "studies suggest"** — Replace vague attributions with specific citations.

7. **Token ROI claims (150x, 30x, 25x)** — Mark as `(illustrative calculation based on token cost estimates)`.

8. **Spec template methodology** — Mark as `(author recommendation)`.

9. **TDD token table** — Mark as `(illustrative comparison)`.

10. **Review loop 2-3 cycles** — Mark as `(author estimate)`.

11. **Security-critical territory list (auth, file uploads, push notifications, etc.)** — Add footnote referencing OWASP or similar security guidance.

12. **"One-Sentence Outcome" methodology** — Mark as `(author methodology)`.

13. **Guardrails methodology (4-step prevention, 3-iteration reality check)** — Mark as `(author methodology)`.

### Task 3.4: Replicate M3 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/03-measure-before-you-cut.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 3.1 changes.

### Task 3.5: Replicate M5 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/05-cheaper-prompts.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 3.2 changes.

### Task 3.6: Replicate M8 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/08-vibe-coding-guardrails.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 3.3 changes.

---

## Phase 4: LOW — M1 Hidden Tax (remaining gaps)

### Task 4.1: Add remaining references to M1 (EN) — 5 existing footnotes, ~25 remaining claims

**File:** `token-economy-course/src/content/docs/en/01-hidden-tax.mdx`
**Agent:** Implementer
**Priority:** LOW

**Instructions for Implementer:**

**Changes:**

1. **Rename existing footnotes** `[^1]`–`[^5]` to `[^m1-1]`–`[^m1-5]` for consistency.

2. **Add footnotes for currently uncited claims:**

   - **Free vs paid features table** — Search for: "GitHub Copilot free features inline completions next edit suggestions". Add footnote to GitHub Docs.
   
   - **Asymmetric pricing diagram ($1.00/M input, $5.00/M output)** — Cross-reference M1 model pricing table.
   
   - **Cache write cost footnote** — Already added in previous phase. Verify it's present.
   
   - **"One AI Credit = $0.01 USD"** — Add footnote to GitHub pricing page.
   
   - **Enterprise pooling behavior** — Add footnote to GitHub enterprise billing docs.
   
   - **Auto mode discount claim** — Search for: "GitHub Copilot auto model selection discount 10%". Add footnote.

   - **Illustrative token split pie chart (45% input, 35% output, 20% cached)** — Already has `:::note[Illustrative proportions]`. Keep.

   - **Content exclusion for admins** — Add footnote to GitHub docs.

3. **Mark the case study introduction** (if it wasn't already removed in Phase 0) as removed.

### Task 4.2: Replicate M1 fixes to SV

**File:** `token-economy-course/src/content/docs/sv/01-hidden-tax.mdx`
**Agent:** Implementer
**Instructions:** Mirror all Task 4.1 changes.

---

## Phase 5: Final Review & Build Validation

### Task 5.1: Reviewer — All 18 files

**Agent:** Reviewer
**Instructions:**
- Verify zero "Team Alpha" mentions across all 18 files
- Verify all new footnotes are syntactically valid (`[^mX-N]:` format)
- Verify all URLs in footnotes resolve (spot-check)
- Verify no broken MDX syntax
- Verify EN and SV files are in sync (same footnotes, same structure)

### Task 5.2: Build validation

**Agent:** Helper-General
**Instructions:**
- Run `cd token-economy-course && npm run build`
- Report any build errors or warnings

---

## Files Affected

**Modify (18 files):**
- `token-economy-course/src/content/docs/en/01-hidden-tax.mdx`
- `token-economy-course/src/content/docs/en/02-context-model.mdx`
- `token-economy-course/src/content/docs/en/03-measure-before-you-cut.mdx`
- `token-economy-course/src/content/docs/en/04-quick-wins.mdx`
- `token-economy-course/src/content/docs/en/05-cheaper-prompts.mdx`
- `token-economy-course/src/content/docs/en/06-project-setup.mdx`
- `token-economy-course/src/content/docs/en/07-agents-mcp.mdx`
- `token-economy-course/src/content/docs/en/08-vibe-coding-guardrails.mdx`
- `token-economy-course/src/content/docs/en/09-under-the-hood.mdx`
- `token-economy-course/src/content/docs/sv/01-hidden-tax.mdx`
- `token-economy-course/src/content/docs/sv/02-context-model.mdx`
- `token-economy-course/src/content/docs/sv/03-measure-before-you-cut.mdx`
- `token-economy-course/src/content/docs/sv/04-quick-wins.mdx`
- `token-economy-course/src/content/docs/sv/05-cheaper-prompts.mdx`
- `token-economy-course/src/content/docs/sv/06-project-setup.mdx`
- `token-economy-course/src/content/docs/sv/07-agents-mcp.mdx`
- `token-economy-course/src/content/docs/sv/08-vibe-coding-guardrails.mdx`
- `token-economy-course/src/content/docs/sv/09-under-the-hood.mdx`

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Some claims have no verifiable source | High | Low | Mark as `(author estimate)` or `(illustrative)` |
| URL rot between search and commit | Low | Low | Use archive-proof URLs where possible (docs.github.com, arxiv.org, zenodo.org) |
| SV translations diverge from EN | Medium | Medium | Phase 5.1 reviewer checks sync |
| Footnote numbering collisions | Low | Medium | Module-prefixed tags (`mX-N`) prevent collisions |
| Build breaks from MDX syntax errors | Medium | High | Phase 5.2 build validation catches |
| Implementer agents miss some claims | Medium | Medium | Reviewer in Phase 5.1 does sweep |

---

## Test Strategy

1. **Per task:** After each Implementer finishes, grep for `[^mX-` to verify footnotes added
2. **Phase 0:** `grep -ri "team alpha" token-economy-course/src/content/docs/` must return zero
3. **Phase 5.1:** Reviewer reads each file for footnote completeness and URL validity
4. **Phase 5.2:** `npm run build` must pass with no errors
5. **Final:** Spot-check 3 random footnotes per module in browser to verify URLs resolve

---

## Estimated Effort

| Phase | Tasks | Est. Agent Runs | Priority |
|-------|-------|----------------|----------|
| 0 — Team Alpha removal | 2 | 2 (parallel) | Foundation |
| 1 — M9 + M4 (Critical) | 4 | 4 (parallel pairs) | CRITICAL |
| 2 — M2 + M6 + M7 (High) | 6 | 6 (parallel triples) | HIGH |
| 3 — M3 + M5 + M8 (Medium) | 6 | 6 (parallel triples) | MEDIUM |
| 4 — M1 (Low) | 2 | 2 (parallel) | LOW |
| 5 — Review + Build | 2 | 2 (sequential) | VALIDATION |
| **Total** | **22** | **~8 parallel batches** | |