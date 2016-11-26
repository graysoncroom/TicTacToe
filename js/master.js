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
				// checkWinner();
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
		//horizontal wins
		if(boxes[0].textContent === boxes[1].textContent && boxes[0].textContent === boxes[2].textContent){
			alert(boxes[0].textContent + " wins horizontally");
		}
		else if(boxes[3].textContent === boxes[4].textContent && boxes[3].textContent === boxes[5].textContent){
			alert(boxes[3].textContent + " wins horizontally");
		}
		else if(boxes[6].textContent === boxes[7].textContent && boxes[6].textContent === boxes[8].textContent){
			alert(boxes[6].textContent + " wins horizontally");
		}
		//vertical wins
		else if(boxes[0].textContent === boxes[3].textContent && boxes[0].textContent === boxes[6].textContent){
			alert(boxes[0].textContent + " wins vertically");
		}
		else if(boxes[1].textContent === boxes[4].textContent && boxes[1].textContent === boxes[7].textContent){
			alert(boxes[1].textContent + " wins vertically");
		}
		else if(boxes[2].textContent === boxes[5].textContent && boxes[2].textContent === boxes[8].textContent){
			alert(boxes[2].textContent + " wins vertically");
		}
		//diagonal wins
		else if(boxes[0].textContent === boxes[4].textContent && boxes[0].textContent === boxes[8].textContent){
			alert(boxes[2].textContent + " wins diagonally");
		}
		else if(boxes[2].textContent === boxes[4].textContent && boxes[2].textContent === boxes[6].textContent){
			alert(boxes[2].textContent + " wins diagonally");
		}
		else{
			playerTurnDisplay.textContent = "Draw";
			playerTurnDisplay.classList.toggle(playerTurnDisplay.classList);
			playerTurnDisplay.classList.add("gameOver");
		}
	}
}
function checkWinner(){
	// tl boxes[0]
	// tm boxes[1]
	// tr boxes[2]
	// ml boxes[3]
	// mm boxes[4]
	// mr boxes[5]
	// bl boxes[6]
	// bm boxes[7]
	// br boxes[8]

	// I am kinda stumped right now, going to go to sleep and see if I can work it out
	// subconciously!
}
function addObjectToBox(box){
	if(isXTurn)
		addCross(box);
	else
		addCircle(box);
}

init();
