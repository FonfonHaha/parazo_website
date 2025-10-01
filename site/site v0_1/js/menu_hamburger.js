const nav_bar = document.getElementById("nav_bar");
const menu_hamburger = document.getElementById("menu_hamburger");
const menu_icon_cross = document.getElementById("icon_menu_cross");
const menu_icon_hamburger = document.getElementById("icon_menu_hamburger");
const plateau = document.getElementById("main");


if (window.matchMedia("(min-width: 750px)").matches) {
    menu_hamburger.addEventListener("click", function () {
        nav_bar.classList.toggle("element_hidden");
        menu_icon_hamburger.classList.toggle("element_hidden");
        menu_icon_cross.classList.toggle("element_hidden");
    });
    
    document.addEventListener("mousemove", function (e) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
    
        const rotateX = y ;
        const rotateY = x ;
    
        plateau.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    document.addEventListener("mouseleave", function () {
        plateau.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
    console.log("JS works on desktop");
} else {
    console.log("JS does not work on mobile");
}
