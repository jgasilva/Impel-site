function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("leadName")?.value.trim() || "";
    const phone = document.getElementById("leadPhone")?.value.trim() || "";
    const email = document.getElementById("leadEmail")?.value.trim() || "";
    const msg = document.getElementById("leadMessage")?.value.trim() || "";

    if (!name || (!phone && !email)) {
      alert("Por favor, informe seu nome e ao menos um meio de contato (telefone ou e-mail).");
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_contato",
      form_name: "contactForm",
      lead_channel: "whatsapp"
    });

    const fullMessage = `*Novo Contato via Site - IMPEL*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*E-mail:* ${email}\n*Mensagem:* ${msg}`;
    const encoded = encodeURIComponent(fullMessage);
    const targetPhone = typeof SITE_SETTINGS !== "undefined" && SITE_SETTINGS.whatsappNumber ? SITE_SETTINGS.whatsappNumber : "5583998586796";
    const waUrl = `https://wa.me/${targetPhone}?text=${encoded}`;

    const newTab = window.open(waUrl, "_blank");
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      window.location.href = waUrl;
    }
  };
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactForm);
} else {
  initContactForm();
}
