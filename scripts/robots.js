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

// 3 class: Star Wars, Transformers, & Misc
// Star Wars: 3CPO, R2D2, BB-8 vs. B1 Battle Droids, imperial probe droid, AT-AT
// Transformers: Optimus, Bumble Bee, Sentinel Prime & Ironhide vs... Megatron, starscream, schockwave, & galvatron
// Misc: WALL-E, Terminator, Dot (spaceballs), Bicentennial Man vs. Auto (WALL-E), Vanessa Kensington (austin powers), Gort (Day the earth stood still), RoboCop

// STAR WARS
BattleDome.BotHall.StarWars = function() {
    this.healthBonus = 20;
    this.damageBonus = 10;
};
BattleDome.BotHall.StarWars.prototype = new BattleDome.BotHall.RobotClass();

BattleDome.BotHall.C3PO = function() {
    this.name = 'C-3PO'
    this.healthBonus = 20;
    this.damageBonus = 10;
    this.image = '';
};
BattleDome.BotHall.C3PO.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.R2D2 = function() {
    this.name = 'R2-D2'
    this.healthBonus = 20;
    this.damageBonus = 20;
    this.image = '';
};
BattleDome.BotHall.R2D2.prototype = new BattleDome.BotHall.StarWars();

BattleDome.BotHall.BB8 = function() {
    this.name = 'BB-8'
    this.healthBonus = 10;
    this.damageBonus = 30;
};
BattleDome.BotHall.BB8.prototype = new BattleDome.BotHall.StarWars();
