// --------------------------------------------------------------------------------- //
let playerMaxHealth;
let enemyMaxHealth;


// hide the results div
$('#battleResults').hide()

// run loadPlayer function once battle button is pressed in app.js
function loadPlayer () {
    $('#playerSelection').html(player.robot);
    $('#playerImage').attr('src', player.image);

    playerMaxHealth = player.healthBonus;
    loadEnemy();
}


function loadEnemy() {
    $('#enemySelection').html(enemy.robot);
    $('#enemyImage').attr('src', enemy.image);

    enemyMaxHealth = enemy.healthBonus;
    removeClassColors();

    animateImages();

    var playerHealth = player.healthBonus;
    loadPlayerStats(playerHealth);
}

function animateImages () {
    for (let i = 0; i < 50; i++) {
        $('#playerImage').animate({ width: "90%", height: 220} , 1500);
        $('#playerImage').animate({ width: "100%", height: 250} , 1500);
        $('#enemyImage').animate({ width: "90%", height: 220} , 1500);
        $('#enemyImage').animate({ width: "100%", height: 250} , 1500);
    }
}

function loadPlayerStats(health) {
    let playerHealthNow = ((health/playerMaxHealth) * 100);
    let playerHealthLocal = $('#playerHealth');
    playerHealthLocal.attr('style', 'width: ' + playerHealthNow + '%');

    addColorClass(playerHealthNow, playerHealthLocal);

    let enemyHealth = enemy.healthBonus;
    loadEnemyStats(enemyHealth);
}

function loadEnemyStats(health) {
    let enemyHealthNow = ((health/enemyMaxHealth) * 100);
    let enemyHealthHTML = $('#enemyHealth');
    enemyHealthHTML.attr('style', 'width: ' + enemyHealthNow + '%');

    addColorClass(enemyHealthNow, enemyHealthHTML);
}

function removeClassColors() {
    // if ($('body').hasClass())
    $('body').find('.progress-bar-success').removeClass('progress-bar-success');
    $('body').find('.progress-bar-warning').removeClass('progress-bar-warning');
    $('body').find('.progress-bar-danger').removeClass('progress-bar-danger');
}

function addColorClass(healthNow, healthHTML) {
    if ((healthNow) > 50) {
        healthHTML.addClass('progress-bar-success')
    } else if ((healthNow) > 25) {
        healthHTML.addClass('progress-bar-warning')
    } else {
        healthHTML.addClass('progress-bar-danger')
    }
}

// Function to calculate damage on attack button click
function attackEachOther() {
    // Hero attacks first
        // Remove attack damage from enemy health
        enemy.healthBonus -= player.damageBonus;

        // Display enemy's health on DOM
        loadEnemyStats(enemy.healthBonus);

    // Check if enemy is dead
        if (enemy.healthBonus <= 0) {
            // If enemy is dead hero wins - end game
            $('#battleResults').show().addClass('greenBorder');
            $('#battleResults').html(
                `<h1>Results:</h1>
                  <h3>${player.name}'s robot,</h3>
                  <h3>${player.robot},</h3>
                  <h3>has defeated</h3>
                  <h3>${enemy.name}'s robot,</h3>
                  <h3>${enemy.robot}</h3>`
                );
            $('#attackBttn').hide()
            $('#battleBackButtonDiv').before(`<a href="http://localhost:8080"><button>Restart Game?</button></a>`)
        }

    // Enemy attacks
        // Remove attack damage from hero health
        player.healthBonus -= enemy.damageBonus;

        // display heroes health on DOM
        loadPlayerStats(player.healthBonus);

    // Check if Hero is dead
        if (player.healthBonus <= 0){
            // if hero is dead enemy wins - end game
            $('#battleResults').show().addClass('redBorder');
            $('#battleResults').html(
                `<h1>Results:</h1>
                  <h3>${player.name}'s robot,</h3>
                  <h3>${player.robot},</h3>
                  <h3>has been defeated by</h3>
                  <h3>${enemy.name}'s robot,</h3>
                  <h3>${enemy.robot}</h3>`
                );
            $('#attackBttn').hide();
            $('#battleBackButtonDiv').before(`<a href="http://localhost:8080"><button>Restart Game?</button></a>`)

        }
}
