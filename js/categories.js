const categoriesRow = document.querySelector(".categories__row");

function getCategoriesCard({ id, name, image }) {
  return `
    <div class="hero__item item1">
        <img src=${image} alt=${name} />
        <div class="hero__item__effect">
            <h4>${name}</h4>
        </div>
    </div>
    `;
}

categories.map((el) => {
  categoriesRow.innerHTML += getCategoriesCard(el);
});
