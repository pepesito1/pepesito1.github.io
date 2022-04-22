document.addEventListener("DOMContentLoaded", function(event) {
	var localVariable = localStorage.getItem("data-theme")??'light';
	document.documentElement.setAttribute("data-theme", localVariable);
	var themeSwitcher = document.getElementById("theme-switcher");
	themeSwitcher.onclick = function() {
		var currentTheme = document.documentElement.getAttribute("data-theme");
		var switchToTheme = currentTheme === "dark" ? "light" : "dark";
		localStorage.setItem("data-theme", switchToTheme);
		document.documentElement.setAttribute("data-theme", switchToTheme);
	}
};