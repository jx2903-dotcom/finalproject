// DOM queries
const body = document.body;
const themeToggleButton = document.querySelector("#theme-toggle");
const themeStatus = document.querySelector("#theme-status");
const highlightFullGroomButton = document.querySelector("#highlight-full-groom");
const serviceCards = document.querySelectorAll(".dog-card");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");

// Theme toggle: change CSS + text
function toggleTheme() {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");

  if (themeStatus) {
    themeStatus.textContent = isDark
      ? "Dark theme active."
      : "Light theme active.";
  }

  if (themeToggleButton) {
    themeToggleButton.setAttribute("aria-pressed", isDark ? "true" : "false");
  }
}

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", toggleTheme);
}

// Highlight "full groom" service using classes
function highlightFullGroom() {
  if (!serviceCards.length) return;

  serviceCards.forEach((card) => {
    const type = card.getAttribute("data-type");

    if (type === "full") {
      card.classList.remove("dimmed");
      card.classList.add("highlighted");
    } else {
      card.classList.remove("highlighted");
      card.classList.toggle("dimmed");
    }
  });
}

if (highlightFullGroomButton) {
  highlightFullGroomButton.addEventListener("click", highlightFullGroom);
}

// Fake submit handling: prevent real submit, show message
function handleFormSubmit(event) {
  event.preventDefault();

  if (formStatus) {
    formStatus.textContent =
      "Thank you for your request. This is a demo site, so no real booking is created, but the form shows how a small business could collect messages.";
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);
}
