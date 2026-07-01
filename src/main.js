import { getMealsQuery } from './js/food_api';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const query = formData.get('search-text').trim();
  getMealsQuery(query);
});
