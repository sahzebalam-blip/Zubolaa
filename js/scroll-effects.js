document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealItems = [
    ...document.querySelectorAll(".hero-copy"),
    ...document.querySelectorAll(".hero-visual"),
    ...document.querySelectorAll(".section-intro"),
    ...document.querySelectorAll(".gateway-card"),
    ...document.querySelectorAll(".zubot-copy"),
    ...document.querySelectorAll(".zubot-panel"),
    ...document.querySelectorAll(".spotlight-copy"),
    ...document.querySelectorAll(".spotlight-visual"),
    ...document.querySelectorAll(".future-strip-inner"),
    ...document.querySelectorAll(".anchor-strip")
  ];

  if (!revealItems.length) return;

  // Reduced motion: show everything immediately
  if (prefersReducedMotion) {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
      item.style.removeProperty("--reveal-delay");
    });
    return;
  }

  // Stagger helper for grouped items
  const setRevealDelays = () => {
    const groups = [
      document.querySelectorAll(".gateway-card"),
      document.querySelectorAll(".hero-copy, .hero-visual"),
      document.querySelectorAll(".zubot-copy, .zubot-panel"),
      document.querySelectorAll(".spotlight-copy, .spotlight-visual")
    ];

    groups.forEach((group) => {
      group.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${index * 90}ms`);
      });
    });

    document.querySelectorAll(".future-strip-inner, .anchor-strip, .section-intro").forEach((item) => {
      item.style.setProperty("--reveal-delay", "0ms");
    });
  };

  setRevealDelays();

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.14
    }
  );

  revealItems.forEach((item) => observer.observe(item));
});
