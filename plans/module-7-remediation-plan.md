# Module 7 Remediation Plan — Agenter, verktyg och MCP-hygien

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M7 är den mest avancerade teknikmodulen — den täcker agentläge, MCP, modellval, subagenter, och thinking effort. Modulen har starkt innehåll men lider av upprepningar och konkurrerande rekommendationer utan inbördes ordning.

---

## Goal

Deduplicera verktygssökning-förklaringen, skapa en tydlig beslutsordning för modellval, och komprimera sektioner som är för små för sin hierarkiska nivå.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/07-agents-mcp.mdx` | Deduplicera, skapa beslutsordning, komprimera, M3-koppling |

---

## Steps

### Step 1 — Ta bort den duplicerade verktygssökning-sektionen (deduplicera)

**Problem:** "Verktygssökning: Vad som händer internt" (🔴, sent i modulen) upprepar nästan ordagrant "Så fungerar verktygssökning internt" (🔴, tidigt i modulen). Båda har Mermaid-diagram, båda förklarar harness-registret, båda nämner inbäddningsvektorer och BM25.

**Åtgärd:** Ta bort den *senare* sektionen helt. Behåll den första förklaringen (under MCP-server-matematiken) och flytta den detaljerade Mermaid-diagrammet (dubbel sökstrategi: inbäddning + BM25) från den senare sektionen till att ersätta den tidigares enklare diagram.

**Varför:** Steg 1 i M7:s röda tråd: en enda, rak förklaring av verktygssökning. Läsaren ska inte undra "har jag inte redan läst det här?".

---

### Step 2 — Skapa en beslutsordning för modellval (omstrukturera)

**Problem:** M7 presenterar tre strategier utan inbördes ordning: Auto, manuell router, subagenter. Läsaren kan tro att de är alternativa — men de är hierarkiska. Auto är alltid första valet, router är för avancerade användare, subagenter är för komplexa fleragentsarbetsflöden.

**Åtgärd:** Lägg till en beslutsordning före modellvals-sektionerna:

```markdown
### Så väljer du modell — beslutsordning

1. **Börja med Auto.** Det är underhållsfritt, ger 10 % rabatt på betalda planer, och dirigerar enkla förfrågningar till billigare modeller automatiskt.
2. **För repeterbara arbetsflöden**, skapa en anpassad agent med en fast modell (t.ex. Haiku för testgenerering).
3. **För komplexa fleragentsarbetsflöden**, använd subagentmönster från Anthropic.

Gå inte direkt till steg 3. Auto löser ~80 % av modellvalsproblemet.
```

**Varför:** Steg 2 i röda tråden: en hierarki. Läsaren ska inte välja mellan tre jämbördiga alternativ — hen ska börja med Auto och eskalera vid behov.

---

### Step 3 — Gör Thinking Effort till en `:::tip` (komprimera)

**Problem:** Thinking Effort är en H2-sektion på ~6 rader. Den säger "använd standardvärden, öka bara för komplexa problem." Det är värdefull information men förtjänar inte samma hierarkiska nivå som "Agentloopen" eller "De tre lägena".

**Åtgärd:** Infoga som en `:::tip` inuti "De tre lägena och deras kostnader"-sektionen, efter tabellen:

```markdown
:::tip[Tänk på thinking effort]
Thinking effort styr hur mycket resonemang modellen använder. Högre effort =
fler thinking tokens = högre creditförbrukning. Behåll standardvärdet för
rutinuppgifter. Öka endast för arkitekturplanering och komplex felsökning.
:::
```

**Varför:** Steg 3 i röda tråden: thinking effort är en kostnadsratt — den hör naturligt ihop med de tre lägenas kostnadsprofiler.

---

### Step 4 — Infoga "Batcha upprepade operationer" i avgränsningslistan (omstrukturera)

**Problem:** Sektionen svävar mellan "Rensa bort oanvända MCP-servrar" och "Bygg en modellrouterstrategi" utan numrering eller kontext.

**Åtgärd:** Gör den till punkt 5 i listan "Så avgränsar du agenter för tokeneffektivitet":

```
### 5. Batcha upprepade operationer

Upprepade submit-, poll- och retrieve-anrop lägger till mellanresultat i
kontextfönstret. För deterministiska flöden: kör loopen utanför agentkonversationen
och returnera bara slutresultatet.
```

**Varför:** Steg 4 i röda tråden: batchning är en avgränsningsstrategi — att flytta arbete *utanför* agentloopen. Den hör hemma bland de andra avgränsningsstrategierna.

---

### Step 5 — Koppla övningarna till M3:s baslinje (komplettera)

**Problem:** Övningarna är praktiska men ingen referens till M3.

**Åtgärd:** Lägg till inledande mening:

```markdown
## Övning

Använd din representativa uppgift och baslinje från Modul 3.
Efter varje övning, jämför credit-förbrukning mot baslinjen.

1. Kontrollera dina anslutna MCP-servrar...
2. Nästa gång du behöver ett enkelt svar...
3. Skapa en anpassad agent...
```

**Varför:** Steg 5 i röda tråden: konsekvent M3-koppling genom hela kursen.

---

## Förväntad ny struktur (efter fixar)

```
# Agenter, verktyg och MCP-hygien

## Agentloopen 🟢
  (Oförändrad)

## De tre lägena och deras kostnader 🟢
  (Oförändrad)
  [NY: Thinking Effort som tip här]

## Den dolda kostnaden för MCP-servrar 🟡
  (Oförändrad)

## MCP-server-matematiken 🟡
  (Oförändrad)

## Så fungerar verktygssökning internt 🔴
  [SLAGEN IHOP: behåller denna + detaljerat Mermaid från borttagna sektionen]

## Så avgränsar du agenter för tokeneffektivitet 🟡
  1. Använd Ask- eller Edit-läge först
  2. Skapa avgränsade anpassade agenter
  3. Sätt stoppvillkor
  4. Rensa bort oanvända MCP-servrar
  5. Batcha upprepade operationer  ← HITFLYTTAD

## Så väljer du modell — beslutsordning  ← NY
  (Auto → anpassad agent → subagenter)

### Så fungerar automatiskt modellval
  (Oförändrad)

### Modellrouterstrategi
  (Oförändrad — nu under beslutsordningen)

### Sex subagentmönster som sparar tokens
  (Oförändrad — nu under beslutsordningen)

### Fällan med cache vid modellbyte
  (Oförändrad)

## Praktisk MCP-hygien-checklista
  (Oförändrad)

:::tip[Fortsätt lära dig]
  (Oförändrad)

## Övning  ← KOMPLETTERAD (M3-baslinje)
## Viktiga slutsatser
  (Oförändrade)

[SEKTIONER BORTTAGNA]
✂ "Thinking Effort" — infogad som tip
✂ "Verktygssökning: Vad som händer internt" (den andra) — deduplicerad
✂ "Batcha upprepade operationer" som fristående — infogad i avgränsningslistan
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| Beslutsordningen gör manuell router och subagenter mindre framträdande | Låg | De finns kvar som fullständiga sektioner — beslutsordningen är bara en "börja här"-skylt |
| Thinking Effort som tip kan missas | Låg | Den ligger i anslutning till en mycket läst sektion (de tre lägena) |
| Borttagning av duplicerad verktygssökning tappar BM25-detaljen | Låg | BM25-detaljen och Mermaid-diagrammet flyttas till den kvarvarande sektionen |

## Test Strategy

- **Efter Step 1:** Sök efter "Vad som händer internt" i modulen. Finns det bara en förekomst?
- **Efter Step 2:** Kan en ny läsare återge beslutsordningen? "Auto först, sedan anpassad agent, sedan subagenter."
- **Efter Step 3:** Är Thinking Effort synlig i anslutning till de tre lägena?
- **Efter Step 4:** Är "Batcha" numrerad som punkt 5 i en lista?