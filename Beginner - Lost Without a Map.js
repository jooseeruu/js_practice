function double(array) {
  let duplicados = [];
  for (let index = 0; index < array.length; index++) {
    let doblar = array[index] * 2;
    duplicados.push(doblar);
  }
  return duplicados;
}
console.log(double([2, 4, 6]));
