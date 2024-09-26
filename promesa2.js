let pedirPizza = new Promise((resolve, reject) => {
  let exito = true; // Cambia esto a false para simular un fallo

  if (exito) {
    resolve("¡Pizza entregada!");
  } else {
    reject("Pedido fallido.");
  }
});

pedirPizza
  .then((mensaje) => {
    console.log(mensaje); // ¡Pizza entregada!
  })
  .catch((error) => {
    console.log(error); // Pedido fallido.
  });
