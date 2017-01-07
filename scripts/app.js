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
                moveAlong = ($("#player-name").val() !== "") && ($("#enemy-name").val() !== "");
                break;
            case "card--robot":
                // change to only be true if a button is selected
                moveAlong = ($(".classButton").hasClass("borderClick"));
                break;
            case "card--battleground":
                moveAlong = ($(".classButton").hasClass("borderClick") === true);
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



    // When the back button clicked, move back a view
    $(".card__back").click(function(e) {
        var previousCard = $(this).attr("previous");
        $(".card").hide();
        $("." + previousCard).show();
    });
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
                        <a class="classButton class__link btn btn--big btn--blue" href="#">
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
                        <a class="classButton class__link btn btn--big btn--blue" href="#">
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

// When a class type button has focus, add a class to it and remove the class when another class type button has focus.
$('.classButton').focus(function(event) {
    var target = $(event.target);
    if(target.hasClass('classButton')) {
        $('.classButton').removeClass('borderClick');
        target.addClass('borderClick');
    } else if (target.parent().hasClass('classButton')) {
        target.parent().addClass('borderClick');
        $('.borderClick').removeClass('borderClick');
    }
})

$('.robotButton').focus(function(event) {
    var target = $(event.target);
    if(target.hasClass('robotButton')) {
        $('.robotButton').removeClass('borderClick');
        target.addClass('borderClick');
    } else if (target.parent().hasClass('robotButton')) {
        target.parent().addClass('borderClick');
        $('.borderClick').removeClass('borderClick');
    }
})
