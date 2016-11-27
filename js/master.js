var boxes = document.querySelectorAll("td");
var boxtext = document.querySelectorAll("td span");
var player = document.querySelector("#player");
var playerTurnDisplay = document.querySelector("#playerTurnDisplay");
var isXTurn = true;
var boxesLeftToClick = 9;

function init(){
	addClickListeners(boxes);
}
function addClickListeners(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i].addEventListener("click", function(){
			if(isEmpty(this)){
				addObjectToBox(this);
				isXTurn = !(isXTurn);
				boxesLeftToClick--;
				displayTurn();
				checkWinner();
			}
		});
	}
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
function setWinnerDisplay(){
	playerTurnDisplay.classList.remove("xTurn");
	playerTurnDisplay.classList.remove("yTurn");
	playerTurnDisplay.classList.add("gameOver");
	winner = true;
}
function checkWinner(){
	if(boxes[0].textContent === boxes[1].textContent && boxes[0].textContent === boxes[2].textContent && isEmpty(boxes[0]) === false){
		playerTurnDisplay.textContent = boxes[0].textContent + " wins horizontally";
		setWinnerDisplay();
	}
	else if(boxes[3].textContent === boxes[4].textContent && boxes[3].textContent === boxes[5].textContent && isEmpty(boxes[3]) === false){
		playerTurnDisplay.textContent = boxes[3].textContent + " wins horizontally";
		setWinnerDisplay();
	}
	else if(boxes[6].textContent === boxes[7].textContent && boxes[6].textContent === boxes[8].textContent && isEmpty(boxes[6]) === false){
		playerTurnDisplay.textContent = boxes[6].textContent + " wins horizontally";
		setWinnerDisplay();
	}
	//vertical wins
	else if(boxes[0].textContent === boxes[3].textContent && boxes[0].textContent === boxes[6].textContent && isEmpty(boxes[0]) === false){
		playerTurnDisplay.textContent = boxes[0].textContent + " wins vertically";
		setWinnerDisplay();
	}
	else if(boxes[1].textContent === boxes[4].textContent && boxes[1].textContent === boxes[7].textContent && isEmpty(boxes[1]) === false){
		playerTurnDisplay.textContent = boxes[1].textContent + " wins vertically";
		setWinnerDisplay();
	}
	else if(boxes[2].textContent === boxes[5].textContent && boxes[2].textContent === boxes[8].textContent && isEmpty(boxes[2]) === false){
		playerTurnDisplay.textContent = boxes[2].textContent + " wins vertically";
		setWinnerDisplay();
	}
	//diagonal wins
	else if(boxes[0].textContent === boxes[4].textContent && boxes[0].textContent === boxes[8].textContent && isEmpty(boxes[0]) === false){
		playerTurnDisplay.textContent = boxes[0].textContent + " wins diagonally";
		setWinnerDisplay();
	}
	else if(boxes[2].textContent === boxes[4].textContent && boxes[2].textContent === boxes[6].textContent && isEmpty(boxes[2]) === false){
		playerTurnDisplay.textContent = boxes[2].textContent + " wins diagonally";
		setWinnerDisplay();
	}
}
function addObjectToBox(box){
	if(isXTurn)
		addCross(box);
	else
		addCircle(box);
}

init();
