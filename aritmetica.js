function arithmetic(a, b, operator) {
  if (operator === "sumar") {
    return a + b;
  } else if (operator === "restar") {
    return a - b;
  } else {
    return "Operador no válido";
  }
}

console.log(arithmetic(5, 2, "sumar"));
console.log(arithmetic(5, 2, "restar"));
