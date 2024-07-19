function suma_natural() {
  let N = 5;
  let suma = 0;
  for (let index = 0; index < N; index++) {
    suma += index;
  }
  console.log("La suma de los primeros " + N + " números naturales es " + suma);
}
suma_natural();
