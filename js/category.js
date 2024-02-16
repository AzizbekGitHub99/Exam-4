let categoryRow = document.querySelector(".category__row");
let categoryName = document.getElementsByClassName("category__name");

function renderCategoryPage() {
  let curCate = localStorage.getItem("category") || "Dinner";
  console.log(curCate);
  categoryRow.innerHTML = " ";
  for (let i = 0; i < categoryName.length; i++) {
    categoryName[i].textContent = curCate;
  }

  let currentCategoryProducts = products.filter(
    (el) => el.category === curCate
  );

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
  renderCategoryPage();
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
  renderCategoryPage();
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
  renderCategoryPage();
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
  renderCategoryPage();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}
