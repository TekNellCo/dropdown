document.addEventListener("click", (e) => {
  const click = e.target.matches("[data-dropdown-button]");
  if (!click && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (click) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
