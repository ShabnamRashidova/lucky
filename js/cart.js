const product = document.querySelectorAll(".product");
const addBtn = document.querySelectorAll(".add-to-cart-btn");
const tbody = document.querySelector("tbody");
const basketItem = document.querySelectorAll(".basket-item");
const cart = document.querySelector(".cart");
const cartRow = document.querySelector(".cart-mobile .row");
class Shopping {
  constructor(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
}
class UI {
  addToCart(shopping) {
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
        <td><img class="img-fluid w-25" src="${shopping.image}"/></td>
        <td>${shopping.name}</td>
        <td class="price">${shopping.price}</td>
        <td>
        <div class="counter d-flex">
        <button class="increase">+</button>
        <input typ="number" value="1" disabled>
        <button class="decrease">-</button>
        </div>
        </td>
        <td>-</td>
        <td>${shopping.price}</td>
        <td><i class="fas fa-times bg-danger text-white p-2 delete-btn"></i></td>
        `;
    const cartProducts = document.createElement("div");
    cartProducts.classList.add("col-10");
    cartProducts.classList.add("mb-3");
    cartProducts.innerHTML = `
                <div class="shadow py-2 d-flex flex-column align-items-center justify-content-between text-center bg-white">
                            <img src="${shopping.image}" class="img-fluid w-50">
                        <div class="product-body">
                            <div class="product-name-content d-flex flex-column"><span>Məhsul adı:</span>
                                <h6>${shopping.name}</h6>
                            </div>
                            <div class="product-price-content d-flex flex-column"><span>Qiymət:</span>
                                <h6>${shopping.price}</h6>
                            </div>
                            <div class="product-count-content d-flex flex-column"><span>Say:</span>
                                <div class="counter d-flexr justify-content-center">
                                    <button class="increase">+</button>
                                    <input typ="number" value="1" disabled>
                                    <button class="decrease">-</button>
                                </div>
                            </div>
                            <div class="total-price-content">
                                <span>Cəmi</span>
                                <div class="total-price">${shopping.price}</div>
                            </div>
                            <div class="delete-btn"><button class="mobile-btn-delete mb-3">Sil</button></div>
                        </div>
                    </div>
        `;
    tbody.appendChild(tableRow);
    cartRow.appendChild(cartProducts);
  }
  removeFromCart() {
    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.parentElement.remove();
        this.itemCount();
      });
    });
  }
  itemCount() {
    let tableRow = document.querySelectorAll("tbody tr");
    basketItem.forEach((item) => {
      item.innerHTML = tableRow.length;
    });
  }
  totalPrice() {
    const totalPrice = document.querySelectorAll(".price");
    console.log(totalPrice);
  }
}
for (let i = 0; i < product.length; i++) {
  addBtn[i].addEventListener("click", () => {
    const image = product[i].querySelectorAll("img")[1].src;
    const name = product[i].querySelectorAll(".product-name")[0].textContent;
    const price = product[i].querySelectorAll(".product-price")[0].textContent;
    let shopping = new Shopping(image, name, price);
    let ui = new UI();

    ui.addToCart(shopping);
    ui.removeFromCart();
    ui.itemCount();
    ui.totalPrice();
  });
}
