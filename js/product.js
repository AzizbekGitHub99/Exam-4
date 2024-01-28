const singleProductHero = document.querySelector(".hero");

function getSingleProduct({
  id,
  name,
  category,
  description,
  price,
  rating,
  discount,
  images,
}) {
  function getRating() {
    if (rating == 5) {
      return `../assets/images/rating5.svg`;
    } else if (rating == 4.5) {
      return `../assets/images/rating4.5.svg`;
    } else if (rating == 4) {
      return `../assets/images/rating4.svg`;
    } else if (rating == 3.5) {
      return `../assets/images/rating2.5.svg`;
    } else if (rating == 3) {
      return `../assets/images/rating3.svg`;
    } else if (rating == 2) {
      return `../assets/images/rating2.svg`;
    } else if (rating == 1) {
      return `../assets/images/rating1.svg`;
    }
  }
  return `
    <div class="hero__links">
            <a href="../index.html"
              >Главная <img src="../assets/images/chevron-right.svg" alt=""
            /></a>
            <a href="#"
              >Каталог <img src="../assets/images/chevron-right.svg" alt=""
            /></a>
            <a href="#"
              >Молоко, сыр, яйцо
              <img src="../assets/images/chevron-right.svg" alt=""
            /></a>
          </div>
          <p class="product__name">${description}</p>
          <div class="product__rating">
            <p class="product__code">арт. 371431</p>
            <span class="rating__product__box">
              <img src=${getRating()}${rating} alt="rating" />
              <p class="product__otziv">3 отзыва</p>
            </span>
            <button class="hero__share__btn">
              <img src="../assets/images/share-icon.svg" alt="" /> Поделиться
            </button>
            <button class="hero__like__btn">
              <img src="../assets/images/like-icon.svg" alt="" />В избраное
            </button>
          </div>
          <div class="hero__product">
            <div class="hero__product__left">
              <div class="product__images">
                <img
                  class="product__mini1"
                  src=${images[0]}
                  alt=${name}
                />
                <img
                  class="product__mini1"
                  src=${images[0]}
                  alt=${name}
                />
                <img
                  class="product__mini1"
                  src=${images[0]}
                  alt=${name}
                />
                <img
                  class="product__mini1"
                  src=${images[0]}
                  alt=${name}
                />
                <img
                  class="product__mini1"
                  src=${images[0]}
                  alt=${name}
                />
              </div>
              <div class="product__image">
                <img
                  class="product__big1"
                  src=${images[0]}
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
                <button>
                  <img src="../assets/images/product-basket.svg" alt="" />
                  <span>В корзину</span>
                </button>
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

products.map((el) => {
  singleProductHero.innerHTML = getSingleProduct(el);
});
