const images = [
    "img/projet-base/logo.svg",
    "img/projet-base/logohorizontal.svg",
    "img/projet-base/logoicon.svg"
];
const slides = document.querySelector('.slider-slides');
const prev = document.querySelector('.slider-previous');
const next = document.querySelector('.slider-next');

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    slides.appendChild(img);
});

let index = 0;
const totalImages = images.length;

function updateSlider() {
    const width = slides.offsetWidth / totalImages;
    slides.style.transform = `translateX(-${index * width}px)`;
}

prev.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateSlider();
});

next.addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateSlider();
});

updateSlider();