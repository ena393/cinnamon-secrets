// script.js

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});

function showImage(imageFileName) {
    const imageElement = document.getElementById("menu-image");
    imageElement.src = imageFileName;
    imageElement.style.display = "block";
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    document.addEventListener('click', closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    // Check if the clicked element is outside the menu and button
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active'); // Collapse the menu
        document.removeEventListener('click', closeMenuOnClickOutside); // Remove listener
    }
}