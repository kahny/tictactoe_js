window.onload = function () {
	
	//Click counter
	var counter = 1;
	//get Elements by class name 
	var squareOne = document.getElementsByClassName("square");
	/* for loop not working.. 
	for (var i = 0; i < 9; i++){
		square[i].onclick = function(){
			if (square[i].innerHTML === ""){
				if (counter%2 == 0){
					square[i].style.color = "red";
					square[i].innerHTML = "X";
					counter++;
				}
				else{
					square[i].innerHTML = "0"
					counter++
				}
			}
			else{
				alert("Already Clicked");
			}
		}
	}
*/

	squareOne[0].onclick = function() {
		if (squareOne[0].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[0].style.color = "red";
				squareOne[0].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[0].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}

	squareOne[1].onclick = function() {
		if (squareOne[1].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[1].style.color = "red";
				squareOne[1].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[1].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}


	squareOne[2].onclick = function() {
		if (squareOne[2].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[2].style.color = "red";
				squareOne[2].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[2].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}

	squareOne[3].onclick = function() {
		if (squareOne[3].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[3].style.color = "red";
				squareOne[3].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[3].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}



	squareOne[4].onclick = function() {
		if (squareOne[4].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[4].style.color = "red";
				squareOne[4].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[4].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}


	squareOne[5].onclick = function() {
		if (squareOne[5].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[5].style.color = "red";
				squareOne[5].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[5].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}

	squareOne[6].onclick = function() {
		if (squareOne[6].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[6].style.color = "red";
				squareOne[6].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[6].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}


	squareOne[7].onclick = function() {
		if (squareOne[7].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[7].style.color = "red";
				squareOne[7].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[7].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}

	squareOne[8].onclick = function() {
		if (squareOne[8].innerHTML === ""){ 
			if (counter % 2 === 0) {
				squareOne[8].style.color = "red";
				squareOne[8].innerHTML = "X";
				counter ++;
			} 
			else {
				squareOne[8].innerHTML = "O";
				counter ++;
			}
		} 
		else {
			alert("Already Clicked");
		}
	}

}

	