# Plan: Synkronisera kurs med VS Code Optimize Usage Guide

**Källa:** https://code.visualstudio.com/docs/agents/guides/optimize-usage
**Datum:** 2026-09-07
**Mål:** Väva in 15 identifierade gap i kursen — ny Chapter 3, omnumrering, och punktinsatser i 5 befintliga kapitel. Både `en/` och `sv/`.

---

## Översikt

```
Fas 1: Ny Chapter 3 "Measure Before You Cut" (en + sv)
Fas 2: Omnumrera 03-08 → 04-09 + uppdatera index + alla länkar
Fas 3: Punktinsatser i Ch2, Ch4, Ch6, Ch9
Fas 4: Kapitel 7 (Agents & MCP) — thinking effort, batch, Configure Tools
Fas 5: Validering — bygge, länkar, svenska synk
```

---

## Fas 1: Ny Chapter 3 — "Measure Before You Cut"

### Skapa

| Fil | Åtgärd |
|-----|--------|
| `src/content/docs/en/03-measure-before-you-cut.mdx` | Ny |
| `src/content/docs/sv/03-measure-before-you-cut.mdx` | Ny |

### Innehåll (en, speglas i sv)

1. **Per-request credit hover** — hovera över chat-svar → se credit consumption för den turnen
2. **Session cumulative cost** — context window control (i chat input) → total credits + token breakdown
3. **Monthly dashboard** — Copilot status bar → procent av månadsallowance
4. **`/chronicle:cost-tips`** — personliga rekommendationer baserat på din historik
5. **Agent Debug Logs — Summary view** — token counts, tool calls, errors, duration per session
6. **Cache Explorer view** — cache hit rates, input token reuse, hur mycket som cachas
7. **Optimeringsloopen** — mät baseline → ändra en variabel (modell/tools/delegering) → jämför → behåll

### Acceptanskriterier Fas 1

- [ ] `en/03-measure-before-you-cut.mdx` finns med korrekt frontmatter (`title: 3. Measure Before You Cut`)
- [ ] `sv/03-measure-before-you-cut.mdx` finns med svensk titel och översatt innehåll
- [ ] Alla 7 sektioner finns med i båda filerna
- [ ] Inga interna länkar pekar på Ch3 än (görs i Fas 2)
- [ ] `npm exec astro -- check` grön för dessa två filer

---

## Fas 2: Omnumrera 03-08 → 04-09

### Rename

| Från | Till |
|------|------|
| `en/03-quick-wins.mdx` | `en/04-quick-wins.mdx` |
| `en/04-cheaper-prompts.mdx` | `en/05-cheaper-prompts.mdx` |
| `en/05-project-setup.mdx` | `en/06-project-setup.mdx` |
| `en/06-agents-mcp.mdx` | `en/07-agents-mcp.mdx` |
| `en/07-vibe-coding-guardrails.mdx` | `en/08-vibe-coding-guardrails.mdx` |
| `en/08-under-the-hood.mdx` | `en/09-under-the-hood.mdx` |
| Motsvarande `sv/`-filer | Samma omnumrering |

### Uppdatera frontmatter i varje fil

Ändra `title:` — t.ex. `3. Quick Wins` → `4. Quick Wins`. Ändra `description:` vid behov.

### Uppdatera index

| Fil | Ändring |
|-----|---------|
| `en/index.mdx` | Lägg till Ch3 i listan, uppdatera sidantal 8→9 |
| `sv/index.mdx` | Samma |

### Uppdatera alla internlänkar

Sök efter mönster:
- `/token-economy-course/en/03-` → `/token-economy-course/en/04-`
- `/token-economy-course/en/04-` → `/token-economy-course/en/05-`
- `/token-economy-course/en/05-` → `/token-economy-course/en/06-`
- `/token-economy-course/en/06-` → `/token-economy-course/en/07-`
- `/token-economy-course/en/07-` → `/token-economy-course/en/08-`
- `/token-economy-course/en/08-` → `/token-economy-course/en/09-`
- Motsvarande för `sv/`

Inkludera "Continue Learning"-sektioner i slutet av varje kapitel.

### Acceptanskriterier Fas 2

- [ ] Alla 12 filer omdöpta (6 en + 6 sv)
- [ ] `title:` frontmatter uppdaterad i alla 12 filer
- [ ] `en/index.mdx` och `sv/index.mdx` visar 9 kapitel i rätt ordning
- [ ] Noll förekomster av gamla kapitelnummer i interna länkar (sök med grep)
- [ ] `npm exec astro -- check` grön
- [ ] `npm run build` grön

---

## Fas 3: Punktinsatser i Ch2, Ch4, Ch6, Ch9

### Ch2: Context Model (`en/02-context-model.mdx` + `sv/`)

**A. Fork Conversations (ny sektion, efter "Common Cache-Busting Mistakes")**

- `/fork` i chat input — skapa ny session som ärver hela historiken
- Checkpoint-forking — hovera över tidigare meddelande → "Fork Conversation"
- Användningsområde: utforska alternativa approacher utan att betala prefix-kostnad igen
- Skillnad mot `/clear` och `/compact`: fork är för divergerande utforskning, inte fortsättning

**B. #codebase grounding (ny sektion i "What It Means for Your Workflow")**

- Workspace semantic index måste vara tillgängligt
- `#codebase` för explicit grounding i indexerad kodbas
- Ge relevanta filer, errors, constraints, success criteria i prompten
- Symbol-aware search + fokuserade MCP/CLI-verktyg
- Lägg stabila projektkonventioner i custom instructions

### Ch4: Quick Wins (`en/04-quick-wins.mdx` + `sv/`)

**A. Quick Win #2 — /compact + Ctrl+N**

- Ersätt manuell "summarize + /clear + paste" med `/compact` som primär metod
- `/compact` med valfri instruktion: `/compact focus on the API design decisions`
- Behåll manuell metod som "vid uppgiftsbyte" (nytt ämne, ta med kontext)
- Lägg till `Ctrl+N` shortcut för ny chat session

**B. Quick Win #5 — Auto model selection**

- Lägg till rekommendation: använd **auto model selection** som default
- VS Code routar automatiskt baserat på task complexity, model health, availability
- Manuell model selection kvar som avancerat alternativ

### Ch6: Project Setup (`en/06-project-setup.mdx` + `sv/`)

**A. .gitignore påverkar också agents**

- I `.copilotignore`-sektionen: förklara att `.gitignore` också exkluderar från workspace index + agent text search/grep
- Två lager av exkludering

**B. VS Code Exclusion Settings (ny undersektion)**

| Setting | Effekt |
|---------|--------|
| `files.exclude` | Döljer helt från Explorer, index, och agent search |
| `search.exclude` | Döljer från agent text search/grep men behåller i Explorer |

- Exempel: `search.exclude` för loggfiler du vill öppna manuellt men inte ha i sökresultat
- Jämförelsetabell: `.gitignore` vs `.copilotignore` vs `files.exclude` vs `search.exclude`

### Ch9: Under the Hood (`en/09-under-the-hood.mdx` + `sv/`)

**A. Cache Explorer (i "Extended Prompt Caching"-sektionen)**

- Cache Explorer view i Agent Debug Logs
- Visar cache hit rates + hur många input tokens som återanvändes
- Koppla tillbaka till Ch3:s optimeringsloop: mät med Cache Explorer → justera → mät igen

### Acceptanskriterier Fas 3

- [ ] Ch2: "Fork Conversations"-sektion finns (både en + sv)
- [ ] Ch2: "#codebase grounding"-sektion finns (både en + sv)
- [ ] Ch4: `/compact` är primär metod, manuell är sekundär för uppgiftsbyte
- [ ] Ch4: `Ctrl+N` shortcut nämns
- [ ] Ch4: Auto model selection rekommenderas som default
- [ ] Ch6: `.gitignore` nämns som agent-indexpåverkare
- [ ] Ch6: `files.exclude` och `search.exclude` förklarade med jämförelsetabell
- [ ] Ch9: Cache Explorer view refereras med koppling till Ch3
- [ ] `npm exec astro -- check` grön
- [ ] `npm run build` grön

---

## Fas 4: Kapitel 7 — Thinking effort, batch operations, Configure Tools

### Ch7: Agents & MCP (`en/07-agents-mcp.mdx` + `sv/`)

**A. Thinking Effort (ny sektion, före "How to Scope Agents")**

- Thinking effort kontrollerar hur mycket resonemang modellen applicerar
- VS Code sätter defaults baserat på utvärderingar + adaptive reasoning
- Högre effort → fler thinking tokens → högre latency + credit consumption
- Öka endast för: arkitekturplanering, multi-step debugging
- Länk till officiell docs om thinking effort-konfiguration

**B. Batch Repetitive Operations (ny sektion, efter "Prune Unused MCP Servers")**

- Upprepade submit/poll/retrieve tool calls lägger till mellanresultat i context
- Lösning: script eller CLI som kör loopen utanför agentkonversationen
- Exempel: databasfrågor i batch → kör script via terminal tool → ge summary till modellen
- Benchmarka scriptad vs interaktiv version — besparing beror på tools/resultat/uppgift

**C. Configure Tools Button (i "How to Scope Agents")**

- **Configure Tools**-knappen i chat input — välj enskilda tools eller MCP-servrar per request
- Sök i tool-pickern, lägg till vid behov
- Komplement till custom agents: snabb per-request-justering utan att byta profil

### Acceptanskriterier Fas 4

- [ ] Ch7: "Thinking Effort"-sektion finns (både en + sv)
- [ ] Ch7: "Batch Repetitive Operations"-sektion finns med konkret exempel (både en + sv)
- [ ] Ch7: "Configure Tools"-knappen nämns i scope-sektionen (både en + sv)
- [ ] Inget befintligt innehåll har brutits av de nya sektionerna
- [ ] `npm exec astro -- check` grön
- [ ] `npm run build` grön

---

## Fas 5: Validering — helhetskontroll

### Checklista

- [ ] `npm run build` — noll fel
- [ ] `npm exec astro -- check` — noll fel
- [ ] Grep efter `/en/03-` (gamla nummer) i alla .mdx — ska vara noll (utom nya Ch3)
- [ ] Grep efter `/en/04-` i gamla Ch4 — ska vara uppdaterat till `/en/05-`
- [ ] Samma för sv/
- [ ] Manuell genomgång: öppna `index.mdx` — 9 kapitel i rätt ordning
- [ ] Manuell genomgång: klicka genom "Continue Learning"-länkar — inga 404
- [ ] Alla nya sektioner har minst en `:::note` eller `:::tip` för skumläsbarhet
- [ ] `sv/`-filer är i synk med `en/` — samma sektioner, samma struktur
- [ ] `git diff --stat` — rimlig omfattning, inga oavsiktliga ändringar

---

## Beroenden mellan faser

```
Fas 1 ──┐
         ├──► Fas 2 (måste veta nya Ch3:s filnamn)
         │
         └──► Fas 3 ──┐
                       ├──► Fas 5
         Fas 4 ────────┘
```

- Fas 1 och Fas 2 är sekventiella (omnumrering beror på att Ch3 finns)
- Fas 3 och Fas 4 är oberoende av varandra, kan göras parallellt
- Fas 5 är sist, efter alla andra