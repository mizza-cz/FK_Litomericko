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
        breakpoint: 581,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $('.result-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    prevArrow:
      '<button class="gameslider__btn gameslider__btn--prev"><img src="images/svg/arrow-left.svg" alt="" ></button> ',
    nextArrow:
      ' <button class="gameslider__btn gameslider__btn--next"><img src="images/svg/arrow-right.svg" alt = "" ></button > ',
    responsive: [
      {
        breakpoint: 1131,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.partner-slider__inner').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
