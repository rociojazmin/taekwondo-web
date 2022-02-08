
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



// Switch

// var nombre = "Calaiego";
// var genero = "h";//"m", "otro"

// var prefijo;
// switch (genero) {
//     case "h":
//         prefijo = "Señor";
//         break;
//     case "m":
//         prefijo = "Señora";
//         break;
//     default:
//         prefijo = "Hola";
//         break;
// }

// var mensaje = prefijo +  " " + nombre + ", ya enviamos tu solicitud...";
// console.log(mensaje);


// Formulario
var datos = new Array();
var pronombre;
function enviarFormulario() {
        var nombre = document.getElementById("contacto_nombre").value.trim();
        var mail = document.getElementById("contacto_email").value;
        var cumpleanos = document.getElementById("contacto_cumple").value;
        var telefono = document.getElementById("contacto_telefono").value;
        var consulta = document.getElementById("contacto_consulta").value.trim();

        if (document.getElementById("femenino").checked){
            pronombre="Señora";
        }else if (document.getElementById("masculino").checked){
                pronombre = "Señor"
            }
        else {
            document.getElementById("otro").checked
            pronombre=" ";
        }
        datos.push(nombre, mail, cumpleanos, telefono, consulta, pronombre);
        

    console.log(datos);

    // poner el switch de señor/a nomesale :p
        // switch(pronombre)
    // {
    //     case document.getElementById("femenino").checked:
    //            pronombre="Señora";
    //            break;
    //     case document.getElementById("masculino").checked:
    //                pronombre = "Señor";
    //                break;
    //     case document.getElementById("otro").checked:
    //          pronombre=" ";
    //          break;
    // }
    // datos.push(nombre, mail, cumpleanos, telefono, consulta, pronombre);
 
// mostrar el modal
     setTimeout(() => {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }, 200);
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
