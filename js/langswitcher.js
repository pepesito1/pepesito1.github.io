var langSwitcher = document.getElementById("languageSwitcher");
var onLangSwitch = function() {
	var lang = document.getElementById("lang").value;
	var bodyOgandEn;
	var fontFont;
		if (lang === "original") {
            document.getElementById("mainBodyContent").innerHTML = contentOg;
			fontSizey = "100";
		} else if (lang === "es") {
			document.getElementById("mainBodyContent").innerHTML = contentEs;
			fontSizey= "100";
		} else if (lang === "en") {
			document.getElementById("mainBodyContent").innerHTML = contentEn;
			fontSizey = "100";
		} else if (lang ==="secret"){
			document.getElementById("mainBodyContent").innerHTML = contentOg;
			fontFont = "secretFont";
			fontSizey = "180";
		}
		document.getElementById("mainBodyContent").style.fontFamily = fontFont;
		document.getElementById("mainBodyContent").style.fontSize = parseInt(fontSizey) + "%";
	};
langSwitcher.addEventListener("click", onLangSwitch);