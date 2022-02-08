// Capturamos BOTONES //
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
const container = document.querySelector(".container");
const parrafo = document.querySelector(".parrafo");
const titulo = document.querySelector(".titulo");
const row = document.querySelector("#row");

// Tipos de perfiles
const conservador = document.querySelector("#CONSERVADOR")
const moderado = document.querySelector("#MODERADO")
const agresivo = document.querySelector("#AGRESIVO")

// f i n  Capturamos BOTONES //

var i = 1;
var resultado_final = 0;




boton_siguiente.onclick = () => {
  // Si el indice es menor a la cantida de preguntas
  if (i < preguntas.length) {
    // Movimiento de barra de progreso test
    var widht_bar = ((i + 1) * 100) / 8;
    var resultado = "width:" + widht_bar + "%";
    barra_progreso.setAttribute("style", resultado);
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
    elementos.forEach(function (elemento) {
      if (elemento.checked == true) {
        resultado_final += parseInt(elemento.value);
      }
    });

    // Sacar
    box_respuesta.setAttribute("style", "display: none");
    barra_progreso.setAttribute("style", "display: none");
    parrafo.setAttribute("style", "display: none");
    titulo.setAttribute("style", "display: none");
    row.setAttribute("style", "display: none");
    // Fin Sacar
    if (resultado_final <= 13) {
      conservador.removeAttribute("style")
      //window.open("modelotipo.html")
    } else if (resultado_final >= 20) {
      agresivo.removeAttribute("style")
    } else {
      moderado.removeAttribute("style")
    }
  }

  sessionStorage.setItem("resultadoDelTest", resultado_final);
  console.log(sessionStorage);
  sessionStorage.getItem("resultadoDelTest")

};




if (sessionStorage.getItem("resultadoDelTest") != null){
  // Sacar
box_respuesta.setAttribute("style", "display: none");
barra_progreso.setAttribute("style", "display: none");
parrafo.setAttribute("style", "display: none");
titulo.setAttribute("style", "display: none");
row.setAttribute("style", "display: none");
  console.log("funciona")
  var res_fin = parseInt(sessionStorage.resultadoDelTest)
  if (res_fin <= 13) {
    conservador.removeAttribute("style")
    //window.open("modelotipo.html")
  } else if (res_fin >= 20) {
    agresivo.removeAttribute("style")
  } else {
    moderado.removeAttribute("style")
  }
}