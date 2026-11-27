// $ is de jQuery-functie. $(function () {...}) wacht op de HTML-structuur (DOM),
// zodat alle id- en class-selectors daadwerkelijk elementen kunnen vinden.
$(function () {
    // ".vierkant, .rechthoek" kiest twee klassen tegelijk.
    // .not("#read") sluit het venster-paneel uit; .on("click", ...) registreert de klik.
    // De gewone vierkanten en rechthoeken verdwijnen na een klik.
    // #read blijft zichtbaar: anders zou een klik op zijn knop het paneel verbergen.
    $(".vierkant, .rechthoek").not("#read").on("click", function () {
        // this verwijst naar het element waarop de gebeurtenis gebeurde, niet naar alle vakken.
        // $(this) maakt er een jQuery-object van, zodat .hide() werkt.
        $(this).hide();
    });

    // Een dubbelklik is een andere gebeurtenis dan een enkele klik (dblclick versus click).
    // Dubbelklikken vervangt de blauwe W3.CSS-kleurklasse door paars.
    $("#double").on("dblclick", function () {
        // De W3.CSS-kleur komt uit de class-attribuutwaarde; door klassen te wisselen
        // verandert de presentatie zonder dat de HTML opnieuw moet worden opgebouwd.
        $(this).removeClass("w3-blue").addClass("w3-purple");
    });

    // mouseenter wordt uitgevoerd wanneer de muisaanwijzer het element binnenkomt;
    // anders dan :hover blijft de aangepaste class staan nadat de muis vertrekt.
    // De gele tegel wordt zwart wanneer de muis erop komt.
    $("#mouse").on("mouseenter", function () {
        $(this).removeClass("w3-yellow").addClass("w3-black");
    });

    // .text(...) wijzigt de tekstinhoud: geen nieuwe HTML-tags of markup.
    // Pas de tekst van het rode vak aan zodra de pagina geladen is.
    $("#fill-me").text("goede dag!");

    // Vanaf hier gebruiken we gewone JavaScript in plaats van jQuery.
    // document.querySelector("#id") zoekt het eerste element met de opgegeven id.
    // Een <dialog> wordt geopend met showModal() en gesloten met close().
    const trailerButton = document.querySelector("#trailer-button");
    const trailerDialog = document.querySelector("#trailer-dialog");
    const closeButton = document.querySelector("#close-trailer");
    const trailerStatus = document.querySelector("#trailer-status");

    trailerButton.addEventListener("click", function () {
        // textContent vervangt veilig alleen de tekst in de statusparagraaf.
        trailerStatus.textContent = "Het infovenster is geopend.";
        // showModal() toont het venster bovenop de pagina en activeert de backdrop.
        trailerDialog.showModal();
    });

    closeButton.addEventListener("click", function () {
        // Sluit hetzelfde dialog-element dat eerder met showModal() werd geopend.
        trailerDialog.close();
    });
});
