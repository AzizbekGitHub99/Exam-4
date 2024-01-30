let cartQuantity = document.querySelector(".cart__quantity");

let cartJson = localStorage.getItem("cart");

let cartProduct = JSON.parse(cartJson) || [];

function getCartQuantity() {
  cartQuantity.textContent = cartProduct.length;
}

getCartQuantity();

const heroCartLeft = document.querySelector(".hero__cart__left");

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
        <p><span>${price}₽</span> за шт.</p>
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

function getCartProduct() {
  heroCartLeft.innerHTML = " ";
  cartProduct.map((pr) => {
    heroCartLeft.innerHTML += getSelectedProduct(pr);
  });
}

getCartProduct();

function increaseQuantity(id) {
  cartProduct = cartProduct.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getCartProduct();
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
  getCartProduct();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}
