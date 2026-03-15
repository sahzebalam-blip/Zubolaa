document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const heroSection = document.querySelector(".hero-section");
  const cinematicOpening = document.querySelector(".cinematic-opening");
  const orbitalCard = document.querySelector(".hero-orbital-card");
  const openingLogo = document.querySelector(".opening-logo");
  const ambientBlue = document.querySelector(".ambient-blue");
  const ambientGold = document.querySelector(".ambient-gold");
  const gatewayCards = document.querySelectorAll(".gateway-card");

  // Soft parallax / movement
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

        if (orbitalCard) {
          orbitalCard.style.transform = `translateY(${Math.min(scrollY * 0.04, 18)}px)`;
        }

        if (openingLogo) {
          openingLogo.style.transform = `translateY(${Math.min(scrollY * 0.03, 12)}px)`;
        }

        if (ambientBlue) {
          ambientBlue.style.transform = `translate3d(${Math.min(scrollY * 0.015, 12)}px, ${Math.min(
            scrollY * 0.03,
            30
          )}px, 0)`;
        }

        if (ambientGold) {
          ambientGold.style.transform = `translate3d(${Math.max(-scrollY * 0.01, -10)}px, ${Math.min(
            scrollY * 0.02,
            24
          )}px, 0)`;
        }
      },
      { passive: true }
    );
  }

  // Mouse-based tilt for hero visual
  if (heroSection && orbitalCard && !prefersReducedMotion) {
    heroSection.addEventListener("mousemove", (event) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;

      orbitalCard.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    heroSection.addEventListener("mouseleave", () => {
      orbitalCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }

  // Gateway cards live hover tilt
  if (gatewayCards.length && !prefersReducedMotion) {
    gatewayCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 8;

        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
        `;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
});
