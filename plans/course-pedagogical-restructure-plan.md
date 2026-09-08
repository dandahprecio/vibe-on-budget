# Course Pedagogical Restructure Plan

**Created:** 2026-09-07  
**Status:** ✅ Complete  
**Based on:** Critical pedagogical analysis of the Token Economy for Vibe Coding course

---

## Goal

Restructure the 9-module course to fix pedagogical issues: resolve the red thread, eliminate content duplication, integrate Module 9's foundational mechanics earlier, anchor Module 8 in token economy, add a through-running case study, add practical exercises, and achieve structural uniformity across all modules.

---

## Acceptance Criteria (per fas)

### Fas 1: Strukturella flyttar (Modul 2 + 7 får innehåll från Modul 9)

- [ ] **AC1.1:** `02-context-model.mdx` har en ny sektion "How Prompt Caching Works" som förklarar Extended Prompt Caching (cache hit rates, TTL-skillnader Anthropic vs OpenAI, leverantörsjämförelsetabell, "vad bryter cachen")
- [ ] **AC1.2:** `02-context-model.mdx` har inga "se Modul 9"-referenser kvar för caching-mekanik
- [ ] **AC1.3:** `07-agents-mcp.mdx` har en ny sektion "How Tool Search Works Internally" som förklarar registry + embeddings → on-demand schema-laddning, med ~60-75% besparingsdata
- [ ] **AC1.4:** `07-agents-mcp.mdx` har en ny sektion "How Auto Model Selection Works" med routing-logik och besparingsprocent
- [ ] **AC1.5:** `07-agents-mcp.mdx` har inga "se Modul 9"-referenser kvar
- [ ] **AC1.6:** Befintligt innehåll i Modul 2 och 7 som överlappar med det nya materialet har tagits bort eller konsoliderats

### Fas 4: Banta Modul 9 (hybrid — behåll resten som avslutning)

- [ ] **AC4.1:** `09-under-the-hood.mdx` är omdöpt i title/frontmatter till "The Big Picture: How Copilot Saves Tokens For You"
- [ ] **AC4.2:** Innehåll om caching, Tool Search, och auto model selection är borttaget (flyttat)
- [ ] **AC4.3:** Kvarvarande sektioner: Output Compression, Background Batching, WebSocket, A/B Experiment Culture, Infrastructure Economics, "On the Horizon"
- [ ] **AC4.4:** En ny "Putting It Together: The Full Stack"-sektion finns som sammanfattar användarens + Copilots optimeringar
- [ ] **AC4.5:** Modulen är ~40% kortare (sikta på ~7 min lästid)
- [ ] **AC4.6:** `astro.config.mts` sidebar är uppdaterad med ny label

### Fas 2: Skriv om Modul 5 (ta bort överlapp med Modul 4)

- [ ] **AC2.1:** Caveman Execution Prompt-sektionen är borttagen (finns i Modul 4 Quick Win #1)
- [ ] **AC2.2:** Unified diff-referensen till Modul 4 är borttagen som huvudinnehåll, endast kvar som kort "se även"-not
- [ ] **AC2.3:** Ny inledning som explicit separerar "engångskonfiguration" (Modul 4) från "löpande promptteknik" (Modul 5)
- [ ] **AC2.4:** Följande sektioner är bevarade och fördjupade: intent comments (`// AI:`), bullet-vs-prose DJUP-analys, RTK fallstudie, svenska vs engelska, "när komprimering slår fel"
- [ ] **AC2.5:** `04-quick-wins.mdx` har en kort not i inledningen: "Detta är engångskonfiguration. För löpande promptteknik, se Modul 5."

### Fas 3: Skriv om Modul 8 (token-anknytning)

- [ ] **AC3.1:** Varje guardrail (spec first, TDD, review automation, project memory, security) har en "Token Impact"-faktaruta med uppskattad ROI
- [ ] **AC3.2:** Ny inledande sektion ramar in teknisk skuld som ett tokenekonomiskt problem
- [ ] **AC3.3:** Winchester Mystery House och Four Failure Modes är bibehållna men nedbantade (koncept kvar, prosa kortad)
- [ ] **AC3.4:** Modulen känns som en naturlig del av tokenekonomikursen, inte en främmande fågel

### Fas 5: Genomgående fallstudie "Team Alpha"

- [ ] **AC5.1:** `01-hidden-tax.mdx` har en "Case Study: Meet Team Alpha"-ruta som introducerar scenariot (5 utvecklare, första månadsräkning $480 över budget)
- [ ] **AC5.2:** Varje modul (02-09) har en ~3-5 raders "Team Alpha Update"-ruta i början med progressiva kostnadssiffror
- [ ] **AC5.3:** Siffrorna är realistiska och härledda från kursens egna pristabeller
- [ ] **AC5.4:** Modul 9 (eller ny Modul 10) har en "Team Alpha: The Full Journey"-sammanfattning ($480 → ~$145/mån)

### Fas 6: Övningar per modul

- [ ] **AC6.1:** Varje modul (01-09) har en "Practice"-sektion före "Key Takeaways" med 1-3 konkreta uppgifter
- [ ] **AC6.2:** Övningarna är praktiska ("gör detta i VS Code") och kan utföras på 5-10 minuter
- [ ] **AC6.3:** Övningarna är relevanta för modulens innehåll och kräver inte material från senare moduler

### Fas 7: Enhetlighet och puts

- [ ] **AC7.1:** Alla moduler följer samma strukturmall: Title → Intro → (Case Study-ruta) → Innehåll → Practice → Continue Learning → Key Takeaways → Reading time
- [ ] **AC7.2:** Fotnoter är konsekventa — antingen alla eller inga moduler har fotnoter
- [ ] **AC7.3:** Lästider är normaliserade till 8-10 min spann
- [ ] **AC7.4:** "Continue Learning" länkar till max 2 nästa logiska moduler per modul
- [ ] **AC7.5:** `06-project-setup.mdx` är antingen uppdelad i 6a/6b eller har tydlig intern navigering
- [ ] **AC7.6:** `sv/` översättningar är synkade med EN efter alla ändringar
- [ ] **AC7.7:** `astro.config.mts` sidebar är uppdaterad med eventuella nya modulnamn
- [ ] **AC7.8:** `en/index.mdx` och `sv/index.mdx` är uppdaterade med korrekta titlar och beskrivningar för ändrade moduler

---

## New Module Order (target)

```
1. The Hidden Tax              ← +case study intro
2. How Copilot Builds Context  ← +caching mechanics (from 9)
3. Measure Before You Cut      ← +exercises
4. Quick Wins                  ← unchanged (teaser)
5. Writing Prompts That Cost Less ← rewritten (deepening, no overlap)
6. Project Setup               ← possibly split 6a/6b, +exercises
7. Agents, Tools & MCP Hygiene ← +Tool Search + Auto-selection (from 9)
8. Vibe Coding Without the Debt ← rewritten (token-anchored)
9. The Big Picture             ← slimmed, renamed (was "Under the Hood")
```

---

## Risks

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Modul 2 becomes too heavy with cache details | Medium | Keep existing "Common Cache-Busting Mistakes" table, add only mechanics explanation. Extra details stay in Mod 9. |
| Modul 8 feels forced token-anchored | Medium | "Token Impact" boxes are short fact boxes, not extensive rewrites. |
| Case study feels contrived | Low | Use realistic numbers from Modul 1's pricing tables. Team Alpha is a "worst case" — relatable. |
| SV translations fall behind | High | Do EN first, sync SV in separate pass. |
| Too many changes at once | Medium | Phased plan. Start structural (Fas 1), then content (Fas 2-4), last polish (Fas 5-7). |

---

## Execution Order

1. **Fas 1** — Structural moves (Mod 2 + 7 absorb content from 9)
2. **Fas 4** — Slim Mod 9 (after content moved out)
3. **Fas 2** — Rewrite Mod 5 (when Mod 4 is stable)
4. **Fas 3** — Rewrite Mod 8 (token-anchoring)
5. **Fas 5** — Add case study (across all modules)
6. **Fas 6** — Add exercises
7. **Fas 7** — Uniformity & polish (including SV sync)

---

## Delegation Strategy

Each phase is delegated to an **Implementer** agent (writes the changes) followed by a **Reviewer** agent (validates against acceptance criteria). Subagent-* agents are never used.