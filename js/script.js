console.log("Sitio cargado correctamente.");

document.addEventListener("DOMContentLoaded", function () {
  // Validación básica de formularios
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

  // Filtros simples para galería
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Menú móvil simple
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navList = document.querySelector('.nav-list');
  if (navbarToggler && navList) {
    navbarToggler.addEventListener('click', function() {
      navList.classList.toggle('show');
    });
  }
});