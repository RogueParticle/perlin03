var w = 200;
var h = 200;
var bgc = 81;
var inc = 0.01;

function setup() {
	createCanvas( w, h);
	pixelDensity(1);
}

function draw() {
	var yoff = 0;
	
	loadPixels();
	for (var y = 0; y< h; y++) {
		var xoff = 0;
		for (var x = 0; x < w; x++) {
			var index = (x + y * w) *4;
			var r = noise(xoff, yoff) * 255;
			pixels[index+0] = r;	//red
			pixels[index+1] = r;	//green
			pixels[index+2] = r;	//blue
			pixels[index+3] = 255;	//alpha
			
			xoff += inc;
		}
		yoff += inc
	}
	updatePixels();
	//noLoop();
}
