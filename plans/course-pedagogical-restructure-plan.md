# Pedagogisk omskrivning av Token Economy-kursen

**Skapad:** 2026-09-08
**Status:** Godkänd för genomförande
**Baserad på:** Djup pedagogisk analys och dialog om kursens flöde, ton och struktur

---

## Mål

Skriva om kursen från en teknisk referens till en sammanhängande pedagogisk resa — med ny modulordning, ny ton, integrerad mätning, och upplösta Quick Wins. **7 moduler istället för 9.** Både `en/` och `sv/` parallellt.

---

## Beslutade principer

- **Mätning integreras** — grundverktyg i Modul 2 (pris + se prislappen), verifiering per teknik i Modul 3-5. Ingen separat mätmodul.
- **Tre spar-domäner** — Skriv (per prompt), Bygg (per projekt), Kör (per session/agent). Varje med olika rytm och mätmetod.
- **Quick Wins upplöses helt** — varje teknik flyttas till sin konceptuella hemvist.
- **Ton:** Varm, konkret, professionell. Varje modul: Öppning → Innehåll → Summering → Nästa.
- **Genomgående röd tråd** — varje modul bygger explicit på den förra, inget introduceras plötsligt.
- **Både `en/` och `sv/`** parallellt, `en/` först som mall.

---

## Ny modulstruktur

```
FÖRSTÅ (vad + varför) → AGERA (hur du sparar, per domän) → FÖRDJUPA (avancerat + internt)
```

| Ny # | Titel | Kärnfråga | Innehållskälla |
|------|-------|-----------|----------------|
| **1** | Vad händer när du trycker Enter? | Vad är tokens och context? | NY modul (tokenisering från M1 + glossary, context från M2, engelska vs svenska från M5) |
| **2** | Vad kostar ett Enter-tryck? | Hur blir tokens till kronor — och hur ser du det? | M1 (UBB, ET-formel) + M3 (hover, dashboard, chronicle) |
| **3** | Skriv snålare | Hur formulerar du prompts som kostar mindre? | M5 + code-only + unified diff från M4. Per teknik: Verifiera-rad. |
| **4** | Bygg snålt | Hur konfigurerar du projektet för evig besparing? | M6 + .gitignore/files.exclude/search.exclude + tabs + sessionshantering från M4. Mätning före/efter. |
| **5** | Kör agenter och MCP utan slöseri | Hur använder du avancerade features smart? | M7 + modellval från M4. Mätning per session. |
| **6** | Vibea utan skuld | Hur kodar du snabbt UTAN dyr teknisk skuld? | M8 (ton + övergångar omskrivna, tekniskt innehåll intakt) |
| **7** | Vad Copilot gör åt dig | Vad optimeras automatiskt? | M9 (ton + kursavslutande wrap-up) |

---

## Affected files

| Åtgärd | Fil(er) |
|--------|---------|
| **Skapa** | `en/01-what-happens.mdx`, `sv/01-what-happens.mdx` |
| **Skriva om** | `en/01-hidden-tax.mdx` → Modul 2 (pris + grundmätning) |
| **Skriva om** | `en/05-cheaper-prompts.mdx` → Modul 3 (prompt-sparande + verifiering per teknik) |
| **Skriva om** | `en/06-project-setup.mdx` → Modul 4 (projekt-sparande + file exclusion + sessionshantering) |
| **Skriva om** | `en/07-agents-mcp.mdx` → Modul 5 (agent-sparande + modellval) |
| **Skriva om** | `en/08-vibe-coding-guardrails.mdx` → Modul 6 (ton + övergångar) |
| **Skriva om** | `en/09-under-the-hood.mdx` → Modul 7 (ton + kursavslutande wrap-up) |
| **Ta bort** | `en/04-quick-wins.mdx` (innehåll distribuerat till 3, 4, 5) |
| **Ta bort** | `en/02-context-model.mdx` (innehåll flyttat till 1) |
| **Ta bort** | `en/03-measure-before-you-cut.mdx` (innehåll flyttat till 2, 3, 4, 5) |
| **Skriva om** | `en/index.mdx`, `sv/index.mdx` (nya modulkort, nytt narrativ) |
| **Skriva om** | `en/glossary.mdx`, `sv/glossary.mdx` (ev. referensuppdateringar) |
| **Skapa/skriv om** | Alla `sv/*.mdx` (samma struktur som `en/`) |

---

## Steg

### Steg 1: Skapa ny Modul 1 — "Vad händer när du trycker Enter?"

**Fil:** `token-economy-course/src/content/docs/en/01-what-happens.mdx` (ny)

**Innehåll från:**
- Tokenisering: "vad är ett token", BPE, ~4 tecken / 0.75 ord (från nuvarande M1:s "Where Your Tokens Go" + glossary)
- Context-komponenter: system prompt, custom instructions, open tabs, conversation history, tool definitions, user message (från M2 "Anatomy of a Copilot Request")
- Prompt prefix och caching (från M2)
- Context window — hur det fylls upp (från M2)
- Cache breakpoints (Anthropic) vs automatic prefix caching (OpenAI) (från M2)
- Engelska vs svenska tokenisering — 1.4–1.7× skillnad (från M5, flyttas hit — hör till token-konceptet)

**Tonal approach:** Börjar med den konkreta bilden: "Varje gång du trycker Enter...". Bygger den mentala modellen av vad som faktiskt lämnar datorn. Inget om pris ännu.

**Practice:** Öppna en tokenizer visualizer (t.ex. OpenAI Tokenizer) och klistra in din senaste prompt. Räkna tokens. Jämför med engelsk översättning av samma prompt.

**Summering:** Ett token är ~4 tecken eller 0.75 ord. Din prompt, dina filer, din historik — allt tokeniseras innan det når modellen. Engelska tokeniserar ~1.4–1.7× effektivare än svenska. Context window har en gräns — när det fylls glömmer modellen tidigare innehåll.

**Nästa:** "Nu vet du *vad* som skickas. Nästa fråga: *vad kostar det?*"

---

### Steg 2: Skriv om Modul 2 — "Vad kostar ett Enter-tryck?"

**Fil:** `token-economy-course/src/content/docs/en/02-price-and-measurement.mdx` (ny, ersätter gamla `01-hidden-tax.mdx`)

**Behåll från gamla M1:** UBB-konceptet, AI Credits per plan, ET-formeln, plan-jämförelsetabellen, pooling-varning, "output is the real cost driver"

**Lägg till från M3:**
- Per-request credit hover — hur du ser kostnaden för en enskild request
- Session cumulative cost — context window control
- Monthly dashboard — Copilot status bar
- `/chronicle:cost-tips` — personliga rekommendationer

**Varför:** Användaren har precis byggt en mental modell av tokens och context i Modul 1. Nu får de se prislappen — och SAMTIDIGT lära sig verktygen för att se den själva. Teori + praktik i samma andetag.

**Tonal approach:** "Du vet nu att varje Enter-tryck skickar tokens. Frågan är: vad kostar de? GitHub har ett svar — och du har verktygen för att se det själv."

**Practice:** Öppna din Copilot-statusdashboard. Notera hur många procent av din månadsbudget du använt. Hovra över dina 3 senaste chat-svar och jämför kreditkostnaden. Kör `/chronicle:cost-tips` och läs rekommendationerna.

**Summering:** Output tokens kostar ~5× input. ET-formeln: `m × (1.0×I + 0.1×C + 4.0×O)`. Du har tre verktyg för att se din förbrukning: hover (per request), context window (per session), dashboard (per månad).

**Nästa:** "Du ser nu vad saker kostar — och du ser att output är den största kostnadsdrivaren. Nästa steg: hur du skriver prompts som genererar mindre output."

---

### Steg 3: Skriv om Modul 3 — "Skriv snålare prompts"

**Fil:** `token-economy-course/src/content/docs/en/03-cheaper-prompts.mdx` (omskriven från gamla `05-cheaper-prompts.mdx`)

**Behåll från M5:**
- Vaghetens kostnad (specifik vs vag prompt, kostnadsjämförelse)
- Bullets vs prose (tokenbesparing per prompt)
- Caveman-speak (token savings, JetBrains benchmark)
- Meta-prompts för output-kontroll (tabellen)
- När kompression slår fel (situationer där verbositet är värt kostnaden)
- RTK case study (verktyg som inte levererar)

**Lägg till från M4:**
- Code-only instruction ("Return code blocks only...")
- Unified diff output (structure-aware diff, ACL 2026 study)

**Flytta ut:**
- Engelska vs svenska → redan flyttat till Modul 1

**NYTT inslag — Verifiera:** Varje teknik avslutas med en explicit "Verifiera:"-rad:
- Efter specifik vs vag: "Verifiera: Kör samma uppgift med din gamla promptstil och den nya bullet-stilen. Hovra över båda svaren och jämför kreditkostnaden."
- Efter caveman: "Verifiera: Ta din 3 vanligaste prompts. Skriv om dem i caveman-stil. Jämför hover-kostnaden."
- Efter meta-prompts: "Verifiera: Lägg till en output-begränsning i din prompt. Kör samma uppgift och jämför hover-kostnaden."

**Tonal approach:** "Varje gång du skriver en prompt betalar du för både input OCH output. Output kostar 5× mer. Så det smartaste du kan göra är att be om mindre output. Inte sämre output — *mindre*. Här är teknikerna."

**Practice:** Välj dina 3 vanligaste prompttyper. Skriv om dem med teknikerna ovan. Kör dem och jämför hover-kostnaden före/efter. Logga resultatet i en enkel tabell (tasks, credits före, credits efter).

**Summering:** Vaghet kostar 5× mer än specificitet. Bullets > prose. Caveman sparar ~8.5%. Code-only instructions sparar 40–70% output. Verifiera ALLTID med hover.

**Nästa:** "Du skriver nu prompts som kostar mindre. Men varje gång du skickar en prompt följer dina projektfiler med — vare sig du vill eller inte. Nästa: hur du bygger ett projekt som inte läcker tokens."

---

### Steg 4: Skriv om Modul 4 — "Bygg ett snålt projekt"

**Fil:** `token-economy-course/src/content/docs/en/04-lean-project.mdx` (omskriven från gamla `06-project-setup.mdx`)

**Behåll från M6:**
- Always-on tax (tabellen: vilka filer laddas när)
- Minimal template (code-only + language, ~40 tokens)
- Medium template (med projektkontext)
- What NOT to put (API keys, arkitektur, konventioner)
- 200-line ceiling (Chakrabarti +226%, Vaughan recommendation)
- Prompt comments (latent reasoning)
- Lazy-loading patterns (skills, .prompt.md)
- VS Code-inställningar (autoOpenTabs.max, maxRequests, maxToolCalls)
- Varning: Låt inte AI skriva dina instruktionsfiler

**Lägg till från M4:**
- `.gitignore` + `files.exclude` + `search.exclude` — VS Code-inställningar för att filtrera bort brus (ersätter `.copilotignore`, som är en tredjeparts-extension, inte en native VS Code-funktion)
- Stänga onödiga tabs — autoOpenTabs.max settings
- Sessionshantering — `/compact`, nya sessioner, när stanna vs lämna

**NYTT inslag — Mätning före/efter:** "Innan du ändrar något: notera din dagsförbrukning i dashboarden. Gör ändringarna. Jämför efter en vecka."

**Tonal approach:** "Du skriver snåla prompts nu. Men här är något du inte ser: varje gång du trycker Enter skickas dina instruktionsfiler med — ALLA dina instruktionsfiler. Om din `copilot-instructions.md` är 1000 rader betalar du för 500+ tokens i VARJE request. Frågan är inte om du har råd — frågan är om dina instruktioner är VÄRDA det priset."

**Practice:** Granska din `.github/copilot-instructions.md`. Är den under 200 rader? Ta bort allt som inte är kritiskt. Lägg till `search.exclude` för `dist/`, `build/`, `node_modules/` i din `.vscode/settings.json`. Kör en vecka och jämför dashboard-förbrukningen.

**Summering:** Always-on tax betalas i varje request. Minimal instructions, rätt exclusion-inställningar, stängda tabs, och rätt sessionshantering minskar denna baslinjekostnad permanent. 200 rader är en praktisk ceiling.

**Nästa:** "Ditt projekt är snålt. Dina prompts är snåla. Men agenter och MCP-servrar har en egen tyngdlag — de kan loopa och bränna tokens utan att du märker det. Nästa: hur du kör agenter utan att de kör ditt kreditkonto."

---

### Steg 5: Skriv om Modul 5 — "Kör agenter och MCP utan slöseri"

**Fil:** `token-economy-course/src/content/docs/en/05-agents-mcp.mdx` (omskriven från gamla `07-agents-mcp.mdx`)

**Behåll från M7:**
- Agentiska loopen (Analyze → Plan → Execute → Test → Iterate)
- Tre moder och deras kostnadsprofiler (Ask/Edit/Agent)
- Thinking Effort (när öka, när låta vara)
- MCP server math (tool definitions i context, overhead)
- Tool Search (hur det fungerar, embedding-guided routing)
- Scoped custom agents (Frontend/Database/Testing/Security, kontext och tools)
- Stop conditions (exempel på boundaries)
- Sub-agent patterns (Orchestrator-Workers, Evaluator-Optimizer)
- MCP hygiene checklist (prune unused, test with subset, inspect tool count)

**Lägg till från M4:**
- Modellval för rutinuppgifter (lightweight models, spara premium för komplexa tasks)

**NYTT inslag — Mätning per session:** "Innan du skapar en scoped agent: kör samma uppgift med @workspace. Notera session-kostnaden i context window control. Kör igen med din scoped agent. Jämför."

**Tonal approach:** "Du har byggt en snål motor. Nu ska vi prata om gaspedalen. Agenter kan göra otroliga saker — men de kan också loopa, testa, iterera, och bränna krediter i en loop du inte ser. Det här är inte 'använd inte agenter'. Det är 'använd agenter MED avsikt'."

**Practice:** Skapa en scoped custom agent för ett specifikt domänområde i ditt projekt (t.ex. "Frontend" med bara `src/components/`). Kör en uppgift med den och jämför sessionkostnaden mot @workspace.

**Summering:** Agenter har högst potential men också högst overhead. Ask/Edit/Agent — använd rätt nivå. Scoped agents > @workspace. Stop conditions förhindrar runaway loops. MCP-hygiene: prune unused servers.

**Nästa:** "Du kan tekniken nu. Du skriver snålt, ditt projekt är snålt, dina agenter är scoped. Men den svåraste frågan återstår: hur gör du allt detta UTAN att tappa flow? Hur vibear du utan att samla på dig teknisk skuld som sen kostar tokens att städa upp?"

---

### Steg 6: Skriv om Modul 6 — "Vibea utan skuld"

**Fil:** `token-economy-course/src/content/docs/en/06-vibe-coding.mdx` (omskriven från gamla `08-vibe-coding-guardrails.mdx`)

**Behåll tekniskt innehåll intakt:**
- Vibe coding definition + Collins Dictionary + Karpathy
- Carnegie Mellon study, GitClear data
- Decision framework (verification vs discovery)
- Four failure modes (duplicated logic, accidental architecture, bloated functions, missing edge cases)
- Winchester Mystery House + 4-step prevention methodology
- Guardrail 1: Write a spec first
- Guardrail 2: Use TDD + stop conditions

**Ändringar:**
- Ny öppning som knyter tillbaka till Modul 5: "I förra modulen lärde du dig scopa agenter. Men även en perfekt scopad agent kan skapa kod som kostar dig tokens i månader framöver — inte i prompt-kostnad, utan i debugging, refactoring, och omskrivning. Den här modulen handlar om den dolda token-kostnaden av dålig kod."
- Språkligt omskriven för den nya tonen (varm, konkret, professionell)
- Ny "Nästa"-avslutning mot Modul 7

---

### Steg 7: Skriv om Modul 7 — "Vad Copilot gör åt dig"

**Fil:** `token-economy-course/src/content/docs/en/07-under-the-hood.mdx` (omskriven från gamla `09-under-the-hood.mdx`)

**Behåll tekniskt innehåll intakt:**
- Harness-arkitekturen (context assembly, tool exposure, agent loop, transport)
- Output compression (5.5% reduktion)
- Tool Search (9–11% reduktion)
- Background work batching
- WebSocket improvements (19% TTFT reduktion)
- Evidence-based optimization (A/B experiments)
- The Local Metric Trap
- Infrastructure economics (serverless vs dedicated GPU, H200 benchmark)

**Ändringar:**
- Ny öppning: "Du har gjort ditt. Du skriver snålt, du har byggt ett snålt projekt, du scoped dina agenter. Men du är inte ensam i det här — Copilot själv jobbar också på att spara tokens åt dig. Den här sista modulen handlar om vad som händer bakom kulisserna, utan att du behöver lyfta ett finger."
- **Kursavslutande wrap-up** på slutet av modulen — en sammanfattning av hela resan från Modul 1-7, inte bara denna modul
- Ton omskriven genomgående

---

### Steg 8: Ta bort Quick Wins, skriv om Index, byt filnamn

**Ta bort:**
- `en/04-quick-wins.mdx` och `sv/04-quick-wins.mdx`
- `en/02-context-model.mdx` och `sv/02-context-model.mdx`
- `en/03-measure-before-you-cut.mdx` och `sv/03-measure-before-you-cut.mdx`
- `en/01-hidden-tax.mdx` och `sv/01-hidden-tax.mdx`

**Byta filnamn:**
- Skapa `01-what-happens.mdx` (ny)
- Skapa `02-price-and-measurement.mdx` (ny, från M1+M3)
- `05-cheaper-prompts.mdx` → `03-cheaper-prompts.mdx`
- `06-project-setup.mdx` → `04-lean-project.mdx`
- `07-agents-mcp.mdx` → `05-agents-mcp.mdx`
- `08-vibe-coding-guardrails.mdx` → `06-vibe-coding.mdx`
- `09-under-the-hood.mdx` → `07-under-the-hood.mdx`

**Skriva om `en/index.mdx`:**
- Ny ingress: "En resa från första Enter-trycket till full kontroll över din token-budget."
- Nya modulkort med de 7 nya titlarna
- Uppdaterade description-texter som speglar den nya ordningen och narrativet

**Skriva om `sv/index.mdx`:** Samma som `en/`.

**Uppdatera cross-reference-länkar:** Systematiskt sök-ersätt för alla `/vibe-on-budget/en/0X-` och `/vibe-on-budget/sv/0X-` länkar i samtliga moduler så de pekar på rätt nya modulnummer.

---

### Steg 9: Skapa/skriv om svenska versioner

Alla `sv/*.mdx` skapas/skrivs om med samma modulstruktur och numrering som `en/`. Innehållet översätts men behåller:
- Samma pedagogiska flöde
- Samma ton (varm, konkret, professionell — på svenska)
- Samma Summering + Nästa-struktur
- Samma "Verifiera:"-rader
- Samma Practice-sektioner

---

## Teknisk genomförandeordning per fil

```
Steg 1:  Skapa en/01-what-happens.mdx                    (NY)
Steg 2:  Skapa en/02-price-and-measurement.mdx            (NY, från M1+M3)
Steg 3:  Skriv om en/05-cheaper-prompts.mdx → 03          (omskrivning, M5+M4-delar)
Steg 4:  Skriv om en/06-project-setup.mdx → 04            (omskrivning, M6+M4-delar)
Steg 5:  Skriv om en/07-agents-mcp.mdx → 05               (omskrivning, M7+M4-del)
Steg 6:  Skriv om en/08-vibe-coding-guardrails.mdx → 06   (ton+övergångar)
Steg 7:  Skriv om en/09-under-the-hood.mdx → 07           (ton+wrap-up)
Steg 8a: Ta bort en/01-hidden-tax.mdx, en/02-context-model.mdx, en/03-measure-before-you-cut.mdx, en/04-quick-wins.mdx
Steg 8b: Skriv om en/index.mdx                            (nya kort, nytt narrativ)
Steg 8c: Skriv om en/glossary.mdx                         (ev. referensuppdateringar)
Steg 8d: Uppdatera cross-reference-länkar i alla en/*.mdx
Steg 9a: Skapa/skriv om alla sv/*.mdx                     (samma struktur)
Steg 9b: Skriv om sv/index.mdx                            (samma som en/)
Steg 9c: Ta bort sv/01-hidden-tax.mdx, sv/02-context-model.mdx, sv/03-measure-before-you-cut.mdx, sv/04-quick-wins.mdx
Steg 9d: Uppdatera cross-reference-länkar i alla sv/*.mdx
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|------|-------------|------------|
| Innehållsförlust vid distribution av Quick Wins | Medel | Varje stycke från M4 mappas explicit till destinationsmodul innan radering |
| Footnote-referenser bryts vid filnamnsbyte | Låg | Alla footnotes är `[^mX-N]`-formaterade — modulspecifika prefix bör överleva filnamnsbyte |
| Tonen blir inkonsekvent över 7 moduler | Medel | Använd den godkända öppningstonen som stilreferens; varje modul följer samma mall: Öppning → Innehåll → Summering → Nästa |
| "Verifiera:"-rader blir påklistrade eller generiska | Medel | Varje "Verifiera:" måste nämna specifik teknik + specifikt mätverktyg (hover/context window/dashboard) |
| Cross-reference-länkar pekar fel efter omnumrering | Hög | Systematiskt sök-ersätt för alla `/vibe-on-budget/en/0X-` och `/vibe-on-budget/sv/0X-` |
| `sv/` och `en/` divergerar i struktur | Låg | Gör `en/` helt klar och validerad först, kopiera struktur → översätt innehåll |
| `astro build` misslyckas efter borttagning/filnamnsbyte | Medel | Kör `astro build` efter varje steg, inte bara i slutet |
| Gamla .mdx-filer glöms kvar och skapar dubbletter | Låg | Explicit delete-lista i steg 8a/9c |

---

## Validering per steg

| Efter steg | Validering |
|------------|-----------|
| 1 (ny M1) | `astro build` → bygger? Läs som junior — förstår jag tokens+context? |
| 2 (ny M2) | `astro build` → bygger? Kan jag hitta hover, dashboard, chronicle enbart från denna modul? |
| 3 (M3 omskriven) | `astro build` → bygger? Har varje sparteknik en konkret "Verifiera:"-rad? |
| 4 (M4 omskriven) | `astro build` → bygger? Är .copilotignore, sessionshantering, tabs naturligt integrerade? |
| 5 (M5 omskriven) | `astro build` → bygger? Finns modellval från M4 med? MCP hygiene checklist intakt? |
| 6 (M6 ton) | `astro build` → bygger? Läs sida vid sida med gamla M8 — tonen märkbart annorlunda? |
| 7 (M7 wrap-up) | `astro build` → bygger? Finns kursavslutande sammanfattning? |
| 8 (Index + borttagning) | `astro build` → bygger? Alla 7 modulkort visas? Inga brutna länkar? |
| 9 (svenska) | `astro build` → bygger? Alla svenska sidor laddar? Samma struktur som en/? |

---

## Appendix: Quick Wins distributionskarta

Varje stycke från `04-quick-wins.mdx` mappas till sin destinationsmodul:

| Quick Wins-sektion | Destination | Rubrik i ny modul |
|-------------------|-------------|-------------------|
| 1. Code-Only Instruction | Modul 3 (Skriv snålare) | "Be om mindre output" |
| 2. Clear Chat Thread Regularly | Modul 4 (Bygg snålt) | "Sessionshygien" |
| 3. Close Unnecessary Tabs | Modul 4 (Bygg snålt) | "Stäng det du inte använder" |
| 4. File Exclusion (.gitignore + settings) | Modul 4 (Bygg snålt) | "Filtrera bort brus" |
| 5. Lightweight Models | Modul 5 (Kör agenter) | "Välj rätt modell för rätt jobb" |
| 6. Unified Diff Output | Modul 3 (Skriv snålare) | "Be om unified diff" |

---

## Appendix: Mätningens placering

| Mätverktyg | Var introduceras | Var används för verifiering |
|-----------|-----------------|---------------------------|
| Per-request hover | Modul 2 (grund) | Modul 3 (prompt-jämförelser) |
| Session context window | Modul 2 (grund) | Modul 5 (agent-sessionsjämförelser) |
| Monthly dashboard | Modul 2 (grund) | Modul 4 (före/efter projektändringar) |
| `/chronicle:cost-tips` | Modul 2 (grund) | Genomgående (löpande rekommendationer) |