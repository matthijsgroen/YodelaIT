# De taal

## Documentatie

Het gebruik van documentatie in levenslied programmas wordt sterk afgeraden. Het is een lied. Het is aan het publiek om hier zelf een betekenis aan te koppelen. Als je er echt op staat om documentatie toe te voegen aan je programma, dan moet het tussen haakjes `()` staan.

```
(zet Harm = 296)
Harm is de drijvende kracht.
```

## Variabelen

Levenslied ondersteund drie soorten aan variabele namen.

**Eenvoudige variabelen** zijn geldige identificatiegegevens die geen taaltrefwoorden zijn. Een eenvoudige variabelenaam mag alleen letters bevatten en mag geen spaties bevatten. Houd er rekening mee dat Levenslied geen cijfers of onderstrepingstekens in namen van variabelen toestaat. Onthoud de gouden regel van de taal van Levenslied: als je het niet kunt zingen, kun je het ook niet hebben. Eenvoudige variabelen zijn niet hoofdlettergevoelig.

```
Variabele is 1
Harm is een zanger
X is 2
Y is 3
Stop x en y in resultaat
```

**Algemene variabelen** bestaan ​​uit een van de trefwoorden `de`, `een`, `mijn`, `je`, `jouw` of `onze`, gevolgd door witruimte en een unieke variabelenaam, die alleen kleine ASCII-letters a-z mag bevatten. Het trefwoord maakt deel uit van de naam van de variabele, dus `een jongen` is een andere variabele dan `de jongen`. Algemene variabelen zijn niet hoofdlettergevoelig.

```
My variable is 5
Your variable is 4

Put my variable plus your variable into the total
Shout the total
```

**Werkelijke variabelen** zijn eigennamen die uit meerdere woorden bestaan: woorden die geen taalzoekwoorden zijn, elk beginnend met een hoofdletter, gescheiden door spaties.
(Variabelen die uit één woord bestaan, zijn altijd eenvoudige variabelen.)
Hoewel sommige ontwikkelaars deze functie kunnen gebruiken om variabelen te maken met namen als `Klant ID`, `Korting Belastingtarief` of `Afstand in KM`, raden we u aan idiomatische namen van variabelen te gebruiken, zoals `Sjaak Afhaak`, `Koos Werkeloos` en `Vergeetachtige Harry`.

(Hoewel niet strikt idiomatisch, zouden `Jan Boezeroen`, `Ome Henk`, `Black Betty` en `Johnny B Goode` ook allemaal geldige variabelenamen zijn in Levenslied.)

Net als in Ruby, Python en VBScript worden variabelen dynamisch getypt en hoeft u variabelen niet vóór gebruik te declareren.

Als een variabele buiten een functie wordt gedefinieerd, bevindt deze zich in een globaal bereik. Globale bereikvariabelen zijn overal beschikbaar onder hun eerste initialisatie. Als een variabele binnen een functie wordt gedefinieerd, bevindt deze zich in het lokale bereik. Lokale bereikvariabelen zijn beschikbaar vanaf hun initialisatie tot het einde van de functie waarin ze zijn gedefinieerd.

Als u binnen een functie naar een variabele schrijft die binnen het globale bereik is gedefinieerd, schrijft u naar die variabele; u definieert geen nieuwe lokale variabele.

### Een opmerking over hoofdlettergevoeligheid in Levenslied

Levenslied-trefwoorden en namen van variabelen zijn allemaal _niet_ hoofdlettergevoelig, met uitzondering van werkelijke variabelen. Werkelijke variabelen zijn niet hoofdlettergevoelig, **afgezien van de eerste letter van elk woord, die een hoofdletter moet zijn**.

- `TIJD`, `tijd`, `tIJd`, `TIJd` zijn allemaal gelijkwaardig. Eenvoudige variabelen zijn niet hoofdlettergevoelig.
- `MIJN HART`, `mijn hart`, `Mijn Hart` - zijn allemaal gelijkwaardig; het trefwoord `mijn` triggert algemeen variabel gedrag
- `Tom Sawyer`, `TOM SAWYER`, `TOm SAWyer` - zijn allemaal gelijkwaardig; de hoofdletter `S` op `Sawyer` veroorzaakt het werkelijke variabele gedrag
- `KOOS werkeloos` is geen geldige Levenslied-variabele; de kleine letter `w` op `werkeloos` komt niet overeen met een geldige naamgevingsstijl voor variabelen en dus is de naam van de variabele niet geldig.

**Voornaamwoorden**
De trefwoorden `het`, `hij`, `zij`, `hem`, `haar` en `hun` verwijzen naar de laatst genoemde variabele, bepaald door de parseervolgorde.

## Types

Levenslied gebruikt een soortgelijk typesysteem als gedefinieerd door het ECMAScript-typesysteem, behalve dat `undefined` niet erg goed te zingen is, dus gebruiken we in plaats daarvan mysterieus.

- `Mysterieus` - de waarde van elke variabele waaraan geen waarde is toegewezen, aangegeven met het trefwoord mysterieus
- `Null` - het null-type. Evalueert als gelijk aan nul en gelijk aan false. De trefwoorden `niets`, `nergens`, `niemand` en `weg` worden gedefinieerd als aliassen voor `null`
- `Boolean` - een logische entiteit met twee waarden waar en onwaar.
  `juist`, `ja` en `oke` zijn geldige aliassen voor waar
  `fout`, `nee` en `leugens` zijn geldige aliassen voor onwaar
- `Getal` - Getallen in Levenslied zijn drijvende-kommagetallen met dubbele precisie, opgeslagen volgens de IEEE 754-standaard.
- `String` - Levenslied-strings zijn reeksen van 16-bits geheeltallige waarden zonder teken die UTF-16-code-eenheden vertegenwoordigen. `leeg`, `stil` en `stilte` zijn aliassen voor de lege tekenreeks ("").

### Waarheid

De resultaten van vergelijkingen zijn vaak gebaseerd op een concept dat ‘waarheid’ wordt genoemd. Als de waarde waar is, wordt deze impliciet omgezet in waar. Als het onwaar is, wordt het impliciet omgezet in onwaar.

- Mysterieus - Onwaar
- Null - Onwaar
- Boolean - Waarheid als waar, onwaar als onwaar
- Getal - Indien gelijk aan 0: onwaar. Anders waar.
- String - Waarheid (null is het valse equivalent)

## Letterlijke waarden en toewijzing

Letterlijke tekenreeksen in Levenslied gebruiken dubbele aanhalingstekens.

`"Hallo San Francisco"`
Numerieke letterlijke getallen in Levenslied worden geschreven als decimale getallen

`123`  
`3.141592654`

Toewijzing wordt gedaan door `stop <expressie> in <variabele>` of `laat <variabele> <expressie> wezen`:

- `stop 123 in X`, wordt de waarde 123 aan de variabele X toegewezen
- `stop "Hallo Weert" in de boodschap`, wordt de waarde `'Hallo Weert'` aan de variabele `de boodschap` toegewezen
- `Laat mijn saldo 1000000 wezen`, dan wordt de waarde 1000000 opgeslagen in de variabele `mijn saldo`
- `Laat de overlevenden de dapperen zonder de gevallenen wezen` de gevallenen van de dapperen aftrekken en het resultaat opslaan in de overlevenden

## Verhogen en verlagen

Verhogen en verlagen worden ondersteund door de instructies `Bouw {variable} op` en `Haal {variable} neer`. Als u meer dan één op- of neerwaartse factor in de verklaring optelt, wordt het aantal keren verhoogd of verlaagd als er `op` of `neer` in de verklaring voorkomen. Er kan een komma tussen elke `op` en `neer` staan.

- `Bouw mijn wereld op` verhoogt de waarde die in `mijn wereld` is opgeslagen met 1.
- `Haal de muren neer`, wordt de waarde die in `de muren` is opgeslagen met 1 verlaagd
- `Haal de muren neer, neer` Omlaag verlaagt de waarde die in `de muren` is opgeslagen met 2

## Exploitanten

Levenslied ondersteunt de rekenkundige operatoren `+`, `-`, `*` en `/`. De taal bevat aliassen voor elke operator, zodat u tekstueel aangename uitdrukkingen kunt schrijven.

### Aliassen voor rekenkundige bewerkingen

- optellen `met`
- aftrekken `zonder`
- vermenigvuldiging `keer`, `van`
- deling `verdeelt over`, `boven`

Voorbeelden:

`Stop de passie van jouw hart in mijn handen` - vermenigvuldig `jouw hart` met `de passie` en zet het resultaat in `mijn handen`

`Laat mijn wereld niets zonder jouw liefde wezen` - Initialiseer `mijn wereld` met het resultaat van 0 - `jouw liefde`

`Als de tranen van een kind bestaat uit niets` - controleer of `de tranen` \* `een kind` = 0

`laat mijn gevoelens mijn hoofd boven de wolken wezen` - Deel `mijn hoofd` door `de wolken` en zet het resultaat in `mijn gevoelens`

## Afronden

```
X is 1.2
versterk X
schreeuw X
(toont 2)
```

```
X is 1.2
demp X
schreeuw X
(toont 1)
```

```
De radio is aan. Er klinkt muziek
(initialiseer de radio met 3.266)
Versterk de radio
Zeg de radio
(toont 4)
```

## Poëtische Constantes

### Poëtische Letterlijke Constantes

Een poëtische constante is een enkele regel die bestaat uit de naam van een variabele, het sleutelwoord `is`, of de aliassen `bestaat uit`, `zijn`, `was` of `waren`, en een constante die de waarde aangeeft waarop de variabele zal worden ingesteld.

- `Mijn hart is juist` - initialiseert de variabele mijn hart met de Booleaanse waarde waar
- `Tommy is niemand` - initialiseert de variabele Tommy met de waarde nul met behulp van de alias niemand
- `Tommy is mysterieus` - initialiseert de variabele Tommy met de waarde mysterieus.

### Poëtische Tekst Constantes

Een poëtische tekst toewijzing van een tekenreeks begint met een variabelenaam, gevolgd door een van de trefwoorden `zeggen`, `zegt` of `zeiden`, gevolgd door een enkele spatie. De rest van de regel tot aan de \n-terminator wordt behandeld als een letterlijke tekenreeks zonder aanhalingstekens.

- `Andre zegt Hallo Den Haag!` initialiseerd de variabele `Andre` met de tekst `"Hallo Amsterdam!"`.
- `Den Haag zegt Hallo terug` initialiseerd de variabele `Den Haag` met de tekst `"Hallo terug"`.
- `Jij zegt dat ik te min ben` initialiseerd de variabele `jij` met de tekst `"dat ik te min ben"`

### Poëtische Getal constantes

Een poëtisch getal begint met de naam van een variabele, gevolgd door het trefwoord `is`, of de aliassen `bestaat uit`, `zijn`, `was` of `waren`. Zolang het volgende symbool geen letterlijk woord is, wordt de rest van de regel behandeld als een decimaal getal waarin de waarden van opeenvolgende cijfers worden gegeven door de lengte van de daaropvolgende kale woorden, tot aan het einde van de regel. Om het cijfer nul mogelijk te maken en om het gebrek aan geschikte smartlap-woorden van één en twee letters te compenseren, worden de woordlengtes modulo 10 geparseerd. Een punt (.) geeft een decimaal aan. Met uitzondering van de eerste punt worden alle niet-alfabetische tekens genegeerd.

- `Henk is fantastisch emotionele kunstenaar` initialiseerd `Henk` met de waarde `100`
- `Andre was een man van het volk` initialiseerd `Andre` met de waarde `33334`
- `Mijn dromen waren kil. Achterdocht deed huiveringen tonen` initialiseerd `Mijn dromen` met de waarde `3.1415`
- `Sjaak was zonder` initialiseerd `Sjaak` met de waarde `6`. Hoewel `zonder` een gereserveerd woord is wordt het hier gezien als een letterlijk woord.

Houd er rekening mee dat poëtische letterlijke woorden gereserveerde trefwoorden kunnen bevatten, zoals in dit voorbeeld.
Het koppelteken (-) wordt als een letter geteld – je kunt dus termen gebruiken als ‘alles-omvattend’ (15 letters > 5) en ‘niet-geliefd’ (12 letters > 2) in plaats van dat je aan 12- en 13 moet denken -letterwoorden.
De puntkomma, komma, apostrof en andere niet-alfabetische tekens worden genegeerd.

## Vergelijking

Net als de operator single-is gelijk in Visual Basic en sommige scripttalen, wordt het sleutelwoord `is` in Levenslied verschillend geïnterpreteerd, afhankelijk van of het verschijnt als onderdeel van een instructie of als onderdeel van een expressie. `niet ... is` is de logische ontkenning van het trefwoord `is`.

Vergelijking in Levenslied kan alleen binnen een uitdrukking worden gedaan.

`Tommy is niemand` initialiseert de variabele `Tommy` met de waarde `niemand`
`Als Tommy niemand is`, wordt het volgende blok uitgevoerd als en alleen als de variabele `Tommy` gelijk is aan `niemand`

Vergelijking kan ook worden gedaan met elke alias van `is`:

- `als hij weg is`
- `als de kat mysterieus was`
- `als dromen echt zijn`

ontkenningen kunnen hier ook mee worden gedaan

- `als hij niet weg is`
- `als dromen niet echt zijn`

Levenslied ondersteunt ook de volgende vergelijkingssyntaxis:

- `hoger/groter/sterker/beter is dan` om ‘groter dan’ aan te duiden
- `lager/minder/kleiner/zwakker/slechter dan` om ‘minder dan’ aan te duiden
- `zo hoog/groot/sterk/goed is als` om ‘groter dan of gelijk aan’ aan te duiden
- `zo laag/slecht/klein/zwak als` om ‘kleiner dan of gelijk aan’ aan te duiden

## Logische operaties

Levenslied heeft 4 verschillende logische operatoren die hun operand(en) eerst op basis van waarheid omzetten in een booleaanse waarde.

- `A en B` geven de Conjunctie terug
- `A of B` retourneert de Disjunctie
- `A noch B` retourneert de gezamenlijke ontkenning
- `niet A` retourneert de ontkenning van zijn enige argument.

Alle logische operatoren maken kortsluiting. Dit betekent dat als de evaluatie van het eerste argument aan de operator een resultaat garandeert, het andere argument niet wordt geëvalueerd.

## Uitvoer

Gebruik het trefwoord `zeg` om de waarde van een variabele naar STDOUT te schrijven.

`Zeg Tommy` - voert de in Tommy opgeslagen waarde uit naar STDOUT
Levenslied definieert `schreeuw`, `fluister` en `zing` als aliassen voor `zeg`.

## Flow Control en bloksyntaxis

### Voorwaarden

Voorwaardelijke expressies beginnen met het trefwoord `Als`, gevolgd door een expressie. Als de expressie `true` oplevert, wordt het daaropvolgende codeblok uitgevoerd.

Voor voorwaardelijke expressies evalueren `0`, `mysterieus`, `null`, `false` en de `lege string` allemaal naar `false`, en al het andere naar `true`.

### Lussen

Net als bij de If-instructie wordt een lus aangegeven met het sleutelwoord `Totdat` of `Zolang`, waardoor het volgende codeblok herhaaldelijk wordt uitgevoerd terwijl aan de expressie wordt voldaan:

```
Harm is ontzettende guru
Zolang Harm niet niets is
Fluister "guru"
Haal Harm neer
```

Dat initialiseert Harm met de waarde 14 (met behulp van de letterlijke syntaxis van het poëtische getal) en vervolgens in een lus, waarbij Harm elke keer met 1 wordt verlaagd totdat Harm gelijk is aan nul (dat wil zeggen dat niets onwaar retourneert)

De instructies break en continue werken zoals in de meeste op blokken gebaseerde talen. Levenslied definieert `Doorbreek de cirkel` als een alias voor `break` en `Herbeleef` als een alias voor `continue`.

### Blokken

Een blok in Rockstar begint met een `Als`, `Zolang` of `Totdat`-instructie en wordt afgesloten met een lege regel of het einde van het bestand. EOF beëindigt alle open codeblokken

```
Harm is ontzettende guru
Zolang Harm niet niets is
Fluister het
Haal hem neer
```

## Functies

Functies worden gedeclareerd met een variabelenaam, gevolgd door het trefwoord `neemt` (alias `wil`) en een lijst met argumenten, gescheiden door een van de volgende: `en` en `&`

- `Vermenigvuldigen neemt X en Y`
- `Zoektocht wil Naald en hooiberg`
- `Polly wil een koekje`

De functietekst is een lijst met instructies zonder lege regels. Een lege regel geeft het einde van een functielichaam aan. Functies in Levenslied hebben altijd een retourwaarde, gespecificeerd door het `return`-trefwoord en de alias `geef ... terug` en `stuur ... terug`.

```
(Deze functie telt 8 op bij de invoer en retourneert het resultaat)
Polly wil een koekje
Kaas is heerlijk
Stop een koekje met kaas in je mond
Geef het terug

```

Functies worden aangeroepen met het trefwoord `ontvangt` en moeten minimaal één argument hebben. Meerdere argumenten worden gescheiden door een van de volgende: `,` `&` `en`.
