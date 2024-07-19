function esPerfecto(num) {
  let suma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      suma += i;
    }
  }
  return suma === num;
}

function Perfectos(num) {
  let listaPerfectos = [];
  let numero = 2;

  while (listaPerfectos.length < num) {
    if (esPerfecto(numero)) {
      listaPerfectos.push(numero);
    }
    numero++;
  }

  console.log(
    "Los primeros " +
      num +
      " números perfectos son: " +
      listaPerfectos.join(", ")
  );
}

Perfectos(4);
