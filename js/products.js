const allProductsRow = document.querySelector(".promo__row");
const searchInput = document.querySelectorAll(".search__input");
const searchingContent = document.querySelectorAll(".searching__content");
const pagination = document.querySelector(".pagination__row");
const productLInk = document.querySelector(".product__link");

let search = "";

let activePage = 1;

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
    <button class="product__link">
      <img class="product__img" src=${images[0]} />
    </button>
    <button class="like-btn">
      <img class="card__heart" src="../../assets/images/like-btn.svg" />
    </button>
    <span>${discount}</span>
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
      <button class="basket__btn">В корзину</button>  
    </div>
  </div>
</div>
  `;
  // const promoCard = document.createElement("div");
  // promoCard.className = "promo__card";
  // const productLink = document.createElement("button");
  // productLink.className = "product__link";
  // const promoCardFrame = document.createElement("div");
  // promoCardFrame.className = "promo__card__img";
  // const promoCardImg = document.createElement("img");
  // promoCardImg.className = "product__img";
  // promoCardImg.src = images[0];
  // const promoCardLikeBtn = document.createElement("button");
  // promoCardLikeBtn.className = "like-btn";
  // const promoCardLikeBtnImg = document.createElement("img");
  // promoCardLikeBtnImg.className = "card__heart";
  // promoCardLikeBtnImg.src = "../../assets/images/like-btn.svg";
  // const promoCardDiscount = document.createElement("span");
  // const promoCardContent = document.createElement("div");
  // promoCardContent.className = "promo__card__content";
  // const promoCardContentTop = document.createElement("div");
  // promoCardContentTop.className = "promo__card__top";
  // const promoCardContentTopLeft = document.createElement("div");
  // promoCardContentTopLeft.className = "promo__card__top__left";
  // const promoCardContentTopLeftH1 = document.createElement("h1");
  // const promoCardContentTopLefP1 = document.createElement("p");
  // const promoCardContentTopRight = document.createElement("div");
  // promoCardContentTopRight.className = "promo__card__top__right";
  // const promoCardContentTopLeftH2 = document.createElement("h2");
  // const promoCardContentTopLefP2 = document.createElement("p");
  // const promoCardContentText = document.createElement("h5");
  // promoCardContentText.className = "promo__card__text";
  // const promoCardDescription = document.createElement("p");
  // promoCardDescription.className = "card__description";
  // const promoCardRating = document.createElement("img");
  // promoCardRating.src = "../../assets/images/rating4.svg";
  // const promoCardBtnDiv = document.createElement("div");
  // promoCardBtnDiv.className = "promo__card__btn";
  // const promoCardBtn = document.createElement("button");
  // promoCardBtn.className = "basket__btn";

  // promoCardDiscount.textContent = discount;
  // promoCardContentTopLeftH1.textContent = price;
  // promoCardContentTopLefP1.textContent = "С картой";
  // promoCardContentTopLeftH2.textContent = price;
  // promoCardContentTopLefP2.textContent = "Обычная";
  // promoCardContentText.textContent = name;
  // promoCardDescription.textContent = description;
  // promoCardBtn.textContent = "В корзину";
  //  if (rating == 5) {
  //   promoCardRating.src = "../../assets/images/rating5.svg";
  // } else if (rating == 4) {
  //   promoCardRating.src = "../../assets/images/rating4.svg";
  // } else if (rating == 4.5) {
  //   promoCardRating.src = "../../assets/images/rating4.5.svg";
  // } else if (rating == 3) {
  //   promoCardRating.src = "../../assets/images/rating3.svg";
  // } else if (rating == 3.5) {
  //   promoCardRating.src = "../../assets/images/rating2.5.svg";
  // } else if (rating == 2) {
  //   promoCardRating.src = "../../assets/images/rating2.svg";
  // } else if (rating == 1) {
  //   promoCardRating.src = "../../assets/images/rating1.svg";
  // }

  // if (discount == 0) {
  //   promoCardDiscount.style.display = "none";
  // }

  // promoCardBtnDiv.appendChild(promoCardBtn);

  // productLink.append(promoCardImg);

  // promoCardFrame.append(productLink, promoCardLikeBtn, promoCardDiscount);
  // promoCardLikeBtn.append(promoCardLikeBtnImg);

  // promoCardContentTopRight.append(
  //   promoCardContentTopLeftH2,
  //   promoCardContentTopLefP2
  // );

  // promoCardContentTopLeft.append(
  //   promoCardContentTopLeftH1,
  //   promoCardContentTopLefP1
  // );

  // promoCardContentTop.append(promoCardContentTopLeft, promoCardContentTopRight);

  // promoCardContent.append(
  //   promoCardContentTop,
  //   promoCardContentText,
  //   promoCardDescription,
  //   promoCardRating,
  //   promoCardBtnDiv
  // );

  // promoCard.append(promoCardFrame, promoCardContent);

  // return promoCard;
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

  let startProduct = (activePage - 1) * LIMIT;
  let endProduct = activePage * LIMIT;

  products.slice(startProduct, endProduct).map((el) => {
    allProductsRow.innerHTML += getPromoCard(el);
  });

  let pages = Math.ceil(results2.length / LIMIT);

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
  getPagination();
}
