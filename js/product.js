const singleProductHero = document.querySelector(".hero");
let prodBoughtRow = document.querySelector(".bought__row");
let prodDiscountRow = document.querySelector(".discount__row");
let curImg = 0;

function getSingleProduct(curId) {
  let { id, name, category, description, price, rating, discount, images } =
    products.find((pr) => pr.id === curId);
  function getRating() {
    if (rating == 5) {
      return `/assets/images/rating5.svg`;
    } else if (rating == 4.5) {
      return `/assets/images/rating4.5.svg`;
    } else if (rating == 4) {
      return `/assets/images/rating4.svg`;
    } else if (rating == 3.5) {
      return `/assets/images/rating2.5.svg`;
    } else if (rating == 3) {
      return `/assets/images/rating3.svg`;
    } else if (rating == 2) {
      return `/assets/images/rating2.svg`;
    } else if (rating == 1) {
      return `/assets/images/rating1.svg`;
    }
  }

  let productInCart = cartProduct.find((pr) => pr.id === curId);
  let productInFavorite = favoriteProducts.find((pr) => pr.id === curId);

  return `
    <div class="hero__links">
            <a href="../index.html"
              >Главная <img src="../assets/images/chevron-right.svg" alt=""
            /></a>
            <a href="/pages/categories.html"
              >Каталог <img src="../assets/images/chevron-right.svg" alt=""
            /></a>
            <a href="/pages/category.html" 
              onclick="setCategory(${category})"
              >${category}
              <img src="../assets/images/chevron-right.svg" alt=""
            /></a>
          </div>
          <p class="product__name">${description}</p>
          <div class="product__rating">
            <p class="product__code">арт. 371431</p>
            <span class="rating__product__box">
              <img src=${getRating()} ${rating} alt="rating" />
              <p class="product__otziv">3 отзыва</p>
            </span>
            <button class="hero__share__btn">
              <img src="../assets/images/share-icon.svg" alt="" /> Поделиться
            </button>
            <button onclick="likeToggle(${id})" class="hero__like__btn">
            ${
              productInFavorite
                ? `<img src="../assets/images/hearted.svg" alt="" />В избраное`
                : `<img src="../assets/images/like-icon.svg" alt="" />В избраное`
            }
            </button>
          </div>
          <div class="hero__product">
            <div class="hero__product__left">
              <div class="product__images">
                <img onclick="setImg(0)"
                  class="product__mini1"
                  src=${images[0]}
                  alt=${name}
                />
                <img onclick="setImg(1)"
                  class="product__mini1"
                  src=${images[1]}
                  alt=${name}
                />
                <img onclick="setImg(2)"
                  class="product__mini1"
                  src=${images[2]}
                  alt=${name}
                />
                <img onclick="setImg(3)"
                  class="product__mini1"
                  src=${images[3]}
                  alt=${name}
                />
              </div>
              <div class="product__image">
                <img
                  class="product__big1"
                  src=${images[curImg]}
                  alt=${name}
                />
              </div>
            </div>
            <div class="hero__product__right">
              <div class="hero__product__right__top">
                <span>
                  <h6>${price}</h6>
                  <p>Обычная цена</p>
                </span>
                <span>
                  <h4>${price}</h4>
                  <p>
                    С картой Северяночки
                    <img src="../assets/images/info-icon.svg" alt="" />
                  </p>
                </span>
              </div>
              <div class="product__basket__btn">
                ${
                  productInCart
                    ? `<button class="minus" onclick="decreaseQuantity(${id})">-</button>
                        <span class="product__quantity">${productInCart.quantity}</span>
                      <button class="pluss" onclick="increaseQuantity(${id})">+</button>`
                    : `<button onclick="addToCart(${id})">
                        <img src="../assets/images/product-basket.svg" alt="" />
                        <span>В корзину</span>
                      </button>`
                }
              </div>
              <div class="bonus">
                <button>
                  <img src="../assets/images/atom.svg" alt="" />
                  Вы получаете 10 бонусов
                </button>
              </div>
              <p class="notification">
                <img src="../assets/images/notification.svg" alt="" />
                Уведомить о снижении цены
              </p>
              <div class="hero__product__right__bottom">
                <span>
                  <p>Бренд</p>
                  <h6>ПРОСТОКВАШИНО</h6>
                </span>
                <span>
                  <p>Страна производителя</p>
                  <h6>Россия</h6>
                </span>
                <span>
                  <p>Упаковка</p>
                  <h6>180 г</h6>
                </span>
              </div>
            </div>
          </div>
    `;
}

function renderProductPage() {
  let curId = +localStorage.getItem("currentProd") || 0;
  singleProductHero.innerHTML = getSingleProduct(curId);

  prodBoughtRow.innerHTML = " ";
  prodDiscountRow.innerHTML = " ";

  let boughtProducts = products
    .toSorted((a, b) => a.rating - b.rating)
    .slice(-4);

  boughtProducts.map((el) => {
    boughtRow.innerHTML += getPromoCard(el);
  });

  let discountProducts = products.filter((el) => el.discount).slice(-4);

  discountProducts.map((el) => {
    discountRow.innerHTML += getPromoCard(el);
  });
}

renderProductPage();

function likeToggle(id) {
  let productInFavorite = favoriteProducts.find((pr) => pr.id === id);
  if (productInFavorite) {
    favoriteProducts = favoriteProducts.map((pr) => {
      if (pr.id === id) {
        pr.isLiked = false;
      }
      return pr;
    });
    favoriteProducts = favoriteProducts.filter((pr) => pr.id !== id);
  } else {
    favoriteProducts = favoriteProducts.map((pr) => {
      if (pr.id === id) {
        pr.isLiked = true;
      }
      return pr;
    });
    favoriteProducts.push(products.find((pr) => pr.id === id));
  }
  renderProductPage();
  getCartQuantity();
  localStorage.setItem("favorite", JSON.stringify(favoriteProducts));
}

function addToCart(id) {
  let productFound = products.find((pr) => pr.id === id);
  let productInCart = cartProduct.find((pr) => pr.id == id);

  if (productInCart) {
    cartProduct = cartProduct.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    productFound.quantity = 1;
    cartProduct.push(productFound);
  }
  renderProductPage();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}

function increaseQuantity(id) {
  cartProduct = cartProduct.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  renderProductPage();
  getCartQuantity();
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
  renderProductPage();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}

function setImg(num) {
  curImg = +num;
  renderProductPage();
  getCartQuantity();
}
