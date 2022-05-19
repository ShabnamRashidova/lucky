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
/*************************add to cart******************/
$(function () {
  $(".cart-close").on("click", () => {
    $(".cart").css("display", "none");
  });
  $(".shopping-cart").on("click", () => {
    $(".cart").css("display", "block");
  });

  $(".add-to-cart-btn").on("click", function () {
    $(this).each(function () {
      $(".cart-title").text("Səbət");
      $("table").css("display", "block");
      let name = $(this)
        .parent(".product-detail")
        .children(".product-name")
        .text();

      let img = $(this)
        .parent(".product-detail")
        .prev(".product-image")
        .children("a")
        .children("img")
        .attr("src");

      let price = $(this)
        .parent(".product-detail")
        .children(".product-price")
        .text();
      $("tbody").append(`
      <tr>
      <td>
      <a href=".">
      <img src=${img} alt="cart-img" class="cart-img"/>
      </a>
      </td>
<td>
<div class="name">${name}</div>
</td>
<td>
<div class="price">${price} </div>
</td>
<td>-</td>
<td>
<div class="total-price">${price}</div>
</td>
<td>
<div class="delete-btn bg-danger text-white py-1 px-2"><i class="fas fa-times"></i>
</div>
</td></tr>`);

      $(".delete-btn").on("click", function () {
        $(this).parent().parent().remove();
      });
    });
  });
});
$(".header-categories").on("click",()=>{
  $(".category-content").toggleClass("show")
})
