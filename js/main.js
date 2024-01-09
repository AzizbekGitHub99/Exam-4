let count = 0
const btn = document.querySelectorAll(".basket__btn");
const span = document.querySelector(".plus");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    count++
    span.innerHTML = count;
  });
}

