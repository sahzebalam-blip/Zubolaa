document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector(".site-header");
  const universe = document.querySelector(".homepage-universe");
  const sectionAuras = document.querySelectorAll(".section-aura");
  const cards = document.querySelectorAll(
    ".gateway-card, .visual-card, .bot-window, .future-strip-inner"
  );
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

  // Opening scroll indicator hover polish
  const openingScroll = document.querySelector(".scroll-indicator-opening");
  if (openingScroll) {
    openingScroll.addEventListener("mouseenter", () => {
      openingScroll.classList.add("is-hovered");
    });

    openingScroll.addEventListener("mouseleave", () => {
      openingScroll.classList.remove("is-hovered");
    });
  }

  /* =========================================
     HOMEPAGE LIVE-NESS SYSTEM
  ========================================= */
  if (universe || sectionAuras.length || cards.length) {
    let ticking = false;

    function updateUniverseParallax() {
      const scrollY = window.scrollY;
      const glowY = prefersReducedMotion ? 0 : scrollY * 0.04;

      if (universe) {
        universe.style.transform = `translate3d(0, ${glowY}px, 0)`;
      }

      sectionAuras.forEach((aura, index) => {
        const offset = prefersReducedMotion
          ? 0
          : (scrollY * 0.02) * (index % 2 === 0 ? 1 : -1);

        aura.style.transform = `translate3d(0, ${offset}px, 0)`;
      });

      if (header) {
        if (scrollY > 20) {
          header.classList.add("is-scrolled");
        } else {
          header.classList.remove("is-scrolled");
        }
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateUniverseParallax);
        ticking = true;
      }
    }

    function setupPointerGlow() {
      if (prefersReducedMotion) return;

      cards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
          const rect = card.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;

          card.style.setProperty("--pointer-x", `${x}%`);
          card.style.setProperty("--pointer-y", `${y}%`);
          card.classList.add("is-pointer-active");
        });

        card.addEventListener("mouseleave", () => {
          card.classList.remove("is-pointer-active");
        });
      });
    }

    updateUniverseParallax();
    setupPointerGlow();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateUniverseParallax);
  }
});
