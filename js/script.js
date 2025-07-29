const navLinks = document.querySelectorAll("nav a");
const allSections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    
    allSections.forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById(targetId).classList.add("active");

    // Smooth scroll
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Set first section active by default
document.addEventListener("DOMContentLoaded", function () {
  const firstSection = document.querySelector("section");
  if (firstSection) {
    firstSection.classList.add("active");
  }
});

