import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.append(...createGallery(galleryItems));

const imageInstance = basicLightbox.create(`
		<img class="imageInstance__img" width="1280" height="720" >
	`);




galleryEl.addEventListener('click', openOriginalInModal);

function openOriginalInModal(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    imageInstance.show();
    const lightboxImgEl = document.querySelector('.imageInstance__img');
    lightboxImgEl.setAttribute('src', event.target.dataset.source);    

    // const modalElVisible = document.querySelector('.basicLightbox');
    createModalPosition(document.querySelector('.basicLightbox'));
    
    lightboxImgEl.addEventListener('click', closeModal);

    document.addEventListener("keydown", event => {        
        if (event.code === 'Escape') {
            closeModal();
        }
    });
}


function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description, }) => {
        const linkEl = document.createElement('a');
        linkEl.classList.add('gallery__link');
        linkEl.href = original;        

        const imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = preview;
        imgEl.setAttribute('data-source', original);
        imgEl.alt = description;

        linkEl.append(imgEl);        

        return linkEl;
    });
}

function closeModal() {
        imageInstance.close();
}
    
function createModalPosition(modalElVisible) {
    modalElVisible.style.position = 'absolute';
    modalElVisible.style.top = '60px';
    modalElVisible.style.left = '50%';
    modalElVisible.style.transform = 'translateX(-50%)';
}