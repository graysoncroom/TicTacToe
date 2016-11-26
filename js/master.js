var boxes = document.querySelectorAll("td");
var isXTurn = true;

for(var i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("click", function(){
		if(isXTurn && (this.textContent !== "X" && this.textContent !== "O") ){
			this.classList.add("cross");
			this.textContent = "X";
		}
		else{
			if(this.textContent !== "X" && this.textContent !== "O"){
				this.classList.add("circle");
				this.textContent = "O";
			}
		}
		isXTurn = !(isXTurn);
	});
}
