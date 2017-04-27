(function(){
var boxes = document.querySelectorAll("td"),
	boxtext = document.querySelectorAll("td span"),
	player = document.querySelector("#player"),
	playerTurnDisplay = document.querySelector("#playerTurnDisplay"),
	resetButton = document.querySelector("#resetButton"),
	isXTurn = true,
	boxesLeftToClick = 9,
	gameOver = false;

function init(){
	addClickListeners(boxes);
}
function addClickListeners(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i].addEventListener("click", function(){
			if(isEmpty(this) && !gameOver){
				addObjectToBox(this);
				isXTurn = !(isXTurn);
				boxesLeftToClick--;
				displayTurn();
				checkWinner(arr);
			}
		});
	}
	resetButton.addEventListener("click", function(){
		reset();
	});
}
// is the box empty [true] or does it have an X or O in it [false]
function isEmpty(box){
	if(box.textContent !== "X" && box.textContent !== "O")
		return true;
	else
		return false;
}
// adds the Object "O" to the board
function addCross(box){
	box.classList.add("cross");
	box.textContent = "X";
}
// adds the Object "X" to the board
function addCircle(box){
	box.classList.add("circle");
	box.textContent = "O";
}
// displays whos turn it is to the players
function displayTurn(){
	if(boxesLeftToClick > 0){
		player.textContent = (isXTurn) ? "X" : "O";
		playerTurnDisplay.classList.toggle("xTurn");
		playerTurnDisplay.classList.toggle("yTurn");
	}
	else{
		playerTurnDisplay.textContent = "Draw";
		playerTurnDisplay.classList.toggle(playerTurnDisplay.classList);
		playerTurnDisplay.classList.add("gameOver");
	}
}
// if someone wins get rid of the background color and display the text of whoever won
function setWinnerDisplay(box, orientation){
	playerTurnDisplay.classList.remove("xTurn");
	playerTurnDisplay.classList.remove("yTurn");
	playerTurnDisplay.classList.add("gameOver");
	playerTurnDisplay.textContent = box.textContent + " wins " + orientation;
	gameOver = true;
}
// adds the "line" through the winning boxes
function crossOut(box1,box2,box3){
	box1.classList.add("crossOut");
	box2.classList.add("crossOut");
	box3.classList.add("crossOut");
}
// all the things that need to happend when a player wins will happen if you call this function
function win(box1,box2,box3,orientation){
	setWinnerDisplay(box1,orientation);
	crossOut(box1,box2,box3);
}
// returns true if the boxes are all X's or O's false if they are empty or not the same
function isTheSame(box1,box2,box3){
	return (box1.textContent === box2.textContent === box3.textContent && !isEmpty(box1))
}
function reset(){
	for(var i = 0; i < boxes.length; i++){
		boxes[i].textContent = "";
		boxes[i].classList.remove("crossOut");
		boxes[i].classList.remove("gameOver");
	}
	isXTurn = true;
	gameOver = false;
	playerTurnDisplay.classList.add("xTurn");
	boxesLeftToClick = 9;
}
// checks an array of 9 elements to see if their textContent is the same
function checkWinner(arr){
	if(isTheSame(arr[0], arr[1], arr[2]))
		win(arr[0], arr[1], arr[2],"horizontally");
	else if(isTheSame(arr[3], arr[4], arr[5]))
		win(arr[3], arr[4], arr[5], "horizontally");
	else if(isTheSame(arr[6], arr[7], arr[8]))
		win(arr[6], arr[7], arr[8], "horizontally");
	else if(isTheSame(arr[0], arr[3], arr[6]))
		win(arr[0],arr[3],arr[6], "vertically");
	else if(isTheSame(arr[1], arr[4], arr[7]))
		win(arr[1], arr[4], arr[7], "vertically");
	else if(isTheSame(arr[2], arr[5], arr[8]))
		win(arr[2], arr[5], arr[8], "vertically");
	else if(isTheSame(arr[0], arr[4], arr[8]))
		win(arr[0], arr[4], arr[8], "diagonally");
	else if(isTheSame(arr[2], arr[4], arr[6]))
		win(arr[2], arr[4], arr[6], "diagonally");
}
function addObjectToBox(box){
	if(isXTurn)
		addCross(box);
	else
		addCircle(box);
}

init();
}());
