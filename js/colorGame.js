var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";

})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// adds initial colors to squares
	squares[i].style.backgroundColor = colors[i]

	//adds click listeners to squares
	squares[i].addEventListener("click", function(){

	//Grab color of clicked square 
	var clickedColor = this.style.backgroundColor;

	//compare to pickedColor
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again";
			}

	});
}

function changeColors(color){
	//loop throught all squares
	for(var i = 0; i < colors.length; i++){
		// change colors to match correct color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor())
	}

	//return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}