let count = 0;
const btn = document.querySelectorAll(".basket__btn");
const span = document.querySelector(".plus");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    count++;
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

let toggle = document.querySelector(".nav__toggle");
let menu = document.querySelector(".katalog");
let isOpen = false;

toggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    toggle.style.overflow = "visible";
    menu.style.opacity = "1";
  } else {
    toggle.style.overflow = "hidden";
    menu.style.opacity = "0";
  }
});
