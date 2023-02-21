import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", onImagePreviewClick);

const imageMarkup = galleryItems
  .map((item) => {
    return `
   <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" title="${item.description}" />
   </a>
   `;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);

let modalLightbox = new SimpleLightbox('.gallery a', {captionDelay: 250});


function onImagePreviewClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
}


