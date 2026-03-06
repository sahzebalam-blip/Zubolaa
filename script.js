const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...navLinks]
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activateNav = () => {
  let currentId = "home";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", href === currentId);
  });
};

window.addEventListener("scroll", activateNav);
window.addEventListener("load", activateNav);

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
