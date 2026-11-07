const currentDate = new Date();

document.getElementById("currentyear").innerText = currentDate.getFullYear();
// toggle display of the navigation menu when the hamburger menu is clicked
const menuButton = document.getElementById("hamburger-menu");
menuButton.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
    // change the icon to a close icon when the menu is open, and back to a hamburger icon when the menu is closed
    if (navLinks.classList.contains("show")) {
        menuButton.classList.remove("fa-bars");
        menuButton.classList.add("fa-xmark");
    } else {
        menuButton.classList.remove("fa-xmark");
        menuButton.classList.add("fa-bars");
    }
});
