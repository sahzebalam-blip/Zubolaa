const botToggle = document.getElementById("botToggle");
const botHint = document.getElementById("botHint");
const cardStage = document.getElementById("navCards");
const loadingScreen = document.getElementById("loadingScreen");
const cards = document.querySelectorAll(".nav-card");

let cardsOpen = false;

function openCards() {
  cardsOpen = true;
  cardStage.classList.add("active");
  cardStage.setAttribute("aria-hidden", "false");
  botToggle.setAttribute("aria-expanded", "true");
  botHint.textContent = "Close Navigation";
}

function closeCards() {
  cardsOpen = false;
  cardStage.classList.remove("active");
  cardStage.setAttribute("aria-hidden", "true");
  botToggle.setAttribute("aria-expanded", "false");
  botHint.textContent = "Open Navigation";
}

botToggle.addEventListener("click", () => {
  if (cardsOpen) {
    closeCards();
  } else {
    openCards();
  }
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    loadingScreen.classList.add("show");
    loadingScreen.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      window.location.href = link;
    }, 1200);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cardsOpen) {
    closeCards();
  }
});
