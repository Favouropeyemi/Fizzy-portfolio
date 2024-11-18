
// Select the header element
const header = document.querySelector("header");

// Add sticky class on scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Select the menu icon and navbar elements
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");



// Toggle menu icon and navbar open class on menu click
menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
});

// Remove active classes on scroll
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Ensure 'home-text' is preceded by a dot if it's a class, or by a '#' if it's an ID
sr.reveal('.abt-1', { delay: 200, origin: 'top' });
sr.reveal('.portfolio-1', { delay: 200, origin: 'left' });
sr.reveal('.portfolio-2', { delay: 300, origin: 'left' });
sr.reveal('.portfolio-3', { delay: 400, origin: 'left' });
sr.reveal('.portfolio-4', { delay: 500, origin: 'left' });
sr.reveal('.portfolio-5', { delay: 600, origin: 'left' });
sr.reveal('.portfolio-6', { delay: 700, origin: 'left' });
// 
sr.reveal('.abt-2, .abt-phone', { delay: 500, origin: 'left' });
sr.reveal('.cert-btn', { delay: 500, origin: 'left' });
sr.reveal('.about-image img', { delay: 600, origin: 'left' });
// 
sr.reveal('.services', { delay: 500, origin: 'left' });






let date = new Date().getFullYear();
document.querySelector('#year').textContent = date; // Only update the year
