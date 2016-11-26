var boxes = document.querySelectorAll("td");
var isXTurn = true;

function init(){
	addClickLiseners(boxes);
}

function addClickLiseners(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i].addEventListener("click", function(){
			if(isXTurn && isEmpty(this))
				addCross(this);
			else if(isEmpty(this))
				addCircle(this);
			isXTurn = !(isXTurn);
		});
	}
}
function isEmpty(box){
	if(box.textContent !== "X" && box.textContent !== "O")
		return true;
	else
		return false;
}
function addCross(item){
	item.classList.add("cross");
	item.textContent = "X";
}
function addCircle(item){
	item.classList.add("circle");
	item.textContent = "O";
}

init();
