// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

const containerImgs = document.querySelector('.gallery');

const marcup = galleryItems.map(({description: desc, preview: prev, original: org}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${org}">
      <img class="gallery__image" src="${prev}" alt="${desc}" />
   </a>
</li>
`);

containerImgs.insertAdjacentHTML('beforeend', marcup.join(''));

const options = {
	captionsData: 'alt',
	captionDelay: 250,
   	captionPosition: 'bottom'
};

const lightbox = new SimpleLightbox('.gallery a', options);
