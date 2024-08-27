class Persona {
  static Contador_Personas = 0;
  constructor(nombre, apellidos, edad) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._id = ++Persona.Contador_Personas;
  }
  get id() {
    return this._id;
  }
  get nombre() {
    return this._nombre;
  }
  get apellidos() {
    return this._apellidos;
  }
  get edad() {
    return this._edad;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  set apellidos(apellidos) {
    this._apellidos = apellidos;
  }

  set edad(edad) {
    this._edad = edad;
  }

  nombreCompleto() {
    return (
      this._id + " " + this._nombre + " " + this._apellidos + " " + this._edad
    );
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellidos, sueldo) {
    super(nombre, apellidos);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(nuevoSueldo) {
    this._sueldo = nuevoSueldo;
  }

  toString() {
    return `Empleado [ID: ${this._idEmpleado}, Nombre: ${this.nombre} ${this.apellidos}, Sueldo: ${this._sueldo}]`;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;

  constructor(nombre, apellidos, fechaRegistro) {
    super(nombre, apellidos);
    this._fechaRegistro = new Date(fechaRegistro);
    this._idCliente = ++Cliente.contadorClientes;
  }

  get idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(nuevaFecha) {
    this._fechaRegistro = new Date(nuevaFecha);
  }

  toString() {
    return `Cliente [ID: ${this._idCliente}, Nombre: ${this.nombre} ${
      this.apellidos
    }, Fecha de Registro: ${this._fechaRegistro.toDateString()}]`;
  }
}

let persona = new Persona("Mariano", "Diaz", 18);
let empleado1 = new Empleado("Maikol", "Perez", 3000);
let cliente1 = new Cliente("Luís", "Vaquer", "2024-02-22");
console.log(persona.nombreCompleto());
console.log(empleado1.toString());
console.log(cliente1.toString());
