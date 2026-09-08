# Module 8 Remediation Plan — Vibe coding utan skulden

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M8 är den mänskliga metodikmodulen — den handlar om arbetsmetodik och kvalitetsskydd, inte tekniska konfigurationer. Modulen har starkt forskningsstöd och flera originella koncept men lider av strukturproblem och överlappande sektioner.

---

## Goal

Fixa rubrikhierarkin, slå ihop överlappande sektioner, rangordna rekommendationer där de konkurrerar, och koppla till M3:s baslinje.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/08-vibe-coding-guardrails.mdx` | Fixa rubriker, slå ihop, rangordna, M3-koppling |

---

## Steps

### Step 1 — Fixa rubrikstrukturen (rätta)

**Problem:** `### Varför oövervakade agenter bränner credits` (H3) följs av `## 🟡 Problemet med Winchester Mystery House` (H2). En H3 kan inte ha en H2 som syskon — H2:an borde vara en H3:a under samma överordnade sektion.

**Åtgärd:** Ändra Winchester från H2 till H3 och lägg den under en gemensam H2-sektion tillsammans med de fyra felfelen:

```markdown
## 🟡 Varför AI-genererad kod ackumulerar skuld

### De fyra felfelen
  (Duplicerad logik, oavsiktlig arkitektur, svällande funktioner, saknade gränsfall)

### Labyrintisk arkitektur: Winchester Mystery House
  (Agentiterering utan ritning → redundanta beroenden, överlappande abstraktioner)

### Metod i fyra steg för att förebygga
  (Resultat i en mening, Minimal sandlåda, Verklighetskontroll, Hård gräns)
```

**Varför:** Steg 1 i M8:s röda tråd: korrekt dokumentstruktur. Läsaren ska inte behöva fundera på varför en H2:a kommer efter en H3:a.

---

### Step 2 — Integrera Winchester som felfel #5 (slå ihop)

**Problem:** De fyra felfelen och Winchester beskriver överlappande symptom. "Duplicerad logik" (felfel 1) och Winchesters "redundanta beroenden, överlappande abstraktioner" är samma problem på olika skalor — filnivå vs arkitekturnivå.

**Åtgärd:** Lägg till Winchester som felfel #5 under den gemensamma H2:an:

```markdown
### 5. Labyrintisk arkitektur (Winchester Mystery House)

När agenter får iterera blint, funktion för funktion, utan arkitektonisk tillsyn...
```

Behåll Mermaid-diagrammet och 4-stegsmetoden, men korta ner varje steg till 2 meningar.

**Varför:** Steg 2 i röda tråden: en enhetlig lista över skuldmönster (5 istället för 4+1). Lättare att komma ihåg, mindre upprepning.

---

### Step 3 — Rangordna granskningsmetoderna i Skyddsräcke 3 (komplettera)

**Problem:** "Granskning med samma modell" och "Granskning med olika modeller" presenteras som likvärdiga. Men den andra kostar mer (2 modellinferenser) och borde reserveras för säkerhetskritiska fall.

**Åtgärd:** Lägg till en rekommendationsrad före de två metoderna:

```markdown
**Börja med samma modell** för rutinmässig kodgranskning — det är billigast och
fångar de flesta misstag. **Använd olika modeller** för säkerhetskritisk kod
där en missad sårbarhet kostar mer än den extra inferensen.
```

**Varför:** Steg 3 i röda tråden: tokenekonomi är kursens tema — även skyddsräcken har en kostnadssida. Att rangordna metoderna hjälper läsaren välja rätt avvägning.

---

### Step 4 — Komprimera Skyddsräcke 5 (säkerhet) (komprimera)

**Problem:** Säkerhetssektionen är ~30 rader — längre än Skyddsräcke 1+2 tillsammans. Det är viktigt material men detaljnivån är ojämn jämfört med övriga skyddsräcken.

**Åtgärd:** Behåll 7-punkts-checklistan (den är utmärkt). Korta brödtexten till 3 meningar + checklista. Ta bort den separata granskningsprompten (den är redundant — checklistan är tillräcklig).

**Varför:** Steg 4 i röda tråden: alla 5 skyddsräcken ska ha ungefär samma visuella vikt. Ett som dominerar får de andra att kännas oviktiga.

---

### Step 5 — Fixa "Fortsätt lära dig" (rätta)

**Problem:** Pekar till M6 och M7 — bakåtlänkar. Läsaren har redan gjort M6 och M7.

**Åtgärd:** Ändra till:

```markdown
:::tip[Fortsätt lära dig]
Skyddsräcken fungerar bäst tillsammans med förståelsen för Copilots interna
optimeringar i [Helhetsbilden](/vibe-on-budget/sv/09-under-the-hood).
:::
```

**Varför:** Steg 5 i röda tråden: sista modulen före M9. Framåtreferensen ska peka till kursens avslutning.

---

### Step 6 — Koppla övningarna till M3:s baslinje (komplettera)

**Problem:** Övningarna är konkreta ("skriv en spec", "skriv testet först", "kör en säkerhetsgranskning") men ingen referens till M3.

**Åtgärd:** Lägg till inledande mening:

```markdown
## Övning

Använd din representativa uppgift från Modul 3. Efter varje övning,
notera om kvaliteten (tester gröna, rätt filer, max 1 korrigering)
förbättrades jämfört med din baslinje.

1. Skriv en spec på 10 rader...
2. Skriv testet först...
3. Kör en säkerhetsgranskningsprompt...
```

**Varför:** Steg 6 i röda tråden: M8:s övningar mäter *kvalitet*, inte bara *kostnad*. Det är en naturlig utveckling av M3:s "kvalitetsgräns"-begrepp.

---

## Förväntad ny struktur (efter fixar)

```
# Vibe coding utan skulden

[Inledning + forskningsreferenser — oförändrade]

## 🟢 Vibe coding eller agentiskt arbetsflöde? Ett beslutsramverk
  (Oförändrat)

## 🟡 Varför AI-genererad kod ackumulerar skuld  ← NY GEMENSAM H2

### De fyra felfelen
  (Oförändrade)

### 5. Labyrintisk arkitektur: Winchester Mystery House  ← NYTT FELFEL #5
  [KORTAD: 4-stegsmetoden komprimerad]

## 🟢 Skyddsräcke 1: Skriv en spec först
  (Oförändrat)

## 🟢 Skyddsräcke 2: TDD med Copilot
  (Oförändrat)

## 🟢 Skyddsräcke 3: Automatiserad granskning
  [NY: rangordning — samma modell först, olika modeller vid säkerhetskritisk kod]

## 🟢 Skyddsräcke 4: Projektminne med .prompt.md-filer
  (Oförändrat)

## 🟢 Skyddsräcke 5: Säkerhet som hård spärr
  [KORTAD: 3 meningar + checklista]

## 90-dagarsgranskningen
  (Oförändrad)

:::tip[Fortsätt lära dig]  ← RÄTTAD (M9, inte M6+M7)

## Övning  ← KOMPLETTERAD (M3-baslinje, kvalitetsfokus)
## Viktiga slutsatser
  (Oförändrade)
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| Winchester som felfel #5 tappar sin metaforiska kraft | Låg | Namnet och Mermaid-diagrammet är kvar — bara rubriknivån ändras |
| Säkerhetskomprimering tappar viktiga nyanser | Låg | 7-punkts-checklistan är oförändrad — det är den läsaren faktiskt agerar på |
| 5 felfel istället för 4 kan kännas som "list-inflation" | Låg | Winchester är kvalitativt annorlunda (arkitekturnivå vs kodnivå) — det förtjänar en egen plats |

## Test Strategy

- **Efter Step 1:** Kör en Markdown-linter eller visuell inspektion — finns det någon H3:a som följs av en H2:a?
- **Efter Step 2:** Läs de 5 felfelen i följd. Flyter de från mikronivå (duplicerad funktion) till makronivå (labyrintisk arkitektur)?
- **Efter Step 3:** Kan en ny läsare återge när hen ska använda olika modeller för granskning?
- **Efter Step 5:** Klicka på "Fortsätt lära dig"-länken. Går den till M9?