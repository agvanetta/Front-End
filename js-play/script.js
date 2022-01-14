
const widht = 400;
const height = 400;

let elnombre = prompt("Bienvenido, ingrese su nombre")

if (elnombre == null) {
    document.querySelector("h1").innerHTML = `Bienvenido a la busqueda del tesoro, suerte!`;
} else {
document.querySelector("h1").innerHTML = ` Bienvenido ${elnombre} a la busqueda del tesoro, suerte!`};

let generandoTesoro = {
    x: numeroAleatorio(widht),
    y: numeroAleatorio(height)
}

let $map = document.getElementById("map"); // querySelector("#map"); el signo $ es porque hace referencia a un elemento HTML.
let $distancia = document.querySelector("#distancia");
let clicksDelUsuario = 0;

$map.addEventListener ( "click" , function(event) {
    clicksDelUsuario++;
    let distancia = medirDistancia(event, generandoTesoro);
    let distanciaUsuario = distanciaAlObjetivo ( distancia );

    $distancia.innerHTML = `<h1> ${distanciaUsuario} </h1>`;

    if (distancia < 20) {
        alert ( " Encontraste el tesoro !!! Utilizaste "+clicksDelUsuario+" clicks");
        location.reload;
    }

} )