// Declare variables here. Don't use random function outside of setup and draw function.



function setup() {
  createCanvas(500, 500);
  background(200);
	// This will slow the rate of the draw funciton so we can see the images that are being drawn.
	frameRate(5);


	
	
}

function draw() {
	// Write code below this line
	let x = random(0, width)
	let y = random(0, height)
	let r = random(0, 255)
	let b = random(0, 255)
	noStroke()
	fill(r, 0, b, 50)
	ellipse(x, y, 50, 50)










}