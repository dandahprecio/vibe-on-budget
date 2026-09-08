# Implementation Plan: Token Economy Course

## Goal

Build a modular, i18n-ready, shareable course teaching developers how to save tokens when vibe coding with GitHub Copilot — using Astro/Starlight, deployed to GitHub Pages.

---

## Architecture Decisions (Locked)

| Decision | Choice |
|---|---|
| Framework | Astro 5 + Starlight |
| Languages | English (defaultLocale), Swedish (`sv/`) |
| Diagram engine | Mermaid (native Starlight support) |
| Hosting | GitHub Pages via Actions |
| Module count | 8, progressive A→B→C depth |
| Approach | Iterative — scaffold first, write content module by module |
| Interactivity | None initially — pure MDX content |

---

## Affected Files

### New project (scaffolded via `create astro`)

```
token-economy-course/
├── astro.config.mts
├── package.json
├── tsconfig.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── en/
│   │       │   ├── index.mdx
│   │       │   ├── 01-hidden-tax.mdx
│   │       │   ├── 02-context-model.mdx
│   │       │   ├── 03-quick-wins.mdx
│   │       │   ├── 04-cheaper-prompts.mdx
│   │       │   ├── 05-project-setup.mdx
│   │       │   ├── 06-agents-mcp.mdx
│   │       │   ├── 07-vibe-coding-guardrails.mdx
│   │       │   └── 08-under-the-hood.mdx
│   │       └── sv/
│   │           ├── index.mdx
│   │           └── (01-08 translated)
│   ├── components/
│   │   └── (Astro islands if needed later)
│   └── assets/
│       └── (images if needed later)
├── public/
│   └── favicon.svg
└── README.md
```

### Existing file (not modified)
- `token_economy-guide-old.html` — source material, read-only reference

---

## Steps

### Phase 0: Scaffold & Configure

**Step 0.1 — Scaffold Astro/Starlight project**
- Run `npm create astro@latest token-economy-course -- --template starlight`
- Install Mermaid integration: `npx astro add starlight-mermaid` (if plugin exists) or use Starlight's built-in Mermaid support via code fences
- File: all scaffolded files

**Step 0.2 — Configure i18n in `astro.config.mts`**
- Set `defaultLocale: 'en'`
- Add `locales: { en: { label: 'English' }, sv: { label: 'Svenska' } }`
- Configure sidebar per locale — same 8-module structure, different labels per language
- File: `astro.config.mts`

**Step 0.3 — Configure GitHub Pages deploy**
- Create `.github/workflows/deploy.yml` with `actions/deploy-pages`
- Set `site` and `base` in astro config for GitHub Pages
- File: `.github/workflows/deploy.yml`, `astro.config.mts`

**Step 0.4 — Create English landing page with placeholder sidebar**
- `index.mdx` with course title, tagline, and 8-module overview
- Each module entry links to its page (even if placeholder)
- File: `src/content/docs/en/index.mdx`

**Step 0.5 — Create placeholder pages for all 8 modules**
- Each `.mdx` with `title` frontmatter and a brief "coming soon" note
- Enables navigation and deploy verification
- Files: `src/content/docs/en/01-*.mdx` through `08-*.mdx`

**Step 0.6 — Verify deploy works**
- Push to GitHub, confirm Actions builds and deploys
- Validate i18n switcher, sidebar navigation, all 8 pages reachable

### Phase 1: Write Module 1 + 3 (highest value first)

**Step 1.1 — Write `01-hidden-tax.mdx` (The Hidden Tax)**
- Content from original token_economy-guide-old.html sections: UBB overview, AI Credits per plan, asymmetric pricing (input vs output cost multiplier)
- Content from web sources: Simform article token basics, GitHub pricing page
- Mermaid diagram: "Where your tokens go" — pie/flow of input/output/cached distribution
- Structure: A (what is UBB, why care) → B (exact prices, what costs what) → C (Enterprise pooling, billing entity model)
- Deep dive callouts using Starlight `:::note` / `:::caution` asides
- Sources cited inline

**Step 1.2 — Write `03-quick-wins.mdx` (Quick Wins)**
- Content from original guide: 5 Golden Rules + 11 Actions (filtered to immediate, high-ROI)
- Restructured as: "5 things you can do tomorrow morning"
  1. Code-only mode instruction
  2. Clear chat threads with `/clear` or `/new`
  3. Close unnecessary editor tabs
  4. Create `.copilotignore`
  5. Use lightweight models for routine tasks
- Each quick win: problem statement → exact action → expected savings
- Content from web sources: Pochi's "compact context aggressively", Simform's "scope your questions"
- A: what to do → B: how to do it (exact commands, file examples) → C: how to measure effect (debug view, token tracking)

### Phase 2: Write Modules 2, 4, 5 (foundational understanding)

**Step 2.1 — Write `02-context-model.mdx` (How Copilot Builds Context)**
- Content from VS Code blog: prompt signature diagram, prefix caching explanation
- Content from GitHub Blog: "local metric trap", what gets sent in each request
- Content from Simform: input/output/cached token breakdown
- Mermaid diagram: "Anatomy of a Copilot request" — system prompt → instructions → open files → conversation history → tool definitions
- A: "What's actually in every request?" → B: how context window fills up → C: Anthropic cache breakpoints vs OpenAI prompt prefix

**Step 2.2 — Write `04-cheaper-prompts.mdx` (Writing Prompts That Cost Less)**
- Content from original guide: focused questions section, bullet points vs prose
- Content from Xebia article: context engineering, #variables
- Content from Pochi: "attach intent to code instead of explaining it in chat"
- Content from GitHub Blog: "local metric trap" — shorter output isn't always cheaper
- Caveman-speak as practical technique with before/after examples
- English vs Swedish tokenizer efficiency (1.7x)
- A: write shorter prompts → B: meta-prompts for output control → C: when compression backfires

**Step 2.3 — Write `05-project-setup.mdx` (Project Setup for Token Efficiency)**
- Content from original guide: copilot-instructions.md, AGENTS.md, content exclusion
- Content from nanotaboada issue: 600-token budget model, count-tokens.sh
- Content from Xebia: instruction files, chat modes, prompt files
- Content from hboon: AGENTS.md as project memory, skills as composable prompts
- Practical templates: minimal copilot-instructions.md, AGENTS.md skeleton
- VS Code settings.json snippet
- A: which files to create → B: exact templates to copy → C: token budget policy, lazy-loading instructions

### Phase 3: Write Modules 6, 7 (advanced practice)

**Step 3.1 — Write `06-agents-mcp.mdx` (Agents, Tools & MCP Hygiene)**
- Content from original guide: scoped agents, MCP server pruning
- Content from VS Code blog: tool search (OpenAI + Anthropic), embedding-guided routing
- Content from Pochi: "scope MCP servers per task"
- Content from hboon: multiple agents, composable skills
- A: Ask vs Agent vs Edit modes → B: prune unused MCP servers → C: tool search internals, deferred loading

**Step 3.2 — Write `07-vibe-coding-guardrails.mdx` (Vibe Coding Without the Technical Debt)**
- Content from Xebia article: technical debt in vibe coding, guardrails, review automation
- Content from original guide: security woven in (prompt injection, data privacy)
- Content from hboon: using second LLM to review, AGENTS.md maintenance
- Content from GitHub Blog: 5 lessons applied to developer workflow
- A: what is vibe coding, why it creates debt → B: TDD with Copilot, custom chat modes → C: deterministic tools, review automation patterns

### Phase 4: Write Module 8 (under the hood)

**Step 4.1 — Write `08-under-the-hood.mdx` (How Copilot Saves Tokens Internally)**
- Content from GitHub Blog: 5 lessons, output compression, view line-number removal, prompt compression, background work batching
- Content from VS Code blog: extended prompt caching, tool search, WebSockets, A/B experiment results
- Mermaid sequence diagram: before/after notification batching
- A: "Here's what Copilot does automatically" → B: specific numbers from experiments → C: what these optimizations mean for how you should work

### Phase 5: Swedish Translation

**Step 5.1 — Create Swedish landing page**
- File: `src/content/docs/sv/index.mdx`
- Translated sidebar labels in astro config

**Step 5.2 — Translate modules incrementally**
- Start with Module 1 and 3 (highest value)
- Translate remaining modules in order

### Phase 6: Polish

**Step 6.1 — Add README with contribution guide**
- How to run locally, how to contribute translations, source attribution

**Step 6.2 — Cross-link modules**
- "Already know about X? Jump to Module Y"
- "Read more about this in Module Z"

---

## Risks

| Risk | Mitigation |
|---|---|
| Content bloat — each module too long | Strict ~1500-2500 word target per module; deep dives in expandable `<details>` |
| Mermaid diagrams complex to author | Start simple, iterate; Starlight renders natively |
| GitHub Pages deploy fails first try | Test build locally (`npm run build`) before push |
| Swedish translation lagging | English-first strategy means course is usable even without Swedish |
| Original HTML guide has outdated info | Cross-reference all prices/model names with GitHub Docs (Sep 2026) |
| Starlight i18n routing issues | Use official Starlight i18n guide; test both locales in dev |

---

## Test Strategy

| Phase | Validation |
|---|---|
| 0 (Scaffold) | `npm run build` succeeds, deploy to GitHub Pages works, i18n switcher functional |
| 1 (Mod 1+3) | Read through both modules for flow; verify all links work; check Mermaid renders |
| 2 (Mod 2+4+5) | Same; verify code snippets are copy-pasteable and correct |
| 3 (Mod 6+7) | Same; verify external source links resolve |
| 4 (Mod 8) | Same; verify sequence diagrams render |
| 5 (Swedish) | Native speaker review (or AI-assisted translation check) |
| 6 (Polish) | Full site crawl for broken links; Lighthouse score ≥ 95 |

---

## Source Mapping

| Module | Primary Sources |
|---|---|
| 01-hidden-tax | token_economy-guide-old.html §1, Simform article, GitHub Docs pricing |
| 02-context-model | VS Code blog (Jun 2026), GitHub Blog (Sep 2026), Simform article |
| 03-quick-wins | token_economy-guide-old.html §2, Pochi tips, Simform strategies |
| 04-cheaper-prompts | token_economy-guide-old.html §3, Xebia article, Pochi tip #2 |
| 05-project-setup | token_economy-guide-old.html §5, nanotaboada issue #364, Xebia article, hboon article |
| 06-agents-mcp | token_economy-guide-old.html §3, VS Code blog (tool search), Pochi tip #4 |
| 07-vibe-coding-guardrails | Xebia article, hboon article, token_economy-guide-old.html §6 |
| 08-under-the-hood | GitHub Blog (Sep 2026), VS Code blog (Jun 2026) |