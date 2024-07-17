let numeros = [12, 5, 8, 130, 44, 9, 1, 18];

function ordenarArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function filtrarPares(array) {
  let pares = array.filter((numero) => numero % 2 === 0);
  return pares;
}

console.log(ordenarArray(numeros));
console.log(filtrarPares(numeros));
