var langSwitcher = document.getElementById("languageSwitcher"); //fetches the button, stores it on langSwitcher
var storedLocalContent = localStorage.getItem("localContentLang")??'contentOg'; //grabs localContentLang, if it doesnt exist its set to contentOg, stores it in storedLocalContent
	
//storedLocalContent is set to a string, so i turn that string back into the javascript variable defined in the main html
if (storedLocalContent === "contentEn"){
	var currentLangSayer = "the current language is: English"
	document.getElementById("mainBodyContent").innerHTML = contentEn;
	document.getElementById("header").innerHTML = headerContentEn + "<br>" + currentLangSayer;
	fontSizey = "100";
	fontFont = "Times New Roman";
	letterSpacey = "normal"
}else if (storedLocalContent === "contentEs"){
	var currentLangSayer = "el idioma actual es: Español"
	document.getElementById("mainBodyContent").innerHTML = contentEs;
	document.getElementById("header").innerHTML = headerContentEs + "<br>" + currentLangSayer;
	fontSizey= "100";
	fontFont = "Times New Roman";
	letterSpacey = "normal"
}else if (storedLocalContent === "contentOg"){
	var currentLangSayer = "current lang is: original"
	document.getElementById("mainBodyContent").innerHTML = contentOg;
	document.getElementById("header").innerHTML = headerContentOg + "<br>" + currentLangSayer;
	fontSizey= "100";
	fontFont = "Times New Roman";;
	letterSpacey = "normal"
}else if (storedLocalContent === "contentSpy"){
	var currentLangSayer = "current lang is: original"
	document.getElementById("mainBodyContent").innerHTML = contentOg;
	document.getElementById("header").innerHTML = headerContentOg + "<br>" + currentLangSayer;
	fontSizey = "180";
	fontFont = "secretFont";
	letterSpacey = "3px";
}

document.getElementById("mainBodyContent").style.fontFamily = fontFont; //sets font
document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%"; //makes the fontSizey an integer, adds a %
document.getElementById("mainBodyContent").style.letterSpacing = letterSpacey; //changes letters spacing
document.getElementById("header").style.fontFamily = fontFont; //sets font
document.getElementById("header").style.fontSize = parseInt(fontSizey) + "%"; //makes the fontSizey an integer, adds a %
document.getElementById("header").style.letterSpacing = letterSpacey; //changes letters spacing
	
var onLangSwitch = function() {
	var lang = document.getElementById("lang").value; //lang is equal to the label button, here the languages change freely after the page is loaded and user selects things
	var fontFont;
	if (lang === "original") {
		var currentLangSayer = "current lang is: original"
		document.getElementById("mainBodyContent").innerHTML = contentOg; //contentOg is defined in the html
		document.getElementById("header").innerHTML = headerContentOg + "<br>" + currentLangSayer; //grabs the header, headerContent is defined in the html
		fontSizey = "100";
		fontFont = "Times New Roman";
		letterSpacey = "normal"
		localStorage.setItem("localContentLang", "contentOg"); //sets to localContentLang the contentOg
	} else if (lang === "es") {
		var currentLangSayer = "el idioma actual es: Español"
		document.getElementById("mainBodyContent").innerHTML = contentEs; //contentEs is defined on the html
		document.getElementById("mainBodyContent").innerHTML = contentEs; //contentEs is defined on the html
		document.getElementById("header").innerHTML = headerContentEs + "<br>" + currentLangSayer; //grabs the header, headerContent is defined in the html
		fontSizey= "100";
		fontFont = "Times New Roman";
		letterSpacey = "normal"
		localStorage.setItem("localContentLang", "contentEs"); //sets to localContentLang the contentEs
	} else if (lang === "en") {
		var currentLangSayer = "the current language is: English"
		document.getElementById("mainBodyContent").innerHTML = contentEn; //content En is defined on the html
		document.getElementById("header").innerHTML = headerContentEn + "<br>" + currentLangSayer; //grabs the header, headerContent is defined in the html
		fontSizey = "100";
		fontFont = "Times New Roman";
		letterSpacey = "normal"
		localStorage.setItem("localContentLang", "contentEn"); //sets to localContentLang the contentEn
	} else if (lang ==="secret"){
		var currentLangSayer = "current lang is: original"
		document.getElementById("mainBodyContent").innerHTML = contentOg;
		document.getElementById("header").innerHTML = headerContentOg + "<br>" + currentLangSayer;
		fontSizey = "140";
		fontFont = "secretFont";
		letterSpacey = "3px";
		localStorage.setItem("localContentLang", "contentSpy"); //sets to localContentLang the contentSpy
	}
	document.getElementById("mainBodyContent").style.fontFamily = fontFont; //sets font
	document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%"; //makes the fontSizey an integer, adds a %
	document.getElementById("mainBodyContent").style.letterSpacing = letterSpacey; //changes letters spacing
	document.getElementById("header").style.fontFamily = fontFont; //sets font
	document.getElementById("header").style.fontSize = parseInt(fontSizey) + "%"; //makes the fontSizey an integer, adds a %
	document.getElementById("header").style.letterSpacing = letterSpacey; //changes letters spacing
};

langSwitcher.addEventListener("click", onLangSwitch); //runs function when button is clicked