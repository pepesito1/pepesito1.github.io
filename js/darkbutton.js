// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
	//store in a variable whatever the data-theme is in the localStorage, if it doesnt exist, then it gets set to "light"
	var modeVariable = localStorage.getItem("data-theme")??'light';

	//sets the page attribute to be either dark or light
	document.documentElement.setAttribute("data-theme", modeVariable);
				
	// Get our button switcher
	var themeSwitcher = document.getElementById("theme-switcher");
		// When our button gets clicked
		themeSwitcher.onclick = function() {
			// Get the current selected theme, on the first run  it should be `light`
			var currentTheme = document.documentElement.getAttribute("data-theme");
					
			// Switch between `dark` and `light`
			var switchToTheme = currentTheme === "dark" ? "light" : "dark";
					
			//store in the localStorage whatever the data-theme's value is (the currentTheme)			
			localStorage.setItem("data-theme", switchToTheme);
			// Set our current theme to the new one
			document.documentElement.setAttribute("data-theme", switchToTheme);
		}
});