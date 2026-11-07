// Footer dynamic content
const currentDate = new Date();
document.getElementById("currentyear").innerText = currentDate.getFullYear();
document.getElementById("lastModified").innerText = `Last Modification: ${document.lastModified}`;

// Toggle the navigation menu when the hamburger button is clicked
const menuButton = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuIcon.classList.toggle("fa-bars", !isOpen);
  menuIcon.classList.toggle("fa-xmark", isOpen);
});
