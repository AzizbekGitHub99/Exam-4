const discountRow = document.querySelector(".discount__row");
const newsRow = document.querySelector(".news__row");
const boughtRow = document.querySelector(".bought__row");

// Rendering home products start

function renderHomeProd() {
  discountRow.innerHTML = "";
  newsRow.innerHTML = "";
  boughtRow.innerHTML = "";
  // discount mapping start
  let discountProducts = products.filter((el) => el.discount).slice(-4);

  discountProducts.map((el) => {
    discountRow.innerHTML += getPromoCard(el);
  });
  // discount mapping end

  // newProducts mapping start
  let newProducts = products.slice(-4);

  newProducts.map((el) => {
    newsRow.innerHTML += getPromoCard(el);
  });
  // newProducts mapping end

  // ratingProduct mapping start
  let ratingProduct = products
    .toSorted((a, b) => a.rating - b.rating)
    .slice(-4);

  ratingProduct.map((el) => {
    boughtRow.innerHTML += getPromoCard(el);
  });
  // ratingProduct mapping end
}

renderHomeProd();
// Rendering home products end

// Card buttons start

function likeToggle(id) {
  let productInFavorite = favoriteProduct.find((pr) => pr.id === id);
console.log(productInFavorite);
  if (productInFavorite) {
    favoriteProduct = favoriteProduct.map((pr) => {
      if (pr.id === id) {
        pr.isLiked = false;
      }
      return pr;
    });
  } else {
    favoriteProduct = favoriteProduct.map((pr) => {
      if (pr.id === id) {
        pr.isLiked = true;
      }
      return pr;
    });
    favoriteProduct.push(products.find((pr) => pr.id === id));
  }
  renderHomeProd();
  getCartQuantity();
  localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
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
  renderHomeProd();
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
  renderHomeProd();
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
  renderHomeProd();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}
// Card buttons end

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
