
//------------------BUTTON-LINK-CONTROLS-----------------------------//
function cl() {
	location.replace("sub_pages/custom_leather/custom_leather.html");
}
var cock = new Audio();
cock.src = "audio/gun_cocking.mp3";

function sg() {
	location.replace("sub_pages/survival_gear/survival_gear.html");
}

function urban_gear() {
	location.replace("sub_pages/urban_gear/urban_gear.html");
}

function about_me() {
	location.replace("sub_pages/about_me/about_me.html");
}

function home() {
	location.replace("../../grunt365.html");
}
var ricochet = new Audio();
ricochet.src = "../../audio/ricochet.mp3";

function shopping_cart() {
	location.replace("sub_pages/shopping_cart/shopping.html");
}

//--------------------BASKET----------------------------------------------------------//
var basket_array = [];

//----------------------SELECT-LIST-FOR---//\\-URBAN_GEAR.HTML-//\\-----------------//
document.addEventListener("load", populate);

function populate_urban_gear() {
	var s = document.getElementById("select_urban_gear");
	
	if(s.value == "Hats"){
	 	document.body.style.backgroundColor = "blue";
	} else if(s.value == "Beanies"){
		document.body.style.backgroundColor = "red";
	} else if(s.value == "Shirts"){
		document.body.style.backgroundColor = "green";
	} else if(s.value == "Hoodies"){
		document.body.style.backgroundColor = "black";
	} 
}
