var langSwitcher = document.getElementById("languageSwitcher"); //fetch the button, store it on langSwitcher
var localLang = localStorage.getItem("contentLang")??'contentOg'; //gets the contentLang from localStorage, if it doesnt exist its contentOg, renders the page with that
document.getElementById("mainBodyContent").innerHTML = localLang; //displays contentOg by default, once a localLang has been stored it will use that

	var onLangSwitch = function() {
		var lang = document.getElementById("lang").value; //get whatever was chosen in the label option select thing
			
		var bodyOgandEn; //body to use for original and spy code languages
		var fontFont; //here we will store the font
			
		if (lang === "contentOg") {
            document.getElementById("mainBodyContent").innerHTML = contentOg; //sets the mainBodyContent content to whatever was in contentOg, same for the rest
			fontSizey = "100" //fontSizey is in percentage	
			localStorage.setItem("localLang", "contentOg"); //sets the localLang to the current language
		} else if (lang === "contentEs") {
			document.getElementById("mainBodyContent").innerHTML = contentEs;
			fontSizey= "100";
			localStorage.setItem("localLang", "contentEs"); //sets the localLang to the current language
		} else if (lang === "contentEn") {
			document.getElementById("mainBodyContent").innerHTML = contentEn;
			fontSizey = "100";
			localStorage.setItem("localLang", "contentEn"); //sets the localLang to the current language
		} else if (lang ==="contentOg"){ //sets the fontFont to the secretFont file, sets the fontSizey to 180
		    document.getElementById("mainBodyContent").innerHTML = contentOg;
			fontFont = "secretFont";
			fontSizey = "180";
			localStorage.setItem("localLang", "contentOg"); //sets the localLang to the current language
		}
		document.getElementById("mainBodyContent").style.fontFamily = fontFont; //sets the font to each respective font
		document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%"; //here it turns fontSizey to an integer, makes it a percentage
langSwitcher.addEventListener("click", onLangSwitch);
	}