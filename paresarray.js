function obtenerNumerosPares(numeros) {
  pares = [];
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 == 0) {
      pares.push(numeros[index]);
    }
  }
  return pares;
}

function obtenerNumerosImpares(numeros) {
  impares = [];
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 != 0) {
      impares.push(numeros[index]);
    }
  }
  return impares;
}

function busquedaNumeros(numeros) {
  let buscado = 3;
  let encontrado = false;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] == buscado) {
      console.log("Numero encontrado en la posicion " + index);
      encontrado = true;
    }
  }
  return encontrado;
}

console.log(obtenerNumerosImpares([1, 2, 3, 4, 5, 6]));
console.log(obtenerNumerosPares([1, 2, 3, 4, 5, 6]));
console.log(busquedaNumeros([1, 2, 3, 4, 5, 6]));
