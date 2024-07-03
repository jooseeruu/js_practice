//Crear el juego cara o cruz. Nosotros siempre seremos cara que será el número 1. El programa tiene que decidir un número aleatorio entre 1 y 2. Si sale 1 ganamos, si sale 2 perdemos.
//Pista: MATH.RANDOM()
function cara_cruz() {
  resultado = Math.floor(Math.random() * 2) + 1;
  if (resultado == 1) {
    console.log("Has ganado");
  } else {
    console.log("Has perdido");
  }
}
cara_cruz();
