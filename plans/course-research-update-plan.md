# Plan: Kursuppdatering — Token Economy for Vibe Coding (v2)

**Datum:** 2026-09-04
**Status:** Genomförd ✅ (2026-09-04)
**Bas:** En kursgranskning + extern research (JetBrains SkillsBench, Anthropic, GitHub, Chakrabarti m.fl.)

---

## Goal

Uppdatera kursens 8 moduler med forskningsförankrade data, korrigera överdrivna påståenden, eliminera motsägelser, och lägg till ny kunskap från 2026 års forskning om token-effektivitet.

---

## Sammanfattning av research-fynd

| Forskningsfynd | Implikation för kursen |
|---|---|
| Caveman: **8.5%** besparing (JetBrains A/B), inte 65% | Skriv om modul 3-4 att tona ner caveman till modest |
| RTK: **+7.6% dyrare** (JetBrains A/B) | Lägg till som varning/anti-mönster |
| Cache-switching trap: byta modell midsession **kostar mer** | Nytt innehåll i modul 6, 8 |
| Instruktions-bloat: **+226% tillväxt** (Chakrabarti 2026) | Stärk modul 5 med citationer |
| Prompt comments: **99.3% reduktion** av överväxt | Ny teknik för modul 5 |
| 200-linjers tak för instruktionsfiler | Lägg till som konkret gräns i modul 5 |
| Agent patterns: Evaluator-Optimizer mest token-effektiv | Behåll i modul 6, det stämmer |
| Model auto-selection: sparar 60-70% på enkla requests | Behåll i modul 8, har stöd |
| Output tokens kostar 4-5x input — detta är välbelagt | Behåll i modul 1 |
| Tokenräknar-verktyg: flera VS Code-extensions finns | Nämn i modul 3 (debug-avsnittet) |

---

## Affected Files

| Fil | Förändringar |
|-----|-------------|
| `en/01-hidden-tax.mdx` | Mindre: flytta GPU/serverless till modul 8, lägg till ET-formelns ursprung |
| `en/02-context-model.mdx` | Mellan: cache-busting antimönster, nyanserad `/clear`-rekommendation |
| `en/03-quick-wins.mdx` | Stor: lägg till Quick Win #6 (unified diff), Key Takeaways, tona ner caveman, nämn token-verktyg |
| `en/04-cheaper-prompts.mdx` | Stor: tona ner caveman-savings, fixa $30-räknefelet, lägg till RTK-varning |
| `en/05-project-setup.mdx` | Stor: 200-linjers tak, prompt comments-teknik, AGENTS.md-kontrakt klargörs, fixa 600-token-budget |
| `en/06-agents-mcp.mdx` | Stor: Tool Search-korrigering, cache-switching trap, modell-router förbättras |
| `en/07-vibe-coding-guardrails.mdx` | Mellan: AGENTS.md-kontrakt klargörs, källhänvisningar, spec→.prompt.md |
| `en/08-under-the-hood.mdx` | Stor: flytta in GPU/serverless från modul 1, 24h-cache-info, trimma "on the horizon" |
| `sv/*` (8 filer) | Mindre: synka strukturella ändringar från EN |

---

## Steg

### Steg 1 — Tona ner caveman, lägg till RTK-varning, fixa $30-fel (Modul 4)
**Fil:** `en/04-cheaper-prompts.mdx`

**Vad:** Caveman-sektionen hävdar "50–80% output reduction" — JetBrains mätte **8.5%**. Ersätt med:
- Caveman som "modest men säker teknik (~10% besparing)"
- Ny sektion: "Tools That Don't Deliver" med RTK som case study (+7.6% dyrare)
- Referera till JetBrains SkillsBench som källa
- Fixa "$30/month" → ta bort eller ersätt med korrekt siffra (~$0.15)

**Varför:** Kursen måste vara ärlig om effektstorlekar. RTK är ett pedagogiskt perfekt exempel på faran med självrapporterade mätetal.

**Risk:** Att läsare slutar använda caveman helt. Betona att det är säkert och gratis — bara modest.

---

### Steg 2 — Lägg till Quick Win #6, Key Takeaways, token-verktyg (Modul 3)
**Fil:** `en/03-quick-wins.mdx`

**Vad:**
- Lägg till Quick Win #6: "Force Unified Diff Output" med caveman execution prompt
- Lägg till Key Takeaways-sektion (alla andra moduler har en)
- I "Bonus: Measure Your Impact": nämn Tokalator, Token-Track, och Copilot Token Monitor som alternativ till manuell debug-loggsläsning
- Tona ner caveman i "Caveman-Speak" → hänvisa till modul 4

**Varför:** Modul 4 refererar till Quick Win #6 som finns i modul 3 — men den saknas. Key Takeaways saknas bara i denna modul.

---

### Steg 3 — Cache-busting antimönster + nyanserad `/clear`-rekommendation (Modul 2)
**Fil:** `en/02-context-model.mdx`

**Vad:**
- Lägg till sektion: "6 Common Cache-Busting Mistakes" (från Anthropic officiella docs):
  1. Timestamps i systemprompten
  2. Byta modell midsession
  3. Ändra tools midsession
  4. Icke-deterministisk tool-ordning
  5. JSON key-randomisering (Go, Swift)
- Uppdatera session management-råd: lägg till "Stay in session for same task; reset for new task" — ett explicit beslutsflöde
- Lägg till ruta om "The `/clear` tradeoff"

**Varför:** Modul 3 och 8 ger motstridiga råd om `/clear`. Ett centralt beslutsflöde i modul 2 löser motsägelsen. Cache-busting antimönster är direkt användbara.

---

### Steg 4 — 200-linjers tak, prompt comments, AGENTS.md-kontrakt (Modul 5)
**Fil:** `en/05-project-setup.mdx`

**Vad:**
- Lägg till "The 200-Line Ceiling" — konkret gräns med token-math (37× reduction)
- Lägg till "Prompt Comments" teknik (Chakrabarti 2026): HTML-kommentarer i instruktioner för underhåll, strippas före injektion
- Skriv om AGENTS.md-sektionen: gör kristallklar skillnad mot `.prompt.md` — AGENTS.md = beteendekontrakt (mode, scope, output), `.prompt.md` = domänkunskap (arkitektur, kända buggar)
- Fixa 600-token-budgeten: omformulera som "≤100 tokens i custom instructions" — inte en rigid budget
- Ersätt bash-script med PowerShell (redan gjort? verkar så från min genomläsning — dubbelkolla)
- Lägg till sektion: "LLM-Generated Context Files: A Warning" (forskning visar att de ofta skadar mer än de hjälper)

**Varför:** Chakrabarti-pappret är det bästa vi har på instruktionsbloat. 200-linjers tak och prompt comments är konkreta, forskningsstödda tekniker. AGENTS.md-förvirringen mellan modul 5 och 7 måste lösas.

---

### Steg 5 — Tool Search-korrigering + cache-switching trap + modell-router (Modul 6)
**Fil:** `en/06-agents-mcp.mdx`

**Vad:**
- Uppdatera MCP-kostnadsmodellen: förklara Tool Search (registry vs full schema), lägg till versionsnot
- Lägg till "The Model-Switching Cache Trap": "If you're 100K tokens in with Opus, it's cheaper to let Opus answer an easy question than switch to Haiku" (Anthropic officiell)
- Uppdatera modell-router-strategin med denna insikt: switching är bara värt det i början av en session, eller via subagents
- Lägg till Evaluator-Optimizer som explicit rekommenderat mönster med token-besparingsmotivering

**Varför:** Cache-switching trap är en av de viktigaste insikterna från forskningen och saknas helt i kursen. Tool Search-motsägelsen med modul 8 måste fixas.

---

### Steg 6 — AGENTS.md-kontrakt klargörs, källhänvisningar (Modul 7)
**Fil:** `en/07-vibe-coding-guardrails.mdx`

**Vad:**
- Skriv om referenser till AGENTS.md: ersätt "put specs and architecture in AGENTS.md" med "store specs in `.prompt.md` files, reference with `#file:`"
- Lägg till källhänvisningar för statistiken (30-41%, 48%, 60%) — eller märk som "studies suggest" med caveat
- Behåll WIRED-referensen men lägg till "reports indicate" prefix
- Se över "Guardrail 4: Project Memory" — den nämner redan .prompt.md, vilket är bra. Säkerställ konsekvens.

**Varför:** Modul 7:s AGENTS.md-råd motsäger modul 5. Okällbelagd statistik undergräver trovärdighet.

---

### Steg 7 — Flytta in GPU/serverless, 24h-cache, trimma framtidssektionen (Modul 8)
**Fil:** `en/08-under-the-hood.mdx`

**Vad:**
- **Flytta in**: GPU/serverless-ekonomi från modul 1 → ny sektion i modul 8 ("Infrastructure Economics for Self-Hosted Models")
- **Lägg till**: OpenAI 24h extended caching — +919% hit rate efter långa pauser (VS Code officiell)
- **Trimma**: "On the horizon" → flytta JoyAI-LLM Flash etc till collapsible `<details>` eller ta bort
- Lägg till "The Anthropic TTL controversy" (5 min → massiva kostnadsspikar, redan delvis täckt)
- Lägg till cross-reference: modul 2 för cache-busting detaljer

**Varför:** GPU/serverless-detaljerna är för tekniska för modul 1 men passar i "Under the Hood". 24h-cache är en game-changer för async workflows.

---

### Steg 8 — Synka SV-översättningar
**Filer:** `sv/*.mdx` (alla 8)

**Vad:** Efter alla EN-ändringar är klara:
- Applicera strukturella ändringar på SV-filer (nya sektioner, borttagna sektioner)
- Översätt nya textstycken
- Behåll svenska språket men uppdatera tekniska termer konsekvent

**Varför:** SV-versionen måste ha paritet med EN. Utan synk blir kursen förvirrande för svenska läsare.

---

### Steg 9 — Uppdatera index.mdx
**Fil:** `en/index.mdx`

**Vad:** Ändra "Six things" → "Six things" (när Quick Win #6 är på plats är detta redan korrekt). Se över alla modulbeskrivningar så de matchar uppdaterat innehåll.

---

## Risks

| Risk | Mitigation |
|------|-----------|
| Läsare tappar förtroende när tidigare "50-80% besparingar" skrivs ner | Var transparent: "Ny oberoende forskning (JetBrains, juli 2026) visar att effekten är modest men verklig" |
| RTK-skapare reagerar negativt på att kursen nämner dem som varning | Presentera som "intressant casestudie i självrapporterade vs uppmätta besparingar" |
| Chakrabarti-pappret är färskt (aug 2026) — kan ha begränsad peer review | Ange tydligt att det är preprint (arXiv) |
| SV-översättning kräver manuellt arbete efter EN-ändringar | Prioritera strukturella ändringar före språklig finputsning |

---

## Teststrategi

Efter varje modul-ändring:
1. **Bygg**: `npm run build` — verifiera att Astro/Starlight kompilerar utan fel
2. **Länkar**: Kontrollera att alla interna cross-references (`/token-economy-course/en/...`) fungerar
3. **Visuell**: Öppna i dev server, verifiera att mermaid-diagram renderas, layouter är intakta
4. **Innehåll**: Läs igenom den ändrade modulen i sin helhet — kontrollera flöde, ton, konsekvens

Efter alla ändringar:
5. **Full build**: `npm run build && npm run preview`
6. **Länk-koll**: Kör en broken link checker mot preview-servern
7. **SV-paritet**: Jämför filstruktur EN vs SV — alla sektioner ska finnas i båda

---

## Implementation Ordning

```
1. Modul 3 (Quick Win #6 + Key Takeaways) — blockerande för andra
2. Modul 4 (Caveman-toning + RTK + $30-fix) — oberoende
3. Modul 2 (Cache-busting + /clear-beslutsflöde) — oberoende
4. Modul 5 (200-linjer + prompt comments + AGENTS.md-kontrakt) — central för 6, 7
5. Modul 6 (Tool Search + cache-switching + router) — beroende av 5
6. Modul 7 (AGENTS.md-kontrakt + källor) — beroende av 5
7. Modul 1 (Flytta GPU/serverless → flagga för steg 7) — oberoende
8. Modul 8 (GPU/serverless + 24h-cache + trim) — beroende av 1
9. index.mdx (uppdatera beskrivningar) — beroende av alla ovan
10. SV-filer (synka) — beroende av alla EN-ändringar
```

---

## Bilaga: Källförteckning

1. **JetBrains SkillsBench**: "Caveman: a measured 8.5% token saving" (juli 2026)
2. **JetBrains SkillsBench**: "RTK: the tool that costs you money" (juli 2026)
3. **Chakrabarti et al.**: "Catastrophic Remembering in Agentic Coding" (arXiv:2608.11095, aug 2026)
4. **Anthropic Engineering**: "Prompt caching is everything" (april 2026)
5. **GitHub Blog**: "Improving token efficiency in GitHub Agentic Workflows" (maj 2026)
6. **VS Code Engineering**: "Improving token efficiency for GitHub Copilot" (juni 2026)
7. **Anthropic Docs**: Prompt caching official documentation
8. **OpenAI Docs**: Prompt caching official documentation
9. **LLMLingua** (Jiang et al., Microsoft): EMNLP '23, ACL '24
10. **OckBench**: Token efficiency benchmark (2025)
11. **Token-Budget-Aware LLM Reasoning** (ACL 2025)