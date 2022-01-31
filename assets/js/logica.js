
// Carousel

var mycarousel = document.querySelector('#mycarousel');
var carousel = new bootstrap.Carousel(mycarousel, {
    interval: 6000,
});




// Animacion Fade-in

const observer = new IntersectionObserver(entries => {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if(entry.isIntersecting) {
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


// Formulario

function enviarFormulario() {
    var nombre = document.getElementById("contacto_nombre").value.trim();
    // var telefono = document.getElementById("contacto_telefono").value;

    var datos = [nombre, //telefono
    ];
    
    // poner el switch de señor/a
    
    alert(datos);


    // mostrar el modal
}



// Generador de imagenes

var imagenes = [
    "https://images.unsplash.com/photo-1550759808-37c78fb8f1e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    "https://images.unsplash.com/photo-1541836567455-2d41eb6dd9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1518&q=80",
    "https://images.unsplash.com/photo-1550759774-a027cb60b309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var imagenElegida = imagenes[getRandomInt(imagenes.length)];
console.log(imagenElegida);
document.getElementById("imagenAlAzar").src = imagenElegida;
