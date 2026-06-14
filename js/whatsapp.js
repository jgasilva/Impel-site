function openWhatsapp(message = SITE_SETTINGS.defaultWhatsappMessage) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
}