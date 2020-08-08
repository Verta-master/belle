//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--cross');
  $('.menu__list').slideToggle();
});

$('.menu__dropbtn').click(function() {
  $('.menu__sublist').slideToggle();
});
