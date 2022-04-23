	//esto funciona asi
	
	var langSwitcher = document.getElementById("languageSwitcher"); //fetches the button, stores it on langSwitcher
	var localVariable = localStorage.getItem("localContentLang")??'contentOg'; //grabs localContentLang, if it doesnt exist its set to contentOg, stores it in localVariable
	
	//localVariable is set to a string, so i turn that string back into the javascript variable defined in the main html
	if (localVariable === "contentEn"){
	document.getElementById("mainBodyContent").innerHTML = contentEn;
	document.getElementById("header").innerHTML = headerContentEn;
	}else if (localVariable === "contentEs"){
	document.getElementById("mainBodyContent").innerHTML = contentEs;
	document.getElementById("header").innerHTML = headerContentEs;
	}else if (localVariable === "contentOg"){
	document.getElementById("mainBodyContent").innerHTML = contentOg;
	document.getElementById("header").innerHTML = headerContentOg;
	}else if (localVariable === "contentSpy"){
	document.getElementById("mainBodyContent").style.fontFamily = "secretFont";
	document.getElementById("mainBodyContent").style.fontSize = "180%";
	document.getElementById("mainBodyContent").innerHTML = contentOg;
	document.getElementById("header").innerHTML = headerContentOg;
	}
	var onLangSwitch = function() {
		var lang = document.getElementById("lang").value; //lang is equal to the label button, here the languages change freely after the page is loaded and user selects things
		var fontFont;
			if (lang === "original") {
				document.getElementById("mainBodyContent").innerHTML = contentOg; //contentOg is defined in the html
				document.getElementById("header").innerHTML = headerContentOg; //grabs the header, headerContent is defined in the html
				fontSizey = "100";
				localStorage.setItem("localContentLang", "contentOg"); //sets to localContentLang the contentOg
			} else if (lang === "es") {
				document.getElementById("mainBodyContent").innerHTML = contentEs; //contentEs is defined on the html
				document.getElementById("header").innerHTML = headerContentEs; //grabs the header, headerContent is defined in the html
				fontSizey= "100";
				localStorage.setItem("localContentLang", "contentEs"); //sets to localContentLang the contentEs
			} else if (lang === "en") {
				document.getElementById("mainBodyContent").innerHTML = contentEn; //content En is defined on the html
				document.getElementById("header").innerHTML = headerContentEn; //grabs the header, headerContent is defined in the html
				fontSizey = "100";
				localStorage.setItem("localContentLang", "contentEn"); //sets to localContentLang the contentEn
			} else if (lang ==="secret"){
				document.getElementById("mainBodyContent").innerHTML = contentOg; //contentOg is defined in the html
				document.getElementById("header").innerHTML = headerContentOg; //grabs the header, headerContent is defined in the html
				fontFont = "secretFont";
				fontSizey = "180";
				localStorage.setItem("localContentLang", "contentSpy"); //sets to localContentLang the contentSpy
			}
			document.getElementById("mainBodyContent").style.fontFamily = fontFont; //sets font
			document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%"; //makes the fontSizey an integer, adds a %
	};
langSwitcher.addEventListener("click", onLangSwitch); //runs function when button is clicked