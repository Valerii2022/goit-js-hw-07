import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const imageMarkup = galleryItems
  .map((item) => {
    return `
   <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
   `;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);

let modalLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
