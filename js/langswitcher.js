	//esto funciona asi
	
	var langSwitcher = document.getElementById("languageSwitcher"); //fetches the button, stores it on langSwitcher
	document.getElementById("mainBodyContent").innerHTML = contentOg; //displays contentOg by default
	var onLangSwitch = function() {
		var lang = document.getElementById("lang").value; //lang is equal to the label button
		var fontFont;
			if (lang === "original") {
				document.getElementById("mainBodyContent").innerHTML = contentOg; //contentOg is defined in the html
				fontSizey = "100";
			} else if (lang === "es") {
				document.getElementById("mainBodyContent").innerHTML = contentEs; //contentEs is defined on the html
				fontSizey= "100";
			} else if (lang === "en") {
				document.getElementById("mainBodyContent").innerHTML = contentEn; //content En is defined on the html
				fontSizey = "100";
			} else if (lang ==="secret"){
				document.getElementById("mainBodyContent").innerHTML = contentOg; //contentOg is defined in the html
				fontFont = "secretFont";
				fontSizey = "180";
			}
			document.getElementById("mainBodyContent").style.fontFamily = fontFont; //sets font
			document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%"; //makes the fontSizey an integer, adds a %
	};
langSwitcher.addEventListener("click", onLangSwitch); //runs function when button is clicked