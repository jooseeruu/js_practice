// Suma de dos cadenas convertidas a enteros
let a = "1";
let b = "2";
let suma = parseInt(a) + parseInt(b);
console.log("Suma de cadenas convertidas a enteros:", suma); // Salida: 3

// Concatenación de dos números convertidos a cadenas
let a12 = 1;
let b2 = 2;
let suma2 = a12.toString() + b2.toString();
console.log("Concatenación de números convertidos a cadenas:", suma2); // Salida: "12"

// Valor absoluto de un número negativo
let num = -10;
let valorabsoluto = Math.abs(num);
console.log("Valor absoluto de -10:", valorabsoluto); // Salida: 10

// Redondeo y truncado en JavaScript
let numero = 8.5;

// Redondeo
// Math.round() redondea al valor entero más cercano
// .5 o superior, redondea al valor entero superior más cercano
let redondeo = Math.round(numero);
console.log("Redondeo de 8.5:", redondeo); // Salida: 9

// Truncado
// Math.trunc() elimina la parte flotante (decimal)
let truncado = Math.trunc(numero);
console.log("Truncado de 8.5:", truncado); // Salida: 8
