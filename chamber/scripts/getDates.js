const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuBtn.textContent = menu.classList.contains("show") ? "X" : "☰";
});
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

