// index.js

// Wrapper tout le code dans DOMContentLoaded pour s'assurer que le DOM est prêt
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Index.js chargé - DOMContentLoaded déclenché");

  // ===== Mobile navigation burger toggle =====
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  console.log("🍔 Burger:", burger);
  console.log("📋 Menu:", menu);

  if (burger && menu) {
    burger.addEventListener("click", () => {
      console.log("🔄 Clic sur burger - Toggle menu");
      menu.classList.toggle("open");
    });
    console.log("✅ Event listener ajouté au burger");
  } else {
    console.error("❌ Burger ou Menu introuvable!");
  }

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
        if (menu && menu.classList.contains("open")) {
          menu.classList.remove("open");
        }
      }
    });
  });

  // ===== EmailJS Configuration =====
  // Initialiser EmailJS avec votre Public Key
  // Inscrivez-vous sur https://www.emailjs.com/ pour obtenir vos clés
  // emailjs.init("YOUR_PUBLIC_KEY");

  // ===== Quote form with EmailJS =====
  const quoteForm = document.getElementById("quoteForm");
  const contactForm = document.getElementById("contactForm");

  // Fonction d'envoi de formulaire avec EmailJS
  function sendEmail(form, templateId) {
    // Pour utiliser EmailJS, décommentez les lignes ci-dessous et ajoutez vos clés
    /*
  emailjs.init("YOUR_PUBLIC_KEY");
  
  emailjs.sendForm("YOUR_SERVICE_ID", templateId, form)
    .then(() => {
      alert("Merci pour votre demande ! Nous vous répondrons dans les plus brefs délais.");
      form.reset();
    }, (error) => {
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.");
      console.error("EmailJS error:", error);
    });
  */

    // Version démo sans EmailJS (à remplacer)
    alert(
      "Merci pour votre demande ! Nous vous répondrons dans les plus brefs délais.\n\n⚠️ Mode démo : Pour activer l'envoi réel d'emails, configurez EmailJS dans index.js"
    );
    form.reset();
  }

  // Formulaire de devis (page d'accueil)
  quoteForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = quoteForm.name.value.trim();
    const email = quoteForm.email.value.trim();

    if (!name || !email) {
      alert("Merci de remplir au minimum votre nom et votre email.");
      return;
    }

    sendEmail(quoteForm, "template_devis");
  });

  // Formulaire de contact (page contact)
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("Merci de remplir tous les champs obligatoires.");
      return;
    }

    sendEmail(contactForm, "template_contact");
  });

  // ===== GLightbox initialization for galleries =====
  if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  }

  // ===== Form validation with real-time feedback =====
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^(\+33|0)[1-9](\d{2}){4}$/;
    return re.test(phone.replace(/\s/g, ""));
  }

  function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add("error");
    formGroup.classList.remove("success");

    let errorDiv = formGroup.querySelector(".error-message");
    if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      formGroup.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
  }

  function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add("success");
    formGroup.classList.remove("error");

    const errorDiv = formGroup.querySelector(".error-message");
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  // Real-time validation on blur
  document.querySelectorAll('input[type="email"]').forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        showError(input, "L'email est requis");
      } else if (!validateEmail(input.value)) {
        showError(input, "Email invalide");
      } else {
        showSuccess(input);
      }
    });
  });

  document.querySelectorAll('input[type="tel"]').forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.value.trim() !== "" && !validatePhone(input.value)) {
        showError(input, "Format: 06 12 34 56 78");
      } else {
        showSuccess(input);
      }
    });
  });

  document
    .querySelectorAll('input[required]:not([type="email"]):not([type="tel"])')
    .forEach((input) => {
      input.addEventListener("blur", () => {
        if (input.value.trim() === "") {
          showError(input, "Ce champ est requis");
        } else {
          showSuccess(input);
        }
      });
    });

  // ===== Gallery filter (for realisations, costumes, jeux pages) =====
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        galleryItems.forEach((item) => {
          if (
            filterValue === "all" ||
            item.getAttribute("data-category") === filterValue
          ) {
            item.style.display = "block";
            item.style.animation = "fadeIn 0.5s ease";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // ===== AOS Animations initialization =====
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }
}); // Fin DOMContentLoaded

    // Initialisation EmailJS
  emailjs.init("service_rykjmeg");

  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    // Netlify reçoit le formulaire normalement → pas de preventDefault
    // EmailJS peut quand même envoyer le mail en parallèle
    emailjs.sendForm("service_rykjmeg", "template_o2hp5zr", this)
      .then(() => {
        // Affiche le message de succès
        successMessage.style.display = "block";
        // Vide le formulaire
        form.reset();
      })
      .catch(err => {
        console.error("Erreur EmailJS:", err);
      });
  });