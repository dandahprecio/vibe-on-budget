# Module 1 Remediation Plan — Den dolda skatten

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M1 är porten till hela kursen — den måste motivera utan att överväldiga.

---

## Goal

Sänka M1:s densitet så att en nybörjare hinner greppa *varför* UBB spelar roll innan *hur* tokenkostnader beräknas. Behålla all teknisk korrekthet men omfördela djupgående material till rätt modul.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/01-hidden-tax.mdx` | Omstrukturera, flytta sektioner |
| `sv/02-context-model.mdx` | Ta emot ET-uppföljning från M1 |
| `sv/03-measure-before-you-cut.mdx` | Ta emot "ET i praktiken" från M1 |
| `sv/index.mdx` | Ev. uppdatera modulbeskrivning |
| `sv/glossary.mdx` | Inga ändringar — redan komplett |

---

## Steps

Varje steg är ordnat som en röd tråd: problem → lösning → vart materialet tar vägen → förväntad effekt.

### Step 1 — Skapa en mjukare ingång: "Vad är UBB och varför du borde bry dig" (omstrukturera)

**Problem:** Modulen öppnar med UBB-datum, credits-länk, fotnot, Mermaid-diagram, ET-formel — allt i samma andetag. En nybörjare hinner inte förstå *varför* innan *hur* börjar.

**Åtgärd:** Behåll öppningssektionen men dela den i två distinkta stycken:
1. "Vad hände 1 juni 2026?" — enkel förklaring av fast avgift → UBB, med copilot-instructions.md-referens som konkret exempel
2. "Var tar credits vägen?" — Mermaid-diagrammet + tokenkategorierna

**Varför:** Steg 1 i röda tråden måste svara på "varför ska jag läsa det här?" innan det svarar på "hur fungerar det?"

---

### Step 2 — Skjut ET-formeln till en egen avgränsad fördjupning (flytta)

**Problem:** ET-formeln `ET = m × (1.0×I + 0.1×C + 4.0×O)` kommer abrupt mitt i "Var dina tokens tar vägen". Läsaren har precis fått höra om input/output/cached tokens och får genast en formel med fyra variabler. Pie-charten ovan visar dessutom *kostnadsviktad* data vilket är en abstraktionsnivå till.

**Åtgärd:**
1. Låt pie-charten vara kvar men kommentera den som "enklare vy" — ta bort "Kostnadsviktad" från titeln och vikterna från datan. Visa bara volymfördelningen.
2. Flytta ET-formeln, xychart-betan, och GitHub-artikelreferensen (62% minskning) till en `:::note[Fördjupning: Effective Tokens]` i *slutet* av M1 — som en brygga till M2.
3. Skriv en övergångsmening: "GitHub använder en mer precis formel för att räkna kostnad — Effective Tokens. Den och hur du maximerar cache-återanvändning går vi igenom i Modul 2."

**Varför:** Steg 2 i röda tråden: "Tokens kostar olika" → input billigt, output dyrt, cache superbilligt. Det räcker för M1. *Hur mycket* olika (vikterna) är M2:s domän.

---

### Step 3 — Flytta "Effektiva tokens i praktiken" (🟡) till M3 (flytta)

**Problem:** Sektionen om GitHub-artikeln (62% ET-minskning) är intressant men placerad mellan plantabellen och "Vad är gratis vs vad kostar". Den bryter flowet från "vad har jag för plan?" → "vad kostar/inte kostar?".

**Åtgärd:** Flytta hela sektionen till M3 som en `:::note[Vad bra mätning kan avslöja]` — där passar den naturligt eftersom M3 handlar om att mäta och jämföra.

**Varför:** Steg 3 i röda tråden: M1 förklarar *priserna*. M2 förklarar *cachen*. M3 visar *hur man mäter effekten*. En artikel om ET-minskning efter optimering hör hemma där man faktiskt mäter sin egen optimering.

---

### Step 4 — Lyft "Auto-läge" ur modellprissektionen (omstrukturera)

**Problem:** Auto-läget presenteras som en `:::note` efter en lång modellpristabell. Det är en av de enklaste och mest effektiva besparingarna — men drunknar i tabellinformation.

**Åtgärd:**
1. Behåll modellpristabellen som den är
2. Gör Auto-läget till en **egen kort sektion** `## Använd Auto — Copilot väljer billigaste modellen åt dig` direkt efter modellpristabellen
3. Förklara: "Auto skickar enkla frågor till billiga modeller och reserverar premium för komplexa uppgifter. Betalda planer får 10% rabatt. Lämna modellväljaren på Auto."

**Varför:** Steg 4 i röda tråden: "Här är vad modellerna kostar — och här är det enklaste sättet att spara utan att tänka."

---

### Step 5 — Gör framåtreferensen till M2 konkret (omformulera)

**Problem:** "Därför är det viktigare att hålla ditt promptprefix stabilt (Modul 2) än att skriva kortare prompter" — begreppet "promptprefix" är odefinierat för en M1-läsare.

**Åtgärd:** Skriv om till: "Därför är det viktigare att ditt promptprefix — de delar av din förfrågan som upprepas mellan stegen — förblir stabilt. När prefixet är oförändrat kan Copilot återanvända tidigare beräkningar och du betalar upp till 90% mindre. Hur detta fungerar i praktiken går vi igenom i Modul 2."

**Varför:** Steg 5 i röda tråden: väck nyfikenhet inför M2 utan att anta förkunskap.

---

### Step 6 — Lägg till en "Vad du lärt dig"-sammanfattning (ny)

**Problem:** M1 saknar en avslutande sammanfattning. Läsaren har tagit in UBB, 6 planer, 4 modellers priser, gratis-vs-betald-tabell, och asymmetrisk prissättning — men får ingen återkoppling på vad som var viktigast.

**Åtgärd:** Lägg till en kort punktlista sist i modulen:
```markdown
## Sammanfattning

- Copilot använder Usage-Based Billing sedan 1 juni 2026
- Output-tokens kostar ~5× mer än input-tokens
- Cacheade tokens kostar ~10% av nya tokens
- Auto-läge väljer billigaste modellen automatiskt
- Företagspoolning innebär att en slarvig användare påverkar alla
```

**Varför:** Avslutande steg i M1:s röda tråd: befäst de 4–5 viktigaste insikterna innan läsaren går till M2.

---

## Förväntad ny struktur (efter fixar)

```
# Den dolda skatten
## Vad är UBB och varför du borde bry dig 🟢
  (Enklare öppning — UBB-förändringen, Mermaid-diagram, tokenkategorier)
## Var dina tokens tar vägen 🟢
  (Pie chart med volymer, input/output/cached — INGEN ET-formel här)
## AI Credits per plan 🟢
  (Plantabellen + företagsvarning)
## Vad är gratis vs vad kostar 🟢
  (Tabellen — oförändrad)
## Problemet med asymmetrisk prissättning 🟢
  (Input/Output-prisskillnaden — oförändrad)
## Modellprisreferens 🟢
  (Pristabellen — oförändrad)
## Använd Auto — Copilot väljer billigaste modellen 🟢  ← NY, utbruten från note
## Företagsöverväganden 🟡
  (Oförändrad)
:::note[Fördjupning: Effective Tokens-formeln]  ← HITFLYTTAD från tidigare position
  (ET-formeln, xychart, GitHub-artikel — som brygga till M2)
:::
## Sammanfattning  ← NY
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| ET-formeln känns "undangömd" i en note | Låg | Note är framträdande i Starlight; dessutom länkas den från M2:s inledning |
| "Fördjupning" kan hoppas över | Medium | M2 inleds med "I Modul 1 såg du ET-formeln..." — vilket ger M1-läsaren en andra chans |
| Pie chart utan vikter blir mindre informativ | Låg | Vikterna är ändå teoretiska — volymfördelningen är mer pedagogisk i M1 |
| M3 blir för lång med "ET i praktiken"-tillägget | Låg | Sektionen är ~8 rader — marginell påverkan |

## Test Strategy

- **Efter Step 1–2:** Läs M1 högt. Kan någon utan Copilot-erfarenhet följa med från "vad är UBB?" till "output kostar 5× input"? Om ja → godkänt.
- **Efter Step 3:** Verifiera att M3:s "ET i praktiken" känns naturlig i sin nya kontext (efter "Optimeringsloopen").
- **Efter Step 4:** Kontrollera att Auto-läget inte längre är gömt i en note under pristabellen.
- **Efter Step 5:** Länken M1→M2 ska vara en konkret cliffhanger, inte en vag referens till odefinierade begrepp.
- **Efter Step 6:** Läsaren ska kunna stänga M1 och återge de 5 punkterna i sammanfattningen.