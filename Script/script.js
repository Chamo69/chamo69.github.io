let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("heaader nav a");

// Toggle menu when clicking menu icon
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Function to remove active class from all nav links
function removeActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// Function to add active class to the correct nav link
function highlightActiveSection() {
  let scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust for better accuracy
  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  removeActiveClass();

  if (currentSection) {
    let activeLink = document.querySelector(
      `heaader nav a[href="#${currentSection}"]`
    );
    if (activeLink) {
      
      activeLink.classList.add("active");
    }
  }
}

// Event listener for scroll
window.addEventListener("scroll", highlightActiveSection);

// Initial call to highlight the active section when the page loads
document.addEventListener("DOMContentLoaded", highlightActiveSection);


window.onload = function() {
// Reset the form fields when the page loads
  document.getElementById("form").reset();
};

document.addEventListener("DOMContentLoaded", function () {
  let preloader = document.getElementById("preloader");
  let content = document.getElementById("content");

  setTimeout(() => {
      preloader.style.opacity = "0"; // Fade-out effect
      setTimeout(() => {
          preloader.style.display = "none"; // Hide preloader
          content.style.display = "block"; // Show main content
          document.body.style.overflowY = "auto"; // Enable scrolling
      }, 1000); // 1s after opacity 0
  }, 3000); // 5s loading
});

window.onload = function () {
  // Fix: Wait until preloader finishes to trigger animations
  setTimeout(() => {
      document.body.style.overflowY = "auto"; // Enable scrolling

      ScrollReveal({ 
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
      });
      // Initialize ScrollReveal after preloader is removed
      ScrollReveal().reveal('.home-desc, .me, .content1, .content3', { delay: 200, origin: 'left' });
      ScrollReveal().reveal('.content2, .content4', { delay: 200, origin: 'right' });
      ScrollReveal().reveal('.home-img, .heading', { delay: 200, scale: 0.80 });
      ScrollReveal().reveal('.service-box', { delay: 200, scale: 0.50 });
      ScrollReveal().reveal('.website-item', { delay: 200, scale: 0.50 });

  }, 3000); // Wait 6s (5s preloader + 1s fade out)
};
