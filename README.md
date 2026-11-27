# jQuery2 — Vierkanten en rechthoeken

## Wat doet deze oefening?
Een interactieve webpagina met gekleurde vierkanten en rechthoeken. Door te klikken, dubbelklikken of met de muis over bepaalde vlakken te bewegen, gebeurt er iets op de pagina. Daarnaast opent een knop een HTML-dialoogvenster.

## Wat doet elk bestand?

| Bestand | Functie |
| --- | --- |
| `index.html` | Bouwt de pagina: kop, vierkanten, rechthoeken, knop en `<dialog>`. |
| `styles.css` | Bepaalt de afmetingen, randen, opstelling, hover-effecten en het uitzicht van het venster. |
| `script.js` | Regelt de interacties met jQuery en gewone JavaScript. |

## Belangrijke begrippen
- **HTML** geeft betekenis en structuur aan elementen. `id="double"` identificeert precies één vak; `class="vierkant"` kan op meerdere vakken staan.
- **CSS** gebruikt selectors zoals `.vierkant` (klasse) en `#vierkant-ho` (id).
- **jQuery** is een JavaScript-bibliotheek. `$(".vierkant")` selecteert alle elementen met die klasse.
- **`$(function () { ... })`** voert de code pas uit zodra de HTML-structuur beschikbaar is.
- **`.on("click", ...)`** koppelt een gebeurtenis aan een element.
- **`$(this)`** verwijst binnen de gebeurtenisfunctie naar het aangeklikte element.
- **`.hide()`** verbergt het element; **`.removeClass()`** en **`.addClass()`** wisselen kleurklassen.
- **`querySelector("#trailer-button")`** zoekt één element met dat id via gewone JavaScript.
- **`showModal()` / `close()`** openen en sluiten een ingebouwd HTML-dialoogvenster.

## Interacties om zelf te testen
1. Klik op een gewoon vierkant of gewone rechthoek: die verdwijnt.
2. Dubbelklik op het blauwe vak: het wordt paars.
3. Beweeg over het gele vak: het wordt zwart.
4. Beweeg over het groene speciale vak: een hover-transitie vergroot het lichtjes.
5. De tekst van het rode vak verandert naar 'goede dag!'.
6. Klik op 'Lees meer' en daarna 'Sluiten': het dialoogvenster opent en sluit.

## Wat is hersteld?
In het oorspronkelijke bestand werd in JavaScript gezocht naar `#trailer-button`, maar dat element bestond niet in de HTML. Daardoor trad een fout op bij `addEventListener`. Er ontbrak ook sluitlogica. De knop, de HTML-structuur en beide gebeurtenissen zijn gecorrigeerd. Er is **geen** echte trailervideo toegevoegd: het project levert daar geen bron voor.

## Controle en beperkingen
De HTML- en JavaScript-bron is statisch nagekeken. Voor de volledige visuele controle en browserinteracties moet je de pagina openen en de bovenstaande stappen doorlopen. Internet is nodig voor de externe jQuery- en W3.CSS-bestanden.

**Studietip:** probeer eerst te voorspellen welke selector elke interactie aanstuurt, en verander dan zelf één event in `script.js`.
