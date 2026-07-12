import { getWeddingPhotos } from './api';
import { renderPhoto } from './render-functions';

const refs = {
  gallary: document.querySelector('.gallery'),
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('click', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  try {
    const data = await getWeddingPhotos();

    renderPhoto(data);
  } catch (error) {
    console.error('Request feiled:', error);
  }
}
