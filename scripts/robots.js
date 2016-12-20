var BattleDome = BattleDome || {};
BattleDome.BotHall = {};

//  Base robot function
BattleDome.BotHall.RobotClass = function(name) {
    this.name = name;
    this.robot = 'Toaster';
    this.healthBonus = 0;
    this.damageBonus = 0;
    this.image = 'http://pre12.deviantart.net/0705/th/pre/i/2013/189/e/2/brave_little_toaster____by_spyro4287-d6cj07k.png';

    this.toString = function() {
        return this.name;
    }
}

// 3 classes:   STAR WARS,     TRANSFORMERS,     MISC
//                - C-3PO         - Optimus       - Dot (Spaceballs)
//                - R2-D2         - Bumblebee     - Terminator

//////////////////
/// STAR WARS  ///
//////////////////
BattleDome.BotHall.StarWars = function() {
    this.healthBonus = null;
    this.damageBonus = null;
    this.uniqueProperty = 'starWarsCharacter';
};
BattleDome.BotHall.StarWars.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.C3PO = function(name) {
    this.name = name;
    this.robot = 'C-3PO';
    this.healthBonus = Math.random() * (90 - 60) + 60;
    this.damageBonus = Math.random() * (20 - 10) + 10;
    this.image = 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png';
};
BattleDome.BotHall.C3PO.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.R2D2 = function(name) {
    this.name = name;
    this.robot = 'R2-D2';
    this.healthBonus = Math.random() * (140 - 100) + 100;
    this.damageBonus = Math.random() * (15 - 5) + 5;
    this.image = 'http://r2dc.com/files/r2d2.png';
};
BattleDome.BotHall.R2D2.prototype = new BattleDome.BotHall.StarWars();

//////////////////////
///  Transformers  ///
//////////////////////
BattleDome.BotHall.Transformers = function() {
    this.healthBonus = null;
    this.damageBonus = null;
    this.uniqueProperty = 'transformersCharacter';
};
BattleDome.BotHall.Transformers.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.Optimus = function(name) {
    this.name = name;
    this.robot = 'Optimus Prime';
    this.healthBonus = Math.random() * (100 - 70) + 70;
    this.damageBonus = Math.random() * (25 - 15) + 15;
    this.image = 'http://fc07.deviantart.net/fs71/f/2014/341/6/3/imageedit_3_8140918195_by_aoe_optimus_prime-d893bfw.gif';
};
BattleDome.BotHall.Optimus.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Bumblebee = function(name) {
    this.name = name;
    this.robot = 'Bumblebee';
    this.healthBonus = Math.random() * (110 - 70) + 70;
    this.damageBonus = Math.random() * (20 - 10) + 10;
    this.image = 'http://static3.comicvine.com/uploads/original/11112/111122896/4743210-bumblebee.png';
};
BattleDome.BotHall.Bumblebee.prototype = new BattleDome.BotHall.Transformers();

/////////////////////
//  Miscellaneous  //
/////////////////////
BattleDome.BotHall.MiscBots = function() {
    this.healthBonus = null;
    this.damageBonus = null;
    this.uniqueProperty = 'badAssery';
};
BattleDome.BotHall.MiscBots.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.Terminator = function(name) {
    this.name = name;
    this.robot = 'Terminator';
    this.healthBonus = Math.random() * (130 - 80) + 80;
    this.damageBonus = Math.random() * (20 - 15) + 15;
    this.image = 'http://static.comicvine.com/uploads/original/3/38511/794443-terminator_1.png';
};
BattleDome.BotHall.Terminator.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.Dot = function(name) {
    this.name = name;
    this.robot = 'Dot';
    this.healthBonus = Math.random() * (90 - 60) + 60;
    this.damageBonus = Math.random() * (20 - 10) + 10;
    this.image = 'http://content.randomenthusiasm.com/bAEoDOS9q.gif';
};
BattleDome.BotHall.Dot.prototype = new BattleDome.BotHall.MiscBots();
