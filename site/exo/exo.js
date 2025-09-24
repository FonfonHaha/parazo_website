const animScrolls = document.querySelectorAll(".anim-scroll");

window.addEventListener("scroll", () => {
    animScrolls.forEach(animScroll => {
        if (animScroll.getBoundingClientRect().top < window.innerHeight * 0.8) {
            animScroll.classList.add("visible");
        } else {
            animScroll.classList.remove("visible");
        }
    });
});
