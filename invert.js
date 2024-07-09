function invert(array) {
  let nuevoArray = [];
  for (let index = 0; index < array.length; index++) {
    nuevoArray.push(-array[index]);
  }
  return nuevoArray;
}

console.log(invert([1, -2, -6, 4, 5]));
