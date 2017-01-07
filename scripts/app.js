let player = {};
let enemy = {};
let moveAlong;

/* Show the initial view that accepts player name */
$("#player-setup").show();

// When any button with card__link class is clicked, move on to the next view.
$(".card__link").click(function(e) {
    let nextCard = $(this).attr("next");
    moveAlong = false;

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


//////////////////////////////////////////////////
///   Show player options based on selection   ///
//////////////////////////////////////////////////

$('.classButton').on('click', function(e) {
    let robots = '';
    if (e.target.innerText === 'STAR WARS') {
        $('#robotSelection').html();
        for (let i = 0; i < starwars.length; i++) {
            robots +=`
                    <div class="card__button col-sm-4">
                        <a class="robotButton class__link btn btn--big btn--blue" href="#">
                            <span class="btn__prompt">></span>
                            <span class="btn__text">${starwars[i]}</span>
                        </a>
                    </div>`
        }
        $('#robotSelection').html(robots);
    }
    if (e.target.innerText === 'TRANSFORMERS') {
        $('#robotSelection').html();
        for (let i = 0; i < transformers.length; i++) {
            robots +=`
                    <div class="card__button col-sm-4">
                        <a class="robotButton class__link btn btn--big btn--blue" href="#">
                            <span class="btn__prompt">></span>
                            <span class="btn__text">${transformers[i]}</span>
                        </a>
                    </div>`
        }
        $('#robotSelection').html(robots);
    }
    if (e.target.innerText === 'MISC') {
        $('#robotSelection').html();
        for (let i = 0; i < misc.length; i++) {
            robots +=`
                    <div class="card__button col-sm-4">
                        <a class="robotButton class__link btn btn--big btn--blue" href="#">
                            <span class="btn__prompt">></span>
                            <span class="btn__text">${misc[i]}</span>
                        </a>
                    </div>`
        }
        $('#robotSelection').html(robots);
    }
})

/////////////////////////////
///      Add Player       ///
/////////////////////////////


////////////////////////////
///    Event Listeners   ///
////////////////////////////

$("#doBattle").click(function() {
    // will load player and enemy if moveAlong is true; moveAlong true means all fields are selected;
    if (moveAlong) {
        // get player name
        playerName = $('#player-name')[0].value;
        enemyName = $('#enemy-name')[0].value;

        // get players robot selection
        playerSelection = $('.robotSelection').find(':selected').val();
        player = new BattleDome.BotHall[playerSelection](playerName);

        // get enemy robot selection
        enemySelection = $('.enemySelection').find(':selected').val();
        enemy = new BattleDome.BotHall[enemySelection](enemyName)

    }
    loadPlayer();
})

// event listener on attack button
$('#attackBttn').click(function() {
    attackEachOther()

// When a class type button has focus, add a class to it and remove the class when another class type button has focus.
$('.classButton').focus(function(event) {
    var target = $(event.target);
    console.log('yes');
    if(target.hasClass('classButton')) {
        $('.classButton').removeClass('borderClick');
        target.addClass('borderClick');
    } else if (target.parent().hasClass('classButton')) {
        target.parent().addClass('borderClick');
        $('.borderClick').removeClass('borderClick');
    }
});

$('.robotButton').focus(function(event) {
    var target = event.target;
    console.log('yes again');
    if(target.hasClass('robotButton')) {
        $('.robotButton').removeClass('borderClick');
        $(target).addClass('borderClick');
    } else if (target.parent().hasClass('robotButton')) {
        $(target).parent().addClass('borderClick');
        $('.borderClick').removeClass('borderClick');
    }
});
