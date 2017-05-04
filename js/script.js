var game = new Phaser.Game(550,850, Phaser.AUTO, '', { 
	preload: preload, 
	create: create, 
	update: update
});

function preload(){
	// Sprites
	// PCs
	game.load.image('WoL', '../assets/sprite/WoL.png');
	game.load.image('WoLP', '../assets/portraits/WoLP.png');
	game.load.image('Emperor', '../assets/sprite/Emperor.png');
	game.load.image('EmperorP', '../assets/portraits/EmperorP.png');
	game.load.image('Firion', '../assets/sprite/Firion.png');
	game.load.image('FirionP', '../assets/portraits/FirionP.png');
	game.load.image('Lightning', '../assets/sprite/Lightning.png');
	game.load.image('LightningP', '../assets/portraits/LightningP.png');
	game.load.image('Cecil', '../assets/sprite/Cecil.png');
	game.load.image('CecilP', '../assets/portraits/CecilP.png');
	game.load.image('Terra', '../assets/sprite/Terra.png');
	game.load.image('TerraP', '../assets/portraits/TerraP.png');

	//Enemies
	game.load.image('Gilgamesh', '../assets/sprite/Gilgamesh.png');
	game.load.image('GilgameshP', '../assets/portraits/GilgameshP.png');
	game.load.image('Siren', '../assets/sprite/Siren.png');
	game.load.image('SirenP', '../assets/portraits/SirenP.png');
	game.load.image('Ifrit', '../assets/sprite/Ifrit.png');
	game.load.image('IfritP', '../assets/portraits/IfritP.png');

	// Backgrounds
	game.load.image('Farplane_BG1', '../assets/bg/Farplane_BG1.jpg');
	game.load.image('Farplane_BG2', '../assets/bg/Farplane_BG2.jpg');

	// Battle HUD
	game.load.image('HUD_BG', '../assets/hud/HUD_BG.png');
	game.load.image('Border_V', '../assets/hud/borderV.png');
	game.load.image('Border_H', '../assets/hud/borderH.png');
	game.load.image('TransparentB', '../assets/hud/tr_button.png');
	game.load.image('FadeB', '../assets/hud/fad_button.png')

}

var Char;
var style = { font: "11px Verdana", fill: "#fff", tabs: [ 150, 150, 200 ] };
var style1= { font: "12px Verdana", fontWeight: "bold", fill: "#fff", tabs: [ 45, 45, 45 ]}
var WoL, Emperor, Firion, Lightning, Terra, Cecil;
var Gilgamesh, Siren, Ifrit;
var Target_A, Source_A;
var Target_E, Source_E;
var Type_A, Type_E;
var Source_A = Emperor;
var	Target_A = Emperor;
var Moves = new Object();;



function create(){
	BG1 = game.add.sprite(0,0, 'Farplane_BG2');
	drawhud();
	bg1rat = game.width / BG1.width;
	BG1.width = BG1.width * bg1rat;
	BG1.height = BG1.height * bg1rat;
	initMoves()
	// Init enemies
	initEnemies();
	
	// Init characters 
	initChars();

	// Fill HUD	
	fillHUD();
	
	// Buttons
	initButtons();
}

function getStats(char){
	var Stats = new Array();
	var j = char.growthIndex * char.level;
	for(var i = 0; i<char.baseStats.length; i++){
		Stats[i] = Math.round(j * char.baseStats[i]);
	}
	return Stats;
}



function levelUp(char){
	char.level += 1;
}

function heal(){
	healAmount = 0.32 * Source_A.currStats[4];
	Target_A.currHP += Math.round(healAmount);
	if (Target_A.currHP > Target_A.currStats[0]){
		Target_A.currHP = Target_A.currStats[0];
	}
}
function update(){
	updateHUD();
}


