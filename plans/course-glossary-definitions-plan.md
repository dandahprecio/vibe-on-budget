# Plan: Glossary + Definition Linking — Token Economy for Vibe Coding

**Created:** 2026-09-07
**Status:** 📋 Ready for implementation
**Branch:** `feature/glossary-definitions`
**Delegates to:** Implementer (×4 phases) → Reviewer

---

## Goal

Add a shared glossary page, expand all acronyms on first use, add hyperlinks to all research/tools/VS Code docs, and mark sections with difficulty badges — across all 9 modules in both EN and SV.

---

## Decisions (from user Q&A)

| Decision | Choice |
|---|---|
| Glossary format | Separate page after module 9 |
| MCP definition | In module 2 (first mention) |
| Acronyms | Expand ALL at first use |
| Research links | All clickable |
| Tool links | All clickable |
| VS Code features | All linked to official docs |
| Difficulty levels | Badges: 🟢 Beginner / 🟡 Intermediate / 🔴 Advanced |
| Glossary placement | After module 9 in sidebar |
| Swedish version | Identical definitions/links as EN |

---

## Affected Files (22 total)

### New files (2)
- `token-economy-course/src/content/docs/en/glossary.mdx`
- `token-economy-course/src/content/docs/sv/glossary.mdx`

### Modified files (20)
- `token-economy-course/astro.config.mts` — add glossary to sidebar
- `token-economy-course/src/content/docs/en/index.mdx` — link to glossary
- `token-economy-course/src/content/docs/sv/index.mdx` — link to glossary
- `token-economy-course/src/content/docs/en/01-hidden-tax.mdx` through `09-under-the-hood.mdx` (9 files)
- `token-economy-course/src/content/docs/sv/01-hidden-tax.mdx` through `09-under-the-hood.mdx` (9 files)

---

## No collision risk

Previous plans (`course-research-update-plan.md`, `course-review-improvement-plan.md`, `course-content-verification-plan.md`) are all marked ✅ Complete. Cache-busting, RTK, Tool Search, 200-line ceiling, Quick Win #6 already exist in modules. This plan adds **only** definitions, links, badges, and glossary — no content rewrites.

---

## Phase 1 — Glossary files + sidebar config (4 files)

### Step 1.1: Create `en/glossary.mdx`
**What:** A new page with ~40 alphabetically sorted term definitions. Each term gets a short paragraph (2-4 sentences). Terms from all 9 modules.
**Terms to define (grouped by domain):**

**Core AI/LLM concepts:**
- AI Credits, Token (input/output/cached), Context window, System prompt, Prompt prefix, Prefix caching, K/V cache, Cache breakpoint, Tokenizer, BPE (Byte-Pair Encoding), Embedding vectors, Effective Tokens (ET), Model multiplier

**GitHub Copilot specifics:**
- UBB (Usage-Based Billing), Always-on tax, `.copilotignore`, `AGENTS.md`, `.prompt.md` files, Agent mode / Ask mode / Edit mode, Agentic loop, Harness, Tool Registry, Tool Search, Custom agents, Thinking effort, Output compression, Background work batching

**Techniques & patterns:**
- Caveman-speak, Meta-prompts, Intent comments, Unified diff, Lazy-loading (instructions), Stop conditions, Optimization loop, Quality threshold

**Architecture & methodology:**
- Vibe coding, Agentic workflow, Technical debt, Guardrails, Glue code, Verification vs Discovery

**Infrastructure:**
- Serverless vs Dedicated GPU, GPU utilization rate, Continuous batching, WebSocket, TLS, TTFT (Time-To-First-Token)

### Step 1.2: Create `sv/glossary.mdx`
**What:** Swedish translation of glossary. Keep technical terms in English where standard, provide Swedish explanations. Same alphabetical order, same terms.

### Step 1.3: Update `astro.config.mts`
**What:** Add glossary entry to sidebar after module 9:
```typescript
{
  label: "Glossary",
  translations: { sv: "Ordlista" },
  slug: "glossary",
},
```

### Step 1.4: Update index pages
**What:** Add a LinkCard or paragraph in both `en/index.mdx` and `sv/index.mdx` pointing to the glossary. Add under the existing CardGrid or in "How to Use This Course" section.

---

## Phase 2 — Modules 1-3: definitions, links, badges (6 files)

### Module 1 (`en/01-hidden-tax.mdx` + `sv/01-hidden-tax.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 1.1 | Expand UBB | "Usage-Based Billing (UBB)" on first mention, link to GitHub Blog |
| 1.2 | Expand ET | "Effective Tokens (ET)" on first formula mention |
| 1.3 | Link AI Credits | Hyperlink to GitHub Docs billing page |
| 1.4 | Link models | Link Claude model names to Anthropic docs pricing page |
| 1.5 | Link Ghost Text | Link "inline code completions (Ghost Text)" to VS Code docs |
| 1.6 | Link Next Edit Suggestions | Link to VS Code docs |
| 1.7 | Link Agent mode | Link to VS Code docs |
| 1.8 | Link PR summaries | Link to GitHub Docs |
| 1.9 | Difficulty badges | Mark: The Hidden Tax section = 🟢, ET formula = 🟡, Model pricing = 🟢, GPU/serverless = 🔴 |
| 1.10 | Cross-ref glossary | Add footnote or parenthetical "(see Glossary)" on first token/cache mention |

### Module 2 (`en/02-context-model.mdx` + `sv/02-context-model.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 2.1 | **Define MCP** | Expand "Model Context Protocol (MCP)" on first mention with a brief definition. This is the PRIMARY definition point per user decision. |
| 2.2 | Link `/compact` | Link to VS Code docs |
| 2.3 | Link Agent Debug Logs | Link to VS Code troubleshooting docs |
| 2.4 | Link Anthropic cache | Hyperlink "Anthropic: Cache Breakpoints" header to Anthropic prompt caching docs |
| 2.5 | Link OpenAI prefix | Hyperlink "OpenAI: Automatic Prompt Prefix" to OpenAI docs |
| 2.6 | Difficulty badges | Mark: Anatomy of a Request = 🟢, Prefix Caching = 🟡, Cache-Busting Mistakes = 🟡 |
| 2.7 | Cross-ref glossary | "(see Glossary)" on context window, prompt prefix, prefix caching |

### Module 3 (`en/03-measure-before-you-cut.mdx` + `sv/03-measure-before-you-cut.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 3.1 | Link context window control | Link to VS Code Chat docs |
| 3.2 | Link status dashboard | Link to VS Code optimize-usage guide |
| 3.3 | Link `/chronicle:cost-tips` | Link to VS Code session history docs |
| 3.4 | Link Agent Debug Logs — Summary | Link to VS Code agent troubleshooting docs |
| 3.5 | Link Cache Explorer | Link to VS Code cache explorer docs |
| 3.6 | Difficulty badges | All 🟢 (this is a practical "how-to" module) |
| 3.7 | Cross-ref glossary | Optimization loop, Quality threshold |

---

## Phase 3 — Modules 4-6: definitions, links, badges (6 files)

### Module 4 (`en/04-quick-wins.mdx` + `sv/04-quick-wins.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 4.1 | Expand BPE | "BPE (Byte-Pair Encoding)" on first mention in Bonus section |
| 4.2 | Link `.copilotignore` | Link to VS Code docs on content exclusion |
| 4.3 | Link `/compact` | Link to VS Code docs |
| 4.4 | Link Tokalator | Link to VS Code Marketplace or GitHub repo |
| 4.5 | Link Token-Track | Link to VS Code Marketplace or GitHub repo |
| 4.6 | Link Copilot Token Monitor | Link to VS Code Marketplace or GitHub repo |
| 4.7 | Link Auto model selection | Link to VS Code docs |
| 4.8 | Difficulty badges | All 🟢 (quick wins are entry-level) |

### Module 5 (`en/05-cheaper-prompts.mdx` + `sv/05-cheaper-prompts.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 5.1 | Link RTK | Hyperlink "RTK (Rust Token Killer)" to its GitHub repo |
| 5.2 | Link JetBrains benchmark | Hyperlink "JetBrains (July 2026)" references to JetBrains blog |
| 5.3 | Expand BPE | If first mention (check order), expand "BPE (Byte-Pair Encoding)" |
| 5.4 | Difficulty badges | Prompt structure = 🟢, Caveman = 🟢, RTK case study = 🟡 |
| 5.5 | Cross-ref glossary | Tokenizer, Meta-prompts, Caveman-speak |

### Module 6 (`en/06-project-setup.mdx` + `sv/06-project-setup.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 6.1 | Link AGENTS.md | Link to GitHub Copilot docs on custom instructions |
| 6.2 | Link `files.exclude` | Link to VS Code docs |
| 6.3 | Link `search.exclude` | Link to VS Code docs |
| 6.4 | Link Claude Code | Link to Anthropic Claude Code docs |
| 6.5 | Link Codex CLI | Link to OpenAI Codex CLI repo |
| 6.6 | Difficulty badges | Always-on tax = 🟢, 200-line ceiling = 🟡, .prompt.md = 🟡 |
| 6.7 | Cross-ref glossary | Always-on tax, Lazy-loading, AGENTS.md |

---

## Phase 4 — Modules 7-9: definitions, links, badges (6 files)

### Module 7 (`en/07-agents-mcp.mdx` + `sv/07-agents-mcp.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 7.1 | Link Ask/Edit/Agent mode | Link to VS Code docs on chat modes |
| 7.2 | Link Tool Search | Link to VS Code docs (or GitHub blog about Tool Search) |
| 7.3 | Link Custom agents | Link to VS Code docs on custom agents |
| 7.4 | Link `@workspace` | Link to VS Code docs on chat participants |
| 7.5 | Link Thinking effort | Link to VS Code docs (already has a link; verify) |
| 7.6 | Link `/context` | Link to Copilot CLI docs |
| 7.7 | Difficulty badges | Agentic loop = 🟢, MCP math = 🟡, Tool Search internals = 🔴 |
| 7.8 | Cross-ref glossary | Agentic loop, Harness, Tool Registry, Embedding vectors |

### Module 8 (`en/08-vibe-coding-guardrails.mdx` + `sv/08-vibe-coding-guardrails.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 8.1 | Expand SRP | "SRP (Single Responsibility Principle)" on first mention, link to Wikipedia |
| 8.2 | Expand TDD | "TDD (Test-Driven Development)" on first mention, link to Wikipedia/MDN |
| 8.3 | Link CMU study | Make arXiv:2511.04427 a clickable link |
| 8.4 | Link GitClear 2026 | Make "GitClear 2026" a clickable link |
| 8.5 | Link GitClear 2025 | Make "GitClear 2025" a clickable link |
| 8.6 | Link WIRED article | Make "WIRED investigation in 2026" a clickable link |
| 8.7 | Link idempotency | Link to MDN or Wikipedia |
| 8.8 | Difficulty badges | Decision framework = 🟢, Failure modes = 🟡, Winchester = 🟡, Prevention = 🟡 |
| 8.9 | Cross-ref glossary | Vibe coding, Agentic workflow, Technical debt, Guardrails, Glue code |

### Module 9 (`en/09-under-the-hood.mdx` + `sv/09-under-the-hood.mdx`)

| # | Action | Detail |
|---|--------|--------|
| 9.1 | Expand TTFT | "TTFT (Time-To-First-Token)" on first mention |
| 9.2 | Expand TLS | "TLS (Transport Layer Security)" on first mention, link to MDN |
| 9.3 | Link WebSocket | Link to MDN WebSocket docs |
| 9.4 | Link H200 GPU | Link to NVIDIA H200 product page |
| 9.5 | Link VS Code blog | Make "VS Code blog Jun 17, 2026" a clickable link (TTFT reference) |
| 9.6 | Difficulty badges | Output compression = 🟡, Batching = 🟡, WebSocket = 🟡, GPU economics = 🔴 |
| 9.7 | Cross-ref glossary | Output compression, Background batching, Serverless, Continuous batching |

---

## Implementer delegation strategy

Deploy 4 parallel Implementer agents, one per phase. No subagent-* agents allowed. Each gets:

- Exact file paths to modify
- Specific edits (before/after or precise instructions)
- Cross-reference awareness (e.g., Phase 3 must know BPE was expanded in Phase 2)

### Phase dependency
- Phase 1 (glossary) MUST complete first — other phases reference glossary
- Phases 2-4 can run in parallel after Phase 1

### Validation per phase
- Run `npm run build` in `token-economy-course/` after each phase
- Verify no broken links
- Verify glossary terms are consistent across modules

---

## Risks

1. **Link rot**: External URLs (VS Code docs, Anthropic docs, OpenAI docs) may change. Use permalinks where available.
2. **BPE first-mention conflict**: Both M4 and M5 mention BPE. Whichever module is read first should expand it. Check if M4 (Bonus section) or M5 (Tokenizer section) comes first — expand in M4's bonus section if it's the first occurrence.
3. **SV translation quality**: Glossary definitions must be technically accurate in Swedish. Keep core terms in English where Swedish equivalents don't exist.
4. **Badge placement**: Each module has many sections. Only mark major section headings, not every paragraph.
5. **Build compatibility**: Adding sidebar entries and new pages should not break Astro/Starlight build. Test after Phase 1.

---

## Test strategy

1. **Phase 1**: `npm run build` — verify glossary page renders, sidebar shows entry, EN/SV versions work
2. **Phase 2**: `npm run build` — spot-check module 1-3 for link validity, acronym expansion
3. **Phase 3**: `npm run build` — spot-check module 4-6
4. **Phase 4**: `npm run build` — spot-check module 7-9
5. **Final**: Manual review — click 5 random links, verify 3 random acronyms, check 3 random badges