let player = {};

// Show the correct html sections
$(document).ready(function() {
    /* Show the initial view that accepts player name */
    $("#player-setup").show();

    // When any button with card__link class is clicked, move on to the next view.
    $(".card__link").click(function(e) {
        var nextCard = $(this).attr("next");
        var moveAlong = false;

        switch (nextCard) {
            case "card--battleground":
                // add condition to require name, enemy name, & select value for player and enemy;
                moveAlong = ($("#player-name").val() !== "") && ($("#enemy-name").val() !== "") && ($('.robotSelection').find(':selected').text() !== 'SELECT YOUR ROBOT') && ($('.enemySelection').find(':selected').text() !== 'CHOOSE YOUR ENEMY');
                break;
        }

        if (moveAlong) {
            $(".card").hide();
            $("." + nextCard).show();
        }

        //If no name, robot, enemy name, or enemy robot selected page will not advance

        if (moveAlong === false && ($("#player-name").val() == "")) {
            alert('Please name your robot');
        } if (moveAlong === false && ($("#enemy-name").val() == "")) {
            alert("Please name your enemy");
        } if (moveAlong === false && $('.robotSelection').find(':selected').text() == 'SELECT YOUR ROBOT') {
            alert("Please select your robot")
        } if (moveAlong === false && $('.enemySelection').find(':selected').text() == 'CHOOSE YOUR ENEMY') {
            alert("Please select your enemy")
        }

    });

    // When the back button clicked, move back a view

    $(".card__back").click(function(e) {
        var previousCard = $(this).attr("previous");
        $(".card").hide();
        $("." + previousCard).show();
    });
});

////////////////////////////
///    Event Listeners   ///
////////////////////////////

$("#doBattle").click(function(e) {
    // assign player a basic robot
    playerName = $('#player-name')[0].value;
    player = new BattleDome.BotHall.RobotClass(playerName);
    console.log(player)
})
