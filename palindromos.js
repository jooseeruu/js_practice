//Dada una palabra tenemos que determinar si es un palíndromo.
//Palíndromo: palabra que se lee igual de izquierda a derecha que de derecha a izquierda
function espalindromo(str) {
  str = str.toLowerCase();
  const arrayStrings = str.split("");
  const reverseArray = arrayStrings.reverse();
  const palindromo_posible = reverseArray.join("");
  if (palindromo_posible == str) {
    return true;
  } else {
    return false;
  }
}
console.log(espalindromo("ana"));
