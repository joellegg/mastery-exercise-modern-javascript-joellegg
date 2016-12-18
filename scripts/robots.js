var BattleDome = BattleDome || {};
BattleDome.BotHall = {};

//  Constructor function for player or enemy
BattleDome.BotHall.RobotClass = function() {
    this.name = 'Toaster';
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligence = 0;
    this.image = '';

    this.toString = function() {
        return this.name;
    }
}

// 3 class: Star Wars, Transformers, & Misc
// Star Wars: 3CPO, R2D2, BB-8 vs. B1 Battle Droids, imperial probe droid, AT-AT
// Transformers: Optimus, Bumble Bee, Sentinel Prime & Ironhide vs... Megatron, starscream, schockwave, & galvatron
// Misc: WALL-E, Terminator, Dot (spaceballs), Bicentennial Man vs. Auto (WALL-E), Vanessa Kensington (austin powers), Gort (Day the earth stood still), RoboCop
