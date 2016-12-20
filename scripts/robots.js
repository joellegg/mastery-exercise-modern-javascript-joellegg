var BattleDome = BattleDome || {};
BattleDome.BotHall = {};

//  Constructor function for basic player or enemy bot
BattleDome.BotHall.RobotClass = function() {
    this.name = 'Toaster';
    this.healthBonus = 0;
    this.damageBonus = 0;
    this.image = 'http://pre12.deviantart.net/0705/th/pre/i/2013/189/e/2/brave_little_toaster____by_spyro4287-d6cj07k.png';

    this.toString = function() {
        return this.name;
    }
}

// 3 classes:   STAR WARS,     TRANSFORMERS,     MISC
//                - C-3PO         - Optimus       - WALL-E
//                - R2-D2         - Sentinel      - Terminator
//                - BB-8          - Bumblebee     - Dot (Spaceballs)
//                                - Ironhide      - Bicentennial Man

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
    this.image = 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png';
};
BattleDome.BotHall.C3PO.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.R2D2 = function() {
    this.name = 'R2-D2';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = 'http://r2dc.com/files/r2d2.png';
};
BattleDome.BotHall.R2D2.prototype = new BattleDome.BotHall.StarWars();

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
    this.image = 'http://fc07.deviantart.net/fs71/f/2014/341/6/3/imageedit_3_8140918195_by_aoe_optimus_prime-d893bfw.gif';
};
BattleDome.BotHall.Optimus.prototype = new BattleDome.BotHall.Transformers();

BattleDome.BotHall.Bumblebee = function() {
    this.name = 'Bumblebee';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://static3.comicvine.com/uploads/original/11112/111122896/4743210-bumblebee.png';
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

BattleDome.BotHall.Terminator = function() {
    this.name = 'Terminator';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://static.comicvine.com/uploads/original/3/38511/794443-terminator_1.png';
};
BattleDome.BotHall.Terminator.prototype = new BattleDome.BotHall.MiscBots();

BattleDome.BotHall.Dot = function() {
    this.name = 'Dot';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://content.randomenthusiasm.com/bAEoDOS9q.gif';
};
BattleDome.BotHall.Dot.prototype = new BattleDome.BotHall.MiscBots();
