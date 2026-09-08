# Module 4 Remediation Plan — Snabba vinster

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M4 är den första "gör detta"-modulen — läsaren har förstått varför (M1), vad (M2) och hur man mäter (M3). Nu ska hen agera. Varje quick win måste vara en isolerad, validerbar åtgärd med tydlig koppling tillbaka till M3:s baslinje.

---

## Goal

Rensa trasiga korsreferenser, minska överlapp med M2/M3, och koppla varje quick win till M3:s baslinje så att läsaren faktiskt mäter effekten av sina ändringar.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/04-quick-wins.mdx` | Fixa referenser, korta ner, koppla till M3 |
| `sv/02-context-model.mdx` | Ev. lägg till `/compact` i beslutsmatrisen |
| `sv/03-measure-before-you-cut.mdx` | Ev. ta emot community-verktyg från M4 |

---

## Steps

### Step 1 — Fixa den trasiga M9-referensen (rätta)

**Problem:** Quick Win #2 säger "Cachning ackumuleras mellan steg (se Modul 9)". Cache förklarades utförligt i M2 — inte M9. M9 handlar om Copilots interna harness-optimeringar. Länken leder läsaren till fel ämne.

**Åtgärd:** Ändra `(se [Modul 9](/vibe-on-budget/sv/09-under-the-hood))` → `(se [Modul 2](/vibe-on-budget/sv/02-context-model))`.

**Varför:** Steg 1 i M4:s röda tråd: korsreferenser måste vara korrekta. En trasig länk bryter förtroendet och den pedagogiska kedjan.

---

### Step 2 — Korta ner Quick Win #2 (komprimera)

**Problem:** Quick Win #2 är ~15 rader och täcker `/compact`, manuell sammanfattning, `Ctrl+N`, och beslutslogik. M2 har redan en dedikerad beslutsmatris ("När ska du rensa chatten?"). M4 duplicerar den.

**Åtgärd:** Korta ner till kärnan — `/compact` och `Ctrl+N` — och hänvisa till M2 för beslutslogiken:

```markdown
## 2. Rensa din chattråd regelbundet 🟢

**Problemet:** Varje meddelande i en pågående tråd skickar hela
konversationshistoriken som input-tokens.

**Åtgärden:**
- **Samma uppgift, 10+ steg?** Använd [`/compact`](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#_compact-conversation-context) för att sammanfatta äldre delar.
- **Uppgiften klar?** Starta ny chatt med `Ctrl+N` (Windows/Linux) eller `⌘N` (Mac).

Se [Modul 2](/vibe-on-budget/sv/02-context-model) för en komplett beslutsmatris:
när du ska stanna i sessionen, när du ska rensa, och när du ska förgrena.

**Besparingen:** 40–60% minskning av input-tokens för sessioner med ackumulerad historik.[^m4-4]
```

**Varför:** Steg 2 i röda tråden: M4 är "gör detta snabbt", inte "förstå varför". Beslutslogiken finns i M2 — M4 ska bara ge kommandona.

---

### Step 3 — Byt titel på Quick Win #5 (rätta)

**Problem:** Titeln "Använd lätta modeller för rutinuppgifter" stämmer inte — innehållet rekommenderar Auto först och manuellt val som "avancerat alternativ". Titeln lovar manuellt modellval men levererar Auto.

**Åtgärd:** Byt titel till `## 5. Använd Auto modellval 🟢`.

**Varför:** Steg 3 i röda tråden: titeln ska spegla primärrekommendationen. Auto är enklare, underhållsfritt och ger 10% rabatt på betalda planer — det är den verkliga "snabba vinsten".

---

### Step 4 — Koppla övningarna till M3:s baslinje (komplettera)

**Problem:** Övningarna säger "jämför creditkostnaden" men nämner inte M3:s baslinje eller optimeringsloop. Läsaren som faktiskt gjorde M3:s grind har en baslinje — M4 borde använda den.

**Åtgärd:** Lägg till en inledande mening i övningssektionen:

```markdown
## Övning 🟢

Använd din representativa uppgift och baslinje från Modul 3.
Efter varje övning, kör om uppgiften och jämför credits, tokens och kvalitet
mot din baslinje.

1. Lägg till instruktionen om endast kod...
2. Skapa en `.copilotignore`-fil...
3. Kontrollera modellväljaren...
```

**Varför:** Steg 4 i röda tråden: M4:s övningar blir en naturlig fortsättning på M3:s grind. Läsaren mätte → agerar → mäter igen. Optimeringsloopen i praktiken.

---

### Step 5 — Ersätt "Bonus: Mät din påverkan" med en länk till M3 (komprimera)

**Problem:** Bonus-sektionen täcker felsökningsloggning (redan i M3) och community-verktyg (Tokalator, Token-Track, Copilot Token Monitor). Det är ~20 rader som delvis duplicerar M3.

**Åtgärd:** Ersätt hela sektionen med:

```markdown
:::tip[Validera dina besparingar]
Använd mätverktygen från [Modul 3](/vibe-on-budget/sv/03-measure-before-you-cut)
— hover, context window control och Agent Debug Logs — för att bekräfta
att varje snabb vinst faktiskt minskar din tokenförbrukning.
:::
```

Flytta community-verktygen (Tokalator, Token-Track, Copilot Token Monitor) till M3 som en `:::note[Community-verktyg]` efter "Cache Explorer-vyn". De hör hemma bland mätverktygen, inte bland quick wins.

**Varför:** Steg 5 i röda tråden: M4 ska vara ren action. Mätning är M3:s domän. En kort tip med länk tillbaka räcker.

---

### Step 6 — Rensa fotnoter från snabbreferenskortet (visuellt)

**Problem:** Referenskort-tabellen har `[^m4-2]`, `[^m4-4]`, `[^m4-8]` i cellerna. Det är visuellt stökigt och fotnotsnumren säger inget för en läsare som bara vill ha en checklista.

**Åtgärd:** Ta bort alla fotnoter från tabellcellerna. Lägg en rad under tabellen:

```
Se respektive quick win ovan för detaljerade besparingsuppskattningar och källor.
```

**Varför:** Steg 6 i röda tråden: snabbreferenskortet är en utskriftsvänlig checklista. Fotnoter hör hemma i brödtexten där de förklarades.

---

### Step 7 — Lägg till `/compact` i M2:s beslutsmatris (komplettera M2)

**Problem:** `/compact` introduceras i M4 men borde ha nämnts i M2:s "När ska du rensa chatten?"-matris. Just nu nämner M2 bara "Komprimera och fortsätt" utan att namnge kommandot.

**Åtgärd:** I M2:s beslutsmatris, uppdatera raden "Lång session (10+ steg), samma uppgift":

| Lång session (10+ steg), samma uppgift | Komprimera och fortsätt | Använd `/compact` för att sammanfatta och återta kontextfönsterutrymme |

**Varför:** Steg 7 i röda tråden: `/compact` ska vara etablerat i M2 så att M4 bara behöver påminna om det, inte introducera det.

---

## Förväntad ny struktur (efter fixar)

```
# Snabba vinster

[Inledning + disclaimer — oförändrade]

[Ordlista-referens — oförändrad]

## 1. Lägg till en Code-Only-instruktion 🟢
  (Oförändrad)

## 2. Rensa din chattråd regelbundet 🟢
  [KORTAD: bara /compact + Ctrl/N. Hänvisar till M2 för beslut]

## 3. Stäng onödiga editorflikar 🟢
  (Oförändrad)

## 4. Skapa en .copilotignore-fil 🟢
  (Oförändrad)

## 5. Använd Auto modellval 🟢  ← NY TITEL
  (Innehåll oförändrat)

## 6. Tvinga unified diff-utdata 🟢
  (Oförändrad)

:::tip[Validera dina besparingar]  ← NY (ersätter Bonus-sektionen)
  (Länk till M3:s mätverktyg)
:::

:::tip[Fortsätt lära dig]
  (Oförändrad)
:::

## Snabbreferenskort 🟢
  [RENSAD: inga fotnoter i tabellen]

## Övning 🟢
  [KOMPLETTERAD: referens till M3:s baslinje]

## Viktiga slutsatser 🟢
  (Oförändrad)

[SEKTIONER BORTTAGNA]
✂ "Bonus: Mät din påverkan" — ersatt med tip + community-verktyg flyttade till M3
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| `/compact` i M2 kräver att M2-planen också genomförs | Medium | Lägg en not i M4-planen om beroendet till M2 Step 7 |
| Community-verktyg i M3 kan kännas påklistrade | Låg | De placeras som en `:::note` efter Cache Explorer — en naturlig plats bland mätverktygen |
| Quick Win #2 blir för kort | Låg | Den innehåller fortfarande `/compact`, `Ctrl+N`, och en hänvisning till M2:s fullständiga matris |
| Auto-titeln kan förvirra de som vill ha manuellt val | Låg | Innehållet nämner fortfarande manuellt val som "avancerat alternativ" |

---

## Test Strategy

- **Efter Step 1:** Klicka på M9-länken i Quick Win #2. Går den till M2 nu?
- **Efter Step 2:** Är Quick Win #2 under 10 rader? Läsaren ska kunna agera på 30 sekunder.
- **Efter Step 3:** Matchar titel och innehåll? "Auto" är första rekommendationen i texten.
- **Efter Step 4:** Öppna M3 → gör grinden → gå till M4 → kör övning 1. Känns flödet M3→M4 naturligt?
- **Efter Step 5:** Finns community-verktygen kvar i M3? Har M4 en ren tip istället för en 20-raders bonus?
- **Efter Step 6:** Skriv ut snabbreferenskortet. Är det en ren checklista utan fotnotssuperskript?