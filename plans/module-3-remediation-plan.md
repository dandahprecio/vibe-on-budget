# Module 3 Remediation Plan — Mät innan du kapar

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M3 är kursens brygga mellan teori (M1–M2) och handling (M4–M8). Den måste leverera en konkret, uppmätt baslinje som resten av kursen kan referera tillbaka till.

---

## Goal

Göra M3 till en **hård grind**: läsaren får inte gå vidare utan en nedskriven baslinje. Samtidigt definiera de begrepp ("representativ uppgift", "kvalitetsgräns") som M4–M8 förutsätter men aldrig förklarar.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/03-measure-before-you-cut.mdx` | Komplettera: grind, definitioner, framåtreferens |
| `sv/index.mdx` | Ev. uppdatera modulbeskrivning |
| `sv/04-quick-wins.mdx` | Lägg till loop-referens (görs i M4-planen) |
| `sv/05-cheaper-prompts.mdx` | Lägg till loop-referens (görs i M5-planen) |

---

## Steps

Varje steg är ordnat som en röd tråd: identifiera hålet → täppa till det → koppla framåt.

### Step 1 — Definiera "representativ uppgift" (ny sektion)

**Problem:** Frasen "representativ uppgift" används ~8 gånger i M3 — "Kör en representativ uppgift", "Välj en uppgift du gör regelbundet" — men ingenstans står det *hur* man väljer en. Läsaren kan välja en trivial fråga (ger missvisande låg baslinje) eller ett monsterprojekt (ger missvisande hög).

**Åtgärd:** Lägg till en kort sektion direkt efter inledningen, före "Credit hover per förfrågan":

```markdown
## Välj din representativa uppgift 🟢

En representativ uppgift är en återkommande kodningsuppgift som tar 5–15 minuter.
Den ska involvera minst en filändring — inte bara en fråga.

Bra kandidater:
- Lägga till ett valideringsfält i ett formulär
- Skriva ett enhetstest för en funktion
- Lägga till paginering på en list-endpoint
- Åtgärda en enkel bugg med känd orsak

Dåliga kandidater:
- "Förklara hur useEffect fungerar" (ingen kodändring, bara output)
- "Bygg om hela autentiseringssystemet" (för stort, tar timmar)
- "Vad är klockan?" (trivialt, mäter inget användbart)

**Action:** Välj din uppgift nu. Skriv ner den. Du kommer använda samma uppgift
genom hela kursen för att jämföra före och efter varje optimering.
```

**Varför:** Steg 1 i M3:s röda tråd: innan du mäter måste du veta *vad* du mäter. En gemensam definition förhindrar att läsaren väljer fel uppgift och får missvisande resultat.

---

### Step 2 — Sätt kvalitetsgränsen tydligare (omstrukturera)

**Problem:** "Kvalitetsgräns" förklaras i en `:::tip` under optimeringsloopen. Tip:en är bra men för kort för ett så centralt begrepp. Läsaren behöver förstå *varför* gränsen finns innan loopen introduceras.

**Åtgärd:**
1. Gör om `:::tip[Definiera kvalitetsgränsen]` till en egen kort H2-sektion `## Sätt din kvalitetsgräns 🟢` — placerad direkt efter "Välj din representativa uppgift" och före mätverktygen.
2. Ge konkreta exempel på en kvalitetsgräns:

```markdown
## Sätt din kvalitetsgräns 🟢

En kvalitetsgräns är ditt "tillräckligt bra"-kontrakt. Utan den kan kostnadsoptimering
i smyg bli kvalitetsminskning — du byter till en billigare modell men märker inte att
testerna börjar faila.

Din kvalitetsgräns måste vara mätbar. Exempel:

| Kriterium | Så mäter du |
|---|---|
| Testerna går igenom | `npm test` — 0 fail |
| Rätt filer ändrades | `git diff --name-only` — bara förväntade filer |
| Inga kritiska fel | Manuell kontroll — appen startar, API:et svarar |
| Max 1 mindre korrigering | Räkna antalet uppföljningsprompter |

**Action:** Skriv ner din kvalitetsgräns. Exempel: "Alla befintliga tester gröna,
endast `src/utils/formatDate.ts` ändrad, max 1 korrigering."
```

**Varför:** Steg 2 i M3:s röda tråd: kvalitetsgränsen är ditt skyddsnät. Utan den är optimeringsloopen meningslös — du kan inte veta om en ändring var "bättre" eller bara "billigare".

---

### Step 3 — Skapa en hård grind före M4 (ny sektion)

**Problem:** Detta är M3:s största pedagogiska hål. Modulen lär ut alla mätverktyg men säger aldrig "stanna här och mät klart". M4 säger "jämför med din baslinje från Modul 3" — men många läsare kommer inte ha en baslinje. De har läst M3, nickat, och scrollat vidare.

**Åtgärd:** Lägg till en `:::caution[Innan du går vidare till Modul 4]` som modulens allra sista sektion, före övningarna:

```markdown
:::caution[Innan du går vidare till Modul 4]

Stanna här. Du behöver en **nedskriven baslinje** för att resten av kursen ska fungera.
Utan den vet du inte om dina optimeringar faktiskt hjälper.

Gör detta nu — det tar 15 minuter:

1. Öppna din representativa uppgift
2. Kör uppgiften i Copilot och notera:
   - **Credits:** Hovra över svaret
   - **Tokens:** Öppna Agent Debug Logs → Summary (input + output)
   - **Tid:** Hur lång tid tog uppgiften?
   - **Kvalitet:** Uppfylldes din kvalitetsgräns? (tester gröna? rätt filer? antal korrigeringar?)
3. Skriv ner resultatet. Detta är din **baslinje**.

I Modul 4 kommer du jämföra varje snabb vinst mot den här baslinjen.
:::
```

**Varför:** Steg 3 i M3:s röda tråd: den hårda grinden. Utan denna är M3 en teoretisk genomgång av VS Code-gränssnitt. Med den blir M3 startpunkten för en mätbar resa genom M4–M8.

---

### Step 4 — Gör `/chronicle:cost-tips` till en tip, inte en H2:a (komprimera)

**Problem:** `/chronicle:cost-tips` är en full H2-sektion med samma vikt som "Credit hover" och "Månadsdashboard". Men det är ett textkommando — mindre visuellt, mindre konkret. Det förtjänar inte samma hierarkiska nivå som de andra mätverktygen.

**Åtgärd:** Gör om sektionen till en `:::tip` inuti "Månadsdashboard"-sektionen:

```markdown
:::tip[Få personliga rekommendationer]
Kör `/chronicle:cost-tips` i valfri chatt. Den analyserar din sessionshistorik
och föreslår besparingar baserat på dina faktiska mönster. Användbart när du
ser att förbrukningen ökat men inte vet varför. Behandla rekommendationerna
som hypoteser — verifiera mot din baslinje innan du ändrar arbetsflödet.
:::
```

**Varför:** Steg 4 i M3:s röda tråd: bibehåll all information men sänk den visuella vikten. M3:s huvudaktörer är hover + context window control + dashboard + debug logs. `/chronicle` är en bonus.

---

### Step 5 — Lägg till framåtreferens till M4 (ny)

**Problem:** M3 har ingen "Fortsätt lära dig"-ruta. M1 och M2 har dem inte heller (ännu), men M3 är den punkt där läsaren är redo att agera — och behöver en tydlig pil till M4.

**Åtgärd:** Lägg till före "Övning":

```markdown
:::tip[Fortsätt lära dig]
Med din baslinje i hand, gå till [Snabba vinster](/vibe-on-budget/sv/04-quick-wins)
för sex saker du kan göra imorgon bitti. Varje snabb vinst kan valideras mot
baslinjen du just mätte upp.
:::
```

**Varför:** Steg 5 i M3:s röda tråd: den explicita bryggan till M4. "Du har mätt → nu ska du optimera → här är nästa modul."

---

### Step 6 — Justera löftet om optimeringsloopen (omformulera)

**Problem:** "Den här loopen återkommer genom resten av kursen" är ett löfte som M4–M9 inte infriar — ingen av dem refererar tillbaka till loopen. Antingen måste alla senare moduler uppdateras (stort jobb) eller så ska M3 inte lova det.

**Åtgärd:** Ändra meningen från ett löfte till en inbjudan:

```
Använd den här loopen för att testa teknikerna i resten av kursen.
Varje modul från och med Modul 4 har övningar där du kan tillämpa loopen:
mät baseline → ändra en variabel → jämför → behåll den bättre konfigurationen.
```

**Varför:** Steg 6 i M3:s röda tråd: loopen är fortfarande central, men formuleringen gör den till ett *verktyg läsaren kan använda* snarare än ett *löfte kursen måste uppfylla i varje modul*.

---

### Step 7 — Lägg till en "Viktiga slutsatser"-sektion (komplettera)

**Problem:** M3 saknar "Viktiga slutsatser" — alla andra moduler har en. Det gör att M3 känns ofullständig jämfört med M1, M2, M4 etc.

**Åtgärd:** Lägg till efter övningarna, före lästid:

```markdown
## Viktiga slutsatser

- **Hover över svaret** för att se credit-förbrukning per förfrågan — det snabbaste sättet att jämföra promptvarianter
- **Context window control** visar sessionskostnad — använd den för att hitta dyra agentloopar
- **Månadsdashboarden** är din budgetsignal — kontrollera den en gång i veckan
- **Agent Debug Logs → Summary** ger tokenuppdelning, verktygsanrop och fel — använd när något är dyrt men du inte vet varför
- **Cache Explorer** visar cacheträffar — men hög träfffrekvens är inte automatiskt bra om kontexten är irrelevant
- **Optimeringsloopen** (baseline → ändra en variabel → jämför) är ditt verktyg genom resten av kursen
- **Kvalitetsgränsen** är ditt skyddsnät — utan den riskerar du att optimera bort kvalitet
```

**Varför:** Steg 7 i M3:s röda tråd: avsluta med en repetitionslista, precis som alla andra moduler. Konsekvens i formatet är en del av den röda tråden.

---

## Förväntad ny struktur (efter fixar)

```
# Mät innan du kapar

[Inledning — oförändrad]

## Välj din representativa uppgift 🟢  ← NY
  (Definition + bra/dåliga kandidater)

## Sätt din kvalitetsgräns 🟢  ← NY (utbruten från tip)
  (Mätbara kriterier + exempel)

## Credit hover per förfrågan 🟢
  (Oförändrad)

## Ackumulerad sessionskostnad 🟢
  (Oförändrad)

## Månadsdashboard 🟢
  (Oförändrad)
  [NY: /chronicle:cost-tips som tip här]

## Agent Debug Logs — Summary view 🟢
  (Oförändrad)

## Cache Explorer-vyn 🟢
  (Oförändrad)

## Optimeringsloopen 🟢
  (Steps + Mermaid — oförändrade)
  [JUSTERAD: formulering om loopen — inbjudan, inte löfte]

:::tip[Fortsätt lära dig]  ← NY
  (Pekar till M4)
:::

:::caution[Innan du går vidare till Modul 4]  ← NY — HÅRD GRIND
  (Konkreta steg för att skapa baslinjen)
:::

## Övning 🟢

## Viktiga slutsatser  ← NY
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| Grinden känns för skarp — läsaren känner sig tvingad | Låg | Den är formulerad som "gör detta nu, det tar 15 minuter" — konkret och hjälpsam, inte dömande |
| "Välj representativ uppgift" + "Sätt kvalitetsgräns" gör M3 för lång | Låg | De två nya sektionerna är ~12 rader vardera. M3 var redan en av de kortare modulerna |
| `/chronicle` som tip känns nedprioriterat | Låg | Det är rätt prioritet — `/chronicle` är en bonus, inte ett primärt mätverktyg |
| Loop-omformuleringen gör loopen mindre central | Låg | Loopen finns kvar visuellt (Steps + Mermaid). Omformuleringen är bara i en mening |

---

## Test Strategy

- **Efter Step 1:** Kan en nybörjare välja en representativ uppgift baserat på sektionens exempel? Fråga: "Är din uppgift en av de bra kandidaterna?"
- **Efter Step 2:** Har läsaren skrivit ner en mätbar kvalitetsgräns? Testa: "Kan du svara ja/nej på om din gräns uppfylldes efter en körning?"
- **Efter Step 3:** Läs grinden högt. Är stegen (1-2-3) tillräckligt konkreta för att någon faktiskt ska göra dem?
- **Efter Step 6:** Jämför gamla och nya formuleringen. Känns den nya mindre som ett brutet löfte?
- **Slutkontroll:** Har M3 nu en tydlig början (välj uppgift + sätt gräns), mitt (mätverktygen + loopen), och slut (grind + slutsatser)?