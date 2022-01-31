
// Carousel

var mycarousel = document.querySelector('#mycarousel');
var carousel = new bootstrap.Carousel(mycarousel, {
    interval: 6000,
});




// Animacion Fade-in

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animado")[0].classList.add("fadeinleft");
            document.querySelectorAll(".animado")[1].classList.add("fadeintop");
            document.querySelectorAll(".animado")[2].classList.add("fadeinright");
        }
    })
});

observer.observe(document.querySelector(".contenedor-animacion"));
