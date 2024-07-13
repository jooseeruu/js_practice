let libros = [
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    paginas: 1072,
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
  },
  { titulo: "Moby Dick", autor: "Herman Melville", paginas: 720 },
  { titulo: "1984", autor: "George Orwell", paginas: 268 },
  { titulo: "Ulises", autor: "James Joyce", paginas: 900 },
];

function solo_titulos(libros) {
  let titulos = libros.map((libro) => libro.titulo);
  console.log(titulos);
}
solo_titulos(libros);

function mas_paginas(libros) {
  let max = libros[0];
  for (let index = 1; index < libros.length; index++) {
    if (libros[index].paginas > max.paginas) {
      max = libros[index];
    }
  }
  console.log(max);
}
mas_paginas(libros);

function media_paginas(libros) {
  let total = libros.reduce((sum, libro) => sum + libro.paginas);
  let media = total / libros.length;
  console.log(media);
}
media_paginas(libros);

function mas_500(libros) {
  let librosMas500 = libros.filter((libro) => libro.paginas > 500);
  console.log(librosMas500);
}
mas_500(libros);
