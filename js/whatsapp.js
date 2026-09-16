function openWhatsapp(message = SITE_SETTINGS.defaultWhatsappMessage) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll("[data-whatsapp]");
  triggers.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const customMessage = button.getAttribute("data-message");
      openWhatsapp(customMessage || undefined);
    });
  });
});
