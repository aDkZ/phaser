var sMenu1, sMenu2, sMenu3, sMenu5, sMenu4, sMenu6;

function initSubmenus(){
	drawSubmenu1();
	drawSubmenu2();
	drawSubmenu3();
	drawSubmenu4();
	drawSubmenu5();
	drawSubmenu6();
	destroySubmenu1();
	destroySubmenu2();
	destroySubmenu3();
	destroySubmenu4();
	destroySubmenu5();
	destroySubmenu6();
}


function drawSubmenu1(){
	// Init Submenu
	sMenu1 = game.add.sprite(202, game.height-420, 'HUD_BG');								sMenu1.alive = true;
	sMenu1.width = 185; sMenu1.height = 120;
	sMenu1.borderH1 = game.add.sprite(sMenu1.x, sMenu1.y, 'Border_H');
	sMenu1.borderH2 = game.add.sprite(sMenu1.x, sMenu1.y + sMenu1.height - 4, 'Border_H');
	sMenu1.borderH2.width = sMenu1.borderH1.width = sMenu1.width;
	sMenu1.borderH2.height = sMenu1.borderH1.height = 4
	sMenu1.borderV1 = game.add.sprite(sMenu1.x, sMenu1.y + 4, 'Border_V');
	sMenu1.borderV2 = game.add.sprite(sMenu1.x + sMenu1.width - 4, sMenu1.y + 4, 'Border_V');
	sMenu1.borderV2.height = sMenu1.borderV1.height = sMenu1.height-8;
	sMenu1.borderV2.width = sMenu1.borderV1.width = 4

	// Init Back button
	sMenu1.back = game.add.sprite(220, 550, 'FadeB');
	sMenu1.back.width = 165;	sMenu1.back.height = 100;
	sMenu1.back.inputEnabled = true;
	sMenu1.back.events.onInputDown.add(destroySubmenu1);

	Char1 = Emperor;
	Source_A = Emperor;
	Target_A = null;
	Target_E = null;

	sMenu1.Attack1 = game.add.text(sMenu1.x + 10, sMenu1.y + 10, Char1.Move0.name + '\t\t Cost: ' + Char1.Move0.cost + ' SP', style1);
	sMenu1.Attack1.inputEnabled = true;
	sMenu1.Attack1.type = Char1.Move0.type;	sMenu1.Attack1.mult = Char1.Move0.multiplier;		sMenu1.Attack1.cost = Char1.Move0.cost;
	sMenu1.Attack1.events.onInputDown.add(selectTarget, this);

	sMenu1.Attack2 = game.add.text(sMenu1.x + 10, sMenu1.y + 35, Char1.Move1.name + '\t\t Cost: ' + Char1.Move1.cost + ' SP', style1);
	sMenu1.Attack2.inputEnabled = true;
	sMenu1.Attack2.type = Char1.Move1.type;	sMenu1.Attack2.mult = Char1.Move1.multiplier;		sMenu1.Attack2.cost = Char1.Move1.cost;
	sMenu1.Attack2.events.onInputDown.add(selectTarget, this);


	// Destroy open submenu
	if (sMenu2 != null){
		destroySubmenu2();
	}
	if (sMenu3 != null){
		destroySubmenu3();
	}
	if (sMenu4 != null){
		destroySubmenu4();
	}
	if (sMenu5 != null){
		destroySubmenu5();
	}
	if (sMenu6 != null){
		destroySubmenu6();
	}
}

function drawSubmenu2(){
	sMenu2 = game.add.sprite(367, game.height-420, 'HUD_BG');
	sMenu2.width = 185; sMenu2.height = 120;
	sMenu2.borderH1 = game.add.sprite(sMenu2.x, sMenu2.y, 'Border_H');
	sMenu2.borderH2 = game.add.sprite(sMenu2.x, sMenu2.y + sMenu2.height - 4, 'Border_H');
	sMenu2.borderH2.width = sMenu2.borderH1.width = sMenu2.width;
	sMenu2.borderH2.height = sMenu2.borderH1.height = 4
	sMenu2.borderV1 = game.add.sprite(sMenu2.x, sMenu2.y + 4, 'Border_V');
	sMenu2.borderV2 = game.add.sprite(sMenu2.x + sMenu2.width - 6, sMenu2.y + 4, 'Border_V');
	sMenu2.borderV2.height = sMenu2.borderV1.height = sMenu2.height-8;
	sMenu2.borderV2.width = sMenu2.borderV1.width = 4

	sMenu2.back = game.add.sprite(385, 550, 'FadeB');
	sMenu2.back.width = 165;	sMenu2.back.height = 100;
	sMenu2.back.inputEnabled = true;
	sMenu2.back.events.onInputDown.add(destroySubmenu2);

	if (sMenu1 != null){
		destroySubmenu1();
	}
	if (sMenu3 != null){
		destroySubmenu3();
	}
	if (sMenu4 != null){
		destroySubmenu4();
	}
	if (sMenu5 != null){
		destroySubmenu5();
	}
	if (sMenu6 != null){
		destroySubmenu6();
	}
}

function drawSubmenu3(){
	sMenu3 = game.add.sprite(202, game.height-320, 'HUD_BG');
	sMenu3.width = 185; sMenu3.height = 120;
	sMenu3.borderH1 = game.add.sprite(sMenu3.x, sMenu3.y, 'Border_H');
	sMenu3.borderH2 = game.add.sprite(sMenu3.x, sMenu3.y + sMenu3.height - 4, 'Border_H');
	sMenu3.borderH2.width = sMenu3.borderH1.width = sMenu3.width;
	sMenu3.borderH2.height = sMenu3.borderH1.height = 4
	sMenu3.borderV1 = game.add.sprite(sMenu3.x, sMenu3.y + 4, 'Border_V');
	sMenu3.borderV2 = game.add.sprite(sMenu3.x + sMenu3.width - 4, sMenu3.y + 4, 'Border_V');
	sMenu3.borderV2.height = sMenu3.borderV1.height = sMenu3.height-8;
	sMenu3.borderV2.width = sMenu3.borderV1.width = 4

	sMenu3.back = game.add.sprite(220, 650, 'FadeB');
	sMenu3.back.width = 165;	sMenu3.back.height = 100;
	sMenu3.back.inputEnabled = true;
	sMenu3.back.events.onInputDown.add(destroySubmenu3);
	if (sMenu1 != null){
		destroySubmenu1();
	}
	if (sMenu2 != null){
		destroySubmenu2();
	}
	if (sMenu4 != null){
		destroySubmenu4();
	}
	if (sMenu5 != null){
		destroySubmenu5();
	}
	if (sMenu6 != null){
		destroySubmenu6();
	}
}

function drawSubmenu4(){
	sMenu4 = game.add.sprite(367, game.height-320, 'HUD_BG');
	sMenu4.width = 185; sMenu4.height = 120;
	sMenu4.borderH1 = game.add.sprite(sMenu4.x, sMenu4.y, 'Border_H');
	sMenu4.borderH2 = game.add.sprite(sMenu4.x, sMenu4.y + sMenu4.height - 4, 'Border_H');
	sMenu4.borderH2.width = sMenu4.borderH1.width = sMenu4.width;
	sMenu4.borderH2.height = sMenu4.borderH1.height = 4
	sMenu4.borderV1 = game.add.sprite(sMenu4.x, sMenu4.y + 4, 'Border_V');
	sMenu4.borderV2 = game.add.sprite(sMenu4.x + sMenu4.width - 6, sMenu4.y + 4, 'Border_V');
	sMenu4.borderV2.height = sMenu4.borderV1.height = sMenu4.height-8;
	sMenu4.borderV2.width = sMenu4.borderV1.width = 4

	sMenu4.back = game.add.sprite(385, 650, 'FadeB');
	sMenu4.back.width = 165;	sMenu4.back.height = 100;
	sMenu4.back.inputEnabled = true;
	sMenu4.back.events.onInputDown.add(destroySubmenu4);
	if (sMenu1 != null){
		destroySubmenu1();
	}
	if (sMenu2 != null){
		destroySubmenu2();
	}
	if (sMenu3 != null){
		destroySubmenu3();
	}
	if (sMenu5 != null){
		destroySubmenu5();
	}
	if (sMenu6 != null){
		destroySubmenu6();
	}
}

function drawSubmenu5(){
	sMenu5 = game.add.sprite(202, game.height-220, 'HUD_BG');
	sMenu5.width = 185; sMenu5.height = 120;
	sMenu5.borderH1 = game.add.sprite(sMenu5.x, sMenu5.y, 'Border_H');
	sMenu5.borderH2 = game.add.sprite(sMenu5.x, sMenu5.y + sMenu5.height - 4, 'Border_H');
	sMenu5.borderH2.width = sMenu5.borderH1.width = sMenu5.width;
	sMenu5.borderH2.height = sMenu5.borderH1.height = 4
	sMenu5.borderV1 = game.add.sprite(sMenu5.x, sMenu5.y + 4, 'Border_V');
	sMenu5.borderV2 = game.add.sprite(sMenu5.x + sMenu5.width - 4, sMenu5.y + 4, 'Border_V');
	sMenu5.borderV2.height = sMenu5.borderV1.height = sMenu5.height-8;
	sMenu5.borderV2.width = sMenu5.borderV1.width = 4

	sMenu5.back = game.add.sprite(220, 750, 'FadeB');
	sMenu5.back.width = 165;	sMenu5.back.height = 100;
	sMenu5.back.inputEnabled = true;
	sMenu5.back.events.onInputDown.add(destroySubmenu5);
	if (sMenu1 != null){
		destroySubmenu1();
	}
	if (sMenu2 != null){
		destroySubmenu2();
	}
	if (sMenu3 != null){
		destroySubmenu3();
	}
	if (sMenu4 != null){
		destroySubmenu4();
	}
	if (sMenu6 != null){
		destroySubmenu6();
	}
}

function drawSubmenu6(){
	sMenu6 = game.add.sprite(367, game.height-220, 'HUD_BG');
	sMenu6.width = 185; sMenu6.height = 120;
	sMenu6.borderH1 = game.add.sprite(sMenu6.x, sMenu6.y, 'Border_H');
	sMenu6.borderH2 = game.add.sprite(sMenu6.x, sMenu6.y + sMenu6.height - 4, 'Border_H');
	sMenu6.borderH2.width = sMenu6.borderH1.width = sMenu6.width;
	sMenu6.borderH2.height = sMenu6.borderH1.height = 4
	sMenu6.borderV1 = game.add.sprite(sMenu6.x, sMenu6.y + 4, 'Border_V');
	sMenu6.borderV2 = game.add.sprite(sMenu6.x + sMenu6.width - 6, sMenu6.y + 4, 'Border_V');
	sMenu6.borderV2.height = sMenu6.borderV1.height = sMenu6.height-8;
	sMenu6.borderV2.width = sMenu6.borderV1.width = 4

	sMenu6.back = game.add.sprite(385, 750, 'FadeB');
	sMenu6.back.width = 165;	sMenu6.back.height = 100;
	sMenu6.back.inputEnabled = true;
	sMenu6.back.events.onInputDown.add(destroySubmenu6);
	if (sMenu1 != null){
		destroySubmenu1();
	}
	if (sMenu2 != null){
		destroySubmenu2();
	}
	if (sMenu3 != null){
		destroySubmenu3();
	}
	if (sMenu4 != null){
		destroySubmenu4();
	}
	if (sMenu5 != null){
		destroySubmenu5();
	}
}


function destroySubmenu1(){
	sMenu1.destroy();
	sMenu1.borderH1.destroy();	sMenu1.borderV1.destroy();
	sMenu1.borderH2.destroy();	sMenu1.borderV2.destroy();
	sMenu1.back.destroy();
	sMenu1.Attack1.destroy();
	sMenu1.Attack2.destroy();
}

function destroySubmenu2(){
	sMenu2.destroy();
	sMenu2.borderH1.destroy();	sMenu2.borderV1.destroy();
	sMenu2.borderH2.destroy();	sMenu2.borderV2.destroy();
	sMenu2.back.destroy();
}

function destroySubmenu3(){
	sMenu3.destroy();
	sMenu3.borderH1.destroy();	sMenu3.borderV1.destroy();
	sMenu3.borderH2.destroy();	sMenu3.borderV2.destroy();
	sMenu3.back.destroy();
}

function destroySubmenu4(){
	sMenu4.destroy();
	sMenu4.borderH1.destroy();	sMenu4.borderV1.destroy();
	sMenu4.borderH2.destroy();	sMenu4.borderV2.destroy();
	sMenu4.back.destroy();
}

function destroySubmenu5(){
	sMenu5.destroy();
	sMenu5.borderH1.destroy();	sMenu5.borderV1.destroy();
	sMenu5.borderH2.destroy();	sMenu5.borderV2.destroy();
	sMenu5.back.destroy();
}

function destroySubmenu6(){
	sMenu6.destroy();
	sMenu6.borderH1.destroy();	sMenu6.borderV1.destroy();
	sMenu6.borderH2.destroy();	sMenu6.borderV2.destroy();
	sMenu6.back.destroy();
}