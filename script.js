// Ensure the DOM is ready before running any scripts
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init("2dfz6Na_INznDegs6");
  
    // Handle contact form submission using EmailJS
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      emailjs
        .send("service_e39m54", "template_p29kozq", {
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          alert("Thank you! Your message has been sent.");
          contactForm.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Oops, something went wrong. Please try again.");
        });
    });
  
    // Add click event for each menu item to open the image modal
    const menuItems = document.querySelectorAll(".menu-item");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
  
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        const imageSrc = this.getAttribute("data-image");
        modalImage.src = imageSrc;
        modal.style.display = "flex";
      });
    });
  
    // Close modal when clicking outside the image or on the close icon
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.classList.contains("modal-close")) {
        closeModal();
      }
    });
  });
  
  // Function to close the image modal
  function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
  }
  
  // Toggle the mobile navigation menu
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
  
  // Optional: Close mobile nav if clicking outside
  document.addEventListener("click", function (event) {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navLinks.classList.remove("active");
    }
  });

  let isShrunk = false;
  let debounceTimeout = null;
  
  window.addEventListener("scroll", function () {
    clearTimeout(debounceTimeout); // Clear any existing timeout
    debounceTimeout = setTimeout(() => {
      const header = document.querySelector("header");
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > 55 && !isShrunk) {
        header.classList.add("shrink");
        isShrunk = true;
      } else if (currentScrollY <= 50 && isShrunk) {
        header.classList.remove("shrink");
        isShrunk = false;
      }
    }, 2000); // Delay of 2000ms (2.0s) to reduce frequent toggling
  });  