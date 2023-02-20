import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", onImagePreviewClick);

const imageMarkup = galleryItems
  .map((item) => {
    return `
   <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
   `;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);

function onImagePreviewClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageOriginal = event.target.dataset.source;
  console.log(imageOriginal);

  basicLightbox.create(imageOriginal).show();
}
