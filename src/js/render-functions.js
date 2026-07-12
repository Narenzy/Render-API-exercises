export function renderPhoto(images) {
  const markup = images
    .map(
      image => `
         
              <li class="img-item">
                <img src="${image.img}" alt="${image.title}" />
                <h2 class="title-item">${image.title}</h2>
                <p class="desc-item">${image.desc}</p>
              </li>`
    )
    .join('');
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = markup;
}
