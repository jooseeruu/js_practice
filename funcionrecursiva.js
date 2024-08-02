function funcionR(numero) {
  if (numero == 1) {
    console.log(numero);
  } else {
    console.log(numero);
    funcionR(numero - 1);
  }
}
funcionR(3);
