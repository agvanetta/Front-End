
nombre = prompt(" Ingresa tu nombre !");

if (nombre == null) {
  document.querySelector("h1").innerHTML += ` hoy nos visita un viajero aleatorio`;
} else {
  document.querySelector("h1").innerHTML += ` hoy nos visita ${nombre} `;

// -----------------------------------------------------------------------------//

function escribirHTML(titulo, texto) {
  const selector = document.querySelector(".pupe");
  const miTemplate = `
     <h3> ${titulo} </h3>
     <p> ${texto} </p>
     `;

  selector.innerHTML += miTemplate;
}

escribirHTML(
  "Este texto fue agregado desde JavaScript y vinculado con HTML",
  " Utilizando function, querySelector, y template string"
);

escribirHTML(
  "Digital House",
  "<b> Certified Tech Developer 2021-2023 </b>"
);

// oscuro = confirm ("Desea cambiar el color a oscuro?")

cards = document.querySelectorAll("h2");
body = document.querySelector("body");

// ejecutar = function () {
//   if (oscuro) {
//     body.style.backgroundColor = "rgb(42, 42, 42)";
//     body.style.color = "white";
//     cards.style.color = "black";
//   }
// };

// btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   body.style.backgroundColor = "rgb(42, 42, 42)";
//   body.style.color = "white";
//   cards.style.color = "black";
// });

btn = document.querySelector("button");
btn.addEventListener("click", function () {
  body.classList.toggle("black");
})};
