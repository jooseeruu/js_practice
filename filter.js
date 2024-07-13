function gestion_invitados(invitados) {
  let mayores_edad = invitados.filter((invitado) => invitado.edad >= 18);
  console.log(mayores_edad);
}

let invitados = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 23 },
  { nombre: "Carlos", edad: 16 },
  { nombre: "María", edad: 21 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "Carmen", edad: 19 },
];

gestion_invitados(invitados);
