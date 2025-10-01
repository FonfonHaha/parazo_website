const images = [
    "img/projet-base/1.png",
    "img/projet-base/2.png",
    "img/projet-base/3.png"
];
const slide = document.querySelector('.slider-slide')
const prev = document.querySelector('.slider-previous');
const next = document.querySelector('.slider-next');

let index = 0;
slide.src = images[0];
const totalImages = images.length;

function updateSlider() {
    slide.classList.remove('slider-slide-visible');
    setTimeout(() => {
        slide.src = images[index];
        void slide.offsetWidth;
        slide.classList.add('slider-slide-visible');
    }, 200);
}

prev.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateSlider();
});

next.addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateSlider();
});

console.log(slide.src);

// if (slide.src) {
//     updateSlider();
// };