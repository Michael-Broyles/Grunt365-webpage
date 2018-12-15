

document.addEventListener("load", populate);

function populate_survival_gear() {
	var s = document.getElementById("select_survival_gear");
	var product = document.getElementById("survival_choice_image");
	
	if(s.value == "Woobie"){
	 	document.getElementById("survival_choice_image").style.background = "url('../../images/550cord.png')";
	} else if(s.value == "Cord"){
		document.body.style.backgroundColor = "red";
	} else if(s.value == "100mph"){
		document.body.style.backgroundColor = "green";
	} else if(s.value == "Pouches"){
		document.body.style.backgroundColor = "black";
	} 
}
