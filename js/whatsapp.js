let lastWhatsappPush = 0;

function pushWhatsappEvent(extra = {}) {
  const now = Date.now();
  if (now - lastWhatsappPush < 300) return;
  lastWhatsappPush = now;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "click_whatsapp",
    lead_channel: "whatsapp",
    ...extra,
  });
}

function openWhatsapp(message) {
  const defaultMsg =
    typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.defaultWhatsappMessage
      ? SITE_SETTINGS.defaultWhatsappMessage
      : "Olá, gostaria de solicitar um orçamento para um projeto sob medida.";
  const phone =
    typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.whatsappNumber
      ? SITE_SETTINGS.whatsappNumber
      : "5583998586796";

  pushWhatsappEvent();

  const text = encodeURIComponent(message || defaultMsg);
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]');
  if (!trigger) return;

  pushWhatsappEvent({
    link_url: trigger.getAttribute("href") || "",
  });
});
