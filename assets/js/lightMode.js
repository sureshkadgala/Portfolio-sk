const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Default: Light mode
body.classList.add("light-mode");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Change button text/icon dynamically
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
