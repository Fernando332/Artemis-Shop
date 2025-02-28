document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // Cerrar menú al hacer clic en un enlace
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
      }
    })
  })

  // Animación de scroll
  const scrollElements = document.querySelectorAll(".service-card, .product-card, .testimonial-card")

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  }

  const displayScrollElement = (element) => {
    element.classList.add("scrolled")
  }

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled")
  }

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el)
      } else {
        hideScrollElement(el)
      }
    })
  }

  // Añadir estilos CSS para la animación
  const style = document.createElement("style")
  style.textContent = `
        .service-card, .product-card, .testimonial-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .service-card.scrolled, .product-card.scrolled, .testimonial-card.scrolled {
            opacity: 1;
            transform: translateY(0);
        }
    `
  document.head.appendChild(style)

  window.addEventListener("scroll", () => {
    handleScrollAnimation()
  })

  // Iniciar animaciones
  handleScrollAnimation()

  // Header fijo con cambio de color al hacer scroll
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(35, 39, 42, 0.95)"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.backgroundColor = "var(--dark-color)"
      header.style.boxShadow = "none"
    }
  })
})

