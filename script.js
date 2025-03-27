// script.js

// Initialize EmailJS with your User ID
emailjs.init("2dfz6Na_INznDegs6");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // alert("Thank you! We'll get back to you soon.");

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the form data using EmailJS
    emailjs.send("service_e39m54", "template_p29kozq", {
        name: name,
        email: email,
        message: message,
    })
    .then(() => {
        alert("Thank you! Your message has been sent.");
        document.getElementById("contact-form").reset(); // Reset the form
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send your message. Please try again later.");
    });
});

function showImage(imageFileName) {
    const imageElement = document.getElementById("menu-image");
    imageElement.src = imageFileName;
    imageElement.style.display = "block";
    imageElement.classList.add("fade-in");
    setTimeout(() => imageElement.classList.remove("fade-in"), 500);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});