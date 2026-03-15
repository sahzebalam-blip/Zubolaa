document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  body.classList.add("is-loaded");

  // External links safety (future-safe)
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    if (!link.rel.includes("noopener")) {
      link.rel = `${link.rel} noopener noreferrer`.trim();
    }
  });

  // Smooth anchor scroll fallback
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  });
});
