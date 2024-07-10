function accum(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var currentChar = s[i];
    result += currentChar.toUpperCase();
    for (var j = 0; j < i; j++) {
      result += currentChar.toLowerCase();
    }
    if (i < s.length - 1) {
      result += "-";
    }
  }
  return result;
}
console.log(accum("python"));
