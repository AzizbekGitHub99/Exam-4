let bSide = document.querySelector(".bside");

function renderFavoriteProd() {
  bSide.innerHTML = " ";
  favoriteProducts.map((el) => {
    bSide.innerHTML += getPromoCard(el);
  });
}

renderFavoriteProd();

function likeToggle(id) {
  favoriteProducts = favoriteProducts
    .map((pr) => {
      if (pr.id === id) {
        pr.isLiked = false;
      }
      return pr;
    })
    .filter((pr) => pr.id !== id);

  renderFavoriteProd();
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
  renderFavoriteProd();
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
  renderFavoriteProd();
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
  renderFavoriteProd();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}
