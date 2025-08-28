// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Back to top link (smooth)
document.querySelector(".top")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Improve keyboard focus on <details>
document.querySelectorAll("details.accordion > summary").forEach((s) => {
  s.setAttribute("tabindex", "0");
  s.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      s.parentElement.open = !s.parentElement.open;
    }
  });
});
