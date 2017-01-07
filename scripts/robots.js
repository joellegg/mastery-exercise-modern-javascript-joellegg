//  Constructor function for basic player or enemy bot
RobotClass = function() {
    this.name = 'Toaster';
    this.healthBonus = 0;
    this.damageBonus = 0;
    this.image = 'http://pre12.deviantart.net/0705/th/pre/i/2013/189/e/2/brave_little_toaster____by_spyro4287-d6cj07k.png';
}

// 3 classes:   STAR WARS,     TRANSFORMERS,     MISC
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
};
StarWars.prototype = new RobotClass();

C3PO = function() {
    this.name = 'C-3PO';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 10;
    this.image = 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png';
};
C3PO.prototype = new StarWars();

R2D2 = function() {
    this.name = 'R2-D2';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 20;
    this.image = 'http://r2dc.com/files/r2d2.png';
};
R2D2.prototype = new StarWars();

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
};
Transformers.prototype = new RobotClass();

Optimus = function() {
    this.name = 'Optimus Prime';
    this.healthBonus = this.healthBonus + 20;
    this.damageBonus = this.damageBonus + 30;
    this.image = 'http://fc07.deviantart.net/fs71/f/2014/341/6/3/imageedit_3_8140918195_by_aoe_optimus_prime-d893bfw.gif';
};
Optimus.prototype = new Transformers();

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
    this.image = 'http://static3.comicvine.com/uploads/original/11112/111122896/4743210-bumblebee.png';
};
Bumblebee.prototype = new Transformers();

/////////////////////
//  Miscellaneous  //
/////////////////////
MiscBots = function() {
    this.healthBonus = this.healthBonus + 10;
    this.damageBonus = this.damageBonus + 10;
};
MiscBots.prototype = new RobotClass();

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
    this.image = 'http://static.comicvine.com/uploads/original/3/38511/794443-terminator_1.png';
};
Terminator.prototype = new MiscBots();

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
