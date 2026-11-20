$(".vierkant, .rechthoek").click(function() {
    $(this).hide();
})

$("#double").dblclick(function() {
    $(this).removeClass("w3-blue").addClass("w3-purple")
})

$("#mouse").mouseenter(function() {
  $(this).removeClass("w3-yellow").addClass("w3-black")
});

$("#fill-me").text("goede dag!");

const read = document.querySelector("#trailer-button");

const trailerDialog = document.querySelector("#trailer-dialog");

const closeButton = document.querySelector("#close-trailer");

const trailerVideo = document.querySelector("#trailer-video");

const trailerStatus = document.querySelector("#trailer-status");


read.addEventListener("click", () => {

    trailerDialog.showModal();

    trailerStatus.textContent = "Trailer window opened!";

});