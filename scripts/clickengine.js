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

clickEngine.init = function(){
	var canvasElement = $('#canvas');

	//attach click listener
	canvasElement.on('click',clickEngine.onClick);
	
	//remove .todelete elements
	setInterval(function(){
		$('.todelete').fadeOut('fast');
		clickEngine.clickCount = 0;
	},3000);
};


$(document).ready(function(){
	clickEngine.init();
});