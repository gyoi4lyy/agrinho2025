// Função básica de exemplo para feedback de clique nos menus

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("nav ul li a");
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Você clicou em: ${item.textContent}`);
    });
  });

  const searchButton = document.querySelector(".search-user button");
  searchButton.addEventListener("click", () => {
    const query = document.querySelector(".search-user input").value;
    alert(`Você buscou por: ${query}`);
  });
});

