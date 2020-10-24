const navBar = document.querySelector('#nav');
const closeBtn = document.querySelector('#close');
const menuBtn = document.querySelector('#menu');

// show menu
menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('show');
});

// hide menu
closeBtn.addEventListener('click', () => {
  navBar.classList.remove('show');
});
