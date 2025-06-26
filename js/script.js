console.log("Sitio cargado correctamente.");

document.addEventListener("DOMContentLoaded", function () {
  // Validación de formularios
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nombre = form.querySelector("[name='nombre']");
      const email = form.querySelector("[name='email']");
      const mensaje = form.querySelector("[name='mensaje']");

      if (!nombre.value || !email.value || !mensaje.value) {
        e.preventDefault();
        alert("Por favor, completa todos los campos.");
        return false;
      }

      // Validación de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        e.preventDefault();
        alert("Por favor, ingresa un email válido.");
        return false;
      }

      // Si todo está bien, mostrar mensaje de éxito
      alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    });
  }

  // Funcionalidad de filtros para galería
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Agregar clase active al botón clickeado
      this.classList.add('active');

      // Filtrar elementos de la galería
      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
          item.classList.remove('fade-in');
        }
      });
    });
  });

  // Animaciones de scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observar elementos para animaciones
  const animatedElements = document.querySelectorAll('.feature-card, .producto-card, .gallery-item');
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Navegación suave para enlaces internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Efecto parallax para hero image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroImage.style.transform = `translateY(${rate}px)`;
    });
  }

  // Lazy loading para imágenes
  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // Trigger load
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });

  // Menú móvil toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navList = document.querySelector('.nav-list');
  
  if (navbarToggler && navList) {
    navbarToggler.addEventListener('click', function() {
      navList.classList.toggle('show');
      this.setAttribute('aria-expanded', 
        this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }

  // Contador de productos (ejemplo de funcionalidad adicional)
  const productCards = document.querySelectorAll('.producto-card');
  if (productCards.length > 0) {
    console.log(`Total de productos mostrados: ${productCards.length}`);
  }

  // Efecto de escritura para títulos
  const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  };

  // Aplicar efecto de escritura al título principal si existe
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && !heroTitle.textContent.includes('Botellas')) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 50);
  }

  // Preloader (opcional)
  window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  });

  // Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Volver arriba');
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Tooltip para botones de compra
  const buyButtons = document.querySelectorAll('.btn-custom');
  buyButtons.forEach(button => {
    if (button.textContent.includes('Comprar')) {
      button.addEventListener('mouseenter', function() {
        this.setAttribute('title', '¡Agregar al carrito!');
      });
    }
  });

  console.log("Todas las funcionalidades JavaScript cargadas correctamente.");
});