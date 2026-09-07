# Implementation Plan: Token Economy Course — Research Integration Update

## Goal

Integrate 13 findings from `docs/Token-research-01.md` into the existing 8-module course, following the established course pattern (problem → action → savings, A→B→C depth, Mermaid diagrams, copy-paste templates, quantified estimates).

---

## Architecture Decisions (Locked — same as original plan)

| Decision | Choice |
|---|---|
| Framework | Astro 5 + Starlight (existing) |
| Languages | English first, Swedish after all EN changes stable |
| Diagram engine | Mermaid (native Starlight support) |
| Module count | 8 (no new modules — integrate into existing) |
| Pattern | Each addition: problem statement → concrete action/template → expected savings |
| Content style | Bullets > prose, code blocks for templates, `:::aside` for callouts |

---

## Affected Files

Only existing files are modified. No new files.

```
token-economy-course/
├── astro.config.mts                          # Update sidebar labels if needed
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── en/
│   │       │   ├── index.mdx                 # Update card count/descriptions
│   │       │   ├── 01-hidden-tax.mdx         # ADD: ET formula, GPU vs Serverless
│   │       │   ├── 02-context-model.mdx      # ADD: 50% Context Rule
│   │       │   ├── 03-quick-wins.mdx         # ADD: Unified Diffs + LLM-laziness
│   │       │   ├── 04-cheaper-prompts.mdx    # ADD: udiff output format instruction
│   │       │   ├── 05-project-setup.mdx      # ADD: AGENTS.md 5-pattern structure, Teresa Torres footnote
│   │       │   ├── 06-agents-mcp.mdx         # ADD: Multi-Model Router, 5 sub-agent patterns, Agentic Loop
│   │       │   ├── 07-vibe-coding-guardrails.mdx  # ADD: Winchester Mystery House, 13 Questions, BDD
│   │       │   └── 08-under-the-hood.mdx     # ADD: Cache TTL/busting details, JoyAI footnote
│   │       └── sv/
│   │           ├── index.mdx                 # Translate after EN changes complete
│   │           └── (01-08 translated)        # Translate after EN changes complete
```

---

## Steps

### Phase 1: Module 1 — The Hidden Tax (2 additions)

**Step 1.1 — Add Effective Tokens (ET) formula**
- File: `src/content/docs/en/01-hidden-tax.mdx`
- Insert after "The Asymmetric Pricing Problem" section, before "What's Free vs What Costs"
- Content:
  - Introduce ET formula: $ET = m \times (1.0 \times I + 0.1 \times C + 4.0 \times O)$
  - Explain each variable (m = model multiplier, I = input, C = cached, O = output)
  - Show why output tokens dominate (4.0x weight)
  - Cite GitHub's results: 19–62% ET reduction by isolating workflows
  - Mermaid: bar chart comparing raw tokens vs effective tokens for a sample session
  - Practical takeaway: "A 10K token session with 60% cache hits costs the same as a 5K token session with 0% cache hits"
- Pattern: A (what ET is) → B (how to calculate it) → C (what it means for your workflow)
- `:::tip` with link to Module 8 for cache optimization
- Size target: ~300 words

**Step 1.2 — Add Dedicated GPU vs Serverless cost analysis**
- File: `src/content/docs/en/01-hidden-tax.mdx`
- Insert as new subsection under "Enterprise Considerations"
- Content:
  - Break-even formula: $\text{Cost per Million} = (R / (T \times 3600 \times U)) \times 1000000$
  - Table: utilization rates → effective cost per million tokens
  - Key numbers: H200 at $3.44/hr needs 72.2% utilization to beat serverless at $0.65/M
  - At 40% utilization: $1.173/M — 80% more expensive than serverless
  - Batch-size impact: batch-1 can cost $20.32/M tokens
  - Practical takeaway: "Serverless wins for bursty agentic workflows; dedicated wins for continuous high-throughput inference"
- Pattern: A (the two options) → B (the break-even math) → C (which to pick for agentic workloads)
- `:::caution` about the hidden cost of low utilization
- Size target: ~250 words

**Phase 1 validation:** Build succeeds, both new sections render, Mermaid diagrams display, links to related modules work.

---

### Phase 2: Module 2 — How Copilot Builds Context (1 addition)

**Step 2.1 — Add 50% Context Rule**
- File: `src/content/docs/en/02-context-model.mdx`
- Insert after "How Context Window Fills Up", before "Prefix Caching vs Cache Breakpoints"
- Content:
  - Rule: above 50% context window utilization, models suffer measurable cognitive degradation
  - Symptoms: hallucinations increase, instructions are dropped, code quality degrades
  - Practical threshold: for a 128K window, keep active context under 64K tokens
  - Mermaid: gauge chart showing safe zone (0-50%), caution zone (50-75%), danger zone (75%+)
  - Connection to Module 3 quick wins: clearing threads, closing tabs
- Pattern: A (what the rule is) → B (why it matters) → C (how to stay under it)
- `:::caution` about silent degradation — model won't tell you it's overloaded
- Size target: ~200 words

**Phase 2 validation:** New section renders, gauge diagram works, cross-links to Module 3 correct.

---

### Phase 3: Module 3 — Quick Wins (1 addition)

**Step 3.1 — Add Unified Diffs and LLM-Laziness as Quick Win #6**
- File: `src/content/docs/en/03-quick-wins.mdx`
- Insert after Quick Win #5, before "Bonus: Measure Your Impact"
- Content:
  - Problem: models that output full files waste output tokens (4-8x cost). Models also exhibit "laziness" — inserting `// ... rest of code unchanged` instead of doing the work
  - Action: instruct Copilot to use unified diff format:
    ```
    # Output format
    - Use unified diff format for all code changes
    - Only output changed lines with +/- prefixes
    - Include 3 context lines around each change
    - Never skip code with comments like "rest unchanged"
    ```
  - Savings: 70-80% output reduction vs full-file output. Aider benchmarks: laziness dropped 3x, complex refactoring success went from 20% → 61%
  - Connection to code-only instruction (Quick Win #1) — they work together
  - `:::note` about small open-source models struggling with udiff format
- Pattern: A (what udiff is) → B (how to instruct for it) → C (what savings to expect)
- Size target: ~250 words
- Update "Quick Reference Card" table at bottom to include new row #6

**Phase 3 validation:** Quick Reference Card updated correctly, new section consistent with existing Quick Win format.

---

### Phase 4: Module 4 — Writing Prompts That Cost Less (1 addition)

**Step 4.1 — Add udiff output format to prompt techniques**
- File: `src/content/docs/en/04-cheaper-prompts.mdx`
- Insert under "Meta-Prompts for Output Control" table
- Content:
  - Add row to meta-prompt table: "Diff output" → "Use unified diff. Only changed lines +/- with 3 context lines. No full file output."
  - Brief explanation of why diff format saves output tokens (the real cost driver)
  - Cross-link to Module 3 Quick Win #6 for full udiff explanation
- Pattern: minimal change — just extends existing table
- Size target: ~50 words + 1 table row

**Phase 4 validation:** Table renders correctly with new row.

---

### Phase 5: Module 5 — Project Setup (2 additions)

**Step 5.1 — Expand AGENTS.md with the 5-pattern structure**
- File: `src/content/docs/en/05-project-setup.mdx`
- Replace the current minimal AGENTS.md template with an expanded version
- Content — add these 5 sections to the template:
  1. **Context Pyramid** — "Do NOT use Prisma" style negation rules that prevent irrelevant suggestions
  2. **Task Router** — map directories to behaviors (e.g. `packages/db/**` → auto-generate migrations)
  3. **Decision Log** — ADR-style entries explaining *why* a seemingly wrong design choice was made
  4. **Safety Net** — `Ask first` rules for destructive operations (DB writes, file deletions)
  5. **Living Docs** — current sprint context, known system debt
- Keep the token budget constraint: ~150 tokens total for the template
- Before/after example: without Decision Log, agent spends tokens arguing about a refactor. With it, agent accepts the decision and moves on.
- `:::caution` reminder: AGENTS.md is loaded every agent interaction — keep it lean
- Pattern: A (the 5 patterns) → B (what each prevents) → C (template to copy)
- Size target: ~350 words

**Step 5.2 — Add Teresa Torres Method footnote**
- File: `src/content/docs/en/05-project-setup.mdx`
- Insert as a `:::note` at the end of the `.prompt.md` files section
- Content:
  - Mention the Teresa Torres approach: micro-files under `.claude/context/` for lazy prompting
  - Contrast with `.prompt.md` approach: both achieve lazy loading; `.prompt.md` is simpler for Copilot
  - Link to concept of "lazy prompting" — using RAG to fetch only relevant sub-files
- Pattern: A (what the method is) → B (how it relates to what you're already doing)
- Size target: ~100 words

**Phase 5 validation:** AGENTS.md template is copy-pasteable, both additions consistent with existing style.

---

### Phase 6: Module 6 — Agents, Tools & MCP (3 additions)

**Step 6.1 — Add Multi-Model Router architecture**
- File: `src/content/docs/en/06-agents-mcp.mdx`
- Insert as new section after "How to Scope Agents for Token Efficiency" sub-points (after #4 "Prune Unused MCP Servers")
- Content:
  - Concept: route tasks to appropriate models based on complexity, not one-size-fits-all
  - Table mapping task types → primary model → fallback model → max cost:
    | Task | Primary | Fallback | Max Cost |
    |------|---------|----------|----------|
    | Architecture | Claude Opus | GPT-5.4 | $5.00 |
    | Code generation | Claude Sonnet | DeepSeek R1 | $0.50 |
    | Simple tests | GPT-5.4-mini | Mistral-Small | $0.10 |
    | Code review | Claude Sonnet | GPT-5.4-mini | $0.25 |
  - Result: 73% reduction in daily API costs ($15 → $4)
  - Mermaid: flowchart showing task classifier routing to model tiers
  - Practical: "Keep model on Auto for simple requests, manually switch to premium only for architecture/security"
- Pattern: A (why one model doesn't fit all) → B (how to build a routing strategy) → C (the cost impact)
- Size target: ~300 words

**Step 6.2 — Add 5 sub-agent organizational patterns**
- File: `src/content/docs/en/06-agents-mcp.mdx`
- Insert as new section after Step 6.1 content
- Content — brief explanation of each pattern with Copilot-relevant example:
  1. **Prompt Chaining** — sequential breakdown (e.g. generate schema → generate queries → generate tests)
  2. **Routing** — lightweight classifier LLM directs to specialized agent
  3. **Parallelization** — independent analyses in sandboxed sub-agents
  4. **Orchestrator-Workers** — smart model plans architecture, cheaper models execute
  5. **Evaluator-Optimizer** — one agent generates, another reviews, generator revises
- Mermaid: diagram showing the 5 patterns and their data flow
- Practical: which pattern to use for which task type
- `:::tip` about the Evaluator-Optimizer pattern being the most token-efficient for quality-critical code
- Size target: ~300 words

**Step 6.3 — Add Agentic Loop 5-step model**
- File: `src/content/docs/en/06-agents-mcp.mdx`
- Insert at the very beginning of the module, before "The Three Modes and Their Costs"
- Content:
  - Define the continuous feedback loop: Analyze → Plan → Execute → Test → Iterate
  - Mermaid: circular flowchart showing the 5 steps with feedback arrows
  - Explain why each step matters for token economy:
    - Analyze: skip if context already known
    - Plan: prevents mid-stream corrections (expensive)
    - Execute: use cheapest capable model
    - Test: catches errors before they become expensive conversations
    - Iterate: bounded by stop conditions (Module 6 already covers this)
  - Connection: "Understanding this loop explains why Agent mode costs 5-50K tokens — it runs this entire cycle multiple times"
- Pattern: A (what the loop is) → B (how it drives cost) → C (how to optimize each step)
- Size target: ~250 words

**Phase 6 validation:** All 3 new sections render, Mermaid diagrams work, cross-links correct, total module size still manageable (adds ~850 words to existing ~10 min reading time).

---

### Phase 7: Module 7 — Vibe Coding Without the Debt (2 additions)

**Step 7.1 — Add Winchester Mystery House + 4-step methodology**
- File: `src/content/docs/en/07-vibe-coding-guardrails.mdx`
- Insert after "The Four Failure Modes" section, before "Guardrail 1"
- Content:
  - Explain Winchester Mystery House phenomenon: agents iterating blindly create labyrinthine code with redundant dependencies and overlapping abstractions
  - The 4-step methodology to prevent it:
    1. **One-sentence outcome** — define input/output in a single sentence, freeze it
    2. **Minimal sandbox** — smaller project directory = less room for agent to "invent architecture"
    3. **Reality check every 3 iterations** — measure CPU, latency, memory, readability with real data
    4. **Hard boundary at system-critical territory** — never vibe-code auth, sessions, file uploads, push notifications, async jobs, or real-time state sync
  - Mermaid: flowchart showing the 4 steps as guardrails around the agent loop
  - Practical: a checklist the developer runs every 3 iterations
- Pattern: A (what the anti-pattern is) → B (the 4-step fix) → C (when to escalate to managed infrastructure)
- Size target: ~300 words

**Step 7.2 — Add 13 Questions Framework**
- File: `src/content/docs/en/07-vibe-coding-guardrails.mdx`
- Insert at the very beginning of the module, before "The Four Failure Modes"
- Content:
  - Decision framework table: 4 key questions that determine vibe coding vs agentic workflow
  - Format as Starlight table:
    | If... | Then use... |
    |-------|-------------|
    | Business relies on output for decisions | Agentic Workflow |
    | Handles financial transactions, customer data, or auth | Agentic Workflow |
    | Application is explicitly disposable / single-use | Vibe Coding |
    | Primary goal is testing an idea or hypothesis | Vibe Coding |
  - Explanation of the verification vs discovery axis — the core dividing line
  - Practical: "If you answered 'Yes' to either of the first two, go straight to Module 5 and set up AGENTS.md before writing a single line"
- Pattern: A (the framework) → B (how to apply it) → C (what happens if you don't)
- Size target: ~200 words

**Phase 7 validation:** Both sections render, Mermaid diagrams work, framework table displays correctly with Starlight styling.

---

### Phase 8: Module 8 — Under the Hood (2 additions)

**Step 8.1 — Add cache TTL, cache busting, and provider comparison**
- File: `src/content/docs/en/08-under-the-hood.mdx`
- Expand "Extended Prompt Caching" section with:
  - Provider comparison table:
    | Provider | Cache Type | Explicit Control? | Write Cost | Hit Cost | TTL |
    |----------|-----------|-------------------|------------|----------|-----|
    | OpenAI (GPT-5.6) | Auto + Manual | Yes (breakpoints) | 1.25x | 0.1x | Configurable |
    | Anthropic (Claude) | Manual | Yes (cache_control) | 1.25x–2.0x | 0.1x | 5 min (default) |
    | DeepSeek (V4) | Disk-based | No (implicit) | None | 0.5x | N/A |
    | Google (Gemini) | Implicit | No (implicit) | None | Varied | N/A |
  - Cache busting explanation: one character change early in prompt → entire cache invalidated
  - Anthropic TTL controversy (March 2026): default changed from 1 hour to 5 minutes, caused silent cost spikes for async batch systems
  - Practical: "Don't modify system instructions mid-session. If you must, accept the cache miss and keep going."
  - `:::caution` about silent cache failures — only detectable via telemetry (LangSmith or debug logs)
- Pattern: A (how caching works across providers) → B (what breaks it) → C (how to work with it)
- Size target: ~300 words

**Step 8.2 — Add JoyAI-LLM Flash and Token Cleaning footnote**
- File: `src/content/docs/en/08-under-the-hood.mdx`
- Insert as a `:::note` at the very end of the module, before "Key Takeaways"
- Content:
  - Mention emerging optimizations on the training/data level:
    - Token Cleaning: removing non-informative tokens from training data to improve model precision
    - Context Pruning: forcing models to focus on context-bearing structures
  - Briefly note JoyAI-LLM Flash architecture: 48B MoE, 2.7B active per forward pass, Multi-Token Prediction
  - Frame as "what's coming next" — these are research-stage, not yet in Copilot
  - Connection: these will make agentic loops even cheaper in the future
- Pattern: A (what's happening in research) → B (potential impact) → C (not actionable yet — just know it's coming)
- Size target: ~150 words

**Phase 8 validation:** Provider table renders, all callouts display correctly, footnote doesn't disrupt module flow.

---

### Phase 9: Cross-Module Updates

**Step 9.1 — Update English landing page (index.mdx)**
- File: `src/content/docs/en/index.mdx`
- Update CardGrid descriptions to reflect new content where relevant:
  - Module 1: add "ET formula and infrastructure cost analysis"
  - Module 5: add "AGENTS.md patterns and lazy prompting"
  - Module 6: add "router architecture and sub-agent patterns"
  - Module 7: add "Winchester Mystery House and decision framework"
- No structural changes to the cards

**Step 9.2 — Verify all cross-links**
- Check every `:::tip[Continue Learning]` block across all modules
- Ensure new sections are reachable via existing links
- Add new cross-links where new content complements another module

**Phase 9 validation:** All 8 cards updated, no broken links.

---

### Phase 10: Swedish Translation

**Step 10.1 — Translate all 13 additions to Swedish**
- Files: all `src/content/docs/sv/*.mdx` files
- Process: translate each module after its English counterpart is finalized
- Same order as English phases (1→8)
- Swedish landing page updated with translated card descriptions

**Phase 10 validation:** Swedish build succeeds, all modules render correctly in sv locale.

---

### Phase 11: Final Polish

**Step 11.1 — Re-read all modules for consistency**
- Verify tone, terminology, and cross-references are consistent across all 8 modules
- Ensure no duplication between new additions and existing content

**Step 11.2 — Update course reading time estimates**
- Update "Estimated reading time" at bottom of each module
- Modules with significant additions: 1, 5, 6, 7, 8 (each +2-4 minutes)

---

## Risks

| Risk | Mitigation |
|---|---|
| Content bloat — modules become too long | Each addition targets ≤300 words; use `:::note`/`:::tip` asides for "nice to know" info; move deep dives to expandable `<details>` if needed |
| Mermaid diagrams become complex to author | Start with simple diagrams, iterate; Starlight renders natively |
| Swedish translation lags behind English | Phase translations per module, not all at once; English-first strategy keeps course usable |
| New content overlaps with existing content | Review each module before inserting; remove or consolidate redundant sections |
| Token budget concept conflicts with AGENTS.md expansion | The expanded AGENTS.md template still targets ~150 tokens — the 5 patterns are structural, not verbose |
| Module 6 becomes too long (3 major additions) | Each addition is a distinct concept; use clear headings for scanning; if reading time exceeds 15 min, split into sub-pages |

---

## Test Strategy

### Per-Phase Validation

| Phase | Validation |
|---|---|
| 1-8 (content) | `npm run build` succeeds, new sections render in browser, Mermaid diagrams display, all `:::aside` callouts styled correctly |
| 9 (cross-module) | All `/token-economy-course/en/XX-module` links resolve, no 404s, landing page cards match module content |
| 10 (Swedish) | `npm run build` with `sv` locale succeeds, language switcher works |
| 11 (polish) | Full site manual review — read all 8 modules sequentially, verify reading flow |

### Smoke Test After All Changes

1. `npm run build` — zero errors
2. `npm run dev` — all pages render
3. Manual check: all Mermaid diagrams render (pie, flowchart, sequence)
4. Manual check: all cross-module links resolve
5. Swedish locale: language switcher toggles correctly, all content present
6. Each module's "Key Takeaways" section reflects new content

---

## Implementation Order

| Order | What | Words Added | Cumulative Reading Time Impact |
|-------|------|-------------|-------------------------------|
| 1 | Module 1: ET formula | ~300 | +2 min |
| 2 | Module 1: GPU vs Serverless | ~250 | +2 min |
| 3 | Module 2: 50% Context Rule | ~200 | +1 min |
| 4 | Module 3: Unified Diffs Quick Win | ~250 | +2 min |
| 5 | Module 4: udiff meta-prompt row | ~50 | — |
| 6 | Module 7: 13 Questions Framework | ~200 | +1 min |
| 7 | Module 7: Winchester Mystery House | ~300 | +2 min |
| 8 | Module 5: AGENTS.md 5 patterns | ~350 | +2 min |
| 9 | Module 5: Teresa Torres footnote | ~100 | — |
| 10 | Module 6: Multi-Model Router | ~300 | +2 min |
| 11 | Module 6: 5 sub-agent patterns | ~300 | +2 min |
| 12 | Module 6: Agentic Loop | ~250 | +2 min |
| 13 | Module 8: Cache TTL/provider details | ~300 | +2 min |
| 14 | Module 8: JoyAI footnote | ~150 | — |
| — | Cross-module links + landing page | — | — |
| — | **Total** | **~3,200 words** | **+18 min across all modules** |