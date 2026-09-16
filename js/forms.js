function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("leadName")?.value.trim() || "";
    const phone = document.getElementById("leadPhone")?.value.trim() || "";
    const email = document.getElementById("leadEmail")?.value.trim() || "";
    const msg = document.getElementById("leadMessage")?.value.trim() || "";

    const fullMessage = `*Novo Contato via Site - IMPEL*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*E-mail:* ${email}\n*Mensagem:* ${msg}`;

    if (typeof openWhatsapp === "function") {
      openWhatsapp(fullMessage);
    } else if (typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.whatsappNumber) {
      const encoded = encodeURIComponent(fullMessage);
      window.open(`https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encoded}`, "_blank");
    } else {
      alert("Erro ao conectar com o WhatsApp. Verifique as configurações.");
    }
  };
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactForm);
} else {
  initContactForm();
}
