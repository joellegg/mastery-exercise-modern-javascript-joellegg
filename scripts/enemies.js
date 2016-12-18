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
    this.image = 'http://vignette1.wikia.nocookie.net/starwars/images/c/cd/Battle_Droid.png/revision/latest?cb=20160910192832';
};
BattleDome.Combatants.B1BattleDroid.prototype = new BattleDome.Combatants.StarWars();

BattleDome.Combatants.ImperialProbeDroid = function() {
    this.name = 'Imperial Probe Droid';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = 'http://vignette3.wikia.nocookie.net/starwars/images/0/05/Probe_Droid_SWB.png/revision/latest?cb=20151115014524';
};
BattleDome.Combatants.ImperialProbeDroid.prototype = new BattleDome.Combatants.StarWars();

BattleDome.Combatants.ATAT = function() {
    this.name = 'AT-AT';
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://i.imgur.com/RcIH3Do.png';
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
    this.image = 'http://img09.deviantart.net/4d4b/i/2011/118/0/8/megatron_render_by_3dblenderrender-d3f3dv1.png';
};
BattleDome.Combatants.Megatron.prototype = new BattleDome.Combatants.Transformers();

BattleDome.Combatants.Starscream = function() {
    this.name = 'Starscream';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = 'http://www.tfw2005.com/boards/attachment.php?attachmentid=27473540&stc=1&d=1413253776';
};
BattleDome.Combatants.Starscream.prototype = new BattleDome.Combatants.Transformers();

BattleDome.Combatants.Shockwave = function() {
    this.name = 'Shockwave';
    this.healthBonus = this.healthBonus + 40;
    this.damageBonus = this.damageBonus + 10;
    this.image = 'http://orig11.deviantart.net/bd88/f/2016/303/a/e/shockwave__dotm_promo_pose_2__by_barricade24-damppma.png';
};
BattleDome.Combatants.Shockwave.prototype = new BattleDome.Combatants.Transformers();

BattleDome.Combatants.Galvatron = function() {
    this.name = 'Galvatron';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://orig10.deviantart.net/a217/f/2014/180/3/f/age_of_extinction__galvatron_by_sonichedgehog2-d7oiz2y.png';
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
    this.image = 'http://vignette3.wikia.nocookie.net/disney/images/b/b0/Auto_wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20140112143425';
};
BattleDome.Combatants.Auto.prototype = new BattleDome.Combatants.MiscBots();

BattleDome.Combatants.Sentinel = function() {
    this.name = 'Sentinel';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://www.gadgetmadness.com/archives/matrix_sentinel.gif';
};
BattleDome.Combatants.Sentinel.prototype = new BattleDome.Combatants.MiscBots();

BattleDome.Combatants.Gort = function() {
    this.name = 'Gort';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://i.imgur.com/vD1qW3l.gif';
};
BattleDome.Combatants.Gort.prototype = new BattleDome.Combatants.MiscBots();

BattleDome.Combatants.RoboCop = function() {
    this.name = 'RoboCop';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://paidmedia.foxhome.com/robocop/photoshop/img/Robocop_SM_WK6_RoboFan_CutOut1.png';
};
BattleDome.Combatants.RoboCop.prototype = new BattleDome.Combatants.MiscBots();
