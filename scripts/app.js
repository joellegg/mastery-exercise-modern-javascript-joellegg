$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--path":
        moveAlong = ($("#"))
      case "card--weapon":
        moveAlong = ($(".classButton").hasClass("borderClick") ===  true);
        break;
      case "card--battleground":
        moveAlong = ($(".weaponButton").hasClass("borderClick") === true);
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }

    //If no name, class or weapon selected and user tries to advance to next page, an alert will pop up.

    if (moveAlong === false && ($("#player-name").val() == "")) {
      alert('Hey listen! I\'d call you by your name, but I don\'t know it!')
    } else if
      (moveAlong === false && ($(".classButton").hasClass("borderClick") === false)) {
      alert('I personally recommend you choose to be surprised.')
    } else if
      (moveAlong === false &&            ($(".weaponButton").hasClass("borderClick") === false)) {
      alert('It\'s dangerous to go out alone! Take a weapon!')
    }

  });

  // If the enter key is pressed on the input field, it will advance to the next page

  $("#player-name").keypress(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;


    if (($("#player-name").val() !== "" && e.key === 'Enter')) {
      moveAlong = true;
      nextCard = 'card--class'
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }

    // If no name is inserted and the enter is pressed an alert will pop up.

    if (moveAlong === false && (e.key === "Enter")) {
      alert('Hey listen! I\'d call you by your name, but I don\'t know it!')
    };

  });



  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
});
