function findNeedle(haystack) {
  for (let index = 0; index < haystack.length; index++) {
    if (haystack[index] == "needle") {
      console.log("Elemendo encontrado en la posicion " + index + " del array");
    }
  }
}

findNeedle(["back", "front", "java", "python", "needle", "c++"]);
