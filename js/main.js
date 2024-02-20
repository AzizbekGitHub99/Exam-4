let currentIdJson = localStorage.getItem("currentProd");
let currentId = JSON.parse(currentIdJson) || 0;
let userInfoJson = localStorage.getItem("userInfo");
let userInfo = JSON.parse(userInfoJson) || { img: null, name: "" };
let currentCategory = localStorage.getItem("category");

let toggle = document.querySelector(".nav__toggle__btn");
let menu = document.querySelector("#katalog");
let hamburgerTop = document.querySelector(".hamburger-top");
let hamburgerCenter = document.querySelector(".hamburger-center");
let hamburgerBottom = document.querySelector(".hamburger-bottom");
let navEnd = document.querySelector(".nav__end");
let modal = document.querySelector("#modal");
let formModal = document.querySelector(".modal__form");
let dialogModal = document.querySelector(".modal__dialog");
let dropDown = document.querySelector(".user__dropdown");
let isOpen = false;

toggle.addEventListener("click", () => {
  console.log("click");
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

let katalogBottom = document.getElementById("katalog__bottom");
let toggleBottom = document.getElementById("toggle__bottom");

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
  catalogRow.innerHTML = "";
  categories.map(({ name }) => {
    return (catalogRow.innerHTML += `
      <li><a onclick="setCategory('${name}')" href="/pages/category.html">${name}</a></li>
    `);
  });
}

mappingCategories();

function setCategory(name) {
  mappingCategories();
  localStorage.setItem("category", name);
}

function getNavEnd() {
  let imgSrc =
    userInfo.img ||
    "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg";
  let userName = userInfo.name || "Войти";
  return `
    <img src=${imgSrc} alt="" />
    <h1>${userName}</h1>
    <button><img src="/assets/images/nav-down.svg" alt="" /></button>
  `;
}

function renderNavEnd() {
  navEnd.innerHTML = getNavEnd();
}

renderNavEnd();

navEnd.addEventListener("click", function (e) {
  userInfo.name ? toggleDropDown() : openModal(e);
});

formModal.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
  let file = formModal.children[1].files[0];
  userInfo.img = URL.createObjectURL(file);
  userInfo.name = formModal.children[0].children[1].value;
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  modal.childNodes[1].style.transform = "scale(0)";
  renderNavEnd();
});

dialogModal.addEventListener("click", function (e) {
  e.stopPropagation();
});

function toggleDropDown() {
  dropDown.classList.toggle("show__dropdown")
  console.log(dropDown.classList);
}

function exitLogin() {
  localStorage.removeItem("userInfo");
  dropDown.classList.toggle("show__dropdown")
  location.reload();
  renderNavEnd();
}

function openModal() {
  modal.childNodes[1].style.transform = "scale(1)";
}
function closeModal() {
  modal.childNodes[1].style.transform = "scale(0)";
}
