function drawhud(){
	hud_bg = game.add.sprite(0, game.height-300, 'HUD_BG');

	// Draw borders
	vbor1 = game.add.sprite(0, game.height-300, 'Border_V');
	vbor1.height = 300;
	vbor1.width = 4;
	vbor2 = game.add.sprite(216, game.height-300, 'Border_V');
	vbor2.height = 300;
	vbor2.width = 6;
	vbor3 = game.add.sprite(383, game.height-300, 'Border_V');
	vbor3.height = 300;
	vbor3.width = 4;
	vbor4 = game.add.sprite(game.width-4, game.height-300, 'Border_V');
	vbor4.height = 300;
	vbor4.width = 4;

	hbor1 = game.add.sprite(4, game.height-302, 'Border_H');
	hbor1.height = 4;
	hbor1.width = game.width-8;
	hbor2 = game.add.sprite(4, game.height-202, 'Border_H');
	hbor2.height = 4;
	hbor2.width = game.width-8;
	hbor3 = game.add.sprite(4, game.height-102, 'Border_H');
	hbor3.height = 4;
	hbor3.width = game.width-8;
	hbor4 = game.add.sprite(4, game.height-4, 'Border_H');
	hbor4.height = 4;
	hbor4.width = game.width-8;
}

function destroySprite (sprite) {

    sprite.destroy();

}

function fillHUD(){
	// Enemies
	Ifrit.portrait = game.add.sprite(45, 600, 'IfritP'); 	Ifrit.portrait.anchor.setTo(0.5,0.5);
	Ifrit.portrait.width  = 75;								Ifrit.portrait.height = 75;
	Ifrit.HUDText = game.add.text(0, 0, '', style);			Ifrit.HUDText.x   = 85;			Ifrit.HUDText.y = 565;

	Gilgamesh.portrait = game.add.sprite(45, 700, 'GilgameshP'); Gilgamesh.portrait.anchor.setTo(0.5,0.5);
	Gilgamesh.portrait.width  = 75;								 Gilgamesh.portrait.height = 75;
	Gilgamesh.HUDText = game.add.text(0, 0, '', style);			 Gilgamesh.HUDText.x   = 85;			Gilgamesh.HUDText.y = 665;

	Siren.portrait = game.add.sprite(45, 800, 'SirenP'); 		Siren.portrait.anchor.setTo(0.5,0.5);
	Siren.portrait.width  = 75;									Siren.portrait.height = 75;
	Siren.HUDText = game.add.text(0, 0, '', style);			 	Siren.HUDText.x   = 85;					Siren.HUDText.y = 765;


	// Allies
	Emperor.portrait = game.add.sprite(235, 640, 'EmperorP');	 Emperor.portrait.anchor.setTo(0.2,1);
	Emperor.HUDText = game.add.text(0, 0, '', style);			 Emperor.HUDText.x   = 290;				Emperor.HUDText.y  	= 565;
	WoL.portrait = game.add.sprite(400, 640, 'WoLP');			 WoL.portrait.anchor.setTo(0.2,1);
	WoL.HUDText = game.add.text(0, 0, '', style);				 WoL.HUDText.x 		 = 450;				WoL.HUDText.y 		= 565;
	
	Lightning.portrait = game.add.sprite(235, 740, 'LightningP');Lightning.portrait.anchor.setTo(0.2,1);
	Lightning.HUDText = game.add.text(0, 0, '', style);			 Lightning.HUDText.x = 290;				Lightning.HUDText.y = 665;
	Firion.portrait = game.add.sprite(400, 740, 'FirionP');		 Firion.portrait.anchor.setTo(0.2,1);
	Firion.HUDText = game.add.text(0, 0, '', style);			 Firion.HUDText.x 	 = 450;				Firion.HUDText.y 	= 665;

	Cecil.portrait = game.add.sprite(235, 840, 'CecilP');		 Cecil.portrait.anchor.setTo(0.2,1);
	Cecil.HUDText = game.add.text(0, 0, '', style);				 Cecil.HUDText.x 	 = 290;				Cecil.HUDText.y 	= 765;
	Terra.portrait = game.add.sprite(400, 840, 'TerraP');		 Terra.portrait.anchor.setTo(0.15,1);
	Terra.HUDText = game.add.text(0, 0, '', style);			     Terra.HUDText.x 	 = 450;				Terra.HUDText.y 	= 765;
}

function initChars(){
	// Stats = HP, MP, ATK, DEF, MAG, SPR, XP
	// Move type 
	// 1 Physical
	// 2 Heal
	// 3 Magic
	WoL 		= game.add.sprite(475, 325, 'WoL');  		WoL.anchor.setTo(0.5,0.5);			WoL.visible = true;	 // hp, sp, atk, def, mag, 
	WoL.name = "Warrior of Light";				WoL.level = 1;									WoL.baseStats 		= [100, 50,  25,  18,   5, 18, 0];		
	WoL.growthIndex = 1.18;						WoL.currStats = getStats(WoL);					WoL.alive = true;
	WoL.currHP = WoL.currStats[0];				WoL.currSP = WoL.currStats[1];


	Emperor 	= game.add.sprite(375, 375, 'Emperor');		Emperor.anchor.setTo(0.5,0.5);		Emperor.visible = true;
	Emperor.name = "Emperor";					Emperor.level = 10;								Emperor.baseStats	= [ 75, 60,  17,  12,  28, 15, 0];	
	Emperor.growthIndex = 1.12;					Emperor.currStats = getStats(Emperor);			Emperor.alive = true;
	Emperor.currHP = Emperor.currStats[0]-50;	Emperor.currSP = Emperor.currStats[1];
	Emperor.Move0 = Moves.Lunge;
	Emperor.Move1 = Moves.Agi;
	//Emperor.Move0.name = Moves.Lunge.name;

	Firion 		= game.add.sprite(475, 400, 'Firion');		Firion.anchor.setTo(0.5,0.5);		Firion.visible = true;
	Firion.name = "Firion";						Firion.level = 1;								Firion.baseStats	= [ 80, 55, 28, 10,  3, 10, 0];	
	Firion.growthIndex = 1.17;					Firion.currStats = getStats(Firion);			Firion.alive = true;
	Firion.currHP = Firion.currStats[0];		Firion.currSP = Firion.currStats[1];

	Lightning	= game.add.sprite(375, 450, 'Lightning');	Lightning.anchor.setTo(0.5,0.5);	Lightning.visible = true;
	Lightning.name = "Lightning";				Lightning.level = 1;							Lightning.baseStats	= [ 80, 55, 28, 10,  3, 10, 0];	
	Lightning.growthIndex = 1.21;				Lightning.currStats = getStats(Lightning);		Lightning.alive = true;
	Lightning.currHP = Lightning.currStats[0];	Lightning.currSP = Lightning.currStats[1];
	
	Cecil		= game.add.sprite(375, 500, 'Cecil');		Cecil.anchor.setTo(0.5,0.5);		Cecil.visible = true;
	Cecil.name = "Cecil";						Cecil.level = 1;								Cecil.baseStats		= [ 80, 55, 10, 17, 21, 17, 0];	
	Cecil.growthIndex = 1.19;					Cecil.currStats = getStats(Cecil);				Cecil.alive = true;
	Cecil.currHP = Cecil.currStats[0];			Cecil.currSP = Cecil.currStats[1];
	
	Terra 		= game.add.sprite(475, 475, 'Terra');		Terra.anchor.setTo(0.45,0.5);		Terra.visible = true;
	Terra.name 	= "Terra";						Terra.level = 1;								Terra.baseStats		= [ 73, 55, 11, 13, 19, 12, 0];	
	Terra.growthIndex = 1.28;					Terra.currStats = getStats(Terra);				Terra.alive = true;
	Terra.currHP = Terra.currStats[0];			Terra.currSP = Terra.currStats[1];
}
function initEnemies(){
	Ifrit = game.add.sprite(125, 375, 'Ifrit');			Ifrit.anchor.setTo(0.5,0.5);				Ifrit.visible = true;
	Ifrit.name = "Ifrit";								Ifrit.level = 1;							Ifrit.baseStats = [1500, 500, 100, 75, 45, 55, 0];
	Ifrit.growthIndex = 1;								Ifrit.currStats = getStats(Ifrit);			Ifrit.alive = true;
	Ifrit.currHP = Ifrit.currStats[0];					Ifrit.currSP = Ifrit.currStats[1];

	Gilgamesh = game.add.sprite(125, 375, 'Gilgamesh');	Gilgamesh.anchor.setTo(0.5,0.5);			Gilgamesh.visible = true;
	Gilgamesh.name = "Gilgamesh";						Gilgamesh.level = 1;						Gilgamesh.baseStats = [1500, 500, 100, 75, 45, 55, 0];
	Gilgamesh.growthIndex = 1;							Gilgamesh.currStats = getStats(Gilgamesh);	Gilgamesh.alive = true;
	Gilgamesh.currHP = Gilgamesh.currStats[0];			Gilgamesh.currSP = Gilgamesh.currStats[1];
	
	Siren = game.add.sprite(125, 375, 'Siren');			Siren.anchor.setTo(0.5,0.5);				Siren.visible = true;
	Siren.name = "Siren";								Siren.level = 1;							Siren.baseStats = [1500, 500, 100, 75, 45, 55, 0];
	Siren.growthIndex = 1;								Siren.currStats = getStats(Siren);
	Siren.currHP = Siren.currStats[0];					Siren.currSP = Siren.currStats[1];
}
function initButtons(){
	smenuB1 = game.add.sprite(220, 550, 'TransparentB');
	smenuB1.width = 165;	smenuB1.height = 100;
	smenuB1.inputEnabled = true;
	smenuB1.events.onInputDown.add(drawSubmenu1, this);
	smenuB1.destroy;

	smenuB2 = game.add.sprite(385, 550, 'TransparentB');
	smenuB2.width = 165;	smenuB2.height = 100;
	smenuB2.inputEnabled = true;
	smenuB2.events.onInputDown.add(drawSubmenu2, this);
	smenuB2.destroy;

	smenuB3 = game.add.sprite(220, 650, 'TransparentB');
	smenuB3.width = 165;	smenuB2.height = 100;
	smenuB3.inputEnabled = true;
	smenuB3.events.onInputDown.add(drawSubmenu3, this);
	smenuB3.destroy;

	smenuB4 = game.add.sprite(385, 650, 'TransparentB');
	smenuB4.width = 165;	smenuB4.height = 100;
	smenuB4.inputEnabled = true;
	smenuB4.events.onInputDown.add(drawSubmenu4, this);
	smenuB4.destroy;

	smenuB5 = game.add.sprite(220, 750, 'TransparentB');
	smenuB5.width = 165;	smenuB5.height = 100;
	smenuB5.inputEnabled = true;
	smenuB5.events.onInputDown.add(drawSubmenu5, this);
	smenuB5.destroy;

	smenuB6 = game.add.sprite(385, 750, 'TransparentB');
	smenuB6.width = 165;	smenuB6.height = 100;
	smenuB6.inputEnabled = true;
	smenuB6.events.onInputDown.add(drawSubmenu6, this);
	smenuB6.destroy;
}
function updateHUD(){
	Ifrit.currStats = getStats(Ifrit);
	Ifrit.HUDText.text  = Ifrit.name + "\n";
	Ifrit.HUDText.text += "HP: " + Ifrit.currHP + " / " + Ifrit.currStats[0] + "\n";
	Ifrit.HUDText.text += "SP: " + Ifrit.currSP + " / " + Ifrit.currStats[1] + "";
	Ifrit.HUDText.text.clear;

	Gilgamesh.currStats = getStats(Gilgamesh);
	Gilgamesh.HUDText.text  = Gilgamesh.name + "\n";
	Gilgamesh.HUDText.text += "HP: " + Gilgamesh.currHP + " / " + Gilgamesh.currStats[0] + "\n";
	Gilgamesh.HUDText.text += "SP: " + Gilgamesh.currSP + " / " + Gilgamesh.currStats[1] + "";
	Gilgamesh.HUDText.text.clear;

	Siren.currStats = getStats(Siren);
	Siren.HUDText.text  = Siren.name + "\n";
	Siren.HUDText.text += "HP: " + Siren.currHP + " / " + Siren.currStats[0] + "\n";
	Siren.HUDText.text += "SP: " + Siren.currSP + " / " + Siren.currStats[1] + "";
	Siren.HUDText.text.clear;


	Emperor.currStats = getStats(Emperor);
	Emperor.HUDText.text  = Emperor.name + "\n";
	Emperor.HUDText.text += "HP: " + Emperor.currHP + " / " + Emperor.currStats[0] + "\n";
	Emperor.HUDText.text += "SP: " + Emperor.currSP + " / " + Emperor.currStats[1] + "";
	Emperor.HUDText.text.clear;

	WoL.currStats = getStats(WoL);
	WoL.HUDText.text  = WoL.name + "\n";
	WoL.HUDText.text += "HP: " + WoL.currHP + " / " + WoL.currStats[0] + "\n";
	WoL.HUDText.text += "SP: " + WoL.currSP + " / " + WoL.currStats[1] + "";
	WoL.HUDText.text.clear;

	Lightning.currStats = getStats(Lightning);
	Lightning.HUDText.text  = Lightning.name + "\n";
	Lightning.HUDText.text += "HP: " + Lightning.currHP + " / " + Lightning.currStats[0] + "\n";
	Lightning.HUDText.text += "SP: " + Lightning.currSP + " / " + Lightning.currStats[1] + "";
	Lightning.HUDText.text.clear;
	
	Firion.currStats = getStats(Firion);
	Firion.HUDText.text  = Firion.name + "\n";
	Firion.HUDText.text += "HP: " + Firion.currHP + " / " + Firion.currStats[0] + "\n";
	Firion.HUDText.text += "SP: " + Firion.currSP + " / " + Firion.currStats[1] + "";
	Firion.HUDText.text.clear;
	
	Cecil.currStats = getStats(Cecil);
	Cecil.HUDText.text  = Cecil.name + "\n";
	Cecil.HUDText.text += "HP: " + Cecil.currHP + " / " + Cecil.currStats[0] + "\n";
	Cecil.HUDText.text += "SP: " + Cecil.currSP + " / " + Cecil.currStats[1] + "";
	Cecil.HUDText.text.clear;

	Terra.currStats = getStats(Terra);
	Terra.HUDText.text  = Terra.name + "\n";
	Terra.HUDText.text += "HP: " + Terra.currHP + " / " + Terra.currStats[0] + "\n";
	Terra.HUDText.text += "SP: " + Terra.currSP + " / " + Terra.currStats[1] + "";
	Terra.HUDText.text.clear;
}


function initMoves(){
	// Move type 
	// 1 Physical
	// 2 Heal
	// 3 Magic
	Moves.Lunge = new Object();
	Moves.Lunge.name = 'Lunge';
	Moves.Lunge.type = 1;
	Moves.Lunge.cost = 3;
	Moves.Lunge.multiplier = 1.2;

	Moves.Agi = new Object();
	Moves.Agi.name = 'Agi';
	Moves.Agi.type = 3;
	Moves.Agi.cost = 5;
	Moves.Agi.multiplier = 1.25;
}


var Target = new Array();

function selectTarget(t){
	if(Target[0] != null){
		Target[0].destroy();
		Target[1].destroy();
		Target[2].destroy();
	}

	Target[0] = game.add.sprite(0, 550, 'FadeB');
	Target[0].width = 220;	Target[0].height = 100;
	Target[0].inputEnabled = true;
	Target[0].ID = 0;		Target[0].type = t.type;	Target[0].mult = t.mult;	Target[0].cost = t.cost;


	Target[1] = game.add.sprite(0, 650, 'FadeB');
	Target[1].width = 220;	Target[1].height = 100;
	Target[1].inputEnabled = true;
	Target[1].ID = 1;		Target[1].type = t.type;	Target[1].mult = t.mult;	Target[1].cost = t.cost;

	Target[2] = game.add.sprite(0, 750, 'FadeB');
	Target[2].width = 220;	Target[2].height = 100;
	Target[2].inputEnabled = true;
	Target[2].ID = 2;		Target[2].type = t.type;	Target[2].mult = t.mult;	Target[2].cost = t.cost;

	Target[0].events.onInputDown.add(setTargetE, this);
	Target[1].events.onInputDown.add(setTargetE, this);
	Target[2].events.onInputDown.add(setTargetE, this);	
}

function setTargetE(move){
	//console.log(VV.type + ' ' + VV.mult);
	if(move.ID == 0){
		Target_E = Ifrit;
	}
	if(move.ID == 1){
		Target_E = Gilgamesh;
	}
	if(move.ID == 2){
		Target_E = Siren;
	}
	useMoveE(Source_A, Target_E, move.type, move.mult, move.cost);
	a = 1;
	Target[0].destroy();
	Target[1].destroy();
	Target[2].destroy();
}

function useMoveE(from, to, type, mult, cost){
	//console.log(cost);
	if (type != 2){
		damage = damagecalc(from, to, type, mult, cost);
		to.currHP -= damage;
	}

}

function damagecalc(from, to, type, mult, cost){
	var x;
	//console.log(cost);
	if(type == 1){
		dmgsource = from.currStats[2] * mult;
		dmgtarget = 100/(100+to.currStats[3]);
	}
	else if (type == 3) {
		dmgsource = from.currStats[4] * mult;
		dmgtarget = 100/(100+to.currStats[4]);
	}

	x = dmgsource * dmgtarget;
	from.currSP -= cost;
	return Math.round(x);
}
