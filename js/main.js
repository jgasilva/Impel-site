document.addEventListener("DOMContentLoaded", () => {
  const whatsappButtons = document.querySelectorAll("[data-whatsapp]");

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openWhatsapp();
    });
  });
});