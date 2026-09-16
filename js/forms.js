// Gerenciamento de formulários do site IMPEL
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("leadName")?.value.trim() || "";
    const phone = document.getElementById("leadPhone")?.value.trim() || "";
    const email = document.getElementById("leadEmail")?.value.trim() || "";
    const msg = document.getElementById("leadMessage")?.value.trim() || "";

    const fullMessage = `*Novo Contato via Site - IMPEL*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*E-mail:* ${email}\n*Mensagem:* ${msg}`;

    if (typeof openWhatsapp === "function") {
      openWhatsapp(fullMessage);
    } else {
      console.error("Função openWhatsapp não encontrada.");
    }
  });
});
