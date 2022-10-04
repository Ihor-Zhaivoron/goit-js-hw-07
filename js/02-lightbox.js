import { galleryItems } from "./gallery-items.js";
const galleryBox = document.querySelector(".gallery");

createGallery(galleryItems, galleryBox);

function createGallery(galleryItems, galleryBox) {
  const galleryLi = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
  galleryBox.innerHTML = galleryLi;
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
