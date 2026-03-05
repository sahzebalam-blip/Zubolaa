// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Active nav
const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll(".links a").forEach(a => {
  const href = (a.getAttribute("href") || "").toLowerCase();
  if (href === current) a.classList.add("active");
});

// Pause ticker on hover/touch (if ticker exists)
const track = document.getElementById("tickerTrack");
const ticker = document.getElementById("ticker");
if (track && ticker) {
  const setPaused = (v) => (track.style.animationPlayState = v ? "paused" : "running");
  ticker.addEventListener("mouseenter", () => setPaused(true));
  ticker.addEventListener("mouseleave", () => setPaused(false));
  ticker.addEventListener("touchstart", () => setPaused(true), { passive: true });
  ticker.addEventListener("touchend", () => setPaused(false), { passive: true });
}