class SortView {
  _parentElement = document.querySelector('.search-results');
  addHandlerSort = function () {
    const markup = `
    <div class="sort" style="display: none;">
    <span class="pagination__total sort">Sort by:</span>
    <button class="nav__btn sort" id="sort-by-ingredients">Ingredients</button>
    <button class="nav__btn sort" id="sort-by-cooking-time">Cooking Time</button>
  </div>
    `;
    document
      .querySelector('.search-results')
      .insertAdjacentHTML('afterbegin', markup);
    document
      .getElementById('sort-by-ingredients')
      .addEventListener('click', () => controlSortResults('ingredients'));
    document
      .getElementById('sort-by-cooking-time')
      .addEventListener('click', () => controlSortResults('cooking-time'));
  };
  toggleSortButtons(show) {
    const sortElement = this._parentElement.querySelector('.sort');
    if (show) {
      sortElement.style.display = 'flex';
    } else {
      sortElement.style.display = 'none';
    }
  }
}
export default new SortView();
