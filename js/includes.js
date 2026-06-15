async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Erro ao carregar ${file}`);
    }

    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("site-header", "components/header.html");
  await loadComponent("site-footer", "components/footer.html");

  document.dispatchEvent(new Event("componentsLoaded"));
});