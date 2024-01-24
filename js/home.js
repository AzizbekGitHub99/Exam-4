const promoCard = document.createElement("div");
promoCard.className = "promo__card";
const promoCardFrame = document.createElement("div");
promoCardFrame.className = "Promo__card__img";
const promoCardImg = document.createElement("img");
const promoCardLikeBtn = document.createElement("button");
const promoCardLikeBtnImg = document.createElement("img");
const promoCardDiscount = document.createElement("span");
const promoCardContent = document.createElement("div");
const promoCardContentTop = document.createElement("div");
const promoCardContentTopLeft = document.createElement("div");
const promoCardContentTopLeftH1 = document.createElement("h1");
const promoCardContentTopLefP1 = document.createElement("p");
const promoCardContentTopRight = document.createElement("div");
const promoCardContentTopLeftH2 = document.createElement("h2");
const promoCardContentTopLefP2 = document.createElement("p");
const promoCardContentText = document.createElement("h5");
const promoCardRating = document.createElement("img");
const promoCardBtnDiv = document.createElement("div");
const promoCardBtn = document.createElement("button");

const promoCardDiscountText = document.createTextNode("-50%");
const promoCardContentTopLeftH1Text = document.createTextNode("44,50 ₽");
const promoCardContentTopLefP1Text = document.createTextNode("С картой");
const promoCardContentTopLeftH2Text = document.createTextNode("50,50 ₽");
const promoCardContentTopLefP2text = document.createTextNode("Обычная");
const promoCardContentTextText = document.createTextNode(
  "Г/Ц Блинчики с мясом вес, Россия"
);
const promoCardBtnText = "В корзину";

promoCardDiscount.appendChild(promoCardDiscountText);
promoCardContentTopLeftH1.appendChild(promoCardContentTopLeftH1Text);
promoCardContentTopLefP1.appendChild(promoCardContentTopLefP1Text);
promoCardContentTopLeftH2.appendChild(promoCardContentTopLeftH2Text);
promoCardContentTopLefP2.appendChild(promoCardContentTopLefP2text);
promoCardContentText.appendChild(promoCardContentTextText);

promoCardLikeBtn.append(promoCardLikeBtnImg);
promoCardFrame.append(promoCardDiscount);
promoCardFrame.append(promoCardImg, promoCardLikeBtn);

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
  promoCardRating,
  promoCardBtnDiv
);

promoCard.append(promoCardFrame, promoCardContent);

console.log(promoCard);
