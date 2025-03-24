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