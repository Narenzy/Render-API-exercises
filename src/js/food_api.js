import axios from 'axios';

export async function getMealsQuery(query) {
  const query = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken',
    {
      params: {
        s: query,
      },
    }
  );
  return response.data;
  console.log(query);
}
