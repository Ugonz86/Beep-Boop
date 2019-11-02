$(document).ready(function() {

  $("form#beepBoopGenerator").submit(function(event) {
    event.preventDefault();
    var name = $("#nameInput").val(); //The user input.
    var userInput = $("#numberInput").val(); //The number the user inputs in the UI form.

//
    var beepBoop = [];
      for (var i = 0; i <= userInput; i++) {
        if (i.toString().indexOf('3') > -1) {
          $("#list").append("<li>I'm afraid I can't do that. Try again!</li>");
          // beepBoop[i] = "I'm afraid I can't do that. Try again!";
        }
        else if (i.toString().indexOf('2') > -1) {
          $("#list").append("<li>Boop!</li>");
          // beepBoop[i] = "Boop";
        }
        else if (i.toString().indexOf('1') > -1) {
          $("#list").append("<li>Beep!</li>");
          // beepBoop[i] = "Beep";
        }
        else {
          $("#list").append("<li> " + i + " </li>");
          // beepBoop[i] = i;
        }
      }
      // console.log(beepBoop); //testing, testing.

      //When the user submits a number, the following hides the div where the user form is located and then it shows the result div.
      $("#beepBoop").hide();
      // $(".result").text($("#nameInput").val());
      $("#nameInput").text(name);
      $(".result").show();
  });

  //This function takes the user name which will be display with the results for UX personalization. Also hides its div and then shows the next one.
  $("#nameButton").click(function() {
    $("#nameDiv").hide("fadeOut");
    $("#beepBoop").fadeIn("slow");
  });
});
