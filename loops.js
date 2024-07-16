// While

let myCondition = 0;

while (myCondition < 10) {
  console.log(myCondition);
  myCondition += 2;
} // Es opcional
console.log("Mi condición es mayor o igual que 10");

console.log("La ejecución continúa");

while (myCondition < 20) {
  myCondition += 1;
  if (myCondition == 15) {
    console.log("Se detiene la ejecución");
    break;
  }
  console.log(myCondition);
}

console.log("La ejecución continúa");

// For

let myList = [35, 24, 62, 52, 30, 30, 17];

for (let element of myList) {
  console.log(element);
}

let myTuple = [35, 1.77, "Brais", "Moure", "Brais"];

for (let element of myTuple) {
  console.log(element);
}

let mySet = new Set(["Brais", "Moure", 35]);

for (let element of mySet) {
  console.log(element);
}

let myDict = { Nombre: "Brais", Apellido: "Moure", Edad: 35, 1: "Python" };

for (let element in myDict) {
  console.log(element);
  if (element == "Edad") {
    break;
  }
}
console.log("El bluce for para diccionario ha finalizado");

for (let element in myDict) {
  console.log(element);
  if (element == "Edad") {
    continue;
  }
  console.log("Se ejecuta");
}
console.log("El bluce for para diccionario ha finalizado");
