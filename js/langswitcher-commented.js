		var contentOg ="<em> hello </em>";
		var contentEn = "<i> english content </i>"
		var contentEs = "español"
		
		var langSwitcher = document.getElementById("languageSwitcher"); //fetch the button, store it on langSwitcher
		
		var onLangSwitch = function() {
			var lang = document.getElementById("lang").value; //get whatever was chosen in the label option select thing
			
			var bodyOgandEn; //body to use for original and spy code languages
			var fontFont; //here we will store the font
			
			if (lang === "original") {
                document.getElementById("mainBodyContent").innerHTML = contentOg; //sets the mainBodyContent content t o whatever was in contentOG, same for the rest
				fontSizey = "100" //fontSizey is in percentage
				
			} else if (lang === "es") {
				document.getElementById("mainBodyContent").innerHTML = contentEs;
				fontSizey= "100"
			} else if (lang === "en") {
				document.getElementById("mainBodyContent").innerHTML = contentEn;
				fontSizey = "100"
			} else if (lang ==="secret"){ //sets the fontFont to the secretFont file, sets the fontSizey to 180
			   document.getElementById("mainBodyContent").innerHTML = contentOg;
				fontFont = "secretFont";
				fontSizey = "180"
			}
			document.getElementById("mainBodyContent").style.fontFamily = fontFont; //sets the font to each respective font
			document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%"; //here it turns fontSizey to an integer, makes it a percentage
		  };
		langSwitcher.addEventListener("click", onLangSwitch);