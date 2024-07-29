function reverseWords(str) {
  let reverse = [];
  for (let index = 0; index < str.length; index++) {
    let word = str[index];
    let reversedWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    reverse.push(reversedWord);
  }
  return reverse;
}
console.log(reverseWords(["Manolo"]));
