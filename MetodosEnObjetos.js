let x = 10;
console.log(x.length);

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@mail.com",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

console.log(persona);

let persona2 = new Object();
persona2.tel = "644732237";

console.log(persona2.tel);
