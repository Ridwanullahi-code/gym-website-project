const menuBtn = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuItems.classList.toggle('menu-show');
});

// function to close menu items when any of one it clicked
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuItems.classList.remove('menu-show');
  });
});

const main = document.querySelector('main');
// backdrop function to close menu items
main.addEventListener('click', () => {
  menuItems.classList.remove('menu-show');
});
