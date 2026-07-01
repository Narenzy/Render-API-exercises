import axios from 'axios';

const BaseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';

const API_KEY = '1';

export async function getMealsQuery(query) {
  const response = await axios.get(BaseUrl, {
    params: {
      // key: API_KEY,
      s: query,
    },
  });
  console.log(response.data);
  return response.data;
}
