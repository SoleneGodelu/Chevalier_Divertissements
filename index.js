// index.js

// ===== Mobile navigation burger toggle =====
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// ===== Smooth scroll for anchor links (Safari fallback) =====
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu after click
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
      }
    }
  });
});

// ===== Quote form basic validation / placeholder handling =====
const quoteForm = document.getElementById("quoteForm");
quoteForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  // Very light demo validation
  const name = quoteForm.name.value.trim();
  const email = quoteForm.email.value.trim();
  if (!name || !email) {
    alert("Merci de remplir au minimum votre nom et votre email.");
    return;
  }
  alert(
    "Merci pour votre demande ! Nous vous répondrons dans les plus brefs délais."
  );
  quoteForm.reset();
});
