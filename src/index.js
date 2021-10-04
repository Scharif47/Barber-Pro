const menu = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content");


const menuToggle = (e) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle");
    menuContent.classList.toggle("menu-content-toggle");
  });
};

menuToggle();
