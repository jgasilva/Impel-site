function openWhatsapp(message) {
  const defaultMsg = typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.defaultWhatsappMessage
    ? SITE_SETTINGS.defaultWhatsappMessage
    : "Olá, gostaria de solicitar um orçamento para um projeto sob medida.";
  const phone = typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.whatsappNumber
    ? SITE_SETTINGS.whatsappNumber
    : "5583998586796";

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "click_whatsapp",
    lead_channel: "whatsapp"
  });

  const text = encodeURIComponent(message || defaultMsg);
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest('[data-whatsapp], a[href*="wa.me"], a[href*="whatsapp.com"]');
  if (!trigger) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "click_whatsapp",
    lead_channel: "whatsapp",
    link_url: trigger.getAttribute("href") || ""
  });
});
