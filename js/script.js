console.log("Sitio cargado correctamente.");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nombre = form.querySelector("[name='nombre']");
      const email = form.querySelector("[name='email']");
      const mensaje = form.querySelector("[name='mensaje']");

      if (!nombre.value || !email.value || !mensaje.value) {
        e.preventDefault();
        alert("Por favor, completa todos los campos.");
      }
    });
  }
});