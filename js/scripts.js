$(document).ready(function() {

  $("form#beepBoopGenerator").submit(function(event) {
    event.preventDefault();
    var userInput = $("#numberInput").val();
    var beepBoop = [];
      for (var i = 0; i <= userInput; i++) {
        if (i.toString().indexOf('3') > -1) {
          beepBoop[i] = "I'm afraid I can't do that. Try again!";
        }
        else if (i.toString().indexOf('2') > -1) {
          beepBoop[i] = "Boop";
        }
        else if (i.toString().indexOf('1') > -1) {
          beepBoop[i] = "Beep";
        }
        else {
          beepBoop[i] = i;
        }
      }

      console.log(beepBoop);

      $("#beepBoop").hide();
      $(".result").text($("#nameInput").val());
      $(".result").show();

  });
  $("#nameButton").click(function() {
    $("#nameDiv").hide("fadeOut");
    $("#beepBoop").fadeIn("slow");
  });
});
