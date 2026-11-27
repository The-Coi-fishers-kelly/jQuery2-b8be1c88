// Wacht tot de HTML-pagina en alle elementen geladen zijn.
$(function () {
    // De gewone vierkanten en rechthoeken verdwijnen na een klik.
    // #read blijft zichtbaar: anders zou een klik op zijn knop het paneel verbergen.
    $(".vierkant, .rechthoek").not("#read").on("click", function () {
        $(this).hide();
    });

    // Dubbelklikken vervangt de blauwe W3.CSS-kleurklasse door paars.
    $("#double").on("dblclick", function () {
        $(this).removeClass("w3-blue").addClass("w3-purple");
    });

    // De gele tegel wordt zwart wanneer de muis erop komt.
    $("#mouse").on("mouseenter", function () {
        $(this).removeClass("w3-yellow").addClass("w3-black");
    });

    // Pas de tekst van het rode vak aan zodra de pagina geladen is.
    $("#fill-me").text("goede dag!");

    // Een <dialog> wordt geopend met showModal() en gesloten met close().
    const trailerButton = document.querySelector("#trailer-button");
    const trailerDialog = document.querySelector("#trailer-dialog");
    const closeButton = document.querySelector("#close-trailer");
    const trailerStatus = document.querySelector("#trailer-status");

    trailerButton.addEventListener("click", function () {
        trailerStatus.textContent = "Het infovenster is geopend.";
        trailerDialog.showModal();
    });

    closeButton.addEventListener("click", function () {
        trailerDialog.close();
    });
});
