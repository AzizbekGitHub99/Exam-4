let cartQuantity = document.querySelectorAll(".cart__quantity");
let cartJson = localStorage.getItem("cart");
let cartProduct = JSON.parse(cartJson) || [];
let heroCartLeft = document.querySelector(".hero__cart__left");
let heroCartRight = document.querySelector(".hero__cart__right");

function getCartQuantity() {
  cartQuantity.forEach((el) => {
    el.textContent = cartProduct.length;
  });
}

getCartQuantity();

function getSelectedProduct({
  id,
  name,
  category,
  description,
  price,
  rating,
  discount,
  images,
  quantity,
}) {
  return `
    <div class="hero__cart__item">
      <div class="hero__cart__item__left">
          <div class="hero__cart__item__frame">
            <img src=${images[0]} alt=${name} />
          </div>
          <div class="hero__cart__item__content">
            <h2>${description}</h2>
            <span>
              <span>${price}₽</span> за шт.
              <div>-${discount}%</div>
            </span>            
          </div>
      </div>
      <div class="hero__cart__item__right">
        <div class="plus__minus">
          <button class="minus" onclick="decreaseQuantity(${id})">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="item__quantity">${quantity}</span>
          <button class="plus" onclick="increaseQuantity(${id})">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <p class="product__price">${price} ₽</p>
      </div>
    </div>
  `;
}

function renderCartProduct() {
  heroCartLeft.innerHTML = " ";
  cartProduct.map((pr) => {
    heroCartLeft.innerHTML += getSelectedProduct(pr);
  });
}

renderCartProduct();

function renderCartSum() {
  let disSum = 0;
  let sum = 0;
  let res = 0;
  cartProduct.forEach((el) => {
    disSum += (el.price * el.discount * el.quantity) / 100;
    sum += el.price * el.quantity;
  });
  disSum = disSum.toFixed(1);
  res = sum - disSum;
  heroCartRight.innerHTML = `
    <div class="hero__cart__right__top">
      <form>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <span>Списать 200 ₽</span>
      </form>
      <p>На карте накоплено 200 ₽</p>
    </div>
    <div class="hero__cart__right__center">
      <div class="size__product">
        <p><span>${cartProduct.length}</span> товара</p>
        <h4 class="all__price">${sum} ₽</h4>
      </div>
      <div class="discount__price">
        <p>Скидка</p>
        <h4>-${disSum} ₽</h4>
      </div>
    </div>
    <div class="hero__cart__right__bottom">
      <div class="total__price">
        <div>
          <p>Итог</p>
          <h2>${res} ₽</h2>
        </div>
        <img src="../assets/images/bonus.svg" alt="" />
      </div>
    </div>
    <div class="hero__cart__right__buttons">
      <button class="chekout__btn">Оформить заказ</button>
    </div>`;
}

renderCartSum();

function increaseQuantity(id) {
  cartProduct = cartProduct.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getCartQuantity();
  renderCartProduct();
  renderCartSum();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}

function decreaseQuantity(id) {
  let productInCart = cartProduct.find((pr) => pr.id === id);
  if (productInCart.quantity === 1) {
    cartProduct = cartProduct.filter((pr) => pr.id !== id);
  } else {
    cartProduct = cartProduct.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }
  getCartQuantity();
  renderCartProduct();
  renderCartSum();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}
