function findSmallestInt(arr) {
  smallest = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < smallest) {
      smallest = arr[index];
    }
  }
  console.log("El número más pequeño es " + smallest);
  return 0;
}

findSmallestInt([22, 4, 6, 8]);
