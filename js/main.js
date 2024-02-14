let currentIdJson = localStorage.getItem("currentProd");
let currentId = JSON.parse(currentIdJson) || 0;
let currentCategoryJson = localStorage.getItem("category");
let currentCategory = JSON.parse(currentCategoryJson) || "Fruit";

// HEADER KATALOG

let toggle = document.querySelector(".nav__toggle");
let menu = document.querySelector("#katalog");
let hamburgerTop = document.querySelector(".hamburger-top");
let hamburgerCenter = document.querySelector(".hamburger-center");
let hamburgerBottom = document.querySelector(".hamburger-bottom");
let isOpen = false;

toggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    menu.style.top = "70px";
    hamburgerTop.style = `
    top: 6px;
    transform: rotate(140deg);
    width: 20px;
    background-color: white;
    `;
    hamburgerBottom.style = `
    top: 6px;
    transform: rotate(-140deg);
    width: 20px;
    background-color: white;
    `;
    hamburgerCenter.style.opacity = "0";
  } else {
    menu.style.top = "-210px";
    hamburgerTop.style = `
    top: 0px;
    transform: rotate(0);
    width: 25px;
    `;
    hamburgerBottom.style = `
    bottom: 1.2px;
    transform: rotate(0);
    width: 25px;
    `;
    hamburgerCenter.style = `
    opacity: 1;
    transition: 0.5s;
    `;
  }
});

// HEADER BOTTOM KATALOG

const katalogBottom = document.getElementById("katalog__bottom");
const toggleBottom = document.getElementById("toggle__bottom");
const main = document.getElementById("main");

toggleBottom.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    katalogBottom.style.bottom = "0";
  } else {
    katalogBottom.style.bottom = "-210px";
  }
});

// HEADER CATALOG MAPPING
let catalogRow = document.querySelector(".catalog-rendering");

function mappingCategories() {
  catalogRow.innerHTML = ""
  categories.map(({id, name}) => {
    return (catalogRow.innerHTML += `
      <li><a onclick="setCategory(${name})" href="/pages/category.html">${name}</a></li>
    `);
  });
}

mappingCategories();

function setCategory(cate) {
  let curCategory = categories.find(ca => ca.name == cate)
  localStorage.setItem("category", JSON.stringify(curCategory));
}

// ADD TO CART
