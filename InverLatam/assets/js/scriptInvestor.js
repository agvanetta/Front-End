const boton_siguiente = document.querySelector(".siguiente");
const preguntas_texto = document.querySelector(".pregunta");
const lista_de_opciones = document.querySelector(".respuesta1");
const lista_de_opciones2 = document.querySelector(".respuesta2");
const lista_de_opciones3 = document.querySelector(".respuesta3");
const aceptar_v2 = document.querySelector(".acepto");
const texto_encima = document.querySelector(".texto-encima");
const respuestas_box = document.querySelector(".respuestas_ind");
const box_respuesta = document.querySelector(".section");
const barra_progreso = document.querySelector("#barra_progreso");
const elementos = document.getElementsByName("pregunta");

// aceptar_v2.onclick = () => {
//   texto_encima.innerHTML = "";
//   aceptar_v2.innerHTML = "";
//   texto_encima.removeAttribute("class");
// };

var i = 1;
var resultado_final = 0;

boton_siguiente.onclick = () => {
  // Si el indice es menor a la cantida de preguntas
  if (i < preguntas.length) {
    // Movimiento de barra de progreso test
    var widht_bar = ((i + 1) * 100) / 8;
    var resultado = "width:" + widht_bar + "%";
    barra_progreso.setAttribute("style", resultado);
    console.log(widht_bar);
    // recorrer y almacenar/sumar el dato para resultado final
    elementos.forEach(function (elemento) {
      if (elemento.checked == true) {
        resultado_final += parseInt(elemento.value);
      }
    });

    // escribe html
    barra_progreso.innerHTML = `${i + 1} de 8`;
    preguntas_texto.innerHTML = "<span>" + preguntas[i].pregunta + "</span>";

    lista_de_opciones.innerHTML =
      " <label for=radio1>" + preguntas[i].respuestas.a + "</label>";
    lista_de_opciones2.innerHTML =
      " <label for=radio2>" + preguntas[i].respuestas.b + "</label>";
    lista_de_opciones3.innerHTML =
      " <label for=radio3>" + preguntas[i].respuestas.c + "</label>";

    i++;
    boton_siguiente.innerHTML = "Siguiente";

    // El indice es igual a la cantida de pregunta, finaliza el cuestionario y ejecuta:
  } else {
    var inversorTipo = "";
    if (resultado_final <= 13) {
      inversorTipo = "Conservador";
    } else if (resultado_final >= 20) {
      inversorTipo = "Arriesgado";
    } else {
      inversorTipo = "Moderado";
    }
    box_respuesta.innerHTML = `<div> <span> El resultado del test es Perfil ${inversorTipo} </span> </div>`;
  }
};

// elementos.forEach(function (elemento) {
//   console.log(`Elementos: ${elemento.value}`);
//   console.log(`Seleccionado: ${elemento.checked}`);
// });

// elementos.forEach(function (elemento) {
//   if (elemento.checked == true) {
//     console.log(elemento.value);
//   }
// })

preguntas_texto.removeAttribute("class");
lista_de_opciones.removeAttribute("class");
lista_de_opciones2.removeAttribute("class");
lista_de_opciones3.removeAttribute("class");
