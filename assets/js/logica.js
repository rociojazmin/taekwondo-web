
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
    "assets/img/rocio2 copia.jpg",
    "assets/img/rocio3 copia.jpg",
    "assets/img/rocio5 copia.jpg",
    "assets/img/rocio6 copia.jpg",
    "assets/img/rocio1 copia.jpg",
    "assets/img/rocio4 copia.jpg"

];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var imagenElegida = imagenes[getRandomInt(imagenes.length)];
console.log(imagenElegida);
document.getElementById("imagenAlAzar").src = imagenElegida;

// Generador de frases

function generate() {
    var frases = ["Si caíste ayer, ponte en pie hoy",
        "La fortaleza no llega de la capacidad física. Llega de una voluntad indomable",
        "La manera más efectiva de hacerlo, es hacerlo",
        "Puedo, luego existo",
        "Si vas paso a paso y con confianza, puedes llegar lejos",
        "Hoy haré los que otros no harán, para mañana conseguir los que otros no pueden",
        "Si tienes miedo de fallar, probablemente falles",
        "Gana si puedes, pierde si es necesario, pero ¡nunca abandones!",
        "Tu mayor oponente no es la otra persona. Es la naturaleza humana",
        "Los ganadores nunca se rinden y los que se rinden nunca ganan",
        "Para aprender a triunfar primero tienes que aprender a fallar"
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
            cuerpoConsulta = `Señor ${nombre}, su consulta se envio con exito!`;
            break;
        case "ella":
            cuerpoConsulta = `Señora ${nombre}, su consulta se envio con exito!`;
            break;
        default:
            cuerpoConsulta = `${nombre}, su consulta se envio con exito!`;
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


