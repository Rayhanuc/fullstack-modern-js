/*
3.10 - Create small drawing application on canvas
*/

var cvs = document.querySelector("canvas");

var ctx = cvs.getContext("2d");

/*
We will follow this method for creating drowing application
========================
ctx.beginPath();
ctx.moveTo(10,12);
ctx.lineTo(30,25);
ctx.stroke();
*/

var drawing = false;

var oldX = 0;
var oldY = 0;

ctx.strokeStyle = "#F00";

cvs.addEventListener("mousedown", e=> {
	drawing = true;
	oldX = e.offsetX;
	oldY = e.offsetY;
});

cvs.addEventListener("mouseup", e => {
	drawing = false;	
});

cvs.addEventListener("mousemove", e=> {
	if(!drawing) return false;
	ctx.beginPath();
	ctx.moveTo(oldX, oldY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	oldX = e.offsetX;
	oldY = e.offsetY;
});