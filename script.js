// Scroll hide/show logic
let prevScroll = window.pageYOffset;
const header = document.getElementById('header');

window.onscroll = () => {
  const currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }
  prevScroll = currentScroll;
};

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});





// Interactive avatar scale effect
const avatar = document.getElementById('avatar');

avatar.addEventListener('mouseenter', () => {
  avatar.style.transform = 'scale(1.1)';
});

avatar.addEventListener('mouseleave', () => {
  avatar.style.transform = 'scale(1)';
});