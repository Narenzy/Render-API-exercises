export async function renderPhoto(images) {
  const murkup = images
    .map(image => {
      return `
         
              <li class="img-item">
                <img src="${image.img}" alt="${image.title}" />
                <h2 class="title-item">${image.title}</h2>
                <p class="desc-item">${image.desc}</p>
              </li>`;
    })
    .join('');
  const gallery = document.querySelector('gallery');
  gallery.insertAdjacentHTML('beforeend', murkup);
}
