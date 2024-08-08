//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

Persona.prototype.tel = "644732234";

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
padre.tel = "644732232";
console.log(padre.tel);
console.log(padre.nombreCompleto());

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
madre.tel = "644732231";
console.log(madre.tel);
console.log(madre.nombreCompleto());

padre.nombre = "Carlos";

console.log(padre);
console.log(madre);

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function () {};
