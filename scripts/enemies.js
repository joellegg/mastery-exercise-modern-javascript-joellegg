// 3 classes:   STAR WARS,               TRANSFORMERS,           MISC
//              - B1 Battle Droids          - Megatron            - Auto (WALL-E)
//              - Imperial Probe Droids     - Starscream          - Vanessa Kensington (Austin Powers)
//              - AT-AT                     - Shockwave           - Gort (Day the Earth Stood Still)
//                                          - galvatron           - Robo Cop

/////////////////////////
/// STAR WARS ENEMIES ///
/////////////////////////
BattleDome.Combatants.StarWars = function() {
    this.healthBonus = 20;
    this.damageBonus = 10;
};
BattleDome.Combatants.StarWars.prototype = new BattleDome.Combatants.RobotClass();

BattleDome.Combatants.B1BattleDroid = function() {
    this.name = 'B1 Battle Droid';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 10;
    this.image = '';
};
BattleDome.Combatants.B1BattleDroid.prototype = new BattleDome.Combatants.StarWars();

BattleDome.Combatants.ImperialProbeDroid = function() {
    this.name = 'Imperial Probe Droid';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = '';
};
BattleDome.Combatants.ImperialProbeDroid.prototype = new BattleDome.Combatants.StarWars();

BattleDome.Combatants.ATAT = function() {
    this.name = 'AT-AT';
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.Combatants.ATAT.prototype = new BattleDome.Combatants.StarWars();

/////////////////////////////
///  Transformers Enemies ///
/////////////////////////////
BattleDome.Combatants.Transformers = function() {
    this.healthBonus = 30;
    this.damageBonus = 20;
};
BattleDome.Combatants.Transformers.prototype = new BattleDome.Combatants.RobotClass();

BattleDome.Combatants.Megatron = function() {
    this.name = 'Megatron';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.Combatants.Megatron.prototype = new BattleDome.Combatants.Transformers();

BattleDome.Combatants.Starscream = function() {
    this.name = 'Starscream';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = '';
};
BattleDome.Combatants.Starscream.prototype = new BattleDome.Combatants.Transformers();

BattleDome.Combatants.Shockwave = function() {
    this.name = 'Shockwave';
    this.healthBonus = this.healthBonus + 40;
    this.damageBonus = this.damageBonus + 10;
    this.image = '';
};
BattleDome.Combatants.Shockwave.prototype = new BattleDome.Combatants.Transformers();

BattleDome.Combatants.Galvatron = function() {
    this.name = 'Galvatron';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.Combatants.Galvatron.prototype = new BattleDome.Combatants.Transformers();

/////////////////////////////
//  Miscellaneous Enemies  //
/////////////////////////////
BattleDome.Combatants.MiscBots = function() {
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 10;
};
BattleDome.Combatants.MiscBots.prototype = new BattleDome.Combatants.RobotClass();

BattleDome.Combatants.Auto = function() {
    this.name = 'Auto';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.Combatants.Auto.prototype = new BattleDome.Combatants.MiscBots();

BattleDome.Combatants.VanessaKensington = function() {
    this.name = 'Vanessa Kensington';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.Combatants.VanessaKensington.prototype = new BattleDome.Combatants.MiscBots();

BattleDome.Combatants.Gort = function() {
    this.name = 'Gort';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.Combatants.Gort.prototype = new BattleDome.Combatants.MiscBots();

BattleDome.Combatants.RoboCop = function() {
    this.name = 'RoboCop';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = '';
};
BattleDome.Combatants.RoboCop.prototype = new BattleDome.Combatants.MiscBots();
