function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
    toggle.textContent = mobileNav.classList.contains("is-open") ? "×" : "☰";
  });
}

document.addEventListener("componentsLoaded", initMobileMenu);