function numeroAleatorio(numeroMaximo) {
  return Math.floor(Math.random() * numeroMaximo); // arroja de manera random un numero y lo redonda para bajo con Math.floor
}

// distancia entre dos puntos ; teorema de pitagoras//

let medirDistancia = (click, objetivo) => {
  let diffX = click.offsetX - objetivo.x; // diferencia del eje de las x
  let diffY = click.offsetY - objetivo.y; // diferencia del eje de las y
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let distanciaAlObjetivo = (distancia) => {
  if (distancia < 30) {
    return "Estas muy cerca 💪🏼";
  } else if (distancia < 40) {
    return "Cerca 👍";
  } else if (distancia < 60) {
    return "A mitad de camino! 😂";
  } else if (distancia < 100) {
    return " Lejos 🤷‍♂️";
  } else if (distancia < 180) {
    return "Estas bastante lejos 😒";
  } else if (distancia < 360) {
    return "No estas para nada cerca 😜";
  } else {
    return "Noooooooooo, extremadamente lejos 🤦‍♂️ ";
  }
};
