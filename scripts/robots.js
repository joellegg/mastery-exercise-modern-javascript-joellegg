var BattleDome = BattleDome || {};
BattleDome.BotHall = {};

//  Constructor function for basic player or enemy bot
BattleDome.BotHall.RobotClass = function() {
    this.name = 'Toaster';
    this.healthBonus = 0;
    this.damageBonus = 0;
    this.image = '';

    this.toString = function() {
        return this.name;
    }
}

// 3 classes: Star Wars, Transformers, & Misc
// Star Wars: 3CPO, R2D2, BB-8 vs. B1 Battle Droids, imperial probe droid, AT-AT
// Transformers: Optimus, Bumble Bee, Sentinel Prime & Ironhide vs... Megatron, starscream, schockwave, & galvatron
// Misc: WALL-E, Terminator, Dot (spaceballs), Bicentennial Man vs. Auto (WALL-E), Vanessa Kensington (austin powers), Gort (Day the earth stood still), RoboCop

//////////////////
/// STAR WARS  ///
//////////////////
BattleDome.BotHall.StarWars = function() {
    this.healthBonus = 20;
    this.damageBonus = 10;
};
BattleDome.BotHall.StarWars.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.C3PO = function() {
    this.name = 'C-3PO';
    this.healthBonus = 20;
    this.damageBonus = 10;
    this.image = '';
};
BattleDome.BotHall.C3PO.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.R2D2 = function() {
    this.name = 'R2-D2';
    this.healthBonus = 20;
    this.damageBonus = 20;
    this.image = '';
};
BattleDome.BotHall.R2D2.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.BB8 = function() {
    this.name = 'BB-8';
    this.healthBonus = 10;
    this.damageBonus = 30;
    this.image = '';
};
BattleDome.BotHall.BB8.prototype = new BattleDome.BotHall.StarWars();

//////////////////////
///  Transformers  ///
//////////////////////
BattleDome.BotHall.Transformers = function() {
    this.healthBonus = 30;
    this.damageBonus = 20;
};
BattleDome.BotHall.Transformers.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.Optimus = function() {
    this.name = 'Optimus Prime';
    this.healthBonus = 20;
    this.damageBonus = 30;
    this.image = '';
};
BattleDome.BotHall.Optimus.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Sentinel = function() {
    this.name = 'Sentinel Prime';
    this.healthBonus = 20;
    this.damageBonus = 20;
    this.image = '';
};
BattleDome.BotHall.Sentinel.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Ironhide = function() {
    this.name = 'Ironhide';
    this.healthBonus = 40;
    this.damageBonus = 10;
    this.image = '';
};
BattleDome.BotHall.Ironhide.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Bumblebee = function() {
    this.name = 'Bumblebee';
    this.healthBonus = 20;
    this.damageBonus = 30;
    this.image = '';
};
BattleDome.BotHall.Bumblebee.prototype = new BattleDome.BotHall.Transformers();

/////////////////////
//  Miscellaneous  //
/////////////////////
BattleDome.BotHall.MiscBots = function() {
    this.healthBonus = 10;
    this.damageBonus = 10;
};
BattleDome.BotHall.MiscBots.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.WallE = function() {
    this.name = 'WALL-E';
    this.healthBonus = 20;
    this.damageBonus = 30;
    this.image = '';
};
BattleDome.BotHall.WallE.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.Terminator = function() {
    this.name = 'Terminator';
    this.healthBonus = 20;
    this.damageBonus = 30;
    this.image = '';
};
BattleDome.BotHall.Terminator.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.Dot = function() {
    this.name = 'Dot';
    this.healthBonus = 20;
    this.damageBonus = 30;
    this.image = '';
};
BattleDome.BotHall.Dot.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.BicentennialMan = function() {
    this.name = 'Bicentennial Man';
    this.healthBonus = 20;
    this.damageBonus = 30;
    this.image = '';
};
BattleDome.BotHall.BicentennialMan.prototype = new BattleDome.BotHall.MiscBots();
