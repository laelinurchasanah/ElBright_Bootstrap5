const navLinkEls = document.querySelectorAll(".nav-link");

navLinkEls.forEach((navLinkEl) => {
  navLinkEl.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinkEl.classList.add("active");
  });
});
