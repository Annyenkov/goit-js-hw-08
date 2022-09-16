// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const cardContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
cardContainer.insertAdjacentHTML('beforeend', cardsMarkup);
cardContainer.addEventListener('click', onCardContainerClick, {once : true});

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}" onclick="return false">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
  })
    .join('');
}

function onCardContainerClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  };
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,

  });
};
console.log(galleryItems);

