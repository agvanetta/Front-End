let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  var year = new Date().getFullYear();
  datosPersona.nombre = prompt("Ingresa a continuacion tu nombre completo:");
  datosPersona.edad = year - prompt("Ingresa tu fecha de nacimiento ");
  datosPersona.ciudad = prompt("Ciudad donde vivis : ");
  consultaPorJS = confirm("¿Tenes interes por JavaScript? ");
  if (consultaPorJS) {
    datosPersona.interesPorJs = "Si !";
  } else {
    datosPersona.interesPorJs = "No u.u";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerHTML = datosPersona.nombre;
  document.getElementById("edad").innerHTML = datosPersona.edad;
  document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
  document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;
}

/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  fila = document.getElementById("fila");
  resultado = document.querySelector("#fila").hasAttribute("class");
  if (resultado == false) {
    fila.setAttribute("class", "cargado");
    listado.forEach((elemento) => {
      fila.innerHTML += ` 
    <div class="caja">
    <img src= ${elemento.imgUrl} alt=${elemento.lenguajes}>
    <p class="lenguajes">${elemento.lenguajes}</p>
    <p class="bimestre">${elemento.bimestre}</p>
   </div>
    `;
    });
  }
}
function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sobremi = document.querySelector(".sobre-mi");
  sobremi.classList.toggle("sobre-mi-completo");
}
