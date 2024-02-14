const categoriesRow = document.querySelector(".categories__row");

function getCategoriesCard({ id, name, image }) {
  return `
    <a href="/pages/category.html" onclick="setCategory(${id})" class="hero__item item1">
        <img src=${image} alt=${name} />
        <div class="hero__item__effect">
            <h4>${name}</h4>
        </div>
    </a>
    `;
}

categories.map((el) => {
  categoriesRow.innerHTML += getCategoriesCard(el);
});
