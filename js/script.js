document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out. I'll get back to you soon.");
    this.reset();
  });

  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    toggleBtn.innerText = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
  });
});
