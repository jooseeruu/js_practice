function expect(val) {
  return {
    to_be: function (val2) {
      if (val == val2) return console.log("equal");
      else return console.log("not equal");
    },
    not_to_be: function (val2) {
      if (val !== val2) return console.log("not equal");
      else return console.log("equal");
    },
  };
}

expect(5).to_be(5);
expect(4).to_be(5);
expect(5).not_to_be(5);
expect(4).not_to_be(5);
