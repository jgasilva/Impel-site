function openWhatsapp(message) {
  const defaultMsg = typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.defaultWhatsappMessage 
    ? SITE_SETTINGS.defaultWhatsappMessage 
    : "Olá, gostaria de solicitar um orçamento para um projeto sob medida.";
  const phone = typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.whatsappNumber 
    ? SITE_SETTINGS.whatsappNumber 
    : "5583998586796";

  const text = encodeURIComponent(message || defaultMsg);
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-whatsapp]");
  if (!trigger) return;

  e.preventDefault();
  const customMessage = trigger.getAttribute("data-message");
  openWhatsapp(customMessage || undefined);
});
