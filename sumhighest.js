function sumArray(array) {
  let maxValue = array[0];
  let minValue = array[0];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxValue) {
      maxValue = array[index];
    }
    if (array[index] < minValue) {
      minValue = array[index];
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (array[j] === maxValue || array[j] === minValue) {
      array.splice(j, 1);
      j--;
    }
  }

  let finalSum = 0;
  for (let x = 0; x < array.length; x++) {
    finalSum += array[x];
  }

  return finalSum;
}

const resultado = sumArray([10, 20, 30, 40, 5]);
console.log("La suma final es:", resultado);
