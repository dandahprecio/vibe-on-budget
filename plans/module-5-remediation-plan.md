# Module 5 Remediation Plan — Skriva promptar som kostar mindre

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M5 skiljer sig från M4 — där M4 är engångskonfiguration är M5 en löpande färdighet. Modulen är innehållsmässigt stark men sektionsordningen undergräver det pedagogiska flödet.

---

## Goal

Bygga om sektionsordningen så att läsaren går från input-komprimering → output-kontroll → oberoende validering → språkval — i en rak linje utan tvära kast. Samtidigt koppla tillbaka till M3:s baslinje och förstärka de starkaste bevisen.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/05-cheaper-prompts.mdx` | Omstrukturera sektionsordning, lyfta benchmark, lägga M3-koppling |
| `sv/03-measure-before-you-cut.mdx` | Inga ändringar (M5 pekar tillbaka till M3) |

---

## Steps

### Step 1 — Bygg om sektionsordningen (omstrukturera)

**Problem:** Den nuvarande ordningen hoppar: input-tekniker → metapromptar (output-kontroll) → RTK (mätvarning) → engelska vs svenska (språkval) → överkomprimering (varning). Läsaren kastas mellan input, output, meta, språk, och tillbaka till input.

**Åtgärd:** Ny ordning — en rak linje från input till output till validering:

1. Tokenkostnaden för vaghet (varför komprimera — oförändrad)
2. Strukturera din prompt: Punkter > Prosa (input-komprimering)
3. Bifoga avsikt till kod (input-komprimering via `#file:`)
4. Grottmännisko-språk (input-komprimering, avancerad)
5. När komprimering slår tillbaka (varning — när input *inte* ska komprimeras)
6. Metapromptar för outputkontroll (output-komprimering — naturlig fortsättning: "okej, input är komprimerad. Nu output.")
7. RTK-fallstudien (validering — "men mät alltid oberoende")
8. Engelska vs svenska (språkval — en sista input-besparing)

**Varför:** Steg 1 i M5:s röda tråd: input → output → validering → språk. Varje sektion bygger på den föregående. Inga tvära kast mellan ämnen.

---

### Step 2 — Lyft JetBrains benchmark till brödtexten (förstärka)

**Problem:** JetBrains oberoende test (8,5% besparing för grottmännisko-språk) är kursens mest trovärdiga siffra — men den är begravd i en `:::note` under en tabell med självuppskattade siffror. Läsaren kan missa den helt.

**Åtgärd:** Flytta `:::note[Oberoende benchmark]` till brödtexten som en egen mening direkt efter grottmännisko-tabellen:

```markdown
Oberoende tester av JetBrains (juli 2026) mätte ~8,5% besparing av output-tokens
över 82 parade uppgifter.[^m5-1] Det är mindre än marknadsförda påståenden
men genuint och säkert — avrunda till ~10% som en praktisk tumregel.
```

Behåll tabellen som den är, men låt benchmark-meningen vara en del av brödtextflödet, inte en note.

**Varför:** Steg 2 i röda tråden: kursens trovärdighet vilar på oberoende data. Den ska inte vara gömd.

---

### Step 3 — Flytta RTK till efter metapromptarna (omstrukturera)

**Problem:** RTK ligger mellan metapromptar och engelska vs svenska. Det är ett meta-ämne (validering/skepticism) som avbryter det praktiska flödet av tekniker.

**Åtgärd:** Flytta RTK till *efter* metapromptarna och *före* engelska vs svenska. Ge den en ny rubrik:

```markdown
## Validera alltid oberoende: RTK-fallstudien 🟡
```

Nya ordningen blir: ... → Metapromptar → **RTK** → Engelska vs svenska → Övning.

**Varför:** Steg 3 i röda tråden: efter att ha presenterat alla tekniker (input + output) kommer den naturliga varningen: "Men kom ihåg — mät själv. Här är beviset på varför."

---

### Step 4 — Skriv om $0,15 till en årlig teamsiffra (rätta)

**Problem:** "30,000 tokens = $0,15... De verkliga besparingarna från språkval kommer av att effekten ackumuleras över tusentals förfrågningar." $0,15 är för litet för att motivera — det undergräver poängen istället för att förstärka den.

**Åtgärd:** Byt ut meningen:

```
För ett team på 5 utvecklare som skickar 500 promptar i veckan,
sparar engelska framför svenska ~$190 per år i input-tokens —
och betydligt mer i output eftersom kortare input ofta ger kortare svar.
```

**Varför:** Steg 4 i röda tråden: siffran måste vara stor nog att motivera beteendeförändringen "skriv på engelska". $190/år för ett team på 5 är konkret och minnesvärt.

---

### Step 5 — Koppla övningarna till M3:s baslinje (komplettera)

**Problem:** Övningarna säger "skriv om tre promptar", "lägg till en AI-kommentar", "skriv fem promptar på engelska" — men ingen uppmaning att mäta före/efter mot M3:s baslinje.

**Åtgärd:** Lägg till en inledande mening i övningssektionen:

```markdown
## Övning

Använd din representativa uppgift och baslinje från Modul 3.
Efter varje teknik, kör om uppgiften och jämför credits, tokens och kvalitet.

1. Ta dina tre senaste Copilot-promptar...
2. Lägg till en `// AI:`-kommentar...
3. Om du vanligtvis skriver promptar på svenska...
```

**Varför:** Steg 5 i röda tråden: precis som i M4 — M5:s övningar blir en förlängning av M3:s mätkedja.

---

## Förväntad ny struktur (efter fixar)

```
# Skriva promptar som kostar mindre

[Inledning — oförändrad]
[Ordlista-referens — oförändrad]

## Tokenkostnaden för vaghet 🟢
  (Oförändrad)

## Strukturera din prompt: Punkter > Prosa 🟢
  (Oförändrad)

## Bifoga avsikt till kod istället för att förklara 🟢
  (Oförändrad)

## Grottmännisko-språk: Praktisk tokenkomprimering 🟢
  (Oförändrad)
  [LYFT: JetBrains benchmark i brödtexten, inte i note]

## När komprimering slår tillbaka 🟡
  (Oförändrad)

## Metapromptar för outputkontroll 🟡  ← HITFLYTTAD
  (Oförändrat innehåll)

## Validera alltid oberoende: RTK-fallstudien 🟡  ← HITFLYTTAD, ny rubrik
  (Oförändrat innehåll)

## Engelska vs svenska: 1,4–1,7× tokenskillnad 🟢  ← HITFLYTTAD
  [JUSTERAD: $0,15 → $190/år för team]

## Övning
  [KOMPLETTERAD: M3-baslinje-referens]

## Viktiga slutsatser
  (Oförändrade)
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| Den nya ordningen gör att RTK känns som en antiklimax efter metapromptar | Låg | RTK är en varning, inte en teknik. Den fungerar som en "paus och tänk efter"-sektion innan språkvalet |
| $190/år är en uppskattning, inte en exakt siffra | Låg | Formuleringen "~$190 per år" signalerar att det är en ungefärlig beräkning |
| JetBrains benchmark i brödtext kan krocka visuellt med tabellen | Låg | Placera meningen direkt under tabellen, inte före — tabellen visar egna exempel, benchmark-meningen är en "men här är vad oberoende tester visar" |

---

## Test Strategy

- **Efter Step 1:** Läs modulens rubriker i ordning. Går flödet från input → output → validering → språk utan tvära kast?
- **Efter Step 2:** Är JetBrains benchmark synlig utan att scrolla till en note? Kan läsaren citera "~8,5%, 82 parade uppgifter" efter en genomläsning?
- **Efter Step 4:** Är $190/år tillräckligt för att motivera att skriva på engelska? Fråga: "Skulle du byta språk för ~$190/år i teambesparing?"
- **Efter Step 5:** Jämför M5:s övningar med M4:s. Har båda nu en M3-referens? Är formatet konsekvent?