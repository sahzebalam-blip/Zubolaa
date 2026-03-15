document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealTargets = document.querySelectorAll(
    ".hero-copy, .hero-visual, .section-intro, .gateway-card, .zubot-copy, .zubot-panel, .spotlight-copy, .spotlight-visual, .future-strip-inner, .anchor-strip"
  );

  if (!revealTargets.length) return;

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealTargets.forEach((el, index) => {
    el.style.setProperty("--reveal-delay", `${Math.min(index * 40, 220)}ms`);
    observer.observe(el);
  });
});
