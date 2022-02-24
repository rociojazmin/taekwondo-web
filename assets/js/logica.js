
// Carousel

var mycarousel = document.querySelector('#mycarousel');
var carousel = new bootstrap.Carousel(mycarousel, {
    interval: 6000,
});


// Animacion Fade-in

const observer = new IntersectionObserver(entries => {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
            document.querySelectorAll(".animado")[0].classList.add("fadeinleft");
            document.querySelectorAll(".animado")[1].classList.add("fadeintop");
            document.querySelectorAll(".animado")[2].classList.add("fadeinright");
        }
    }
});

observer.observe(document.querySelector(".contenedor-animacion"));

// GENERADOR:

// Generador de imagenes

var imagenes = [
    "assets/img/azar-1.jpg",
    "assets/img/azar-2.jpg",
    "assets/img/azar-3.jpg",
    "assets/img/azar-4.jpg",
    "assets/img/azar-5.jpg",
    "assets/img/azar-6.jpg"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var imagenElegida = imagenes[getRandomInt(imagenes.length)];
console.log(imagenElegida);
document.getElementById("imagenAlAzar").src = imagenElegida;

// Generador de frases

function generate() {
    var frases = [
        "La fortaleza no llega de la capacidad física. Llega de una voluntad indomable",
        "Hoy haré los que otros no harán, para mañana conseguir los que otros no pueden",
        "La adversidad hace que algunos hombres se rompan; otros rompen sus límites",
        "Nunca digas nunca. Porque los límites, como el miedo, a menudo son sólo una ilusión",
        "Algunas personas quieren que algo ocurra, otras sueñan con qué pasará, otras hacen que suceda"
    ]

    var frase_random = Math.floor(Math.random() * frases.length);
    document.getElementById('result').innerHTML = "<figure class='text-center'><blockquote class='blockquote'> <p class='w-auto'>" + frases[frase_random] + "</p> </blockquote> <figcaption class='blockquote-footer mb-4'>¡Sumate a Taekwondo Eita!</figcaption></figure>";
}

// Formulario

var datos = new Array();
var pronombre;
function enviarFormulario() {
    var nombre = document.getElementById("contacto_nombre").value.trim();
    var mail = document.getElementById("contacto_email").value;
    var cumpleanos = document.getElementById("contacto_cumple").value;
    var telefono = document.getElementById("contacto_telefono").value;
    var consulta = document.getElementById("contacto_consulta").value.trim();
    var suscribirse = document.getElementById("contacto_checkbox").checked;

    var genero = document.querySelector('input[name="genero"]:checked').value;
    var cuerpoConsulta = "";

    // switch genero
    switch (genero) {
        case "el":
            cuerpoConsulta = `Señor ${nombre}, su consulta se envió con éxito!`;
            break;
        case "ella":
            cuerpoConsulta = `Señora ${nombre}, su consulta se envió con éxito!`;
            break;
        default:
            cuerpoConsulta = `${nombre}, su consulta se envió con éxito!`;
            break;
    }
    if (suscribirse) {
        cuerpoConsulta += "\nTe enviaremos las últimas novedades de Taekwondo EITA!"
    } else {
        cuerpoConsulta += "\nTe invitamos a suscribirte para recibir las últimas novedades de Taekwondo EITA!"
    }
    datos.push(nombre, mail, cumpleanos, telefono, consulta, pronombre);
    console.log(datos);

    // Mostrar el modal
    setTimeout(() => {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        document.getElementById("cuerpo-consulta").innerText = cuerpoConsulta;
        myModal.show();
    }, 200);
}


