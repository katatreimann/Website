// const canvas = document.querySelector('#drawingCanvas'); //variable

// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;

// const yellow = document.createElement('img');
// const purple = document.createElement('img');

// yellow.src = 'images/yellow.png';
// purple.src = 'images/purple.png';

// let paintbrush = yellow;

// const context = canvas.getContext('2d');

// const handleMouseMove = (event) => {
// 	const left = event.clientX;
// 	const top = event.clientY;

// 	context.drawImage(paintbrush, left, top);
// }

// const handleClick = () => {

// 	if (paintbrush === yellow) {
// 		paintbrush = purple;
// 	} else {
// 		paintbrush = yellow;
// 	}
// }

// // function setCanvasSize() {
// // 	canvas.width = window.innerWidth;
// // 	canvas.height = window.innerHeight;
// // }

// // // Call setCanvasSize function to set initial canvas size.
// // setCanvasSize();

// // // Call setCanvasSize function on window resize event to set canvas size dynamically.
// // window.addEventListener('resize', setCanvasSize);


// canvas.addEventListener('click', handleClick)
// canvas.addEventListener('mousemove', handleMouseMove);

const canvas = document.querySelector('#drawingCanvas'); 

const yellow = document.createElement('img');
const purple = document.createElement('img');

yellow.src = 'images/yellow.png';
purple.src = 'images/purple.png';

let paintbrush = yellow;

const context = canvas.getContext('2d');

const paintbrushWidth = 100; // Change this to the width of your paintbrush image

const handleMouseMove = (event) => {
  const left = event.clientX - paintbrushWidth / 2;
  const top = event.clientY - paintbrushWidth / 2;

  context.drawImage(paintbrush, left, top);
}

const handleClick = () => {
  if (paintbrush === yellow) {
    paintbrush = purple;
  } else {
    paintbrush = yellow;
  }
}

canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);


/// MENU BUTTONS

function scrollToDraw() {
	document.getElementById("draw").scrollIntoView();
  }

  function scrollToAbout() {
	document.getElementById("about").scrollIntoView();
  }

  function scrollToWork() {
	document.getElementById("work").scrollIntoView();
  }























// const canvas = document.querySelector('#drawingCanvas'); //variable

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const dan = document.createElement('img');
// const rifke = document.createElement('img');

// dan.src = 'images/yellow.png';
// rifke.src = 'images/pink.png';

// let paintbrush = dan;

// const context = canvas.getContext('2d');

// const handleMouseMove = (event) => {
// 	const left = event.clientX;
// 	const top = event.clientY;

// 	context.drawImage(paintbrush, left, top);
// }

// const handleClick = () => {

// 	if (paintbrush === dan) {
// 		paintbrush = rifke;
// 	} else {
// 		paintbrush = dan;
// 	}
// }

// canvas.addEventListener('click', handleClick)
// canvas.addEventListener('mousemove', handleMouseMove);















// var square = document.getElementById("drawPlace");
// var paper = square.getContext("2d");
// var pressedMouse = true;
// var x;
// var y;
// var colorLine ="#fcff00";
// var key = {C: 67};


// document.addEventListener("mousemove", drawLine);



// function drawLine(eventvs02) {
// 	if (pressedMouse) {
// 		document.getElementById("drawPlace").style.cursor = "crosshair";
// 		var xM = eventvs02.offsetX;
// 		var yM = eventvs02.offsetY;
// 		drawing_line(colorLine, x, y, xM, yM, paper);
// 		x = xM;
// 		y = yM;
// 	}
// }




// function drawing_line(color, x_start, y_start, x_end, y_end, board){
// 	board.beginPath();
// 	board.strokeStyle = color;
// 	board.lineWidth = 15;
// 	board.moveTo(x_start,y_start);
// 	board.lineTo(x_end,y_end);
// 	board.stroke();
// 	board.closePath();
// }

