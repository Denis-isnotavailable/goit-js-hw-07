import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.append(...createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description, }) => {
        const linkEl = document.createElement('a');
        linkEl.classList.add('gallery__link');
        linkEl.href = original;        

        const imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = preview;        
        imgEl.alt = description;

        linkEl.append(imgEl);        

        return linkEl;
    });
}
