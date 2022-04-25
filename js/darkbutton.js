document.addEventListener("DOMContentLoaded", function(event) {
	var modeVariable = localStorage.getItem("data-theme")??'light';
	document.documentElement.setAttribute("data-theme", modeVariable);
	var themeSwitcher = document.getElementById("theme-switcher");
	themeSwitcher.onclick = function() {
		var currentTheme = document.documentElement.getAttribute("data-theme");
		var switchToTheme = currentTheme === "dark" ? "light" : "dark";
		localStorage.setItem("data-theme", switchToTheme);
		document.documentElement.setAttribute("data-theme", switchToTheme);
	}
});