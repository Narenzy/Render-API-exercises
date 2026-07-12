import axios from 'axios';

const BaseUrl = 'https://wedding-photographer.b.goit.study/api';
const End_point = '/wedding-photos';

export async function getWeddingPhotos() {
  const response = await axios.get(`${BaseUrl}${End_point}`);
  return response.data.weddingPhotos;
}
