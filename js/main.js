let count = 0;
const btn = document.querySelectorAll(".basket__btn");
const span = document.querySelector(".plus");
if (count == 0) {
  span.style.display = "none";
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    count++;
    span.style.display = "flex";
    span.innerHTML = count;
  });
}

let count2 = 0;
const btn2 = document.querySelectorAll(".basket__btn");
const span2 = document.querySelector(".plus2");

for (let i = 0; i < btn2.length; i++) {
  btn2[i].addEventListener("click", () => {
    count2++;
    span2.innerHTML = count2;
  });
}

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
    background-color: #f63;
    `;
    hamburgerBottom.style = `
    top: 6px;
    transform: rotate(-140deg);
    width: 20px;
    background-color: #f64;
    `;
    hamburgerCenter.style.opacity = "0";
  } else {
    menu.style.top = "-200px";
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
    katalogBottom.style.bottom = "-200px";
  }
});

main.addEventListener("click", () => {
  katalogBottom.style.bottom = "-200px";
  menu.style.top = "-200px";
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
});

// header catalog mapping

const catalotUl = document.createElement("ul");
const catalotLi = document.createElement("li");
const catalotA = document.createElement("a");

for (let i = 1; i < 4; i++) {
  
}
