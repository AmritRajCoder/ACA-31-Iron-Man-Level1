var bg, backgroundImg;
var ironMan, ironManImage;

function preload() {
	backgroundImg = loadImage("images/bg.jpg");
	ironManImage = loadImage('images/iron.png');
}

function setup() {
	createCanvas(1000, 600);
	bg = createSprite(580, 300);
	bg.addImage(backgroundImg);
	bg.scale = 2;
	bg.velocityY = 8;

	ironMan = createSprite(500, 200);
	ironMan.addImage('running', ironManImage);
	ironMan.scale = 0.3;

}

function draw() {
	if (bg.y > 700) {
		bg.y = bg.height / 15;
	}
	if(keyDown('up') || keyDown('w')){
		ironMan.velocityY = -10;
	}
	if(keyDown('left')){
		ironMan.x = ironMan.x - 5;
	}
	if(keyDown('right')){
		ironMan.x = ironMan.x + 5;
	}

	ironMan.velocityY = ironMan.velocityY + 0.5;

	drawSprites();
}

