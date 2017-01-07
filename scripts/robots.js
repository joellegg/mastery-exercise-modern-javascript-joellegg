<<<<<<< HEAD
var BattleDome = BattleDome || {};
BattleDome.BotHall = {};

//  Base robot function
BattleDome.BotHall.RobotClass = function(name) {
    this.name = name;
    this.robot = 'Toaster';
=======
//  Constructor function for basic player or enemy bot
RobotClass = function() {
    this.name = 'Toaster';
>>>>>>> quiz
    this.healthBonus = 0;
    this.damageBonus = 0;
    this.image = 'http://pre12.deviantart.net/0705/th/pre/i/2013/189/e/2/brave_little_toaster____by_spyro4287-d6cj07k.png';
}

// 3 classes:   STAR WARS,     TRANSFORMERS,     MISC
<<<<<<< HEAD
//                - C-3PO         - Optimus       - Dot (Spaceballs)
//                - R2-D2         - Bumblebee     - Terminator

//////////////////
/// STAR WARS  ///
//////////////////
BattleDome.BotHall.StarWars = function() {
    this.healthBonus = null;
    this.damageBonus = null;
    this.uniqueProperty = 'starWarsCharacter';
=======
//                - C-3PO         - Optimus       - WALL-E
//                - R2-D2         - Sentinel      - Terminator
//                - BB-8          - Bumblebee     - Dot (Spaceballs)
//                                - Ironhide      - Bicentennial Man
let starwars = ['C-3PO', 'R2-D2', 'BB-8'];
let transformers = ['Optimus', 'Sentinel', 'Bumblebee', 'Ironhide'];
let misc = ['WALL-E', 'Terminator', 'Dot', 'Bicentennial Man']
//////////////////
/// STAR WARS  ///
//////////////////
StarWars = function() {
    this.healthBonus = 20;
    this.damageBonus = 10;
>>>>>>> quiz
};
StarWars.prototype = new RobotClass();

<<<<<<< HEAD
BattleDome.BotHall.C3PO = function(name) {
    this.name = name;
    this.robot = 'C-3PO';
    this.healthBonus = Math.round(Math.random() * (90 - 60) + 60);
    this.damageBonus = Math.round(Math.random() * (20 - 10) + 10);
=======
C3PO = function() {
    this.name = 'C-3PO';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 10;
>>>>>>> quiz
    this.image = 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png';
};
C3PO.prototype = new StarWars();

<<<<<<< HEAD
BattleDome.BotHall.R2D2 = function(name) {
    this.name = name;
    this.robot = 'R2-D2';
    this.healthBonus = Math.round(Math.random() * (140 - 100) + 100);
    this.damageBonus = Math.round(Math.random() * (15 - 5) + 5);
=======
R2D2 = function() {
    this.name = 'R2-D2';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
>>>>>>> quiz
    this.image = 'http://r2dc.com/files/r2d2.png';
};
R2D2.prototype = new StarWars();

<<<<<<< HEAD
//////////////////////
///  Transformers  ///
//////////////////////
BattleDome.BotHall.Transformers = function() {
    this.healthBonus = null;
    this.damageBonus = null;
    this.uniqueProperty = 'transformersCharacter';
=======
BB8 = function() {
    this.name = 'BB-8';
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'https://staticshop.o2.co.uk/product/images/star-wars-bb-8-remote-controlled-robot-white_sku-header.png?cb=a9d97ad69428ef8405b15592c176e8d1';
};
BB8.prototype = new StarWars();

//////////////////////
///  Transformers  ///
//////////////////////
Transformers = function() {
    this.healthBonus = 30;
    this.damageBonus = 20;
>>>>>>> quiz
};
Transformers.prototype = new RobotClass();

<<<<<<< HEAD
BattleDome.BotHall.Optimus = function(name) {
    this.name = name;
    this.robot = 'Optimus Prime';
    this.healthBonus = Math.round(Math.random() * (100 - 70) + 70);
    this.damageBonus = Math.round(Math.random() * (25 - 15) + 15);
=======
Optimus = function() {
    this.name = 'Optimus Prime';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
>>>>>>> quiz
    this.image = 'http://fc07.deviantart.net/fs71/f/2014/341/6/3/imageedit_3_8140918195_by_aoe_optimus_prime-d893bfw.gif';
};
Optimus.prototype = new Transformers();

<<<<<<< HEAD
BattleDome.BotHall.Bumblebee = function(name) {
    this.name = name;
    this.robot = 'Bumblebee';
    this.healthBonus = Math.round(Math.random() * (110 - 70) + 70)
    this.damageBonus = Math.round(Math.random() * (20 - 10) + 10);
=======
Sentinel = function() {
    this.name = 'Sentinel Prime';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = 'http://static.comicvine.com/uploads/original/11116/111163466/4714598-2070123751-27247.png';
};
Sentinel.prototype = new Transformers();

Ironhide = function() {
    this.name = 'Ironhide';
    this.healthBonus = this.healthBonus + 40;
    this.damageBonus = this.damageBonus + 10;
    this.image = 'http://vignette2.wikia.nocookie.net/deathbattlefanon/images/a/a8/Ironhide.png/revision/latest/scale-to-width-down/185?cb=20160703155634';
};
Ironhide.prototype = new Transformers();

Bumblebee = function() {
    this.name = 'Bumblebee';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
>>>>>>> quiz
    this.image = 'http://static3.comicvine.com/uploads/original/11112/111122896/4743210-bumblebee.png';
};
Bumblebee.prototype = new Transformers();

/////////////////////
//  Miscellaneous  //
/////////////////////
<<<<<<< HEAD
BattleDome.BotHall.MiscBots = function() {
    this.healthBonus = null;
    this.damageBonus = null;
    this.uniqueProperty = 'badAssery';
=======
MiscBots = function() {
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 10;
>>>>>>> quiz
};
MiscBots.prototype = new RobotClass();

<<<<<<< HEAD
BattleDome.BotHall.Terminator = function(name) {
    this.name = name;
    this.robot = 'Terminator';
    this.healthBonus = Math.round(Math.random() * (130 - 80) + 80);
    this.damageBonus = Math.round(Math.random() * (20 - 15) + 15);
=======
WallE = function() {
    this.name = 'WALL-E';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://vignette2.wikia.nocookie.net/disney/images/2/2b/Wall-E.png/revision/latest?cb=20151002192237';
};
WallE.prototype = new MiscBots();

Terminator = function() {
    this.name = 'Terminator';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
>>>>>>> quiz
    this.image = 'http://static.comicvine.com/uploads/original/3/38511/794443-terminator_1.png';
};
Terminator.prototype = new MiscBots();

<<<<<<< HEAD
BattleDome.BotHall.Dot = function(name) {
    this.name = name;
    this.robot = 'Dot';
    this.healthBonus = Math.round(Math.random() * (90 - 60) + 60);
    this.damageBonus = Math.round(Math.random() * (20 - 10) + 10);
    this.image = 'http://content.randomenthusiasm.com/bAEoDOS9q.gif';
};
BattleDome.BotHall.Dot.prototype = new BattleDome.BotHall.MiscBots();
=======
Dot = function() {
    this.name = 'Dot';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://content.randomenthusiasm.com/bAEoDOS9q.gif';
};
Dot.prototype = new MiscBots();

BicentennialMan = function() {
    this.name = 'Bicentennial Man';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://www.criticalcommons.org/Members/ccManager/clips/bimanrobotlogic.mp4/thumbnailImage';
};
BicentennialMan.prototype = new MiscBots();
>>>>>>> quiz
