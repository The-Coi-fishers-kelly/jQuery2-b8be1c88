$(".vierkant, .rechthoek").click(function() {
    $(this).hide();
})

$("#double").dblclick(function() {
    $(this).removeClass("w3-blue").addClass("w3-purple")
})

$("#mouse").mouseenter(function() {
  $(this).removeClass("w3-yellow").addClass("w3-black")
});