document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const heroSection = document.querySelector(".hero-section");
  const cinematicOpening = document.querySelector(".cinematic-opening");
  const orbitalCard = document.querySelector(".hero-orbital-card");
  const ambientBlue = document.querySelector(".ambient-blue");
  const ambientGold = document.querySelector(".ambient-gold");
  const gatewayCards = document.querySelectorAll(".gateway-card");

  let scrollOffsetY = 0;
  let heroRotateX = 0;
  let heroRotateY = 0;

  const applyOrbitalTransform = () => {
    if (!orbitalCard) return;

    orbitalCard.style.transform = `
      perspective(1100px)
      translateY(${scrollOffsetY}px)
      rotateX(${heroRotateX}deg)
      rotateY(${heroRotateY}deg)
    `;
  };

  // Soft parallax / ambient movement
  if (!prefersReducedMotion) {
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;

        if (cinematicOpening) {
          cinematicOpening.style.setProperty(
            "--opening-shift",
            `${Math.min(scrollY * 0.18, 60)}px`
          );
        }

        scrollOffsetY = Math.min(scrollY * 0.04, 18);
        applyOrbitalTransform();

        if (ambientBlue) {
          ambientBlue.style.transform = `translate3d(${Math.min(
            scrollY * 0.015,
            12
          )}px, ${Math.min(scrollY * 0.03, 30)}px, 0)`;
        }

        if (ambientGold) {
          ambientGold.style.transform = `translate3d(${Math.max(
            -scrollY * 0.01,
            -10
          )}px, ${Math.min(scrollY * 0.02, 24)}px, 0)`;
        }
      },
      { passive: true }
    );
  }

  // Mouse-based hero tilt
  if (heroSection && orbitalCard && !prefersReducedMotion) {
    heroSection.addEventListener("mousemove", (event) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      heroRotateY = (x - 0.5) * 8;
      heroRotateX = (0.5 - y) * 8;

      applyOrbitalTransform();
    });

    heroSection.addEventListener("mouseleave", () => {
      heroRotateX = 0;
      heroRotateY = 0;
      applyOrbitalTransform();
    });
  }

  // Gateway cards live hover tilt
  if (gatewayCards.length && !prefersReducedMotion) {
    gatewayCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 6;
        const rotateX = (0.5 - y) * 6;

        card.classList.add("is-hovered");
        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
        `;
      });

      card.addEventListener("mouseleave", () => {
        card.classList.remove("is-hovered");
        card.style.transform = "";
      });
    });
  }
});
