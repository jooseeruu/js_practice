function cara_cruz() {
  resultado = Math.floor(Math.random() * 2) + 1;
  if (resultado == 1) {
    console.log("Has ganado");
  } else {
    console.log("Has perdido");
  }
}
cara_cruz();
