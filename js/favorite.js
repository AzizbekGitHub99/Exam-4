let favoriteJson = localStorage.getItem("favorite");
let favoriteProduct = JSON.parse(favoriteJson) || [];
let bSide = document.querySelector(".bside")

function renderFavoriteProd() {
  bSide.innerHTML = "";
  let favoriteProduct = favoriteProduct.filter((el) => el.isLiked).slice(-4);

  discountProducts.map((el) => {
    discountRow.innerHTML += getPromoCard(el);
  });
}

renderHomeProd()