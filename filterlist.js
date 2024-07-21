function filter_list(lista) {
  let numeros = lista.filter((item) => typeof item === "number");
  console.log(numeros);
}
filter_list([1, 2, "aasf", "1", "123", 123]);
