// Definición
function myFunction() {
  console.log("Esto es una función");
}

myFunction();
myFunction();
myFunction();

// Función con parámetros de entrada/argumentos
function sumTwoValues(firstValue, secondValue) {
  console.log(firstValue + secondValue);
}

sumTwoValues(5, 7);
sumTwoValues(54754, 71231);
sumTwoValues("5", "7");
sumTwoValues(1.4, 5.2);

// Función con parámetros de entrada/argumentos y retorno
function sumTwoValuesWithReturn(firstValue, secondValue) {
  let mySum = firstValue + secondValue;
  return mySum;
}

let myResult = sumTwoValuesWithReturn(1.4, 5.2);
console.log(myResult);

myResult = sumTwoValuesWithReturn(10, 5);
console.log(myResult);

// Función con parámetros de entrada/argumentos por clave
function printName({ name, surname }) {
  console.log(`${name} ${surname}`);
}

printName({ surname: "Moure", name: "Brais" });

// Función con parámetros de entrada/argumentos por defecto
function printNameWithDefault(name, surname, alias = "Sin alias") {
  console.log(`${name} ${surname} ${alias}`);
}

printNameWithDefault("Brais", "Moure");
printNameWithDefault("Brais", "Moure", "MoureDev");

// Función con parámetros de entrada/argumentos arbitrarios
function printUpperTexts(...texts) {
  console.log(typeof texts);
  for (let text of texts) {
    console.log(text.toUpperCase());
  }
}

printUpperTexts("Hola", "Python", "MoureDev");
printUpperTexts("Hola");
