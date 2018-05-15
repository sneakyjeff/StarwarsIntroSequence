/*
 * 05/15/2018
 * JavaScript file that holds JavaScript functionality
 */

const num_stars = 150;

for(let i = 0; i < num_stars; i++){
	let star = document.createElement("div");
	star.className = "star";

	var xycoordinate = getRandomPosition();
	star.style.top = xycoordinate[0] + 'px';
	star.style.left = xycoordinate[1] + 'px';
	document.body.append(star);
}

function getRandomPosition(){
	var xcoordinate = window.innerHeight;
	var ycoordinate = window.innerWidth;

	var randomX = Math.floor(Math.random()*xcoordinate);
	var randomY = Math.floor(Math.random()*ycoordinate);

	return[randomX, randomY];
}

