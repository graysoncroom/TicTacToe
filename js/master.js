var boxes = document.querySelectorAll("td");
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
		playerTurnDisplay.textContent = "Game Over";
		playerTurnDisplay.classList.toggle(playerTurnDisplay.classList);
		playerTurnDisplay.classList.add("gameOver")
	}
}
function addObjectToBox(box){
	if(isXTurn)
		addCross(box);
	else
		addCircle(box);
}

init();
