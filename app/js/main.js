$(function () {
  $('.navbar__menu').on('click', function () {
    $('.navbar__inner').slideToggle();
  });
});

const menuBtn = document.querySelector('.navbar__menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
