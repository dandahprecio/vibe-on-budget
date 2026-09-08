# Module 2 Remediation Plan — Hur Copilot bygger kontext

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M2 är kursens tyngsta och längsta modul — den måste vara en brygga mellan M1:s "vad kostar det?" och M3:s "hur mäter jag?", inte en uppslagsbok.

---

## Goal

Hugga M2 på mitten. Gör den till en fokuserad, handlingsorienterad modul som svarar på "vad skickas och hur drar jag nytta av cache?", och flytta leverantörsdjupdyket till en avgränsad fördjupning eller M9.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/02-context-model.mdx` | Omstrukturera: flytta, slå ihop, lyfta sektioner |
| `sv/09-under-the-hood.mdx` | Ta emot leverantörsdjupdyk från M2 |
| `sv/01-hidden-tax.mdx` | Ev. justera framåtreferens (beroende på M1-planen) |

---

## Steps

Varje steg är ordnat som en röd tråd: M1→M2→M3-kopplingen bevaras, flödet inuti M2 blir rakare.

### Step 1 — Koppla tillbaka till M1:s ET-formel (ny mening)

**Problem:** M2 nämner aldrig ET-formeln från M1. Läsaren som precis sett `ET = m × (1.0×I + 0.1×C + 4.0×O)` i M1 får ingen signal om att M2 är platsen där `C` (cache) och `I` (input) förklaras.

**Åtgärd:** Lägg till en övergångsmening efter M2:s titel:
```
I Modul 1 såg du att cacheade tokens väger 0,1× i GitHubs Effective Tokens-formel —
90% billigare än nya input-tokens. Den här modulen lär dig vad som faktiskt skickas
i varje förfrågan och hur du maximerar cache-träffar.
```

**Varför:** Steg 1 i M2:s röda tråd: ankra till M1. Läsaren ska veta *varför* cache är värt att förstå innan *hur* det fungerar.

---

### Step 2 — Lägg till ett konkret typexempel i "Anatomi av en Copilot-förfrågan" (komplettera)

**Problem:** Storlekskolumnen i anatomi-tabellen visar intervall som "50–1000+ tokens" och "500–10 000+ tokens". Efter M1:s konkreta priser förväntar sig läsaren en realistisk totalsumma.

**Åtgärd:** Lägg till ett konkret typexempel under tabellen:
```
:::note[Typexempel: En vanlig Copilot-fråga]
En typisk session med 3 öppna filer (~2 000 tokens),
5 MCP-verktyg i registret (~1 000 tokens i beskrivningar),
och 5 tidigare meddelanden i historiken (~3 000 tokens)
skickar ~6 500 tokens input overhead innan din prompt ens räknas.
:::
```

**Varför:** Steg 2 i röda tråden: gör abstrakta token-intervall till en konkret siffra läsaren kan relatera till. "6 500 tokens overhead" är en ögonöppnare på samma sätt som "output kostar 5× input" var i M1.

---

### Step 3 — Slå ihop de två cache-sektionerna (deduplicera)

**Problem:** "Prefix-cachning vs Cache Breakpoints" (🟡, tidigt) och "Så fungerar promptcachning" (sent, med leverantörstabell) överlappar kraftigt. Båda förklarar Anthropic vs OpenAI, båda nämner 90% rabatt, båda har Mermaid-diagram. Läsaren får intrycket att de läst samma sak två gånger.

**Åtgärd:**
1. Behåll "Prefix-cachning vs Cache Breakpoints" (🟡) som **huvudförklaringen** — den har diagrammet, koncepten och "Cache-ekonomi"-noten.
2. Ta bort "Så fungerar promptcachning" som fristående sektion. Behåll leverantörstabellen (OpenAI/Anthropic/DeepSeek/Google med TTL, skrivkostnad, träffkostnad) men gör den till en `:::note[Fördjupning: Cache-mekanik hos olika leverantörer]` inuti "Prefix-cachning vs Cache Breakpoints".
3. Ta bort "Cachemekanik hos olika leverantörer"-texten som upprepar koncepten — tabellen räcker som fördjupning.

**Varför:** Steg 3 i röda tråden: en enda, rak förklaring av cache → läsaren går vidare till "vad bryter cachen?" utan att upprepa sig.

---

### Step 4 — Flytta "Fällan med lokala mätvärden" till efter "Vanliga misstag" (omstrukturera)

**Problem:** "Fällan med lokala mätvärden" ligger mellan cache-jämförelsen (Anthropic/OpenAI) och "Vanliga misstag". Den bryter det naturliga flödet: "cache fungerar så här" → ⚡"du kan inte se kostnaden"⚡ → "här är saker som bryter cache".

**Åtgärd:** Flytta "Fällan med lokala mätvärden" till direkt *efter* "Vanliga misstag som bryter cachen". Den nya ordningen blir:
1. Prefix-cachning vs Cache Breakpoints
2. Vanliga misstag som bryter cachen
3. Fällan med lokala mätvärden ← HIT
4. När ska du rensa chatten?

**Nytt flöde:** "Cache fungerar så här → här är misstagen som bryter den → du kan inte se kostnaden utan felsökningsloggning → här är när du bör rensa eller stanna kvar."

**Varför:** Steg 4 i röda tråden: "Fällan" loggar naturligt på "misstagen" — du kan bryta cache utan att veta om det, för du ser inte siffrorna lokalt. Aktivera felsökningsloggning för att fånga det.

---

### Step 5 — Flytta `/fork` till "När ska du rensa chatten"-kontexten (omplacera)

**Problem:** `/fork` ligger som en egen H2-sektion mellan "Vanliga misstag" och "Vad det innebär för ditt arbetsflöde". Det är ett specifikt CLI-kommando — inte en konceptuell pelare i modulen.

**Åtgärd:** Infoga `/fork` som en `:::tip` i anslutning till "När ska du rensa chatten"-tabellen:
```
:::tip[Förgrena för att utforska alternativ]
Skriv `/fork` för att skapa en ny session som ärver hela konversationshistoriken.
Användbart när du vill testa en alternativ lösning utan att betala prefixkostnaden igen.
Till skillnad från `/clear` och `/compact` är förgrening för parallella spår, inte för
att fortsätta samma uppgift.
:::
```

**Varför:** Steg 5 i röda tråden: `/fork` är en naturlig förlängning av "när ska jag rensa vs stanna?"-beslutsmatrisen. Ingen egen sektion behövs.

---

### Step 6 — Lyft "Vad det innebär för ditt arbetsflöde" till modulens klimax (omstrukturera)

**Problem:** "Vad det innebär för ditt arbetsflöde" (4 praktiska regler) är modulens mest handlingsorienterade sektion — men den ligger efter `/fork` och före cache-djupdyket. Den drunknar.

**Åtgärd:** Flytta den till **direkt efter "Vanliga misstag" + "Fällan med lokala mätvärden"**. Den blir modulens näst sista sektion (före "Övning" och "Viktiga slutsatser").

Den nya ordningen för modulens andra halva blir:
1. Prefix-cachning vs Cache Breakpoints
2. Kontextfönstret
3. Vanliga misstag som bryter cachen
4. Fällan med lokala mätvärden
5. När ska du rensa chatten? (+ `/fork`-tip)
6. **Vad det innebär för ditt arbetsflöde** ← HIT, som klimax
7. Övning
8. Viktiga slutsatser

**Varför:** Steg 6 i röda tråden: efter att ha lärt sig teori (cache), misstag (vad bryter den) och mätning (felsökningsloggning) får läsaren de 4 reglerna som en handlingsplan. Det är den punkt där M2 säger "så här använder du allt detta imorgon".

---

## Förväntad ny struktur (efter fixar)

```
# Hur Copilot bygger kontext

[Övergång från M1: ET-formelns cache-vikt]

## Anatomi av en Copilot-förfrågan 🟢
  (Mermaid + tabell — oförändrad)
  [NY: typexempel med ~6 500 tokens overhead]

## Promptprefixet 🟡
  (Oförändrat)

## Hur kontextfönstret fylls 🟢
  (Oförändrat)

## Prefix-cachning vs Cache Breakpoints 🟡
  (Huvudförklaring — oförändrad)
  [NY: leverantörstabell som fördjupnings-note här]

## Vanliga misstag som bryter cachen 🟡
  (6-raders tabell — oförändrad)

## Fällan med "lokala mätvärden" 🟢  ← FLYTTAD HIT
  (Oförändrad — felsökningsloggning)

## När ska du rensa chatten? 🟡
  (Beslutsmatris — oförändrad)
  [NY: /fork som tip här]

## Vad det innebär för ditt arbetsflöde  ← FLYTTAD HIT, klimax
  (4 praktiska regler — oförändrade)

## Övning 🟢

## Viktiga slutsatser

[SEKTIONER BORTTAGNA]
✂ "Förgrena konversationer" — infogad som tip ovan
✂ "Så fungerar promptcachning" — tabellen sparad, texten borttagen (upprepning)
✂ "Cachemekanik hos olika leverantörer" — tabellen flyttad till fördjupnings-note
✂ "Vad det innebär för dig" (under cache-djupdyket) — integrerad i arbetsflödesreglerna
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| Leverantörstabellen känns för tekniskt tidigt | Låg | Den ligger i en `:::note` — läsaren kan hoppa över och återkomma |
| Borttagning av cache-djupdyket gör M2 för ytlig | Låg | Koncepten finns kvar i "Prefix-cachning vs Cache Breakpoints". Tabellen med TTL/skrivkostnad/träffkostnad är bevarad. |
| `/fork` i en tip känns nedprioriterat | Låg | `/fork` är ett niche-kommando — de flesta läsare behöver "rensa vs stanna"-matrisen mer |
| "Vad det innebär" som klimax kan krocka med "Viktiga slutsatser" | Medium | "Vad det innebär" är regler i brödtext (4 st med förklaringar). "Viktiga slutsatser" är punktlistan längst ned. De kompletterar — reglerna är djupet, slutsatserna är repetitionskorten. |

---

## Test Strategy

- **Efter Step 1:** Läs M1:s sista sektion + M2:s första mening. Känns övergången naturlig? Ser läsaren kopplingen ET → cache?
- **Efter Step 2:** Läs "Anatomi"-sektionen. Är typexemplet begripligt utan att vara överväldigande? Går siffran 6 500 att härleda från tabellen?
- **Efter Step 3:** Jämför gamla M2 med nya. Har vi tagit bort alla upprepningar mellan "Prefix-cachning" och "Så fungerar promptcachning"?
- **Efter Step 4–6:** Läs modulens andra halva högt i den nya ordningen. Flyter "misstag → fälla → rensa/stanna → arbetsflöde" logiskt?
- **Slutkontroll:** Jämför M2:s längd före/efter. Målet är ~15–20% kortare utan att förlora någon viktig information.