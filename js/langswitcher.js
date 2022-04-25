var langSwitcher = document.getElementById("languageSwitcher");
var storedLocalContent = localStorage.getItem("localContentLang")??'contentOg';
if (storedLocalContent === "contentEn"){
	document.getElementById("mainBodyContent").innerHTML = contentEn
	document.getElementById("header").innerHTML = headerContentEn;
	fontSizey = "100";
	fontFont = "Times New Roman";
	letterSpacey = "normal"
}else if (storedLocalContent === "contentEs"){
	document.getElementById("mainBodyContent").innerHTML = contentEs;
	document.getElementById("header").innerHTML = headerContentEs;
	fontSizey= "100";
	fontFont = "Times New Roman";
	letterSpacey = "normal"
}else if (storedLocalContent === "contentOg"){
	document.getElementById("mainBodyContent").innerHTML = contentOg;
	document.getElementById("header").innerHTML = headerContentOg;
	fontSizey= "100";
	fontFont = "Times New Roman";;
	letterSpacey = "normal"
}else if (storedLocalContent === "contentSpy"){
	document.getElementById("mainBodyContent").innerHTML = contentOg;
	document.getElementById("header").innerHTML = headerContentOg;
	fontSizey = "120";
	fontFont = "secretFont";
	letterSpacey = "3px";
}
document.getElementById("mainBodyContent").style.fontFamily = fontFont;
document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%";
document.getElementById("mainBodyContent").style.letterSpacing = letterSpacey;
document.getElementById("header").style.fontFamily = fontFont;
document.getElementById("header").style.fontSize = parseInt(fontSizey) + "%";
document.getElementById("header").style.letterSpacing = letterSpacey;
var onLangSwitch = function() {
	var lang = document.getElementById("lang").value;
	var fontFont;
	if (lang === "original") {
		document.getElementById("mainBodyContent").innerHTML = contentOg;
		document.getElementById("header").innerHTML = headerContentOg;
		fontSizey = "100";
		fontFont = "Times New Roman";
		letterSpacey = "normal"
		localStorage.setItem("localContentLang", "contentOg");
	} else if (lang === "es") {
		document.getElementById("mainBodyContent").innerHTML = contentEs;
		document.getElementById("header").innerHTML = headerContentEs;
		fontSizey= "100";
		fontFont = "Times New Roman";
		letterSpacey = "normal"
		localStorage.setItem("localContentLang", "contentEs");
	} else if (lang === "en") {
		document.getElementById("mainBodyContent").innerHTML = contentEn;
		document.getElementById("header").innerHTML = headerContentEn;
		fontSizey = "100";
		fontFont = "Times New Roman";
		letterSpacey = "normal"
		localStorage.setItem("localContentLang", "contentEn");
	} else if (lang ==="secret"){
		document.getElementById("mainBodyContent").innerHTML = contentOg;
		document.getElementById("header").innerHTML = headerContentOg;
		fontSizey = "120";
		fontFont = "secretFont";
		letterSpacey = "3px";
		localStorage.setItem("localContentLang", "contentSpy");
	}
	document.getElementById("mainBodyContent").style.fontFamily = fontFont;
	document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%";
	document.getElementById("mainBodyContent").style.letterSpacing = letterSpacey;
	document.getElementById("header").style.fontFamily = fontFont; 
	document.getElementById("header").style.fontSize = parseInt(fontSizey) + "%";
	document.getElementById("header").style.letterSpacing = letterSpacey;
};
langSwitcher.addEventListener("click", onLangSwitch);