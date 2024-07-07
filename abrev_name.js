function abbrevName(name) {
  let array = name.split(" ");
  let abbrev1 = "";
  let abbrev2 = "";

  for (let index = 0; index < array.length; index++) {
    if (index == 0) {
      abbrev1 = array[index][0];
    }
    if (index == 1) {
      abbrev2 = array[index][0];
    }
  }

  let abbrevName = abbrev1 + "." + abbrev2;
  abbrevName = abbrevName.toUpperCase();

  return abbrevName;
}

console.log(abbrevName("guzman ortiz"));
