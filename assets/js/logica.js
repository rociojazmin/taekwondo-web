
// Carousel

var mycarousel = document.querySelector('#mycarousel');
var carousel = new bootstrap.Carousel(mycarousel, {
    interval: 6000,
});




// Animacion Fade-in

const observer = new IntersectionObserver(entries => {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if(entry.isIntersecting){
            document.querySelectorAll(".animado")[0].classList.add("fadeinleft");
            document.querySelectorAll(".animado")[1].classList.add("fadeintop");
            document.querySelectorAll(".animado")[2].classList.add("fadeinright");
        }
    }
});

observer.observe(document.querySelector(".contenedor-animacion"));


// Modal

// setTimeout(() => {
//     var myModal = new bootstrap.Modal(document.getElementById('myModal'), options);
//     myModal.show();
// }, 5000);


// Switch

var nombre = "Calaiego";
var genero = "h";//"m", "otro"

var prefijo;
switch (genero) {
    case "h":
        prefijo = "Señor";
        break;
    case "m":
        prefijo = "Señora";
        break;
    default:
        prefijo = "Hola";
        break;
}

var mensaje = prefijo +  " " + nombre + ", ya enviamos tu solicitud...";
console.log(mensaje);
