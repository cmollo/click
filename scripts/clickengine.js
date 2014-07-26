(function(){
//CLICK ENGINE OBJECT
var clickEngine = {};//create empty object
clickEngine.clickCount = 0;

//Click Listener function
clickEngine.onClick = function(){
	var canvasElement = $('#canvas');
	var insert = "<p class='todelete'>Stop. "+clickEngine.clickCount+"</p>";
	canvasElement.append(insert);

	clickEngine.clickCount++;
};
clickEngine.keyListener = function(event){
	var event = event || window.event;
	return event.keyCode;
};
clickEngine.textures = {
	view1: PIXI.Texture.fromImage("res/images/happygilmoreposter.jpg"),
	view2: PIXI.Texture.fromImage("res/images/longestyardposter.jpg"),
	view3: PIXI.Texture.fromImage("res/images/zohanposter.jpg")
};
clickEngine.sprites = {
	background1: new PIXI.Sprite(clickEngine.textures.view1),
	background2: new PIXI.Sprite(clickEngine.textures.view2),
	background3: new PIXI.Sprite(clickEngine.textures.view3)

};
clickEngine.sets = [
	{
		background: clickEngine.sprites.background1
	},
	{
		background: clickEngine.sprites.background2
	},
	{
		background: clickEngine.sprites.background3
	}
];
clickEngine.loadPIXI = function(){
	//data members
	var canvasElement = $('#canvas');
	var stage = new PIXI.Stage(0x000000);
	var renderer = new PIXI.CanvasRenderer(1000, 450);
	var camera = new PIXI.DisplayObjectContainer();
	var view = new PIXI.DisplayObjectContainer();
	document.getElementById('canvas').appendChild(renderer.view);
	requestAnimFrame(animate);

	//add the backgrounds - temporary
	var x = 0;
	for(var i = 0; i < clickEngine.sets.length; i++){
		var set = clickEngine.sets[i];
		var oldWidth = set.background.width;
		set.background.width = 500;
		set.background.height = set.background.height * (set.background.width/oldWidth);
		set.background.x = x;
		view.addChild(set.background);

		x+=500;
	}
	camera.width = 1000;
	camera.height = 450;
	camera.addChild(view);
	stage.addChild(camera);

	document.body.addEventListener('keydown', function(event){
			event.preventDefault();
			moveCamera(event.keyCode);
			console.log(camera.position.x + ", " + camera.position.y);
		}, false);

	//methods
	function moveCamera(keyCode){
		switch(keyCode){
			case 37: 
				camera.position.x += 5;
				break;
			case 38: 
				camera.position.y += 5;
				break;
			case 39:
				camera.position.x -=5;
				break;
			case 40:
				camera.position.y -= 5;
				break;
			default: break;
		}
	}
	
	function animate(){	
		requestAnimFrame(animate);
		renderer.render(stage);
	}
};

clickEngine.init = function(){
	//load graphics
	clickEngine.loadPIXI();
};

$(document).ready(function(){
	clickEngine.init();
});
})();