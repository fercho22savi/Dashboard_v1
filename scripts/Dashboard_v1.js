// Toggle Sidebar (mobile)
const toggleBtn = document.querySelector(".topbar i");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Marcar menú activo
const menuItems = document.querySelectorAll(".menu li");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Botón cerrar sesión
const logoutBtn = document.querySelector(".menu li:last-child");
logoutBtn.addEventListener("click", () => {
  if (confirm("¿Seguro que deseas cerrar sesión?")) {
    alert("Sesión cerrada correctamente ✅");
    // Aquí puedes redirigir: window.location.href = "login.html";
  }
});

// Acciones de clientes
const clientActions = document.querySelectorAll(".clients span i");
clientActions.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("fa-message")) {
      alert("📩 Enviando mensaje al cliente...");
    }
    if (icon.classList.contains("fa-phone")) {
      alert("📞 Llamando al cliente...");
    }
  });
});

// Acciones en las órdenes (clic en estado)
const statusTags = document.querySelectorAll(".status");
statusTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    alert(`Estatus actual: ${tag.innerText}`);
  });
});

// Buscador en tabla de órdenes
const searchInput = document.querySelector(".topbar input");
searchInput.addEventListener("keyup", () => {
  let filter = searchInput.value.toLowerCase();
  let rows = document.querySelectorAll(".orders tbody tr");
  rows.forEach((row) => {
    let text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});
