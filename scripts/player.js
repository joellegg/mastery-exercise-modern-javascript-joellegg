/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Player = function(name) {
  this.class = null;
  this.image = 'images/CuaqI7GWYAAcwSK.png';

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.strength = 90;
  this.intelligence = 90;
  this.image = "images/KenBone.png"
};

Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};
