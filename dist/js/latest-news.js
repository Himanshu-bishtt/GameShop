// sticky menu background
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#main-header");
  // let topbar = document.querySelector(".topbar");
  let navbarActions = document.querySelector(".actions");
  let navbarLogo = document.querySelector(".logo");
  if (window.scrollY > 450) {
    navbar.style.opacity = 0.95;
    // topbar.style.display = "none";
    navbarActions.style.display = "none";
    navbarLogo.style.display = "block";
  } else {
    navbar.style.opacity = 1;
    navbarActions.style.display = "flex";
    navbarLogo.style.display = "none";
  }
});
