import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");

createGallery(galleryItems, galleryBox);

galleryBox.addEventListener("click", getBigImgUrl);

function createGallery(galleryItems, galleryBox) {
  const galleryLi = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  galleryBox.innerHTML = galleryLi;
}

function getBigImgUrl(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const bigImgUrl = evt.target.dataset.source;
  toOpenModal(bigImgUrl);
}
let instance = null;
function toOpenModal(ImgUrl) {
  instance = basicLightbox.create(`
    <img src="${ImgUrl}" width="1000" height="800">
`);
  window.addEventListener("keydown", toCloseModal);
  instance.show();
}
function toCloseModal(evt) {
  if (evt.code === "Escape") {
    instance.close();
    window.addEventListener("keydown", toCloseModal);
  }
}
