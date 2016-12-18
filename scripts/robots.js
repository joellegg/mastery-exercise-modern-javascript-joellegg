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

// 3 classes: STAR WARS,     TRANSFORMERS,     MISC
//              - C-3PO         - Optimus       - WALL-E
//              - R2-D2         - Sentinel      - Terminator
//              - BB-8          - Bumblebee     - Dot (Spaceballs)
//                              - Ironhide      - Bicentennial Man

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
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 10;
    this.image = '';
};
BattleDome.BotHall.C3PO.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.R2D2 = function() {
    this.name = 'R2-D2';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = '';
};
BattleDome.BotHall.R2D2.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.BB8 = function() {
    this.name = 'BB-8';
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 30;
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
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.BotHall.Optimus.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Sentinel = function() {
    this.name = 'Sentinel Prime';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = '';
};
BattleDome.BotHall.Sentinel.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Ironhide = function() {
    this.name = 'Ironhide';
    this.healthBonus = this.healthBonus + 40;
    this.damageBonus = this.damageBonus + 10;
    this.image = '';
};
BattleDome.BotHall.Ironhide.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Bumblebee = function() {
    this.name = 'Bumblebee';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.BotHall.Bumblebee.prototype = new BattleDome.BotHall.Transformers();

/////////////////////
//  Miscellaneous  //
/////////////////////
BattleDome.BotHall.MiscBots = function() {
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 10;
};
BattleDome.BotHall.MiscBots.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.WallE = function() {
    this.name = 'WALL-E';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.BotHall.WallE.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.Terminator = function() {
    this.name = 'Terminator';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.BotHall.Terminator.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.Dot = function() {
    this.name = 'Dot';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.BotHall.Dot.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.BicentennialMan = function() {
    this.name = 'Bicentennial Man';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.BotHall.BicentennialMan.prototype = new BattleDome.BotHall.MiscBots();
