let themeToggleBtn = document.querySelector('.theme-toggle');

themeToggleBtn.addEventListener('click',() =>{
document.body.classList.toggle('dark-mode')
});

let currentIndex=0;

let zoomLevel =1;
const images= document.querySelectorAll('.thumbnail');

function openLightbox(index){
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    zoomLevel=1;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
    currentIndex = index;
    lightboxImg.src=images[currentIndex+0].src;
    lightbox.style.display='block';
}

function closeLightbox(){
    const lightbox= document.getElementById('lightbox');
    lightbox.style.display='none';
}
function navigateLightbox(direction){
    const lightboxImg=document.getElementById('lightbox-img');
    zoomLevel = 1;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
    currentIndex=(currentIndex + direction + images.length)% images.length;

    lightboxImg.src=images[currentIndex].src;
}
function zoomImage(factor){
    const lightboxImg = document.getElementById('lightbox-img');
    zoomLevel *= factor;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
}