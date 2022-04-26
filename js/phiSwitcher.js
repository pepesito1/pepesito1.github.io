	 // modeVariable is either light or dark for the theme, and the storedLocalContent is either contentEn,Es,Og or contentSpyZ
	phiHrefSwitch = function() {
	var modeVariable = localStorage.getItem("data-theme")??'light'; //we fetch it again, for some reason. i should use let and the other thingy instead of var
	var storedLocalContent = localStorage.getItem("localContentLang")??'contentOg';
		if (modeVariable == "light" &&  storedLocalContent == "contentEn"){
			document.getElementById("phiLink").href = "/main/phi/enLight/phi.html";
			
		} else if (modeVariable == "light" &&  storedLocalContent == "contentEs"){
			document.getElementById("phiLink").href = "/main/phi/esLight/phi.html";
			
		} else if (modeVariable == "light" &&  storedLocalContent == "contentOg"){
			document.getElementById("phiLink").href = "/main/phi/enLight/phi.html";
			
		} else if(modeVariable == "light" &&  storedLocalContent == "contentSpy"){
			document.getElementById("phiLink").href = "/main/phi/enLight/phi.html";
			
		} else if (modeVariable == "light" &&  storedLocalContent == "contentEn"){
			document.getElementById("phiLink").href = "/main/phi/enLight/phi.html";
			
		} else if (modeVariable == "dark" &&  storedLocalContent == "contentEs"){
			document.getElementById("phiLink").href = "/main/phi/esDark/phi.html";
			
		} else if(modeVariable == "dark" &&  storedLocalContent == "contentOg"){
			document.getElementById("phiLink").href = "/main/phi/enDark/phi.html";
			
		} else if(modeVariable == "dark" &&  storedLocalContent == "contentSpy"){
			document.getElementById("phiLink").href = "/main/phi/enDark/phi.html";
			
		} else if(modeVariable == "dark" &&  storedLocalContent == "contentEn"){
		document.getElementById("phiLink").href = "/main/phi/enDark/phi.html";
		}};
	langSwitcher.addEventListener("click", phiHrefSwitch);
	themeSwitcher.addEventListener("click", phiHrefSwitch);
	phiHrefSwitch();