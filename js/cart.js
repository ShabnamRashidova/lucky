const product = document.querySelectorAll(".product");
const addBtn = document.querySelectorAll(".add-to-cart-btn");
const tbody = document.querySelector("tbody");
const basketItem = document.querySelectorAll(".basket-item");
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
        <td>${shopping.price}</td>
        <td>
        <div class="counter d-flex">
        <button class="increase">+</button>
        <input typ="number" value="1">
        <button class="decrease">-</but>
        </div>
        </td>
        <td>-</td>
        <td>${shopping.price}</td>
        <td><i class="fas fa-times bg-danger text-white p-2 delete-btn"></i></td>
        `;
    tbody.appendChild(tableRow);
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
    console.log(image, name, price);
  });
}
