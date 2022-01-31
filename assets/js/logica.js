
var myCarousel = document.querySelector('#mycarousel')
var carousel = new bootstrap.Carousel(mycarousel, {
    items : 6,
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    slideSpeed : 800,
});

//////////////


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animado")[0].classList.add("fadeinleft");
            document.querySelectorAll(".animado")[1].classList.add("fadeintop");
            document.querySelectorAll(".animado")[2].classList.add("fadeinright");
        }
    })
});

console.log(observer);

observer.observe(document.querySelector(".contenedor-animacion"));
