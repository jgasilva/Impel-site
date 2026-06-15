document.addEventListener("click", (event) => {
  const whatsappButton = event.target.closest("[data-whatsapp]");

  if (!whatsappButton) return;

  event.preventDefault();

  openWhatsapp();
});