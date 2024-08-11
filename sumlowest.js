function SumLowest(array) {
  let aux = Infinity;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < aux) {
      aux = array[index];
    }
  }
  return aux;
}

let numbers = [5, 3, 8, 1, 2];
console.log(SumLowest(numbers));
