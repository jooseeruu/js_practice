function remove_space(string) {
  let new_string = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== " ") {
      new_string += string[index];
    }
  }
  console.log(new_string);
}
remove_space("hola guapo");
