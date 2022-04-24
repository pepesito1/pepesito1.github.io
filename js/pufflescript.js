var storedGif = document.getElementById("boilerKeeper");
var onGifClick = function() {
	if (document.getElementById("boilerKeeper").src.includes("/images/greenKeeper.gif")) {
	document.getElementById("boilerKeeper").src = "/images/blueKeeper.gif";
	} else if (document.getElementById("boilerKeeper").src.includes("/images/blueKeeper.gif")) {
		document.getElementById("boilerKeeper").src = "/images/yellowKeeper.gif";
	} else if (document.getElementById("boilerKeeper").src.includes("/images/yellowKeeper.gif")) {
		document.getElementById("boilerKeeper").src = "/images/redKeeper.gif";
	} else if (document.getElementById("boilerKeeper").src.includes("/images/redKeeper.gif")) {
		document.getElementById("boilerKeeper").src = "/images/greenKeeper.gif";
	}
}
storedGif.addEventListener("click", onGifClick);