// Zubolaa - small helpers: active nav link + current year
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
