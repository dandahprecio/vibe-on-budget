# Plan för en tydligare och mer sammanhängande kurs

**Avsedd planfil:** `plans/2026-09-08-kursomarbetning.md`  
**Status:** Planen är sammanställd nedan, men **inte sparad** eftersom nuvarande planläge inte tillåter filändringar.

## Goal — mål

Omarbeta kursen till ett sammanhängande lärandeflöde där en programmeringsvan läsare utan tidigare Copilot- eller AI-kunskaper lär sig att slutföra kodningsuppgifter med bibehållen kvalitet, förståelig arbetsprocess och rimlig förbrukning.

### Beslut som styr arbetet

- **Sju delar i huvudspåret**, ordnade efter läsarens arbetsprocess, med förklarande, konkret och lugn ton på samma nivå som det godkända textprovet.
- Begrepp förklaras **innan de används som förkunskap**.
- Huvudtexten kan förstås **utan genomförda övningar**.
- Ett **valfritt moment i läsarens eget projekt** per modul.
- En **situationsbaserad förståelsefråga med förklarat svar** per modul.
- Separat, valfri fördjupning med **Copilot som tydlig avgränsning**.
- Praktiska instruktioner utgår från **stabila VS Code med GitHub Copilot**.
- Gemensamt faktaunderlag och lärandemål för svenska och engelska. Svensk pilot först.

**Ingår inte:** självhostade modeller, GPU-kalkyler, modellforskning, separat CLI-kurs, nytt övningsprojekt, betygssystem eller större visuell ombyggnad.

### Språkliga och strukturella riktlinjer

- Förklarande, konkret och lugn ton, på samma nivå som det godkända textprovet.
- Begrepp förklaras innan de används som förkunskap.
- Huvudtexten kan förstås utan genomförda övningar.
- Ett valfritt moment i läsarens eget projekt per modul.
- En situationsbaserad förståelsefråga med förklarat svar per modul.
- Separat, valfri fördjupning med Copilot som tydlig avgränsning.
- Praktiska instruktioner utgår från stabila VS Code med GitHub Copilot.
- Gemensamt faktaunderlag och lärandemål för svenska och engelska. Svensk pilot först.

## Pedagogiskt kontrakt

**Kursens centrala princip:** bedöm hela den korrekt slutförda uppgiften, inte bara promptlängden eller första svaret.

**Skillnaden mellan resultatkvalitet och arbetsinsats:**

- **Resultatkvalitet:** uppfyllda krav, relevant verifiering och granskade ändringar.
- **Arbetsinsats:** credits, tidsåtgång, korrigeringar och manuellt omarbete.

**Vad kursen inte garanterar:** Kursen garanterar inte en viss besparing eller kräver en viss modell.

**Omfattning:** Preliminär omfattning på ungefär 600–1 000 ord huvudtext per modul. Används som redaktionell riktning, inte som anledning att kapa nödvändiga förklaringar.

**Kontrollfråga:** Varje modul ska kunna beskrivas med en läsarfråga och ett konkret läranderesultat.

---

## Affected files — berörda filer

Sökvägarna nedan är relativa till arbetsytans rot. `{sv,en}` betyder att motsvarande fil ska finnas i **båda språkmapparna**.

### Nya kurssidor

Under `token-economy-course/src/content/docs/{sv,en}/`:

| Fil | Ansvar |
|---|---|
| `understand-usage.mdx` | Del 1: Förstå förbrukningen |
| `first-task.mdx` | Del 2: Gör ett första, kontrollerat försök |
| `prompts-and-context.mdx` | Del 3: Ge ett tydligt uppdrag och rätt kontext |
| `sessions-and-models.mdx` | Del 4: Välj arbetssätt och hantera sessionen |
| `agents-and-tools.mdx` | Del 5: Avgränsa agentens arbete |
| `project-instructions.mdx` | Del 6: Spara det som fungerar i projektet |
| `working-routine.mdx` | Del 7: Jämför och bygg din arbetsrutin |
| `deep-dives/diagnose-usage.mdx` | Undersök hög förbrukning |
| `deep-dives/copilot-internals.mdx` | Förstå det som sker bakom gränssnittet |

Filnamnen saknar modulnummer så att en framtida omordning inte kräver ytterligare namnbyten.

### Befintliga filer att ändra

- `token-economy-course/src/content/docs/{sv,en}/index.mdx` — ny introduktion och kurskarta.
- `token-economy-course/src/content/docs/{sv,en}/glossary.mdx` — konsekvent, förklarande ordlista.
- Befintliga `01-hidden-tax.mdx` till `09-under-the-hood.mdx` i båda språkmapparna — ersätt med korta hänvisningssidor för gamla länkar efter innehållsmigreringen.
- `astro.config.mts` — navigation och språkbenämningar.
- `index.astro` — justera introduktionstexten till det nya kurslöftet; behåll layouten.
- `README.md` — uppdatera struktur och arbetsgång för översättningar.
- `plans/2026-09-08-kursomarbetning.md` — beslut, genomförandechecklista och granskningsunderlag.

**Ingen planerad ändring** av `package.json`, innehållsschemat, komponentarkitekturen eller beroendena.

---

## Steps — genomförande

### 1. Dokumentera kursens pedagogiska kontrakt

**Fil:** `plans/2026-09-08-kursomarbetning.md`

- [ ] Samla besluten ovan och det godkända textprovet.
- [ ] Formulera kursens centrala princip: **bedöm hela den korrekt slutförda uppgiften, inte bara promptlängden eller första svaret**.
- [ ] Skilj mellan:
  - **Resultatkvalitet:** uppfyllda krav, relevant verifiering och granskade ändringar.
  - **Arbetsinsats:** credits, tidsåtgång, korrigeringar och manuellt omarbete.
- [ ] Dokumentera att kursen inte garanterar en viss besparing eller kräver en viss modell.
- [ ] Sätt en preliminär omfattning på ungefär 600–1 000 ord huvudtext per modul. Använd detta som redaktionell riktning, inte som anledning att kapa nödvändiga förklaringar.

**Kontroll:** Varje modul ska kunna beskrivas med en läsarfråga och ett konkret läranderesultat.

### 2. Sakgranska råden innan de skrivs om

**Filer:** befintliga kursmoduler och ordlistor; granskningsresultat i planfilen.

Skapa ett granskningsregister med: **påstående, plats, källa, kontrollerat datum, tillämplig miljö och beslut**. Beslutet ska vara behåll, precisera, ersätt eller ta bort.

Prioritera följande:

| Område | Nödvändig rättelse eller kontroll |
|---|---|
| Kostnadsmodellen | Skilj faktisk debitering från ET som jämförelsemått. Ta bort formuleringar som ger dubbelräkning. |
| Planer och tilldelningar | Skilj abonnemangsavgift, inkluderad användning och eventuell extra debitering. Undvik att beskriva alla användare som identiska. |
| Sparprocent | Ta bort generella löften utan relevant belägg. Forskningsresultat ska märkas med miljö och begränsningar. |
| Kontext | Skilj tillgängliga filer, sökindex, sökträffar och faktiskt tillförd kontext. Öppna flikar innebär inte automatiskt att alla filer skickas i sin helhet. |
| Exkludering | Verifiera `.copilotignore` innan det rekommenderas. Ersätt annars med dokumenterade mekanismer och deras begränsningar. |
| Instruktionsfiler | Rätta placering, användning och laddningsvillkor för `AGENTS.md`, `.instructions.md` och `.prompt.md`. |
| Cache | Ta bort garanterade påståenden om cacheträffar, modellbyten, förgrening och besparingar. |
| Arbetssätt och verktyg | Kontrollera aktuella namn, möjligheter, inställningar och skillnader mellan agentmiljöer. |
| Kvalitet och säkerhet | Ta bort generella regler om endast kod, högst tre verktygsanrop och att gröna tester ensamma betyder färdigt arbete. |

**Särskilda krav:**

- Kopierbara instruktioner ska provas i en dokumenterad stabil VS Code-version.
- Produktbeteende ska stödjas av relevant produktdokumentation, inte enbart leverantörens API-dokumentation eller en blogg om ett annat verktyg.
- Påståenden som inte kan verifieras ska inte leva vidare som standardråd.
- Redaktionella kommentarer om tidigare borttagna fel ska inte finnas i elevtexten.

**Kontroll:** Inget osäkrat påstående får bli ett obligatoriskt arbetssteg eller en tvärsäker slutsats.

### 3. Skapa och granska en svensk pilot

**Filer:**

- `index.mdx`
- `token-economy-course/src/content/docs/sv/understand-usage.mdx`
- `token-economy-course/src/content/docs/sv/first-task.mdx`

Introduktionen ska tydligt skilja mellan:

- **För att läsa:** grundläggande programmeringsvana; ingen tidigare Copilot-kunskap.
- **För att prova:** stabila VS Code, tillgång till Copilot och en säker arbetskopia av ett eget projekt.

Den ska också förklara huvudspårets ordning, att övningarna är valfria och att fördjupningen kan hoppas över helt.

Prova introduktionen och del 1–2 på minst en programmeringsvan person som är ny på Copilot. Be personen att:

1. Förklara token, kontext och uppgiftskostnad med egna ord.
2. Förklara varför en kort prompt inte garanterar låg kostnad.
3. Beskriva hur ett resultat ska kontrolleras.
4. Peka ut oklara begrepp och övergångar.

**Kontroll:** Revidera piloten innan resten skrivs. Läsaren ska inte behöva använda ordlistan för att förstå huvudresonemanget.

### 4. Skriv huvudspårets sju delar

**Filer:** de sju nya huvudsidorna i `src/content/docs/sv/`.

Varje modul ska ha denna återkommande struktur:

1. Frågan modulen besvarar och kopplingen till föregående del.
2. Förklaring med ett konkret exempel.
3. Praktiska vägval och relevanta begränsningar.
4. Ett valfritt moment i eget projekt.
5. En situationsfråga med utfällbart, förklarat svar.
6. Kort sammanfattning och en motiverad övergång framåt.

#### Del 1 — Förstå förbrukningen

**Fil:** `understand-usage.mdx`

- Förklara prompt, modell, token, input, output och kontext i små steg.
- Visa att en uppgift kan omfatta flera förfrågningar.
- Introducera credits som förbrukningsmått och skilj dem från abonnemangsavgiften.
- Förklara cache kort som möjlig återanvändning, utan teknisk mekanik.
- Flytta fullständiga pristabeller och ET-formeln ur huvudtexten.

**Praktiskt moment:** identifiera var den egna användningen visas, om funktionen finns.

**Förståelsefråga:** Två lika långa frågor kostar olika mycket. Hur kan det komma sig?

**Facitets kärna:** promptlängden säger inte vilken kontext, modell eller mängd efterföljande arbete som användes.

#### Del 2 — Gör ett första, kontrollerat försök

**Fil:** `first-task.mdx`

- Hjälp läsaren välja en liten uppgift med begripligt resultat.
- Undvik autentisering, betalningar, produktionsdata och andra känsliga områden som första övning.
- Introducera nödvändiga grunder om att fråga, planera och låta Copilot ändra kod — inga oförklarade lägesnamn.
- Förklara arbetskopia, avgränsning, verifiering och granskning före första ändringen.
- Börja med en enkel anteckning, inte en verktygskatalog.

**Praktiskt moment:** genomför en avgränsad uppgift och notera resultat, verifiering, tillgänglig kostnad, tid och korrigeringar.

**Förståelsefråga:** Tester är gröna, men en orelaterad fil har ändrats. Är uppgiften färdig?

**Facitets kärna:** tester är en del av verifieringen; även omfattning och ändringarnas avsikt måste granskas.

#### Del 3 — Ge ett tydligt uppdrag och rätt kontext

**Fil:** `prompts-and-context.mdx`

- Bygg upp uppdraget med mål, relevant underlag, begränsningar och förväntat resultat.
- Visa ett före–efter-exempel som behåller samma uppgift.
- Förklara hur filer och felmeddelanden kan göra uppdraget tydligare.
- Lär ut relevans, inte ”så lite kontext som möjligt”.
- Ersätt generella code-only- och språkbytesregler med situationsanpassade råd.

**Praktiskt moment:** förbättra beskrivningen av den egna uppgiften utan att ändra dess krav.

**Förståelsefråga:** Den tydligare prompten är längre. Är det en försämring?

**Facitets kärna:** extra information kan minska fel och omarbete; bedöm hela uppgiften.

#### Del 4 — Välj arbetssätt och hantera sessionen

**Fil:** `sessions-and-models.mdx`

- Utveckla grunderna från del 2: när behövs förklaring, planering, redigering eller verktygsarbete?
- Förklara modellval utan fasta modeller för fasta uppgiftstyper.
- Beskriv Auto som ett möjligt standardval, inte ett löfte om bästa utfall.
- Förklara när relevant historik bör behållas och när en ny session är lämplig.
- Förklara komprimeringens syfte och risken att viktig information försvinner.

**Praktiskt moment:** välj och motivera arbetssätt för nästa uppgift. Modelljämförelse krävs inte.

**Förståelsefråga:** En ny uppgift är orelaterad till den gamla. Bör sessionen behållas enbart för cachens skull?

**Facitets kärna:** relevant underlag och uppgiftsresultat går före isolerad cacheoptimering.

#### Del 5 — Avgränsa agentens arbete

**Fil:** `agents-and-tools.mdx`

- Förklara agentens återkoppling mellan undersökning, åtgärd och kontroll.
- Skilj inbyggda verktyg från externa verktyg via MCP.
- Visa hur uppdrag, verktygsbehörigheter och stoppvillkor samverkar.
- Ersätt godtyckliga anropsgränser med begripliga villkor för att fortsätta, fråga eller stanna.
- Förklara att instruktioner vägleder modellen men inte är en säkerhetsbarriär.

**Praktiskt moment:** granska verktygsbehov och formulera stoppvillkor för en liten uppgift; ingen MCP-installation krävs.

**Förståelsefråga:** Agenten gör om samma misslyckade försök utan ny information. Vad bör hända?

**Facitets kärna:** stanna upp, redovisa hindret och ompröva angreppssättet i stället för att fortsätta samma loop.

#### Del 6 — Spara det som fungerar i projektet

**Fil:** `project-instructions.mdx`

- Utgå från ett faktiskt återkommande behov.
- Förklara skillnaden mellan projektgemensamma regler, villkorade instruktioner, dokumentation och återanvändbara uppgifter.
- Börja med en relevant instruktion, inte ett paket med flera obligatoriska filer.
- Förklara att korthet inte får gå före viktiga kvalitets- och säkerhetskrav.
- Beskriv promptfiler och skills endast med verifierat stöd för den valda miljön.

**Praktiskt moment:** förbättra eller föreslå en återkommande instruktion och kontrollera att den används när den ska.

**Förståelsefråga:** En regel gäller bara frontend. Ska den skickas med varje uppgift?

**Facitets kärna:** välj det smalaste lämpliga tillämpningsområdet och kontrollera att aktiveringen fungerar.

#### Del 7 — Jämför och bygg din arbetsrutin

**Fil:** `working-routine.mdx`

- Knyt ihop kvalitet, förbrukning och arbetsinsats.
- Förklara skillnaden mellan ett lärandeexperiment och ett tillförlitligt benchmark.
- Jämför samma uppgift från motsvarande startläge.
- Ändra en sak i taget och notera övriga skillnader.
- Tillåt slutsatsen ”otillräckligt underlag”.
- Avsluta kursen här, före all fördjupning.

**Praktiskt moment:** gör en kontrollerad jämförelse, om det är säkert och rimligt, och formulera en personlig arbetsrutin.

**Förståelsefråga:** Ett billigare första svar krävde två korrigeringar. Vilka uppgifter behövs innan du kallar det en besparing?

**Facitets kärna:** jämför hela uppgiften, slutresultatet och eventuellt manuellt omarbete.

### 5. Gör projektövningarna sammanhängande men frivilliga

**Filer:** `first-task.mdx` och respektive moduls övningsavsnitt.

- [ ] Introducera en gemensam anteckningsmall med uppgift, startläge, krav, verifiering, arbetssätt, ändrad variabel, resultat, kostnad, tid och korrigeringar.
- [ ] Återanvänd samma begrepp genom kursen.
- [ ] Låt saknade mätvärden anges som **inte tillgängliga**, inte uppskattas till faktiska credits.
- [ ] Kräv inte en ny kostsam jämförelsekörning i varje modul.
- [ ] Beskriv säker återställning utan destruktiva kommandon som riskerar läsarens befintliga arbete.
- [ ] Skilj konversationsförgrening från en isolerad arbetskopia av koden.
- [ ] Ge varje övning ett tydligt mål och en kontroll av vad läsaren ska ha observerat.

Korta exempel i texten ska hjälpa även den som inte gör övningen. De ska inte införa ett andra, obligatoriskt kursprojekt.

### 6. Renodla fördjupning och ordlista

**Filer:** de två nya fördjupningssidorna och `glossary.mdx`.

**Undersök hög förbrukning:**

- Börja med ett symptom, exempelvis fler omtag eller växande sessionskostnad.
- Visa när detaljerade loggar och cacheanalys är användbara.
- Förklara mätvärdenas begränsningar.
- Informera om att loggar kan innehålla kod och känsligt innehåll; dela dem inte okontrollerat.

**Förstå det som sker bakom gränssnittet:**

- Beskriv kontexthantering, verktygsurval och återkoppling.
- Skilj dokumenterat produktbeteende från förenklade pedagogiska modeller.
- Behåll relevanta avancerade agentupplägg med deras samordningskostnader.
- Ta bort självhosting, GPU-ekonomi och modellpruning.

**Ordlistan:**

- Sortera svenska termer efter svenska uppslagsord.
- Ge engelsk motsvarighet där den hjälper.
- Använd kort definition, konkret exempel och länk till första förklaringen.
- Ta bort sparlöften, fasta kostnader och normativa råd ur definitionerna.
- Använd samma benämning genom hela kursen, exempelvis **baslinje** och **acceptanskriterier**.

### 7. Tillämpa gemensamma skriv- och presentationsregler

**Filer:** samtliga slutliga kurssidor.

- [ ] Förklara samband med löptext; använd listor för steg och kontroller.
- [ ] Behåll tabeller endast där en jämförelse blir lättare.
- [ ] Behåll diagram endast när de förklarar något utöver texten.
- [ ] Ersätt färgprickar som nivåmarkering med tydliga ord.
- [ ] Undvik dubbla sidtitlar från frontmatter och manuella H1-rubriker.
- [ ] Märk påhittade räkneexempel som illustrativa och håll alla antaganden synliga.
- [ ] Använd inga universella procentsatser för arbetsflödesbesparing.
- [ ] Lägg inte nödvändiga säkerhetsvillkor i valfria fördjupningsrutor.
- [ ] Se till att sammanfattningarna inte är mer tvärsäkra än huvudtexten.
- [ ] Ange lästid och övningstid separat, efter granskning av färdig text.

### 8. Skapa motsvarande engelska kurs

**Filer:** alla motsvarande sidor under `src/content/docs/en/`.

Översätt den granskade svenska strukturen till naturlig engelska, men använd det gemensamma faktaunderlaget som auktoritet.

Kontrollera varje sidpar mot:

- Samma lärandemål och ordning.
- Samma krav och valfria moment.
- Samma exempelavsikt, förståelsefråga och facit.
- Samma sakuppgifter och förbehåll.
- Länkar som stannar i valt språk.

`README.md` ska beskriva denna arbetsgång i stället för att generellt instruera bidragsgivaren att kopiera den engelska sidan.

### 9. Migrera navigation och gamla länkar

**Filer:** `astro.config.mts`, båda introduktionerna, gamla modulsidor och nya sidors frontmatter.

Skapa tre navigationsgrupper:

1. **Huvudspår** — del 1–7.
2. **Fördjupning** — två tydligt valfria sidor.
3. **Referens** — ordlistan.

Huvudsaklig innehållsmappning:

| Gammal sida | Ny huvudsaklig plats |
|---|---|
| `01-hidden-tax.mdx` | `understand-usage.mdx` |
| `02-context-model.mdx` | `prompts-and-context.mdx`, `sessions-and-models.mdx`, `deep-dives/diagnose-usage.mdx` |
| `03-measure-before-you-cut.mdx` | `first-task.mdx`, `working-routine.mdx`, `deep-dives/diagnose-usage.mdx` |
| `04-quick-wins.mdx` | Relevant innehåll fördelas på del 3–6 |
| `05-cheaper-prompts.mdx` | `prompts-and-context.mdx` |
| `06-project-setup.mdx` | `project-instructions.mdx` |
| `07-agents-mcp.mdx` | `sessions-and-models.mdx`, `agents-and-tools.mdx`, fördjupning |
| `08-vibe-coding-guardrails.mdx` | Grundkontroller i del 2, 3, 5–7 |
| `09-under-the-hood.mdx` | `deep-dives/copilot-internals.mdx`; kursavslutningen till del 7 |

- [ ] Behåll gamla adresser som korta hänvisningssidor utan gammal rådgivning.
- [ ] Håll dem utanför den manuella sidomenyn och sökindexet med `pagefind: false`.
- [ ] Bevara gamla avsnittsankare där de behövs för befintliga länkar och visa relevant destination.
- [ ] Uppdatera alla interna länkar till de nya slutliga sidorna.
- [ ] Styr `prev` och `next` så att huvudspåret slutar efter del 7.
- [ ] Kontrollera språkprefix och basvägen `/vibe-on-budget`.
- [ ] Behåll nuvarande språkval och layout; ingen omdesign krävs.

---

## Genomförandechecklista

- [ ] Pedagogiskt kontrakt dokumenterat
- [ ] Sakgranskning genomförd
- [ ] Svensk pilot (intro + del 1–2) skapad och prövad
- [ ] Huvudspår del 3–7 skrivna
- [ ] Projektövningar sammanhängande
- [ ] Fördjupning och ordlista renodlade
- [ ] Skriv- och presentationsregler tillämpade
- [ ] Engelsk översättning klar
- [ ] Navigation och gamla länkar migrerade
- [ ] Granskning genomförd

## Risks — risker och beroenden

| Risk | Hantering |
|---|---|
| Förenkling blir sakfel | Behåll relevanta villkor och skilj exempel från produktgarantier. |
| Gamla råd återkommer i facit eller ordlista | Granska hela påståendekedjan, inte bara modulens huvudtext. |
| Funktioner varierar mellan versioner, planer och agentmiljöer | Dokumentera provad miljö och ge alternativ när funktioner saknas. |
| Projektövningar blir riskabla eller ojämförbara | Små uppgifter, säker arbetskopia och dokumenterat startläge. |
| Svenska och engelska glider isär | Granska parvis mot samma mål och faktaunderlag. |
| Flyttade sidor bryter länkar | Behåll hänvisningssidor och testa även ankarlänkar. |
| Teknisk byggkontroll misstas för pedagogiskt godkännande | Separat läsarpilot och slutlig genomläsning krävs. |

**Komplexitet:** hög redaktionell omfattning, låg–medelhög teknisk komplexitet. De största osäkerheterna är faktagranskning och läsarprövning, inte ny programkod.

---

## Test strategy — verifiering och godkännande

### Efter piloten

- Läsaren kan återge grundbegreppen utan ordlistan.
- Läsaren förstår vad som ska kontrolleras före kostnadsjämförelse.
- Inga övningar eller fördjupningar krävs för fortsatt läsning.

### Efter varje modul

- Ett tydligt lärandemål uppfylls.
- Nya begrepp förklaras före användning.
- Exempel, övning, facit och sammanfattning lär ut samma princip.
- Nästa modul följer logiskt från den föregående.
- Praktiska steg är provade i angiven miljö eller uttryckligen markerade som ej verifierade.

### Efter navigation och översättning

Vid genomförandet, från `token-economy-course`:

- Kör `npm run astro -- check`.
- Kör `npm run build`.
- Använd `npm run preview` för manuell genomgång av den byggda webbplatsen.
- Kontrollera båda språk, sidomeny, föregående/nästa, interna länkar, gamla adresser, ankare och sökresultat.
- Kontrollera mobil läsning, zoom och tangentbordsanvändning av utfällbara svar.
- Kontrollera rubrikhierarki, bildalternativ och att diagrammens innebörd också framgår i text.

### Slutligt godkännande

Kursen är redo när:

- [ ] Huvudspåret kan läsas från början till slut utan externa förkunskapsuppslag.
- [ ] Alla sju delar bidrar till samma arbetsmetod.
- [ ] Fördjupning kan hoppas över utan kunskapsluckor.
- [ ] Ingen övning kräver premiumfunktioner eller extra köp för att förstå lärdomen.
- [ ] Sakuppgifter är granskade eller tydligt avgränsade.
- [ ] Båda språkversionerna är pedagogiskt och sakligt likvärdiga.
- [ ] Läsarpilot, tekniska kontroller och länkkontroller är genomförda.