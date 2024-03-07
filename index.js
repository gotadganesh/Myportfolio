const toggle = document.getElementById('toggle');

// Function to set the theme based on the checkbox state
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

// Function to toggle between light and dark mode
function toggle() {
    if (toggleSwitch.checked) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}
