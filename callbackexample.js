function printear(mensaje) {
  console.log(mensaje);
}

function restar(a, b, callback) {
  let resultado = a - b;
  callback(resultado);
}

restar(10, 5, printear);
