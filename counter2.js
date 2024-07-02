function createCounter(init) {
  let value = init;
  return {
    increment: function () {
      value += 1;
      return value;
    },
    decrement: function () {
      value -= 1;
      return value;
    },
    reset: function () {
      value = init;
      return value;
    },
  };
}
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
