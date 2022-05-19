
$(function () {
    $(".add-to-cart-btn").on("click", function () {
      $(this).each(function () {
        let name = $(this)
          .prev(".product-detail")
          .children(".product-name")
          .text();
        let img = $(this)
          .prev(".product-detail")
          .prev(".product-image")
          .children("a")
          .children("img")
          .attr("src");
        let price = $(this)
          .prev(".product-detail")
          .children(".prices")
          .children(".price")
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
  <td>
  <div class="counter d-flex">
  <button class="dec">-</button>
  <input  value="1" type="number" class="counter-input"/>
  <button class="inc">+</button>
  </div>
  </td>
  <td>-</td>
  <td>
  <div class="total-price"></div>
  </td>
  <td>
  <div class="delete-btn bg-danger text-white py-1 px-2"><i class="fas fa-times"></i>
  </div>
  </td></tr>`);
  
        const basketItems = $("tbody").children().length;
        $(".basket-items").text(basketItems);
  
        $(".inc").on("click", () => {
          $(".counter-input").val(+$(".counter-input").val() + 1);
  
        });
        $(".dec").on("click", () => {
          if ($(".counter-input").val() == 1) {
            $(".counter-input").val(1);
          } else {
            parseFloat($(".counter-input").val())*parseFloat($(".price").text());
            $(".counter-input").val(+$(".counter-input").val() - 1);
          }
        });
  
          let totalPrice =0;
          console.log(totalPrice)
          $(".total-price").text(totalPrice)
        //     $(".eachPrice").each(function (){
        //       let cenaEach = parseFloat($(this).text());
        //       totalPrice+=cenaEach;
        //     });
        //     $("#total-price").text(totalPrice + "$");
      });
      $(".delete-btn").on("click", function () {
        $(this).parent().parent().remove();
      });
      let totalPrice = 0;
      $(".price").each(() => {
        let calTotalPrice = parseFloat($(".price").text());
  
        totalPrice = calTotalPrice;
      });
      $(".total-price").text(totalPrice);
      //remove items from basket
      // $(".remove").on("click", function () {
      //   $(this).parent().remove();
  
      //   var totalPrice = 0;
      //   $(".eachPrice").each(function () {
      //     var cenaEach = parseFloat($(this).text());
      //     totalPrice += cenaEach;
      //   });
      //   $("#total-price").text(totalPrice + "$");
      //   $("#items-basket").text("(" + $("#list-item").children().length + ")");
      // });
    });
    // $(".inc").on("click", () => {
    //   $(this).each(() => {
    //     $(".counter-input").val(+$(".counter-input").val() + 1);
    //     console.log("dwew");
    //   });
    // });
    // $(".dec").on("click", () => {
    //   $(this).each(() => {
    //     if ($(".counter-input").val() == 0) {
    //       $(".counter-input").val(0);
    //     } else {
    //       $(".counter-input").val(+$(".counter-input").val() - 1);
    //     }
    //   });
    // });
  });
 / 
  ***************add to cart *************************/
  // const tbody = document.querySelector("tbody");
  // const product = document.querySelectorAll(".product");
  // const addBtn = document.querySelectorAll(".add-to-cart-btn");
  // // const productImg = product.childNodes
  // const productName = document.querySelectorAll(".product-name");
  // const productPrice = document.querySelectorAll(".price");
  // addBtn.forEach((btn) => {
  //  const productImg= btn.previousElementSibling.previousElementSibling.firstChild.firstChild.getAttribute('src');
  //  console.log(productImg)
  //   btn.addEventListener("click", () => {
  //     tbody.innerHTML=`
  //        <tr>
  //        <td>
  //        <a href="#">
  //        <img src=${productImg} alt="cart-img" class="cart-img"/>
  //        </a>
  //        </td>
  // <td>
  // <div class="name">${productName}</div>
  // </td>
  // <td>
  // <div class="price">${productPrice} AZN</div>
  // </td>
  // <td>
  // <div class="counter d-flex">
  // <button class="dec">-</button>
  // <input  value="1" type="number" class="counter-input"/>
  // <button class="inc">+</button>
  // </div>
  // </td>
  // <td>-</td>
  // <td>
  // <div class="total-price">${productPrice}</div>
  // </td>
  // <td>
  // <div class="delete-btn bg-danger text-white py-1 px-2"><i class="fas fa-times"></i>
  // </div>
  // </td></tr>`;
  //   });
  // });
  