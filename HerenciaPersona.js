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

  constructor(nombre, apellido, sueldo) {
    super(nombre, apellido);
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
}

let persona = new Persona("Mariano", "Diaz", 18);
console.log(persona.nombreCompleto());
