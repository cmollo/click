//GLOBAL VARIABLES
var canvasElement = $('#canvas');

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
clickEngine.switchView = function(direction, view){
	switch(direction){
		case 'up': break;
		case 'left': break;
		case 'right': break;
		case 'down': break;
		default: break;
	}
};
clickEngine.loadPIXI = function(){
	var stage = new PIXI.Stage(0x000000);
	var renderer = new PIXI.CanvasRenderer(1000, 450);
	document.getElementById('canvas').appendChild(renderer.view);
	requestAnimFrame(animate);

	function animate(){
		requestAnimFrame(animate);
		renderer.render(stage);
	}
};

clickEngine.init = function(){
	//data members
	var canvasElement = $('#canvas');

	//load graphics
	clickEngine.loadPIXI();
	
	//attach click listener
	//canvasElement.on('click',clickEngine.onClick);
	
	//remove .todelete elements
	/*
	setInterval(function(){
		$('.todelete').fadeOut('fast');
		clickEngine.clickCount = 0;
	},3000);
	*/
};

$(document).ready(function(){
	clickEngine.init();
});