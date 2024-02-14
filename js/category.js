let categoryRow = document.querySelector(".category__row");

function renderCategoryPage() {
  let curCate = JSON.parse(localStorage.getItem("category")) || {name: "Dinner"};
  categoryRow.innerHTML = " ";

  let currentCategoryProducts = products.filter(
    (el) => el.category === curCate.name
  );
  console.log(currentCategoryProducts);

  currentCategoryProducts.map((el) => {
    categoryRow.innerHTML += getPromoCard(el);
  });
}

renderCategoryPage();

function likeToggle(id) {
  let productInFavorite = favoriteProducts.find((pr) => pr.id === id);
  if (productInFavorite) {
    favoriteProducts = favoriteProducts.map((pr) => {
      if (pr.id === id) {
        pr.isLiked = false;
      }
      return pr;
    });
  } else {
    favoriteProduct = favoriteProducts.map((pr) => {
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
