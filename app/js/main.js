$(function () {
  $('.navbar__menu').on('click', function () {
    $('.navbar__inner').slideToggle();
  });
  $('.nav__link').on('click', function () {
    $(this).closest('.nav__item').toggleClass('active');
  });
  $('.gameslider__inner').slick({
    autoplay: true,
    prevArrow:
      '<button class="gameslider__btn gameslider__btn--prev"><img src="images/svg/arrow-left.svg" alt="" ></button> ',
    nextArrow:
      ' <button class="gameslider__btn gameslider__btn--next"><img src="images/svg/arrow-right.svg" alt = "" ></button > ',
    responsive: [
      {
        breakpoint: 901,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $('#hpArticle .hp-article').hover(
    function () {
      $('#hpArticle .hp-article').removeClass('topArticleActive');
      $(this).addClass('topArticleActive');
    },
    function () {},
  );
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
