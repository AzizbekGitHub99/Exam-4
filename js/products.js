const allProductsRow = document.querySelector(".promo__row");
const searchInput = document.querySelectorAll(".search__input");
const searchingContent = document.querySelectorAll(".searching__content");
const pagination = document.querySelector(".pagination__row");

let search = "";

let activePage = +localStorage.getItem("page") || 1;

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
  let productInCart = cartProduct.find((pr) => pr.id === id);
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
     ${
       productInCart
         ? `<div class = "promo__card__btn plus__minus">
              <button class="minus" onclick="decreaseQuantity(${id})">-</button>
              <span class="product__quantity">${productInCart.quantity}</span>
              <button class="pluss" onclick="increaseQuantity(${id})">+</button>
            </div>`
         : `<div class="promo__card__btn">
              <button onclick="addToCart(${id})" class="basket__btn">В корзину</button>
            </div>`
     }
  </div>
</div>
  `;
}

function getSearchProduct({
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
      return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `;
    } else if (rating == 4.5) {
      return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf" class="fa-solid fa-star"></i>
        `;
    } else if (rating == 4) {
      return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
        `;
    } else if (rating == 3.5) {
      return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
        `;
    } else if (rating == 3) {
      return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
        `;
    } else if (rating == 2) {
      return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
        `;
    } else if (rating == 1) {
      return `
            <i class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
            <i style="color: #bfbfbf;" class="fa-solid fa-star"></i>
         `;
    }
  }
  return `
    <div class="search__product">
        <div class="search__product__img__div">
        <img
            class="search__product__img"
            src= ${images[0]}
            alt= ${name}
        />
        </div>
        <div class="search__product__content">
        <h4 class="product__name">${name}</h4>
        <div class="rating__row">
            <i>${getRating()}${rating}</i>
        </div>
        </div>
        <p>${price}$</p>
    </div>
    `;
}

function getProduct() {
  let results = products.filter((pr) => pr.name.toLowerCase().includes(search));
  for (let el of searchingContent) {
    el.innerHTML = " ";
  }

  if (results.length == products.length) {
    for (let el of searchingContent) {
      el.style.display = "none";
    }
  } else {
    results.map((el) => {
      for (let key of searchingContent) {
        key.innerHTML += getSearchProduct(el);
      }
    });
  }
}

getProduct();

for (let el of searchInput) {
  el.addEventListener("keyup", function () {
    search = this.value.trim().toLowerCase();
    getProduct();
    for (let el of searchingContent) {
      el.style.display = "flex";
    }
  });
}

function getPagination() {
  let results2 = products.filter((el) => el.name.includes(search));

  allProductsRow.innerHTML = " ";

  let startProduct = (activePage - 1) * 8;
  let endProduct = activePage * 8;

  products.slice(startProduct, endProduct).map((el) => {
    allProductsRow.innerHTML += getPromoCard(el);
  });

  let pages = Math.ceil(results2.length / 8);

  pagination.innerHTML = `
    <button onclick="getPage('-')" class="pagination__prev">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `;
  for (let i = 1; i <= pages; i++) {
    pagination.innerHTML += `<button onclick="getPage(${i})" class="pagination__page ${
      i === activePage ? "activePage" : ""
    }">${i}</button>`;
  }
  pagination.innerHTML += `
    <button onclick="getPage('+')" class="pagination__next">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;
  let paginationPrevBtn = document.querySelector(".pagination__prev");
  let paginationNextBtn = document.querySelector(".pagination__next");
  if (activePage === 1) {
    paginationPrevBtn.disabled = true;
    paginationPrevBtn.classList.toggle("disabled__btn");
  }
  if (activePage === pages) {
    paginationNextBtn.disabled = true;
    paginationNextBtn.classList.toggle("disabled__btn");
  }
}

getPagination();

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = page;
  }
  localStorage.setItem("page", activePage);
  getPagination();
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
  getCartQuantity();
  getPagination();

  localStorage.setItem("cart", JSON.stringify(cartProduct));
}

function increaseQuantity(id) {
  cartProduct = cartProduct.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getPagination();
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
  getPagination();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}
