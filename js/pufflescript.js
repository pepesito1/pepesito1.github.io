 //puffle keeper script
	var storedGif = document.getElementById("boilerKeeper"); //we grab the gif and store it in storedboilerKeeper
	var onGifClick = function() {
	  if (document.getElementById("boilerKeeper").src.includes("/media/greenKeeper.gif")) {
		document.getElementById("boilerKeeper").src = "/media/blueKeeper.gif";

	  } else if (document.getElementById("boilerKeeper").src.includes("/media/blueKeeper.gif")) {
		document.getElementById("boilerKeeper").src = "/media/yellowKeeper.gif";

	  } else if (document.getElementById("boilerKeeper").src.includes("/media/yellowKeeper.gif")) {
		document.getElementById("boilerKeeper").src = "/media/redKeeper.gif";

	  } else if (document.getElementById("boilerKeeper").src.includes("/media/redKeeper.gif")) {
		document.getElementById("boilerKeeper").src = "/media/greenKeeper.gif";
	  }
	}
	storedGif.addEventListener("click", onGifClick);