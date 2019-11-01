var userInput = 5;


$(document).ready(function() {

  $("form#beepBoopGenerator").submit(function(event) {
    event.preventDefault();
    var numbers = [];
      for (var i = 0; i <= userInput; i++) {
        numbers[i] = i;
      }
      console.log(numbers);

      $("#beepBoop").hide();
      $(".result").text($("#nameInput").val() + ", I'm afraid I can't do that. Try again!");
      $(".result").show();

  });
  $("#nameButton").click(function() {
    $("#nameDiv").hide("fadeOut");
    $("#beepBoop").fadeIn("slow");
  });
});
