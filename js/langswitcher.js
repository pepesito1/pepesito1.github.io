var langSwitcher = document.getElementById("languageSwitcher"); //fetch the button, store it on langSwitcher
		var onLangSwitch = function() {
			var lang = localStorage.getItem("contentLang")??'contentOg'; //gets the contentLang from localStorage, if it doesnt exist its contentOg, renders the page with that

			var fontFont; //here we will store the font
			
			document.getElementById("mainBodyContent").innerHTML = contentLang; //displays contentOg by default, once a contentLang has been stored it will use that
			if (lang === 'contentOg') {
                document.getElementById("mainBodyContent").innerHTML = contentOg; //sets the mainBodyContent content t o whatever was in contentOG, same for the rest
				fontSizey = "100" //fontSizey is in percentage	
				localStorage.setItem("contentLang", 'contentOg'); //sets the contentLang to the current language
			} else if (lang === 'contentEs') {
				document.getElementById("mainBodyContent").innerHTML = contentEs;
				fontSizey= "100";
				localStorage.setItem("contentLang", 'contentEs'); //sets the contentLang to the current language
			} else if (lang === "contentEn") {
				document.getElementById("mainBodyContent").innerHTML = contentEn;
				fontSizey = "100";
				localStorage.setItem("contentLang", 'contentEn'); //sets the contentLang to the current language
			} else if (lang ==="contentOg"){ //sets the fontFont to the secretFont file, sets the fontSizey to 180
			    document.getElementById("mainBodyContent").innerHTML = contentOg;
				fontFont = "secretFont";
				fontSizey = "180";
				localStorage.setItem("contentLang", 'contentOg'); //sets the contentLang to the current language
			}
			document.getElementById("mainBodyContent").style.fontFamily = fontFont; //sets the font to each respective font
			document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%"; //here it turns fontSizey to an integer, makes it a percentage
langSwitcher.addEventListener("click", onLangSwitch);
		