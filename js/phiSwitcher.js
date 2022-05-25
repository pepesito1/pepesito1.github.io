	 // modeVariable is either light or dark for the theme, and the storedLocalContent is either contentEn,Es,Og or contentSpyZ
phiHrefSwitch = function() {
var modeVariable = localStorage.getItem("data-theme")??'light'; //we fetch it again, for some reason. i should use let and the other thingy instead of var
var storedLocalContent = localStorage.getItem("localContentLang")??'contentOg';
	if (modeVariable == "light" &&  storedLocalContent == "contentEn"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if (modeVariable == "light" &&  storedLocalContent == "contentEs"){
		document.getElementById("phiLink").href = "/main/phi/phi_es_light";

	} else if (modeVariable == "light" &&  storedLocalContent == "contentOg"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if(modeVariable == "light" &&  storedLocalContent == "contentSpy"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if (modeVariable == "dark" &&  storedLocalContent == "contentEs"){
		document.getElementById("phiLink").href = "/main/phi/phi_es_dark";

	} else if(modeVariable == "dark" &&  storedLocalContent == "contentOg"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if(modeVariable == "dark" &&  storedLocalContent == "contentSpy"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if(modeVariable == "dark" &&  storedLocalContent == "contentEn"){
	document.getElementById("phiLink").href = "/main/phi/phi_en_dark";
	}};

	//theme switcher doesnt work properly. if the theme is light then it changes the theme to dark due to the way
	//the functions are ran, this is my fix:
phiInvertedHrefSwitch = function() {
var modeVariable = localStorage.getItem("data-theme")??'light'; //we fetch it again, for some reason. i should use let and the other thingy instead of var
var storedLocalContent = localStorage.getItem("localContentLang")??'contentOg';
	if (modeVariable == "dark" &&  storedLocalContent == "contentEn"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if (modeVariable == "dark" &&  storedLocalContent == "contentEs"){
		document.getElementById("phiLink").href = "/main/phi/phi_es_light";

	} else if (modeVariable == "dark" &&  storedLocalContent == "contentOg"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if(modeVariable == "dark" &&  storedLocalContent == "contentSpy"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if (modeVariable == "light" &&  storedLocalContent == "contentEs"){
		document.getElementById("phiLink").href = "/main/phi/phi_es_dark";

	} else if(modeVariable == "light" &&  storedLocalContent == "contentOg"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if(modeVariable == "light" &&  storedLocalContent == "contentSpy"){
		document.getElementById("phiLink").href = "/main/phi/phi_en_dark";

	} else if(modeVariable == "light" &&  storedLocalContent == "contentEn"){
	document.getElementById("phiLink").href = "/main/phi/phi_en_dark";
	}};
	//holy shit this code is bad
	
langSwitcher.addEventListener("click", phiHrefSwitch);
themeSwitcher.addEventListener("click", phiInvertedHrefSwitch);
phiHrefSwitch();