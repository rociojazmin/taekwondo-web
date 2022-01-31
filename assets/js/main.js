window.addEventListener('scroll', function(){
let animacion = document.getElementById('animado');
let posicionobj1 = animacion.getBoundingClientRect().top;
console.log(posicionobj1);
let tamanodepantalla = window.innerHeight/3;

if(posicionobj1 < tamanodepantalla){
    animacion.style.animation = 'mover 1s ease-out'
}
})

let animado = document.querySelectorAll(".animado");

function mostrarscroll(){
    let scrolltop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){
        let alturaanimado = animado[i].offsetTop;
        if(alturaanimado - 500 < scrolltop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrararriba");
        }
    }
}

window.addEventListener('scroll', mostrarscroll);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeinleft");
            document.querySelectorAll(".animated")[1].classList.add("fadeintop");
            document.querySelectorAll(".animated")[2].classList.add("fadeinright");
        }
    })
})

observer.observe(document.querySelector(".contenedor-animacion"));