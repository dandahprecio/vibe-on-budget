# Module 9 Remediation Plan — Helhetsbilden

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M9 är kursens avslutande modul — den zoomar ut från "vad du kan göra" till "vad Copilot redan gör." Modulen har gedigen källforskning men fungerar inte som avslutning på en 9-modulers kurs.

---

## Goal

Behåll M9:s tekniska innehåll men ge kursen ett värdigt slut. Flytta M9 från "antiklimax" till "fördjupning efter avslutningen" genom att lägga till en kurssammanfattning som det sista läsaren ser.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/09-under-the-hood.mdx` | Lägg kursavslutning, sänk GPU-hierarki, fixa framåtreferenser |
| `sv/index.mdx` | Inga ändringar nödvändiga |

---

## Steps

### Step 1 — Lägg till en förväntanssättare i inledningen (ny)

**Problem:** M9 byter ton från "gör detta" till "så här fungerar det". Läsaren som förväntar sig en nionde handlingsmodul blir desorienterad.

**Åtgärd:** Lägg till en `:::note` efter inledningen, före första sektionen:

```markdown
:::note[Det här är en fördjupningsmodul]
Modul 1–8 har gett dig en verktygslåda för att spara tokens. Den här modulen
är för dig som vill veta hur Copilot sparar tokens åt dig — under huven.
Du kan läsa den nu eller återkomma senare som referens.
:::
```

**Varför:** Steg 1 i M9:s röda tråd: sätt rätt förväntan. Läsaren ska veta att M9 är "nice to know", inte "need to do".

---

### Step 2 — Kontextualisera de små besparingssiffrorna (komplettera)

**Problem:** "5,5% outputkomprimering" och "9–11% Tool Search" är små siffror jämfört med M4:s 50–80%. Läsaren kan tolka det som att Copilots optimeringar är obetydliga.

**Åtgärd:** Lägg till en mening efter "De osynliga optimeringarna"-sektionen:

```markdown
Dessa optimeringar är små per förfrågan men ackumuleras över miljontals
användare och miljarder tokens. Dina egna optimeringar från Modul 4–8
(code-only, unified diff, .copilotignore) ger betydligt större individuell
effekt — Copilots harness-optimeringar är grädden på moset, inte huvudingrediensen.
```

**Varför:** Steg 2 i röda tråden: placera M9 i rätt perspektiv. Läsaren ska inte tro att hen slösat tid på M4–M8 när Copilot redan optimerar.

---

### Step 3 — Gör GPU-sektionen till en `:::note[Fördjupning]` (sänk hierarki)

**Problem:** Infrastrukturekonomin (🔴) är ~25 rader med formel, H200-tabell, batch-storlekar, och brytpunkter. Det är intressant men för detaljerat för en avslutande moduls huvudtext. De flesta Copilot-användare kommer aldrig provisionera en GPU.

**Åtgärd:** Gör om sektionen `## 🔴 5. Infrastrukturekonomi` → `:::note[Fördjupning: Infrastrukturekonomi för självhostade modeller]`. Behåll allt innehåll — formel, tabell, siffror — men sänk visuell vikt.

**Varför:** Steg 3 i röda tråden: GPU-ekonomi är relevant för en smal målgrupp. Att ha den som H2 ger den samma vikt som "Outputkomprimering" och "WebSocket-förbättringar" — vilket är missvisande.

---

### Step 4 — Fixa "Fortsätt lära dig" (rätta)

**Problem:** "Fortsätt lära dig" pekar tillbaka till M2 och M7. I den sista modulen signalerar bakåtlänkar "du är inte klar". Läsaren är klar — hen behöver en "du har slutfört kursen"-signal.

**Åtgärd:** Ersätt med:

```markdown
:::tip[Du har slutfört kursen]
Gå tillbaka till [kursöversikten](/vibe-on-budget/sv) för att repetera valfri modul.
Alla Viktiga slutsatser från Modul 1–9 finns samlade i respektive modul.
:::
```

**Varför:** Steg 4 i röda tråden: avslutning. Inte "fortsätt lära dig" — "du är klar, här är vägen tillbaka."

---

### Step 5 — Lägg till en kurssammanfattning (ny)

**Problem:** Kursen saknar en avslutande prosa-sammanfattning. Efter 9 moduler får läsaren ingen "så här långt har du kommit"-återblick.

**Åtgärd:** Lägg till en sektion efter "Viktiga slutsatser" och före fotnoterna:

```markdown
## Kursavslutning: Din tokenekonomi-verktygslåda

Du har gått från att undra varför Copilot plötsligt kostar pengar till att ha
en komplett verktygslåda för tokenekonomi. Här är vad du kan nu:

- **Förstå kostnaden.** Du vet att output kostar 5× input, att cache är 90%
  billigare, och att företagspoolning gör varje utvecklares tokens till allas
  angelägenhet. (Modul 1)
- **Se vad som skickas.** Du kan anatomien av en Copilot-förfrågan och vet
  att öppna flikar, verktygsdefinitioner och konversationshistorik konkurrerar
  om kontextfönstret. (Modul 2)
- **Mäta innan du agerar.** Du har en representativ uppgift, en baslinje, och
  en kvalitetsgräns. Du använder hover, context window control, dashboard,
  Agent Debug Logs och Cache Explorer — inte gissningar. (Modul 3)
- **Spara direkt.** Du har code-only-instruktioner, `.copilotignore`, unified
  diff, Auto modellval, och rena chattrådar — sex saker som tillsammans kan
  halvera din tokenförbrukning. (Modul 4)
- **Skriva effektivt.** Du använder punktlistor, `#file:`-referenser,
  avsiktskommentarer och engelska promptar. Du vet när komprimering hjälper
  och när den stjälper. (Modul 5)
- **Konfigurera rätt.** Du har en minimal `copilot-instructions.md` (~50 tokens),
  ett smalt `AGENTS.md`-kontrakt (~80 tokens), och lazy-loadade `.prompt.md`-filer
  för domänkunskap. (Modul 6)
- **Använda agenter klokt.** Du väljer Ask/Edit före Agent, avgränsar anpassade
  agenter, rensar oanvända MCP-servrar, och låter Auto sköta modellvalet. (Modul 7)
- **Vibe-coda utan skuld.** Du skriver en 10-raders spec före implementation,
  använder TDD, automatiserar granskning, och har säkerhet som hård spärr. (Modul 8)
- **Se helheten.** Du förstår hur Copilots harness optimerar i bakgrunden och
  varför det inte ersätter dina egna optimeringar — det kompletterar dem. (Modul 9)

Fortsätt mäta. Fortsätt iterera. Och kom ihåg: det billigaste LLM-anropet
är det du inte gör.
```

**Varför:** Steg 5 i M9:s röda tråd: kursens *faktiska* avslutning. Varje modul får en mening som påminner läsaren om vad hen lärt sig. Sista meningen är en callback till M5:s "billigaste anropet är det du inte gör" — en tematisk bokslut.

---

## Förväntad ny struktur (efter fixar)

```
# Helhetsbilden

[Inledning — oförändrad]

:::note[Det här är en fördjupningsmodul]  ← NY

## 🟡 De osynliga optimeringarna
  [NY: kontextualisering av små siffror]

## 🟡 1. Outputkomprimering
  (Oförändrad)

## 🟡 2. Bakgrundsarbete och batchning
  (Oförändrad)

## 🟡 3. WebSocket-förbättringar
  (Oförändrad)

## 🟡 4. Evidensbaserad optimering
  (Oförändrad)

## Vad dessa optimeringar innebär för ditt arbetsflöde
  (Oförändrad)

:::note[Fördjupning: Infrastrukturekonomi för självhostade modeller]  ← SÄNKT (från H2)
  [Formel + H200-tabell — oförändrade]
:::

## 🟡 Så hänger det ihop: hela stacken
  (Oförändrat)

:::note[På horisonten: Tokeneffektivitet på modellnivå]
  (Oförändrad)

:::tip[Du har slutfört kursen]  ← NY (ersätter "Fortsätt lära dig")
  (Länk till kursöversikten)

## Övning
  (Oförändrad)

## Viktiga slutsatser
  (Oförändrade)

## Kursavslutning: Din tokenekonomi-verktygslåda  ← NY — kursens faktiska slut
  (9 moduler sammanfattade i 9 meningar)
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| Kurssammanfattningen känns självförhärligande | Låg | Den är skriven som "du kan nu" — inte "vi har lärt dig". Den är en checklista läsaren kan använda för självskattning |
| "Fördjupningsmodul"-noten kan få läsare att hoppa över M9 | Låg | M9 är frivillig — det är rätt signal. De som är intresserade läser ändå |
| GPU-sektionen i en note tappar auktoritet | Låg | Den har kvar alla siffror och källhänvisningar. Notes i Starlight är visuellt framträdande |
| Bakåtlänkar borttagna — läsaren vet inte vart hen ska gå | Låg | "Du har slutfört kursen" + länk till index ger en tydlig väg |

---

## Test Strategy

- **Efter Step 1:** Öppna M9. Ser du direkt att det är en fördjupningsmodul, eller måste du läsa halva för att förstå det?
- **Efter Step 3:** Är GPU-innehållet kvar men visuellt nedtonat jämfört med huvudsektionerna?
- **Efter Step 4:** Klicka på avslutningslänken. Går den till kursöversikten, inte till M2?
- **Efter Step 5:** Läs kurssammanfattningen högt. Kan du återge vad du lärt dig i varje modul? Känns sista meningen ("det billigaste LLM-anropet är det du inte gör") som en naturlig avslutning?