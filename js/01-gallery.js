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

  basicLightbox.create(`<img src=${event.target.dataset.source} alt = "${event.target.alt}"/>`).show();

}


 
// ----------------------------------------------------------------------------
// function OnKeyPress(event) {
//     window.addEventListener('keyup', OnEscapeKeyPress)
// }

// function OnEscapeKeyPress(event) {
//     if(event.code === 'Escape')
//   {
//     const modal = document.querySelector('.basicLightbox')
//     console.log(modal)
//     modal.classList.remove('basicLightbox--visible')
//     window.removeEventListener('keyup', OnEscapeKeyPress)
//     }
//   }
