const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#nav-close");

navBtn.addEventListener("click", (e) => {
  navbar.classList.add("showNav");
});
navClose.addEventListener("click", (e) => {
  navbar.classList.remove("showNav");
});
