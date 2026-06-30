document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .footer");

  sections.forEach(section => {
    section.classList.add("fade-in");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  console.log("Caelinn's Creative Studios website loaded.");
});