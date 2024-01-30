const promoRow = document.querySelector(".promo__row");
const newsRow = document.querySelector(".news__row");
const boughtRow = document.querySelector(".bought__row");

function getPromoCard({
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
<div class="promo__card">
  <div class="promo__card__img">
      <img class="product__img" src=${images[0]} />
    <button class="like-btn">
      <img class="card__heart" src="../../assets/images/like-btn.svg" />
    </button>
    <span class="product__discount ${
      discount === 0 ? "no__discount" : ""
    }}">${discount}</span>
  </div>
  <div class="promo__card__content">
    <div class="promo__card__top">
      <div class="promo__card__top__left">
        <h1>${price}</h1>
        <p>С картой</p>
      </div>
      <div class="promo__card__top__right">
        <h2>${price}</h2>
        <p>Обычная</p>
      </div>
    </div>
    <h5 class="promo__card__text">${name}</h5>
    <p class="card__description">${description}</p>
    <img src=${getRating()}
    alt=${name}
     />
        <div class="promo__card__btn">
          <button onclick="addToCart(${id})" class="basket__btn">В корзину</button>
        </div>
  </div>
</div>
  `;
}

// discount mapping start

let discountProducts = products.filter((el) => el.discount).slice(-4);

discountProducts.map((el) => {
  promoRow.innerHTML += getPromoCard(el);
});

// discount mapping end

// newProducts mapping start

let newProducts = products.slice(-4);

newProducts.map((el) => {
  newsRow.innerHTML += getPromoCard(el);
});

// newProducts mapping end

// ratingProduct mapping start

let ratingProduct = products.toSorted((a, b) => a.rating - b.rating).slice(-4);

ratingProduct.map((el) => {
  boughtRow.innerHTML += getPromoCard(el);
});

// ratingProduct mapping end

// MAP TAB

const tabBtn = document.querySelectorAll(".map__btn");
const mapContent = document.querySelectorAll(".map__content");

let activeTab = 0;

function getTabContents() {
  mapContent.forEach((el, i) => {
    if (i !== activeTab) {
      el.style.display = "none";
      tabBtn[i].classList.remove("tab__active");
    } else {
      el.style.display = "inline-block";
      tabBtn[i].classList.add("tab__active");
    }
  });
}

getTabContents();

tabBtn.forEach((el, i) => {
  el.addEventListener("click", () => {
    activeTab = i;
    getTabContents();
  });
});

// ANIMATION PRODUCT
// const productCard = document.querySelector(".promo__card");
// const productBtns = document.querySelectorAll(".basket__btn");
// const shoppingCart = document.querySelector(".shopping__cart");

// for (cardBtn of productBtns) {
//   cardBtn.onclick = function (e) {
//     let targetParent = e.target.parentNode.parentNode.parentNode;

//     let img = targetParent.querySelector(".animation__img");
//     let animationImg = img.cloneNode();
//     animationImg.classList.add("animation__img__work");

//     targetParent.appendChild(animationImg);

//     const animationImgPosition = animationImg.getBoundingClientRect();
//     // const shoppingCartPosition = shoppingCart.getBoundingClientRect();
//     console.log(animationImgPosition);

// let data = {
//   left:
//     shoppingCartPosition.left -
//     (shoppingCartPosition.width / 2 +
//       animationImgPosition.left +
//       animationImgPosition.width / 2),
// };
// console.log(data.left);
//     setTimeout(() => {
//       animationImg.classList.remove("animation__img__work");
//     }, 1000);
//   };
// }
