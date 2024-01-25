const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav_link");

menu.addEventListener("click", () => {
    navbar.classList.remove("hidden");
    close.classList.remove("hidden")
    menu.classList.add("hidden");
})

close.addEventListener("click", () => {
    navbar.classList.add("hidden");
    close.classList.add("hidden");
    menu.classList.remove("hidden");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.add("hidden");
        menu.classList.remove("hidden");
        close.classList.add("hidden");
    })
})  



