document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector(".site-header");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  body.classList.add("is-loaded");

  // External links safety
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const currentRel = link.getAttribute("rel") || "";
    const relParts = currentRel.split(" ").filter(Boolean);

    if (!relParts.includes("noopener")) relParts.push("noopener");
    if (!relParts.includes("noreferrer")) relParts.push("noreferrer");

    link.setAttribute("rel", relParts.join(" "));
  });

  // Smooth anchor scroll with sticky header offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const extraOffset = 12;
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset;

      window.scrollTo({
        top: targetTop,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });

  // Optional helper: opening scroll indicator click polish
  const openingScroll = document.querySelector(".scroll-indicator-opening");
  if (openingScroll) {
    openingScroll.addEventListener("mouseenter", () => {
      openingScroll.classList.add("is-hovered");
    });

    openingScroll.addEventListener("mouseleave", () => {
      openingScroll.classList.remove("is-hovered");
    });
  }
});
