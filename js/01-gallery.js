import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryConteiner = document.querySelector("ul.gallery");
galleryConteiner.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  const imgLocation = target.dataset.source;
  if (target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`<img src="${imgLocation}">`);
  instance.show();

  const closeLightboxByEscape = (e) => {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeLightboxByEscape);
    }
  };
  document.addEventListener("keydown", closeLightboxByEscape);
});
const addPictures = galleryItems.map((item) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
});
galleryConteiner.insertAdjacentHTML("beforeend", addPictures.join(""));

console.log(galleryItems);

console.log(galleryItems);
