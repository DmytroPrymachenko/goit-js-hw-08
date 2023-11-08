import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryItemsEl = galleryItems.map(galleryInfo => {
  return `
    <li class="gallery__item">
  <a class="gallery__link" href="${galleryInfo.original}">
    <img
      class="gallery__image"
      src="${galleryInfo.preview}"
      alt="${galleryInfo.description}"
    />
  </a>
</li>
  `;
});
gallery.insertAdjacentHTML('beforeend', galleryItemsEl.join(''));

let gallerys = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: '250',
});
