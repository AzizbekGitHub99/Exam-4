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
  const promoCard = document.createElement("div");
  promoCard.className = "promo__card";
  const promoCardFrame = document.createElement("div");
  promoCardFrame.className = "promo__card__img";
  const promoCardImg = document.createElement("img");
  promoCardImg.className = "product__img";
  promoCardImg.src = images[3];
  const promoCardLikeBtn = document.createElement("button");
  promoCardLikeBtn.className = "like-btn";
  const promoCardLikeBtnImg = document.createElement("img");
  promoCardLikeBtnImg.className = "card__heart";
  promoCardLikeBtnImg.src = "../../assets/images/like-btn.svg";
  const promoCardDiscount = document.createElement("span");
  const promoCardContent = document.createElement("div");
  promoCardContent.className = "promo__card__content";
  const promoCardContentTop = document.createElement("div");
  promoCardContentTop.className = "promo__card__top";
  const promoCardContentTopLeft = document.createElement("div");
  promoCardContentTopLeft.className = "promo__card__top__left";
  const promoCardContentTopLeftH1 = document.createElement("h1");
  const promoCardContentTopLefP1 = document.createElement("p");
  const promoCardContentTopRight = document.createElement("div");
  promoCardContentTopRight.className = "promo__card__top__right";
  const promoCardContentTopLeftH2 = document.createElement("h2");
  const promoCardContentTopLefP2 = document.createElement("p");
  const promoCardContentText = document.createElement("h5");
  promoCardContentText.className = "promo__card__text";
  const promoCardDescription = document.createElement("p");
  promoCardDescription.className = "card__description";
  const promoCardRating = document.createElement("img");
  promoCardRating.src = "../../assets/images/rating4.svg";
  const promoCardBtnDiv = document.createElement("div");
  promoCardBtnDiv.className = "promo__card__btn";
  const promoCardBtn = document.createElement("button");
  promoCardBtn.className = "basket__btn";

  promoCardDiscount.textContent = discount;
  promoCardContentTopLeftH1.textContent = price;
  promoCardContentTopLefP1.textContent = "С картой";
  promoCardContentTopLeftH2.textContent = price;
  promoCardContentTopLefP2.textContent = "Обычная";
  promoCardContentText.textContent = name;
  promoCardDescription.textContent = description;
  promoCardBtn.textContent = "В корзину";
  if (rating == 5) {
    promoCardRating.src = "../../assets/images/rating5.svg";
  } else if (rating == 4) {
    promoCardRating.src = "../../assets/images/rating4.svg";
  } else if (rating == 4.5) {
    promoCardRating.src = "../../assets/images/rating4.5.svg";
  } else if (rating == 3) {
    promoCardRating.src = "../../assets/images/rating3.svg";
  } else if (rating == 3.5) {
    promoCardRating.src = "../../assets/images/rating2.5.svg";
  } else if (rating == 2) {
    promoCardRating.src = "../../assets/images/rating2.svg";
  } else if (rating == 1) {
    promoCardRating.src = "../../assets/images/rating1.svg";
  }

  if (discount == 0) {
    promoCardDiscount.style.display = "none";
  }

  promoCardBtnDiv.appendChild(promoCardBtn);

  promoCardFrame.append(promoCardImg, promoCardLikeBtn, promoCardDiscount);
  promoCardLikeBtn.append(promoCardLikeBtnImg);

  promoCardContentTopRight.append(
    promoCardContentTopLeftH2,
    promoCardContentTopLefP2
  );

  promoCardContentTopLeft.append(
    promoCardContentTopLeftH1,
    promoCardContentTopLefP1
  );

  promoCardContentTop.append(promoCardContentTopLeft, promoCardContentTopRight);

  promoCardContent.append(
    promoCardContentTop,
    promoCardContentText,
    promoCardDescription,
    promoCardRating,
    promoCardBtnDiv
  );

  promoCard.append(promoCardFrame, promoCardContent);

  return promoCard;
}

let discountProducts = products.filter((el) => el.discount).slice(-4);

discountProducts.forEach((el) => {
  promoRow.append(getPromoCard(el));
});

let newProducts = products.slice(-4);

newProducts.forEach((el) => {
  newsRow.append(getPromoCard(el));
});

let ratingProduct = products.toSorted((a, b) => a.rating - b.rating).slice(-4);

ratingProduct.forEach((el) => {
  boughtRow.append(getPromoCard(el));
});

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
