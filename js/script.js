document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const options = { threshold: 0.25 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out. I'll get back to you soon.");
    this.reset();
  });
});
