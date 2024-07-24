function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return console.log("la suma de los números hasta " + num + " es " + sum);
}
summation(8);
