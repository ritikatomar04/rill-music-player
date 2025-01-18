document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const currentTheme = localStorage.getItem("theme");

    // Check current theme and set it
    if (currentTheme === "dark") {
        setTheme("css/themes/dark-mode.css");
    } else if (currentTheme === "default") {
        setTheme("css/themes/default.css");
    } else if (currentTheme === "light-mode-1") {
        setTheme("css/themes/light-mode-1.css");
    } else if (currentTheme === "dark-mode-1") {
        setTheme("css/themes/dark-mode-1.css");
    } else {
        setTheme("css/themes/light-mode.css"); // Default to light mode
    }

    // Function to set theme
    function setTheme(themeName) {
        document.getElementById("theme").setAttribute("href", themeName);
        localStorage.setItem("theme", themeName.replace("css/themes/", "").replace(".css", "").split("-")[0]); // Store only theme name
    }

    // Toggle between themes
    darkModeToggle.addEventListener("click", function() {
        const currentTheme = document.getElementById("theme").getAttribute("href");
        if (currentTheme === "css/themes/light-mode.css") {
            setTheme("css/themes/dark-mode.css");
        } else if (currentTheme === "css/themes/dark-mode.css") {
            setTheme("css/themes/default.css");
        } else if (currentTheme === "css/themes/default.css") {
            setTheme("css/themes/light-mode-1.css");
        } else if (currentTheme === "css/themes/light-mode-1.css") {
            setTheme("css/themes/dark-mode-1.css");
        } else {
            setTheme("css/themes/light-mode.css");
        }
    });
});