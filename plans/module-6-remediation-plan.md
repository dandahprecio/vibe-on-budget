# Module 6 Remediation Plan — Projektinställningar för tokeneffektivitet

**Date:** 2026-09-07
**Context:** Granskning av kursens röda tråd. M6 är konfigurationsnavet — den översätter M4:s engångsvinster och M5:s prompttekniker till permanenta projektfiler. Modulen har utmärkt innehåll men saknar en tydlig prioriteringsordning, vilket gör den svår att agera på.

---

## Goal

Ge M6 en agenda: "gör detta först, detta sedan, resten är fördjupning." Flytta 600-token-budgeten till en position där den styr (inte bara kommenterar) läsarens konfigurationsval. Koppla till M3:s baslinje.

---

## Affected Files

| File | Typ av ändring |
|---|---|
| `sv/06-project-setup.mdx` | Prioritera, flytta budget, koppla till M3, rensa redundans |
| `sv/04-quick-wins.mdx` | Inga ändringar (M6 pekar framåt, inte bakåt) |

---

## Steps

### Step 1 — Lägg till en prioriterad agenda i inledningen (ny)

**Problem:** M6 kastar läsaren direkt in i "Alltid-på-skatten" utan att säga vad som är viktigast. Resultatet: läsaren läser 7 ämnen i följd utan att veta vilka som ger mest effekt.

**Åtgärd:** Lägg till en kort agenda efter inledningen, före "Alltid-på-skatten":

```markdown
## Så använder du den här modulen

Gör dessa tre steg först — de ger ~80% av besparingen på under 30 minuter:

1. **Minimal `copilot-instructions.md`** — 18 rader, ~50 tokens (→ Steg 1 nedan)
2. **`.copilotignore`** — en fil som filtrerar bort brus (→ Steg 4)
3. **`AGENTS.md`-kontrakt** — ~80 tokens, beteende endast (→ Steg 3)

Resterande steg (lazy-loading, VS Code-inställningar, budgetmodellen) är
fördjupning — gör dem när du har tid och vill finjustera.
```

**Varför:** Steg 1 i M6:s röda tråd: en färdplan. Läsaren ska veta exakt vad som är "måste" och vad som är "kan".

---

### Step 2 — Flytta 600-token-budgeten före mallarna (omstrukturera)

**Problem:** 600-token-budgeten ligger mellan VS Code-inställningar och LLM-varningen — långt efter att läsaren redan läst och kanske implementerat mallarna. Den borde komma *innan* som en målsättning som styr valen.

**Åtgärd:** Flytta budget-sektionen till efter "Alltid-på-skatten" och före "1. Den minimala `copilot-instructions.md`". Byt rubrik till `## Sikta på ~600 tokens fast overhead 🟡` så den känns som en målsättning, inte en efterhandskonstruktion.

Ny position: Alltid-på-skatten → **Budget** → Minimal mall → Medium mall → Tak på 200 rader → Promptkommentarer → ...

**Varför:** Steg 2 i röda tråden: budgeten först, *sedan* mallarna som uppfyller budgeten. "Här är målet (~600 tokens). Här är filerna som når det."

---

### Step 3 — Gör tokenräkningsskripten till en `:::tip` (komprimera)

**Problem:** PowerShell- och Node.js-skripten är ~15 rader kod vardera. De är användbara men bryter läsflytet mitt i budget-sektionen.

**Åtgärd:** Ersätt de inline-skripten med en `:::tip`:

```markdown
:::tip[Granska dina filer]
Kör ett tokenräkningsskript mot dina instruktionsfiler:
- **PowerShell:** `Get-Content .github/copilot-instructions.md -Raw | ForEach-Object { [math]::Floor($_.Length / 4) }`
- **Node.js:** `node -e "console.log(Math.floor(require('fs').readFileSync('.github/copilot-instructions.md','utf8').length/4))"`
- **Precist:** Använd [Copilot SDK](https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/usage-and-billing) eller `gh copilot` för faktisk tokenanvändning.
:::
```

**Varför:** Steg 3 i röda tråden: behåll funktionaliteten, minska den visuella vikten. Läsaren kan kopiera en rad utan att scrolla förbi 15 rader kod.

---

### Step 4 — Lägg till en jämförelsetabell: AGENTS.md vs .prompt.md (ny)

**Problem:** Distinktionen "AGENTS.md = beteende, .prompt.md = kunskap" finns utspridd i två olika sektioner. Läsaren måste pussla ihop den själv.

**Åtgärd:** Skapa en jämförelsetabell inuti "3. `AGENTS.md`-kontraktet", direkt efter den minimala mallen:

```markdown
| Egenskap | `AGENTS.md` | `.prompt.md`-filer |
|---|---|---|
| **Laddas** | Alltid, varje agentsteg | Endast vid `#file:`-referens |
| **Innehåll** | Beteende: läge, omfång, output | Kunskap: arkitektur, konventioner, kända misstag |
| **Max storlek** | ~80 tokens | Ingen hård gräns — laddas sällan |
| **Exempel** | "Läge: Fråga först. Output: Endast kod." | "API: alla routes i src/api/. Auth i src/middleware/auth.ts" |
```

**Varför:** Steg 4 i röda tråden: en visuell kontrast gör distinktionen omöjlig att missa. Läsaren ser direkt *var* hen ska lägga olika typer av information.

---

### Step 5 — Koppla övningarna till M3:s baslinje (komplettera)

**Problem:** Övningarna är konkreta ("räkna rader", "skapa .prompt.md", "kör skriptet") men ingen uppmaning att validera mot M3:s baslinje.

**Åtgärd:** Lägg till en inledande mening och en fjärde övning:

```markdown
## Övning

Innan du börjar: kör din representativa uppgift från Modul 3 en gång till
så du har en färsk baslinje. Efter varje övning, kör om uppgiften och jämför.

1. Öppna din `.github/copilot-instructions.md`...
2. Skapa filen `docs/architecture.prompt.md`...
3. Kör tokenräkningsskriptet...
4. Efter att du implementerat en minimal instruktionsfil och `.copilotignore`,
   kör om din representativa uppgift. Hur mycket minskade din tokenförbrukning
   jämfört med baslinjen?
```

**Varför:** Steg 5 i röda tråden: M6:s permanenta ändringar är de mest mätbara av alla — de påverkar *varje* framtida förfrågan. Läsaren ska se effekten direkt.

---

### Step 6 — Ta bort redundant M4-länk i "Fortsätt lära dig" (rensa)

**Problem:** "Fortsätt lära dig" pekar till M7 och tillbaka till M4. M4-länken är redundant — läsaren har redan gjort M4.

**Åtgärd:** Behåll bara M7-länken:

```markdown
:::tip[Fortsätt lära dig]
En stabil projektuppsättning gör [Agenter, verktyg och MCP-hygien](/vibe-on-budget/sv/07-agents-mcp)
mer effektiv.
:::
```

**Varför:** Steg 6 i röda tråden: framåtreferenser ska peka framåt. Bakåtreferenser är för repetition, men M6→M4 är inte repetition — det är "gå tillbaka till något du redan gjort."

---

## Förväntad ny struktur (efter fixar)

```
# Projektinställningar för tokeneffektivitet

[Inledning — oförändrad]

## Så använder du den här modulen  ← NY (agenda med prioritering)

## Alltid-på-skatten 🟢
  (Oförändrad)

## Sikta på ~600 tokens fast overhead 🟡  ← HITFLYTTAD (från position 6)
  (Tokenräkningsskript som tip)

## 1. Den minimala copilot-instructions.md
  [Nu styrd av budgeten ovan]

## 2. Lazy-loading med .prompt.md-filer 🟡
  (Oförändrad)

## 3. AGENTS.md-kontraktet 🟢
  [NY: jämförelsetabell AGENTS.md vs .prompt.md]

## 4. Innehållsexkludering med .copilotignore 🟢
  (Oförändrad)

## 5. VS Code-inställningar för tokeneffektivitet
  (Oförändrad)

## Tak på 200 rader 🟡
  [Nu efter mallarna — som en varning, inte en målsättning]

## Promptkommentarer 🟡
  (Oförändrad)

## 7. LLM-genererade kontextfiler: en varning
  (Oförändrad)

:::tip[Fortsätt lära dig]  ← RENSAD (bara M7-länk)

## Övning  ← KOMPLETTERAD (M3-baslinje + ny övning 4)

## Viktiga slutsatser
  (Oförändrade)
```

---

## Risks

| Risk | Sannolikhet | Mitigering |
|---|---|---|
| Agendan känns för styrande — läsaren vill utforska fritt | Låg | Agendan är en rekommendation, inte ett krav. Resterande sektioner finns kvar |
| Budget-sektionen tidigt kan kännas abstrakt innan man sett mallarna | Låg | Budgeten nämner mallarna ("≤100 tokens i instruktioner") — läsaren ser direkt vad som krävs |
| Jämförelsetabellen upprepar innehåll från lazy-loading-sektionen | Låg | Tabellen är visuell, lazy-loading-sektionen är förklarande. De kompletterar, duplicerar inte |

---

## Test Strategy

- **Efter Step 1:** Kan en ny läsare identifiera de 3 "måste"-stegen inom 10 sekunder efter att ha läst agendan?
- **Efter Step 2:** Läser du budgeten *innan* du ser mallarna? Styr budgeten dina val av mall (minimal vs medium)?
- **Efter Step 4:** Ser du direkt skillnaden mellan AGENTS.md och .prompt.md i tabellen, utan att läsa omgivande text?
- **Efter Step 5:** Går flödet M3→M6→M3? Läsaren mäter baseline → konfigurerar M6 → mäter igen?