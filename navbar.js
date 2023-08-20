const navBar = document.querySelector(".js-navbar-menu");

const nav = document.querySelector(".js-navbar")
navBar.addEventListener("click", ()=>{
  nav.classList.toggle("navbar--open");
});