document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return;

  const interactiveCards = document.querySelectorAll(
    ".gateway-card, .visual-card, .bot-window, .future-strip-inner"
  );

  if (!interactiveCards.length) return;

  interactiveCards.forEach((card) => {
    const updatePointerGlow = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      card.style.setProperty("--pointer-x", `${xPercent}%`);
      card.style.setProperty("--pointer-y", `${yPercent}%`);
      card.classList.add("is-pointer-active");
    };

    const clearPointerGlow = () => {
      card.classList.remove("is-pointer-active");
      card.style.removeProperty("--pointer-x");
      card.style.removeProperty("--pointer-y");
    };

    card.addEventListener("mousemove", updatePointerGlow);
    card.addEventListener("mouseenter", updatePointerGlow);
    card.addEventListener("mouseleave", clearPointerGlow);
  });
});
