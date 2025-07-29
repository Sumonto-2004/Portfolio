// ============================
// Sumonto Biswas - script.js
// ============================

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  const themeToggle = document.getElementById("theme-toggle");

  // Navigation click handler
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href").substring(1);
      sections.forEach((sec) => {
        sec.classList.remove("active");
      });
      document.getElementById(target).classList.add("active");
    });
  });

  // Default first section active
  if (sections.length > 0) {
    sections[0].classList.add("active");
  }

  // Theme toggle button
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  // Create metal atoms animation (decorative)
  const atomContainer = document.createElement("div");
  atomContainer.style.position = "fixed";
  atomContainer.style.top = "0";
  atomContainer.style.left = "0";
  atomContainer.style.width = "100vw";
  atomContainer.style.height = "100vh";
  atomContainer.style.zIndex = "-1";
  atomContainer.style.pointerEvents = "none";

  for (let i = 0; i < 20; i++) {
    const atom = document.createElement("div");
    atom.classList.add("atom-icon");
    atom.style.position = "absolute";
    atom.style.top = Math.random() * 100 + "%";
    atom.style.left = Math.random() * 100 + "%";
    atom.style.animationDuration = (2 + Math.random() * 3) + "s";
    atomContainer.appendChild(atom);
  }

  document.body.appendChild(atomContainer);
});

