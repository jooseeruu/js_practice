function findShort(s) {
  let palabraCorta = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i].length < palabraCorta.length) {
      palabraCorta = s[i];
    }
  }

  return palabraCorta;
}

console.log(findShort(["banana", "cg", "brawl"]));
