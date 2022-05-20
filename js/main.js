$(".slider-carousel").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".brands-carousel").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  margin: 0,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(window).scroll(() => {
  $(this).scrollTop() >= 120
    ? $(".bottom-header").addClass("bottom-hedaer-fixed")
    : $(".bottom-header").removeClass("bottom-hedaer-fixed");
});
$(window).scroll(() => {
  $(this).scrollTop() >= 120
    ? $(".scroll-btn").addClass("show")
    : $(".scroll-btn").removeClass("show");
});
$(".scroll-btn").on("click", () => {
  $("html").scrollTop(0);
});
$(".menu-button").on("click", () => {
  $(".header-mobile").toggle("show");
  $(".menu-button .fa-solid").toggleClass("fa-times");
});

