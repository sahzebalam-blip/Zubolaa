document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".main-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (!header) return;

  const MOBILE_BREAKPOINT = 860;

  const closeMenu = () => {
    if (!nav || !menuToggle) return;

    nav.classList.remove("is-open");
    menuToggle.classList.remove("is-active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    if (!nav || !menuToggle) return;

    nav.classList.add("is-open");
    menuToggle.classList.add("is-active");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  };

  const toggleMenu = () => {
    if (!nav || !menuToggle) return;

    const isOpen = nav.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  const setActiveNavLink = () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const isCurrent =
        href === currentPage || (currentPage === "index.html" && href === "index.html");

      link.classList.toggle("is-current", isCurrent);
    });
  };

  handleHeaderState();
  setActiveNavLink();

  window.addEventListener("scroll", handleHeaderState, { passive: true });

  if (menuToggle && nav) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
          closeMenu();
        }
      });
    });

    document.addEventListener("click", (event) => {
      const clickedInsideNav = nav.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle && nav.classList.contains("is-open")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }
});
